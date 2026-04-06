// イタリア (Italy)
export default {
  "code": "ITA",
  "country": "イタリア",
  "countryEn": "Italy",
  "region": "Europe",
  "flag": "🇮🇹",
  "legalSystemOverview": {
    "type": "EU加盟国（MDR/IVDR 直接適用）",
    "description": "イタリアはEU加盟国であり、Regulation (EU) 2017/745（MDR）および Regulation (EU) 2017/746（IVDR）が直接適用される。国内補完法として Decreto legislativo 137/2022（立法命令137/2022号、MDR補完）および Decreto legislativo 138/2022（IVDR補完）が2022年に施行。Ministero della Salute（保健省）がNCAとして市場監視・ビジランスを管轄。機器登録はBanca dati/Repertorio dei dispositivi medici で管理される。",
    "keyCharacteristics": [
      "EU MDR/IVDR が直接適用",
      "Ministero della Salute がNCAとして市場監視・ビジランスを担当",
      "D.lgs. 137/2022 + D.lgs. 138/2022 による国内補完",
      "ラベリング・IFU はイタリア語必須",
      "Banca dati/Repertorio（国内機器データベース）への登録義務",
      "国内に複数のNotified Body（IMQ、CERTIQUALITY等）"
    ]
  },
  "authorities": [
    {
      "name": "Min. Salute",
      "fullName": "Ministry of Health — Directorate General for Medical Devices and Pharmaceutical Service",
      "localName": "Ministero della Salute — Direzione Generale dei Dispositivi Medici e del Servizio Farmaceutico",
      "role": "NCA: 医療機器の市場監視・ビジランス・臨床試験監督・登録管理",
      "url": "https://www.salute.gov.it/portale/dispositiviMedici/",
      "isPrimary": true
    },
    {
      "name": "AIFA",
      "fullName": "Italian Medicines Agency",
      "localName": "Agenzia Italiana del Farmaco",
      "role": "コンビネーション製品の規制（医薬品主要部分）",
      "url": "https://www.aifa.gov.it/",
      "isPrimary": false
    },
    {
      "name": "AGENAS",
      "fullName": "National Agency for Regional Health Services",
      "localName": "Agenzia Nazionale per i Servizi Sanitari Regionali",
      "role": "医療技術評価（HTA）・地域医療支援",
      "url": "https://www.agenas.gov.it/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "EU MDR Notified Body 制度（イタリア国内に複数機関指定）",
    "description": "IMQ S.p.A.（NB 0051）、CERTIQUALITY S.r.l.（NB 0546）、Istituto Superiore di Sanità（NB 0373）等がMDR指定。イタリアは欧州有数のNB数を有する。",
    "bodies": [
      {
        "nb": "0051",
        "name": "IMQ S.p.A.",
        "url": "https://www.imq.it/",
        "mdr": true,
        "ivdr": false
      },
      {
        "nb": "0546",
        "name": "CERTIQUALITY S.r.l.",
        "url": "https://www.certiquality.it/",
        "mdr": true,
        "ivdr": false
      },
      {
        "nb": "0373",
        "name": "Istituto Superiore di Sanità",
        "url": "https://www.iss.it/",
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
    "lastAmended": "2023（Regulation (EU) 2023/607）",
    "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32017R0745",
    "description": "EU MDR がイタリアに直接適用。D.lgs. 137/2022 が国内補完法。"
  },
  "implementingRegulations": [
    {
      "title": "Decreto legislativo 5 agosto 2022, n. 137",
      "date": "2022-08-05",
      "url": "https://www.gazzettaufficiale.it/eli/id/2022/09/13/22G00145/sg",
      "description": "MDR 国内補完法。NCA権限・罰則・登録義務・言語要件。",
      "category": "国内補完法"
    },
    {
      "title": "Decreto legislativo 5 agosto 2022, n. 138",
      "date": "2022-08-05",
      "url": "https://www.gazzettaufficiale.it/eli/id/2022/09/13/22G00146/SG",
      "description": "IVDR 国内補完法。",
      "category": "国内補完法"
    },
    {
      "title": "Decreto Ministero della Salute（各種省令）",
      "date": "各年",
      "url": "https://www.salute.gov.it/",
      "description": "機器登録・手数料・ビジランス手続等の詳細。",
      "category": "省令"
    }
  ],
  "relatedLaws": [
    {
      "title": "GDPR (Regulation (EU) 2016/679)",
      "category": "データ保護",
      "enacted": "2018",
      "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679",
      "relevance": "健康データに適用。D.lgs. 196/2003（改正済）も併存。"
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
    "totalProductCodes": "EU CND コード + Repertorio CND"
  },
  "conformityAssessment": {
    "overview": "EU MDR に基づく適合性評価がそのまま適用。国内追加の市販前審査なし。Ministero della Salute への事業者登録・Repertorio への機器登録が必要。",
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
        "url": "https://www.salute.gov.it/portale/dispositiviMedici/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "EUDAMED + Banca dati/Repertorio dei dispositivi medici",
    "url": "https://www.salute.gov.it/portale/dispositiviMedici/",
    "description": "EUDAMED + 国内Repertorio登録（義務）。EUDAMED 4モジュール義務化: 2026年5月28日。",
    "mandatory": true
  },
  "udi": {
    "required": true,
    "system": "EU UDI System — EUDAMED",
    "description": "EU MDR Article 27-29 UDI 要件がそのまま適用。Repertorio のCNDコードも並行。",
    "url": "https://ec.europa.eu/tools/eudamed/",
    "timeline": "EUDAMED義務化: 2026年5月28日"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "EU Vigilance System — Ministero della Salute",
      "mandatory": true,
      "url": "https://www.salute.gov.it/portale/dispositiviMedici/",
      "description": "重篤有害事象をMinistero della Saluteに報告義務。MDR Article 87-92。"
    },
    "recalls": {
      "authority": "Ministero della Salute",
      "description": "FSCA/FSNはMinistero della Saluteに通知。保健省が回収命令権限を有する。",
      "url": "https://www.salute.gov.it/"
    },
    "surveillance": "EU MDR PMS/PSUR/PMCF要件がそのまま適用。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "Ministero della Salute",
    "name": "Certificate of Free Sale (CFS)",
    "description": "Ministero della Salute がCFSを発行。",
    "processingTime": "約4〜6週間",
    "url": "https://www.salute.gov.it/"
  },
  "reimbursement": {
    "system": "国民保健サービス（Servizio Sanitario Nazionale: SSN）",
    "authority": "Ministero della Salute / AGENAS / 州（Regioni）",
    "description": "イタリアはSSNにより全国民に公的医療を提供。医療機器の償還はRepertorio登録に基づく。高額機器は病院予算（DRG: Diagnosis Related Groups）。インプラント・補装具等はLEA（Livelli Essenziali di Assistenza、必須給付水準）に含まれるものが償還対象。20州 + 2自治県が地域別に医療予算を管理。AGENAS がHTA評価を担当。",
    "codingSystems": [
      "Repertorio CND コード",
      "DRG",
      "Nomenclatore tariffario"
    ],
    "url": "https://www.salute.gov.it/"
  },
  "marketingRules": {
    "authority": "Ministero della Salute",
    "description": "MDR Article 7 虚偽広告禁止。D.lgs. 137/2022 および D.lgs. 46/1997（旧規定残存部分）に基づく広告規制。",
    "keyRules": [
      "イタリア語ラベリング・IFU必須",
      "MDR Article 7 虚偽広告禁止",
      "医療機器広告はMinistero della Saluteの監督下"
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
      "date": "2023-03",
      "title": "MDR移行期間延長（Regulation (EU) 2023/607）",
      "description": "Regulation (EU) 2023/607 により MDD/AIMDD 認証機器の MDR 移行期間を段階的に延長（Class III・IIb植込み型: 2027年末、その他: 2028年末）。"
    },
    {
      "date": "2024",
      "title": "HTA制度改革",
      "description": "EU HTA Regulation (EU) 2021/2282 の国内実施に向けAGENASの役割強化。"
    },
    {
      "date": "2022",
      "title": "D.lgs. 137/2022 施行",
      "description": "MDR国内補完法が施行。罰則・登録義務等を規定。"
    }
  ],
  "lastUpdated": "2026-04-06",
  "verified": "2026-04-06"
};
