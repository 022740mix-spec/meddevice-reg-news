// モンテネグロ (Montenegro)
export default {
  "code": "MNE",
  "country": "モンテネグロ",
  "countryEn": "Montenegro",
  "region": "Europe",
  "flag": "🇲🇪",
  "legalSystemOverview": {
    "type": "EU加盟候補国（EU MDR移行中）",
    "description": "モンテネグロはEU加盟候補国（14/33章暫定閉鎖）。Law on Medical Devices (OG 024/19) が基本法。CInMEDがNCA。CEマーキング承認だが別途CInMED登録必須。EU MDR移行中（Class III/IIbインプラント: 2027年末、その他: 2028年末）。",
    "keyCharacteristics": [
      "EU加盟候補国（Chapter 1 2017年開放、14/33章暫定閉鎖）",
      "Law on Medical Devices (OG 024/19) が基本法",
      "CInMED がNCA",
      "CEマーキング承認 + CInMED登録必須",
      "登録有効期間5年・審査約90日",
      "モンテネグロ語ラベリング・IFU必須",
      "現地AR（認定代理人）必須",
      "EU MDR移行中（2027/2028年期限）"
    ]
  },
  "authorities": [
    {
      "name": "CInMED",
      "fullName": "Institute for Medicines and Medical Devices of Montenegro",
      "localName": "Institut za ljekove i medicinska sredstva Crne Gore",
      "role": "NCA: 医療機器登録・市場監視・ビジランス・分類・認証",
      "url": "https://cinmed.me/en/medical-devices/registration/",
      "isPrimary": true
    },
    {
      "name": "FZOCG",
      "fullName": "Health Insurance Fund of Montenegro",
      "localName": "Fond za zdravstveno osiguranje Crne Gore",
      "role": "健康保険による医療機器償還管理",
      "url": "https://fzocg.me/usluge/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "EU NB証明書承認（国内NB制度なし）",
    "description": "モンテネグロは独自のNB制度を持たない。EU指定NBが発行したCE証明書を承認する。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "Law on Medical Devices (OG 024/19) に基づく定義。EU MDDの定義を踏襲し、MDRへの移行を進めている。",
    "scope": "IVD含む。SaMD規定はEU MDR移行に伴い整備中。",
    "notes": "Rulebook on Basic Requirements (OG 008/24) がEU必須要件を規定。"
  },
  "primaryLaw": {
    "title": "Law on Medical Devices (Zakon o medicinskim sredstvima)",
    "originalTitle": "Zakon o medicinskim sredstvima",
    "enacted": "2019",
    "lastAmended": null,
    "url": "https://cinmed.me/wp-content/uploads/2025/07/Law-on-Medical-Devices.pdf",
    "description": "医療機器の安全性・品質・市場流通に関する基本法。Official Gazette 024/19。EU MDR整合を目指した枠組み。"
  },
  "implementingRegulations": [
    {
      "title": "Rulebook on Basic Requirements for Medical Devices (OG 008/24)",
      "date": "2024",
      "url": "https://cinmed.me/en/medical-devices/legislation/",
      "description": "医療機器の基本要件を規定。EU MDR Essential Requirementsに整合。",
      "category": "技術要件"
    },
    {
      "title": "Rulebook on Recognition of Foreign Documents, CE Mark and Registration (OG 85/22, 126/22)",
      "date": "2022",
      "url": "https://cinmed.me/wp-content/uploads/2023/05/Rulebook-on-recognition-of-foreign-documents-and-CE-mark-and-on-registra....pdf",
      "description": "外国文書・CEマーキングの承認手続きおよびCInMED登録手続きを規定。",
      "category": "登録手続"
    },
    {
      "title": "Rulebook on Labelling of Medical Devices (OG 047/23)",
      "date": "2023",
      "url": "https://cinmed.me/en/medical-devices/labelling/",
      "description": "医療機器のラベリング要件。モンテネグロ語表示義務。",
      "category": "ラベリング"
    }
  ],
  "relatedLaws": [
    {
      "title": "GDPR関連法（データ保護）",
      "category": "データ保護",
      "enacted": "2023",
      "url": "https://www.gov.me/en/azlp",
      "relevance": "EU GDPR整合のデータ保護法。健康データに適用。"
    }
  ],
  "classification": {
    "system": "EU式4クラス制",
    "basis": "EU MDD/MDR準拠の分類規則。MDR完全移行に向けて改訂中。",
    "classes": [
      {
        "name": "Class I",
        "nameJa": "クラスI",
        "riskLevel": "低",
        "description": "低リスク機器。自己宣言。",
        "examples": ["弾性包帯", "聴診器", "車椅子"],
        "approvalPath": "自己宣言 + CInMED登録"
      },
      {
        "name": "Class IIa",
        "nameJa": "クラスIIa",
        "riskLevel": "中低",
        "description": "中低リスク。EU NB証明書必要。",
        "examples": ["補聴器", "超音波装置", "血圧計"],
        "approvalPath": "EU NB証明書 + CInMED登録"
      },
      {
        "name": "Class IIb",
        "nameJa": "クラスIIb",
        "riskLevel": "中高",
        "description": "中高リスク。EU NB詳細審査。",
        "examples": ["人工呼吸器", "輸液ポンプ", "X線装置"],
        "approvalPath": "EU NB証明書 + CInMED登録"
      },
      {
        "name": "Class III",
        "nameJa": "クラスIII",
        "riskLevel": "高",
        "description": "最高リスク。EU NB最も厳格な審査。",
        "examples": ["人工心臓弁", "冠動脈ステント", "植込み型除細動器"],
        "approvalPath": "EU NB証明書 + CInMED登録"
      }
    ],
    "rules": ["EU MDD/MDR準拠分類規則（MDR完全移行中）"],
    "totalProductCodes": "なし（EU分類に準拠）"
  },
  "conformityAssessment": {
    "overview": "CEマーキング承認だが、別途CInMED登録が必須。審査約90日。登録有効期間5年。現地AR必須。",
    "routes": [
      {
        "name": "CInMED Registration (CE-marked devices)",
        "nameJa": "CInMED登録（CE認証済み機器）",
        "applicableClasses": ["Class I", "Class IIa", "Class IIb", "Class III"],
        "description": "EU NB発行のCE証明書をベースにCInMED登録。適合宣言・CE証明書・技術文書サマリー・ラベリングサンプル等を提出。登録有効期間5年。",
        "subtypes": [],
        "avgReviewTime": "約90日",
        "avgReviewTimeSource": "https://cinmed.me/en/medical-devices/registration/",
        "fee": "要確認（公式情報で裏付け未取得）",
        "feeSource": "https://cinmed.me/en/medical-devices/legislation/",
        "url": "https://cinmed.me/wp-content/uploads/2023/05/Rulebook-on-recognition-of-foreign-documents-and-CE-mark-and-on-registra....pdf"
      }
    ]
  },
  "electronicSubmission": {
    "system": "紙ベース + 電子メール",
    "url": "https://cinmed.me/en/contact/",
    "description": "CInMEDへの登録申請は紙ベースまたは電子メール。専用電子ポータルは未整備。",
    "mandatory": false
  },
  "udi": {
    "required": false,
    "system": "未導入",
    "description": "UDI制度は未導入。EU MDR移行に伴い将来的に導入予定。",
    "url": "https://cinmed.me/en/medical-devices/classification/",
    "timeline": "未定（EU MDR完全移行に連動）"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "CInMED Vigilance",
      "mandatory": true,
      "url": "https://cinmed.me/en/medical-devices/vigilance/",
      "description": "有害事象をCInMEDに報告。EU Vigilanceの枠組みを採用。"
    },
    "recalls": {
      "authority": "CInMED",
      "description": "FSCA/FSNをCInMEDに通知。市場からの撤去措置。",
      "url": "https://cinmed.me/en/medical-devices/safety-notices/"
    },
    "surveillance": "PMS/ビジランス制度はEU MDR整合に向けて整備中。CInMEDが市場監視を実施。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "CInMED",
    "name": "Certificate of Free Sale",
    "description": "CInMEDが発行。有効な機器登録が前提。",
    "processingTime": "要確認（公式情報で裏付け未取得）",
    "url": "https://cinmed.me/en/medical-devices/certificates/"
  },
  "reimbursement": {
    "system": "健康保険基金（FZOCG）",
    "authority": "FZOCG (Fond za zdravstveno osiguranje Crne Gore)",
    "description": "健康保険基金FZOCGが医療機器償還を管理。",
    "codingSystems": ["FZOCG償還リスト"],
    "url": "https://fzocg.me/osiguranici/"
  },
  "marketingRules": {
    "authority": "CInMED",
    "description": "モンテネグロ語ラベリング・IFU必須。CInMED規定によりIFUはモンテネグロ語のみ。",
    "keyRules": [
      "モンテネグロ語ラベリング必須",
      "IFU: モンテネグロ語のみ（CInMED規定）",
      "CEマーキング表示義務"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "MDSAP非参加。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "EN ISO 13485受容。CEマーキングの前提。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "EN ISO 14971受容。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "EN IEC 62304受容。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "EN IEC 60601シリーズ受容。"
    },
    "others": []
  },
  "recentDevelopments": [
    {
      "date": "2024",
      "title": "Rulebook on Basic Requirements 改訂（OG 008/24）",
      "description": "医療機器の基本要件に関する規則を改訂。EU MDR Essential Requirementsへの整合を強化。"
    },
    {
      "date": "2022",
      "title": "Rulebook on Recognition of Foreign Documents and CE Mark",
      "description": "外国文書・CEマーキングの承認手続きおよび登録手続きを新たに規定（OG 85/22, 126/22）。"
    },
    {
      "date": "2019",
      "title": "Law on Medical Devices 施行",
      "description": "医療機器に関する新基本法（OG 024/19）が施行。EU MDR整合の法的基盤を構築。"
    }
  ],
  "lastUpdated": "2026-04-03",
  "verified": null
};
