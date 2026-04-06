// マダガスカル (Madagascar)
export default {
  "code": "MDG",
  "country": "マダガスカル",
  "countryEn": "Madagascar",
  "region": "Middle East & Africa",
  "flag": "🇲🇬",
  "legalSystemOverview": {
    "type": "政府審査型（医薬品規制の一部として運用）",
    "description": "マダガスカルではAgence du Médicament de Madagascar（AMM）が医薬品・医療機器を含む保健製品の規制を管轄。独立した医療機器法はなく、Loi n°2011-002（Code de la Santé）が法的根拠。分類制度は未整備で、国際認証（CE/FDA/WHO PQ）への依存度が高い。Décret n°2010-960でAMMが設立（EPA: 公施設法人）。登録有効期間5年。DPLMT（薬局・検査・伝統医療局）が政策立案、SALAMAが公的施設への医療機器調達を担当。SADC加盟国として規制調和に参加。",
    "keyCharacteristics": [
      "AMM（2010年Décret設立）がNCA",
      "独立した医療機器法なし（Code de la Santé内で規定）",
      "分類制度は未整備（国際認証に依存）",
      "登録（AMM: Autorisation de Mise sur le Marché）有効期間5年",
      "現地Authorized Representative（代理人）必要",
      "DPLMT（保健省傘下）が政策立案・監督",
      "SALAMA（中央調達機関、ISO 9001:2015認証）が公的医療機器調達",
      "フランス語ラベリング必須",
      "SADC加盟国・AMRH参加",
      "WHO SRA CRP参加（2024年〜）"
    ]
  },
  "authorities": [
    {
      "name": "AMM",
      "fullName": "Agence du Médicament de Madagascar",
      "localName": "Agence du Médicament de Madagascar",
      "role": "NCA: 医薬品・医療機器を含む保健製品の登録（AMM付与）・品質管理・製造施設査察・pharmacovigilance。Décret n°2010-960により設立されたEPA（公施設法人）。",
      "url": "https://amm.mg/",
      "isPrimary": true
    },
    {
      "name": "DPLMT",
      "fullName": "Direction de la Pharmacie, des Laboratoires et de la Médecine Traditionnelle",
      "localName": "Direction de la Pharmacie, des Laboratoires et de la Médecine Traditionnelle",
      "role": "保健省傘下の薬局・検査・伝統医療局。医薬政策立案・規制テキスト策定・薬局施設監督。",
      "url": "https://www.dplmt.mg/",
      "isPrimary": false
    },
    {
      "name": "SALAMA",
      "fullName": "Centrale d'Achats de Médicaments Essentiels et de Matériel Médical de Madagascar",
      "localName": "SALAMA",
      "role": "公的医療施設への必須医薬品・医療消耗品・医療機器の一元調達・保管・配送。1996年設立の非営利団体。ISO 9001:2015認証取得。5地方事務所。",
      "url": "https://salama.mg/en/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "政府直接審査（NB制度なし）",
    "description": "AMMが直接審査・登録。第三者認証機関制度は存在しない。FDA承認・CEマーキング・WHO事前認定が事実上認容される。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "Loi n°2011-002（Code de la Santé）に保健製品の一部として医療機器の定義が含まれる。独立した医療機器の法的定義は限定的。",
    "scope": "医療機器・医療消耗品・IVD（体外診断薬）が対象。",
    "notes": "COVID-19パンデミック時にDécision 3604-2022で診断テストの輸入・販売・使用を個別認可するなど、緊急時は個別措置で対応。"
  },
  "primaryLaw": {
    "title": "Loi n°2011-002 du 15 juillet 2011 portant Code de la Santé",
    "originalTitle": "Loi portant Code de la Santé",
    "enacted": "2011",
    "lastAmended": "2021",
    "url": "https://www.assemblee-nationale.mg/wp-content/uploads/2020/11/Loi-n%C2%B02011-002-portant-Code-de-la-Sant%C3%A9.pdf",
    "description": "保健法典。全360条・10編構成。医薬品・保健製品の定義、AMMの設置根拠、pharmacovigilance、医薬品の輸入・流通規制を規定。2021年に改正法案（Proposition de Loi n°003-2021/PL）が提出。"
  },
  "implementingRegulations": [
    {
      "title": "Décret n°2010-960 du 30 novembre 2010 portant création, organisation et fonctionnement de l'Agence du Médicament de Madagascar",
      "date": "2010-11",
      "url": "https://amm.mg/dossiers.html",
      "description": "AMM設立令。EPA（公施設法人）としてのAMMの組織・機能・権限を規定。Article 4で登録・査察・品質管理・pharmacovigilanceの各機能を定義。",
      "category": "AMM設立令"
    },
    {
      "title": "Arrêté n°30803/2010 du 6 août 2010 relatif à l'enregistrement des médicaments",
      "date": "2010-08",
      "url": "https://www.medbox.org/document/medicines-registration-procedure-in-madagascar",
      "description": "医薬品登録手続省令。保健製品のAMM（市場承認）申請書類構成・審査手続を規定。",
      "category": "登録手続"
    },
    {
      "title": "Arrêté n°6540/2020 du 11 mars 2020 portant réorganisation de la Commission Nationale d'Enregistrement",
      "date": "2020-03",
      "url": "http://www.agmed.mg/dossiers.html",
      "description": "国家登録委員会（CNE）の再編に関する省令。登録審査体制の強化。",
      "category": "審査体制"
    },
    {
      "title": "Arrêté interministériel n°21759/2016 relatif au dédouanement des médicaments importés",
      "date": "2016",
      "url": "https://www.pic.commerce.mg/fr/agence-du-medicament-de-madagascar-amm",
      "description": "輸入医薬品の通関手続に関する省間合同令。",
      "category": "輸入通関"
    }
  ],
  "relatedLaws": [
    {
      "title": "Décret n°2015-627 portant Code de Déontologie des Pharmaciens",
      "category": "薬剤師倫理規程",
      "enacted": "2015",
      "url": "https://www.leemafrique.org/fr/reglementation-pharmaceutique-a-madagascar.asp",
      "relevance": "薬剤師倫理規程。医薬品・医療機器の販売・調剤に関する職業倫理を規定。"
    },
    {
      "title": "Loi n°2011-003 portant réforme hospitalière",
      "category": "病院改革法",
      "enacted": "2011",
      "url": "http://www.droit-afrique.com/upload/doc/madagascar/Madagascar-Loi-2011-03-reforme-hospitaliere.pdf",
      "relevance": "病院改革法。公立医療施設における医療機器の調達・管理体制に関連。"
    }
  ],
  "classification": {
    "system": "未整備（国際認証に依存）",
    "basis": "公式な国内分類規則は未確認。GHTF/IMDRFの4クラス体系を参照する可能性。実務的にはFDA承認・CEマーキング・WHO事前認定品が追加審査なしで受入。SADC域内の規制調和イニシアチブに参加しているが、国内分類制度の整備には至っていない。",
    "classes": [
      {
        "name": "Class I",
        "nameJa": "クラスI（参考）",
        "riskLevel": "低",
        "description": "低リスク。国際認証に基づく評価。",
        "examples": ["弾性包帯", "聴診器", "車椅子", "舌圧子", "非滅菌手袋"],
        "approvalPath": "AMM登録（Autorisation de Mise sur le Marché）"
      },
      {
        "name": "Class II",
        "nameJa": "クラスII（参考）",
        "riskLevel": "中低",
        "description": "中リスク。国際認証に基づく評価。",
        "examples": ["補聴器", "血圧計", "手術用手袋", "注射器", "カテーテル"],
        "approvalPath": "AMM登録（Autorisation de Mise sur le Marché）"
      },
      {
        "name": "Class III",
        "nameJa": "クラスIII（参考）",
        "riskLevel": "中高",
        "description": "高リスク。国際認証に基づく評価。",
        "examples": ["人工呼吸器", "輸液ポンプ", "血液透析装置", "X線装置", "骨接合プレート"],
        "approvalPath": "AMM登録（Autorisation de Mise sur le Marché）"
      },
      {
        "name": "Class IV",
        "nameJa": "クラスIV（参考）",
        "riskLevel": "高",
        "description": "最高リスク。国際認証に基づく評価。",
        "examples": ["人工心臓弁", "冠動脈ステント", "人工股関節", "植込み型除細動器", "吸収性縫合糸"],
        "approvalPath": "AMM登録（Autorisation de Mise sur le Marché）"
      }
    ],
    "rules": [
      "公式な国内分類規則は未整備",
      "FDA承認・CEマーキング・WHO PQを事実上認容",
      "SADC規制調和イニシアチブに参加"
    ],
    "totalProductCodes": null
  },
  "conformityAssessment": {
    "overview": "AMMによる登録（Autorisation de Mise sur le Marché）制度。申請はフランス語で提出。現地代理人（Authorized Representative）が必要。製品カテゴリーは4区分（快適製品・革新製品・ブランドジェネリック・ジェネリック）。登録有効期間5年。新規登録の標準審査期間は支払いから4か月（更新は2か月）だが、実務上は6〜12か月。",
    "routes": [
      {
        "name": "AMM (Autorisation de Mise sur le Marché)",
        "nameJa": "市場承認（登録）",
        "applicableClasses": ["Class I", "Class II", "Class III", "Class IV"],
        "description": "フランス語で申請書類を提出。必要書類: 製造認可証、GMP査察報告書、原産国のCFS/販売証明、製品特性概要（SPC）、品質管理分析報告書、使用説明書。外国製品は現地代理人の任命書が必須。CNE（国家登録委員会）が審査。",
        "subtypes": [],
        "avgReviewTime": "公式: 支払いから4か月（新規）/ 2か月（更新）。実務上6〜12か月。",
        "avgReviewTimeSource": "https://omcmedical.com/madagascar-drug-product-registration/",
        "fee": "要確認（公式情報で裏付け未取得。支払いは請求書発行から3か月以内）",
        "feeSource": "https://omcmedical.com/madagascar-drug-product-registration/",
        "url": "https://amm.mg/dossiers.html"
      }
    ]
  },
  "electronicSubmission": {
    "system": "紙ベース申請",
    "url": "https://amm.mg/accueil.html",
    "description": "登録申請は基本的に紙ベース・直接提出。専用の電子申請ポータルは未確認。AMMウェブサイトで規制テキスト・登録医薬品リストを公開。",
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
      "system": "Pharmacovigilance — AMM",
      "mandatory": true,
      "url": "https://www.dplmt.mg/wp-content/uploads/2025/04/PNSCA_2024-2028_FINAL.pdf",
      "description": "AMMがpharmacovigilanceを管轄（Décret n°2010-960 Article 4）。DPLMTが政策監督。有害事象情報の収集・分析・周知。医療機器に特化したmatériovigilance制度は未確認。WHO国際医薬品モニタリングプログラムへの加盟状況は要確認。"
    },
    "recalls": {
      "authority": "AMM / DPLMT",
      "description": "AMMが市場安全措置を実施。DPLMTが政策面で監督。",
      "url": "https://www.leemafrique.org/fr/reglementation-pharmaceutique-a-madagascar.asp"
    },
    "surveillance": "Pharmacovigilance制度は存在するが、医療機器に特化した市販後監視制度は未整備。SADC域内のpharmacovigilance調和イニシアチブに参加。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "AMM（推定）",
    "name": "Certificat de Libre Vente",
    "description": "CFS発行制度の公式詳細は未確認。輸入登録時に原産国のCFS（Certificate of Free Sale）またはmarketing証明が必須書類として求められる。",
    "processingTime": "要確認（公式情報で裏付け未取得）",
    "url": "https://omcmedical.com/madagascar-drug-product-registration/"
  },
  "reimbursement": {
    "system": "公的調達（SALAMA）中心",
    "authority": "SALAMA / 保健省",
    "description": "社会保険による医療機器償還制度は未整備。公立医療施設への医療機器・消耗品の調達はSALAMA（ISO 9001:2015認証取得済み、アフリカ初のISO認証中央調達機関）が一元管理。GAVI・USAID・世界基金・EU等の国際パートナーによるプログラム調達が大きな割合を占める。",
    "codingSystems": [],
    "url": "https://salama.mg/en/"
  },
  "marketingRules": {
    "authority": "AMM / DPLMT",
    "description": "フランス語ラベリング必須。外国製品は現地代理人の任命が必要。輸入医薬品・医療機器の通関にはArrêté interministériel n°21759/2016に基づく手続が必要。",
    "keyRules": [
      "フランス語ラベリング必須",
      "外国製品: 現地代理人（Authorized Representative）必須",
      "輸入通関: Arrêté interministériel n°21759/2016に基づく手続",
      "登録有効期間: 5年（更新制）",
      "GMP/BPF査察報告書が必要"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "MDSAP非参加。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "参照されるが、国内法で明示的に義務化されているかは未確認。BNM（Bureau des Normes de Madagascar）がISO加盟。"
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
      "FDA承認・CEマーキング・WHO事前認定を事実上認容",
      "SADC規制調和イニシアチブに参加",
      "WHO SRA CRP参加（2024年〜）"
    ]
  },
  "recentDevelopments": [
    {
      "date": "2024",
      "title": "WHO SRA CRP参加",
      "description": "マダガスカルがWHO Collaborative Registration Procedure（SRA CRP）に参加。厳格規制当局（SRA）による承認済み医薬品の簡略登録が可能に。"
    },
    {
      "date": "2021",
      "title": "Code de la Santé改正法案提出",
      "description": "Proposition de Loi n°003-2021/PL du 3 juin 2021がCode de la Santé改正案として国民議会に提出。医療製品の登録・市場流通制度の近代化を目指す。"
    },
    {
      "date": "2020-03",
      "title": "国家登録委員会（CNE）再編",
      "description": "Arrêté n°6540/2020により国家登録委員会（CNE）を再編。登録審査体制の強化・効率化を図る。"
    }
  ],
  "lastUpdated": "2026-04-06",
  "verified": null
};
