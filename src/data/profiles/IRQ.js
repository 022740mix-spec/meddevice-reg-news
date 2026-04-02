// イラク (Republic of Iraq)
export default {
  "code": "IRQ",
  "country": "イラク",
  "countryEn": "Republic of Iraq",
  "region": "Middle East & Africa",
  "flag": "🇮🇶",
  "legalSystemOverview": {
    "type": "中央集権制（Centralized system）",
    "description": "イラクの医療機器規制は保健省（MOH）傘下の KIMADIA（国立医薬品・医療機器公社: State Company for Marketing Drugs and Medical Appliances）が管轄する。KIMADIA は公的部門における医薬品・医療機器の調達・流通を担う国営企業で、輸入許可と品質管理を行う。民間部門の輸入は MOH の許可制。体系的な医療機器登録制度は発展途上であり、主に CFS と CE マークまたは FDA 認可に依拠する。",
    "keyCharacteristics": [
      "KIMADIA が公的部門の医療機器調達・輸入を管理",
      "MOH が民間輸入を許可制で規制",
      "体系的な医療機器登録制度は発展途上",
      "CE マークまたは FDA 認可が事実上の市場参入要件",
      "CFS の提出が必須",
      "ローカル代理人（輸入業者）の指定が必須"
    ]
  },
  "authorities": [
    {
      "name": "KIMADIA",
      "fullName": "State Company for Marketing Drugs and Medical Appliances",
      "localName": "الشركة العامة لتسويق الأدوية والمستلزمات الطبية",
      "role": "公的部門の医療機器調達・輸入・品質管理",
      "url": "https://www.kimadia.iq/",
      "isPrimary": true
    },
    {
      "name": "MOH Iraq",
      "fullName": "Ministry of Health — Iraq",
      "localName": "وزارة الصحة العراقية",
      "role": "保健政策・民間輸入許可・規制監督",
      "url": "https://moh.gov.iq/",
      "isPrimary": true
    }
  ],
  "notifiedBodies": {
    "system": "なし（KIMADIA/MOH が直接審査。CE/FDA 承認に依拠）",
    "description": "イラクには Notified Body 制度は存在しない。KIMADIA/MOH が輸入申請を審査し、CE 証明書または FDA 認可文書を主たるエビデンスとして判断する。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "MOH の規則に基づき、疾病の診断・治療・予防・監視等を目的とする器具・装置・機器等で、薬理学的・免疫学的・代謝的手段によらないもの。",
    "scope": "体外診断用医薬品（IVD）も規制対象。",
    "notes": "体系的な医療機器の法的定義文書の公開は限定的。実務上は国際的な定義が参照される。"
  },
  "primaryLaw": {
    "title": "Public Health Law No. 89 of 1981（改正あり）",
    "originalTitle": "قانون الصحة العامة رقم 89 لسنة 1981",
    "enacted": "1981",
    "lastAmended": "随時改正",
    "url": "https://moh.gov.iq/",
    "description": "イラクの公衆衛生法。医薬品・医療機器の規制の法的根拠を提供。KIMADIA の役割を含む。"
  },
  "implementingRegulations": [
    {
      "title": "KIMADIA Import Regulations（KIMADIA 輸入規則）",
      "date": "各種",
      "url": "https://www.kimadia.iq/",
      "description": "公的部門向けの医療機器輸入手続き、必要書類、品質要件を規定。",
      "category": "輸入管理"
    },
    {
      "title": "MOH Private Sector Import Instructions（民間輸入指示）",
      "date": "各種",
      "url": "https://moh.gov.iq/",
      "description": "民間部門の医療機器輸入に関する許可手続きと要件。",
      "category": "輸入管理"
    }
  ],
  "relatedLaws": [
    {
      "title": "KIMADIA 設立法",
      "category": "組織法",
      "enacted": "1964",
      "url": "https://www.kimadia.iq/",
      "relevance": "KIMADIA の設立と権限を規定。"
    }
  ],
  "classification": {
    "system": "国際分類参照（CE/FDA 分類を事実上採用）",
    "basis": "リスクベース（CE/FDA の分類を参照）",
    "classes": [
      {
        "name": "Class I",
        "nameJa": "クラスI",
        "riskLevel": "低リスク",
        "description": "低リスク医療機器。",
        "examples": [
          "弾性包帯",
          "手動外科器具",
          "聴診器"
        ],
        "approvalPath": "輸入許可（CFS + CE/FDA 証明）"
      },
      {
        "name": "Class II",
        "nameJa": "クラスII",
        "riskLevel": "中リスク",
        "description": "中リスク医療機器。",
        "examples": [
          "超音波診断装置",
          "輸液ポンプ",
          "電動車椅子"
        ],
        "approvalPath": "輸入許可（CFS + CE/FDA 証明）"
      },
      {
        "name": "Class III",
        "nameJa": "クラスIII",
        "riskLevel": "高リスク",
        "description": "高リスク医療機器。追加的な技術文書が要求される場合がある。",
        "examples": [
          "人工心臓弁",
          "冠動脈ステント",
          "埋込み型デバイス"
        ],
        "approvalPath": "輸入許可（詳細審査）"
      }
    ],
    "rules": [
      {
        "id": "国際分類参照",
        "description": "KIMADIA/MOH は CE または FDA の分類を参照。イラク独自の分類規則は体系的に公開されていない。",
        "url": "https://moh.gov.iq/"
      }
    ],
    "totalProductCodes": "要確認"
  },
  "conformityAssessment": {
    "overview": "KIMADIA/MOH は CE マークまたは FDA 認可を持つ機器に対し、輸入許可を付与する。独自の適合性評価制度は発展途上。",
    "routes": [
      {
        "name": "KIMADIA/MOH Import Authorization",
        "nameJa": "KIMADIA/MOH 輸入許可",
        "applicableClasses": [
          "全クラス"
        ],
        "description": "CE 証明書または FDA 認可文書、CFS、品質証明書（ISO 13485）、技術仕様書等を提出して輸入許可を取得。公的部門は KIMADIA 入札、民間は MOH 許可制。",
        "subtypes": [],
        "avgReviewTime": "3〜12ヶ月（調達プロセスにより大幅に異なる）",
        "fee": "要確認",
        "url": "https://www.kimadia.iq/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "要確認（KIMADIA のオンラインシステムの整備状況は限定的）",
    "url": "https://www.kimadia.iq/",
    "description": "KIMADIA/MOH への申請は紙ベースが主流。",
    "mandatory": false
  },
  "udi": {
    "required": false,
    "system": "未導入",
    "description": "イラクでは UDI 制度は導入されていない。",
    "url": null,
    "timeline": "要確認"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "MOH 有害事象報告",
      "mandatory": true,
      "url": "https://moh.gov.iq/",
      "description": "医療機器に関連する有害事象は MOH に報告義務がある。ただし、体系的な報告制度は発展途上。"
    },
    "recalls": {
      "authority": "MOH Iraq / KIMADIA",
      "description": "MOH/KIMADIA がリコールを管理。国際的なリコール情報に基づく対応。",
      "url": "https://moh.gov.iq/"
    },
    "surveillance": "MOH による市販後監視。体系的な PMS 制度は発展途上。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "MOH Iraq",
    "name": "Free Sale Certificate",
    "description": "登録・許可済み医療機器について MOH が発行。輸入申請時には原産国の CFS 提出が必須。",
    "processingTime": "要確認",
    "url": "https://moh.gov.iq/"
  },
  "reimbursement": {
    "system": "公的医療制度（MOH 管轄の公立病院）",
    "authority": "MOH Iraq",
    "description": "イラクの医療は主に公立病院を通じた公的医療制度で提供される。医療機器の調達は KIMADIA の入札プロセスを通じて行われる。民間医療も拡大中。",
    "codingSystems": [
      "要確認"
    ],
    "url": "https://moh.gov.iq/"
  },
  "marketingRules": {
    "authority": "MOH Iraq",
    "description": "医療機器の広告・販促は MOH の規制下にある。",
    "keyRules": [
      "許可済み機器のみ広告可",
      "ラベリングは英語で記載（アラビア語追加を推奨）",
      "虚偽・誇大広告の禁止"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "イラクは MDSAP プログラムに参加していない。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "ISO 13485 認証は輸入許可申請時に要求される。"
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
      "title": "医療機器規制の体系化に向けた取り組み",
      "description": "MOH/KIMADIA は WHO の支援を受けて医療機器規制の体系化を推進中。独立した登録制度の構築が課題。"
    }
  ],
  "lastUpdated": "2026-04-02",
  "verified": null
};
