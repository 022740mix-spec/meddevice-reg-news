// コロンビア (Colombia)
export default {
  "code": "COL",
  "country": "コロンビア",
  "countryEn": "Colombia",
  "region": "Latam",
  "flag": "🇨🇴",
  "legalSystemOverview": {
    "type": "中央集権制（Centralized system）",
    "description": "コロンビアの医療機器規制はINVIMA（Instituto Nacional de Vigilancia de Medicamentos y Alimentos）が一元的に管轄する。Decreto 4725 de 2005 が医療機器の登録・分類・市販後監視の基本枠組みを規定し、IVD は Decreto 3770 de 2004 で別途規律。EU MDR に整合した4クラス分類（Class I / IIa / IIb / III）を採用。Class I/IIa は「非管理品目（No Controlados）」として自動承認、Class IIb/III は「管理品目（Controlados）」として技術審査が必要。登録有効期間は10年。2022年以降、UDI-DI（Resolution 1405/2022）およびセマンティックレポートの義務化が段階的に進行。",
    "keyCharacteristics": [
      "INVIMA による一元的な中央規制体制",
      "EU MDR に整合したリスクベースの4クラス分類（Class I / IIa / IIb / III）",
      "非管理品目（Class I/IIa: 自動承認）と管理品目（Class IIb/III: 技術審査）の二経路",
      "コロンビア国内の法定代理人（Representante Legal）の任命が必須",
      "登録有効期間10年（更新は3ヶ月前から申請可）",
      "UDI-DI 義務化の段階的実施（Resolution 1405/2022）"
    ]
  },
  "authorities": [
    {
      "name": "INVIMA",
      "fullName": "Instituto Nacional de Vigilancia de Medicamentos y Alimentos",
      "localName": "Instituto Nacional de Vigilancia de Medicamentos y Alimentos",
      "role": "医療機器の登録（Registro Sanitario）・市販後監視・ビジランス・施設査察。主管当局。",
      "url": "https://www.invima.gov.co/",
      "isPrimary": true
    },
    {
      "name": "MinSalud",
      "fullName": "Ministerio de Salud y Protección Social",
      "localName": "Ministerio de Salud y Protección Social",
      "role": "保健政策の策定・法令制定・医療制度の監督",
      "url": "https://www.minsalud.gov.co/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "なし（INVIMA が直接審査）",
    "description": "コロンビアでは欧州型のNotified Body制度は存在しない。INVIMAが直接、登録申請の技術文書を審査しRegistro Sanitario（衛生登録）を交付する。Class I/IIa は書類完備で自動承認（Automático）。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "Decreto 4725 de 2005, Artículo 2 に定義。疾病の診断・治療・予防・監視・軽減等を目的とする機器・装置・器具・材料・ソフトウェア等で、主たる意図する作用が薬理学的・免疫学的・代謝的手段によらないもの。",
    "scope": "IVD（体外診断用医療機器）は Decreto 3770 de 2004 で別途規定。",
    "notes": "定義はEU MDRの定義に概ね整合。SaMDも対象に含まれる。"
  },
  "primaryLaw": {
    "title": "Decreto 4725 de 2005 — Régimen de Registros Sanitarios, Permiso de Comercialización y Vigilancia Sanitaria de los Dispositivos Médicos para Uso Humano",
    "originalTitle": "Decreto 4725 de 2005",
    "enacted": "2005",
    "lastAmended": "要確認（UDI関連規制等で補完的改正あり）",
    "url": "https://www.invima.gov.co/biblioteca/decreto-4725-2005-registros-sanitarios-dispositivos-medicos",
    "description": "コロンビアの医療機器規制の基本法令。登録制度（Registro Sanitario）・分類・市販後監視・査察の枠組みを規定。保健社会保護省（MinSalud）が発出。"
  },
  "implementingRegulations": [
    {
      "title": "Decreto 3770 de 2004 — Régimen de Registros Sanitarios y Vigilancia Sanitaria de los Reactivos de Diagnóstico In Vitro",
      "date": "2004",
      "url": "https://www.invima.gov.co/",
      "description": "IVD（体外診断用試薬）の登録・分類・市販後監視を規定する基本法令。",
      "category": "IVD規制"
    },
    {
      "title": "Resolution 1405 de 2022 — UDI-DI Requirements",
      "date": "2022",
      "url": "https://www.invima.gov.co/",
      "description": "UDI-DI（固有機器識別子 - 機器識別子）の義務化。セマンティックレポートの提出要件を規定。段階的実施。",
      "category": "UDI"
    },
    {
      "title": "Resolution 4816 de 2008 — Programa Nacional de Tecnovigilancia",
      "date": "2008",
      "url": "https://www.invima.gov.co/",
      "description": "テクノビジランス（医療機器安全性監視）の国家プログラムを規定。有害事象報告・四半期報告の義務化。",
      "category": "ビジランス"
    }
  ],
  "relatedLaws": [
    {
      "title": "Ley 1581 de 2012 — Ley de Protección de Datos Personales",
      "category": "データ保護",
      "enacted": "2012",
      "url": "https://www.sic.gov.co/",
      "relevance": "個人情報保護法。コネクテッドデバイス・SaMDが取り扱う個人医療情報に適用。"
    }
  ],
  "classification": {
    "system": "4クラス制（Class I / IIa / IIb / III）— EU MDR整合",
    "basis": "EU MDRの分類ルールに概ね整合したリスクベース分類。意図する用途・侵襲性・使用期間・エネルギー源等に基づく。Decreto 4725/2005 Capítulo IV に規定。",
    "classes": [
      {
        "name": "Class I",
        "nameJa": "クラスI",
        "riskLevel": "低",
        "description": "低リスクの非侵襲的機器。非管理品目（No Controlado）— 自動承認。",
        "examples": [
          "弾性包帯",
          "聴診器",
          "車椅子",
          "舌圧子",
          "ガーゼ"
        ],
        "approvalPath": "自動承認（Automático）"
      },
      {
        "name": "Class IIa",
        "nameJa": "クラスIIa",
        "riskLevel": "中低",
        "description": "中低リスク機器。非管理品目（No Controlado）— 自動承認。",
        "examples": [
          "超音波診断装置",
          "補聴器",
          "歯科用材料",
          "注射針",
          "血圧計"
        ],
        "approvalPath": "自動承認（Automático）"
      },
      {
        "name": "Class IIb",
        "nameJa": "クラスIIb",
        "riskLevel": "中高",
        "description": "中高リスク機器。管理品目（Controlado）— INVIMA技術審査が必要。",
        "examples": [
          "人工呼吸器",
          "輸液ポンプ",
          "透析装置",
          "X線装置",
          "コンタクトレンズ"
        ],
        "approvalPath": "技術審査（Controlado）"
      },
      {
        "name": "Class III",
        "nameJa": "クラスIII",
        "riskLevel": "高",
        "description": "最高リスク機器。管理品目（Controlado）— INVIMA技術審査＋臨床評価が必要。",
        "examples": [
          "人工心臓弁",
          "埋込み型除細動器",
          "薬剤溶出ステント",
          "人工関節",
          "人工内耳"
        ],
        "approvalPath": "技術審査＋臨床評価（Controlado）"
      }
    ],
    "rules": [
      "EU MDRの分類ルールに概ね整合",
      "Class I / IIa = 非管理品目（No Controlados）: 自動承認",
      "Class IIb / III = 管理品目（Controlados）: 技術審査",
      "IVDは Decreto 3770/2004 に基づき別途分類（Category I / II / III）"
    ],
    "totalProductCodes": "GMDN（Global Medical Device Nomenclature）を参照"
  },
  "conformityAssessment": {
    "overview": "全クラスの医療機器にINVIMAへのRegistro Sanitario（衛生登録）が必要。Class I/IIa は「非管理品目」として書類完備で自動承認（日数以内）。Class IIb/III は「管理品目」として技術審査が必要。登録有効期間は10年。更新は有効期限の3ヶ月前から申請可。海外製造業者はコロンビア国内の法定代理人（Representante Legal）の任命が必須。申請書類はスペイン語。CFS/CFG が必要（米国・EU・カナダ・日本・オーストラリアのいずれかから）。",
    "routes": [
      {
        "name": "Registro Sanitario — No Controlados (Automatic)",
        "nameJa": "衛生登録 — 非管理品目（自動承認）",
        "applicableClasses": [
          "Class I",
          "Class IIa"
        ],
        "description": "書類完備で自動承認。INVIMAによる技術審査なし。",
        "subtypes": [
          {
            "name": "新規登録",
            "description": "初回のRegistro Sanitario申請。"
          },
          {
            "name": "更新（10年ごと）",
            "description": "有効期限3ヶ月前から申請可。"
          },
          {
            "name": "変更申請（Modificación）",
            "description": "製品仕様・製造所等の変更時。"
          }
        ],
        "avgReviewTime": "数日〜2週間（書類完備の場合、即日〜自動承認）",
        "avgReviewTimeSource": "https://www.emergobyul.com/services/invima-medical-device-registration-and-approval-colombia",
        "fee": "COP 3,898,330（約 USD 936）/製品",
        "feeSource": "https://www.pureglobal.com/markets/colombia/invima-medical-device-regulations",
        "url": "https://www.invima.gov.co/productos-vigilados/dispositivos-medicos/dispositivos-medicos-equipos-biomedicos"
      },
      {
        "name": "Registro Sanitario — Controlados (Reviewed)",
        "nameJa": "衛生登録 — 管理品目（技術審査）",
        "applicableClasses": [
          "Class IIb",
          "Class III"
        ],
        "description": "INVIMAが技術文書・臨床エビデンス・ラベリングを審査。CFS/CFGおよびISO 13485認証が必要。",
        "subtypes": [
          {
            "name": "新規登録",
            "description": "初回のRegistro Sanitario申請。技術審査あり。"
          },
          {
            "name": "更新（10年ごと）",
            "description": "有効期限3ヶ月前から申請可。"
          },
          {
            "name": "変更申請（Modificación）",
            "description": "製品仕様・製造所等の変更時。"
          }
        ],
        "avgReviewTime": "3〜6ヶ月",
        "avgReviewTimeSource": "https://www.emergobyul.com/services/invima-medical-device-registration-and-approval-colombia",
        "fee": "COP 4,412,400（約 USD 1,059）/製品",
        "feeSource": "https://www.pureglobal.com/markets/colombia/invima-medical-device-regulations",
        "url": "https://www.invima.gov.co/productos-vigilados/dispositivos-medicos/dispositivos-medicos-equipos-biomedicos"
      }
    ]
  },
  "electronicSubmission": {
    "system": "INVIMA オンライン申請プラットフォーム",
    "url": "https://www.invima.gov.co/",
    "description": "登録申請はINVIMAのオンラインプラットフォーム経由で提出。UDI-DIセマンティックレポートもINVIMAプラットフォーム経由で提出。申請書類はスペイン語。",
    "mandatory": true
  },
  "udi": {
    "required": true,
    "system": "INVIMA UDI-DI システム（Resolution 1405/2022）",
    "description": "Resolution 1405 de 2022 に基づくUDI-DI義務化。登録保有者はINVIMA承認後にUDI-DIコードを認定機関（GS1等）から取得し、セマンティックレポートをINVIMAプラットフォーム経由で提出。基本属性・規制属性・商業属性を含む。",
    "url": "https://www.invima.gov.co/",
    "timeline": "Class IIb/III: 2024年2月施行済み。Class IIa: 2026年2月9日期限。Class I / IVD Category I: 2026年2月9日期限。"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "Programa Nacional de Tecnovigilancia",
      "mandatory": true,
      "url": "https://www.invima.gov.co/",
      "description": "Resolution 4816/2008 に基づく国家テクノビジランスプログラム。製造業者・輸入業者は有害事象の四半期報告を義務付けられる（有害事象が発生しなかった場合も報告が必要）。"
    },
    "recalls": {
      "authority": "INVIMA",
      "description": "INVIMAがリコール・FSCA（Field Safety Corrective Action）を監督。Decreto 4725/2005 Capítulo IX に規定。",
      "url": "https://www.invima.gov.co/"
    },
    "surveillance": "製造業者・輸入業者は四半期ごとにテクノビジランス要約報告書（Informe Periódico Resumido）をINVIMAに提出。有害事象の有無にかかわらず報告義務あり。重大有害事象は72時間以内に報告。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "参照市場の規制当局（INVIMA登録申請時に提出が必要）",
    "name": "Certificate of Free Sale (CFS) / Certificate to Foreign Government (CFG)",
    "description": "INVIMA登録申請時に、参照市場（米国FDA、EU、カナダ、日本、オーストラリア）の規制当局が発行するCFS/CFGの提出が求められる。母国の承認に代えて参照市場の認可証を提出可能。",
    "processingTime": "輸出国側の手続きによる",
    "url": "https://www.invima.gov.co/"
  },
  "reimbursement": {
    "system": "社会保険制度（SGSSS: Sistema General de Seguridad Social en Salud）",
    "authority": "MinSalud / ADRES（Administradora de los Recursos del SGSSS）",
    "description": "コロンビアのSGSSS（社会保障健康制度）は、拠出制（Contributivo）と補助制（Subsidiado）の二本立て。Plan de Beneficios en Salud（PBS: 健康給付計画）に収載された医療技術が保険償還対象。医療機器の個別償還は医薬品ほど体系化されておらず、施設調達・保険契約に依存する部分が大きい。",
    "codingSystems": [
      "CUPS（Clasificación Única de Procedimientos en Salud）— 医療行為分類",
      "要確認（医療機器個別の償還コード体系は未確認）"
    ],
    "url": "https://www.minsalud.gov.co/"
  },
  "marketingRules": {
    "authority": "INVIMA",
    "description": "INVIMA未登録機器の広告・販売は禁止。ラベリング・使用説明書はスペイン語が必須。",
    "keyRules": [
      "Registro Sanitario 未取得の医療機器の広告・販売は禁止",
      "ラベリング・使用説明書はスペイン語必須",
      "誇大・虚偽・誤解を招く広告の禁止",
      "医療機器の広告はINVIMAの監視対象"
    ]
  },
  "mdsap": {
    "status": "非参加（Not participating）— ただしISO 13485 / MDSAP認証を品質証拠として受容",
    "description": "コロンビアはMDSAPの正式参加国・オブザーバー・アフィリエイトメンバーのいずれにも該当しない（2026年4月時点）。ただしINVIMA登録時にISO 13485認証またはMDSAP認証をQMS適合の証拠として受容。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "登録申請時にISO 13485:2016認証の提出が求められる。MDSAP認証も代替として受容。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "リスクマネジメント。技術文書のリスク評価に適用。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "ソフトウェアライフサイクル。SaMD申請に適用。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "医用電気機器の安全・性能要求。"
    },
    "others": [
      {
        "name": "ISO 10993シリーズ（生物学的安全性評価）",
        "notes": "生体接触医療機器の生物学的安全性評価に適用。"
      },
      {
        "name": "IEC 62366（ユーザビリティエンジニアリング）",
        "notes": "医療機器のユーザビリティ評価に参照。"
      }
    ]
  },
  "recentDevelopments": [
    {
      "date": "2026-02",
      "title": "UDI-DI 義務化期限（Class IIa / Class I / IVD Category I）",
      "description": "Resolution 1405/2022に基づくUDI-DI義務化の最終期限。2026年2月9日までにClass IIa・Class I・IVD Category Iの既存登録にUDI-DIコードを組み込む必要あり。"
    },
    {
      "date": "2025-12",
      "title": "新医療機器規制法令（Régimen Sanitario de Dispositivos Médicos）策定中",
      "description": "MinSaludがDecrete 4725/2005を置換する新規制法令の策定を進行中。EU MDR/IVDRとの更なる整合が予想される。"
    },
    {
      "date": "2022",
      "title": "Resolution 1405/2022 — UDI-DI義務化",
      "description": "UDI-DI（固有機器識別子）の義務化およびセマンティックレポートの提出要件を規定。段階的実施を開始。"
    },
    {
      "date": "2005",
      "title": "Decreto 4725 de 2005 制定",
      "description": "コロンビアの医療機器規制の基本法令。登録制度・分類体系・市販後監視の枠組みを確立。"
    }
  ],
  "lastUpdated": "2026-04-02",
  "verified": null
};
