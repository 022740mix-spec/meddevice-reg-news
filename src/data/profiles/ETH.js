// エチオピア (Ethiopia)
export default {
  "code": "ETH",
  "country": "エチオピア",
  "countryEn": "Ethiopia",
  "region": "Middle East & Africa",
  "flag": "🇪🇹",
  "legalSystemOverview": {
    "type": "中央集権制（Centralized system）",
    "description": "エチオピアの医療機器規制はEFDA（Ethiopian Food and Drug Authority）が管轄する。Food and Medicine Administration Proclamation No. 1112/2019を根拠法とし、食品・医薬品・医療機器の規制を一元的に担う。規制枠組みは発展途上であり、国際的な規制整合を推進中。",
    "keyCharacteristics": [
      "EFDAによる一元的な規制体制",
      "Proclamation No. 1112/2019が根拠法",
      "医療機器の登録制度を整備中",
      "WHO事前認定（PQ）製品の優先的受入れ",
      "規制能力の強化を国際支援のもと推進"
    ]
  },
  "authorities": [
    {
      "name": "EFDA",
      "fullName": "Ethiopian Food and Drug Authority",
      "localName": null,
      "role": "医療機器の登録・市販後監視・査察・輸入管理。主管当局。",
      "url": "https://www.efda.gov.et/",
      "isPrimary": true
    }
  ],
  "notifiedBodies": {
    "system": "なし（EFDA が直接審査）",
    "description": "エチオピアではNotified Body制度は存在しない。EFDAが直接、医療機器の登録審査を実施する。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "Proclamation No. 1112/2019および関連規則に定義。疾病の診断・治療・予防・監視・軽減等を目的とする機器・装置等。詳細な定義は要確認。",
    "scope": "IVD（体外診断用医療機器）も適用対象。",
    "notes": "定義と適用範囲の国際基準への整合を推進中。"
  },
  "primaryLaw": {
    "title": "Food and Medicine Administration Proclamation No. 1112/2019",
    "originalTitle": null,
    "enacted": "2019",
    "lastAmended": null,
    "url": "https://www.efda.gov.et/",
    "description": "EFDAの設立根拠法。食品・医薬品・医療機器・化粧品の規制権限をEFDAに付与。"
  },
  "implementingRegulations": [
    {
      "title": "EFDA Medical Device Registration Directive",
      "date": "要確認",
      "url": "https://www.efda.gov.et/",
      "description": "医療機器の登録手続・分類等の詳細を規定する指令。整備中。",
      "category": "医療機器"
    }
  ],
  "relatedLaws": [],
  "classification": {
    "system": "要確認（4クラス制を検討中）",
    "basis": "リスクベース。GHTF/IMDRF分類ルールへの整合を推進中。詳細は要確認。",
    "classes": [
      {
        "name": "Class A",
        "nameJa": "クラスA（想定）",
        "riskLevel": "低",
        "description": "低リスク機器。",
        "examples": [
          "弾性包帯",
          "聴診器"
        ],
        "approvalPath": "EFDA登録"
      },
      {
        "name": "Class B",
        "nameJa": "クラスB（想定）",
        "riskLevel": "中低",
        "description": "中程度の低リスク機器。",
        "examples": [
          "血圧計",
          "補聴器"
        ],
        "approvalPath": "EFDA登録"
      },
      {
        "name": "Class C",
        "nameJa": "クラスC（想定）",
        "riskLevel": "中高",
        "description": "中高リスク機器。",
        "examples": [
          "人工呼吸器",
          "透析装置"
        ],
        "approvalPath": "EFDA登録＋臨床評価"
      },
      {
        "name": "Class D",
        "nameJa": "クラスD（想定）",
        "riskLevel": "高",
        "description": "最高リスク機器。",
        "examples": [
          "人工心臓弁"
        ],
        "approvalPath": "EFDA登録＋臨床データ"
      }
    ],
    "rules": [
      "分類制度の詳細は整備中",
      "GHTF/IMDRF分類ルールへの整合を目指す"
    ],
    "totalProductCodes": "要確認"
  },
  "conformityAssessment": {
    "overview": "医療機器のEFDA登録が必要。先行認可国（CE/FDA/WHO PQ等）の承認を参考にした審査。規制枠組みは整備中。",
    "routes": [
      {
        "name": "EFDA Registration",
        "nameJa": "EFDA登録",
        "applicableClasses": [
          "全クラス"
        ],
        "description": "EFDAに登録申請書類を提出。CFS・技術文書・QMS証明等を審査。WHO PQ製品は優先処理される場合がある。",
        "subtypes": [],
        "avgReviewTime": "要確認",
        "avgReviewTimeSource": null,
        "fee": "要確認",
        "feeSource": null,
        "url": "https://www.efda.gov.et/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "要確認",
    "url": "https://www.efda.gov.et/",
    "description": "電子申請システムの整備状況は要確認。",
    "mandatory": false
  },
  "udi": {
    "required": false,
    "system": "未導入",
    "description": "エチオピアでは現時点でUDI制度は未導入。",
    "url": null,
    "timeline": "要確認"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "EFDA有害事象報告制度",
      "mandatory": true,
      "url": "https://www.efda.gov.et/",
      "description": "有害事象のEFDAへの報告義務が規定されている。体制は整備中。"
    },
    "recalls": {
      "authority": "EFDA",
      "description": "EFDAがリコールを監督。",
      "url": "https://www.efda.gov.et/"
    },
    "surveillance": "市販後監視体制は整備中。国際支援のもと能力強化を推進。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "輸出国の規制当局",
    "name": "Certificate of Free Sale (CFS)",
    "description": "登録申請時に原産国の規制当局からのCFS提出が求められる。",
    "processingTime": "要確認",
    "url": "https://www.efda.gov.et/"
  },
  "reimbursement": {
    "system": "CBHI（Community Based Health Insurance）+ 公的医療機関",
    "authority": "Ministry of Health",
    "description": "公的医療機関での調達が中心。CBHIの拡大を推進中。医療機器に特化した償還制度は限定的。",
    "codingSystems": [],
    "url": null
  },
  "marketingRules": {
    "authority": "EFDA",
    "description": "EFDAが医療機器の広告・マーケティングを規制。未登録機器の販売・広告は禁止。",
    "keyRules": [
      "未登録医療機器の販売・広告は禁止",
      "虚偽・誇大広告の禁止"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "エチオピアはMDSAPプログラムに参加していない。"
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
      "date": "2019",
      "title": "Proclamation No. 1112/2019の制定",
      "description": "EFDAの設立根拠法であるProclamation No. 1112/2019が制定。医療機器を含む包括的な規制枠組みを整備。"
    }
  ],
  "lastUpdated": "2026-04-02",
  "verified": null
};
