// ブルガリア (Bulgaria)
export default {
  "code": "BGR",
  "country": "ブルガリア",
  "countryEn": "Bulgaria",
  "region": "Europe",
  "flag": "🇧🇬",
  "legalSystemOverview": {
    "type": "EU加盟国（MDR/IVDR 直接適用）",
    "description": "ブルガリアはEU加盟国であり、Regulation (EU) 2017/745（MDR）および Regulation (EU) 2017/746（IVDR）が直接適用される。国内補完法として Закон за медицинските изделия（ZMI / 医療機器法）の改正版が施行されている。BDA（Bulgarian Drug Agency / Изпълнителна агенция по лекарствата, IAL）がNCAとして市場監視・ビジランスを管轄する。",
    "keyCharacteristics": [
      "EU MDR/IVDR が直接適用",
      "BDA（IAL）がNCAとして市場監視・ビジランスを担当",
      "ZMI（医療機器法）改正による国内補完",
      "ラベリング・IFU はブルガリア語必須",
      "国内にNotified Body なし（EU域内他国のNBを利用）",
      "規制体制はEU加盟以降継続的に強化中"
    ]
  },
  "authorities": [
    {
      "name": "BDA (IAL)",
      "fullName": "Bulgarian Drug Agency",
      "localName": "Изпълнителна агенция по лекарствата (ИАЛ)",
      "role": "NCA: 医療機器の市場監視・ビジランス・臨床試験監督・登録管理",
      "url": "https://www.bda.bg/",
      "isPrimary": true
    },
    {
      "name": "NHIF",
      "fullName": "National Health Insurance Fund",
      "localName": "Национална здравноосигурителна каса (НЗОК)",
      "role": "医療保険償還管理",
      "url": "https://www.nhif.bg/",
      "isPrimary": false
    },
    {
      "name": "MH",
      "fullName": "Ministry of Health",
      "localName": "Министерство на здравеопазването",
      "role": "医療機器政策立案・法整備",
      "url": "https://www.mh.government.bg/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "EU MDR Notified Body 制度（ブルガリア国内に指定機関なし）",
    "description": "ブルガリア国内にMDR指定Notified Bodyは存在しない。製造業者はEU域内他国の指定NBを利用する。",
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
    "description": "EU MDR がブルガリアに直接適用。ZMI（医療機器法）改正が国内補完法。"
  },
  "implementingRegulations": [
    {
      "title": "Закон за медицинските изделия（ZMI / 医療機器法）改正",
      "date": "2021",
      "url": "https://www.bda.bg/",
      "description": "MDR/IVDR 国内補完法。NCA権限・罰則・登録義務・言語要件。",
      "category": "国内補完法"
    },
    {
      "title": "Наредби（省令）— 各種施行細則",
      "date": "各年",
      "url": "https://www.bda.bg/",
      "description": "登録手続・手数料・ビジランス手続等。",
      "category": "施行細則"
    }
  ],
  "relatedLaws": [
    {
      "title": "GDPR (Regulation (EU) 2016/679)",
      "category": "データ保護",
      "enacted": "2018",
      "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679",
      "relevance": "健康データに適用。Закон за защита на личните данни も併存。"
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
    "overview": "EU MDR に基づく適合性評価がそのまま適用。国内追加の市販前審査なし。BDA への事業者登録が必要。",
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
        "url": "https://www.bda.bg/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "EUDAMED + BDA 国内登録",
    "url": "https://www.bda.bg/",
    "description": "EUDAMED + BDA 事業者登録。EUDAMED 4モジュール義務化: 2026年5月28日。",
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
      "system": "EU Vigilance System — BDA",
      "mandatory": true,
      "url": "https://www.bda.bg/",
      "description": "重篤有害事象をBDAに報告義務。MDR Article 87-92。"
    },
    "recalls": {
      "authority": "BDA",
      "description": "FSCA/FSNはBDAに通知。BDAが市場からの回収命令権限を有する。",
      "url": "https://www.bda.bg/"
    },
    "surveillance": "EU MDR PMS/PSUR/PMCF要件がそのまま適用。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "BDA",
    "name": "Certificate of Free Sale (CFS)",
    "description": "BDA がCFSを発行。",
    "processingTime": "要確認",
    "url": "https://www.bda.bg/"
  },
  "reimbursement": {
    "system": "社会健康保険制度（NHIF）",
    "authority": "NHIF（Национална здравноосигурителна каса）",
    "description": "ブルガリアはNHIFによる社会健康保険制度。医療機器の償還は基本パッケージに含まれるサービスの一部。高額インプラントはNHIF対象リスト。補装具は社会支援制度でカバー。DRGベースの病院支払。EU加盟国中で医療支出GDPに対する比率が低く、償還範囲は限定的。",
    "codingSystems": [
      "DRG-BG",
      "NHIF 償還リスト"
    ],
    "url": "https://www.nhif.bg/"
  },
  "marketingRules": {
    "authority": "BDA",
    "description": "MDR Article 7 虚偽広告禁止。ZMI に基づく規制。",
    "keyRules": [
      "ブルガリア語ラベリング・IFU必須",
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
      "title": "規制能力構築",
      "description": "EU支援を活用したBDAの市場監視能力強化。"
    }
  ],
  "lastUpdated": "2026-04-02",
  "verified": null
};
