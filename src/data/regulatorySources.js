/**
 * 国別・地域別 医療機器規制ソースデータベース
 *
 * 構造:
 *   country     — 国名（日本語）
 *   countryEn   — 国名（英語）
 *   code        — ISO 3166-1 alpha-3
 *   region      — ASPAC / Europe / North America / Latam / Africa / Middle East / Global
 *   regLevel    — High / Moderate / Low / Unregulated
 *   authority   — { name, nameLocal?, abbr, url }
 *   regulations — [{ title, date?, url, notes? }]  法規制
 *   guidance    — [{ title, authority?, date?, url, notes? }]  ガイダンス
 *   verified    — URL 検証日（YYYY-MM-DD）または null
 */

export const REGULATORY_SOURCES = [
  // ─── North America ───
  {
    country: "アメリカ合衆国",
    countryEn: "United States of America",
    code: "USA",
    region: "North America",
    regLevel: "High",
    authority: {
      name: "Food and Drug Administration - Center for Devices and Radiological Health",
      abbr: "FDA CDRH",
      url: "https://www.fda.gov/medical-devices",
    },
    regulations: [
      {
        title: "Federal Food, Drug, and Cosmetic Act (FD&C Act) - Chapter V",
        date: "1938（随時改正）",
        url: "https://uscode.house.gov/view.xhtml?path=/prelim@title21/chapter9/subchapter5&edition=prelim",
      },
      {
        title: "21 CFR Part 807 - Establishment Registration and Device Listing",
        url: "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-807",
      },
      {
        title: "21 CFR Part 814 - Premarket Approval of Medical Devices (PMA)",
        url: "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-814",
      },
      {
        title: "21 CFR Part 820 - Quality System Regulation (QMSR)",
        date: "2024年改訂（ISO 13485 整合）",
        url: "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-820",
      },
      {
        title: "21 CFR Part 860 - Medical Device Classification Procedures",
        url: "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-860",
      },
      {
        title: "21 CFR Part 812 - Investigational Device Exemptions (IDE)",
        url: "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-812",
      },
      {
        title: "21 CFR Part 803 - Medical Device Reporting (MDR / Adverse Events)",
        url: "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-803",
      },
    ],
    guidance: [
      {
        title: "Premarket Notification 510(k) — Overview and Submission Types",
        authority: "FDA CDRH",
        date: "2023",
        url: "https://www.fda.gov/medical-devices/premarket-submissions-selecting-and-preparing-correct-submission/premarket-notification-510k",
      },
      {
        title: "De Novo Classification Process",
        authority: "FDA CDRH",
        date: "2021",
        url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/de-novo-classification-process-evaluation-automatic-class-iii-designation",
      },
      {
        title: "Content of Premarket Submissions for Device Software Functions",
        authority: "FDA CDRH",
        date: "2023",
        url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/content-premarket-submissions-device-software-functions",
      },
      {
        title: "Unique Device Identification System (UDI) Guidance",
        authority: "FDA CDRH",
        date: "2022",
        url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/unique-device-identification-system-guidance-industry-and-fda-staff",
      },
      {
        title: "Deciding When to Submit a 510(k) for a Software Change",
        authority: "FDA CDRH",
        date: "2023",
        url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/deciding-when-submit-510k-software-change-existing-device",
      },
    ],
    verified: null,
  },

  {
    country: "カナダ",
    countryEn: "Canada",
    code: "CAN",
    region: "North America",
    regLevel: "High",
    authority: {
      name: "Health Canada - Medical Devices Directorate",
      nameLocal: "Santé Canada",
      abbr: "HC",
      url: "https://www.canada.ca/en/health-canada/services/drugs-health-products/medical-devices.html",
    },
    regulations: [
      {
        title: "Food and Drugs Act (R.S.C., 1985, c. F-27)",
        date: "1985（随時改正）",
        url: "https://laws-lois.justice.gc.ca/eng/acts/f-27/",
      },
      {
        title: "Medical Devices Regulations (SOR/98-282)",
        date: "1998（2019-2024 大幅改正）",
        url: "https://laws-lois.justice.gc.ca/eng/regulations/sor-98-282/",
      },
      {
        title: "Vanessa's Law - Protecting Canadians from Unsafe Drugs Act",
        date: "2014",
        url: "https://laws-lois.justice.gc.ca/eng/annualstatutes/2014_24/",
      },
    ],
    guidance: [
      {
        title: "How to Complete a Medical Device Licence Application",
        authority: "Health Canada",
        url: "https://www.canada.ca/en/health-canada/services/drugs-health-products/medical-devices/application-information/guidance-documents/how-complete-medical-device-licence-application.html",
      },
      {
        title: "Medical Device Classification Rules",
        authority: "Health Canada",
        url: "https://www.canada.ca/en/health-canada/services/drugs-health-products/medical-devices/application-information/guidance-documents/guidance-document-classification-rules-medical-devices.html",
      },
      {
        title: "Pre-market Requirements for Medical Device Cybersecurity",
        authority: "Health Canada",
        date: "2023",
        url: "https://www.canada.ca/en/health-canada/services/drugs-health-products/medical-devices/application-information/guidance-documents/pre-market-guidance-medical-device-cybersecurity.html",
      },
      {
        title: "Software as a Medical Device (SaMD) Guidance",
        authority: "Health Canada",
        date: "2023",
        url: "https://www.canada.ca/en/health-canada/services/drugs-health-products/medical-devices/application-information/guidance-documents/software-medical-device-guidance-document.html",
      },
    ],
    verified: null,
  },

  // ─── Europe ───
  {
    country: "EU（欧州連合）",
    countryEn: "European Union",
    code: "EU",
    region: "Europe",
    regLevel: "High",
    authority: {
      name: "European Commission (DG SANTE) + National Competent Authorities + Notified Bodies",
      abbr: "EC / MDCG",
      url: "https://health.ec.europa.eu/medical-devices-sector_en",
    },
    regulations: [
      {
        title: "Regulation (EU) 2017/745 - Medical Devices Regulation (MDR)",
        date: "2017（適用: 2021-05-26）",
        url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32017R0745",
      },
      {
        title: "Regulation (EU) 2017/746 - In Vitro Diagnostic Regulation (IVDR)",
        date: "2017（適用: 2022-05-26）",
        url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32017R0746",
      },
      {
        title: "Commission Implementing Regulation (EU) 2021/2226 - eIFU Rules",
        date: "2021",
        url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32021R2226",
      },
      {
        title: "Regulation (EU) 2024/1860 - MDR/IVDR Transitional Provisions Extension",
        date: "2024",
        url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32024R1860",
      },
    ],
    guidance: [
      {
        title: "MDCG 2021-24 - Classification of Medical Devices (Annex VIII)",
        authority: "MDCG",
        date: "2021",
        url: "https://health.ec.europa.eu/medical-devices-sector/new-regulations/guidance-mdcg-endorsed-guidance-and-other-guidance_en",
      },
      {
        title: "MDCG 2019-16 rev.1 - Cybersecurity for Medical Devices",
        authority: "MDCG",
        date: "2020",
        url: "https://health.ec.europa.eu/medical-devices-sector/new-regulations/guidance-mdcg-endorsed-guidance-and-other-guidance_en",
      },
      {
        title: "MDCG 2020-5 - Clinical Evaluation — Equivalence",
        authority: "MDCG",
        date: "2020",
        url: "https://health.ec.europa.eu/medical-devices-sector/new-regulations/guidance-mdcg-endorsed-guidance-and-other-guidance_en",
      },
      {
        title: "MDCG 2019-11 rev.1 - Qualification and Classification of Software (SaMD)",
        authority: "MDCG",
        date: "2023",
        url: "https://health.ec.europa.eu/medical-devices-sector/new-regulations/guidance-mdcg-endorsed-guidance-and-other-guidance_en",
      },
    ],
    verified: null,
  },

  // ─── ASPAC ───
  {
    country: "日本",
    countryEn: "Japan",
    code: "JPN",
    region: "ASPAC",
    regLevel: "High",
    authority: {
      name: "Pharmaceuticals and Medical Devices Agency / Ministry of Health, Labour and Welfare",
      nameLocal: "独立行政法人 医薬品医療機器総合機構（PMDA）/ 厚生労働省（MHLW）",
      abbr: "PMDA / MHLW",
      url: "https://www.pmda.go.jp/english/",
    },
    regulations: [
      {
        title: "医薬品、医療機器等の品質、有効性及び安全性の確保等に関する法律（薬機法 / PMD Act）",
        date: "2013（2019, 2022 改正）",
        url: "https://elaws.e-gov.go.jp/document?lawid=335AC0000000145",
        notes: "公定英訳は PMDA サイト参照",
      },
      {
        title: "QMS省令（医療機器及び体外診断用医薬品の製造管理及び品質管理の基準に関する省令）",
        date: "2004（随時改正、ISO 13485 整合）",
        url: "https://elaws.e-gov.go.jp/document?lawid=416M60000100169",
      },
      {
        title: "薬機法施行令",
        url: "https://elaws.e-gov.go.jp/document?lawid=336CO0000000011",
      },
    ],
    guidance: [
      {
        title: "承認申請ガイダンス（Marketing Approval Application Guidance）",
        authority: "PMDA",
        url: "https://www.pmda.go.jp/english/review-services/regulatory-info/0014.html",
      },
      {
        title: "プログラム医療機器ガイダンス（SaMD Guidance）",
        authority: "MHLW / PMDA",
        date: "2023",
        url: "https://www.pmda.go.jp/english/review-services/regulatory-info/0020.html",
      },
      {
        title: "STED ガイダンス（Summary Technical Documentation）",
        authority: "PMDA",
        url: "https://www.pmda.go.jp/english/review-services/regulatory-info/0013.html",
      },
      {
        title: "臨床評価ガイダンス（Clinical Evaluation Guidance）",
        authority: "MHLW",
        url: "https://www.pmda.go.jp/english/review-services/regulatory-info/0015.html",
      },
      {
        title: "医療機器サイバーセキュリティガイダンス",
        authority: "MHLW / PMDA",
        date: "2024",
        url: "https://www.pmda.go.jp/english/rs-sb-std/rs/0026.html",
        notes: "IMDRF N60 整合。英訳 PDF: pmda.go.jp/files/000272598.pdf",
      },
    ],
    verified: null,
  },

  {
    country: "中国",
    countryEn: "China",
    code: "CHN",
    region: "ASPAC",
    regLevel: "High",
    authority: {
      name: "National Medical Products Administration",
      nameLocal: "国家药品监督管理局",
      abbr: "NMPA",
      url: "https://www.nmpa.gov.cn/",
    },
    regulations: [
      {
        title: "医疗器械监督管理条例（Regulations on Supervision and Administration of Medical Devices）",
        date: "2021-06-01 施行（国务院令第739号）",
        url: "https://www.nmpa.gov.cn/xxgk/fgwj/xzfg/20210326170104684.html",
      },
      {
        title: "医疗器械注册与备案管理办法（NMPA Order No. 47）",
        date: "2021-10-01 施行",
        url: "https://www.nmpa.gov.cn/ylqx/ylqxggtg/20210826162850148.html",
      },
      {
        title: "体外诊断试剂注册与备案管理办法（NMPA Order No. 48）",
        date: "2021-10-01 施行",
        url: "https://www.nmpa.gov.cn/ylqx/ylqxggtg/20210826163726185.html",
      },
      {
        title: "医疗器械生产监督管理办法（NMPA Order No. 53）",
        date: "2022-05-01 施行",
        url: "https://www.nmpa.gov.cn/xxgk/fgwj/bmgzh/20220310191942101.html",
      },
      {
        title: "医疗器械经营监督管理办法（NMPA Order No. 54）",
        date: "2022-05-01 施行",
        url: "https://www.nmpa.gov.cn/xxgk/fgwj/bmgzh/20220310192432130.html",
      },
    ],
    guidance: [
      {
        title: "医疗器械临床评价技术指导原则（Clinical Evaluation Technical Guidance）",
        authority: "NMPA / CMDE",
        date: "2021",
        url: "https://www.cmde.org.cn/flfg/zdyz/ylqxzdyz/index.html",
      },
      {
        title: "医疗器械分类目录（Device Classification Catalogue）",
        authority: "NMPA",
        date: "2017（2023 改正）",
        url: "https://www.nmpa.gov.cn/ylqx/ylqxggtg/20170904163301263.html",
      },
      {
        title: "医疗器械唯一标识系统规则（UDI System Rules）",
        authority: "NMPA",
        date: "2019（段階的導入〜2025）",
        url: "https://www.nmpa.gov.cn/ylqx/ylqxggtg/20190830154701476.html",
      },
    ],
    verified: null,
  },

  {
    country: "韓国",
    countryEn: "South Korea",
    code: "KOR",
    region: "ASPAC",
    regLevel: "High",
    authority: {
      name: "Ministry of Food and Drug Safety",
      nameLocal: "식품의약품안전처",
      abbr: "MFDS",
      url: "https://www.mfds.go.kr/",
    },
    regulations: [
      {
        title: "의료기기법（Medical Devices Act）",
        date: "2003（最新改正: 2024）",
        url: "https://law.go.kr/LSW/lsInfoP.do?lsiSeq=202708&viewCls=engLsInfoR&urlMode=engLsInfoR",
        notes: "英文版。韓国語版: law.go.kr で「의료기기법」検索",
      },
      {
        title: "의료기기법 시행령（Enforcement Decree）",
        url: "https://www.law.go.kr/LSW/lsInfoP.do?lsiSeq=259579",
      },
      {
        title: "의료기기법 시행규칙（Enforcement Rule）",
        url: "https://www.law.go.kr/LSW/lsInfoP.do?lsiSeq=259580",
      },
      {
        title: "체외진단의료기기법（IVD Medical Devices Act）",
        date: "2019（施行: 2022-05-01）",
        url: "https://www.law.go.kr/LSW/lsInfoP.do?lsiSeq=246905",
      },
    ],
    guidance: [
      {
        title: "의료기기 허가·신고·심사 등에 관한 규정（Approval/Notification/Review Procedures）",
        authority: "MFDS",
        url: "https://www.mfds.go.kr/brd/m_211/list.do",
      },
      {
        title: "의료기기 임상시험 가이드라인（Clinical Trials Guideline）",
        authority: "MFDS",
        date: "2023",
        url: "https://www.mfds.go.kr/brd/m_1060/list.do",
      },
      {
        title: "소프트웨어 의료기기 허가 심사 가이드라인（SaMD Guidance）",
        authority: "MFDS",
        date: "2023",
        url: "https://www.mfds.go.kr/brd/m_1060/list.do",
      },
    ],
    verified: null,
  },

  {
    country: "オーストラリア",
    countryEn: "Australia",
    code: "AUS",
    region: "ASPAC",
    regLevel: "High",
    authority: {
      name: "Therapeutic Goods Administration",
      abbr: "TGA",
      url: "https://www.tga.gov.au/",
    },
    regulations: [
      {
        title: "Therapeutic Goods Act 1989",
        date: "1989（随時改正）",
        url: "https://www.legislation.gov.au/C2004A03952/latest/text",
      },
      {
        title: "Therapeutic Goods (Medical Devices) Regulations 2002",
        date: "2002（随時改正）",
        url: "https://www.legislation.gov.au/F2002B00237/latest/text",
      },
    ],
    guidance: [
      {
        title: "Australian Regulatory Guidelines for Medical Devices (ARGMD)",
        authority: "TGA",
        url: "https://www.tga.gov.au/resources/resource/guidance/australian-regulatory-guidelines-medical-devices-argmd",
      },
      {
        title: "Medical Device Classification Overview",
        authority: "TGA",
        url: "https://www.tga.gov.au/how-we-regulate/manufacturing/medical-devices/medical-device-classification",
      },
      {
        title: "Essential Principles Checklist",
        authority: "TGA",
        date: "2022",
        url: "https://www.tga.gov.au/resources/resource/guidance/essential-principles-checklist-medical-devices",
      },
      {
        title: "Clinical Evidence Guidelines",
        authority: "TGA",
        date: "2021",
        url: "https://www.tga.gov.au/resources/resource/guidance/clinical-evidence-guidelines-medical-devices",
      },
      {
        title: "Software Based Medical Devices (SaMD)",
        authority: "TGA",
        date: "2023",
        url: "https://www.tga.gov.au/how-we-regulate/manufacturing/medical-devices/software-based-medical-devices",
      },
    ],
    verified: null,
  },
];

  // ─── Europe (continued) ───
  {
    country: "イギリス",
    countryEn: "United Kingdom",
    code: "GBR",
    region: "Europe",
    regLevel: "High",
    authority: {
      name: "Medicines and Healthcare products Regulatory Agency",
      abbr: "MHRA",
      url: "https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency",
    },
    regulations: [
      {
        title: "Medical Devices Regulations 2002 (SI 2002/618)",
        date: "2002（2024 Brexit 改正含む）",
        url: "https://www.legislation.gov.uk/uksi/2002/618/contents",
      },
      {
        title: "The Medical Devices (Amendment) (Great Britain) Regulations 2023 (SI 2023/627)",
        date: "2023",
        url: "https://www.legislation.gov.uk/uksi/2023/627/contents/made",
        notes: "CE マーク認定延長・UKCA 移行タイムライン",
      },
      {
        title: "Medicines and Medical Devices Act 2021",
        date: "2021",
        url: "https://www.legislation.gov.uk/ukpga/2021/3/contents/enacted",
      },
    ],
    guidance: [
      {
        title: "Regulating medical devices in the UK",
        authority: "MHRA",
        date: "2024",
        url: "https://www.gov.uk/guidance/regulating-medical-devices-in-the-uk",
      },
      {
        title: "Register as a manufacturer to place a medical device on the UK market",
        authority: "MHRA",
        date: "2024",
        url: "https://www.gov.uk/guidance/register-as-a-manufacturer-to-place-a-medical-device-on-the-uk-market",
      },
      {
        title: "UKCA marking for medical devices",
        authority: "MHRA",
        date: "2024",
        url: "https://www.gov.uk/guidance/medical-devices-conformity-assessment-and-the-ukca-mark",
      },
    ],
    verified: null,
  },

  // ─── Latam ───
  {
    country: "ブラジル",
    countryEn: "Brazil",
    code: "BRA",
    region: "Latam",
    regLevel: "High",
    authority: {
      name: "Agência Nacional de Vigilância Sanitária",
      abbr: "ANVISA",
      url: "https://www.gov.br/anvisa/pt-br",
    },
    regulations: [
      {
        title: "RDC No. 751/2022 - Regulamento Técnico de Registro de Produtos Médicos",
        date: "2022-09-15",
        url: "https://www.gov.br/anvisa/pt-br/assuntos/regulamentacao/legislacao/resolucoes-rdc/rdc-no-751-de-15-de-setembro-de-2022",
      },
      {
        title: "Lei No. 6.360/1976 (Federal Law on Health Surveillance)",
        date: "1976（随時改正）",
        url: "https://www.planalto.gov.br/ccivil_03/leis/l6360.htm",
      },
      {
        title: "RDC No. 752/2022 - Good Manufacturing Practices for Medical Devices",
        date: "2022-09-15",
        url: "https://www.gov.br/anvisa/pt-br/assuntos/regulamentacao/legislacao/resolucoes-rdc/rdc-no-752-de-15-de-setembro-de-2022",
      },
      {
        title: "IN No. 161/2022 - Risk Classification Rules",
        date: "2022",
        url: "https://www.gov.br/anvisa/pt-br/assuntos/regulamentacao/legislacao/instrucoes-normativas/in-no-161-de-2022",
      },
    ],
    guidance: [
      {
        title: "Guia para Registro de Produtos Médicos",
        authority: "ANVISA",
        date: "2023",
        url: "https://www.gov.br/anvisa/pt-br/assuntos/regulamentacao/guias-de-saude",
      },
      {
        title: "ANVISA Medical Device Product Portal",
        authority: "ANVISA",
        url: "https://www.gov.br/anvisa/pt-br/sistemas/peticionamento",
      },
    ],
    verified: null,
  },

  // ─── ASPAC (continued) ───
  {
    country: "インド",
    countryEn: "India",
    code: "IND",
    region: "ASPAC",
    regLevel: "Moderate",
    authority: {
      name: "Central Drugs Standard Control Organisation",
      nameLocal: "केंद्रीय औषधि मानक नियंत्रण संगठन",
      abbr: "CDSCO",
      url: "https://cdsco.gov.in/",
    },
    regulations: [
      {
        title: "Medical Devices Rules, 2017 (MDR 2017)",
        date: "2018-01-01 施行（段階的実施）",
        url: "https://cdsco.gov.in/opencms/opencms/en/Medical-Device-Diagnostics/Medical-Device-Diagnostics/",
      },
      {
        title: "Drugs and Cosmetics Act, 1940 (as amended 2020)",
        date: "1940（2020 改正で医療機器を明示的に定義）",
        url: "https://www.indiacode.nic.in/handle/123456789/2409",
      },
    ],
    guidance: [
      {
        title: "Guidance for Import and Registration of Medical Devices",
        authority: "CDSCO",
        date: "2022",
        url: "https://cdsco.gov.in/opencms/opencms/en/Medical-Device-Diagnostics/Medical-Device-Diagnostics/",
      },
      {
        title: "CDSCO Online Portal（申請・追跡システム）",
        authority: "CDSCO",
        url: "https://cdsco.gov.in/opencms/opencms/en/Medical-Device-Diagnostics/Medical-Device-Diagnostics/",
        notes: "旧 SUGAM ポータルは統合済み",
      },
    ],
    verified: null,
  },

  {
    country: "台湾",
    countryEn: "Taiwan",
    code: "TWN",
    region: "ASPAC",
    regLevel: "Moderate",
    authority: {
      name: "Taiwan Food and Drug Administration",
      nameLocal: "衛生福利部食品藥物管理署",
      abbr: "TFDA",
      url: "https://www.fda.gov.tw/",
    },
    regulations: [
      {
        title: "醫療器材管理法（Medical Devices Act）",
        date: "2020（施行: 2021-05-01）",
        url: "https://law.moj.gov.tw/ENG/LawClass/LawAll.aspx?pcode=L0030106",
      },
      {
        title: "醫療器材查驗登記辦法（Regulations for Registration of Medical Devices）",
        date: "2021",
        url: "https://law.moj.gov.tw/ENG/LawClass/LawAll.aspx?pcode=L0030107",
      },
      {
        title: "藥事法（Pharmaceutical Affairs Act）",
        date: "1970（2018 最終改正）",
        url: "https://law.moj.gov.tw/ENG/LawClass/LawAll.aspx?pcode=L0030001",
        notes: "旧法。2021年の醫療器材管理法により医療機器は独立法に移行",
      },
    ],
    guidance: [
      {
        title: "Technical Documents Required for Medical Device Registration",
        authority: "TFDA",
        date: "2021",
        url: "https://www.fda.gov.tw/ENG/siteList.aspx?sid=2",
      },
      {
        title: "Clinical Trial Regulations for Medical Devices",
        authority: "TFDA",
        date: "2021",
        url: "https://law.moj.gov.tw/ENG/LawClass/LawAll.aspx?pcode=L0030108",
      },
    ],
    verified: null,
  },

  {
    country: "シンガポール",
    countryEn: "Singapore",
    code: "SGP",
    region: "ASPAC",
    regLevel: "High",
    authority: {
      name: "Health Sciences Authority",
      abbr: "HSA",
      url: "https://www.hsa.gov.sg/",
    },
    regulations: [
      {
        title: "Health Products Act (Chapter 122D)",
        date: "2007（医療機器は2010年施行）",
        url: "https://sso.agc.gov.sg/Act/HPA2007",
      },
      {
        title: "Health Products (Medical Devices) Regulations 2010",
        date: "2010（随時改正）",
        url: "https://sso.agc.gov.sg/SL/HPA2007-S436-2010",
      },
    ],
    guidance: [
      {
        title: "GN-15: Guidance on Medical Device Product Registration",
        authority: "HSA",
        date: "2026-03（R13）",
        url: "https://www.hsa.gov.sg/medical-devices/guidance-documents",
      },
      {
        title: "GN-16: Guidance on the Classification of Medical Devices",
        authority: "HSA",
        date: "2022",
        url: "https://www.hsa.gov.sg/medical-devices/guidance-documents",
      },
      {
        title: "GN-22: Guidance for Dealers on Class A Medical Devices",
        authority: "HSA",
        date: "2025-07（R8）",
        url: "https://www.hsa.gov.sg/medical-devices/guidance-documents",
      },
      {
        title: "GL-04: Regulatory Guidelines for Software Medical Devices",
        authority: "HSA",
        date: "2025-12（R4）",
        url: "https://www.hsa.gov.sg/medical-devices/guidance-documents",
      },
      {
        title: "PRISM Portal（オンライン申請システム）",
        authority: "HSA",
        url: "https://www.hsa.gov.sg/e-services/prism",
      },
    ],
    verified: null,
  },
];

/** 地域でグループ化 */
export function groupByRegion(sources) {
  const map = {};
  for (const s of sources) {
    (map[s.region] ??= []).push(s);
  }
  return map;
}

/** 規制レベルでフィルタ */
export function filterByRegLevel(sources, level) {
  return sources.filter((s) => s.regLevel === level);
}

/** 国コードで検索 */
export function findByCode(code) {
  return REGULATORY_SOURCES.find((s) => s.code === code) ?? null;
}
