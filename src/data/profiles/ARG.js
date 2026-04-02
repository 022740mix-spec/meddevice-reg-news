// アルゼンチン (Argentine Republic)
export default {
  "code": "ARG",
  "country": "アルゼンチン",
  "countryEn": "Argentine Republic",
  "region": "Latam",
  "flag": "🇦🇷",
  "legalSystemOverview": {
    "type": "連邦制共和国（シビルロー体系）",
    "description": "アルゼンチンの医療機器規制は ANMAT（Administración Nacional de Medicamentos, Alimentos y Tecnología Médica）が管轄する。Disposición ANMAT 2318/2002 が医療機器登録の技術的・手続的要件を規定し、Disposición 727/2013 とともに主要な規制枠組みを形成。GHTF 分類原則に基づく4クラス制を採用。2025年には行政手続きの大幅な簡素化・デジタル化が進行中。",
    "keyCharacteristics": [
      "ANMAT による一元的な規制体制",
      "GHTF 準拠の4クラス分類（Class I / II / III / IV）",
      "HELENA ポータルによるオンライン申請",
      "2025年の大規模な行政手続き簡素化改革",
      "認定国（米・EU・日・加・豪）の自由販売証明書を要求"
    ]
  },
  "authorities": [
    {
      "name": "ANMAT",
      "fullName": "Administración Nacional de Medicamentos, Alimentos y Tecnología Médica",
      "localName": "ANMAT",
      "role": "医療機器の登録・市販後監視（Tecnovigilancia）・施設認可・GMP査察",
      "url": "https://www.argentina.gob.ar/anmat",
      "isPrimary": true
    },
    {
      "name": "Ministry of Health",
      "fullName": "Ministerio de Salud de la Nación",
      "localName": "Ministerio de Salud",
      "role": "医療機器規制の政策立案",
      "url": "https://www.argentina.gob.ar/salud",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "なし（ANMAT が直接審査）",
    "description": "アルゼンチンではNotified Body制度は存在しない。ANMAT が直接、医療機器の登録審査を実施する。Class I は届出（notification number）、Class II/III/IV は技術審査を経て登録証明書（clearance certificate）を発行。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "Disposición ANMAT 2318/2002 に基づく定義。疾病の診断・予防・モニタリング・治療等を目的とする器具・装置・ソフトウェア・材料等で、薬理学的・免疫学的・代謝的手段によらずその主たる目的を達成するもの。",
    "scope": "IVD を含む（IVD は別途 Class A/B 分類）。Disposición 64/2025 により SaMD が医療機器定義に含まれることを明確化。",
    "notes": "コンビネーション製品は主たる作用機序に基づき医療機器または医薬品として分類。"
  },
  "primaryLaw": {
    "title": "Ley 16.463 — Ley de Medicamentos",
    "originalTitle": "Ley de Medicamentos (Ley 16.463)",
    "enacted": "1964",
    "lastAmended": null,
    "url": "https://www.argentina.gob.ar/anmat",
    "description": "医療製品規制の基本法。ANMAT の権限根拠。医療機器の詳細な規制は主に ANMAT の Disposiciones（処分命令）で規定。"
  },
  "implementingRegulations": [
    {
      "title": "Disposición ANMAT 2318/2002",
      "date": "2002",
      "url": "https://www.argentina.gob.ar/anmat",
      "description": "医療機器登録の技術的・手続的・文書的要件を規定する主要規則。Annex III.B でラベリング要件、技術文書（Technical File）の構成を規定。",
      "category": "登録"
    },
    {
      "title": "Disposición ANMAT 727/2013",
      "date": "2013",
      "url": "https://www.argentina.gob.ar/anmat",
      "description": "医療機器のリスク分類規則。GHTF 分類原則に基づく4クラス制の詳細を規定。",
      "category": "分類"
    },
    {
      "title": "Disposición ANMAT 8194/2023",
      "date": "2023",
      "url": "https://www.argentina.gob.ar/anmat",
      "description": "Tecnovigilancia（市販後安全性監視）プログラムの更新。旧 Provision 8054/2010 を置換。有害事象報告体制を近代化。",
      "category": "市販後"
    },
    {
      "title": "Disposición ANMAT 64/2025",
      "date": "2025",
      "url": "https://www.argentina.gob.ar/anmat",
      "description": "SaMD を含む医療機器定義の更新。デジタルヘルス製品の規制枠組みを整備。",
      "category": "定義"
    },
    {
      "title": "Disposición ANMAT 8799/2025",
      "date": "2025",
      "url": "https://www.argentina.gob.ar/anmat",
      "description": "Class I/II 医療機器および IVD Class A/B の製造・輸入施設認可手続きの簡素化。低リスク製品の市場参入を迅速化。",
      "category": "施設認可"
    }
  ],
  "relatedLaws": [
    {
      "title": "Ley 25.326 — Protección de Datos Personales",
      "category": "個人情報保護",
      "enacted": "2000",
      "url": null,
      "relevance": "コネクテッドデバイス・SaMD が取り扱う個人健康情報の保護。"
    },
    {
      "title": "Decreto 1490/92",
      "category": "設立",
      "enacted": "1992",
      "url": null,
      "relevance": "ANMAT の設立根拠。保健省傘下の分権機関としての位置づけ。"
    }
  ],
  "classification": {
    "system": "4クラス制（Class I / II / III / IV）— GHTF 準拠",
    "basis": "リスクベース（GHTF 分類原則）",
    "classes": [
      {
        "name": "Class I",
        "nameJa": "クラスI",
        "riskLevel": "低リスク",
        "description": "最低リスクの機器。ANMAT は届出番号（notification number）を付与。",
        "examples": [
          "包帯",
          "車椅子",
          "手動外科器具"
        ],
        "approvalPath": "届出（Notification）— HELENA ポータル"
      },
      {
        "name": "Class II",
        "nameJa": "クラスII",
        "riskLevel": "低〜中リスク",
        "description": "低〜中リスクの機器。技術審査後に登録証明書を発行。",
        "examples": [
          "血圧計",
          "シリンジ",
          "超音波診断装置"
        ],
        "approvalPath": "登録（Registration）— HELENA ポータル"
      },
      {
        "name": "Class III",
        "nameJa": "クラスIII",
        "riskLevel": "中〜高リスク",
        "description": "中〜高リスクの機器。詳細な技術審査。",
        "examples": [
          "人工呼吸器",
          "血液透析装置",
          "整形外科インプラント"
        ],
        "approvalPath": "登録（Registration）— HELENA ポータル"
      },
      {
        "name": "Class IV",
        "nameJa": "クラスIV",
        "riskLevel": "高リスク",
        "description": "最高リスクの機器。最も厳格な審査。GMP査察を含む場合あり。",
        "examples": [
          "心臓弁",
          "冠動脈ステント",
          "埋込み型除細動器"
        ],
        "approvalPath": "登録（Registration）— HELENA ポータル"
      }
    ],
    "rules": [
      {
        "id": "GHTF 分類ルール",
        "description": "Disposición 727/2013 に基づく分類ルール。GHTF の分類原則に準拠し、侵襲性・持続時間・能動/非能動等の基準で分類。",
        "url": "https://www.argentina.gob.ar/anmat"
      }
    ],
    "totalProductCodes": "GHTF 準拠分類ルール（Disposición 727/2013）"
  },
  "conformityAssessment": {
    "overview": "ANMAT が直接審査。Class I は届出制、Class II/III/IV は技術文書の審査を経て登録。認定国（米・EU・日・加・豪）の自由販売証明書が必要。",
    "routes": [
      {
        "name": "Notification (Class I)",
        "nameJa": "届出（クラスI）",
        "applicableClasses": [
          "Class I"
        ],
        "description": "低リスク機器の届出制度。HELENA ポータル経由で申請。ANMAT は届出番号を付与。",
        "subtypes": [],
        "avgReviewTime": "約15〜30営業日",
        "fee": "有料（ANMAT 手数料）",
        "url": "https://www.argentina.gob.ar/anmat"
      },
      {
        "name": "Registration (Class II / III / IV)",
        "nameJa": "登録（クラスII/III/IV）",
        "applicableClasses": [
          "Class II",
          "Class III",
          "Class IV"
        ],
        "description": "技術文書の詳細審査。自由販売証明書、技術資料、GMP証明書等の提出が必要。Class III/IV はより詳細な臨床データ・安全性データが要求される。",
        "subtypes": [],
        "avgReviewTime": "Class II: 15〜30営業日、Class III/IV: 60〜120営業日（法的上限180暦日、実績12〜18ヶ月の場合あり）",
        "fee": "有料（ANMAT 手数料、クラスにより異なる）",
        "url": "https://www.argentina.gob.ar/anmat"
      }
    ]
  },
  "electronicSubmission": {
    "system": "HELENA ポータル + TAD（Trámites a Distancia）",
    "url": "https://www.argentina.gob.ar/anmat",
    "description": "HELENA はオンライン申請・登録管理プラットフォーム。全クラスの医療機器の登録・再認証・変更が可能。低リスク機器の輸入届出は TAD（Remote Procedures Platform）経由。文書は PDF 形式で法定代理人・技術責任者のデジタル署名が必要。",
    "mandatory": true
  },
  "udi": {
    "required": false,
    "system": "未導入（検討中）",
    "description": "アルゼンチンでは現時点で UDI は義務化されていない。IMDRF の UDI ガイダンスへの対応は今後の課題。",
    "url": null,
    "timeline": "未定"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "Tecnovigilancia — Disposición 8194/2023",
      "mandatory": true,
      "url": "https://www.argentina.gob.ar/anmat",
      "description": "医療機器の有害事象・品質不良の報告制度。登録保有者は市販後監視システムの構築・運用が義務。Argos プラットフォームを通じた報告。医療専門家・患者も ANMAT ウェブサイトから報告可能。"
    },
    "recalls": {
      "authority": "ANMAT",
      "description": "製造業者/輸入業者主導のリコール（Field Safety Corrective Action）。ANMAT は安全性アラートを発行し、回収を監督。ANMAT ウェブサイトでリコール情報を公開。",
      "url": "https://www.argentina.gob.ar/anmat"
    },
    "surveillance": "Tecnovigilancia プログラム（Disposición 8194/2023）による市販後安全性監視。HELENA/Argos プラットフォームで有害事象を管理。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "ANMAT",
    "name": "Certificado de Libre Venta / Certificate of Free Sale",
    "description": "ANMAT が登録済み医療機器について発行する自由販売証明書。なお、登録申請時には認定国（米国・EU・日本・カナダ・オーストラリア）からの自由販売証明書の提出が必要。",
    "processingTime": "約2〜4週間",
    "url": "https://www.argentina.gob.ar/anmat"
  },
  "reimbursement": {
    "system": "PMO（Programa Médico Obligatorio）+ 公的・民間保険",
    "authority": "Superintendencia de Servicios de Salud",
    "description": "PMO（義務的医療プログラム）がすべての保険制度（Obras Sociales、民間保険）がカバーすべき最低限の給付を規定。高額医療機器は個別審査。公的病院は保健省予算で調達。",
    "codingSystems": [
      "PMO（義務的医療プログラム）",
      "Nomenclador Nacional de Prácticas Médicas"
    ],
    "url": "https://www.argentina.gob.ar/sssalud"
  },
  "marketingRules": {
    "authority": "ANMAT",
    "description": "医療機器の広告は ANMAT の規制に基づく。Disposición 2318/2002 Annex III.B のラベリング要件に準拠。虚偽・誤解を招く広告は禁止。",
    "keyRules": [
      "ANMAT 登録されていない機器の広告禁止",
      "承認された適応のみ広告可",
      "ラベリングは Disposición 2318/2002 Annex III.B に準拠",
      "スペイン語での表示義務"
    ]
  },
  "mdsap": {
    "status": "アフィリエイトメンバー（Affiliate Member）",
    "description": "アルゼンチン（ANMAT）は MDSAP のアフィリエイトメンバー。MDSAP 監査報告書を参照・考慮するが、MDSAP をGMP査察の完全な代替としては受入れていない。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "GMP 要件の一部として ISO 13485 認証が考慮される。ANMAT のGMP査察基準に整合。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "リスクマネジメントの参照規格として認知。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "SaMD の規制（Disposición 64/2025）で参照。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "医用電気機器の安全・性能要求として参照。IRAM 規格として採用。"
    },
    "others": [
      {
        "standard": "ISO 10993 シリーズ",
        "notes": "生体適合性評価の参照規格"
      },
      {
        "standard": "IRAM 規格群",
        "notes": "アルゼンチン国家規格（一部は ISO/IEC の翻訳採用）"
      }
    ]
  },
  "recentDevelopments": [
    {
      "date": "2025",
      "title": "行政手続き大幅簡素化",
      "description": "ANMAT が300以上の行政手続きを廃止・統合。Class I/II 機器の輸入手続き簡素化（ANMAT の事前介入不要化、TAD経由の48時間以内届出に変更）。輸入品の有効期限要件を12ヶ月から6ヶ月に緩和。"
    },
    {
      "date": "2025",
      "title": "Disposición 8799/2025: 低リスク機器の施設認可簡素化",
      "description": "Class I/II 医療機器および IVD Class A/B の製造・輸入施設の認可手続きを簡素化する新規則を公布。"
    },
    {
      "date": "2025",
      "title": "Disposición 64/2025: SaMD 規制の整備",
      "description": "SaMD を医療機器定義に明確に含める規則を発行。デジタルヘルス製品の規制枠組みを整備。"
    },
    {
      "date": "2023",
      "title": "Tecnovigilancia プログラム更新（Disposición 8194/2023）",
      "description": "市販後安全性監視プログラムを更新。旧 Provision 8054/2010 を置換。有害事象報告体制を近代化。"
    }
  ],
  "lastUpdated": "2026-04-02",
  "verified": null
};
