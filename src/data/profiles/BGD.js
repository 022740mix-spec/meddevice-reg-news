// バングラデシュ (People's Republic of Bangladesh)
export default {
  "code": "BGD",
  "country": "バングラデシュ",
  "countryEn": "People's Republic of Bangladesh",
  "region": "ASPAC",
  "flag": "🇧🇩",
  "legalSystemOverview": {
    "type": "議会制共和制（Parliamentary Republic）",
    "description": "バングラデシュの医療機器規制は医薬品管理局（DGDA: Directorate General of Drug Administration）が所管する。従来は Drugs Act 1940 および Drugs (Control) Ordinance 1982 の下で医薬品と同様に規制されてきたが、医療機器固有の規制枠組みは発展途上段階にある。2023年の Medical Devices Act 2023 により、医療機器の定義・分類・登録・市販後監視を包括的にカバーする法的基盤が整備されつつある。WHOおよびIMDRF枠組みとの整合を目指している。",
    "keyCharacteristics": [
      "DGDA が医療機器規制を統括",
      "Medical Devices Act 2023 により包括的枠組みを整備中",
      "リスクベース4クラス分類（A / B / C / D）を導入予定",
      "輸入品は DGDA への登録・輸入許可が必要",
      "規制制度は発展途上、実施規則の整備が進行中",
      "WHO / IMDRF 枠組みとの整合を推進"
    ]
  },
  "authorities": [
    {
      "name": "DGDA",
      "fullName": "Directorate General of Drug Administration",
      "localName": "ওষুধ প্রশাসন অধিদপ্তর",
      "role": "医療機器の登録・輸入許可・市販後監視・品質管理を統括",
      "url": "https://www.dgda.gov.bd/",
      "isPrimary": true
    },
    {
      "name": "MOH&FW",
      "fullName": "Ministry of Health and Family Welfare",
      "localName": "স্বাস্থ্য ও পরিবার কল্যাণ মন্ত্রণালয়",
      "role": "医療政策全般、法令の策定・監督",
      "url": "https://mohfw.gov.bd/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "該当なし（DGDA 直接審査）",
    "description": "欧州型の Notified Body 制度は存在しない。DGDA が直接登録審査を行う。参照国認可（CE、FDA等）の保有が審査で有利に働く。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "Medical Devices Act 2023 に基づく定義（IMDRF定義に準拠）。疾病の診断・治療・予防・監視等を目的とする器具・装置・機器・ソフトウェア等で、薬理学的・免疫学的・代謝的手段によらないもの。",
    "scope": "IVDを含む。SaMDに関する詳細規定は要確認。",
    "notes": "従来は Drugs Act 1940 の「drug」定義に一部の機器が含まれていた。Medical Devices Act 2023 で独立した定義を導入。"
  },
  "primaryLaw": {
    "title": "Medical Devices Act 2023（医療機器法）",
    "originalTitle": "মেডিকেল ডিভাইস আইন ২০২৩",
    "enacted": "2023",
    "lastAmended": "2023",
    "url": "https://www.dgda.gov.bd/",
    "description": "バングラデシュ初の医療機器専用法。医療機器の定義、分類、登録制度、市販後監視、罰則等を規定。実施規則の策定が進行中。"
  },
  "implementingRegulations": [
    {
      "title": "Medical Devices Rules（策定中）",
      "date": "要確認",
      "url": "https://www.dgda.gov.bd/",
      "description": "Medical Devices Act 2023 の実施規則。分類基準、登録手続きの詳細、技術文書要件等を規定予定。策定中。",
      "category": "登録手続き"
    },
    {
      "title": "Drugs (Control) Ordinance 1982",
      "date": "1982",
      "url": "https://www.dgda.gov.bd/",
      "description": "従来の医薬品・医療機器規制の法的根拠。医療機器専用法の完全施行まで部分的に適用。",
      "category": "従来規制"
    }
  ],
  "relatedLaws": [
    {
      "title": "Drugs Act 1940",
      "category": "医薬品規制",
      "enacted": "1940",
      "url": "https://www.dgda.gov.bd/",
      "relevance": "医薬品規制の基本法。医療機器の一部が「drug」として規制されてきた歴史的経緯。"
    }
  ],
  "classification": {
    "system": "リスクベース4クラス分類（IMDRF整合・導入中）",
    "basis": "Medical Devices Act 2023 に基づくIMDRF準拠の分類。実施規則で詳細を規定予定。",
    "classes": [
      {
        "name": "Class A",
        "nameJa": "クラスA（低リスク）",
        "riskLevel": "低",
        "description": "低リスク医療機器。",
        "examples": [
          "ガーゼ",
          "聴診器",
          "手術用手袋",
          "松葉杖"
        ],
        "approvalPath": "登録（簡易審査）— DGDA"
      },
      {
        "name": "Class B",
        "nameJa": "クラスB（中低リスク）",
        "riskLevel": "中低",
        "description": "中低リスク医療機器。",
        "examples": [
          "超音波診断装置",
          "注射針",
          "歯科用材料"
        ],
        "approvalPath": "登録 — DGDA"
      },
      {
        "name": "Class C",
        "nameJa": "クラスC（中高リスク）",
        "riskLevel": "中高",
        "description": "中高リスク医療機器。",
        "examples": [
          "人工呼吸器",
          "透析器",
          "骨接合プレート"
        ],
        "approvalPath": "登録（技術審査）— DGDA"
      },
      {
        "name": "Class D",
        "nameJa": "クラスD（高リスク）",
        "riskLevel": "高",
        "description": "高リスク医療機器。",
        "examples": [
          "心臓ペースメーカー",
          "人工心臓弁",
          "冠動脈ステント"
        ],
        "approvalPath": "登録（詳細審査）— DGDA"
      }
    ],
    "rules": [
      "IMDRF分類ルールに基づく（実施規則で詳細規定予定）",
      "IVDの分類基準は要確認",
      "従来はDGDAの個別判断で分類"
    ],
    "totalProductCodes": null
  },
  "conformityAssessment": {
    "overview": "全医療機器はDGDAへの登録が必要。Medical Devices Act 2023 の実施規則が完全に整備されるまでは、既存のDGDA登録手続きに基づく。参照国認可（CE、FDA等）の保有が審査で考慮される。外国メーカーはローカル代理人の指定が必要。",
    "routes": [
      {
        "name": "DGDA Device Registration",
        "nameJa": "DGDA 医療機器登録",
        "applicableClasses": [
          "Class A",
          "Class B",
          "Class C",
          "Class D"
        ],
        "description": "DGDAに申請書類一式を提出。技術文書、参照国認可証明、品質管理証明書等が必要。",
        "subtypes": [
          "新規登録",
          "変更登録",
          "更新"
        ],
        "avgReviewTime": "要確認（数ヶ月〜）",
        "fee": "DGDA規定による",
        "url": "https://www.dgda.gov.bd/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "DGDA オンラインポータル（段階的導入中）",
    "url": "https://www.dgda.gov.bd/",
    "description": "DGDAはオンライン申請システムを段階的に導入中。一部の手続きは書面提出が必要。",
    "mandatory": false
  },
  "udi": {
    "required": false,
    "system": "未導入",
    "description": "独自のUDI制度は2026年時点で未導入。Medical Devices Act 2023 にUDI関連の条項があるが、実施時期は未定。",
    "url": null,
    "timeline": "未定"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "有害事象報告制度（DGDA）",
      "mandatory": true,
      "url": "https://www.dgda.gov.bd/",
      "description": "Medical Devices Act 2023 に基づき有害事象報告が義務化。報告期限・様式等の詳細は実施規則で規定予定。"
    },
    "recalls": {
      "authority": "DGDA",
      "description": "DGDAの命令または自主リコール。リコール手続きの詳細は実施規則で規定予定。",
      "url": "https://www.dgda.gov.bd/"
    },
    "surveillance": "DGDAによる市販後監視。制度は発展途上。WHO支援の下で市販後監視体制の強化を推進中。"
  },
  "certificateOfFreeSale": {
    "available": false,
    "issuingAuthority": null,
    "name": null,
    "description": "バングラデシュからのCFS発行に関する公式制度は要確認。輸入登録時に製造国のCFS提出が求められる。",
    "processingTime": null,
    "url": null
  },
  "reimbursement": {
    "system": "政府主導型医療制度（公的医療機関 + 民間セクター）",
    "authority": "保健家族福祉省（MOH&FW）",
    "description": "公的医療機関での基本的な医療は無料で提供される。医療機器の個別償還制度は未整備。公共調達を通じた供給が中心。",
    "codingSystems": [],
    "url": "https://mohfw.gov.bd/"
  },
  "marketingRules": {
    "authority": "DGDA",
    "description": "医療機器広告に関する詳細法規は要確認。虚偽・誇大広告は一般法により禁止。",
    "keyRules": [
      "虚偽・誇大広告の禁止",
      "未登録機器の広告禁止"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "バングラデシュはMDSAPに参加していない。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "ISO 13485認証は登録時にQMS証明として参照される。法的義務化の状況は要確認。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "リスクマネジメントの国際規格として参照。"
    },
    "iec62304": {
      "accepted": false,
      "notes": "独自の要求は要確認。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "医用電気機器の安全規格として参照。"
    },
    "others": []
  },
  "recentDevelopments": [
    {
      "date": "2023",
      "title": "Medical Devices Act 2023 制定",
      "description": "バングラデシュ初の医療機器専用法が制定。リスクベース分類、登録制度、市販後監視の法的基盤を整備。"
    },
    {
      "date": "2024-2025",
      "title": "実施規則の策定作業",
      "description": "Medical Devices Act 2023 の実施規則をWHO支援の下で策定中。"
    }
  ],
  "lastUpdated": "2026-04-02",
  "verified": null
};
