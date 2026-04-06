// クウェート (State of Kuwait)
export default {
  "code": "KWT",
  "country": "クウェート",
  "countryEn": "State of Kuwait",
  "region": "Middle East & Africa",
  "flag": "🇰🇼",
  "legalSystemOverview": {
    "type": "立憲君主制（Constitutional Monarchy）",
    "description": "クウェートの医療機器規制は保健省（MOH）のMMPRRA（旧KDFA）が所管する。2025年の省令MD 387/2025により規制枠組みが更新された。GCC標準化機構（GSO）による地域統一規格との整合を推進中。FDA/CE認証等の参照国認可に依拠する部分が大きい。GHTF/IMDRF枠組みに基づく4クラス分類（A/B/C/D）を採用。",
    "keyCharacteristics": [
      "MOH / MMPRRA が医療機器規制を統括",
      "参照国認可（FDA、CE Mark、SFDA等）への依拠度が高い",
      "GCC地域統一規格との整合を推進",
      "4クラス分類（A / B / C / D）",
      "Local Authorized Representative（LAR）の設置が必須",
      "STED ベースの審査"
    ]
  },
  "authorities": [
    {
      "name": "MOH / MMPRRA",
      "fullName": "Ministry of Health — Medicine and Medical Products Registration and Regulatory Administration",
      "localName": "وزارة الصحة — إدارة تسجيل ورقابة الأدوية والمنتجات الطبية",
      "role": "医療機器の登録審査、輸入許可、市販後監視を統括",
      "url": "https://www.moh.gov.kw/",
      "isPrimary": true
    },
    {
      "name": "KDFA",
      "fullName": "Kuwait Drug and Food Control Administration",
      "localName": "إدارة مراقبة الأغذية والأدوية",
      "role": "食品・医薬品の品質管理。MD 387/2025 により医療機器の登録・規制はMMPRRAに移管。",
      "url": "https://www.moh.gov.kw/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "該当なし（MOH直接審査 + 参照国認可依拠）",
    "description": "欧州型のNotified Body制度は存在しない。MOH/MMPRRAが直接審査を行うが、FDA承認、CEマーキング、SFDA登録等の参照国認可に大きく依拠する。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "疾病の診断、予防、監視、治療、緩和の目的で使用される器具・装置・機械・ソフトウェア・材料等であって、薬理学的・免疫学的・代謝的手段によらず主たる目的作用を発揮するもの（GCC/IMDRF定義に準拠）。",
    "scope": "IVDを含む。GCC統一規格に基づく定義。",
    "notes": "SaMDに関する独自規定は2026年時点で策定中。"
  },
  "primaryLaw": {
    "title": "Ministerial Decree MD 387/2025",
    "originalTitle": "Ministerial Decree MD 387/2025",
    "enacted": "2025",
    "lastAmended": "2025",
    "url": "https://www.moh.gov.kw/",
    "description": "医療機器の登録・輸入・流通・市販後監視に関する包括的省令。従来の省令No.381等を更新・統合。"
  },
  "implementingRegulations": [
    {
      "title": "GCC Technical Regulation for Medical Devices",
      "date": "2015",
      "url": "https://www.gso.org.sa/",
      "description": "GCC加盟国共通の医療機器技術規制。Essential Principles、分類規則、ラベリング要件等を規定。",
      "category": "GCC規制"
    },
    {
      "title": "省令 No.381（有害事象報告修正）",
      "date": "2023",
      "url": "https://www.moh.gov.kw/",
      "description": "有害事象報告に関する修正省令。15日以内の報告義務等を規定。",
      "category": "ビジランス"
    }
  ],
  "relatedLaws": [
    {
      "title": "医薬品法（Pharmaceutical Law）",
      "category": "医薬品規制",
      "enacted": "1983",
      "url": "https://www.moh.gov.kw/",
      "relevance": "MOHの包括的な監督権限の法的根拠。"
    }
  ],
  "classification": {
    "system": "リスクベース4クラス分類（GCC/GHTF整合）",
    "basis": "GHTF/IMDRF分類ルールに基づくリスクベース分類。GCC統一技術規制に準拠。",
    "classes": [
      {
        "name": "Class A",
        "nameJa": "クラスA（低リスク）",
        "riskLevel": "低",
        "description": "個人及び公衆衛生への潜在的リスクが最小限。",
        "examples": [
          "ガーゼ",
          "聴診器",
          "手術用手袋",
          "車椅子"
        ],
        "approvalPath": "登録（簡易審査）— MOH/MMPRRA"
      },
      {
        "name": "Class B",
        "nameJa": "クラスB（中低リスク）",
        "riskLevel": "中低",
        "description": "低〜中程度のリスク。",
        "examples": [
          "超音波診断装置",
          "注射針",
          "歯科用充填材",
          "電動式車椅子"
        ],
        "approvalPath": "登録（STED審査）— MOH/MMPRRA"
      },
      {
        "name": "Class C",
        "nameJa": "クラスC（中高リスク）",
        "riskLevel": "中高",
        "description": "中〜高程度のリスク。",
        "examples": [
          "人工呼吸器",
          "透析器",
          "骨接合プレート",
          "血管カテーテル"
        ],
        "approvalPath": "登録（STED + 臨床データ審査）— MOH/MMPRRA"
      },
      {
        "name": "Class D",
        "nameJa": "クラスD（高リスク）",
        "riskLevel": "高",
        "description": "高いリスク。最も厳格な審査。",
        "examples": [
          "心臓ペースメーカー",
          "人工心臓弁",
          "冠動脈ステント",
          "人工関節"
        ],
        "approvalPath": "登録（STED + 臨床データ + 参照国認可審査）— MOH/MMPRRA"
      }
    ],
    "rules": [
      "GHTF/IMDRF分類ルールに基づく",
      "参照国（FDA/EU/SFDA等）での分類を参考",
      "IVDも同じA/B/C/D分類"
    ],
    "totalProductCodes": null
  },
  "conformityAssessment": {
    "overview": "全医療機器はMOH/MMPRRAへの登録が必要（MD 387/2025）。IMDRF準拠のSTEDに基づく審査。3つの審査経路（Standard / Fast-Track / Abridged）を提供。外国メーカーはLARの設置が必須。登録証の有効期間は5年間。",
    "routes": [
      {
        "name": "Standard Review Pathway",
        "nameJa": "標準審査経路",
        "applicableClasses": [
          "Class A",
          "Class B",
          "Class C",
          "Class D"
        ],
        "description": "全デバイスクラスに対する完全な技術審査。IMDRF準拠のSTED一式、参照国認可証明、ISO 13485証明書等を提出。",
        "subtypes": [
          "新規登録",
          "変更登録",
          "更新"
        ],
        "avgReviewTime": "6〜9ヶ月",
        "avgReviewTimeSource": "https://omcmedical.com/blog/kuwait-medical-device-ivd-registration-faq",
        "fee": "要確認（MOH規定による）",
        "feeSource": "https://www.moh.gov.kw/",
        "url": "https://www.moh.gov.kw/"
      },
      {
        "name": "Abridged Review Pathway",
        "nameJa": "簡略審査経路（リライアンス経路）",
        "applicableClasses": [
          "Class A",
          "Class B",
          "Class C",
          "Class D"
        ],
        "description": "参照当局（FDA、EU Notified Body等）の既存承認を活用した簡略審査。冗長な試験を省略し審査を迅速化。",
        "subtypes": [],
        "avgReviewTime": "3〜6ヶ月",
        "avgReviewTimeSource": "https://omcmedical.com/blog/kuwait-medical-device-ivd-registration-faq",
        "fee": "要確認（MOH規定による）",
        "feeSource": "https://www.moh.gov.kw/",
        "url": "https://www.moh.gov.kw/"
      },
      {
        "name": "Fast-Track Review Pathway",
        "nameJa": "迅速審査経路",
        "applicableClasses": [
          "Class A",
          "Class B",
          "Class C",
          "Class D"
        ],
        "description": "重篤・ICU・救命目的の製品、またはCMS（Central Medical Stores）の要請に基づく加速審査。供給契約書またはCMS要請書が必要。",
        "subtypes": [],
        "avgReviewTime": "要確認（案件により異なる）",
        "avgReviewTimeSource": "https://omcmedical.com/blog/kuwait-medical-device-ivd-registration-faq",
        "fee": "要確認（MOH規定による）",
        "feeSource": "https://www.moh.gov.kw/",
        "url": "https://www.moh.gov.kw/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "MOH電子サービスポータル",
    "url": "https://eservices.moh.gov.kw/",
    "description": "MOHの電子サービスポータルを通じて一部のオンライン提出が可能。完全電子化は段階的に推進中。",
    "mandatory": false
  },
  "udi": {
    "required": false,
    "system": "GCC UDI制度（策定中）",
    "description": "クウェート独自のUDI制度は2026年時点で未導入。GCC全体でのUDI制度導入が検討中。",
    "url": null,
    "timeline": "未定。GCC全体でのUDI制度導入を検討中"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "有害事象報告制度（MOH）",
      "mandatory": true,
      "url": "https://eservices.moh.gov.kw/SPCMS/DrugReaction.aspx",
      "description": "省令No.381に基づき15日以内にMOH薬事監視チームに報告する義務。自主報告制度も併設。"
    },
    "recalls": {
      "authority": "MOH / MMPRRA",
      "description": "MOHの命令または自主リコール。GCC加盟国間の安全性情報共有体制あり。",
      "url": "https://www.moh.gov.kw/"
    },
    "surveillance": "MOH/MMPRRAによる市販後データ収集・分析。GCC全体での市販後監視強化が計画中。"
  },
  "certificateOfFreeSale": {
    "available": false,
    "issuingAuthority": null,
    "name": null,
    "description": "クウェートからのCFS発行に関する公式制度の情報は未確認。輸入時には製造国のCFS提出が求められる場合がある。",
    "processingTime": null,
    "url": null
  },
  "reimbursement": {
    "system": "政府主導型医療制度（MOH直轄病院 + 民間保険）",
    "authority": "保健省（MOH）",
    "description": "国民に対し政府病院での無料医療を提供。医療機器の調達はMOH直轄病院の公共調達。個別の医療機器償還制度は未整備。",
    "codingSystems": [],
    "url": "https://www.moh.gov.kw/"
  },
  "marketingRules": {
    "authority": "MOH",
    "description": "詳細な医療機器広告法規は未整備。虚偽広告は一般消費者保護法等により規制。",
    "keyRules": [
      "虚偽・誇大広告の禁止",
      "未登録医療機器の広告禁止",
      "MOH承認表示内容の遵守"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "クウェートはMDSAPに参加していない。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "ISO 13485認証は登録時に提出を求められるQMS証明の主要形式。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "リスクマネジメントの実施がSTED提出時に要求される。"
    },
    "iec62304": {
      "accepted": false,
      "notes": "独自の要求は限定的。参照国認可で間接的に要求される場合あり。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "安全性試験結果がSTED提出時に参照される。"
    },
    "others": [
      {
        "name": "GCC Essential Principles of Safety and Performance",
        "notes": "GCC統一技術規制の基本要件。GHTF/IMDRF準拠。"
      }
    ]
  },
  "recentDevelopments": [
    {
      "date": "2025",
      "title": "省令MD 387/2025の発効",
      "description": "MMPRRA体制の下で規制枠組みを刷新。"
    },
    {
      "date": "2025",
      "title": "UDI制度導入の検討",
      "description": "GCC全体でのUDI制度導入が検討開始。"
    },
    {
      "date": "2023",
      "title": "有害事象報告制度の改訂",
      "description": "15日以内の報告義務が明確化。"
    }
  ],
  "lastUpdated": "2026-04-06",
  "verified": "2026-04-06"
};
