// キューバ (Republic of Cuba)
export default {
  "code": "CUB",
  "country": "キューバ",
  "countryEn": "Republic of Cuba",
  "region": "Latam",
  "flag": "🇨🇺",
  "legalSystemOverview": {
    "type": "中央集権制（社会主義体制）",
    "description": "CECMED（Centro para el Control Estatal de Medicamentos, Equipos y Dispositivos Médicos）が管轄。医薬品・医療機器の国家規制機関として登録・品質管理・市販後監視を一元管理。WHO指定レベル4規制機関（医薬品分野）として国際的評価を受けている。社会主義体制のため国家による医療制度の全面的管理が特徴。",
    "keyCharacteristics": [
      "CECMED が医療機器規制を一元管理",
      "国家主導の医療機器調達・管理体制",
      "リスクベースの分類・登録制度",
      "WHO指定レベル4規制機関（医薬品分野）としての実績",
      "米国経済制裁の影響で輸入に制約あり",
      "国産医療機器の開発・製造を推進"
    ]
  },
  "authorities": [
    {
      "name": "CECMED",
      "fullName": "Centro para el Control Estatal de Medicamentos, Equipos y Dispositivos Médicos",
      "localName": "Centro para el Control Estatal de Medicamentos, Equipos y Dispositivos Médicos",
      "role": "医療機器の登録・品質管理・市販後監視・施設許可",
      "url": "https://www.cecmed.cu/",
      "isPrimary": true
    },
    {
      "name": "MINSAP",
      "fullName": "Ministerio de Salud Pública",
      "localName": "Ministerio de Salud Pública",
      "role": "医療政策全般・公衆衛生",
      "url": "https://salud.msp.gob.cu/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "なし（CECMED が直接審査）",
    "description": "Notified Body 制度は存在しない。CECMED が直接審査を行う。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "疾病の診断・治療・予防・監視・軽減等を目的とする器具・装置・機器・ソフトウェア・材料等。GHTF/IMDRFに概ね準拠。",
    "scope": "IVDを含む。",
    "notes": "CECMEDの定義はGHTF/IMDRFに概ね準拠。"
  },
  "primaryLaw": {
    "title": "Resolución CECMED — 医療機器規制に関する決議",
    "originalTitle": "Resoluciones CECMED sobre dispositivos médicos",
    "enacted": "要確認",
    "lastAmended": "要確認",
    "url": "https://www.cecmed.cu/",
    "description": "CECMEDが発出する各種決議が医療機器の登録・分類・品質管理の法的根拠。"
  },
  "implementingRegulations": [
    {
      "title": "CECMED 医療機器登録手続きガイドライン",
      "date": "要確認",
      "url": "https://www.cecmed.cu/",
      "description": "医療機器の登録に必要な書類・手続きの詳細を規定。",
      "category": "登録手続き"
    }
  ],
  "relatedLaws": [
    {
      "title": "Ley de Salud Pública（公衆衛生法）",
      "category": "保健基本法",
      "enacted": "1983",
      "url": "https://salud.msp.gob.cu/",
      "relevance": "キューバの公衆衛生制度の法的基盤。"
    }
  ],
  "classification": {
    "system": "リスクベース分類（4クラス: I / IIA / IIB / III）",
    "basis": "CECMED規則に基づくリスクベース分類（GHTF/IMDRF枠組みに準拠）。",
    "classes": [
      {
        "name": "Class I",
        "nameJa": "クラスI",
        "riskLevel": "低リスク",
        "description": "低リスク医療機器。",
        "examples": [
          "ガーゼ",
          "聴診器",
          "体温計"
        ],
        "approvalPath": "CECMED 登録（簡易）"
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
        "approvalPath": "CECMED 登録（標準）"
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
        "approvalPath": "CECMED 登録（詳細審査）"
      },
      {
        "name": "Class III",
        "nameJa": "クラスIII",
        "riskLevel": "高リスク",
        "description": "高リスク医療機器。",
        "examples": [
          "心臓ペースメーカー",
          "埋込み型デバイス"
        ],
        "approvalPath": "CECMED 登録（詳細審査）"
      }
    ],
    "rules": [
      "CECMED規則に基づく分類",
      "GHTF/IMDRF分類枠組みに準拠"
    ],
    "totalProductCodes": null
  },
  "conformityAssessment": {
    "overview": "CECMEDに登録申請。技術文書、品質証明（ISO 13485等）、臨床データ等が必要。国産品と輸入品で手続きが異なる場合がある。",
    "routes": [
      {
        "name": "CECMED Device Registration",
        "nameJa": "CECMED 医療機器登録",
        "applicableClasses": [
          "Class I / IIA / IIB / III"
        ],
        "description": "CECMEDに申請書類を提出。技術文書・品質証明・臨床データ・ラベリング等を審査。",
        "subtypes": [
          "新規登録",
          "変更登録",
          "更新"
        ],
        "avgReviewTime": "要確認（60〜180日程度）",
        "fee": "要確認",
        "url": "https://www.cecmed.cu/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "要確認",
    "url": "https://www.cecmed.cu/",
    "description": "CECMEDの電子申請システムの導入状況は要確認。",
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
      "system": "テクノビジランス制度（CECMED）",
      "mandatory": true,
      "url": "https://www.cecmed.cu/",
      "description": "CECMEDが運用するテクノビジランス制度。有害事象・不具合の報告義務がある。WHOとの連携実績あり。"
    },
    "recalls": {
      "authority": "CECMED",
      "description": "CECMEDがリコール・市場撤去を管理。",
      "url": "https://www.cecmed.cu/"
    },
    "surveillance": "CECMEDによるテクノビジランス（市販後監視）。比較的体系的な運用。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "CECMED",
    "name": "Certificado de Libre Venta",
    "description": "CECMEDが登録済み機器についてCFSを発行。キューバ国産医療機器の輸出に利用。",
    "processingTime": "要確認",
    "url": "https://www.cecmed.cu/"
  },
  "reimbursement": {
    "system": "国営医療制度（全額国家負担）",
    "authority": "MINSAP",
    "description": "キューバの医療制度は国営で全額国家負担。医療機器の調達は国家機関を通じた一括購入。",
    "codingSystems": [
      "なし（国営一括調達）"
    ],
    "url": "https://salud.msp.gob.cu/"
  },
  "marketingRules": {
    "authority": "CECMED / MINSAP",
    "description": "国家管理体制のため民間の医療機器マーケティングは極めて限定的。",
    "keyRules": [
      "CECMED登録済み機器のみ使用可",
      "国家調達が基本",
      "民間マーケティングは極めて限定的"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "キューバはMDSAPに参加していない。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "ISO 13485認証はQMS証明として参照される。国内規格（NC規格）との対応も存在。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "リスクマネジメント規格として参照。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "ソフトウェア医療機器に対して参照。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "医用電気機器の安全規格として参照。NC規格として採用。"
    },
    "others": [
      {
        "name": "NC（Norma Cubana）規格",
        "notes": "キューバ国家規格。ISO/IEC規格のキューバ版を多数採用。"
      }
    ]
  },
  "recentDevelopments": [
    {
      "date": "2025-2026",
      "title": "規制制度の国際整合化",
      "description": "CECMEDはPAHO/WHOとの連携を強化し、医療機器規制の国際整合化を推進中。"
    },
    {
      "date": "2025",
      "title": "国産医療機器開発の推進",
      "description": "BioCubaFarmaグループを中心とした国産医療機器の開発・輸出を推進。"
    }
  ],
  "lastUpdated": "2026-04-02",
  "verified": null
};
