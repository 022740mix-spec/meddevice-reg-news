// ノルウェー (Norway)
export default {
  "code": "NOR",
  "country": "ノルウェー",
  "countryEn": "Norway",
  "region": "Europe",
  "flag": "🇳🇴",
  "legalSystemOverview": {
    "type": "EEA加盟国（MDR/IVDR がEEA経由で適用）",
    "description": "ノルウェーはEU非加盟だが、EEA協定を通じてMDR/IVDRが国内法に組み込まれている。Lov om medisinsk utstyr（LOV-2020-06-07-37）で国内実施。DMP/NOMA（旧SLV、2024年1月改組）がNCA。",
    "keyCharacteristics": [
      "EEA経由でMDR/IVDR適用",
      "DMP/NOMA（旧SLV、2024年1月改組）がNCA",
      "ノルウェー語ラベリング・IFU必須",
      "Nye MetoderがHTA評価",
      "HELFO Blue Prescription制度",
      "EUDAMED 2026年5月28日義務化（EEA国として参加）"
    ]
  },
  "authorities": [
    {
      "name": "DMP (NOMA)",
      "fullName": "Norwegian Medical Products Agency (NOMA)",
      "localName": "Direktoratet for medisinske produkter（旧Statens legemiddelverk/SLV、2024年1月改組）",
      "role": "NCA: 市場監視・ビジランス・臨床試験・HTA",
      "url": "https://www.dmp.no/en/medical-devices",
      "isPrimary": true
    },
    {
      "name": "Nye Metoder",
      "fullName": "National System for Managed Introduction of New Health Technologies",
      "localName": "Nye metoder",
      "role": "新技術導入評価",
      "url": "https://www.nyemetoder.no/en/english/",
      "isPrimary": false
    },
    {
      "name": "HELFO",
      "fullName": "Norwegian Health Economics Administration",
      "localName": null,
      "role": "Blue Prescription償還管理",
      "url": "https://www.helfo.no/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "EU MDR/IVDR Notified Body（ノルウェー国内1機関）",
    "description": "DNV Product Assurance AS（NB 2460）がMDR・IVDR双方指定。EEA経由NANDO登録。IVDR指定は2025年5月。",
    "bodies": [
      {
        "nb": "2460",
        "name": "DNV Product Assurance AS",
        "url": "https://www.dnv.com/",
        "mdr": true,
        "ivdr": true
      }
    ]
  },
  "deviceDefinition": {
    "legalDefinition": "EU MDR Article 2(1) がEEA経由で適用。",
    "scope": "IVD は IVDR。SaMD・AI/ML も対象。",
    "notes": "独自追加定義なし。"
  },
  "primaryLaw": {
    "title": "Lov om medisinsk utstyr (Medical Devices Act)",
    "originalTitle": "LOV-2020-06-07-37",
    "enacted": "2020-06-07",
    "lastAmended": "2024（EEA経由 Regulation (EU) 2024/1860 経過措置延長）",
    "url": "https://www.dmp.no/en/medical-devices/guidance-and-regulations/the-legislation-for-medical-devices",
    "description": "MDR/IVDRをノルウェー法に組み込む国内法。"
  },
  "implementingRegulations": [
    {
      "title": "Forskrift om medisinsk utstyr",
      "date": "2021",
      "url": "https://www.dmp.no/en/medical-devices/guidance-and-regulations/the-legislation-for-medical-devices",
      "description": "MDR/IVDR国内実施規則。言語要件・登録手続。",
      "category": "国内実施規則"
    }
  ],
  "relatedLaws": [
    {
      "title": "Personopplysningsloven + GDPR",
      "category": "データ保護",
      "enacted": "2018",
      "url": "https://lovdata.no/dokument/NL/lov/2018-06-15-38",
      "relevance": "EEA経由GDPR適用。"
    }
  ],
  "classification": {
    "system": "EU MDR 4クラス制（EEA経由）",
    "basis": "EU MDR Annex VIII をEEA経由で適用。",
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
      "EU MDR Annex VIII EEA経由適用"
    ],
    "totalProductCodes": "EU CND"
  },
  "conformityAssessment": {
    "overview": "EU MDR 適合性評価がEEA経由で適用。国内追加審査なし。DMP登録必要。",
    "routes": [
      {
        "name": "EU MDR Conformity Assessment (EEA)",
        "nameJa": "EU MDR 適合性評価（EEA経由）",
        "applicableClasses": [
          "全クラス"
        ],
        "description": "Annex IX〜XI。EUプロファイル参照。",
        "subtypes": [],
        "avgReviewTime": "EUプロファイル参照",
        "fee": "NBにより異なる",
        "url": "https://www.dmp.no/en/medical-devices/development-and-manufacturing/conformity-assessment"
      }
    ]
  },
  "electronicSubmission": {
    "system": "EUDAMED + DMP国内登録",
    "url": "https://www.dmp.no/en/medical-devices/norwegian-register-for-devices-and-eudamed/eudamed",
    "description": "EEA国としてEUDAMEDに参加。任意登録開始済み、2026年5月28日義務化。DMP国内登録も必要。",
    "mandatory": true
  },
  "udi": {
    "required": true,
    "system": "EU UDI（EEA経由）— EUDAMED",
    "description": "MDR UDI要件がEEA経由で適用。",
    "url": "https://www.dmp.no/en/medical-devices/norwegian-register-for-devices-and-eudamed/eudamed",
    "timeline": "EUDAMED義務化: 2026年5月28日"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "EU Vigilance — DMP",
      "mandatory": true,
      "url": "https://www.dmp.no/en/medical-devices/reporting-of-serious-incidents-involving-medical-devices/how-to-report-a-serious-incident",
      "description": "重篤有害事象をDMPに報告。MDR Article 87-92。"
    },
    "recalls": {
      "authority": "DMP",
      "description": "FSCA/FSNはDMPに通知。",
      "url": "https://www.dmp.no/en/medical-devices/reporting-of-serious-incidents-involving-medical-devices/how-to-report-a-field-safety-corrective-action"
    },
    "surveillance": "EU MDR PMS/PSUR/PMCF EEA経由適用。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "DMP",
    "name": "CFS",
    "description": "DMPがCFSを発行。",
    "processingTime": "要確認",
    "url": "https://www.dmp.no/en/medical-devices/development-and-manufacturing/conformity-assessment/free-sales-certificate"
  },
  "reimbursement": {
    "system": "Nye Metoder（専門医療）+ HELFO Blue Prescription（外来）+ 4地域保健局",
    "authority": "DMP（HTA）/ Nye Metoder / HELFO / 4地域保健局",
    "description": "病院用機器はNye Metoder でHTA導入決定。DMPがSTA実施。外来特定機器はHELFO Blue Prescription（§5品目リスト）。2025年1月EU HTAR参加。JNHB創設メンバー。",
    "codingSystems": [
      "DRG/NordDRG",
      "HELFO製品価格リスト"
    ],
    "url": "https://www.nyemetoder.no/en/english/"
  },
  "marketingRules": {
    "authority": "DMP",
    "description": "ノルウェー語ラベリング・IFU必須。当局文書はノルウェー語/英語。適合性評価文書は英語。",
    "keyRules": [
      "ノルウェー語ラベリング・IFU必須",
      "当局文書: ノルウェー語/英語",
      "技術文書は英語"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "MDSAP非参加。"
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
      "date": "2024-01",
      "title": "SLV → DMP改組",
      "description": "Statens legemiddelverk (SLV) が Direktoratet for medisinske produkter (DMP) に改組。医療機器メソッド評価・ワクチン調達等の新機能を追加。"
    },
    {
      "date": "2025-01",
      "title": "EU HTAR参加",
      "description": "EU HTA Regulation枠組みにEEA国として参加。JCA貢献開始。"
    },
    {
      "date": "2025-05",
      "title": "DNV NB 2460 IVDR指定",
      "description": "DNV Product Assurance AS が IVDR Notified Body として追加指定。NANDO 17番目のIVDR NB。"
    },
    {
      "date": "2025-11",
      "title": "EUDAMED義務化日程確定",
      "description": "EEA国としてEUDAMED 4モジュール2026年5月28日義務化。任意登録中。"
    }
  ],
  "lastUpdated": "2026-04-06",
  "verified": "2026-04-06"
};
