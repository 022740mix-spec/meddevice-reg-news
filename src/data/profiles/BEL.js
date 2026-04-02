// ベルギー (Belgium)
export default {
  "code": "BEL",
  "country": "ベルギー",
  "countryEn": "Belgium",
  "region": "Europe",
  "flag": "🇧🇪",
  "legalSystemOverview": {
    "type": "EU加盟国（MDR/IVDR 直接適用）",
    "description": "ベルギーはEU加盟国であり、Regulation (EU) 2017/745（MDR）および Regulation (EU) 2017/746（IVDR）が直接適用される。国内補完法として Loi relative aux dispositifs médicaux（医療機器法、2022年施行）が制定されている。FAMHP（Federal Agency for Medicines and Health Products / Agence fédérale des médicaments et des produits de santé, AFMPS）がNCAとして市場監視・ビジランス・臨床試験を管轄する。",
    "keyCharacteristics": [
      "EU MDR/IVDR が直接適用",
      "FAMHP がNCAとして市場監視・ビジランスを担当",
      "2022年医療機器法による国内補完",
      "ラベリング・IFU はフランス語・オランダ語・ドイツ語の三言語必須（流通地域に応じる）",
      "臨床試験はFAMHP + 倫理委員会の承認が必要",
      "EU MDR Article 97 derogation を積極的に活用（供給不足対応）"
    ]
  },
  "authorities": [
    {
      "name": "FAMHP (AFMPS)",
      "fullName": "Federal Agency for Medicines and Health Products",
      "localName": "Agence fédérale des médicaments et des produits de santé / Federaal Agentschap voor Geneesmiddelen en Gezondheidsproducten",
      "role": "NCA: 医療機器の市場監視・ビジランス・臨床試験監督・登録管理",
      "url": "https://www.famhp.be/en/human_use/health_products/medical_devices_accessories",
      "isPrimary": true
    },
    {
      "name": "INAMI/RIZIV",
      "fullName": "National Institute for Health and Disability Insurance",
      "localName": "Institut national d'assurance maladie-invalidité / Rijksinstituut voor ziekte- en invaliditeitsverzekering",
      "role": "医療機器の償還管理・保険給付",
      "url": "https://www.riziv.fgov.be/",
      "isPrimary": false
    },
    {
      "name": "KCE",
      "fullName": "Belgian Health Care Knowledge Centre",
      "localName": "Federaal Kenniscentrum voor de Gezondheidszorg",
      "role": "医療技術評価（HTA）",
      "url": "https://kce.fgov.be/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "EU MDR Notified Body 制度（ベルギー国内に指定機関あり）",
    "description": "SGS Belgium NV（NB 1639）がMDR指定されている。IVDRについても指定。",
    "bodies": [
      {
        "nb": "1639",
        "name": "SGS Belgium NV",
        "url": "https://www.sgs.com/en-be",
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
    "description": "EU MDR がベルギーに直接適用。2022年医療機器法が国内補完法。"
  },
  "implementingRegulations": [
    {
      "title": "Loi relative aux dispositifs médicaux（医療機器法）",
      "date": "2022-05-22",
      "url": "https://www.famhp.be/en/human_use/health_products/medical_devices_accessories",
      "description": "MDR/IVDR 国内補完法。NCA権限・罰則・登録義務・言語要件。",
      "category": "国内補完法"
    },
    {
      "title": "Arrêté royal du 12 janvier 2024（王令）",
      "date": "2024-01-12",
      "url": "https://www.famhp.be/",
      "description": "医療機器法の施行細則。手数料・登録手続。",
      "category": "国内補完法令"
    }
  ],
  "relatedLaws": [
    {
      "title": "GDPR (Regulation (EU) 2016/679)",
      "category": "データ保護",
      "enacted": "2018",
      "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679",
      "relevance": "健康データに適用。"
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
    "overview": "EU MDR に基づく適合性評価がそのまま適用。国内追加の市販前審査なし。FAMHPへの事業者登録・機器届出が必要。",
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
        "url": "https://www.famhp.be/en/human_use/health_products/medical_devices_accessories"
      }
    ]
  },
  "electronicSubmission": {
    "system": "EUDAMED + FAMHP 国内登録",
    "url": "https://www.famhp.be/",
    "description": "EUDAMED + FAMHP 事業者登録。EUDAMED 4モジュール義務化: 2026年5月28日。",
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
      "system": "EU Vigilance System — FAMHP",
      "mandatory": true,
      "url": "https://www.famhp.be/en/human_use/health_products/medical_devices_accessories/vigilance",
      "description": "重篤有害事象をFAMHPに報告義務。MDR Article 87-92。オンライン報告システムあり。"
    },
    "recalls": {
      "authority": "FAMHP",
      "description": "FSCA/FSNはFAMHPに通知。FAMHPが市場からの回収命令権限を有する。",
      "url": "https://www.famhp.be/"
    },
    "surveillance": "EU MDR PMS/PSUR/PMCF要件がそのまま適用。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "FAMHP",
    "name": "Certificate of Free Sale (CFS)",
    "description": "FAMHP がCFSを発行。",
    "processingTime": "約2〜4週間",
    "url": "https://www.famhp.be/"
  },
  "reimbursement": {
    "system": "社会健康保険制度（INAMI/RIZIV）",
    "authority": "INAMI/RIZIV",
    "description": "ベルギーは強制的社会健康保険制度を有する。インプラント等の高リスク医療機器はINAMI/RIZIV の Liste des produits admis au remboursement（償還リスト）への登録が必要。KCE がHTA評価を実施。償還価格交渉は Commission de remboursement des implants et dispositifs médicaux invasifs で実施。",
    "codingSystems": [
      "INAMI/RIZIV 製品リスト",
      "APR-DRG"
    ],
    "url": "https://www.riziv.fgov.be/"
  },
  "marketingRules": {
    "authority": "FAMHP",
    "description": "MDR Article 7 虚偽広告禁止。2022年医療機器法に基づく広告規制。",
    "keyRules": [
      "フランス語・オランダ語・ドイツ語ラベリング・IFU必須（流通地域に応じる）",
      "MDR Article 7 虚偽広告禁止",
      "FAMHP への広告事前届出は不要"
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
      "date": "2024",
      "title": "Article 97 derogation 活用",
      "description": "供給不足対応としてMDR Article 97に基づくderogation（特例措置）を積極活用。"
    }
  ],
  "lastUpdated": "2026-04-02",
  "verified": null
};
