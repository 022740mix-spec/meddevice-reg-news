// アイルランド (Ireland)
export default {
  "code": "IRL",
  "country": "アイルランド",
  "countryEn": "Ireland",
  "region": "Europe",
  "flag": "🇮🇪",
  "legalSystemOverview": {
    "type": "EU加盟国（MDR/IVDR 直接適用）",
    "description": "アイルランドはEU加盟国。MDR/IVDR直接適用。HPRAがNCA。NSAI (NB 0050) がMDR+IVDR NB。欧州有数の医療機器製造・輸出拠点。英語で対応可能。",
    "keyCharacteristics": [
      "EU MDR/IVDR 直接適用",
      "HPRA がNCA",
      "NSAI がMDR+IVDR NB",
      "英語で対応可能（言語ハードル最小）",
      "欧州有数の医療機器拠点",
      "HIQA がHTA"
    ]
  },
  "authorities": [
    {
      "name": "HPRA",
      "fullName": "Health Products Regulatory Authority",
      "localName": null,
      "role": "NCA: 市場監視・ビジランス・臨床試験・NB監督・登録",
      "url": "https://www.hpra.ie/regulation/medical-devices",
      "isPrimary": true
    },
    {
      "name": "NSAI",
      "fullName": "National Standards Authority of Ireland",
      "localName": null,
      "role": "MDR/IVDR NB (NB 0050)",
      "url": "https://www.nsai.ie/",
      "isPrimary": false
    },
    {
      "name": "HIQA",
      "fullName": "Health Information and Quality Authority",
      "localName": null,
      "role": "HTA評価",
      "url": "https://www.hiqa.ie/areas-we-work/health-technology-assessment",
      "isPrimary": false
    },
    {
      "name": "HSE",
      "fullName": "Health Service Executive",
      "localName": null,
      "role": "公的医療・償還決定",
      "url": "https://www.hse.ie/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "EU MDR/IVDR Notified Body（アイルランド国内1機関）",
    "description": "NSAI (NB 0050) がMDR+IVDR両方指定。MDR指定11番目。",
    "bodies": [
      {
        "nb": "0050",
        "name": "National Standards Authority of Ireland (NSAI)",
        "url": "https://www.nsai.ie/",
        "mdr": true,
        "ivdr": true
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
    "description": "EU MDR 直接適用。S.I. 261/2021が国内補完法。"
  },
  "implementingRegulations": [
    {
      "title": "S.I. No. 261/2021 — Medical Devices Regulations 2021",
      "date": "2021-05-26",
      "url": "https://www.hpra.ie/regulation/medical-devices",
      "description": "HPRA権限（分類・市場監視・臨床試験・執行）。",
      "category": "国内補完法"
    },
    {
      "title": "S.I. No. 691/2021 — Medical Devices (Registration) Regulations 2021",
      "date": "2021",
      "url": "https://www.hpra.ie/regulation/medical-devices/registration",
      "description": "アイルランド拠点事業者のHPRA国内登録。",
      "category": "登録規則"
    }
  ],
  "relatedLaws": [
    {
      "title": "GDPR + Data Protection Act 2018",
      "category": "データ保護",
      "enacted": "2018",
      "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679",
      "relevance": "健康データ。DPC監督。"
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
    "overview": "EU MDR 適合性評価がそのまま適用。HPRA国内登録（S.I. 691/2021）必要。",
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
        "url": "https://www.hpra.ie/regulation/medical-devices/medical-devices-regulation"
      }
    ]
  },
  "electronicSubmission": {
    "system": "EUDAMED + HPRA国内登録",
    "url": "https://www.hpra.ie/regulation/medical-devices/registration",
    "description": "EUDAMED + S.I. 691/2021 HPRA国内登録。",
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
      "system": "EU Vigilance — HPRA",
      "mandatory": true,
      "url": "https://www.hpra.ie/regulation/medical-devices",
      "description": "重篤有害事象をHPRAに報告。"
    },
    "recalls": {
      "authority": "HPRA",
      "description": "FSCA/FSNはHPRAに通知。",
      "url": "https://www.hpra.ie/regulation/medical-devices"
    },
    "surveillance": "EU MDR PMS/PSUR/PMCF適用。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "HPRA",
    "name": "CFS",
    "description": "HPRAがCFSを発行。",
    "processingTime": "要確認",
    "url": "https://www.hpra.ie/regulation/medical-devices"
  },
  "reimbursement": {
    "system": "HSE公的医療 + HIQA HTA",
    "authority": "HSE（償還）/ HIQA（HTA）/ NCPE（薬事経済）",
    "description": "公的医療はHSE提供。HIQA がHTA（2007年Health Act）。病院機器はHSE調達。",
    "codingSystems": [
      "DRG",
      "HSE機器コード"
    ],
    "url": "https://www.hiqa.ie/areas-we-work/health-technology-assessment"
  },
  "marketingRules": {
    "authority": "HPRA",
    "description": "英語で対応可能。アイルランド語は規制上不要。EU加盟国中最も言語ハードルが低い。",
    "keyRules": [
      "英語ラベリング・IFUで対応可",
      "アイルランド語は規制上不要"
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
      "date": "2020-02",
      "title": "NSAI MDR NB指定",
      "description": "EU全体11番目、アイルランド初のMDR NB。"
    },
    {
      "date": "2025-03",
      "title": "HIQA HTAガイドライン改訂",
      "description": "経済評価・BIAガイドライン改訂。"
    }
  ],
  "lastUpdated": "2026-04-02",
  "verified": null
};
