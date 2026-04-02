// ルワンダ (Rwanda)
export default {
  "code": "RWA",
  "country": "ルワンダ",
  "countryEn": "Rwanda",
  "region": "Middle East & Africa",
  "flag": "🇷🇼",
  "legalSystemOverview": {
    "type": "中央集権制（Centralized system）",
    "description": "ルワンダの医療機器規制はRwanda FDA（Rwanda Food and Drugs Authority）が管轄する。Law No. 003/2018 establishing Rwanda FDAを根拠法とし、食品・医薬品・医療機器の規制を一元管理。東アフリカ共同体（EAC）の規制調和ガイドラインとの整合も推進中。",
    "keyCharacteristics": [
      "Rwanda FDAによる一元的な規制体制",
      "Law No. 003/2018が設立根拠法",
      "リスクベースの分類体系",
      "EAC規制調和ガイドラインとの整合を推進",
      "比較的新しい規制機関（2018年設立）"
    ]
  },
  "authorities": [
    {
      "name": "Rwanda FDA",
      "fullName": "Rwanda Food and Drugs Authority",
      "localName": null,
      "role": "医療機器の登録・市販後監視・査察・輸入管理。主管当局。",
      "url": "https://www.rwandafda.gov.rw/",
      "isPrimary": true
    }
  ],
  "notifiedBodies": {
    "system": "なし（Rwanda FDA が直接審査）",
    "description": "ルワンダではNotified Body制度は存在しない。Rwanda FDAが直接、医療機器の登録審査を実施する。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "Law No. 003/2018および関連規則に基づく定義。詳細は要確認。GHTF/IMDRF定義との整合を推進中。",
    "scope": "IVD（体外診断用医療機器）も適用対象。",
    "notes": "EACの医療機器調和ガイドラインとの整合を推進中。"
  },
  "primaryLaw": {
    "title": "Law No. 003/2018 establishing Rwanda Food and Drugs Authority",
    "originalTitle": null,
    "enacted": "2018",
    "lastAmended": null,
    "url": "https://www.rwandafda.gov.rw/",
    "description": "Rwanda FDAの設立根拠法。食品・医薬品・医療機器の規制権限をRwanda FDAに付与。"
  },
  "implementingRegulations": [
    {
      "title": "Rwanda FDA Medical Device Registration Guidelines",
      "date": "要確認",
      "url": "https://www.rwandafda.gov.rw/",
      "description": "医療機器の登録手続・分類等の詳細を規定するガイドライン。",
      "category": "医療機器"
    }
  ],
  "relatedLaws": [],
  "classification": {
    "system": "4クラス制（Class A/B/C/D）（要確認）",
    "basis": "リスクベース。EAC規制調和ガイドラインに基づく分類を採用（詳細は要確認）。",
    "classes": [
      {
        "name": "Class A",
        "nameJa": "クラスA",
        "riskLevel": "低",
        "description": "低リスク機器。",
        "examples": [
          "弾性包帯",
          "聴診器"
        ],
        "approvalPath": "Rwanda FDA登録"
      },
      {
        "name": "Class B",
        "nameJa": "クラスB",
        "riskLevel": "中低",
        "description": "中程度の低リスク機器。",
        "examples": [
          "血圧計",
          "補聴器"
        ],
        "approvalPath": "Rwanda FDA登録"
      },
      {
        "name": "Class C",
        "nameJa": "クラスC",
        "riskLevel": "中高",
        "description": "中高リスク機器。",
        "examples": [
          "人工呼吸器",
          "透析装置"
        ],
        "approvalPath": "Rwanda FDA登録＋臨床評価"
      },
      {
        "name": "Class D",
        "nameJa": "クラスD",
        "riskLevel": "高",
        "description": "最高リスク機器。",
        "examples": [
          "人工心臓弁"
        ],
        "approvalPath": "Rwanda FDA登録＋臨床データ"
      }
    ],
    "rules": [
      "EAC規制調和ガイドラインに準拠",
      "詳細分類ルールは要確認"
    ],
    "totalProductCodes": "要確認"
  },
  "conformityAssessment": {
    "overview": "医療機器のRwanda FDA登録が必要。先行認可国（CE/FDA等）の承認書類を参考にした審査を実施。",
    "routes": [
      {
        "name": "Rwanda FDA Registration",
        "nameJa": "Rwanda FDA登録",
        "applicableClasses": [
          "全クラス"
        ],
        "description": "Rwanda FDAに登録申請書類を提出。技術文書・CFS・QMS証明等を審査。",
        "subtypes": [],
        "avgReviewTime": "要確認",
        "avgReviewTimeSource": null,
        "fee": "要確認",
        "feeSource": null,
        "url": "https://www.rwandafda.gov.rw/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "Rwanda FDA オンラインシステム",
    "url": "https://www.rwandafda.gov.rw/",
    "description": "Rwanda FDAはオンライン申請の整備を推進中。",
    "mandatory": false
  },
  "udi": {
    "required": false,
    "system": "未導入",
    "description": "ルワンダでは現時点でUDI制度は未導入。",
    "url": null,
    "timeline": "要確認"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "Rwanda FDA有害事象報告制度",
      "mandatory": true,
      "url": "https://www.rwandafda.gov.rw/",
      "description": "有害事象のRwanda FDAへの報告義務が規定されている。"
    },
    "recalls": {
      "authority": "Rwanda FDA",
      "description": "Rwanda FDAがリコールを監督。",
      "url": "https://www.rwandafda.gov.rw/"
    },
    "surveillance": "Rwanda FDAによる市販後監視。EAC地域での情報共有も推進中。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "輸出国の規制当局",
    "name": "Certificate of Free Sale (CFS)",
    "description": "登録申請時に原産国の規制当局からのCFS提出が求められる。",
    "processingTime": "要確認",
    "url": "https://www.rwandafda.gov.rw/"
  },
  "reimbursement": {
    "system": "CBHI（Mutuelle de Santé）+ RSSB + 民間保険",
    "authority": "Ministry of Health / RSSB",
    "description": "ルワンダは地域社会ベースの健康保険（Mutuelle de Santé）により高い保険加入率を達成。RSSB（Rwanda Social Security Board）が正規雇用者向け保険を運営。医療機器に特化した償還制度は限定的。",
    "codingSystems": [],
    "url": null
  },
  "marketingRules": {
    "authority": "Rwanda FDA",
    "description": "Rwanda FDAが医療機器の広告・マーケティングを規制。",
    "keyRules": [
      "未登録医療機器の販売・広告は禁止",
      "虚偽・誇大広告の禁止"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "ルワンダはMDSAPプログラムに参加していない。"
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
      "date": "2018",
      "title": "Rwanda FDAの設立",
      "description": "Law No. 003/2018によりRwanda FDAが設立。食品・医薬品・医療機器の一元的な規制体制を構築。"
    }
  ],
  "lastUpdated": "2026-04-02",
  "verified": null
};
