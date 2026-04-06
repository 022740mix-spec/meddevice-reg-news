/**
 * 国別プロファイル メタデータ（軽量版）
 * 国グリッド・横比較テーブル用。詳細データは countryProfiles.js を動的importで取得。
 * 自動生成: node scripts/generate-profiles-meta.mjs
 *
 * 注意: countryProfiles.js を re-export しないこと。
 * Vite dev モードでは re-export が 127 個の個別モジュールリクエストを引き起こし、
 * ブラウザがタイムアウトして真っ白になる。
 */

export const COUNTRY_FLAG = {
  USA: "🇺🇸", CAN: "🇨🇦", EU: "🇪🇺", JPN: "🇯🇵", CHN: "🇨🇳",
  KOR: "🇰🇷", AUS: "🇦🇺", GBR: "🇬🇧", BRA: "🇧🇷", IND: "🇮🇳",
  TWN: "🇹🇼", SGP: "🇸🇬", THA: "🇹🇭", IDN: "🇮🇩", VNM: "🇻🇳",
  MYS: "🇲🇾", SAU: "🇸🇦", ZAF: "🇿🇦", CHE: "🇨🇭", MEX: "🇲🇽",
  NZL: "🇳🇿", PHL: "🇵🇭", ARG: "🇦🇷", TUR: "🇹🇷",
  ARE: "🇦🇪",
  SWE: "🇸🇪", DNK: "🇩🇰", NOR: "🇳🇴", FIN: "🇫🇮", IRL: "🇮🇪", AUT: "🇦🇹",
  RUS: "🇷🇺", POL: "🇵🇱", KWT: "🇰🇼", QAT: "🇶🇦",
  ISR: "🇮🇱", EGY: "🇪🇬", COL: "🇨🇴", CHL: "🇨🇱",
  PAK: "🇵🇰", KEN: "🇰🇪", NGA: "🇳🇬", MAR: "🇲🇦",
  JOR: "🇯🇴", BHR: "🇧🇭", OMN: "🇴🇲",
  PER: "🇵🇪", ECU: "🇪🇨", CRI: "🇨🇷",
  BGD: "🇧🇩", LKA: "🇱🇰", KHM: "🇰🇭", MMR: "🇲🇲", LAO: "🇱🇦", MNG: "🇲🇳",
  URY: "🇺🇾", PRY: "🇵🇾", DOM: "🇩🇴", PAN: "🇵🇦", GTM: "🇬🇹", HND: "🇭🇳",
  TZA: "🇹🇿", ETH: "🇪🇹", UGA: "🇺🇬", RWA: "🇷🇼", SEN: "🇸🇳", GHA: "🇬🇭",
  CZE: "🇨🇿", HUN: "🇭🇺", PRT: "🇵🇹", GRC: "🇬🇷", UKR: "🇺🇦", HKG: "🇭🇰",
  TUN: "🇹🇳", DZA: "🇩🇿", IRQ: "🇮🇶", LBN: "🇱🇧", NPL: "🇳🇵", IRN: "🇮🇷",
  VEN: "🇻🇪", BOL: "🇧🇴", SLV: "🇸🇻", CUB: "🇨🇺",
  BRN: "🇧🇳", FJI: "🇫🇯", KAZ: "🇰🇿", UZB: "🇺🇿",
  NLD: "🇳🇱", BEL: "🇧🇪", ESP: "🇪🇸", ITA: "🇮🇹", ROU: "🇷🇴", BGR: "🇧🇬", HRV: "🇭🇷",
  SVK: "🇸🇰", LTU: "🇱🇹", LVA: "🇱🇻", EST: "🇪🇪", MLT: "🇲🇹", MAC: "🇲🇴",
  DEU: "🇩🇪", FRA: "🇫🇷", LUX: "🇱🇺", SVN: "🇸🇮", SRB: "🇷🇸",
  CYP: "🇨🇾", GEO: "🇬🇪", NIC: "🇳🇮", JAM: "🇯🇲",
  CIV: "🇨🇮", CMR: "🇨🇲", ZMB: "🇿🇲", ZWE: "🇿🇼",
  MKD: "🇲🇰", BIH: "🇧🇦", AGO: "🇦🇴", GUY: "🇬🇾", TTO: "🇹🇹",
  ALB: "🇦🇱", MNE: "🇲🇪", MDA: "🇲🇩",
  BWA: "🇧🇼", NAM: "🇳🇦", MOZ: "🇲🇿", KGZ: "🇰🇬",
  ISL: "🇮🇸", TJK: "🇹🇯", PNG: "🇵🇬",
  HTI: "🇭🇹",
  AZE: "🇦🇿",
  LIE: "🇱🇮",
  BRB: "🇧🇧",
  ARM: "🇦🇲",
  TKM: "🇹🇲",
  MLI: "🇲🇱",
  BFA: "🇧🇫",
  SUR: "🇸🇷",
  TGO: "🇹🇬",
  SWZ: "🇸🇿",
  MWI: "🇲🇼",
  MDG: "🇲🇬",
  LSO: "🇱🇸",
  AND: "🇦🇩",
  MCO: "🇲🇨",
};

export const REGION_ORDER = ["North America", "Europe", "ASPAC", "Latam", "Middle East & Africa"];

