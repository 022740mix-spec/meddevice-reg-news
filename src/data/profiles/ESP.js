// スペイン (Spain)
export default {
  "code": "ESP",
  "country": "スペイン",
  "countryEn": "Spain",
  "region": "Europe",
  "flag": "🇪🇸",
  "legalSystemOverview": {
    "type": "EU加盟国（MDR/IVDR 直接適用）",
    "description": "スペインはEU加盟国であり、Regulation (EU) 2017/745（MDR）および Regulation (EU) 2017/746（IVDR）が直接適用される。国内補完法として Real Decreto 192/2023（王令192/2023号）が2023年に施行され、MDR/IVDRの国内実施を規定する。AEMPS（Agencia Española de Medicamentos y Productos Sanitarios / スペイン医薬品・医療機器庁）がNCAとして市場監視・ビジランス・臨床試験監督を担う。自治州（Comunidades Autónomas）が地域レベルの市場監視を実施。",
    "keyCharacteristics": [
      "EU MDR/IVDR が直接適用",
      "AEMPS がNCAとして市場監視・ビジランスを担当",
      "Real Decreto 192/2023 による国内補完",
      "ラベリング・IFU はスペイン語（カスティーリャ語）必須",
      "17の自治州が地域レベルの市場監視を実施",
      "スペイン固有の機器登録制度（Registro Español de Productos Sanitarios）"
    ]
  },
  "authorities": [
    {
      "name": "AEMPS",
      "fullName": "Spanish Agency of Medicines and Medical Devices",
      "localName": "Agencia Española de Medicamentos y Productos Sanitarios",
      "role": "NCA: 医療機器の市場監視・ビジランス・臨床試験監督・登録管理",
      "url": "https://www.aemps.gob.es/productos-sanitarios/",
      "isPrimary": true
    },
    {
      "name": "CCAA",
      "fullName": "Autonomous Communities Health Authorities",
      "localName": "Comunidades Autónomas",
      "role": "地域レベルの市場監視・施設査察",
      "url": null,
      "isPrimary": false
    },
    {
      "name": "DGFPS",
      "fullName": "Directorate-General for Pharmacy and Health Products",
      "localName": "Dirección General de Farmacia y Productos Sanitarios",
      "role": "医療機器の償還・価格政策",
      "url": "https://www.sanidad.gob.es/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "EU MDR Notified Body 制度（スペイン国内に指定機関あり）",
    "description": "AENOR International S.A.U.（NB 0099）がMDR指定。スペイン唯一のMDR指定NB。",
    "bodies": [
      {
        "nb": "0099",
        "name": "AENOR International S.A.U.",
        "url": "https://www.aenor.com/",
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
    "description": "EU MDR がスペインに直接適用。Real Decreto 192/2023 が国内補完法。"
  },
  "implementingRegulations": [
    {
      "title": "Real Decreto 192/2023",
      "date": "2023-03-21",
      "url": "https://www.boe.es/diario_boe/txt.php?id=BOE-A-2023-7335",
      "description": "MDR/IVDR 国内補完法令。AEMPS権限・罰則・登録義務・言語要件。",
      "category": "国内補完法令"
    },
    {
      "title": "Real Decreto 1591/2009（旧規制、一部有効）",
      "date": "2009",
      "url": "https://www.boe.es/",
      "description": "旧MDD国内実施令。MDR移行完了まで一部経過措置として残存。",
      "category": "旧規制（経過措置）"
    }
  ],
  "relatedLaws": [
    {
      "title": "GDPR (Regulation (EU) 2016/679)",
      "category": "データ保護",
      "enacted": "2018",
      "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679",
      "relevance": "健康データに適用。Ley Orgánica 3/2018 (LOPDGDD) も併存。"
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
    "overview": "EU MDR に基づく適合性評価がそのまま適用。国内追加の市販前審査なし。AEMPS への事業者登録・Registro Español de Productos Sanitarios への機器登録が必要。",
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
        "url": "https://www.aemps.gob.es/productos-sanitarios/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "EUDAMED + AEMPS 国内登録（Registro Español de Productos Sanitarios）",
    "url": "https://www.aemps.gob.es/productos-sanitarios/",
    "description": "EUDAMED + AEMPS 国内機器登録。EUDAMED 4モジュール義務化: 2026年5月28日。",
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
      "system": "EU Vigilance System — AEMPS",
      "mandatory": true,
      "url": "https://www.aemps.gob.es/productos-sanitarios/vigilancia/",
      "description": "重篤有害事象をAEMPSに報告義務。MDR Article 87-92。Sistema Español de Vigilanciaで管理。"
    },
    "recalls": {
      "authority": "AEMPS",
      "description": "FSCA/FSNはAEMPSに通知。AEMPSと自治州が連携して回収措置を実施。",
      "url": "https://www.aemps.gob.es/"
    },
    "surveillance": "EU MDR PMS/PSUR/PMCF要件がそのまま適用。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "AEMPS",
    "name": "Certificate of Free Sale (CFS)",
    "description": "AEMPS がCFSを発行。",
    "processingTime": "約2〜4週間",
    "url": "https://www.aemps.gob.es/"
  },
  "reimbursement": {
    "system": "国民健康システム（Sistema Nacional de Salud: SNS）",
    "authority": "Ministerio de Sanidad / DGFPS / 自治州",
    "description": "スペインはSNSにより全国民に公的医療を提供。医療機器の償還はカタログ（Catálogo Común de Productos Sanitarios）に基づく。高額機器は病院予算から。インプラント等は個別償還リスト。各自治州が地域別に補充的償還決定を行う。",
    "codingSystems": [
      "SNS 製品カタログ",
      "GRD（Grupos Relacionados por el Diagnóstico）"
    ],
    "url": "https://www.sanidad.gob.es/"
  },
  "marketingRules": {
    "authority": "AEMPS",
    "description": "MDR Article 7 虚偽広告禁止。Real Decreto 192/2023 に基づく広告規制。",
    "keyRules": [
      "スペイン語ラベリング・IFU必須",
      "MDR Article 7 虚偽広告禁止",
      "自治州レベルでの追加規制あり"
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
      "date": "2023",
      "title": "Real Decreto 192/2023 施行",
      "description": "MDR/IVDR国内補完法令が施行。AEMPSの権限・手続を明確化。"
    }
  ],
  "lastUpdated": "2026-04-02",
  "verified": null
};
