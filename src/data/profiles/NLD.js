// オランダ (Netherlands)
export default {
  "code": "NLD",
  "country": "オランダ",
  "countryEn": "Netherlands",
  "region": "Europe",
  "flag": "🇳🇱",
  "legalSystemOverview": {
    "type": "EU加盟国（MDR/IVDR 直接適用）",
    "description": "オランダはEU加盟国であり、Regulation (EU) 2017/745（MDR）および Regulation (EU) 2017/746（IVDR）が直接適用される。国内補完法として Wet medische hulpmiddelen（医療機器法、2021年施行）および Besluit medische hulpmiddelen（医療機器政令）が制定されている。IGJ（Inspectie Gezondheidszorg en Jeugd / 医療・青少年ケア監督局）がNCA（National Competent Authority）として市場監視・ビジランスを担う。CIBG が事業者登録を管理。",
    "keyCharacteristics": [
      "EU MDR/IVDR が直接適用",
      "IGJ がNCAとして市場監視・ビジランスを担当",
      "Wet medische hulpmiddelen（2021年）による国内補完",
      "ラベリング・IFU はオランダ語必須（専門家向け機器は英語も可）",
      "CIBG が事業者登録管理",
      "国内に複数のNotified Body（BSI NL、DEKRA等）を有する"
    ]
  },
  "authorities": [
    {
      "name": "IGJ",
      "fullName": "Health and Youth Care Inspectorate",
      "localName": "Inspectie Gezondheidszorg en Jeugd",
      "role": "NCA: 医療機器の市場監視・ビジランス・臨床試験監督",
      "url": "https://www.igj.nl/onderwerpen/medische-hulpmiddelen",
      "isPrimary": true
    },
    {
      "name": "CIBG",
      "fullName": "CIBG (Agency of the Ministry of Health)",
      "localName": "CIBG",
      "role": "医療機器事業者登録・EUDAMED連携",
      "url": "https://www.cibg.nl/",
      "isPrimary": false
    },
    {
      "name": "ZIN",
      "fullName": "National Health Care Institute",
      "localName": "Zorginstituut Nederland",
      "role": "医療技術評価（HTA）・償還評価・保険パッケージ管理",
      "url": "https://www.zorginstituutnederland.nl/",
      "isPrimary": false
    },
    {
      "name": "VWS",
      "fullName": "Ministry of Health, Welfare and Sport",
      "localName": "Ministerie van Volksgezondheid, Welzijn en Sport",
      "role": "医療機器政策立案・法整備",
      "url": "https://www.rijksoverheid.nl/ministeries/ministerie-van-volksgezondheid-welzijn-en-sport",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "EU MDR Notified Body 制度（オランダ国内に複数機関指定）",
    "description": "BSI Group The Netherlands B.V.（NB 2797）、DEKRA Certification B.V.（NB 0344）、Kiwa Dare B.V.（NB 0344 — IVDR）等が指定されている。オランダは欧州有数のNB集積地。",
    "bodies": [
      {
        "nb": "2797",
        "name": "BSI Group The Netherlands B.V.",
        "url": "https://www.bsigroup.com/",
        "mdr": true,
        "ivdr": true
      },
      {
        "nb": "0344",
        "name": "DEKRA Certification B.V.",
        "url": "https://www.dekra.nl/",
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
    "description": "EU MDR がオランダに直接適用。Wet medische hulpmiddelen が国内補完法。"
  },
  "implementingRegulations": [
    {
      "title": "Wet medische hulpmiddelen",
      "date": "2021-05-26",
      "url": "https://wetten.overheid.nl/BWBR0045186/",
      "description": "MDR/IVDR 国内補完法。NCA権限・罰則・言語要件・登録義務。",
      "category": "国内補完法"
    },
    {
      "title": "Besluit medische hulpmiddelen",
      "date": "2021-05-26",
      "url": "https://wetten.overheid.nl/BWBR0045474/",
      "description": "Wet medische hulpmiddelen の下位法令。手数料・登録要件。",
      "category": "国内補完法令"
    },
    {
      "title": "Regeling medische hulpmiddelen",
      "date": "2021",
      "url": "https://wetten.overheid.nl/BWBR0045476/",
      "description": "登録手続・言語要件の具体化。",
      "category": "省令"
    }
  ],
  "relatedLaws": [
    {
      "title": "GDPR (Regulation (EU) 2016/679)",
      "category": "データ保護",
      "enacted": "2018",
      "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679",
      "relevance": "健康データに適用。UAVG（オランダGDPR施行法）も併存。"
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
    "overview": "EU MDR に基づく適合性評価がそのまま適用。国内追加の市販前審査なし。CIBG への事業者登録が必要。",
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
        "url": "https://www.igj.nl/onderwerpen/medische-hulpmiddelen"
      }
    ]
  },
  "electronicSubmission": {
    "system": "EUDAMED + CIBG 国内登録",
    "url": "https://www.cibg.nl/",
    "description": "EUDAMED + CIBG 事業者登録。EUDAMED 4モジュール義務化: 2026年5月28日。",
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
      "system": "EU Vigilance System — IGJ",
      "mandatory": true,
      "url": "https://www.igj.nl/onderwerpen/medische-hulpmiddelen/melden",
      "description": "重篤有害事象をIGJに報告義務。MDR Article 87-92。製造業者・医療機関双方に報告義務。"
    },
    "recalls": {
      "authority": "IGJ",
      "description": "FSCA/FSNはIGJに通知。IGJが市場からの回収命令権限を有する。",
      "url": "https://www.igj.nl/"
    },
    "surveillance": "EU MDR PMS/PSUR/PMCF要件がそのまま適用。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "CIBG",
    "name": "Certificate of Free Sale (CFS)",
    "description": "CIBG がCFSを発行。",
    "processingTime": "約2〜4週間",
    "url": "https://www.cibg.nl/"
  },
  "reimbursement": {
    "system": "社会健康保険制度（Zorgverzekeringswet: Zvw）",
    "authority": "ZIN（Zorginstituut Nederland）/ NZa（Nederlandse Zorgautoriteit）",
    "description": "オランダの医療保険は全国民に義務的な基本保険（Zvw）を基盤とする。ZIN が保険パッケージの内容を評価・助言。医療機器は機能性包帯・補装具等は保険カバー。高額医療機器の病院使用はDBC/DOT（DRG類似）システムを通じて償還。NZa が料金規制。",
    "codingSystems": [
      "DBC/DOT",
      "GIP（Genees- en hulpmiddelen Informatie Project）"
    ],
    "url": "https://www.zorginstituutnederland.nl/"
  },
  "marketingRules": {
    "authority": "IGJ",
    "description": "MDR Article 7 虚偽広告禁止。Wet medische hulpmiddelen に基づく広告規制。Code Medische Hulpmiddelen（業界自主規範）も存在。",
    "keyRules": [
      "オランダ語ラベリング・IFU必須（専門家向け英語可）",
      "MDR Article 7 虚偽広告禁止",
      "Code Medische Hulpmiddelen（業界自主規範）"
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
