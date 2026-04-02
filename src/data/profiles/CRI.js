// コスタリカ (Republic of Costa Rica)
export default {
  "code": "CRI",
  "country": "コスタリカ",
  "countryEn": "Republic of Costa Rica",
  "region": "Latam",
  "flag": "🇨🇷",
  "legalSystemOverview": {
    "type": "中央集権制（Centralized system）",
    "description": "コスタリカの医療機器規制は保健省（Ministerio de Salud）が管轄する。Decreto N° 34482-S（医療機器の登録・分類・輸入・管理に関する規則）が主たる規制根拠。4クラス分類（Class 1〜4）を採用。Class 1 は登録免除、Class 2 は簡易登録、Class 3/4 は詳細な審査が必要だが、US FDA 認可済み機器は簡易経路を利用可能。CONIS（Consejo Nacional de Investigación en Salud）は臨床研究の倫理審査を担当する組織。",
    "keyCharacteristics": [
      "保健省（Ministerio de Salud）による規制体制",
      "Decreto 34482-S に基づく4クラス分類（Class 1 / 2 / 3 / 4）",
      "Class 1 は登録免除",
      "FDA 認可済み Class 3/4 機器には簡易経路あり",
      "ローカル登録保有者（Registration Holder）の指定が必須",
      "二段階審査（法的評価 + 技術評価）"
    ]
  },
  "authorities": [
    {
      "name": "Ministerio de Salud",
      "fullName": "Ministerio de Salud de Costa Rica",
      "localName": "Ministerio de Salud",
      "role": "医療機器の衛生登録・市販後監視・施設許可・輸入管理",
      "url": "https://www.ministeriodesalud.go.cr/",
      "isPrimary": true
    },
    {
      "name": "CONIS",
      "fullName": "Consejo Nacional de Investigación en Salud",
      "localName": "Consejo Nacional de Investigación en Salud",
      "role": "臨床研究の倫理審査・承認",
      "url": "https://www.ministeriodesalud.go.cr/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "なし（保健省が直接審査）",
    "description": "コスタリカには Notified Body 制度は存在しない。保健省が直接、衛生登録の申請書類を審査する。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "Decreto 34482-S に基づき、疾病の診断・治療・予防・監視・軽減等を目的とする器具・装置・機器・ソフトウェア・材料等で、主たる作用が薬理学的・免疫学的・代謝的手段によらないもの。",
    "scope": "体外診断用医薬品（IVD）も規制対象。",
    "notes": "定義は国際的な GHTF/IMDRF の定義に概ね準拠。"
  },
  "primaryLaw": {
    "title": "Ley General de Salud N° 5395（一般保健法）",
    "originalTitle": "Ley General de Salud N° 5395",
    "enacted": "1973",
    "lastAmended": "随時改正",
    "url": "https://www.ministeriodesalud.go.cr/",
    "description": "コスタリカにおける保健制度全般を規定する基本法。医療機器を含む保健製品の規制の上位法的根拠。"
  },
  "implementingRegulations": [
    {
      "title": "Decreto N° 34482-S（医療機器の登録・分類・輸入・管理に関する規則）",
      "date": "2008",
      "url": "https://www.ministeriodesalud.go.cr/",
      "description": "医療機器の分類・登録手続き・必要書類・輸入管理を包括的に規定する主要な規則。Reglamento de Inscripción, Clasificación, Importación y Control de Equipo y Material Biomédico。",
      "category": "包括規制"
    }
  ],
  "relatedLaws": [
    {
      "title": "Ley de Protección al Consumidor N° 7472",
      "category": "消費者保護",
      "enacted": "1994",
      "url": "https://www.ministeriodesalud.go.cr/",
      "relevance": "消費者保護の観点から医療機器の安全性・表示要件に関連。"
    }
  ],
  "classification": {
    "system": "4クラス分類（Class 1 / 2 / 3 / 4）",
    "basis": "リスクベース",
    "classes": [
      {
        "name": "Class 1",
        "nameJa": "クラス1",
        "riskLevel": "低リスク",
        "description": "低リスク医療機器。登録免除。",
        "examples": [
          "弾性包帯",
          "手動外科器具",
          "聴診器"
        ],
        "approvalPath": "登録免除（Exento）"
      },
      {
        "name": "Class 2",
        "nameJa": "クラス2",
        "riskLevel": "中リスク",
        "description": "中リスク医療機器。簡易登録手続き。",
        "examples": [
          "超音波診断装置",
          "歯科用充填材",
          "血圧計"
        ],
        "approvalPath": "簡易登録（Procedimiento simplificado）"
      },
      {
        "name": "Class 3",
        "nameJa": "クラス3",
        "riskLevel": "高リスク",
        "description": "高リスク医療機器。詳細な審査が必要。臨床データの提出が求められる場合あり。FDA 認可済みなら簡易経路可。",
        "examples": [
          "人工呼吸器",
          "透析器",
          "整形外科用インプラント"
        ],
        "approvalPath": "詳細登録（FDA 認可済みなら簡易経路可）"
      },
      {
        "name": "Class 4",
        "nameJa": "クラス4",
        "riskLevel": "最高リスク",
        "description": "最高リスク医療機器。最も厳格な審査。FDA 認可済みなら簡易経路可。",
        "examples": [
          "人工心臓弁",
          "冠動脈ステント",
          "埋込み型デバイス"
        ],
        "approvalPath": "詳細登録（FDA 認可済みなら簡易経路可）"
      }
    ],
    "rules": [
      {
        "id": "Decreto 34482-S 分類規則",
        "description": "リスクベースの分類規則。意図する用途・侵襲性・使用期間等に基づきクラスを決定。",
        "url": "https://www.ministeriodesalud.go.cr/"
      }
    ],
    "totalProductCodes": "要確認"
  },
  "conformityAssessment": {
    "overview": "保健省が二段階審査（法的評価 + 技術評価）を実施。CFS、CE/FDA 認証文書、技術文書等を評価。FDA 認可済み Class 3/4 機器には簡易経路あり。",
    "routes": [
      {
        "name": "Registro Sanitario de Equipo y Material Biomédico",
        "nameJa": "医療機器衛生登録",
        "applicableClasses": [
          "Class 2 / 3 / 4（Class 1 は免除）"
        ],
        "description": "Phase A: 法的評価（提出書類の適合性確認） → Phase B: 技術評価（技術文書の審査）の二段階。CFS、技術文書、ラベリング、QMS 文書等を提出。",
        "subtypes": [
          {
            "name": "簡易登録（FDA 認可済み Class 3/4）",
            "description": "US FDA で認可済みの Class 3 / 4 機器は Class 2 と同様の簡易登録手続きを利用可能。"
          }
        ],
        "avgReviewTime": "Phase A: 15日（Class 1/2）〜30日（Class 3/4）、Phase B: 30日",
        "fee": "要確認（保健省料金表を参照）",
        "url": "https://registrelo.go.cr/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "Regístrelo（保健省オンライン登録ポータル）",
    "url": "https://registrelo.go.cr/",
    "description": "保健省は Regístrelo プラットフォームを通じてオンラインでの衛生登録申請を受付。",
    "mandatory": true
  },
  "udi": {
    "required": false,
    "system": "要確認（UDI 制度の独自導入は未確認）",
    "description": "コスタリカでは現時点で IMDRF 型の UDI 制度が法的に義務化されているとの確認情報はない。",
    "url": null,
    "timeline": "要確認"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "保健省テクノビジランス制度",
      "mandatory": true,
      "url": "https://www.ministeriodesalud.go.cr/",
      "description": "登録保有者は医療機器に関連する有害事象を保健省に報告する義務がある。テクノビジランス（Tecnovigilancia）制度により市販後安全性を監視。"
    },
    "recalls": {
      "authority": "Ministerio de Salud",
      "description": "保健省がリコール・FSCA を管理。登録保有者はリコール実施時に保健省に通知義務。",
      "url": "https://www.ministeriodesalud.go.cr/"
    },
    "surveillance": "保健省によるテクノビジランス（市販後監視）。詳細な PMS 制度の公開情報は限定的。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "Ministerio de Salud",
    "name": "Certificado de Libre Venta / Free Sale Certificate",
    "description": "登録申請時に原産国の規制当局からの CFS 提出が必要。コスタリカの保健省も登録済み機器について CFS を発行可能。",
    "processingTime": "要確認",
    "url": "https://www.ministeriodesalud.go.cr/"
  },
  "reimbursement": {
    "system": "CCSS（Caja Costarricense de Seguro Social）+ 民間保険",
    "authority": "CCSS",
    "description": "コスタリカの公的医療保険は CCSS（コスタリカ社会保険公社）が運営。国民皆保険に近い制度。医療機器の調達は CCSS の入札・調達プロセスを通じて行われる。",
    "codingSystems": [
      "要確認"
    ],
    "url": "https://www.ccss.sa.cr/"
  },
  "marketingRules": {
    "authority": "Ministerio de Salud",
    "description": "医療機器の広告・販促は保健省の規制下にある。衛生登録済み機器のみの販売・広告が原則。",
    "keyRules": [
      "Registro Sanitario 取得済み機器のみ販売・広告可（Class 1 は免除）",
      "虚偽・誇大広告の禁止",
      "ラベリングはスペイン語で記載"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "コスタリカは MDSAP プログラムに参加していない。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "ISO 13485 認証は QMS 証明として参照される。法的義務として明示されているかは要確認。"
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
      "title": "Regístrelo ポータルの運用拡大",
      "description": "保健省はオンライン登録ポータル Regístrelo の機能を拡大し、医療機器の衛生登録プロセスのデジタル化を推進中。"
    }
  ],
  "lastUpdated": "2026-04-02",
  "verified": null
};
