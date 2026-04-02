// ハンガリー (Hungary)
export default {
  "code": "HUN",
  "country": "ハンガリー",
  "countryEn": "Hungary",
  "region": "Europe",
  "flag": "🇭🇺",
  "legalSystemOverview": {
    "type": "EU加盟国（MDR/IVDR 直接適用）",
    "description": "ハンガリーはEU加盟国であり、Regulation (EU) 2017/745（MDR）および Regulation (EU) 2017/746（IVDR）が直接適用される。国内補完法として Government Decree 4/2009 (III.17.) EüM（医療機器に関する保健大臣令）が改正適用されている。OGYÉI（国立薬学・食品衛生研究所 / National Institute of Pharmacy and Nutrition）がNCA（National Competent Authority）として市場監視・ビジランス・臨床試験監督を担う。",
    "keyCharacteristics": [
      "EU MDR/IVDR が直接適用",
      "OGYÉI がNCAとして市場監視・ビジランスを担当",
      "Government Decree 4/2009 (III.17.) EüM 改正による国内補完",
      "ラベリング・使用説明書はハンガリー語必須",
      "NEAK（国民健康保険基金管理局）が保険償還を管理",
      "中東欧での医療機器ハブとしての地位"
    ]
  },
  "authorities": [
    {
      "name": "OGYÉI",
      "fullName": "National Institute of Pharmacy and Nutrition",
      "localName": "Országos Gyógyszerészeti és Élelmezés-egészségügyi Intézet",
      "role": "NCA: 医療機器の市場監視・ビジランス・臨床試験監督・登録管理",
      "url": "https://www.ogyei.gov.hu/",
      "isPrimary": true
    },
    {
      "name": "NEAK",
      "fullName": "National Health Insurance Fund Management",
      "localName": "Nemzeti Egészségbiztosítási Alapkezelő",
      "role": "医療機器の保険償還管理",
      "url": "https://www.neak.gov.hu/",
      "isPrimary": false
    },
    {
      "name": "EMMI / BM",
      "fullName": "Ministry of Interior (Health policy)",
      "localName": "Belügyminisztérium（Egészségügyért felelős）",
      "role": "医療政策・法制度策定",
      "url": "https://www.kormany.hu/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "EU MDR Notified Body 制度（ハンガリー国内に指定NB無し — 他EU加盟国のNBを利用）",
    "description": "2026年4月時点でハンガリー国内にMDR/IVDR指定のNotified Bodyは無い。製造業者は他EU加盟国のNBを利用。",
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
    "description": "EU MDR がハンガリーに直接適用。Government Decree 4/2009 (III.17.) EüM 改正が国内補完法。"
  },
  "implementingRegulations": [
    {
      "title": "Government Decree 4/2009 (III.17.) EüM on Medical Devices（改正版）",
      "date": "2009（原版）/ 2021改正",
      "url": "https://www.ogyei.gov.hu/",
      "description": "MDR/IVDR 国内補完法令。NCA権限・言語要件・登録義務・罰則を規定。",
      "category": "国内補完法令"
    },
    {
      "title": "Act CLIV of 1997 on Health（改正版）",
      "date": "1997（原版）/ 随時改正",
      "url": "https://www.kormany.hu/",
      "description": "保健法。医療機器の使用に関する一般的枠組み。",
      "category": "保健法"
    }
  ],
  "relatedLaws": [
    {
      "title": "GDPR (Regulation (EU) 2016/679)",
      "category": "データ保護",
      "enacted": "2018",
      "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679",
      "relevance": "健康データに適用。Act CXII of 2011（情報自己決定法）も併存。"
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
    "overview": "EU MDR に基づく適合性評価がそのまま適用。国内追加の市販前審査なし。OGYÉI への事業者・機器登録が必要。",
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
        "url": "https://www.ogyei.gov.hu/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "EUDAMED + OGYÉI 国内登録",
    "url": "https://www.ogyei.gov.hu/",
    "description": "EUDAMED + OGYÉI 国内登録。EUDAMED 4モジュール義務化: 2026年5月28日。",
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
      "system": "EU Vigilance System — OGYÉI",
      "mandatory": true,
      "url": "https://www.ogyei.gov.hu/",
      "description": "重篤有害事象をOGYÉIに報告義務。MDR Article 87-92。"
    },
    "recalls": {
      "authority": "OGYÉI",
      "description": "FSCA/FSNはOGYÉIに通知。",
      "url": "https://www.ogyei.gov.hu/"
    },
    "surveillance": "EU MDR PMS/PSUR/PMCF要件がそのまま適用。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "OGYÉI",
    "name": "Certificate of Free Sale (CFS)",
    "description": "OGYÉI がCFSを発行。",
    "processingTime": "要確認",
    "url": "https://www.ogyei.gov.hu/"
  },
  "reimbursement": {
    "system": "国民健康保険基金（単一支払者制度）",
    "authority": "NEAK / OGYÉI",
    "description": "ハンガリーは単一支払者型の国民健康保険制度（NEAK）。医療機器は「gyógyászati segédeszköz」（治療補助器具）カテゴリーで償還管理。NEAK が償還カテゴリー・患者自己負担率を決定。高額病院用機器は別途調達。",
    "codingSystems": [
      "NEAK 償還コード",
      "HUN-DRG (HBCS)"
    ],
    "url": "https://www.neak.gov.hu/"
  },
  "marketingRules": {
    "authority": "OGYÉI",
    "description": "MDR Article 7 虚偽広告禁止。国内広告規制法が併存。",
    "keyRules": [
      "ハンガリー語ラベリング・IFU必須",
      "MDR Article 7 虚偽広告禁止",
      "登録済み機器のみ販売可"
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
      "date": "2021",
      "title": "MDR 適用開始",
      "description": "2021年5月26日よりEU MDRが適用開始。OGYÉI が準備を完了。"
    },
    {
      "date": "2024",
      "title": "EUDAMED義務化準備",
      "description": "EUDAMED 4モジュール2026年5月28日義務化に向けた準備。"
    }
  ],
  "lastUpdated": "2026-04-02",
  "verified": null
};
