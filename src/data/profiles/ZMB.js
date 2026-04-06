// ザンビア (Zambia)
export default {
  "code": "ZMB",
  "country": "ザンビア",
  "countryEn": "Zambia",
  "region": "Middle East & Africa",
  "flag": "🇿🇲",
  "legalSystemOverview": {
    "type": "政府審査型（GHTF/IMDRF整合）",
    "description": "ザンビアではZAMRA（ザンビア医薬品規制庁）が医療機器の市場承認（Marketing Authorisation）を管轄。Medicines and Allied Substances Act (2013) が基本法。GHTF/IMDRFに整合した4クラス分類（Class A/B/C/D）。STED（Summary Technical Documentation）ベースの申請。ZaZiBoNa（SADC共同登録手続）の創設メンバー。IRIMS電子申請ポータル稼働。",
    "keyCharacteristics": [
      "ZAMRA がNCA（2013年法で設立）",
      "Medicines and Allied Substances Act No. 3 of 2013 が基本法",
      "GHTF/IMDRF整合の4クラス制（Class A/B/C/D）",
      "STED（Summary Technical Documentation）で申請",
      "Marketing Authorisation有効期間5年",
      "IRIMS電子申請ポータル稼働",
      "ZaZiBoNa（SADC共同登録）創設メンバー",
      "英語ラベリング必須",
      "WHO Maturity Level 3を目指して能力強化中"
    ]
  },
  "authorities": [
    {
      "name": "ZAMRA",
      "fullName": "Zambia Medicines Regulatory Authority",
      "localName": null,
      "role": "NCA: 医療機器のMarketing Authorisation・市販後監視・査察・輸出入許可・有害事象報告受理。",
      "url": "https://www.zamra.co.zm/guidelines/",
      "isPrimary": true
    },
    {
      "name": "NHIMA",
      "fullName": "National Health Insurance Management Authority",
      "localName": null,
      "role": "国民健康保険制度（NHIS）運営。医療施設への手術タリフに医療機器消耗品を含む。",
      "url": "https://www.nhima.co.zm/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "政府直接審査（NB制度なし）",
    "description": "ZAMRAが直接審査。第三者認証機関制度は存在しない。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "Medicines and Allied Substances Act (2013): 「人または動物の疾病・障害・異常な身体状態の診断・治療・軽減・予防のために使用されるものとして製造・販売される器具・装置・構成部品・部品・附属品」。",
    "scope": "IVDを含む。「Allied substances」に医療機器・コンドーム・医療/外科用消耗品等が含まれる。",
    "notes": "違反時の罰則: 最大400万ペナルティユニットの罰金または最大7年の禁固。"
  },
  "primaryLaw": {
    "title": "Medicines and Allied Substances Act, 2013 (Act No. 3 of 2013)",
    "originalTitle": "Medicines and Allied Substances Act",
    "enacted": "2013",
    "lastAmended": "要確認",
    "url": "https://www.zamra.co.zm/wp-content/uploads/2023/05/MASA-No-3-2013.pdf",
    "description": "2013年3月21日制定。ZAMRAを設立し、医薬品・医療機器・IVD・関連物質の製造・輸入・保管・流通・販売を規制。旧Pharmaceutical Regulatory Authorityの後継。"
  },
  "implementingRegulations": [
    {
      "title": "Guidelines on Application for Grant of Marketing Authorisation of Non-IVDs",
      "date": "2024-07",
      "url": "https://www.zamra.co.zm/wp-content/uploads/2024/07/GUIDELINES-ON-APPLICATION-FOR-GRANT-OF-MARKETING-AUTHORISATION-OF-NON-IVDS.pdf",
      "description": "2024年7月公表。非IVD医療機器のMarketing Authorisation申請ガイドライン。STEDベース。",
      "category": "登録ガイドライン"
    },
    {
      "title": "Guidelines for IVD Medical Device Market Authorisation",
      "date": "2023",
      "url": "https://www.zamra.co.zm/wp-content/uploads/2023/08/Guidelines-for-In-vitro-Diagnostic-Medical-Device-Market-Authorisation.pdf",
      "description": "IVD医療機器のMarketing Authorisationガイドライン。",
      "category": "登録ガイドライン（IVD）"
    },
    {
      "title": "SI No. 38 of 2016 — Fees",
      "date": "2016",
      "url": "https://www.zamra.co.zm/wp-content/uploads/2023/05/FEES-FOR-MARKETING-AUTHORISATION.pdf",
      "description": "Marketing Authorisation手数料を規定。",
      "category": "手数料"
    }
  ],
  "relatedLaws": [
    {
      "title": "National Health Insurance Act No. 2 of 2018",
      "category": "国民健康保険",
      "enacted": "2018",
      "url": "https://www.zamra.co.zm/legislation/",
      "relevance": "NHIMA設立根拠法。国民健康保険制度（NHIS）の法的基盤。"
    }
  ],
  "classification": {
    "system": "GHTF/IMDRF整合 4クラス制（Class A/B/C/D）",
    "basis": "GHTF SG1/N77モデルに基づくリスクベース分類。使用目的・侵襲性・接触期間・技術に基づく。ZAMRAが分類ガイドラインを公表。",
    "classes": [
      {
        "name": "Class A",
        "nameJa": "クラスA",
        "riskLevel": "低",
        "description": "低リスク。非侵襲・短期接触。",
        "examples": ["弾性包帯", "聴診器", "舌圧子", "手動車椅子", "再使用可能手術器具"],
        "approvalPath": "ZAMRA Marketing Authorisation"
      },
      {
        "name": "Class B",
        "nameJa": "クラスB",
        "riskLevel": "中低",
        "description": "中低リスク。",
        "examples": ["皮下注射針", "吸引器具", "電動車椅子", "補聴器", "血圧計"],
        "approvalPath": "ZAMRA Marketing Authorisation"
      },
      {
        "name": "Class C",
        "nameJa": "クラスC",
        "riskLevel": "中高",
        "description": "中高リスク。",
        "examples": ["人工呼吸器", "骨固定プレート", "血液透析装置", "輸液ポンプ", "コンタクトレンズ"],
        "approvalPath": "ZAMRA Marketing Authorisation"
      },
      {
        "name": "Class D",
        "nameJa": "クラスD",
        "riskLevel": "高",
        "description": "最高リスク。",
        "examples": ["人工心臓弁", "植込み型除細動器", "ペースメーカー", "冠動脈ステント", "人工股関節"],
        "approvalPath": "ZAMRA Marketing Authorisation"
      }
    ],
    "rules": [
      "GHTF SG1/N77モデルに基づくリスクベース分類ルール",
      "非侵襲・侵襲・能動機器の各カテゴリで分類"
    ],
    "totalProductCodes": null
  },
  "conformityAssessment": {
    "overview": "ZAMRAによるMarketing Authorisation制度。STEDベースの製品ドシエ + Essential Principles of Safety and Performance + ISO 13485 QMS証拠を提出。有効期間5年。CFS（WHO型）が申請要件。",
    "routes": [
      {
        "name": "Marketing Authorisation",
        "nameJa": "市場承認",
        "applicableClasses": ["Class A", "Class B", "Class C", "Class D"],
        "description": "STED製品ドシエ・Essential Principles・ラベリング/包装文書・品質文書（ISO 13485）・CFS（WHO型、ザンビア宛）を提出。製造業者またはAuthorized Representative（委任状必要）が申請。有効期間5年。",
        "subtypes": [],
        "avgReviewTime": "要確認（公式情報で裏付け未取得）",
        "avgReviewTimeSource": "https://www.zamra.co.zm/wp-content/uploads/2024/07/GUIDELINES-ON-APPLICATION-FOR-GRANT-OF-MARKETING-AUTHORISATION-OF-NON-IVDS.pdf",
        "fee": "要確認（SI No. 38 of 2016で規定。具体額は公式PDFで要確認）",
        "feeSource": "https://www.zamra.co.zm/wp-content/uploads/2023/05/FEES-FOR-MARKETING-AUTHORISATION.pdf",
        "url": "https://www.zamra.co.zm/wp-content/uploads/2024/07/GUIDELINES-ON-APPLICATION-FOR-GRANT-OF-MARKETING-AUTHORISATION-OF-NON-IVDS.pdf"
      }
    ]
  },
  "electronicSubmission": {
    "system": "IRIMS (Integrated Regulatory Information Management System)",
    "url": "https://www.zamra.co.zm/e-services-portal/",
    "description": "ZAMRA電子申請ポータル。輸出入許可・Marketing Authorisation・施設登録・臨床試験・有害事象報告・広告審査等をオンライン受付。2026年1月より更新・変更申請はeCTDポータルのみ（主に医薬品向け）。",
    "mandatory": true
  },
  "udi": {
    "required": false,
    "system": "未導入",
    "description": "UDI制度は未導入。ZAMRAのガイドラインでIRIMDFのUDI概念に言及しているが、義務化タイムラインなし。医薬品のシリアル化は2028年7月義務化。",
    "url": null,
    "timeline": "未定"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "ZAMRA Safety Watch",
      "mandatory": true,
      "url": "https://www.zamra.co.zm/safety-watch-online-reporting/",
      "description": "VigiFlow（WHO-UMCシステム）およびZAMRA内部ポータルでオンライン報告。医療従事者・消費者は任意、製造業者・輸入業者・MAHは義務。「Cosmetics, Medical Devices, Nutritional Supplements」専用カテゴリあり。オフラインPDFフォームも利用可。"
    },
    "recalls": {
      "authority": "ZAMRA",
      "description": "ZAMRAがリコール指示権限を持つ。リコールガイドラインを公表。",
      "url": "https://www.zamra.co.zm/wp-content/uploads/2023/08/Guidelines-on-Recall-of-Medicines-and-Allied-Substance.pdf"
    },
    "surveillance": "能動・受動両方の監視手法。2026年2月にZAMRAが全国的な監視活動を強化。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "ZAMRA",
    "name": "Certificate of Free Sale",
    "description": "ZAMRAが登録済み製品のCFSを発行。輸入時はWHO型の品質/自由販売証明（ザンビア宛）が申請要件。",
    "processingTime": "要確認（公式情報で裏付け未取得）",
    "url": "https://www.zamra.co.zm/forms/"
  },
  "reimbursement": {
    "system": "NHIS（国民健康保険制度）",
    "authority": "NHIMA (National Health Insurance Management Authority)",
    "description": "2018年法で設立。入院/外来・処方薬・救急サービスをカバー。医療機器は手術タリフの一部として間接的にカバー（麻酔消耗品・医療消耗品・整形外科インプラント等）。医療機器の個別償還リストではなく手技ベースのタリフ。90日の償還ウィンドウ。",
    "codingSystems": [
      "NHIMA給付パッケージ分類"
    ],
    "url": "https://www.zamra.co.zm/wp-content/uploads/2023/05/FEES-FOR-MARKETING-AUTHORISATION.pdf"
  },
  "marketingRules": {
    "authority": "ZAMRA",
    "description": "英語ラベリング必須。ZAMRAがラベリング・使用説明書ガイドラインを公表。",
    "keyRules": [
      "英語ラベリング・IFU必須",
      "ZAMRAラベリングガイドライン準拠",
      "広告・販促資料はZAMRAに提出"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "MDSAP非参加。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "STEDドシエでQMS証拠として要求。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "Essential Principlesでリスクマネジメントとして参照。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "ソフトウェアライフサイクル。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "電気医療機器安全。"
    },
    "others": [
      "GHTF/IMDRF Essential Principlesに基づく安全性・性能要件",
      "ZaZiBoNa（SADC共同登録手続）に参加"
    ]
  },
  "recentDevelopments": [
    {
      "date": "2024-07",
      "title": "非IVD医療機器 Marketing Authorisationガイドライン公表",
      "description": "ZAMRAが非IVD医療機器の登録申請ガイドラインを更新公表。STEDベース・Essential Principles準拠。医療機器規制枠組みの大幅な更新。"
    },
    {
      "date": "2026-01",
      "title": "eCTDポータル移行",
      "description": "更新・変更申請はeCTDポータルのみで受付（主に医薬品向け）。電子申請の義務化が進行。"
    },
    {
      "date": "2026-02",
      "title": "ZAMRA全国監視活動強化",
      "description": "コンプライアンス執行のための全国的な監視活動を強化。"
    },
    {
      "date": "2025-09",
      "title": "SPOCネットワーク立ち上げ",
      "description": "偽造/粗悪医療製品対策のSingle Point of Contactネットワーク（多機関連携）を発足。"
    }
  ],
  "lastUpdated": "2026-04-03",
  "verified": null
};
