// ドミニカ共和国 (Dominican Republic)
export default {
  "code": "DOM",
  "country": "ドミニカ共和国",
  "countryEn": "Dominican Republic",
  "region": "Latam",
  "flag": "🇩🇴",
  "legalSystemOverview": {
    "type": "中央集権制（Centralized system）",
    "description": "ドミニカ共和国の医療機器規制は公衆衛生省（MSP: Ministerio de Salud Pública）傘下の医薬品・保健製品総局（DIGEMAPS: Dirección General de Medicamentos, Alimentos y Productos Sanitarios）が管轄する。Ley General de Salud 42-01 および関連規則が主要な法的根拠。医療機器は衛生登録（Registro Sanitario）が必要。分類体系は国際的なリスクベース分類を参照。",
    "keyCharacteristics": [
      "MSP/DIGEMAPS による中央規制体制",
      "Ley 42-01 に基づく衛生登録制度",
      "リスクベースの分類体系",
      "ローカル登録保有者の指定が必須",
      "CFS の提出が必要",
      "カリブ海地域の規制当局との連携"
    ]
  },
  "authorities": [
    {
      "name": "DIGEMAPS",
      "fullName": "Dirección General de Medicamentos, Alimentos y Productos Sanitarios",
      "localName": "Dirección General de Medicamentos, Alimentos y Productos Sanitarios",
      "role": "医療機器の登録・市販後監視・施設許可・輸入管理",
      "url": "https://www.msp.gob.do/",
      "isPrimary": true
    },
    {
      "name": "MSP",
      "fullName": "Ministerio de Salud Pública",
      "localName": "Ministerio de Salud Pública",
      "role": "保健政策の策定・監督",
      "url": "https://www.msp.gob.do/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "なし（DIGEMAPS が直接審査）",
    "description": "ドミニカ共和国には Notified Body 制度は存在しない。DIGEMAPS が直接、登録申請書類を審査する。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "関連規則に基づき、疾病の診断・治療・予防・監視・軽減等を目的とする器具・装置・機器・ソフトウェア・材料等で、主たる作用が薬理学的・免疫学的・代謝的手段によらないもの。",
    "scope": "体外診断用医薬品（IVD）も規制対象。",
    "notes": "定義は GHTF/IMDRF の国際的定義に概ね準拠。"
  },
  "primaryLaw": {
    "title": "Ley General de Salud N° 42-01（一般保健法）",
    "originalTitle": "Ley General de Salud N° 42-01",
    "enacted": "2001",
    "lastAmended": "随時改正",
    "url": "https://www.msp.gob.do/",
    "description": "ドミニカ共和国における保健制度全般を規定する基本法。医療機器を含む保健製品の規制の上位法的根拠。"
  },
  "implementingRegulations": [
    {
      "title": "医療機器衛生登録に関する規則",
      "date": "各種",
      "url": "https://www.msp.gob.do/",
      "description": "医療機器の分類・登録手続き・必要書類を規定。DIGEMAPS が発行する技術規則・ガイダンス。",
      "category": "包括規制"
    }
  ],
  "relatedLaws": [
    {
      "title": "Ley 42-01 施行規則（各種 Decreto）",
      "category": "施行規則",
      "enacted": "各年",
      "url": "https://www.msp.gob.do/",
      "relevance": "一般保健法の施行に関する詳細規定。"
    }
  ],
  "classification": {
    "system": "4クラス分類（Class I / II / III / IV）",
    "basis": "リスクベース",
    "classes": [
      {
        "name": "Class I",
        "nameJa": "クラスI",
        "riskLevel": "低リスク",
        "description": "低リスク医療機器。",
        "examples": [
          "聴診器",
          "弾性包帯",
          "手動外科器具"
        ],
        "approvalPath": "登録（簡易手続き）"
      },
      {
        "name": "Class II",
        "nameJa": "クラスII",
        "riskLevel": "中低リスク",
        "description": "中低リスク医療機器。",
        "examples": [
          "血圧計",
          "注射器",
          "超音波診断装置"
        ],
        "approvalPath": "登録（標準手続き）"
      },
      {
        "name": "Class III",
        "nameJa": "クラスIII",
        "riskLevel": "中高リスク",
        "description": "中高リスク医療機器。",
        "examples": [
          "人工呼吸器",
          "透析器",
          "整形外科用インプラント"
        ],
        "approvalPath": "登録（詳細審査）"
      },
      {
        "name": "Class IV",
        "nameJa": "クラスIV",
        "riskLevel": "高リスク",
        "description": "最高リスク医療機器。",
        "examples": [
          "人工心臓弁",
          "冠動脈ステント",
          "埋込み型デバイス"
        ],
        "approvalPath": "登録（最も詳細な審査）"
      }
    ],
    "rules": [
      {
        "id": "DIGEMAPS 分類規則",
        "description": "リスクベースの分類規則。意図する用途・侵襲性・使用期間等に基づきクラスを決定。",
        "url": "https://www.msp.gob.do/"
      }
    ],
    "totalProductCodes": "要確認"
  },
  "conformityAssessment": {
    "overview": "DIGEMAPS が登録申請書類を審査。CFS、技術文書、GMP 証明、ラベリング等を評価。US FDA 承認や CE マーキングは参照情報として考慮される場合がある。",
    "routes": [
      {
        "name": "Registro Sanitario de Dispositivos Médicos",
        "nameJa": "医療機器衛生登録",
        "applicableClasses": [
          "Class I / II / III / IV"
        ],
        "description": "DIGEMAPS に登録申請書類を提出。技術文書、CFS、GMP 適合証明、ラベリング等を審査。",
        "subtypes": [],
        "avgReviewTime": "90〜180日（クラス・書類の完全性による）",
        "fee": "要確認",
        "url": "https://www.msp.gob.do/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "要確認",
    "url": "https://www.msp.gob.do/",
    "description": "DIGEMAPS は手続きのデジタル化を進めているが、完全な電子申請システムの運用状況は要確認。",
    "mandatory": false
  },
  "udi": {
    "required": false,
    "system": "要確認",
    "description": "ドミニカ共和国では現時点で独自の UDI 制度が法的に義務化されているとの確認情報はない。",
    "url": null,
    "timeline": "要確認"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "DIGEMAPS ファーマコ・テクノビジランス制度",
      "mandatory": true,
      "url": "https://www.msp.gob.do/",
      "description": "登録保有者は医療機器に関連する有害事象を DIGEMAPS に報告する義務がある。"
    },
    "recalls": {
      "authority": "DIGEMAPS",
      "description": "DIGEMAPS がリコール・FSCA を管理。",
      "url": "https://www.msp.gob.do/"
    },
    "surveillance": "DIGEMAPS によるテクノビジランス（市販後監視）。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "DIGEMAPS",
    "name": "Certificado de Libre Venta",
    "description": "登録申請時に原産国の規制当局からの CFS 提出が必要。DIGEMAPS も登録済み機器について CFS を発行可能。",
    "processingTime": "要確認",
    "url": "https://www.msp.gob.do/"
  },
  "reimbursement": {
    "system": "SENASA（Seguro Nacional de Salud）+ 民間保険",
    "authority": "SENASA / MSP",
    "description": "ドミニカ共和国の公的医療保険は SENASA が運営。社会保障制度（Ley 87-01）に基づく医療保険制度。医療機器の調達は公的医療機関の入札プロセスを通じて行われる。",
    "codingSystems": [
      "要確認"
    ],
    "url": "https://www.senasa.gob.do/"
  },
  "marketingRules": {
    "authority": "DIGEMAPS",
    "description": "医療機器の広告・販促は DIGEMAPS の規制下にある。登録済み機器のみの販売・広告が原則。",
    "keyRules": [
      "登録済み機器のみ販売・広告可",
      "虚偽・誇大広告の禁止",
      "ラベリングはスペイン語で記載"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "ドミニカ共和国は MDSAP プログラムに参加していない。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "ISO 13485 認証は GMP/QMS 証明として参照される。"
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
      "title": "医療機器規制の近代化",
      "description": "DIGEMAPS は医療機器の衛生登録プロセスの近代化と国際的整合化を推進中。"
    }
  ],
  "lastUpdated": "2026-04-02",
  "verified": null
};
