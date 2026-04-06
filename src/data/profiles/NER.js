// ニジェール (Niger)
export default {
  "code": "NER",
  "country": "ニジェール",
  "countryEn": "Niger",
  "region": "Middle East & Africa",
  "flag": "🇳🇪",
  "legalSystemOverview": {
    "type": "政府審査型（医薬品規制の一部として運用）",
    "description": "ニジェールではANRP（ニジェール医薬品セクター規制庁、2022年設立）が医療機器を含む医薬品セクター全体の規制を管轄。独立した医療機器法はなく、Ordonnance 97-002（医薬品法）が法的根拠。2021年のArrêté n°024が医療機器の分類・安全性要件・販売承認手続きを具体的に規定。UEMOA加盟国として地域規制harmonizationに参加。フランス語で申請。2021年にAMA条約を批准。",
    "keyCharacteristics": [
      "ANRP（2022年設立）がNRA",
      "独立した医療機器法なし（医薬品法の一部として規制）",
      "Arrêté n°024（2021年）が医療機器を具体的に規制",
      "CTDフォーマット・フランス語で登録申請",
      "現地輸入業者（Authorized Representative）が必要",
      "ONPPC（国立医薬品化学品事務所）が公的調達・配送を一元管理",
      "フランス語ラベリング必須",
      "2021年AMA条約批准（11番目の批准国）",
      "UEMOA加盟国（地域規制harmonization推進中）",
      "LANSPEX（国立公衆衛生・鑑定研究所）が品質検査を実施"
    ]
  },
  "authorities": [
    {
      "name": "ANRP",
      "fullName": "Niger Pharmaceutical Sector Regulation Agency",
      "localName": "Agence Nigérienne de Réglementation du Secteur Pharmaceutique",
      "role": "NRA: 医薬品・医療機器の登録（市販承認）・品質管理・製造施設査察・輸入監視・薬事監視。Décret N°2022-539（2022年6月29日）により公的行政機関として設立。Décret N°2022-915（2022年11月30日）で組織規程を承認。",
      "url": "https://anrp.ne/",
      "isPrimary": true
    },
    {
      "name": "DPHMT",
      "fullName": "Directorate of Pharmacy and Traditional Medicine",
      "localName": "Direction de la Pharmacie et de la Médecine Traditionnelle",
      "role": "医薬政策立案・規制枠組み策定。保健省傘下。ANRPへの規制機能移管が進行中。Arrêté n°024（2021年）を含む規制テキストの策定・公表を担当。",
      "url": "https://www.sante.gouvne.org/direction-de-la-pharmacie-et-de-la-medecine-traditionnelle-dph-mt/",
      "isPrimary": false
    },
    {
      "name": "LANSPEX",
      "fullName": "National Public Health and Expertise Laboratory",
      "localName": "Laboratoire National de Santé Publique et d'Expertise",
      "role": "医薬品・医療機器・食品・水質の品質検査。ISO/CEI 17025:2017認定。WHO事前認定参照ラボ。ブルンジ・チャド・中央アフリカ・ルワンダ・トーゴにもサービス提供。",
      "url": "https://lca.logcluster.org/12-niger-regulatory-departments-quality-control",
      "isPrimary": false
    },
    {
      "name": "ONPPC",
      "fullName": "National Office for Pharmaceutical and Chemical Products",
      "localName": "Office National des Produits Pharmaceutiques et Chimiques",
      "role": "必須医薬品・医療機器・消耗品の一元調達・保管・配送。公立医療施設向けサプライチェーンの中核。ドナー資金による優先プログラム用と一般供給の2系統を運営。",
      "url": "https://www.severemalaria.org/niger-supply-chain",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "政府直接審査（NB制度なし）",
    "description": "ANRPが直接審査。第三者認証機関制度は存在しない。FDA承認・CEマーキング・WHO事前認定が事実上認容される。LANSPEXが品質検査を実施。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "Arrêté n°024（2021年3月11日）のAnnexe Iにおいて、医療機器（dispositifs médicaux）の用語・概念が定義されている。Ordonnance 97-002（医薬品法）が上位法的根拠。",
    "scope": "人体用医療機器（dispositifs médicaux à usage de la médecine humaine）が対象。IVD・医療消耗品・試薬を含む。",
    "notes": "Arrêté n°024のAnnexe IIが分類規則、Annexe IIIが安全性・性能要件、Annexe IVが販売業者認可条件、Annexe Vが販売承認（Homologation）申請書類を規定。"
  },
  "primaryLaw": {
    "title": "Ordonnance n° 97-002 du 10 janvier 1997 portant législation pharmaceutique",
    "originalTitle": "Ordonnance portant législation pharmaceutique",
    "enacted": "1997",
    "lastAmended": null,
    "url": "https://www.ecolex.org/fr/details/legislation/ordonnance-n-97-002-du-10-janvier-1997-portant-legislation-pharmaceutique-lex-faoc187530/",
    "description": "医薬品法。医薬品・医療機器の登録、調剤、製造、輸入・流通、広告、薬剤師業務の一般条件等を規定。1997年1月10日公布。伝統医療の法的認知も含む。"
  },
  "implementingRegulations": [
    {
      "title": "Arrêté n°024 du 11 mars 2021 portant réglementation des dispositifs médicaux à usage de la médecine humaine",
      "date": "2021-03",
      "url": "https://leemafrique.org/fr/reglement.asp?drapeau=dp_niger.png&select_sujet=&select_zone=Niger",
      "description": "人体用医療機器規制令。5つの附属書で構成: Annexe I（用語・概念定義）、Annexe II（分類規則）、Annexe III（安全性・性能要件）、Annexe IV（輸入・流通・保守業者認可条件）、Annexe V（Homologation申請書類）。",
      "category": "医療機器規制"
    },
    {
      "title": "Décret N°2022-539/PRN/MSP/P/AS portant création de l'ANRP",
      "date": "2022-06",
      "url": "https://agendaniamey.com/le-niger-creee-une-agence-de-reglementation-pour-controler-les-produits-medicaux/amp/",
      "description": "ANRP（ニジェール医薬品セクター規制庁）設立政令。公的行政機関として設立。2022年6月29日閣議で採択。2020年UEMOA指令に基づく加盟国への規制当局設置要件を充足。",
      "category": "ANRP設立法"
    },
    {
      "title": "Décret N°2022-915/PRN/MSP/P/AS portant approbation des statuts de l'ANRP",
      "date": "2022-11",
      "url": "https://www.actuniger.com/politique/18309-communique-du-conseil-des-ministres-du-mercredi-29-juin-2022.html",
      "description": "ANRP組織規程承認政令。2022年11月30日公布。組織構成・職員規程・運営体制を規定。",
      "category": "ANRP組織規程"
    },
    {
      "title": "Décret n° 97-301/PRN/MSP du 6 août 1997 portant modalités d'application de l'Ordonnance 97-002",
      "date": "1997-08",
      "url": "https://www.informea.org/en/content/legislation/ordonnance-ndeg-97-002-du-10-janvier-1997-portant-legislation-pharmaceutique",
      "description": "Ordonnance 97-002の施行細則。医薬品登録・薬局業務・製造・輸入の具体的な手続きを規定。",
      "category": "施行細則"
    }
  ],
  "relatedLaws": [
    {
      "title": "Rapport d'autoévaluation des fonctions réglementaires pharmaceutiques (WHO GBT)",
      "category": "規制能力自己評価",
      "enacted": "2021",
      "url": "https://www.nepad.org/nepad-oncontinent/african-medicines-regulatory-harmonisation-amrh-niger",
      "relevance": "2021年3月にWHO Global Benchmarking Toolによる8つの規制機能の自己評価を実施。登録、ビジランス、市場監視、施設認可、査察、検査、臨床試験監督を評価。"
    },
    {
      "title": "Manuel Qualité LANSPEX (ISO/CEI 17025:2017)",
      "category": "品質管理基準",
      "enacted": "2020",
      "url": "https://lca.logcluster.org/12-niger-regulatory-departments-quality-control",
      "relevance": "LANSPEX品質マニュアル。ISO/CEI 17025:2017基準に基づく品質管理体制。WHO事前認定プロセスの参照ラボとして認定。"
    }
  ],
  "classification": {
    "system": "Arrêté n°024に基づく分類（UEMOA/国際認証に依存）",
    "basis": "Arrêté n°024（2021年）のAnnexe IIが医療機器の分類規則を規定。具体的なクラス分類体系は同附属書に定められているが、詳細な分類規則の公開は限定的。実務的にはUEMOA地域ガイドラインおよび国際認証（CE/FDA/WHO PQ）に依存。",
    "classes": [
      {
        "name": "Class I",
        "nameJa": "クラスI（低リスク）",
        "riskLevel": "低",
        "description": "低リスク医療機器。Arrêté n°024 Annexe IIに基づく分類。",
        "examples": ["弾性包帯", "聴診器", "車椅子", "舌圧子", "非滅菌手袋"],
        "approvalPath": "ANRP登録（Homologation）"
      },
      {
        "name": "Class II",
        "nameJa": "クラスII（中リスク）",
        "riskLevel": "中",
        "description": "中リスク医療機器。Arrêté n°024 Annexe IIに基づく分類。",
        "examples": ["補聴器", "血圧計", "手術用手袋", "注射器", "カテーテル"],
        "approvalPath": "ANRP登録（Homologation）"
      },
      {
        "name": "Class III",
        "nameJa": "クラスIII（中高リスク）",
        "riskLevel": "中高",
        "description": "中高リスク医療機器。Arrêté n°024 Annexe IIに基づく分類。",
        "examples": ["人工呼吸器", "輸液ポンプ", "血液透析装置", "X線装置", "骨接合プレート"],
        "approvalPath": "ANRP登録（Homologation）"
      },
      {
        "name": "Class IV",
        "nameJa": "クラスIV（高リスク）",
        "riskLevel": "高",
        "description": "最高リスク医療機器。Arrêté n°024 Annexe IIに基づく分類。",
        "examples": ["人工心臓弁", "冠動脈ステント", "人工股関節", "植込み型除細動器", "吸収性縫合糸"],
        "approvalPath": "ANRP登録（Homologation）"
      }
    ],
    "rules": [
      "Arrêté n°024（2021年）Annexe IIが分類規則を規定",
      "UEMOA地域ガイドラインも参照",
      "FDA承認・CEマーキング・WHO PQを事実上認容"
    ],
    "totalProductCodes": null
  },
  "conformityAssessment": {
    "overview": "ANRPによる登録（Homologation）制度。Arrêté n°024のAnnexe Vに基づく書類で申請。フランス語での提出が必要。現地輸入業者が必要。Arrêté n°024のAnnexe IVに基づく業者認可（輸入・流通・保守）も前提条件。LANSPEXが品質検査を実施。",
    "routes": [
      {
        "name": "Homologation",
        "nameJa": "販売承認（Homologation）",
        "applicableClasses": ["Class I", "Class II", "Class III", "Class IV"],
        "description": "Arrêté n°024 Annexe Vに基づく申請。原産国のCFS（自由販売証明書）、品質証明書（ISO 13485等）、安全性・性能データが必要。Annexe IVに基づく輸入業者認可が前提。公立施設向けはONPPCを通じた調達が中心。",
        "subtypes": [],
        "avgReviewTime": "要確認（公式情報で裏付け未取得）",
        "avgReviewTimeSource": "要確認",
        "fee": "要確認（公式情報で裏付け未取得）",
        "feeSource": "要確認",
        "url": "https://leemafrique.org/fr/reglement.asp?drapeau=dp_niger.png&select_sujet=&select_zone=Niger"
      }
    ]
  },
  "electronicSubmission": {
    "system": "紙ベース申請（専用電子ポータルなし）",
    "url": "https://www.sante.gouvne.org/direction-de-la-pharmacie-et-de-la-medecine-traditionnelle-dph-mt/",
    "description": "登録申請は基本的に紙ベース・直接提出。専用の医療機器電子申請ポータルは未確認。SIPHN（医薬品施設情報システム）が薬局・卸売業者の管理に使用されているが、医療機器登録への適用は未確認。",
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
      "system": "Pharmacovigilance — ANRP",
      "mandatory": true,
      "url": "https://www.anp.ne/niger-25-produits-pharmaceutiques-retires-du-marche-anrp/",
      "description": "ANRPがpharmacovigilance機能を担当。WHO GBT自己評価（2021年3月）でビジランス機能を評価対象に含む。医療機器に特化したmatériovigilance制度は発展途上。WHO国際医薬品モニタリングプログラムとの連携状況は要確認。"
    },
    "recalls": {
      "authority": "ANRP",
      "description": "ANRPが市場安全措置・リコールを実施。2023年には約25の医薬品を市場から回収した実績あり。LANSPEXが品質検査を支援。",
      "url": "https://www.anp.ne/niger-25-produits-pharmaceutiques-retires-du-marche-anrp/"
    },
    "surveillance": "Pharmacovigilance制度は存在するが、医療機器に特化した市販後監視制度は未整備。WHO GBT自己評価を2021年に実施し、規制能力強化に取り組み中。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "ANRP（推定）",
    "name": "Certificat de Libre Vente",
    "description": "CFS発行制度の公式詳細は未確認。輸入登録時に原産国のCFSが求められる慣行。",
    "processingTime": "要確認（公式情報で裏付け未取得）",
    "url": "https://pharmexcil.com/uploadfile/ufiles/REGISTRATIONS/NIGER_Registrationcertficate.pdf"
  },
  "reimbursement": {
    "system": "公的調達中心（ONPPC）",
    "authority": "ONPPC / Ministère de la Santé Publique",
    "description": "公立医療施設への医療機器調達はONPPC（国立医薬品化学品事務所）が一元管理。ドナー資金による優先プログラム用と一般供給の2系統で運営。国家必須医薬品リスト（LNME）に基づく調達。国民皆保険制度は発展途上で、医療機器特有の償還体系は未確認。",
    "codingSystems": [],
    "url": "https://www.severemalaria.org/niger-supply-chain"
  },
  "marketingRules": {
    "authority": "ANRP",
    "description": "フランス語ラベリング必須。申請書類はフランス語で提出。輸入業者はArrêté n°024 Annexe IVに基づくANRP認可を事前取得。医薬品・伝統薬の広告は事前許可制（2020年ONC通達）。",
    "keyRules": [
      "フランス語ラベリング必須",
      "申請書類: フランス語",
      "輸入業者: Arrêté n°024 Annexe IVに基づく認可必須",
      "医薬品広告: 事前許可制",
      "公的調達: ONPPC経由"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "MDSAP非参加。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "Arrêté n°024 Annexe IIIの安全性・性能要件で参照される。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "明示的言及は未確認。国際基準として参照可能。"
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
      "UEMOA地域ガイドラインに準拠",
      "LANSPEX: ISO/CEI 17025:2017認定"
    ]
  },
  "recentDevelopments": [
    {
      "date": "2022-11",
      "title": "ANRP組織規程承認（Décret N°2022-915）",
      "description": "ANRP（ニジェール医薬品セクター規制庁）の組織規程がDécret N°2022-915により承認。2022年11月30日公布。DPHMTからの規制機能移管が本格化。"
    },
    {
      "date": "2022-06",
      "title": "ANRP設立（Décret N°2022-539）",
      "description": "2022年6月29日閣議でANRP設立政令を採択。2020年UEMOA指令に基づく加盟国への規制当局設置要件を充足。Dr. DAN NOUHOU Barinaが初代長官に就任。"
    },
    {
      "date": "2021-08",
      "title": "AMA条約批准書寄託",
      "description": "ニジェールがAfrican Medicines Agency（AMA）条約の批准書をAU委員長に寄託（2021年8月12日、アディスアベバ）。11番目の批准国。条約は2021年11月5日に発効。"
    },
    {
      "date": "2021-03",
      "title": "医療機器規制令（Arrêté n°024）公布",
      "description": "Arrêté n°024（2021年3月11日）により人体用医療機器の規制枠組みを整備。分類規則・安全性要件・業者認可条件・Homologation手続きを5つの附属書で規定。"
    },
    {
      "date": "2021-03",
      "title": "WHO GBT規制機能自己評価完了",
      "description": "WHO Global Benchmarking Toolに基づく8つの規制機能の自己評価を実施。登録・ビジランス・市場監視・施設認可・査察・検査・臨床試験監督を評価。規制能力強化のロードマップ策定。"
    }
  ],
  "lastUpdated": "2026-04-06",
  "verified": null
};
