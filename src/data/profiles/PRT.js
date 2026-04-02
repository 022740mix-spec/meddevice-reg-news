// ポルトガル (Portugal)
export default {
  "code": "PRT",
  "country": "ポルトガル",
  "countryEn": "Portugal",
  "region": "Europe",
  "flag": "🇵🇹",
  "legalSystemOverview": {
    "type": "EU加盟国（MDR/IVDR 直接適用）",
    "description": "ポルトガルはEU加盟国であり、Regulation (EU) 2017/745（MDR）および Regulation (EU) 2017/746（IVDR）が直接適用される。国内補完法として Decree-Law No. 145/2009（改正版）が適用されている。Infarmed（国立医薬品・医療製品局 / National Authority of Medicines and Health Products）がNCA（National Competent Authority）として市場監視・ビジランス・臨床試験監督を担う。",
    "keyCharacteristics": [
      "EU MDR/IVDR が直接適用",
      "Infarmed がNCAとして市場監視・ビジランスを担当",
      "Decree-Law No. 145/2009（改正版）による国内補完",
      "ラベリング・使用説明書はポルトガル語必須",
      "SNS（国民保健サービス）が公的医療を提供",
      "INFARMED が医療機器の価格・償還決定にも関与"
    ]
  },
  "authorities": [
    {
      "name": "Infarmed",
      "fullName": "National Authority of Medicines and Health Products",
      "localName": "Autoridade Nacional do Medicamento e Produtos de Saúde, I.P.",
      "role": "NCA: 医療機器の市場監視・ビジランス・臨床試験監督・登録管理",
      "url": "https://www.infarmed.pt/",
      "isPrimary": true
    },
    {
      "name": "ACSS",
      "fullName": "Central Administration of the Health System",
      "localName": "Administração Central do Sistema de Saúde",
      "role": "SNS管理・病院への医療機器調達",
      "url": "https://www.acss.min-saude.pt/",
      "isPrimary": false
    },
    {
      "name": "MS",
      "fullName": "Ministry of Health",
      "localName": "Ministério da Saúde",
      "role": "医療政策・法制度策定",
      "url": "https://www.sns.gov.pt/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "EU MDR Notified Body 制度（ポルトガル国内に指定NB無し — 他EU加盟国のNBを利用）",
    "description": "2026年4月時点でポルトガル国内にMDR/IVDR指定のNotified Bodyは無い。製造業者は他EU加盟国のNBを利用。",
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
    "description": "EU MDR がポルトガルに直接適用。Decree-Law No. 145/2009（改正版）が国内補完法。"
  },
  "implementingRegulations": [
    {
      "title": "Decree-Law No. 145/2009（改正版）",
      "date": "2009（原版）/ 2021改正",
      "url": "https://www.infarmed.pt/",
      "description": "MDR/IVDR 国内補完法令。NCA権限・言語要件・登録義務・罰則を規定。",
      "category": "国内補完法令"
    },
    {
      "title": "Portaria No. 342/2021",
      "date": "2021",
      "url": "https://www.infarmed.pt/",
      "description": "医療機器登録手数料規則。",
      "category": "手数料規則"
    }
  ],
  "relatedLaws": [
    {
      "title": "GDPR (Regulation (EU) 2016/679)",
      "category": "データ保護",
      "enacted": "2018",
      "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679",
      "relevance": "健康データに適用。Lei No. 58/2019（GDPR国内実施法）も併存。"
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
    "overview": "EU MDR に基づく適合性評価がそのまま適用。国内追加の市販前審査なし。Infarmed への事業者・機器登録が必要。",
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
        "url": "https://www.infarmed.pt/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "EUDAMED + Infarmed 国内登録",
    "url": "https://www.infarmed.pt/",
    "description": "EUDAMED + Infarmed 国内登録システム。EUDAMED 4モジュール義務化: 2026年5月28日。",
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
      "system": "EU Vigilance System — Infarmed",
      "mandatory": true,
      "url": "https://www.infarmed.pt/",
      "description": "重篤有害事象をInfarmedに報告義務。MDR Article 87-92。"
    },
    "recalls": {
      "authority": "Infarmed",
      "description": "FSCA/FSNはInfarmedに通知。",
      "url": "https://www.infarmed.pt/"
    },
    "surveillance": "EU MDR PMS/PSUR/PMCF要件がそのまま適用。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "Infarmed",
    "name": "Certificate of Free Sale (CFS)",
    "description": "Infarmed がCFSを発行。",
    "processingTime": "要確認",
    "url": "https://www.infarmed.pt/"
  },
  "reimbursement": {
    "system": "SNS（国民保健サービス）— 税財源",
    "authority": "Infarmed / ACSS / MS",
    "description": "ポルトガルはSNS（Serviço Nacional de Saúde）による税財源の公的医療制度。Infarmed が医療機器の価格設定・償還に関与。病院用機器はSPMS（Serviços Partilhados do Ministério da Saúde）による集中調達。",
    "codingSystems": [
      "GDH (Grupos de Diagnóstico Homogéneos / PT-DRG)"
    ],
    "url": "https://www.infarmed.pt/"
  },
  "marketingRules": {
    "authority": "Infarmed",
    "description": "MDR Article 7 虚偽広告禁止。国内広告規制法が併存。",
    "keyRules": [
      "ポルトガル語ラベリング・IFU必須",
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
      "description": "2021年5月26日よりEU MDRが適用開始。"
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
