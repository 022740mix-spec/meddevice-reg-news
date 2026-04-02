// ホンジュラス (Republic of Honduras)
export default {
  "code": "HND",
  "country": "ホンジュラス",
  "countryEn": "Republic of Honduras",
  "region": "Latam",
  "flag": "🇭🇳",
  "legalSystemOverview": {
    "type": "中央集権制（Centralized system）",
    "description": "ホンジュラスの医療機器規制は ARSA（Agencia de Regulación Sanitaria）が管轄する。ARSA は2014年に設立された独立規制機関で、旧来の保健省薬事局の機能を引き継いだ。Ley Marco del Sistema de Protección Social および関連規則が法的根拠。RTCA（中米技術規則）も適用。医療機器は衛生登録が必要で、リスクベースの分類を採用。",
    "keyCharacteristics": [
      "ARSA による独立規制機関としての管理",
      "RTCA（中米技術規則）の適用による地域整合化",
      "4クラス分類（Class I / II / III / IV）",
      "ローカル登録保有者の指定が必須",
      "CFS の提出が必要",
      "FDA/CE 承認は審査の参考情報として考慮"
    ]
  },
  "authorities": [
    {
      "name": "ARSA",
      "fullName": "Agencia de Regulación Sanitaria",
      "localName": "Agencia de Regulación Sanitaria",
      "role": "医療機器の登録・市販後監視・施設許可・輸入管理",
      "url": "https://www.arsa.gob.hn/",
      "isPrimary": true
    },
    {
      "name": "SESAL",
      "fullName": "Secretaría de Salud",
      "localName": "Secretaría de Salud",
      "role": "保健政策の策定・監督",
      "url": "https://www.salud.gob.hn/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "なし（ARSA が直接審査）",
    "description": "ホンジュラスには Notified Body 制度は存在しない。ARSA が直接、登録申請書類を審査する。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "関連規則に基づき、疾病の診断・治療・予防・監視・軽減等を目的とする器具・装置・機器・ソフトウェア・材料等で、主たる作用が薬理学的・免疫学的・代謝的手段によらないもの。RTCA の定義に準拠。",
    "scope": "体外診断用医薬品（IVD）も規制対象。",
    "notes": "定義は RTCA（中米技術規則）に基づき、GHTF/IMDRF の定義に概ね準拠。"
  },
  "primaryLaw": {
    "title": "Ley para la creación de ARSA（ARSA 設立法）",
    "originalTitle": "Decreto Legislativo N° 6-2014 - Ley para la creación de la Agencia de Regulación Sanitaria",
    "enacted": "2014",
    "lastAmended": "随時改正",
    "url": "https://www.arsa.gob.hn/",
    "description": "ARSA を独立規制機関として設立する法律。医薬品・医療機器・食品等の衛生規制に関する権限を ARSA に付与。"
  },
  "implementingRegulations": [
    {
      "title": "RTCA 11.03.56:09（医療機器の登録に関する中米技術規則）",
      "date": "2009",
      "url": "https://www.arsa.gob.hn/",
      "description": "中米経済統合の枠組みで策定された医療機器の衛生登録に関する技術規則。中米各国で共通適用。",
      "category": "地域整合化"
    },
    {
      "title": "Reglamento de Dispositivos Médicos（医療機器規則）",
      "date": "各種",
      "url": "https://www.arsa.gob.hn/",
      "description": "ARSA が発行する医療機器の登録・分類・輸入管理に関する規則。",
      "category": "包括規制"
    }
  ],
  "relatedLaws": [
    {
      "title": "Código de Salud",
      "category": "保健法典",
      "enacted": "1991",
      "url": "https://www.salud.gob.hn/",
      "relevance": "ホンジュラスの保健制度の基本法。"
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
        "url": "https://www.arsa.gob.hn/"
      }
    ],
    "totalProductCodes": "要確認"
  },
  "conformityAssessment": {
    "overview": "ARSA が登録申請書類を審査。CFS、技術文書、GMP 証明、ラベリング等を評価。RTCA に基づく中米共通の審査要件が適用される。",
    "routes": [
      {
        "name": "Registro Sanitario de Dispositivos Médicos",
        "nameJa": "医療機器衛生登録",
        "applicableClasses": [
          "Class I / II / III / IV"
        ],
        "description": "ARSA に登録申請書類を提出。RTCA に基づく技術文書、CFS、GMP 適合証明、ラベリング等を審査。",
        "subtypes": [
          {
            "name": "中米統一登録（Registro Unificado Centroamericano）",
            "description": "RTCA に基づき、1カ国での登録を他の中米諸国で認証する統一登録制度（実施状況は要確認）。"
          }
        ],
        "avgReviewTime": "60〜180日（クラス・書類の完全性による）",
        "fee": "要確認",
        "url": "https://www.arsa.gob.hn/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "ARSA オンラインシステム",
    "url": "https://www.arsa.gob.hn/",
    "description": "ARSA はオンラインでの申請受付を一部開始。完全な電子申請システムの整備状況は要確認。",
    "mandatory": false
  },
  "udi": {
    "required": false,
    "system": "要確認",
    "description": "ホンジュラスでは現時点で独自の UDI 制度が法的に義務化されているとの確認情報はない。",
    "url": null,
    "timeline": "要確認"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "ARSA テクノビジランス制度",
      "mandatory": true,
      "url": "https://www.arsa.gob.hn/",
      "description": "登録保有者は医療機器に関連する有害事象を ARSA に報告する義務がある。テクノビジランス制度により市販後安全性を監視。"
    },
    "recalls": {
      "authority": "ARSA",
      "description": "ARSA がリコール・FSCA を管理。",
      "url": "https://www.arsa.gob.hn/"
    },
    "surveillance": "ARSA によるテクノビジランス（市販後監視）。中米地域での情報共有も進行中。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "ARSA",
    "name": "Certificado de Libre Venta",
    "description": "登録申請時に原産国の規制当局からの CFS 提出が必要。ARSA も登録済み機器について CFS を発行可能。",
    "processingTime": "要確認",
    "url": "https://www.arsa.gob.hn/"
  },
  "reimbursement": {
    "system": "IHSS（Instituto Hondureño de Seguridad Social）+ 公的医療機関 + 民間保険",
    "authority": "SESAL / IHSS",
    "description": "ホンジュラスの公的医療は SESAL 傘下の公立病院と IHSS（社会保険機関）が中心。医療機器の調達は公的入札プロセス（Honducompras）を通じて行われる。",
    "codingSystems": [
      "要確認"
    ],
    "url": "https://www.ihss.gob.hn/"
  },
  "marketingRules": {
    "authority": "ARSA",
    "description": "医療機器の広告・販促は ARSA の規制下にある。登録済み機器のみの販売・広告が原則。",
    "keyRules": [
      "登録済み機器のみ販売・広告可",
      "虚偽・誇大広告の禁止",
      "ラベリングはスペイン語で記載"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "ホンジュラスは MDSAP プログラムに参加していない。"
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
      "title": "ARSA の体制強化と中米整合化",
      "description": "ARSA は独立規制機関としての体制強化を継続。RTCA に基づく中米規制整合化の推進と、電子申請システムの整備に注力中。"
    }
  ],
  "lastUpdated": "2026-04-02",
  "verified": null
};
