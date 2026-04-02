// エクアドル (Republic of Ecuador)
export default {
  "code": "ECU",
  "country": "エクアドル",
  "countryEn": "Republic of Ecuador",
  "region": "Latam",
  "flag": "🇪🇨",
  "legalSystemOverview": {
    "type": "中央集権制（Centralized system）",
    "description": "エクアドルの医療機器規制は ARCSA（Agencia Nacional de Regulación, Control y Vigilancia Sanitaria）が管轄する。Resolution ARCSA-DE-026-2016-YMIH が医療機器の衛生登録と管理に関する主要な技術衛生規範。GHTF/IMDRF の分類原則に準拠した Class I / IIa / IIb / III の4クラス分類を採用。認知国（米国・カナダ・豪州・日本・韓国・EU）で登録済みの Class I/II 機器には簡易経路あり。",
    "keyCharacteristics": [
      "ARCSA による一元的な規制体制",
      "GHTF ベースの4クラス分類（Class I / IIa / IIb / III）",
      "Resolution ARCSA-DE-026-2016-YMIH が主要な規制根拠",
      "認知国登録済み機器に対する簡易登録経路",
      "Registro Sanitario の有効期限10年",
      "UDI（IMDRF 準拠）のトレーサビリティ要件を導入"
    ]
  },
  "authorities": [
    {
      "name": "ARCSA",
      "fullName": "Agencia Nacional de Regulación, Control y Vigilancia Sanitaria",
      "localName": "Agencia Nacional de Regulación, Control y Vigilancia Sanitaria",
      "role": "医療機器の衛生登録・市販後監視・施設許可・輸入管理",
      "url": "https://www.controlsanitario.gob.ec/",
      "isPrimary": true
    },
    {
      "name": "MSP",
      "fullName": "Ministerio de Salud Pública del Ecuador",
      "localName": "Ministerio de Salud Pública",
      "role": "医療政策全般・上位監督",
      "url": "https://www.salud.gob.ec/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "なし（ARCSA が直接審査）",
    "description": "エクアドルには Notified Body 制度は存在しない。ARCSA が直接、衛生登録の申請書類を審査する。認知国の規制当局承認を参照。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "ARCSA の技術衛生規範に基づき、疾病の診断・治療・予防・監視・軽減等を目的とする器具・装置・機器・ソフトウェア・材料等で、主たる作用が薬理学的・免疫学的・代謝的手段によらないもの。GHTF/IMDRF 定義に準拠。",
    "scope": "体外診断用医薬品（IVD）も規制対象。",
    "notes": "Resolution ARCSA-DE-026-2016-YMIH（2018年に ARCSA-DE-030-2018-JCGO で改正）が詳細な定義・適用範囲を規定。"
  },
  "primaryLaw": {
    "title": "Ley Orgánica de Salud（組織的保健法）",
    "originalTitle": "Ley Orgánica de Salud",
    "enacted": "2006",
    "lastAmended": "随時改正",
    "url": "https://www.salud.gob.ec/",
    "description": "エクアドルにおける保健制度全般を規定する基本法。医療機器を含む保健製品の規制の上位法的根拠。"
  },
  "implementingRegulations": [
    {
      "title": "Resolution ARCSA-DE-026-2016-YMIH（医療機器の衛生登録に関する技術衛生規範）",
      "date": "2016",
      "url": "https://www.controlsanitario.gob.ec/documentos-vigentes/",
      "description": "医療機器の衛生登録・管理に関する主要な技術衛生規範。分類規則・登録手続き・必要書類・施設要件を包括的に規定。",
      "category": "包括規制"
    },
    {
      "title": "Resolution ARCSA-DE-030-2018-JCGO（2016年規範の改正）",
      "date": "2018",
      "url": "https://www.controlsanitario.gob.ec/documentos-vigentes/",
      "description": "2016年規範の改正。認知国（米国・カナダ・豪州・日本・韓国・EU）で登録済みの Class I/II 機器に対する簡易登録経路を導入。",
      "category": "改正"
    },
    {
      "title": "Resolution ARCSA-DE-2023-033-AKRG（2023年改正）",
      "date": "2023",
      "url": "https://www.controlsanitario.gob.ec/wp-content/uploads/downloads/2023/11/Resolucion_ARCSA-DE-2023-033-AKRG_reforma-a-la-Normativa-Tecnica-Sanitaria-para-el-registro-sanitario-de-Dispositivos-medicos-de-uso-humano-y-de-los-establecimientos-en-donde-se-fabrican.pdf",
      "description": "ヒト用医療機器の衛生登録および製造施設に関する技術衛生規範の改正。",
      "category": "改正"
    }
  ],
  "relatedLaws": [],
  "classification": {
    "system": "GHTF ベースの4クラス分類（Class I / IIa / IIb / III）",
    "basis": "リスクベース（GHTF/IMDRF 分類規則を参照）",
    "classes": [
      {
        "name": "Class I",
        "nameJa": "クラスI",
        "riskLevel": "低リスク",
        "description": "低リスク医療機器。一般的制御で安全性を確保。",
        "examples": [
          "弾性包帯",
          "手動外科器具",
          "聴診器"
        ],
        "approvalPath": "衛生登録（簡易経路あり: 認知国登録済み）"
      },
      {
        "name": "Class IIa",
        "nameJa": "クラスIIa",
        "riskLevel": "低〜中リスク",
        "description": "低中リスク医療機器。",
        "examples": [
          "超音波診断装置",
          "歯科用充填材",
          "血圧計"
        ],
        "approvalPath": "衛生登録（簡易経路あり: 認知国登録済み）"
      },
      {
        "name": "Class IIb",
        "nameJa": "クラスIIb",
        "riskLevel": "中〜高リスク",
        "description": "中高リスク医療機器。詳細な技術文書が必要。",
        "examples": [
          "人工呼吸器",
          "輸液ポンプ",
          "X線装置"
        ],
        "approvalPath": "衛生登録（標準経路）"
      },
      {
        "name": "Class III",
        "nameJa": "クラスIII",
        "riskLevel": "高リスク",
        "description": "最高リスク医療機器。最も厳格な審査。",
        "examples": [
          "人工心臓弁",
          "冠動脈ステント",
          "埋込み型デバイス"
        ],
        "approvalPath": "衛生登録（詳細審査 — 臨床データ要求あり）"
      }
    ],
    "rules": [
      {
        "id": "GHTF/IMDRF 分類規則",
        "description": "GHTF の分類原則に基づき、意図する用途・侵襲性・使用期間・エネルギー源等でクラスを決定。ARCSA の指示に従い分類。",
        "url": "https://www.controlsanitario.gob.ec/"
      }
    ],
    "totalProductCodes": "要確認（ARCSA 独自のコード体系は未公開）"
  },
  "conformityAssessment": {
    "overview": "ARCSA が申請書類を直接審査。CFS、CE 証明書/FDA 認可、技術文書、QMS 文書等を評価。認知国登録済みの Class I/II には簡易経路あり。",
    "routes": [
      {
        "name": "Inscripción de Registro Sanitario de Dispositivos Médicos",
        "nameJa": "医療機器衛生登録（新規登録）",
        "applicableClasses": [
          "全クラス"
        ],
        "description": "CFS、CE/FDA 認証文書、技術文書、製品ラベリング、QMS 文書を提出。品質・安全性・有効性の要件を満たすことで登録発行。有効期限10年。",
        "subtypes": [
          {
            "name": "簡易登録（認知国登録済み Class I/II）",
            "description": "米国・カナダ・豪州・日本・韓国・EU で登録済みの Class I / II 機器は簡易登録経路を利用可能。必要書類の一部が省略される。"
          }
        ],
        "avgReviewTime": "要確認（クラスにより異なる。数ヶ月〜）",
        "fee": "要確認（ARCSA 料金表を参照）",
        "url": "https://www.gob.ec/arcsa/tramites/inscripcion-registro-sanitario-dispositivos-medicos-fabricacion-nacional-extranjera"
      }
    ]
  },
  "electronicSubmission": {
    "system": "ARCSA オンラインポータル（gob.ec 経由）",
    "url": "https://www.gob.ec/arcsa/tramites/inscripcion-registro-sanitario-dispositivos-medicos-fabricacion-nacional-extranjera",
    "description": "ARCSA はオンラインでの申請受付を実施。gob.ec プラットフォーム経由で電子申請。",
    "mandatory": true
  },
  "udi": {
    "required": true,
    "system": "IMDRF 準拠の UDI トレーサビリティ要件",
    "description": "エクアドルは IMDRF のガイドラインに基づく UDI（GTIN コード・ロット番号・有効期限・DI + PI）をトレーサビリティコードとして採用。医療機器のトレーサビリティ管理に UDI を活用。",
    "url": "https://www.controlsanitario.gob.ec/",
    "timeline": "導入済み（段階的実施）"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "ARCSA テクノビジランス制度",
      "mandatory": true,
      "url": "https://www.controlsanitario.gob.ec/",
      "description": "ARCSA が市販後の安全性監視を実施。定期検査・ラボ分析による品質・安全性の検証。有害事象の報告義務あり。"
    },
    "recalls": {
      "authority": "ARCSA",
      "description": "ARCSA がリコール・FSCA を管理。登録保有者はリコール実施時に ARCSA に通知義務。",
      "url": "https://www.controlsanitario.gob.ec/"
    },
    "surveillance": "ARCSA による定期検査・ラボ分析を含む市販後監視。強化された市販後監視体制を構築中。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "ARCSA",
    "name": "Certificado de Libre Venta / Free Sale Certificate",
    "description": "登録申請時に原産国の規制当局からの CFS/CFG/Export Certificate の提出が必要。米国 FDA の Certificate of Free Sale も受容。",
    "processingTime": "要確認",
    "url": "https://www.controlsanitario.gob.ec/"
  },
  "reimbursement": {
    "system": "IESS（Instituto Ecuatoriano de Seguridad Social）+ MSP 公立病院 + 民間保険",
    "authority": "MSP / IESS",
    "description": "エクアドルの公的医療は MSP の公立病院と IESS（社会保険）が中心。医療機器の調達は公立病院の入札プロセスを通じて行われる。",
    "codingSystems": [
      "要確認"
    ],
    "url": "https://www.salud.gob.ec/"
  },
  "marketingRules": {
    "authority": "ARCSA",
    "description": "医療機器の広告・販促は ARCSA の規制下にある。衛生登録済み機器のみの販売・広告が原則。",
    "keyRules": [
      "Registro Sanitario 取得済み機器のみ販売・広告可",
      "虚偽・誇大広告の禁止",
      "ラベリングはスペイン語で記載"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "エクアドルは MDSAP プログラムに参加していない。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "ISO 13485 認証は QMS 証明として参照される。BPM（Buenas Prácticas de Manufactura）の要件にも関連。"
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
      "date": "2026-01",
      "title": "Resolution ARCSA-DE-2025-053-DASP — 医療用ガスの GMP",
      "description": "2026年1月に官報公布。医療用ガスの製造適正基準（GMP）を規定。"
    },
    {
      "date": "2025",
      "title": "Resolution ARCSA-DE-026-2016-YMIH の代替改正案策定中",
      "description": "ARCSA は医療機器の衛生登録・管理に関する技術衛生規範（2016年規範）の代替改正案（borrador）を策定中。条文の全面的な見直し・更新が予定されている。"
    },
    {
      "date": "2023",
      "title": "Resolution ARCSA-DE-2023-033-AKRG — 技術衛生規範の改正",
      "description": "ヒト用医療機器の衛生登録および製造施設に関する技術衛生規範の改正を公布。"
    }
  ],
  "lastUpdated": "2026-04-02",
  "verified": null
};
