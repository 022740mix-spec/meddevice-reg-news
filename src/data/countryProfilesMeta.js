/**
 * 国別プロファイル メタデータ（軽量版）
 * 国グリッド・横比較テーブル用。詳細データは countryProfiles.js を動的importで取得。
 * 自動生成: node scripts/generate-profiles-meta.mjs
 */

export { COUNTRY_FLAG, REGION_ORDER } from './countryProfiles.js';

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
