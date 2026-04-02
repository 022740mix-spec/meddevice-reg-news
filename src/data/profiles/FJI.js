// フィジー (Republic of Fiji)
export default {
  "code": "FJI",
  "country": "フィジー",
  "countryEn": "Republic of Fiji",
  "region": "ASPAC",
  "flag": "🇫🇯",
  "legalSystemOverview": {
    "type": "議会制共和制（Parliamentary Republic）",
    "description": "保健医療サービス省が管轄。Medicines and Cosmetics Act 2007 / Regulations 2012が法的根拠。FPBSC（Fiji Pharmaceutical and Biomedical Services Centre）が医療製品の規制を担当。参照国認可（TGA、FDA、CE等）への依存度が高い。太平洋島嶼国の中では比較的整備された規制体制。",
    "keyCharacteristics": [
      "FPBSC が医療機器規制を管轄",
      "Medicines and Cosmetics Act 2007が法的根拠",
      "参照国認可（TGA、FDA、CE等）への依存度が高い",
      "太平洋島嶼国の中では比較的整備された規制体制",
      "WHO/PIC/S連携による規制能力構築",
      "ローカル代理人の指定が必要"
    ]
  },
  "authorities": [
    {
      "name": "FPBSC",
      "fullName": "Fiji Pharmaceutical and Biomedical Services Centre",
      "localName": null,
      "role": "医療機器の登録・輸入管理・品質管理",
      "url": "https://www.health.gov.fj/",
      "isPrimary": true
    },
    {
      "name": "MOH Fiji",
      "fullName": "Ministry of Health and Medical Services",
      "localName": null,
      "role": "医療政策全般・公衆衛生",
      "url": "https://www.health.gov.fj/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "なし（FPBSC が直接審査）",
    "description": "Notified Body 制度は存在しない。参照国認可が審査で重要視される。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "Medicines and Cosmetics Act 2007に基づく定義。詳細な法的定義文書の公開は限定的。",
    "scope": "IVDを含む（要確認）。",
    "notes": "WHO定義との整合を推進中。"
  },
  "primaryLaw": {
    "title": "Medicines and Cosmetics Act 2007",
    "originalTitle": "Medicines and Cosmetics Act 2007",
    "enacted": "2007",
    "lastAmended": "2012（Regulations）",
    "url": "https://www.health.gov.fj/",
    "description": "医薬品・化粧品・医療機器の規制に関する基本法。"
  },
  "implementingRegulations": [
    {
      "title": "Medicines and Cosmetics Regulations 2012",
      "date": "2012",
      "url": "https://www.health.gov.fj/",
      "description": "法の施行規則。登録手続き・品質要件等を規定。",
      "category": "施行規則"
    }
  ],
  "relatedLaws": [],
  "classification": {
    "system": "リスクベース分類（要確認）",
    "basis": "参照国の分類を参考。独自の詳細な分類規則の公開は限定的。",
    "classes": [
      {
        "name": "Low Risk",
        "nameJa": "低リスク",
        "riskLevel": "低",
        "description": "低リスク医療機器。",
        "examples": [
          "ガーゼ",
          "聴診器",
          "体温計"
        ],
        "approvalPath": "登録/届出"
      },
      {
        "name": "Medium Risk",
        "nameJa": "中リスク",
        "riskLevel": "中",
        "description": "中リスク医療機器。",
        "examples": [
          "超音波診断装置",
          "注射器"
        ],
        "approvalPath": "登録"
      },
      {
        "name": "High Risk",
        "nameJa": "高リスク",
        "riskLevel": "高",
        "description": "高リスク医療機器。",
        "examples": [
          "心臓ペースメーカー",
          "人工関節"
        ],
        "approvalPath": "登録（詳細審査）"
      }
    ],
    "rules": [
      "参照国分類を活用",
      "分類体系の詳細は要確認"
    ],
    "totalProductCodes": null
  },
  "conformityAssessment": {
    "overview": "FPBSCに登録申請。参照国認可（TGA、FDA、CE等）の保有が審査の主要根拠。",
    "routes": [
      {
        "name": "Product Registration",
        "nameJa": "医療機器登録",
        "applicableClasses": [
          "全クラス"
        ],
        "description": "FPBSCに申請書類を提出。参照国認可証明・技術文書・品質証明等を審査。",
        "subtypes": [],
        "avgReviewTime": "要確認",
        "fee": "要確認",
        "url": "https://www.health.gov.fj/"
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
      "system": "有害事象報告制度（FPBSC）",
      "mandatory": true,
      "url": "https://www.health.gov.fj/",
      "description": "有害事象の報告義務がある。報告制度の詳細は要確認。"
    },
    "recalls": {
      "authority": "FPBSC / MOH",
      "description": "FPBSC/MOHがリコールを管理。参照国のリコール情報も監視。",
      "url": "https://www.health.gov.fj/"
    },
    "surveillance": "FPBSC/MOHによる市販後監視。参照国のアラート情報を活用。"
  },
  "certificateOfFreeSale": {
    "available": false,
    "issuingAuthority": null,
    "name": null,
    "description": "登録申請時に原産国のCFS提出が求められる場合がある。フィジーからのCFS発行制度は要確認。",
    "processingTime": null,
    "url": null
  },
  "reimbursement": {
    "system": "公的医療制度（政府負担）",
    "authority": "MOH",
    "description": "フィジーの公的医療は政府が大部分を負担。医療機器の調達は政府調達プロセスによる。",
    "codingSystems": [
      "要確認"
    ],
    "url": "https://www.health.gov.fj/"
  },
  "marketingRules": {
    "authority": "FPBSC",
    "description": "登録済み機器のみ販売可能。",
    "keyRules": [
      "登録済み機器のみ販売可",
      "虚偽広告の禁止"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "フィジーはMDSAPに参加していない。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "ISO 13485認証は品質証明として参照される。"
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
      "title": "規制能力の強化",
      "description": "WHO/WPRO支援の下で医療機器規制の能力構築を推進中。太平洋島嶼国間の規制協力も議論されている。"
    }
  ],
  "lastUpdated": "2026-04-02",
  "verified": null
};
