// ナミビア (Namibia)
export default {
  "code": "NAM",
  "country": "ナミビア",
  "countryEn": "Namibia",
  "region": "Middle East & Africa",
  "flag": "🇳🇦",
  "legalSystemOverview": {
    "type": "法令はあるが医療機器専用制度は未整備（Level 3相当）",
    "description": "ナミビアではNMRC（ナミビア医薬品規制評議会）が医薬品規制を管轄。Medicines and Related Substances Control Act 2003（Act No. 13 of 2003）が基本法で医療機器を定義しているが、医療機器専用の分類・登録・PMS制度は未整備。実務上、有効成分を含むボーダーライン製品およびCOVID抗原キットのみが規制対象。2024年よりAUDA-NEPADの支援で法改正を検討中。ZaZiBoNa創設メンバー（医薬品のみ、機器は対象外）。",
    "keyCharacteristics": [
      "NMRC がNCA（2003年法で設立）",
      "Medicines and Related Substances Control Act 2003 が基本法",
      "医療機器専用の分類・登録・PMS制度は未整備",
      "有効成分含有ボーダーライン製品とCOVID抗原キットのみ規制実績",
      "ZaZiBoNa創設メンバー（医薬品のみ）",
      "2024年AUDA-NEPAD支援で法改正検討中",
      "英語ラベリング"
    ]
  },
  "authorities": [
    {
      "name": "NMRC",
      "fullName": "Namibia Medicines Regulatory Council",
      "localName": null,
      "role": "NCA: 医薬品・関連物質の登録・品質管理・輸入規制。医療機器は法令上管轄に含まれるが専用制度は未整備。",
      "url": "https://mhss.gov.na/pharmaceutical-services",
      "isPrimary": true
    },
    {
      "name": "MoHSS",
      "fullName": "Ministry of Health and Social Services",
      "localName": null,
      "role": "保健政策立案・公的医療サービス提供。NMRCの上位機関。",
      "url": "https://mhss.gov.na/directorates",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "政府直接審査（NB制度なし）",
    "description": "NMRCが直接審査。医療機器専用の第三者認証機関制度は存在しない。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "Medicines and Related Substances Control Act 2003: 医療機器の定義を含むが、具体的な分類・登録要件は未規定。",
    "scope": "法令上は医療機器・IVDが対象範囲に含まれる。実務上は有効成分含有ボーダーライン製品のみ規制。",
    "notes": "COVID-19パンデミック時に抗原迅速検査キットの規制を実施。"
  },
  "primaryLaw": {
    "title": "Medicines and Related Substances Control Act, 2003 (Act No. 13 of 2003)",
    "originalTitle": "Medicines and Related Substances Control Act",
    "enacted": "2003",
    "lastAmended": "2007（Act No. 8 of 2007）",
    "url": "https://namiblii.org/akn/na/act/2003/13/eng@2008-08-01",
    "description": "2003年制定、2008年施行。NMRCの設立根拠法。医薬品・医療機器・関連物質の規制を規定。2007年改正（Act No. 8 of 2007）。医療機器専用の詳細規定は未整備。"
  },
  "implementingRegulations": [
    {
      "title": "Medicines and Related Substances Control Regulations（各種規則）",
      "date": "2003",
      "url": "https://namiblii.org/akn/na/act/2003/13/eng@2008-08-01",
      "description": "基本法に基づく各種規則。医療機器専用の実施規則は未制定。",
      "category": "実施規則"
    }
  ],
  "relatedLaws": [
    {
      "title": "ZaZiBoNa Collaborative Registration Procedure",
      "category": "地域協力",
      "enacted": "2013",
      "url": "https://www.zazibona.org/about",
      "relevance": "SADC域内の共同審査手続。ナミビアは創設メンバーだが、現在は医薬品のみ対象（医療機器は対象外）。"
    }
  ],
  "classification": {
    "system": "未整備",
    "basis": "医療機器専用の分類制度は未整備。法令に分類規則の規定なし。将来的にGHTF/IMDRF整合の分類制度導入が検討されている。",
    "classes": [
      {
        "name": "未分類",
        "nameJa": "未分類",
        "riskLevel": "不明",
        "description": "分類制度未整備のため全機器が未分類状態。個別判断で規制対象とされる場合がある。",
        "examples": ["COVID抗原迅速検査キット（規制実績あり）", "有効成分含有ボーダーライン製品（規制実績あり）"],
        "approvalPath": "個別判断（専用登録制度なし）"
      }
    ],
    "rules": [
      "医療機器専用の分類規則は未整備",
      "将来的にGHTF/IMDRF整合の分類制度導入を検討中"
    ],
    "totalProductCodes": null
  },
  "conformityAssessment": {
    "overview": "医療機器専用の登録・適合性評価制度は未整備。有効成分を含むボーダーライン製品は医薬品登録プロセスで評価。COVID抗原キットは緊急措置で規制。AUDA-NEPADの支援で制度構築を検討中。",
    "routes": [
      {
        "name": "個別規制（専用制度なし）",
        "nameJa": "個別規制",
        "applicableClasses": ["未分類"],
        "description": "医療機器専用の登録制度は存在しない。ボーダーライン製品（有効成分含有）は医薬品登録プロセスで審査。COVID抗原キットは緊急規制措置で対応。一般的な医療機器の市場参入には体系的な規制プロセスがない。",
        "subtypes": [],
        "avgReviewTime": "要確認（専用制度未整備）",
        "avgReviewTimeSource": "https://mhss.gov.na/directorates",
        "fee": "要確認（専用制度未整備）",
        "feeSource": "https://mhss.gov.na/pharmacovigilance",
        "url": "https://mhss.gov.na/pharmaceutical-services"
      }
    ]
  },
  "electronicSubmission": {
    "system": "未導入",
    "url": null,
    "description": "医療機器専用の電子申請ポータルは存在しない。医薬品登録は紙ベースが中心。",
    "mandatory": false
  },
  "udi": {
    "required": false,
    "system": "未導入",
    "description": "UDI制度は未導入。導入計画は確認できず。",
    "url": null,
    "timeline": "未定"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "NMRCファーマコビジランス",
      "mandatory": true,
      "url": "https://mhss.gov.na/pharmacovigilance",
      "description": "医薬品のファーマコビジランス制度は存在するが、医療機器専用の有害事象報告制度（マテリオビジランス）は未整備。"
    },
    "recalls": {
      "authority": "NMRC / MoHSS",
      "description": "NMRCが必要に応じて市場安全措置を実施。医療機器専用のリコール手続は未整備。",
      "url": "https://mhss.gov.na/safety-alerts"
    },
    "surveillance": "医療機器専用の市販後監視制度は未整備。医薬品のファーマコビジランスの一部として限定的に対応。"
  },
  "certificateOfFreeSale": {
    "available": false,
    "issuingAuthority": "NMRC（推定）",
    "name": "Certificate of Free Sale",
    "description": "医療機器のCFS発行制度は未確認。医薬品についてはNMRCがCFSを発行する可能性があるが、医療機器専用の制度は存在しない。",
    "processingTime": "要確認",
    "url": null
  },
  "reimbursement": {
    "system": "公的医療サービス + PSEMAS",
    "authority": "Ministry of Health and Social Services",
    "description": "ナミビアは公的医療施設での医療サービスを政府予算で提供。公務員向けPSEMAS（Public Service Employees Medical Aid Scheme）あり。医療機器特有の償還体系は未確認。",
    "codingSystems": [],
    "url": "https://mhss.gov.na/health-financing"
  },
  "marketingRules": {
    "authority": "NMRC",
    "description": "英語ラベリング。医療機器専用の表示規制は未整備。一般的な製品安全基準が適用される可能性。",
    "keyRules": [
      "英語ラベリング",
      "医療機器専用の表示規制は未整備"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "MDSAP非参加。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "国際規格として認知されているが、国内法で義務化されていない。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "明示的言及は未確認。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "明示的言及は未確認。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "明示的言及は未確認。"
    },
    "others": [
      "ZaZiBoNa創設メンバー（医薬品のみ）",
      "NSI（Namibia Standards Institution）がISO加盟"
    ]
  },
  "recentDevelopments": [
    {
      "date": "2024",
      "title": "AUDA-NEPAD支援による法改正検討開始",
      "description": "AUDA-NEPAD（アフリカ連合開発庁）の支援を受け、Medicines and Related Substances Control Actの見直し・改正を検討中。医療機器規制の整備が課題。"
    },
    {
      "date": "2021",
      "title": "COVID-19抗原迅速検査キットの規制措置",
      "description": "COVID-19パンデミック対応として、抗原迅速検査キットの品質管理・輸入規制を実施。医療機器規制の必要性が認識される契機となった。"
    }
  ],
  "lastUpdated": "2026-04-03",
  "verified": null
};
