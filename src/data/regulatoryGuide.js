/**
 * 医療機器規制の基礎知識ガイド
 * 用語集・セットアップガイド・参考リンクなど
 */

/* ── セクション定義 ── */
export const GUIDE_SECTIONS = [
  { id: "basics", label: "規制の基礎" },
  { id: "glossary", label: "用語集" },
  { id: "standards", label: "主要規格" },
  { id: "pathway", label: "申請経路" },
];

/* ── 医療機器規制とは ── */
export const VIBE_CODING_DEFINITION = {
  title: "医療機器規制の基礎知識",
  summary:
    "医療機器は患者の安全に直結するため、各国の規制当局が厳格な審査・監視を行います。ここでは主要な規制枠組み、申請経路、必須規格の概要を解説します。",
  sections: [
    {
      heading: "なぜ規制が必要か",
      body: "医療機器は人体に直接的または間接的に作用するため、安全性と有効性の確保が不可欠です。各国の規制当局（FDA、PMDA、EMA 等）が市販前の審査と市販後の監視を通じて、患者と使用者を保護しています。",
    },
    {
      heading: "主要な規制枠組み",
      body: "米国では FD&C Act に基づく FDA の規制体系、日本では薬機法に基づく PMDA の審査体系、EU では MDR（Medical Device Regulation, 2017/745）が適用されます。国際的には IMDRF が規制調和を推進しています。",
    },
    {
      heading: "クラス分類",
      body: "医療機器はリスクに応じてクラス分類されます。米国では Class I（低リスク）〜 Class III（高リスク）、日本では一般（クラスI）〜高度管理医療機器（クラスIV）に分類され、クラスが高いほど厳格な審査が求められます。",
    },
  ],
};

/* ── 用語集 ── */
export const GLOSSARY_BY_GENRE = {
  "規制・法令": [
    { term: "薬機法", reading: "やっきほう", desc: "医薬品、医療機器等の品質、有効性及び安全性の確保等に関する法律。日本の医療機器規制の根拠法。" },
    { term: "FD&C Act", reading: "エフディーアンドシーアクト", desc: "Federal Food, Drug, and Cosmetic Act。米国の医療機器規制の根拠法。" },
    { term: "MDR", reading: "エムディーアール", desc: "Medical Device Regulation (EU) 2017/745。EU の医療機器規制。2021年5月から完全適用。" },
    { term: "IVDR", reading: "アイブイディーアール", desc: "In Vitro Diagnostic Regulation (EU) 2017/746。EU の体外診断用医療機器規制。" },
    { term: "QMS", reading: "キューエムエス", desc: "Quality Management System（品質マネジメントシステム）。ISO 13485 が医療機器向けの国際規格。" },
  ],
  "申請・審査": [
    { term: "510(k)", reading: "ファイブテンケー", desc: "FDA への市販前届出。実質的同等性（Substantial Equivalence）を示す申請経路。" },
    { term: "PMA", reading: "ピーエムエー", desc: "Premarket Approval。Class III 機器に必要な最も厳格な FDA 承認経路。" },
    { term: "De Novo", reading: "デノボ", desc: "前例のない低〜中リスク機器向けの FDA 申請経路。新規分類を伴う。" },
    { term: "CE マーキング", reading: "シーイーマーキング", desc: "EU 市場への適合性表示。Notified Body による適合性評価が必要。" },
    { term: "PCCP", reading: "ピーシーシーピー", desc: "Predetermined Change Control Plan。AI/ML 医療機器の事前変更管理計画。" },
  ],
  "ソフトウェア・AI": [
    { term: "SaMD", reading: "サムディー", desc: "Software as a Medical Device。ハードウェア医療機器の一部ではなく、それ自体が医療機器であるソフトウェア。" },
    { term: "SiMD", reading: "シムディー", desc: "Software in a Medical Device。ハードウェア医療機器に組み込まれたソフトウェア。" },
    { term: "IEC 62304", reading: "アイイーシー62304", desc: "医療機器ソフトウェアのライフサイクルプロセスに関する国際規格。" },
    { term: "SBOM", reading: "エスボム", desc: "Software Bill of Materials（ソフトウェア部品表）。使用しているソフトウェアコンポーネントの一覧。" },
  ],
  "安全・リスク": [
    { term: "ISO 14971", reading: "アイエスオー14971", desc: "医療機器のリスクマネジメントに関する国際規格。リスク分析・評価・管理のプロセスを規定。" },
    { term: "CAPA", reading: "キャパ", desc: "Corrective and Preventive Action（是正処置・予防処置）。品質問題への体系的な対応プロセス。" },
    { term: "MDR（報告）", reading: "エムディーアール", desc: "Medical Device Report。米国での有害事象報告制度。" },
    { term: "リコール", reading: "リコール", desc: "市場に出た医療機器の安全性問題に対する是正措置。Class I（重大）〜 Class III（軽微）に分類。" },
  ],
};

