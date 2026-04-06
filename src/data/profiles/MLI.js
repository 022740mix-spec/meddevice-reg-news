// マリ (Mali)
export default {
  "code": "MLI",
  "country": "マリ",
  "countryEn": "Mali",
  "region": "Middle East & Africa",
  "flag": "🇲🇱",
  "legalSystemOverview": {
    "type": "政府審査型（医薬品規制の一部として運用）",
    "description": "マリではDPM（Direction de la Pharmacie et du Médicament）が医薬品・医療機器を一元管轄。独立した医療機器法はなく、Décret 04-557/P-RM（2004年、AMM制度確立）およびOrdonnance 00-039/P-RM（2000年、DPM設立）が法的根拠。UEMOA加盟国として域内医薬品規制調和（Règlement 06/2010/CM/UEMOA）に参加。AMM（市販承認）は5年有効、国立AMM委員会が年4回審査。LNS（国立衛生研究所）がISO/IEC 17025認定の品質管理を実施。AMA条約批准済み。",
    "keyCharacteristics": [
      "DPM（2000年設立）がNCA",
      "独立した医療機器法なし（医薬品規制の一部として運用）",
      "Décret 04-557/P-RM（2004年）がAMM制度の基盤",
      "UEMOA域内規制調和に参加（Règlement 06/2010）",
      "AMM（市販承認）は5年有効",
      "国立AMM委員会が年4回（四半期ごと）審査",
      "LNS（国立衛生研究所）がISO/IEC 17025認定取得（2022年）",
      "フランス語ラベリング必須",
      "AMA条約批准済み（2021年以前）"
    ]
  },
  "authorities": [
    {
      "name": "DPM",
      "fullName": "Directorate of Pharmacy and Medicine",
      "localName": "Direction de la Pharmacie et du Médicament",
      "role": "NCA: 医薬品・医療機器のAMM（市販承認）審査・発行、薬事規制策定、医薬品モニタリング、輸入管理。保健社会開発省（MSDS）傘下の中央機構。",
      "url": "https://www.dirpharma.ml/index.php/fr/services/doctor-detail",
      "isPrimary": true
    },
    {
      "name": "LNS",
      "fullName": "National Health Laboratory",
      "localName": "Laboratoire National de la Santé",
      "role": "医薬品・食品・飲料の品質管理・試験分析。ISO/IEC 17025:2017認定（SOAC、2022年）。UEMOA圏初のフランス語圏認定医薬品品質管理ラボ。",
      "url": "https://lnssantemali.org/fr/about",
      "isPrimary": false
    },
    {
      "name": "PPM",
      "fullName": "Popular Pharmacy of Mali",
      "localName": "Pharmacie Populaire du Mali",
      "role": "公的医療施設への必須医薬品・医療消耗品の一元調達・保管・配送。国際公開入札で調達。",
      "url": "https://www.ghsupplychain.org/news/pharmacie-populaire-du-mali-adopts-new-roadmap-next-five-years",
      "isPrimary": false
    },
    {
      "name": "CANAM",
      "fullName": "National Health Insurance Fund",
      "localName": "Caisse Nationale d'Assurance Maladie",
      "role": "AMO（強制医療保険）の運営管理。INPS・CMSSに管理業務を委任。",
      "url": "https://www.canam.ml/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "政府直接審査（NB制度なし）",
    "description": "DPMが直接審査。第三者認証機関制度は存在しない。国際認証（CE・FDA・WHO PQ）が参考にされる。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "Décret 91-106/P-RM（1991年）に基づき、医薬品の定義の一部として医療機器・体外診断薬が対象に含まれる。独立した医療機器固有の法的定義は限定的。",
    "scope": "医薬品・医療機器・IVD・医療消耗品が対象。",
    "notes": "UEMOA域内の医療機器ガイドライン（分類・市販承認・安全性能要件）の導入が進められている。"
  },
  "primaryLaw": {
    "title": "Décret n° 04-557/P-RM du 1er décembre 2004 instituant l'Autorisation de Mise sur le Marché des médicaments à usage humain et vétérinaire",
    "originalTitle": "Décret instituant l'Autorisation de Mise sur le Marché des médicaments à usage humain et vétérinaire",
    "enacted": "2004-12-01",
    "lastAmended": "要確認",
    "url": "https://ordrepharmacien.ml/autorisation-de-mise-en-marche-de-medicaments/",
    "description": "2004年制定。マリ共和国におけるAMM（市販承認）制度を確立した政令。医薬品・滅菌医療機器・診断試薬・薬用植物を対象。有効期間5年・更新可能。保健大臣が国立AMM委員会の意見を踏まえ承認・拒否・停止・撤回を決定。1995年Décret 95-009/PG-RM（医薬品ビザ制度）を廃止。"
  },
  "implementingRegulations": [
    {
      "title": "Ordonnance n° 00-039/P-RM du 20 septembre 2000 portant création de la DPM",
      "date": "2000-09",
      "url": "https://www.dirpharma.ml/index.php/en/allcategories-en-gb/departments/la-direction-de-la-pharmacie-et-du-medicament",
      "description": "DPM（Direction de la Pharmacie et du Médicament）設立令。Loi 01-040で批准。",
      "category": "DPM設立"
    },
    {
      "title": "Loi n° 01-040 du 7 juin 2001 portant ratification de l'ordonnance n° 00-039/P-RM",
      "date": "2001-06",
      "url": "http://ftp.sante.gov.ml/sauvanciensitewwwsante/index.php?option=com_content&view=article&id=290:loi-01-040-ratification-creation-dpm&catid=36&Itemid=88",
      "description": "DPM設立令の批准法。DPMの法的地位を確定。",
      "category": "DPM設立批准"
    },
    {
      "title": "Décret n° 2011-753/P-RM du 17 novembre 2011 fixant l'organisation et les modalités de fonctionnement de la DPM",
      "date": "2011-11",
      "url": "https://clinregs.niaid.nih.gov/country/mali",
      "description": "DPMの組織・運営方法を規定。3部門（薬事規制���品質保証・生物医学分析）の構成を定める。",
      "category": "DPM組織"
    },
    {
      "title": "Règlement n° 06/2010/CM/UEMOA relatif aux procédures d'homologation des produits pharmaceutiques à usage humain",
      "date": "2010-10",
      "url": "https://www.juriafrica.com/lex/reglement-06-2010-1er-octobre-2010-15838.htm",
      "description": "UEMOA域内の医薬品承認手続調和規則。マリを含む加盟国に適用。CTDフォーマットでの申請を標準化。",
      "category": "UEMOA域内調和"
    }
  ],
  "relatedLaws": [
    {
      "title": "Décret n° 91-106/P-RM du 15 mars 1991 portant organisation de l'exercice privé des professions sanitaires",
      "category": "医療専門職規制",
      "enacted": "1991",
      "url": "http://cnom.sante.gov.ml/docs/decret-details-exercice-prive-professions-sanitaires.pdf",
      "relevance": "医療専門職の私的活動の組織に関する政令。医薬品の定義・販売規制の基盤。1992年Décret 92-050/P-RMで一部改正。AMM制度の上位法的根拠。"
    },
    {
      "title": "Loi n° 09-015 du 26 juin 2009 portant institution de l'Assurance Maladie Obligatoire (AMO)",
      "category": "強制医療保険",
      "enacted": "2009",
      "url": "https://www.cleiss.fr/docs/regimes/regime_mali.html",
      "relevance": "AMO（強制医療保険）設立法。CANAMが保険運営、INPS・CMSSが管理業務を委任。"
    },
    {
      "title": "Arrêté n° 2021-4622/MSDS-SG du 8 novembre 2021 fixant la liste des médicaments et dispositifs médicaux couverts par l'AMO",
      "category": "医療保険対象品目",
      "enacted": "2021",
      "url": "https://leemafrique.org/fr/reglementation-pharmaceutique-au-mali.asp",
      "relevance": "AMO（強制医療保険）の対象となる医薬品・医療機器のリストを規定。"
    },
    {
      "title": "Arrêté n° 2024-4004/MSDS-SG du 28 octobre 2024 — Liste nationale des médicaments essentiels en DCI",
      "category": "必須医薬品リスト",
      "enacted": "2024",
      "url": "https://www.dirpharma.ml/docs/NOMENCLATURE_FEVRIER_2024.pdf",
      "relevance": "2024年版国家必須医薬品リスト（INN）。DPMが毎年更新。"
    }
  ],
  "classification": {
    "system": "未整備（国際認証・UEMOA域内調和を参照）",
    "basis": "公式な国内医療機器分類規則は未確認。UEMOA域内の医療機器分類ガイドラインを参照する方向。実務的にはCEマーキング・FDA承認・WHO事前認定品が参考にされる。",
    "classes": [
      {
        "name": "Class I",
        "nameJa": "クラスI（参考）",
        "riskLevel": "低",
        "description": "低リスク。国際認証に基づく評価。",
        "examples": ["弾性包帯", "聴診器", "車椅子", "舌圧子", "非滅菌手袋"],
        "approvalPath": "DPM登録（AMM）"
      },
      {
        "name": "Class II",
        "nameJa": "クラスII（参考）",
        "riskLevel": "中低",
        "description": "中リスク。国際認証に基づく評価。",
        "examples": ["補聴器", "血圧計", "手術用手袋", "注射器", "カテーテル"],
        "approvalPath": "DPM登録（AMM）"
      },
      {
        "name": "Class III",
        "nameJa": "クラスIII（参考）",
        "riskLevel": "中高",
        "description": "高リスク。国際認証に基づく評価。",
        "examples": ["人工呼吸器", "輸液ポンプ", "血液透析装置", "X線装置", "骨接合プレート"],
        "approvalPath": "DPM登録（AMM）"
      },
      {
        "name": "Class IV",
        "nameJa": "クラスIV（参考）",
        "riskLevel": "高",
        "description": "最高リスク。国際認証に基づく評価。",
        "examples": ["人工心臓弁", "冠動脈ステント", "人工股関節", "植込み型除細動器", "吸収性縫合糸"],
        "approvalPath": "DPM登録（AMM）"
      }
    ],
    "rules": [
      "公式な国内分類規則は未整備",
      "UEMOA域内医療機器分類ガイドラインの導入を推進中",
      "CEマーキング・FDA承認・WHO PQを事実上参考にする"
    ],
    "totalProductCodes": null
  },
  "conformityAssessment": {
    "overview": "DPMによるAMM（市販承認）制度。申請書類はCTDフォーマット・フランス語で提出。国立AMM委員会が年4回（四半期ごと）審査。DCI（一般名医薬品）の登録手数料200,000 FCFA、専門医薬品300,000 FCFA。AMM有効期間5年、更新可能。",
    "routes": [
      {
        "name": "AMM (Autorisation de Mise sur le Marché)",
        "nameJa": "市販承認（AMM）",
        "applicableClasses": ["Class I", "Class II", "Class III", "Class IV"],
        "description": "CTDフォーマット・フランス語で申請。書類完備後、規制部門が行政審査完了証を発行。国立AMM委員会が四半期ごとに審査。DCI: 登録200,000 FCFA / 更新100,000 FCFA。専門薬: 登録300,000 FCFA / 更新150,000 FCFA。医療機器の手数料は要確認。有効期間5年。",
        "subtypes": [],
        "avgReviewTime": "要確認（公式情報で裏付け未取得。AMM委員会は四半期ごとに開催）",
        "avgReviewTimeSource": "https://tradeportal.ml/procedure/145/136/step/2039/?l=fr",
        "fee": "DCI登録: 200,000 FCFA / 専門薬登録: 300,000 FCFA（医療機器の手数料は要確認）",
        "feeSource": "https://tradeportal.ml/procedure/145/136/step/2039/?l=fr",
        "url": "https://www.dirpharma.ml/docs/MANUEL_DE_PROCEDURES_POUR_ENREGISTREMENT_DES_MEDICAMENTS_A_USAGE_HUMAIN_AU_MALI.pdf"
      }
    ]
  },
  "electronicSubmission": {
    "system": "紙ベース申請（Trade Portal で手続案内）",
    "url": "https://tradeportal.ml/procedure/145/136/step/2039/?l=fr",
    "description": "AMM申請はDPMに直接紙ベースで提出。Mali Trade Portal（tradeportal.ml）で手続案内・必要書類一覧を確認可能。専用の医療機器電子申請ポータルは未確認。",
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
      "system": "Pharmacovigilance — DPM",
      "mandatory": true,
      "url": "https://clinregs.niaid.nih.gov/country/mali",
      "description": "DPMの品質保証・医薬品経済部門がpharmacovigilanceを管轄。WHO国際医薬品モニタリングプログラムに加盟。医療機器に特化したmatériovigilance制度は未確認。"
    },
    "recalls": {
      "authority": "DPM",
      "description": "DPMが市場安全措置（リコール・販売停止）を実施。LNSが品質不適合品の検出を支援。",
      "url": "https://www.usp-pqmplus.org/impact-stories/mali-strengthens-surveillance-medical-products"
    },
    "surveillance": "Pharmacovigilance制度は存在するが、医療機器に特化した市販後監視制度は未整備。LNSによる輸入医薬品の品質管理サンプリング検査が補完。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "DPM（推定）",
    "name": "Certificat de Libre Vente",
    "description": "CFS発行制度の公式詳細は未確認。輸入登録時に原産国のCFSが求められる慣行。",
    "processingTime": "要確認（公式情報で裏付け未取得）",
    "url": "https://www.dirpharma.ml/index.php/en/allcategories-en-gb/departments/la-direction-de-la-pharmacie-et-du-medicament"
  },
  "reimbursement": {
    "system": "AMO（強制医療保険）+ PPM公的調達",
    "authority": "CANAM / PPM",
    "description": "AMO（Loi 09-015、2009年〜）: CANAMが保険運営。予防・治療、手術、入院、医学検査、放射線・画像診断、医薬品をカバー。美容外科・代替医療・眼鏡・歯科補綴は対象外。医療機器の償還対象はArrêté 2021-4622/MSDS-SGで規定。PPMが公的施設向け医薬品・医療消耗品を一元調達。",
    "codingSystems": [],
    "url": "http://canam.ml/index.php/accueil/amo"
  },
  "marketingRules": {
    "authority": "DPM",
    "description": "フランス語ラベリング必須。申請書類はCTDフォーマット・フランス語。輸入にはDPMの事前許可が必要。BIVAC（Bureau Veritas）による輸入検証プログラム（PVI）への参加義務（商品価値の0.75%）。",
    "keyRules": [
      "フランス語ラベリング必須",
      "申請書類: CTDフォーマット・フランス語",
      "輸入: DPM事前許可（Autorisation d'importation）必須",
      "輸入検証: BIVAC PVI（商品価値の0.75%）",
      "マリ国内の保険加入義務（輸入業者）"
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
      "LNSがISO/IEC 17025:2017認定取得（SOAC、2022年）",
      "UEMOA域内規制調和（Règlement 06/2010）に参加",
      "CEマーキング・FDA承認・WHO PQを事実上参考にする"
    ]
  },
  "recentDevelopments": [
    {
      "date": "2024-10",
      "title": "2024年版国家必須医薬品リスト（DCI）公布",
      "description": "Arrêté 2024-4004/MSDS-SGにより2024年版の国家必須医薬品リスト（INN）を公布。DPMが年次更新する基準文書。"
    },
    {
      "date": "2022-12",
      "title": "LNSがISO/IEC 17025:2017認定取得",
      "description": "国立衛生研究所（LNS）がSOAC（西アフリカ認定システム）からISO/IEC 17025:2017認定を取得（証明書No. ES21007）。UEMOA圏初のフランス語圏における医薬品品質管理ラボ認定。"
    },
    {
      "date": "2021-11",
      "title": "AMO対象医薬品・医療機器リスト改定",
      "description": "Arrêté 2021-4622/MSDS-SGにより、AMO（強制医療保険）の対象となる医薬品・医療機器リストを改定。"
    }
  ],
  "lastUpdated": "2026-04-06",
  "verified": "2026-04-06"
};
