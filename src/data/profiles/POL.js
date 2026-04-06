// ポーランド (Republic of Poland)
export default {
  "code": "POL",
  "country": "ポーランド",
  "countryEn": "Republic of Poland",
  "region": "Europe",
  "flag": "🇵🇱",
  "legalSystemOverview": {
    "type": "EU加盟国・議会共和制",
    "description": "ポーランドはEU加盟国としてEU MDR（Regulation 2017/745）およびIVDR（Regulation 2017/746）が直接適用される。国内実施法として2022年4月7日医療機器法を制定し、広告規制等のEU規則を補完する事項を規定。URPL が管轄当局として機能する。",
    "keyCharacteristics": [
      "EU MDR / IVDR が直接適用",
      "URPL が管轄当局（Competent Authority）",
      "2022年医療機器法で広告規制等を独自に強化",
      "EU MDRに基づく4クラス分類（I / IIa / IIb / III）",
      "CEマーキングが市場投入の前提条件",
      "EUDAMED登録が順次義務化"
    ]
  },
  "authorities": [
    {
      "name": "URPL",
      "fullName": "Office for Registration of Medicinal Products, Medical Devices and Biocidal Products",
      "localName": "Urząd Rejestracji Produktów Leczniczych, Wyrobów Medycznych i Produktów Biobójczych",
      "role": "医療機器の市場監視、臨床試験監督、ビジランス報告管理、EUDAMED連携、広告規制の執行を統括",
      "url": "https://www.urpl.gov.pl/",
      "isPrimary": true
    },
    {
      "name": "NFZ",
      "fullName": "National Health Fund",
      "localName": "Narodowy Fundusz Zdrowia",
      "role": "医療機器を含む医療技術の保険償還管理",
      "url": "https://www.nfz.gov.pl/",
      "isPrimary": false
    },
    {
      "name": "AOTMiT",
      "fullName": "Agency for Health Technology Assessment and Tariff System",
      "localName": "Agencja Oceny Technologii Medycznych i Taryfikacji",
      "role": "医療技術評価（HTA）の実施。NFZへの償還推奨の提供",
      "url": "https://www.aotmit.gov.pl/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "EU Notified Bodies（EU MDR/IVDR指定認証機関）",
    "description": "EU MDRの枠組み内でNotified Body制度が適用される。Class IIa以上の機器はNotified Bodyによる適合性評価が必要。ポーランド国内NBは限定的だが、他EU加盟国のNB認証も有効。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "EU MDR Article 2(1)に定義される医療機器と同一。",
    "scope": "IVDはIVDR適用。SaMD、付属品、美容目的の特定製品（Annex XVI）を含む。",
    "notes": "ポーランド国内法で追加の定義は行わず、EU MDR/IVDRの定義をそのまま適用。"
  },
  "primaryLaw": {
    "title": "2022年4月7日医療機器法（Ustawa o wyrobach medycznych）",
    "originalTitle": "Ustawa z dnia 7 kwietnia 2022 r. o wyrobach medycznych",
    "enacted": "2022-04-07",
    "lastAmended": "2023-07-01",
    "url": "https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20220000974",
    "description": "EU MDR/IVDRを補完するポーランド国内実施法。広告規制の詳細規定、輸入業者・流通業者の追加義務、URPLの権限・罰則規定を規定。2023年7月1日に広告規制関連条項が完全施行。"
  },
  "implementingRegulations": [
    {
      "title": "EU MDR — Regulation (EU) 2017/745",
      "date": "2017-05-05",
      "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32017R0745",
      "description": "EU全域で直接適用される医療機器規則。2021年5月26日から完全適用。",
      "category": "EU規則"
    },
    {
      "title": "EU IVDR — Regulation (EU) 2017/746",
      "date": "2017-05-05",
      "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32017R0746",
      "description": "体外診断用医療機器に関するEU規則。2022年5月26日から完全適用。",
      "category": "EU規則（IVD）"
    },
    {
      "title": "保健大臣令（2023年4月21日）— 医療機器広告に関する規則",
      "date": "2023-04-21",
      "url": "https://www.urpl.gov.pl/",
      "description": "2022年医療機器法第55条・56条に基づく広告規制の実施細則。2023年7月1日施行。",
      "category": "広告規制"
    }
  ],
  "relatedLaws": [
    {
      "title": "GDPR — Regulation (EU) 2016/679",
      "category": "データ保護",
      "enacted": "2016-04-27",
      "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679",
      "relevance": "医療機器から取得される健康データの処理に適用。ポーランドではUODOが所管。"
    },
    {
      "title": "医薬品法（Prawo farmaceutyczne）",
      "category": "医薬品規制",
      "enacted": "2001-09-06",
      "url": "https://isap.sejm.gov.pl/",
      "relevance": "コンビネーション製品の規制に関連。"
    }
  ],
  "classification": {
    "system": "EU MDRリスクベース4クラス分類",
    "basis": "EU MDR Annex VIIIの分類ルールに基づく。",
    "classes": [
      {
        "name": "Class I",
        "nameJa": "クラスI（低リスク）",
        "riskLevel": "低",
        "description": "低リスクの医療機器。自己宣言による適合性評価。",
        "examples": [
          "包帯",
          "車椅子",
          "手術用メス（非滅菌）",
          "医療用ベッド"
        ],
        "approvalPath": "自己宣言 → CEマーキング → EUDAMED登録"
      },
      {
        "name": "Class IIa",
        "nameJa": "クラスIIa（中低リスク）",
        "riskLevel": "中低",
        "description": "中程度の低リスク。Notified Bodyの関与が必要。",
        "examples": [
          "超音波診断装置",
          "歯科用充填材",
          "補聴器",
          "吸引器"
        ],
        "approvalPath": "Notified Body審査 → CEマーキング → EUDAMED登録"
      },
      {
        "name": "Class IIb",
        "nameJa": "クラスIIb（中高リスク）",
        "riskLevel": "中高",
        "description": "中〜高程度のリスク。",
        "examples": [
          "人工呼吸器",
          "血液透析器",
          "骨接合プレート",
          "放射線治療装置"
        ],
        "approvalPath": "Notified Body審査（技術文書+QMS） → CEマーキング → EUDAMED登録"
      },
      {
        "name": "Class III",
        "nameJa": "クラスIII（高リスク）",
        "riskLevel": "高",
        "description": "最高リスクの医療機器。臨床データに基づく最も厳格な適合性評価。",
        "examples": [
          "心臓ペースメーカー",
          "人工心臓弁",
          "冠動脈ステント",
          "乳房インプラント"
        ],
        "approvalPath": "Notified Body審査（技術文書+QMS+臨床評価） → CEマーキング → EUDAMED登録"
      }
    ],
    "rules": [
      "EU MDR Annex VIIIの22分類ルールに基づく",
      "製造業者が分類を判断し、URPLが監視",
      "分類の相違がある場合はURPLが最終判断",
      "SaMD: Rule 11に基づき分類"
    ],
    "totalProductCodes": null
  },
  "conformityAssessment": {
    "overview": "EU MDRに基づく適合性評価がそのまま適用。Class Iは自己宣言、Class IIa以上はNotified Bodyの関与が必要。CEマーキング取得によりEU全域で流通可能。ポーランド独自の追加承認手続きはないが、EUDAMED登録とURPLへの通知義務がある。",
    "routes": [
      {
        "name": "Self-Declaration (Class I)",
        "nameJa": "自己適合宣言（Class I）",
        "applicableClasses": [
          "Class I"
        ],
        "description": "製造業者が技術文書を整備し、適合宣言書を作成してCEマーキングを貼付。",
        "subtypes": [],
        "avgReviewTime": "N/A（自己宣言）",
        "fee": "N/A",
        "url": "https://www.urpl.gov.pl/"
      },
      {
        "name": "Notified Body Assessment (Class IIa/IIb/III)",
        "nameJa": "Notified Body適合性評価",
        "applicableClasses": [
          "Class IIa",
          "Class IIb",
          "Class III"
        ],
        "description": "EU MDR Annex IX〜XIに基づく適合性評価手続き。",
        "subtypes": [
          "Annex IX（QMS+技術文書審査）",
          "Annex X + Annex XI"
        ],
        "avgReviewTime": "6〜18ヶ月",
        "fee": "Notified Bodyごとに設定",
        "url": "https://www.urpl.gov.pl/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "EUDAMED + URPLポータル",
    "url": "https://ec.europa.eu/tools/eudamed/",
    "description": "EUDAMED が順次稼働中。ポーランド国内の臨床試験申請等はURPLポータルを通じて提出。",
    "mandatory": true
  },
  "udi": {
    "required": true,
    "system": "EU UDI制度（EU MDR Article 27）",
    "description": "EU MDRに基づくUDI制度。Basic UDI-DIとUDI-DIのEUDAMEDデータベース登録およびラベルへの表示が義務。",
    "url": "https://ec.europa.eu/tools/eudamed/",
    "timeline": "Class III・植込み型: 義務化済み / Class IIa・IIb: 段階的義務化中 / Class I: EUDAMED全面稼働後"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "EU MDR Article 87 — ビジランスシステム",
      "mandatory": true,
      "url": "https://www.urpl.gov.pl/",
      "description": "製造業者は重大インシデントを発見から15日以内にURPLに報告。ポーランド2022年法で医療従事者・使用者にも報告義務を規定。"
    },
    "recalls": {
      "authority": "URPL / 製造業者",
      "description": "FSCA はEU MDRに基づき実施。RAPEX/Safety Gate を通じたEU全域通報制度あり。",
      "url": "https://www.urpl.gov.pl/"
    },
    "surveillance": "URPLによる市場監視。EU MDR Chapter VIIに基づくPMS・PMCFの監督。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "URPL",
    "name": "Certificate of Free Sale",
    "description": "CEマーキング取得済み医療機器について、URPLが自由販売証明書を発行。",
    "processingTime": "約2〜4週間",
    "url": "https://www.urpl.gov.pl/"
  },
  "reimbursement": {
    "system": "国民健康基金（NFZ）",
    "authority": "NFZ / AOTMiT / 保健省",
    "description": "医療機器の保険償還はNFZ制度を通じて実施。高額医療機器はAOTMiTによるHTA評価を経て償還推奨。JGP（DRG類似）および個別償還カタログが存在。",
    "codingSystems": [
      "JGP（DRG類似コード）",
      "NFZ償還カタログコード"
    ],
    "url": "https://www.nfz.gov.pl/"
  },
  "marketingRules": {
    "authority": "URPL",
    "description": "2022年医療機器法第55条・56条および2023年保健大臣令により詳細規則を規定。EU MDR Article 7を超える独自の厳格な広告規制を導入。",
    "keyRules": [
      "広告の実施主体は事業者または書面承認者に限定",
      "虚偽・誤解を招く広告の禁止",
      "Class IIb/III植込み型の一般消費者向け広告を制限",
      "URPL所長が是正命令・広告停止命令を発出可能",
      "違反時の行政罰（最大200万PLN）"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "ポーランドはEU加盟国としてMDSAPに参加していない。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "EN ISO 13485:2016がQMS標準。NB適合性評価で事実上の要件。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "EN ISO 14971:2019がEU整合規格。技術文書の必須要素。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "EN IEC 62304:2006+A1:2015がSW整合規格。SaMDで要求。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "EN IEC 60601シリーズがEU整合規格。"
    },
    "others": [
      {
        "name": "EN ISO 10993シリーズ",
        "notes": "生物学的安全性評価のEU整合規格。"
      },
      {
        "name": "EN IEC 62443",
        "notes": "サイバーセキュリティ要件。MDCG 2019-16関連。"
      }
    ]
  },
  "recentDevelopments": [
    {
      "date": "2023-07",
      "title": "医療機器広告規制の完全施行",
      "description": "2022年医療機器法の広告関連条項が完全施行。EU域内で最も厳格な医療機器広告規制の一つ。"
    },
    {
      "date": "2022-04",
      "title": "2022年医療機器法の制定",
      "description": "EU MDR/IVDRを補完する国内実施法が制定。"
    },
    {
      "date": "2025-12",
      "title": "EU MDR/IVDR簡素化改正案（EC提案）",
      "description": "欧州委員会がMDR/IVDRの簡素化改正案を公表。規制手続きの合理化・NB能力拡充等を提案。ポーランドを含むEU全域に影響。"
    }
  ],
  "lastUpdated": "2026-04-06",
  "verified": "2026-04-06"
};