/* ── セットアップガイド（規制情報の入手方法） ── */
export const VIBE_SETUP_GUIDE = {
  title: "規制情報の入手ガイド",
  steps: [
    {
      heading: "FDA の情報源",
      body: "FDA のガイダンス文書は fda.gov/regulatory-information/search-fda-guidance-documents で検索可能。Federal Register での最終規則・提案規則も重要。510(k) データベースで過去の承認事例を調査できる。",
    },
    {
      heading: "PMDA / 厚労省の情報源",
      body: "PMDA の通知・事務連絡は pmda.go.jp で公開。厚生労働省の法令・通知も確認が必要。医療機器の承認情報は PMDA の審査報告書で公開される。",
    },
    {
      heading: "規格の入手",
      body: "ISO・IEC 規格は各団体のウェブストア（iso.org、webstore.iec.ch）で購入可能。JIS 規格は日本規格協会（JSA）のサイトで閲覧・購入できる。",
    },
    {
      heading: "国際動向の把握",
      body: "IMDRF の公開文書（imdrf.org）で国際的な規制調和の動向を確認。MDSAP（Medical Device Single Audit Program）参加国の情報も重要。",
    },
  ],
};

/* ── メディアガイドイントロ ── */
export const MEDIA_GUIDE_INTRO = {
  title: "医療機器規制の最新動向",
  body: "AI/ML、サイバーセキュリティ、国際規制調和など、医療機器規制は急速に進化しています。このサイトでは、法改正・ガイダンス発行・規格改訂の最新情報を日本語でわかりやすくお届けします。",
};

