// マルタ (Malta)
export default {
  "code": "MLT",
  "country": "マルタ",
  "countryEn": "Malta",
  "region": "Europe",
  "flag": "🇲🇹",
  "legalSystemOverview": {
    "type": "EU加盟国（MDR/IVDR 直接適用）",
    "description": "マルタはEU加盟国（2004年加盟）であり、Regulation (EU) 2017/745（MDR）および Regulation (EU) 2017/746（IVDR）が直接適用される。国内補完法として Medical Devices Act（Cap. 461）および Subsidiary Legislation 461 が施行されている。MMA（Medicines Authority / マルタ医薬品庁）がNCAとして医療機器の市場監視・ビジランスを管轄する。EU最小の加盟国であるが、規制体制はEU基準に完全準拠。",
    "keyCharacteristics": [
      "EU MDR/IVDR が直接適用",
      "MMA がNCAとして市場監視・ビジランスを担当",
      "Medical Devices Act (Cap. 461) による国内補完",
      "ラベリング・IFU はマルタ語または英語（実務上は英語が主流）",
      "国内にNotified Body なし（EU域内他国のNBを利用）",
      "EU最小加盟国だが規制体制は完全準拠"
    ]
  },
  "authorities": [
    {
      "name": "MMA",
      "fullName": "Medicines Authority",
      "localName": "Awtorità dwar il-Mediċini",
      "role": "NCA: 医療機器の市場監視・ビジランス・臨床試験監督・登録管理",
      "url": "https://www.medicinesauthority.gov.mt/medical-devices",
      "isPrimary": true
    },
    {
      "name": "MFH",
      "fullName": "Ministry for Health",
      "localName": "Ministeru għas-Saħħa",
      "role": "医療機器政策立案・法整備",
      "url": "https://health.gov.mt/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "EU MDR Notified Body 制度（マルタ国内に指定機関なし）",
    "description": "マルタ国内にMDR指定Notified Bodyは存在しない。製造業者はEU域内他国の指定NBを利用する。",
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
    "description": "EU MDR がマルタに直接適用。Medical Devices Act (Cap. 461) が国内補完法。"
  },
  "implementingRegulations": [
    {
      "title": "Medical Devices Act (Cap. 461)",
      "date": "2014（随時改正）",
      "url": "https://legislation.mt/eli/cap/461/eng",
      "description": "MDR/IVDR 国内補完法。NCA権限・罰則・登録義務。",
      "category": "国内補完法"
    },
    {
      "title": "Subsidiary Legislation 461 — Medical Devices Regulations",
      "date": "各年",
      "url": "https://legislation.mt/",
      "description": "登録手続・手数料・ビジランス手続等の施行細則。",
      "category": "施行細則"
    }
  ],
  "relatedLaws": [
    {
      "title": "GDPR (Regulation (EU) 2016/679)",
      "category": "データ保護",
      "enacted": "2018",
      "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679",
      "relevance": "健康データに適用。Data Protection Act (Cap. 586) も併存。"
    },
    {
      "title": "AI Act — Regulation (EU) 2024/1689",
      "category": "人工知能",
      "enacted": "2024",
      "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32024R1689",
      "relevance": "AI搭載医療機器はHigh-Risk AI System。マルタはAI・ブロックチェーン規制の先駆国。"
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
    "overview": "EU MDR に基づく適合性評価がそのまま適用。国内追加の市販前審査なし。MMA への事業者登録が必要。",
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
        "url": "https://www.medicinesauthority.gov.mt/medical-devices"
      }
    ]
  },
  "electronicSubmission": {
    "system": "EUDAMED + MMA 国内登録",
    "url": "https://www.medicinesauthority.gov.mt/",
    "description": "EUDAMED + MMA 事業者登録。EUDAMED 4モジュール義務化: 2026年5月28日。",
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
      "system": "EU Vigilance System — MMA",
      "mandatory": true,
      "url": "https://www.medicinesauthority.gov.mt/",
      "description": "重篤有害事象をMMAに報告義務。MDR Article 87-92。"
    },
    "recalls": {
      "authority": "MMA",
      "description": "FSCA/FSNはMMAに通知。MMAが市場からの回収命令権限を有する。",
      "url": "https://www.medicinesauthority.gov.mt/"
    },
    "surveillance": "EU MDR PMS/PSUR/PMCF要件がそのまま適用。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "MMA",
    "name": "Certificate of Free Sale (CFS)",
    "description": "MMA がCFSを発行。",
    "processingTime": "要確認",
    "url": "https://www.medicinesauthority.gov.mt/"
  },
  "reimbursement": {
    "system": "国家健康サービス（NHS Malta）",
    "authority": "MFH / Government Pharmaceutical Services",
    "description": "マルタは税財源ベースの国家健康サービス（NHS）。公立病院での医療は無料。医療機器は政府調達（Government Pharmaceutical Services）を通じて公立病院に供給。Government Formulary List に掲載された機器が公費でカバー。民間セクターは自費負担。",
    "codingSystems": [
      "Government Formulary List"
    ],
    "url": "https://health.gov.mt/"
  },
  "marketingRules": {
    "authority": "MMA",
    "description": "MDR Article 7 虚偽広告禁止。Medical Devices Act に基づく広告規制。",
    "keyRules": [
      "マルタ語または英語ラベリング・IFU（実務上は英語が主流）",
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
      "description": "Regulation (EU) 2025/2457 による移行期間延長。MDD証書の段階的失効スケジュール適用。"
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
