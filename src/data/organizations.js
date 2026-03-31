/**
 * 規制当局・標準化団体データ
 * CompanyCard コンポーネントで表示。フィールド:
 *   id, name, country, hq, classSystem?, keyLaw?, mdsap?, foundedYear?,
 *   products(役割), officialUrl, notes[]
 */

export const COMPANIES_DISCLAIMER =
  "掲載情報は公開資料に基づく参考情報です。最新の正確な情報は各機関の公式サイトでご確認ください。";

export const AI_COMPANIES = [
  {
    id: "fda",
    name: "FDA CDRH（米国食品医薬品局 医療機器センター）",
    country: "アメリカ合衆国",
    hq: "Silver Spring, Maryland",
    classSystem: "3クラス制（Class I / II / III）",
    keyLaw: "FD&C Act + 21 CFR",
    mdsap: "参加（受入れ）",
    foundedYear: 1906,
    products: ["510(k) 審査", "De Novo 分類", "PMA 承認", "市販後監視（MDR）"],
    officialUrl: "https://www.fda.gov/medical-devices",
    notes: [
      "世界最大の医療機器市場を所管。年間数千件の510(k)を処理。",
      "2024年に QSR を QMSR に改訂（ISO 13485 整合）。AI/ML SaMD の PCCP 枠組みを推進。"
    ]
  },
  {
    id: "pmda",
    name: "PMDA（医薬品医療機器総合機構）",
    country: "日本",
    hq: "東京都千代田区",
    classSystem: "4クラス制（クラスI〜IV）",
    keyLaw: "薬機法（PMD Act）",
    mdsap: "検討中",
    foundedYear: 2004,
    products: ["承認審査", "認証（登録認証機関経由）", "安全対策", "健康被害救済"],
    officialUrl: "https://www.pmda.go.jp/english/",
    notes: [
      "厚生労働省（MHLW）が政策を所管、PMDA が審査と安全対策を担当する二元体制。",
      "プログラム医療機器（SaMD）の審査事例が増加中。IMDRF 創設メンバー。"
    ]
  },
  {
    id: "ec-mdcg",
    name: "欧州委員会 DG SANTE / MDCG",
    country: "EU（欧州連合）",
    hq: "Brussels / Luxembourg",
    classSystem: "4クラス制（Class I / IIa / IIb / III）",
    keyLaw: "MDR (EU) 2017/745 / IVDR (EU) 2017/746",
    mdsap: "非参加",
    products: ["規制策定", "MDCG ガイダンス発行", "EUDAMED 運営", "Notified Body 監督"],
    officialUrl: "https://health.ec.europa.eu/medical-devices-sector_en",
    notes: [
      "EC が規制枠組みを策定、各国 Competent Authority が執行、Notified Body が適合性評価。",
      "MDR 移行は Regulation 2024/1860 で猶予期間延長。EUDAMED 段階的稼働中。"
    ]
  },
  {
    id: "mhra",
    name: "MHRA（英国医薬品・医療製品規制庁）",
    country: "イギリス",
    hq: "London",
    classSystem: "4クラス制（Class I / IIa / IIb / III）— EU 由来",
    keyLaw: "Medical Devices Regulations 2002 + Medicines and Medical Devices Act 2021",
    mdsap: "非参加",
    products: ["UKCA マーキング", "機器登録", "市販後監視", "臨床試験承認"],
    officialUrl: "https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency",
    notes: [
      "Brexit 後、CE マーク→UKCA マーク移行を段階的に進行中。移行期限は繰り返し延長。",
      "北アイルランドは Windsor Framework により EU MDR/IVDR が適用。"
    ]
  },
  {
    id: "nmpa",
    name: "NMPA（国家薬品監督管理局）",
    country: "中国",
    hq: "北京市",
    classSystem: "3クラス制（クラスI / II / III）",
    keyLaw: "医疗器械监督管理条例（国務院令739号, 2021年）",
    mdsap: "非参加",
    foundedYear: 2018,
    products: ["備案（クラスI）", "登録審査（クラスII/III）", "CMDE 技術審査", "GMP 査察"],
    officialUrl: "https://www.nmpa.gov.cn/",
    notes: [
      "旧 CFDA。市場監督管理総局（SAMR）傘下。技術審査は CMDE が担当。",
      "輸入機器は中国代理人の設置が必須。臨床試験データは国内実施が原則だが国際データ受入れ拡大中。"
    ]
  },
  {
    id: "mfds",
    name: "MFDS（食品医薬品安全処）",
    country: "韓国",
    hq: "忠清北道 清州市",
    classSystem: "4クラス制（クラスI〜IV）",
    keyLaw: "의료기기법（Medical Devices Act, 2003年）",
    mdsap: "参加（2021年〜受入れ）",
    products: ["届出（クラスI）", "認証（クラスII）", "許可（クラスIII/IV）", "KGMP 査察"],
    officialUrl: "https://www.mfds.go.kr/",
    notes: [
      "2019年に IVD 専用法（체외진단의료기기법）を制定。",
      "2025年にデジタル医療製品法を施行。AI/ML SaMD の迅速審査制度を導入。"
    ]
  },
  {
    id: "tga",
    name: "TGA（保健省薬品・医療品行政局）",
    country: "オーストラリア",
    hq: "Canberra, ACT",
    classSystem: "EU 類似（Class I / IIa / IIb / III / AIMD / IVD）",
    keyLaw: "Therapeutic Goods Act 1989",
    mdsap: "参加（創設メンバー）",
    foundedYear: 1989,
    products: ["ARTG 登録", "Essential Principles 評価", "GMP 査察", "市販後監視"],
    officialUrl: "https://www.tga.gov.au/",
    notes: [
      "MDSAP 創設メンバー。MDSAP 報告書で QMS 査察を代替可能。",
      "Australian Sponsor（国内スポンサー）の設置が必須。SaMD 規制フレームワークを2023年に更新。"
    ]
  },
  {
    id: "health-canada",
    name: "Health Canada（カナダ保健省）",
    country: "カナダ",
    hq: "Ottawa, Ontario",
    classSystem: "4クラス制（Class I〜IV）",
    keyLaw: "Food and Drugs Act + Medical Devices Regulations (SOR/98-282)",
    mdsap: "参加（必須 — Class II〜IV）",
    products: ["MDEL（施設ライセンス）", "機器ライセンス", "問題報告", "リコール"],
    officialUrl: "https://www.canada.ca/en/health-canada/services/drugs-health-products/medical-devices.html",
    notes: [
      "2019年より Class II〜IV の機器ライセンス申請に MDSAP 監査報告書が必須。",
      "Vanessa's Law（2014年）で市販後監視権限を大幅強化。SaMD ガイダンスは IMDRF 準拠。"
    ]
  },
  {
    id: "anvisa",
    name: "ANVISA（国家衛生監督庁）",
    country: "ブラジル",
    hq: "Brasília, DF",
    classSystem: "4クラス制（Class I〜IV）",
    keyLaw: "RDC 751/2022 + Lei 6.360/1976",
    mdsap: "参加",
    products: ["Cadastro（クラスI/II 届出）", "Registro（クラスIII/IV 登録）", "CBPF（GMP認証）"],
    officialUrl: "https://www.gov.br/anvisa/pt-br",
    notes: [
      "2022年の RDC 751 で IMDRF 整合の4クラス制に移行。登録有効期限は10年。",
      "Brazilian Registration Holder（BRH）の設置が必須。GMP 認証は MDSAP でも可。"
    ]
  },
  {
    id: "cdsco",
    name: "CDSCO（中央薬品基準管理機構）",
    country: "インド",
    hq: "New Delhi",
    classSystem: "4クラス制（Class A / B / C / D）",
    keyLaw: "Medical Devices Rules 2017 + Drugs and Cosmetics Act 1940",
    mdsap: "非参加",
    products: ["機器登録", "輸入ライセンス", "臨床試験承認", "品質管理"],
    officialUrl: "https://cdsco.gov.in/",
    notes: [
      "段階的に規制対象デバイスを拡大中。通知された品目のみ登録義務。",
      "Class A/B は州当局、Class C/D は CDSCO が審査。インド代理人の設置が必須。"
    ]
  },
  {
    id: "tfda",
    name: "TFDA（食品薬物管理署）",
    country: "台湾",
    hq: "台北市",
    classSystem: "3クラス制（Class I / II / III）",
    keyLaw: "醫療器材管理法（Medical Devices Act, 2020年）",
    mdsap: "受入れ",
    foundedYear: 2010,
    products: ["備查（クラスI 届出）", "查驗登記（クラスII/III 登録）", "QSD 査察"],
    officialUrl: "https://www.fda.gov.tw/",
    notes: [
      "2021年に医療機器専用法を施行（薬事法から独立）。",
      "台湾 License Holder の設置が必須。MDSAP 報告書を受入れ。"
    ]
  },
  {
    id: "hsa",
    name: "HSA（保健科学庁）",
    country: "シンガポール",
    hq: "Singapore",
    classSystem: "4クラス制（Class A / B / C / D）",
    keyLaw: "Health Products Act 2007 + Medical Devices Regulations 2010",
    mdsap: "参加",
    products: ["機器登録（Class B〜D）", "Dealer's License（Class A）", "PRISM ポータル"],
    officialUrl: "https://www.hsa.gov.sg/",
    notes: [
      "Reference Regulator（FDA/EU/HC/TGA/PMDA）の承認があれば簡略審査（Abridged Route）が可能。",
      "GN-15（登録ガイダンス）が2026年3月に R13 に更新。Class A は登録不要（Dealer's License のみ）。"
    ]
  },
  {
    id: "imdrf",
    name: "IMDRF（国際医療機器規制当局フォーラム）",
    country: "国際",
    hq: "各国持ち回り",
    products: ["SaMD ガイダンス", "UDI ガイダンス", "MDSAP", "規制調和文書"],
    officialUrl: "https://www.imdrf.org/",
    notes: [
      "旧 GHTF の後継。FDA / PMDA / EC / TGA / Health Canada 等が参加。",
      "SaMD の国際分類枠組み、サイバーセキュリティ原則（N60）などの基盤文書を策定。"
    ]
  },
  {
    id: "iso",
    name: "ISO（国際標準化機構）",
    country: "国際",
    hq: "Geneva, Switzerland",
    foundedYear: 1947,
    products: ["ISO 13485（QMS）", "ISO 14971（リスクマネジメント）", "ISO 14708 シリーズ"],
    officialUrl: "https://www.iso.org/",
    notes: [
      "医療機器の品質管理（ISO 13485）とリスクマネジメント（ISO 14971）の国際規格を策定。",
      "IEC と共同で医療機器の電気安全・ソフトウェア規格も策定。"
    ]
  },
  {
    id: "iec",
    name: "IEC（国際電気標準会議）",
    country: "国際",
    hq: "Geneva, Switzerland",
    foundedYear: 1906,
    products: ["IEC 62304（ソフトウェアライフサイクル）", "IEC 60601 シリーズ（電気安全）", "IEC 62443（サイバーセキュリティ）"],
    officialUrl: "https://www.iec.ch/",
    notes: [
      "医療機器ソフトウェア規格 IEC 62304、医用電気機器安全規格 IEC 60601 を管理。",
      "IEC 62443 の医療機器への適用が進行中。"
    ]
  },
];
