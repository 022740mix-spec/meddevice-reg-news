// ドミニカ共和国 (Dominican Republic)
export default {
  "code": "DOM",
  "country": "ドミニカ共和国",
  "countryEn": "Dominican Republic",
  "region": "Latam",
  "flag": "🇩🇴",
  "legalSystemOverview": {
    "type": "中央集権制（Centralized system）",
    "description": "ドミニカ共和国の医療機器規制は公衆衛生省（MSP: Ministerio de Salud Pública）傘下の医薬品・食品・保健製品総局（DIGEMAPS: Dirección General de Medicamentos, Alimentos y Productos Sanitarios）が管轄する。Ley General de Salud N° 42-01 および Decreto N° 246-06（医薬品規則）が主要な法的根拠。医療機器（productos sanitarios）は衛生登録（Registro Sanitario）が必要。4クラス分類（Class I / IIa / IIb / III）を採用。登録有効期間は5年。",
    "keyCharacteristics": [
      "MSP/DIGEMAPS による中央規制体制",
      "Ley 42-01 および Decreto 246-06 に基づく衛生登録制度",
      "4クラス分類（Class I / IIa / IIb / III）",
      "ローカル Authorized Representative の指定が必須",
      "CFS の提出が必要",
      "ローカル商標登録（National Industrial Property Office 発行）が必要",
      "登録有効期間 5年"
    ]
  },
  "authorities": [
    {
      "name": "DIGEMAPS",
      "fullName": "Dirección General de Medicamentos, Alimentos y Productos Sanitarios",
      "localName": "Dirección General de Medicamentos, Alimentos y Productos Sanitarios",
      "role": "医療機器の登録・市販後監視・施設許可・輸入管理",
      "url": "https://digemaps.gob.do/",
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
    "legalDefinition": "関連規則に基づき、疾病の診断・治療・予防・管理等を目的とする器具・装置・機器・ソフトウェア・材料等で、主たる作用が薬理学的・免疫学的・代謝的手段によらないもの。「productos sanitarios」の用語を使用。",
    "scope": "体外診断用医薬品（IVD）も規制対象。",
    "notes": "定義は GHTF/IMDRF の国際的定義に概ね準拠。"
  },
  "primaryLaw": {
    "title": "Ley General de Salud N° 42-01",
    "originalTitle": "Ley General de Salud N° 42-01 de 8 de marzo de 2001",
    "enacted": "2001",
    "lastAmended": "随時改正",
    "url": "https://repositorio.msp.gob.do/bitstream/handle/123456789/793/LeyNo.%2042-01.PDF?sequence=1&isAllowed=y",
    "description": "ドミニカ共和国における保健制度全般を規定する基本法。医療機器を含む保健製品の規制の上位法的根拠。"
  },
  "implementingRegulations": [
    {
      "title": "Decreto N° 246-06（医薬品・保健製品に関する規則）",
      "date": "2006",
      "url": "https://digemaps.gob.do/wpfd_file/decreto-num-246-06-control-de-medicamentos/",
      "description": "医薬品・医療機器の製造・品質管理・供給・流通・輸入・保管・評価・登録を規制する包括的規則。DIGEMAPS の権限と規制枠組みを規定。",
      "category": "包括規制"
    },
    {
      "title": "Resolution N° 0000045（簡易手続き）",
      "date": "2016",
      "url": "https://digemaps.gob.do/",
      "description": "参照規制当局（米国・欧州・カナダ・日本・豪州・スイス）で認可済みの製品、または整合化された GMP に適合する製品に対する簡易登録手続きを規定。",
      "category": "簡易手続き"
    }
  ],
  "relatedLaws": [
    {
      "title": "Ley N° 87-01（社会保障制度法）",
      "category": "社会保障",
      "enacted": "2001",
      "url": "https://www.wipo.int/wipolex/es/legislation/details/13457",
      "relevance": "社会保障制度に基づく医療保険制度を規定。医療機器の償還に関連。"
    }
  ],
  "classification": {
    "system": "4クラス分類（Class I / IIa / IIb / III）",
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
        "approvalPath": "衛生登録（簡易手続き）"
      },
      {
        "name": "Class IIa",
        "nameJa": "クラスIIa",
        "riskLevel": "中低リスク",
        "description": "中低リスク医療機器。",
        "examples": [
          "血圧計",
          "注射器",
          "超音波診断装置"
        ],
        "approvalPath": "衛生登録（標準手続き）"
      },
      {
        "name": "Class IIb",
        "nameJa": "クラスIIb",
        "riskLevel": "中高リスク",
        "description": "中高リスク医療機器。",
        "examples": [
          "人工呼吸器",
          "透析器",
          "輸液ポンプ"
        ],
        "approvalPath": "衛生登録（詳細審査）"
      },
      {
        "name": "Class III",
        "nameJa": "クラスIII",
        "riskLevel": "高リスク",
        "description": "最高リスク医療機器。",
        "examples": [
          "人工心臓弁",
          "冠動脈ステント",
          "埋込み型デバイス"
        ],
        "approvalPath": "衛生登録（最も詳細な審査）"
      }
    ],
    "rules": [
      {
        "id": "DIGEMAPS 分類規則",
        "description": "リスクベースの分類規則。意図する用途・侵襲性・使用期間等に基づきクラスを決定。",
        "url": "https://digemaps.gob.do/"
      }
    ],
    "totalProductCodes": "要確認"
  },
  "conformityAssessment": {
    "overview": "DIGEMAPS が登録申請書類を審査。CFS、技術文書、GMP 証明、ラベリング等を評価。参照規制当局（米国・欧州・カナダ・日本・豪州・スイス）で認可済みの製品には簡易手続きあり（Resolution 0000045）。",
    "routes": [
      {
        "name": "Registro Sanitario de Productos Sanitarios / Dispositivos Médicos",
        "nameJa": "医療機器衛生登録",
        "applicableClasses": [
          "Class I / IIa / IIb / III"
        ],
        "description": "DIGEMAPS に登録申請書類を提出。技術文書、CFS、品質適合証明、ラベリング、使用説明書、製品サンプル（最低1年の有効期限あり、最低2個）、ローカル商標登録証明等を審査。有効期間5年。",
        "subtypes": [
          {
            "name": "簡易手続き（Resolution 0000045）",
            "description": "米国・欧州・カナダ・日本・豪州・スイスの参照規制当局で認可済み、または整合化 GMP に適合する製品に対する簡易手続き。"
          }
        ],
        "avgReviewTime": "最大240営業日（約6〜12ヶ月）",
        "avgReviewTimeSource": "https://arazygroup.com/medical-device-registration-dominican-republic/",
        "fee": "USD 190（新規登録）",
        "feeSource": "https://arazygroup.com/medical-device-registration-dominican-republic/",
        "url": "https://digemaps.gob.do/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "DIGEMAPS オンラインポータル",
    "url": "https://digemaps.gob.do/",
    "description": "DIGEMAPS は手続きの仮想化（virtualización）を進めており、オンラインでの審査プロセスが導入されている。",
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
      "url": "https://digemaps.gob.do/",
      "description": "登録保有者は医療機器に関連する有害事象を DIGEMAPS に報告する義務がある。"
    },
    "recalls": {
      "authority": "DIGEMAPS",
      "description": "DIGEMAPS がリコール・FSCA を管理。",
      "url": "https://digemaps.gob.do/"
    },
    "surveillance": "DIGEMAPS によるテクノビジランス（市販後監視）。外国製造者に対する監査・検査は適用されない（国内製造者のみ対象）。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "DIGEMAPS",
    "name": "Certificado de Libre Venta",
    "description": "登録申請時に原産国の規制当局からの CFS 提出が必要。DIGEMAPS も登録済み機器について CFS を発行可能。",
    "processingTime": "要確認",
    "url": "https://digemaps.gob.do/"
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
      "ラベリングはスペイン語で記載",
      "ローカル商標登録（National Industrial Property Office 発行）が必要"
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
      "date": "2025-01",
      "title": "Reglamento de Productos Sanitarios y/o Dispositivos Médicos の公開諮問",
      "description": "DIGEMAPS は医療機器（productos sanitarios）の専用規則案を策定し、2025年1月24日から公開諮問を開始。医療機器規制の近代化・国際整合化を目指す。"
    },
    {
      "date": "2024",
      "title": "DIGEMAPS の衛生登録発行実績",
      "description": "2024年に DIGEMAPS は11,000件超の衛生登録ライセンスを発行（医薬品・食品・化粧品・医療機器を含む）。審査プロセスの仮想化・要件統一により処理時間短縮を実現。"
    }
  ],
  "lastUpdated": "2026-04-06",
  "verified": "2026-04-06"
};
