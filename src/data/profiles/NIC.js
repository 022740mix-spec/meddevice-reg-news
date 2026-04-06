// ニカラグア (Nicaragua)
export default {
  "code": "NIC",
  "country": "ニカラグア",
  "countryEn": "Nicaragua",
  "region": "Latam",
  "flag": "🇳🇮",
  "legalSystemOverview": {
    "type": "政府審査型（衛生登録制度）",
    "description": "ニカラグアではANRS（国家衛生規制庁、2021年設立）が医療機器の衛生登録（Registro Sanitario）を管轄。Ley 292（医薬品・薬局法）が基本法。2025年1月にNTON 24001:2023（医療機器登録の強制技術基準）が施行。4クラスのリスクベース分類。Karplusプラットフォームで電子申請。登録有効期間5年。",
    "keyCharacteristics": [
      "ANRS（2021年設立、MINSA附属）がNCA",
      "Ley 292（1998年）+ NTON 24001:2023（2025年1月施行）",
      "4クラス制（Class I〜IV、リスクベース）",
      "Karplusプラットフォームで電子申請",
      "衛生登録（Registro Sanitario）有効期間5年",
      "AUS/CAN/USA/EU/JPN承認品はClass III/IV臨床試験免除",
      "スペイン語ラベリング・書類必須",
      "CLV（自由販売証明）が登録要件"
    ]
  },
  "authorities": [
    {
      "name": "ANRS",
      "fullName": "National Authority for Sanitary Regulation",
      "localName": "Autoridad Nacional de Regulación Sanitaria",
      "role": "NCA: 医療機器の衛生登録・分類決定・品質監督・ファーマコビジランス。MINSA附属の独立法人（Ley 1068で設立）。",
      "url": "https://www.minsa.gob.ni/entidades/regulaci%C3%B3n-sanitaria",
      "isPrimary": true
    },
    {
      "name": "MINSA",
      "fullName": "Ministry of Health",
      "localName": "Ministerio de Salud",
      "role": "保健分野の最上位監督省庁。ANRS所管。",
      "url": "https://www.minsa.gob.ni/",
      "isPrimary": false
    },
    {
      "name": "INSS",
      "fullName": "Nicaraguan Social Security Institute",
      "localName": "Instituto Nicaragüense de Seguridad Social",
      "role": "社会保険制度運営。",
      "url": "https://www.inss.gob.ni/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "政府直接審査（NB制度なし）",
    "description": "ANRSが直接審査・登録を行う。EU型のNotified Body制度は存在しない。製造者のISO 13485認証は国際認証機関の証明書を受入。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "Ley 292（医薬品・薬局法）およびNTON 24001:2023に基づく。医薬品、医薬化粧品、医療機器の製造・流通・輸出入・保管・販売・処方を規制。",
    "scope": "IVDを含む。歯科材料・診断機器・手術器具・インプラント等。",
    "notes": "ANRSが独自にリスクレベルに基づき分類を決定（他国の分類に依存しない）。"
  },
  "primaryLaw": {
    "title": "Ley No. 292, Ley de Medicamentos y Farmacias",
    "originalTitle": "Ley de Medicamentos y Farmacias",
    "enacted": "1998",
    "lastAmended": "要確認",
    "url": "http://legislacion.asamblea.gob.ni/Normaweb.nsf/($All)/10B9BC0F73CCA7FD062570A10057793D?OpenDocument=",
    "description": "1998年4月16日承認。医薬品・医療機器の製造・流通・輸出入・保管・販売を規制する基本法。施行規則: Decreto No. 6-99 (1999年)。"
  },
  "implementingRegulations": [
    {
      "title": "NTON 24001:2023 — Tecnología de la salud. Dispositivos Médicos. Requisitos para el Registro Sanitario",
      "date": "2025-01",
      "url": "https://www.minsa.gob.ni/publicaciones/autoridad-nacional-de-regulacion-sanitaria/nton-240012023-tecnologia-de-la-salud",
      "description": "2025年1月施行の強制技術基準。医療機器の衛生登録要件・手続・分類を規定。旧Normativa 064に代わる現行の主要基準。",
      "category": "登録基準"
    },
    {
      "title": "Ley No. 1068, Ley Creadora de la ANRS",
      "date": "2021-03",
      "url": "http://legislacion.asamblea.gob.ni/normaweb.nsf/9e314815a08d4a6206257265005d21f9/3d4084b456b4529e062586a2006e1f0f",
      "description": "2021年3月設立法。ANRSをMINSA附属の独立法人として設立。旧MINSA衛生規制総局の法的後継。",
      "category": "組織法"
    },
    {
      "title": "Ley No. 423, Ley General de Salud（一般保健法）",
      "date": "2002-03",
      "url": "http://legislacion.asamblea.gob.ni/Normaweb.nsf/(All)/FF82EA58EC7C712E062570A1005810E1?OpenDocument=",
      "description": "一般保健法。医療機器を含む保健分野全体の法的枠組み。",
      "category": "上位法"
    }
  ],
  "relatedLaws": [
    {
      "title": "Normativa 063 — Norma de Farmacovigilancia",
      "category": "ファーマコビジランス",
      "enacted": "要確認",
      "url": "https://www.minsa.gob.ni/index.php/publicaciones/direccion-general-de-regulacion-sanitaria/normativa-063-norma-de-farmacovigilancia",
      "relevance": "医薬品・医療機器の副作用報告を規定。2025年にResolución 0009-2025で更新。"
    },
    {
      "title": "Normativa 044 — 医薬品広告・販促規制",
      "category": "広告規制",
      "enacted": "要確認",
      "url": "https://www.minsa.gob.ni/sites/default/files/2023-02/Normativa%20-%20044%20'Normas%20de%20Procedimiento%20para%20Regular%20Material%20Promocional%20y%20Publicitariode%20Producto%20Farmac%C3%A9utico'.pdf",
      "relevance": "医薬品の広告・販促資料規制。医師・薬剤師・一般向け広告はMINSA薬局部門の事前承認必要。"
    }
  ],
  "classification": {
    "system": "4クラス制（リスクベース）",
    "basis": "NTON 24001:2023 Annex Dに基づくリスクベース分類。ANRSが独自に分類決定。",
    "classes": [
      {
        "name": "Class I",
        "nameJa": "クラスI",
        "riskLevel": "低",
        "description": "低リスク。",
        "examples": ["弾性包帯", "聴診器", "車椅子", "舌圧子", "非滅菌手袋"],
        "approvalPath": "衛生登録（Registro Sanitario）"
      },
      {
        "name": "Class II",
        "nameJa": "クラスII",
        "riskLevel": "中低",
        "description": "中リスク。適応に応じて臨床情報が求められる場合あり。",
        "examples": ["補聴器", "血圧計", "手術用手袋", "注射器", "カテーテル"],
        "approvalPath": "衛生登録（Registro Sanitario）"
      },
      {
        "name": "Class III",
        "nameJa": "クラスIII",
        "riskLevel": "中高",
        "description": "高リスク。臨床試験データが必要。AUS/CAN/USA/EU/JPN承認品は臨床試験免除。",
        "examples": ["人工呼吸器", "輸液ポンプ", "整形外科インプラント", "歯科インプラント", "血液透析装置"],
        "approvalPath": "衛生登録 + 臨床データ（一部免除あり）"
      },
      {
        "name": "Class IV",
        "nameJa": "クラスIV",
        "riskLevel": "高",
        "description": "最高リスク。臨床試験データが必要。AUS/CAN/USA/EU/JPN承認品は臨床試験免除。",
        "examples": ["人工心臓弁", "冠動脈ステント", "植込み型除細動器", "人工股関節", "吸収性縫合糸"],
        "approvalPath": "衛生登録 + 臨床データ（一部免除あり）"
      }
    ],
    "rules": [
      "NTON 24001:2023 Annex Dに基づくリスクベース分類",
      "ANRSが独自に分類決定（他国の分類に依存しない）"
    ],
    "totalProductCodes": null
  },
  "conformityAssessment": {
    "overview": "衛生登録（Registro Sanitario）制度。ANRSがKarplusプラットフォームで申請受付・審査。登録有効期間5年。AUS/CAN/USA/EU/JPN承認品はClass III/IVの臨床試験免除。",
    "routes": [
      {
        "name": "Registro Sanitario",
        "nameJa": "衛生登録",
        "applicableClasses": ["Class I", "Class II", "Class III", "Class IV"],
        "description": "Karplusで電子申請。CLV（自由販売証明）・ISO 13485証明書・CE証明書（該当時）・製品モノグラフ・技術データシート（スペイン語）等を提出。Class III/IVは臨床試験データ必要（AUS/CAN/USA/EU/JPN承認品は免除）。",
        "subtypes": [],
        "avgReviewTime": "要確認（公式情報で裏付け未取得）",
        "avgReviewTimeSource": "https://www.minsa.gob.ni/publicaciones/autoridad-nacional-de-regulacion-sanitaria/nton-240012023-tecnologia-de-la-salud",
        "fee": "要確認（公式情報で裏付け未取得）",
        "feeSource": "https://www.minsa.gob.ni/entidades/regulaci%C3%B3n-sanitaria",
        "url": "https://www.minsa.gob.ni/aplicaciones-y-servicios/tramites-dispositivos-medicos"
      }
    ]
  },
  "electronicSubmission": {
    "system": "Karplus",
    "url": "https://www.minsa.gob.ni/aplicaciones-y-servicios/tramites-dispositivos-medicos",
    "description": "2024年6月にResolución Administrativa 0008-2024で導入。衛生登録・輸入許可・分析依頼を1画面で申請可能。段階的に機能拡大中。",
    "mandatory": true
  },
  "udi": {
    "required": false,
    "system": "未導入",
    "description": "UDI制度は未導入。関連法令・規則は確認できず。",
    "url": null,
    "timeline": "未定"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "ファーマコビジランス / テクノビジランス — ANRS",
      "mandatory": true,
      "url": "https://www.minsa.gob.ni/index.php/publicaciones/direccion-general-de-regulacion-sanitaria/normativa-063-norma-de-farmacovigilancia",
      "description": "Normativa 063に基づく。医療機器の有害事象・副作用の通知義務。2025年にResolución 0009-2025で更新。テクノビジランス（医療機器監視）はNormativa 064でも言及。国際安全性警告があるデバイスは登録取消事由。"
    },
    "recalls": {
      "authority": "ANRS",
      "description": "国際安全性警告に基づくリコール・登録取消。ANRSが監督。",
      "url": "https://www.minsa.gob.ni/entidades/regulaci%C3%B3n-sanitaria"
    },
    "surveillance": "Normativa 063/064に基づく市販後監視。ANRSが実施。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "ANRS / MINSA",
    "name": "Certificado de Libre Venta (CLV)",
    "description": "登録要件として製造国のCLV提出が必須。有効期限記載なし: 発行日から2年有効。有効期限記載あり: 3年有効。原本または認証コピー、スペイン語翻訳、アポスティーユまたは領事公証必要。ニカラグアからのCLV発行はANRSが行うと推定。",
    "processingTime": "要確認（公式情報で裏付け未取得）",
    "url": "https://www.minsa.gob.ni/entidades/regulaci%C3%B3n-sanitaria"
  },
  "reimbursement": {
    "system": "公的医療 + 社会保険（INSS）",
    "authority": "MINSA / INSS",
    "description": "公的医療はMINSA管轄の公立病院。社会保険はINSS。医療機器の調達は主に公立病院の公共調達。医療機器に特化した償還リスト制度の公式情報は未確認。",
    "codingSystems": [],
    "url": "https://www.inss.gob.ni/"
  },
  "marketingRules": {
    "authority": "ANRS",
    "description": "スペイン語ラベリング・使用説明書必須。全提出書類はスペイン語またはスペイン語翻訳付き。広告はNormativa 044に基づきMINSA薬局部門の事前承認必要。",
    "keyRules": [
      "スペイン語ラベリング・IFU必須",
      "全書類: スペイン語またはスペイン語翻訳付き",
      "CLV: スペイン語翻訳 + アポスティーユ/領事公証",
      "広告: MINSA薬局部門の事前承認必要"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "MDSAP非参加。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "登録要件としてISO 13485証明書を要求。国際認証機関の証明書を受入。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "ISO 13485の枠組み内で間接的に参照。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "個別要件の明示的言及は未確認。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "個別要件の明示的言及は未確認。"
    },
    "others": [
      "CE証明書を登録書類として受入",
      "FDA/AUS/CAN/JPN承認品はClass III/IV臨床試験免除"
    ]
  },
  "recentDevelopments": [
    {
      "date": "2025-01",
      "title": "NTON 24001:2023 施行",
      "description": "医療機器の衛生登録要件を定める強制技術基準が発効。旧Normativa 064に代わる現行の主要基準。4クラス分類・CLV要件・臨床データ要件等を規定。"
    },
    {
      "date": "2024-06",
      "title": "Karplus電子申請プラットフォーム導入",
      "description": "Resolución Administrativa 0008-2024により医療機器衛生登録のオンライン手続を開始。衛生登録・輸入許可・分析依頼を統合。"
    },
    {
      "date": "2025-03",
      "title": "Normativa 063（ファーマコビジランス）更新",
      "description": "Resolución Administrativa 0009-2025でファーマコビジランス規範を更新。医療機器のテクノビジランスにも影響。"
    },
    {
      "date": "2024",
      "title": "オーファン製品の特別許可制度",
      "description": "Resolución Administrativa 0020-2024。衛生登録なしのオーファン製品の商業化・使用を許可する制度を導入。"
    }
  ],
  "lastUpdated": "2026-04-03",
  "verified": null
};
