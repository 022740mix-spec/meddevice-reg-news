// ウガンダ (Uganda)
export default {
  "code": "UGA",
  "country": "ウガンダ",
  "countryEn": "Uganda",
  "region": "Middle East & Africa",
  "flag": "🇺🇬",
  "legalSystemOverview": {
    "type": "中央集権制（Centralized system）",
    "description": "ウガンダの医療機器規制はNDA（National Drug Authority）が管轄する。National Drug Policy and Authority Act (Cap 206)を根拠法とし、医薬品・医療機器の規制を担う。東アフリカ共同体（EAC）の規制調和ガイドラインとの整合も推進中。",
    "keyCharacteristics": [
      "NDAによる一元的な規制体制",
      "National Drug Policy and Authority Act (Cap 206)が根拠法",
      "医療機器の登録制度を運用",
      "EAC規制調和ガイドラインとの整合を推進",
      "リスクベースの分類体系"
    ]
  },
  "authorities": [
    {
      "name": "NDA",
      "fullName": "National Drug Authority",
      "localName": null,
      "role": "医療機器の登録・市販後監視・査察・輸入管理。主管当局。",
      "url": "https://www.nda.or.ug/",
      "isPrimary": true
    }
  ],
  "notifiedBodies": {
    "system": "なし（NDA が直接審査）",
    "description": "ウガンダではNotified Body制度は存在しない。NDAが直接、医療機器の登録審査を実施する。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "National Drug Policy and Authority Actおよび関連規則に基づく定義。疾病の診断・治療・予防・監視・軽減等を目的とする機器。詳細はNDAガイドラインに規定。",
    "scope": "IVD（体外診断用医療機器）も適用対象。",
    "notes": "EACの医療機器調和ガイドラインとの整合を推進中。"
  },
  "primaryLaw": {
    "title": "National Drug Policy and Authority Act (Cap 206)",
    "originalTitle": null,
    "enacted": "1993",
    "lastAmended": "要確認",
    "url": "https://www.nda.or.ug/",
    "description": "NDAの設立根拠法。医薬品・医療機器の規制権限をNDAに付与。"
  },
  "implementingRegulations": [
    {
      "title": "NDA Medical Device Registration Guidelines",
      "date": "要確認",
      "url": "https://www.nda.or.ug/",
      "description": "医療機器の登録手続・分類・ラベリング等の詳細を規定するNDAガイドライン。",
      "category": "医療機器"
    }
  ],
  "relatedLaws": [],
  "classification": {
    "system": "4クラス制（Class A/B/C/D）",
    "basis": "リスクベース（GHTF/IMDRF分類ルールに準拠）。意図する用途・侵襲性・使用期間等に基づく。",
    "classes": [
      {
        "name": "Class A",
        "nameJa": "クラスA",
        "riskLevel": "低",
        "description": "低リスク機器。NDA登録が必要。",
        "examples": [
          "弾性包帯",
          "聴診器",
          "舌圧子"
        ],
        "approvalPath": "NDA登録"
      },
      {
        "name": "Class B",
        "nameJa": "クラスB",
        "riskLevel": "中低",
        "description": "中程度の低リスク機器。NDA登録が必要。",
        "examples": [
          "血圧計",
          "補聴器"
        ],
        "approvalPath": "NDA登録"
      },
      {
        "name": "Class C",
        "nameJa": "クラスC",
        "riskLevel": "中高",
        "description": "中高リスク機器。NDA登録＋臨床評価が必要。",
        "examples": [
          "人工関節",
          "人工呼吸器"
        ],
        "approvalPath": "NDA登録＋臨床評価"
      },
      {
        "name": "Class D",
        "nameJa": "クラスD",
        "riskLevel": "高",
        "description": "最高リスク機器。",
        "examples": [
          "人工心臓弁",
          "埋込み型除細動器"
        ],
        "approvalPath": "NDA登録＋臨床データ"
      }
    ],
    "rules": [
      "GHTF/IMDRFの分類ルールに準拠",
      "NDAガイドラインに詳細規定"
    ],
    "totalProductCodes": "要確認"
  },
  "conformityAssessment": {
    "overview": "全クラスの医療機器にNDA登録が必要。先行認可国（CE/FDA等）の承認書類を参考にした審査を実施。",
    "routes": [
      {
        "name": "NDA Registration",
        "nameJa": "NDA登録",
        "applicableClasses": [
          "Class A",
          "Class B",
          "Class C",
          "Class D"
        ],
        "description": "NDAに登録申請書類を提出。技術文書・CFS・QMS証明・ラベリング等を審査。",
        "subtypes": [],
        "avgReviewTime": "要確認",
        "avgReviewTimeSource": null,
        "fee": "要確認",
        "feeSource": null,
        "url": "https://www.nda.or.ug/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "NDA オンラインシステム",
    "url": "https://www.nda.or.ug/",
    "description": "NDAはオンラインでの申請受付を推進中。整備状況は要確認。",
    "mandatory": false
  },
  "udi": {
    "required": false,
    "system": "未導入",
    "description": "ウガンダでは現時点でUDI制度は未導入。",
    "url": null,
    "timeline": "要確認"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "NDA有害事象報告制度",
      "mandatory": true,
      "url": "https://www.nda.or.ug/",
      "description": "製造業者・輸入業者・医療従事者は有害事象をNDAに報告する義務がある。"
    },
    "recalls": {
      "authority": "NDA",
      "description": "NDAがリコールを監督。",
      "url": "https://www.nda.or.ug/"
    },
    "surveillance": "NDAによる市販後監視。EAC地域での情報共有も推進中。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "輸出国の規制当局",
    "name": "Certificate of Free Sale (CFS)",
    "description": "登録申請時に原産国の規制当局からのCFS提出が求められる。",
    "processingTime": "要確認",
    "url": "https://www.nda.or.ug/"
  },
  "reimbursement": {
    "system": "公的医療機関 + 民間保険",
    "authority": "Ministry of Health",
    "description": "公的医療機関での調達が中心。国民健康保険制度の整備を推進中。医療機器に特化した償還制度は限定的。",
    "codingSystems": [],
    "url": null
  },
  "marketingRules": {
    "authority": "NDA",
    "description": "NDAが医療機器の広告・マーケティングを規制。未登録機器の広告は禁止。",
    "keyRules": [
      "未登録医療機器の広告は禁止",
      "虚偽・誇大広告の禁止"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "ウガンダはMDSAPプログラムに参加していない。"
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
      "title": "EAC規制調和の推進",
      "description": "東アフリカ共同体（EAC）の医療機器規制調和ガイドラインとの整合を推進。NDAの規制能力強化も継続中。"
    }
  ],
  "lastUpdated": "2026-04-02",
  "verified": null
};
