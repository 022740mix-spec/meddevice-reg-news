// パプアニューギニア (Papua New Guinea)
export default {
  "code": "PNG",
  "country": "パプアニューギニア",
  "countryEn": "Papua New Guinea",
  "region": "ASPAC",
  "flag": "\u{1F1F5}\u{1F1EC}",
  "legalSystemOverview": {
    "type": "立憲君主制（Constitutional Monarchy）・議会制（Westminster型）",
    "description": "国家保健省（National Department of Health）の医薬品サービス基準課（Pharmaceutical Services Standards Branch: PSSB）が医療機器規制を管轄。Medicines and Cosmetics Act 1999 および Medicines and Cosmetics Regulation 2002 が法的根拠。2016年改正法で手数料規定を整備。2019年にマーケティング・オーソリゼーション（製品登録）制度を正式運用開始。医療機器専用の分類制度や詳細な登録ガイドラインは未整備で、参照国認可（TGA、FDA等）への依存度が高い。WHOの支援の下で規制能力構築を推進中。",
    "keyCharacteristics": [
      "PSSBが医療機器を含む医療製品の規制を管轄",
      "Medicines and Cosmetics Act 1999が法的根拠",
      "2019年にマーケティング・オーソリゼーション制度を運用開始",
      "医療機器専用の詳細な分類制度・登録ガイドラインは未整備",
      "参照国認可（TGA、FDA、CE等）への依存度が高い",
      "WHO支援の下で規制能力構築・Draft Medicines Bill策定を推進中"
    ]
  },
  "authorities": [
    {
      "name": "PSSB",
      "fullName": "Pharmaceutical Services Standards Branch",
      "localName": null,
      "role": "医療機器・医薬品の登録・輸入管理・品質管理・薬事監視",
      "url": "https://www.health.gov.pg/subindex.php?pharm=1",
      "isPrimary": true
    },
    {
      "name": "NDOH",
      "fullName": "National Department of Health",
      "localName": null,
      "role": "医療政策全般・公衆衛生・PSSB の上位組織",
      "url": "https://www.health.gov.pg/",
      "isPrimary": false
    },
    {
      "name": "Pharmacy Board of PNG",
      "fullName": "Pharmacy Board of Papua New Guinea",
      "localName": null,
      "role": "薬剤師登録・製品登録承認（マーケティング・オーソリゼーション証書発行）",
      "url": "https://pharmaceuticalsocietypng.org/pharmaceutical-guidelines/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "なし（PSSBが直接審査）",
    "description": "Notified Body制度は存在しない。PSSBが申請審査を行い、Pharmacy Boardが承認を行う。参照国認可が審査で重要視される。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "Medicines and Cosmetics Act 1999 における定義: 'medical device' とは (a) 唯一もしくは主たる用途が治療的使用であるか通常治療的使用である機器、または (b) 医療目的に用いるものとして表示されるか合理的にそのように解されうる機器。'device' は器具、装置または考案物であり、その部品・部分品・付属品を含む。",
    "scope": "治療目的の機器全般。IVDの明示的な区分は法令上未整備。",
    "notes": "医療機器の定義は医薬品法制の中に包含されており、医療機器専用の詳細な範囲規定は限定的。"
  },
  "primaryLaw": {
    "title": "Medicines and Cosmetics Act 1999",
    "originalTitle": "Medicines and Cosmetics Act 1999",
    "enacted": "1999",
    "lastAmended": "2016（Medicines and Cosmetics (Amendment) Act 2016, No. 20 of 2016）",
    "url": "https://www.wipo.int/wipolex/en/text/199156",
    "description": "医薬品・化粧品・医療機器の規制に関する基本法。製品のライセンス制、輸入・製造・販売の許可制度、品質基準への適合義務、広告規制等を規定。2016年改正で手数料を法定化。"
  },
  "implementingRegulations": [
    {
      "title": "Medicines and Cosmetics Regulation 2002",
      "date": "2002",
      "url": "https://www.health.gov.pg/param_pdf/MCR2002.pdf",
      "description": "法の施行規則。登録手続き・品質要件・ラベル表示・広告規制等の詳細を規定。",
      "category": "施行規則"
    }
  ],
  "relatedLaws": [
    {
      "title": "Medicines and Cosmetics (Amendment) Act 2016",
      "date": "2016",
      "url": "https://www.parliament.gov.pg/index.php/bills-and-legislation/view/medicine-and-cosmetics-amendment-act-20161",
      "description": "Section 9（ライセンス申請）、Section 24（薬局登録申請）、Section 54（規則制定権）を改正。手数料を法律で規定する形に変更。",
      "category": "改正法"
    },
    {
      "title": "National Medicines Policy 2014",
      "date": "2014",
      "url": "https://www.health.gov.pg/pdf/NATDRUGPOLICY.pdf",
      "description": "医薬品政策の基本方針。医療製品の品質・安全性・有効性の確保、アクセス改善等を規定。",
      "category": "政策文書"
    }
  ],
  "classification": {
    "system": "独自の医療機器分類制度なし（参照国分類に依存）",
    "basis": "Medicines and Cosmetics Act 1999は医療機器の法的定義を含むが、独自のリスクベース分類体系は公表されていない。参照国（TGA、FDA等）の分類を参考にして審査が行われる。",
    "classes": [
      {
        "name": "Medical Device（一般）",
        "nameJa": "医療機器（一般）",
        "riskLevel": "全リスクレベル",
        "description": "独自の分類体系が未整備のため、全ての医療機器はMedicines and Cosmetics Act 1999に基づくライセンス制度の下で規制される。リスクに応じた段階的な規制区分は明示されていない。",
        "examples": [
          "診断機器",
          "手術器具",
          "埋込型機器",
          "体外診断用医薬品（要確認）"
        ],
        "approvalPath": "製品ライセンス（Product Licence）"
      }
    ],
    "rules": [
      "独自の分類規則は未公表",
      "参照国の分類を参考に審査",
      "WHO支援の下で分類制度の整備を検討中"
    ],
    "totalProductCodes": null
  },
  "conformityAssessment": {
    "overview": "PSSBに製品ライセンス申請を行う。参照国認可（TGA、FDA、CE等）の保有が審査の主要根拠。GMP適合施設での製造が求められる。Pharmacy Boardがマーケティング・オーソリゼーション証書を発行。",
    "routes": [
      {
        "name": "Product Licence / Marketing Authorisation",
        "nameJa": "製品ライセンス（マーケティング・オーソリゼーション）",
        "applicableClasses": [
          "全医療機器"
        ],
        "description": "PSSBに申請書類を提出。安全性・有効性の非臨床/臨床データ、GMP適合証明、参照国認可証明等を審査。製品ライセンスは最長5年間有効で更新可能。輸入者・卸売業者・販売業者もライセンス取得が必要。",
        "subtypes": [],
        "avgReviewTime": "要確認（公式情報で裏付け未取得）",
        "avgReviewTimeSource": null,
        "fee": "要確認（公式情報で裏付け未取得。2016年改正法で手数料は法定化されたが具体額の公開情報なし）",
        "feeSource": null,
        "url": "https://www.who.int/papuanewguinea/news/detail/15-08-2019-png-launches-registration-system-for-safe-and-quality-medicines"
      }
    ]
  },
  "electronicSubmission": {
    "system": "なし（紙ベース）",
    "url": null,
    "description": "電子申請システムは未導入。申請はPSSBに対して紙ベースで行われる。",
    "mandatory": false
  },
  "udi": {
    "required": false,
    "system": "未導入",
    "description": "独自のUDI（機器固有識別子）制度は未導入。",
    "url": null,
    "timeline": "未定"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "薬事監視（Pharmacovigilance）— PSSB / Medicines Therapeutic Committees",
      "mandatory": true,
      "url": "https://www.who.int/papuanewguinea/news/detail/12-08-2025-papua-new-guinea-advances-medicines-regulatory-reform-with-technical-review-workshop",
      "description": "PSSBが薬事監視活動を統括。病院に設置されたMedicines Therapeutic Committees（MTC）が副作用・有害事象の監視・報告を行い、Uppsala Monitoring Centre（UMC）に報告。医療機器固有の有害事象報告制度の詳細は要確認。"
    },
    "recalls": {
      "authority": "PSSB / NDOH",
      "description": "PSSBおよびNDOHがリコールを管理。参照国のリコール・安全性警告情報も監視。",
      "url": null
    },
    "surveillance": "PSSBによる市販後監視。WHO支援の下でファーマコビジランス能力を構築中。参照国の安全性アラート情報を活用。Medicine Quality Control Laboratoryによる品質試験も実施。"
  },
  "certificateOfFreeSale": {
    "available": false,
    "issuingAuthority": null,
    "name": null,
    "description": "登録申請時に原産国の自由販売証明書（CFS）の提出が求められる場合がある。パプアニューギニアからのCFS発行制度は要確認。",
    "processingTime": null,
    "url": null
  },
  "reimbursement": {
    "system": "公的医療制度（政府負担）",
    "authority": "NDOH",
    "description": "パプアニューギニアの公的医療は政府が大部分を負担。医療機器の調達は主に政府調達プロセス・国際援助機関を通じて行われる。独立した医療機器償還制度は未整備。",
    "codingSystems": [
      "要確認"
    ],
    "url": null
  },
  "marketingRules": {
    "authority": "PSSB",
    "description": "Medicines and Cosmetics Act 1999 Part IVに基づく広告規制。虚偽・誤解を招く広告が禁止されている。",
    "keyRules": [
      "登録済み製品のみ販売可能",
      "虚偽・誤解を招く広告の禁止",
      "輸入者・卸売業者・販売業者はライセンス取得が必要"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "パプアニューギニアはMDSAPに参加していない。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "ISO 13485認証はGMP適合の品質証明として参照される。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "リスクマネジメント規格として参照。"
    },
    "iec62304": {
      "accepted": false,
      "notes": "要確認。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "医用電気機器の安全規格として参照。品質基準はEuropean Pharmacopoeia、British Pharmacopoeia、WHO International Pharmacopoeia等のモノグラフを採用可能（Act Section 14）。"
    },
    "others": []
  },
  "recentDevelopments": [
    {
      "date": "2025-08",
      "title": "医薬品規制改革ワークショップ開催",
      "description": "NDOHとWHOが共同でDraft Medicines Billの技術レビューワークショップを開催。2024年のWHO Global Benchmarking評価に基づくInstitutional Development Plan（IDP）およびCAPAプランの整合を推進。太平洋島嶼国初の構造化CAPAプランニングを実施。"
    },
    {
      "date": "2019-08",
      "title": "マーケティング・オーソリゼーション制度の正式運用開始",
      "description": "NDOHがWHO支援の下で製品登録プロセス（マーケティング・オーソリゼーション制度）を正式に運用開始。Pharmacy Boardが初のマーケティング・オーソリゼーション証書を発行。"
    },
    {
      "date": "2017-11",
      "title": "Medicine Quality Control Laboratory開設",
      "description": "医薬品品質管理試験所が開設。太平洋地域のCenter of Excellenceとしての位置づけを目指す。"
    }
  ],
  "lastUpdated": "2026-04-06",
  "verified": null
};
