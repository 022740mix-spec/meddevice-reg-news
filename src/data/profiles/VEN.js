// ベネズエラ (Bolivarian Republic of Venezuela)
export default {
  "code": "VEN",
  "country": "ベネズエラ",
  "countryEn": "Bolivarian Republic of Venezuela",
  "region": "Latam",
  "flag": "🇻🇪",
  "legalSystemOverview": {
    "type": "中央集権制（Centralized system）",
    "description": "ベネズエラの医療機器規制は保健省（MPPS: Ministerio del Poder Popular para la Salud）が所管する。Registro Sanitario（衛生登録）制度を運用。経済危機・制裁等の影響で規制制度の実効的な運用に課題があり、登録手続きの遅延が報告されている。",
    "keyCharacteristics": [
      "MPPS が医療機器規制を統括",
      "Registro Sanitario（衛生登録）制度",
      "リスクベース分類を採用（詳細は要確認）",
      "経済制裁・通貨規制等の影響で輸入・登録に困難が伴う",
      "ローカル代理人の指定が必須",
      "規制運用の実態には流動的な要素が多い"
    ]
  },
  "authorities": [
    {
      "name": "MPPS",
      "fullName": "Ministerio del Poder Popular para la Salud",
      "localName": "Ministerio del Poder Popular para la Salud",
      "role": "医療機器の衛生登録・輸入管理・市販後監視・医療政策全般を統括",
      "url": "http://www.mpps.gob.ve/",
      "isPrimary": true
    }
  ],
  "notifiedBodies": {
    "system": "なし（MPPS が直接審査）",
    "description": "Notified Body 制度は存在しない。MPPS が直接審査を行う。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "疾病の診断・治療・予防・監視等を目的とする器具・装置・機器等で、主たる作用が薬理学的手段によらないもの。詳細な法的定義は要確認。",
    "scope": "IVDを含む。",
    "notes": "SaMDに関する明確な規定は要確認。"
  },
  "primaryLaw": {
    "title": "Ley de Medicamentos（医薬品法）および関連規則",
    "originalTitle": "Ley de Medicamentos",
    "enacted": "2000",
    "lastAmended": "要確認",
    "url": "http://www.mpps.gob.ve/",
    "description": "医薬品・医療機器の衛生登録に関する法的根拠。"
  },
  "implementingRegulations": [
    {
      "title": "MPPS 医療機器登録手続き規則",
      "date": "要確認",
      "url": "http://www.mpps.gob.ve/",
      "description": "医療機器の Registro Sanitario に必要な書類・手続きを規定。",
      "category": "登録手続き"
    }
  ],
  "relatedLaws": [
    {
      "title": "Ley Orgánica de Salud（保健基本法）",
      "category": "保健基本法",
      "enacted": "1998",
      "url": "http://www.mpps.gob.ve/",
      "relevance": "公衆衛生の法的基盤。MPPS の権限を規定。"
    }
  ],
  "classification": {
    "system": "リスクベース分類（要確認）",
    "basis": "MPPSの規則に基づくリスクベース分類。詳細な分類規則の公開は限定的。",
    "classes": [
      {
        "name": "Class I",
        "nameJa": "クラスI",
        "riskLevel": "低リスク",
        "description": "低リスク医療機器。",
        "examples": [
          "ガーゼ",
          "聴診器",
          "弾性包帯"
        ],
        "approvalPath": "Registro Sanitario（簡易）"
      },
      {
        "name": "Class II",
        "nameJa": "クラスII",
        "riskLevel": "中リスク",
        "description": "中リスク医療機器。",
        "examples": [
          "超音波診断装置",
          "注射器"
        ],
        "approvalPath": "Registro Sanitario（標準）"
      },
      {
        "name": "Class III",
        "nameJa": "クラスIII",
        "riskLevel": "高リスク",
        "description": "高リスク医療機器。",
        "examples": [
          "心臓ペースメーカー",
          "人工心臓弁"
        ],
        "approvalPath": "Registro Sanitario（詳細審査）"
      }
    ],
    "rules": [
      "MPPS規則に基づく分類",
      "分類体系の詳細は要確認"
    ],
    "totalProductCodes": null
  },
  "conformityAssessment": {
    "overview": "MPPS に Registro Sanitario を申請。技術文書、CFS、GMP 証明等が必要。経済制裁・為替規制の影響で審査に遅延が生じる場合がある。",
    "routes": [
      {
        "name": "Registro Sanitario",
        "nameJa": "衛生登録",
        "applicableClasses": [
          "Class I / II / III"
        ],
        "description": "MPPS に技術文書・CFS・GMP 証明等を提出して登録申請。審査期間は流動的。",
        "subtypes": [],
        "avgReviewTime": "要確認（数ヶ月〜1年以上の遅延報告あり）",
        "fee": "要確認",
        "url": "http://www.mpps.gob.ve/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "要確認",
    "url": null,
    "description": "電子申請システムの運用状況は要確認。",
    "mandatory": false
  },
  "udi": {
    "required": false,
    "system": "未導入",
    "description": "独自のUDI制度は未導入。",
    "url": null,
    "timeline": "未定"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "テクノビジランス制度（MPPS）",
      "mandatory": true,
      "url": "http://www.mpps.gob.ve/",
      "description": "有害事象の報告義務がある。制度の実効性には課題あり。"
    },
    "recalls": {
      "authority": "MPPS",
      "description": "MPPSがリコールを管理。",
      "url": "http://www.mpps.gob.ve/"
    },
    "surveillance": "MPPSによる市販後監視。実効的な運用には課題がある。"
  },
  "certificateOfFreeSale": {
    "available": false,
    "issuingAuthority": null,
    "name": null,
    "description": "登録申請時に原産国のCFS提出が求められる。ベネズエラからのCFS発行制度は要確認。",
    "processingTime": null,
    "url": null
  },
  "reimbursement": {
    "system": "公的医療制度 + 民間保険",
    "authority": "MPPS",
    "description": "公的医療は無料を原則とするが、経済危機で医療物資が不足。",
    "codingSystems": [
      "要確認"
    ],
    "url": "http://www.mpps.gob.ve/"
  },
  "marketingRules": {
    "authority": "MPPS",
    "description": "登録済み機器のみ販売可能。",
    "keyRules": [
      "登録済み機器のみ販売可",
      "虚偽広告の禁止"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "ベネズエラはMDSAPに参加していない。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "ISO 13485認証はGMP証明として参照される。"
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
      "title": "規制制度の現状",
      "description": "経済制裁および経済危機の継続により、医療機器の規制・供給に引き続き課題。登録手続きの遅延が常態化。"
    }
  ],
  "lastUpdated": "2026-04-02",
  "verified": null
};
