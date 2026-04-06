// フランス (France)
export default {
  "code": "FRA",
  "country": "フランス",
  "countryEn": "France",
  "region": "Europe",
  "flag": "🇫🇷",
  "legalSystemOverview": {
    "type": "EU加盟国（MDR/IVDR 直接適用）+ Code de la santé publique 国内補完",
    "description": "フランスはEU第2位の医療機器市場。EU MDR/IVDRが直接適用。Ordonnance 2022-582（MDR）およびOrdonnance 2022-1086（IVDR）でCode de la santé publique（CSP）を改正し国内法を整合。ANSMがNCA。LNE/G-MED (NB 0459) がフランス唯一のMDR指定NB。HASのCNEDiMTSが償還評価を実施。",
    "keyCharacteristics": [
      "EU MDR/IVDR 直接適用",
      "Ordonnance 2022-582/2022-1086 でCSPをMDR/IVDRに整合",
      "ANSM がNCA（市場監視・ビジランス・臨床試験）",
      "LNE/G-MED (NB 0459) がフランス唯一のMDR NB",
      "HAS/CNEDiMTS が医療機器の償還評価",
      "LPPR（LPP）償還リスト制度",
      "フランス語ラベリング・IFU必須",
      "コネクテッドDM: Doctrine Technique du Numérique en Santé 準拠義務"
    ]
  },
  "authorities": [
    {
      "name": "ANSM",
      "fullName": "National Agency for the Safety of Medicines and Health Products",
      "localName": "Agence nationale de sécurité du médicament et des produits de santé",
      "role": "NCA: 市場監視・ビジランス（matériovigilance）・臨床試験審査・NB監督・分類判定・流通業者届出受理",
      "url": "https://ansm.sante.fr/documents/reference/reglementation-relative-aux-dispositifs-medicaux-dm-et-aux-dispositifs-medicaux-de-diagnostic-in-vitro-dmdiv",
      "isPrimary": true
    },
    {
      "name": "HAS",
      "fullName": "French National Authority for Health",
      "localName": "Haute Autorité de Santé",
      "role": "医療技術評価（HTA）。CNEDiMTS委員会が医療機器のLPPR償還評価を実施。",
      "url": "https://www.has-sante.fr/jcms/c_2036238/en/national-committee-for-the-evaluation-of-medical-devices-and-health-technologies-cnedimts",
      "isPrimary": false
    },
    {
      "name": "DGS",
      "fullName": "Directorate General of Health",
      "localName": "Direction générale de la santé",
      "role": "保健政策の最上位監督。ANSM所管。",
      "url": "https://sante.gouv.fr/ministere/organisation/organisation-des-directions-et-services/article/organisation-de-la-direction-generale-de-la-sante-dgs",
      "isPrimary": false
    },
    {
      "name": "CNAM",
      "fullName": "National Health Insurance Fund",
      "localName": "Caisse nationale de l'assurance maladie",
      "role": "LPPR（LPP）償還リスト管理・価格交渉（CEPS経由）。",
      "url": "https://www.ameli.fr/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "EU MDR/IVDR Notified Body（フランス国内1機関）",
    "description": "LNE/G-MED (NB 0459) がフランス唯一のMDR指定NB。IVDRも指定取得。ANSMがNB監督機関。",
    "bodies": [
      {
        "nb": "0459",
        "name": "LNE/G-MED",
        "url": "https://lne-gmed.com/",
        "mdr": true,
        "ivdr": true
      }
    ]
  },
  "deviceDefinition": {
    "legalDefinition": "EU MDR Article 2(1) がそのまま適用。CSP Article L5211-1により国内法にも定義。Annex XVI製品（非医療目的の類似製品: 美容フィラー・非矯正コンタクトレンズ等）も対象に含む。",
    "scope": "IVD は IVDR (EU) 2017/746。SaMD・AI/ML医療機器も対象。コネクテッドDMはDoctrine Technique du Numérique en Santé準拠。",
    "notes": "流通業者（輸入・卸含む）はANSMへの届出義務あり（CSP Article L5211-3-1）。"
  },
  "primaryLaw": {
    "title": "Regulation (EU) 2017/745 — MDR",
    "originalTitle": "Règlement (UE) 2017/745 relatif aux dispositifs médicaux",
    "enacted": "2017",
    "lastAmended": "2024",
    "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32017R0745",
    "description": "EU MDR直接適用（2021年5月26日全面適用）。移行期間: Class III・Class IIbインプラントは2027年末、Class IIa・その他Class IIb・Class I (Is/Im/Ir) は2028年末（Regulation (EU) 2023/607による延長）。"
  },
  "implementingRegulations": [
    {
      "title": "Ordonnance n° 2022-582 du 20 avril 2022",
      "date": "2022-04",
      "url": "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000045614779",
      "description": "MDR (EU) 2017/745のフランス国内法適合。CSP改正。ANSM権限・臨床試験手続・罰則・Annex XVI製品規制を規定。",
      "category": "国内補完法（MDR）"
    },
    {
      "title": "Ordonnance n° 2022-1086 du 29 juillet 2022",
      "date": "2022-07",
      "url": "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000046113837",
      "description": "IVDR (EU) 2017/746のフランス国内法適合。IVD定義・ANSM権限・NB監督・ビジランス・罰則を規定。",
      "category": "国内補完法（IVDR）"
    },
    {
      "title": "Code de la santé publique — Livre II, Titre I (Articles L5211-1 à L5211-6)",
      "date": "2022",
      "url": "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006072665/LEGISCTA000006171570/",
      "description": "医療機器の法的定義・上市要件・ANSM権限の根拠条文。Ordonnance 2022-582/1086により改正。",
      "category": "公衆衛生法典"
    }
  ],
  "relatedLaws": [
    {
      "title": "Code de la sécurité sociale (CSS) — LPPR関連条項",
      "category": "社会保障",
      "enacted": "1985",
      "url": "https://www.legifrance.gouv.fr/codes/texte_lc/LEGITEXT000006073189/",
      "relevance": "LPPR（LPP）償還リスト・価格設定・HAS評価の根拠法。"
    },
    {
      "title": "GDPR / Règlement général sur la protection des données",
      "category": "データ保護",
      "enacted": "2018",
      "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679",
      "relevance": "健康データ処理に適用。CNIL（情報自由委員会）が監督。"
    },
    {
      "title": "Loi Jardé (Loi n° 2012-300)",
      "category": "臨床研究",
      "enacted": "2012",
      "url": "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000025441587",
      "relevance": "人を対象とする研究の倫理枠組み。MDR臨床試験はOrdonnance 2022-582で別途規定。"
    }
  ],
  "classification": {
    "system": "EU MDR 4クラス制",
    "basis": "EU MDR Annex VIII（22のルールに基づくリスクベース分類）。ANSMが分類争議の判定権限を持つ。",
    "classes": [
      {
        "name": "Class I",
        "nameJa": "クラスI",
        "riskLevel": "低",
        "description": "低リスク機器。自己宣言（Is: 滅菌、Im: 計測、Ir: 再使用手術器具はNB関与）。",
        "examples": [
          "弾性包帯",
          "聴診器",
          "歩行補助器",
          "非滅菌手袋",
          "医療用ベッド"
        ],
        "approvalPath": "自己宣言（DoC）"
      },
      {
        "name": "Class IIa",
        "nameJa": "クラスIIa",
        "riskLevel": "中低",
        "description": "中低リスク。NB関与必須。",
        "examples": [
          "補聴器",
          "超音波診断装置",
          "吸引カテーテル",
          "血圧計",
          "コンタクトレンズケア液"
        ],
        "approvalPath": "NB適合性評価"
      },
      {
        "name": "Class IIb",
        "nameJa": "クラスIIb",
        "riskLevel": "中高",
        "description": "中高リスク。NB詳細審査。",
        "examples": [
          "人工呼吸器",
          "輸液ポンプ",
          "放射線治療装置",
          "血液透析装置",
          "骨接合プレート"
        ],
        "approvalPath": "NB適合性評価"
      },
      {
        "name": "Class III",
        "nameJa": "クラスIII",
        "riskLevel": "高",
        "description": "最高リスク。NB最も厳格な審査 + EU Expert Panel意見。",
        "examples": [
          "人工心臓弁",
          "冠動脈ステント",
          "人工股関節",
          "植込み型除細動器",
          "吸収性縫合糸"
        ],
        "approvalPath": "NB適合性評価 + Expert Panel"
      }
    ],
    "rules": [
      "EU MDR Annex VIII（22ルール）直接適用",
      "ANSMが分類争議を判定"
    ],
    "totalProductCodes": "EU CND（European Nomenclature of Medical Devices）"
  },
  "conformityAssessment": {
    "overview": "EU MDR Annex IX〜XIに基づく適合性評価がそのまま適用。フランス固有の追加要件として流通業者届出（ANSM）、LPPR申請（HAS/CNEDiMTS）がある。",
    "routes": [
      {
        "name": "EU MDR Conformity Assessment",
        "nameJa": "EU MDR 適合性評価",
        "applicableClasses": ["Class I", "Class IIa", "Class IIb", "Class III"],
        "description": "Annex IX（QMS + 技術文書審査）、Annex X（型式検査）、Annex XI（製造適合性審査）の組合せ。Class IはDoC（Is/Im/Irを除く）。詳細はEUプロファイル参照。",
        "subtypes": [
          "Annex IX: QMS + 技術文書審査",
          "Annex X: 型式検査",
          "Annex XI: 製造適合性審査"
        ],
        "avgReviewTime": "NB審査: 6〜18か月（クラス・NBにより異なる）",
        "avgReviewTimeSource": "https://www.emergobyul.com/resources/market-european-union",
        "fee": "NB審査料（NB・クラス・機器数により異なる）",
        "feeSource": "https://health.ec.europa.eu/document/download/ff5716d5-fe77-4f45-b883-fcf3da4acd15_en?filename=md_nbs_fees_en.pdf",
        "url": "https://lne-gmed.com/notified-bodies-role"
      },
      {
        "name": "LPPR Registration (Reimbursement)",
        "nameJa": "LPPR償還登録",
        "applicableClasses": ["Class I", "Class IIa", "Class IIb", "Class III"],
        "description": "HAS/CNEDiMTSによる償還評価。ASA（実際の利益）とASR（改善の利益）を評価。CEPS（経済委員会）と価格交渉。Liste en sus（高額病院機器）も別途あり。CE適合が前提。",
        "subtypes": [
          "LPPR nom de marque（ブランド名登録）",
          "LPPR ligne générique（汎用カテゴリ登録）",
          "Liste en sus（入院高額機器）"
        ],
        "avgReviewTime": "CNEDiMTS評価: 約6か月 + CEPS価格交渉",
        "avgReviewTimeSource": "https://mediclever.com/medical-device-reimbursement-france.php",
        "fee": "要確認（公式情報で裏付け未取得）",
        "feeSource": "https://www.has-sante.fr/jcms/c_2036238/en/national-committee-for-the-evaluation-of-medical-devices-and-health-technologies-cnedimts",
        "url": "https://www.has-sante.fr/jcms/c_2036238/en/national-committee-for-the-evaluation-of-medical-devices-and-health-technologies-cnedimts"
      }
    ]
  },
  "electronicSubmission": {
    "system": "EUDAMED + ANSM e-submission（Vigimater）",
    "url": "https://ansm.sante.fr/documents/reference/faq-reglement-dm-eudamed",
    "description": "2026年5月28日よりEUDAMEDの4モジュール（Actor・UDI/Device・NB/Certificate・市場監視）が義務化。ビジランス報告はMIRフォーム（pdf/xml）をmateriovigilance@ansm.sante.frに送付、またはVigimaterシステムで追跡。流通業者届出はANSMへ。",
    "mandatory": true
  },
  "udi": {
    "required": true,
    "system": "EU UDI — EUDAMED",
    "description": "EU MDR Article 27に基づくUDI要件適用。EUDAMED UDI/Deviceモジュールに登録義務（2026年5月28日義務化）。既存ANSM国内登録はEUDAMEDに再登録要（2026年11月28日まで）。",
    "url": "https://ec.europa.eu/tools/eudamed/",
    "timeline": "EUDAMED UDI義務化: 2026年5月28日。既存国内登録→EUDAMED移行: 2026年11月28日まで"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "Matériovigilance — ANSM",
      "mandatory": true,
      "url": "https://ansm.sante.fr/documents/reference/post-market-surveillance-and-vigilance/impression/311",
      "description": "製造業者: MIR（Manufacturer Incident Report）をANSMに提出。Vigimaterで追跡管理。医療従事者・使用者もANSMへのインシデント報告義務あり。FSN（安全性情報通知）はフランス語必須。"
    },
    "recalls": {
      "authority": "ANSM",
      "description": "FSCA（是正措置）/FSNはANSMに通知。ANSMが市場監視・リコール指示。ANSMサイトで安全情報を公開。",
      "url": "https://ansm.sante.fr/qui-sommes-nous/our-missions/ensuring-the-safety-of-health-products/p/impression/214"
    },
    "surveillance": "EU MDR PMS/PSUR/PMCF要件適用。ANSMがmatériovigilance（医療機器監視）とréactovigilance（IVD監視）を統括。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "CCI Paris Île-de-France（2015年10月ANSMから移管）",
    "name": "Certificat de libre vente / Certificate of Free Sale",
    "description": "2015年10月以降、CLV発行はCCI Paris Île-de-Franceに移管（ANSMは発行しない）。製造業者またはEC-REPが申請。",
    "processingTime": "要確認（公式情報で裏付け未取得）",
    "url": "https://www.entreprises.cci-paris-idf.fr/web/international/certificat-libre-vente"
  },
  "reimbursement": {
    "system": "Assurance Maladie（法定医療保険）— LPPR + GHS/T2A",
    "authority": "HAS (CNEDiMTS) / CEPS / CNAM",
    "description": "外来・在宅: LPPR（Liste des Produits et Prestations Remboursables）に登録。CNEDiMTSがASA（実際の利益）・ASR（改善の利益）を評価→CEPSと価格交渉。入院: GHS（T2A包括払い）に包含。高額革新機器はListe en sus（包括外加算）。2026年LFSS（社会保障財政法）で価格環境厳格化。CCAM v.81（2026年1月）で新コード追加。",
    "codingSystems": [
      "LPPR / LPP（製品・サービスリスト）",
      "CCAM（医療行為共通分類）",
      "GHS / T2A（入院包括払い）",
      "Liste en sus（包括外加算リスト）"
    ],
    "url": "https://mediclever.com/medical-device-reimbursement-france.php"
  },
  "marketingRules": {
    "authority": "ANSM / DGCCRF",
    "description": "フランス語ラベリング・IFU必須（CSP規定）。医療機器広告はCSP規定に準拠。一般消費者向け広告は制限あり。FSNはフランス語必須。",
    "keyRules": [
      "フランス語ラベリング・IFU必須",
      "FSN: フランス語必須",
      "一般消費者向け医療機器広告の制限",
      "インプラントカード: フランス語"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "EU加盟国としてMDSAP非参加。MDSAPの正式参加国は5カ国のみ（USA/CAN/AUS/BRA/JPN）。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "EN ISO 13485:2016。NB審査で実質必須。"
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
      "Doctrine Technique du Numérique en Santé（コネクテッドDM要件）"
    ]
  },
  "recentDevelopments": [
    {
      "date": "2026-05",
      "title": "EUDAMED義務化（2026年5月28日）",
      "description": "Actor・UDI/Device・NB/Certificate・市場監視の4モジュール義務化。既存ANSM国内登録は2026年11月28日までにEUDAMEDへ移行。"
    },
    {
      "date": "2026-01",
      "title": "LFSS 2026 — 医療機器価格環境変更・CCAM v.81",
      "description": "社会保障財政法2026により医療機器の価格交渉環境がより厳格化。CCAM v.81で新コード追加（高成長分野に影響）。"
    },
    {
      "date": "2026-04",
      "title": "HAS — 初のデジタル治療（DTx）償還肯定評価（Joe / Ludocare）",
      "description": "2026年4月2日、HASがフランス初のDTxとしてJoe（Ludocare社、7-11歳の小児喘息管理アプリ）に対しLPPR登録の肯定評価（ASA十分・ASR IV）を発出。"
    },
    {
      "date": "2022-04",
      "title": "Ordonnance 2022-582 施行（MDR国内法適合）",
      "description": "CSPをEU MDRに整合。ANSM権限強化・臨床試験手続・罰則・Annex XVI製品規制を規定。"
    }
  ],
  "lastUpdated": "2026-04-03",
  "verified": "2026-04-03"
};
