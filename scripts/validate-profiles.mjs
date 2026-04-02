/**
 * 国別プロファイル バリデーションスクリプト
 *
 * countryProfiles.js の構造・データ品質を自動チェックする。
 * review-check.mjs と同じパターン（error/warn、exit code）を採用。
 *
 * ベースライン方式:
 *   既知の警告は scripts/validate-baseline.json に記録。
 *   ベースラインに含まれる違反 → warn（段階的修正対象）
 *   ベースラインに含まれない新規違反 → error（ビルド停止）
 *
 * Usage:
 *   node scripts/validate-profiles.mjs              # 通常バリデーション
 *   node scripts/validate-profiles.mjs --update-baseline  # ベースライン更新
 */

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

import {
  COUNTRY_PROFILES,
  COUNTRY_FLAG,
  REGION_ORDER,
} from "../src/data/countryProfiles.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const BASELINE_PATH = join(__dirname, "validate-baseline.json");
const updateBaseline = process.argv.includes("--update-baseline");

let errors = 0;
let warnings = 0;

// ベースライン読み込み
let baseline = new Set();
try {
  const raw = JSON.parse(readFileSync(BASELINE_PATH, "utf-8"));
  baseline = new Set(raw);
} catch {
  // ファイルがなければ空
}

// 今回検出されたベースライン対象の違反を収集
const currentViolations = new Set();

/**
 * ベースライン対応の報告関数。
 * ベースラインに含まれる既知違反 → warn
 * ベースラインに含まれない新規違反 → error
 */
function baselined(code, ruleId, detail) {
  const key = `${code}|${ruleId}|${detail}`;
  currentViolations.add(key);
  if (baseline.has(key)) {
    console.warn(`⚠️  [${code}] (既知) ${detail}`);
    warnings++;
  } else {
    console.error(`❌ [${code}] ${detail}`);
    errors++;
  }
}

function error(code, msg) {
  console.error(`❌ [${code}] ${msg}`);
  errors++;
}

function warn(code, msg) {
  console.warn(`⚠️  [${code}] ${msg}`);
  warnings++;
}

// ---------------------------------------------------------------------------
// 定義
// ---------------------------------------------------------------------------

const REQUIRED_KEYS = [
  "code", "country", "countryEn", "region", "flag",
  "legalSystemOverview", "authorities", "notifiedBodies",
  "deviceDefinition", "primaryLaw", "implementingRegulations",
  "relatedLaws", "classification", "conformityAssessment",
  "electronicSubmission", "udi", "postMarket",
  "certificateOfFreeSale", "reimbursement", "marketingRules",
  "mdsap", "internationalStandards", "recentDevelopments",
  "lastUpdated", "verified",
];

/** URL フィールドを再帰的に収集 */
function collectUrls(obj, path = "") {
  const results = [];
  if (obj == null) return results;
  if (typeof obj === "string" && path.endsWith(".url")) {
    results.push({ path, value: obj });
  } else if (Array.isArray(obj)) {
    obj.forEach((item, i) =>
      results.push(...collectUrls(item, `${path}[${i}]`))
    );
  } else if (typeof obj === "object") {
    for (const [k, v] of Object.entries(obj)) {
      results.push(...collectUrls(v, path ? `${path}.${k}` : k));
    }
  }
  return results;
}

/** URLがドメインルート（パスなし）かどうか判定 */
function isDomainRootOnly(url) {
  try {
    const u = new URL(url);
    return u.pathname === "/" || u.pathname === "";
  } catch {
    return false;
  }
}

/**
 * ドメインルートでも正当なURLのホワイトリスト。
 * ログイン型ポータルなど、トップページ以外に公開ページがないシステム。
 */
const DOMAIN_ROOT_WHITELIST = new Set([
  "e-watch-alkes.kemkes.go.id",
  "esuka.kemkes.go.id",
  "regalkes.kemkes.go.id",
  "privus.fda.moph.go.th",
  "imda.moh.gov.vn",
  "dmec.moh.gov.vn",
  "zwfw.nmpa.gov.cn",
]);

