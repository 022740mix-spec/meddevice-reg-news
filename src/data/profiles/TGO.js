// トーゴ (Togo)
export default {
  "code": "TGO",
  "country": "トーゴ",
  "countryEn": "Togo",
  "region": "Middle East & Africa",
  "flag": "🇹🇬",
  "legalSystemOverview": {
    "type": "政府審査型（医薬品規制の一部として運用）",
    "description": "トーゴではDPML（Direction de la Pharmacie, du Médicament et des Laboratoires）が医薬品・医療機器の規制を管轄。独立した医療機器法はなく、Loi 2009-007（公衆衛生法典）第IV編「医薬品、医療機器及び薬局」が法的根拠。UEMOA加盟国として地域規制調和に参加。分類制度は未整備で、国際認証（CE/FDA/WHO PQ）への依存度が高い。CAMEG-Togoが公的調達における医療機器サプライヤーの事前選定を実施（EU指令93/42/CEEを参照基準として使用）。2024年にWHO協力的登録手続き（CRP）に参加。",
    "keyCharacteristics": [
      "DPML（保健省傘下）がNCA",
      "独立した医療機器法なし（公衆衛生法典第IV編で規制）",
      "分類制度は未整備（国際認証に依存）",
      "CTDフォーマット・フランス語で登録申請",
      "輸入特別許可（Autorisation spéciale d'importation）が必要",
      "UEMOA加盟国（地域規制調和に参加）",
      "フランス語ラベリング必須",
      "WHO CRP（SRA CRP・PQ CRP IVDs）参加"
    ]
  },
  "authorities": [
    {
      "name": "DPML",
      "fullName": "Directorate of Pharmacy, Medicines and Laboratories",
      "localName": "Direction de la Pharmacie, du Médicament et des Laboratoires",
      "role": "NCA: 医薬品・医療機器の登録（AMM）・品質管理・輸入監視・薬事監視。保健省傘下。",
      "url": "https://sante.gouv.tg/la-direction-des-pharmacies-du-medicament-et-des-laboratoires-du-ministere-de-la-sante-se-renforce/",
      "isPrimary": true
    },
    {
      "name": "CAMEG-Togo",
      "fullName": "Central Purchasing Office for Essential Medicines and Generic Drugs of Togo",
      "localName": "Centrale d'Achat des Médicaments Essentiels et Génériques du Togo",
      "role": "公的医療施設への医薬品・医療機器の一元調達・供給。医療機器サプライヤーの事前選定（EU指令93/42/CEE準拠）。",
      "url": "https://www.developmentaid.org/organizations/view/275581/centrale-dachat-des-medicaments-essentiels-et-generiques-du-togo-cameg",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "政府直接審査（NB制度なし）",
    "description": "DPMLが直接審査。第三者認証機関制度は存在しない。国際認証（CE/FDA/WHO PQ）を事実上認容。CAMEG-TogoはEU指令93/42/CEEを参照基準として医療機器サプライヤーの事前選定を実施。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "Loi 2009-007（公衆衛生法典）第IV編に医薬品・医療機器の定義が含まれる。独立した医療機器の法的定義は限定的。",
    "scope": "医薬品、医療機器、体外診断用医薬品（IVD）、試薬、消耗品、医療用生物学検査機器が対象。",
    "notes": "UEMOA加盟国として地域規制調和の枠組みにも準拠。"
  },
  "primaryLaw": {
    "title": "Loi n° 2009-007 du 15 mai 2009 portant Code de la santé publique de la République togolaise",
    "originalTitle": "Code de la santé publique de la République togolaise",
    "enacted": "2009",
    "lastAmended": null,
    "url": "https://bwcimplementation.org/sites/default/files/resource/togo_Health%20Code.pdf",
    "description": "公衆衛生法典。全622条・8編構成。第IV編「医薬品、医療機器及び薬局」が医療機器規制の法的根拠。医薬品・医療機器の定義、販売・調剤規定、輸入規制を含む。"
  },
  "implementingRegulations": [
    {
      "title": "Arrêté N° 0021/2013/MS/CAB/SG — Organisation des services du Ministère de la Santé",
      "date": "2013-02",
      "url": "https://amrh.nepad.org/amrh-countries/togo",
      "description": "保健省組織令。DPMLの役割・権限を規定。医薬品・医療機器のAMM（市販承認）審査体制を確立。",
      "category": "組織令"
    },
    {
      "title": "UEMOA医療機器ガイドライン（分類・市販承認・安全性能要件）",
      "date": "2019",
      "url": "https://www.marketaccess.africa/blogs/regulatory-spotlight---03",
      "description": "UEMOA委員会が加盟国向けに策定した医療機器の分類、市販承認、届出・伝達、安全性・性能要件に関するガイドライン。トーゴを含む全加盟8カ国に適用。",
      "category": "地域調和"
    }
  ],
  "relatedLaws": [
    {
      "title": "WHO協力的登録手続き（CRP）— トーゴ参加",
      "category": "国際協力",
      "enacted": "2020",
      "url": "https://extranet.who.int/prequal/news/togo-joins-collaborative-registration-procedure",
      "relevance": "トーゴがWHO CRP（SRA CRP及びPQ CRP IVDs）に参加（2020年11月）。SRA承認済み製品やWHO事前認定品について、90営業日以内の迅速審査が可能。"
    }
  ],
  "classification": {
    "system": "未整備（国際認証に依存・UEMOA調和中）",
    "basis": "公式な国内分類規則は未整備。UEMOA委員会が加盟国向けに医療機器分類ガイドラインを策定しており、GHTF/IMDRFの4クラス体系を参照。実務的にはCEマーキング・FDA承認・WHO事前認定品が追加審査なしで受入。CAMEG-Togoの調達ではEU指令93/42/CEEを参照基準として使用。",
    "classes": [
      {
        "name": "Class I",
        "nameJa": "クラスI（参考）",
        "riskLevel": "低",
        "description": "低リスク。国際認証に基づく評価。",
        "examples": ["弾性包帯", "聴診器", "車椅子", "舌圧子", "非滅菌手袋"],
        "approvalPath": "DPML登録（Homologation/AMM）"
      },
      {
        "name": "Class II",
        "nameJa": "クラスII（参考）",
        "riskLevel": "中低",
        "description": "中リスク。国際認証に基づく評価。",
        "examples": ["補聴器", "血圧計", "手術用手袋", "注射器", "カテーテル"],
        "approvalPath": "DPML登録（Homologation/AMM）"
      },
      {
        "name": "Class III",
        "nameJa": "クラスIII（参考）",
        "riskLevel": "中高",
        "description": "高リスク。国際認証に基づく評価。",
        "examples": ["人工呼吸器", "輸液ポンプ", "血液透析装置", "X線装置", "骨接合プレート"],
        "approvalPath": "DPML登録（Homologation/AMM）"
      },
      {
        "name": "Class IV",
        "nameJa": "クラスIV（参考）",
        "riskLevel": "高",
        "description": "最高リスク。国際認証に基づく評価。",
        "examples": ["人工心臓弁", "冠動脈ステント", "人工股関節", "植込み型除細動器", "吸収性縫合糸"],
        "approvalPath": "DPML登録（Homologation/AMM）"
      }
    ],
    "rules": [
      "公式な国内分類規則は未整備",
      "UEMOA分類ガイドライン（GHTF/IMDRF準拠）を参照",
      "CEマーキング・FDA承認・WHO PQを事実上認容"
    ],
    "totalProductCodes": null
  },
  "conformityAssessment": {
    "overview": "DPMLによる登録（Homologation/AMM）制度。CTDフォーマットでフランス語にて提出。輸入者は輸入特別許可（Autorisation spéciale d'importation）を事前取得。国際認証（CE/FDA/WHO PQ）を事実上認容。WHO CRP参加により、SRA承認品・WHO PQ品は90営業日以内の迅速審査が可能。",
    "routes": [
      {
        "name": "Homologation (AMM)",
        "nameJa": "登録（市販承認）",
        "applicableClasses": ["Class I", "Class II", "Class III", "Class IV"],
        "description": "CTDフォーマット・フランス語で申請。輸入者資格証明・製品適合証明書が必要。紙ベースでDPML事務局に提出。国際認証（CE/FDA）保有製品は簡略審査。",
        "subtypes": [],
        "avgReviewTime": "要確認（公式情報で裏付け未取得。WHO CRP経由は90営業日以内が目標）",
        "avgReviewTimeSource": "https://extranet.who.int/prequal/news/togo-joins-collaborative-registration-procedure",
        "fee": "要確認（公式情報で裏付け未取得）",
        "feeSource": "https://service-public.gouv.tg/service/62197bd433c0179346497a51/sante-protection-sociale/enregistrement-des-medicaments",
        "url": "https://service-public.gouv.tg/service/62197bd433c0179346497a51/sante-protection-sociale/enregistrement-des-medicaments"
      },
      {
        "name": "Autorisation spéciale d'importation",
        "nameJa": "輸入特別許可",
        "applicableClasses": ["Class I", "Class II", "Class III", "Class IV"],
        "description": "医薬品・医療機器の輸入に必要な規制文書。医療上・公衆衛生上の必要性の正当化、国際品質安全基準への適合証明、輸入者認定証・製品適合証明書を提出。紙ベースでDPML事務局に提出。",
        "subtypes": [],
        "avgReviewTime": "要確認（公式情報で裏付け未取得）",
        "avgReviewTimeSource": "https://service-public.gouv.tg/service/6799191932f04b51dcfa8bc9/licences-agrements-certificats/34s69l4y3j73",
        "fee": "要確認（公式情報で裏付け未取得）",
        "feeSource": "https://service-public.gouv.tg/service/6799191932f04b51dcfa8bc9/licences-agrements-certificats/34s69l4y3j73",
        "url": "https://service-public.gouv.tg/service/6799191932f04b51dcfa8bc9/licences-agrements-certificats/34s69l4y3j73"
      }
    ]
  },
  "electronicSubmission": {
    "system": "紙ベース申請（service-public.gouv.tgで申請書ダウンロード可）",
    "url": "https://service-public.gouv.tg/single-administration/61bb073566dc3337885b8da8",
    "description": "登録申請はservice-public.gouv.tgでPDF申請書をダウンロードし、印刷の上、DPML事務局に紙ベースで提出。専用の医療機器電子申請ポータルは未確認。",
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
      "system": "Pharmacovigilance — DPML",
      "mandatory": true,
      "url": "https://amrh.nepad.org/amrh-countries/togo",
      "description": "DPML内のCentre National de Pharmacovigilance du Togo（CNPV TG）が薬事監視を管轄。WHO国際医薬品モニタリングプログラム（PIDM）に正式参加。標準報告フォームを整備、研修ワークショップを定期開催。医療機器特有のmatériovigilance制度は未確認。"
    },
    "recalls": {
      "authority": "DPML",
      "description": "DPMLが品質不適合製品の市場回収措置を実施。",
      "url": "https://www.republicoftogo.com/toutes-les-rubriques/sante/retrait-de-deux-medicaments-defectueux-des-pharmacies"
    },
    "surveillance": "Pharmacovigilance制度は存在するが、医療機器に特化した市販後監視制度は未整備。DPML技術管理部門が輸入品の品質管理を担当。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "DPML（推定）",
    "name": "Certificat de Libre Vente",
    "description": "CFS発行制度の公式詳細は未確認。輸入登録時に原産国のCFSが求められる慣行。",
    "processingTime": "要確認（公式情報で裏付け未取得）",
    "url": "https://service-public.gouv.tg/service/679914d132f04b51dcf9c2ed/licences-agrements-certificats/2r1ccdbuq3k110"
  },
  "reimbursement": {
    "system": "公的調達（CAMEG-Togo）中心",
    "authority": "CAMEG-Togo / 保健省",
    "description": "公立医療施設への医療機器調達はCAMEG-Togoが一元管理。EU指令93/42/CEEを参照基準としたサプライヤー事前選定制度を運用（2002年〜）。包括的な医療保険制度（ユニバーサル・ヘルス・カバレッジ）は発展段階。医療機器特有の償還体系は未確認。",
    "codingSystems": [],
    "url": "https://www.developmentaid.org/organizations/view/275581/centrale-dachat-des-medicaments-essentiels-et-generiques-du-togo-cameg"
  },
  "marketingRules": {
    "authority": "DPML",
    "description": "フランス語ラベリング必須。申請書類はCTDフォーマット・フランス語。輸入者は輸入特別許可を事前取得。試薬・消耗品・医療用生物学検査機器の流通にはDPMLからの営業許可が必要。医薬品情報担当者（délégué médical）は職業カードが必要。",
    "keyRules": [
      "フランス語ラベリング必須",
      "申請書類: CTDフォーマット・フランス語",
      "輸入特別許可（Autorisation spéciale d'importation）必須",
      "試薬・医療用検査機器流通: DPML営業許可必須",
      "医薬品情報担当者: 職業カード必要"
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
      "CAMEG-TogoがEU指令93/42/CEEを医療機器サプライヤー事前選定の参照基準として使用",
      "CEマーキング・FDA承認・WHO事前認定を事実上認容",
      "UEMOA地域規制調和枠組みに参加"
    ]
  },
  "recentDevelopments": [
    {
      "date": "2021-09",
      "title": "AMA条約署名",
      "description": "トーゴが2021年9月20日にアフリカ医薬品庁（AMA）設立条約に署名。AMA条約は2021年11月5日に発効済み。トーゴは批准は未了（2026年4月時点）。"
    },
    {
      "date": "2020-11",
      "title": "WHO協力的登録手続き（CRP）への参加",
      "description": "トーゴがWHO CRP（SRA CRP及びPQ CRP IVDs）に参加（2020年11月3日発表）。SRA承認済み製品やWHO事前認定品について、90営業日以内の迅速審査が可能となる。"
    },
    {
      "date": "2019",
      "title": "UEMOA医療機器ガイドライン策定",
      "description": "UEMOA委員会がトーゴを含む加盟8カ国向けに医療機器の分類・市販承認・安全性能要件に関するガイドラインを策定。地域規制調和が進展。"
    }
  ],
  "lastUpdated": "2026-04-06",
  "verified": "2026-04-06"
};
