// スウェーデン (Sweden)
export default {
  "code": "SWE",
  "country": "スウェーデン",
  "countryEn": "Sweden",
  "region": "Europe",
  "flag": "🇸🇪",
  "legalSystemOverview": {
    "type": "EU加盟国（MDR/IVDR 直接適用）",
    "description": "スウェーデンはEU加盟国であり、Regulation (EU) 2017/745（MDR）および Regulation (EU) 2017/746（IVDR）が直接適用される。国内補完法として Act (2021:600) with supplementary provisions to the EU Regulations on medical devices および Ordinance (2021:631) が制定されている。Läkemedelsverket（スウェーデン医薬品庁 / Swedish Medical Products Agency, MPA）がNCA（National Competent Authority）として市場監視・ビジランス・臨床試験監督を担う。",
    "keyCharacteristics": [
      "EU MDR/IVDR が直接適用",
      "Läkemedelsverket がNCAとして市場監視・ビジランスを担当",
      "Act (2021:600) + Ordinance (2021:631) による国内補完",
      "ラベリング・使用説明書はスウェーデン語必須",
      "21の県議会（Region）が医療サービス提供・医療機器調達を管轄",
      "FINOSE/JNHB（北欧HTA協力）への参加"
    ]
  },
  "authorities": [
    {
      "name": "Läkemedelsverket (MPA)",
      "fullName": "Swedish Medical Products Agency",
      "localName": "Läkemedelsverket",
      "role": "NCA: 医療機器の市場監視・ビジランス・臨床試験監督・登録管理",
      "url": "https://www.lakemedelsverket.se/en/medical-devices",
      "isPrimary": true
    },
    {
      "name": "TLV",
      "fullName": "Dental and Pharmaceutical Benefits Agency",
      "localName": "Tandvårds- och läkemedelsförmånsverket",
      "role": "医療機器の償還評価（消耗品）・HTA評価",
      "url": "https://www.tlv.se/in-english.html",
      "isPrimary": false
    },
    {
      "name": "IVO",
      "fullName": "Health and Social Care Inspectorate",
      "localName": "Inspektionen för vård och omsorg",
      "role": "医療機関における医療機器使用の監督",
      "url": "https://www.ivo.se/en/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "EU MDR Notified Body 制度（スウェーデン国内に2機関指定）",
    "description": "Intertek Medical Notified Body AB（NB 2862）およびRISE Medical Notified Body AB（NB 3033）がMDR指定。いずれもIVDR未指定。",
    "bodies": [
      {
        "nb": "2862",
        "name": "Intertek Medical Notified Body AB",
        "url": "https://www.intertek.se/",
        "mdr": true,
        "ivdr": false
      },
      {
        "nb": "3033",
        "name": "RISE Medical Notified Body AB",
        "url": "https://www.ri.se/",
        "mdr": true,
        "ivdr": false
      }
    ]
  },
  "deviceDefinition": {
    "legalDefinition": "EU MDR Article 2(1) の定義がそのまま適用。",
    "scope": "IVD は IVDR で別途規定。SaMD・AI/ML 搭載機器も対象。美容目的製品（Annex XVI）も適用。",
    "notes": "MDR の定義がそのまま国内法に適用。追加的な定義変更なし。"
  },
  "primaryLaw": {
    "title": "Regulation (EU) 2017/745 — Medical Devices Regulation (MDR)",
    "originalTitle": null,
    "enacted": "2017（EU採択）/ 2021年5月26日適用",
    "lastAmended": "2025（Regulation (EU) 2025/2457）",
    "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32017R0745",
    "description": "EU MDR がスウェーデンに直接適用。Act (2021:600) が国内補完法。"
  },
  "implementingRegulations": [
    {
      "title": "Act (2021:600) with supplementary provisions to the EU Regulations on medical devices",
      "date": "2021-05-26",
      "url": "https://www.lakemedelsverket.se/en/medical-devices/regulation",
      "description": "MDR/IVDR 国内補完法。NCA権限・罰則・言語要件・登録義務。",
      "category": "国内補完法"
    },
    {
      "title": "Ordinance (2021:631)",
      "date": "2021-05-26",
      "url": "https://www.lakemedelsverket.se/en/medical-devices/regulation",
      "description": "Act (2021:600) の下位法令。",
      "category": "国内補完法令"
    },
    {
      "title": "HSLF-FS 2021:32（MPA Regulation）",
      "date": "2021",
      "url": "https://www.lakemedelsverket.se/en/medical-devices/regulation",
      "description": "登録手続・言語要件の具体化。",
      "category": "当局規則"
    }
  ],
  "relatedLaws": [
    {
      "title": "GDPR (Regulation (EU) 2016/679)",
      "category": "データ保護",
      "enacted": "2018",
      "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679",
      "relevance": "健康データに適用。Patientdatalagen も併存。"
    },
    {
      "title": "AI Act — Regulation (EU) 2024/1689",
      "category": "人工知能",
      "enacted": "2024",
      "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32024R1689",
      "relevance": "AI搭載医療機器はHigh-Risk AI System。"
    }
  ],
  "classification": {
    "system": "EU MDR 4クラス制（Class I / IIa / IIb / III）",
    "basis": "EU MDR Annex VIII の22分類規則がそのまま適用。",
    "classes": [
      {
        "name": "Class I",
        "nameJa": "クラスI",
        "riskLevel": "低",
        "description": "低リスク。自己宣言（Im/Is/Ir除く）。",
        "examples": [
          "弾性包帯",
          "聴診器",
          "車椅子"
        ],
        "approvalPath": "自己宣言"
      },
      {
        "name": "Class IIa",
        "nameJa": "クラスIIa",
        "riskLevel": "中低",
        "description": "中低リスク。NB関与。",
        "examples": [
          "補聴器",
          "超音波装置",
          "コンタクトレンズ"
        ],
        "approvalPath": "Notified Body審査"
      },
      {
        "name": "Class IIb",
        "nameJa": "クラスIIb",
        "riskLevel": "中高",
        "description": "中高リスク。NB詳細審査。",
        "examples": [
          "人工呼吸器",
          "血液透析装置",
          "輸液ポンプ"
        ],
        "approvalPath": "Notified Body審査"
      },
      {
        "name": "Class III",
        "nameJa": "クラスIII",
        "riskLevel": "高",
        "description": "最高リスク。",
        "examples": [
          "人工心臓弁",
          "冠動脈ステント",
          "乳房インプラント"
        ],
        "approvalPath": "NB審査 + Expert Panel相談"
      }
    ],
    "rules": [
      "EU MDR Annex VIII の22分類規則を直接適用"
    ],
    "totalProductCodes": "EU CND コード"
  },
  "conformityAssessment": {
    "overview": "EU MDR に基づく適合性評価がそのまま適用。国内追加の市販前審査なし。Läkemedelsverket への事業者登録が必要。",
    "routes": [
      {
        "name": "EU MDR Conformity Assessment",
        "nameJa": "EU MDR 適合性評価",
        "applicableClasses": [
          "全クラス"
        ],
        "description": "EU MDR Annex IX〜XI。詳細はEUプロファイル参照。",
        "subtypes": [],
        "avgReviewTime": "EUプロファイル参照",
        "fee": "Notified Body により異なる",
        "url": "https://www.lakemedelsverket.se/en/medical-devices/sale/market-access"
      }
    ]
  },
  "electronicSubmission": {
    "system": "EUDAMED + Läkemedelsverket 国内登録",
    "url": "https://www.lakemedelsverket.se/en/medical-devices/manufacture/registration/registration-at-the-swedish-mpa",
    "description": "EUDAMED + 国内事業者登録。EUDAMED 4モジュール義務化: 2026年5月28日。",
    "mandatory": true
  },
  "udi": {
    "required": true,
    "system": "EU UDI System — EUDAMED",
    "description": "EU MDR Article 27-29 UDI 要件がそのまま適用。",
    "url": "https://ec.europa.eu/tools/eudamed/",
    "timeline": "EUDAMED義務化: 2026年5月28日"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "EU Vigilance System — Läkemedelsverket",
      "mandatory": true,
      "url": "https://www.lakemedelsverket.se/en/medical-devices",
      "description": "重篤有害事象をLäkemedelsverketに報告義務。MDR Article 87-92。"
    },
    "recalls": {
      "authority": "Läkemedelsverket",
      "description": "FSCA/FSNはLäkemedelsverketに通知。",
      "url": "https://www.lakemedelsverket.se/en/medical-devices"
    },
    "surveillance": "EU MDR PMS/PSUR/PMCF要件がそのまま適用。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "Läkemedelsverket",
    "name": "Certificate of Free Sale (CFS)",
    "description": "Läkemedelsverket がCFSを発行。",
    "processingTime": "要確認",
    "url": "https://www.lakemedelsverket.se/en/medical-devices"
  },
  "reimbursement": {
    "system": "県議会（Region）ベース + TLV 償還評価",
    "authority": "TLV / 21の県議会（Region）",
    "description": "21の県議会（Region）が医療提供・調達を管轄。TLV は消耗品（ストーマ用品、自己測定機器等）の償還決定・HTA評価。病院用高額機器は各Region独自判断。JNHB（旧FINOSE）参加。",
    "codingSystems": [
      "TLV 製品グループコード",
      "NordDRG"
    ],
    "url": "https://www.tlv.se/in-english.html"
  },
  "marketingRules": {
    "authority": "Läkemedelsverket",
    "description": "MDR Article 7 虚偽広告禁止。Act (2021:600) + LVFS 2009:6 に基づく広告規制。",
    "keyRules": [
      "スウェーデン語ラベリング・IFU必須",
      "当局提出はスウェーデン語/英語",
      "MDR Article 7 虚偽広告禁止"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "EU加盟国としてMDSAP非参加。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "EU MDR QMS要件に基づき実質必須。EN ISO 13485:2016。"
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
      "notes": "EN IEC 60601 シリーズ。"
    },
    "others": []
  },
  "recentDevelopments": [
    {
      "date": "2024",
      "title": "JNHB（旧FINOSE）拡大",
      "description": "FINOSEが2023年デンマーク、2024年アイスランド追加でJNHBに改称。"
    },
    {
      "date": "2024",
      "title": "EUDAMED義務化準備",
      "description": "EUDAMED 4モジュール2026年5月28日義務化。"
    }
  ],
  "lastUpdated": "2026-04-02",
  "verified": null
};
