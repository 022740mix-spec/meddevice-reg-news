// カンボジア (Kingdom of Cambodia)
export default {
  "code": "KHM",
  "country": "カンボジア",
  "countryEn": "Kingdom of Cambodia",
  "region": "ASPAC",
  "flag": "🇰🇭",
  "legalSystemOverview": {
    "type": "立憲君主制（Constitutional Monarchy）",
    "description": "カンボジアの医療機器規制は保健省（MOH）傘下の薬事食品局（DDF: Department of Drugs and Food）が所管する。Medical Devices Sub-decree（王令）により医療機器の登録制度が導入されている。ASEAN Medical Device Directive（AMDD）との整合を目指しており、ASEAN CSDT（Common Submission Dossier Template）の採用を段階的に進めている。規制制度は発展途上。",
    "keyCharacteristics": [
      "DDF/MOH が医療機器規制を統括",
      "Sub-decree（王令）に基づく登録制度",
      "ASEAN AMDD との整合を推進中",
      "リスクベース4クラス分類（A / B / C / D）を採用",
      "輸入品は DDF への登録・輸入許可が必要",
      "参照国認可（CE、FDA、ASEAN認可等）を審査で考慮"
    ]
  },
  "authorities": [
    {
      "name": "DDF",
      "fullName": "Department of Drugs and Food, Ministry of Health",
      "localName": "នាយកដ្ឋានឱសថ និងចំណីអាហារ",
      "role": "医療機器の登録・輸入許可・市販後監視を統括",
      "url": "https://www.dfrmedical.com/",
      "isPrimary": true
    },
    {
      "name": "MOH Cambodia",
      "fullName": "Ministry of Health — Cambodia",
      "localName": "ក្រសួងសុខាភិបាល",
      "role": "医療政策全般・法令の策定・監督",
      "url": "https://www.moh.gov.kh/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "該当なし（DDF 直接審査）",
    "description": "欧州型の Notified Body 制度は存在しない。DDF が直接登録審査を行う。参照国認可が審査で重要視される。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "医療機器に関するSub-decreeに基づく定義（ASEAN AMDD / IMDRF定義に準拠）。疾病の診断・治療・予防・監視等を目的とする器具・装置・機器・ソフトウェア等。",
    "scope": "IVDを含む。SaMDに関する詳細規定は要確認。",
    "notes": "ASEAN AMDDの定義に整合する方向で制度整備中。"
  },
  "primaryLaw": {
    "title": "Sub-decree on Management of Medical Devices（医療機器管理に関する王令）",
    "originalTitle": "អនុក្រឹត្យស្តីពីការគ្រប់គ្រងសម្ភារៈពេទ្យ",
    "enacted": "要確認",
    "lastAmended": "要確認",
    "url": "https://www.moh.gov.kh/",
    "description": "医療機器の定義、分類、登録制度、輸入管理、市販後監視等を規定する王令。"
  },
  "implementingRegulations": [
    {
      "title": "Prakas（省令）on Medical Device Registration",
      "date": "要確認",
      "url": "https://www.moh.gov.kh/",
      "description": "医療機器登録の手続き、必要書類、分類基準等の詳細を規定する保健省令。",
      "category": "登録手続き"
    },
    {
      "title": "ASEAN CSDT（Common Submission Dossier Template）ガイダンス",
      "date": "要確認",
      "url": "https://asean.org/",
      "description": "ASEAN共通の申請書類テンプレート。カンボジアでの採用を段階的に推進中。",
      "category": "ASEAN整合"
    }
  ],
  "relatedLaws": [
    {
      "title": "Law on the Management of Pharmaceuticals（医薬品管理法）",
      "category": "医薬品規制",
      "enacted": "1996",
      "url": "https://www.moh.gov.kh/",
      "relevance": "医薬品規制の基本法。医療機器規制の法的根拠の一部を提供。"
    }
  ],
  "classification": {
    "system": "リスクベース4クラス分類（ASEAN AMDD / IMDRF整合）",
    "basis": "ASEAN AMDDの分類ルールに基づくリスクベース分類。",
    "classes": [
      {
        "name": "Class A",
        "nameJa": "クラスA（低リスク）",
        "riskLevel": "低",
        "description": "低リスク医療機器。",
        "examples": [
          "ガーゼ",
          "聴診器",
          "手術用手袋"
        ],
        "approvalPath": "登録（簡易審査）— DDF"
      },
      {
        "name": "Class B",
        "nameJa": "クラスB（中低リスク）",
        "riskLevel": "中低",
        "description": "中低リスク医療機器。",
        "examples": [
          "超音波診断装置",
          "注射針",
          "歯科用材料"
        ],
        "approvalPath": "登録 — DDF"
      },
      {
        "name": "Class C",
        "nameJa": "クラスC（中高リスク）",
        "riskLevel": "中高",
        "description": "中高リスク医療機器。",
        "examples": [
          "人工呼吸器",
          "透析器",
          "骨接合プレート"
        ],
        "approvalPath": "登録（技術審査）— DDF"
      },
      {
        "name": "Class D",
        "nameJa": "クラスD（高リスク）",
        "riskLevel": "高",
        "description": "高リスク医療機器。",
        "examples": [
          "心臓ペースメーカー",
          "人工心臓弁",
          "冠動脈ステント"
        ],
        "approvalPath": "登録（詳細審査）— DDF"
      }
    ],
    "rules": [
      "ASEAN AMDDの分類ルールに準拠",
      "IVDの分類基準は要確認",
      "参照国での分類を参考"
    ],
    "totalProductCodes": null
  },
  "conformityAssessment": {
    "overview": "全医療機器はDDFへの登録が必要。参照国認可（CE、FDA、ASEAN認可等）の保有が審査を円滑化する。外国メーカーはローカル代理人（輸入業者）の指定が必要。",
    "routes": [
      {
        "name": "DDF Device Registration",
        "nameJa": "DDF 医療機器登録",
        "applicableClasses": [
          "Class A",
          "Class B",
          "Class C",
          "Class D"
        ],
        "description": "DDFに申請書類一式を提出。ASEAN CSDTに基づく技術文書、参照国認可証明等が必要。",
        "subtypes": [
          "新規登録",
          "変更登録",
          "更新"
        ],
        "avgReviewTime": "要確認（数ヶ月〜）",
        "fee": "MOH規定による",
        "url": "https://www.dfrmedical.com/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "要確認",
    "url": null,
    "description": "電子申請システムの導入状況は要確認。書面提出が主。",
    "mandatory": false
  },
  "udi": {
    "required": false,
    "system": "未導入",
    "description": "独自のUDI制度は2026年時点で未導入。",
    "url": null,
    "timeline": "未定"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "有害事象報告制度（DDF/MOH）",
      "mandatory": true,
      "url": "https://www.moh.gov.kh/",
      "description": "DDFへの有害事象報告が義務付けられている。報告様式・期限の詳細は要確認。"
    },
    "recalls": {
      "authority": "DDF / MOH",
      "description": "MOHの命令または自主リコール。",
      "url": "https://www.moh.gov.kh/"
    },
    "surveillance": "DDF/MOHによる市販後監視。制度は発展途上。"
  },
  "certificateOfFreeSale": {
    "available": false,
    "issuingAuthority": null,
    "name": null,
    "description": "カンボジアからのCFS発行に関する公式制度は要確認。輸入登録時に製造国のCFS提出が求められる。",
    "processingTime": null,
    "url": null
  },
  "reimbursement": {
    "system": "政府主導型医療制度（公的医療 + 民間セクター + NGO支援）",
    "authority": "保健省（MOH）",
    "description": "Health Equity Fund等により貧困層への医療アクセスを確保。医療機器の個別償還制度は未整備。公共調達・ドナー支援が中心。",
    "codingSystems": [],
    "url": "https://www.moh.gov.kh/"
  },
  "marketingRules": {
    "authority": "DDF / MOH",
    "description": "医療機器広告に関する詳細法規は要確認。虚偽広告は一般法により禁止。",
    "keyRules": [
      "虚偽・誇大広告の禁止",
      "未登録機器の広告禁止"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "カンボジアはMDSAPに参加していない。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "ISO 13485認証は登録時にQMS証明として参照される。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "リスクマネジメントの国際規格として参照。"
    },
    "iec62304": {
      "accepted": false,
      "notes": "独自の要求は要確認。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "医用電気機器の安全規格として参照。"
    },
    "others": []
  },
  "recentDevelopments": [
    {
      "date": "2024-2025",
      "title": "ASEAN AMDD整合の推進",
      "description": "ASEAN医療機器指令との整合を段階的に推進中。ASEAN CSDTの採用を準備。"
    },
    {
      "date": "2025",
      "title": "医療機器登録制度の運用強化",
      "description": "DDF/MOHが登録審査の体制強化を進行中。"
    }
  ],
  "lastUpdated": "2026-04-02",
  "verified": null
};