/* ── 参考リンク ── */
export const TOOL_REFERENCES = [
  { name: "FDA CDRH", url: "https://www.fda.gov/about-fda/fda-organization/center-devices-and-radiological-health", desc: "米国 FDA 医療機器・放射線保健センター" },
  { name: "PMDA 医療機器", url: "https://www.pmda.go.jp/review-services/drug-reviews/about-reviews/devices/0001.html", desc: "PMDA 医療機器審査" },
  { name: "EU MDR", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32017R0745", desc: "EU 医療機器規則 2017/745" },
  { name: "IMDRF", url: "https://www.imdrf.org/documents", desc: "国際医療機器規制当局フォーラム 公開文書" },
  { name: "IEC 62304", url: "https://webstore.iec.ch/en/publication/62304", desc: "医療機器ソフトウェアライフサイクル規格" },
  { name: "ISO 13485", url: "https://www.iso.org/standard/59752.html", desc: "医療機器 品質マネジメントシステム" },
];

/* ── App.jsx 互換エクスポート ── */

/** 基本ルール（規制遵守の基本原則） */
export const VIBE_BASIC_RULES_LEAD = "医療機器を市場に出すための基本的な規制要件を理解しましょう。";
export const VIBE_BASIC_RULES = [
  { label: "設計管理", body: "FDA 21 CFR 820.30 および ISO 13485 に基づく設計管理プロセスの実施が必要。設計入力・出力・検証・バリデーションを文書化する。" },
  { label: "リスクマネジメント", body: "ISO 14971 に基づき、製品ライフサイクル全体を通じたリスク分析・評価・管理を実施する。" },
  { label: "品質マネジメント", body: "ISO 13485 に準拠した QMS を構築・維持し、定期的な内部監査を実施する。" },
];

/** 実践ガイド（申請経路の選択） */
export const VIBE_CODING_PRACTICAL = {
  title: "申請経路の選び方",
  lead: "米国 FDA への申請経路は、機器のクラス分類と前例の有無によって決まります。",
  sections: [
    { heading: "510(k) — 実質的同等性", body: "Class II 機器の多くが該当。既存の承認済み機器（Predicate Device）との実質的同等性を示す。審査期間は通常90日。" },
    { heading: "De Novo — 新規分類", body: "前例のない低〜中リスク機器向け。新しい機器分類の作成を伴う。AI/ML 搭載の新規 SaMD でよく利用される。" },
    { heading: "PMA — 市販前承認", body: "Class III 機器に必要。臨床試験データを含む最も厳格な審査。審査期間は180日以上。" },
  ],
};

/** よくある落とし穴 */
export const VIBE_GUIDE_PITFALLS = {
  title: "規制対応でよくある落とし穴",
  lead: "医療機器の規制対応で陥りがちなミスと、その回避策を紹介します。",
  terms: [
    { term: "クラス分類の誤り", desc: "自社製品のクラス分類を誤ると、申請経路全体がやり直しになる。FDA の Product Classification Database で事前確認を。" },
    { term: "設計管理の後付け", desc: "開発完了後に設計管理文書を作成するのは NG。設計プロセスと並行して文書化を進める。" },
    { term: "Predicate Device の選定ミス", desc: "510(k) では適切な Predicate Device の選定が審査の成否を左右する。Intended Use と技術特性の両面で比較する。" },
    { term: "サイバーセキュリティの後回し", desc: "FDA は市販前申請時にサイバーセキュリティ対策の文書提出を要求。開発初期からの組み込みが必要。" },
  ],
};

/** メディア分類（規制カテゴリの解説） */
export const VIBE_MEDIA_TAXONOMY = [
  { heading: "法規制", body: "各国の医療機器に関する法律・規則の改正情報。薬機法、FD&C Act、MDR/IVDR など。" },
  { heading: "ガイダンス", body: "規制当局が発行するガイダンス文書。法的拘束力はないが、審査の判断基準として重要。" },
  { heading: "規格", body: "ISO、IEC 等の国際規格の新規発行・改訂情報。適合性評価の基盤。" },
  { heading: "サイバーセキュリティ", body: "医療機器のネットワークセキュリティ、SBOM、脆弱性管理に関する規制動向。" },
];

/* ── フィルタ関数（検索用） ── */
function _match(text, q) {
  if (!q) return true;
  const lower = (text || "").toLowerCase();
  return q.toLowerCase().split(/\s+/).every((w) => lower.includes(w));
}

export function filterVibeCodingGuide(query) {
  if (!query) return VIBE_CODING_DEFINITION.sections;
  return VIBE_CODING_DEFINITION.sections.filter((s) => _match(s.heading + s.body, query));
}

export function filterMediaGuide(query) {
  if (!query) return VIBE_MEDIA_TAXONOMY;
  return VIBE_MEDIA_TAXONOMY.filter((s) => _match(s.heading + s.body, query));
}

export function filterGlossaryGuide(query) {
  if (!query) return GLOSSARY_BY_GENRE;
  const result = {};
  for (const [genre, terms] of Object.entries(GLOSSARY_BY_GENRE)) {
    const filtered = terms.filter((t) => _match(t.term + t.reading + t.desc, query));
    if (filtered.length > 0) result[genre] = filtered;
  }
  return result;
}

export function filterToolReference(query, tab) {
  let refs = TOOL_REFERENCES;
  if (query) refs = refs.filter((r) => _match(r.name + r.desc, query));
  return refs;
}
