// ミャンマー (Republic of the Union of Myanmar)
export default {
  "code": "MMR",
  "country": "ミャンマー",
  "countryEn": "Republic of the Union of Myanmar",
  "region": "ASPAC",
  "flag": "🇲🇲",
  "legalSystemOverview": {
    "type": "軍事政権下の共和制",
    "description": "ミャンマーの医療機器規制は保健省（MOH）傘下のFDA Myanmar（食品医薬品局）が所管する。National Drug Law 1992 を基盤とし、医療機器に関する規制枠組みの整備を進めてきたが、2021年2月の軍事クーデター以降、政治的不安定により規制制度の発展は大幅に停滞している。ASEAN AMDDとの整合を目指していたが、現在の進捗は不透明。",
    "keyCharacteristics": [
      "FDA Myanmar が医療機器規制を統括",
      "National Drug Law 1992 が法的根拠",
      "ASEAN AMDD との整合を目指していた（現在停滞）",
      "輸入品は FDA Myanmar への登録・輸入許可が必要",
      "政治的不安定により規制制度の発展が停滞",
      "規制の実施・執行状況は要確認"
    ]
  },
  "authorities": [
    {
      "name": "FDA Myanmar",
      "fullName": "Food and Drug Administration — Myanmar",
      "localName": "အစားအသောက်နှင့် ဆေးဝါးကွပ်ကဲရေးဦးစီးဌာန",
      "role": "医療機器の登録・輸入許可・市販後監視を統括",
      "url": "https://www.fdamyanmar.gov.mm/",
      "isPrimary": true
    },
    {
      "name": "MOH Myanmar",
      "fullName": "Ministry of Health — Myanmar",
      "localName": "ကျန်းမာရေးဝန်ကြီးဌာန",
      "role": "医療政策全般・法令の策定・監督",
      "url": null,
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "該当なし（FDA Myanmar 直接審査）",
    "description": "Notified Body 制度は存在しない。FDA Myanmarが直接登録審査を行う。参照国認可が審査で考慮される。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "National Drug Law 1992 および関連規則に基づく定義。詳細な法的定義文書の公開は限定的。ASEAN AMDD / IMDRF定義との整合を目指していた。",
    "scope": "IVDを含む。SaMDに関する詳細規定は要確認。",
    "notes": "政治的不安定により、最新の法的定義の確認が困難な状況。"
  },
  "primaryLaw": {
    "title": "National Drug Law 1992（国家医薬品法）",
    "originalTitle": null,
    "enacted": "1992",
    "lastAmended": "要確認",
    "url": "https://www.fdamyanmar.gov.mm/",
    "description": "医薬品・医療機器規制の法的根拠。医療機器に特化した法令の整備状況は要確認。"
  },
  "implementingRegulations": [
    {
      "title": "FDA Myanmar 医療機器登録手続き",
      "date": "要確認",
      "url": "https://www.fdamyanmar.gov.mm/",
      "description": "医療機器の登録に必要な書類・手続きを規定。最新の運用状況は要確認。",
      "category": "登録手続き"
    }
  ],
  "relatedLaws": [
    {
      "title": "Consumer Protection Law 2014",
      "category": "消費者保護",
      "enacted": "2014",
      "url": null,
      "relevance": "消費者保護の観点から医療機器の安全性にも関連。"
    }
  ],
  "classification": {
    "system": "リスクベース4クラス分類（ASEAN AMDD整合を目指す）",
    "basis": "ASEAN AMDDの分類ルールに基づく分類を導入予定であったが、現在の運用状況は要確認。",
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
        "approvalPath": "登録 — FDA Myanmar"
      },
      {
        "name": "Class B",
        "nameJa": "クラスB（中低リスク）",
        "riskLevel": "中低",
        "description": "中低リスク医療機器。",
        "examples": [
          "超音波診断装置",
          "注射針"
        ],
        "approvalPath": "登録 — FDA Myanmar"
      },
      {
        "name": "Class C",
        "nameJa": "クラスC（中高リスク）",
        "riskLevel": "中高",
        "description": "中高リスク医療機器。",
        "examples": [
          "人工呼吸器",
          "透析器"
        ],
        "approvalPath": "登録 — FDA Myanmar"
      },
      {
        "name": "Class D",
        "nameJa": "クラスD（高リスク）",
        "riskLevel": "高",
        "description": "高リスク医療機器。",
        "examples": [
          "心臓ペースメーカー",
          "人工心臓弁"
        ],
        "approvalPath": "登録 — FDA Myanmar"
      }
    ],
    "rules": [
      "ASEAN AMDD分類ルールを参照",
      "実際の運用・分類判断の詳細は要確認"
    ],
    "totalProductCodes": null
  },
  "conformityAssessment": {
    "overview": "医療機器はFDA Myanmarへの登録が必要とされるが、政治的不安定により運用状況は流動的。参照国認可（CE、FDA等）の保有が審査で考慮される。外国メーカーはローカル代理人の指定が必要。",
    "routes": [
      {
        "name": "FDA Myanmar Device Registration",
        "nameJa": "FDA Myanmar 医療機器登録",
        "applicableClasses": [
          "Class A",
          "Class B",
          "Class C",
          "Class D"
        ],
        "description": "FDA Myanmarに申請書類一式を提出。参照国認可証明、品質管理証明書等が必要。現在の審査状況は要確認。",
        "subtypes": [
          "新規登録",
          "変更登録"
        ],
        "avgReviewTime": "要確認",
        "fee": "要確認",
        "url": "https://www.fdamyanmar.gov.mm/"
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
      "system": "有害事象報告制度（FDA Myanmar）",
      "mandatory": true,
      "url": "https://www.fdamyanmar.gov.mm/",
      "description": "FDA Myanmarへの有害事象報告義務がある。現在の運用状況は要確認。"
    },
    "recalls": {
      "authority": "FDA Myanmar",
      "description": "FDA Myanmarの命令または自主リコール。運用状況は要確認。",
      "url": "https://www.fdamyanmar.gov.mm/"
    },
    "surveillance": "FDA Myanmarによる市販後監視。政治的不安定により体制の実効性は要確認。"
  },
  "certificateOfFreeSale": {
    "available": false,
    "issuingAuthority": null,
    "name": null,
    "description": "ミャンマーからのCFS発行に関する公式制度は要確認。",
    "processingTime": null,
    "url": null
  },
  "reimbursement": {
    "system": "政府主導型医療制度（公的医療 + 民間セクター + NGO支援）",
    "authority": "保健省（MOH）",
    "description": "公的医療機関での基本的な医療を提供。医療機器の個別償還制度は未整備。国際機関・NGO支援が重要な役割を果たす。",
    "codingSystems": [],
    "url": null
  },
  "marketingRules": {
    "authority": "FDA Myanmar",
    "description": "医療機器広告に関する詳細法規は要確認。",
    "keyRules": [
      "虚偽・誇大広告の禁止",
      "未登録機器の広告禁止"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "ミャンマーはMDSAPに参加していない。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "ISO 13485認証は登録時にQMS証明として参照される。法的義務化の状況は要確認。"
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
      "date": "2021",
      "title": "軍事クーデターによる規制制度への影響",
      "description": "2021年2月の軍事クーデター以降、規制制度の発展が停滞。ASEAN AMDDとの整合作業も遅延。"
    },
    {
      "date": "2024-2025",
      "title": "規制運用の現状",
      "description": "FDA Myanmarは基本的な登録・輸入許可業務を継続しているが、制度の拡充・国際整合は停滞中。最新の運用状況は要確認。"
    }
  ],
  "lastUpdated": "2026-04-02",
  "verified": null
};
