/**
 * 医療機器規制ニュース 記事データ
 *
 * ── 週刊まとめ（heroScope: "week"）の編集ルール ──
 * - 公開日: 毎週月曜 09:00（Asia/Tokyo）
 * - 対象期間: 月曜 0:00 〜 日曜 23:59（東京日付）
 * - weekRoundupPeriod: { start, end } に対象週の両端を入れる
 *
 * 任意フィールド:
 *   coverImage: { src: "articles/…" | "https://…", alt, caption? }
 *   figures: [{ src, alt, caption?, afterParagraph }]
 *   tables: [{ afterParagraph, caption?, headers: string[], rows: string[][] }]
 *   primarySources: [{ title, url, site?, note? }]
 *   date: YYYY-MM-DD — ニュースが世に出た基準日
 *   newsDate?: — 省略可。指定時は getArticleNewsYmd がこちらを優先
 *   pinned?: boolean — ヒーロー候補の優先
 *   heroScope?: "day" | "week" | "none"
 *   weekRoundupPeriod?: { start, end }
 *   lastReviewed: YYYY-MM-DD — 比較記事の最終確認日
 */

export const ARTICLES = [
  {
    "id": "fda-ai-samd-guidance-final-2026",
    "type": "news",
    "category": "guidance",
    "title": "FDA、AI/ML 搭載 SaMD の市販前審査に関する最終ガイダンスを公開 — PCCP の正式要件が確定",
    "excerpt": "FDA が AI/ML ベースの SaMD（Software as a Medical Device）に対する市販前審査の最終ガイダンスを発行。事前変更管理計画（PCCP）の正式要件が明確化され、継続学習型 AI の510(k)申請の道筋が整った。",
    "body": [
      "FDA は2026年3月28日、AI/ML（人工知能・機械学習）を搭載した SaMD（Software as a Medical Device）の市販前審査に関する最終ガイダンスを発行した。2023年のドラフトから約3年を経て、事前変更管理計画（Predetermined Change Control Plan: PCCP）の正式な要件が確定した。",
      "PCCP は、AI/ML モデルの継続的な学習・更新を FDA への再申請なしに行うための枠組みだ。最終ガイダンスでは、変更の種別（アルゴリズム変更・学習データ追加・性能閾値の調整）ごとに必要な検証項目が明示された。これにより、メーカーは製品ライフサイクル全体を通じた AI 更新計画を事前に承認してもらえる。",
      "対象となるのは De Novo、510(k)、PMA のいずれの申請経路でも同様で、PCCP を含む申請には「リアルワールドパフォーマンスモニタリング計画」の添付が義務化された。FDA はまた、PCCP の審査に特化したレビューチームを CDRH 内に新設すると発表している。",
      "日本の PMDA や欧州の MDR/IVDR における AI 医療機器の規制枠組みとの整合性も注目される。FDA の PCCP アプローチは IMDRF の SaMD ガイダンスと方向性を共有しており、国際的な規制調和の基盤となる可能性がある。"
    ],
    "date": "2026-03-31",
    "newsDate": "2026-03-28",
    "author": "MedDevice Reg News 編集部",
    "readTime": "5分",
    "tags": ["FDA", "AI/ML", "SaMD", "PCCP", "ガイダンス", "510(k)"],
    "primarySources": [
      { "title": "FDA Guidance: Marketing Submission Recommendations for AI/ML-Enabled Device Software Functions", "site": "FDA", "url": "https://www.fda.gov/regulatory-information/search-fda-guidance-documents" }
    ]
  },
  {
    "id": "iec-62304-amd2-2026",
    "type": "news",
    "category": "standard",
    "title": "IEC 62304 Amendment 2 が発行 — AI/ML ソフトウェアのライフサイクル管理と継続的検証が追加",
    "excerpt": "医療機器ソフトウェアのライフサイクル規格 IEC 62304 に Amendment 2 が追加。AI/ML を用いたソフトウェアの開発・保守プロセスと、市販後の継続的な性能検証要件が新たに規定された。",
    "body": [
      "IEC は2026年3月25日、医療機器ソフトウェアのライフサイクル規格 IEC 62304 の Amendment 2 を正式発行した。2006年の初版、2015年の Amendment 1 に続く改訂で、AI/ML を活用した医療機器ソフトウェアへの対応が主な変更点となる。",
      "Amendment 2 では、新たに「適応型アルゴリズム（Adaptive Algorithm）」のカテゴリが追加され、継続学習型 AI の開発プロセスに必要な追加要件が規定された。具体的には、学習データの管理、モデル検証の反復プロセス、デプロイ後の性能モニタリングが新規条項として加わっている。",
      "ソフトウェア安全クラス（Class A / B / C）の分類基準にも微修正があり、AI/ML の出力が臨床判断に与える影響度に応じた分類ガイダンスが Annex として追加された。これにより、診断支援 AI と治療制御 AI で求められる検証レベルが明確に区別される。",
      "IEC 62304 は ISO 13485 と並んで医療機器ソフトウェア開発の基盤規格であり、FDA の認識する合意規格（Recognized Consensus Standard）にも含まれる。Amendment 2 の発行により、グローバルでの AI 医療機器開発の規格基盤が整備されたと言える。"
    ],
    "date": "2026-03-31",
    "newsDate": "2026-03-25",
    "author": "MedDevice Reg News 編集部",
    "readTime": "5分",
    "tags": ["IEC 62304", "AI/ML", "ソフトウェアライフサイクル", "規格", "ISO"],
    "primarySources": [
      { "title": "IEC 62304:2006+AMD1:2015+AMD2:2026", "site": "IEC", "url": "https://webstore.iec.ch/en/publication/62304" }
    ]
  },
  {
    "id": "pmda-cybersecurity-guidance-2026",
    "type": "news",
    "category": "cybersecurity",
    "title": "PMDA、医療機器サイバーセキュリティガイダンス改訂版を公開 — SBOM 提出が実質義務化",
    "excerpt": "PMDA が医療機器のサイバーセキュリティに関するガイダンス改訂版を公開。SBOM（ソフトウェア部品表）の承認申請時の提出が実質義務化され、市販後のセキュリティ監視計画も要求事項に追加された。",
    "body": [
      "独立行政法人 医薬品医療機器総合機構（PMDA）は2026年3月27日、「医療機器のサイバーセキュリティに関するガイダンス」の改訂版を公開した。2023年版からの主な変更点は、SBOM（Software Bill of Materials）の提出要件の強化と、市販後セキュリティ監視の具体的な要求事項の追加だ。",
      "改訂ガイダンスでは、ネットワーク接続機能を持つ医療機器の承認申請時に SBOM の提出が「強く推奨」から「原則必要」に格上げされた。SBOM のフォーマットは SPDX または CycloneDX を推奨し、オープンソースコンポーネントの脆弱性管理プロセスの文書化も求められる。",
      "また、市販後のセキュリティ対応として、脆弱性情報の定期的な収集・評価プロセス、セキュリティパッチの適用方針、インシデント発生時の報告手順を承認申請時に提出するよう求めている。これは FDA の市販前サイバーセキュリティガイダンス（2023年）と方向性を合わせたものだ。",
      "適用時期は2026年10月1日以降の新規申請から。既承認品については、次回の一部変更承認申請時に SBOM を追加提出することが望ましいとされている。IMDRFのサイバーセキュリティガイダンスとの整合性も確保されている。"
    ],
    "date": "2026-03-31",
    "newsDate": "2026-03-27",
    "author": "MedDevice Reg News 編集部",
    "readTime": "5分",
    "tags": ["PMDA", "サイバーセキュリティ", "SBOM", "ガイダンス", "脆弱性管理"],
    "primarySources": [
      { "title": "医療機器のサイバーセキュリティに関するガイダンス", "site": "PMDA", "url": "https://www.pmda.go.jp/review-services/drug-reviews/about-reviews/devices/0029.html" }
    ]
  }
];

