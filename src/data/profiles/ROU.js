// ルーマニア (Romania)
export default {
  "code": "ROU",
  "country": "ルーマニア",
  "countryEn": "Romania",
  "region": "Europe",
  "flag": "🇷🇴",
  "legalSystemOverview": {
    "type": "EU加盟国（MDR/IVDR 直接適用）",
    "description": "ルーマニアはEU加盟国であり、Regulation (EU) 2017/745（MDR）および Regulation (EU) 2017/746（IVDR）が直接適用される。国内補完法として OUG 46/2021（緊急政府令46/2021号）が制定されている。NAMMDR（National Agency for Medicines and Medical Devices of Romania / Agenția Națională a Medicamentului și a Dispozitivelor Medicale din România, ANMDMR）がNCAとして市場監視・ビジランスを管轄する。",
    "keyCharacteristics": [
      "EU MDR/IVDR が直接適用",
      "NAMMDR がNCAとして市場監視・ビジランスを担当",
      "OUG 46/2021 による国内補完",
      "ラベリング・IFU はルーマニア語必須",
      "国内にNotified Body なし（EU域内他国のNBを利用）",
      "EU加盟後も規制体制の近代化が進行中"
    ]
  },
  "authorities": [
    {
      "name": "NAMMDR (ANMDMR)",
      "fullName": "National Agency for Medicines and Medical Devices of Romania",
      "localName": "Agenția Națională a Medicamentului și a Dispozitivelor Medicale din România",
      "role": "NCA: 医療機器の市場監視・ビジランス・臨床試験監督・登録管理",
      "url": "https://www.anm.ro/",
      "isPrimary": true
    },
    {
      "name": "CNAS",
      "fullName": "National Health Insurance House",
      "localName": "Casa Națională de Asigurări de Sănătate",
      "role": "医療保険償還管理",
      "url": "https://www.cnas.ro/",
      "isPrimary": false
    },
    {
      "name": "MS",
      "fullName": "Ministry of Health",
      "localName": "Ministerul Sănătății",
      "role": "医療機器政策立案・法整備",
      "url": "https://www.ms.ro/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "EU MDR Notified Body 制度（ルーマニア国内に指定機関なし）",
    "description": "ルーマニア国内にMDR指定Notified Bodyは存在しない。製造業者はEU域内他国の指定NBを利用する。",
    "bodies": []
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
    "description": "EU MDR がルーマニアに直接適用。OUG 46/2021 が国内補完法。"
  },
  "implementingRegulations": [
    {
      "title": "OUG 46/2021（緊急政府令46/2021号）",
      "date": "2021-05-26",
      "url": "https://www.anm.ro/",
      "description": "MDR/IVDR 国内補完法令。NCA権限・罰則・登録義務。",
      "category": "国内補完法令"
    },
    {
      "title": "HG（政府決定）— 各種施行細則",
      "date": "各年",
      "url": "https://www.anm.ro/",
      "description": "手数料・登録手続等の具体化。",
      "category": "施行細則"
    }
  ],
  "relatedLaws": [
    {
      "title": "GDPR (Regulation (EU) 2016/679)",
      "category": "データ保護",
      "enacted": "2018",
      "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679",
      "relevance": "健康データに適用。Law 190/2018 も併存。"
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
    "overview": "EU MDR に基づく適合性評価がそのまま適用。国内追加の市販前審査なし。NAMMDR への事業者登録が必要。",
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
        "fee": "Notified Body により異なる（EU域内他国のNBを利用）",
        "url": "https://www.anm.ro/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "EUDAMED + NAMMDR 国内登録",
    "url": "https://www.anm.ro/",
    "description": "EUDAMED + NAMMDR 事業者登録。EUDAMED 4モジュール義務化: 2026年5月28日。",
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
      "system": "EU Vigilance System — NAMMDR",
      "mandatory": true,
      "url": "https://www.anm.ro/",
      "description": "重篤有害事象をNAMMDRに報告義務。MDR Article 87-92。"
    },
    "recalls": {
      "authority": "NAMMDR",
      "description": "FSCA/FSNはNAMMDRに通知。NAMMDRが市場からの回収命令権限を有する。",
      "url": "https://www.anm.ro/"
    },
    "surveillance": "EU MDR PMS/PSUR/PMCF要件がそのまま適用。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "NAMMDR",
    "name": "Certificate of Free Sale (CFS)",
    "description": "NAMMDR がCFSを発行。",
    "processingTime": "要確認",
    "url": "https://www.anm.ro/"
  },
  "reimbursement": {
    "system": "社会健康保険制度（CNAS）",
    "authority": "CNAS（Casa Națională de Asigurări de Sănătate）",
    "description": "ルーマニアはCNASによる社会健康保険制度。医療機器の償還は基本パッケージ（pachetul de bază）に含まれるサービスの一部として提供。高額インプラント・補装具はCNAS償還リストに基づく。DRGシステムも導入。",
    "codingSystems": [
      "DRG-RO",
      "CNAS 償還リスト"
    ],
    "url": "https://www.cnas.ro/"
  },
  "marketingRules": {
    "authority": "NAMMDR",
    "description": "MDR Article 7 虚偽広告禁止。OUG 46/2021 に基づく規制。",
    "keyRules": [
      "ルーマニア語ラベリング・IFU必須",
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
      "date": "2025",
      "title": "MDR延長規則適用",
      "description": "Regulation (EU) 2025/2457 による移行期間延長。"
    },
    {
      "date": "2024-2025",
      "title": "規制体制の近代化",
      "description": "NAMMDR の体制強化。EU資金を活用した規制能力構築。"
    }
  ],
  "lastUpdated": "2026-04-02",
  "verified": null
};
