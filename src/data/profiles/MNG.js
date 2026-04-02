// モンゴル (Mongolia)
export default {
  "code": "MNG",
  "country": "モンゴル",
  "countryEn": "Mongolia",
  "region": "ASPAC",
  "flag": "🇲🇳",
  "legalSystemOverview": {
    "type": "議会制共和制（Parliamentary Republic）",
    "description": "モンゴルの医療機器規制は保健省（MOH）が所管する。Health Law および Medicines and Medical Devices Law に基づき、医療機器の登録・輸入管理・市販後監視を実施。規制制度は発展途上であり、WHOの技術支援を受けながら制度整備を進めている。参照国認可（CE、FDA等）への依存度が高い。",
    "keyCharacteristics": [
      "保健省（MOH）が医療機器規制を統括",
      "Medicines and Medical Devices Law が法的根拠",
      "リスクベース分類を導入（詳細は要確認）",
      "輸入品は MOH への登録が必要",
      "参照国認可（CE、FDA等）への依存度が高い",
      "WHO 支援の下で規制制度を整備中"
    ]
  },
  "authorities": [
    {
      "name": "MOH Mongolia",
      "fullName": "Ministry of Health — Mongolia",
      "localName": "Эрүүл мэндийн яам",
      "role": "医療機器の登録・輸入許可・市販後監視・医療政策全般を統括",
      "url": "https://www.moh.gov.mn/",
      "isPrimary": true
    },
    {
      "name": "GASI",
      "fullName": "General Agency for Specialized Inspection",
      "localName": "Мэргэжлийн хяналтын ерөнхий газар",
      "role": "医療機器を含む製品の品質・安全性の検査・監督",
      "url": "https://www.inspection.gov.mn/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "該当なし（MOH 直接審査）",
    "description": "Notified Body 制度は存在しない。MOH が直接登録審査を行う。参照国認可が審査で重要視される。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "Medicines and Medical Devices Law に基づく定義。疾病の診断・治療・予防・監視等を目的とする器具・装置・機器等。詳細な法的定義文書の公開は限定的。",
    "scope": "IVDを含む。SaMDに関する詳細規定は要確認。",
    "notes": "WHO/IMDRF定義との整合を推進中。"
  },
  "primaryLaw": {
    "title": "Medicines and Medical Devices Law（医薬品・医療機器法）",
    "originalTitle": "Эм, эмнэлгийн хэрэгслийн тухай хууль",
    "enacted": "要確認",
    "lastAmended": "要確認",
    "url": "https://www.moh.gov.mn/",
    "description": "医薬品および医療機器の規制に関する基本法。登録制度、品質管理、市販後監視の法的根拠を規定。"
  },
  "implementingRegulations": [
    {
      "title": "MOH 医療機器登録手続き規則",
      "date": "要確認",
      "url": "https://www.moh.gov.mn/",
      "description": "医療機器の登録に必要な書類・手続きの詳細を規定。",
      "category": "登録手続き"
    }
  ],
  "relatedLaws": [
    {
      "title": "Health Law（健康法）",
      "category": "医療全般",
      "enacted": "要確認",
      "url": "https://www.moh.gov.mn/",
      "relevance": "モンゴルの医療制度全般の法的根拠。医療機器の使用・管理にも関連。"
    }
  ],
  "classification": {
    "system": "リスクベース分類（詳細は要確認）",
    "basis": "MOH規則に基づく分類。IMDRF枠組みとの整合を検討中。",
    "classes": [
      {
        "name": "Low Risk",
        "nameJa": "低リスク",
        "riskLevel": "低",
        "description": "低リスク医療機器。",
        "examples": [
          "ガーゼ",
          "聴診器",
          "手術用手袋"
        ],
        "approvalPath": "登録 — MOH"
      },
      {
        "name": "Medium Risk",
        "nameJa": "中リスク",
        "riskLevel": "中",
        "description": "中程度のリスクの医療機器。",
        "examples": [
          "超音波診断装置",
          "注射針"
        ],
        "approvalPath": "登録 — MOH"
      },
      {
        "name": "High Risk",
        "nameJa": "高リスク",
        "riskLevel": "高",
        "description": "高リスク医療機器。",
        "examples": [
          "心臓ペースメーカー",
          "人工心臓弁",
          "冠動脈ステント"
        ],
        "approvalPath": "登録（詳細審査）— MOH"
      }
    ],
    "rules": [
      "MOH規則に基づく分類",
      "参照国での分類を参考",
      "分類体系の詳細は要確認（IMDRF整合を検討中）"
    ],
    "totalProductCodes": null
  },
  "conformityAssessment": {
    "overview": "医療機器はMOHへの登録が必要。参照国認可（CE、FDA等）の保有が審査で考慮される。外国メーカーはローカル代理人（輸入業者）の指定が必要。",
    "routes": [
      {
        "name": "MOH Device Registration",
        "nameJa": "MOH 医療機器登録",
        "applicableClasses": [
          "Low Risk",
          "Medium Risk",
          "High Risk"
        ],
        "description": "MOHに申請書類一式を提出。技術文書、参照国認可証明、品質管理証明書等が必要。",
        "subtypes": [
          "新規登録",
          "変更登録",
          "更新"
        ],
        "avgReviewTime": "要確認（数ヶ月〜）",
        "fee": "MOH規定による",
        "url": "https://www.moh.gov.mn/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "要確認",
    "url": null,
    "description": "電子申請システムの導入状況は要確認。",
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
      "system": "有害事象報告制度（MOH）",
      "mandatory": true,
      "url": "https://www.moh.gov.mn/",
      "description": "MOHへの有害事象報告義務がある。報告様式・期限の詳細は要確認。"
    },
    "recalls": {
      "authority": "MOH / GASI",
      "description": "MOHの命令または自主リコール。GASIが市場監視を支援。",
      "url": "https://www.moh.gov.mn/"
    },
    "surveillance": "MOH/GASIによる市販後監視。制度は発展途上。WHO支援の下で体制構築中。"
  },
  "certificateOfFreeSale": {
    "available": false,
    "issuingAuthority": null,
    "name": null,
    "description": "モンゴルからのCFS発行に関する公式制度は要確認。輸入登録時に製造国のCFS提出が求められる場合がある。",
    "processingTime": null,
    "url": null
  },
  "reimbursement": {
    "system": "社会保険制度（Health Insurance Fund）",
    "authority": "保健省（MOH）/ 社会保険庁",
    "description": "国民健康保険制度により基本的な医療サービスをカバー。医療機器の個別償還制度は限定的。公共調達が中心。",
    "codingSystems": [],
    "url": "https://www.moh.gov.mn/"
  },
  "marketingRules": {
    "authority": "MOH",
    "description": "医療機器広告に関する詳細法規は要確認。虚偽広告は一般法により禁止。",
    "keyRules": [
      "虚偽・誇大広告の禁止",
      "未登録機器の広告禁止"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "モンゴルはMDSAPに参加していない。"
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
      "title": "医療機器規制制度の整備",
      "description": "WHO支援の下で医療機器規制の制度化・能力構築を推進中。"
    },
    {
      "date": "2025",
      "title": "保健セクター改革の推進",
      "description": "保健セクター改革の一環として、医療機器の品質管理・規制体制の強化を計画。"
    }
  ],
  "lastUpdated": "2026-04-02",
  "verified": null
};
