// デンマーク (Denmark)
export default {
  "code": "DNK",
  "country": "デンマーク",
  "countryEn": "Denmark",
  "region": "Europe",
  "flag": "🇩🇰",
  "legalSystemOverview": {
    "type": "EU加盟国（MDR/IVDR 直接適用）",
    "description": "デンマークはEU加盟国。MDR/IVDR直接適用。DKMA（Lægemiddelstyrelsen）がNCA。Executive Order on Medical Devicesが国内補完法。5地域（Region）が公立病院の機器調達を管轄。",
    "keyCharacteristics": [
      "EU MDR/IVDR 直接適用",
      "DKMA がNCA",
      "デンマーク語ラベリング・IFU原則必須（言語免除あり）",
      "Behandlingsrådet がHTA評価",
      "Amgros が5地域の共同調達",
      "JNHB 2023年参加"
    ]
  },
  "authorities": [
    {
      "name": "DKMA",
      "fullName": "Danish Medicines Agency",
      "localName": "Lægemiddelstyrelsen",
      "role": "NCA: 市場監視・ビジランス・臨床試験・登録・言語免除決定",
      "url": "https://laegemiddelstyrelsen.dk/en/devices/",
      "isPrimary": true
    },
    {
      "name": "Behandlingsrådet",
      "fullName": "Health Technology Council",
      "localName": "Behandlingsrådet",
      "role": "医療機器・技術のHTA評価・推奨",
      "url": "https://behandlingsraadet.dk/",
      "isPrimary": false
    },
    {
      "name": "Amgros",
      "fullName": "Amgros I/S",
      "localName": null,
      "role": "5地域の公立病院向け医薬品・機器の共同調達",
      "url": "https://amgros.dk/medical-devices/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "EU MDR Notified Body（デンマーク国内1機関）",
    "description": "TÜV SÜD Danmark（NB 2443）がMDR指定。IVDR未指定。",
    "bodies": [
      {
        "nb": "2443",
        "name": "TÜV SÜD Danmark",
        "url": "https://www.tuvsud.com/",
        "mdr": true,
        "ivdr": false
      }
    ]
  },
  "deviceDefinition": {
    "legalDefinition": "EU MDR Article 2(1) がそのまま適用。",
    "scope": "IVD は IVDR。SaMD・AI/ML も対象。",
    "notes": "追加定義変更なし。"
  },
  "primaryLaw": {
    "title": "Regulation (EU) 2017/745 — MDR",
    "originalTitle": null,
    "enacted": "2017 / 2021年5月26日適用",
    "lastAmended": "2025",
    "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32017R0745",
    "description": "EU MDR 直接適用。Executive Order on Medical Devicesが国内補完法。"
  },
  "implementingRegulations": [
    {
      "title": "Executive Order on Medical Devices (Bekendtgørelse om medicinsk udstyr)",
      "date": "2021",
      "url": "https://laegemiddelstyrelsen.dk/en/devices/legislation-and-guidance/legislation/",
      "description": "デンマーク語情報提供義務・言語免除手続等。",
      "category": "国内補完法令"
    }
  ],
  "relatedLaws": [
    {
      "title": "GDPR",
      "category": "データ保護",
      "enacted": "2018",
      "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679",
      "relevance": "健康データに適用。Databeskyttelsesloven併存。"
    }
  ],
  "classification": {
    "system": "EU MDR 4クラス制",
    "basis": "EU MDR Annex VIII。",
    "classes": [
      {
        "name": "Class I",
        "nameJa": "クラスI",
        "riskLevel": "低",
        "description": "自己宣言。",
        "examples": [
          "弾性包帯",
          "聴診器"
        ],
        "approvalPath": "自己宣言"
      },
      {
        "name": "Class IIa",
        "nameJa": "クラスIIa",
        "riskLevel": "中低",
        "description": "NB関与。",
        "examples": [
          "補聴器",
          "超音波装置"
        ],
        "approvalPath": "NB審査"
      },
      {
        "name": "Class IIb",
        "nameJa": "クラスIIb",
        "riskLevel": "中高",
        "description": "NB詳細審査。",
        "examples": [
          "人工呼吸器",
          "輸液ポンプ"
        ],
        "approvalPath": "NB審査"
      },
      {
        "name": "Class III",
        "nameJa": "クラスIII",
        "riskLevel": "高",
        "description": "最も厳格。",
        "examples": [
          "人工心臓弁",
          "冠動脈ステント"
        ],
        "approvalPath": "NB + Expert Panel"
      }
    ],
    "rules": [
      "EU MDR Annex VIII 直接適用"
    ],
    "totalProductCodes": "EU CND"
  },
  "conformityAssessment": {
    "overview": "EU MDR 適合性評価がそのまま適用。国内追加審査なし。",
    "routes": [
      {
        "name": "EU MDR Conformity Assessment",
        "nameJa": "EU MDR 適合性評価",
        "applicableClasses": [
          "全クラス"
        ],
        "description": "Annex IX〜XI。EUプロファイル参照。",
        "subtypes": [],
        "avgReviewTime": "EUプロファイル参照",
        "fee": "NBにより異なる",
        "url": "https://laegemiddelstyrelsen.dk/en/devices/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "EUDAMED + DKMA国内登録",
    "url": "https://laegemiddelstyrelsen.dk/en/devices/registration-and-marketing/",
    "description": "EUDAMED + DKMA国内登録。EUDAMED義務化: 2026年5月。",
    "mandatory": true
  },
  "udi": {
    "required": true,
    "system": "EU UDI — EUDAMED",
    "description": "MDR UDI要件がそのまま適用。",
    "url": "https://ec.europa.eu/tools/eudamed/",
    "timeline": "EUDAMED義務化: 2026年5月28日"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "EU Vigilance — DKMA",
      "mandatory": true,
      "url": "https://laegemiddelstyrelsen.dk/en/devices/",
      "description": "重篤有害事象をDKMAに報告。供給中断・停止の報告義務も。"
    },
    "recalls": {
      "authority": "DKMA",
      "description": "FSCA/FSNはDKMAに通知。",
      "url": "https://laegemiddelstyrelsen.dk/en/devices/"
    },
    "surveillance": "EU MDR PMS/PSUR/PMCF適用。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "DKMA",
    "name": "CFS",
    "description": "DKMAがCFSを発行。",
    "processingTime": "要確認",
    "url": "https://laegemiddelstyrelsen.dk/en/devices/"
  },
  "reimbursement": {
    "system": "5地域 + Amgros共同調達 + 市町村（Kommune）補助",
    "authority": "Behandlingsrådet（HTA）/ Amgros（調達）/ 5地域 / 市町村",
    "description": "病院用機器は5地域がAmgros経由で共同調達。BehandlingsrådetがHTA評価。エンドユーザー向けは市町村が償還。企業申請による一般償還制度はない。JNHB参加。",
    "codingSystems": [
      "DRG",
      "ISO補助機器分類"
    ],
    "url": "https://behandlingsraadet.dk/"
  },
  "marketingRules": {
    "authority": "DKMA",
    "description": "デンマーク語ラベリング・IFU原則必須。DKMA申請で言語免除可（専門家向け・英語）。",
    "keyRules": [
      "デンマーク語ラベリング・IFU原則必須",
      "DKMA申請で言語免除可",
      "インプラントカードもデンマーク語"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "EU加盟国としてMDSAP非参加。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "実質必須。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "EN ISO 14971:2019 + A11:2021。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "EN IEC 62304:2006 + A1:2015。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "EN IEC 60601シリーズ。"
    },
    "others": []
  },
  "recentDevelopments": [
    {
      "date": "2023",
      "title": "JNHB参加",
      "description": "北欧HTA協力JNHBに参加。"
    },
    {
      "date": "2024",
      "title": "Behandlingsrådet運用開始",
      "description": "医療機器HTA評価開始。"
    }
  ],
  "lastUpdated": "2026-04-02",
  "verified": null
};