/** classification.classes の name から先頭の命名パターンを抽出 */
function classNamingPattern(name) {
  const m = name.match(/^(Class|Group|Category|クラス|グループ|カテゴリ)/i);
  return m ? m[1] : null;
}

// ---------------------------------------------------------------------------
// グローバルチェック
// ---------------------------------------------------------------------------

const seenCodes = new Set();
for (const p of COUNTRY_PROFILES) {
  if (seenCodes.has(p.code)) {
    error(p.code, `code "${p.code}" が重複しています`);
  }
  seenCodes.add(p.code);
}

// ---------------------------------------------------------------------------
// プロファイルごとのチェック
// ---------------------------------------------------------------------------

for (const p of COUNTRY_PROFILES) {
  const code = p.code ?? "???";

  // === 構造チェック (error — 常に) ===

  // S1: 必須キーの存在
  for (const key of REQUIRED_KEYS) {
    if (!(key in p)) {
      error(code, `必須キー "${key}" がありません`);
    }
  }

  // S2: authorities のネスト構造チェック
  if (Array.isArray(p.authorities)) {
    if (!p.authorities.some((a) => a.isPrimary === true)) {
      error(code, "authorities に isPrimary: true が1つもありません");
    }
    for (const [i, a] of p.authorities.entries()) {
      for (const k of ["name", "fullName", "role"]) {
        if (!a[k]) error(code, `authorities[${i}].${k} が空です`);
      }
      if (!a.url) {
        if (a.isPrimary) {
          error(code, `authorities[${i}].url が空です（主管当局にはURL必須）`);
        } else {
          warn(code, `authorities[${i}].url が空です`);
        }
      }
    }
  } else {
    error(code, "authorities が配列ではありません");
  }

  // S3: classification.classes のネスト構造チェック
  if (p.classification?.classes?.length) {
    for (const [i, cls] of p.classification.classes.entries()) {
      for (const k of ["name", "nameJa", "riskLevel", "description", "approvalPath"]) {
        if (!cls[k]) error(code, `classification.classes[${i}].${k} が空です`);
      }
      if (!cls.examples?.length) {
        warn(code, `classification.classes[${i}].examples が空です`);
      }
    }
  } else {
    error(code, "classification.classes が空です");
  }

  // S4: conformityAssessment.routes のネスト構造チェック
  if (p.conformityAssessment?.routes?.length) {
    for (const [i, route] of p.conformityAssessment.routes.entries()) {
      for (const k of ["name", "nameJa", "description", "url"]) {
        if (!route[k]) error(code, `conformityAssessment.routes[${i}].${k} が空です`);
      }
      if (!route.applicableClasses?.length) {
        warn(code, `conformityAssessment.routes[${i}].applicableClasses が空です`);
      }
      // S4b: 高リスク値（審査期間・手数料）の出典チェック
      const UNVERIFIED = /要確認|未公開|公式情報なし|unverified|N\/A/i;
      if (route.avgReviewTime && !UNVERIFIED.test(route.avgReviewTime)) {
        if (!route.avgReviewTimeSource) {
          baselined(code, "source-avgReviewTime", `routes[${i}].avgReviewTime に具体値がありますが avgReviewTimeSource（出典）がありません`);
        }
      }
      if (route.fee && !UNVERIFIED.test(route.fee)) {
        if (!route.feeSource) {
          baselined(code, "source-fee", `routes[${i}].fee に具体値がありますが feeSource（出典）がありません`);
        }
      }
    }
  } else {
    error(code, "conformityAssessment.routes が空です");
  }

  // S5: recentDevelopments のネスト構造チェック
  if (p.recentDevelopments?.length) {
    for (const [i, rd] of p.recentDevelopments.entries()) {
      for (const k of ["date", "title", "description"]) {
        if (!rd[k]) error(code, `recentDevelopments[${i}].${k} が空です`);
      }
    }
  } else {
    error(code, "recentDevelopments が空です");
  }

  // S5b: primaryLaw の必須フィールド
  if (p.primaryLaw) {
    for (const k of ["title", "enacted", "url", "description"]) {
      if (!p.primaryLaw[k]) error(code, `primaryLaw.${k} が空です`);
    }
  }

  // S6: COUNTRY_FLAG に対応するコードがあるか
  if (!(code in COUNTRY_FLAG)) {
    error(code, `COUNTRY_FLAG に "${code}" が登録されていません`);
  }

  // S7: region が REGION_ORDER に含まれるか
  if (p.region && !REGION_ORDER.includes(p.region)) {
    error(code, `region "${p.region}" が REGION_ORDER に含まれていません`);
  }

  // === URL 品質チェック (baselined) ===

  const urls = collectUrls(p);

  // U1: URL フィールドが http(s):// で始まるか
  for (const { path, value } of urls) {
    if (!value) {
      warn(code, `${path} が空です`);
    } else if (!/^https?:\/\//.test(value)) {
      warn(code, `${path} が http(s):// で始まっていません: "${value}"`);
    }
  }

  // U2: 同一URLの使い回し検出
  const urlCounts = new Map();
  for (const { value } of urls) {
    if (value) urlCounts.set(value, (urlCounts.get(value) || 0) + 1);
  }
  for (const [url, count] of urlCounts) {
    if (count >= 3) {
      baselined(code, "url-reuse", `URL "${url}" が ${count} 箇所で使い回されています`);
    }
  }

  // U3: ドメインルートURL検出
  const SPECIFIC_URL_FIELDS = [
    "primaryLaw.url",
    /^implementingRegulations\[\d+\]\.url$/,
    /^relatedLaws\[\d+\]\.url$/,
    "electronicSubmission.url",
    "udi.url",
    "postMarket.adverseEventReporting.url",
    "postMarket.recalls.url",
    "certificateOfFreeSale.url",
    "reimbursement.url",
  ];
  for (const { path, value } of urls) {
    if (!value) continue;
    const shouldBeSpecific = SPECIFIC_URL_FIELDS.some((pattern) =>
      pattern instanceof RegExp ? pattern.test(path) : path === pattern
    );
    const isWhitelisted = (() => {
      try { return DOMAIN_ROOT_WHITELIST.has(new URL(value).hostname); }
      catch { return false; }
    })();
    if (shouldBeSpecific && isDomainRootOnly(value) && !isWhitelisted) {
      baselined(code, "url-domain-root", `${path} がドメインルート "${value}" のみです`);
    }
  }

  // U4: 法令URLに非公式ソースが使われていないか
  //     primaryLaw.url, implementingRegulations[].url, relatedLaws[].url は
  //     公式（政府・当局）ドメインが望ましい。業界コンサル等は warn。
  const UNOFFICIAL_DOMAINS = [
    "asiaactual.com", "emergobyul.com", "pureglobal.com", "cisema.com",
    "andamanmed.com", "elendilabs.com", "insightof.id", "pacificbridgemedical.com",
    "medgate.vn", "greennrj.com.vn", "emerhub.com", "artixio.com",
    "md.sunflare.com", "trustedtracemed.com", "pmc.ncbi.nlm.nih.gov",
  ];
  const OFFICIAL_URL_FIELDS = [
    "primaryLaw.url",
    /^implementingRegulations\[\d+\]\.url$/,
    /^relatedLaws\[\d+\]\.url$/,
  ];
  for (const { path, value } of urls) {
    if (!value) continue;
    const shouldBeOfficial = OFFICIAL_URL_FIELDS.some((pattern) =>
      pattern instanceof RegExp ? pattern.test(path) : path === pattern
    );
    if (shouldBeOfficial) {
      try {
        const hostname = new URL(value).hostname;
        if (UNOFFICIAL_DOMAINS.some((d) => hostname === d || hostname.endsWith("." + d))) {
          baselined(code, "url-unofficial", `${path} に非公式ソース "${hostname}" が使用されています。公式法令データベースのURLを優先してください`);
        }
      } catch { /* invalid URL — caught by U1 */ }
    }
  }

  // === データ品質チェック (warn) ===

  // W1: lastUpdated が ISO 日付形式 (YYYY-MM-DD) か
  if (p.lastUpdated && !/^\d{4}-\d{2}-\d{2}$/.test(p.lastUpdated)) {
    warn(code, `lastUpdated が YYYY-MM-DD 形式ではありません: "${p.lastUpdated}"`);
  }

  // W2: classification.classes の name が国内で命名統一されているか
  if (p.classification?.classes?.length > 1) {
    const patterns = new Set();
    for (const cls of p.classification.classes) {
      const pat = classNamingPattern(cls.name);
      if (pat) patterns.add(pat.toLowerCase());
    }
    if (patterns.size > 1) {
      warn(code, `classification.classes の命名が混在しています: ${[...patterns].join(", ")}`);
    }
  }

  // W3: applicableClasses が classification.classes.name と整合するか
  if (p.classification?.classes && p.conformityAssessment?.routes) {
    const validClassNames = new Set(p.classification.classes.map((c) => c.name));
    for (const route of p.conformityAssessment.routes) {
      if (!route.applicableClasses) continue;
      for (const ac of route.applicableClasses) {
        if (!validClassNames.has(ac)) {
          const isSpecial = /全クラス|全て|all|未認可|unregistered|unlicensed/i.test(ac);
          const isSubstring = [...validClassNames].some(
            (name) => ac.includes(name) || name.includes(ac)
          );
          if (!isSpecial && !isSubstring) {
            warn(code, `route "${route.name}" の applicableClasses "${ac}" が classification.classes に見つかりません`);
          }
        }
      }
    }
  }

  // W4: MDSAP status の整合性チェック
  if (p.mdsap?.status) {
    const VALID_MDSAP = [
      /参加国.*Regulatory Authority/,
      /Affiliate Member/,
      /オブザーバー.*Observer/i,
      /協力会員.*Affiliate/,
      /非参加/,
    ];
    const statusOk = VALID_MDSAP.some((re) => re.test(p.mdsap.status));
    if (!statusOk) {
      warn(code, `mdsap.status "${p.mdsap.status}" が標準的な参加形態表記と一致しません（参加国/Affiliate Member/Observer/非参加）`);
    }
  }

  // W5: primaryLaw.title に和文説明が混入していないか
  if (p.primaryLaw?.title && /（[ぁ-んァ-ヶ一-龠]/.test(p.primaryLaw.title)) {
    warn(code, `primaryLaw.title に和文説明が含まれています。正式名称のみにし、説明はdescriptionへ: "${p.primaryLaw.title.substring(0, 50)}..."`);
  }

  // W6: primaryLaw.enacted / lastAmended の日付フォーマット
  for (const field of ["enacted", "lastAmended"]) {
    const val = p.primaryLaw?.[field];
    if (val && typeof val === "string") {
      const isDate = /^\d{4}(-\d{2}(-\d{2})?)?$/.test(val);
      const isText = /[^\d-]/.test(val);
      if (!isDate && !isText) {
        warn(code, `primaryLaw.${field} の形式が不明です: "${val}"`);
      }
    }
  }
}

// ---------------------------------------------------------------------------
// ベースライン更新モード
// ---------------------------------------------------------------------------

if (updateBaseline) {
  const sorted = [...currentViolations].sort();
  writeFileSync(BASELINE_PATH, JSON.stringify(sorted, null, 2) + "\n", "utf-8");
  console.log(`\nベースラインを更新しました: ${sorted.length} 件 → ${BASELINE_PATH}`);
  process.exit(0);
}

// ---------------------------------------------------------------------------
// 結果出力
// ---------------------------------------------------------------------------

console.log("");
console.log(`プロファイル バリデーション完了: ${COUNTRY_PROFILES.length} プロファイル`);
console.log(`  エラー: ${errors} 件`);
console.log(`  警告: ${warnings} 件`);
console.log(`  ベースライン既知: ${baseline.size} 件`);

if (errors > 0) {
  console.error("\n❌ エラーがあります。修正してからコミットしてください。");
  process.exit(1);
}

if (warnings > 0) {
  console.warn("\n⚠️  警告があります。確認してください。");
}

process.exit(0);
