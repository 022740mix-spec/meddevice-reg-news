// パナマ (Republic of Panama)
export default {
  "code": "PAN",
  "country": "パナマ",
  "countryEn": "Republic of Panama",
  "region": "Latam",
  "flag": "🇵🇦",
  "legalSystemOverview": {
    "type": "中央集権制（Centralized system）",
    "description": "パナマの医療機器規制は保健省（MINSA: Ministerio de Salud）傘下の国家薬事局（DNFD: Dirección Nacional de Farmacia y Drogas）が管轄する。Ley 1 de 2001（医薬品法）および Decreto Ejecutivo N° 178 de 2001（施行規則）が主要な法的根拠。医療機器は衛生登録（Registro Sanitario）が必要。リスクベースの4クラス分類を採用。FDA 承認済み・CE マーキング取得済み機器に対しては一部簡易経路あり。",
    "keyCharacteristics": [
      "MINSA/DNFD による中央規制体制",
      "Ley 1 de 2001 に基づく衛生登録制度",
      "4クラス分類（Class I / II / III / IV）",
      "ローカル登録保有者の指定が必須",
      "CFS の提出が必要",
      "FDA/CE 承認済み機器には簡易経路の可能性あり"
    ]
  },
  "authorities": [
    {
      "name": "DNFD",
      "fullName": "Dirección Nacional de Farmacia y Drogas",
      "localName": "Dirección Nacional de Farmacia y Drogas",
      "role": "医療機器の登録・市販後監視・施設許可・輸入管理",
      "url": "http://www.minsa.gob.pa/",
      "isPrimary": true
    },
    {
      "name": "MINSA",
      "fullName": "Ministerio de Salud",
      "localName": "Ministerio de Salud",
      "role": "保健政策の策定・監督",
      "url": "http://www.minsa.gob.pa/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "なし（DNFD が直接審査）",
    "description": "パナマには Notified Body 制度は存在しない。DNFD が直接、登録申請書類を審査する。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "Ley 1 de 2001 および関連規則に基づき、疾病の診断・治療・予防・監視・軽減等を目的とする器具・装置・機器・ソフトウェア・材料等で、主たる作用が薬理学的・免疫学的・代謝的手段によらないもの。",
    "scope": "体外診断用医薬品（IVD）も規制対象。",
    "notes": "定義は GHTF/IMDRF の国際的定義に概ね準拠。"
  },
  "primaryLaw": {
    "title": "Ley N° 1 de 2001（医薬品・その他保健製品に関する法律）",
    "originalTitle": "Ley 1 de 10 de enero de 2001 - Sobre Medicamentos y otros Productos para la Salud Humana",
    "enacted": "2001",
    "lastAmended": "随時改正",
    "url": "http://www.minsa.gob.pa/",
    "description": "パナマにおける医薬品・医療機器等の保健製品を規制する基本法。DNFD の権限と規制枠組みを規定。"
  },
  "implementingRegulations": [
    {
      "title": "Decreto Ejecutivo N° 178 de 2001（施行規則）",
      "date": "2001",
      "url": "http://www.minsa.gob.pa/",
      "description": "Ley 1 de 2001 の施行規則。医療機器の登録手続き・分類・必要書類を規定。",
      "category": "包括規制"
    },
    {
      "title": "Resolución N° 442（医療機器の登録に関する技術規則）",
      "date": "各種",
      "url": "http://www.minsa.gob.pa/",
      "description": "医療機器の登録に関する追加的な技術規則・ガイダンス。",
      "category": "技術要件"
    }
  ],
  "relatedLaws": [
    {
      "title": "Código Sanitario (Ley 66 de 1947)",
      "category": "衛生法",
      "enacted": "1947",
      "url": "http://www.minsa.gob.pa/",
      "relevance": "保健衛生制度の基本法。"
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
        "id": "DNFD 分類規則",
        "description": "リスクベースの分類規則。意図する用途・侵襲性・使用期間等に基づきクラスを決定。",
        "url": "http://www.minsa.gob.pa/"
      }
    ],
    "totalProductCodes": "要確認"
  },
  "conformityAssessment": {
    "overview": "DNFD が登録申請書類を審査。CFS、技術文書、GMP 証明、ラベリング等を評価。FDA 承認済みや CE マーキング取得済み機器は審査の参考とされる。",
    "routes": [
      {
        "name": "Registro Sanitario de Dispositivos Médicos",
        "nameJa": "医療機器衛生登録",
        "applicableClasses": [
          "Class I / II / III / IV"
        ],
        "description": "DNFD に登録申請書類を提出。技術文書、CFS、GMP 適合証明、ラベリング等を審査。",
        "subtypes": [
          {
            "name": "簡易登録（FDA/CE 承認済み機器）",
            "description": "US FDA 承認済みまたは CE マーキング取得済み機器は審査が簡略化される場合がある。"
          }
        ],
        "avgReviewTime": "60〜180日（クラス・書類の完全性による）",
        "fee": "要確認",
        "url": "http://www.minsa.gob.pa/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "要確認",
    "url": "http://www.minsa.gob.pa/",
    "description": "DNFD は手続きのデジタル化を進めているが、完全な電子申請システムの運用状況は要確認。",
    "mandatory": false
  },
  "udi": {
    "required": false,
    "system": "要確認",
    "description": "パナマでは現時点で独自の UDI 制度が法的に義務化されているとの確認情報はない。",
    "url": null,
    "timeline": "要確認"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "DNFD テクノビジランス制度",
      "mandatory": true,
      "url": "http://www.minsa.gob.pa/",
      "description": "登録保有者は医療機器に関連する有害事象を DNFD に報告する義務がある。テクノビジランス制度により市販後安全性を監視。"
    },
    "recalls": {
      "authority": "DNFD",
      "description": "DNFD がリコール・FSCA を管理。",
      "url": "http://www.minsa.gob.pa/"
    },
    "surveillance": "DNFD によるテクノビジランス（市販後監視）。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "DNFD",
    "name": "Certificado de Libre Venta",
    "description": "登録申請時に原産国の規制当局からの CFS 提出が必要。DNFD も登録済み機器について CFS を発行可能。",
    "processingTime": "要確認",
    "url": "http://www.minsa.gob.pa/"
  },
  "reimbursement": {
    "system": "CSS（Caja de Seguro Social）+ 公的医療機関 + 民間保険",
    "authority": "MINSA / CSS",
    "description": "パナマの公的医療は MINSA 傘下の公立病院と CSS（社会保険公社）が中心。医療機器の調達は公的入札プロセス（Panamá Compra en Línea）を通じて行われる。",
    "codingSystems": [
      "要確認"
    ],
    "url": "http://www.css.gob.pa/"
  },
  "marketingRules": {
    "authority": "DNFD",
    "description": "医療機器の広告・販促は DNFD の規制下にある。登録済み機器のみの販売・広告が原則。",
    "keyRules": [
      "登録済み機器のみ販売・広告可",
      "虚偽・誇大広告の禁止",
      "ラベリングはスペイン語で記載"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "パナマは MDSAP プログラムに参加していない。"
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
      "description": "DNFD は医療機器の衛生登録プロセスの効率化と国際的整合化を推進中。電子申請システムの整備も進行。"
    }
  ],
  "lastUpdated": "2026-04-02",
  "verified": null
};
