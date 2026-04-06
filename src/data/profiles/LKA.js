// スリランカ (Democratic Socialist Republic of Sri Lanka)
export default {
  "code": "LKA",
  "country": "スリランカ",
  "countryEn": "Democratic Socialist Republic of Sri Lanka",
  "region": "ASPAC",
  "flag": "🇱🇰",
  "legalSystemOverview": {
    "type": "議会制共和制（Parliamentary Republic）",
    "description": "スリランカの医療機器規制は国家医薬品規制庁（NMRA: National Medicines Regulatory Authority）が所管する。NMRA Act No. 5 of 2015 により医療機器が正式に規制対象に含められた。リスクベース分類を導入し、IMDRF枠組みとの整合を推進中。規制制度は近年急速に整備が進んでいるが、実施面では段階的な運用が続いている。",
    "keyCharacteristics": [
      "NMRA が医療機器規制を統括",
      "NMRA Act No. 5 of 2015 が法的根拠",
      "リスクベース4クラス分類（A / B / C / D）を導入",
      "輸入品は NMRA への登録が必要",
      "WHO / IMDRF 枠組みとの整合を推進",
      "参照国認可（CE、FDA等）を審査で考慮"
    ]
  },
  "authorities": [
    {
      "name": "NMRA",
      "fullName": "National Medicines Regulatory Authority",
      "localName": "ජාතික ඖෂධ නියාමන අධිකාරිය",
      "role": "医療機器の登録・輸入許可・市販後監視・品質管理を統括",
      "url": "https://www.nmra.gov.lk/",
      "isPrimary": true
    },
    {
      "name": "MOH Sri Lanka",
      "fullName": "Ministry of Health — Sri Lanka",
      "localName": "සෞඛ්‍ය අමාත්‍යාංශය",
      "role": "医療政策全般・法令の策定・監督",
      "url": "https://www.health.gov.lk/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "該当なし（NMRA 直接審査）",
    "description": "欧州型の Notified Body 制度は存在しない。NMRA が直接登録審査を行う。参照国認可（CE、FDA等）が審査において重要な参考情報となる。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "NMRA Act No. 5 of 2015 に基づく定義。疾病の診断・治療・予防・監視等を目的とする器具・装置・機器・ソフトウェア等で、薬理学的・免疫学的・代謝的手段によらないもの（IMDRF定義に準拠）。",
    "scope": "IVDを含む。SaMDに関する詳細規定は要確認。",
    "notes": "NMRA Act により医療機器が医薬品と区別して定義・規制される枠組みが確立。"
  },
  "primaryLaw": {
    "title": "National Medicines Regulatory Authority Act, No. 5 of 2015",
    "originalTitle": null,
    "enacted": "2015-03-19",
    "lastAmended": "要確認",
    "url": "https://www.lawnet.gov.lk/act-no-5-of-2015/",
    "description": "NMRAの設立根拠法（国家医薬品規制庁法）。医薬品・医療機器の登録、品質管理、市販後監視に関する包括的な法的枠組みを規定。2015年3月19日認証、官報2015年3月20日掲載。"
  },
  "implementingRegulations": [
    {
      "title": "Cosmetics, Devices and Drugs Regulations (Gazette No. 378/3 of 1985)",
      "date": "1985-12-02",
      "url": "https://www.nmra.gov.lk/pages/legislation",
      "description": "Cosmetics, Devices and Drugs Act No. 27 of 1980 に基づく実施規則。医療機器の登録申請書類（Schedule I, Form A）等を規定。",
      "category": "登録手続き"
    },
    {
      "title": "Guidelines for Registration of Medical Devices",
      "date": "要確認",
      "url": "https://cdn.prod.website-files.com/666d0695ca3ba7fa496a5068/66c440ddb172591c5ef7d0a0_device_guideline_doc_05.pdf",
      "description": "医療機器登録に必要な書類・手続きの詳細ガイダンス。",
      "category": "ガイダンス"
    },
    {
      "title": "Guidelines for Consolidated Dossiers — New Application Submission Process",
      "date": "2025",
      "url": "https://cdn.prod.website-files.com/666d0695ca3ba7fa496a5068/6881ba1be938700be5b63a4d_Guidelines%20for%20consoildated%20dossier-%20Version%20controlled.pdf",
      "description": "2025年8月以降、新規登録は Consolidated Dossier（製造拠点登録・サンプル輸入・製品登録を一括申請）での提出が必須。",
      "category": "ガイダンス"
    }
  ],
  "relatedLaws": [
    {
      "title": "Cosmetics, Devices and Drugs Act No. 27 of 1980",
      "category": "医療機器規制",
      "enacted": "1980",
      "url": "https://www.nmra.gov.lk/pages/legislation",
      "relevance": "医療機器（Devices）の規制に関する基本法。NMRA Act 2015と併せて医療機器登録の法的根拠を形成。"
    },
    {
      "title": "Consumer Affairs Authority Act No. 9 of 2003",
      "category": "消費者保護",
      "enacted": "2003",
      "url": null,
      "relevance": "消費者保護の観点から医療機器の安全性にも関連。"
    }
  ],
  "classification": {
    "system": "リスクベース4クラス分類（IMDRF整合）",
    "basis": "NMRA規則に基づくIMDRF準拠のリスクベース分類。",
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
        "approvalPath": "登録（簡易審査）— NMRA"
      },
      {
        "name": "Class B",
        "nameJa": "クラスB（中低リスク）",
        "riskLevel": "中低",
        "description": "中低リスク医療機器。",
        "examples": [
          "超音波診断装置",
          "注射針",
          "歯科用材料"
        ],
        "approvalPath": "登録 — NMRA"
      },
      {
        "name": "Class C",
        "nameJa": "クラスC（中高リスク）",
        "riskLevel": "中高",
        "description": "中高リスク医療機器。",
        "examples": [
          "人工呼吸器",
          "透析器",
          "骨接合プレート"
        ],
        "approvalPath": "登録（技術審査）— NMRA"
      },
      {
        "name": "Class D",
        "nameJa": "クラスD（高リスク）",
        "riskLevel": "高",
        "description": "高リスク医療機器。",
        "examples": [
          "心臓ペースメーカー",
          "人工心臓弁",
          "冠動脈ステント"
        ],
        "approvalPath": "登録（詳細審査）— NMRA"
      }
    ],
    "rules": [
      "IMDRF分類ルールに基づく",
      "IVDの分類基準はNMRA規則で規定",
      "参照国での分類を参考"
    ],
    "totalProductCodes": null
  },
  "conformityAssessment": {
    "overview": "全医療機器はNMRAへの登録が必要。参照国認可（CE、FDA等）の保有が審査を円滑化する。外国メーカーはローカル代理人の指定が必要。",
    "routes": [
      {
        "name": "NMRA Device Registration (Consolidated Dossier)",
        "nameJa": "NMRA 医療機器登録（Consolidated Dossier）",
        "applicableClasses": [
          "Class A",
          "Class B",
          "Class C",
          "Class D"
        ],
        "description": "NMRAに Consolidated Dossier を提出。製造拠点登録（FMSA）・サンプル輸入・製品登録を一括申請。技術文書、参照国認可証明（CE/FDA等）、ISO 13485証明書、CFS等が必要。新規登録は最低6ヶ月、初回は1年間の暫定登録証が発行される。",
        "subtypes": [
          "新規登録（Consolidated Dossier）",
          "再登録（Re-registration）",
          "登録免除（Waiver of Registration）"
        ],
        "avgReviewTime": "最低6ヶ月（新規登録）",
        "avgReviewTimeSource": "https://omcmedical.com/sri-lanka-medical-device-registration",
        "fee": "要確認（公式情報で裏付け未取得）",
        "feeSource": null,
        "url": "https://www.nmra.gov.lk/pages/medical-devices"
      }
    ]
  },
  "electronicSubmission": {
    "system": "NMRA Google Form 経由の書類提出",
    "url": "https://docs.google.com/forms/d/e/1FAIpQLSf8-B5VcCc1VXW7WL0fUhRiiap2BH6fQ6DvN2a2Yj1JpzLXig/viewform",
    "description": "医療機器登録書類の提出は Google Form 経由のオンライン受付が開始されている。技術文書等は所定の様式で提出。",
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
      "system": "有害事象報告制度（NMRA）",
      "mandatory": true,
      "url": "https://www.nmra.gov.lk/announcements",
      "description": "NMRAへの有害事象報告が義務付けられている。報告様式・期限の詳細は要確認。"
    },
    "recalls": {
      "authority": "NMRA",
      "description": "NMRAの命令または自主リコール。リコールガイドラインが策定されている。",
      "url": "https://www.nmra.gov.lk/pages/guidelines"
    },
    "surveillance": "NMRAによる市販後監視。WHO支援の下で体制強化を推進中。"
  },
  "certificateOfFreeSale": {
    "available": false,
    "issuingAuthority": null,
    "name": null,
    "description": "スリランカからのCFS発行に関する公式制度は要確認。輸入登録時に製造国のCFS提出が求められる。",
    "processingTime": null,
    "url": null
  },
  "reimbursement": {
    "system": "政府主導型医療制度（公的医療機関 + 民間セクター）",
    "authority": "保健省（MOH）",
    "description": "公的医療機関での医療は基本的に無料。医療機器の個別償還制度は未整備。公共調達が中心。",
    "codingSystems": [],
    "url": null
  },
  "marketingRules": {
    "authority": "NMRA",
    "description": "医療機器広告に関する詳細法規は要確認。虚偽・誇大広告は一般法により禁止。",
    "keyRules": [
      "虚偽・誇大広告の禁止",
      "未登録機器の広告禁止"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "スリランカはMDSAPに参加していない。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "ISO 13485認証は登録時にQMS証明として重要視される。"
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
      "date": "2015-03",
      "title": "NMRA Act No. 5 of 2015 制定",
      "description": "NMRAの法的根拠を確立し、医療機器を正式に規制対象に含める法整備。2015年3月19日認証。"
    },
    {
      "date": "2025",
      "title": "Consolidated Dossier 制度の導入",
      "description": "2025年8月以降、新規医療機器登録は Consolidated Dossier（製造拠点登録・サンプル輸入・製品登録を一括申請）での提出が必須化。"
    }
  ],
  "lastUpdated": "2026-04-06",
  "verified": "2026-04-06"
};
