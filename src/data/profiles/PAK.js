// パキスタン (Pakistan)
export default {
  "code": "PAK",
  "country": "パキスタン",
  "countryEn": "Pakistan",
  "region": "ASPAC",
  "flag": "🇵🇰",
  "legalSystemOverview": {
    "type": "連邦制（Federal system）",
    "description": "パキスタンの医療機器規制はDRAP（Drug Regulatory Authority of Pakistan）が管轄する。2012年のDRAP Act（Act X of 2012）により設立されたDRAPが、医薬品・医療機器の両方を統括。2017年にMedical Devices Rules 2017が制定され、医療機器の登録・輸入・製造に関する規制枠組みが整備された。2025年7月にはオンライン電子申請ポータルが稼働し、デジタル化が進展。GHTF/IMDRFの4クラス分類（Class A/B/C/D）を採用し、リスクベースの規制を実施。",
    "keyCharacteristics": [
      "DRAPによる一元的な連邦規制体制",
      "リスクベースの4クラス分類（Class A/B/C/D）",
      "Medical Devices Rules 2017に基づく登録制度",
      "3つの適合性評価オプション（Option A/B/C）",
      "先行認可国（CE/FDA/TGA等）の認証を参考にした審査",
      "2025年7月にオンライン電子申請ポータル稼働"
    ]
  },
  "authorities": [
    {
      "name": "DRAP",
      "fullName": "Drug Regulatory Authority of Pakistan",
      "localName": null,
      "role": "医療機器の登録・輸入許可・製造許可・市販後監視。主管当局。",
      "url": "https://www.dra.gov.pk/",
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
    "lastAmended": "2022",
    "url": "https://www.dra.gov.pk/wp-content/uploads/2022/10/DRAP-2012-_As-Amended-till-Feb-2022.pdf",
    "description": "DRAPの設立根拠法。医薬品・医療機器の規制権限をDRAPに付与。2022年2月までの改正を反映した最新版が公開。医療機器の詳細規制はMedical Devices Rules 2017で規定。"
  },
  "implementingRegulations": [
    {
      "title": "Medical Devices Rules 2017",
      "date": "2017",
      "url": "https://www.dra.gov.pk/wp-content/uploads/2022/02/FFMedicalDevicesRules2017Notifiedon16-01-2018-1.pdf",
      "description": "医療機器の登録・分類・輸入・製造・ラベリング等の詳細を規定する主要な施行規則。2018年1月16日官報掲載。",
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
    "overview": "全クラスの医療機器にDRAP登録が必要。3つの適合性評価オプション（Option A/B/C）から選択可能。Option AはCEマーキング・適合宣言書・FSC（Free Sale Certificate）に基づく審査、Option Bは参照国のFSCに基づく審査、Option CはWHO事前資格認定に基づく審査。2025年7月のオンラインポータル稼働後、平均処理日数は約21.8営業日に短縮。",
    "routes": [
      {
        "name": "Option A — CE Marking Based",
        "nameJa": "オプションA — CEマーキングベース",
        "applicableClasses": [
          "Class A",
          "Class B",
          "Class C",
          "Class D"
        ],
        "description": "CEマーキング証明書、適合宣言書（Declaration of Conformity）、Free Sale Certificateに基づく審査。完全品質保証（Full Quality Assurance）に基づくCE証明が必要。",
        "subtypes": [],
        "avgReviewTime": "要確認（オンラインポータル経由で平均約21.8営業日の実績あり）",
        "avgReviewTimeSource": null,
        "fee": "Class A: PKR 5,000、Class B/C/D（輸入）: PKR 25,000〜50,000",
        "feeSource": "https://www.dra.gov.pk/wp-content/uploads/2024/09/DRAP-Regulatory-Fee-30.08.2024.pdf",
        "url": "https://www.dra.gov.pk/therapeutic-goods/medical-devices/application-process/"
      },
      {
        "name": "Option B — Reference Country FSC Based",
        "nameJa": "オプションB — 参照国FSCベース",
        "applicableClasses": [
          "Class A",
          "Class B",
          "Class C",
          "Class D"
        ],
        "description": "参照国（FDA/TGA/Health Canada等のリスト記載国）が発行するFree Sale Certificateに基づく審査。参照国での販売実績が必要。",
        "subtypes": [],
        "avgReviewTime": "要確認（オンラインポータル経由で平均約21.8営業日の実績あり）",
        "avgReviewTimeSource": null,
        "fee": "Class A: PKR 5,000、Class B（輸入）: PKR 25,000、Class C/D（輸入）: PKR 50,000",
        "feeSource": "https://www.dra.gov.pk/wp-content/uploads/2024/09/DRAP-Regulatory-Fee-30.08.2024.pdf",
        "url": "https://www.dra.gov.pk/therapeutic-goods/medical-devices/application-process/"
      },
      {
        "name": "Option C — WHO Prequalification Based",
        "nameJa": "オプションC — WHO事前資格認定ベース",
        "applicableClasses": [
          "Class A",
          "Class B",
          "Class C",
          "Class D"
        ],
        "description": "WHO事前資格認定（Prequalification）を取得した機器に適用。FSCとWHO PQ証明書を提出。",
        "subtypes": [],
        "avgReviewTime": "要確認",
        "avgReviewTimeSource": null,
        "fee": "Class A: PKR 5,000、Class B/C/D（輸入）: PKR 25,000〜50,000",
        "feeSource": "https://www.dra.gov.pk/wp-content/uploads/2024/09/DRAP-Regulatory-Fee-30.08.2024.pdf",
        "url": "https://www.dra.gov.pk/therapeutic-goods/medical-devices/application-process/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "DRAP e-Services Portal",
    "url": "https://e.dra.gov.pk/",
    "description": "2025年7月にDRAP e-Servicesポータルが稼働開始。MDMC（Medical Devices & Medicated Cosmetics）のライセンス・登録モジュールが導入され、全ての医療機器登録申請はオンライン提出が可能。",
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
      "url": "https://www.dra.gov.pk/therapeutic-goods/medical-devices/",
      "description": "製造業者・輸入業者は重大な有害事象をDRAPに報告する義務がある。Medical Devices Rules 2017に基づく報告制度。"
    },
    "recalls": {
      "authority": "DRAP",
      "description": "DRAPがリコールを監督。安全性に関する問題が発見された場合、市場からの回収を命令可能。",
      "url": "https://www.dra.gov.pk/therapeutic-goods/medical-devices/"
    },
    "surveillance": "市販後監視の要件はMedical Devices Rules 2017に規定。実施体制は発展途上。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "輸出国の規制当局",
    "name": "Certificate of Free Sale (CFS)",
    "description": "DRAP登録申請時に、原産国の規制当局が発行するCFSの提出が必須。Option A/B/CいずれのルートでもFSCが要件。",
    "processingTime": "輸出国側の手続きによる",
    "url": "https://www.dra.gov.pk/therapeutic-goods/medical-devices/application-process/"
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
      "description": "DRAP Act 2012に基づく医療機器の包括的な規制規則が制定。4クラス分類と3つの適合性評価オプションを導入。2018年1月16日に官報掲載。"
    },
    {
      "date": "2024-08",
      "title": "DRAP規制手数料の改定",
      "description": "2024年8月30日付でDRAP規制手数料（Regulatory Fee）スケジュールが改定。医療機器の登録・更新手数料を含む。"
    },
    {
      "date": "2025-07",
      "title": "医療機器オンライン登録ポータル稼働開始",
      "description": "首相主導でDRAP e-Servicesポータル（e.dra.gov.pk）が稼働開始。MDMCライセンス・登録のデジタル化により、平均処理日数が約21.8営業日に大幅短縮。"
    }
  ],
  "lastUpdated": "2026-04-06",
  "verified": "2026-04-06"
};
