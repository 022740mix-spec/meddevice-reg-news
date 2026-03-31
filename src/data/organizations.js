/**
 * 規制当局・標準化団体・業界団体データ
 * 記事に登場する組織を網羅。表示順は名称でソート。
 */

export const COMPANIES_DISCLAIMER =
  "掲載情報は公開資料に基づく参考情報です。最新の正確な情報は各機関の公式サイトでご確認ください。";

export const AI_COMPANIES = [
  {
    id: "fda",
    name: "FDA（米国食品医薬品局）",
    country: "アメリカ合衆国",
    hq: "Maryland",
    foundedYear: 1906,
    employees: "約18,000名",
    revenue: "政府機関",
    stock: { listed: false, detail: "政府機関" },
    products: ["CDRH（医療機器・放射線保健センター）", "510(k)", "PMA", "De Novo"],
    officialUrl: "https://www.fda.gov/medical-devices",
    notes: [
      "米国における医療機器の規制当局。CDRH が医療機器の審査・監視を担当。",
      "AI/ML 搭載医療機器の規制枠組みを積極的に整備中。"
    ]
  },
  {
    id: "pmda",
    name: "PMDA（医薬品医療機器総合機構）",
    country: "日本",
    hq: "東京都",
    foundedYear: 2004,
    employees: "約1,000名",
    revenue: "独立行政法人",
    stock: { listed: false, detail: "独立行政法人" },
    products: ["医療機器審査", "安全対策", "健康被害救済"],
    officialUrl: "https://www.pmda.go.jp/",
    notes: [
      "日本における医薬品・医療機器の審査機関。薬機法に基づき承認審査を実施。",
      "プログラム医療機器（SaMD）の審査体制を強化中。"
    ]
  },
  {
    id: "ema",
    name: "EMA（欧州医薬品庁）",
    country: "EU",
    hq: "Amsterdam",
    foundedYear: 1995,
    employees: "約900名",
    revenue: "EU 機関",
    stock: { listed: false, detail: "EU 機関" },
    products: ["医薬品審査（CHMP）", "MDR/IVDR 協力"],
    officialUrl: "https://www.ema.europa.eu/",
    notes: [
      "EU における医薬品の規制当局。医療機器は各国の Notified Body が審査するが、EMA は薬事規制で連携。",
      "MDR（Medical Device Regulation）は2021年5月に完全適用。"
    ]
  },
  {
    id: "iso",
    name: "ISO（国際標準化機構）",
    country: "国際",
    hq: "Geneva",
    foundedYear: 1947,
    employees: "約800名（事務局）",
    revenue: "国際機関",
    stock: { listed: false, detail: "国際機関" },
    products: ["ISO 13485", "ISO 14971", "ISO 14708 シリーズ"],
    officialUrl: "https://www.iso.org/",
    notes: [
      "医療機器関連の主要規格: ISO 13485（品質マネジメント）、ISO 14971（リスクマネジメント）。",
      "IEC と共同で医療機器の電気安全・ソフトウェア規格も策定。"
    ]
  },
  {
    id: "iec",
    name: "IEC（国際電気標準会議）",
    country: "国際",
    hq: "Geneva",
    foundedYear: 1906,
    employees: "約200名（事務局）",
    revenue: "国際機関",
    stock: { listed: false, detail: "国際機関" },
    products: ["IEC 62304", "IEC 60601 シリーズ", "IEC 62443"],
    officialUrl: "https://www.iec.ch/",
    notes: [
      "医療機器ソフトウェア規格 IEC 62304、医用電気機器安全規格 IEC 60601 シリーズを管理。",
      "サイバーセキュリティ規格 IEC 62443 の医療機器への適用も進行中。"
    ]
  },
  {
    id: "imdrf",
    name: "IMDRF（国際医療機器規制当局フォーラム）",
    country: "国際",
    hq: "なし（各国持ち回り）",
    foundedYear: 2011,
    employees: "各国規制当局の代表で構成",
    revenue: "国際フォーラム",
    stock: { listed: false, detail: "国際フォーラム" },
    products: ["SaMD ガイダンス", "UDI ガイダンス", "MDSAP"],
    officialUrl: "https://www.imdrf.org/",
    notes: [
      "各国の医療機器規制当局が参加する国際フォーラム。旧 GHTF の後継。",
      "SaMD の国際的な規制枠組みの策定を主導。"
    ]
  },
  {
    id: "tga",
    name: "TGA（オーストラリア保健省薬品・医薬品行政局）",
    country: "オーストラリア",
    hq: "Canberra",
    foundedYear: 1989,
    employees: "約1,000名",
    revenue: "政府機関",
    stock: { listed: false, detail: "政府機関" },
    products: ["医療機器審査", "ARTG 登録"],
    officialUrl: "https://www.tga.gov.au/",
    notes: [
      "オーストラリアにおける医療機器の規制当局。MDSAP 参加国の一つ。"
    ]
  }
];
