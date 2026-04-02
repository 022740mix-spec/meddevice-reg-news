// ウルグアイ (Oriental Republic of Uruguay)
export default {
  "code": "URY",
  "country": "ウルグアイ",
  "countryEn": "Oriental Republic of Uruguay",
  "region": "Latam",
  "flag": "🇺🇾",
  "legalSystemOverview": {
    "type": "中央集権制（Centralized system）",
    "description": "ウルグアイの医療機器規制は公衆衛生省（MSP）傘下の保健製品総局（DGSP: Dirección General de Servicios de Salud / División Productos de Salud）が管轄する。Decreto 59/005（医療機器の登録・管理に関する規則）が主要な規制根拠。MERCOSUR の共通規則（GMC 決議）を国内法に取り込んでおり、MERCOSUR 整合化が進んでいる。3クラス分類（Class I / II / III）を採用し、リスクベースの登録制度を運用。",
    "keyCharacteristics": [
      "MSP/DGSP による中央規制体制",
      "Decreto 59/005 に基づく3クラス分類（Class I / II / III）",
      "MERCOSUR GMC 決議の国内法化により地域整合化が進行",
      "ローカル登録保有者（Titular del Registro）の指定が必須",
      "CFS（Certificate of Free Sale）の提出が原則必要",
      "GMP（BPF: Buenas Prácticas de Fabricación）適合が求められる"
    ]
  },
  "authorities": [
    {
      "name": "MSP/DGSP",
      "fullName": "Ministerio de Salud Pública - Dirección General de Servicios de Salud / División Productos de Salud",
      "localName": "Ministerio de Salud Pública",
      "role": "医療機器の登録・市販後監視・施設許可・輸入管理",
      "url": "https://www.gub.uy/ministerio-salud-publica/",
      "isPrimary": true
    }
  ],
  "notifiedBodies": {
    "system": "なし（MSP が直接審査）",
    "description": "ウルグアイには Notified Body 制度は存在しない。MSP/DGSP が直接、登録申請書類を審査する。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "Decreto 59/005 に基づき、疾病の診断・治療・予防・監視・軽減等を目的とする器具・装置・機器・ソフトウェア・材料等で、主たる作用が薬理学的・免疫学的・代謝的手段によらないもの。MERCOSUR の定義に準拠。",
    "scope": "体外診断用医薬品（IVD）も規制対象。",
    "notes": "定義は MERCOSUR GMC 決議に基づき、GHTF/IMDRF の定義に概ね準拠。"
  },
  "primaryLaw": {
    "title": "Decreto 59/005（医療機器の登録・管理に関する規則）",
    "originalTitle": "Decreto 59/005 - Reglamento de Registro de Productos Médicos",
    "enacted": "2005",
    "lastAmended": "随時改正",
    "url": "https://www.gub.uy/ministerio-salud-publica/",
    "description": "ウルグアイにおける医療機器の分類・登録・輸入管理を規定する主要な規則。MERCOSUR GMC 決議を国内法に取り込んだもの。"
  },
  "implementingRegulations": [
    {
      "title": "Ordenanza 615/007（医療機器の技術要件）",
      "date": "2007",
      "url": "https://www.gub.uy/ministerio-salud-publica/",
      "description": "医療機器の登録に必要な技術文書・ラベリング要件等を規定。",
      "category": "技術要件"
    },
    {
      "title": "MERCOSUR GMC 決議（各種）",
      "date": "各年",
      "url": "https://www.mercosur.int/",
      "description": "MERCOSUR 加盟国間で整合化された医療機器規制。GMP、分類、登録手続き等に関する決議。",
      "category": "地域整合化"
    }
  ],
  "relatedLaws": [
    {
      "title": "Ley 9.202 - Ley Orgánica de Salud Pública",
      "category": "保健基本法",
      "enacted": "1934",
      "url": "https://www.gub.uy/ministerio-salud-publica/",
      "relevance": "公衆衛生制度の基本法。MSP の権限を規定。"
    }
  ],
  "classification": {
    "system": "3クラス分類（Class I / II / III）",
    "basis": "リスクベース（MERCOSUR 整合化規則に準拠）",
    "classes": [
      {
        "name": "Class I",
        "nameJa": "クラスI",
        "riskLevel": "低リスク",
        "description": "低リスク医療機器。",
        "examples": [
          "聴診器",
          "手動外科器具",
          "弾性包帯"
        ],
        "approvalPath": "登録（簡易手続き）"
      },
      {
        "name": "Class II",
        "nameJa": "クラスII",
        "riskLevel": "中リスク",
        "description": "中リスク医療機器。",
        "examples": [
          "超音波診断装置",
          "歯科用充填材",
          "注射器"
        ],
        "approvalPath": "登録（標準手続き）"
      },
      {
        "name": "Class III",
        "nameJa": "クラスIII",
        "riskLevel": "高リスク",
        "description": "高リスク医療機器。詳細な審査が必要。",
        "examples": [
          "人工心臓弁",
          "冠動脈ステント",
          "埋込み型デバイス"
        ],
        "approvalPath": "登録（詳細審査）"
      }
    ],
    "rules": [
      {
        "id": "MERCOSUR GMC 分類規則",
        "description": "MERCOSUR で整合化されたリスクベースの分類規則。意図する用途・侵襲性・使用期間等に基づきクラスを決定。",
        "url": "https://www.mercosur.int/"
      }
    ],
    "totalProductCodes": "要確認"
  },
  "conformityAssessment": {
    "overview": "MSP/DGSP が登録申請書類を審査。CFS、技術文書、GMP 証明等を評価。MERCOSUR 加盟国での既承認は参照情報として考慮される。",
    "routes": [
      {
        "name": "Registro de Producto Médico",
        "nameJa": "医療機器登録",
        "applicableClasses": [
          "Class I / II / III"
        ],
        "description": "MSP/DGSP に登録申請書類を提出。技術文書、CFS、GMP 適合証明、ラベリング等を審査。リスククラスに応じた審査深度。",
        "subtypes": [],
        "avgReviewTime": "60〜180日（クラス・書類の完全性による）",
        "fee": "要確認",
        "url": "https://www.gub.uy/ministerio-salud-publica/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "要確認",
    "url": "https://www.gub.uy/ministerio-salud-publica/",
    "description": "MSP は一部手続きのデジタル化を進めているが、完全な電子申請システムの運用状況は要確認。",
    "mandatory": false
  },
  "udi": {
    "required": false,
    "system": "要確認",
    "description": "ウルグアイでは現時点で独自の UDI 制度が法的に義務化されているとの確認情報はない。MERCOSUR レベルでの議論は進行中。",
    "url": null,
    "timeline": "要確認"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "MSP テクノビジランス制度",
      "mandatory": true,
      "url": "https://www.gub.uy/ministerio-salud-publica/",
      "description": "登録保有者は医療機器に関連する有害事象を MSP に報告する義務がある。テクノビジランス（Tecnovigilancia）制度により市販後安全性を監視。"
    },
    "recalls": {
      "authority": "MSP/DGSP",
      "description": "MSP がリコール・FSCA を管理。登録保有者はリコール実施時に MSP に通知義務。",
      "url": "https://www.gub.uy/ministerio-salud-publica/"
    },
    "surveillance": "MSP によるテクノビジランス（市販後監視）。MERCOSUR レベルでの情報共有も行われる。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "MSP",
    "name": "Certificado de Libre Venta",
    "description": "登録申請時に原産国の規制当局からの CFS 提出が必要。MSP も登録済み機器について CFS を発行可能。",
    "processingTime": "要確認",
    "url": "https://www.gub.uy/ministerio-salud-publica/"
  },
  "reimbursement": {
    "system": "FONASA（Fondo Nacional de Salud）+ 民間保険",
    "authority": "MSP / FONASA",
    "description": "ウルグアイの公的医療保険は FONASA が運営。国民統合健康保険制度（SNIS）を通じて医療サービスを提供。医療機器の調達は公的医療機関の入札プロセスを通じて行われる。",
    "codingSystems": [
      "要確認"
    ],
    "url": "https://www.gub.uy/ministerio-salud-publica/"
  },
  "marketingRules": {
    "authority": "MSP",
    "description": "医療機器の広告・販促は MSP の規制下にある。登録済み機器のみの販売・広告が原則。",
    "keyRules": [
      "登録済み機器のみ販売・広告可",
      "虚偽・誇大広告の禁止",
      "ラベリングはスペイン語で記載"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "ウルグアイは MDSAP プログラムに参加していない。"
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
      "title": "MERCOSUR 規制整合化の継続",
      "description": "MERCOSUR 加盟国間での医療機器規制の整合化が継続的に進められている。GMP 相互承認やテクノビジランスの情報共有が強化されている。"
    }
  ],
  "lastUpdated": "2026-04-02",
  "verified": null
};
