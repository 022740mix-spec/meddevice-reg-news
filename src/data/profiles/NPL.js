// ネパール (Federal Democratic Republic of Nepal)
export default {
  "code": "NPL",
  "country": "ネパール",
  "countryEn": "Federal Democratic Republic of Nepal",
  "region": "ASPAC",
  "flag": "🇳🇵",
  "legalSystemOverview": {
    "type": "中央集権制（Centralized system）",
    "description": "ネパールの医療機器規制は薬物管理局（DDA: Department of Drug Administration）が管轄する。DDA は保健人口省（MoHP）傘下の機関で、Drug Act 1978 およびその規則に基づき医薬品・医療機器を規制する。医療機器に特化した法律はなく、薬事法の枠組みで規制されている。WHO のグローバルモデルを参照した医療機器規制の体系化が進行中。CE マークまたは FDA 認可を持つ機器に対する輸入許可ベースの規制が主流。",
    "keyCharacteristics": [
      "DDA（薬物管理局）による一元的な規制体制",
      "Drug Act 1978 に基づく薬事法の枠組みで規制",
      "医療機器に特化した法律は制定中",
      "CE マークまたは FDA 認可が事実上の市場参入要件",
      "CFS の提出が要求される",
      "ローカル代理人（輸入業者）の指定が必須"
    ]
  },
  "authorities": [
    {
      "name": "DDA",
      "fullName": "Department of Drug Administration",
      "localName": "औषधि व्यवस्था विभाग",
      "role": "医療機器の輸入許可・登録・品質管理・市販後監視",
      "url": "https://www.dda.gov.np/",
      "isPrimary": true
    },
    {
      "name": "MoHP",
      "fullName": "Ministry of Health and Population",
      "localName": "स्वास्थ्य तथा जनसंख्या मन्त्रालय",
      "role": "保健政策全般・規制監督",
      "url": "https://www.mohp.gov.np/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "なし（DDA が直接審査。CE/FDA 承認に依拠）",
    "description": "ネパールには Notified Body 制度は存在しない。DDA が輸入許可申請を審査し、CE 証明書または FDA 認可文書を主たるエビデンスとして判断する。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "DDA の規則に基づき、疾病の診断・治療・予防・監視等を目的とする器具・装置・機器・ソフトウェア等で、薬理学的・免疫学的・代謝的手段によらないもの。",
    "scope": "体外診断用医薬品（IVD）も規制対象。",
    "notes": "医療機器の法的定義は Drug Act の枠組みで間接的に規定。独立した医療機器法の制定が検討されている。"
  },
  "primaryLaw": {
    "title": "Drug Act 2035 (1978)",
    "originalTitle": "औषधि ऐन, २०३५",
    "enacted": "1978",
    "lastAmended": "随時改正",
    "url": "https://www.dda.gov.np/",
    "description": "ネパールの薬事法。医薬品・医療機器の製造・輸入・販売・流通を規制する根幹法。医療機器に特化した規定は限定的で、独立した医療機器法の制定が進行中。"
  },
  "implementingRegulations": [
    {
      "title": "Drug Rules 2043 (1986)",
      "date": "1986",
      "url": "https://www.dda.gov.np/",
      "description": "Drug Act の施行規則。医薬品・医療機器の登録・輸入・品質管理の詳細を規定。",
      "category": "包括規制"
    },
    {
      "title": "DDA Medical Device Import Guidelines",
      "date": "各種",
      "url": "https://www.dda.gov.np/",
      "description": "医療機器の輸入許可手続き、必要書類を規定する DDA 発出のガイドライン。",
      "category": "輸入管理"
    }
  ],
  "relatedLaws": [
    {
      "title": "Medical Device Bill（医療機器法案）",
      "category": "法案",
      "enacted": "検討中",
      "url": "https://www.dda.gov.np/",
      "relevance": "医療機器に特化した独立法の制定が検討されている。"
    }
  ],
  "classification": {
    "system": "国際分類参照（WHO/IMDRF ガイドラインを参照）",
    "basis": "リスクベース（WHO/IMDRF の分類を参照）",
    "classes": [
      {
        "name": "Class A",
        "nameJa": "クラスA",
        "riskLevel": "低リスク",
        "description": "低リスク医療機器。",
        "examples": [
          "弾性包帯",
          "手動外科器具",
          "聴診器"
        ],
        "approvalPath": "DDA 輸入許可"
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
        "approvalPath": "DDA 輸入許可"
      },
      {
        "name": "Class C",
        "nameJa": "クラスC",
        "riskLevel": "中高リスク",
        "description": "中高リスク医療機器。",
        "examples": [
          "人工呼吸器",
          "血液透析装置",
          "輸液ポンプ"
        ],
        "approvalPath": "DDA 輸入許可（詳細審査）"
      },
      {
        "name": "Class D",
        "nameJa": "クラスD",
        "riskLevel": "高リスク",
        "description": "高リスク医療機器。",
        "examples": [
          "人工心臓弁",
          "冠動脈ステント",
          "埋込み型デバイス"
        ],
        "approvalPath": "DDA 輸入許可（詳細審査）"
      }
    ],
    "rules": [
      {
        "id": "国際分類参照",
        "description": "DDA は WHO/IMDRF の分類ガイドラインを参照。独自の分類規則の体系的な公開は進行中。",
        "url": "https://www.dda.gov.np/"
      }
    ],
    "totalProductCodes": "要確認"
  },
  "conformityAssessment": {
    "overview": "DDA は CE マークまたは FDA 認可を持つ機器に対し、輸入許可を付与する。独自の適合性評価制度は発展途上。",
    "routes": [
      {
        "name": "DDA Import Authorization",
        "nameJa": "DDA 輸入許可",
        "applicableClasses": [
          "全クラス"
        ],
        "description": "CE 証明書または FDA 認可文書、CFS、ISO 13485 認証、技術仕様書等を提出。DDA が書類審査を行い輸入許可を付与。",
        "subtypes": [],
        "avgReviewTime": "2〜6ヶ月",
        "fee": "要確認",
        "url": "https://www.dda.gov.np/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "要確認（DDA のオンラインシステムの整備が進行中）",
    "url": "https://www.dda.gov.np/",
    "description": "DDA への申請は紙ベースが主流だが、電子化の取り組みが進行中。",
    "mandatory": false
  },
  "udi": {
    "required": false,
    "system": "未導入",
    "description": "ネパールでは UDI 制度は導入されていない。",
    "url": null,
    "timeline": "要確認"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "DDA 有害事象報告制度",
      "mandatory": true,
      "url": "https://www.dda.gov.np/",
      "description": "医療機器に関連する有害事象は DDA に報告義務がある。ファーマコビジランス体制の一環として医療機器の監視も行われる。"
    },
    "recalls": {
      "authority": "DDA",
      "description": "DDA がリコールを管理。国際的なリコール情報に基づく対応。",
      "url": "https://www.dda.gov.np/"
    },
    "surveillance": "DDA による市販後監視。体系的な PMS 制度の構築が進行中。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "DDA",
    "name": "Free Sale Certificate",
    "description": "輸入許可済み医療機器について DDA が発行。申請時には原産国の CFS 提出が要求される。",
    "processingTime": "要確認",
    "url": "https://www.dda.gov.np/"
  },
  "reimbursement": {
    "system": "公的医療保険（社会保険制度整備中）+ 自己負担",
    "authority": "MoHP / Health Insurance Board",
    "description": "ネパールの医療保険制度は Health Insurance Board が管轄する社会健康保険の拡大を推進中。医療機器の償還は主に公立病院の調達予算を通じて行われる。自己負担比率が高い。",
    "codingSystems": [
      "要確認"
    ],
    "url": "https://www.dda.gov.np/"
  },
  "marketingRules": {
    "authority": "DDA",
    "description": "医療機器の広告・販促は DDA の規制下にある。",
    "keyRules": [
      "許可済み機器のみ広告可",
      "ラベリングは英語で記載（ネパール語追加を推奨）",
      "虚偽・誇大広告の禁止"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "ネパールは MDSAP プログラムに参加していない。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "ISO 13485 認証は輸入許可申請時に参照される。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "リスクマネジメントの国際規格として参照。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "ソフトウェア医療機器に対して参照。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "医用電気機器の安全規格として参照。"
    },
    "others": []
  },
  "recentDevelopments": [
    {
      "date": "2025",
      "title": "医療機器法の制定に向けた取り組み",
      "description": "DDA/MoHP は WHO の支援を受けて医療機器に特化した法律の制定を推進中。Drug Act の枠組みからの独立と、IMDRF ガイドラインに基づく規制体系の構築が目標。"
    }
  ],
  "lastUpdated": "2026-04-02",
  "verified": null
};
