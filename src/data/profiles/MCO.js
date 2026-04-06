// モナコ (Monaco)
export default {
  "code": "MCO",
  "country": "モナコ",
  "countryEn": "Monaco",
  "region": "Europe",
  "flag": "🇲🇨",
  "legalSystemOverview": {
    "type": "EU非加盟国（EU-Monaco協定により旧EU医療機器指令を国内法化）+ Loi n° 1.267 du 23 décembre 2002",
    "description": "モナコはEU非加盟・EEA非加盟の欧州微小国家。2003年12月4日署名のEU-Monaco協定（2004年5月1日発効）により、EU医療機器指令（MDD 93/42/EEC等）をモナコ領域内に適用。Loi n° 1.267（2002年）が国内基本法。Ordonnance Souveraine n° 16.039（2003年）が上市要件を規定。EU NBによるCEマーキング機器を受入れ。Direction de l'Action Sanitaire（DASA）が規制当局。フランスANSMとの行政協力取極めにより、検査・ビジランスでフランスと緊密に連携。国内NBなし。EU MDR (2017/745) への移行状況は要確認。",
    "keyCharacteristics": [
      "EU非加盟・EEA非加盟（EU-Monaco協定による部分的EU法適用）",
      "Loi n° 1.267（2002年）が医療機器基本法",
      "CEマーキング必須（EU NB認証を承認）",
      "EU MDD/AIMDD/IVDD ベースの分類・適合性評価体系",
      "Direction de l'Action Sanitaire（DASA）がNCA",
      "フランスANSMとの行政協力取極め（検査・ビジランス）",
      "国内ノーティファイドボディなし",
      "フランス語ラベリング必須"
    ]
  },
  "authorities": [
    {
      "name": "DASA",
      "fullName": "Department of Health Affairs",
      "localName": "Direction de l'Action Sanitaire",
      "role": "NCA: 医療機器の市場監視・matériovigilance（医療機器監視）・réactovigilance（IVD監視）・高リスク機器の上市届出受理・医療施設の検査監督。Division de Produits de Santé（健康製品課）が医療機器を所管。",
      "url": "https://www.gouv.mc/Gouvernement-et-Institutions/Le-Gouvernement/Departement-des-Affaires-Sociales-et-de-la-Sante/Direction-de-l-Action-Sanitaire",
      "isPrimary": true
    },
    {
      "name": "DASS",
      "fullName": "Department of Social Affairs and Health",
      "localName": "Département des Affaires Sociales et de la Santé",
      "role": "DASAの上位組織。保健・社会政策全般を統括。",
      "url": "https://www.gouv.mc/Gouvernement-et-Institutions/Le-Gouvernement/Departement-des-Affaires-Sociales-et-de-la-Sante",
      "isPrimary": false
    },
    {
      "name": "ANSM（フランス）",
      "fullName": "National Agency for the Safety of Medicines and Health Products (France)",
      "localName": "Agence nationale de sécurité du médicament et des produits de santé",
      "role": "行政協力取極めに基づき、モナコ領域内の製造・卸売施設の検査、ビジランス情報の共有をフランス側として実施。モナコ政府はANSM検査官をモナコ領域内で指名・承認。",
      "url": "https://ansm.sante.fr/documents/reference/reglementation-relative-aux-dispositifs-medicaux-dm-et-aux-dispositifs-medicaux-de-diagnostic-in-vitro-dmdiv",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "国内NB不在 — EU域内NBによるCE認証を承認",
    "description": "モナコ国内にノーティファイドボディは存在しない。Ordonnance Souveraine n° 16.039（2003年）により、EU官報に掲載されたNBをモナコ領域内で適合性評価を行う機関として承認。製造者はEU域内（フランスLNE/G-MED等）のNBを利用する。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "Loi n° 1.267 Article 1er: 「人体に対して、診断・予防・監視・治療・疾病の軽減を目的として製造者が意図する、単独または組合せで使用される器械・器具・装置・材料その他の物品（適正作動に必要なソフトウェアを含む）」。主たる作用が薬理学的・免疫学的・代謝的手段で達成されないもの。",
    "scope": "IVDは同法第II編で別途規定。能動埋込型機器はArrêté ministériel n° 2003-583で個別規定。",
    "notes": "高リスクカテゴリの機器は上市時にDASAへの届出義務あり（識別データ・ラベリング・取扱説明書の提出）。"
  },
  "primaryLaw": {
    "title": "Loi n° 1.267 du 23 décembre 2002 relative aux dispositifs médicaux",
    "originalTitle": "Loi n° 1.267 du 23 décembre 2002 relative aux dispositifs médicaux",
    "enacted": "2002",
    "lastAmended": "2002",
    "url": "https://legimonaco.mc/tnc/loi/2002/12-23-1.267@2003.01.11/",
    "description": "モナコの医療機器基本法。医療機器の定義・必須要件・CEマーキング・分類・適合性評価・matériovigilance・罰則を規定。EU医療機器指令（MDD 93/42/EEC）をモナコ国内法に移植したもの。2003年1月11日のJournal de Monaco（第7581号）に掲載。"
  },
  "implementingRegulations": [
    {
      "title": "Ordonnance Souveraine n° 16.039 du 4 novembre 2003 relative à la mise sur le marché des dispositifs médicaux",
      "date": "2003-11",
      "url": "https://journaldemonaco.gouv.mc/Journaux/2003/Journal-7625/Ordonnance-Souveraine-n-16.039-du-4-novembre-2003-relative-a-la-mise-sur-le-marche-des-dispositifs-medicaux",
      "description": "医療機器の上市要件を規定。EU官報掲載NBの承認、分類争議の解決手続を定める。EU-Monaco協定の発効日から適用。",
      "category": "上市規制"
    },
    {
      "title": "Arrêté ministériel n° 2003-581 du 10 novembre 2003 portant classification des dispositifs médicaux",
      "date": "2003-11",
      "url": "https://legimonaco.mc/tnc/arrete-ministeriel/2003/11-10-2003-581@2021.01.16/",
      "description": "医療機器（能動埋込型・IVD除く）の4クラス分類（I/IIa/IIb/III）と適合性評価手続を規定。Annex IXの分類ルールに基づく。2006年・2021年に改正。",
      "category": "分類・適合性評価"
    },
    {
      "title": "Arrêté ministériel n° 2003-584 du 10 novembre 2003 portant classification des dispositifs médicaux de diagnostic in vitro",
      "date": "2003-11",
      "url": "https://legimonaco.mc/tnc/arrete-ministeriel/2003/11-10-2003-584/",
      "description": "IVD医療機器の分類・適合性評価手続を規定。",
      "category": "IVD分類・適合性評価"
    },
    {
      "title": "Arrêté ministériel n° 2003-586 du 10 novembre 2003 fixant les modalités de la matériovigilance et de la réactovigilance",
      "date": "2003-11",
      "url": "https://legimonaco.mc/tnc/arrete-ministeriel/2003/11-10-2003-586@2006.07.08/",
      "description": "matériovigilance（医療機器監視）・réactovigilance（IVD監視）の報告義務・手続を規定。製造者・使用者・第三者の即時報告義務。DASAが報告受理・調査・是正措置を実施。",
      "category": "市販後安全監視"
    }
  ],
  "relatedLaws": [
    {
      "title": "Agreement between the European Community and the Principality of Monaco on the application of certain Community acts (Council Decision 2003/885/EC)",
      "category": "EU-Monaco協定",
      "enacted": "2003",
      "url": "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000000230180",
      "relevance": "EU医療機器指令（MDD/AIMDD/IVDD）をモナコ領域内に適用する根拠。2003年12月4日署名、2004年5月1日発効。"
    },
    {
      "title": "Arrangement administratif Monaco-France du 26 avril 2002 relatif à la coopération en matière de produits de santé",
      "category": "仏モナコ行政協力",
      "enacted": "2002",
      "url": "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000000230180",
      "relevance": "1963年5月18日薬局規制条約に基づく行政協力取極め。医療機器・IVD分野でのフランス-モナコ間の検査・ビジランス協力を規定。Ordonnance Souveraine n° 15.704（2003年2月28日）により発効。"
    },
    {
      "title": "Arrêté ministériel n° 2003-585 du 10 novembre 2003 relatif aux catégories de dispositifs médicaux devant faire l'objet d'une communication",
      "category": "届出義務",
      "enacted": "2003",
      "url": "https://journaldemonaco.gouv.mc/Journaux/2003/Journal-7625/Arrete-Ministeriel-n-2003-585-du-10-novembre-2003-relatif-aux-categories-de-dispositifs-medicaux-devant-faire-l-objet-d-une-communication-lors-de-leur-mise-sur-le-marche",
      "relevance": "高リスクカテゴリの医療機器について、上市時にDASAへの届出義務（識別データ・ラベリング・取扱説明書）を規定。"
    }
  ],
  "classification": {
    "system": "EU MDD準拠 4クラス制",
    "basis": "Arrêté ministériel n° 2003-581のAnnex IXに基づくリスクベース分類。EU MDD 93/42/EEC Annex IXの分類ルールをモナコ国内法に移植。2021年にAnnex I改正（Arrêté ministériel n° 2021-24）。",
    "classes": [
      {
        "name": "Class I",
        "nameJa": "クラスI",
        "riskLevel": "低",
        "description": "低リスク機器。製造者による自己宣言（DoC）。滅菌品（Is）・計測機能品（Im）はNB関与。",
        "examples": [
          "弾性包帯",
          "歩行補助器",
          "非滅菌手袋",
          "聴診器"
        ],
        "approvalPath": "自己宣言（Annex VII）"
      },
      {
        "name": "Class IIa",
        "nameJa": "クラスIIa",
        "riskLevel": "中低",
        "description": "中低リスク。NB関与による適合性評価。",
        "examples": [
          "補聴器",
          "超音波診断装置",
          "吸引カテーテル",
          "血圧計"
        ],
        "approvalPath": "NB適合性評価（Annex II/IV/V/VI）"
      },
      {
        "name": "Class IIb",
        "nameJa": "クラスIIb",
        "riskLevel": "中高",
        "description": "中高リスク。NBによる詳細審査。",
        "examples": [
          "人工呼吸器",
          "輸液ポンプ",
          "放射線治療装置",
          "血液透析装置"
        ],
        "approvalPath": "NB適合性評価（Annex II/III+IV/III+V）"
      },
      {
        "name": "Class III",
        "nameJa": "クラスIII",
        "riskLevel": "高",
        "description": "最高リスク。NBによる最も厳格な審査。Annex II（完全品質保証 + 設計審査）が基本経路。",
        "examples": [
          "冠動脈ステント",
          "人工心臓弁",
          "人工股関節",
          "吸収性縫合糸"
        ],
        "approvalPath": "NB適合性評価（Annex II + 設計審査）"
      }
    ],
    "rules": [
      "Arrêté ministériel n° 2003-581 Annex IXの分類ルール（EU MDD Annex IX準拠）",
      "分類争議はNBが所在する国のNCAが判定（Ordonnance Souveraine n° 16.039）"
    ],
    "totalProductCodes": "EU CND（European Nomenclature of Medical Devices）準拠"
  },
  "conformityAssessment": {
    "overview": "EU MDD指令の適合性評価手続をモナコ国内法で採用。Arrêté ministériel n° 2003-581のAnnex II〜VIIIに規定。EU官報掲載のNBが適合性評価を実施。CEマーキング取得後にモナコ市場に上市可能。モナコ固有の追加市場認可は不要だが、高リスクカテゴリ機器はDASAへの届出が必要。",
    "routes": [
      {
        "name": "CE Conformity Assessment (via EU NB)",
        "nameJa": "CE適合性評価（EU NB経由）",
        "applicableClasses": ["Class I", "Class IIa", "Class IIb", "Class III"],
        "description": "EU官報掲載のNBによる適合性評価。Class Iは自己宣言（DoC, Annex VII）、Class IIa以上はNB関与。Annex II（完全QMS）、Annex III（型式検査）、Annex IV（検証）、Annex V（製造QA）、Annex VI（製品QA）の組合せ。技術文書は製造後5年間保管義務。NB認証は5年有効・更新可。",
        "subtypes": [
          "Annex II: 完全品質保証システム",
          "Annex III: CE型式検査",
          "Annex IV: CE検証",
          "Annex V: 製造品質保証",
          "Annex VI: 製品品質保証",
          "Annex VII: 自己宣言（Class I）"
        ],
        "avgReviewTime": "要確認（公式情報で裏付け未取得）",
        "avgReviewTimeSource": "https://legimonaco.mc/tnc/arrete-ministeriel/2003/11-10-2003-581@2021.01.16/",
        "fee": "要確認（公式情報で裏付け未取得）",
        "feeSource": "https://legimonaco.mc/tnc/arrete-ministeriel/2003/11-10-2003-581@2021.01.16/",
        "url": "https://legimonaco.mc/tnc/arrete-ministeriel/2003/11-10-2003-581@2021.01.16/"
      },
      {
        "name": "High-risk device notification to DASA",
        "nameJa": "高リスク機器のDASA届出",
        "applicableClasses": ["Class IIb", "Class III"],
        "description": "高リスクカテゴリの医療機器は、CEマーキング取得後のモナコ上市時に、DASAへ識別データ・ラベリング・取扱説明書を届出する義務がある（Loi n° 1.267 Article 15、Arrêté ministériel n° 2003-585）。",
        "subtypes": [],
        "avgReviewTime": "要確認（公式情報で裏付け未取得）",
        "avgReviewTimeSource": "https://journaldemonaco.gouv.mc/Journaux/2003/Journal-7625/Arrete-Ministeriel-n-2003-585-du-10-novembre-2003-relatif-aux-categories-de-dispositifs-medicaux-devant-faire-l-objet-d-une-communication-lors-de-leur-mise-sur-le-marche",
        "fee": "要確認（公式情報で裏付け未取得）",
        "feeSource": "https://journaldemonaco.gouv.mc/Journaux/2003/Journal-7625/Arrete-Ministeriel-n-2003-585-du-10-novembre-2003-relatif-aux-categories-de-dispositifs-medicaux-devant-faire-l-objet-d-une-communication-lors-de-leur-mise-sur-le-marche",
        "url": "https://journaldemonaco.gouv.mc/Journaux/2003/Journal-7625/Arrete-Ministeriel-n-2003-585-du-10-novembre-2003-relatif-aux-categories-de-dispositifs-medicaux-devant-faire-l-objet-d-une-communication-lors-de-leur-mise-sur-le-marche"
      }
    ]
  },
  "electronicSubmission": {
    "system": "紙ベース・書面申請（専用電子ポータルなし）",
    "url": "https://monservicepublic.gouv.mc/en/directory-of-government-services/ministry-of-health-and-social-affairs/department-of-health-affairs",
    "description": "モナコには医療機器専用の電子申請ポータルは存在しない。高リスク機器の上市届出・ビジランス報告はDASAへ書面で提出。フランスANSMとの協力によりビジランス情報を共有。",
    "mandatory": false
  },
  "udi": {
    "required": false,
    "system": "モナコ国内法にUDI制度なし（EU-Monaco協定の更新状況による）",
    "description": "現行のモナコ国内法（Loi n° 1.267、2002年）にはUDI要件の規定はない。EU-Monaco協定がEU MDR/IVDRに更新された場合、EUDAMED UDI要件が適用される可能性があるが、現時点での移行状況は要確認。",
    "url": "https://en.gouv.mc/Policy-Practice/Monaco-Worldwide/Monaco-and-the-European-Union",
    "timeline": "要確認（EU-Monaco協定のMDR/IVDR移行状況に依存）"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "Matériovigilance / Réactovigilance — DASA",
      "mandatory": true,
      "url": "https://legimonaco.mc/tnc/arrete-ministeriel/2003/11-10-2003-586@2006.07.08/",
      "description": "製造者・使用者・第三者は、死亡または重篤な健康障害を引き起こした（またはそのおそれのある）インシデントをDASAに即時報告する義務（Loi n° 1.267 Article 18）。任意報告（通常使用時の有害反応・誤使用時の反応・機器故障・説明書不備）は四半期ごとにDASAに報告。IVDはréactovigilanceとして同様の報告義務。報告不履行は4年以下の禁固刑+罰金（Article 38）。"
    },
    "recalls": {
      "authority": "DASA",
      "description": "製造者またはその代理人は、技術的・医学的理由による市場リコールをDASAに即時通知する義務（Loi n° 1.267）。DASAがフランスANSMと連携して是正措置を監督。",
      "url": "https://journaldemonaco.gouv.mc/Journaux/2003/Journal-7581/Loi-n-1.267-du-23-decembre-2002-relative-aux-dispositifs-medicaux"
    },
    "surveillance": "Arrêté ministériel n° 2003-586に基づくmatériovigilance/réactovigilance体制。医療施設には担当者（correspondant）の設置が義務（医師または薬剤師）。フランスANSMとの行政協力取極めにより、検査・ビジランス情報を共有。"
  },
  "certificateOfFreeSale": {
    "available": false,
    "issuingAuthority": "該当なし",
    "name": "該当なし",
    "description": "モナコにはCFS（自由販売証明書）発行制度に関する公式情報が確認できない。モナコ市場への上市にはCEマーキングが前提であり、CFS発行の必要性は限定的。",
    "processingTime": "該当なし",
    "url": "https://www.gouv.mc/Gouvernement-et-Institutions/Le-Gouvernement/Departement-des-Affaires-Sociales-et-de-la-Sante"
  },
  "reimbursement": {
    "system": "Caisses Sociales de Monaco (CSM) — CCSS + Service des Prestations Médicales de l'État (SPME)",
    "authority": "CCSS / SPME",
    "description": "被用者はCCSS（社会保障補償基金）、モナコ国籍者・公務員はSPME（国家医療給付サービス）が医療保険を管理。医療機器の償還はフランスの償還リスト（LPP）を参照するが、モナコ独自の決定も可能。電子送信に対応する開業医・薬局での請求が推奨。",
    "codingSystems": [
      "フランスLPP（製品・サービスリスト）を参照",
      "CCAM（医療行為共通分類）"
    ],
    "url": "https://www.caisses-sociales.mc/accueil/retraite-carti/retraite-carti/prestations-medicales"
  },
  "marketingRules": {
    "authority": "DASA",
    "description": "フランス語ラベリング・取扱説明書（IFU）必須。CEマーキングの表示義務（Loi n° 1.267 Article 11）。CEマーキングは適合性評価手続完了後にのみ貼付可能。安全性情報通知（FSN）はフランス語で提供。",
    "keyRules": [
      "フランス語ラベリング・IFU必須",
      "CEマーキング表示義務",
      "高リスク機器のDASA届出義務",
      "安全性情報通知（FSN）: フランス語必須"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "モナコはMDSAP非参加。MDSAPの正式参加国は5カ国のみ（USA/CAN/AUS/BRA/JPN）。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "EN ISO 13485:2016。NBによる適合性評価で実質的に必要。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "EN ISO 14971:2019+A11:2021。リスクマネジメント。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "EN IEC 62304:2006+A1:2015。ソフトウェアライフサイクル。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "EN IEC 60601シリーズ。電気医療機器安全。"
    },
    "others": [
      "ISO 10993（生体適合性）",
      "IEC 62366-1（ユーザビリティ）",
      "Loi n° 1.267 Article 7: Journal de Monacoに公示された規格への適合で必須要件適合を推定"
    ]
  },
  "recentDevelopments": [
    {
      "date": "2021-01",
      "title": "Arrêté ministériel n° 2021-24 — 分類規則Annex I改正",
      "description": "Arrêté ministériel n° 2003-581のAnnex I（分類ルール）を改正。医療機器分類ルールの更新。"
    },
    {
      "date": "2015-03",
      "title": "EU-Monaco連合協定交渉開始",
      "description": "2015年3月18日よりモナコがEU内部市場への参加を目指す連合協定交渉を開始。合意に至った場合、EU MDR/IVDRの直接適用の可能性がある。"
    },
    {
      "date": "2003-12",
      "title": "EU-Monaco協定署名（医療機器・医薬品・化粧品）",
      "description": "EU医療機器指令（MDD/AIMDD/IVDD）等をモナコ領域内に適用するEU-Monaco協定を2003年12月4日署名。2004年5月1日発効。"
    }
  ],
  "lastUpdated": "2026-04-06",
  "verified": null
};
