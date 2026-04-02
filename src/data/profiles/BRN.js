// ブルネイ (Brunei Darussalam)
export default {
  "code": "BRN",
  "country": "ブルネイ",
  "countryEn": "Brunei Darussalam",
  "region": "ASPAC",
  "flag": "🇧🇳",
  "legalSystemOverview": {
    "type": "絶対君主制（Absolute Monarchy）",
    "description": "保健省（MOH）傘下のDepartment of Pharmaceutical Services（DPS）が管轄。Medicines Order 2007が法的根拠。ASEAN Medical Device Directive（AMDD）の枠組みに沿った規制整合化を推進中。参照国認可（CE、FDA、HSA等）への依存度が高い。",
    "keyCharacteristics": [
      "MOH/DPS が医療機器規制を管轄",
      "Medicines Order 2007 が法的根拠",
      "ASEAN AMDD 整合化を推進中",
      "参照国認可（CE、FDA、HSA等）への依存度が高い",
      "ローカル代理人の指定が必要",
      "規制制度は発展途上"
    ]
  },
  "authorities": [
    {
      "name": "MOH/DPS",
      "fullName": "Ministry of Health - Department of Pharmaceutical Services",
      "localName": "Kementerian Kesihatan - Jabatan Perkhidmatan Farmasi",
      "role": "医療機器の登録・輸入管理・品質管理・市販後監視",
      "url": "https://www.moh.gov.bn/",
      "isPrimary": true
    }
  ],
  "notifiedBodies": {
    "system": "なし（MOH/DPS が直接審査）",
    "description": "Notified Body 制度は存在しない。参照国での認可が審査で重要視される。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "Medicines Order 2007 に基づく定義。ASEAN AMDDの定義に準拠。",
    "scope": "IVDを含む。",
    "notes": "ASEAN AMDD整合化に伴い定義の統一を推進中。"
  },
  "primaryLaw": {
    "title": "Medicines Order 2007",
    "originalTitle": "Medicines Order 2007",
    "enacted": "2007",
    "lastAmended": "要確認",
    "url": "https://www.moh.gov.bn/",
    "description": "医薬品・医療機器の規制に関する基本法令。"
  },
  "implementingRegulations": [
    {
      "title": "医療機器登録ガイドライン",
      "date": "要確認",
      "url": "https://www.moh.gov.bn/",
      "description": "医療機器の登録手続き・必要書類を規定。ASEAN CSDTの採用を検討中。",
      "category": "登録手続き"
    }
  ],
  "relatedLaws": [],
  "classification": {
    "system": "4クラス分類（Class A / B / C / D）— ASEAN AMDD 準拠",
    "basis": "ASEAN Medical Device Directiveに基づくリスクベース分類。",
    "classes": [
      {
        "name": "Class A",
        "nameJa": "クラスA",
        "riskLevel": "低リスク",
        "description": "低リスク医療機器。",
        "examples": [
          "ガーゼ",
          "聴診器",
          "舌圧子"
        ],
        "approvalPath": "製品届出"
      },
      {
        "name": "Class B",
        "nameJa": "クラスB",
        "riskLevel": "中低リスク",
        "description": "中低リスク医療機器。",
        "examples": [
          "注射器",
          "超音波診断装置"
        ],
        "approvalPath": "登録（標準）"
      },
      {
        "name": "Class C",
        "nameJa": "クラスC",
        "riskLevel": "中高リスク",
        "description": "中高リスク医療機器。",
        "examples": [
          "人工呼吸器",
          "透析装置"
        ],
        "approvalPath": "登録（詳細審査）"
      },
      {
        "name": "Class D",
        "nameJa": "クラスD",
        "riskLevel": "高リスク",
        "description": "高リスク医療機器。",
        "examples": [
          "心臓ペースメーカー",
          "冠動脈ステント"
        ],
        "approvalPath": "登録（詳細審査）"
      }
    ],
    "rules": [
      "ASEAN AMDD 分類規則に準拠",
      "GHTF/IMDRF 枠組みに基づく"
    ],
    "totalProductCodes": null
  },
  "conformityAssessment": {
    "overview": "MOH/DPSに登録申請。参照国認可（CE、FDA、HSA等）の保有が審査で大きく考慮される。",
    "routes": [
      {
        "name": "Product Registration",
        "nameJa": "医療機器登録",
        "applicableClasses": [
          "Class A / B / C / D"
        ],
        "description": "MOH/DPSに申請書類を提出。技術文書・参照国認可証明・品質証明・ラベリング等を審査。",
        "subtypes": [],
        "avgReviewTime": "要確認（数ヶ月〜）",
        "fee": "要確認",
        "url": "https://www.moh.gov.bn/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "要確認",
    "url": null,
    "description": "電子申請システムの導入状況は要確認。",
    "mandatory": false
  },
  "udi": {
    "required": false,
    "system": "未導入",
    "description": "独自のUDI制度は未導入。ASEANレベルでの議論は進行中。",
    "url": null,
    "timeline": "要確認"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "有害事象報告制度（MOH）",
      "mandatory": true,
      "url": "https://www.moh.gov.bn/",
      "description": "MOHへの有害事象報告義務がある。報告様式・期限の詳細は要確認。"
    },
    "recalls": {
      "authority": "MOH/DPS",
      "description": "MOH/DPSがリコールを管理。",
      "url": "https://www.moh.gov.bn/"
    },
    "surveillance": "MOH/DPSによる市販後監視。ASEAN連携による情報共有も推進。"
  },
  "certificateOfFreeSale": {
    "available": false,
    "issuingAuthority": null,
    "name": null,
    "description": "登録申請時に原産国のCFS提出が求められる場合がある。ブルネイからのCFS発行制度は要確認。",
    "processingTime": null,
    "url": null
  },
  "reimbursement": {
    "system": "国営医療制度（政府負担）",
    "authority": "MOH",
    "description": "ブルネイの医療は政府が全額または大部分を負担。公的医療機関での医療機器調達は政府調達プロセスによる。",
    "codingSystems": [
      "要確認"
    ],
    "url": "https://www.moh.gov.bn/"
  },
  "marketingRules": {
    "authority": "MOH/DPS",
    "description": "登録済み機器のみ販売・使用可能。",
    "keyRules": [
      "登録済み機器のみ販売可",
      "虚偽広告の禁止"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "ブルネイはMDSAPに参加していない。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "ISO 13485認証はQMS証明として参照される。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "リスクマネジメント規格として参照。"
    },
    "iec62304": {
      "accepted": false,
      "notes": "要確認。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "医用電気機器の安全規格として参照。"
    },
    "others": []
  },
  "recentDevelopments": [
    {
      "date": "2025-2026",
      "title": "ASEAN AMDD 整合化の推進",
      "description": "ASEAN Medical Device Directiveに基づく規制整合化が進行中。CSDTの導入・分類整合化を推進。"
    }
  ],
  "lastUpdated": "2026-04-02",
  "verified": null
};
