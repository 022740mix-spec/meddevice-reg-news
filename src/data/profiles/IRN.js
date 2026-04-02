// イラン (Islamic Republic of Iran)
export default {
  "code": "IRN",
  "country": "イラン",
  "countryEn": "Islamic Republic of Iran",
  "region": "Middle East & Africa",
  "flag": "🇮🇷",
  "legalSystemOverview": {
    "type": "中央集権制（Centralized system）",
    "description": "イランの医療機器規制はイラン医療機器局（IMED: Iranian Medical Equipment Directorate）および食品医薬品庁（IFDA: Iran Food and Drug Administration）が管轄する。IMED は保健省傘下の専門機関で、医療機器の登録・市場監視を担当。IFDA は医薬品・食品・化粧品を含む包括的な規制機関。イランは独自の医療機器規制制度を有し、WHO のグローバルモデルや EU の MDR に触発された制度改革を推進中。国内製造の促進が重要な政策課題。",
    "keyCharacteristics": [
      "IMED（医療機器局）による専門的な規制体制",
      "IFDA との連携による包括的な規制",
      "リスクベースの4クラス分類（Class A / B / C / D）",
      "独自の登録制度（IRC: Iran Registration Certificate）",
      "国内製造促進政策が規制に影響",
      "ローカル代理人の指定が必須",
      "CFS と ISO 13485 認証の提出が必要"
    ]
  },
  "authorities": [
    {
      "name": "IMED",
      "fullName": "Iranian Medical Equipment Directorate",
      "localName": "اداره کل تجهیزات پزشکی",
      "role": "医療機器の登録・技術評価・市場監視・施設許可",
      "url": "https://imed.ir/",
      "isPrimary": true
    },
    {
      "name": "IFDA",
      "fullName": "Iran Food and Drug Administration",
      "localName": "سازمان غذا و دارو",
      "role": "医薬品・食品・化粧品を含む包括的規制・IMED の上位機関",
      "url": "https://www.fda.gov.ir/",
      "isPrimary": true
    },
    {
      "name": "MoHME",
      "fullName": "Ministry of Health and Medical Education",
      "localName": "وزارت بهداشت، درمان و آموزش پزشکی",
      "role": "保健政策全般・規制監督",
      "url": "https://behdasht.gov.ir/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "なし（IMED が直接審査）",
    "description": "イランには欧州型の Notified Body 制度は存在しない。IMED が申請書類を直接審査し、登録証（IRC）を発行する。CE 証明書や FDA 認可は審査で参照されるが、IMED の独自審査が必要。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "IMED/IFDA の規則に基づき、人体に対して使用される器具・装置・機器・ソフトウェア・材料等で、疾病の診断・予防・監視・治療・軽減等を目的とし、主たる作用が薬理学的・免疫学的・代謝的手段によらないもの。",
    "scope": "体外診断用医薬品（IVD）も規制対象。IMED が管轄。",
    "notes": "定義は GHTF/IMDRF の定義に概ね準拠。"
  },
  "primaryLaw": {
    "title": "Food, Drug, and Cosmetics Act（食品・医薬品・化粧品法）",
    "originalTitle": "قانون مواد خوراکی، آشامیدنی، آرایشی و بهداشتی",
    "enacted": "1967（改正あり）",
    "lastAmended": "随時改正",
    "url": "https://www.fda.gov.ir/",
    "description": "イランにおける医薬品・食品・化粧品・医療機器規制の根幹法。IFDA/IMED の権限の法的根拠を提供。"
  },
  "implementingRegulations": [
    {
      "title": "IMED Medical Device Registration Regulation",
      "date": "各種",
      "url": "https://imed.ir/",
      "description": "医療機器の登録手続き、必要書類、技術要件、分類規則等を規定。",
      "category": "登録"
    },
    {
      "title": "IMED Import and Distribution Regulation",
      "date": "各種",
      "url": "https://imed.ir/",
      "description": "医療機器の輸入・流通に関する要件。ローカル代理人の要件を含む。",
      "category": "輸入管理"
    },
    {
      "title": "IMED Clinical Investigation Regulation",
      "date": "各種",
      "url": "https://imed.ir/",
      "description": "イランにおける医療機器の臨床試験に関する要件。",
      "category": "臨床試験"
    }
  ],
  "relatedLaws": [
    {
      "title": "IFDA Organization Law",
      "category": "組織法",
      "enacted": "2010",
      "url": "https://www.fda.gov.ir/",
      "relevance": "IFDA の設立、権限、組織構成を規定。"
    }
  ],
  "classification": {
    "system": "リスクベース4クラス分類（Class A / B / C / D）",
    "basis": "リスクベース（GHTF/IMDRF の分類ガイドラインを参照）",
    "classes": [
      {
        "name": "Class A",
        "nameJa": "クラスA",
        "riskLevel": "低リスク",
        "description": "低リスク医療機器。一般的制御で安全性を確保。",
        "examples": [
          "弾性包帯",
          "手動外科器具",
          "聴診器"
        ],
        "approvalPath": "簡易登録（届出）"
      },
      {
        "name": "Class B",
        "nameJa": "クラスB",
        "riskLevel": "中低リスク",
        "description": "中低リスク医療機器。",
        "examples": [
          "超音波診断装置",
          "手術用手袋",
          "歯科用充填材"
        ],
        "approvalPath": "標準登録"
      },
      {
        "name": "Class C",
        "nameJa": "クラスC",
        "riskLevel": "中高リスク",
        "description": "中高リスク医療機器。より詳細な技術文書の提出が必要。",
        "examples": [
          "人工呼吸器",
          "血液透析装置",
          "輸液ポンプ"
        ],
        "approvalPath": "詳細登録（技術文書審査）"
      },
      {
        "name": "Class D",
        "nameJa": "クラスD",
        "riskLevel": "高リスク",
        "description": "高リスク医療機器。最も厳格な審査が適用される。臨床データの提出が要求される場合がある。",
        "examples": [
          "人工心臓弁",
          "冠動脈ステント",
          "埋込み型除細動器"
        ],
        "approvalPath": "フル登録（技術文書 + 臨床データ審査）"
      }
    ],
    "rules": [
      {
        "id": "IMED 分類規則",
        "description": "IMED は GHTF/IMDRF の分類ガイドラインを参照した独自の分類規則を運用。",
        "url": "https://imed.ir/"
      }
    ],
    "totalProductCodes": "要確認（IMED 製品コードデータベースは imed.ir で参照可能）"
  },
  "conformityAssessment": {
    "overview": "IMED は独自の登録審査を実施し、IRC（Iran Registration Certificate）を発行する。CE マークや FDA 認可は審査で参照されるが、IMED の独立審査が必須。国内製造品には優遇措置がある。",
    "routes": [
      {
        "name": "IMED Device Registration (IRC)",
        "nameJa": "IMED 医療機器登録（IRC）",
        "applicableClasses": [
          "全クラス"
        ],
        "description": "ISO 13485 認証、CFS、技術文書、ラベリング情報、臨床データ（高リスク機器）等を提出。IMED が技術評価を行い IRC を発行。国内製造品は優先審査。",
        "subtypes": [],
        "avgReviewTime": "3〜12ヶ月（クラスにより異なる）",
        "fee": "要確認（IMED 料金表に依拠）",
        "url": "https://imed.ir/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "IMED オンラインポータル",
    "url": "https://imed.ir/",
    "description": "IMED はオンライン申請ポータルを運用しており、電子申請が可能。登録申請、進捗確認等をオンラインで行える。",
    "mandatory": true
  },
  "udi": {
    "required": false,
    "system": "検討中",
    "description": "イランでは UDI 制度の導入が検討されている。IMED は段階的な UDI 導入計画を策定中。",
    "url": "https://imed.ir/",
    "timeline": "要確認（段階的導入の計画あり）"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "IMED 有害事象報告制度（マテリオビジランス）",
      "mandatory": true,
      "url": "https://imed.ir/",
      "description": "医療機器に関連する有害事象は IMED に報告義務がある。IMED はマテリオビジランスシステムを運用し、有害事象の収集・分析・対応を行う。"
    },
    "recalls": {
      "authority": "IMED",
      "description": "IMED がリコール・Field Safety Corrective Action を管理。製造業者・輸入業者はリコール実施時に IMED に通知義務。",
      "url": "https://imed.ir/"
    },
    "surveillance": "IMED による市販後監視。マテリオビジランスに基づく報告・調査体制。市場サーベイランスも実施。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "IMED",
    "name": "Free Sale Certificate",
    "description": "登録済み医療機器について IMED が発行する自由販売証明書。登録申請時には原産国の CFS 提出が必要。",
    "processingTime": "要確認",
    "url": "https://imed.ir/"
  },
  "reimbursement": {
    "system": "公的医療保険 + 民間保険",
    "authority": "Iran Health Insurance Organization / MoHME",
    "description": "イランの医療保険は Iran Health Insurance Organization が管轄する公的保険制度が中心。医療機器の償還は主に公立病院の調達予算および保険基金の給付リストを通じて行われる。国内製造品には償還面での優遇措置がある場合がある。",
    "codingSystems": [
      "要確認"
    ],
    "url": "https://www.fda.gov.ir/"
  },
  "marketingRules": {
    "authority": "IMED",
    "description": "医療機器の広告・販促は IMED の規制下にある。承認された適応のみの広告が原則。",
    "keyRules": [
      "登録済み機器（IRC 保有）のみ広告可",
      "ラベリングはペルシア語で記載（英語併記を推奨）",
      "虚偽・誇大広告の禁止",
      "国内製造品の推奨"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "イランは MDSAP プログラムに参加していない。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "ISO 13485 認証は登録申請時に必須。ISIRI（イラン国家標準機構）認定の認証機関による認証も受け入れられる。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "リスクマネジメントの国際規格として参照。登録申請時にリスク分析報告書の提出が要求される。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "ソフトウェア医療機器に対して参照。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "医用電気機器の安全規格として参照。ISIRI の国家規格としても採用。"
    },
    "others": [
      {
        "standard": "ISIRI（イラン国家規格）",
        "notes": "イラン国家標準機構（ISIRI）が ISO/IEC 規格のイラン版国家規格を策定・発行。"
      }
    ]
  },
  "recentDevelopments": [
    {
      "date": "2025",
      "title": "IMED 規制制度の近代化推進",
      "description": "IMED は WHO の基準に準拠した規制制度の近代化を推進中。電子申請の拡充、UDI 導入計画、臨床試験規制の強化、国内製造促進政策の充実に注力。"
    }
  ],
  "lastUpdated": "2026-04-02",
  "verified": null
};
