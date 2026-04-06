// ブルキナファソ (Burkina Faso)
export default {
  "code": "BFA",
  "country": "ブルキナファソ",
  "countryEn": "Burkina Faso",
  "region": "Middle East & Africa",
  "flag": "🇧🇫",
  "legalSystemOverview": {
    "type": "政府審査型（医薬品規制の一部として運用）",
    "description": "ブルキナファソではANRP（国家医薬品規制庁、2018年設立）が医療機器を含む医薬品セクター全体の規制を管轄。独立した医療機器法はなく、Loi 23/94/ADP（公衆衛生法典）が法的根拠。DGPML（医薬品・医薬品・研究所総局）が政策立案、ANRPが登録・査察・品質管理を担当。公式な医療機器分類制度は未整備で、UEMOA地域ガイドラインおよび国際認証（CE/FDA/WHO PQ）への依存度が高い。CTDフォーマット・フランス語で申請。2020年にAMA条約を批准。",
    "keyCharacteristics": [
      "ANRP（2018年設立）がNRA",
      "独立した医療機器法なし（公衆衛生法典の一部として規制）",
      "公式な医療機器分類制度は未整備（UEMOA/国際認証に依存）",
      "CTDフォーマット・フランス語で登録申請",
      "現地Authorized Representative（輸入業者）が必要",
      "登録審査期間9〜18か月",
      "CAMEG（中央医薬品購入機関）が公的調達を一元管理",
      "フランス語ラベリング必須",
      "2020年AMA条約批准（アフリカ域内で早期批准国）",
      "UEMOA加盟国（地域規制harmonization推進中）"
    ]
  },
  "authorities": [
    {
      "name": "ANRP",
      "fullName": "National Agency for Pharmaceutical Regulation",
      "localName": "Agence Nationale de Régulation Pharmaceutique",
      "role": "NRA: 医薬品・医療機器の登録（市販承認）・品質管理・製造施設査察・輸入監視・薬事監視・pharmacovigilance。2018年Décret 2018-0861により設立された独立行政法人。",
      "url": "https://anrp.info/",
      "isPrimary": true
    },
    {
      "name": "DGPML",
      "fullName": "General Directorate of Pharmacy, Medicine and Laboratories",
      "localName": "Direction Générale de la Pharmacie, du Médicament et des Laboratoires",
      "role": "医薬政策立案・規制枠組み策定・セクター監督。保健省傘下。ANRPへの規制機能移管が進行中。",
      "url": "https://www.sante.gov.bf/detail-structure?tx_news_pi1%5Baction%5D=detail&tx_news_pi1%5Bcontroller%5D=News&tx_news_pi1%5Bnews%5D=49&cHash=df6fbcfd7a646485bdb754791eafece4",
      "isPrimary": false
    },
    {
      "name": "LNSP",
      "fullName": "National Public Health Laboratory",
      "localName": "Laboratoire National de Santé Publique",
      "role": "医薬品・医療機器・消耗品の品質検査。物理化学的・微生物学的・毒性学的分析。衛生品質証明書発行。",
      "url": "https://www.lnsp.gov.bf/lnsp/presentation",
      "isPrimary": false
    },
    {
      "name": "CAMEG",
      "fullName": "Central Purchasing Agency for Essential Generic Medicines and Medical Consumables",
      "localName": "Centrale d'Achat des Médicaments Essentiels Génériques et des Consommables Médicaux",
      "role": "公立医療施設向け医薬品・医療機器・消耗品の一元調達・供給。1992年バマコ・イニシアチブに基づき設立。",
      "url": "https://ghsupplychain.org/country-profile/burkina-faso",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "政府直接審査（NB制度なし）",
    "description": "ANRPが直接審査。第三者認証機関制度は存在しない。FDA承認・CEマーキング・WHO事前認定が事実上認められる。LNSPが品質検査を実施。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "Loi 23/94/ADP（公衆衛生法典）に医薬品・医療機器の一般的定義が含まれる。医療機器に特化した独立した法的定義は限定的。",
    "scope": "医療外科機器・IVD・医療消耗品・試薬が対象。",
    "notes": "UEMOA地域ガイドラインにおける医療機器定義も参照される。ANRPが2018年以降、規制機能をDGPMLから段階的に引き継ぎ中。"
  },
  "primaryLaw": {
    "title": "Loi n° 23/94/ADP portant Code de la Santé publique",
    "originalTitle": "Loi portant Code de la Santé publique",
    "enacted": "1994",
    "lastAmended": null,
    "url": "https://faolex.fao.org/docs/pdf/bkf197387.pdf",
    "description": "公衆衛生法典。医薬品・医療機器の規制、薬局業務、伝統医療、pharmacovigilance等の法的根拠。1994年5月19日公布。"
  },
  "implementingRegulations": [
    {
      "title": "Décret n° 2018-0861/PRES/PM/MINEFID/MS portant création de l'ANRP",
      "date": "2018-10",
      "url": "https://www.iburkina.com/2018/07/conseil-des-ministres-du-18-juillet-2018-creation-de-lanrp-pour-reglementer-le-secteur-pharmaceutique/",
      "description": "国家医薬品規制庁（ANRP）設立政令。法人格・行政的・財政的自律性を持つ公的機関として設立。UEMOA・WHO勧告に準拠。2018年7月18日閣議で採択。",
      "category": "ANRP設立法"
    },
    {
      "title": "Décret n° 2018-0911/PRES/PM/MINEFID/MS portant statuts particuliers de l'ANRP",
      "date": "2018-10",
      "url": "https://santeactu.bf/burkina-creation-dune-agence-nationale-de-regulation-pharmaceutique/",
      "description": "ANRP特別規程。組織構成・職員規程・運営体制を規定。",
      "category": "ANRP組織規程"
    },
    {
      "title": "Décret n° 2012-1033/PRES/PM/MS portant création du système national de vigilance des produits de santé",
      "date": "2012-12",
      "url": "https://link.springer.com/article/10.1007/s40267-024-01078-5",
      "description": "国家医療製品監視（pharmacovigilance）制度設立政令。CNVPS（国家医療製品監視センター）を中核に、13地域・70地区の拠点を配置。",
      "category": "Pharmacovigilance"
    }
  ],
  "relatedLaws": [
    {
      "title": "Politique Pharmaceutique Nationale (PPN) 2012",
      "category": "国家医薬品政策",
      "enacted": "2012",
      "url": "https://www.sante.gov.bf/fileadmin/user_upload/storages/politique_pharmaceutique_version_soumise_en_cm__16_mars_2012.pdf",
      "relevance": "第2次国家医薬品政策。医薬品・医療機器の品質・安全性・アクセス改善を目的。初版は1996年。"
    },
    {
      "title": "Plan Stratégique Pharmaceutique 2019-2023",
      "category": "医薬品戦略計画",
      "enacted": "2019",
      "url": "https://www.sante.gov.bf/fileadmin/user_upload/storages/plan_strategique_pharmaceuti_que_2019-2023_vf__adopte.pdf",
      "relevance": "医薬品セクター戦略計画。規制強化、品質管理、地場生産推進、市場監視の枠組み。GMP導入ロードマップを含む。"
    }
  ],
  "classification": {
    "system": "未整備（UEMOA/国際認証に依存）",
    "basis": "公式な国内分類規則は未整備。UEMOA地域ガイドラインが医療機器の分類・市販承認・安全性/性能要件を規定しており、ブルキナファソもこれを採用。実務的にはFDA承認・CEマーキング・WHO PQ品が優先的に受入。",
    "classes": [
      {
        "name": "Class I",
        "nameJa": "クラスI（UEMOA参考）",
        "riskLevel": "低",
        "description": "低リスク。UEMOA/国際認証に基づく評価。",
        "examples": ["弾性包帯", "聴診器", "車椅子", "舌圧子", "非滅菌手袋"],
        "approvalPath": "ANRP登録（Homologation）"
      },
      {
        "name": "Class II",
        "nameJa": "クラスII（UEMOA参考）",
        "riskLevel": "中低",
        "description": "中リスク。UEMOA/国際認証に基づく評価。",
        "examples": ["補聴器", "血圧計", "手術用手袋", "注射器", "カテーテル"],
        "approvalPath": "ANRP登録（Homologation）"
      },
      {
        "name": "Class III",
        "nameJa": "クラスIII（UEMOA参考）",
        "riskLevel": "中高",
        "description": "高リスク。UEMOA/国際認証に基づく評価。",
        "examples": ["人工呼吸器", "輸液ポンプ", "血液透析装置", "X線装置", "骨接合プレート"],
        "approvalPath": "ANRP登録（Homologation）"
      },
      {
        "name": "Class IV",
        "nameJa": "クラスIV（UEMOA参考）",
        "riskLevel": "高",
        "description": "最高リスク。UEMOA/国際認証に基づく評価。",
        "examples": ["人工心臓弁", "冠動脈ステント", "人工股関節", "植込み型除細動器", "吸収性縫合糸"],
        "approvalPath": "ANRP登録（Homologation）"
      }
    ],
    "rules": [
      "公式な国内分類規則は未整備",
      "UEMOA地域ガイドラインを採用",
      "FDA承認・CEマーキング・WHO PQを事実上認容"
    ],
    "totalProductCodes": null
  },
  "conformityAssessment": {
    "overview": "ANRPによる登録（Homologation/AMM）制度。CTDフォーマットでフランス語にて提出。現地輸入業者（Authorized Representative）が必要。輸入品はCAMEGまたは認可輸入業者を通じて流通。LNSPが品質検査を実施。",
    "routes": [
      {
        "name": "Homologation (AMM)",
        "nameJa": "登録（市販承認）",
        "applicableClasses": ["Class I", "Class II", "Class III", "Class IV"],
        "description": "CTDフォーマット・フランス語で申請。原産国のCFS（自由販売証明書）、品質証明書（ISO 13485等）、安全性データが必要。公立施設向けはCAMEGを通じた調達が中心。",
        "subtypes": [],
        "avgReviewTime": "9〜18か月（ファイル適合度に依存）",
        "avgReviewTimeSource": "http://www.arema-international.com/pays.php?id=8",
        "fee": "要確認（公式情報で裏付け未取得）",
        "feeSource": "要確認",
        "url": "https://anrp.info/?page_id=184"
      }
    ]
  },
  "electronicSubmission": {
    "system": "紙ベース申請（専用電子ポータルなし）",
    "url": "https://www.usp-pqmplus.org/where-we-work/burkina-faso",
    "description": "登録申請は基本的に紙ベース・直接提出。専用の医療機器電子申請ポータルは未確���。ANRPウェブサイトの連絡先ページから問い合わせ可能。",
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
      "system": "Pharmacovigilance — CNVPS / ANRP",
      "mandatory": true,
      "url": "https://link.springer.com/article/10.1007/s40267-024-01078-5",
      "description": "Décret 2012-1033により国家医療製品監視制度を設立。CNVPS（国家医療製品監視センター）が中核機関。13地域・70地区にpharmacovigilance拠点を配置。2010年にWHO国際医薬品モニタリングプログラムに正式加盟（Uppsala Monitoring Centre）。Med Safetyアプリ・紙ベース報告票・直接提出で報告。医療機器に特化したmatériovigilance制度は発展途上。"
    },
    "recalls": {
      "authority": "ANRP",
      "description": "ANRPが市場安全措置・リコールを実施。LNSPが品質検査を支援。2026年3月にはDanone社乳児用栄養製品のリコール措置を実施。",
      "url": "https://burkina-faso.news-pravda.com/burkina-faso/2026/03/31/63264.html"
    },
    "surveillance": "Pharmacovigilance制度は存在するが、医療機器に特化した市販後監視制度は未整備。PQM+プログラムがANRPの市販後監視能力強化を支援中。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "ANRP（推定）",
    "name": "Certificat de Libre Vente",
    "description": "CFS発行制度の公式詳細は未確認。輸入登録時に原産国のCFSが求められる慣行。",
    "processingTime": "要確��（公式情報で裏付け未取得）",
    "url": "https://www.leemafrique.org/fr/reglementation-pharmaceutique-au-burkina.asp"
  },
  "reimbursement": {
    "system": "公的調達中心（CAMEG） + 国家健康保険制度（発展途上）",
    "authority": "CAMEG / Ministère de la Santé",
    "description": "公立医療施設への医療機器調達はCAMEG（中央医薬品購入機関、1992年設立）が一元管理。バマコ・イニシアチブに基づくコストリカバリー方式。2023年にArrêté conjoint n°2023-00164で必須医療消耗品の価格を設定。国民皆保険制度は発展途上で、医療機器特有の償還体系は未確認。",
    "codingSystems": [],
    "url": "https://ghsupplychain.org/country-profile/burkina-faso"
  },
  "marketingRules": {
    "authority": "ANRP",
    "description": "フランス語ラベリング必須。申請書類はCTDフォーマット・フランス語。輸入業者はANRP認可を事前取得。Arrêté n°2017-458で医薬品・医薬製品の広告条件を規定。",
    "keyRules": [
      "フランス語ラベリング必須",
      "申請書類: CTDフォーマット・フランス語",
      "輸入業者: ANRP認可必須",
      "医薬品広告: Arrêté n°2017-458に基づく規制",
      "CAMEG以外の輸入業者は個別認可必要"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "MDSAP非参加。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "参照されるが、国内法で明示的に義務化されているかは未確認。"
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
      "FDA承認・CEマーキング・WHO PQを事実上認容",
      "UEMOA地域ガイドラインに準拠"
    ]
  },
  "recentDevelopments": [
    {
      "date": "2024-10",
      "title": "必須医薬品価格改定（Arrêté conjoint N°2024-00506）",
      "description": "必須ジェネリック医薬品の価格制度を改定。医療消耗品の価格設定（2023年Arrêté n°2023-00164）とともに、アクセス改善政策を推進。"
    },
    {
      "date": "2020-07",
      "title": "AMA条約批准",
      "description": "ブルキナファソがAfrican Medicines Agency（AMA）条約の批准書をAU委員長に寄託（2020年7月9日）。アフリカ域内で早期批准国の一つ。AMAは2021年11月に発効。"
    },
    {
      "date": "2018-10",
      "title": "ANRP（国家医薬品規制庁）設立",
      "description": "Décret 2018-0861によりANRPを設立。DGPMLから規制機能を移管し、独立した規制機関として医薬品・医療機器セクターの登録・査察・品質管理を担当。UEMOA・WHO勧告に準拠。"
    }
  ],
  "lastUpdated": "2026-04-06",
  "verified": null
};
