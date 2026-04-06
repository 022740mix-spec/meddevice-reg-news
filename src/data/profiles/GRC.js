// ギリシャ (Greece)
export default {
  "code": "GRC",
  "country": "ギリシャ",
  "countryEn": "Greece",
  "region": "Europe",
  "flag": "🇬🇷",
  "legalSystemOverview": {
    "type": "EU加盟国（MDR/IVDR 直接適用）",
    "description": "ギリシャはEU加盟国であり、Regulation (EU) 2017/745（MDR）および Regulation (EU) 2017/746（IVDR）が直接適用される。国内補完法令として Joint Ministerial Decision DY8d/130648/2009（改正版）が適用されている。EOF（国立医薬品機構 / National Organisation for Medicines）がNCA（National Competent Authority）として市場監視・ビジランス・臨床試験監督を担う。",
    "keyCharacteristics": [
      "EU MDR/IVDR が直接適用",
      "EOF がNCAとして市場監視・ビジランスを担当",
      "Joint Ministerial Decision DY8d/130648/2009（改正版）による国内補完",
      "ラベリング・使用説明書はギリシャ語必須",
      "EOPYY（国立医療サービス提供機構）が保険償還を管理",
      "Ministerial Decisions による詳細規定"
    ]
  },
  "authorities": [
    {
      "name": "EOF",
      "fullName": "National Organisation for Medicines",
      "localName": "Εθνικός Οργανισμός Φαρμάκων (ΕΟΦ)",
      "role": "NCA: 医療機器の市場監視・ビジランス・臨床試験監督・登録管理",
      "url": "https://www.eof.gr/",
      "isPrimary": true
    },
    {
      "name": "EOPYY",
      "fullName": "National Organization for the Provision of Healthcare Services",
      "localName": "Εθνικός Οργανισμός Παροχής Υπηρεσιών Υγείας",
      "role": "医療機器の保険償還管理",
      "url": "https://www.eopyy.gov.gr/",
      "isPrimary": false
    },
    {
      "name": "MY",
      "fullName": "Ministry of Health",
      "localName": "Υπουργείο Υγείας",
      "role": "医療政策・法制度策定",
      "url": "https://www.moh.gov.gr/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "EU MDR Notified Body 制度（ギリシャ国内に指定NB無し — 他EU加盟国のNBを利用）",
    "description": "2026年4月時点でギリシャ国内にMDR/IVDR指定のNotified Bodyは無い。製造業者は他EU加盟国のNBを利用。",
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
    "description": "EU MDR がギリシャに直接適用。Joint Ministerial Decision DY8d/130648/2009（改正版）が国内補完法令。"
  },
  "implementingRegulations": [
    {
      "title": "Joint Ministerial Decision DY8d/130648/2009（改正版）",
      "date": "2009（原版）/ 2017改正（YA A4g/88159/2017）",
      "url": "https://www.eof.gr/νομικό-πλαίσιο/",
      "description": "MDR/IVDR 国内補完法令。Directive 93/42/EEC を国内法化し、MDR/IVDR適用に合わせて改正。NCA権限・言語要件・登録義務・臨床試験規定（第15条）を規定。",
      "category": "共同省令"
    },
    {
      "title": "Ministerial Decision YA A4g/88159/2017",
      "date": "2017",
      "url": "https://www.eof.gr/category/iatrotexnologika/nomothesia-iatrotexnologikon/",
      "description": "DY8d/130648/2009 の改正省令。MDR/IVDR の国内適用を明確化。",
      "category": "省令"
    }
  ],
  "relatedLaws": [
    {
      "title": "GDPR (Regulation (EU) 2016/679)",
      "category": "データ保護",
      "enacted": "2018",
      "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679",
      "relevance": "健康データに適用。Law 4624/2019（GDPR国内実施法）も併存。"
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
    "overview": "EU MDR に基づく適合性評価がそのまま適用。国内追加の市販前審査なし。EOF への事業者・機器登録が必要。",
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
        "url": "https://www.eof.gr/category/iatrotexnologika/diadikasies-dikaiologitika-iatrotexnologika/",
        "avgReviewTimeSource": null,
        "feeSource": null
      }
    ]
  },
  "electronicSubmission": {
    "system": "EUDAMED + EOF 国内登録",
    "url": "https://www.eof.gr/category/iatrotexnologika/adeia-dynatotitas-parago/",
    "description": "EUDAMED + EOF 国内登録システム。EUDAMED 4モジュール義務化: 2026年5月28日。",
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
      "system": "EU Vigilance System — EOF（Λευκή Κάρτα / White Card）",
      "mandatory": true,
      "url": "https://www.eof.gr/λευκή-κάρτα/",
      "description": "重篤有害事象をEOFに報告義務。MDR Article 87-92。White Card（Λευκή Κάρτα）制度による報告。報告先: vigilancematerial@eof.gr。"
    },
    "recalls": {
      "authority": "EOF",
      "description": "FSCA/FSNはEOFに通知。リコール情報は公開アーカイブで閲覧可能。",
      "url": "https://www.eof.gr/category/iatrotexnologika/anakliseis-iatrotexnologikon-iatrotexnologika/"
    },
    "surveillance": "EU MDR PMS/PSUR/PMCF要件がそのまま適用。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "EOF",
    "name": "Certificate of Free Sale (CFS)",
    "description": "EOF がCFSを発行。",
    "processingTime": "要確認",
    "url": "https://www.eof.gr/category/iatrotexnologika/diadikasies-dikaiologitika-iatrotexnologika/"
  },
  "reimbursement": {
    "system": "EOPYY（国民健康保険）— 社会保険制度",
    "authority": "EOPYY / MY",
    "description": "ギリシャはEOPYY を中核とする社会保険型の公的医療制度。医療機器の償還はEOPYY が管理し、償還リスト（陽性リスト）に基づく。患者自己負担は機器カテゴリーにより異なる。病院用高額機器は別途公的調達。",
    "codingSystems": [
      "EOPYY 償還コード",
      "KEN-DRG"
    ],
    "url": "https://www.eopyy.gov.gr/"
  },
  "marketingRules": {
    "authority": "EOF",
    "description": "MDR Article 7 虚偽広告禁止。国内広告規制法が併存。",
    "keyRules": [
      "ギリシャ語ラベリング・IFU必須",
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
  "lastUpdated": "2026-04-06",
  "verified": "2026-04-06"
};
