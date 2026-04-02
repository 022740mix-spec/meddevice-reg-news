// ウズベキスタン (Republic of Uzbekistan)
export default {
  "code": "UZB",
  "country": "ウズベキスタン",
  "countryEn": "Republic of Uzbekistan",
  "region": "ASPAC",
  "flag": "🇺🇿",
  "legalSystemOverview": {
    "type": "大統領制共和制（Presidential Republic）",
    "description": "保健省傘下のADPI（Agency for Development of Pharmaceutical Industry）が管轄。規制制度は近年の改革で近代化が進められ、国際基準との整合化を推進中。EAEUには非加盟だがオブザーバー国として参加し、EAEU規制との整合化を検討中。",
    "keyCharacteristics": [
      "保健省/ADPI が医療機器規制を管轄",
      "医療機器登録制度を運用",
      "リスクベース分類を導入",
      "EAEU非加盟だがオブザーバー国として参加",
      "近年の改革で規制制度の近代化を推進",
      "参照国認可（CE、FDA等）が審査で参照される",
      "ローカル代理人の指定が必要"
    ]
  },
  "authorities": [
    {
      "name": "ADPI",
      "fullName": "Agency for Development of Pharmaceutical Industry under the Ministry of Health",
      "localName": "Farmatsevtika sanoatini rivojlantirish agentligi",
      "role": "医療機器の登録・品質管理・市場監視",
      "url": "https://www.pharmagency.uz/",
      "isPrimary": true
    },
    {
      "name": "MOH Uzbekistan",
      "fullName": "Ministry of Health of the Republic of Uzbekistan",
      "localName": "O’zbekiston Respublikasi Sog’liqni saqlash vazirligi",
      "role": "医療政策全般・規制監督",
      "url": "https://ssv.uz/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "なし（ADPI が直接審査）",
    "description": "Notified Body 制度は存在しない。ADPI が直接、登録審査を行う。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "ウズベキスタンの医療機器関連法令に基づく定義。詳細な法的定義は要確認。",
    "scope": "IVDを含む。",
    "notes": "国際定義（GHTF/IMDRF）との整合化を推進中。"
  },
  "primaryLaw": {
    "title": "医薬品・医療機器に関する法律および大統領令",
    "originalTitle": "要確認",
    "enacted": "要確認",
    "lastAmended": "随時改正（大統領令による制度改革が頻繁）",
    "url": "https://www.pharmagency.uz/",
    "description": "医薬品・医療機器の規制に関する法的根拠。大統領令により制度改革が行われることが多い。"
  },
  "implementingRegulations": [
    {
      "title": "医療機器登録手続き規則",
      "date": "要確認",
      "url": "https://www.pharmagency.uz/",
      "description": "医療機器の登録に必要な書類・手続きを規定。",
      "category": "登録手続き"
    },
    {
      "title": "大統領令による医療改革関連規定",
      "date": "各年",
      "url": "https://www.lex.uz/",
      "description": "大統領令による医療機器規制の近代化・改革措置。",
      "category": "制度改革"
    }
  ],
  "relatedLaws": [
    {
      "title": "保健に関する法律（Law on the Protection of Citizens’ Health）",
      "category": "保健基本法",
      "enacted": "要確認",
      "url": "https://ssv.uz/",
      "relevance": "国民の健康保護に関する基本法。"
    }
  ],
  "classification": {
    "system": "リスクベース分類（要確認）",
    "basis": "保健省/ADPI規則に基づく分類。国際基準との整合化を推進中。",
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
        "approvalPath": "登録（簡易）"
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
        "approvalPath": "登録（標準）"
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
      "ADPI規則に基づく分類",
      "国際基準との整合化を推進中",
      "分類体系の詳細は要確認"
    ],
    "totalProductCodes": null
  },
  "conformityAssessment": {
    "overview": "ADPIに登録申請。技術文書、品質証明（ISO 13485等）、CFS、参照国認可証明等が必要。近年の改革で手続きの簡素化・迅速化が図られている。",
    "routes": [
      {
        "name": "Medical Device Registration",
        "nameJa": "医療機器登録",
        "applicableClasses": [
          "全クラス"
        ],
        "description": "ADPIに申請書類一式を提出。技術文書・CFS・品質証明・臨床データ・ラベリング等を審査。",
        "subtypes": [
          "新規登録",
          "変更登録",
          "更新"
        ],
        "avgReviewTime": "要確認（90〜180日程度）",
        "fee": "要確認",
        "url": "https://www.pharmagency.uz/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "開発中",
    "url": "https://www.pharmagency.uz/",
    "description": "電子申請システムの導入を推進中。デジタル政府化の一環として医療機器登録のオンライン化を計画。",
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
      "system": "有害事象報告制度（ADPI/MOH）",
      "mandatory": true,
      "url": "https://www.pharmagency.uz/",
      "description": "有害事象の報告義務がある。ファーマコビジランス/テクノビジランス制度の強化を推進中。"
    },
    "recalls": {
      "authority": "ADPI / MOH",
      "description": "ADPI/MOHがリコールを管理。",
      "url": "https://www.pharmagency.uz/"
    },
    "surveillance": "ADPI/MOHによる市販後監視。制度の強化を推進中。"
  },
  "certificateOfFreeSale": {
    "available": false,
    "issuingAuthority": null,
    "name": null,
    "description": "登録申請時に原産国のCFS提出が求められる。ウズベキスタンからのCFS発行制度は要確認。",
    "processingTime": null,
    "url": null
  },
  "reimbursement": {
    "system": "公的医療制度 + 民間保険（発展途上）",
    "authority": "保健省 / SSIF",
    "description": "公的医療は政府予算により運営。医療保険制度の導入・拡大を推進中。医療機器の調達は公的入札が中心。",
    "codingSystems": [
      "要確認"
    ],
    "url": "https://ssv.uz/"
  },
  "marketingRules": {
    "authority": "ADPI / MOH",
    "description": "登録済み機器のみ販売可能。",
    "keyRules": [
      "登録済み機器のみ販売可",
      "虚偽・誇大広告の禁止"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "ウズベキスタンはMDSAPに参加していない。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "ISO 13485認証はQMS証明として参照される。"
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
      "notes": "医用電気機器の安全規格として参照。O’zDSt（ウズベキスタン国家規格）としても採用。"
    },
    "others": [
      {
        "name": "O’zDSt（ウズベキスタン国家規格）",
        "notes": "ウズベキスタン独自の国家規格。ISO/IEC規格の国内版を順次採用中。"
      }
    ]
  },
  "recentDevelopments": [
    {
      "date": "2024-2026",
      "title": "医療機器規制の近代化",
      "description": "大統領令に基づく医療制度改革の一環として、医療機器規制の近代化・国際整合化を推進。ADPIの機能強化。"
    },
    {
      "date": "2025",
      "title": "EAEUとの整合化検討",
      "description": "EAEUオブザーバー国として、EAEU医療機器規制（TR EAEU 038/2016）との整合化を検討中。加盟の可能性も議論。"
    },
    {
      "date": "2025",
      "title": "医療産業の振興",
      "description": "政府は医療機器の国産化・ローカル生産を政策的に推進。Free Economic Zoneでの医療機器製造投資を奨励。"
    }
  ],
  "lastUpdated": "2026-04-02",
  "verified": null
};
