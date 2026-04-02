// グアテマラ (Republic of Guatemala)
export default {
  "code": "GTM",
  "country": "グアテマラ",
  "countryEn": "Republic of Guatemala",
  "region": "Latam",
  "flag": "🇬🇹",
  "legalSystemOverview": {
    "type": "中央集権制（Centralized system）",
    "description": "グアテマラの医療機器規制は公衆衛生社会福祉省（MSPAS: Ministerio de Salud Pública y Asistencia Social）傘下の薬務・医薬品規制局（DRPF: Departamento de Regulación y Control de Productos Farmacéuticos y Afines）が管轄する。Código de Salud (Decreto 90-97) および関連規則が主要な法的根拠。中米経済統合に伴い RTCA（中米技術規則）も適用。医療機器は衛生登録が必要。",
    "keyCharacteristics": [
      "MSPAS/DRPF による中央規制体制",
      "Código de Salud (Decreto 90-97) に基づく衛生登録制度",
      "RTCA（中米技術規則）の適用による地域整合化",
      "ローカル登録保有者の指定が必須",
      "CFS の提出が必要",
      "FDA/CE 承認は審査の参考情報として考慮"
    ]
  },
  "authorities": [
    {
      "name": "MSPAS/DRPF",
      "fullName": "Ministerio de Salud Pública y Asistencia Social - Departamento de Regulación y Control de Productos Farmacéuticos y Afines",
      "localName": "DRPF",
      "role": "医療機器の登録・市販後監視・施設許可・輸入管理",
      "url": "https://www.mspas.gob.gt/",
      "isPrimary": true
    }
  ],
  "notifiedBodies": {
    "system": "なし（DRPF が直接審査）",
    "description": "グアテマラには Notified Body 制度は存在しない。DRPF が直接、登録申請書類を審査する。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "関連規則に基づき、疾病の診断・治療・予防・監視・軽減等を目的とする器具・装置・機器・ソフトウェア・材料等で、主たる作用が薬理学的・免疫学的・代謝的手段によらないもの。RTCA の定義に準拠。",
    "scope": "体外診断用医薬品（IVD）も規制対象。",
    "notes": "定義は RTCA（中米技術規則）に基づき、GHTF/IMDRF の定義に概ね準拠。"
  },
  "primaryLaw": {
    "title": "Código de Salud (Decreto 90-97)（保健法典）",
    "originalTitle": "Código de Salud - Decreto 90-97",
    "enacted": "1997",
    "lastAmended": "随時改正",
    "url": "https://www.mspas.gob.gt/",
    "description": "グアテマラにおける保健制度全般を規定する基本法。医療機器を含む保健製品の規制の上位法的根拠。"
  },
  "implementingRegulations": [
    {
      "title": "RTCA 11.03.56:09（医療機器の登録に関する中米技術規則）",
      "date": "2009",
      "url": "https://www.mspas.gob.gt/",
      "description": "中米経済統合の枠組みで策定された医療機器の衛生登録に関する技術規則。中米各国で共通適用。",
      "category": "地域整合化"
    },
    {
      "title": "Acuerdo Gubernativo（各種政府令）",
      "date": "各年",
      "url": "https://www.mspas.gob.gt/",
      "description": "医療機器の登録・分類・輸入管理に関する追加的な政府令。",
      "category": "包括規制"
    }
  ],
  "relatedLaws": [
    {
      "title": "Ley del Organismo Ejecutivo",
      "category": "行政組織法",
      "enacted": "1997",
      "url": "https://www.mspas.gob.gt/",
      "relevance": "MSPAS の組織と権限を規定。"
    }
  ],
  "classification": {
    "system": "4クラス分類（Class I / II / III / IV）",
    "basis": "リスクベース（RTCA に準拠）",
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
        "id": "RTCA 分類規則",
        "description": "RTCA に基づくリスクベースの分類規則。意図する用途・侵襲性・使用期間等に基づきクラスを決定。",
        "url": "https://www.mspas.gob.gt/"
      }
    ],
    "totalProductCodes": "要確認"
  },
  "conformityAssessment": {
    "overview": "DRPF が登録申請書類を審査。CFS、技術文書、GMP 証明、ラベリング等を評価。RTCA に基づく中米共通の審査要件が適用される。",
    "routes": [
      {
        "name": "Registro Sanitario de Dispositivos Médicos",
        "nameJa": "医療機器衛生登録",
        "applicableClasses": [
          "Class I / II / III / IV"
        ],
        "description": "DRPF に登録申請書類を提出。RTCA に基づく技術文書、CFS、GMP 適合証明、ラベリング等を審査。",
        "subtypes": [
          {
            "name": "中米統一登録（Registro Unificado Centroamericano）",
            "description": "RTCA に基づき、1カ国での登録を他の中米諸国で認証する統一登録制度（実施状況は要確認）。"
          }
        ],
        "avgReviewTime": "60〜180日（クラス・書類の完全性による）",
        "fee": "要確認",
        "url": "https://www.mspas.gob.gt/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "要確認",
    "url": "https://www.mspas.gob.gt/",
    "description": "DRPF は手続きのデジタル化を進めているが、完全な電子申請システムの運用状況は要確認。",
    "mandatory": false
  },
  "udi": {
    "required": false,
    "system": "要確認",
    "description": "グアテマラでは現時点で独自の UDI 制度が法的に義務化されているとの確認情報はない。",
    "url": null,
    "timeline": "要確認"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "DRPF テクノビジランス制度",
      "mandatory": true,
      "url": "https://www.mspas.gob.gt/",
      "description": "登録保有者は医療機器に関連する有害事象を DRPF に報告する義務がある。テクノビジランス制度により市販後安全性を監視。"
    },
    "recalls": {
      "authority": "DRPF",
      "description": "DRPF がリコール・FSCA を管理。",
      "url": "https://www.mspas.gob.gt/"
    },
    "surveillance": "DRPF によるテクノビジランス（市販後監視）。中米地域での情報共有も進行中。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "DRPF",
    "name": "Certificado de Libre Venta",
    "description": "登録申請時に原産国の規制当局からの CFS 提出が必要。DRPF も登録済み機器について CFS を発行可能。",
    "processingTime": "要確認",
    "url": "https://www.mspas.gob.gt/"
  },
  "reimbursement": {
    "system": "IGSS（Instituto Guatemalteco de Seguridad Social）+ 公的医療機関 + 民間保険",
    "authority": "MSPAS / IGSS",
    "description": "グアテマラの公的医療は MSPAS 傘下の公立病院と IGSS（社会保険機関）が中心。医療機器の調達は公的入札プロセス（Guatecompras）を通じて行われる。",
    "codingSystems": [
      "要確認"
    ],
    "url": "https://www.igss.gob.gt/"
  },
  "marketingRules": {
    "authority": "DRPF",
    "description": "医療機器の広告・販促は DRPF の規制下にある。登録済み機器のみの販売・広告が原則。",
    "keyRules": [
      "登録済み機器のみ販売・広告可",
      "虚偽・誇大広告の禁止",
      "ラベリングはスペイン語で記載"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "グアテマラは MDSAP プログラムに参加していない。"
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
      "title": "RTCA に基づく中米規制整合化の推進",
      "description": "グアテマラは RTCA（中米技術規則）に基づく医療機器規制の整合化を中米各国と共同で推進中。統一登録制度の実効化に向けた議論が続く。"
    }
  ],
  "lastUpdated": "2026-04-02",
  "verified": null
};
