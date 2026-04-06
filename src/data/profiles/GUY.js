// ガイアナ (Guyana)
export default {
  "code": "GUY",
  "country": "ガイアナ",
  "countryEn": "Guyana",
  "region": "Latam",
  "flag": "🇬🇾",
  "legalSystemOverview": {
    "type": "共和制（Co-operative Republic）",
    "description": "保健省傘下の Government Analyst – Food and Drug Department（GA-FDD）が医療機器を含む食品・医薬品・化粧品の規制を管轄。Food and Drugs Act, Chapter 34:03（1971年制定）の Part V が医療機器の法的根拠。独自のリスクベース分類制度は存在せず、ISO 13485認証・MDSAP証明書・原産国のCFSを審査要件とするリライアンスモデルを採用。英語圏カリブ共同体（CARICOM）加盟国。",
    "keyCharacteristics": [
      "GA-FDD が医療機器の輸入・販売を管轄",
      "Food and Drugs Act 1971 Part V が法的根拠",
      "独自のリスクベース分類制度なし（リライアンスモデル）",
      "ISO 13485 + MDSAP証明書 + 原産国CFS を審査要件とする",
      "輸入許可制（年次更新）、紙ベース申請",
      "CARICOM加盟国、英語が公用語"
    ]
  },
  "authorities": [
    {
      "name": "GA-FDD",
      "fullName": "Government Analyst – Food and Drug Department",
      "localName": null,
      "role": "医療機器の輸入許可・市場流通管理・品質検査",
      "url": "https://gafdd.gy/about-us/",
      "isPrimary": true
    },
    {
      "name": "MOH Guyana",
      "fullName": "Ministry of Health, Guyana",
      "localName": null,
      "role": "保健政策全般・公衆衛生・医療機関監督",
      "url": "https://health.gov.gy/about-us/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "なし（GA-FDD が直接審査）",
    "description": "第三者認証機関（Notified Body）制度は存在しない。GA-FDD が輸入許可を直接発行する。ISO 13485認証・MDSAP証明書は外部認証機関による取得が前提。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "Food and Drugs Act, Chapter 34:03, Part V に基づく「device」の定義。診断・治療・予防・身体構造機能への影響を目的とする器具・機械・器具を含む。",
    "scope": "IVD を含む（明示的区分なし）。",
    "notes": "定義は広範であり、実務上は GA-FDD の輸入許可審査で対象範囲が判断される。"
  },
  "primaryLaw": {
    "title": "Food and Drugs Act, Chapter 34:03",
    "originalTitle": "Food and Drugs Act (Act No. 12 of 1971)",
    "enacted": "1971",
    "lastAmended": null,
    "url": "https://parliament.gov.gy/publications/acts-of-parliament/food-and-drugs-act-1971",
    "description": "食品・医薬品・化粧品・医療機器の規制に関する基本法。Part V が医療機器に関する規定を置く。1971年制定以降、大規模な改正は確認されていない。"
  },
  "implementingRegulations": [
    {
      "title": "GA-FDD Requirements for the Importation, Marketing and Distribution of Medical Devices",
      "date": "2020",
      "url": "https://gafdd.gy/press-releases/requirements-for-the-importation-marketing-and-distribution-of-medical-devices/",
      "description": "GA-FDDが公表した医療機器の輸入・販売・流通に関する要件文書。ISO 13485認証、MDSAP証明書、原産国CFSの提出を義務付け。",
      "category": "ガイダンス"
    }
  ],
  "relatedLaws": [
    {
      "title": "Pharmacy Practitioners Act 2003",
      "url": "https://parliament.gov.gy/publications/acts-of-parliament/",
      "description": "薬局実務に関する法律。医療機器の流通チャネルに間接的に関連。"
    }
  ],
  "classification": {
    "system": "分類制度なし（リライアンスモデル）",
    "basis": "独自のリスクベース分類体系を持たない。ISO 13485認証・MDSAP証明書・原産国CFSの提出をもって品質・安全性を担保するリライアンスモデルを採用。",
    "classes": [
      {
        "name": "Permit Required",
        "nameJa": "輸入許可対象",
        "riskLevel": "全リスク",
        "description": "商業目的で輸入・販売されるすべての規制対象医療機器。ISO 13485認証、MDSAP証明書、原産国CFS等の提出が必要。",
        "examples": [
          "手術器具",
          "画像診断装置",
          "体外診断用医薬品",
          "心臓ペースメーカー",
          "注射器・カテーテル"
        ],
        "approvalPath": "GA-FDD 輸入許可（Import Permit）"
      },
      {
        "name": "Exempt",
        "nameJa": "免除（個人使用）",
        "riskLevel": "—",
        "description": "個人使用目的で少量持ち込まれる医療機器。商業流通を目的としない場合は輸入許可不要。",
        "examples": [
          "個人用血糖値測定器",
          "個人用補聴器"
        ],
        "approvalPath": "許可不要"
      }
    ],
    "rules": [
      "独自分類体系なし。原産国の分類・認可を参照",
      "全商業輸入品にISO 13485 + MDSAP + CFSを要求"
    ],
    "totalProductCodes": null
  },
  "conformityAssessment": {
    "overview": "GA-FDDへの輸入許可申請。ISO 13485認証、MDSAP証明書、原産国のCFSを主要な審査根拠とするリライアンスモデル。独自の適合性評価（型式試験等）は実施しない。年次更新制。",
    "routes": [
      {
        "name": "Import Permit",
        "nameJa": "輸入許可",
        "applicableClasses": [
          "Permit Required"
        ],
        "description": "GA-FDDに輸入許可申請書を提出。ISO 13485認証書、MDSAP証明書、原産国CFS、製品仕様書、ラベリング情報等を審査。許可は年次更新。紙ベースの申請プロセス。",
        "subtypes": [],
        "avgReviewTime": "要確認（公式情報で裏付け未取得）",
        "avgReviewTimeSource": null,
        "fee": "要確認（公式情報で裏付け未取得）",
        "feeSource": null,
        "url": "https://gafdd.gy/services/drug-registration/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "なし",
    "url": null,
    "description": "電子申請ポータルは存在しない。すべての申請は紙ベースでGA-FDD窓口に提出。",
    "mandatory": false
  },
  "udi": {
    "required": false,
    "system": "未導入",
    "description": "独自のUDI（機器固有識別）制度は導入されていない。",
    "url": null,
    "timeline": "未定"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "専用制度なし",
      "mandatory": false,
      "url": null,
      "description": "医療機器に特化した有害事象報告制度は確立されていない。2025年にPAHO/WHO支援でVigiFlow導入が開始されたが、主に医薬品のファーマコビジランスが対象。医療機器への適用拡大は今後の課題。"
    },
    "recalls": {
      "authority": "GA-FDD",
      "description": "GA-FDDがリコール権限を有するが、体系的なリコール制度は限定的。FDA・Health Canada等のリコール情報を監視し対応。",
      "url": "https://gafdd.gy/press-releases/"
    },
    "surveillance": "体系的な市販後調査制度は未整備。GA-FDDが輸入品の品質抽出検査を実施する場合がある。VigiFlow導入により報告基盤の構築が進行中。"
  },
  "certificateOfFreeSale": {
    "available": false,
    "issuingAuthority": null,
    "name": null,
    "description": "輸入許可申請時に原産国のCFS提出が必須。ガイアナからのCFS発行制度は確認されていない。",
    "processingTime": null,
    "url": null
  },
  "reimbursement": {
    "system": "公的医療制度（政府負担）+ NIS",
    "authority": "MOH / NIS",
    "description": "公立病院は無料で医療サービスを提供（政府予算）。National Insurance Scheme（NIS）が社会保障をカバーするが、医療機器に特化した償還制度は存在しない。高額機器は政府調達プロセスによる。",
    "codingSystems": [],
    "url": "https://health.gov.gy/national-insurance-scheme/"
  },
  "marketingRules": {
    "authority": "GA-FDD",
    "description": "輸入許可を取得した機器のみ販売・流通可能。",
    "keyRules": [
      "GA-FDD輸入許可取得済み機器のみ販売可",
      "虚偽・誇大広告の禁止",
      "英語でのラベリング必須"
    ]
  },
  "mdsap": {
    "status": "非参加（ただしMDSAP証明書を要求）",
    "description": "ガイアナはMDSAPの参加国・Affiliate Member・Observerのいずれでもない。しかし2020年以降、GA-FDDは輸入許可申請時にMDSAP証明書の提出を要求している。MDSAP非参加国がMDSAP証明書を輸入要件とする珍しいケース。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "輸入許可の必須要件。ISO 13485認証書の提出が義務付けられている。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "リスクマネジメント規格として参照される。"
    },
    "iec62304": {
      "accepted": false,
      "notes": "明示的な要求は確認されていない。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "医用電気機器の安全規格として参照される。"
    },
    "others": [
      {
        "standard": "MDSAP",
        "notes": "MDSAP証明書が輸入許可の要件として求められる（2020年以降）。"
      }
    ]
  },
  "recentDevelopments": [
    {
      "date": "2024-04",
      "title": "WHO GBT 自己評価の実施",
      "description": "WHO Global Benchmarking Tool（GBT）による規制能力の自己評価を実施。規制体制の現状把握と能力向上計画の策定に活用。"
    },
    {
      "date": "2024-06",
      "title": "医薬品規制法案（Medicines Regulation Bill）の起草開始",
      "description": "現行の Food and Drugs Act 1971 を近代化するため、新たな医薬品規制法案の起草が開始された。医療機器規制の強化も視野に含まれる。"
    },
    {
      "date": "2025-07",
      "title": "VigiFlow 導入（PAHO/WHO 支援）",
      "description": "PAHO/WHO支援の下でVigiFlowシステムが導入開始。主に医薬品のファーマコビジランスが対象だが、将来的に医療機器への適用拡大が期待される。"
    },
    {
      "date": "2026-02",
      "title": "EU/PAHO PharmaNext ワークショップ開催",
      "description": "EU/PAHO共催のPharmaNextワークショップがガイアナで開催。規制能力強化と国際協調に関する議論が行われた。"
    }
  ],
  "lastUpdated": "2026-04-03",
  "verified": null
};