export const COUNTRY_PROFILES_META = [
  {
    "code": "USA",
    "country": "アメリカ合衆国",
    "countryEn": "United States of America",
    "region": "North America",
    "flag": "🇺🇸",
    "primaryLawTitle": "Federal Food, Drug, and Cosmetic Act (FD&C Act)",
    "primaryLawEnacted": "1938",
    "classificationSystem": "3クラス制（Class I / II / III）",
    "classCount": 3,
    "classes": [
      {
        "name": "Class I",
        "riskLevel": "低リスク"
      },
      {
        "name": "Class II",
        "riskLevel": "中リスク"
      },
      {
        "name": "Class III",
        "riskLevel": "高リスク"
      }
    ],
    "mainAuthority": "FDA CDRH",
    "mdsapStatus": "参加（受入れ）",
    "udiRequired": true,
    "electronicSystem": "eSTAR + FDA ESG (Electronic Submissions Gateway)",
    "deviceNotes": "ソフトウェア（SaMD）は2017年 Digital Health Innovation Action Plan 以降、規制対象の明確化が進行。21st Century Cures Actにより臨床意思決定支援等の一部ソフトウェア機能はFD&C Act Section 520(o)で規制対象外に。",
    "lastUpdated": "2026-04-01"
  },
  {
    "code": "CAN",
    "country": "カナダ",
    "countryEn": "Canada",
    "region": "North America",
    "flag": "🇨🇦",
    "primaryLawTitle": "Food and Drugs Act",
    "primaryLawEnacted": "1920",
    "classificationSystem": "4クラス制（Class I / II / III / IV）",
    "classCount": 4,
    "classes": [
      {
        "name": "Class I",
        "riskLevel": "最低リスク"
      },
      {
        "name": "Class II",
        "riskLevel": "低リスク"
      },
      {
        "name": "Class III",
        "riskLevel": "中リスク"
      },
      {
        "name": "Class IV",
        "riskLevel": "高リスク"
      }
    ],
    "mainAuthority": "Health Canada — MDD",
    "mdsapStatus": "義務化（クラスII〜IV）",
    "udiRequired": false,
    "electronicSystem": "MDEL Online System / Health Canada Online Submissions",
    "deviceNotes": "SaMD（Software as a Medical Device）は2019年のデジタルヘルステクノロジーに関するガイダンスにより規制対象の明確化が進行。",
    "lastUpdated": "2026-04-01"
  },
  {
    "code": "EU",
    "country": "欧州連合",
    "countryEn": "European Union",
    "region": "Europe",
    "flag": "🇪🇺",
    "primaryLawTitle": "Regulation (EU) 2017/745 — Medical Devices Regulation (MDR)",
    "primaryLawEnacted": "2017",
    "classificationSystem": "リスクベース分類（Annex VIII の22規則）— Class I / IIa / IIb / III",
    "classCount": 4,
    "classes": [
      {
        "name": "Class I",
        "riskLevel": "低リスク"
      },
      {
        "name": "Class IIa",
        "riskLevel": "中低リスク"
      },
      {
        "name": "Class IIb",
        "riskLevel": "中高リスク"
      },
      {
        "name": "Class III",
        "riskLevel": "高リスク"
      }
    ],
    "mainAuthority": "European Commission — DG SANTE",
    "mdsapStatus": "非参加",
    "udiRequired": true,
    "electronicSystem": "EUDAMED (European Database on Medical Devices)",
    "deviceNotes": "MDR は旧 Medical Devices Directive (MDD 93/42/EEC) および Active Implantable Medical Devices Directive (AIMDD 90/385/EEC) を置き換え。2021年5月26日に完全適用開始。",
    "lastUpdated": "2026-04-01"
  },
  {
    "code": "JPN",
    "country": "日本",
    "countryEn": "Japan",
    "region": "ASPAC",
    "flag": "🇯🇵",
    "primaryLawTitle": "薬機法（医薬品、医療機器等の品質、有効性及び安全性の確保等に関する法律）",
    "primaryLawEnacted": "1960-08-10",
    "classificationSystem": "薬機法に基づく4クラス分類",
    "classCount": 4,
    "classes": [
      {
        "name": "Class I",
        "riskLevel": "低"
      },
      {
        "name": "Class II",
        "riskLevel": "中低"
      },
      {
        "name": "Class III",
        "riskLevel": "中高"
      },
      {
        "name": "Class IV",
        "riskLevel": "高"
      }
    ],
    "mainAuthority": "PMDA",
    "mdsapStatus": "参加国（Regulatory Authority）",
    "udiRequired": true,
    "electronicSystem": "FD申請 / DWAP / ゲートウェイシステム",
    "deviceNotes": "「プログラム」を医療機器の定義に含めた2014年施行の薬機法改正は世界に先駆けた取組み。コンビネーション製品（医療機器と医薬品の組合せ）は薬機法上の主たる要素で規制区分を判断。",
    "lastUpdated": "2026-04-01"
  },
  {
    "code": "CHN",
    "country": "中国",
    "countryEn": "China",
    "region": "ASPAC",
    "flag": "🇨🇳",
    "primaryLawTitle": "医療機器監督管理条例（医疗器械监督管理条例）",
    "primaryLawEnacted": "2000-01-04",
    "classificationSystem": "リスクベース3クラス分類",
    "classCount": 3,
    "classes": [
      {
        "name": "Class I",
        "riskLevel": "低"
      },
      {
        "name": "Class II",
        "riskLevel": "中"
      },
      {
        "name": "Class III",
        "riskLevel": "高"
      }
    ],
    "mainAuthority": "NMPA",
    "mdsapStatus": "非参加",
    "udiRequired": true,
    "electronicSystem": "eRPS（医療機器登録電子申請システム）",
    "deviceNotes": "2021年の条例改正（国務院令739号）でリスクベース規制の明確化、臨床評価要件の整理、UDI制度の法的根拠を整備。",
    "lastUpdated": "2026-04-01"
  },
  {
    "code": "KOR",
    "country": "韓国",
    "countryEn": "South Korea",
    "region": "ASPAC",
    "flag": "🇰🇷",
    "primaryLawTitle": "医療機器法（의료기기법）",
    "primaryLawEnacted": "2003-05-29",
    "classificationSystem": "リスクベース4クラス分類",
    "classCount": 4,
    "classes": [
      {
        "name": "Class I",
        "riskLevel": "低"
      },
      {
        "name": "Class II",
        "riskLevel": "中低"
      },
      {
        "name": "Class III",
        "riskLevel": "中高"
      },
      {
        "name": "Class IV",
        "riskLevel": "高"
      }
    ],
    "mainAuthority": "MFDS",
    "mdsapStatus": "協力会員（Affiliate Member、2019年10月〜）",
    "udiRequired": true,
    "electronicSystem": "의료기기전자민원시스템（医療機器電子申請システム）",
    "deviceNotes": "2019年に体外診断用医療機器法（IVD法）を別途制定。2025年にデジタルヘルス関連法を施行し、AI/ML SaMDの規制枠組みを整備。",
    "lastUpdated": "2026-04-01"
  },
  {
    "code": "GBR",
    "country": "イギリス",
    "countryEn": "United Kingdom",
    "region": "Europe",
    "flag": "🇬🇧",
    "primaryLawTitle": "Medicines and Medical Devices Act 2021",
    "primaryLawEnacted": "2021-02-11",
    "classificationSystem": "UK MDR 2002（SI 2002/618）に基づく4クラス分類",
    "classCount": 4,
    "classes": [
      {
        "name": "Class I",
        "riskLevel": "低"
      },
      {
        "name": "Class IIa",
        "riskLevel": "中低"
      },
      {
        "name": "Class IIb",
        "riskLevel": "中高"
      },
      {
        "name": "Class III",
        "riskLevel": "高"
      }
    ],
    "mainAuthority": "MHRA",
    "mdsapStatus": "オブザーバー（Observer、2021年3月〜）",
    "udiRequired": false,
    "electronicSystem": "MHRA Device Registration Portal",
    "deviceNotes": "北アイルランドではEU MDR 第2条の定義が直接適用される。グレートブリテン（イングランド・ウェールズ・スコットランド）とは法的根拠が異なる点に注意。",
    "lastUpdated": "2026-04-01"
  },
  {
    "code": "AUS",
    "country": "オーストラリア",
    "countryEn": "Australia",
    "region": "ASPAC",
    "flag": "🇦🇺",
    "primaryLawTitle": "Therapeutic Goods Act 1989",
    "primaryLawEnacted": "1989-11-07",
    "classificationSystem": "EU整合型分類体系",
    "classCount": 5,
    "classes": [
      {
        "name": "Class I",
        "riskLevel": "低"
      },
      {
        "name": "Class IIa",
        "riskLevel": "中低"
      },
      {
        "name": "Class IIb",
        "riskLevel": "中高"
      },
      {
        "name": "Class III",
        "riskLevel": "高"
      },
      {
        "name": "AIMD",
        "riskLevel": "高"
      }
    ],
    "mainAuthority": "TGA",
    "mdsapStatus": "創設メンバー（Founding Regulatory Authority）",
    "udiRequired": true,
    "electronicSystem": "TGA Business Services (TBS) / eBusiness Portal",
    "deviceNotes": "コンビネーション製品（医療機器と医薬品の組合せ）はTGAが主たる作用に基づき規制区分を判断。",
    "lastUpdated": "2026-04-01"
  },
  {
    "code": "BRA",
    "country": "ブラジル",
    "countryEn": "Brazil",
    "region": "Latam",
    "flag": "🇧🇷",
    "primaryLawTitle": "Lei nº 6.360, de 23 de setembro de 1976",
    "primaryLawEnacted": "1976-09-23",
    "classificationSystem": "IMDRF整合4クラス分類（RDC 751/2022）",
    "classCount": 4,
    "classes": [
      {
        "name": "Class I",
        "riskLevel": "低"
      },
      {
        "name": "Class II",
        "riskLevel": "中低"
      },
      {
        "name": "Class III",
        "riskLevel": "中高"
      },
      {
        "name": "Class IV",
        "riskLevel": "高"
      }
    ],
    "mainAuthority": "ANVISA",
    "mdsapStatus": "参加国（Regulatory Authority）",
    "udiRequired": true,
    "electronicSystem": "SOLICITA (ANVISAオンライン申請システム)",
    "deviceNotes": "RDC 751/2022はIMDRFの医療機器定義に整合しており、旧規制（RDC 185/2001等）から大幅に近代化された。",
    "lastUpdated": "2026-04-01"
  },
  {
    "code": "IND",
    "country": "インド",
    "countryEn": "India",
    "region": "ASPAC",
    "flag": "🇮🇳",
    "primaryLawTitle": "Drugs and Cosmetics Act 1940",
    "primaryLawEnacted": "1940-04-10",
    "classificationSystem": "4クラス分類（A/B/C/D）",
    "classCount": 4,
    "classes": [
      {
        "name": "Class A",
        "riskLevel": "低"
      },
      {
        "name": "Class B",
        "riskLevel": "中低"
      },
      {
        "name": "Class C",
        "riskLevel": "中高"
      },
      {
        "name": "Class D",
        "riskLevel": "高"
      }
    ],
    "mainAuthority": "CDSCO",
    "mdsapStatus": "非参加（受入れ検討中）",
    "udiRequired": false,
    "electronicSystem": "SUGAM (CDSCOオンラインポータル) / MDR Portal",
    "deviceNotes": "インドでは段階的に規制対象品目を通知（Gazette notification）により拡大中。2026年現在、全ての医療機器が規制対象となるよう移行が進行中。",
    "lastUpdated": "2026-04-01"
  },
  {
    "code": "TWN",
    "country": "台湾",
    "countryEn": "Taiwan",
    "region": "ASPAC",
    "flag": "🇹🇼",
    "primaryLawTitle": "醫療器材管理法（Medical Devices Act）",
    "primaryLawEnacted": "2020-01-15",
    "classificationSystem": "3クラス分類（I/II/III）",
    "classCount": 3,
    "classes": [
      {
        "name": "Class I（第一等級）",
        "riskLevel": "低"
      },
      {
        "name": "Class II（第二等級）",
        "riskLevel": "中"
      },
      {
        "name": "Class III（第三等級）",
        "riskLevel": "高"
      }
    ],
    "mainAuthority": "TFDA",
    "mdsapStatus": "Affiliate Member",
    "udiRequired": true,
    "electronicSystem": "TFDA醫療器材線上申請系統",
    "deviceNotes": "2021年の醫療器材管理法施行により、従来の藥事法（Pharmaceutical Affairs Act）から医療機器部分が独立。医療機器に特化した定義と規制体系が整備された。",
    "lastUpdated": "2026-04-01"
  },
  {
    "code": "SGP",
    "country": "シンガポール",
    "countryEn": "Singapore",
    "region": "ASPAC",
    "flag": "🇸🇬",
    "primaryLawTitle": "Health Products Act 2007",
    "primaryLawEnacted": "2007-09-17",
    "classificationSystem": "4クラス分類（A/B/C/D）",
    "classCount": 4,
    "classes": [
      {
        "name": "Class A",
        "riskLevel": "低"
      },
      {
        "name": "Class B",
        "riskLevel": "中低"
      },
      {
        "name": "Class C",
        "riskLevel": "中高"
      },
      {
        "name": "Class D",
        "riskLevel": "高"
      }
    ],
    "mainAuthority": "HSA",
    "mdsapStatus": "オブザーバー（Observer）",
    "udiRequired": true,
    "electronicSystem": "SHARE (Singapore Health Product Access and Regulatory E-System)",
    "deviceNotes": "コンビネーション製品は主たる作用により規制区分を判断。HSAガイダンスで詳細な判断基準を提示。",
    "lastUpdated": "2026-04-01"
  },
  {
    "code": "THA",
    "country": "タイ",
    "countryEn": "Thailand",
    "region": "ASPAC",
    "flag": "🇹🇭",
    "primaryLawTitle": "Medical Device Act B.E. 2551 (2008)",
    "primaryLawEnacted": "2008",
    "classificationSystem": "4クラス分類（Class 1〜4）",
    "classCount": 4,
    "classes": [
      {
        "name": "Class 1",
        "riskLevel": "低"
      },
      {
        "name": "Class 2",
        "riskLevel": "中低"
      },
      {
        "name": "Class 3",
        "riskLevel": "中高"
      },
      {
        "name": "Class 4",
        "riskLevel": "高"
      }
    ],
    "mainAuthority": "Thai FDA",
    "mdsapStatus": "非参加",
    "udiRequired": false,
    "electronicSystem": "PRIVUS",
    "deviceNotes": "SaMD（Software as a Medical Device）の規制明確化が進行中。Thai FDAがガイダンス策定を検討。",
    "lastUpdated": "2026-04-01"
  },
  {
    "code": "IDN",
    "country": "インドネシア",
    "countryEn": "Indonesia",
    "region": "ASPAC",
    "flag": "🇮🇩",
    "primaryLawTitle": "Permenkes No. 62/2017 (Regulation on Marketing Authorization of Medical Devices)",
    "primaryLawEnacted": "2017-12-29",
    "classificationSystem": "4クラス分類（Class A/B/C/D）",
    "classCount": 4,
    "classes": [
      {
        "name": "Class A",
        "riskLevel": "低"
      },
      {
        "name": "Class B",
        "riskLevel": "中低"
      },
      {
        "name": "Class C",
        "riskLevel": "中高"
      },
      {
        "name": "Class D",
        "riskLevel": "高"
      }
    ],
    "mainAuthority": "Kemenkes / Dirjen Farmalkes",
    "mdsapStatus": "非参加",
    "udiRequired": false,
    "electronicSystem": "REGALKES",
    "deviceNotes": "SaMD（Software as a Medical Device）・AI診断機器の分類・承認要件に関するフレームワークが策定中。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "VNM",
    "country": "ベトナム",
    "countryEn": "Vietnam",
    "region": "ASPAC",
    "flag": "🇻🇳",
    "primaryLawTitle": "Decree 98/2021/ND-CP (Management of Medical Devices)",
    "primaryLawEnacted": "2022-01-01",
    "classificationSystem": "4クラス分類（Class A/B/C/D）",
    "classCount": 4,
    "classes": [
      {
        "name": "Class A",
        "riskLevel": "低"
      },
      {
        "name": "Class B",
        "riskLevel": "中低"
      },
      {
        "name": "Class C",
        "riskLevel": "中高"
      },
      {
        "name": "Class D",
        "riskLevel": "高"
      }
    ],
    "mainAuthority": "IMDA (旧DMEC)",
    "mdsapStatus": "非参加",
    "udiRequired": false,
    "electronicSystem": "IMDA Medical Device Registration Portal（旧DMEC Portal）",
    "deviceNotes": "SaMD（Software as a Medical Device）はDecree 98/2021の医療機器定義に含まれるが、SaMD固有の分類ルールは明示的に規定されておらず、一般的な分類ルールに従って分類される。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "MYS",
    "country": "マレーシア",
    "countryEn": "Malaysia",
    "region": "ASPAC",
    "flag": "🇲🇾",
    "primaryLawTitle": "Medical Device Act 2012 (Act 737)",
    "primaryLawEnacted": "2012",
    "classificationSystem": "4クラス分類（Class A/B/C/D）",
    "classCount": 4,
    "classes": [
      {
        "name": "Class A",
        "riskLevel": "低"
      },
      {
        "name": "Class B",
        "riskLevel": "中低"
      },
      {
        "name": "Class C",
        "riskLevel": "中高"
      },
      {
        "name": "Class D",
        "riskLevel": "高"
      }
    ],
    "mainAuthority": "MDA",
    "mdsapStatus": "Affiliate Member（2025年9月〜）",
    "udiRequired": false,
    "electronicSystem": "MeDC@St (Medical Device Centralized System)",
    "deviceNotes": "AI駆動型医療技術向けのRegulatory Sandboxが2025年に開始。SaMD規制の整備が進行中。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "SAU",
    "country": "サウジアラビア",
    "countryEn": "Saudi Arabia",
    "region": "Middle East & Africa",
    "flag": "🇸🇦",
    "primaryLawTitle": "Law of Medical Devices and Supplies",
    "primaryLawEnacted": "2021",
    "classificationSystem": "4クラス制（Class A/B/C/D）",
    "classCount": 4,
    "classes": [
      {
        "name": "Class A",
        "riskLevel": "低"
      },
      {
        "name": "Class B",
        "riskLevel": "中低"
      },
      {
        "name": "Class C",
        "riskLevel": "中高"
      },
      {
        "name": "Class D",
        "riskLevel": "高"
      }
    ],
    "mainAuthority": "SFDA",
    "mdsapStatus": "オブザーバー（Observer）",
    "udiRequired": true,
    "electronicSystem": "GHAD統合電子システム + MDMA e-Service",
    "deviceNotes": "定義はEU MDR/IVDRの定義と大きく整合。AI/ML医療機器に対するMDS-G010ガイダンスで中東地域をリード。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "CHE",
    "country": "スイス",
    "countryEn": "Switzerland",
    "region": "Europe",
    "flag": "🇨🇭",
    "primaryLawTitle": "Heilmittelgesetz (HMG) — Federal Act on Medicinal Products and Medical Devices",
    "primaryLawEnacted": "2000-12-15",
    "classificationSystem": "4クラス制（Class I/IIa/IIb/III）— EU MDR Annex VIII準用",
    "classCount": 4,
    "classes": [
      {
        "name": "Class I",
        "riskLevel": "低"
      },
      {
        "name": "Class IIa",
        "riskLevel": "中低"
      },
      {
        "name": "Class IIb",
        "riskLevel": "中高"
      },
      {
        "name": "Class III",
        "riskLevel": "高"
      }
    ],
    "mainAuthority": "Swissmedic",
    "mdsapStatus": "非参加（Non-participant）",
    "udiRequired": true,
    "electronicSystem": "swissdamed（Swiss Database for Medical Devices）",
    "deviceNotes": "EU MDRの定義と実質的に同一。美容目的機器等もMedDO Annex XVIで対象拡大。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "SWE",
    "country": "スウェーデン",
    "countryEn": "Sweden",
    "region": "Europe",
    "flag": "🇸🇪",
    "primaryLawTitle": "Regulation (EU) 2017/745 — Medical Devices Regulation (MDR)",
    "primaryLawEnacted": "2017（EU採択）/ 2021年5月26日適用",
    "classificationSystem": "EU MDR 4クラス制（Class I / IIa / IIb / III）",
    "classCount": 4,
    "classes": [
      {
        "name": "Class I",
        "riskLevel": "低"
      },
      {
        "name": "Class IIa",
        "riskLevel": "中低"
      },
      {
        "name": "Class IIb",
        "riskLevel": "中高"
      },
      {
        "name": "Class III",
        "riskLevel": "高"
      }
    ],
    "mainAuthority": "Läkemedelsverket (MPA)",
    "mdsapStatus": "非参加",
    "udiRequired": true,
    "electronicSystem": "EUDAMED + Läkemedelsverket 国内登録",
    "deviceNotes": "MDR の定義がそのまま国内法に適用。追加的な定義変更なし。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "DNK",
    "country": "デンマーク",
    "countryEn": "Denmark",
    "region": "Europe",
    "flag": "🇩🇰",
    "primaryLawTitle": "Regulation (EU) 2017/745 — MDR",
    "primaryLawEnacted": "2017 / 2021年5月26日適用",
    "classificationSystem": "EU MDR 4クラス制",
    "classCount": 4,
    "classes": [
      {
        "name": "Class I",
        "riskLevel": "低"
      },
      {
        "name": "Class IIa",
        "riskLevel": "中低"
      },
      {
        "name": "Class IIb",
        "riskLevel": "中高"
      },
      {
        "name": "Class III",
        "riskLevel": "高"
      }
    ],
    "mainAuthority": "DKMA",
    "mdsapStatus": "非参加",
    "udiRequired": true,
    "electronicSystem": "EUDAMED + DKMA国内登録",
    "deviceNotes": "追加定義変更なし。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "NOR",
    "country": "ノルウェー",
    "countryEn": "Norway",
    "region": "Europe",
    "flag": "🇳🇴",
    "primaryLawTitle": "Lov om medisinsk utstyr (Medical Devices Act)",
    "primaryLawEnacted": "2020-06-07",
    "classificationSystem": "EU MDR 4クラス制（EEA経由）",
    "classCount": 4,
    "classes": [
      {
        "name": "Class I",
        "riskLevel": "低"
      },
      {
        "name": "Class IIa",
        "riskLevel": "中低"
      },
      {
        "name": "Class IIb",
        "riskLevel": "中高"
      },
      {
        "name": "Class III",
        "riskLevel": "高"
      }
    ],
    "mainAuthority": "DMP",
    "mdsapStatus": "非参加",
    "udiRequired": true,
    "electronicSystem": "EUDAMED（アクセス調整中）+ DMP国内登録",
    "deviceNotes": "独自追加定義なし。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "FIN",
    "country": "フィンランド",
    "countryEn": "Finland",
    "region": "Europe",
    "flag": "🇫🇮",
    "primaryLawTitle": "Regulation (EU) 2017/745 — MDR",
    "primaryLawEnacted": "2017 / 2021年5月26日適用",
    "classificationSystem": "EU MDR 4クラス制",
    "classCount": 4,
    "classes": [
      {
        "name": "Class I",
        "riskLevel": "低"
      },
      {
        "name": "Class IIa",
        "riskLevel": "中低"
      },
      {
        "name": "Class IIb",
        "riskLevel": "中高"
      },
      {
        "name": "Class III",
        "riskLevel": "高"
      }
    ],
    "mainAuthority": "Fimea",
    "mdsapStatus": "非参加",
    "udiRequired": true,
    "electronicSystem": "EUDAMED + CERE（Fimea国内システム）",
    "deviceNotes": "Act 719/2021が国内補完法。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "IRL",
    "country": "アイルランド",
    "countryEn": "Ireland",
    "region": "Europe",
    "flag": "🇮🇪",
    "primaryLawTitle": "Regulation (EU) 2017/745 — MDR",
    "primaryLawEnacted": "2017 / 2021年5月26日適用",
    "classificationSystem": "EU MDR 4クラス制",
    "classCount": 4,
    "classes": [
      {
        "name": "Class I",
        "riskLevel": "低"
      },
      {
        "name": "Class IIa",
        "riskLevel": "中低"
      },
      {
        "name": "Class IIb",
        "riskLevel": "中高"
      },
      {
        "name": "Class III",
        "riskLevel": "高"
      }
    ],
    "mainAuthority": "HPRA",
    "mdsapStatus": "非参加",
    "udiRequired": true,
    "electronicSystem": "EUDAMED + HPRA国内登録",
    "deviceNotes": "追加定義変更なし。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "AUT",
    "country": "オーストリア",
    "countryEn": "Austria",
    "region": "Europe",
    "flag": "🇦🇹",
    "primaryLawTitle": "Regulation (EU) 2017/745 — MDR",
    "primaryLawEnacted": "2017 / 2021年5月26日適用",
    "classificationSystem": "EU MDR 4クラス制",
    "classCount": 4,
    "classes": [
      {
        "name": "Class I",
        "riskLevel": "低"
      },
      {
        "name": "Class IIa",
        "riskLevel": "中低"
      },
      {
        "name": "Class IIb",
        "riskLevel": "中高"
      },
      {
        "name": "Class III",
        "riskLevel": "高"
      }
    ],
    "mainAuthority": "BASG",
    "mdsapStatus": "非参加",
    "udiRequired": true,
    "electronicSystem": "EUDAMED + Medizinprodukteregister",
    "deviceNotes": "MPG 2021が国内補完法。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "MEX",
    "country": "メキシコ",
    "countryEn": "Mexico",
    "region": "Latam",
    "flag": "🇲🇽",
    "primaryLawTitle": "Ley General de Salud (General Health Law)",
    "primaryLawEnacted": "1984-02-07",
    "classificationSystem": "3クラス制（Class I/II/III）",
    "classCount": 3,
    "classes": [
      {
        "name": "Class I",
        "riskLevel": "低"
      },
      {
        "name": "Class II",
        "riskLevel": "中"
      },
      {
        "name": "Class III",
        "riskLevel": "高"
      }
    ],
    "mainAuthority": "COFEPRIS",
    "mdsapStatus": "Affiliate Member",
    "udiRequired": false,
    "electronicSystem": "DIGIPRIS",
    "deviceNotes": "2026年1月のLey General de Salud改正で定義の明確化が行われた。SaMD・AI医療機器の取扱いは今後のガイダンスで明確化予定。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "ARE",
    "country": "アラブ首長国連邦",
    "countryEn": "United Arab Emirates",
    "region": "Middle East & Africa",
    "flag": "🇦🇪",
    "primaryLawTitle": "Federal Decree-Law No. (38) of 2024 Concerning Medical Products, the Pharmacy Profession, and Pharmaceutical Establishments",
    "primaryLawEnacted": "2024",
    "classificationSystem": "4クラス制（Class I/II/III/IV）— GHTF整合",
    "classCount": 4,
    "classes": [
      {
        "name": "Class I",
        "riskLevel": "低"
      },
      {
        "name": "Class II",
        "riskLevel": "中低"
      },
      {
        "name": "Class III",
        "riskLevel": "中高"
      },
      {
        "name": "Class IV",
        "riskLevel": "高"
      }
    ],
    "mainAuthority": "MOHAP / EDE",
    "mdsapStatus": "非参加（Not participating）",
    "udiRequired": false,
    "electronicSystem": "MOHAP eサービス / EDE ポータル",
    "deviceNotes": "SaMD（Software as a Medical Device）は意図する用途に基づき医療機器として分類される場合がある。Federal Decree-Law No. 38/2024で規制範囲がバイオバンク・受託研究機関にも拡大。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "ZAF",
    "country": "南アフリカ",
    "countryEn": "South Africa",
    "region": "Middle East & Africa",
    "flag": "🇿🇦",
    "primaryLawTitle": "Medicines and Related Substances Act (Act 101 of 1965, as amended)",
    "primaryLawEnacted": "1965",
    "classificationSystem": "4クラス制（Class A / B / C / D）",
    "classCount": 4,
    "classes": [
      {
        "name": "Class A",
        "riskLevel": "低リスク"
      },
      {
        "name": "Class B",
        "riskLevel": "低〜中リスク"
      },
      {
        "name": "Class C",
        "riskLevel": "中〜高リスク"
      },
      {
        "name": "Class D",
        "riskLevel": "高リスク"
      }
    ],
    "mainAuthority": "SAHPRA",
    "mdsapStatus": "アフィリエイトメンバー（2025年4月加盟）",
    "udiRequired": false,
    "electronicSystem": "SAHPRA Medical Device Submissions Portal (MDSP) / SAHPRA Engagement Portal",
    "deviceNotes": "SaMD（Software as a Medical Device）は2025年9月にSAHPRAがAI/ML医療機器に関するガイダンスを発行し、規制対象の明確化が進行。コンビネーション製品は主たる作用機序に基づき規制区分を判断。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "PAK",
    "country": "パキスタン",
    "countryEn": "Pakistan",
    "region": "ASPAC",
    "flag": "🇵🇰",
    "primaryLawTitle": "DRAP Act 2012 (Act X of 2012)",
    "primaryLawEnacted": "2012",
    "classificationSystem": "4クラス制（Class A/B/C/D）",
    "classCount": 4,
    "classes": [
      {
        "name": "Class A",
        "riskLevel": "低"
      },
      {
        "name": "Class B",
        "riskLevel": "中低"
      },
      {
        "name": "Class C",
        "riskLevel": "中高"
      },
      {
        "name": "Class D",
        "riskLevel": "高"
      }
    ],
    "mainAuthority": "DRAP",
    "mdsapStatus": "非参加（Non-participant）",
    "udiRequired": false,
    "electronicSystem": "DRAP オンラインポータル",
    "deviceNotes": "GHTF/IMDRFの定義に整合。規制対象の範囲は段階的に拡大中。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "KEN",
    "country": "ケニア",
    "countryEn": "Kenya",
    "region": "Middle East & Africa",
    "flag": "🇰🇪",
    "primaryLawTitle": "Pharmacy and Poisons Act (Cap 244)",
    "primaryLawEnacted": "1957（複数回改正）",
    "classificationSystem": "4クラス制（Class A/B/C/D）",
    "classCount": 4,
    "classes": [
      {
        "name": "Class A",
        "riskLevel": "低"
      },
      {
        "name": "Class B",
        "riskLevel": "中低"
      },
      {
        "name": "Class C",
        "riskLevel": "中高"
      },
      {
        "name": "Class D",
        "riskLevel": "高"
      }
    ],
    "mainAuthority": "PPB",
    "mdsapStatus": "アフィリエイトメンバー（Affiliate Member, 2024年3月加入）",
    "udiRequired": false,
    "electronicSystem": "PPB オンラインポータル",
    "deviceNotes": "東アフリカ共同体（EAC）の医療機器調和ガイドラインとの整合を推進中。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "NGA",
    "country": "ナイジェリア",
    "countryEn": "Nigeria",
    "region": "Middle East & Africa",
    "flag": "🇳🇬",
    "primaryLawTitle": "NAFDAC Act (CAP N1 LFN 2004)",
    "primaryLawEnacted": "1993（2004年改正）",
    "classificationSystem": "4クラス制（Class A/B/C/D）",
    "classCount": 4,
    "classes": [
      {
        "name": "Class A",
        "riskLevel": "低"
      },
      {
        "name": "Class B",
        "riskLevel": "中低"
      },
      {
        "name": "Class C",
        "riskLevel": "中高"
      },
      {
        "name": "Class D",
        "riskLevel": "高"
      }
    ],
    "mainAuthority": "NAFDAC",
    "mdsapStatus": "非参加（Non-participant）",
    "udiRequired": false,
    "electronicSystem": "NAPAMS（NAFDAC Automated Product Administration and Monitoring System）",
    "deviceNotes": "2024年の新規制により、定義と適用範囲が国際基準に整合。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "MAR",
    "country": "モロッコ",
    "countryEn": "Morocco",
    "region": "Middle East & Africa",
    "flag": "🇲🇦",
    "primaryLawTitle": "Loi 84-12 relative aux dispositifs médicaux",
    "primaryLawEnacted": "2016",
    "classificationSystem": "4クラス制（Class I/IIa/IIb/III）— EU MDD準拠",
    "classCount": 4,
    "classes": [
      {
        "name": "Class I",
        "riskLevel": "低"
      },
      {
        "name": "Class IIa",
        "riskLevel": "中低"
      },
      {
        "name": "Class IIb",
        "riskLevel": "中高"
      },
      {
        "name": "Class III",
        "riskLevel": "高"
      }
    ],
    "mainAuthority": "DMP",
    "mdsapStatus": "非参加（Non-participant）",
    "udiRequired": false,
    "electronicSystem": "DMP/AMMPS ポータル（整備中）",
    "deviceNotes": "フランス語圏の規制伝統を踏まえ、EU MDDの定義を基盤としている。EU MDRへの移行は検討段階。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "ISR",
    "country": "イスラエル",
    "countryEn": "Israel",
    "region": "Middle East & Africa",
    "flag": "🇮🇱",
    "primaryLawTitle": "Medical Equipment Law, 5772-2012",
    "primaryLawEnacted": "2012",
    "classificationSystem": "参照市場依存（独自分類制度なし）",
    "classCount": 3,
    "classes": [
      {
        "name": "Class I（参照市場準拠）",
        "riskLevel": "低"
      },
      {
        "name": "Class II（参照市場準拠）",
        "riskLevel": "中"
      },
      {
        "name": "Class III（参照市場準拠）",
        "riskLevel": "高"
      }
    ],
    "mainAuthority": "AMAR",
    "mdsapStatus": "アフィリエイトメンバー（Affiliate Member）",
    "udiRequired": false,
    "electronicSystem": "AMAR 電子申請システム",
    "deviceNotes": "定義は非常に広範で、EU MDRやFDAの定義と概ね整合。コンビネーション製品の扱いはケースバイケースでAMARが判断。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "EGY",
    "country": "エジプト",
    "countryEn": "Egypt",
    "region": "Middle East & Africa",
    "flag": "🇪🇬",
    "primaryLawTitle": "Law No. 151 of 2019 — Establishing the Egyptian Drug Authority",
    "primaryLawEnacted": "2019",
    "classificationSystem": "4クラス制（Class I / IIa / IIb / III）— EU MDR整合",
    "classCount": 4,
    "classes": [
      {
        "name": "Class I",
        "riskLevel": "低"
      },
      {
        "name": "Class IIa",
        "riskLevel": "中低"
      },
      {
        "name": "Class IIb",
        "riskLevel": "中高"
      },
      {
        "name": "Class III",
        "riskLevel": "高"
      }
    ],
    "mainAuthority": "EDA",
    "mdsapStatus": "非参加（Not participating）",
    "udiRequired": false,
    "electronicSystem": "MeDevice ポータル",
    "deviceNotes": "定義はEU MDRの定義に概ね整合。EDAはAI分類ツールを導入し、機器分類の効率化を推進。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "COL",
    "country": "コロンビア",
    "countryEn": "Colombia",
    "region": "Latam",
    "flag": "🇨🇴",
    "primaryLawTitle": "Decreto 4725 de 2005 — Régimen de Registros Sanitarios, Permiso de Comercialización y Vigilancia Sanitaria de los Dispositivos Médicos para Uso Humano",
    "primaryLawEnacted": "2005",
    "classificationSystem": "4クラス制（Class I / IIa / IIb / III）— EU MDR整合",
    "classCount": 4,
    "classes": [
      {
        "name": "Class I",
        "riskLevel": "低"
      },
      {
        "name": "Class IIa",
        "riskLevel": "中低"
      },
      {
        "name": "Class IIb",
        "riskLevel": "中高"
      },
      {
        "name": "Class III",
        "riskLevel": "高"
      }
    ],
    "mainAuthority": "INVIMA",
    "mdsapStatus": "非参加（Not participating）— ただしISO 13485 / MDSAP認証を品質証拠として受容",
    "udiRequired": true,
    "electronicSystem": "INVIMA オンライン申請プラットフォーム",
    "deviceNotes": "定義はEU MDRの定義に概ね整合。SaMDも対象に含まれる。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "CHL",
    "country": "チリ",
    "countryEn": "Chile",
    "region": "Latam",
    "flag": "🇨🇱",
    "primaryLawTitle": "Código Sanitario — Libro VII: De los productos farmacéuticos y dispositivos médicos",
    "primaryLawEnacted": "1967",
    "classificationSystem": "4クラス制（Class I / II / III / IV）",
    "classCount": 4,
    "classes": [
      {
        "name": "Class I",
        "riskLevel": "極低"
      },
      {
        "name": "Class II",
        "riskLevel": "中"
      },
      {
        "name": "Class III",
        "riskLevel": "高"
      },
      {
        "name": "Class IV",
        "riskLevel": "最高"
      }
    ],
    "mainAuthority": "ISP / ANDID",
    "mdsapStatus": "非参加（Not participating）",
    "udiRequired": false,
    "electronicSystem": "ISP/ANDID オンライン申請",
    "deviceNotes": "段階的規制のため、全製品カテゴリが同時に規制対象とはならない。保健省のDecreto Supremoで対象指定されたカテゴリのみ強制適合性検証の対象。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "NZL",
    "country": "ニュージーランド",
    "countryEn": "New Zealand",
    "region": "ASPAC",
    "flag": "🇳🇿",
    "primaryLawTitle": "Medicines Act 1981",
    "primaryLawEnacted": "1981",
    "classificationSystem": "5クラス制（Class I / IIa / IIb / III / AIMD）— GHTF準拠",
    "classCount": 5,
    "classes": [
      {
        "name": "Class I",
        "riskLevel": "低リスク"
      },
      {
        "name": "Class IIa",
        "riskLevel": "低〜中リスク"
      },
      {
        "name": "Class IIb",
        "riskLevel": "中〜高リスク"
      },
      {
        "name": "Class III",
        "riskLevel": "高リスク"
      },
      {
        "name": "AIMD",
        "riskLevel": "高リスク"
      }
    ],
    "mainAuthority": "Medsafe",
    "mdsapStatus": "非参加（関連はあるが MDSAP 正式メンバーではない）",
    "udiRequired": false,
    "electronicSystem": "WAND Online System",
    "deviceNotes": "SaMD は現行法では明確な規定がなく、新法で対応予定。Therapeutic Products Act 2023 / Medical Products Bill で SaMD の規制枠組みが整備される見込み。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "PHL",
    "country": "フィリピン",
    "countryEn": "Republic of the Philippines",
    "region": "ASPAC",
    "flag": "🇵🇭",
    "primaryLawTitle": "Republic Act No. 9711 — FDA Act of 2009",
    "primaryLawEnacted": "2009",
    "classificationSystem": "4クラス制（Class A / B / C / D）— ASEAN AMDD 整合",
    "classCount": 4,
    "classes": [
      {
        "name": "Class A",
        "riskLevel": "低リスク"
      },
      {
        "name": "Class B",
        "riskLevel": "低〜中リスク"
      },
      {
        "name": "Class C",
        "riskLevel": "中〜高リスク"
      },
      {
        "name": "Class D",
        "riskLevel": "高リスク"
      }
    ],
    "mainAuthority": "FDA Philippines",
    "mdsapStatus": "非参加",
    "udiRequired": false,
    "electronicSystem": "FDA eServices Portal",
    "deviceNotes": "2025年にドラフト FDA Circular で SaMD/MDSW の分類・評価ガイドラインを策定中。ASEAN および国際規制慣行に整合した枠組みを目指している。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "ARG",
    "country": "アルゼンチン",
    "countryEn": "Argentine Republic",
    "region": "Latam",
    "flag": "🇦🇷",
    "primaryLawTitle": "Ley 16.463 — Ley de Medicamentos",
    "primaryLawEnacted": "1964",
    "classificationSystem": "4クラス制（Class I / II / III / IV）— GHTF 準拠",
    "classCount": 4,
    "classes": [
      {
        "name": "Class I",
        "riskLevel": "低リスク"
      },
      {
        "name": "Class II",
        "riskLevel": "低〜中リスク"
      },
      {
        "name": "Class III",
        "riskLevel": "中〜高リスク"
      },
      {
        "name": "Class IV",
        "riskLevel": "高リスク"
      }
    ],
    "mainAuthority": "ANMAT",
    "mdsapStatus": "アフィリエイトメンバー（Affiliate Member）",
    "udiRequired": false,
    "electronicSystem": "HELENA ポータル + TAD（Trámites a Distancia）",
    "deviceNotes": "コンビネーション製品は主たる作用機序に基づき医療機器または医薬品として分類。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "TUR",
    "country": "トルコ",
    "countryEn": "Republic of Türkiye",
    "region": "Europe",
    "flag": "🇹🇷",
    "primaryLawTitle": "Tıbbi Cihaz Yönetmeliği (Medical Device Regulation)",
    "primaryLawEnacted": "2021-06-02",
    "classificationSystem": "4クラス制（Class I / IIa / IIb / III）— EU MDR 整合",
    "classCount": 4,
    "classes": [
      {
        "name": "Class I",
        "riskLevel": "低リスク"
      },
      {
        "name": "Class IIa",
        "riskLevel": "低〜中リスク"
      },
      {
        "name": "Class IIb",
        "riskLevel": "中〜高リスク"
      },
      {
        "name": "Class III",
        "riskLevel": "高リスク"
      }
    ],
    "mainAuthority": "TİTCK",
    "mdsapStatus": "非参加",
    "udiRequired": true,
    "electronicSystem": "ÜTS (Ürün Takip Sistemi / Product Tracking System)",
    "deviceNotes": "EU MDR と同様、特定の美容製品、清浄・消毒製品、遺伝子治療製品等の取扱いに関する規定あり。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "RUS",
    "country": "ロシア",
    "countryEn": "Russian Federation",
    "region": "Europe",
    "flag": "🇷🇺",
    "primaryLawTitle": "連邦法 No.323-FZ「ロシア連邦における国民の健康保護の基本に関する法律」",
    "primaryLawEnacted": "2011-11-21",
    "classificationSystem": "リスクベース4クラス分類（EAEU整合）",
    "classCount": 4,
    "classes": [
      {
        "name": "Class I",
        "riskLevel": "低"
      },
      {
        "name": "Class IIa",
        "riskLevel": "中低"
      },
      {
        "name": "Class IIb",
        "riskLevel": "中高"
      },
      {
        "name": "Class III",
        "riskLevel": "高"
      }
    ],
    "mainAuthority": "Roszdravnadzor",
    "mdsapStatus": "非参加",
    "udiRequired": true,
    "electronicSystem": "Gosuslugi / Roszdravnadzor電子申請ポータル",
    "deviceNotes": "2025年9月1日から、従来型機器・ソフトウェア・AI搭載ソフトウェアに区分した技術文書要件が導入。サイバーセキュリティ要件がソフトウェア医療機器に義務化。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "POL",
    "country": "ポーランド",
    "countryEn": "Republic of Poland",
    "region": "Europe",
    "flag": "🇵🇱",
    "primaryLawTitle": "2022年4月7日医療機器法（Ustawa o wyrobach medycznych）",
    "primaryLawEnacted": "2022-04-07",
    "classificationSystem": "EU MDRリスクベース4クラス分類",
    "classCount": 4,
    "classes": [
      {
        "name": "Class I",
        "riskLevel": "低"
      },
      {
        "name": "Class IIa",
        "riskLevel": "中低"
      },
      {
        "name": "Class IIb",
        "riskLevel": "中高"
      },
      {
        "name": "Class III",
        "riskLevel": "高"
      }
    ],
    "mainAuthority": "URPL",
    "mdsapStatus": "該当なし（EU加盟国）",
    "udiRequired": true,
    "electronicSystem": "EUDAMED + URPLポータル",
    "deviceNotes": "ポーランド国内法で追加の定義は行わず、EU MDR/IVDRの定義をそのまま適用。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "KWT",
    "country": "クウェート",
    "countryEn": "State of Kuwait",
    "region": "Middle East & Africa",
    "flag": "🇰🇼",
    "primaryLawTitle": "省令 MD 387/2025（医療機器登録・規制に関する省令）",
    "primaryLawEnacted": "2025",
    "classificationSystem": "リスクベース4クラス分類（GCC/GHTF整合）",
    "classCount": 4,
    "classes": [
      {
        "name": "Class A",
        "riskLevel": "低"
      },
      {
        "name": "Class B",
        "riskLevel": "中低"
      },
      {
        "name": "Class C",
        "riskLevel": "中高"
      },
      {
        "name": "Class D",
        "riskLevel": "高"
      }
    ],
    "mainAuthority": "MOH / MMPRRA",
    "mdsapStatus": "非参加",
    "udiRequired": false,
    "electronicSystem": "MOH電子サービスポータル",
    "deviceNotes": "SaMDに関する独自規定は2026年時点で策定中。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "QAT",
    "country": "カタール",
    "countryEn": "State of Qatar",
    "region": "Middle East & Africa",
    "flag": "🇶🇦",
    "primaryLawTitle": "公衆衛生省令（医療機器登録・輸入に関する規則）",
    "primaryLawEnacted": "要確認（包括的法典なし）",
    "classificationSystem": "参照国分類（FDA/EU MDR準拠）",
    "classCount": 3,
    "classes": [
      {
        "name": "Class I",
        "riskLevel": "低"
      },
      {
        "name": "Class IIa / II",
        "riskLevel": "中"
      },
      {
        "name": "Class III (植込み型)",
        "riskLevel": "高"
      }
    ],
    "mainAuthority": "MOPH / PDCD",
    "mdsapStatus": "非参加",
    "udiRequired": false,
    "electronicSystem": "MOPH DHP ポータル",
    "deviceNotes": "SaMDに関する独自規定は2026年時点で未整備。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "JOR",
    "country": "ヨルダン",
    "countryEn": "Hashemite Kingdom of Jordan",
    "region": "Middle East & Africa",
    "flag": "🇯🇴",
    "primaryLawTitle": "Drug & Pharmacy Law No. 88 of 1964（改正あり）",
    "primaryLawEnacted": "1964",
    "classificationSystem": "EU/FDA 分類モデルの受容（Class I / II / III）",
    "classCount": 3,
    "classes": [
      {
        "name": "Class I",
        "riskLevel": "低リスク"
      },
      {
        "name": "Class II",
        "riskLevel": "中リスク"
      },
      {
        "name": "Class III",
        "riskLevel": "高リスク"
      }
    ],
    "mainAuthority": "JFDA",
    "mdsapStatus": "非参加",
    "udiRequired": false,
    "electronicSystem": "要確認（JFDA オンラインポータルの有無は未確認）",
    "deviceNotes": "定義は GHTF/IMDRF の定義に概ね準拠しているが、ヨルダン固有の法的定義文書の公開は限定的。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "BHR",
    "country": "バーレーン",
    "countryEn": "Kingdom of Bahrain",
    "region": "Middle East & Africa",
    "flag": "🇧🇭",
    "primaryLawTitle": "Law No. 38 of 2009（NHRA 設立法）",
    "primaryLawEnacted": "2009",
    "classificationSystem": "EU MDR ベースの分類（Class I / IIa / IIb / III / IVD A-D）",
    "classCount": 5,
    "classes": [
      {
        "name": "Class I",
        "riskLevel": "低リスク"
      },
      {
        "name": "Class IIa",
        "riskLevel": "低〜中リスク"
      },
      {
        "name": "Class IIb",
        "riskLevel": "中〜高リスク"
      },
      {
        "name": "Class III",
        "riskLevel": "高リスク"
      },
      {
        "name": "IVD A-D",
        "riskLevel": "低〜高リスク（IVD専用分類）"
      }
    ],
    "mainAuthority": "NHRA",
    "mdsapStatus": "非参加",
    "udiRequired": false,
    "electronicSystem": "NHRA オンラインポータル",
    "deviceNotes": "NHRA Medical Devices Registration Guideline Ver 7.0 が現行の主要ガイドライン文書。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "OMN",
    "country": "オマーン",
    "countryEn": "Sultanate of Oman",
    "region": "Middle East & Africa",
    "flag": "🇴🇲",
    "primaryLawTitle": "Ministerial Decree 113/2020（薬局業務・医薬品企業規制執行令）",
    "primaryLawEnacted": "2020",
    "classificationSystem": "GHTF ベースの4クラス分類（Class A / B / C / D）",
    "classCount": 4,
    "classes": [
      {
        "name": "Class A",
        "riskLevel": "低リスク"
      },
      {
        "name": "Class B",
        "riskLevel": "低〜中リスク"
      },
      {
        "name": "Class C",
        "riskLevel": "中〜高リスク"
      },
      {
        "name": "Class D",
        "riskLevel": "高リスク"
      }
    ],
    "mainAuthority": "DGPADC / Drug Safety Center",
    "mdsapStatus": "非参加",
    "udiRequired": false,
    "electronicSystem": "MOH オンラインポータル",
    "deviceNotes": "MOH はガイダンス文書（GD シリーズ）で詳細な定義・適用範囲を規定。GD-22（製造業者登録）、GD-3（Class C/D 登録）、GD-9（低リスク機器登録）等。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "PER",
    "country": "ペルー",
    "countryEn": "Republic of Peru",
    "region": "Latam",
    "flag": "🇵🇪",
    "primaryLawTitle": "Ley N° 29459 — Ley de los Productos Farmacéuticos, Dispositivos Médicos y Productos Sanitarios",
    "primaryLawEnacted": "2009",
    "classificationSystem": "4クラス分類（Class I / II / III / IV）",
    "classCount": 4,
    "classes": [
      {
        "name": "Class I",
        "riskLevel": "低リスク"
      },
      {
        "name": "Class II",
        "riskLevel": "中リスク"
      },
      {
        "name": "Class III",
        "riskLevel": "高リスク"
      },
      {
        "name": "Class IV",
        "riskLevel": "最高リスク（クリティカル）"
      }
    ],
    "mainAuthority": "DIGEMID",
    "mdsapStatus": "非参加",
    "udiRequired": false,
    "electronicSystem": "DIGEMID オンラインポータル / VUCE（Ventanilla Única de Comercio Exterior）",
    "deviceNotes": "GMDN/UMDN コードによる国際命名法（スペイン語表記）の適用が必要。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "ECU",
    "country": "エクアドル",
    "countryEn": "Republic of Ecuador",
    "region": "Latam",
    "flag": "🇪🇨",
    "primaryLawTitle": "Ley Orgánica de Salud（組織的保健法）",
    "primaryLawEnacted": "2006",
    "classificationSystem": "GHTF ベースの4クラス分類（Class I / IIa / IIb / III）",
    "classCount": 4,
    "classes": [
      {
        "name": "Class I",
        "riskLevel": "低リスク"
      },
      {
        "name": "Class IIa",
        "riskLevel": "低〜中リスク"
      },
      {
        "name": "Class IIb",
        "riskLevel": "中〜高リスク"
      },
      {
        "name": "Class III",
        "riskLevel": "高リスク"
      }
    ],
    "mainAuthority": "ARCSA",
    "mdsapStatus": "非参加",
    "udiRequired": true,
    "electronicSystem": "ARCSA オンラインポータル（gob.ec 経由）",
    "deviceNotes": "Resolution ARCSA-DE-026-2016-YMIH（2018年に ARCSA-DE-030-2018-JCGO で改正）が詳細な定義・適用範囲を規定。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "CRI",
    "country": "コスタリカ",
    "countryEn": "Republic of Costa Rica",
    "region": "Latam",
    "flag": "🇨🇷",
    "primaryLawTitle": "Ley General de Salud N° 5395（一般保健法）",
    "primaryLawEnacted": "1973",
    "classificationSystem": "4クラス分類（Class 1 / 2 / 3 / 4）",
    "classCount": 4,
    "classes": [
      {
        "name": "Class 1",
        "riskLevel": "低リスク"
      },
      {
        "name": "Class 2",
        "riskLevel": "中リスク"
      },
      {
        "name": "Class 3",
        "riskLevel": "高リスク"
      },
      {
        "name": "Class 4",
        "riskLevel": "最高リスク"
      }
    ],
    "mainAuthority": "Ministerio de Salud",
    "mdsapStatus": "非参加",
    "udiRequired": false,
    "electronicSystem": "Regístrelo（保健省オンライン登録ポータル）",
    "deviceNotes": "定義は国際的な GHTF/IMDRF の定義に概ね準拠。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "URY",
    "country": "ウルグアイ",
    "countryEn": "Oriental Republic of Uruguay",
    "region": "Latam",
    "flag": "🇺🇾",
    "primaryLawTitle": "Decreto 59/005（医療機器の登録・管理に関する規則）",
    "primaryLawEnacted": "2005",
    "classificationSystem": "3クラス分類（Class I / II / III）",
    "classCount": 3,
    "classes": [
      {
        "name": "Class I",
        "riskLevel": "低リスク"
      },
      {
        "name": "Class II",
        "riskLevel": "中リスク"
      },
      {
        "name": "Class III",
        "riskLevel": "高リスク"
      }
    ],
    "mainAuthority": "MSP/DGSP",
    "mdsapStatus": "非参加",
    "udiRequired": false,
    "electronicSystem": "要確認",
    "deviceNotes": "定義は MERCOSUR GMC 決議に基づき、GHTF/IMDRF の定義に概ね準拠。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "PRY",
    "country": "パラグアイ",
    "countryEn": "Republic of Paraguay",
    "region": "Latam",
    "flag": "🇵🇾",
    "primaryLawTitle": "Ley N° 1119/97（医薬品等に関する法律）",
    "primaryLawEnacted": "1997",
    "classificationSystem": "4クラス分類（Class I / II / III / IV）",
    "classCount": 4,
    "classes": [
      {
        "name": "Class I",
        "riskLevel": "低リスク"
      },
      {
        "name": "Class II",
        "riskLevel": "中低リスク"
      },
      {
        "name": "Class III",
        "riskLevel": "中高リスク"
      },
      {
        "name": "Class IV",
        "riskLevel": "高リスク"
      }
    ],
    "mainAuthority": "DNVS",
    "mdsapStatus": "非参加",
    "udiRequired": false,
    "electronicSystem": "DNVS オンラインシステム",
    "deviceNotes": "定義は MERCOSUR GMC 決議に基づく。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "DOM",
    "country": "ドミニカ共和国",
    "countryEn": "Dominican Republic",
    "region": "Latam",
    "flag": "🇩🇴",
    "primaryLawTitle": "Ley General de Salud N° 42-01（一般保健法）",
    "primaryLawEnacted": "2001",
    "classificationSystem": "4クラス分類（Class I / II / III / IV）",
    "classCount": 4,
    "classes": [
      {
        "name": "Class I",
        "riskLevel": "低リスク"
      },
      {
        "name": "Class II",
        "riskLevel": "中低リスク"
      },
      {
        "name": "Class III",
        "riskLevel": "中高リスク"
      },
      {
        "name": "Class IV",
        "riskLevel": "高リスク"
      }
    ],
    "mainAuthority": "DIGEMAPS",
    "mdsapStatus": "非参加",
    "udiRequired": false,
    "electronicSystem": "要確認",
    "deviceNotes": "定義は GHTF/IMDRF の国際的定義に概ね準拠。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "PAN",
    "country": "パナマ",
    "countryEn": "Republic of Panama",
    "region": "Latam",
    "flag": "🇵🇦",
    "primaryLawTitle": "Ley N° 1 de 2001（医薬品・その他保健製品に関する法律）",
    "primaryLawEnacted": "2001",
    "classificationSystem": "4クラス分類（Class I / II / III / IV）",
    "classCount": 4,
    "classes": [
      {
        "name": "Class I",
        "riskLevel": "低リスク"
      },
      {
        "name": "Class II",
        "riskLevel": "中低リスク"
      },
      {
        "name": "Class III",
        "riskLevel": "中高リスク"
      },
      {
        "name": "Class IV",
        "riskLevel": "高リスク"
      }
    ],
    "mainAuthority": "DNFD",
    "mdsapStatus": "非参加",
    "udiRequired": false,
    "electronicSystem": "要確認",
    "deviceNotes": "定義は GHTF/IMDRF の国際的定義に概ね準拠。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "GTM",
    "country": "グアテマラ",
    "countryEn": "Republic of Guatemala",
    "region": "Latam",
    "flag": "🇬🇹",
    "primaryLawTitle": "Código de Salud (Decreto 90-97)（保健法典）",
    "primaryLawEnacted": "1997",
    "classificationSystem": "4クラス分類（Class I / II / III / IV）",
    "classCount": 4,
    "classes": [
      {
        "name": "Class I",
        "riskLevel": "低リスク"
      },
      {
        "name": "Class II",
        "riskLevel": "中低リスク"
      },
      {
        "name": "Class III",
        "riskLevel": "中高リスク"
      },
      {
        "name": "Class IV",
        "riskLevel": "高リスク"
      }
    ],
    "mainAuthority": "MSPAS/DRPF",
    "mdsapStatus": "非参加",
    "udiRequired": false,
    "electronicSystem": "要確認",
    "deviceNotes": "定義は RTCA（中米技術規則）に基づき、GHTF/IMDRF の定義に概ね準拠。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "HND",
    "country": "ホンジュラス",
    "countryEn": "Republic of Honduras",
    "region": "Latam",
    "flag": "🇭🇳",
    "primaryLawTitle": "Ley para la creación de ARSA（ARSA 設立法）",
    "primaryLawEnacted": "2014",
    "classificationSystem": "4クラス分類（Class I / II / III / IV）",
    "classCount": 4,
    "classes": [
      {
        "name": "Class I",
        "riskLevel": "低リスク"
      },
      {
        "name": "Class II",
        "riskLevel": "中低リスク"
      },
      {
        "name": "Class III",
        "riskLevel": "中高リスク"
      },
      {
        "name": "Class IV",
        "riskLevel": "高リスク"
      }
    ],
    "mainAuthority": "ARSA",
    "mdsapStatus": "非参加",
    "udiRequired": false,
    "electronicSystem": "ARSA オンラインシステム",
    "deviceNotes": "定義は RTCA（中米技術規則）に基づき、GHTF/IMDRF の定義に概ね準拠。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "BGD",
    "country": "バングラデシュ",
    "countryEn": "People's Republic of Bangladesh",
    "region": "ASPAC",
    "flag": "🇧🇩",
    "primaryLawTitle": "Medical Devices Act 2023（医療機器法）",
    "primaryLawEnacted": "2023",
    "classificationSystem": "リスクベース4クラス分類（IMDRF整合・導入中）",
    "classCount": 4,
    "classes": [
      {
        "name": "Class A",
        "riskLevel": "低"
      },
      {
        "name": "Class B",
        "riskLevel": "中低"
      },
      {
        "name": "Class C",
        "riskLevel": "中高"
      },
      {
        "name": "Class D",
        "riskLevel": "高"
      }
    ],
    "mainAuthority": "DGDA",
    "mdsapStatus": "非参加",
    "udiRequired": false,
    "electronicSystem": "DGDA オンラインポータル（段階的導入中）",
    "deviceNotes": "従来は Drugs Act 1940 の「drug」定義に一部の機器が含まれていた。Medical Devices Act 2023 で独立した定義を導入。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "LKA",
    "country": "スリランカ",
    "countryEn": "Democratic Socialist Republic of Sri Lanka",
    "region": "ASPAC",
    "flag": "🇱🇰",
    "primaryLawTitle": "NMRA Act No. 5 of 2015（国家医薬品規制庁法）",
    "primaryLawEnacted": "2015",
    "classificationSystem": "リスクベース4クラス分類（IMDRF整合）",
    "classCount": 4,
    "classes": [
      {
        "name": "Class A",
        "riskLevel": "低"
      },
      {
        "name": "Class B",
        "riskLevel": "中低"
      },
      {
        "name": "Class C",
        "riskLevel": "中高"
      },
      {
        "name": "Class D",
        "riskLevel": "高"
      }
    ],
    "mainAuthority": "NMRA",
    "mdsapStatus": "非参加",
    "udiRequired": false,
    "electronicSystem": "NMRA オンラインシステム（段階的導入中）",
    "deviceNotes": "NMRA Act により医療機器が医薬品と区別して定義・規制される枠組みが確立。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "KHM",
    "country": "カンボジア",
    "countryEn": "Kingdom of Cambodia",
    "region": "ASPAC",
    "flag": "🇰🇭",
    "primaryLawTitle": "Sub-decree on Management of Medical Devices（医療機器管理に関する王令）",
    "primaryLawEnacted": "要確認",
    "classificationSystem": "リスクベース4クラス分類（ASEAN AMDD / IMDRF整合）",
    "classCount": 4,
    "classes": [
      {
        "name": "Class A",
        "riskLevel": "低"
      },
      {
        "name": "Class B",
        "riskLevel": "中低"
      },
      {
        "name": "Class C",
        "riskLevel": "中高"
      },
      {
        "name": "Class D",
        "riskLevel": "高"
      }
    ],
    "mainAuthority": "DDF",
    "mdsapStatus": "非参加",
    "udiRequired": false,
    "electronicSystem": "要確認",
    "deviceNotes": "ASEAN AMDDの定義に整合する方向で制度整備中。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "MMR",
    "country": "ミャンマー",
    "countryEn": "Republic of the Union of Myanmar",
    "region": "ASPAC",
    "flag": "🇲🇲",
    "primaryLawTitle": "National Drug Law 1992（国家医薬品法）",
    "primaryLawEnacted": "1992",
    "classificationSystem": "リスクベース4クラス分類（ASEAN AMDD整合を目指す）",
    "classCount": 4,
    "classes": [
      {
        "name": "Class A",
        "riskLevel": "低"
      },
      {
        "name": "Class B",
        "riskLevel": "中低"
      },
      {
        "name": "Class C",
        "riskLevel": "中高"
      },
      {
        "name": "Class D",
        "riskLevel": "高"
      }
    ],
    "mainAuthority": "FDA Myanmar",
    "mdsapStatus": "非参加",
    "udiRequired": false,
    "electronicSystem": "要確認",
    "deviceNotes": "政治的不安定により、最新の法的定義の確認が困難な状況。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "LAO",
    "country": "ラオス",
    "countryEn": "Lao People's Democratic Republic",
    "region": "ASPAC",
    "flag": "🇱🇦",
    "primaryLawTitle": "Drug and Medical Products Law（医薬品・医療製品法）",
    "primaryLawEnacted": "要確認",
    "classificationSystem": "リスクベース4クラス分類（ASEAN AMDD / IMDRF整合）",
    "classCount": 4,
    "classes": [
      {
        "name": "Class A",
        "riskLevel": "低"
      },
      {
        "name": "Class B",
        "riskLevel": "中低"
      },
      {
        "name": "Class C",
        "riskLevel": "中高"
      },
      {
        "name": "Class D",
        "riskLevel": "高"
      }
    ],
    "mainAuthority": "FDD",
    "mdsapStatus": "非参加",
    "udiRequired": false,
    "electronicSystem": "要確認",
    "deviceNotes": "ASEAN AMDDの定義に整合する方向で制度整備中。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "MNG",
    "country": "モンゴル",
    "countryEn": "Mongolia",
    "region": "ASPAC",
    "flag": "🇲🇳",
    "primaryLawTitle": "Medicines and Medical Devices Law（医薬品・医療機器法）",
    "primaryLawEnacted": "要確認",
    "classificationSystem": "リスクベース分類（詳細は要確認）",
    "classCount": 3,
    "classes": [
      {
        "name": "Low Risk",
        "riskLevel": "低"
      },
      {
        "name": "Medium Risk",
        "riskLevel": "中"
      },
      {
        "name": "High Risk",
        "riskLevel": "高"
      }
    ],
    "mainAuthority": "MOH Mongolia",
    "mdsapStatus": "非参加",
    "udiRequired": false,
    "electronicSystem": "要確認",
    "deviceNotes": "WHO/IMDRF定義との整合を推進中。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "NLD",
    "country": "オランダ",
    "countryEn": "Netherlands",
    "region": "Europe",
    "flag": "🇳🇱",
    "primaryLawTitle": "Regulation (EU) 2017/745 — Medical Devices Regulation (MDR)",
    "primaryLawEnacted": "2017（EU採択）/ 2021年5月26日適用",
    "classificationSystem": "EU MDR 4クラス制（Class I / IIa / IIb / III）",
    "classCount": 4,
    "classes": [
      {
        "name": "Class I",
        "riskLevel": "低"
      },
      {
        "name": "Class IIa",
        "riskLevel": "中低"
      },
      {
        "name": "Class IIb",
        "riskLevel": "中高"
      },
      {
        "name": "Class III",
        "riskLevel": "高"
      }
    ],
    "mainAuthority": "IGJ",
    "mdsapStatus": "非参加",
    "udiRequired": true,
    "electronicSystem": "EUDAMED + CIBG 国内登録",
    "deviceNotes": "MDR の定義がそのまま国内法に適用。追加的な定義変更なし。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "BEL",
    "country": "ベルギー",
    "countryEn": "Belgium",
    "region": "Europe",
    "flag": "🇧🇪",
    "primaryLawTitle": "Regulation (EU) 2017/745 — Medical Devices Regulation (MDR)",
    "primaryLawEnacted": "2017（EU採択）/ 2021年5月26日適用",
    "classificationSystem": "EU MDR 4クラス制（Class I / IIa / IIb / III）",
    "classCount": 4,
    "classes": [
      {
        "name": "Class I",
        "riskLevel": "低"
      },
      {
        "name": "Class IIa",
        "riskLevel": "中低"
      },
      {
        "name": "Class IIb",
        "riskLevel": "中高"
      },
      {
        "name": "Class III",
        "riskLevel": "高"
      }
    ],
    "mainAuthority": "FAMHP (AFMPS)",
    "mdsapStatus": "非参加",
    "udiRequired": true,
    "electronicSystem": "EUDAMED + FAMHP 国内登録",
    "deviceNotes": "MDR の定義がそのまま国内法に適用。追加的な定義変更なし。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "ESP",
    "country": "スペイン",
    "countryEn": "Spain",
    "region": "Europe",
    "flag": "🇪🇸",
    "primaryLawTitle": "Regulation (EU) 2017/745 — Medical Devices Regulation (MDR)",
    "primaryLawEnacted": "2017（EU採択）/ 2021年5月26日適用",
    "classificationSystem": "EU MDR 4クラス制（Class I / IIa / IIb / III）",
    "classCount": 4,
    "classes": [
      {
        "name": "Class I",
        "riskLevel": "低"
      },
      {
        "name": "Class IIa",
        "riskLevel": "中低"
      },
      {
        "name": "Class IIb",
        "riskLevel": "中高"
      },
      {
        "name": "Class III",
        "riskLevel": "高"
      }
    ],
    "mainAuthority": "AEMPS",
    "mdsapStatus": "非参加",
    "udiRequired": true,
    "electronicSystem": "EUDAMED + AEMPS 国内登録（Registro Español de Productos Sanitarios）",
    "deviceNotes": "MDR の定義がそのまま国内法に適用。追加的な定義変更なし。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "ITA",
    "country": "イタリア",
    "countryEn": "Italy",
    "region": "Europe",
    "flag": "🇮🇹",
    "primaryLawTitle": "Regulation (EU) 2017/745 — Medical Devices Regulation (MDR)",
    "primaryLawEnacted": "2017（EU採択）/ 2021年5月26日適用",
    "classificationSystem": "EU MDR 4クラス制（Class I / IIa / IIb / III）",
    "classCount": 4,
    "classes": [
      {
        "name": "Class I",
        "riskLevel": "低"
      },
      {
        "name": "Class IIa",
        "riskLevel": "中低"
      },
      {
        "name": "Class IIb",
        "riskLevel": "中高"
      },
      {
        "name": "Class III",
        "riskLevel": "高"
      }
    ],
    "mainAuthority": "Min. Salute",
    "mdsapStatus": "非参加",
    "udiRequired": true,
    "electronicSystem": "EUDAMED + Banca dati/Repertorio dei dispositivi medici",
    "deviceNotes": "MDR の定義がそのまま国内法に適用。追加的な定義変更なし。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "ROU",
    "country": "ルーマニア",
    "countryEn": "Romania",
    "region": "Europe",
    "flag": "🇷🇴",
    "primaryLawTitle": "Regulation (EU) 2017/745 — Medical Devices Regulation (MDR)",
    "primaryLawEnacted": "2017（EU採択）/ 2021年5月26日適用",
    "classificationSystem": "EU MDR 4クラス制（Class I / IIa / IIb / III）",
    "classCount": 4,
    "classes": [
      {
        "name": "Class I",
        "riskLevel": "低"
      },
      {
        "name": "Class IIa",
        "riskLevel": "中低"
      },
      {
        "name": "Class IIb",
        "riskLevel": "中高"
      },
      {
        "name": "Class III",
        "riskLevel": "高"
      }
    ],
    "mainAuthority": "NAMMDR (ANMDMR)",
    "mdsapStatus": "非参加",
    "udiRequired": true,
    "electronicSystem": "EUDAMED + NAMMDR 国内登録",
    "deviceNotes": "MDR の定義がそのまま国内法に適用。追加的な定義変更なし。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "BGR",
    "country": "ブルガリア",
    "countryEn": "Bulgaria",
    "region": "Europe",
    "flag": "🇧🇬",
    "primaryLawTitle": "Regulation (EU) 2017/745 — Medical Devices Regulation (MDR)",
    "primaryLawEnacted": "2017（EU採択）/ 2021年5月26日適用",
    "classificationSystem": "EU MDR 4クラス制（Class I / IIa / IIb / III）",
    "classCount": 4,
    "classes": [
      {
        "name": "Class I",
        "riskLevel": "低"
      },
      {
        "name": "Class IIa",
        "riskLevel": "中低"
      },
      {
        "name": "Class IIb",
        "riskLevel": "中高"
      },
      {
        "name": "Class III",
        "riskLevel": "高"
      }
    ],
    "mainAuthority": "BDA (IAL)",
    "mdsapStatus": "非参加",
    "udiRequired": true,
    "electronicSystem": "EUDAMED + BDA 国内登録",
    "deviceNotes": "MDR の定義がそのまま国内法に適用。追加的な定義変更なし。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "HRV",
    "country": "クロアチア",
    "countryEn": "Croatia",
    "region": "Europe",
    "flag": "🇭🇷",
    "primaryLawTitle": "Regulation (EU) 2017/745 — Medical Devices Regulation (MDR)",
    "primaryLawEnacted": "2017（EU採択）/ 2021年5月26日適用",
    "classificationSystem": "EU MDR 4クラス制（Class I / IIa / IIb / III）",
    "classCount": 4,
    "classes": [
      {
        "name": "Class I",
        "riskLevel": "低"
      },
      {
        "name": "Class IIa",
        "riskLevel": "中低"
      },
      {
        "name": "Class IIb",
        "riskLevel": "中高"
      },
      {
        "name": "Class III",
        "riskLevel": "高"
      }
    ],
    "mainAuthority": "HALMED",
    "mdsapStatus": "非参加",
    "udiRequired": true,
    "electronicSystem": "EUDAMED + HALMED 国内登録",
    "deviceNotes": "MDR の定義がそのまま国内法に適用。追加的な定義変更なし。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "TZA",
    "country": "タンザニア",
    "countryEn": "United Republic of Tanzania",
    "region": "Middle East & Africa",
    "flag": "🇹🇿",
    "primaryLawTitle": "Tanzania Medicines and Medical Devices Act, 2003 (Act No.1 of 2003)",
    "primaryLawEnacted": "2003",
    "classificationSystem": "4クラス制（Class A/B/C/D）",
    "classCount": 4,
    "classes": [
      {
        "name": "Class A",
        "riskLevel": "低"
      },
      {
        "name": "Class B",
        "riskLevel": "中低"
      },
      {
        "name": "Class C",
        "riskLevel": "中高"
      },
      {
        "name": "Class D",
        "riskLevel": "高"
      }
    ],
    "mainAuthority": "TMDA",
    "mdsapStatus": "非参加",
    "udiRequired": false,
    "electronicSystem": "TMDA オンラインポータル",
    "deviceNotes": "GHTF/IMDRF定義との整合を推進中。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "ETH",
    "country": "エチオピア",
    "countryEn": "Ethiopia",
    "region": "Middle East & Africa",
    "flag": "🇪🇹",
    "primaryLawTitle": "Food and Medicine Administration Proclamation No. 1112/2019",
    "primaryLawEnacted": "2019",
    "classificationSystem": "要確認（4クラス制を検討中）",
    "classCount": 4,
    "classes": [
      {
        "name": "Class A",
        "riskLevel": "低"
      },
      {
        "name": "Class B",
        "riskLevel": "中低"
      },
      {
        "name": "Class C",
        "riskLevel": "中高"
      },
      {
        "name": "Class D",
        "riskLevel": "高"
      }
    ],
    "mainAuthority": "EFDA",
    "mdsapStatus": "非参加",
    "udiRequired": false,
    "electronicSystem": "要確認",
    "deviceNotes": "定義と適用範囲の国際基準への整合を推進中。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "UGA",
    "country": "ウガンダ",
    "countryEn": "Uganda",
    "region": "Middle East & Africa",
    "flag": "🇺🇬",
    "primaryLawTitle": "National Drug Policy and Authority Act (Cap 206)",
    "primaryLawEnacted": "1993",
    "classificationSystem": "4クラス制（Class A/B/C/D）",
    "classCount": 4,
    "classes": [
      {
        "name": "Class A",
        "riskLevel": "低"
      },
      {
        "name": "Class B",
        "riskLevel": "中低"
      },
      {
        "name": "Class C",
        "riskLevel": "中高"
      },
      {
        "name": "Class D",
        "riskLevel": "高"
      }
    ],
    "mainAuthority": "NDA",
    "mdsapStatus": "非参加",
    "udiRequired": false,
    "electronicSystem": "NDA オンラインシステム",
    "deviceNotes": "EACの医療機器調和ガイドラインとの整合を推進中。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "RWA",
    "country": "ルワンダ",
    "countryEn": "Rwanda",
    "region": "Middle East & Africa",
    "flag": "🇷🇼",
    "primaryLawTitle": "Law No. 003/2018 establishing Rwanda Food and Drugs Authority",
    "primaryLawEnacted": "2018",
    "classificationSystem": "4クラス制（Class A/B/C/D）（要確認）",
    "classCount": 4,
    "classes": [
      {
        "name": "Class A",
        "riskLevel": "低"
      },
      {
        "name": "Class B",
        "riskLevel": "中低"
      },
      {
        "name": "Class C",
        "riskLevel": "中高"
      },
      {
        "name": "Class D",
        "riskLevel": "高"
      }
    ],
    "mainAuthority": "Rwanda FDA",
    "mdsapStatus": "非参加",
    "udiRequired": false,
    "electronicSystem": "Rwanda FDA オンラインシステム",
    "deviceNotes": "EACの医療機器調和ガイドラインとの整合を推進中。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "SEN",
    "country": "セネガル",
    "countryEn": "Senegal",
    "region": "Middle East & Africa",
    "flag": "🇸🇳",
    "primaryLawTitle": "要確認（薬事関連法）",
    "primaryLawEnacted": "要確認",
    "classificationSystem": "要確認",
    "classCount": 1,
    "classes": [
      {
        "name": "要確認",
        "riskLevel": "低〜高"
      }
    ],
    "mainAuthority": "DPM",
    "mdsapStatus": "非参加",
    "udiRequired": false,
    "electronicSystem": "要確認",
    "deviceNotes": "UEMOA / OOAS地域規制調和との整合を推進中。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "GHA",
    "country": "ガーナ",
    "countryEn": "Ghana",
    "region": "Middle East & Africa",
    "flag": "🇬🇭",
    "primaryLawTitle": "Public Health Act, 2012 (Act 851)",
    "primaryLawEnacted": "2012",
    "classificationSystem": "4クラス制（Class A/B/C/D）",
    "classCount": 4,
    "classes": [
      {
        "name": "Class A",
        "riskLevel": "低"
      },
      {
        "name": "Class B",
        "riskLevel": "中低"
      },
      {
        "name": "Class C",
        "riskLevel": "中高"
      },
      {
        "name": "Class D",
        "riskLevel": "高"
      }
    ],
    "mainAuthority": "FDA Ghana",
    "mdsapStatus": "非参加",
    "udiRequired": false,
    "electronicSystem": "FDA Ghana オンラインポータル",
    "deviceNotes": "GHTF/IMDRF定義との整合を推進中。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "TUN",
    "country": "チュニジア",
    "countryEn": "Republic of Tunisia",
    "region": "Middle East & Africa",
    "flag": "🇹🇳",
    "primaryLawTitle": "Loi n° 2014-19 du 20 mars 2014 relative aux dispositifs médicaux",
    "primaryLawEnacted": "2014",
    "classificationSystem": "EU MDD 準拠4クラス分類（Class I / IIa / IIb / III）",
    "classCount": 4,
    "classes": [
      {
        "name": "Class I",
        "riskLevel": "低リスク"
      },
      {
        "name": "Class IIa",
        "riskLevel": "中低リスク"
      },
      {
        "name": "Class IIb",
        "riskLevel": "中高リスク"
      },
      {
        "name": "Class III",
        "riskLevel": "高リスク"
      }
    ],
    "mainAuthority": "DPM",
    "mdsapStatus": "非参加",
    "udiRequired": false,
    "electronicSystem": "要確認（DPM の電子申請システムの整備状況は限定的情報）",
    "deviceNotes": "定義は EU MDD/GHTF の定義に準拠。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "DZA",
    "country": "アルジェリア",
    "countryEn": "People's Democratic Republic of Algeria",
    "region": "Middle East & Africa",
    "flag": "🇩🇿",
    "primaryLawTitle": "Loi n° 18-11 du 2 juillet 2018 relative à la santé",
    "primaryLawEnacted": "2018",
    "classificationSystem": "EU 参照4クラス分類（Class I / IIa / IIb / III）",
    "classCount": 4,
    "classes": [
      {
        "name": "Class I",
        "riskLevel": "低リスク"
      },
      {
        "name": "Class IIa",
        "riskLevel": "中低リスク"
      },
      {
        "name": "Class IIb",
        "riskLevel": "中高リスク"
      },
      {
        "name": "Class III",
        "riskLevel": "高リスク"
      }
    ],
    "mainAuthority": "LNCPP",
    "mdsapStatus": "非参加",
    "udiRequired": false,
    "electronicSystem": "要確認",
    "deviceNotes": "定義は GHTF/IMDRF の定義に概ね準拠。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "IRQ",
    "country": "イラク",
    "countryEn": "Republic of Iraq",
    "region": "Middle East & Africa",
    "flag": "🇮🇶",
    "primaryLawTitle": "Public Health Law No. 89 of 1981（改正あり）",
    "primaryLawEnacted": "1981",
    "classificationSystem": "国際分類参照（CE/FDA 分類を事実上採用）",
    "classCount": 3,
    "classes": [
      {
        "name": "Class I",
        "riskLevel": "低リスク"
      },
      {
        "name": "Class II",
        "riskLevel": "中リスク"
      },
      {
        "name": "Class III",
        "riskLevel": "高リスク"
      }
    ],
    "mainAuthority": "KIMADIA",
    "mdsapStatus": "非参加",
    "udiRequired": false,
    "electronicSystem": "要確認（KIMADIA のオンラインシステムの整備状況は限定的）",
    "deviceNotes": "体系的な医療機器の法的定義文書の公開は限定的。実務上は国際的な定義が参照される。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "LBN",
    "country": "レバノン",
    "countryEn": "Lebanese Republic",
    "region": "Middle East & Africa",
    "flag": "🇱🇧",
    "primaryLawTitle": "Law on Exercise of Pharmacy（薬事法）および関連規則",
    "primaryLawEnacted": "1983（改正あり）",
    "classificationSystem": "国際分類参照（CE/FDA 分類を事実上採用）",
    "classCount": 3,
    "classes": [
      {
        "name": "Class I",
        "riskLevel": "低リスク"
      },
      {
        "name": "Class II",
        "riskLevel": "中リスク"
      },
      {
        "name": "Class III",
        "riskLevel": "高リスク"
      }
    ],
    "mainAuthority": "MOPH",
    "mdsapStatus": "非参加",
    "udiRequired": false,
    "electronicSystem": "要確認",
    "deviceNotes": "体系的な法的定義文書の公開は限定的。国際的な定義が参照される。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "NPL",
    "country": "ネパール",
    "countryEn": "Federal Democratic Republic of Nepal",
    "region": "ASPAC",
    "flag": "🇳🇵",
    "primaryLawTitle": "Drug Act 2035 (1978)",
    "primaryLawEnacted": "1978",
    "classificationSystem": "国際分類参照（WHO/IMDRF ガイドラインを参照）",
    "classCount": 4,
    "classes": [
      {
        "name": "Class A",
        "riskLevel": "低リスク"
      },
      {
        "name": "Class B",
        "riskLevel": "中低リスク"
      },
      {
        "name": "Class C",
        "riskLevel": "中高リスク"
      },
      {
        "name": "Class D",
        "riskLevel": "高リスク"
      }
    ],
    "mainAuthority": "DDA",
    "mdsapStatus": "非参加",
    "udiRequired": false,
    "electronicSystem": "要確認（DDA のオンラインシステムの整備が進行中）",
    "deviceNotes": "医療機器の法的定義は Drug Act の枠組みで間接的に規定。独立した医療機器法の制定が検討されている。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "IRN",
    "country": "イラン",
    "countryEn": "Islamic Republic of Iran",
    "region": "Middle East & Africa",
    "flag": "🇮🇷",
    "primaryLawTitle": "Food, Drug, and Cosmetics Act（食品・医薬品・化粧品法）",
    "primaryLawEnacted": "1967（改正あり）",
    "classificationSystem": "リスクベース4クラス分類（Class A / B / C / D）",
    "classCount": 4,
    "classes": [
      {
        "name": "Class A",
        "riskLevel": "低リスク"
      },
      {
        "name": "Class B",
        "riskLevel": "中低リスク"
      },
      {
        "name": "Class C",
        "riskLevel": "中高リスク"
      },
      {
        "name": "Class D",
        "riskLevel": "高リスク"
      }
    ],
    "mainAuthority": "IMED",
    "mdsapStatus": "非参加",
    "udiRequired": false,
    "electronicSystem": "IMED オンラインポータル",
    "deviceNotes": "定義は GHTF/IMDRF の定義に概ね準拠。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "SVK",
    "country": "スロバキア",
    "countryEn": "Slovakia",
    "region": "Europe",
    "flag": "🇸🇰",
    "primaryLawTitle": "Regulation (EU) 2017/745 — Medical Devices Regulation (MDR)",
    "primaryLawEnacted": "2017（EU採択）/ 2021年5月26日適用",
    "classificationSystem": "EU MDR 4クラス制（Class I / IIa / IIb / III）",
    "classCount": 4,
    "classes": [
      {
        "name": "Class I",
        "riskLevel": "低"
      },
      {
        "name": "Class IIa",
        "riskLevel": "中低"
      },
      {
        "name": "Class IIb",
        "riskLevel": "中高"
      },
      {
        "name": "Class III",
        "riskLevel": "高"
      }
    ],
    "mainAuthority": "ŠÚKL",
    "mdsapStatus": "非参加",
    "udiRequired": true,
    "electronicSystem": "EUDAMED + ŠÚKL 国内登録",
    "deviceNotes": "MDR の定義がそのまま国内法に適用。追加的な定義変更なし。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "LTU",
    "country": "リトアニア",
    "countryEn": "Lithuania",
    "region": "Europe",
    "flag": "🇱🇹",
    "primaryLawTitle": "Regulation (EU) 2017/745 — Medical Devices Regulation (MDR)",
    "primaryLawEnacted": "2017（EU採択）/ 2021年5月26日適用",
    "classificationSystem": "EU MDR 4クラス制（Class I / IIa / IIb / III）",
    "classCount": 4,
    "classes": [
      {
        "name": "Class I",
        "riskLevel": "低"
      },
      {
        "name": "Class IIa",
        "riskLevel": "中低"
      },
      {
        "name": "Class IIb",
        "riskLevel": "中高"
      },
      {
        "name": "Class III",
        "riskLevel": "高"
      }
    ],
    "mainAuthority": "VVKT",
    "mdsapStatus": "非参加",
    "udiRequired": true,
    "electronicSystem": "EUDAMED + VVKT 国内登録",
    "deviceNotes": "MDR の定義がそのまま国内法に適用。追加的な定義変更なし。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "LVA",
    "country": "ラトビア",
    "countryEn": "Latvia",
    "region": "Europe",
    "flag": "🇱🇻",
    "primaryLawTitle": "Regulation (EU) 2017/745 — Medical Devices Regulation (MDR)",
    "primaryLawEnacted": "2017（EU採択）/ 2021年5月26日適用",
    "classificationSystem": "EU MDR 4クラス制（Class I / IIa / IIb / III）",
    "classCount": 4,
    "classes": [
      {
        "name": "Class I",
        "riskLevel": "低"
      },
      {
        "name": "Class IIa",
        "riskLevel": "中低"
      },
      {
        "name": "Class IIb",
        "riskLevel": "中高"
      },
      {
        "name": "Class III",
        "riskLevel": "高"
      }
    ],
    "mainAuthority": "ZVA",
    "mdsapStatus": "非参加",
    "udiRequired": true,
    "electronicSystem": "EUDAMED + ZVA 国内登録",
    "deviceNotes": "MDR の定義がそのまま国内法に適用。追加的な定義変更なし。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "EST",
    "country": "エストニア",
    "countryEn": "Estonia",
    "region": "Europe",
    "flag": "🇪🇪",
    "primaryLawTitle": "Regulation (EU) 2017/745 — Medical Devices Regulation (MDR)",
    "primaryLawEnacted": "2017（EU採択）/ 2021年5月26日適用",
    "classificationSystem": "EU MDR 4クラス制（Class I / IIa / IIb / III）",
    "classCount": 4,
    "classes": [
      {
        "name": "Class I",
        "riskLevel": "低"
      },
      {
        "name": "Class IIa",
        "riskLevel": "中低"
      },
      {
        "name": "Class IIb",
        "riskLevel": "中高"
      },
      {
        "name": "Class III",
        "riskLevel": "高"
      }
    ],
    "mainAuthority": "Ravimiamet",
    "mdsapStatus": "非参加",
    "udiRequired": true,
    "electronicSystem": "EUDAMED + Ravimiamet 国内登録",
    "deviceNotes": "MDR の定義がそのまま国内法に適用。追加的な定義変更なし。デジタルヘルス分野はエストニアの強みであり、SaMD/AI関連規制の関心が高い。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "MLT",
    "country": "マルタ",
    "countryEn": "Malta",
    "region": "Europe",
    "flag": "🇲🇹",
    "primaryLawTitle": "Regulation (EU) 2017/745 — Medical Devices Regulation (MDR)",
    "primaryLawEnacted": "2017（EU採択）/ 2021年5月26日適用",
    "classificationSystem": "EU MDR 4クラス制（Class I / IIa / IIb / III）",
    "classCount": 4,
    "classes": [
      {
        "name": "Class I",
        "riskLevel": "低"
      },
      {
        "name": "Class IIa",
        "riskLevel": "中低"
      },
      {
        "name": "Class IIb",
        "riskLevel": "中高"
      },
      {
        "name": "Class III",
        "riskLevel": "高"
      }
    ],
    "mainAuthority": "MMA",
    "mdsapStatus": "非参加",
    "udiRequired": true,
    "electronicSystem": "EUDAMED + MMA 国内登録",
    "deviceNotes": "MDR の定義がそのまま国内法に適用。追加的な定義変更なし。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "MAC",
    "country": "マカオ",
    "countryEn": "Macao SAR",
    "region": "ASPAC",
    "flag": "🇲🇴",
    "primaryLawTitle": "Decreto-Lei n.º 53/94/M — 医療機器規制法令",
    "primaryLawEnacted": "1994",
    "classificationSystem": "リスクベース分類（国際基準参照）",
    "classCount": 3,
    "classes": [
      {
        "name": "Class I",
        "riskLevel": "低"
      },
      {
        "name": "Class II",
        "riskLevel": "中"
      },
      {
        "name": "Class III",
        "riskLevel": "高"
      }
    ],
    "mainAuthority": "ISAF",
    "mdsapStatus": "非参加",
    "udiRequired": false,
    "electronicSystem": "ISAF 申請システム",
    "deviceNotes": "定義はEU旧MDD やポルトガル法の影響を受ける。近年、国際基準への整合化を推進中。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "CZE",
    "country": "チェコ",
    "countryEn": "Czech Republic",
    "region": "Europe",
    "flag": "🇨🇿",
    "primaryLawTitle": "Regulation (EU) 2017/745 — Medical Devices Regulation (MDR)",
    "primaryLawEnacted": "2017（EU採択）/ 2021年5月26日適用",
    "classificationSystem": "EU MDR 4クラス制（Class I / IIa / IIb / III）",
    "classCount": 4,
    "classes": [
      {
        "name": "Class I",
        "riskLevel": "低"
      },
      {
        "name": "Class IIa",
        "riskLevel": "中低"
      },
      {
        "name": "Class IIb",
        "riskLevel": "中高"
      },
      {
        "name": "Class III",
        "riskLevel": "高"
      }
    ],
    "mainAuthority": "SÚKL",
    "mdsapStatus": "非参加",
    "udiRequired": true,
    "electronicSystem": "EUDAMED + SÚKL RZPRO",
    "deviceNotes": "MDR の定義がそのまま国内法に適用。追加的な定義変更なし。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "HUN",
    "country": "ハンガリー",
    "countryEn": "Hungary",
    "region": "Europe",
    "flag": "🇭🇺",
    "primaryLawTitle": "Regulation (EU) 2017/745 — Medical Devices Regulation (MDR)",
    "primaryLawEnacted": "2017（EU採択）/ 2021年5月26日適用",
    "classificationSystem": "EU MDR 4クラス制（Class I / IIa / IIb / III）",
    "classCount": 4,
    "classes": [
      {
        "name": "Class I",
        "riskLevel": "低"
      },
      {
        "name": "Class IIa",
        "riskLevel": "中低"
      },
      {
        "name": "Class IIb",
        "riskLevel": "中高"
      },
      {
        "name": "Class III",
        "riskLevel": "高"
      }
    ],
    "mainAuthority": "OGYÉI",
    "mdsapStatus": "非参加",
    "udiRequired": true,
    "electronicSystem": "EUDAMED + OGYÉI 国内登録",
    "deviceNotes": "MDR の定義がそのまま国内法に適用。追加的な定義変更なし。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "PRT",
    "country": "ポルトガル",
    "countryEn": "Portugal",
    "region": "Europe",
    "flag": "🇵🇹",
    "primaryLawTitle": "Regulation (EU) 2017/745 — Medical Devices Regulation (MDR)",
    "primaryLawEnacted": "2017（EU採択）/ 2021年5月26日適用",
    "classificationSystem": "EU MDR 4クラス制（Class I / IIa / IIb / III）",
    "classCount": 4,
    "classes": [
      {
        "name": "Class I",
        "riskLevel": "低"
      },
      {
        "name": "Class IIa",
        "riskLevel": "中低"
      },
      {
        "name": "Class IIb",
        "riskLevel": "中高"
      },
      {
        "name": "Class III",
        "riskLevel": "高"
      }
    ],
    "mainAuthority": "Infarmed",
    "mdsapStatus": "非参加",
    "udiRequired": true,
    "electronicSystem": "EUDAMED + Infarmed 国内登録",
    "deviceNotes": "MDR の定義がそのまま国内法に適用。追加的な定義変更なし。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "GRC",
    "country": "ギリシャ",
    "countryEn": "Greece",
    "region": "Europe",
    "flag": "🇬🇷",
    "primaryLawTitle": "Regulation (EU) 2017/745 — Medical Devices Regulation (MDR)",
    "primaryLawEnacted": "2017（EU採択）/ 2021年5月26日適用",
    "classificationSystem": "EU MDR 4クラス制（Class I / IIa / IIb / III）",
    "classCount": 4,
    "classes": [
      {
        "name": "Class I",
        "riskLevel": "低"
      },
      {
        "name": "Class IIa",
        "riskLevel": "中低"
      },
      {
        "name": "Class IIb",
        "riskLevel": "中高"
      },
      {
        "name": "Class III",
        "riskLevel": "高"
      }
    ],
    "mainAuthority": "EOF",
    "mdsapStatus": "非参加",
    "udiRequired": true,
    "electronicSystem": "EUDAMED + EOF 国内登録",
    "deviceNotes": "MDR の定義がそのまま国内法に適用。追加的な定義変更なし。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "UKR",
    "country": "ウクライナ",
    "countryEn": "Ukraine",
    "region": "Europe",
    "flag": "🇺🇦",
    "primaryLawTitle": "Law of Ukraine 'On Medical Devices' (No. 2042-VIII)",
    "primaryLawEnacted": "2017",
    "classificationSystem": "4クラス制（Class I / IIa / IIb / III）— EU MDR 整合",
    "classCount": 4,
    "classes": [
      {
        "name": "Class I",
        "riskLevel": "低"
      },
      {
        "name": "Class IIa",
        "riskLevel": "中低"
      },
      {
        "name": "Class IIb",
        "riskLevel": "中高"
      },
      {
        "name": "Class III",
        "riskLevel": "高"
      }
    ],
    "mainAuthority": "MOH",
    "mdsapStatus": "非参加",
    "udiRequired": false,
    "electronicSystem": "MOH/SEC オンライン提出",
    "deviceNotes": "2024年の新Technical Regulationにより、EU MDR の定義に大幅に近づいた。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "HKG",
    "country": "香港",
    "countryEn": "Hong Kong SAR",
    "region": "ASPAC",
    "flag": "🇭🇰",
    "primaryLawTitle": "Medical Device Administrative Control System (MDACS)",
    "primaryLawEnacted": "2004（Phase I）/ 2015（Phase II リスティング開始）",
    "classificationSystem": "4クラス制（Class I / II / III / IV）— GHTF/IMDRF 整合",
    "classCount": 4,
    "classes": [
      {
        "name": "Class I",
        "riskLevel": "低"
      },
      {
        "name": "Class II",
        "riskLevel": "中低"
      },
      {
        "name": "Class III",
        "riskLevel": "中高"
      },
      {
        "name": "Class IV",
        "riskLevel": "高"
      }
    ],
    "mainAuthority": "MDCO/DOH",
    "mdsapStatus": "非参加",
    "udiRequired": false,
    "electronicSystem": "MDCO Online Listing System",
    "deviceNotes": "Medical Devices Bill (2025) で法的定義が正式に法定化される予定。GHTF/IMDRF の定義に整合。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "VEN",
    "country": "ベネズエラ",
    "countryEn": "Bolivarian Republic of Venezuela",
    "region": "Latam",
    "flag": "🇻🇪",
    "primaryLawTitle": "Ley de Medicamentos（医薬品法）および関連規則",
    "primaryLawEnacted": "2000",
    "classificationSystem": "リスクベース分類（要確認）",
    "classCount": 3,
    "classes": [
      {
        "name": "Class I",
        "riskLevel": "低リスク"
      },
      {
        "name": "Class II",
        "riskLevel": "中リスク"
      },
      {
        "name": "Class III",
        "riskLevel": "高リスク"
      }
    ],
    "mainAuthority": "MPPS",
    "mdsapStatus": "非参加",
    "udiRequired": false,
    "electronicSystem": "要確認",
    "deviceNotes": "SaMDに関する明確な規定は要確認。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "BOL",
    "country": "ボリビア",
    "countryEn": "Plurinational State of Bolivia",
    "region": "Latam",
    "flag": "🇧🇴",
    "primaryLawTitle": "Ley del Medicamento No. 1737 および関連規則",
    "primaryLawEnacted": "1996",
    "classificationSystem": "リスクベース分類（要確認）",
    "classCount": 3,
    "classes": [
      {
        "name": "Class I",
        "riskLevel": "低リスク"
      },
      {
        "name": "Class II",
        "riskLevel": "中リスク"
      },
      {
        "name": "Class III",
        "riskLevel": "高リスク"
      }
    ],
    "mainAuthority": "UNIMED",
    "mdsapStatus": "非参加",
    "udiRequired": false,
    "electronicSystem": "要確認",
    "deviceNotes": "SaMDに関する明確な規定は要確認。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "SLV",
    "country": "エルサルバドル",
    "countryEn": "Republic of El Salvador",
    "region": "Latam",
    "flag": "🇸🇻",
    "primaryLawTitle": "Ley de Medicamentos（医薬品法）",
    "primaryLawEnacted": "2012",
    "classificationSystem": "4クラス分類（Class I / IIA / IIB / III）",
    "classCount": 4,
    "classes": [
      {
        "name": "Class I",
        "riskLevel": "低リスク"
      },
      {
        "name": "Class IIA",
        "riskLevel": "中低リスク"
      },
      {
        "name": "Class IIB",
        "riskLevel": "中高リスク"
      },
      {
        "name": "Class III",
        "riskLevel": "高リスク"
      }
    ],
    "mainAuthority": "DNM",
    "mdsapStatus": "非参加",
    "udiRequired": false,
    "electronicSystem": "要確認",
    "deviceNotes": "中米共通技術規則（RTCA）の定義にも準拠。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "CUB",
    "country": "キューバ",
    "countryEn": "Republic of Cuba",
    "region": "Latam",
    "flag": "🇨🇺",
    "primaryLawTitle": "Resolución CECMED — 医療機器規制に関する決議",
    "primaryLawEnacted": "要確認",
    "classificationSystem": "リスクベース分類（4クラス: I / IIA / IIB / III）",
    "classCount": 4,
    "classes": [
      {
        "name": "Class I",
        "riskLevel": "低リスク"
      },
      {
        "name": "Class IIA",
        "riskLevel": "中低リスク"
      },
      {
        "name": "Class IIB",
        "riskLevel": "中高リスク"
      },
      {
        "name": "Class III",
        "riskLevel": "高リスク"
      }
    ],
    "mainAuthority": "CECMED",
    "mdsapStatus": "非参加",
    "udiRequired": false,
    "electronicSystem": "要確認",
    "deviceNotes": "CECMEDの定義はGHTF/IMDRFに概ね準拠。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "BRN",
    "country": "ブルネイ",
    "countryEn": "Brunei Darussalam",
    "region": "ASPAC",
    "flag": "🇧🇳",
    "primaryLawTitle": "Medicines Order 2007",
    "primaryLawEnacted": "2007",
    "classificationSystem": "4クラス分類（Class A / B / C / D）— ASEAN AMDD 準拠",
    "classCount": 4,
    "classes": [
      {
        "name": "Class A",
        "riskLevel": "低リスク"
      },
      {
        "name": "Class B",
        "riskLevel": "中低リスク"
      },
      {
        "name": "Class C",
        "riskLevel": "中高リスク"
      },
      {
        "name": "Class D",
        "riskLevel": "高リスク"
      }
    ],
    "mainAuthority": "MOH/DPS",
    "mdsapStatus": "非参加",
    "udiRequired": false,
    "electronicSystem": "要確認",
    "deviceNotes": "ASEAN AMDD整合化に伴い定義の統一を推進中。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "FJI",
    "country": "フィジー",
    "countryEn": "Republic of Fiji",
    "region": "ASPAC",
    "flag": "🇫🇯",
    "primaryLawTitle": "Medicines and Cosmetics Act 2007",
    "primaryLawEnacted": "2007",
    "classificationSystem": "リスクベース分類（要確認）",
    "classCount": 3,
    "classes": [
      {
        "name": "Low Risk",
        "riskLevel": "低"
      },
      {
        "name": "Medium Risk",
        "riskLevel": "中"
      },
      {
        "name": "High Risk",
        "riskLevel": "高"
      }
    ],
    "mainAuthority": "FPBSC",
    "mdsapStatus": "非参加",
    "udiRequired": false,
    "electronicSystem": "要確認",
    "deviceNotes": "WHO定義との整合を推進中。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "KAZ",
    "country": "カザフスタン",
    "countryEn": "Republic of Kazakhstan",
    "region": "ASPAC",
    "flag": "🇰🇿",
    "primaryLawTitle": "TR EAEU 038/2016（EAEU医療機器安全性に関する技術規則）",
    "primaryLawEnacted": "2016（採択）/ 2021（発効）",
    "classificationSystem": "4クラス分類（Class 1 / 2a / 2b / 3）— EAEU統一分類",
    "classCount": 4,
    "classes": [
      {
        "name": "Class 1",
        "riskLevel": "低リスク"
      },
      {
        "name": "Class 2a",
        "riskLevel": "中低リスク"
      },
      {
        "name": "Class 2b",
        "riskLevel": "中高リスク"
      },
      {
        "name": "Class 3",
        "riskLevel": "高リスク"
      }
    ],
    "mainAuthority": "NCDM",
    "mdsapStatus": "非参加",
    "udiRequired": false,
    "electronicSystem": "EAEU統一情報システム（開発中）",
    "deviceNotes": "GHTF/IMDRF定義に概ね準拠。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "UZB",
    "country": "ウズベキスタン",
    "countryEn": "Republic of Uzbekistan",
    "region": "ASPAC",
    "flag": "🇺🇿",
    "primaryLawTitle": "医薬品・医療機器に関する法律および大統領令",
    "primaryLawEnacted": "要確認",
    "classificationSystem": "リスクベース分類（要確認）",
    "classCount": 3,
    "classes": [
      {
        "name": "Low Risk",
        "riskLevel": "低"
      },
      {
        "name": "Medium Risk",
        "riskLevel": "中"
      },
      {
        "name": "High Risk",
        "riskLevel": "高"
      }
    ],
    "mainAuthority": "ADPI",
    "mdsapStatus": "非参加",
    "udiRequired": false,
    "electronicSystem": "開発中",
    "deviceNotes": "国際定義（GHTF/IMDRF）との整合化を推進中。",
    "lastUpdated": "2026-04-02"
  },
  {
    "code": "GUY",
    "country": "ガイアナ",
    "countryEn": "Guyana",
    "region": "Latam",
    "flag": "🇬🇾",
    "primaryLawTitle": "Food and Drugs Act, Chapter 34:03",
    "primaryLawEnacted": "1971",
    "classificationSystem": "分類制度なし（リライアンスモデル）",
    "classCount": 2,
    "classes": [
      {
        "name": "Permit Required",
        "riskLevel": "全リスク"
      },
      {
        "name": "Exempt",
        "riskLevel": "—"
      }
    ],
    "mainAuthority": "GA-FDD",
    "mdsapStatus": "非参加（ただしMDSAP証明書を要求）",
    "udiRequired": false,
    "electronicSystem": "なし",
    "deviceNotes": "独自分類制度なし。ISO 13485・MDSAP証明書・原産国CFSによるリライアンスモデル。",
    "lastUpdated": "2026-04-03"
  },
  {
    "code": "PNG",
    "country": "パプアニューギニア",
    "countryEn": "Papua New Guinea",
    "region": "ASPAC",
    "flag": "\u{1F1F5}\u{1F1EC}",
    "primaryLawTitle": "Medicines and Cosmetics Act 1999",
    "primaryLawEnacted": "1999",
    "classificationSystem": "独自分類制度なし（参照国分類に依存）",
    "classCount": 1,
    "classes": [
      {
        "name": "Medical Device",
        "riskLevel": "全リスクレベル"
      }
    ],
    "mainAuthority": "PSSB",
    "mdsapStatus": "非参加",
    "udiRequired": false,
    "electronicSystem": "なし",
    "deviceNotes": "独自の医療機器分類制度は未整備。Medicines and Cosmetics Act 1999に基づくライセンス制度で規制。参照国認可（TGA、FDA等）への依存度が高い。WHO支援の下で規制改革を推進中。",
    "lastUpdated": "2026-04-06"
  },
  {
    "code": "HTI",
    "country": "ハイチ",
    "countryEn": "Haiti",
    "region": "Latam",
    "flag": "\u{1F1ED}\u{1F1F9}",
    "primaryLawTitle": "Loi sur l'exercice de la Pharmacie (1955)",
    "primaryLawEnacted": "1955",
    "classificationSystem": "分類制度なし",
    "classCount": 1,
    "classes": [
      {
        "name": "未分類",
        "riskLevel": "未定義"
      }
    ],
    "mainAuthority": "DPM/MT",
    "mdsapStatus": "非参加",
    "udiRequired": false,
    "electronicSystem": "なし",
    "deviceNotes": "医療機器専用の規制枠組みは存在しない。1955年薬事法が基本法だが医薬品中心。医療機器輸入にはMSPP承認が必要だが体系的な登録・分類・審査制度は未整備。CARICOM加盟国（2002年〜）。",
    "lastUpdated": "2026-04-06"
  },
  {
    "code": "AZE",
    "country": "アゼルバイジャン",
    "countryEn": "Azerbaijan",
    "region": "ASPAC",
    "flag": "🇦🇿",
    "primaryLawTitle": "Law of the Republic of Azerbaijan \"On Medicinal Products\"",
    "primaryLawEnacted": "2006",
    "classificationSystem": "リスクグループ制（I / 中 / 高 / 最高）",
    "classCount": 4,
    "classes": [
      {
        "name": "Risk Group I",
        "riskLevel": "低リスク"
      },
      {
        "name": "Medium Risk",
        "riskLevel": "中リスク"
      },
      {
        "name": "High Risk",
        "riskLevel": "高リスク"
      },
      {
        "name": "Highest Risk",
        "riskLevel": "最高リスク"
      }
    ],
    "mainAuthority": "AEM（Analytical Expertise Center）",
    "mdsapStatus": "非参加",
    "udiRequired": false,
    "electronicSystem": "AEM申請窓口（統合電子ポータルなし）",
    "deviceNotes": "2024年7月より医療機器の国家登録が義務化（リスクグループI以外）。Cabinet Decision No. 345（2024-07-18）が登録規則。登録証有効期間5年。QMS現地査察は2026年導入予定。",
    "lastUpdated": "2026-04-06"
  },
  {
    "code": "LIE",
    "country": "リヒテンシュタイン",
    "countryEn": "Liechtenstein",
    "region": "Europe",
    "flag": "🇱🇮",
    "primaryLawTitle": "Gesetz über Arzneimittel und Medizinprodukte (Heilmittelgesetz; HMG)",
    "primaryLawEnacted": "2015",
    "classificationSystem": "EU MDR 4クラス制（Class I / IIa / IIb / III）",
    "classCount": 4,
    "classes": [
      {
        "name": "Class I",
        "riskLevel": "低リスク"
      },
      {
        "name": "Class IIa",
        "riskLevel": "中低リスク"
      },
      {
        "name": "Class IIb",
        "riskLevel": "中高リスク"
      },
      {
        "name": "Class III",
        "riskLevel": "高リスク"
      }
    ],
    "mainAuthority": "Amt für Gesundheit",
    "mdsapStatus": "非参加",
    "udiRequired": true,
    "electronicSystem": "EUDAMED + swissdamed（二重制度）",
    "deviceNotes": "EEA加盟国かつスイス関税同盟国。EU MDR/IVDRがEEA経由で直接適用されると同時に、スイスMedDO/IvDOに基づく上市も可能な二重制度。国内NBなし。",
    "lastUpdated": "2026-04-06"
  },
  {
    "code": "BRB",
    "country": "バルバドス",
    "countryEn": "Barbados",
    "region": "Latam",
    "flag": "🇧🇧",
    "primaryLawTitle": "Health Services Act, Cap. 44",
    "primaryLawEnacted": "1969",
    "classificationSystem": "分類制度なし（輸入許可ベース）",
    "classCount": 1,
    "classes": [
      {
        "name": "All Devices",
        "riskLevel": "未分類"
      }
    ],
    "mainAuthority": "Barbados Drug Service",
    "mdsapStatus": "非参加",
    "udiRequired": false,
    "electronicSystem": "紙ベース申請（専用電子ポータルなし）",
    "deviceNotes": "医療機器専用法なし。Health Services (Control of Drugs) Regulations, 1970が「device」を定義。製造国での合法販売を前提とした輸入許可制。CARICOM加盟・CARPHA/VigiCarib参加。",
    "lastUpdated": "2026-04-06"
  },
  {
    "code": "ARM",
    "country": "アルメニア",
    "countryEn": "Armenia",
    "region": "ASPAC",
    "flag": "🇦🇲",
    "primaryLawTitle": "Law No. ZR-42 \"On Medical Assistance and Healthcare Services to the Population\"",
    "primaryLawEnacted": "1996",
    "classificationSystem": "EAEU整合 4クラス制（1/2a/2b/3）",
    "classCount": 4,
    "classes": [
      { "name": "Class 1", "riskLevel": "低" },
      { "name": "Class 2a", "riskLevel": "中低" },
      { "name": "Class 2b", "riskLevel": "中高" },
      { "name": "Class 3", "riskLevel": "高" }
    ],
    "mainAuthority": "SCDMTE",
    "mdsapStatus": "非参加",
    "udiRequired": false,
    "electronicSystem": "Single Window + EAEU統一情報システム",
    "deviceNotes": "EAEU加盟国。独自の国内登録制度なし、輸入許可制（GD 429-N/2023）で運用中。2025年末まで国内規則による申請可、2026年以降EAEU統一登録に完全移行予定。",
    "lastUpdated": "2026-04-06"
  },
  {
    "code": "TKM",
    "country": "トルクメニスタン",
    "countryEn": "Turkmenistan",
    "region": "ASPAC",
    "flag": "🇹🇲",
    "primaryLawTitle": "Law of Turkmenistan \"On Drug Provision\" (No. 319-V)",
    "primaryLawEnacted": "2016",
    "classificationSystem": "国家登録制（リスクベース分類の詳細は要確認）",
    "classCount": 1,
    "classes": [
      { "name": "登録対象医療機器", "riskLevel": "全リスクレベル" }
    ],
    "mainAuthority": "保健・医療産業省",
    "mdsapStatus": "非参加",
    "udiRequired": false,
    "electronicSystem": "紙媒体提出（電子申請システムは未確認）",
    "deviceNotes": "EAEU非加盟・CIS加盟国。医薬品供給法（2016年）に基づく国家登録制度。登録証有効期間5年。Türkmenstandartlaryが適合性証明書を発行（12カ月有効）。外国メーカーはローカル代理人が必須。医療機器市場の90%以上が輸入。",
    "lastUpdated": "2026-04-06"
  },
  {
    "code": "MLI",
    "country": "マリ",
    "countryEn": "Mali",
    "region": "Middle East & Africa",
    "flag": "🇲🇱",
    "primaryLawTitle": "Décret n° 91-106/P-RM du 15 mars 1991 portant organisation de l'exercice privé des professions sanitaires",
    "primaryLawEnacted": "1991",
    "classificationSystem": "未整備（国際認証・UEMOA域内調和を参照）",
    "classCount": 4,
    "classes": [
      { "name": "Class I", "riskLevel": "低" },
      { "name": "Class II", "riskLevel": "中低" },
      { "name": "Class III", "riskLevel": "中高" },
      { "name": "Class IV", "riskLevel": "高" }
    ],
    "mainAuthority": "DPM",
    "mdsapStatus": "非参加",
    "udiRequired": false,
    "electronicSystem": "紙ベース申請（Trade Portal で手続案内）",
    "deviceNotes": "UEMOA加盟国。独立した医療機器法なし、Décret 91-106/P-RM（1991年）に基づく医薬品規制の一部として運用。DPMがAMM（市販承認、5年有効）を管理。国立AMM委員会が四半期ごとに審査。LNSがISO/IEC 17025認定取得（2022年）。AMA条約批准済み。",
    "lastUpdated": "2026-04-06"
  },
  {
    "code": "BFA",
    "country": "ブルキナファソ",
    "countryEn": "Burkina Faso",
    "region": "Middle East & Africa",
    "flag": "🇧🇫",
    "primaryLawTitle": "Loi n° 23/94/ADP portant Code de la Santé publique",
    "primaryLawEnacted": "1994",
    "classificationSystem": "未整備（UEMOA/国際認証に依存）",
    "classCount": 4,
    "classes": [
      { "name": "Class I", "riskLevel": "低" },
      { "name": "Class II", "riskLevel": "中低" },
      { "name": "Class III", "riskLevel": "中高" },
      { "name": "Class IV", "riskLevel": "高" }
    ],
    "mainAuthority": "ANRP",
    "mdsapStatus": "非参加",
    "udiRequired": false,
    "electronicSystem": "紙ベース申請（専用電子ポータルなし）",
    "deviceNotes": "UEMOA加盟国。独立した医療機器法なし、Loi 23/94/ADP（公衆衛生法典）に基づく医薬品規制の一部として運用。ANRP（2018年設立）がHomologation/AMMを管理。LNSPが品質検査。CAMEGが公的調達一元管理。AMA条約批准済み（2020年）。",
    "lastUpdated": "2026-04-06"
  },
  {
    "code": "SUR",
    "country": "スリナム",
    "countryEn": "Suriname",
    "region": "Latam",
    "flag": "🇸🇷",
    "primaryLawTitle": "Wet op de Uitoefening der Artsenijbereidkunde (G.B. 1896 no. 26)",
    "primaryLawEnacted": "1896",
    "classificationSystem": "分類制度なし（輸入許可ベース）",
    "classCount": 1,
    "classes": [
      { "name": "All Devices", "riskLevel": "未分類" }
    ],
    "mainAuthority": "Ministerie van Volksgezondheid",
    "mdsapStatus": "非参加",
    "udiRequired": false,
    "electronicSystem": "紙ベース申請（専用電子ポータルなし）",
    "deviceNotes": "医療機器専用法なし。薬事法（1896年）+ 包装医薬品令（1973年）が法的基盤。保健省の輸入許可制で運用。医薬品登録委員会（2021年設置）は医薬品のみ対象。CARICOM加盟・CARPHA/CRS参加。オランダ語が公用語。",
    "lastUpdated": "2026-04-06"
  },
  {
    "code": "TGO",
    "country": "トーゴ",
    "countryEn": "Togo",
    "region": "Middle East & Africa",
    "flag": "🇹🇬",
    "primaryLawTitle": "Loi n° 2009-007 du 15 mai 2009 portant Code de la santé publique de la République togolaise",
    "primaryLawEnacted": "2009",
    "classificationSystem": "未整備（国際認証に依存・UEMOA調和中）",
    "classCount": 4,
    "classes": [
      { "name": "Class I", "riskLevel": "低" },
      { "name": "Class II", "riskLevel": "中低" },
      { "name": "Class III", "riskLevel": "中高" },
      { "name": "Class IV", "riskLevel": "高" }
    ],
    "mainAuthority": "DPML",
    "mdsapStatus": "非参加",
    "udiRequired": false,
    "electronicSystem": "紙ベース申請（service-public.gouv.tgで申請書ダウンロード可）",
    "deviceNotes": "医療機器専用法なし。公衆衛生法典（2009年）第IV編が法的根拠。UEMOA加盟国。DPML（保健省傘下）がNCA。CAMEG-TogoがEU指令93/42/CEEを参照基準として公的調達サプライヤーの事前選定を実施。WHO CRP（SRA CRP・PQ CRP IVDs）参加。フランス語。",
    "lastUpdated": "2026-04-06"
  },
  {
    "code": "SWZ",
    "country": "エスワティニ",
    "countryEn": "Eswatini",
    "region": "Middle East & Africa",
    "flag": "🇸🇿",
    "primaryLawTitle": "Medicines and Related Substances Control Act, 2016 (Act No. 9 of 2016)",
    "primaryLawEnacted": "2016",
    "classificationSystem": "未整備（医療機器専用の分類制度なし）",
    "classCount": 1,
    "classes": [
      { "name": "All Devices", "riskLevel": "未分類" }
    ],
    "mainAuthority": "MRU（保健省医薬品規制ユニット）",
    "mdsapStatus": "非参加",
    "udiRequired": false,
    "electronicSystem": "紙ベース申請（専用電子ポータルなし）",
    "deviceNotes": "医療機器専用法なし。Medicines and Related Substances Control Act (Act No. 9 of 2016) に基づき医薬品と同一枠組みで規制。保健省MRUがNCA機能を担当。輸入許可制で運用（許可有効期間最大6カ月）。SADC加盟国・ZaZiBoNa非活動メンバー。独立NMRA設立が法定されているが未完了。国家ファーマコビジランス政策（2021年12月策定）。英語。",
    "lastUpdated": "2026-04-06"
  },
  {
    "code": "MWI",
    "country": "マラウイ",
    "countryEn": "Malawi",
    "region": "Middle East & Africa",
    "flag": "🇲🇼",
    "primaryLawTitle": "Pharmacy and Medicines Regulatory Authority Act, 2019 (Act No. 9 of 2019)",
    "primaryLawEnacted": "2019",
    "classificationSystem": "発展途上（Marketing Authorisation枠組みで運用）",
    "classCount": 1,
    "classes": [
      { "name": "All Devices", "riskLevel": "未分類（整備途上）" }
    ],
    "mainAuthority": "PMRA",
    "mdsapStatus": "非参加",
    "udiRequired": false,
    "electronicSystem": "紙ベース申請（専用電子ポータル未整備）",
    "deviceNotes": "PMRA Act 2019で医療機器を「allied substances」として規制。旧PMPB後継。SADC加盟国・ZaZiBoNa共同登録参加。医療機器専用の分類ガイドラインは未公表。WHO PIDM加盟（135番目）。英語。",
    "lastUpdated": "2026-04-06"
  },
  {
    "code": "MDG",
    "country": "マダガスカル",
    "countryEn": "Madagascar",
    "region": "Middle East & Africa",
    "flag": "🇲🇬",
    "primaryLawTitle": "Loi n°2011-002 du 15 juillet 2011 portant Code de la Santé",
    "primaryLawEnacted": "2011",
    "classificationSystem": "未整備（国際認証に依存）",
    "classCount": 4,
    "classes": [
      { "name": "Class I", "riskLevel": "低" },
      { "name": "Class II", "riskLevel": "中低" },
      { "name": "Class III", "riskLevel": "中高" },
      { "name": "Class IV", "riskLevel": "高" }
    ],
    "mainAuthority": "AMM（Agence du Médicament de Madagascar）",
    "mdsapStatus": "非参加",
    "udiRequired": false,
    "electronicSystem": "紙ベース申請（専用電子ポータルなし）",
    "deviceNotes": "医療機器専用法なし。Code de la Santé（2011年）が法的根拠。AMM（Décret 2010-960で設立、EPA）がNCA。DPLMT（保健省傘下）が政策立案。SALAMAが公的調達（ISO 9001:2015認証）。登録有効期間5年。SADC加盟国・AMRH参加・WHO SRA CRP参加（2024年〜）。フランス語。",
    "lastUpdated": "2026-04-06"
  },
  {
    "code": "LSO",
    "country": "レソト",
    "countryEn": "Lesotho",
    "region": "Middle East & Africa",
    "flag": "🇱🇸",
    "primaryLawTitle": "Lesotho Medicines and Medical Devices Control Authority Act, 2023 (Act No. 6 of 2023)",
    "primaryLawEnacted": "2023",
    "classificationSystem": "Schedule分類制（Schedule 0〜8・施行規則策定中）",
    "classCount": 4,
    "classes": [
      { "name": "Schedule 0", "riskLevel": "最低" },
      { "name": "Schedule 1–2", "riskLevel": "低〜中" },
      { "name": "Schedule 3–5", "riskLevel": "中〜高" },
      { "name": "Schedule 6–8", "riskLevel": "高〜最高" }
    ],
    "mainAuthority": "LeMERA",
    "mdsapStatus": "非参加",
    "udiRequired": false,
    "electronicSystem": "未整備（紙ベース申請・LeMERA設立直後）",
    "deviceNotes": "2023年制定・2026年3月施行のAct No. 6 of 2023が基本法。AU Model Law参考。LeMERA（Lesotho Medicines and Medical Devices Control Authority）がNCA。Schedule 0〜8分類（大臣決定）。SADC加盟国だがZaZiBoNa未参加。セソト語または英語ラベリング。規制体制の本格始動段階。",
    "lastUpdated": "2026-04-06"
  },
  {
    "code": "AND",
    "country": "アンドラ",
    "countryEn": "Andorra",
    "region": "Europe",
    "flag": "🇦🇩",
    "primaryLawTitle": "Llei general de sanitat, del 20 de març de 1989",
    "primaryLawEnacted": "1989",
    "classificationSystem": "EU MDR準拠4クラス制（関税同盟によるCEマーキング機器流通）",
    "classCount": 4,
    "classes": [
      { "name": "Class I", "riskLevel": "低" },
      { "name": "Class IIa", "riskLevel": "中低" },
      { "name": "Class IIb", "riskLevel": "中高" },
      { "name": "Class III", "riskLevel": "高" }
    ],
    "mainAuthority": "Ministeri de Salut",
    "mdsapStatus": "非参加",
    "udiRequired": false,
    "electronicSystem": "確認されていない",
    "deviceNotes": "EU非加盟・非EEA。1990年EU-アンドラ関税同盟で工業製品（医療機器含む）が自由流通。CEマーキング付き機器を受入。国内NBなし。Ministeri de Salutが所管。EU-アンドラ連合協定（2024年法的テキスト最終化）批准後にEU acquis国内法化の見込み。",
    "lastUpdated": "2026-04-06"
  },
  {
    "code": "MCO",
    "country": "モナコ",
    "countryEn": "Monaco",
    "region": "Europe",
    "flag": "🇲🇨",
    "primaryLawTitle": "Loi n° 1.267 du 23 décembre 2002 relative aux dispositifs médicaux",
    "primaryLawEnacted": "2002",
    "classificationSystem": "EU MDD準拠 4クラス制（Class I / IIa / IIb / III）",
    "classCount": 4,
    "classes": [
      { "name": "Class I", "riskLevel": "低" },
      { "name": "Class IIa", "riskLevel": "中低" },
      { "name": "Class IIb", "riskLevel": "中高" },
      { "name": "Class III", "riskLevel": "高" }
    ],
    "mainAuthority": "DASA",
    "mdsapStatus": "非参加",
    "udiRequired": false,
    "electronicSystem": "紙ベース申請（専用電子ポータルなし）",
    "deviceNotes": "EU非加盟・非EEA。2003年EU-Monaco協定（2004年発効）により旧EU医療機器指令（MDD等）をモナコ領域内に適用。CEマーキング付き機器を受入。国内NBなし。DASAがNCA。フランスANSMとの行政協力取極めにより検査・ビジランスで連携。EU連合協定交渉中。フランス語。",
    "lastUpdated": "2026-04-06"
  }
];

export function findMetaByCode(code) {
  return COUNTRY_PROFILES_META.find(p => p.code === code) ?? null;
}

export function groupMetaByRegion() {
  const map = {};
  for (const p of COUNTRY_PROFILES_META) {
    (map[p.region] ??= []).push(p);
  }
  return map;
}
