// アメリカ合衆国 (United States of America)
export default {
  "code": "USA",
  "country": "アメリカ合衆国",
  "countryEn": "United States of America",
  "region": "North America",
  "flag": "🇺🇸",
  "legalSystemOverview": {
    "type": "連邦制（Federal system）",
    "description": "米国の医療機器規制は連邦法である FD&C Act を根幹とし、FDA（食品医薬品局）が一元的に管轄する。1976年の Medical Device Amendments により現行の3クラス分類制度と市販前審査制度が導入された。州法による追加規制も存在するが、連邦法が主要な規制枠組みを形成している。FDA は市販前審査から市販後監視、施設査察、リコール管理までライフサイクル全体を監督する。",
    "keyCharacteristics": [
      "FDA による一元的な連邦規制体制",
      "リスクベースの3クラス分類（Class I / II / III）",
      "市販前審査経路が複数（510(k)、PMA、De Novo 等）",
      "品質管理システム要求（QMSR / 旧QSR）の法的義務",
      "Predicate device に基づく実質的同等性の概念"
    ]
  },
  "authorities": [
    {
      "name": "FDA CDRH",
      "fullName": "Food and Drug Administration - Center for Devices and Radiological Health",
      "localName": null,
      "role": "医療機器の市販前審査・市販後監視・リコール管理",
      "url": "https://www.fda.gov/medical-devices",
      "isPrimary": true
    },
    {
      "name": "CMS",
      "fullName": "Centers for Medicare & Medicaid Services",
      "localName": null,
      "role": "Medicare/Medicaid 保険償還の管理",
      "url": "https://www.cms.gov/",
      "isPrimary": false
    },
    {
      "name": "FTC",
      "fullName": "Federal Trade Commission",
      "localName": null,
      "role": "医療機器の広告・マーケティング監視",
      "url": "https://www.ftc.gov/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "なし（FDA が直接審査）",
    "description": "米国では欧州のような Notified Body 制度は存在しない。FDA CDRH が直接、市販前審査（510(k)、PMA等）を実施する。第三者審査（510(k) Third Party Review Program / Accredited Persons Program）は一部の510(k)に限定的に利用可能。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "FD&C Act Section 201(h) に定義。疾病の診断・治療・予防等を目的とする器具・装置・機械等で、体の構造・機能に影響を与えることを意図し、化学的作用によらないもの。",
    "scope": "体外診断用医薬品（IVD）も含む。コンビネーション製品は OCP（Office of Combination Products）が管轄判断。",
    "notes": "ソフトウェア（SaMD）は2017年 Digital Health Innovation Action Plan 以降、規制対象の明確化が進行。21st Century Cures Actにより臨床意思決定支援等の一部ソフトウェア機能はFD&C Act Section 520(o)で規制対象外に。"
  },
  "primaryLaw": {
    "title": "Federal Food, Drug, and Cosmetic Act (FD&C Act)",
    "originalTitle": null,
    "enacted": "1938",
    "lastAmended": "2022（Consolidated Appropriations Act 2023でSection 524Bを追加）",
    "url": "https://www.govinfo.gov/app/details/COMPS-973/",
    "description": "医療機器規制の根幹法。1976年 Medical Device Amendments で現行の3クラス制と市販前審査制度を導入。Title 21 USC Chapter 9, Subchapter V が医療機器を規定。"
  },
  "implementingRegulations": [
    {
      "title": "21 CFR Part 820 - Quality Management System Regulation (QMSR)",
      "date": "2024-02-02",
      "url": "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-820",
      "description": "医療機器の品質管理システム要求。2024年2月2日公布（89 FR 7496）でISO 13485:2016を直接参照するQMSRに改訂。2026年2月2日発効。",
      "category": "QMS"
    },
    {
      "title": "21 CFR Part 807 - Establishment Registration and Device Listing",
      "date": null,
      "url": "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-807",
      "description": "施設登録と機器リスティング。米国で医療機器を製造・輸入する施設は FDA への登録が必要。",
      "category": "登録"
    },
    {
      "title": "21 CFR Part 814 - Premarket Approval (PMA)",
      "date": null,
      "url": "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-814",
      "description": "クラスIII 高リスク機器の市販前承認手続き。",
      "category": "市販前審査"
    },
    {
      "title": "21 CFR Part 812 - Investigational Device Exemptions (IDE)",
      "date": null,
      "url": "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-812",
      "description": "治験機器の免除規定。臨床試験実施のための要件。",
      "category": "臨床試験"
    },
    {
      "title": "21 CFR Part 803 - Medical Device Reporting",
      "date": null,
      "url": "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-803",
      "description": "有害事象（死亡・重篤な傷害・故障）の報告義務。",
      "category": "市販後"
    },
    {
      "title": "21 CFR Part 860 - Medical Device Classification Procedures",
      "date": null,
      "url": "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-860",
      "description": "医療機器のクラス分類手続き。",
      "category": "分類"
    },
    {
      "title": "21 CFR Part 801 - Labeling",
      "date": null,
      "url": "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-801",
      "description": "医療機器のラベリング要求。",
      "category": "表示"
    },
    {
      "title": "21 CFR Part 830 - Unique Device Identification",
      "date": "2013年〜段階的施行",
      "url": "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-830",
      "description": "UDI システムの要求事項。",
      "category": "UDI"
    }
  ],
  "relatedLaws": [
    {
      "title": "HIPAA (Health Insurance Portability and Accountability Act)",
      "category": "個人情報保護",
      "enacted": "1996",
      "url": "https://www.hhs.gov/hipaa/index.html",
      "relevance": "医療機器が取り扱う保護対象医療情報（PHI）のプライバシーとセキュリティ要件を規定。コネクテッドデバイスやSaMDに直接影響。"
    },
    {
      "title": "21st Century Cures Act",
      "category": "規制改革",
      "enacted": "2016",
      "url": "https://www.congress.gov/bill/114th-congress/house-bill/34",
      "relevance": "臨床意思決定支援ソフトウェア等の一部をFDA規制対象外に。Breakthrough Devices Program を法定化。Real-World Evidence の活用を推進。"
    },
    {
      "title": "Consolidated Appropriations Act 2023 — Section 3305 (FD&C Act Section 524B)",
      "category": "サイバーセキュリティ",
      "enacted": "2022-12-29",
      "url": "https://www.fda.gov/medical-devices/digital-health-center-excellence/cybersecurity",
      "relevance": "医療機器のサイバーセキュリティ要件をFD&C Act Section 524Bとして追加（2023年3月29日発効）。市販前申請にサイバーセキュリティ計画・SBOM提出を義務化。旧称PATCH Actの内容を包含。"
    },
    {
      "title": "TSCA (Toxic Substances Control Act)",
      "category": "化学物質",
      "enacted": "1976",
      "url": "https://www.epa.gov/tsca-inventory",
      "relevance": "医療機器に使用される化学物質の規制。特にフタル酸エステル等の材料規制に関連。"
    }
  ],
  "classification": {
    "system": "3クラス制（Class I / II / III）",
    "basis": "リスクベース",
    "classes": [
      {
        "name": "Class I",
        "nameJa": "クラスI",
        "riskLevel": "低リスク",
        "description": "一般的制御（General Controls）のみで安全性・有効性を確保。約47%の医療機器が該当。多くが510(k)免除。",
        "examples": [
          "弾性包帯",
          "手動外科器具",
          "聴診器"
        ],
        "approvalPath": "一般的制御（大半が510(k)免除、一部は510(k)必要）"
      },
      {
        "name": "Class II",
        "nameJa": "クラスII",
        "riskLevel": "中リスク",
        "description": "一般的制御に加え特別制御（Special Controls: ガイダンス・性能基準等）が必要。約43%が該当。",
        "examples": [
          "電動車椅子",
          "妊娠検査キット",
          "輸液ポンプ",
          "超音波診断装置"
        ],
        "approvalPath": "510(k) 市販前届出（一部は De Novo）"
      },
      {
        "name": "Class III",
        "nameJa": "クラスIII",
        "riskLevel": "高リスク",
        "description": "生命維持・生命支持、または不合理なリスクを呈する機器。最も厳格な規制。約10%が該当。",
        "examples": [
          "人工心臓弁",
          "冠動脈ステント",
          "埋込み型除細動器",
          "人工内耳"
        ],
        "approvalPath": "PMA（市販前承認）"
      }
    ],
    "rules": [
      {
        "id": "Product Code 分類",
        "description": "FDA は約6,000の Product Code で各機器を分類。16の医学専門パネル（Advisory Committee）に対応。",
        "url": "https://www.fda.gov/medical-devices/classify-your-medical-device"
      },
      {
        "id": "Classification Database",
        "description": "FDA Product Classification Database で既存分類を検索可能。新規機器は De Novo で新分類を申請。",
        "url": "https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfPCD/classification.cfm"
      }
    ],
    "totalProductCodes": "約6,000 Product Codes（約1,700の generic types を16の医学専門パネルに分類）"
  },
  "conformityAssessment": {
    "overview": "FDA が直接市販前審査を実施する。審査経路はリスク分類と predicate device の有無により決定。",
    "routes": [
      {
        "name": "510(k) Premarket Notification",
        "nameJa": "510(k) 市販前届出",
        "applicableClasses": [
          "Class I（一部）",
          "Class II"
        ],
        "description": "実質的同等性（Substantial Equivalence）を既存の predicate device と比較して証明する経路。最も利用件数が多い。",
        "subtypes": [
          {
            "name": "Traditional 510(k)",
            "description": "標準的な510(k)。性能データ、ベンチテスト、場合により臨床データを提出。"
          },
          {
            "name": "Abbreviated 510(k)",
            "description": "FDA認知規格（Recognized Consensus Standards）への適合宣言で一部データを省略。ガイダンス適合の場合に利用可能。"
          },
          {
            "name": "Special 510(k)",
            "description": "自社の既承認機器の軽微変更用。設計管理文書のみで対応可能な場合に適用。"
          }
        ],
        "avgReviewTime": "FDA 目標: 90日（MDUFA）。実績平均: 約100〜130日。",
        "fee": "Standard: $24,335（FY2025）、Small Business: $6,084",
        "url": "https://www.fda.gov/medical-devices/premarket-submissions-selecting-and-preparing-correct-submission/premarket-notification-510k"
      },
      {
        "name": "PMA (Premarket Approval)",
        "nameJa": "PMA 市販前承認",
        "applicableClasses": [
          "Class III"
        ],
        "description": "高リスク機器に対する最も厳格な審査。安全性・有効性の十分な科学的証拠（通常は臨床試験データ）が必要。",
        "subtypes": [
          {
            "name": "Original PMA",
            "description": "新規 Class III 機器の初回承認申請。"
          },
          {
            "name": "PMA Supplement",
            "description": "承認済みPMA機器の変更申請。変更の程度により180日/Real-Time等の区分あり。"
          },
          {
            "name": "Panel-Track PMA",
            "description": "Advisory Committee の推奨に基づく審査。"
          }
        ],
        "avgReviewTime": "FDA 目標: 180日（First Action）。実績: 約12〜18ヶ月。",
        "fee": "Standard: $540,783（FY2025）、Small Business: $135,196",
        "url": "https://www.fda.gov/medical-devices/premarket-submissions-selecting-and-preparing-correct-submission/premarket-approval-pma"
      },
      {
        "name": "De Novo Classification",
        "nameJa": "De Novo 分類",
        "applicableClasses": [
          "新規 Class I / II（predicate なし）"
        ],
        "description": "Predicate device が存在しない低〜中リスクの新規機器用。一般的制御および特別制御で安全性・有効性を確保できることを証明。承認後は後続機器の predicate となる。",
        "subtypes": [],
        "avgReviewTime": "FDA 目標: 150日。実績: 約200〜300日。",
        "fee": "Standard: $162,235（FY2025）、Small Business: $40,559",
        "url": "https://www.fda.gov/medical-devices/premarket-submissions-selecting-and-preparing-correct-submission/de-novo-classification-request"
      },
      {
        "name": "HDE (Humanitarian Device Exemption)",
        "nameJa": "HDE 人道的使用免除",
        "applicableClasses": [
          "Class III（希少疾患用）"
        ],
        "description": "年間対象患者数8,000人以下の希少疾患用機器。有効性の証明は不要（安全性と probable benefit の証明）。IRB 承認が使用条件。",
        "subtypes": [],
        "avgReviewTime": "約75日（FDA目標）",
        "fee": "免除（Small Business 免除規定あり）",
        "url": "https://www.fda.gov/medical-devices/premarket-submissions-selecting-and-preparing-correct-submission/humanitarian-device-exemption"
      },
      {
        "name": "Breakthrough Devices Program",
        "nameJa": "画期的医療機器プログラム（指定制度 — 独立した承認経路ではない）",
        "applicableClasses": [
          "全クラス"
        ],
        "description": "独立した承認経路ではなく、510(k)/De Novo/PMAに重なる指定制度。生命を脅かす疾患の診断・治療に画期的な技術を提供する機器に対し、優先審査、インタラクティブレビュー、Sprint審査等の特典を付与。21st Century Cures Act で法定化。",
        "subtypes": [],
        "avgReviewTime": "通常審査より大幅短縮（ケースバイケース）",
        "fee": "通常の申請手数料が適用",
        "url": "https://www.fda.gov/medical-devices/how-study-and-market-your-device/breakthrough-devices-program"
      },
      {
        "name": "EUA (Emergency Use Authorization)",
        "nameJa": "EUA 緊急使用許可",
        "applicableClasses": [
          "全クラス（緊急時）"
        ],
        "description": "公衆衛生上の緊急事態時に未承認機器の使用を許可。COVID-19パンデミックで大量発行。緊急事態終了後は通常の承認経路への移行が必要。",
        "subtypes": [],
        "avgReviewTime": "数日〜数週間（緊急度による）",
        "fee": "免除",
        "url": "https://www.fda.gov/emergency-preparedness-and-response/mcm-legal-regulatory-and-policy-framework/emergency-use-authorization"
      }
    ]
  },
  "electronicSubmission": {
    "system": "eSTAR + FDA ESG (Electronic Submissions Gateway)",
    "url": "https://www.fda.gov/industry/electronic-submissions-gateway",
    "description": "510(k) は eSTAR テンプレートでの電子申請が2023年10月から必須。De Novo は2025年10月1日からeSTAR必須。PMA等はFDA ESG経由で電子提出。",
    "mandatory": true
  },
  "udi": {
    "required": true,
    "system": "FDA UDI System — GUDID (Global Unique Device Identification Database)",
    "description": "全クラスの医療機器に UDI ラベリングが必要（段階的導入完了）。GUDID に機器情報を登録。発行機関: GS1, HIBCC, ICCBBA, ISBT 128。",
    "url": "https://www.fda.gov/medical-devices/unique-device-identification-system-udi-system",
    "timeline": "2014年開始。Class III（2014）→ Class II（2016）→ Class I（2022）で全クラス完了。"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "MDR (Medical Device Reporting) — 21 CFR Part 803",
      "mandatory": true,
      "url": "https://www.fda.gov/medical-devices/medical-device-safety/medical-device-reporting-mdr-how-report-medical-device-problems",
      "description": "製造業者・輸入業者・医療施設は、死亡・重篤な傷害・故障について FDA に報告義務。MedWatch Form 3500A を使用。"
    },
    "recalls": {
      "authority": "FDA",
      "description": "Class I（重篤な健康被害）/ Class II（一時的な健康被害）/ Class III（規制違反だが健康被害低リスク）の3段階。製造業者の自主回収が主だが、FDA は強制リコール権限も保有。",
      "url": "https://www.fda.gov/medical-devices/medical-device-safety/medical-device-recalls"
    },
    "surveillance": "Section 522 市販後調査命令、MedSun（Medical Product Safety Network）、MAUDE データベース（有害事象公開DB）"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "FDA",
    "name": "Certificate to Foreign Government (CFG)",
    "description": "FDA に登録された機器について、米国内で自由に販売可能であることを証明する文書。輸出先国の当局が要求する場合に使用。",
    "processingTime": "約4〜8週間（標準）、Expedited: 約2週間",
    "url": "https://www.fda.gov/industry/export-certificates/certificate-foreign-government-medical-devices"
  },
  "reimbursement": {
    "system": "Medicare / Medicaid（公的保険）+ 民間保険",
    "authority": "CMS (Centers for Medicare & Medicaid Services)",
    "description": "Medicare Part A（入院）/Part B（外来）でカバレッジ判断。National Coverage Determination（NCD）と Local Coverage Determination（LCD）の2層構造。新技術は New Technology Add-on Payment（NTAP）や Transitional Pass-Through で一時的な追加償還が可能。",
    "codingSystems": [
      "CPT (Current Procedural Terminology)",
      "HCPCS (Healthcare Common Procedure Coding System)",
      "ICD-10-PCS",
      "MS-DRG"
    ],
    "url": "https://www.cms.gov/Medicare/Coverage/CoverageGenInfo"
  },
  "marketingRules": {
    "authority": "FDA + FTC",
    "description": "FDA は医療機器のラベリングと販促資料を規制。FTC は一般消費者向け広告の虚偽表示を監視。Off-label promotion（承認適応外の販促）は FD&C Act 違反。",
    "keyRules": [
      "承認/認可された適応のみ広告可（off-label promotion 禁止）",
      "ラベリングは 21 CFR Part 801 に準拠",
      "DTC（Direct-to-Consumer）広告は FDA の事前審査不要だが適正基準あり",
      "FTC Act Section 5 による虚偽・欺瞞的広告の禁止"
    ]
  },
  "mdsap": {
    "status": "参加（受入れ）",
    "description": "MDSAP 監査報告書を受入れ。FDA は MDSAP 創設メンバー。ただし MDSAP は FDA の通常査察を完全に代替するものではなく、For Cause 査察は別途実施される。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "QMSR（2024年改訂、89 FR 7496）で ISO 13485:2016 を規則に直接組み込み（incorporation by reference）。2026年2月2日発効。ISO 14971等のRecognized Consensus Standardsとは法的位置づけが異なる。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "FDA 認知規格（Recognized Consensus Standard）として登録。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "FDA 認知規格。ソフトウェアライフサイクル要求として参照。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "FDA 認知規格。医用電気機器の安全・性能要求。"
    },
    "others": [
      {
        "standard": "ISO 10993 シリーズ",
        "notes": "生体適合性評価の認知規格"
      },
      {
        "standard": "IEC 62443",
        "notes": "サイバーセキュリティの参照規格として利用拡大中"
      }
    ]
  },
  "recentDevelopments": [
    {
      "date": "2026-02",
      "title": "QMSR 発効（21 CFR 820 改訂）",
      "description": "2024年2月2日公布（89 FR 7496）のQMSR最終規則が2026年2月2日に発効。ISO 13485:2016を規則に直接組み込み。新検査プログラムCP 7382.850に移行。"
    },
    {
      "date": "2025-10",
      "title": "De Novo eSTAR 義務化",
      "description": "De Novo Classification Requestの電子申請テンプレートeSTARが2025年10月1日から必須化。510(k)のeSTAR必須化（2023年10月）に続く措置。"
    },
    {
      "date": "2024-12",
      "title": "AI/ML SaMD PCCP 最終ガイダンス発行",
      "description": "Predetermined Change Control Plan（PCCP）の最終ガイダンスを2024年12月3日に発行。AI/ML機器のアルゴリズム変更に対する事前承認枠組み。"
    },
    {
      "date": "2022-12",
      "title": "サイバーセキュリティ義務化（FD&C Act Section 524B）",
      "description": "Consolidated Appropriations Act 2023（2022年12月29日成立）によりFD&C Act Section 524Bを追加。2023年3月29日発効。市販前申請にサイバーセキュリティ計画・SBOM提出を義務化。"
    }
  ],
  "lastUpdated": "2026-04-01",
  "verified": null
};
