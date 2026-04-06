// アルバニア (Albania)
export default {
  "code": "ALB",
  "country": "アルバニア",
  "countryEn": "Albania",
  "region": "Europe",
  "flag": "🇦🇱",
  "legalSystemOverview": {
    "type": "EU加盟候補国（EU MDR部分整合）",
    "description": "アルバニアはEU加盟候補国。Law No. 89/2014が医療機器基本法で、Law 21/2020により部分的にEU MDRへ整合。AKBPMがNCA。CE マーキング必須でEU NB証明書を承認。登録は紙ベース（電子ポータル未整備）。",
    "keyCharacteristics": [
      "EU加盟候補国（2025年11月全33章開放）",
      "Law 89/2014 + Law 21/2020（部分MDR整合）",
      "AKBPM がNCA",
      "CE マーキング必須・EU NB証明書承認",
      "紙ベース登録（電子ポータルなし）",
      "登録有効期間5年",
      "アルバニア語ラベリング必須",
      "現地AR（認定代理人）必須"
    ]
  },
  "authorities": [
    {
      "name": "AKBPM",
      "fullName": "National Agency for Medicines and Medical Devices",
      "localName": "Agjencia Kombëtare e Barnave dhe Pajisjeve Mjekësore",
      "role": "NCA: 医療機器登録・市場監視・ビジランス",
      "url": "https://akbpm.gov.al/sektori-i-pajisjeve-mjekesore/",
      "isPrimary": true
    },
    {
      "name": "FSDKSH",
      "fullName": "Compulsory Health Insurance Fund",
      "localName": "Fondi i Sigurimit të Detyrueshëm të Kujdesit Shëndetësor",
      "role": "強制健康保険による医療機器償還管理",
      "url": "https://fsdksh.gov.al/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "EU NB証明書承認（国内NB制度なし）",
    "description": "アルバニアは独自のNB制度を持たない。EU指定NBが発行したCE証明書を承認する。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "Law No. 89/2014 Article 3に基づく定義。EU MDD/MDRの定義を概ね踏襲。",
    "scope": "IVD含む。SaMD規定は明確な個別規定なし。",
    "notes": "VKM 731/2015がEU必須要件・分類・CEマーキングを規定。"
  },
  "primaryLaw": {
    "title": "Law No. 89/2014 \"Për Pajisjet Mjekësore\"",
    "originalTitle": "Ligji Nr. 89/2014 Për Pajisjet Mjekësore",
    "enacted": "2014",
    "lastAmended": "2020",
    "url": "https://akbpm.gov.al/legjislacioni/",
    "description": "医療機器の安全性・性能・市場流通に関する基本法。Law 21/2020により部分的にEU MDRへ整合。"
  },
  "implementingRegulations": [
    {
      "title": "VKM Nr. 731/2015 (Essential Requirements, Classification, CE Marking)",
      "date": "2015",
      "url": "https://akbpm.gov.al/legjislacioni/akte-nenligjore/",
      "description": "医療機器の必須要件・分類規則・CEマーキング要件を規定。EU MDD Annexを踏襲。",
      "category": "技術要件"
    },
    {
      "title": "Order No. 360/2016 (Registration Procedures), amended by 734/2019",
      "date": "2016",
      "url": "https://akbpm.gov.al/sektori-i-pajisjeve-mjekesore/formularet/",
      "description": "AKBPM登録手続き。2019年改正（Order 734/2019）で手続きを更新。",
      "category": "登録手続"
    }
  ],
  "relatedLaws": [
    {
      "title": "Law No. 21/2020 (Amendment to Law 89/2014)",
      "category": "法改正",
      "enacted": "2020",
      "url": "https://akbpm.gov.al/legjislacioni/ligje/",
      "relevance": "Law 89/2014を改正し、部分的にEU MDR要件を導入。"
    }
  ],
  "classification": {
    "system": "EU式4クラス制",
    "basis": "VKM Nr. 731/2015に基づく分類。EU MDD Annex IX準拠。",
    "classes": [
      {
        "name": "Class I",
        "nameJa": "クラスI",
        "riskLevel": "低",
        "description": "低リスク機器。自己宣言。",
        "examples": ["弾性包帯", "聴診器", "車椅子"],
        "approvalPath": "自己宣言 + AKBPM登録"
      },
      {
        "name": "Class IIa",
        "nameJa": "クラスIIa",
        "riskLevel": "中低",
        "description": "中低リスク。EU NB証明書必要。",
        "examples": ["補聴器", "超音波装置", "血圧計"],
        "approvalPath": "EU NB証明書 + AKBPM登録"
      },
      {
        "name": "Class IIb",
        "nameJa": "クラスIIb",
        "riskLevel": "中高",
        "description": "中高リスク。EU NB詳細審査。",
        "examples": ["人工呼吸器", "輸液ポンプ", "X線装置"],
        "approvalPath": "EU NB証明書 + AKBPM登録"
      },
      {
        "name": "Class III",
        "nameJa": "クラスIII",
        "riskLevel": "高",
        "description": "最高リスク。EU NB最も厳格な審査。",
        "examples": ["人工心臓弁", "冠動脈ステント", "植込み型除細動器"],
        "approvalPath": "EU NB証明書 + AKBPM登録"
      }
    ],
    "rules": ["VKM 731/2015 — EU MDD Annex IX準拠分類規則"],
    "totalProductCodes": "なし（EU分類に準拠）"
  },
  "conformityAssessment": {
    "overview": "CEマーキング必須。EU NB証明書をAKBPMが承認。国内登録（5年有効）が必要。現地AR（認定代理人）必須。",
    "routes": [
      {
        "name": "Class I Registration",
        "nameJa": "クラスI 登録",
        "applicableClasses": ["Class I"],
        "description": "自己宣言 + AKBPM登録。CE DoC・技術文書を提出。現地AR経由。",
        "subtypes": [],
        "avgReviewTime": "5営業日",
        "avgReviewTimeSource": "https://akbpm.gov.al/sektori-i-pajisjeve-mjekesore/regjistrimi-i-pajisjeve-mjekesore/",
        "fee": "要確認（公式情報で裏付け未取得）",
        "feeSource": "https://akbpm.gov.al/legjislacioni/ligje/",
        "url": "https://akbpm.gov.al/sektori-i-pajisjeve-mjekesore/regjistrimi-i-pajisjeve-mjekesore/"
      },
      {
        "name": "Class IIa–III Registration",
        "nameJa": "クラスIIa〜III 登録",
        "applicableClasses": ["Class IIa", "Class IIb", "Class III"],
        "description": "EU NB証明書 + AKBPM登録。CE証明書・適合宣言・技術文書サマリーを提出。登録有効期間5年。",
        "subtypes": [],
        "avgReviewTime": "30営業日",
        "avgReviewTimeSource": "https://akbpm.gov.al/sektori-i-pajisjeve-mjekesore/klasifikimi/",
        "fee": "要確認（公式情報で裏付け未取得）",
        "feeSource": "https://akbpm.gov.al/legjislacioni/akte-nenligjore/",
        "url": "https://akbpm.gov.al/sektori-i-pajisjeve-mjekesore/klasifikimi/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "紙ベース（電子ポータル未整備）",
    "url": "https://akbpm.gov.al/kontakt/",
    "description": "電子申請ポータルは未整備。紙の申請書をAKBPMに直接提出。",
    "mandatory": false
  },
  "udi": {
    "required": false,
    "system": "未導入",
    "description": "UDI制度は未導入。EU加盟交渉の進展に伴い将来的に導入予定。",
    "url": "https://akbpm.gov.al/sektori-i-pajisjeve-mjekesore/pajisjet-mjekesore-ne-shqiperi/",
    "timeline": "未定（EU加盟プロセスに連動）"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "AKBPM ビジランス",
      "mandatory": true,
      "url": "https://akbpm.gov.al/sektori-i-pajisjeve-mjekesore/vigilanca/",
      "description": "有害事象をAKBPMに報告。EU Vigilanceの枠組みを部分的に採用。"
    },
    "recalls": {
      "authority": "AKBPM",
      "description": "FSCA/FSN をAKBPMに通知。市場からの撤去措置。",
      "url": "https://akbpm.gov.al/sektori-i-pajisjeve-mjekesore/raportime/"
    },
    "surveillance": "市販後監視はAKBPMが管轄。PMS/PSUR制度はEU整合に向けて整備中。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "AKBPM",
    "name": "Certificate of Free Sale",
    "description": "AKBPMが発行。有効な機器登録が前提。",
    "processingTime": "要確認（公式情報で裏付け未取得）",
    "url": "https://akbpm.gov.al/sektori-i-pajisjeve-mjekesore/"
  },
  "reimbursement": {
    "system": "強制健康保険（FSDKSH）",
    "authority": "FSDKSH (Fondi i Sigurimit të Detyrueshëm të Kujdesit Shëndetësor)",
    "description": "強制健康保険に基づく医療機器償還。FSDKSHが償還対象リストを管理。",
    "codingSystems": ["FSDKSH償還リスト"],
    "url": "https://fsdksh.gov.al/sherbime/"
  },
  "marketingRules": {
    "authority": "AKBPM",
    "description": "アルバニア語ラベリング必須。IFUはアルバニア語で提供。",
    "keyRules": [
      "アルバニア語ラベリング必須",
      "IFU: アルバニア語必須",
      "CEマーキング表示義務"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "MDSAP非参加。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "EN ISO 13485受容。CEマーキングの前提。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "EN ISO 14971受容。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "EN IEC 62304受容。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "EN IEC 60601シリーズ受容。"
    },
    "others": []
  },
  "recentDevelopments": [
    {
      "date": "2025-11",
      "title": "EU加盟交渉: 全33章開放",
      "description": "2025年11月、アルバニアのEU加盟交渉で全33章が開放された。医療機器規制のEU完全整合に向けた作業が加速。"
    },
    {
      "date": "2025-04",
      "title": "EU加盟交渉: Cluster 2開放",
      "description": "内部市場関連のCluster 2（物の自由移動・労働者の自由移動・会社設立の自由等）が開放。"
    },
    {
      "date": "2020-03",
      "title": "Law 21/2020 施行",
      "description": "Law 89/2014を改正し、部分的にEU MDR要件を導入。分類・適合性評価手続きを更新。"
    }
  ],
  "lastUpdated": "2026-04-03",
  "verified": null
};
