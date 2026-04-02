// サウジアラビア (Saudi Arabia)
export default {
  "code": "SAU",
  "country": "サウジアラビア",
  "countryEn": "Saudi Arabia",
  "region": "Middle East & Africa",
  "flag": "🇸🇦",
  "legalSystemOverview": {
    "type": "イスラム法を基盤とする中央集権制（Centralized system）",
    "description": "サウジアラビアの医療機器規制はSFDA（Saudi Food and Drug Authority）が一元的に管轄する。2021年に新法「Law of Medical Devices and Supplies」（Royal Decree No. M/54, 1442H）が制定され、旧Medical Devices Interim Regulation（2008年）を置換。EU MDR/IVDRおよびGHTFに整合した4クラス制（Class A/B/C/D）を採用。2022年以降、SFDA独立審査によるMDMA-2（技術文書評価）に一本化。",
    "keyCharacteristics": [
      "SFDA による一元的な中央規制体制",
      "リスクベースの4クラス分類（Class A/B/C/D）",
      "EU MDR/IVDR および GHTF に整合した規制枠組み",
      "MDMA（Medical Device Marketing Authorization）による市販前認可",
      "MDMA-2（技術文書の独立審査）に一本化（MDMA-1は廃止）",
      "Saudi-DIデータベースによるUDI制度"
    ]
  },
  "authorities": [
    {
      "name": "SFDA",
      "fullName": "Saudi Food and Drug Authority",
      "localName": "الهيئة العامة للغذاء والدواء",
      "role": "医療機器の市販前認可（MDMA）・市販後監視・リコール管理・施設査察・広告承認。医療機器規制の中核機関。",
      "url": "https://www.sfda.gov.sa/en/overview-medical",
      "isPrimary": true
    },
    {
      "name": "NCMDR",
      "fullName": "National Center for Medical Device Reporting",
      "localName": null,
      "role": "有害事象報告データベースの管理・リコール分類・安全性情報の共有",
      "url": "https://www.bio-standards.com/blog/sfda-ncmdr-everything-you-should-know-about-medical-device-reporting",
      "isPrimary": false
    },
    {
      "name": "CHI",
      "fullName": "Council of Health Insurance",
      "localName": null,
      "role": "医療保険制度の規制・保険償還管理",
      "url": "https://www.chi.gov.sa/en/aboutchi/cchiprograms/Pages/IDF.aspx",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "なし（SFDA が直接技術文書を審査）",
    "description": "サウジアラビアでは欧州型のNotified Body制度は存在しない。SFDAが直接、技術文書評価（Technical File Assessment）を実施しMDMAを交付する。ただしISO 13485認証を第三者認証機関から取得することが事前要件。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "Law of Medical Devices and Supplies（Royal Decree No. M/54）に定義。疾病の診断・治療・予防・監視・軽減等を目的とする機器・装置・器具・材料・ソフトウェア等で、主たる意図する作用が薬理学的・免疫学的・代謝的手段によらないもの。",
    "scope": "IVD（体外診断用医療機器）も適用範囲に含まれる。SaMDについてはMDS-G010ガイダンスで個別要件を規定。",
    "notes": "定義はEU MDR/IVDRの定義と大きく整合。AI/ML医療機器に対するMDS-G010ガイダンスで中東地域をリード。"
  },
  "primaryLaw": {
    "title": "Law of Medical Devices and Supplies",
    "originalTitle": "نظام الأجهزة والمنتجات الطبية",
    "enacted": "2021",
    "lastAmended": "要確認（2021年制定後の改正公布日は裏付け未確認）",
    "url": "https://www.sfda.gov.sa/sites/default/files/2023-10/MDSysExcE.pdf",
    "description": "2021年制定（Royal Decree No. M/54, 1442H）。旧Medical Devices Interim Regulation（2008年）を置換する現行の基本法。SFDAの医療機器規制権限の根拠法。施行規則はSFDA理事会決定No. 3-29-1443で発出。"
  },
  "implementingRegulations": [
    {
      "title": "Implementing Regulation of the Law of Medical Devices (SFDA Board Decision No. 3-29-1443)",
      "date": "2021",
      "url": "https://www.sfda.gov.sa/sites/default/files/2023-10/MDSysExcE.pdf",
      "description": "基本法の施行規則。分類、登録手続、市販後監視、査察等の詳細を規定。",
      "category": "施行規則"
    },
    {
      "title": "MDS-REQ 5 — Requirements for Medical Devices Marketing Authorisation (V6)",
      "date": "2023-07",
      "url": "https://www.sfda.gov.sa/en/regulations",
      "description": "MDMA（市販前認可）の要件。技術文書評価、臨床評価報告書、ラベリング要件等を規定。",
      "category": "市販前認可"
    },
    {
      "title": "MDS-REQ 7 — Requirements for Unique Device Identification (UDI)",
      "date": "2022-06",
      "url": "https://www.sfda.gov.sa/sites/default/files/2022-06/RequirementsUDI_0.pdf",
      "description": "UDI制度の要件。Saudi-DIデータベースへの登録義務、UDI-DI/UDI-PI、発行機関（GS1/HIBCC/ICCBBA）を規定。",
      "category": "UDI"
    },
    {
      "title": "MDS-REQ 10 — Requirements for Inspections and QMS for Medical Devices",
      "date": "2026-01-11",
      "url": "https://www.sfda.gov.sa/en/overview-medical",
      "description": "査察・品質管理システム要件。ISO 13485準拠のQMS維持が必要。",
      "category": "QMS・査察"
    }
  ],
  "relatedLaws": [
    {
      "title": "Personal Data Protection Law (PDPL)",
      "category": "データ保護",
      "enacted": "2021",
      "url": "https://sdaia.gov.sa/en/SDAIA/about/Documents/PersonalDataEnglish.pdf",
      "relevance": "SDAIA（Saudi Data & Artificial Intelligence Authority）が管轄。コネクテッドデバイス・SaMDが取り扱う個人医療情報のプライバシー要件に適用。"
    }
  ],
  "classification": {
    "system": "4クラス制（Class A/B/C/D）",
    "basis": "リスクベース（EU MDR/GHTF分類ルールに整合）。意図する用途・侵襲性・使用期間・エネルギー源等に基づく。MDS-G5ガイダンスに詳細規定。IVDは別途分類ルール（EU IVDRに整合）。",
    "classes": [
      {
        "name": "Class A",
        "nameJa": "クラスA",
        "riskLevel": "低",
        "description": "一般的な低リスク機器。MDMA（技術文書評価）が必要。",
        "examples": [
          "弾性包帯",
          "聴診器",
          "手術用手袋",
          "車椅子",
          "舌圧子"
        ],
        "approvalPath": "MDMA（技術文書評価）"
      },
      {
        "name": "Class B",
        "nameJa": "クラスB",
        "riskLevel": "中低",
        "description": "中程度のリスク機器。MDMA（技術文書評価）が必要。",
        "examples": [
          "輸液ポンプ",
          "補聴器",
          "超音波診断装置",
          "歯科用材料",
          "血圧計"
        ],
        "approvalPath": "MDMA（技術文書評価）"
      },
      {
        "name": "Class C",
        "nameJa": "クラスC",
        "riskLevel": "中高",
        "description": "高リスク機器。MDMA（技術文書評価＋臨床評価報告書）が必要。",
        "examples": [
          "人工関節",
          "冠動脈ステント",
          "人工呼吸器",
          "透析装置",
          "コンタクトレンズ"
        ],
        "approvalPath": "MDMA（技術文書評価＋臨床評価報告書）"
      },
      {
        "name": "Class D",
        "nameJa": "クラスD",
        "riskLevel": "高",
        "description": "最高リスク機器。MDMA（技術文書評価＋臨床データ）が必要。最も厳格な審査。",
        "examples": [
          "人工心臓弁",
          "埋込み型除細動器",
          "薬剤溶出ステント",
          "脳深部刺激装置",
          "人工内耳"
        ],
        "approvalPath": "MDMA（技術文書評価＋臨床データ）"
      }
    ],
    "rules": [
      "EU MDR/GHTF分類ルールに基づく分類基準",
      "MDS-G5ガイダンスに詳細規定",
      "IVDは別途分類（Class A〜D、EU IVDRに整合）",
      "SaMDはMDS-G010ガイダンスに基づき分類"
    ],
    "totalProductCodes": "GMDN（Global Medical Device Nomenclature）を使用"
  },
  "conformityAssessment": {
    "overview": "全クラスの医療機器にMDMA（Medical Device Marketing Authorization）が必要。2022年以降はMDMA-2ルート（技術文書のSFDA独立審査）に一本化（旧MDMA-1は廃止）。EU MDR準拠の技術文書をSFDAが審査。MDMA有効期間は3年（更新は90日前から申請可）。1つのMDMA申請に最大50機器をバンドル可能。",
    "routes": [
      {
        "name": "MDMA-2 Technical File Assessment",
        "nameJa": "MDMA-2 技術文書評価",
        "applicableClasses": [
          "Class A",
          "Class B",
          "Class C",
          "Class D"
        ],
        "description": "EU MDR準拠の技術文書をSFDAが独立審査。先行認可（CE/FDA等）は参考にするが必須ではない。ISO 13485認証が前提条件。",
        "subtypes": [
          {
            "name": "新規MDMA申請",
            "description": "初回のMDMA取得。技術文書・臨床評価・ラベリング・QMS証明書を提出。"
          },
          {
            "name": "MDMA更新（3年ごと）",
            "description": "有効期限90日前から申請可。変更がなければ簡略審査。"
          },
          {
            "name": "MDMA変更申請",
            "description": "製品仕様・製造所・ラベリング等の変更時。"
          }
        ],
        "avgReviewTime": "公式: 35営業日 / 実績: 3〜6ヶ月",
        "avgReviewTimeSource": "https://omcmedical.com/sfda-fees-for-medical-devices/",
        "fee": "Class A: SAR 15,000 / Class B: SAR 19,000 / Class C: SAR 21,000 / Class D: SAR 23,000",
        "feeSource": "https://omcmedical.com/sfda-fees-for-medical-devices/",
        "url": "https://mdma.sfda.gov.sa/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "GHAD統合電子システム + MDMA e-Service",
    "url": "https://mdma.sfda.gov.sa/",
    "description": "全ての申請（MDMA申請・更新・変更・広告承認等）はSFDAの統合電子システム「GHAD」経由でオンライン提出。紙ベースの申請は不可。",
    "mandatory": true
  },
  "udi": {
    "required": true,
    "system": "SFDA UDI System — Saudi-DIデータベース",
    "description": "MDS-REQ 7に基づくUDI要件。UDI-DI（機器識別子）とUDI-PI（製造識別子）で構成。発行機関はGS1/HIBCC/ICCBBAを承認。Saudi-DIデータベースへの登録が義務。",
    "url": "https://www.sfda.gov.sa/sites/default/files/2022-06/RequirementsUDI_0.pdf",
    "timeline": "Saudi-DIデータベース: 2020年10月稼働。Class B/C/D: 2023年9月期限。Class A: 2024年9月期限。正式エンフォースメントは段階的に進行中。"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "NCMDR (National Center for Medical Device Reporting)",
      "mandatory": true,
      "url": "https://www.bio-standards.com/blog/sfda-ncmdr-everything-you-should-know-about-medical-device-reporting",
      "description": "製造業者・認定代理人・流通業者・医療従事者・一般市民が有害事象を報告可能。NCMDRデータベースで管理。リコールはClass I（高リスク）/Class II（中リスク）/Class III（低リスク）の3段階。"
    },
    "recalls": {
      "authority": "SFDA / NCMDR",
      "description": "SFDAがFSCA（Field Safety Corrective Action）およびリコールを監督。NCMDRがリコール情報を管理・公開。",
      "url": "https://www.sfda.gov.sa/en/overview-medical"
    },
    "surveillance": "Class A: PMS報告書の維持（SFDA要求時に提出）。Class B: PSUR（2年ごと更新）。Class C/D: PSUR（毎年更新）。Class C/DではPost-Market Clinical Follow-up（PMCF）が特に重要。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "輸出国の規制当局（MDMA申請時に提出が必要）",
    "name": "Certificate of Free Sale (CFS)",
    "description": "MDMA申請時に、原産国の規制当局が発行するCFSの提出が求められる。有効期限は発行日から12ヶ月以内。サウジアラビアが宛先国として明記されている必要がある。",
    "processingTime": "輸出国側の手続きによる",
    "url": "https://mdma.sfda.gov.sa/"
  },
  "reimbursement": {
    "system": "公的医療（MOH直営施設）+ 協同医療保険（Cooperative Health Insurance）",
    "authority": "CHI（Council of Health Insurance）/ MOH",
    "description": "公的病院（MOH/National Guard/軍病院等）は政府予算で調達。民間セクターは協同医療保険法に基づく保険制度。医療機器の保険償還制度は医薬品ほど体系化されておらず、個別の保険契約・施設調達方針に依存。",
    "codingSystems": [
      "要確認（固有の医療機器償還コード体系は未確認）"
    ],
    "url": "https://www.chi.gov.sa/en/aboutchi/cchiprograms/Pages/IDF.aspx"
  },
  "marketingRules": {
    "authority": "SFDA",
    "description": "MDS-REQ 8（V3, 2023年3月15日発出）に基づき、医療機器の広告にはSFDAの事前承認（AMDA）が必要。MDMA未取得機器の広告は厳禁。",
    "keyRules": [
      "一般市民向け広告はアラビア語必須、医療専門家向けは英語可",
      "広告承認手数料: 一般向けSAR 3,000、専門家向けSAR 6,000",
      "SFDAロゴ・施設登録番号の広告使用禁止",
      "違反時: 最大SAR 5,000,000の罰金、最大180日の施設閉鎖、MDMA取消"
    ]
  },
  "mdsap": {
    "status": "オブザーバー（Observer）",
    "description": "SFDAはMDSAPのオブザーバーとして参加。正式参加国ではない。MDSAP監査報告書はSFDAの規制要件を代替せず、MDMA取得が別途必要。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "MDMA申請の前提条件。第三者認証機関からのISO 13485認証が必須。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "リスクマネジメント。技術文書のリスク評価に適用。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "ソフトウェアライフサイクル。SaMD申請に適用。MDS-G010で参照。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "医用電気機器の安全・性能要求。"
    },
    "others": [
      {
        "name": "ISO 10993シリーズ（生物学的安全性評価）",
        "notes": "生体接触医療機器の生物学的安全性評価に必須。"
      },
      {
        "name": "MDS-G010（AI/ML医療機器ガイダンス）",
        "notes": "AI/ML技術を用いた医療機器に対する要件。SFDAが中東地域でAI医療機器規制をリード。"
      }
    ]
  },
  "recentDevelopments": [
    {
      "date": "2026-01",
      "title": "QMS・査察要件（MDS-REQ 10）および輸送・保管要件（MDS-REQ 12）の更新",
      "description": "SFDAが査察・品質管理システム要件および輸送・保管要件のガイダンスを2026年1月11日に更新。"
    },
    {
      "date": "2025-06",
      "title": "臨床試験要件（MDS-REQ 2）の更新",
      "description": "医療機器の臨床試験に関する要件ガイダンスを更新。"
    },
    {
      "date": "2024",
      "title": "AI/ML医療機器ガイダンス（MDS-G010）の運用",
      "description": "AI/ML技術を用いた医療機器に対するバインディングな要件を規定。SFDAは中東地域でAI医療機器規制をリードする立場。"
    },
    {
      "date": "2022",
      "title": "MDMA-2ルートへの全面移行",
      "description": "GHTF参照国の認可を前提としたMDMA-1を廃止し、SFDA独立審査によるMDMA-2（技術文書評価）に一本化。"
    }
  ],
  "lastUpdated": "2026-04-02",
  "verified": null
};