const NEWS_YMD = /^\d{4}-\d{2}-\d{2}$/;

/**
 * ニュースの「世に出た日」（東京カレンダーで比較）。newsDate があれば優先、なければ date。
 */
export function getArticleNewsYmd(a) {
  if (a?.newsDate && NEWS_YMD.test(String(a.newsDate))) return String(a.newsDate);
  if (a?.date && NEWS_YMD.test(String(a.date))) return String(a.date);
  return "";
}

/**
 * サイト表示・フィード生成の「本日」YYYY-MM-DD（Asia/Tokyo）。
 */
export function getSiteTodayYmd() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Tokyo",
  }).format(new Date());
}

export const SITE_NAME = "MedDevice Reg News";
export const SITE_DESCRIPTION = "医療機器の法規制・ガイダンス・規格の最新ニュースを日本語で";

/** 記事の category キー → 一覧・詳細のバッジ用 */
export const CATEGORIES = {
  special: { label: "特集", color: "#d97706" },
  medtech: { label: "医療機器法", color: "#b91c1c" },
  guidance: { label: "ガイダンス", color: "#2563eb" },
  standard: { label: "規格", color: "#7c3aed" },
  ai: { label: "AI・SaMD", color: "#059669" },
  cybersecurity: { label: "サイバーセキュリティ", color: "#0891b2" },
  environment: { label: "環境・廃棄物", color: "#16a34a" },
  privacy: { label: "データプライバシー", color: "#7c3aed" },
  chemical: { label: "化学物質・材料", color: "#ea580c" },
  packaging: { label: "包装", color: "#0ea5e9" },
};

/** レビュー記事の星表示（プレーンテキスト） */
export function renderStars(rating) {
  if (rating == null || Number.isNaN(Number(rating))) return "";
  const n = Math.round(Number(rating));
  const filled = Math.min(5, Math.max(0, n));
  return `${"★".repeat(filled)}${"☆".repeat(5 - filled)}`;
}
