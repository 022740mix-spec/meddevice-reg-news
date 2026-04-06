// ハイチ (Haiti)
export default {
  "code": "HTI",
  "country": "ハイチ",
  "countryEn": "Haiti",
  "region": "Latam",
  "flag": "🇭🇹",
  "legalSystemOverview": {
    "type": "発展途上（医薬品法ベース・医療機器専用規制なし）",
    "description": "ハイチではMSPP（公衆衛生・人口省）傘下のDPM/MT（薬局・医薬品・伝統医学局）が医薬品規制を管轄するが、医療機器専用の規制枠組みは存在しない。1955年薬事法（Loi sur l'exercice de la Pharmacie）が基本法で、医薬品の製造・輸入・販売を規制。医療機器は輸入時にMSPPの承認が必要だが、体系的な登録・分類・審査制度は未整備。2014年国家医薬品政策（Politique Pharmaceutique Nationale）が政策枠組みを提供。CARICOM加盟国（2002年）だがCRS（カリブ海規制システム）の医療機器への適用は未確認。WHOファーマコビジランス国際医薬品モニタリングプログラムの準加盟国。",
    "keyCharacteristics": [
      "DPM/MT（MSPP内）が医薬品規制を管轄",
      "医療機器専用の規制枠組み・分類制度なし",
      "1955年薬事法が基本法（医薬品中心）",
      "医療機器輸入にはMSPP承認が必要",
      "AMM（市場承認）制度は医薬品のみ対象",
      "2023年に医薬品の製造・輸入・流通基準を更新",
      "CARICOM加盟国（2002年〜）",
      "WHOファーマコビジランス準加盟国",
      "国内医療機器製造なし（100%輸入依存）",
      "UDI・PMS・電子申請は未導入"
    ]
  },
  "authorities": [
    {
      "name": "DPM/MT",
      "fullName": "Direction de la Pharmacie, du Médicament et de la Médecine Traditionnelle",
      "localName": "Direction de la Pharmacie, du Médicament et de la Médecine Traditionnelle",
      "role": "医薬品の登録（AMM）・輸入許可・品質管理・流通規制を管轄。MSPP内の専門部署。医療機器の直接的な規制権限は限定的。",
      "url": "https://mspp.gouv.ht/newsite/_direction/index.php?IDDir=29",
      "isPrimary": true
    },
    {
      "name": "MSPP",
      "fullName": "Ministère de la Santé Publique et de la Population",
      "localName": "Ministère de la Santé Publique et de la Population",
      "role": "公衆衛生政策全般。医療機器・医療機材の輸入承認。DPM/MTの上位機関。",
      "url": "https://www.mspp.gouv.ht/",
      "isPrimary": false
    },
    {
      "name": "AGD",
      "fullName": "Administration Générale des Douanes",
      "localName": "Administration Générale des Douanes",
      "role": "税関管理。医療機器を含む全輸入品の通関手続き・関税徴収。SYDONIAシステムを運用。",
      "url": "https://douane.gouv.ht/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "なし（第三者認証制度なし）",
    "description": "Notified Body制度は存在しない。医療機器の体系的な適合性評価制度は未整備。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "医療機器の法的定義は未確立。医薬品法（1955年薬事法）は医薬品を対象としており、医療機器に関する明確な法的定義は存在しない。",
    "scope": "医療機器専用の規制範囲の定義なし。輸入時にMSPPの承認が必要とされるが、対象品目の明確な定義は未整備。",
    "notes": "WHO評価（2010年）でも医療機器規制の不在が指摘されている。"
  },
  "primaryLaw": {
    "title": "Loi sur l'exercice de la Pharmacie (1955)",
    "originalTitle": "Loi sur l'exercice de la Pharmacie",
    "enacted": "1955",
    "lastAmended": "要確認",
    "url": "https://mspp.gouv.ht/site/downloads/Loi%201955.pdf",
    "description": "1955年制定の薬事法。薬局業務の実施条件・医薬品の製造・販売を規制。医療機器に関する規定はないが、ハイチにおける医薬品規制の基本法として機能。現代の規制ニーズに対して不十分とされている。"
  },
  "implementingRegulations": [
    {
      "title": "Normes de fabrication, d'importation et de distribution des médicaments (2023)",
      "date": "2023",
      "url": "https://www.mspp.gouv.ht/dpmmt/docs/Normes_de_fabrication_d_importation_et_de_distribution_des_medicaments_2023.web.pdf",
      "description": "2023年版の医薬品の製造・輸入・流通に関する基準。DPM/MTが策定。医薬品の品質確保・流通管理の枠組みを規定。",
      "category": "製造・輸入・流通基準"
    },
    {
      "title": "Politique Pharmaceutique Nationale (2014)",
      "date": "2014-09",
      "url": "https://mspp.gouv.ht/site/downloads/PPN%20final%20mars%202015.pdf",
      "description": "2014年策定の国家医薬品政策。医薬品の供給・品質・アクセス・適正使用を柱とする政策枠組み。必須医薬品リスト（LNME）の策定を含む。",
      "category": "国家医薬品政策"
    }
  ],
  "relatedLaws": [
    {
      "title": "Loi Organique du MSPP",
      "category": "組織法",
      "enacted": "要確認",
      "url": "https://extranet.who.int/countryplanningcycles/sites/default/files/country_docs/Haiti/haiti_politique_national_de_sante_2012.pdf",
      "relevance": "MSPP（公衆衛生・人口省）の組織・権限を規定する組織法。DPM/MTの設置根拠。"
    }
  ],
  "classification": {
    "system": "分類制度なし",
    "basis": "医療機器のリスクベース分類制度は存在しない。体系的な分類規則・ガイダンスは未策定。",
    "classes": [
      {
        "name": "未分類",
        "nameJa": "分類制度なし",
        "riskLevel": "未定義",
        "description": "医療機器の分類制度が存在しないため、全ての医療機器が同一の扱い（輸入時のMSPP承認）となる。リスクに応じた差別化された規制要件はない。",
        "examples": ["全ての医療機器"],
        "approvalPath": "MSPP輸入承認"
      }
    ],
    "rules": [
      "分類規則なし",
      "リスクベース分類制度は未整備"
    ],
    "totalProductCodes": null
  },
  "conformityAssessment": {
    "overview": "医療機器専用の適合性評価制度は存在しない。医療機器の輸入にはMSPPの承認が必要。具体的な技術的審査プロセスは未整備。医薬品についてはAMM（Autorisation de Mise sur le Marché）制度がDPM/MTにより運用されているが、医療機器は対象外。",
    "routes": [
      {
        "name": "MSPP Import Approval",
        "nameJa": "MSPP輸入承認",
        "applicableClasses": ["未分類"],
        "description": "医療機器・医療機材の輸入にはMSPPの承認が必要。製造国での認証情報（CFS等）の提出が求められる場合がある。体系的な技術審査プロセスは未確立。",
        "subtypes": [],
        "avgReviewTime": "要確認（公式情報で裏付け未取得）",
        "avgReviewTimeSource": "https://www.trade.gov/country-commercial-guides/haiti-import-requirements-documentation",
        "fee": "要確認（公式情報で裏付け未取得）",
        "feeSource": "https://www.trade.gov/country-commercial-guides/haiti-import-requirements-documentation",
        "url": "https://www.trade.gov/country-commercial-guides/haiti-import-requirements-documentation"
      }
    ]
  },
  "electronicSubmission": {
    "system": "なし（SYDONIAは税関のみ）",
    "url": null,
    "description": "医療機器の電子申請制度は未導入。税関手続きにはSYDONIAシステムが使用されるが、医療機器の規制申請には対応していない。医薬品のAMM申請はDPM/MTに紙ベースで提出。",
    "mandatory": false
  },
  "udi": {
    "required": false,
    "system": "未導入",
    "description": "UDI制度は未導入。関連法令・規則・データベースなし。",
    "url": null,
    "timeline": "未定"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "WHOファーマコビジランス準加盟（医薬品中心）",
      "mandatory": false,
      "url": "https://who-umc.org/about-the-who-programme-for-international-drug-monitoring/member-countries/",
      "description": "ハイチはWHO国際医薬品モニタリングプログラム（PIDM）の準加盟国。医薬品の有害事象報告をVigiBaseに提出する枠組みがあるが、医療機器専用のテクノビジランス（医療機器監視）制度は存在しない。DPM/MTがファーマコビジランス業務を担当（能力・リソースは限定的）。"
    },
    "recalls": {
      "authority": "MSPP / DPM/MT",
      "description": "体系的なリコール制度は未確認。安全性問題が発覚した場合のMSPPによる措置は可能だが、専用の手続き・データベースは未整備。",
      "url": "https://mspp.gouv.ht/newsite/_direction/index.php?IDDir=29"
    },
    "surveillance": "医療機器専用の市販後監視（PMS）制度は存在しない。医薬品についてもファーマコビジランス体制は発展途上。"
  },
  "certificateOfFreeSale": {
    "available": false,
    "issuingAuthority": null,
    "name": null,
    "description": "ハイチには国内医療機器製造がなく、輸出用CFSの発行制度は存在しない。",
    "processingTime": null,
    "url": null
  },
  "reimbursement": {
    "system": "公的医療保険制度未整備",
    "authority": "MSPP",
    "description": "ハイチには包括的な公的医療保険制度が存在しない。公立病院での基本的な医療サービスは原則無料だが、医療機器の償還制度はない。医療サービスの多くをNGO・国際機関が支援。OFATMA（労災保険公社）が労働者向けの限定的な医療保険を提供。",
    "codingSystems": [
      "なし"
    ],
    "url": "https://www.ofatma.gouv.ht/Cadre_legal"
  },
  "marketingRules": {
    "authority": "DPM/MT / MSPP",
    "description": "医療機器専用の広告・マーケティング規制は未確認。医薬品については1955年薬事法に基づく規制が存在。公用語はフランス語・ハイチクレオール語。",
    "keyRules": [
      "公用語はフランス語・ハイチクレオール語",
      "医薬品の虚偽広告は薬事法で禁止",
      "医療機器専用のラベリング要件は未整備"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "ハイチはMDSAPに参加していない。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": false,
      "notes": "ISO 13485の受入れに関する公式な規定は未確認。医療機器QMS要件は未整備。"
    },
    "iso14971": {
      "accepted": false,
      "notes": "リスクマネジメント規格に関する公式な要件は未確認。"
    },
    "iec62304": {
      "accepted": false,
      "notes": "ソフトウェア医療機器に関する規格要件は未確認。"
    },
    "iec60601": {
      "accepted": false,
      "notes": "医用電気機器の安全規格に関する公式な要件は未確認。"
    },
    "others": [
      "ハイチには国家標準化機関が未整備",
      "製造国での認証（FDA/CE等）が輸入時に参照される場合がある"
    ]
  },
  "recentDevelopments": [
    {
      "date": "2026-02",
      "title": "EU・PAHO・保健省によるカリブ海医薬品規制強化ワークショップ",
      "description": "ジョージタウンで開催されたカリブ海地域の規制強化ワークショップにハイチも参加。国家・超国家規制システムの強化に焦点。主に医薬品・生物学的製剤が対象。"
    },
    {
      "date": "2025-03",
      "title": "PAHO-CARPHAカリブ海規制システム強化ワークショップ",
      "description": "PAHOとCARPHAが共催したカリブ海国家・超国家規制システム強化ワークショップ。ハイチを含むCARICOM加盟国が参加。"
    },
    {
      "date": "2024-06",
      "title": "PAHO医薬品規制オリエンテーションセミナー開催",
      "description": "PAHOがハイチの薬学分野の将来のリーダー育成を目的とした医薬品規制オリエンテーションセミナーを開催。規制人材の強化を推進。"
    },
    {
      "date": "2023",
      "title": "医薬品の製造・輸入・流通基準の更新",
      "description": "DPM/MTが「Normes de fabrication, d'importation et de distribution des médicaments」（2023年版）を策定。医薬品の品質確保・流通管理の枠組みを更新。"
    }
  ],
  "lastUpdated": "2026-04-06",
  "verified": null
};
