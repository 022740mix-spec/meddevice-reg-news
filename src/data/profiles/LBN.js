// レバノン (Lebanese Republic)
export default {
  "code": "LBN",
  "country": "レバノン",
  "countryEn": "Lebanese Republic",
  "region": "Middle East & Africa",
  "flag": "🇱🇧",
  "legalSystemOverview": {
    "type": "中央集権制（Centralized system）",
    "description": "レバノンの医療機器規制は公衆衛生省（MOPH）および薬事監査局（IFP: Inspection Pharmaceutique）が管轄する。MOPH の医療機器部門が主管し、輸入許可・登録を行う。レバノンは WHO のグローバルモデルを参照した規制枠組みの構築を進めているが、経済危機等の影響で制度の整備は遅延している。CE マークまたは FDA 認可を持つ機器に対する輸入許可ベースの規制が主流。",
    "keyCharacteristics": [
      "MOPH が医療機器の輸入許可・登録を管理",
      "IFP（薬事監査局）が品質監査を担当",
      "CE マークまたは FDA 認可が事実上の市場参入要件",
      "体系的な医療機器登録制度は発展途上",
      "CFS の提出が要求される",
      "ローカル代理人（輸入業者）の指定が必須",
      "経済危機の影響で規制体制の強化が遅延"
    ]
  },
  "authorities": [
    {
      "name": "MOPH",
      "fullName": "Ministry of Public Health — Lebanon",
      "localName": "وزارة الصحة العامة",
      "role": "医療機器の輸入許可・登録・市販後監視",
      "url": "https://www.moph.gov.lb/",
      "isPrimary": true
    },
    {
      "name": "IFP",
      "fullName": "Inspection Pharmaceutique",
      "localName": "التفتيش الصيدلاني",
      "role": "薬事監査・品質管理・施設検査",
      "url": "https://www.moph.gov.lb/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "なし（MOPH が直接審査。CE/FDA 承認に依拠）",
    "description": "レバノンには Notified Body 制度は存在しない。MOPH が輸入許可申請を審査し、CE 証明書または FDA 認可文書を主たるエビデンスとして判断する。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "MOPH の規則に基づき、疾病の診断・治療・予防・監視等を目的とする器具・装置・機器・ソフトウェア等で、薬理学的・免疫学的・代謝的手段によらないもの。",
    "scope": "体外診断用医薬品（IVD）も規制対象。",
    "notes": "体系的な法的定義文書の公開は限定的。国際的な定義が参照される。"
  },
  "primaryLaw": {
    "title": "Law on Exercise of Pharmacy（薬事法）および関連規則",
    "originalTitle": "قانون ممارسة مهنة الصيدلة",
    "enacted": "1983（改正あり）",
    "lastAmended": "随時改正",
    "url": "https://www.moph.gov.lb/",
    "description": "レバノンの薬事法。医療機器も薬事法の枠組みで規制される。独立した医療機器法の制定が検討されている。"
  },
  "implementingRegulations": [
    {
      "title": "MOPH Medical Device Import Circular（医療機器輸入通達）",
      "date": "各種",
      "url": "https://www.moph.gov.lb/",
      "description": "医療機器の輸入許可手続き、必要書類を規定する MOPH 発出の通達。",
      "category": "輸入管理"
    },
    {
      "title": "MOPH Medical Device Registration Guidelines",
      "date": "各種",
      "url": "https://www.moph.gov.lb/",
      "description": "医療機器の登録ガイドライン（整備中）。",
      "category": "登録"
    }
  ],
  "relatedLaws": [
    {
      "title": "Code de la Santé（衛生法典）",
      "category": "衛生法",
      "enacted": "各種",
      "url": "https://www.moph.gov.lb/",
      "relevance": "レバノンの公衆衛生に関する法規の集成。"
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
        "approvalPath": "輸入許可"
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
        "approvalPath": "輸入許可（CE/FDA 証明書ベース）"
      },
      {
        "name": "Class III",
        "nameJa": "クラスIII",
        "riskLevel": "高リスク",
        "description": "高リスク医療機器。",
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
        "description": "MOPH は CE または FDA の分類を参照。レバノン独自の分類規則は体系的に公開されていない。",
        "url": "https://www.moph.gov.lb/"
      }
    ],
    "totalProductCodes": "要確認"
  },
  "conformityAssessment": {
    "overview": "MOPH は CE マークまたは FDA 認可を持つ機器に対し、輸入許可を付与する。独自の適合性評価制度は発展途上。",
    "routes": [
      {
        "name": "MOPH Import Authorization",
        "nameJa": "MOPH 輸入許可",
        "applicableClasses": [
          "全クラス"
        ],
        "description": "CE 証明書または FDA 認可文書、CFS、ISO 13485 認証、技術仕様書等を提出。MOPH が書類審査を行い輸入許可を付与。",
        "subtypes": [],
        "avgReviewTime": "2〜6ヶ月（状況により大幅に変動）",
        "fee": "要確認",
        "url": "https://www.moph.gov.lb/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "要確認",
    "url": "https://www.moph.gov.lb/",
    "description": "MOPH への申請は紙ベースが主流。電子化の進捗は限定的。",
    "mandatory": false
  },
  "udi": {
    "required": false,
    "system": "未導入",
    "description": "レバノンでは UDI 制度は導入されていない。",
    "url": null,
    "timeline": "要確認"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "MOPH 有害事象報告",
      "mandatory": true,
      "url": "https://www.moph.gov.lb/",
      "description": "医療機器に関連する有害事象は MOPH に報告義務がある。体系的な報告制度は発展途上。"
    },
    "recalls": {
      "authority": "MOPH",
      "description": "MOPH がリコールを管理。国際的なリコール情報に基づく対応。",
      "url": "https://www.moph.gov.lb/"
    },
    "surveillance": "MOPH による市販後監視。体系的な PMS 制度は発展途上。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "MOPH",
    "name": "Free Sale Certificate",
    "description": "輸入許可済み医療機器について MOPH が発行。申請時には原産国の CFS 提出が要求される。",
    "processingTime": "要確認",
    "url": "https://www.moph.gov.lb/"
  },
  "reimbursement": {
    "system": "公的医療保険（NSSF）+ 民間保険",
    "authority": "NSSF / MOPH",
    "description": "レバノンの医療保険は NSSF（国家社会保障基金）と民間保険の混合体制。経済危機により公的医療制度は深刻な資金不足に直面。医療機器の償還は主に病院の調達予算を通じて行われる。",
    "codingSystems": [
      "要確認"
    ],
    "url": "https://www.moph.gov.lb/"
  },
  "marketingRules": {
    "authority": "MOPH",
    "description": "医療機器の広告・販促は MOPH の規制下にある。",
    "keyRules": [
      "許可済み機器のみ広告可",
      "ラベリングは英語またはフランス語で記載（アラビア語追加を推奨）",
      "虚偽・誇大広告の禁止"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "レバノンは MDSAP プログラムに参加していない。"
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
      "title": "医療機器規制の体系化に向けた取り組み",
      "description": "MOPH は WHO/世界銀行の支援を受けて医療機器規制の体系化を推進中。経済危機からの回復と規制体制の再構築が課題。"
    }
  ],
  "lastUpdated": "2026-04-02",
  "verified": null
};
