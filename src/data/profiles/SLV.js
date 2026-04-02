// エルサルバドル (Republic of El Salvador)
export default {
  "code": "SLV",
  "country": "エルサルバドル",
  "countryEn": "Republic of El Salvador",
  "region": "Latam",
  "flag": "🇸🇻",
  "legalSystemOverview": {
    "type": "中央集権制（Centralized system）",
    "description": "国家医薬品局（DNM: Dirección Nacional de Medicamentos）が管轄。2012年Ley de MedicamentosによりDNM設立。Registro Sanitario制度で医療機器の市場投入を管理。中米統合機構（SICA）枠組みでの地域整合化も進行中。",
    "keyCharacteristics": [
      "DNM が医療機器規制を統括",
      "Ley de Medicamentos（2012年）が法的根拠",
      "Registro Sanitario（衛生登録）制度",
      "リスクベース分類（4クラス: I / IIA / IIB / III）",
      "中米地域での規制整合化（RTCA）を推進",
      "ローカル代理人の指定が必要"
    ]
  },
  "authorities": [
    {
      "name": "DNM",
      "fullName": "Dirección Nacional de Medicamentos",
      "localName": "Dirección Nacional de Medicamentos",
      "role": "医療機器の衛生登録・輸入管理・市販後監視・品質管理",
      "url": "https://www.medicamentos.gob.sv/",
      "isPrimary": true
    }
  ],
  "notifiedBodies": {
    "system": "なし（DNM が直接審査）",
    "description": "Notified Body 制度は存在しない。DNM が直接審査を行う。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "疾病の診断・治療・予防・監視・軽減等を目的とする器具・装置・機器・ソフトウェア・材料等。GHTF/IMDRF定義に概ね準拠。",
    "scope": "IVDを含む。",
    "notes": "中米共通技術規則（RTCA）の定義にも準拠。"
  },
  "primaryLaw": {
    "title": "Ley de Medicamentos（医薬品法）",
    "originalTitle": "Ley de Medicamentos",
    "enacted": "2012",
    "lastAmended": "要確認",
    "url": "https://www.medicamentos.gob.sv/",
    "description": "医薬品・医療機器の規制に関する基本法。DNMの設立根拠を含む。"
  },
  "implementingRegulations": [
    {
      "title": "Reglamento de Dispositivos Médicos（医療機器規則）",
      "date": "要確認",
      "url": "https://www.medicamentos.gob.sv/",
      "description": "医療機器の分類・登録・市販後監視に関する詳細規則。",
      "category": "医療機器規則"
    },
    {
      "title": "RTCA（中米共通技術規則）医療機器関連",
      "date": "各年",
      "url": "https://www.sieca.int/",
      "description": "中米共通市場での医療機器規制の整合化を目的とした技術規則。",
      "category": "地域整合化"
    }
  ],
  "relatedLaws": [
    {
      "title": "Código de Salud（衛生法典）",
      "category": "保健基本法",
      "enacted": "1988",
      "url": "https://www.salud.gob.sv/",
      "relevance": "公衆衛生の法的基盤。"
    }
  ],
  "classification": {
    "system": "4クラス分類（Class I / IIA / IIB / III）",
    "basis": "リスクベース（GHTF/IMDRF の枠組みに準拠）",
    "classes": [
      {
        "name": "Class I",
        "nameJa": "クラスI",
        "riskLevel": "低リスク",
        "description": "低リスク医療機器。",
        "examples": [
          "聴診器",
          "手動外科器具",
          "ガーゼ"
        ],
        "approvalPath": "Registro Sanitario（簡易）"
      },
      {
        "name": "Class IIA",
        "nameJa": "クラスIIA",
        "riskLevel": "中低リスク",
        "description": "中低リスク医療機器。",
        "examples": [
          "注射器",
          "超音波診断装置"
        ],
        "approvalPath": "Registro Sanitario（標準）"
      },
      {
        "name": "Class IIB",
        "nameJa": "クラスIIB",
        "riskLevel": "中高リスク",
        "description": "中高リスク医療機器。",
        "examples": [
          "人工呼吸器",
          "透析装置"
        ],
        "approvalPath": "Registro Sanitario（詳細審査）"
      },
      {
        "name": "Class III",
        "nameJa": "クラスIII",
        "riskLevel": "高リスク",
        "description": "高リスク医療機器。",
        "examples": [
          "心臓ペースメーカー",
          "冠動脈ステント"
        ],
        "approvalPath": "Registro Sanitario（詳細審査）"
      }
    ],
    "rules": [
      "GHTF/IMDRF枠組みに基づく分類規則",
      "RTCA に基づく中米共通分類も参照"
    ],
    "totalProductCodes": null
  },
  "conformityAssessment": {
    "overview": "DNM に Registro Sanitario を申請。技術文書、CFS、GMP/ISO 13485 証明等が必要。",
    "routes": [
      {
        "name": "Registro Sanitario",
        "nameJa": "衛生登録",
        "applicableClasses": [
          "Class I / IIA / IIB / III"
        ],
        "description": "DNM に申請書類を提出。技術文書・CFS・品質証明・ラベリング等を審査。",
        "subtypes": [],
        "avgReviewTime": "要確認（60〜180日程度）",
        "fee": "要確認",
        "url": "https://www.medicamentos.gob.sv/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "要確認",
    "url": "https://www.medicamentos.gob.sv/",
    "description": "DNMの電子申請システムの導入状況は要確認。",
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
      "system": "テクノビジランス制度（DNM）",
      "mandatory": true,
      "url": "https://www.medicamentos.gob.sv/",
      "description": "登録保有者は有害事象をDNMに報告する義務がある。"
    },
    "recalls": {
      "authority": "DNM",
      "description": "DNMがリコール・FSCAを管理。",
      "url": "https://www.medicamentos.gob.sv/"
    },
    "surveillance": "DNMによるテクノビジランス（市販後監視）。"
  },
  "certificateOfFreeSale": {
    "available": false,
    "issuingAuthority": null,
    "name": null,
    "description": "登録申請時に原産国のCFS提出が求められる。エルサルバドルからのCFS発行制度は要確認。",
    "processingTime": null,
    "url": null
  },
  "reimbursement": {
    "system": "公的医療制度（ISSS + MINSAL）",
    "authority": "保健省 / ISSS",
    "description": "社会保険研究所（ISSS）が被用者向け、保健省（MINSAL）が一般国民向けの医療サービスを提供。調達は公的入札。",
    "codingSystems": [
      "要確認"
    ],
    "url": "https://www.salud.gob.sv/"
  },
  "marketingRules": {
    "authority": "DNM",
    "description": "登録済み機器のみ販売可能。",
    "keyRules": [
      "登録済み機器のみ販売可",
      "虚偽・誇大広告の禁止",
      "ラベリングはスペイン語で記載"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "エルサルバドルはMDSAPに参加していない。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "ISO 13485認証はGMP/QMS証明として参照される。"
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
      "title": "中米規制整合化の推進",
      "description": "SICA/COMIECO の枠組みで中米共通技術規則（RTCA）に基づく医療機器規制の整合化が進行中。"
    }
  ],
  "lastUpdated": "2026-04-02",
  "verified": null
};
