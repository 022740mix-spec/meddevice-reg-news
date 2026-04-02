// カザフスタン (Republic of Kazakhstan)
export default {
  "code": "KAZ",
  "country": "カザフスタン",
  "countryEn": "Republic of Kazakhstan",
  "region": "ASPAC",
  "flag": "🇰🇿",
  "legalSystemOverview": {
    "type": "大統領制共和制（Presidential Republic）— EAEU加盟国",
    "description": "カザフスタンの医療機器規制はEAEU（ユーラシア経済連合）の統一規制枠組みの下で運用される。TR EAEU 038/2016に基づき、統一登録制度・統一分類・適合性評価が適用される。国内ではNCDM（National Center for Expertise of Medicines and Medical Devices）が規制当局。EAEU統一登録証明書により加盟5カ国（ロシア、ベラルーシ、カザフスタン、キルギス、アルメニア）での流通が可能。",
    "keyCharacteristics": [
      "EAEU 統一規制（TR EAEU 038/2016）が主要な規制枠組み",
      "EAEU 統一登録証明書による加盟国間での流通",
      "NCDM が国内の登録・審査を担当",
      "リスクベースの4クラス分類（Class 1 / 2a / 2b / 3）— EAEU統一分類",
      "適合性評価はEAEU指定の適合性評価機関が実施",
      "国内法と EAEU 統一法の二重構造（移行期間あり）",
      "2022年以降、EAEU統一登録への完全移行を推進"
    ]
  },
  "authorities": [
    {
      "name": "NCDM",
      "fullName": "National Center for Expertise of Medicines and Medical Devices",
      "localName": "Ȁлттық дәрі-дәрмек сараптамасы орталығы",
      "role": "医療機器の登録審査・適合性評価・市販後監視",
      "url": "https://www.ndda.kz/",
      "isPrimary": true
    },
    {
      "name": "MOH Kazakhstan",
      "fullName": "Ministry of Health of the Republic of Kazakhstan",
      "localName": "Қазақстан Республикасының Денсаулық сақтау министрлігі",
      "role": "医療政策全般・規制監督",
      "url": "https://www.gov.kz/memleket/entities/dsm",
      "isPrimary": false
    },
    {
      "name": "EEC",
      "fullName": "Eurasian Economic Commission",
      "localName": "Евразийская экономическая комиссия",
      "role": "EAEU統一規制の策定・管理（超国家機関）",
      "url": "https://eec.eaeunion.org/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "EAEU適合性評価機関（認定制）",
    "description": "EAEUの枠組みで認定された適合性評価機関が技術文書審査・試験・QMS監査を実施。",
    "bodies": [
      {
        "name": "EAEU認定適合性評価機関（カザフスタン国内）",
        "id": "要確認",
        "url": "https://www.ndda.kz/"
      }
    ]
  },
  "deviceDefinition": {
    "legalDefinition": "TR EAEU 038/2016に基づく定義。疾病の診断・治療・予防・監視・軽減・代償等を目的とする器具・装置・機器・ソフトウェア・材料等。",
    "scope": "IVDを含む（附属書で規定）。",
    "notes": "GHTF/IMDRF定義に概ね準拠。"
  },
  "primaryLaw": {
    "title": "TR EAEU 038/2016（EAEU医療機器安全性に関する技術規則）",
    "originalTitle": "Технический регламент ЕАЭС «О безопасности медицинских изделий»",
    "enacted": "2016（採択）/ 2021（発効）",
    "lastAmended": "随時改正",
    "url": "https://eec.eaeunion.org/",
    "description": "EAEU加盟国に共通の医療機器規制。分類・登録・適合性評価・表示・市販後監視を包括的に規定。"
  },
  "implementingRegulations": [
    {
      "title": "EAEU医療機器登録手続き規則",
      "date": "2021",
      "url": "https://eec.eaeunion.org/",
      "description": "EAEU統一登録の手続き・必要書類・審査プロセスを規定。",
      "category": "登録手続き"
    },
    {
      "title": "EAEU医療機器分類規則",
      "date": "2021",
      "url": "https://eec.eaeunion.org/",
      "description": "EAEU統一分類規則。リスクベースの4クラス分類。",
      "category": "分類"
    },
    {
      "title": "カザフスタン国内法（Code on People's Health）",
      "date": "2020改正",
      "url": "https://www.gov.kz/memleket/entities/dsm",
      "description": "国内の医療機器規制基本法。EAEU統一法と並行適用。",
      "category": "国内法"
    }
  ],
  "relatedLaws": [
    {
      "title": "EAEU条約（Treaty on the Eurasian Economic Union）",
      "category": "国際条約",
      "enacted": "2015",
      "url": "https://eec.eaeunion.org/",
      "relevance": "EAEU統一市場の法的基盤。"
    }
  ],
  "classification": {
    "system": "4クラス分類（Class 1 / 2a / 2b / 3）— EAEU統一分類",
    "basis": "TR EAEU 038/2016に基づくリスクベース分類。GHTF/IMDRF枠組みに準拠。",
    "classes": [
      {
        "name": "Class 1",
        "nameJa": "クラス1",
        "riskLevel": "低リスク",
        "description": "低リスク医療機器。",
        "examples": [
          "ガーゼ",
          "聴診器",
          "手術用手袋",
          "車椅子"
        ],
        "approvalPath": "EAEU登録（簡易手続き/自己宣言）"
      },
      {
        "name": "Class 2a",
        "nameJa": "クラス2a",
        "riskLevel": "中低リスク",
        "description": "中低リスク医療機器。",
        "examples": [
          "注射器",
          "超音波診断装置",
          "歯科材料"
        ],
        "approvalPath": "EAEU登録（適合性評価機関審査）"
      },
      {
        "name": "Class 2b",
        "nameJa": "クラス2b",
        "riskLevel": "中高リスク",
        "description": "中高リスク医療機器。",
        "examples": [
          "人工呼吸器",
          "透析装置",
          "歯科インプラント"
        ],
        "approvalPath": "EAEU登録（適合性評価機関審査 + 臨床評価）"
      },
      {
        "name": "Class 3",
        "nameJa": "クラス3",
        "riskLevel": "高リスク",
        "description": "高リスク医療機器。",
        "examples": [
          "心臓ペースメーカー",
          "冠動脈ステント",
          "人工心臓弁"
        ],
        "approvalPath": "EAEU登録（詳細審査 + 臨床試験が必要な場合あり）"
      }
    ],
    "rules": [
      {
        "id": "TR EAEU 038/2016 分類規則",
        "description": "EAEU統一分類規則。意図する用途・侵襲性・使用期間・能動/非能動の区分等に基づきクラスを決定。18の分類規則。",
        "url": "https://eec.eaeunion.org/"
      }
    ],
    "totalProductCodes": null
  },
  "conformityAssessment": {
    "overview": "EAEU統一登録制度に基づく。EAEU認定適合性評価機関による技術文書審査・QMS監査・試験が実施される。統一登録証明書はEAEU加盟5カ国で有効。",
    "routes": [
      {
        "name": "EAEU Unified Registration",
        "nameJa": "EAEU統一登録",
        "applicableClasses": [
          "Class 1 / 2a / 2b / 3"
        ],
        "description": "参照国の規制当局に申請。適合性評価機関審査後、登録証明書を発行。加盟国全域で有効。",
        "subtypes": [
          "新規登録",
          "変更登録",
          "更新"
        ],
        "avgReviewTime": "50〜210営業日（クラスによる）",
        "fee": "要確認（参照国による）",
        "url": "https://eec.eaeunion.org/"
      },
      {
        "name": "National Registration (Legacy)",
        "nameJa": "国内登録（レガシー）",
        "applicableClasses": [
          "全クラス"
        ],
        "description": "EAEU統一登録移行前の国内登録。既存登録は有効期限まで有効だが新規はEAEU統一が原則。",
        "subtypes": [],
        "avgReviewTime": "要確認",
        "fee": "要確認",
        "url": "https://www.ndda.kz/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "EAEU統一情報システム（開発中）",
    "url": "https://eec.eaeunion.org/",
    "description": "EAEU統一電子登録システム開発・導入中。",
    "mandatory": false
  },
  "udi": {
    "required": false,
    "system": "EAEU UDI制度（導入予定）",
    "description": "EAEU統一UDI制度検討中。TR EAEU 038/2016にUDI要件枠組みあり。完全実施時期は要確認。",
    "url": null,
    "timeline": "EAEU統一スケジュールに準拠（要確認）"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "EAEU統一ビジランス + 国内ビジランス",
      "mandatory": true,
      "url": "https://www.ndda.kz/",
      "description": "EAEU統一ビジランスおよび国内NCDM/保健省への報告義務。有害事象・FSCAの報告義務あり。"
    },
    "recalls": {
      "authority": "NCDM / MOH Kazakhstan / EEC",
      "description": "NCDMおよび保健省が管理。EAEU加盟国間情報共有メカニズムあり。",
      "url": "https://www.ndda.kz/"
    },
    "surveillance": "NCDM/保健省による市販後監視。EAEU統一ビジランスと連携。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "NCDM / MOH",
    "name": "Certificate of Free Sale",
    "description": "NCDM/保健省が登録済み機器についてCFSを発行。EAEU統一登録証明書もCFSとして機能する場合あり。",
    "processingTime": "要確認",
    "url": "https://www.ndda.kz/"
  },
  "reimbursement": {
    "system": "社会健康保険（OSMS）+ 国家保証医療パッケージ（GOBMP）",
    "authority": "保健省 / FSMS",
    "description": "2020年導入のOSMSおよびGOBMPを通じて医療サービス提供。調達は公的入札制。SK-Pharmaciaが国家調達を管理。",
    "codingSystems": [
      "要確認"
    ],
    "url": "https://www.gov.kz/memleket/entities/dsm"
  },
  "marketingRules": {
    "authority": "NCDM / MOH",
    "description": "EAEU統一規則および国内法に基づく。",
    "keyRules": [
      "EAEU統一登録済み機器のみ販売可",
      "虚偽・誇大広告の禁止",
      "ラベリングはEAEU規則に準拠（ロシア語・カザフ語）"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "カザフスタン（EAEU）はMDSAPに参加していない。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "ISO 13485はEAEU統一規則でQMS要件として要求。GOST R ISO 13485も適用。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "EAEU規則でリスクマネジメント要件として参照。GOST R ISO 14971。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "ソフトウェア医療機器に参照。GOST R IEC 62304。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "GOST R IEC 60601シリーズとして採用。"
    },
    "others": [
      {
        "name": "GOST（ГОСТ）規格",
        "notes": "旧ソ連の規格体系。EAEU加盟国ではISO/IEC規格のGOST版が広く使用。"
      }
    ]
  },
  "recentDevelopments": [
    {
      "date": "2024-2026",
      "title": "EAEU統一登録への完全移行",
      "description": "移行が進行中。移行期間延長が繰り返され、完全移行時期は流動的。"
    },
    {
      "date": "2025",
      "title": "デジタルヘルス規制の整備",
      "description": "SaMD・AI/ML医療機器の規制枠組み検討がEAEUレベルで進行中。"
    },
    {
      "date": "2025",
      "title": "国産医療機器産業の振興",
      "description": "国産開発・製造を政策的に推進。ローカリゼーション要件の導入も議論。"
    }
  ],
  "lastUpdated": "2026-04-02",
  "verified": null
};
