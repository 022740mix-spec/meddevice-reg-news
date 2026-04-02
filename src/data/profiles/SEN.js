// セネガル (Senegal)
export default {
  "code": "SEN",
  "country": "セネガル",
  "countryEn": "Senegal",
  "region": "Middle East & Africa",
  "flag": "🇸🇳",
  "legalSystemOverview": {
    "type": "中央集権制（Centralized system）",
    "description": "セネガルの医療機器規制はDPM（Direction de la Pharmacie et du Médicament）が管轄する。フランス法制度の影響を受けた規制枠組み。西アフリカ経済通貨同盟（UEMOA）および西アフリカ保健機構（OOAS/WAHO）による地域規制調和にも参加。",
    "keyCharacteristics": [
      "DPMによる一元的な規制体制",
      "フランス法制度の影響を受けた規制枠組み",
      "UEMOA / OOAS（WAHO）による地域規制調和に参加",
      "医療機器規制は発展段階",
      "先行認可国（CE等）の承認を参考にした審査"
    ]
  },
  "authorities": [
    {
      "name": "DPM",
      "fullName": "Direction de la Pharmacie et du Médicament",
      "localName": "薬事・医薬品局",
      "role": "医療機器の登録・輸入管理・市販後監視。主管当局。",
      "url": "https://www.sante.gouv.sn/",
      "isPrimary": true
    }
  ],
  "notifiedBodies": {
    "system": "なし（DPM が直接審査）",
    "description": "セネガルではNotified Body制度は存在しない。DPMが直接、医療機器の登録審査を実施する。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "DPMの規制に基づく定義。詳細は要確認。フランス法制度の影響を受けた医療機器の定義を採用。",
    "scope": "IVD（体外診断用医療機器）も適用対象（要確認）。",
    "notes": "UEMOA / OOAS地域規制調和との整合を推進中。"
  },
  "primaryLaw": {
    "title": "要確認（薬事関連法）",
    "originalTitle": null,
    "enacted": "要確認",
    "lastAmended": null,
    "url": "https://www.sante.gouv.sn/",
    "description": "セネガルの薬事規制に関する基本法。DPMの権限の根拠法。医療機器に特化した法律の整備状況は要確認。"
  },
  "implementingRegulations": [
    {
      "title": "DPM 医療機器登録に関する規定",
      "date": "要確認",
      "url": "https://www.sante.gouv.sn/",
      "description": "医療機器の登録手続等を規定。詳細は要確認。",
      "category": "医療機器"
    }
  ],
  "relatedLaws": [],
  "classification": {
    "system": "要確認",
    "basis": "リスクベースの分類を採用していると推定されるが、詳細は要確認。",
    "classes": [
      {
        "name": "要確認",
        "nameJa": "要確認",
        "riskLevel": "低〜高",
        "description": "分類体系の詳細は要確認。CE分類を参考にしている可能性。",
        "examples": [],
        "approvalPath": "DPM登録"
      }
    ],
    "rules": [
      "分類制度の詳細は要確認",
      "UEMOA地域規制調和との整合を推進中"
    ],
    "totalProductCodes": "要確認"
  },
  "conformityAssessment": {
    "overview": "医療機器のDPM登録・輸入許可が必要。先行認可国（CE等）の承認書類を参考にした審査を実施。",
    "routes": [
      {
        "name": "DPM Registration / Import Authorization",
        "nameJa": "DPM登録・輸入許可",
        "applicableClasses": [
          "全クラス"
        ],
        "description": "DPMに登録・輸入許可申請書類を提出。CFS・技術文書・品質証明等を審査。CE認証の提出が有用。",
        "subtypes": [],
        "avgReviewTime": "要確認",
        "avgReviewTimeSource": null,
        "fee": "要確認",
        "feeSource": null,
        "url": "https://www.sante.gouv.sn/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "要確認",
    "url": "https://www.sante.gouv.sn/",
    "description": "電子申請システムの整備状況は要確認。",
    "mandatory": false
  },
  "udi": {
    "required": false,
    "system": "未導入",
    "description": "セネガルでは現時点でUDI制度は未導入。",
    "url": null,
    "timeline": "要確認"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "DPMファーマコビジランス制度",
      "mandatory": true,
      "url": "https://www.sante.gouv.sn/",
      "description": "有害事象のDPMへの報告義務が規定されている。体制は整備中。"
    },
    "recalls": {
      "authority": "DPM",
      "description": "DPMがリコールを監督。",
      "url": "https://www.sante.gouv.sn/"
    },
    "surveillance": "市販後監視体制は整備中。OOAS（WAHO）地域での情報共有にも参加。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "輸出国の規制当局",
    "name": "Certificate of Free Sale (CFS)",
    "description": "登録申請時に原産国の規制当局からのCFS提出が求められる。",
    "processingTime": "要確認",
    "url": "https://www.sante.gouv.sn/"
  },
  "reimbursement": {
    "system": "CMU（Couverture Maladie Universelle）+ 民間保険",
    "authority": "Ministry of Health",
    "description": "CMU（国民皆保険）の拡大を推進中。公立病院での調達は政府予算に基づく。医療機器に特化した償還制度は限定的。",
    "codingSystems": [],
    "url": null
  },
  "marketingRules": {
    "authority": "DPM",
    "description": "DPMが医療機器の広告・マーケティングを規制。",
    "keyRules": [
      "未登録医療機器の販売・広告は禁止",
      "虚偽・誇大広告の禁止"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "セネガルはMDSAPプログラムに参加していない。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "ISO 13485認証はQMS証明として参照。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "リスクマネジメントの国際規格として参照。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "ソフトウェア医療機器に対して参照。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "医用電気機器の安全規格として参照。"
    },
    "others": []
  },
  "recentDevelopments": [
    {
      "date": "2025",
      "title": "UEMOA / OOAS地域規制調和の推進",
      "description": "西アフリカ地域での医療機器規制調和の取り組みに参加。規制能力の強化を推進中。"
    }
  ],
  "lastUpdated": "2026-04-02",
  "verified": null
};
