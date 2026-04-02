// チェコ (Czech Republic)
export default {
  "code": "CZE",
  "country": "チェコ",
  "countryEn": "Czech Republic",
  "region": "Europe",
  "flag": "🇨🇿",
  "legalSystemOverview": {
    "type": "EU加盟国（MDR/IVDR 直接適用）",
    "description": "チェコはEU加盟国であり、Regulation (EU) 2017/745（MDR）および Regulation (EU) 2017/746（IVDR）が直接適用される。国内補完法として Act No. 375/2022 Sb. on Medical Devices（Zákon o zdravotnických prostředcích）が制定されている。SÚKL（チェコ国立医薬品管理局 / State Institute for Drug Control）がNCA（National Competent Authority）として市場監視・ビジランス・臨床試験監督を担う。",
    "keyCharacteristics": [
      "EU MDR/IVDR が直接適用",
      "SÚKL がNCAとして市場監視・ビジランスを担当",
      "Act No. 375/2022 Sb. による国内補完",
      "ラベリング・使用説明書はチェコ語必須",
      "SÚKL が医療機器登録データベース（RZPRO）を運営",
      "VZP（公的保険基金）等による保険償還制度"
    ]
  },
  "authorities": [
    {
      "name": "SÚKL",
      "fullName": "State Institute for Drug Control",
      "localName": "Státní ústav pro kontrolu léčiv",
      "role": "NCA: 医療機器の市場監視・ビジランス・臨床試験監督・登録管理",
      "url": "https://www.sukl.cz/",
      "isPrimary": true
    },
    {
      "name": "VZP ČR",
      "fullName": "General Health Insurance Company of the Czech Republic",
      "localName": "Všeobecná zdravotní pojišťovna ČR",
      "role": "公的医療保険・医療機器償還管理",
      "url": "https://www.vzp.cz/",
      "isPrimary": false
    },
    {
      "name": "MZ ČR",
      "fullName": "Ministry of Health of the Czech Republic",
      "localName": "Ministerstvo zdravotnictví ČR",
      "role": "医療政策・法制度策定",
      "url": "https://www.mzcr.cz/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "EU MDR Notified Body 制度（チェコ国内に指定NB）",
    "description": "EZÚ（Elektrotechnický zkušební ústav, NB 1014）がMDR/IVDR指定Notified Bodyとして活動。",
    "bodies": [
      {
        "nb": "1014",
        "name": "EZÚ (Elektrotechnický zkušební ústav)",
        "url": "https://www.ezu.cz/",
        "mdr": true,
        "ivdr": true
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
    "description": "EU MDR がチェコに直接適用。Act No. 375/2022 Sb. が国内補完法。"
  },
  "implementingRegulations": [
    {
      "title": "Act No. 375/2022 Sb. on Medical Devices (Zákon o zdravotnických prostředcích)",
      "date": "2022-12-01",
      "url": "https://www.sukl.cz/",
      "description": "MDR/IVDR 国内補完法。NCA権限・罰則・言語要件・登録義務・臨床試験手続。",
      "category": "国内補完法"
    },
    {
      "title": "Decree No. 377/2022 Sb.",
      "date": "2022-12-01",
      "url": "https://www.sukl.cz/",
      "description": "Act No. 375/2022 Sb. の施行細則。登録手続の具体的規定。",
      "category": "施行細則"
    }
  ],
  "relatedLaws": [
    {
      "title": "GDPR (Regulation (EU) 2016/679)",
      "category": "データ保護",
      "enacted": "2018",
      "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679",
      "relevance": "健康データに適用。Act No. 110/2019 Sb.（個人情報保護法）も併存。"
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
    "overview": "EU MDR に基づく適合性評価がそのまま適用。国内追加の市販前審査なし。SÚKL への事業者・機器登録（RZPRO）が必要。",
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
        "url": "https://www.sukl.cz/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "EUDAMED + SÚKL RZPRO",
    "url": "https://www.sukl.cz/",
    "description": "EUDAMED + SÚKL 国内登録データベース（RZPRO）。EUDAMED 4モジュール義務化: 2026年5月28日。",
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
      "system": "EU Vigilance System — SÚKL",
      "mandatory": true,
      "url": "https://www.sukl.cz/",
      "description": "重篤有害事象をSÚKLに報告義務。MDR Article 87-92。"
    },
    "recalls": {
      "authority": "SÚKL",
      "description": "FSCA/FSNはSÚKLに通知。",
      "url": "https://www.sukl.cz/"
    },
    "surveillance": "EU MDR PMS/PSUR/PMCF要件がそのまま適用。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "SÚKL",
    "name": "Certificate of Free Sale (CFS)",
    "description": "SÚKL がCFSを発行。",
    "processingTime": "要確認",
    "url": "https://www.sukl.cz/"
  },
  "reimbursement": {
    "system": "公的健康保険制度（法定保険）",
    "authority": "MZ ČR / SÚKL / VZP ČR 他保険基金",
    "description": "チェコは法定健康保険制度。VZP ČR を含む7つの健康保険基金が運営。医療機器の償還カテゴリーはSÚKL が管理し、保険適用の可否・上限額を決定。高額医療機器（特に病院用）は別途予算配分。",
    "codingSystems": [
      "SÚKL 償還カテゴリーコード",
      "CZ-DRG"
    ],
    "url": "https://www.sukl.cz/"
  },
  "marketingRules": {
    "authority": "SÚKL",
    "description": "MDR Article 7 虚偽広告禁止。Act No. 375/2022 Sb. に基づく広告規制。",
    "keyRules": [
      "チェコ語ラベリング・IFU必須",
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
      "date": "2022",
      "title": "Act No. 375/2022 Sb. 施行",
      "description": "MDR/IVDR の国内補完法として新法を施行。従来の Act No. 268/2014 Sb. を置換。"
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
