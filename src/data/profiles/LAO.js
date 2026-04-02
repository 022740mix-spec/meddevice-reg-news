// ラオス (Lao People's Democratic Republic)
export default {
  "code": "LAO",
  "country": "ラオス",
  "countryEn": "Lao People's Democratic Republic",
  "region": "ASPAC",
  "flag": "🇱🇦",
  "legalSystemOverview": {
    "type": "人民民主共和制（People's Democratic Republic）",
    "description": "ラオスの医療機器規制は保健省（MOH）傘下の食品薬品局（FDD: Food and Drug Department）が所管する。Drug and Medical Products Law を法的根拠とし、医療機器の輸入管理・登録制度を運用している。ASEAN AMDDとの整合を段階的に推進中であるが、規制制度は発展途上であり、実施面での能力構築が課題。",
    "keyCharacteristics": [
      "FDD/MOH が医療機器規制を統括",
      "Drug and Medical Products Law が法的根拠",
      "ASEAN AMDD との整合を段階的に推進",
      "リスクベース4クラス分類（A / B / C / D）を採用",
      "輸入品は FDD への登録・輸入許可が必要",
      "規制制度は発展途上、WHO/ASEAN支援を活用"
    ]
  },
  "authorities": [
    {
      "name": "FDD",
      "fullName": "Food and Drug Department, Ministry of Health",
      "localName": "ກົมອາຫານ ແລະ ຢາ",
      "role": "医療機器の登録・輸入許可・市販後監視を統括",
      "url": "https://www.fdd.gov.la/",
      "isPrimary": true
    },
    {
      "name": "MOH Lao",
      "fullName": "Ministry of Health — Lao PDR",
      "localName": "ກະຊວງສາທາລະນະສຸກ",
      "role": "医療政策全般・法令の策定・監督",
      "url": "https://www.moh.gov.la/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "該当なし（FDD 直接審査）",
    "description": "Notified Body 制度は存在しない。FDD が直接登録審査を行う。参照国認可が審査で重要視される。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "Drug and Medical Products Law に基づく定義。ASEAN AMDD / IMDRF定義との整合を推進中。詳細な法的定義文書の公開は限定的。",
    "scope": "IVDを含む。SaMDに関する詳細規定は要確認。",
    "notes": "ASEAN AMDDの定義に整合する方向で制度整備中。"
  },
  "primaryLaw": {
    "title": "Drug and Medical Products Law（医薬品・医療製品法）",
    "originalTitle": "ກົດໝາຍວ່າດ້ວຍຢາ ແລະ ຜະລິດຕະພັນການແພດ",
    "enacted": "要確認",
    "lastAmended": "要確認",
    "url": "https://www.fdd.gov.la/",
    "description": "医薬品・医療機器を含む医療製品の規制に関する基本法。FDDの権限・登録制度の法的根拠を規定。"
  },
  "implementingRegulations": [
    {
      "title": "FDD 医療機器登録手続きガイダンス",
      "date": "要確認",
      "url": "https://www.fdd.gov.la/",
      "description": "医療機器の登録に必要な書類・手続きの詳細。",
      "category": "登録手続き"
    },
    {
      "title": "ASEAN CSDT ガイダンス（段階的採用）",
      "date": "要確認",
      "url": "https://asean.org/",
      "description": "ASEAN共通の申請書類テンプレート。ラオスでの採用を段階的に推進中。",
      "category": "ASEAN整合"
    }
  ],
  "relatedLaws": [
    {
      "title": "Hygiene, Disease Prevention and Health Promotion Law",
      "category": "公衆衛生",
      "enacted": "要確認",
      "url": null,
      "relevance": "公衆衛生全般に関する法律。医療機器の安全性にも関連。"
    }
  ],
  "classification": {
    "system": "リスクベース4クラス分類（ASEAN AMDD / IMDRF整合）",
    "basis": "ASEAN AMDDの分類ルールに基づくリスクベース分類。",
    "classes": [
      {
        "name": "Class A",
        "nameJa": "クラスA（低リスク）",
        "riskLevel": "低",
        "description": "低リスク医療機器。",
        "examples": [
          "ガーゼ",
          "聴診器",
          "手術用手袋"
        ],
        "approvalPath": "登録（簡易審査）— FDD"
      },
      {
        "name": "Class B",
        "nameJa": "クラスB（中低リスク）",
        "riskLevel": "中低",
        "description": "中低リスク医療機器。",
        "examples": [
          "超音波診断装置",
          "注射針"
        ],
        "approvalPath": "登録 — FDD"
      },
      {
        "name": "Class C",
        "nameJa": "クラスC（中高リスク）",
        "riskLevel": "中高",
        "description": "中高リスク医療機器。",
        "examples": [
          "人工呼吸器",
          "透析器"
        ],
        "approvalPath": "登録（技術審査）— FDD"
      },
      {
        "name": "Class D",
        "nameJa": "クラスD（高リスク）",
        "riskLevel": "高",
        "description": "高リスク医療機器。",
        "examples": [
          "心臓ペースメーカー",
          "人工心臓弁"
        ],
        "approvalPath": "登録（詳細審査）— FDD"
      }
    ],
    "rules": [
      "ASEAN AMDD分類ルールに準拠",
      "IVDの分類基準は要確認",
      "参照国での分類を参考"
    ],
    "totalProductCodes": null
  },
  "conformityAssessment": {
    "overview": "医療機器はFDDへの登録が必要。参照国認可（CE、FDA、ASEAN認可等）の保有が審査を円滑化する。外国メーカーはローカル代理人（輸入業者）の指定が必要。",
    "routes": [
      {
        "name": "FDD Device Registration",
        "nameJa": "FDD 医療機器登録",
        "applicableClasses": [
          "Class A",
          "Class B",
          "Class C",
          "Class D"
        ],
        "description": "FDDに申請書類一式を提出。技術文書、参照国認可証明、品質管理証明書等が必要。",
        "subtypes": [
          "新規登録",
          "変更登録",
          "更新"
        ],
        "avgReviewTime": "要確認（数ヶ月〜）",
        "fee": "FDD規定による",
        "url": "https://www.fdd.gov.la/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "要確認",
    "url": null,
    "description": "電子申請システムの導入状況は要確認。書面提出が主。",
    "mandatory": false
  },
  "udi": {
    "required": false,
    "system": "未導入",
    "description": "独自のUDI制度は2026年時点で未導入。",
    "url": null,
    "timeline": "未定"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "有害事象報告制度（FDD/MOH）",
      "mandatory": true,
      "url": "https://www.fdd.gov.la/",
      "description": "FDDへの有害事象報告が義務付けられている。報告様式・期限の詳細は要確認。"
    },
    "recalls": {
      "authority": "FDD / MOH",
      "description": "MOHの命令または自主リコール。",
      "url": "https://www.fdd.gov.la/"
    },
    "surveillance": "FDD/MOHによる市販後監視。制度は発展途上。WHO/ASEAN支援を活用して体制構築中。"
  },
  "certificateOfFreeSale": {
    "available": false,
    "issuingAuthority": null,
    "name": null,
    "description": "ラオスからのCFS発行に関する公式制度は要確認。輸入登録時に製造国のCFS提出が求められる場合がある。",
    "processingTime": null,
    "url": null
  },
  "reimbursement": {
    "system": "政府主導型医療制度（公的医療 + 民間セクター + 国際支援）",
    "authority": "保健省（MOH）",
    "description": "National Health Insurance制度を段階的に拡大中。医療機器の個別償還制度は未整備。公共調達・国際機関支援が中心。",
    "codingSystems": [],
    "url": "https://www.moh.gov.la/"
  },
  "marketingRules": {
    "authority": "FDD / MOH",
    "description": "医療機器広告に関する詳細法規は要確認。虚偽広告は一般法により禁止。",
    "keyRules": [
      "虚偽・誇大広告の禁止",
      "未登録機器の広告禁止"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "ラオスはMDSAPに参加していない。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "ISO 13485認証は登録時にQMS証明として参照される。"
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
      "date": "2024-2025",
      "title": "ASEAN AMDD整合の段階的推進",
      "description": "ASEAN医療機器指令との整合を段階的に推進中。WHO/ASEAN技術支援を活用。"
    },
    {
      "date": "2025",
      "title": "医療機器登録制度の運用強化",
      "description": "FDDが登録審査の体制強化を段階的に進行中。"
    }
  ],
  "lastUpdated": "2026-04-02",
  "verified": null
};
