// モザンビーク (Mozambique)
export default {
  "code": "MOZ",
  "country": "モザンビーク",
  "countryEn": "Mozambique",
  "region": "Middle East & Africa",
  "flag": "🇲🇿",
  "legalSystemOverview": {
    "type": "政府審査型（AIM制度、行政ガイドラインレベル）",
    "description": "モザンビークではANARME（国家医薬品規制庁、IP: 公的法人）が医療機器を含む保健製品の規制を管轄。Lei n.º 12/2017（医薬品・ワクチン・その他保健製品法）が基本法。AIM（市場承認）制度でCTDフォーマットにて申請。分類は4クラス体系（行政ガイドラインレベル、正式な法令規定なし）。Pharmadex（2015年〜）+ iRIMS（PQM+支援）で電子化推進中。Zone IVb安定性要件。2025年6月にISO 9001:2015取得。ML3（WHO成熟度レベル3）を2025〜2026年目標。ZaZiBoNa参加。",
    "keyCharacteristics": [
      "ANARME, IP がNCA（Decreto 115/2020で設立）",
      "Lei n.º 12/2017 が基本法",
      "AIM（Autorização de Introdução no Mercado）制度",
      "CTDフォーマットで申請（紙 + CD/USB）",
      "4クラス分類（行政ガイドラインレベル）",
      "Pharmadex + iRIMS で電子化推進",
      "Zone IVb安定性要件",
      "AIM有効期間5年",
      "ポルトガル語ラベリング必須",
      "ZaZiBoNa参加",
      "ISO 9001:2015取得（2025-06）"
    ]
  },
  "authorities": [
    {
      "name": "ANARME, IP",
      "fullName": "National Regulatory Authority for Medicines",
      "localName": "Autoridade Nacional Reguladora de Medicamentos",
      "role": "NCA: 医薬品・医療機器・IVD・保健製品のAIM（市場承認）・品質管理・GMP査察・輸入許可・市販後監視。公的法人（IP）。",
      "url": "https://anarme.gov.mz/",
      "isPrimary": true
    },
    {
      "name": "MISAU",
      "fullName": "Ministry of Health",
      "localName": "Ministério da Saúde",
      "role": "保健政策立案。ANARMEの上位機関。",
      "url": "https://www.misau.gov.mz/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "政府直接審査（NB制度なし）",
    "description": "ANARMEが直接審査。第三者認証機関制度は存在しない。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "Lei n.º 12/2017: 医療機器を「保健製品」の一部として定義。人の疾病の診断・治療・予防等に使用される器具・装置。",
    "scope": "医療機器・IVD・試薬・保健製品全般が対象。",
    "notes": "医療機器専用の詳細な定義はDecreto 19/2023で補足。"
  },
  "primaryLaw": {
    "title": "Lei n.º 12/2017 de 8 de Setembro (Lei do Medicamento, Vacinas, e outros Produtos Biológicos e de Saúde)",
    "originalTitle": "Lei do Medicamento, Vacinas, e outros Produtos Biológicos e de Saúde",
    "enacted": "2017-09-08",
    "lastAmended": "要確認",
    "url": "https://www.misau.gov.mz/index.php/farmacia-legislacao?download=417:lei-12-2017-medicamentos-e-outros-produtos",
    "description": "2017年9月8日制定。医薬品・ワクチン・生物学的製品・保健製品（医療機器を含む）の製造・輸入・販売・流通の規制枠組みを規定。"
  },
  "implementingRegulations": [
    {
      "title": "Decreto 93/2018 — AIM（市場承認）手続",
      "date": "2018",
      "url": "https://anarme.gov.mz/registo-de-produtos/",
      "description": "AIM（市場承認）申請手続を規定。CTDフォーマット。",
      "category": "承認手続"
    },
    {
      "title": "Decreto 115/2020 — ANARME組織規程",
      "date": "2020",
      "url": "https://anarme.gov.mz/sobre-nos/",
      "description": "ANARME, IPの設立・組織・権限を規定。",
      "category": "組織規程"
    },
    {
      "title": "Decreto 19/2023 — 保健製品AIM",
      "date": "2023",
      "url": "https://anarme.gov.mz/registo-de-produtos/",
      "description": "保健製品（医療機器含む）のAIM手続を規定。",
      "category": "保健製品登録"
    },
    {
      "title": "Decreto 16/2023 — 医薬品活動規制",
      "date": "2023",
      "url": "https://anarme.gov.mz/legislacao/",
      "description": "医薬品関連活動（製造・輸入・販売・流通）の規制を規定。",
      "category": "活動規制"
    }
  ],
  "relatedLaws": [
    {
      "title": "ZaZiBoNa Collaborative Registration Procedure",
      "category": "地域協力",
      "enacted": "2013",
      "url": "https://www.zazibona.org/about",
      "relevance": "SADC域内の共同審査手続。モザンビークはZaZiBoNa参加国。"
    }
  ],
  "classification": {
    "system": "4クラス制（行政ガイドラインレベル）",
    "basis": "行政ガイドラインレベルでの4クラス分類。正式な法令による分類規則は未確認。国際的な分類体系（GHTF/IMDRF）を参照。",
    "classes": [
      {
        "name": "Classe I",
        "nameJa": "クラスI",
        "riskLevel": "低",
        "description": "低リスク。",
        "examples": ["弾性包帯", "聴診器", "舌圧子", "手動車椅子"],
        "approvalPath": "ANARME AIM"
      },
      {
        "name": "Classe II",
        "nameJa": "クラスII",
        "riskLevel": "中低",
        "description": "中低リスク。",
        "examples": ["皮下注射針", "血圧計", "補聴器", "手術用手袋"],
        "approvalPath": "ANARME AIM"
      },
      {
        "name": "Classe III",
        "nameJa": "クラスIII",
        "riskLevel": "中高",
        "description": "中高リスク。",
        "examples": ["人工呼吸器", "骨固定プレート", "血液透析装置", "輸液ポンプ"],
        "approvalPath": "ANARME AIM"
      },
      {
        "name": "Classe IV",
        "nameJa": "クラスIV",
        "riskLevel": "高",
        "description": "最高リスク。",
        "examples": ["人工心臓弁", "植込み型除細動器", "冠動脈ステント", "人工股関節"],
        "approvalPath": "ANARME AIM"
      }
    ],
    "rules": [
      "行政ガイドラインレベルの分類（正式な法令規定なし）",
      "GHTF/IMDRF分類体系を参照"
    ],
    "totalProductCodes": null
  },
  "conformityAssessment": {
    "overview": "ANARMEによるAIM（Autorização de Introdução no Mercado）制度。CTDフォーマットで紙+電子媒体（CD/USB）にて提出。AIM有効期間5年。Zone IVb安定性データ要求。CFS（原産国）が申請要件。",
    "routes": [
      {
        "name": "AIM (Autorização de Introdução no Mercado)",
        "nameJa": "市場承認（AIM）",
        "applicableClasses": ["Classe I", "Classe II", "Classe III", "Classe IV"],
        "description": "CTDフォーマット・ポルトガル語で申請。紙媒体+電子媒体（CD/USB）で提出。Zone IVb安定性データ要求。原産国のCFSが必要。有効期間5年、更新可能。",
        "subtypes": [],
        "avgReviewTime": "要確認（公式情報で裏付け未取得）",
        "avgReviewTimeSource": "https://anarme.gov.mz/registo-de-produtos/",
        "fee": "要確認（公式情報で裏付け未取得）",
        "feeSource": "https://anarme.gov.mz/legislacao/",
        "url": "https://anarme.gov.mz/sobre-nos/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "Pharmadex + iRIMS（移行中）",
    "url": "https://anarme.gov.mz/servicos/",
    "description": "Pharmadex（2015年導入）で製品登録管理。PQM+（USAID）支援によるiRIMS導入で電子化を推進中。現時点ではCTDの紙+CD/USB提出が基本。完全な電子申請への移行は進行中。",
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
      "system": "ANARME ファーマコビジランス",
      "mandatory": true,
      "url": "https://anarme.gov.mz/farmacovigilancia/",
      "description": "ANARMEがファーマコビジランスを管轄。医療機器専用のマテリオビジランス制度の整備状況は限定的。有害事象報告の受理・評価を実施。"
    },
    "recalls": {
      "authority": "ANARME",
      "description": "ANARMEが市場安全措置・リコールの権限を持つ。",
      "url": "https://anarme.gov.mz/farmacovigilancia/"
    },
    "surveillance": "ファーマコビジランス制度に基づく監視。医療機器専用のPMS制度は整備中。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "ANARME",
    "name": "Certificado de Livre Venda",
    "description": "ANARMEが登録済み製品のCFSを発行。輸入登録時に原産国のCFSが申請要件。",
    "processingTime": "要確認（公式情報で裏付け未取得）",
    "url": "https://anarme.gov.mz/contactos/"
  },
  "reimbursement": {
    "system": "公的医療サービス（SNS）",
    "authority": "MISAU（保健省）/ CMAM",
    "description": "国民保健サービス（SNS）を通じて公的医療施設で医療サービスを提供。中央医薬品倉庫（CMAM）が公的調達を管理。医療機器特有の償還体系は未確認。",
    "codingSystems": [],
    "url": "https://www.misau.gov.mz/index.php/farmacia-legislacao"
  },
  "marketingRules": {
    "authority": "ANARME",
    "description": "ポルトガル語ラベリング必須。CTDフォーマット・ポルトガル語で申請。",
    "keyRules": [
      "ポルトガル語ラベリング必須",
      "CTDフォーマット・ポルトガル語で申請",
      "Zone IVb安定性データ要求"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "MDSAP非参加。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "国際規格として認知。GMP査察で参照される。"
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
      "ZaZiBoNa参加",
      "ANARME ISO 9001:2015取得（2025-06）",
      "PQM+（USAID）支援プログラム参加",
      "WHO ML3目標（2025〜2026）"
    ]
  },
  "recentDevelopments": [
    {
      "date": "2025-06",
      "title": "ANARME ISO 9001:2015認証取得",
      "description": "ANARMEがISO 9001:2015品質マネジメントシステム認証を取得。規制能力の強化を示す。"
    },
    {
      "date": "2023",
      "title": "Decreto 19/2023・Decreto 16/2023 制定",
      "description": "保健製品AIM手続（Decreto 19/2023）と医薬品活動規制（Decreto 16/2023）が制定。規制枠組みの充実。"
    },
    {
      "date": "2025",
      "title": "WHO ML3達成目標",
      "description": "ANARMEがWHO成熟度レベル3（ML3）の達成を2025〜2026年に目標設定。PQM+支援の下で能力強化を推進中。"
    }
  ],
  "lastUpdated": "2026-04-03",
  "verified": null
};
