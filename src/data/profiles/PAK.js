// パキスタン (Pakistan)
export default {
  "code": "PAK",
  "country": "パキスタン",
  "countryEn": "Pakistan",
  "region": "ASPAC",
  "flag": "🇵🇰",
  "legalSystemOverview": {
    "type": "連邦制（Federal system）",
    "description": "パキスタンの医療機器規制はDRAP（Drug Regulatory Authority of Pakistan）が管轄する。2012年のDRAP Act（Act X of 2012）により設立されたDRAPが、医薬品・医療機器の両方を統括。2017年にMedical Devices Rules 2017が制定され、医療機器の登録・輸入・製造に関する規制枠組みが整備された。GHTF/IMDRFの4クラス分類（Class A/B/C/D）を採用し、リスクベースの規制を実施。",
    "keyCharacteristics": [
      "DRAPによる一元的な連邦規制体制",
      "リスクベースの4クラス分類（Class A/B/C/D）",
      "Medical Devices Rules 2017に基づく登録制度",
      "3つの適合性評価オプション（Option A/B/C）",
      "先行認可国（CE/FDA/TGA等）の認証を参考にした審査"
    ]
  },
  "authorities": [
    {
      "name": "DRAP",
      "fullName": "Drug Regulatory Authority of Pakistan",
      "localName": null,
      "role": "医療機器の登録・輸入許可・製造許可・市販後監視。主管当局。",
      "url": "https://www.dfrh.org.pk/",
      "isPrimary": true
    }
  ],
  "notifiedBodies": {
    "system": "なし（DRAP が直接審査）",
    "description": "パキスタンではNotified Body制度は存在しない。DRAPが直接、医療機器の登録審査を実施する。ただし適合性評価オプションによりISO 13485認証等の第三者認証が事前要件となる。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "Medical Devices Rules 2017に定義。疾病の診断・治療・予防・監視・軽減等を目的とする機器・装置・器具・材料・ソフトウェア等で、主たる意図する作用が薬理学的・免疫学的・代謝的手段によらないもの。GHTF定義に準拠。",
    "scope": "IVD（体外診断用医療機器）も適用対象。医療機器全般を包括的に規制。",
    "notes": "GHTF/IMDRFの定義に整合。規制対象の範囲は段階的に拡大中。"
  },
  "primaryLaw": {
    "title": "DRAP Act 2012 (Act X of 2012)",
    "originalTitle": null,
    "enacted": "2012",
    "lastAmended": null,
    "url": "https://www.dfrh.org.pk/",
    "description": "DRAPの設立根拠法。医薬品・医療機器の規制権限をDRAPに付与。医療機器の詳細規制はMedical Devices Rules 2017で規定。"
  },
  "implementingRegulations": [
    {
      "title": "Medical Devices Rules 2017",
      "date": "2017",
      "url": "https://www.dfrh.org.pk/",
      "description": "医療機器の登録・分類・輸入・製造・ラベリング等の詳細を規定する主要な施行規則。",
      "category": "医療機器"
    }
  ],
  "relatedLaws": [],
  "classification": {
    "system": "4クラス制（Class A/B/C/D）",
    "basis": "リスクベース（GHTF/IMDRF分類ルールに準拠）。意図する用途・侵襲性・使用期間・エネルギー源等に基づく。",
    "classes": [
      {
        "name": "Class A",
        "nameJa": "クラスA",
        "riskLevel": "低",
        "description": "一般的な低リスク機器。登録申請が必要。",
        "examples": [
          "弾性包帯",
          "聴診器",
          "舌圧子",
          "車椅子"
        ],
        "approvalPath": "DRAP登録（Option A/B/C）"
      },
      {
        "name": "Class B",
        "nameJa": "クラスB",
        "riskLevel": "中低",
        "description": "中程度の低リスク機器。登録申請が必要。",
        "examples": [
          "血圧計",
          "補聴器",
          "超音波診断装置",
          "歯科用材料"
        ],
        "approvalPath": "DRAP登録（Option A/B/C）"
      },
      {
        "name": "Class C",
        "nameJa": "クラスC",
        "riskLevel": "中高",
        "description": "中高リスク機器。登録申請＋臨床評価が必要。",
        "examples": [
          "人工関節",
          "冠動脈ステント",
          "人工呼吸器",
          "透析装置"
        ],
        "approvalPath": "DRAP登録（Option A/B/C）＋臨床評価"
      },
      {
        "name": "Class D",
        "nameJa": "クラスD",
        "riskLevel": "高",
        "description": "最高リスク機器。最も厳格な審査。臨床データが必要。",
        "examples": [
          "人工心臓弁",
          "埋込み型除細動器",
          "薬剤溶出ステント"
        ],
        "approvalPath": "DRAP登録（Option A/B/C）＋臨床データ"
      }
    ],
    "rules": [
      "GHTF/IMDRFの分類ルールに準拠",
      "Medical Devices Rules 2017のScheduleに詳細規定",
      "IVDは別途分類ルール適用"
    ],
    "totalProductCodes": "GMDN（Global Medical Device Nomenclature）を参照"
  },
  "conformityAssessment": {
    "overview": "全クラスの医療機器にDRAP登録が必要。3つの適合性評価オプション（Option A/B/C）から選択可能。Option Aは先行認可国の承認に基づく簡略審査、Option BはISO 13485認証に基づく審査、Option CはDRAPの独立審査。",
    "routes": [
      {
        "name": "Option A — Prior Approval Based",
        "nameJa": "オプションA — 先行認可ベース",
        "applicableClasses": [
          "Class A",
          "Class B",
          "Class C",
          "Class D"
        ],
        "description": "参照国（CE/FDA/TGA/Health Canada等）の既存承認に基づく簡略審査。先行認可国の承認書類一式を提出。",
        "subtypes": [],
        "avgReviewTime": "要確認",
        "avgReviewTimeSource": null,
        "fee": "要確認",
        "feeSource": null,
        "url": "https://www.dfrh.org.pk/"
      },
      {
        "name": "Option B — ISO 13485 Based",
        "nameJa": "オプションB — ISO 13485ベース",
        "applicableClasses": [
          "Class A",
          "Class B",
          "Class C",
          "Class D"
        ],
        "description": "ISO 13485認証を基盤とした適合性評価。ISO 13485認証書に加え、技術文書・臨床評価等を提出。",
        "subtypes": [],
        "avgReviewTime": "要確認",
        "avgReviewTimeSource": null,
        "fee": "要確認",
        "feeSource": null,
        "url": "https://www.dfrh.org.pk/"
      },
      {
        "name": "Option C — DRAP Independent Review",
        "nameJa": "オプションC — DRAP独立審査",
        "applicableClasses": [
          "Class A",
          "Class B",
          "Class C",
          "Class D"
        ],
        "description": "DRAPによる独立した技術文書評価。先行認可やISO 13485認証がない場合に適用。",
        "subtypes": [],
        "avgReviewTime": "要確認",
        "avgReviewTimeSource": null,
        "fee": "要確認",
        "feeSource": null,
        "url": "https://www.dfrh.org.pk/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "DRAP オンラインポータル",
    "url": "https://www.dfrh.org.pk/",
    "description": "DRAPのオンラインポータル経由で申請可能。電子申請の整備は進行中。",
    "mandatory": false
  },
  "udi": {
    "required": false,
    "system": "未導入",
    "description": "パキスタンではUDI制度は現時点で未導入。将来的な導入計画は検討段階。",
    "url": null,
    "timeline": "未定"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "DRAP有害事象報告制度",
      "mandatory": true,
      "url": "https://www.dfrh.org.pk/",
      "description": "製造業者・輸入業者は重大な有害事象をDRAPに報告する義務がある。報告制度は整備途上。"
    },
    "recalls": {
      "authority": "DRAP",
      "description": "DRAPがリコールを監督。安全性に関する問題が発見された場合、市場からの回収を命令可能。",
      "url": "https://www.dfrh.org.pk/"
    },
    "surveillance": "市販後監視の要件はMedical Devices Rules 2017に規定。実施体制は発展途上。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "輸出国の規制当局",
    "name": "Certificate of Free Sale (CFS)",
    "description": "DRAP登録申請時に、原産国の規制当局が発行するCFSの提出が求められる場合がある。",
    "processingTime": "輸出国側の手続きによる",
    "url": "https://www.dfrh.org.pk/"
  },
  "reimbursement": {
    "system": "公的医療制度（限定的）",
    "authority": "Ministry of National Health Services, Regulations and Coordination",
    "description": "パキスタンの医療制度は公立病院と民間セクターが混在。医療機器に特化した体系的な償還制度は未整備。公立病院での調達は政府予算に基づく。",
    "codingSystems": [],
    "url": null
  },
  "marketingRules": {
    "authority": "DRAP",
    "description": "Medical Devices Rules 2017に基づき、医療機器の広告・マーケティングに関する規制が存在。虚偽・誇大広告は禁止。",
    "keyRules": [
      "未登録医療機器の広告は禁止",
      "虚偽・誇大な効能表示の禁止"
    ]
  },
  "mdsap": {
    "status": "非参加（Non-participant）",
    "description": "パキスタンはMDSAPに参加していない。MDSAP監査報告書はDRAPの規制要件を代替しない。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "適合性評価オプションBの基盤。ISO 13485認証の取得が推奨される。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "リスクマネジメント。技術文書のリスク評価に適用。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "ソフトウェアライフサイクル。SaMD申請に参照。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "医用電気機器の安全・性能要求。"
    },
    "others": []
  },
  "recentDevelopments": [
    {
      "date": "2017",
      "title": "Medical Devices Rules 2017の制定",
      "description": "DRAP Act 2012に基づく医療機器の包括的な規制規則が制定。4クラス分類と3つの適合性評価オプションを導入。"
    }
  ],
  "lastUpdated": "2026-04-02",
  "verified": null
};
