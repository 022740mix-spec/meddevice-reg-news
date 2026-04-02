// ボリビア (Plurinational State of Bolivia)
export default {
  "code": "BOL",
  "country": "ボリビア",
  "countryEn": "Plurinational State of Bolivia",
  "region": "Latam",
  "flag": "🇧🇴",
  "legalSystemOverview": {
    "type": "中央集権制（Centralized system）",
    "description": "保健スポーツ省傘下のUNIMED（Unidad de Medicamentos y Tecnología en Salud）が管轄。Registro Sanitario制度を運用。規制制度は発展途上であり、参照国認可（CE、FDA等）やCFSが審査で重要視される。",
    "keyCharacteristics": [
      "UNIMED が医療機器規制を管轄",
      "Registro Sanitario（衛生登録）制度",
      "リスクベース分類を導入（詳細は要確認）",
      "参照国認可・CFS が審査で重視される",
      "ローカル代理人の指定が必要",
      "規制制度は発展途上"
    ]
  },
  "authorities": [
    {
      "name": "UNIMED",
      "fullName": "Unidad de Medicamentos y Tecnología en Salud",
      "localName": "Unidad de Medicamentos y Tecnología en Salud",
      "role": "医療機器の衛生登録・輸入管理・品質管理",
      "url": "https://www.minsalud.gob.bo/",
      "isPrimary": true
    },
    {
      "name": "AGEMED",
      "fullName": "Agencia Estatal de Medicamentos y Tecnologías en Salud",
      "localName": "Agencia Estatal de Medicamentos y Tecnologías en Salud",
      "role": "医薬品・医療技術の規制（医療機器への関与は要確認）",
      "url": "https://www.agemed.org.bo/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "なし（UNIMED が直接審査）",
    "description": "Notified Body 制度は存在しない。UNIMED が直接審査を行う。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "疾病の診断・治療・予防・監視等を目的とする器具・装置・機器等。法的定義の詳細は要確認。",
    "scope": "IVDを含む。",
    "notes": "SaMDに関する明確な規定は要確認。"
  },
  "primaryLaw": {
    "title": "Ley del Medicamento No. 1737 および関連規則",
    "originalTitle": "Ley del Medicamento No. 1737",
    "enacted": "1996",
    "lastAmended": "要確認",
    "url": "https://www.minsalud.gob.bo/",
    "description": "医薬品・医療機器の規制に関する基本法。"
  },
  "implementingRegulations": [
    {
      "title": "医療機器登録手続き規則",
      "date": "要確認",
      "url": "https://www.minsalud.gob.bo/",
      "description": "Registro Sanitario に必要な書類・手続きを規定。",
      "category": "登録手続き"
    }
  ],
  "relatedLaws": [
    {
      "title": "Ley No. 475 - Ley de Prestaciones de Servicios de Salud Integral",
      "category": "医療サービス法",
      "enacted": "2013",
      "url": "https://www.minsalud.gob.bo/",
      "relevance": "包括的医療サービス法。"
    }
  ],
  "classification": {
    "system": "リスクベース分類（要確認）",
    "basis": "保健省規則に基づくリスクベース分類。",
    "classes": [
      {
        "name": "Class I",
        "nameJa": "クラスI",
        "riskLevel": "低リスク",
        "description": "低リスク医療機器。",
        "examples": [
          "ガーゼ",
          "聴診器",
          "体温計"
        ],
        "approvalPath": "Registro Sanitario（簡易）"
      },
      {
        "name": "Class II",
        "nameJa": "クラスII",
        "riskLevel": "中リスク",
        "description": "中リスク医療機器。",
        "examples": [
          "超音波診断装置",
          "注射器"
        ],
        "approvalPath": "Registro Sanitario（標準）"
      },
      {
        "name": "Class III",
        "nameJa": "クラスIII",
        "riskLevel": "高リスク",
        "description": "高リスク医療機器。",
        "examples": [
          "心臓ペースメーカー",
          "人工関節"
        ],
        "approvalPath": "Registro Sanitario（詳細審査）"
      }
    ],
    "rules": [
      "保健省規則に基づく分類",
      "分類体系の詳細は要確認"
    ],
    "totalProductCodes": null
  },
  "conformityAssessment": {
    "overview": "UNIMED に Registro Sanitario を申請。CFS、技術文書、GMP/ISO 13485 証明等が必要。",
    "routes": [
      {
        "name": "Registro Sanitario",
        "nameJa": "衛生登録",
        "applicableClasses": [
          "Class I / II / III"
        ],
        "description": "UNIMED に申請書類一式を提出。CFS・技術文書・GMP証明・ラベリング等を審査。",
        "subtypes": [],
        "avgReviewTime": "要確認（数ヶ月〜）",
        "fee": "要確認",
        "url": "https://www.minsalud.gob.bo/"
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
    "description": "独自のUDI制度は未導入。",
    "url": null,
    "timeline": "未定"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "ファーマコビジランス/テクノビジランス制度",
      "mandatory": true,
      "url": "https://www.minsalud.gob.bo/",
      "description": "有害事象の報告義務がある。テクノビジランス体制は構築中。"
    },
    "recalls": {
      "authority": "UNIMED",
      "description": "UNIMEDがリコールを管理。",
      "url": "https://www.minsalud.gob.bo/"
    },
    "surveillance": "UNIMEDによる市販後監視。制度は発展途上。"
  },
  "certificateOfFreeSale": {
    "available": false,
    "issuingAuthority": null,
    "name": null,
    "description": "登録申請時に原産国のCFS提出が求められる。ボリビアからのCFS発行制度は要確認。",
    "processingTime": null,
    "url": null
  },
  "reimbursement": {
    "system": "公的医療制度（SUS: Sistema Único de Salud）",
    "authority": "保健スポーツ省",
    "description": "2019年に導入されたSUS（統一保健制度）により医療アクセスの拡大を推進。公的調達は入札制。",
    "codingSystems": [
      "要確認"
    ],
    "url": "https://www.minsalud.gob.bo/"
  },
  "marketingRules": {
    "authority": "UNIMED",
    "description": "登録済み機器のみ販売可能。",
    "keyRules": [
      "登録済み機器のみ販売可",
      "虚偽広告の禁止"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "ボリビアはMDSAPに参加していない。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "ISO 13485認証はGMP/QMS証明として参照される。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "リスクマネジメント規格として参照。"
    },
    "iec62304": {
      "accepted": false,
      "notes": "要確認。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "医用電気機器の安全規格として参照。"
    },
    "others": []
  },
  "recentDevelopments": [
    {
      "date": "2025-2026",
      "title": "医療機器規制の整備推進",
      "description": "PAHO/WHO支援の下で医療機器規制の制度化・能力構築を推進中。AGEMEDの設立により規制体制の強化が期待される。"
    }
  ],
  "lastUpdated": "2026-04-02",
  "verified": null
};
