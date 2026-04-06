// フィンランド (Finland)
export default {
  "code": "FIN",
  "country": "フィンランド",
  "countryEn": "Finland",
  "region": "Europe",
  "flag": "🇫🇮",
  "legalSystemOverview": {
    "type": "EU加盟国（MDR/IVDR 直接適用）",
    "description": "フィンランドはEU加盟国。MDR/IVDR直接適用。Fimea がNCA。Medical Devices Act (719/2021)が国内補完法。NB密度が高い（MDR:2, IVDR:2）。",
    "keyCharacteristics": [
      "EU MDR/IVDR 直接適用",
      "Fimea がNCA（NB指定・監督含む）",
      "安全使用情報はフィンランド語+スウェーデン語必須",
      "文書はフィンランド語/スウェーデン語/英語で可",
      "国内3 NB（MDR:2, IVDR:2）",
      "JNHB創設メンバー"
    ]
  },
  "authorities": [
    {
      "name": "Fimea",
      "fullName": "Finnish Medicines Agency",
      "localName": "Lääkealan turvallisuus- ja kehittämiskeskus",
      "role": "NCA: 市場監視・ビジランス・臨床試験・NB指定監督・登録",
      "url": "https://fimea.fi/en/medical-devices",
      "isPrimary": true
    },
    {
      "name": "PALKO / COHERE Finland",
      "fullName": "Council for Choices in Health Care in Finland",
      "localName": "Terveydenhuollon palveluvalikoimaneuvosto",
      "role": "HTA評価・推奨",
      "url": "https://palveluvalikoima.fi/",
      "isPrimary": false
    },
    {
      "name": "FinCCHTA",
      "fullName": "Finnish Coordinating Center for Health Technology Assessment",
      "localName": null,
      "role": "大学病院HTAネットワーク",
      "url": "https://www.fincchta.fi/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "EU MDR/IVDR Notified Body（フィンランド国内3機関）",
    "description": "Eurofins (NB 0537, MDR+IVDR)、SGS FIMKO (NB 0598, MDR)、Sertio (NB 3018, IVDR)。",
    "bodies": [
      {
        "nb": "0537",
        "name": "Eurofins Electric & Electronics Finland Oy",
        "url": "https://www.eurofins.fi/",
        "mdr": true,
        "ivdr": true
      },
      {
        "nb": "0598",
        "name": "SGS FIMKO OY",
        "url": "https://www.sgs.fi/",
        "mdr": true,
        "ivdr": false
      },
      {
        "nb": "3018",
        "name": "Sertio Oy",
        "url": "https://www.sertio.fi/",
        "mdr": false,
        "ivdr": true
      }
    ]
  },
  "deviceDefinition": {
    "legalDefinition": "EU MDR Article 2(1) がそのまま適用。",
    "scope": "IVD は IVDR。SaMD・AI/ML も対象。",
    "notes": "Act 719/2021が国内補完法。"
  },
  "primaryLaw": {
    "title": "Regulation (EU) 2017/745 — MDR",
    "originalTitle": null,
    "enacted": "2017 / 2021年5月26日適用",
    "lastAmended": "2024（Regulation (EU) 2024/1860 経過措置延長）",
    "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32017R0745",
    "description": "EU MDR 直接適用。Act 719/2021が国内補完法。"
  },
  "implementingRegulations": [
    {
      "title": "Medical Devices Act (719/2021)",
      "date": "2021",
      "url": "https://fimea.fi/en/medical-devices/legislation-related-to-medical-devices",
      "description": "MDR/IVDR国内補完法。Fimea権限・罰則・言語・登録・NB指定。",
      "category": "国内補完法"
    },
    {
      "title": "Decree 437/2021",
      "date": "2021",
      "url": "https://fimea.fi/en/medical-devices/legislation-related-to-medical-devices",
      "description": "Act下位法令。",
      "category": "省令"
    },
    {
      "title": "Fimea Regulation 2/2021",
      "date": "2021",
      "url": "https://fimea.fi/en/medical-devices/registrations",
      "description": "EUDAMED/CERE届出要件。",
      "category": "当局規則"
    }
  ],
  "relatedLaws": [
    {
      "title": "GDPR + Tietosuojalaki",
      "category": "データ保護",
      "enacted": "2018",
      "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679",
      "relevance": "健康データに適用。"
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
    "overview": "EU MDR 適合性評価がそのまま適用。EUDAMED早期活用。",
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
        "url": "https://fimea.fi/en/medical-devices/placing-a-medical-device-on-the-market/conformity-assessment"
      }
    ]
  },
  "electronicSubmission": {
    "system": "EUDAMED + CERE（Fimea国内システム）",
    "url": "https://fimea.fi/en/medical-devices/registrations",
    "description": "EUDAMED早期活用。CEREはFimea国内補助。EUDAMED義務化: 2026年5月。",
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
      "system": "EU Vigilance — Fimea",
      "mandatory": true,
      "url": "https://fimea.fi/en/medical-devices",
      "description": "重篤有害事象をFimeaに報告。"
    },
    "recalls": {
      "authority": "Fimea",
      "description": "FSCA/FSNはFimeaに通知。",
      "url": "https://fimea.fi/en/medical-devices"
    },
    "surveillance": "EU MDR PMS/PSUR/PMCF適用。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "Fimea",
    "name": "CFS",
    "description": "FimeaがCFSを発行。",
    "processingTime": "要確認",
    "url": "https://fimea.fi/en/medical-devices"
  },
  "reimbursement": {
    "system": "公的医療 + PALKO/COHERE HTA + FinCCHTA",
    "authority": "PALKO/COHERE（HTA推奨）/ Hila / FinCCHTA",
    "description": "Hyvinvointialue が医療提供。PALKOが国レベルHTA。FinCCHTAが大学病院mini-HTA。JNHB創設メンバー。",
    "codingSystems": [
      "NordDRG",
      "SHM補助機器分類"
    ],
    "url": "https://palveluvalikoima.fi/"
  },
  "marketingRules": {
    "authority": "Fimea",
    "description": "安全使用情報はフィンランド語+スウェーデン語必須。その他はフィンランド語/スウェーデン語/英語。",
    "keyRules": [
      "ラベル・IFU: フィンランド語+スウェーデン語必須",
      "その他文書: 3言語で可"
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
      "notes": "EN ISO 14971:2019+A11:2021。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "EN IEC 62304:2006+A1:2015。"
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
      "title": "Sertio Oy IVDR NB指定",
      "description": "フィンランド初のIVDR専用NB。"
    },
    {
      "date": "2023",
      "title": "Hyvinvointialue制度開始",
      "description": "自治体医療が21のHyvinvointialue（福祉地域）に移行。"
    },
    {
      "date": "2025-02",
      "title": "SGS Fimko OY MDRスコープ拡大",
      "description": "SGS Fimko OY（NB 0598）のMDR指定スコープが2025年2月に拡大。"
    },
    {
      "date": "2025-04",
      "title": "NIS2サイバーセキュリティ法施行",
      "description": "EU NIS2指令を国内実施するサイバーセキュリティ法が2025年4月8日施行。医療機器製造者はFimeaの監督対象。"
    },
    {
      "date": "2026-01",
      "title": "AI法（1377/2025）第1段階施行",
      "description": "フィンランド国内AI法の第1段階が2026年1月1日施行。AI搭載医療機器はMDCG 2025-6ガイダンスに基づきMDR/IVDRとAI Actの要件を統合。"
    }
  ],
  "lastUpdated": "2026-04-06",
  "verified": "2026-04-06"
};
