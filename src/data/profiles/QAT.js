// カタール (State of Qatar)
export default {
  "code": "QAT",
  "country": "カタール",
  "countryEn": "State of Qatar",
  "region": "Middle East & Africa",
  "flag": "🇶🇦",
  "legalSystemOverview": {
    "type": "絶対君主制（Absolute Monarchy）",
    "description": "カタールの医療機器規制は公衆衛生省（MOPH）のPharmacy and Drug Control Department（PDCD）が所管する。植込み型医療機器のみが正式登録の対象であり、非植込み型は輸入許可制度で管理される。GHTF創設国による事前認可が市場参入の前提条件。規制制度は発展途上。",
    "keyCharacteristics": [
      "MOPH / PDCD が規制当局",
      "植込み型医療機器のみ正式登録が必要",
      "非植込み型は輸入許可制度で管理",
      "GHTF創設国の事前認可が前提条件",
      "Local Authorized Representative（AR）の設置が必須",
      "規制制度は発展途上・GCC統一化を推進中"
    ]
  },
  "authorities": [
    {
      "name": "MOPH / PDCD",
      "fullName": "Ministry of Public Health — Pharmacy and Drug Control Department",
      "localName": "وزارة الصحة العامة — إدارة الصيدلة ومراقبة الأدوية",
      "role": "植込み型医療機器の登録審査、輸入許可の発行、市販後監視を統括",
      "url": "https://www.moph.gov.qa/",
      "isPrimary": true
    },
    {
      "name": "MEC",
      "fullName": "Ministry of Economy and Commerce",
      "localName": "وزارة الاقتصاد والتجارة",
      "role": "非植込み型医療機器の市場認可（輸入許可）に関与",
      "url": "https://www.mec.gov.qa/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "該当なし（MOPH直接審査 + 参照国認可依拠）",
    "description": "Notified Body制度は存在しない。GHTF創設国の事前認可に大きく依拠。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "GHTF/IMDRF定義に準拠。薬理学的・免疫学的・代謝的手段によらず主たる目的作用を発揮するもの。",
    "scope": "IVDを含む。植込み型は登録対象、非植込み型は輸入許可対象。",
    "notes": "SaMDに関する独自規定は2026年時点で未整備。"
  },
  "primaryLaw": {
    "title": "MOPH Regulations on Medical Device Registration and Import",
    "originalTitle": null,
    "enacted": "要確認（包括的法典なし）",
    "lastAmended": "要確認",
    "url": "https://www.moph.gov.qa/",
    "description": "包括的な単一法典ではなく、MOPHの省令・通達・手続規定等の組み合わせで構成。統一的な医療機器法は2026年時点で未確認。"
  },
  "implementingRegulations": [
    {
      "title": "MOPH/PDCD 医療機器登録手続きガイダンス",
      "date": null,
      "url": "https://www.moph.gov.qa/",
      "description": "植込み型医療機器の登録に必要な書類・手続きを規定。",
      "category": "登録手続き"
    },
    {
      "title": "GCC Technical Regulation for Medical Devices",
      "date": "2015",
      "url": "https://www.gso.org.sa/",
      "description": "GCC加盟国共通の医療機器技術規制。カタールは段階的に国内実施を推進中。",
      "category": "GCC規制"
    }
  ],
  "relatedLaws": [
    {
      "title": "データプライバシー保護法（Law No. 13 of 2016）",
      "category": "データ保護",
      "enacted": "2016",
      "url": "https://www.moj.gov.qa/",
      "relevance": "医療機器から取得される健康データの処理に適用される可能性がある。"
    }
  ],
  "classification": {
    "system": "参照国分類（FDA/EU MDR準拠）",
    "basis": "独自の分類体系は限定的。FDA分類またはEU MDR分類を受入。",
    "classes": [
      {
        "name": "Class I",
        "nameJa": "クラスI（低リスク）",
        "riskLevel": "低",
        "description": "低リスク。FDA Class IまたはEU Class I相当。",
        "examples": [
          "包帯",
          "聴診器",
          "松葉杖",
          "医療用手袋"
        ],
        "approvalPath": "輸入許可 — MOPH/PDCD（登録不要）"
      },
      {
        "name": "Class IIa / II",
        "nameJa": "クラスIIa / II（中リスク）",
        "riskLevel": "中",
        "description": "中程度のリスク。",
        "examples": [
          "超音波診断装置",
          "電動式車椅子",
          "シリンジポンプ",
          "コンタクトレンズ"
        ],
        "approvalPath": "輸入許可 — MOPH/PDCD"
      },
      {
        "name": "Class III (植込み型)",
        "nameJa": "クラスIII / 植込み型（高リスク）",
        "riskLevel": "高",
        "description": "高リスクの植込み型医療機器。正式登録が必要。",
        "examples": [
          "心臓ペースメーカー",
          "人工心臓弁",
          "冠動脈ステント",
          "人工関節",
          "乳房インプラント"
        ],
        "approvalPath": "正式登録 — MOPH/PDCD + 参照国認可必須"
      }
    ],
    "rules": [
      "GHTF創設国の分類を受入",
      "植込み型は必ず正式登録",
      "非植込み型は輸入許可制度で管理",
      "独自分類ルールはGCC統一化の中で検討中"
    ],
    "totalProductCodes": null
  },
  "conformityAssessment": {
    "overview": "植込み型のみがMOPH/PDCDへの正式登録を必要とする。非植込み型は輸入許可で管理。GHTF創設国の事前認可が前提条件。外国メーカーはLocal AR設置が必須。",
    "routes": [
      {
        "name": "Implantable Device Registration",
        "nameJa": "植込み型医療機器登録",
        "applicableClasses": [
          "Class III (植込み型)"
        ],
        "description": "MOPH/PDCDに登録書類一式を提出。PDCD審査・承認を経て登録証を取得。",
        "subtypes": [
          "新規登録",
          "変更登録"
        ],
        "avgReviewTime": "数週間〜数ヶ月（公式情報で裏付け未取得）",
        "avgReviewTimeSource": "https://omcmedical.com/blog/qatar-medical-device-registration-process",
        "fee": "要確認（MOPH規定による）",
        "feeSource": "https://www.moph.gov.qa/",
        "url": "https://www.moph.gov.qa/"
      },
      {
        "name": "Import Permit",
        "nameJa": "非植込み型機器 輸入許可（出荷単位）",
        "applicableClasses": [
          "Class I",
          "Class IIa / II"
        ],
        "description": "非植込み型の輸入にはMOPH/PDCDの輸入許可が出荷ごとに必要。参照国（FDA/EU/PMDA/Health Canada/TGA）の事前認可が前提条件。",
        "subtypes": [],
        "avgReviewTime": "数日〜数週間（公式情報で裏付け未取得）",
        "avgReviewTimeSource": "https://omcmedical.com/blog/qatar-medical-device-registration-process",
        "fee": "要確認（MOPH規定による）",
        "feeSource": "https://www.moph.gov.qa/",
        "url": "https://www.moph.gov.qa/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "MOPH 電子システム",
    "url": "https://www.moph.gov.qa/english/OurServices/advancedsearch/Pages/servicesdetails.aspx?serviceId=214",
    "description": "MOPH の電子システムを通じて申請書類を提出。DHP ポータル（dhp.moph.gov.qa）は医療従事者のライセンス管理用であり、医療機器登録とは別系統。完全電子化は段階的に推進中。",
    "mandatory": false
  },
  "udi": {
    "required": false,
    "system": "未導入",
    "description": "独自のUDI制度は2026年時点で未導入。GCC統一UDI制度の検討に参加中。",
    "url": null,
    "timeline": "未定。GCC統一UDI制度の導入を検討中"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "有害事象報告制度（MOPH/PDCD）",
      "mandatory": true,
      "url": "https://www.moph.gov.qa/",
      "description": "植込み型登録機器については有害事象報告義務がある。非植込み型の市販後監視は限定的。"
    },
    "recalls": {
      "authority": "MOPH / PDCD",
      "description": "MOPHの命令または自主リコール。参照国でのリコール情報を監視。",
      "url": "https://www.moph.gov.qa/"
    },
    "surveillance": "MOPH/PDCDによる市販後安全性監視。植込み型機器を中心に監視。制度は発展途上。"
  },
  "certificateOfFreeSale": {
    "available": false,
    "issuingAuthority": null,
    "name": null,
    "description": "CFS発行に関する公式制度の情報は未確認。登録時には製造国のCFS提出が求められる場合がある。",
    "processingTime": null,
    "url": null
  },
  "reimbursement": {
    "system": "政府主導型医療制度（公的医療 + 民間保険）",
    "authority": "MOPH / Hamad Medical Corporation（HMC）",
    "description": "カタール国民はHMC等の公的医療機関で低負担の医療を受けられる。医療機器調達は公共調達中心。個別の償還制度は未整備。",
    "codingSystems": [],
    "url": "https://www.moph.gov.qa/"
  },
  "marketingRules": {
    "authority": "MOPH",
    "description": "詳細な医療機器広告法規は未整備。虚偽広告は一般法により禁止。",
    "keyRules": [
      "虚偽・誇大広告の禁止",
      "未登録・未許可医療機器の広告禁止",
      "アラビア語・英語での表示義務"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "カタールはMDSAPに参加していない。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "植込み型機器の登録時に推奨/要求。参照国認可でISO 13485適合が前提。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "参照国認可の枠組みで間接的に要求。"
    },
    "iec62304": {
      "accepted": false,
      "notes": "独自の要求は未整備。参照国認可で確認されている場合に受入。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "参照国の試験結果を受入。"
    },
    "others": [
      {
        "name": "GCC Essential Principles of Safety and Performance",
        "notes": "GCC統一技術規制。段階的に国内実施を推進中。"
      }
    ]
  },
  "recentDevelopments": [
    {
      "date": "2025",
      "title": "GCC統一医療機器規制への段階的整合",
      "description": "GCC統一技術規制の国内実施を推進中。UDI制度導入、市販後監視強化等がロードマップに含まれる。"
    },
    {
      "date": "2022",
      "title": "強制健康保険制度の導入（旧SEHA制度の後継）",
      "description": "2022年5月施行。旧SEHA制度（2015年廃止）に代わる新制度。雇用主が非カタール国籍の被雇用者に健康保険を提供する義務を規定。MOPH登録保険会社との契約が必要。"
    }
  ],
  "lastUpdated": "2026-04-06",
  "verified": "2026-04-06"
};
