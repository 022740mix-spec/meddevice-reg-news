// オーストリア (Austria)
export default {
  "code": "AUT",
  "country": "オーストリア",
  "countryEn": "Austria",
  "region": "Europe",
  "flag": "🇦🇹",
  "legalSystemOverview": {
    "type": "EU加盟国（MDR/IVDR 直接適用）",
    "description": "オーストリアはEU加盟国。MDR/IVDR直接適用。BASGがNCA。MPG 2021が国内補完法。ドイツ語ラベリング必須。QMD Services (NB 2962) がMDR+IVDR NB。",
    "keyCharacteristics": [
      "EU MDR/IVDR 直接適用",
      "BASG がNCA",
      "MPG 2021 国内補完法",
      "ドイツ語ラベリング・IFU必須",
      "QMD Services (NB 2962) MDR+IVDR NB",
      "AIHTA がHTA",
      "Medizinprodukteregister + 年間手数料"
    ]
  },
  "authorities": [
    {
      "name": "BASG",
      "fullName": "Federal Office for Safety in Health Care",
      "localName": "Bundesamt für Sicherheit im Gesundheitswesen",
      "role": "NCA: 市場監視・ビジランス・臨床試験・NB監督",
      "url": "https://www.basg.gv.at/en/medical-devices",
      "isPrimary": true
    },
    {
      "name": "AGES",
      "fullName": "Austrian Agency for Health and Food Safety",
      "localName": "Agentur für Gesundheit und Ernährungssicherheit",
      "role": "BASG親組織",
      "url": "https://www.ages.at/en/",
      "isPrimary": false
    },
    {
      "name": "AIHTA",
      "fullName": "Austrian Institute for Health Technology Assessment",
      "localName": "旧LBI-HTA",
      "role": "HTA評価。病院給付カタログ支援。",
      "url": "https://aihta.at/",
      "isPrimary": false
    },
    {
      "name": "Dachverband",
      "fullName": "Federation of Austrian Social Insurance Institutions",
      "localName": "旧HVB",
      "role": "社会保険償還管理",
      "url": "https://www.sozialversicherung.at/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "EU MDR/IVDR Notified Body（オーストリア国内1機関）",
    "description": "QMD Services GmbH (NB 2962) がMDR+IVDR両方指定。",
    "bodies": [
      {
        "nb": "2962",
        "name": "QMD Services GmbH",
        "url": "https://www.qmd-services.com/",
        "mdr": true,
        "ivdr": true
      }
    ]
  },
  "deviceDefinition": {
    "legalDefinition": "EU MDR Article 2(1) がそのまま適用。",
    "scope": "IVD は IVDR。SaMD・AI/ML も対象。",
    "notes": "MPG 2021が国内補完法。"
  },
  "primaryLaw": {
    "title": "Regulation (EU) 2017/745 — MDR",
    "originalTitle": null,
    "enacted": "2017 / 2021年5月26日適用",
    "lastAmended": "2025",
    "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32017R0745",
    "description": "EU MDR 直接適用。MPG 2021が国内補完法。"
  },
  "implementingRegulations": [
    {
      "title": "Medizinproduktegesetz 2021 (MPG 2021)",
      "date": "2021-07",
      "url": "https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20011580",
      "description": "BASG権限・罰則・言語・登録・手数料。",
      "category": "国内補完法"
    },
    {
      "title": "Medizinprodukte-Betreiber-Verordnung (MPBV)",
      "date": "2021",
      "url": "https://www.basg.gv.at/en/healthcare-professionals/medical-device-operators",
      "description": "医療機器使用者義務（維持管理・安全検査）。",
      "category": "事業者規制"
    },
    {
      "title": "Medizinprodukte-Gebührenverordnung",
      "date": "2021",
      "url": "https://medizinprodukteregister.at/FAQs",
      "description": "年間手数料。",
      "category": "手数料"
    }
  ],
  "relatedLaws": [
    {
      "title": "GDPR + Datenschutzgesetz",
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
    "overview": "EU MDR 適合性評価がそのまま適用。Medizinprodukteregister国内登録+年間手数料必要。",
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
        "fee": "NB + BASG年間手数料",
        "url": "https://www.basg.gv.at/en/medical-devices"
      }
    ]
  },
  "electronicSubmission": {
    "system": "EUDAMED + Medizinprodukteregister",
    "url": "https://medizinprodukteregister.at/",
    "description": "EUDAMED + 国内登録簿。年間手数料あり。",
    "mandatory": true
  },
  "udi": {
    "required": true,
    "system": "EU UDI — EUDAMED",
    "description": "MDR UDI要件適用。全クラスUDI: 2027年5月。",
    "url": "https://ec.europa.eu/tools/eudamed/",
    "timeline": "EUDAMED義務化: 2026年5月。全クラスUDI: 2027年5月"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "EU Vigilance — BASG",
      "mandatory": true,
      "url": "https://www.basg.gv.at/en/medical-devices",
      "description": "重篤有害事象をBASGに報告。FSNはドイツ語必須。"
    },
    "recalls": {
      "authority": "BASG",
      "description": "FSCA/FSNはBASGに通知。FSNドイツ語。",
      "url": "https://www.basg.gv.at/en/medical-devices"
    },
    "surveillance": "EU MDR PMS/PSUR/PMCF適用。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "BASG",
    "name": "CFS",
    "description": "BASGがCFSを発行。",
    "processingTime": "要確認",
    "url": "https://www.basg.gv.at/en/medical-devices"
  },
  "reimbursement": {
    "system": "社会保険 + AIHTA HTA + 病院給付カタログ（MEL/LKF）",
    "authority": "Dachverband（旧HVB）/ AIHTA / BMASGK",
    "description": "社会保険制度。病院用機器はMELに包含。AIHTAがエビデンス評価。外来機器はDachverband保険給付カタログ。HTAが償還に統合。",
    "codingSystems": [
      "LKF/DRG",
      "MEL",
      "Heilbehelfe/Hilfsmittel"
    ],
    "url": "https://aihta.at/"
  },
  "marketingRules": {
    "authority": "BASG",
    "description": "ドイツ語ラベリング・IFU必須。専門家向けは英語可の場合あり。FSNドイツ語必須。",
    "keyRules": [
      "ドイツ語ラベリング・IFU必須",
      "FSN: ドイツ語",
      "インプラントカードもドイツ語"
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
      "date": "2021-07",
      "title": "MPG 2021施行",
      "description": "MDR/IVDR国内補完法。BASG権限強化・登録・手数料。"
    },
    {
      "date": "2024",
      "title": "EUDAMED義務化準備",
      "description": "2026年5月義務化に向け事業者準備推進。"
    }
  ],
  "lastUpdated": "2026-04-02",
  "verified": null
};
