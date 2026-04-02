/**
 * 国別規制プロファイル — 包括的データベース
 *
 * 医療機器規制に関する各国の詳細情報を構造化したデータ。
 * 法規制・分類体系・適合性評価・市販後監視・償還制度などを網羅。
 */

export const COUNTRY_FLAG = {
  USA: "🇺🇸", CAN: "🇨🇦", EU: "🇪🇺", JPN: "🇯🇵", CHN: "🇨🇳",
  KOR: "🇰🇷", AUS: "🇦🇺", GBR: "🇬🇧", BRA: "🇧🇷", IND: "🇮🇳",
  TWN: "🇹🇼", SGP: "🇸🇬", THA: "🇹🇭", IDN: "🇮🇩", VNM: "🇻🇳",
  MYS: "🇲🇾", SAU: "🇸🇦", CHE: "🇨🇭", MEX: "🇲🇽",
};

export const REGION_ORDER = ["North America", "Europe", "ASPAC", "Latam", "Middle East & Africa"];

export const COUNTRY_PROFILES = [
  // =========================================================================
  // --- USA ---
  // =========================================================================
  {
    code: "USA",
    country: "アメリカ合衆国",
    countryEn: "United States of America",
    region: "North America",
    flag: "🇺🇸",

    legalSystemOverview: {
      type: "連邦制（Federal system）",
      description:
        "米国の医療機器規制は連邦法である FD&C Act を根幹とし、FDA（食品医薬品局）が一元的に管轄する。1976年の Medical Device Amendments により現行の3クラス分類制度と市販前審査制度が導入された。州法による追加規制も存在するが、連邦法が主要な規制枠組みを形成している。FDA は市販前審査から市販後監視、施設査察、リコール管理までライフサイクル全体を監督する。",
      keyCharacteristics: [
        "FDA による一元的な連邦規制体制",
        "リスクベースの3クラス分類（Class I / II / III）",
        "市販前審査経路が複数（510(k)、PMA、De Novo 等）",
        "品質管理システム要求（QMSR / 旧QSR）の法的義務",
        "Predicate device に基づく実質的同等性の概念",
      ],
    },

    authorities: [
      {
        name: "FDA CDRH",
        fullName: "Food and Drug Administration - Center for Devices and Radiological Health",
        localName: null,
        role: "医療機器の市販前審査・市販後監視・リコール管理",
        url: "https://www.fda.gov/medical-devices",
        isPrimary: true,
      },
      {
        name: "CMS",
        fullName: "Centers for Medicare & Medicaid Services",
        localName: null,
        role: "Medicare/Medicaid 保険償還の管理",
        url: "https://www.cms.gov/",
        isPrimary: false,
      },
      {
        name: "FTC",
        fullName: "Federal Trade Commission",
        localName: null,
        role: "医療機器の広告・マーケティング監視",
        url: "https://www.ftc.gov/",
        isPrimary: false,
      },
    ],

    notifiedBodies: {
      system: "なし（FDA が直接審査）",
      description:
        "米国では欧州のような Notified Body 制度は存在しない。FDA CDRH が直接、市販前審査（510(k)、PMA等）を実施する。第三者審査（510(k) Third Party Review Program / Accredited Persons Program）は一部の510(k)に限定的に利用可能。",
      bodies: [],
    },

    deviceDefinition: {
      legalDefinition:
        "FD&C Act Section 201(h) に定義。疾病の診断・治療・予防等を目的とする器具・装置・機械等で、体の構造・機能に影響を与えることを意図し、化学的作用によらないもの。",
      scope:
        "体外診断用医薬品（IVD）も含む。コンビネーション製品は OCP（Office of Combination Products）が管轄判断。",
      notes:
        "ソフトウェア（SaMD）は2017年 Digital Health Innovation Action Plan 以降、規制対象の明確化が進行。21st Century Cures Actにより臨床意思決定支援等の一部ソフトウェア機能はFD&C Act Section 520(o)で規制対象外に。",
    },

    primaryLaw: {
      title: "Federal Food, Drug, and Cosmetic Act (FD&C Act)",
      originalTitle: null,
      enacted: "1938",
      lastAmended: "2022（Consolidated Appropriations Act 2023でSection 524Bを追加）",
      url: "https://www.govinfo.gov/app/details/COMPS-973/",
      description:
        "医療機器規制の根幹法。1976年 Medical Device Amendments で現行の3クラス制と市販前審査制度を導入。Title 21 USC Chapter 9, Subchapter V が医療機器を規定。",
    },

    implementingRegulations: [
      {
        title: "21 CFR Part 820 - Quality Management System Regulation (QMSR)",
        date: "2024-02-02",
        url: "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-820",
        description:
          "医療機器の品質管理システム要求。2024年2月2日公布（89 FR 7496）でISO 13485:2016を直接参照するQMSRに改訂。2026年2月2日発効。",
        category: "QMS",
      },
      {
        title: "21 CFR Part 807 - Establishment Registration and Device Listing",
        date: null,
        url: "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-807",
        description:
          "施設登録と機器リスティング。米国で医療機器を製造・輸入する施設は FDA への登録が必要。",
        category: "登録",
      },
      {
        title: "21 CFR Part 814 - Premarket Approval (PMA)",
        date: null,
        url: "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-814",
        description: "クラスIII 高リスク機器の市販前承認手続き。",
        category: "市販前審査",
      },
      {
        title: "21 CFR Part 812 - Investigational Device Exemptions (IDE)",
        date: null,
        url: "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-812",
        description: "治験機器の免除規定。臨床試験実施のための要件。",
        category: "臨床試験",
      },
      {
        title: "21 CFR Part 803 - Medical Device Reporting",
        date: null,
        url: "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-803",
        description: "有害事象（死亡・重篤な傷害・故障）の報告義務。",
        category: "市販後",
      },
      {
        title: "21 CFR Part 860 - Medical Device Classification Procedures",
        date: null,
        url: "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-860",
        description: "医療機器のクラス分類手続き。",
        category: "分類",
      },
      {
        title: "21 CFR Part 801 - Labeling",
        date: null,
        url: "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-801",
        description: "医療機器のラベリング要求。",
        category: "表示",
      },
      {
        title: "21 CFR Part 830 - Unique Device Identification",
        date: "2013年〜段階的施行",
        url: "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-830",
        description: "UDI システムの要求事項。",
        category: "UDI",
      },
    ],

    relatedLaws: [
      {
        title: "HIPAA (Health Insurance Portability and Accountability Act)",
        category: "個人情報保護",
        enacted: "1996",
        url: "https://www.hhs.gov/hipaa/index.html",
        relevance:
          "医療機器が取り扱う保護対象医療情報（PHI）のプライバシーとセキュリティ要件を規定。コネクテッドデバイスやSaMDに直接影響。",
      },
      {
        title: "21st Century Cures Act",
        category: "規制改革",
        enacted: "2016",
        url: "https://www.congress.gov/bill/114th-congress/house-bill/34",
        relevance:
          "臨床意思決定支援ソフトウェア等の一部をFDA規制対象外に。Breakthrough Devices Program を法定化。Real-World Evidence の活用を推進。",
      },
      {
        title: "Consolidated Appropriations Act 2023 — Section 3305 (FD&C Act Section 524B)",
        category: "サイバーセキュリティ",
        enacted: "2022-12-29",
        url: "https://www.fda.gov/medical-devices/digital-health-center-excellence/cybersecurity",
        relevance:
          "医療機器のサイバーセキュリティ要件をFD&C Act Section 524Bとして追加（2023年3月29日発効）。市販前申請にサイバーセキュリティ計画・SBOM提出を義務化。旧称PATCH Actの内容を包含。",
      },
      {
        title: "TSCA (Toxic Substances Control Act)",
        category: "化学物質",
        enacted: "1976",
        url: "https://www.epa.gov/tsca-inventory",
        relevance:
          "医療機器に使用される化学物質の規制。特にフタル酸エステル等の材料規制に関連。",
      },
    ],

    classification: {
      system: "3クラス制（Class I / II / III）",
      basis: "リスクベース",
      classes: [
        {
          name: "Class I",
          nameJa: "クラスI",
          riskLevel: "低リスク",
          description:
            "一般的制御（General Controls）のみで安全性・有効性を確保。約47%の医療機器が該当。多くが510(k)免除。",
          examples: ["弾性包帯", "手動外科器具", "聴診器"],
          approvalPath: "一般的制御（大半が510(k)免除、一部は510(k)必要）",
        },
        {
          name: "Class II",
          nameJa: "クラスII",
          riskLevel: "中リスク",
          description:
            "一般的制御に加え特別制御（Special Controls: ガイダンス・性能基準等）が必要。約43%が該当。",
          examples: ["電動車椅子", "妊娠検査キット", "輸液ポンプ", "超音波診断装置"],
          approvalPath: "510(k) 市販前届出（一部は De Novo）",
        },
        {
          name: "Class III",
          nameJa: "クラスIII",
          riskLevel: "高リスク",
          description:
            "生命維持・生命支持、または不合理なリスクを呈する機器。最も厳格な規制。約10%が該当。",
          examples: ["人工心臓弁", "冠動脈ステント", "埋込み型除細動器", "人工内耳"],
          approvalPath: "PMA（市販前承認）",
        },
      ],
      rules: [
        {
          id: "Product Code 分類",
          description:
            "FDA は約6,000の Product Code で各機器を分類。16の医学専門パネル（Advisory Committee）に対応。",
          url: "https://www.fda.gov/medical-devices/classify-your-medical-device",
        },
        {
          id: "Classification Database",
          description:
            "FDA Product Classification Database で既存分類を検索可能。新規機器は De Novo で新分類を申請。",
          url: "https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfPCD/classification.cfm",
        },
      ],
      totalProductCodes: "約6,000 Product Codes（約1,700の generic types を16の医学専門パネルに分類）",
    },

    conformityAssessment: {
      overview:
        "FDA が直接市販前審査を実施する。審査経路はリスク分類と predicate device の有無により決定。",
      routes: [
        {
          name: "510(k) Premarket Notification",
          nameJa: "510(k) 市販前届出",
          applicableClasses: ["Class I（一部）", "Class II"],
          description:
            "実質的同等性（Substantial Equivalence）を既存の predicate device と比較して証明する経路。最も利用件数が多い。",
          subtypes: [
            {
              name: "Traditional 510(k)",
              description:
                "標準的な510(k)。性能データ、ベンチテスト、場合により臨床データを提出。",
            },
            {
              name: "Abbreviated 510(k)",
              description:
                "FDA認知規格（Recognized Consensus Standards）への適合宣言で一部データを省略。ガイダンス適合の場合に利用可能。",
            },
            {
              name: "Special 510(k)",
              description:
                "自社の既承認機器の軽微変更用。設計管理文書のみで対応可能な場合に適用。",
            },
          ],
          avgReviewTime: "FDA 目標: 90日（MDUFA）。実績平均: 約100〜130日。",
          fee: "Standard: $24,335（FY2025）、Small Business: $6,084",
          url: "https://www.fda.gov/medical-devices/premarket-submissions-selecting-and-preparing-correct-submission/premarket-notification-510k",
        },
        {
          name: "PMA (Premarket Approval)",
          nameJa: "PMA 市販前承認",
          applicableClasses: ["Class III"],
          description:
            "高リスク機器に対する最も厳格な審査。安全性・有効性の十分な科学的証拠（通常は臨床試験データ）が必要。",
          subtypes: [
            {
              name: "Original PMA",
              description: "新規 Class III 機器の初回承認申請。",
            },
            {
              name: "PMA Supplement",
              description:
                "承認済みPMA機器の変更申請。変更の程度により180日/Real-Time等の区分あり。",
            },
            {
              name: "Panel-Track PMA",
              description: "Advisory Committee の推奨に基づく審査。",
            },
          ],
          avgReviewTime: "FDA 目標: 180日（First Action）。実績: 約12〜18ヶ月。",
          fee: "Standard: $540,783（FY2025）、Small Business: $135,196",
          url: "https://www.fda.gov/medical-devices/premarket-submissions-selecting-and-preparing-correct-submission/premarket-approval-pma",
        },
        {
          name: "De Novo Classification",
          nameJa: "De Novo 分類",
          applicableClasses: ["新規 Class I / II（predicate なし）"],
          description:
            "Predicate device が存在しない低〜中リスクの新規機器用。一般的制御および特別制御で安全性・有効性を確保できることを証明。承認後は後続機器の predicate となる。",
          subtypes: [],
          avgReviewTime: "FDA 目標: 150日。実績: 約200〜300日。",
          fee: "Standard: $162,235（FY2025）、Small Business: $40,559",
          url: "https://www.fda.gov/medical-devices/premarket-submissions-selecting-and-preparing-correct-submission/de-novo-classification-request",
        },
        {
          name: "HDE (Humanitarian Device Exemption)",
          nameJa: "HDE 人道的使用免除",
          applicableClasses: ["Class III（希少疾患用）"],
          description:
            "年間対象患者数8,000人以下の希少疾患用機器。有効性の証明は不要（安全性と probable benefit の証明）。IRB 承認が使用条件。",
          subtypes: [],
          avgReviewTime: "約75日（FDA目標）",
          fee: "免除（Small Business 免除規定あり）",
          url: "https://www.fda.gov/medical-devices/premarket-submissions-selecting-and-preparing-correct-submission/humanitarian-device-exemption",
        },
        {
          name: "Breakthrough Devices Program",
          nameJa: "画期的医療機器プログラム（指定制度 — 独立した承認経路ではない）",
          applicableClasses: ["全クラス"],
          description:
            "独立した承認経路ではなく、510(k)/De Novo/PMAに重なる指定制度。生命を脅かす疾患の診断・治療に画期的な技術を提供する機器に対し、優先審査、インタラクティブレビュー、Sprint審査等の特典を付与。21st Century Cures Act で法定化。",
          subtypes: [],
          avgReviewTime: "通常審査より大幅短縮（ケースバイケース）",
          fee: "通常の申請手数料が適用",
          url: "https://www.fda.gov/medical-devices/how-study-and-market-your-device/breakthrough-devices-program",
        },
        {
          name: "EUA (Emergency Use Authorization)",
          nameJa: "EUA 緊急使用許可",
          applicableClasses: ["全クラス（緊急時）"],
          description:
            "公衆衛生上の緊急事態時に未承認機器の使用を許可。COVID-19パンデミックで大量発行。緊急事態終了後は通常の承認経路への移行が必要。",
          subtypes: [],
          avgReviewTime: "数日〜数週間（緊急度による）",
          fee: "免除",
          url: "https://www.fda.gov/emergency-preparedness-and-response/mcm-legal-regulatory-and-policy-framework/emergency-use-authorization",
        },
      ],
    },

    electronicSubmission: {
      system: "eSTAR + FDA ESG (Electronic Submissions Gateway)",
      url: "https://www.fda.gov/industry/electronic-submissions-gateway",
      description:
        "510(k) は eSTAR テンプレートでの電子申請が2023年10月から必須。De Novo は2025年10月1日からeSTAR必須。PMA等はFDA ESG経由で電子提出。",
      mandatory: true,
    },

    udi: {
      required: true,
      system: "FDA UDI System — GUDID (Global Unique Device Identification Database)",
      description:
        "全クラスの医療機器に UDI ラベリングが必要（段階的導入完了）。GUDID に機器情報を登録。発行機関: GS1, HIBCC, ICCBBA, ISBT 128。",
      url: "https://www.fda.gov/medical-devices/unique-device-identification-system-udi-system",
      timeline:
        "2014年開始。Class III（2014）→ Class II（2016）→ Class I（2022）で全クラス完了。",
    },

    postMarket: {
      adverseEventReporting: {
        system: "MDR (Medical Device Reporting) — 21 CFR Part 803",
        mandatory: true,
        url: "https://www.fda.gov/medical-devices/medical-device-safety/medical-device-reporting-mdr-how-report-medical-device-problems",
        description:
          "製造業者・輸入業者・医療施設は、死亡・重篤な傷害・故障について FDA に報告義務。MedWatch Form 3500A を使用。",
      },
      recalls: {
        authority: "FDA",
        description:
          "Class I（重篤な健康被害）/ Class II（一時的な健康被害）/ Class III（規制違反だが健康被害低リスク）の3段階。製造業者の自主回収が主だが、FDA は強制リコール権限も保有。",
        url: "https://www.fda.gov/medical-devices/medical-device-safety/medical-device-recalls",
      },
      surveillance:
        "Section 522 市販後調査命令、MedSun（Medical Product Safety Network）、MAUDE データベース（有害事象公開DB）",
    },

    certificateOfFreeSale: {
      available: true,
      issuingAuthority: "FDA",
      name: "Certificate to Foreign Government (CFG)",
      description:
        "FDA に登録された機器について、米国内で自由に販売可能であることを証明する文書。輸出先国の当局が要求する場合に使用。",
      processingTime: "約4〜8週間（標準）、Expedited: 約2週間",
      url: "https://www.fda.gov/industry/export-certificates/certificate-foreign-government-medical-devices",
    },

    reimbursement: {
      system: "Medicare / Medicaid（公的保険）+ 民間保険",
      authority: "CMS (Centers for Medicare & Medicaid Services)",
      description:
        "Medicare Part A（入院）/Part B（外来）でカバレッジ判断。National Coverage Determination（NCD）と Local Coverage Determination（LCD）の2層構造。新技術は New Technology Add-on Payment（NTAP）や Transitional Pass-Through で一時的な追加償還が可能。",
      codingSystems: [
        "CPT (Current Procedural Terminology)",
        "HCPCS (Healthcare Common Procedure Coding System)",
        "ICD-10-PCS",
        "MS-DRG",
      ],
      url: "https://www.cms.gov/Medicare/Coverage/CoverageGenInfo",
    },

    marketingRules: {
      authority: "FDA + FTC",
      description:
        "FDA は医療機器のラベリングと販促資料を規制。FTC は一般消費者向け広告の虚偽表示を監視。Off-label promotion（承認適応外の販促）は FD&C Act 違反。",
      keyRules: [
        "承認/認可された適応のみ広告可（off-label promotion 禁止）",
        "ラベリングは 21 CFR Part 801 に準拠",
        "DTC（Direct-to-Consumer）広告は FDA の事前審査不要だが適正基準あり",
        "FTC Act Section 5 による虚偽・欺瞞的広告の禁止",
      ],
    },

    mdsap: {
      status: "参加（受入れ）",
      description:
        "MDSAP 監査報告書を受入れ。FDA は MDSAP 創設メンバー。ただし MDSAP は FDA の通常査察を完全に代替するものではなく、For Cause 査察は別途実施される。",
    },

    internationalStandards: {
      iso13485: {
        accepted: true,
        notes:
          "QMSR（2024年改訂、89 FR 7496）で ISO 13485:2016 を規則に直接組み込み（incorporation by reference）。2026年2月2日発効。ISO 14971等のRecognized Consensus Standardsとは法的位置づけが異なる。",
      },
      iso14971: {
        accepted: true,
        notes: "FDA 認知規格（Recognized Consensus Standard）として登録。",
      },
      iec62304: {
        accepted: true,
        notes: "FDA 認知規格。ソフトウェアライフサイクル要求として参照。",
      },
      iec60601: {
        accepted: true,
        notes: "FDA 認知規格。医用電気機器の安全・性能要求。",
      },
      others: [
        { standard: "ISO 10993 シリーズ", notes: "生体適合性評価の認知規格" },
        {
          standard: "IEC 62443",
          notes: "サイバーセキュリティの参照規格として利用拡大中",
        },
      ],
    },

    recentDevelopments: [
      {
        date: "2026-02",
        title: "QMSR 発効（21 CFR 820 改訂）",
        description:
          "2024年2月2日公布（89 FR 7496）のQMSR最終規則が2026年2月2日に発効。ISO 13485:2016を規則に直接組み込み。新検査プログラムCP 7382.850に移行。",
      },
      {
        date: "2025-10",
        title: "De Novo eSTAR 義務化",
        description:
          "De Novo Classification Requestの電子申請テンプレートeSTARが2025年10月1日から必須化。510(k)のeSTAR必須化（2023年10月）に続く措置。",
      },
      {
        date: "2024-12",
        title: "AI/ML SaMD PCCP 最終ガイダンス発行",
        description:
          "Predetermined Change Control Plan（PCCP）の最終ガイダンスを2024年12月3日に発行。AI/ML機器のアルゴリズム変更に対する事前承認枠組み。",
      },
      {
        date: "2022-12",
        title: "サイバーセキュリティ義務化（FD&C Act Section 524B）",
        description:
          "Consolidated Appropriations Act 2023（2022年12月29日成立）によりFD&C Act Section 524Bを追加。2023年3月29日発効。市販前申請にサイバーセキュリティ計画・SBOM提出を義務化。",
      },
    ],

    lastUpdated: "2026-04-01",
    verified: null,
  },

  // =========================================================================
  // --- CANADA ---
  // =========================================================================
  {
    code: "CAN",
    country: "カナダ",
    countryEn: "Canada",
    region: "North America",
    flag: "🇨🇦",

    legalSystemOverview: {
      type: "連邦制（Federal system）",
      description:
        "カナダの医療機器規制は連邦法である Food and Drugs Act および Medical Devices Regulations (SOR/98-282) を根幹とし、Health Canada（カナダ保健省）が管轄する。4クラス分類制度を採用しており、クラスII〜IVの機器は市販前に Medical Device Licence（MDEL ではなく MDL）の取得が必要。MDSAP（Medical Device Single Audit Program）はカナダが主導的に推進し、クラスII〜IVの製造業者に MDSAP 認証を義務化している。",
      keyCharacteristics: [
        "Health Canada による連邦規制体制",
        "リスクベースの4クラス分類（Class I / II / III / IV）",
        "MDSAP 認証がクラスII〜IVで義務",
        "Medical Device Licence (MDL) による市販前認可",
        "Vanessa's Law による市販後権限の強化",
      ],
    },

    authorities: [
      {
        name: "Health Canada — MDD",
        fullName: "Health Canada — Medical Devices Directorate (within Health Products and Food Branch)",
        localName: "Direction des instruments médicaux, Santé Canada",
        role: "医療機器の市販前審査・認可（Medical Device Licence）・市販後監視・リコール",
        url: "https://www.canada.ca/en/health-canada/services/drugs-health-products/medical-devices.html",
        isPrimary: true,
      },
      {
        name: "CADTH",
        fullName: "Canada's Drug and Health Technology Agency",
        localName: null,
        role: "医療技術評価（HTA）と保険償還に関する推奨",
        url: "https://www.cadth.ca/",
        isPrimary: false,
      },
      {
        name: "INESSS",
        fullName: "Institut national d'excellence en santé et en services sociaux",
        localName: null,
        role: "ケベック州における医療技術評価（HTA）",
        url: "https://www.inesss.qc.ca/",
        isPrimary: false,
      },
    ],

    notifiedBodies: {
      system: "MDSAP 認定監査機関（Recognized Auditing Organizations）",
      description:
        "カナダでは欧州型の Notified Body 制度ではなく、MDSAP 認定監査機関が品質管理システム（QMS）の監査を実施する。クラスII〜IVの製造業者は MDSAP 認証を取得しなければならない。MDSAP 監査機関は Health Canada が認定する。",
      bodies: [
        { name: "BSI", country: "英国/オランダ", url: "https://www.bsigroup.com/" },
        { name: "SGS", country: "スイス", url: "https://www.sgs.com/" },
        { name: "TÜV SÜD", country: "ドイツ", url: "https://www.tuvsud.com/" },
        { name: "Intertek", country: "英国", url: "https://www.intertek.com/" },
        { name: "DEKRA", country: "ドイツ", url: "https://www.dekra.com/" },
      ],
    },

    deviceDefinition: {
      legalDefinition:
        "Food and Drugs Act Section 2 に定義。疾病の診断・治療・軽減・予防に使用される器具・装置・機器等。体の構造・機能を回復・矯正・修正する目的のものも含む。薬理学的・免疫学的・代謝的手段によらないもの。",
      scope:
        "IVD（体外診断用医療機器）も Medical Devices Regulations の適用範囲に含まれる。コンビネーション製品は主たる作用機序に基づき医療機器または医薬品として規制。",
      notes:
        "SaMD（Software as a Medical Device）は2019年のデジタルヘルステクノロジーに関するガイダンスにより規制対象の明確化が進行。",
    },

    primaryLaw: {
      title: "Food and Drugs Act",
      originalTitle: "Loi sur les aliments et drogues",
      enacted: "1920",
      lastAmended: "随時改正",
      url: "https://laws-lois.justice.gc.ca/eng/acts/f-27/",
      description:
        "カナダにおける食品・医薬品・医療機器規制の根幹法。医療機器に関する具体的な要件は下位規則である Medical Devices Regulations (SOR/98-282) に規定。",
    },

    implementingRegulations: [
      {
        title: "Medical Devices Regulations (SOR/98-282)",
        date: "1998年制定、随時改正",
        url: "https://laws-lois.justice.gc.ca/eng/regulations/SOR-98-282/",
        description:
          "医療機器の分類・認可（ライセンス）・ラベリング・品質管理・臨床試験・有害事象報告等を包括的に規定。カナダ医療機器規制の中核規則。",
        category: "包括規制",
      },
      {
        title: "Medical Device Establishment Licence (MDEL) Regulations",
        date: null,
        url: "https://www.canada.ca/en/health-canada/services/drugs-health-products/medical-devices/activities/device-establishment-licensing.html",
        description:
          "カナダ国内で医療機器の輸入・販売・流通を行う施設は MDEL（施設ライセンス）の取得が必要。製造業者は MDSAP 認証で代替可能な場合がある。",
        category: "施設許可",
      },
      {
        title: "Medical Devices Regulations — Part 1: Classification Rules",
        date: null,
        url: "https://laws-lois.justice.gc.ca/eng/regulations/SOR-98-282/page-2.html",
        description:
          "4クラス分類規則。意図する用途・侵襲性・使用期間・エネルギー源等に基づくルールベースの分類。",
        category: "分類",
      },
      {
        title: "Medical Device Single Audit Program (MDSAP) Requirements",
        date: "2019年1月より義務化",
        url: "https://www.canada.ca/en/health-canada/services/drugs-health-products/medical-devices/quality-requirements/quality-management-system-medical-devices-requirements/medical-device-single-audit-program.html",
        description:
          "クラスII〜IVの医療機器製造業者に対する MDSAP 認証義務。ISO 13485 に基づく QMS 監査を MDSAP 認定監査機関が実施。",
        category: "QMS",
      },
      {
        title: "Mandatory Problem Reporting for Medical Devices Regulations",
        date: null,
        url: "https://laws-lois.justice.gc.ca/eng/regulations/SOR-98-282/page-13.html",
        description:
          "医療施設（病院等）に対する有害事象の強制報告義務。製造業者・輸入業者の報告義務とは別枠。",
        category: "市販後",
      },
    ],

    relatedLaws: [
      {
        title: "Vanessa's Law (Protecting Canadians from Unsafe Drugs Act)",
        category: "市販後安全性",
        enacted: "2014",
        url: "https://www.canada.ca/en/health-canada/services/drugs-health-products/legislation-guidelines/questions-answers-vanessa-s-law-protecting-canadians-unsafe-drugs-act.html",
        relevance:
          "Health Canada の市販後権限を大幅に強化。強制リコール権限の付与、重篤な有害事象の義務的報告、臨床試験の登録・結果公開義務、行政制裁金（最大500万ドル/日）の導入。",
      },
      {
        title: "PIPEDA (Personal Information Protection and Electronic Documents Act)",
        category: "個人情報保護",
        enacted: "2000",
        url: "https://laws-lois.justice.gc.ca/eng/acts/P-8.6/",
        relevance:
          "連邦レベルの個人情報保護法。医療機器が扱う個人健康情報の収集・使用・開示に関する要件を規定。各州にも個別のプライバシー法が存在。",
      },
      {
        title: "Consumer Product Safety Act (CCPSA)",
        category: "製品安全",
        enacted: "2010",
        url: "https://laws-lois.justice.gc.ca/eng/acts/C-1.68/",
        relevance:
          "医療機器の境界領域にある一般消費者製品の安全規制。医療機器として規制されない健康関連製品に適用される可能性。",
      },
      {
        title: "Patent Act — Certificate of Supplementary Protection",
        category: "知的財産",
        enacted: "1869（随時改正）",
        url: "https://laws-lois.justice.gc.ca/eng/acts/P-4/",
        relevance:
          "医療機器に関連する特許保護。審査期間に起因するパテント期間の補償制度。",
      },
    ],

    classification: {
      system: "4クラス制（Class I / II / III / IV）",
      basis: "リスクベース（ルールベース分類）",
      classes: [
        {
          name: "Class I",
          nameJa: "クラスI",
          riskLevel: "最低リスク",
          description:
            "最もリスクが低い医療機器。Medical Device Licence（MDL）は不要。MDEL（施設ライセンス）と MDSAP 認証も不要。ラベリング要件と安全性・有効性の一般要件を満たすこと。",
          examples: ["舌圧子", "弾性包帯", "外科用メス", "聴診器"],
          approvalPath: "MDL 不要（MDEL のみ、自己宣言）",
        },
        {
          name: "Class II",
          nameJa: "クラスII",
          riskLevel: "低リスク",
          description:
            "低リスクの医療機器。MDL の取得が必要。製造業者は MDSAP 認証を取得しなければならない。Declaration of Conformity による適合宣言。",
          examples: ["コンタクトレンズ", "妊娠検査キット", "電動車椅子", "超音波診断装置"],
          approvalPath: "MDL（Declaration of Conformity ベース）+ MDSAP 認証",
        },
        {
          name: "Class III",
          nameJa: "クラスIII",
          riskLevel: "中リスク",
          description:
            "中リスクの医療機器。MDL 申請時により詳細な技術文書（安全性・有効性データ）が必要。MDSAP 認証必須。",
          examples: ["整形外科用インプラント", "血液透析装置", "人工呼吸器", "グルコースモニター"],
          approvalPath: "MDL（技術審査あり）+ MDSAP 認証",
        },
        {
          name: "Class IV",
          nameJa: "クラスIV",
          riskLevel: "高リスク",
          description:
            "最もリスクの高い医療機器。最も厳格な審査。臨床試験データが通常必要。MDL 取得に最も長い審査期間。MDSAP 認証必須。",
          examples: ["心臓ペースメーカー", "冠動脈ステント", "人工心臓弁", "埋込み型除細動器"],
          approvalPath: "MDL（最も詳細な技術審査 + 通常臨床データ）+ MDSAP 認証",
        },
      ],
      rules: [
        {
          id: "SOR/98-282 Schedule 1 分類規則",
          description:
            "医療機器の意図する用途、侵襲性、使用期間、エネルギー源等に基づく分類規則。16の分類ルールで構成。",
          url: "https://laws-lois.justice.gc.ca/eng/regulations/SOR-98-282/page-2.html",
        },
        {
          id: "Classification Tool",
          description:
            "Health Canada が提供するオンライン分類ツールで、質問に答えることで適切なクラスを判定可能。",
          url: "https://www.canada.ca/en/health-canada/services/drugs-health-products/medical-devices/application-information/guidance-documents/guidance-document-medical-device-classification-rules.html",
        },
      ],
      totalProductCodes: "分類規則ベース（米国のような Product Code 体系はなし）",
    },

    conformityAssessment: {
      overview:
        "Health Canada が Medical Device Licence (MDL) を発行。クラスII は Declaration of Conformity ベース、クラスIII/IV は技術審査を伴う。全てのクラスII〜IV製造業者に MDSAP 認証が必要。",
      routes: [
        {
          name: "Medical Device Licence (MDL) — Class II",
          nameJa: "医療機器ライセンス — クラスII",
          applicableClasses: ["Class II"],
          description:
            "Declaration of Conformity（適合宣言）に基づく認可。安全性・有効性データの詳細審査は通常不要だが、ラベリング・MDSAP 認証・適合宣言書等の提出が必要。",
          subtypes: [],
          avgReviewTime: "目標: 15営業日（書類不備がない場合）。実績: 約30〜60日。",
          fee: "CAD $468（年間ライセンス維持費: CAD $390）",
          url: "https://www.canada.ca/en/health-canada/services/drugs-health-products/medical-devices/application-information/guidance-documents/guidance-medical-device-licence-application.html",
        },
        {
          name: "Medical Device Licence (MDL) — Class III",
          nameJa: "医療機器ライセンス — クラスIII",
          applicableClasses: ["Class III"],
          description:
            "技術文書（安全性・有効性データ、リスクマネジメント、ベンチテスト結果等）の審査を伴う認可。臨床データが求められる場合もある。",
          subtypes: [],
          avgReviewTime: "目標: 60営業日。実績: 約4〜8ヶ月。",
          fee: "CAD $7,309（年間ライセンス維持費: CAD $390）",
          url: "https://www.canada.ca/en/health-canada/services/drugs-health-products/medical-devices/application-information/guidance-documents/guidance-medical-device-licence-application.html",
        },
        {
          name: "Medical Device Licence (MDL) — Class IV",
          nameJa: "医療機器ライセンス — クラスIV",
          applicableClasses: ["Class IV"],
          description:
            "最も詳細な技術審査。臨床試験データが通常必要。安全性・有効性の包括的な科学的証拠の提出。Health Canada 審査官による詳細レビュー。",
          subtypes: [],
          avgReviewTime: "目標: 75営業日。実績: 約6〜12ヶ月。",
          fee: "CAD $21,202（年間ライセンス維持費: CAD $390）",
          url: "https://www.canada.ca/en/health-canada/services/drugs-health-products/medical-devices/application-information/guidance-documents/guidance-medical-device-licence-application.html",
        },
        {
          name: "Investigational Testing Authorization (ITA)",
          nameJa: "治験機器許可",
          applicableClasses: ["Class II / III / IV（治験用）"],
          description:
            "カナダ国内で医療機器の臨床試験を実施するための許可。Medical Devices Regulations Part 3 に基づく。Research Ethics Board（REB）の承認も必要。",
          subtypes: [],
          avgReviewTime: "約30営業日",
          fee: "免除",
          url: "https://www.canada.ca/en/health-canada/services/drugs-health-products/medical-devices/application-information/guidance-documents/investigational-testing-medical-devices.html",
        },
        {
          name: "Special Access Programme (SAP)",
          nameJa: "特別アクセスプログラム",
          applicableClasses: ["未認可機器"],
          description:
            "緊急時または通常の治療法がない場合に、未認可の医療機器へのアクセスを許可するプログラム。医療従事者が個別患者のために申請。",
          subtypes: [],
          avgReviewTime: "緊急: 24時間以内。通常: 数日。",
          fee: "免除",
          url: "https://www.canada.ca/en/health-canada/services/drugs-health-products/special-access/medical-devices.html",
        },
        {
          name: "Interim Order Pathway",
          nameJa: "暫定命令経路",
          applicableClasses: ["全クラス（緊急時）"],
          description:
            "公衆衛生上の緊急事態時に大臣が発する Interim Order に基づく迅速認可経路。COVID-19 パンデミック時に導入。通常の認可要件を簡略化。",
          subtypes: [],
          avgReviewTime: "ケースバイケース（数日〜数週間）",
          fee: "免除",
          url: "https://www.canada.ca/en/health-canada/services/drugs-health-products/covid19-industry/medical-devices/interim-order.html",
        },
      ],
    },

    electronicSubmission: {
      system: "MDEL Online System / Health Canada Online Submissions",
      url: "https://www.canada.ca/en/health-canada/services/drugs-health-products/medical-devices/application-information.html",
      description:
        "MDL 申請はオンラインシステム経由での電子申請が推奨されている。MDEL も電子申請が利用可能。eSubmission 形式は eCTD 等のフォーマット。",
      mandatory: false,
    },

    udi: {
      required: false,
      system: "検討段階（コンサルテーション完了済み）",
      description:
        "Health Canadaは UDI制度のコンサルテーションを完了しているが、正式な施行規則は2026年4月時点で未公布。導入時期は未確定。",
      url: "https://www.canada.ca/en/health-canada/programs/consultation-unique-device-identification-system-medical-devices-canada.html",
      timeline:
        "コンサルテーション完了済み。正式な施行規則は未公布（2026年4月時点）。段階的導入の方針だが具体的スケジュールは未確定。",
    },

    postMarket: {
      adverseEventReporting: {
        system: "Mandatory Problem Reporting — Medical Devices Regulations Part 4",
        mandatory: true,
        url: "https://www.canada.ca/en/health-canada/services/drugs-health-products/medeffect-canada/adverse-reaction-reporting/mandatory-hospital-reporting.html",
        description:
          "製造業者・輸入業者は事故（死亡・重篤な健康悪化等）を10日以内（死亡は72時間以内）に Health Canada に報告義務。医療施設も Mandatory Problem Reporting の対象。Vanessa's Law により報告義務が強化。",
      },
      recalls: {
        authority: "Health Canada",
        description:
          "Type I（重篤な健康被害リスク）/ Type II（一時的な健康被害）/ Type III（低リスク）の3段階。Vanessa's Law により強制リコール権限を保有。リコール情報は Recalls and Safety Alerts Database で公開。",
        url: "https://recalls-rappels.canada.ca/en/search/site?f%5B0%5D=recall_type%3A867",
      },
      surveillance:
        "Canada Vigilance Program、CMDR（Canadian Medical Devices Registry）データベース、市販後調査命令権限（Vanessa's Law）",
    },

    certificateOfFreeSale: {
      available: true,
      issuingAuthority: "Health Canada",
      name: "Certificate of Free Sale (CFS)",
      description:
        "カナダで認可された医療機器について、自由に販売可能であることを証明する文書。輸出先国の規制当局が要求する場合に使用。MDL 保持者が申請可能。",
      processingTime: "約10〜20営業日",
      url: "https://www.canada.ca/en/health-canada/services/drugs-health-products/medical-devices/application-information/guidance-documents/certificate-free-sale.html",
    },

    reimbursement: {
      system: "州・準州の公的保険 + 民間保険",
      authority: "CADTH（連邦レベル HTA）+ 各州保健省",
      description:
        "カナダは単一支払者制度（Medicare）だが、医療サービスの提供は州・準州が管轄。CADTH が連邦レベルで HTA を実施し推奨を出すが、最終的なカバレッジ決定は各州が独自に行う。入院機器は病院グローバル予算に含まれる場合が多い。高額機器は Provincial Health Technology Assessment で評価。",
      codingSystems: [
        "CCI (Canadian Classification of Health Interventions)",
        "ICD-10-CA",
        "CMG (Case Mix Groups)",
      ],
      url: "https://www.cadth.ca/health-technology-assessment",
    },

    marketingRules: {
      authority: "Health Canada + Competition Bureau",
      description:
        "医療機器の広告はクラスI機器に限り一般公衆向けが可能。クラスII〜IV は医療従事者向けのみ。Food and Drugs Act Section 3 による虚偽・誤解を招く広告の禁止。",
      keyRules: [
        "クラスII〜IV の医療機器は一般消費者向け広告が原則禁止",
        "クラスI のみ一般公衆向け広告可（虚偽・誤解を招かない範囲で）",
        "認可された適応（Intended Use）の範囲内でのみ広告可",
        "Competition Act による虚偽表示・欺瞞的マーケティングの禁止",
      ],
    },

    mdsap: {
      status: "義務化（クラスII〜IV）",
      description:
        "カナダは MDSAP の主要推進国。2019年1月よりクラスII〜IVの全製造業者に MDSAP 認証を義務化。MDSAP 監査報告書が QMS 適合の唯一の証拠として使用される。ISO 13485 認証だけでは不十分。",
    },

    internationalStandards: {
      iso13485: {
        accepted: true,
        notes:
          "MDSAP を通じて ISO 13485:2016 適合性を確認。カナダ固有の追加要件は MDSAP カナダ章で対応。",
      },
      iso14971: {
        accepted: true,
        notes: "リスクマネジメントの参照規格として認知。MDL 申請で引用。",
      },
      iec62304: {
        accepted: true,
        notes: "ソフトウェア含有医療機器に対する参照規格。",
      },
      iec60601: {
        accepted: true,
        notes: "医用電気機器の安全性能規格。CSA C22.2 No. 60601 としてカナダ国家規格にも採用。",
      },
      others: [
        {
          standard: "ISO 10993 シリーズ",
          notes: "生体適合性評価に適用",
        },
        {
          standard: "CAN/CSA-C22.2 No. 60601 シリーズ",
          notes: "IEC 60601 のカナダ国家規格版。電気安全要件。",
        },
      ],
    },

    recentDevelopments: [
      {
        date: "2024",
        title: "UDI 要件の段階的導入開始",
        description:
          "Medical Devices Regulations 改正により、Class IV から UDI ラベリング・データベース登録が義務化開始。",
      },
      {
        date: "2024",
        title: "SaMD 規制枠組みの更新",
        description:
          "Software as a Medical Device に関するガイダンス文書を更新。AI/ML 機器の規制アプローチを明確化。",
      },
      {
        date: "2023",
        title: "Agile Licensing 枠組み",
        description:
          "市販後データに基づく機器認可条件の動的更新を可能にする Agile Licensing アプローチの導入検討。",
      },
      {
        date: "2023",
        title: "サイバーセキュリティガイダンス改訂",
        description:
          "医療機器のサイバーセキュリティに関する市販前ガイダンスを改訂。SBOM（ソフトウェア部品表）要件を強化。",
      },
    ],

    lastUpdated: "2026-04-01",
    verified: null,
  },

  // =========================================================================
  // --- EU ---
  // =========================================================================
  {
    code: "EU",
    country: "欧州連合",
    countryEn: "European Union",
    region: "Europe",
    flag: "🇪🇺",

    legalSystemOverview: {
      type: "超国家的規制体制（Supranational regulatory framework）",
      description:
        "EU の医療機器規制は Regulation (EU) 2017/745（MDR: Medical Devices Regulation）および Regulation (EU) 2017/746（IVDR: In Vitro Diagnostic Medical Devices Regulation）を根幹とする。これらは EU 加盟27カ国に直接適用される Regulation（規則）であり、各国の国内法への転換は不要。欧州委員会（DG SANTE）が政策立案を行い、各国の Competent Authority（NCA: National Competent Authority）が実施・監視を担当する。適合性評価は Notified Body（認証機関）が実施する分散型システム。",
      keyCharacteristics: [
        "EU Regulation として全加盟国に直接適用",
        "リスクベースの分類（22の分類規則 — Annex VIII）",
        "Notified Body による適合性評価と CE マーキング",
        "EUDAMED（欧州医療機器データベース）による情報管理",
        "各国 NCA による市場監視と市販後監視の分担",
        "MDR / IVDR の並行運用体制",
      ],
    },

    authorities: [
      {
        name: "European Commission — DG SANTE",
        fullName: "European Commission — Directorate-General for Health and Food Safety",
        localName: null,
        role: "EU レベルの医療機器政策立案・規制枠組みの管理・Notified Body の監督調整",
        url: "https://health.ec.europa.eu/medical-devices-sector_en",
        isPrimary: true,
      },
      {
        name: "MDCG",
        fullName: "Medical Device Coordination Group",
        localName: null,
        role: "MDR/IVDR の統一的実施に関するガイダンス策定・加盟国間の調整",
        url: "https://health.ec.europa.eu/medical-devices-sector/new-regulations/guidance-mdcg-endorsed-documents-and-other-guidance_en",
        isPrimary: false,
      },
      {
        name: "各国 NCA（例: BfArM, ANSM, IGJ 等）",
        fullName: "National Competent Authorities of EU Member States",
        localName: null,
        role: "自国領域内の市場監視・ビジランス・Notified Body の指定と監督",
        url: "https://health.ec.europa.eu/medical-devices-sector/new-regulations/contacts_en",
        isPrimary: false,
      },
      {
        name: "EMA（一部の領域）",
        fullName: "European Medicines Agency",
        localName: null,
        role: "コンビネーション製品の薬事部分、コンパニオン診断薬との連携における相談窓口",
        url: "https://www.ema.europa.eu/",
        isPrimary: false,
      },
    ],

    notifiedBodies: {
      system: "Notified Body 制度（MDR Article 36-44 に基づき加盟国が指定）",
      description:
        "Notified Body（NB）は EU 加盟国の NCA（National Competent Authority）が指定し、欧州委員会が NANDO データベースに登録する。MDR と IVDR は別々の規則であり、NB の指定も規則ごとに独立して行われる。MDR 指定を受けた NB が自動的に IVDR の指定を受けるわけではない。旧 MDD 下では約80機関が存在したが、MDR/IVDR 移行に伴い指定基準が大幅に厳格化。2025年12月時点で MDR 指定52機関、IVDR 指定は依然として少数。IVDR 側の NB 不足は深刻な課題であり、IVD 製品の認証遅延の主因となっている。2025年12月には NB の統一的な品質管理・手続き要件を定める施行規則案が公表。2026年5月からは EUDAMED の NB・証明書モジュールが義務化。",
      nandoUrl: "https://webgate.ec.europa.eu/single-market-compliance-space/notified-bodies",
      sourceUrl: "https://webgate.ec.europa.eu/single-market-compliance-space/notified-bodies",
      totalDesignated: {
        mdr: "52機関（Regulation (EU) 2017/745 — 医療機器）",
        ivdr: "12機関+（Regulation (EU) 2017/746 — 体外診断用医療機器）",
        both: "一部機関が MDR・IVDR 両方指定",
        asOf: "2025年12月時点",
      },
      // ─── MDR (Regulation 2017/745) 指定 NB — 52機関（2025年12月時点）───
      // 出典: NANDO（EC Single Market Compliance Space）
      mdrBodies: [
        // ドイツ（10機関）
        { nb: "0044", name: "TÜV NORD CERT GmbH", country: "ドイツ", url: "https://www.tuev-nord-cert.de/", alsoIvdr: false },
        { nb: "0123", name: "TÜV SÜD Product Service GmbH", country: "ドイツ", url: "https://www.tuvsud.com/", alsoIvdr: true },
        { nb: "0124", name: "DEKRA Certification GmbH", country: "ドイツ", url: "https://www.dekra-certification.de/", alsoIvdr: true },
        { nb: "0197", name: "TÜV Rheinland LGA Products GmbH", country: "ドイツ", url: "https://www.tuv.com/", alsoIvdr: true },
        { nb: "0297", name: "DQS Medizinprodukte GmbH", country: "ドイツ", url: "https://www.dqs-med.de/", alsoIvdr: false },
        { nb: "0482", name: "DNV MEDCERT GmbH", country: "ドイツ", url: "https://www.medcert.de/", alsoIvdr: false },
        { nb: "0483", name: "MDC Medical Device Certification GmbH", country: "ドイツ", url: "https://www.mdc-ce.de/", alsoIvdr: true },
        { nb: "0494", name: "SLG Prüf- und Zertifizierungs GmbH", country: "ドイツ", url: "https://www.slg.de/", alsoIvdr: false },
        { nb: "0633", name: "Berlin Cert Prüf- und Zertifizierstelle für Medizinprodukte GmbH", country: "ドイツ", url: "https://www.berlin-cert.de/", alsoIvdr: false },
        { nb: "2975", name: "SZUTEST Konformitätsbewertungsstelle GmbH", country: "ドイツ", url: "https://www.szutest.com.tr/", alsoIvdr: false },
        // イタリア（10機関）
        { nb: "0051", name: "IMQ Istituto Italiano del Marchio di Qualità S.P.A.", country: "イタリア", url: "https://www.imq.it/", alsoIvdr: false },
        { nb: "0068", name: "MTIC InterCert S.r.l.", country: "イタリア", url: "https://www.mfrg.it/", alsoIvdr: false },
        { nb: "0373", name: "Istituto Superiore di Sanità (ISS)", country: "イタリア", url: "https://www.iss.it/", alsoIvdr: false },
        { nb: "0425", name: "ICIM S.P.A.", country: "イタリア", url: "https://www.icim.it/", alsoIvdr: false },
        { nb: "0426", name: "ITALCERT SRL", country: "イタリア", url: "https://www.italcert.it/", alsoIvdr: false },
        { nb: "0476", name: "Kiwa Cermet Italia S.p.A.", country: "イタリア", url: "https://www.kiwacermet.it/", alsoIvdr: false },
        { nb: "0477", name: "Eurofins Product Testing Italy S.r.l.", country: "イタリア", url: "https://tech.eurofins.it/", alsoIvdr: false },
        { nb: "0546", name: "CERTIQUALITY S.r.l.", country: "イタリア", url: "https://www.certiquality.it/", alsoIvdr: false },
        { nb: "1282", name: "ENTE CERTIFICAZIONE MACCHINE SRL (ECM)", country: "イタリア", url: "https://www.entecerma.it/", alsoIvdr: false },
        { nb: "1370", name: "BUREAU VERITAS ITALIA S.P.A.", country: "イタリア", url: "https://www.bureauveritas.it/", alsoIvdr: false },
        { nb: "1936", name: "TÜV Rheinland Italia SRL", country: "イタリア", url: "https://www.tuvitalia.com/", alsoIvdr: false },
        // オランダ（4機関）
        { nb: "0344", name: "DEKRA Certification B.V.", country: "オランダ", url: "https://www.dekra-product-safety.com/", alsoIvdr: true },
        { nb: "1912", name: "Kiwa Dare B.V.", country: "オランダ", url: "https://www.dare.nl/", alsoIvdr: false },
        { nb: "2797", name: "BSI Group The Netherlands B.V.", country: "オランダ", url: "https://www.bsigroup.com/", alsoIvdr: true },
        { nb: "3022", name: "Scarlet NB B.V.", country: "オランダ", url: "https://www.scarletnb.com/", alsoIvdr: false },
        // フランス（2機関）
        { nb: "0333", name: "AFNOR Certification", country: "フランス", url: "https://www.afnor.org/", alsoIvdr: false },
        { nb: "0459", name: "GMED SAS", country: "フランス", url: "https://www.gmed.fr/", alsoIvdr: true },
        // フィンランド（2機関）
        { nb: "0537", name: "Eurofins Electric & Electronics Finland Oy", country: "フィンランド", url: "https://www.eurofins.fi/", alsoIvdr: true },
        { nb: "0598", name: "SGS FIMKO OY", country: "フィンランド", url: "https://www.sgs.fi/", alsoIvdr: false },
        // スウェーデン（2機関）
        { nb: "2862", name: "Intertek Medical Notified Body AB", country: "スウェーデン", url: "https://www.intertek.se/", alsoIvdr: false },
        { nb: "3033", name: "RISE Medical Notified Body AB", country: "スウェーデン", url: "https://www.ri.se/", alsoIvdr: false },
        // ベルギー（1機関）
        { nb: "1639", name: "SGS Belgium NV", country: "ベルギー", url: "https://www.sgs.com/", alsoIvdr: false },
        // アイルランド（1機関）
        { nb: "0050", name: "National Standards Authority of Ireland (NSAI)", country: "アイルランド", url: "https://www.nsai.ie/", alsoIvdr: true },
        // ノルウェー（1機関）
        { nb: "2460", name: "DNV Product Assurance AS", country: "ノルウェー", url: "https://www.dnv.com/", alsoIvdr: false },
        // デンマーク（1機関）
        { nb: "2443", name: "TÜV SÜD Danmark", country: "デンマーク", url: "https://www.tuvsud.com/", alsoIvdr: false },
        // スペイン（1機関）
        { nb: "0318", name: "Centro Nacional de Certificación de Productos Sanitarios (CCPS)", country: "スペイン", url: "https://www.certificaps.gob.es/", alsoIvdr: false },
        // ポーランド（2機関）
        { nb: "1434", name: "Polskie Centrum Badań i Certyfikacji S.A. (PCBC)", country: "ポーランド", url: "https://www.pcbc.gov.pl/", alsoIvdr: false },
        { nb: "2274", name: "TÜV NORD Polska Sp. z o.o.", country: "ポーランド", url: "https://www.tuv-nord.pl/", alsoIvdr: false },
        // スロベニア（2機関）
        { nb: "1304", name: "Slovenian Institute of Quality and Metrology (SIQ)", country: "スロベニア", url: "https://www.siq.si/", alsoIvdr: false },
        { nb: "3121", name: "NOTICE, storitve ugotavljanja skladnosti, d.o.o.", country: "スロベニア", url: "https://www.noticenb.com/", alsoIvdr: false },
        // チェコ（2機関）
        { nb: "1023", name: "Institut pro Testování a Certifikaci (ITC)", country: "チェコ", url: "https://www.itczlin.cz/", alsoIvdr: false },
        { nb: "1383", name: "Český Metrologický Institut (CMI)", country: "チェコ", url: "https://www.cmi.cz/", alsoIvdr: false },
        // ハンガリー（2機関）
        { nb: "1011", name: "NEOEMKI Kft.", country: "ハンガリー", url: "https://www.neoemki.hu/", alsoIvdr: false },
        { nb: "2409", name: "CE Certiso Kft.", country: "ハンガリー", url: "https://www.cecertiso.hu/", alsoIvdr: false },
        // スロバキア（1機関）
        { nb: "2265", name: "3EC International a.s.", country: "スロバキア", url: "https://www.3ec.sk/", alsoIvdr: true },
        // オーストリア（1機関）
        { nb: "2962", name: "QMD Services GmbH", country: "オーストリア", url: "https://www.qmd-services.com/", alsoIvdr: true },
        // クロアチア（1機関）
        { nb: "2696", name: "UDEM Adriatic d.o.o.", country: "クロアチア", url: "https://www.udemadriatic.com/", alsoIvdr: false },
        // キプロス（1機関）
        { nb: "2803", name: "HTCert (Health Technology Certification Ltd)", country: "キプロス", url: "https://www.htcert.com/", alsoIvdr: false },
        // マルタ（1機関）— 新規
        { nb: "3132", name: "Malta Conformity Assessment Ltd.", country: "マルタ", url: "https://www.mca.org.mt/", alsoIvdr: false },
        // トルコ（3機関 — 関税同盟協定に基づくNANDO登録）
        { nb: "1984", name: "Kiwa Belgelendirme Hizmetleri A.Ş.", country: "トルコ", url: "https://www.kiwa.com/tr/", alsoIvdr: false },
        { nb: "2292", name: "UDEM Uluslararası Belgelendirme A.Ş.", country: "トルコ", url: "https://www.udem.com.tr/", alsoIvdr: false },
        { nb: "2764", name: "Notice Belgelendirme A.Ş.", country: "トルコ", url: "https://www.noticenb.com/", alsoIvdr: false },
      ],
      // ─── IVDR (Regulation 2017/746) のみ指定の NB ───
      // MDR と重複する機関は mdrBodies の alsoIvdr: true で表示。以下は IVDR のみ指定の機関。
      ivdrOnlyBodies: [
        { nb: "3018", name: "Sertio Oy", country: "フィンランド", url: "https://www.sertio.fi/" },
      ],
    },

    deviceDefinition: {
      legalDefinition:
        "MDR Article 2(1) に定義。人に対する医療目的（疾病の診断・予防・モニタリング・予測・予後・治療・軽減、傷害・障害の診断・モニタリング・治療・軽減・補償、解剖・生理学的プロセスの検査・置換・修正、体外受精を含む受胎制御）を有する器具・装置・ソフトウェア・インプラント・試薬・材料等で、薬理学的・免疫学的・代謝的手段によらないもの。",
      scope:
        "IVD は IVDR (2017/746) で別途規定。美容目的の製品（Annex XVI）も MDR の適用範囲に含まれる。コンビネーション製品は医薬品と機器の主たる作用機序により規制枠組みが決定。",
      notes:
        "MDR は旧 Medical Devices Directive (MDD 93/42/EEC) および Active Implantable Medical Devices Directive (AIMDD 90/385/EEC) を置き換え。2021年5月26日に完全適用開始。",
    },

    primaryLaw: {
      title: "Regulation (EU) 2017/745 — Medical Devices Regulation (MDR)",
      originalTitle: null,
      enacted: "2017",
      lastAmended: "2025（Regulation (EU) 2025/2457）",
      url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32017R0745",
      description:
        "EU における医療機器規制の根幹法。旧 MDD/AIMDD を置換し、2021年5月26日から適用。分類規則・適合性評価・市販後監視・ビジランス・UDI・臨床評価・Notified Body 要件等を包括的に規定。移行期間は2027年末まで延長（2024年改正 Regulation (EU) 2024/1860）。",
    },

    implementingRegulations: [
      {
        title: "Regulation (EU) 2017/746 — IVDR (In Vitro Diagnostic Medical Devices Regulation)",
        date: "2022年5月26日適用開始",
        url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32017R0746",
        description:
          "体外診断用医療機器（IVD）の規制。旧 IVDD (98/79/EC) を置換。リスクベースの4クラス分類（Class A/B/C/D）を導入。移行期間は2029年まで延長。",
        category: "IVD 規制",
      },
      {
        title: "Regulation (EU) 2024/1860 — MDR/IVDR 移行期間延長",
        date: "2024年",
        url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32024R1860",
        description:
          "旧指令下の認証から MDR/IVDR への移行期間を延長。MDR 対象機器は2027年末まで、IVDR 対象機器は2029年末までの段階的移行。",
        category: "移行措置",
      },
      {
        title: "Commission Implementing Regulation (EU) 2021/2226 — Common Specifications for IVD Class D",
        date: "2021年",
        url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32021R2226",
        description:
          "IVDR Class D 機器（HIV、肝炎ウイルス等の検査）に対する共通仕様。整合規格が存在しない場合の技術要件。",
        category: "共通仕様",
      },
      {
        title: "MDCG ガイダンス文書群",
        date: "随時発行",
        url: "https://health.ec.europa.eu/medical-devices-sector/new-regulations/guidance-mdcg-endorsed-documents-and-other-guidance_en",
        description:
          "MDCG が策定する MDR/IVDR の統一的解釈に関するガイダンス文書。臨床評価、適合性評価、ビジランス、UDI 等の各分野をカバー。法的拘束力はないが実務上必須。",
        category: "ガイダンス",
      },
      {
        title: "EU Harmonised Standards（整合規格）",
        date: "随時更新",
        url: "https://single-market-economy.ec.europa.eu/single-market/european-standards/harmonised-standards/medical-devices_en",
        description:
          "MDR/IVDR の Essential Requirements（基本要件）への適合を推定させる整合規格。CEN/CENELEC が策定。整合規格への適合は任意だが、適合推定（Presumption of Conformity）が得られる。",
        category: "規格",
      },
      {
        title: "Commission Implementing Decision on EUDAMED",
        date: "段階的運用開始",
        url: "https://ec.europa.eu/tools/eudamed/",
        description:
          "EUDAMED（European Database on Medical Devices）の運用に関する実施決定。6モジュールで構成。2025年11月の決定（Regulation 2025/2371）により、最初の4モジュール（Actor Registration、UDI/Device Registration、NB & Certificates、Market Surveillance）が2026年5月28日から義務化。残り2モジュール（Vigilance、Clinical Investigation）は段階的に追加予定。",
        category: "データベース",
      },
    ],

    relatedLaws: [
      {
        title: "GDPR (General Data Protection Regulation) — Regulation (EU) 2016/679",
        category: "個人情報保護",
        enacted: "2016（2018年適用）",
        url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679",
        relevance:
          "医療機器が処理する個人データ（健康データ）は GDPR で特別カテゴリーとして厳格に保護。SaMD・コネクテッドデバイス・臨床試験データに直接影響。データ保護影響評価（DPIA）が必要となる場合が多い。",
      },
      {
        title: "AI Act — Regulation (EU) 2024/1689",
        category: "人工知能",
        enacted: "2024",
        url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32024R1689",
        relevance:
          "AI を組み込んだ医療機器は High-Risk AI System に分類。MDR/IVDR の適合性評価を通じて AI Act の要件も充足する統合的アプローチ。透明性・ロバスト性・人間による監督等の追加要件。2025年〜段階的適用。",
      },
      {
        title: "REACH Regulation — Regulation (EC) No 1907/2006",
        category: "化学物質",
        enacted: "2006",
        url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32006R1907",
        relevance:
          "医療機器に使用される化学物質（特に CMR 物質、フタル酸エステル、内分泌攪乱物質）の規制。MDR Annex I Section 10.4 で CMR/ED 物質の使用制限を規定。REACH の Candidate List 物質を含む場合は代替評価が必要。",
      },
      {
        title: "RoHS Directive — Directive 2011/65/EU",
        category: "有害物質制限",
        enacted: "2011",
        url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32011L0065",
        relevance:
          "電気・電子機器中の特定有害物質の使用制限。医療機器は当初適用除外だったが、2014年から段階的に適用対象に。鉛・水銀・カドミウム・六価クロム等の使用制限。",
      },
      {
        title: "Clinical Trials Regulation — Regulation (EU) No 536/2014",
        category: "臨床試験",
        enacted: "2014（2022年適用）",
        url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32014R0536",
        relevance:
          "医薬品の臨床試験規制だが、コンビネーション製品の医薬品部分や併用療法の臨床試験に関連。CTIS（Clinical Trials Information System）による一元管理。",
      },
      {
        title: "NIS2 Directive — Directive (EU) 2022/2555",
        category: "サイバーセキュリティ",
        enacted: "2022",
        url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32022L2555",
        relevance:
          "ネットワーク・情報システムのセキュリティに関する指令。医療機器製造業者は Essential Entity または Important Entity として対象となり得る。インシデント報告義務やリスク管理措置の要件。",
      },
    ],

    classification: {
      system: "リスクベース分類（Annex VIII の22規則）— Class I / IIa / IIb / III",
      basis: "ルールベース（意図する用途、侵襲性、持続期間、エネルギー源等）",
      classes: [
        {
          name: "Class I",
          nameJa: "クラスI",
          riskLevel: "低リスク",
          description:
            "最もリスクが低い医療機器。製造者の自己宣言で CE マーキングが可能（測定機能付き・滅菌状態で供給・手術用再使用可能器具を除く）。Notified Body の関与は原則不要。",
          examples: ["弾性包帯", "聴診器", "手動外科器具", "車椅子（非電動）"],
          approvalPath: "自己宣言（Class Im/Is/Ir は Notified Body 関与必要）",
        },
        {
          name: "Class IIa",
          nameJa: "クラスIIa",
          riskLevel: "中低リスク",
          description:
            "中程度に低いリスクの医療機器。Notified Body による適合性評価が必要。QMS 審査または型式審査等の評価経路あり。",
          examples: ["補聴器", "輸液セット", "コンタクトレンズ", "超音波診断装置"],
          approvalPath: "Notified Body による適合性評価（Annex IX / XI）",
        },
        {
          name: "Class IIb",
          nameJa: "クラスIIb",
          riskLevel: "中高リスク",
          description:
            "中程度に高いリスクの医療機器。Notified Body による詳細な技術文書審査と QMS 審査が必要。",
          examples: ["人工呼吸器", "血液透析装置", "骨固定プレート", "輸液ポンプ"],
          approvalPath: "Notified Body による適合性評価（Annex IX / X + XI）",
        },
        {
          name: "Class III",
          nameJa: "クラスIII",
          riskLevel: "高リスク",
          description:
            "最もリスクの高い医療機器。最も厳格な適合性評価。技術文書の詳細審査、QMS の完全監査、臨床評価報告書の審査が必要。高リスク機器は Expert Panel への臨床評価相談が義務。",
          examples: ["人工心臓弁", "冠動脈ステント", "乳房インプラント", "全人工関節"],
          approvalPath: "Notified Body による適合性評価（Annex IX + 臨床評価相談）",
        },
      ],
      rules: [
        {
          id: "Annex VIII — 22の分類規則",
          description:
            "MDR Annex VIII に22の分類規則が規定。Rule 1-4: 非侵襲性機器、Rule 5-8: 侵襲性機器、Rule 9-13: 能動機器、Rule 14-22: 特殊規則（ソフトウェア、ナノ材料、CMR物質等含む）。",
          url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32017R0745#d1e32-1-1",
        },
        {
          id: "MDCG 2021-24: Classification of Medical Devices",
          description:
            "MDCG が発行する分類に関するガイダンス文書。境界事例や特定の製品群に関する分類の解釈指針を提供。",
          url: "https://health.ec.europa.eu/medical-devices-sector/new-regulations/guidance-mdcg-endorsed-documents-and-other-guidance_en",
        },
      ],
      totalProductCodes: "ルールベース分類のため Product Code 体系はなし（CND コードを使用）",
    },

    conformityAssessment: {
      overview:
        "MDR に基づく適合性評価は Notified Body が実施。クラスに応じた評価経路（Annex IX〜XI）を選択。評価完了後に EU 適合証明書が発行され、製造者が EU 適合宣言書を作成し CE マーキングを付与。Class I（一般）は製造者の自己宣言のみ。",
      routes: [
        {
          name: "Self-Declaration (Class I)",
          nameJa: "自己宣言（クラスI 一般）",
          applicableClasses: ["Class I（一般）"],
          description:
            "製造者が技術文書を作成し、MDR の一般安全性能要件（Annex I）への適合を自己宣言。EU 適合宣言書（Declaration of Conformity）を作成し CE マーキングを付与。Notified Body の関与不要。ただし Class Im（測定機能付き）/ Is（滅菌供給）/ Ir（再使用可能手術器具）は Notified Body 関与必要。",
          subtypes: [
            {
              name: "Class Im（測定機能付き）",
              description: "計量機能に関してのみ Notified Body が Annex IX Chapter I または Annex XI Part A で評価。",
            },
            {
              name: "Class Is（滅菌供給）",
              description: "滅菌プロセスに関してのみ Notified Body が Annex IX Chapter I または Annex XI Part A で評価。",
            },
            {
              name: "Class Ir（再使用可能手術器具）",
              description: "再処理に関してのみ Notified Body が Annex IX Chapter I または Annex XI Part A で評価。",
            },
          ],
          avgReviewTime: "製造者内部プロセス（Notified Body なし）",
          fee: "Notified Body 費用不要（Class Im/Is/Ir は除く）",
          url: "https://health.ec.europa.eu/medical-devices-sector/new-regulations/guidance-mdcg-endorsed-documents-and-other-guidance_en",
        },
        {
          name: "Annex IX — Quality Management System + Technical Documentation Assessment",
          nameJa: "附属書IX — 品質管理システム + 技術文書評価",
          applicableClasses: ["Class IIa", "Class IIb", "Class III"],
          description:
            "最も一般的な適合性評価経路。Notified Body が製造者の QMS（ISO 13485 ベース）を審査し、技術文書（設計、製造、性能データ、臨床評価等）を評価。Class IIa は抽出審査、Class IIb/III は個別製品の技術文書審査。Class III は臨床評価報告書の Expert Panel 相談が必要。",
          subtypes: [
            {
              name: "Annex IX Chapter I + III（QMS + 全技術文書）",
              description: "QMS 審査と全技術文書の個別審査。Class III の標準経路。",
            },
            {
              name: "Annex IX Chapter I + II（QMS + 代表的技術文書の抽出審査）",
              description: "QMS 審査と代表的技術文書の抽出審査。Class IIa / IIb の効率的経路。",
            },
          ],
          avgReviewTime: "Class IIa: 約3〜6ヶ月。Class IIb: 約6〜12ヶ月。Class III: 約12〜18ヶ月。",
          fee: "機関・製品群による（一般的に €20,000〜€200,000+）",
          url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32017R0745#d1e32-1-1",
        },
        {
          name: "Annex X + XI — Type Examination + Production Quality Assurance / Product Verification",
          nameJa: "附属書X + XI — 型式審査 + 製造品質保証 / 製品検証",
          applicableClasses: ["Class IIa", "Class IIb", "Class III"],
          description:
            "型式審査（Annex X）で代表的サンプルを審査し、Annex XI Part A（製造品質保証）または Part B（製品検証）で量産品の適合を確認。Annex IX の代替経路として利用可能。",
          subtypes: [
            {
              name: "Annex X + Annex XI Part A",
              description: "型式審査 + 製造品質保証システムの審査。",
            },
            {
              name: "Annex X + Annex XI Part B",
              description: "型式審査 + 各製品またはバッチの製品検証。",
            },
          ],
          avgReviewTime: "Annex IX と同程度。",
          fee: "機関・製品群による",
          url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32017R0745#d1e32-1-1",
        },
        {
          name: "Clinical Investigation (Article 62-82)",
          nameJa: "臨床試験（MDR Article 62-82）",
          applicableClasses: ["全クラス（臨床データが必要な場合）"],
          description:
            "EU 域内で臨床試験を実施するための規定。加盟国の NCA と Ethics Committee の承認が必要。MDR では Clinical Investigation Application のプロセスが厳格化。EUDAMED の Clinical Investigation Module で管理予定。",
          subtypes: [],
          avgReviewTime: "NCA 審査: 各国により異なる（通常45〜60日）。Ethics Committee: 並行審査。",
          fee: "各国により異なる",
          url: "https://health.ec.europa.eu/medical-devices-sector/new-regulations/guidance-mdcg-endorsed-documents-and-other-guidance_en",
        },
      ],
    },

    electronicSubmission: {
      system: "EUDAMED (European Database on Medical Devices)",
      url: "https://ec.europa.eu/tools/eudamed/",
      description:
        "EUDAMED は6モジュールで構成。2026年5月28日から4モジュール（Actor Registration、UDI/Device Registration、NB & Certificates、Market Surveillance）が義務化（Regulation 2025/2371）。残りのVigilance・Clinical Investigationモジュールは段階的に追加予定。適合性評価申請自体は各 Notified Body の独自システムで実施。",
      mandatory: true,
    },

    udi: {
      required: true,
      system: "EU UDI System — EUDAMED UDI/Device Registration Module",
      description:
        "MDR Article 27-29 に基づく UDI 要件。Basic UDI-DI（モデルレベル）と UDI-DI（パッケージレベル）の2層構造。EUDAMED の UDI データベースに登録。発行機関: GS1, HIBCC, ICCBBA, IFA。",
      url: "https://health.ec.europa.eu/medical-devices-sector/new-regulations/eudamed_en",
      timeline:
        "UDI/Device Registration ModuleはEUDAMEDの4モジュール義務化（2026年5月28日）に含まれる。Class III・植込み型機器から段階的に義務化済み。EUDAMED義務化によりUDIデータベース登録が全面的に必須化。",
    },

    postMarket: {
      adverseEventReporting: {
        system: "Vigilance System（MDR Article 87-92）",
        mandatory: true,
        url: "https://health.ec.europa.eu/medical-devices-sector/new-regulations/guidance-mdcg-endorsed-documents-and-other-guidance_en",
        description:
          "製造者は重篤な有害事象（Serious Incident）を NCA に報告義務。報告期限: 死亡・公衆衛生上の脅威は即時だが遅くとも2日以内、その他の重篤な有害事象は15日以内。Field Safety Corrective Action（FSCA）と Field Safety Notice（FSN）の実施・通知義務。EUDAMED Vigilance Module で EU レベルの情報共有予定。",
      },
      recalls: {
        authority: "各国 NCA + 製造者",
        description:
          "Field Safety Corrective Action（FSCA）として製造者が自主的に是正措置を実施。各国 NCA が市場監視を行い、必要に応じ強制措置。RAPEX/Safety Gate システムで加盟国間の情報共有。",
        url: "https://ec.europa.eu/safety-gate/",
      },
      surveillance:
        "Post-Market Surveillance Plan（MDR Article 83-84）、Periodic Safety Update Report（PSUR — Class IIa以上）、Post-Market Clinical Follow-up（PMCF）、Trend Reporting",
    },

    certificateOfFreeSale: {
      available: true,
      issuingAuthority: "各加盟国の NCA",
      name: "Certificate of Free Sale (CFS)",
      description:
        "CE マーキングされた医療機器について、各加盟国の NCA が Free Sale Certificate を発行。EU 域外への輸出時に輸入国の規制当局が要求する場合に使用。発行は製造者の登録国の NCA が行うのが一般的。",
      processingTime: "各国により異なる（通常2〜6週間）",
      url: "https://health.ec.europa.eu/medical-devices-sector/new-regulations/contacts_en",
    },

    reimbursement: {
      system: "各加盟国の国民保健制度（EU レベルの統一保険制度なし）",
      authority: "EUnetHTA（EU レベル HTA 協力）+ 各国 HTA 機関",
      description:
        "医療機器の保険償還は各加盟国が独自に決定。EU レベルでは Regulation (EU) 2021/2282 により EU HTA（Health Technology Assessment）の共同臨床評価が2025年から段階的に導入。医療機器は2028年から対象予定。各国の主要 HTA 機関: G-BA/IQWiG（ドイツ）、HAS（フランス）、NICE（英国 — EU離脱後も参照）、AIFA（イタリア）等。",
      codingSystems: [
        "各国固有のコーディングシステム",
        "GMDN (Global Medical Device Nomenclature)",
        "CND (Classificazione Nazionale dei Dispositivi medici — イタリア等)",
        "NUB (Neue Untersuchungs- und Behandlungsmethoden — ドイツ)",
      ],
      url: "https://health.ec.europa.eu/health-technology-assessment_en",
    },

    marketingRules: {
      authority: "各国 NCA + EU レベルの一般原則",
      description:
        "医療機器の広告は各加盟国の国内法で規制。MDR Article 7 で虚偽的・誤解を招くラベリング・広告を禁止。CE マーキングの不正使用は罰則対象。各国にはそれぞれ独自の広告規制（例: ドイツ HWG（医薬品広告法）、フランス Code de la santé publique）が存在。",
      keyRules: [
        "MDR Article 7: 虚偽的・誤解を招く機能・性能の表示禁止",
        "CE マーキングの要件を満たさない機器への CE マーキング付与禁止",
        "各加盟国の広告法を遵守（ドイツ HWG、フランス CSP 等）",
        "Intended Purpose（意図する用途）の範囲内でのみ広告可",
        "Unfair Commercial Practices Directive (2005/29/EC) による欺瞞的商行為の禁止",
      ],
    },

    mdsap: {
      status: "非参加",
      description:
        "EUはMDSAPに参加していない（IMDRF membershipとMDSAP participantは別）。MDRに基づくNotified Body独自のQMS審査が必要であり、MDSAP監査報告書はNB審査を代替しない。",
    },

    internationalStandards: {
      iso13485: {
        accepted: true,
        notes:
          "MDR の QMS 要件は ISO 13485:2016 をベースとするが、MDR 固有の追加要件（市販後監視、ビジランス等）がある。EN ISO 13485:2016 が整合規格として引用。",
      },
      iso14971: {
        accepted: true,
        notes:
          "EN ISO 14971:2019 + A11:2021 が整合規格。MDR のリスクマネジメント要件（Annex I Section 3）に対応。",
      },
      iec62304: {
        accepted: true,
        notes:
          "EN IEC 62304:2006 + A1:2015 が整合規格。ソフトウェアライフサイクル管理に適用。",
      },
      iec60601: {
        accepted: true,
        notes:
          "EN IEC 60601 シリーズが整合規格。医用電気機器の安全・性能要件。各 Particular Standard も含む。",
      },
      others: [
        {
          standard: "ISO 10993 シリーズ",
          notes: "EN ISO 10993 として整合規格。生体適合性評価に適用。",
        },
        {
          standard: "ISO 14155:2020",
          notes: "臨床試験の GCP（Good Clinical Practice）。MDR 臨床試験要件に対応。",
        },
        {
          standard: "IEC 62443 シリーズ",
          notes: "サイバーセキュリティの参照規格。MDCG ガイダンスで推奨。",
        },
      ],
    },

    recentDevelopments: [
      {
        date: "2024",
        title: "MDR/IVDR 移行期間の再延長",
        description:
          "Regulation (EU) 2024/1860 により、旧指令下の認証から MDR への移行期限を2027年末まで、IVDR は2029年末まで延長。Notified Body のキャパシティ不足に対応。",
      },
      {
        date: "2024",
        title: "AI Act 成立と医療機器への影響",
        description:
          "Regulation (EU) 2024/1689（AI Act）が成立。AI 搭載医療機器は High-Risk AI System に該当し、MDR/IVDR の適合性評価と統合的に対応。2025年から段階的適用。",
      },
      {
        date: "2024",
        title: "EU HTA Regulation の適用開始準備",
        description:
          "Regulation (EU) 2021/2282 に基づく EU レベルの共同臨床評価が2025年1月から開始（まず抗がん剤・ATMP から）。選定された高リスク医療機器は2026年以降段階的に対象。",
      },
      {
        date: "2025-11",
        title: "EUDAMED 4モジュール義務化決定",
        description:
          "Regulation 2025/2371 により、EUDAMEDの最初の4モジュール（Actor Registration、UDI/Device Registration、NB & Certificates、Market Surveillance）が2026年5月28日から義務化。これまでの自主利用から法的義務へ移行。",
      },
      {
        date: "2024-10",
        title: "NIS2 Directive の国内法化期限",
        description:
          "NIS2 指令（Directive (EU) 2022/2555）の加盟国国内法化期限（2024年10月）。医療機器製造業者のサイバーセキュリティ義務に影響。",
      },
    ],

    lastUpdated: "2026-04-01",
    verified: null,
  },


  // ─── ASPAC（日本・中国・韓国）───
/* ================================================================
   *  日本 (JPN)
   * ================================================================ */
  {
    code: "JPN",
    country: "日本",
    countryEn: "Japan",
    region: "ASPAC",
    flag: "🇯🇵",

    legalSystemOverview: {
      type: "議院内閣制",
      description:
        "厚生労働省（MHLW）が医療機器の安全政策を所管し、独立行政法人 PMDA が審査・安全対策を実施する二元体制。薬機法に基づく許認可制度を運用し、リスク分類に応じた届出・認証・承認の3段階の申請経路が存在する。",
      keyCharacteristics: [
        "MHLW が法令・政策策定、PMDA が審査・安全対策実務を担当",
        "リスクベースの4クラス分類（一般〜高度管理医療機器）",
        "登録認証機関制度によるクラスII・III（認証基準あり）機器の第三者認証",
        "JMDN（日本医療機器名称データベース）による製品コード管理",
        "プログラム医療機器（SaMD）の段階的規制整備",
      ],
    },

    authorities: [
      {
        name: "PMDA",
        fullName: "独立行政法人 医薬品医療機器総合機構",
        localName: "医薬品医療機器総合機構",
        role: "医療機器の承認審査、安全対策（不具合報告の収集・分析）、健康被害救済の3業務を一元的に実施",
        url: "https://www.pmda.go.jp/",
        isPrimary: true,
      },
      {
        name: "MHLW",
        fullName: "Ministry of Health, Labour and Welfare",
        localName: "厚生労働省",
        role: "医療機器規制の法令・政策策定、薬機法の所管、製造販売承認の最終決定（大臣承認）",
        url: "https://www.mhlw.go.jp/",
        isPrimary: true,
      },
      {
        name: "登録認証機関",
        fullName: "Registered Certification Bodies",
        localName: "登録認証機関（第三者認証機関）",
        role: "クラスII管理医療機器のうち認証基準が定められた品目について、QMS適合性調査と基準適合性審査を実施して認証を付与",
        url: "https://www.pmda.go.jp/review-services/drug-reviews/about-reviews/devices/0015.html",
        isPrimary: false,
      },
    ],

    notifiedBodies: {
      system: "登録認証機関制度",
      description:
        "厚生労働大臣が登録する第三者認証機関。クラスII管理医療機器のうち、認証基準（JIS規格等）が定められた品目について、製品の基準適合性審査およびQMS適合性調査を行い認証を付与する。2026年現在、約15機関が登録。",
      bodies: [
        {
          name: "一般財団法人 日本品質保証機構（JQA）",
          url: "https://www.jqa.jp/service_list/medical/",
        },
        {
          name: "テュフ ラインランド ジャパン株式会社",
          url: "https://www.tuv.com/japan/jp/",
        },
        {
          name: "SGS ジャパン株式会社",
          url: "https://www.sgs.co.jp/",
        },
        {
          name: "一般財団法人 電気安全環境研究所（JET）",
          url: "https://www.jet.or.jp/",
        },
        {
          name: "BSI グループジャパン株式会社",
          url: "https://www.bsigroup.com/ja-JP/",
        },
      ],
    },

    deviceDefinition: {
      legalDefinition:
        "人若しくは動物の疾病の診断、治療若しくは予防に使用されること、又は人若しくは動物の身体の構造若しくは機能に影響を及ぼすことが目的とされている機械器具等であって、政令で定めるもの（薬機法第2条第4項）",
      scope:
        "機械器具、医療用品、歯科材料、衛生用品、プログラムおよびこれを記録した記録媒体。体外診断用医薬品は別途定義。プログラム医療機器（SaMD）も2014年改正で明確に対象化。",
      notes:
        "「プログラム」を医療機器の定義に含めた2014年施行の薬機法改正は世界に先駆けた取組み。コンビネーション製品（医療機器と医薬品の組合せ）は薬機法上の主たる要素で規制区分を判断。",
    },

    primaryLaw: {
      title: "薬機法（医薬品、医療機器等の品質、有効性及び安全性の確保等に関する法律）",
      originalTitle:
        "医薬品、医療機器等の品質、有効性及び安全性の確保等に関する法律（昭和35年法律第145号）",
      enacted: "1960-08-10",
      lastAmended: "2025（令和7年法律第37号）",
      url: "https://laws.e-gov.go.jp/document?lawid=335AC0000000145",
      description:
        "日本の医療機器規制の根拠法。旧薬事法を2013年に改正し、医療機器・再生医療等製品に関する規定を大幅整備。製造販売業の許可制度、クラス分類に応じた届出・認証・承認制度、QMS適合性調査、市販後安全対策、プログラム医療機器の取扱いなどを包括的に規定。2025年改正（法律第37号）で追加の制度整備を実施。",
    },

    implementingRegulations: [
      {
        title: "医薬品、医療機器等の品質、有効性及び安全性の確保等に関する法律施行令",
        date: "1961-01-26",
        url: "https://elaws.e-gov.go.jp/document?lawid=336CO0000000011",
        description: "薬機法の施行に必要な事項（クラス分類の別表、手数料等）を定める政令。",
        category: "施行令",
      },
      {
        title: "医薬品、医療機器等の品質、有効性及び安全性の確保等に関する法律施行規則",
        date: "1961-02-01",
        url: "https://elaws.e-gov.go.jp/document?lawid=336M50000100001",
        description:
          "薬機法の施行に必要な詳細手続き（申請書様式、届出要件、製造販売業許可基準等）を定める省令。",
        category: "施行規則",
      },
      {
        title: "医療機器及び体外診断用医薬品の製造管理及び品質管理の基準に関する省令（QMS省令）",
        date: "2004-12-17",
        url: "https://elaws.e-gov.go.jp/document?lawid=416M60000100169",
        description:
          "ISO 13485 を基礎としたQMS（品質マネジメントシステム）基準。製造販売承認・認証の要件としてQMS適合性調査で遵守を確認。2021年改正で国際整合を強化。",
        category: "QMS",
      },
      {
        title: "医療機器の基本要件基準（Essential Principles）",
        date: "2005-03-23",
        url: "https://www.mhlw.go.jp/web/t_doc?dataId=81aa5201&dataType=0&pageNo=1",
        description:
          "医療機器の安全性・性能に関する基本的要件。EU Essential Requirements / IMDRF Essential Principles に整合。承認・認証申請時に適合性を示す必要がある。",
        category: "基本要件",
      },
      {
        title: "承認申請書の記載要領・STED",
        date: "2014-11-21",
        url: "https://www.pmda.go.jp/review-services/drug-reviews/about-reviews/devices/0001.html",
        description:
          "承認申請書のSTED（Summary Technical Documentation）形式による記載要領。IMDRF/GHTF のSTED様式に準拠し、国際的な申請資料の共通化を促進。",
        category: "申請様式",
      },
      {
        title: "医療機器の臨床試験の実施の基準に関する省令（医療機器GCP省令）",
        date: "2005-03-23",
        url: "https://elaws.e-gov.go.jp/document?lawid=417M60000100036",
        description:
          "医療機器の治験の計画・実施・報告に関する基準。ICH-GCP を基礎としつつ医療機器の特性を反映。",
        category: "GCP",
      },
      {
        title:
          "医療機器の製造販売後の調査及び試験の実施の基準に関する省令（GPSP省令）",
        date: "2005-03-23",
        url: "https://elaws.e-gov.go.jp/document?lawid=417M60000100038",
        description:
          "製造販売後調査・試験（使用成績調査、特定使用成績調査、製造販売後臨床試験）の実施基準。再審査制度の実施に必要。",
        category: "GPSP",
      },
    ],

    relatedLaws: [
      {
        title: "個人情報の保護に関する法律（個人情報保護法）",
        category: "データ保護",
        enacted: "2003-05-30",
        url: "https://elaws.e-gov.go.jp/document?lawid=415AC0000000057",
        relevance:
          "医療機器から取得される健康データ・個人情報の取扱いに適用。2022年改正で仮名加工情報制度を導入。",
      },
      {
        title: "次世代医療基盤法（医療分野の研究開発に資するための匿名加工医療情報に関する法律）",
        category: "医療データ",
        enacted: "2017-05-12",
        url: "https://elaws.e-gov.go.jp/document?lawid=429AC0000000028",
        relevance:
          "匿名加工医療情報の利活用を促進。医療機器の市販後データ分析・リアルワールドデータ活用に関連。",
      },
      {
        title: "電気用品安全法",
        category: "電気安全",
        enacted: "1961-11-16",
        url: "https://elaws.e-gov.go.jp/document?lawid=336AC0000000234",
        relevance:
          "医療用電気機器のうち電気用品に該当するものはPSE マーク取得が必要。薬機法との二重規制に注意。",
      },
      {
        title: "臨床研究法",
        category: "臨床研究",
        enacted: "2017-04-14",
        url: "https://elaws.e-gov.go.jp/document?lawid=429AC0000000016",
        relevance:
          "医療機器を用いた臨床研究のうち特定臨床研究に該当するものは本法の遵守が必要。治験はGCP省令が適用。",
      },
      {
        title: "再生医療等の安全性の確保等に関する法律（再生医療等安全性確保法）",
        category: "再生医療",
        enacted: "2013-11-27",
        url: "https://elaws.e-gov.go.jp/document?lawid=425AC0000000085",
        relevance:
          "再生医療等製品と組み合わせて使用される医療機器、細胞加工に使用される機器に関連。",
      },
      {
        title: "化学物質の審査及び製造等の規制に関する法律（化審法）",
        category: "化学物質",
        enacted: "1973-10-16",
        url: "https://elaws.e-gov.go.jp/document?lawid=348AC0000000117",
        relevance:
          "医療機器に含有される化学物質（フタル酸エステル等）の規制に関連。生物学的安全性試験の評価にも影響。",
      },
      {
        title: "廃棄物の処理及び清掃に関する法律（廃掃法）",
        category: "廃棄物",
        enacted: "1970-12-25",
        url: "https://elaws.e-gov.go.jp/document?lawid=345AC0000000137",
        relevance:
          "使用済み医療機器・単回使用機器の廃棄処理に関する規制。感染性廃棄物の特別管理が必要。",
      },
    ],

    classification: {
      system: "薬機法に基づく4クラス分類",
      basis: "人体へのリスクの程度に基づく分類。GHTF（現 IMDRF）の国際分類ルールを参考に策定。",
      classes: [
        {
          name: "Class I",
          nameJa: "一般医療機器",
          riskLevel: "低",
          description:
            "不具合が生じた場合でも人体へのリスクが極めて低い医療機器。",
          examples: ["体外診断用機器（一部）", "X線フィルム", "歯科用ワックス", "メス・ピンセット", "聴診器"],
          approvalPath: "届出（製造販売届）",
        },
        {
          name: "Class II",
          nameJa: "管理医療機器",
          riskLevel: "中低",
          description:
            "不具合が生じた場合でも人体へのリスクが比較的低い医療機器。認証基準が設定されているものは登録認証機関による認証、それ以外は大臣承認。",
          examples: [
            "MRI 装置",
            "超音波画像診断装置",
            "電子内視鏡",
            "消化器用カテーテル",
            "歯科用合金",
            "補聴器",
            "家庭用電気治療器",
          ],
          approvalPath: "認証（登録認証機関）/ 承認（認証基準なしの場合）",
        },
        {
          name: "Class III",
          nameJa: "高度管理医療機器",
          riskLevel: "中高",
          description:
            "不具合が生じた場合に人体へのリスクが比較的高い医療機器。PMDA による審査を経て厚生労働大臣が承認。",
          examples: [
            "人工透析器",
            "人工骨",
            "人工呼吸器",
            "冠動脈ステント（薬剤溶出型以外）",
            "放射線治療システム",
          ],
          approvalPath: "承認（PMDA 審査 → 厚労大臣承認）",
        },
        {
          name: "Class IV",
          nameJa: "高度管理医療機器（クラスIV）",
          riskLevel: "高",
          description:
            "患者への侵襲性が高く、不具合が生じた場合に生命の危険に直結する医療機器。最も厳格な審査が適用される。",
          examples: [
            "ペースメーカー",
            "人工心臓弁",
            "ステントグラフト",
            "薬剤溶出型冠動脈ステント",
            "植込み型除細動器（ICD）",
          ],
          approvalPath: "承認（PMDA 審査 → 厚労大臣承認 / 優先審査の適用あり）",
        },
      ],
      rules: [
        "GHTF/IMDRF 分類ルールを参考にした別表による分類",
        "一般的名称ごとにクラスが指定（JMDN コードに紐付け）",
        "認証基準の有無でクラスII機器の審査経路が分岐",
        "プログラム医療機器はその意図する使用に応じてクラスII〜IVに分類",
      ],
      totalProductCodes: "約4,000（JMDN一般的名称数）",
    },

    conformityAssessment: {
      overview:
        "日本の医療機器の適合性評価は、リスク分類に応じて届出・認証・承認の3つの経路に分かれる。クラスIは届出のみ、クラスII・III（認証基準あり）は登録認証機関による第三者認証、クラスII（認証基準なし）・III（認証基準なし）・IVはPMDA審査を経て厚生労働大臣による承認が必要。2014年11月よりクラスIII高度管理医療機器の一部に認証基準が設定され第三者認証が可能に。全経路でQMS適合性調査が求められる（届出を除く）。",
      routes: [
        {
          name: "Notification (届出)",
          nameJa: "製造販売届出",
          applicableClasses: ["Class I"],
          description:
            "一般医療機器の製造販売を行う場合、都道府県知事に届出を行う。審査は実施されないが、製造販売業の許可（第三種）とQMS体制整備は必要。",
          subtypes: [],
          avgReviewTime: "即日〜数日（届出受理）",
          fee: "なし",
          url: "https://www.pmda.go.jp/review-services/drug-reviews/about-reviews/devices/0001.html",
        },
        {
          name: "Certification (認証)",
          nameJa: "第三者認証（登録認証機関による認証）",
          applicableClasses: ["Class II（認証基準あり）", "Class III（認証基準あり）"],
          description:
            "厚生労働大臣が定める認証基準（JIS規格等に基づく）が存在するクラスII管理医療機器、およびクラスIII高度管理医療機器の一部（2014年11月より認証基準設定品目）について、登録認証機関（全10機関）が基準適合性の審査とQMS適合性調査を実施して認証を付与。PMDAを経由しないため、承認と比較して迅速な市場投入が可能。",
          subtypes: [
            { name: "新規認証申請", description: "初回の認証取得。認証基準への適合性審査とQMS適合性調査を実施。" },
            { name: "一部変更認証申請", description: "認証取得済み品目の仕様変更。軽微変更届で対応可能な範囲を超える変更。" },
            { name: "軽微変更届", description: "認証事項の軽微な変更。届出のみで変更可能。" },
          ],
          avgReviewTime: "約2〜3ヶ月（登録認証機関により異なる）",
          fee: "約40万〜90万円（登録認証機関・品目により異なる）",
          url: "https://www.pmda.go.jp/review-services/drug-reviews/about-reviews/devices/0025.html",
          registeredCertificationBodies: [
            "テュフズードジャパン (AA)", "テュフ・ラインランド・ジャパン (AB)",
            "ドイツ品質システム認証 (AC)", "BSIグループジャパン (AD)",
            "SGSジャパン (AF)", "コスモス・コーポレイション (AG)",
            "日本品質保証機構 JQA (AH)", "ナノテックシュピンドラー (AI)",
            "電気安全環境研究所 JET (AK)", "医療機器センター JAAME (AL)",
          ],
        },
        {
          name: "Approval (承認)",
          nameJa: "製造販売承認（大臣承認）",
          applicableClasses: [
            "Class II（認証基準なし）",
            "Class III（認証基準なし）",
            "Class IV",
          ],
          description:
            "PMDAが承認申請資料の信頼性調査・審査を実施し、薬事・食品衛生審議会の意見を聴取した上で、厚生労働大臣が承認。申請資料はSTED（Summary Technical Documentation）形式。申請区分（新医療機器/改良/後発）により審査期間・手数料・必要データが異なる。",
          subtypes: [
            { name: "新規承認申請", description: "初回の承認取得。" },
            { name: "一部変更承認申請（一変申請）", description: "承認事項の変更。品質・有効性・安全性に影響する変更。" },
            { name: "軽微変更届", description: "承認事項の軽微な変更。届出のみで変更可能。" },
          ],
          categories: [
            {
              name: "新医療機器",
              nameEn: "New Medical Device",
              description: "既存の承認品目と構造・使用方法・効能効果等が明らかに異なる医療機器。臨床試験データが原則必要。",
              reviewTime: "12ヶ月（PMDA目標）/ 実績11.7ヶ月（令和6年度）",
              reviewTimeSource: "https://www.pmda.go.jp/review-services/drug-reviews/about-reviews/devices/0022.html",
              fee: {
                classIV: "17,721,200円",
                classIV_noClinical: "16,520,700円",
                classII_III: "13,016,900円",
                classII_III_noClinical: "11,816,400円",
              },
              feeSource: "https://www.pmda.go.jp/review-services/drug-reviews/user-fees/0001.html",
              requiredDocuments: [
                "起源又は発見の経緯及び外国での使用状況（イ）",
                "仕様の設定に関する資料（ロ）",
                "安定性及び耐久性に関する資料（ハ）",
                "法的規制への適合性（性能規格等）（ニ）",
                "リスク分析に関する資料（ホ）",
                "製造方法に関する資料（ヘ）",
                "臨床試験の試験成績 又は 臨床評価報告書（ト）",
                "添付文書案（チ）",
              ],
              priorityReview: "優先審査指定: 9ヶ月（PMDA目標）/ 実績8.5ヶ月。先駆け指定: 実績5.8ヶ月",
            },
            {
              name: "改良医療機器（臨床あり）",
              nameEn: "Improved Medical Device (with clinical data)",
              description: "既承認品目の改良で、臨床試験データを添付するもの。",
              reviewTime: "10ヶ月（PMDA目標）/ 実績8.9ヶ月（令和6年度）",
              reviewTimeSource: "https://www.pmda.go.jp/review-services/drug-reviews/about-reviews/devices/0033.html",
              fee: {
                classIV: "10,413,400円",
                classIV_noClinical: "9,470,800円",
                classII_III: "6,650,800円",
                classII_III_noClinical: "5,708,200円",
              },
              feeSource: "https://www.pmda.go.jp/review-services/drug-reviews/user-fees/0001.html",
              requiredDocuments: [
                "新医療機器と同様（一部省略可能）",
                "臨床試験の試験成績（ト）が必須",
              ],
            },
            {
              name: "改良医療機器（臨床なし）",
              nameEn: "Improved Medical Device (without clinical data)",
              description: "既承認品目の改良で、非臨床データのみで対応するもの。既存臨床データの引用・臨床評価報告書で代替。",
              reviewTime: "6ヶ月（PMDA目標）/ 実績6.0ヶ月（令和6年度）",
              reviewTimeSource: "https://www.pmda.go.jp/review-services/drug-reviews/about-reviews/devices/0034.html",
              fee: {
                classIV: "3,080,600円",
                classII_III: "1,879,900円",
              },
              feeSource: "https://www.pmda.go.jp/review-services/drug-reviews/user-fees/0001.html",
              requiredDocuments: [
                "臨床評価報告書（既存臨床データの引用）",
                "非臨床試験データ",
                "リスク分析資料",
              ],
            },
            {
              name: "後発医療機器",
              nameEn: "Generic Medical Device",
              description: "既承認品目と構造・使用方法・効能効果等が同一性を有する医療機器。実質的同等性の立証が中心。",
              reviewTime: "4ヶ月（PMDA目標）/ 実績3.8ヶ月（令和6年度）",
              reviewTimeSource: "https://www.pmda.go.jp/review-services/drug-reviews/about-reviews/devices/0034.html",
              fee: {
                classIV_noStandard: "2,334,300円",
                classII_III_noStandard: "1,879,900円",
                classIV_withStandard: "634,400円",
                classII_III_withStandard: "526,400円",
              },
              feeSource: "https://www.pmda.go.jp/review-services/drug-reviews/user-fees/0001.html",
              requiredDocuments: [
                "既承認品目との対比表",
                "同等性を示す非臨床試験データ",
                "STED簡略化可（改良・後発用）",
              ],
            },
          ],
          avgReviewTime: "申請区分により異なる（上記categories参照）",
          fee: "申請区分・クラスにより異なる（上記categories参照）",
          url: "https://www.pmda.go.jp/review-services/drug-reviews/about-reviews/devices/0001.html",
        },
        {
          name: "Clinical Trial (治験)",
          nameJa: "治験（治験計画届）",
          applicableClasses: ["Class II", "Class III", "Class IV"],
          description:
            "承認申請に臨床試験データが必要な場合、治験計画届を厚生労働大臣（PMDA経由）に提出。届出制（届出後30日の安全性調査期間経過後に開始可能）。米国IDE（許可制）とは異なり、Significant Risk/Non-Significant Riskの区分はない。医療機器GCP省令を遵守。治験届の前に治験相談（対面助言）を実施することが推奨される。",
          subtypes: [
            { name: "治験計画届", description: "初回の治験開始前に提出。30日ルール適用。" },
            { name: "治験計画変更届", description: "治験実施中の計画変更時に提出。" },
            { name: "治験中止届・治験終了届", description: "治験の中止・終了時に提出。" },
          ],
          avgReviewTime: "治験計画届から30日（安全性調査期間）",
          fee: "治験届：なし / 治験相談（対面助言）：約15万〜26万円",
          url: "https://www.pmda.go.jp/review-services/trials/0003.html",
        },
      ],

      // PMDA相談制度
      consultations: [
        {
          name: "対面助言（治験相談）",
          description: "治験の科学性・倫理性について助言。治験計画届の前に実施推奨。",
          fee: "約150,900〜261,500円",
          url: "https://www.pmda.go.jp/review-services/f2f-pre/consultations/0012.html",
        },
        {
          name: "対面助言（申請前相談）",
          description: "承認申請の準備に関する助言。申請資料の構成・データ要件について確認。",
          fee: "治験相談と同等水準",
          url: "https://www.pmda.go.jp/review-services/f2f-pre/consultations/0019.html",
        },
        {
          name: "簡易相談",
          description: "短時間の簡易的な助言。一般的な規制質問に対応。",
          fee: "比較的低額",
          url: "https://www.pmda.go.jp/review-services/f2f-pre/consultations/0005.html",
        },
        {
          name: "事前面談",
          description: "対面助言前の論点整理。無料。",
          fee: "無料",
          url: "https://www.pmda.go.jp/review-services/f2f-pre/consultations/0003.html",
        },
        {
          name: "RS戦略相談",
          description: "規制科学（Regulatory Science）に基づく戦略相談。開発早期段階から評価方針について助言。",
          fee: "別途設定",
          url: "https://www.pmda.go.jp/review-services/f2f-pre/consultations/0019.html",
        },
      ],

      // QMS適合性調査
      qmsInspection: {
        overview: "承認・認証取得時のQMS適合性調査が必須（届出を除く）。QMS省令はISO 13485:2003を基に制定。基準適合証の有効期間は5年間。",
        types: [
          { name: "新規調査", description: "承認・認証取得時の初回QMS適合性確認。製造所の実地調査を含む。" },
          { name: "定期調査", description: "承認取得後5年ごと。基準適合証の更新。有効期限の6ヶ月前までに申請。" },
          { name: "追加的調査", description: "一部変更承認時等、変更内容に応じたQMS適合性の再確認。" },
        ],
        feeCalculator: "https://web.fd-shinsei.mhlw.go.jp/download/qmscalc/index.html",
        url: "https://www.pmda.go.jp/review-services/gmp-qms-gctp/qms/0003.html",
      },
    },

    electronicSubmission: {
      system: "FD申請 / DWAP / ゲートウェイシステム",
      url: "https://www.pmda.go.jp/review-services/electronic-submission/0001.html",
      description:
        "PMDAへの承認申請はFD申請ソフトを用いたeCTD/STED形式の電子申請が標準。DWAP（Drug and Medical Device Web Application Portal）やPMDAゲートウェイシステムで各種届出・報告を電子提出。オンライン提出の推進により段階的に電子化を拡大中。",
      mandatory: true,
    },

    udi: {
      required: true,
      system: "医療機器を特定するための符号（バーコード）表示 + 医療機器データベース",
      description:
        "日本のUDI制度は厚生労働省通知に基づく「医療機器を特定するための符号」の表示義務と「医療機器データベース」への登録で構成。GS1標準のバーコード（GTIN + 有効期限・ロット番号等）を使用。特定保険医療材料を中心に実装が進行。IMDRF UDIガイダンスとの整合を図りつつ制度整備中。",
      url: "https://www.mhlw.go.jp/web/t_doc?dataId=00tc7117&dataType=1&pageNo=1",
      timeline:
        "厚労省通知に基づき段階的に導入。特定保険医療材料（クラスIV/III相当）は表示義務化済み。全クラスへの拡大を推進中。",
    },

    postMarket: {
      adverseEventReporting: {
        system: "不具合報告制度（医療機器不具合等報告）",
        mandatory: true,
        url: "https://www.pmda.go.jp/safety/reports/mah/0006.html",
        description:
          "製造販売業者は薬機法に基づきPMDAに報告義務がある。報告方法はIKWシステム（電子報告）または紙報告。",
        reportingCategories: [
          { category: "15日報告", deadline: "知得から15日以内", scope: "死亡・重篤な健康被害（既知・未知問わず）、未知の不具合で重篤なもの" },
          { category: "30日報告", deadline: "知得から30日以内", scope: "添付文書の使用上の注意から予測可能な非重篤な不具合" },
          { category: "定期報告", deadline: "定められた期日", scope: "品目指定定期報告（未知非重篤等）" },
          { category: "研究報告", deadline: "知得から30日以内", scope: "論文等で安全性上の懸念が示されたもの" },
          { category: "外国措置報告", deadline: "知得から15日以内", scope: "海外で製造中止・回収・廃棄等の措置がとられた場合" },
        ],
      },
      recalls: {
        authority: "PMDA / 厚生労働省",
        description:
          "製造販売業者が自主的に回収を実施し、PMDAに回収報告書を提出。PMDAウェブサイトで回収情報を一般公開。",
        url: "https://www.pmda.go.jp/safety/recalls/0001.html",
        recallClasses: [
          { class: "クラスI", description: "重篤な健康被害又は死亡の原因となりうる。即時報告（FAX等で厚労省に第一報）。使用中止指示等を直ちに実施。" },
          { class: "クラスII", description: "一時的な又は医学的に治癒可能な健康被害の原因となりうる。速やかな報告と回収措置。" },
          { class: "クラスIII", description: "健康被害の原因となるとはまず考えられない。報告と適切な回収措置。" },
        ],
      },
      surveillance:
        "使用成績評価制度（旧再審査に相当、2014年薬機法改正で導入）：厚労大臣指定品目（主に新医療機器）について、承認後3〜7年程度の実臨床データを収集・評価。GPSP省令に基づく製造販売後調査・試験の実施。PMDAによるシグナル検出とリスクコミュニケーション。",
      useResultsEvaluation: {
        description: "新医療機器を中心に厚生労働大臣が指定。承認後の実臨床での有効性・安全性を再確認。信頼性調査（GPSP調査）を実施。",
        evaluationPeriod: "通常3〜7年（品目特性に応じて個別設定）",
        url: "https://www.pmda.go.jp/review-services/reexamine-reevaluate/use-results-eval/0005.html",
      },
    },

    certificateOfFreeSale: {
      available: true,
      issuingAuthority: "厚生労働省",
      name: "自由販売証明書（Certificate of Free Sale）",
      description:
        "日本で製造販売承認・認証を取得済みの医療機器について、厚生労働省が自由販売証明書を発行。輸出先国の登録・承認申請時に使用。",
      processingTime: "約2〜4週間",
      url: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iyakuhin/shoumei/index.html",
    },

    reimbursement: {
      system: "公的医療保険制度（国民皆保険）",
      authority: "厚生労働省 / 中央社会保険医療協議会（中医協）",
      description:
        "医療機器の保険適用は「技術料への包括評価」と「特定保険医療材料としての個別評価」に大別される。保険適用区分（A1/A2/B1/B2/C1/C2等）に応じて申請手続き・審議スケジュールが異なる。先進医療制度（先進医療A/B）を活用して保険収載前に評価療養として使用する経路もある。",
      categories: [
        { code: "A1", name: "包括", description: "いずれかの診療報酬項目で包括的に評価（例：縫合糸、注射針）。希望書提出後20日経過で適用。" },
        { code: "A2", name: "特定包括", description: "特定の診療報酬項目で包括的に評価。毎月10日受理→翌月1日適用。" },
        { code: "B1", name: "既存機能区分", description: "既存の特定保険医療材料の機能区分に該当。毎月10日受理→翌月1日適用。" },
        { code: "B2", name: "既存機能区分・変更あり", description: "既存機能区分に該当するが仕様変更あり。毎月10日区分決定→翌月1日適用。" },
        { code: "B3", name: "期限付改良加算", description: "暫定的に改良加算が認められるもの。年4回（3月/6月/9月/12月）中医協審議。" },
        { code: "C1", name: "新機能", description: "既存機能区分に該当せず、新たな機能区分の設定が必要。年4回中医協審議。類似機能区分比較方式で価格算定。" },
        { code: "C2", name: "新機能・新技術", description: "C1と同様かつ技術料自体が未収載。年4回中医協審議。技術料の新設も含む。" },
      ],
      pricingRules: {
        method: "類似機能区分比較方式（基本）",
        premiums: [
          { name: "画期性加算", range: "50〜100%" },
          { name: "有用性加算", range: "5〜30%" },
          { name: "改良加算", range: "1〜20%" },
        ],
      },
      timeline: "A/B区分: 随時申請（毎月10日締め→翌月1日適用）。C1/C2/B3: 年4回（1月/4月/7月/10月頃受付→3月/6月/9月/12月中医協審議）",
      codingSystems: [
        "特定保険医療材料コード（機能区分番号）",
        "診療報酬点数表（技術料）",
        "DPC/PDPS コード（包括評価）",
      ],
      url: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000176120.html",
    },

    marketingRules: {
      authority: "厚生労働省 / 消費者庁",
      description:
        "医療機器の広告は薬機法第66条〜第68条および「医薬品等適正広告基準」に基づき規制。未承認機器の広告、虚偽・誇大広告は禁止。景品表示法（消費者庁所管）による不当表示規制も適用。",
      keyRules: [
        "薬機法第66条: 虚偽・誇大広告の禁止",
        "薬機法第68条: 未承認医療機器の広告禁止",
        "医薬品等適正広告基準（厚労省通知）の遵守",
        "景品表示法に基づく優良誤認・有利誤認表示の禁止",
        "医療機器の添付文書・取扱説明書の記載要件",
      ],
    },

    mdsap: {
      status: "参加国（Regulatory Authority）",
      description:
        "日本（PMDA/MHLW）はMDSAPの正式参加国（Regulatory Authority）の一つ。MDSAP創設5カ国（米・加・豪・伯・日）に含まれる。MDSAP監査報告書をQMS適合性調査の参考情報として活用可能。",
    },

    internationalStandards: {
      iso13485: {
        accepted: true,
        notes:
          "QMS省令はISO 13485を基礎として策定。QMS適合性調査においてISO 13485認証が参考とされるが、QMS省令への適合が直接の要件。2021年改正で国際整合をさらに強化。",
      },
      iso14971: {
        accepted: true,
        notes:
          "基本要件基準（Essential Principles）においてリスクマネジメントの実施が要求され、ISO 14971への適合が事実上の標準。JIS T 14971 として国内規格化。",
      },
      iec62304: {
        accepted: true,
        notes:
          "プログラム医療機器（SaMD）およびソフトウェアを含む医療機器の開発にIEC 62304への適合が求められる。JIS T 62304 として国内規格化。",
      },
      iec60601: {
        accepted: true,
        notes:
          "医用電気機器の安全規格。JIS T 0601シリーズとして国内規格化。認証基準・承認審査で適合が要求される。",
      },
      others: [
        {
          name: "IEC 62443（産業用サイバーセキュリティ）",
          notes:
            "医療機器サイバーセキュリティガイダンス（2023年）でIEC 62443を参照。対応が推奨。",
        },
        {
          name: "ISO 10993シリーズ（生物学的安全性評価）",
          notes:
            "JIS T 0993として国内規格化。体内接触する医療機器の生物学的安全性評価に必須。",
        },
        {
          name: "IEC 60601-1-2（EMC）",
          notes:
            "医用電気機器の電磁両立性要求事項。JIS T 0601-1-2 として規格化。",
        },
      ],
    },

    recentDevelopments: [
      {
        date: "2024-04",
        title: "改正薬機法の段階施行完了",
        description:
          "2022年改正薬機法（令和4年改正）の段階施行が2024年4月までに完了。緊急承認制度、電子化推進等の措置が全面施行。",
      },
      {
        date: "2023-04",
        title: "医療機器サイバーセキュリティガイダンス発出",
        description:
          "PMDAが医療機器のサイバーセキュリティに関するガイダンスを発出。IEC 62443を参照し、ネットワーク接続型医療機器の安全対策を明確化。",
      },
      {
        date: "2023-03",
        title: "プログラム医療機器（SaMD）実務ガイダンス更新",
        description:
          "プログラム医療機器の該当性判断に関する実務通知が更新。AI/ML搭載ソフトウェアの医療機器該当性の判断基準を明確化。",
      },
      {
        date: "2022-05",
        title: "改正薬機法成立（緊急承認制度等）",
        description:
          "緊急承認制度の創設、電子添文の法定化、GMP/QMS関連整備等を含む薬機法改正が成立。段階的に施行。",
      },
    ],

    lastUpdated: "2026-04-01",
    verified: null,
  },

  /* ================================================================
   *  中国 (CHN)
   * ================================================================ */
  {
    code: "CHN",
    country: "中国",
    countryEn: "China",
    region: "ASPAC",
    flag: "🇨🇳",

    legalSystemOverview: {
      type: "一党制・国務院行政法規体系",
      description:
        "国家薬品監督管理局（NMPA）が医療機器の登録・監督を所管。国務院令に基づく行政法規体系で運用され、技術審査は医療機器技術審査センター（CMDE）が担当。省級薬品監督管理局がクラスII機器の登録と日常監督を実施する地方分権体制。",
      keyCharacteristics: [
        "NMPAが中央で監督、CMDE が技術審査を担当",
        "省級薬監局がクラスII登録・日常監督を実施",
        "3クラス分類（リスクベース）",
        "輸入機器は中国代理人（China Agent）の設置が必須",
        "臨床試験は原則として中国国内データが要求される",
      ],
    },

    authorities: [
      {
        name: "NMPA",
        fullName: "National Medical Products Administration",
        localName: "国家药品监督管理局",
        role: "医療機器の登録審査（クラスIII）、GMP査察、市販後監視、法令策定を統括",
        url: "https://www.nmpa.gov.cn/",
        isPrimary: true,
      },
      {
        name: "CMDE",
        fullName: "Center for Medical Device Evaluation",
        localName: "国家药品监督管理局医疗器械技术审评中心",
        role: "クラスII/III医療機器の技術審査（安全性・有効性評価）を実施。NMPAの直属機関。",
        url: "https://www.cmde.org.cn/",
        isPrimary: false,
      },
      {
        name: "省級薬品監督管理局",
        fullName: "Provincial Medical Products Administrations",
        localName: "省级药品监督管理局",
        role: "クラスI医療機器の備案（届出）受理、クラスII医療機器の登録審査、管轄区域内の日常監督",
        url: "https://www.nmpa.gov.cn/directory/web/nmpa/xxgk/fgsslj/qsgcx/index.html",
        isPrimary: false,
      },
    ],

    notifiedBodies: {
      system: "該当なし（政府直接審査制度）",
      description:
        "中国には欧州型のNotified Body制度は存在しない。技術審査はCMDE（クラスII/III）または省級薬監局（クラスI）が直接実施。GMP査察も政府機関が実施。第三者認証機関による認証制度はない。",
      bodies: [],
    },

    deviceDefinition: {
      legalDefinition:
        "人体に対して直接的又は間接的に使用され、以下の一つ又は複数の目的を持つ器具、設備、器材、体外診断試薬及びキャリブレータ、材料並びにその他類似又は関連する物品：(1)疾病の予防、診断、治療、監視、軽減 (2)損傷の診断、治療、監視、軽減、補償 (3)解剖学的又は生理学的過程の検査、置換、調節又は支持 (4)生命の支持又は維持 (5)妊娠の制御 (6)医療機器の消毒 (7)体液標本の体外検査による医学情報の提供（医疗器械监督管理条例第103条）",
      scope:
        "機器、設備、器材、体外診断試薬、材料。ソフトウェア単体（SaMD）も2021年条例改正で明確に対象。動物用機器は別途規制。",
      notes:
        "2021年の条例改正（国務院令739号）でリスクベース規制の明確化、臨床評価要件の整理、UDI制度の法的根拠を整備。",
    },

    primaryLaw: {
      title: "医療機器監督管理条例（医疗器械监督管理条例）",
      originalTitle: "医疗器械监督管理条例（国务院令第739号）",
      enacted: "2000-01-04",
      lastAmended: "2021-02-09",
      url: "https://www.gov.cn/zhengce/content/2021-03/19/content_5593739.htm",
      description:
        "中国の医療機器規制の最上位法規（国務院行政法規）。2021年の全面改正で、リスクベース規制の強化、登録人制度（MAH類似）の導入、臨床評価制度の整理、UDI制度の法的根拠整備、罰則強化などを実施。クラスI備案・クラスII/III登録の枠組みを規定。",
    },

    implementingRegulations: [
      {
        title: "医療機器登録及び届出管理弁法（医疗器械注册与备案管理办法）",
        date: "2021-10-01",
        url: "https://www.nmpa.gov.cn/xxgk/fgwj/bmgzh/20210826165621176.html",
        description:
          "NMPA令第47号。医療機器の登録（注册）・届出（备案）の手続き、申請資料要件、審査プロセスを詳細に規定。輸入機器の申請手続きも規定。",
        category: "登録管理",
      },
      {
        title: "医療機器生産監督管理弁法（医疗器械生产监督管理办法）",
        date: "2022-05-01",
        url: "https://www.nmpa.gov.cn/xxgk/fgwj/bmgzh/20220330162956177.html",
        description:
          "医療機器の製造に係る品質管理体系（GMP相当）の要件、製造許可・届出手続き、査察制度を規定。",
        category: "GMP",
      },
      {
        title: "医療機器臨床試験品質管理規範（医疗器械临床试验质量管理规范）",
        date: "2022-05-01",
        url: "https://www.nmpa.gov.cn/xxgk/fgwj/bmgzh/20220324174736106.html",
        description:
          "GCP相当。医療機器臨床試験の計画・実施・報告に関する品質管理規範。倫理審査、インフォームドコンセント、データ管理等を規定。",
        category: "GCP",
      },
      {
        title: "医療機器分類規則（医疗器械分类规则）",
        date: "2015-07-14",
        url: "https://www.nmpa.gov.cn/xxgk/fgwj/bmgzh/20150714120001899.html",
        description:
          "リスクベースの3クラス分類規則。使用目的、構造特性、対象部位等に基づく分類判定ルールを規定。",
        category: "分類",
      },
      {
        title: "医療機器分類目録（医疗器械分类目录）",
        date: "2017-08-31",
        url: "https://www.nmpa.gov.cn/ylqx/ylqxggtg/20170831151901573.html",
        description:
          "医療機器の具体的な分類目録。22大類、206小類に分類。各品目のクラス分類を規定。",
        category: "分類",
      },
    ],

    relatedLaws: [
      {
        title: "個人情報保護法（个人信息保护法 / PIPL）",
        category: "データ保護",
        enacted: "2021-11-01",
        url: "http://www.npc.gov.cn/npc/c30834/202108/a8c4e3672c74491a80b53a172bb753fe.shtml",
        relevance:
          "医療機器から取得される健康情報は「敏感個人信息」に該当し、厳格な取扱い要件が適用。データの越境移転制限あり。",
      },
      {
        title: "データ安全法（数据安全法）",
        category: "データ安全",
        enacted: "2021-09-01",
        url: "http://www.npc.gov.cn/npc/c30834/202106/7c9af12f51334a73b56d7938f99a788a.shtml",
        relevance:
          "医療健康データは「重要データ」に分類される可能性があり、データ分類・等級保護の要件が適用。",
      },
      {
        title: "ネットワーク安全法（网络安全法）",
        category: "サイバーセキュリティ",
        enacted: "2017-06-01",
        url: "http://www.npc.gov.cn/npc/c30834/201611/270bcb7b7ae14aff95af57b0423db127.shtml",
        relevance:
          "ネットワーク接続型医療機器に適用。等級保護制度への適合、脆弱性報告義務、ネットワーク製品安全認証が関連。",
      },
      {
        title: "人工知能関連規制（生成式人工智能服务管理暂行办法等）",
        category: "AI規制",
        enacted: "2023-08-15",
        url: "https://www.cac.gov.cn/2023-07/13/c_1690898327029107.htm",
        relevance:
          "AI搭載医療機器に対し、アルゴリズム登録制度、AI倫理要件、説明可能性要件が追加で適用される可能性。",
      },
    ],

    classification: {
      system: "リスクベース3クラス分類",
      basis: "医療機器の使用目的、構造特性、使用方法に基づくリスク程度に応じた分類。",
      classes: [
        {
          name: "Class I",
          nameJa: "第一類医療機器",
          riskLevel: "低",
          description:
            "日常的な管理で安全性・有効性を確保できるリスクの低い医療機器。",
          examples: ["手術用メス", "聴診器", "医療用ガーゼ", "手動式血圧計"],
          approvalPath: "備案（届出）— 市級薬監局",
        },
        {
          name: "Class II",
          nameJa: "第二類医療機器",
          riskLevel: "中",
          description:
            "安全性・有効性の管理を強化する必要があるリスクが中程度の医療機器。",
          examples: [
            "血圧監視装置",
            "体温計",
            "心電計",
            "超音波診断装置",
            "手術用手袋",
            "注射器",
          ],
          approvalPath: "登録（注册）— 省級薬監局審査",
        },
        {
          name: "Class III",
          nameJa: "第三類医療機器",
          riskLevel: "高",
          description:
            "体内に植え込まれる、生命維持に使用される等、安全性確保に特別な管理が必要な高リスク医療機器。",
          examples: [
            "心臓ペースメーカー",
            "人工関節",
            "血管内ステント",
            "人工心肺装置",
            "体外診断試薬（高リスク）",
          ],
          approvalPath: "登録（注册）— NMPA/CMDE審査",
        },
      ],
      rules: [
        "分類規則に基づく判定フロー（使用目的→構造特性→リスク程度）",
        "分類目録で品目ごとにクラスを指定",
        "新製品は分類界定（分類判定）を申請可能",
        "体外診断試薬は別途分類目録が存在",
      ],
      totalProductCodes: "約6,800（分類目録の品目数）",
    },

    conformityAssessment: {
      overview:
        "中国の医療機器は、クラスIは備案（届出）、クラスII/IIIは登録（注册）が必要。輸入機器は全クラスでNMPAまたはその委託先に申請。国内データ要件が厳しく、臨床試験は原則として中国国内での実施が求められるが、国際多施設共同治験の受入れも拡大中。中国代理人（Agent）の設置は輸入機器に必須。",
      routes: [
        {
          name: "Filing (備案 / 备案)",
          nameJa: "第一類医療機器備案",
          applicableClasses: ["Class I"],
          description:
            "第一類医療機器は備案（届出）のみで市場投入可能。国産品は市級薬監局、輸入品はNMPAに備案。審査は形式確認のみ。",
          subtypes: [],
          avgReviewTime: "5営業日（形式確認）",
          fee: "なし",
          url: "https://www.nmpa.gov.cn/ylqx/",
        },
        {
          name: "Registration (登録 / 注册)",
          nameJa: "第二類・第三類医療機器登録",
          applicableClasses: ["Class II", "Class III"],
          description:
            "クラスII国産品は省級薬監局、クラスIII国産品および全輸入品はNMPA/CMDEが技術審査を実施。登録証の有効期限は5年（更新可能）。申請資料にはGMP適合証明、臨床評価資料（臨床試験または同等品比較）、技術文書が必要。",
          subtypes: [
            "初回登録（首次注册）",
            "延續登録（延续注册 / 5年更新）",
            "変更登録（变更注册）",
            "特別審査手続き（創新医療機器）",
            "優先審査手続き",
          ],
          avgReviewTime:
            "クラスII: 技術審評60工作日 + 登録決定20工作日 / クラスIII: 技術審評90工作日 + 登録決定20工作日（創新医療機器: 優先処理）",
          fee: "進口第三類首次注册: 30.88万元 / 延続注册: 4.08万元（NMPA手数料規定に基づく）",
          url: "https://www.cmde.org.cn/",
        },
        {
          name: "Clinical Trial",
          nameJa: "臨床試験（医療機器臨床試験）",
          applicableClasses: ["Class II", "Class III"],
          description:
            "臨床評価で臨床試験データが必要と判断された場合に実施。一般の臨床試験は備案制（届出制）。高リスク第三類医療機器の臨床試験はNMPA承認が必要（法定審批時限60工作日）。倫理審査委員会の承認が必要。国際多施設共同治験の受入れ枠組みも整備中だが、中国人被験者データが原則必要。",
          subtypes: [
            "臨床試験備案（届出制 — 一般の臨床試験）",
            "高リスク第三類臨床試験審批（承認制 — NMPA審査）",
            "国際多施設共同臨床試験",
          ],
          avgReviewTime: "備案制: 即時開始可 / 高リスク第三類審批: 60工作日",
          fee: "高リスク第三類臨床試験申請: 4.32万元",
          url: "https://www.cmde.org.cn/",
        },
      ],
    },

    electronicSubmission: {
      system: "eRPS（医療機器登録電子申請システム）",
      url: "https://zwfw.nmpa.gov.cn/",
      description:
        "NMPAの電子申請プラットフォームを通じてオンライン提出が可能。登録申請、備案、変更申請等の電子化を段階的に推進中。紙媒体の提出も一部残存。",
      mandatory: false,
    },

    udi: {
      required: true,
      system: "中国UDI制度（医療機器唯一標識 / 医疗器械唯一标识）",
      description:
        "NMPAが推進する医療機器固有識別子制度。GS1、HIBC、ISBT128等の発行機関コードに対応。UDIデータベース（NMPA運営）への登録が必要。2019年から段階的に導入開始。",
      url: "https://udi.nmpa.gov.cn/",
      timeline:
        "クラスIII: 2022年より義務化（第1〜2批） / クラスII: 2024年6月第3批義務化、全面義務化は2027年6月目標（公式公告で要確認） / クラスI: 2029年6月目標（公式公告で要確認）",
    },

    postMarket: {
      adverseEventReporting: {
        system: "医療機器不良事件報告制度",
        mandatory: true,
        url: "https://www.nmpa.gov.cn/ylqx/",
        description:
          "製造業者・経営業者・医療機関は医療機器の不良事件（有害事象）を報告する義務がある。重大事件は即時報告、一般事件は定期報告。省級・国家級の監測機構がデータ分析を実施。",
      },
      recalls: {
        authority: "NMPA / 省級薬品監督管理局",
        description:
          "医療機器リコール管理弁法に基づき、製造業者が自主リコールを実施。クラスI〜IIIの緊急度に応じた対応。NMPAは命令リコールの権限も保有。",
        url: "https://www.nmpa.gov.cn/ylqx/ylqxzhcx/index.html",
      },
      surveillance:
        "登録証の有効期限は5年で更新審査あり。NMPAによる年次報告制度、GMP定期査察、抜き打ち検査。リスク監測データに基づく安全性再評価。",
    },

    certificateOfFreeSale: {
      available: true,
      issuingAuthority: "NMPA",
      name: "自由販売証明書（医疗器械出口销售证明）",
      description:
        "中国で登録済みの医療機器について、NMPAが輸出販売証明を発行。輸出先国の登録申請に使用。",
      processingTime: "約20営業日",
      url: "https://www.nmpa.gov.cn/ylqx/",
    },

    reimbursement: {
      system: "基本医療保険制度（城镇职工・城乡居民基本医疗保険）",
      authority: "国家医療保障局（National Healthcare Security Administration / NHSA）",
      description:
        "医療機器の保険償還は診療項目（技術料）への包括が主。高額医療機器は省級の償還リストに基づく。DRG/DIP改革の推進により包括払い化が進行中。革新的医療機器は一部地域で追加償還の仕組みあり。",
      codingSystems: [
        "医療サービス項目コード",
        "医用耗材分類・コード",
        "DRG/DIP 分組コード",
      ],
      url: "http://www.nhsa.gov.cn/",
    },

    marketingRules: {
      authority: "NMPA / 国家市場監督管理総局（SAMR）",
      description:
        "医療機器の広告は広告法および医療機器広告審査弁法に基づき、省級薬監局の事前審査が必要。虚偽・誇大広告は厳罰。未登録機器の広告は禁止。",
      keyRules: [
        "広告法に基づく虚偽広告・誇大広告の禁止",
        "医療機器広告の事前審査制度（省級薬監局）",
        "未登録医療機器の広告禁止",
        "医療機器広告審査番号の表示義務",
        "インターネット広告への規制強化",
      ],
    },

    mdsap: {
      status: "非参加",
      description:
        "中国はMDSAPに参加していない。GMP査察はNMPAおよび省級薬監局が独自の基準（医療機器生産品質管理規範）で実施。MDSAP報告書は受入れない。",
    },

    internationalStandards: {
      iso13485: {
        accepted: true,
        notes:
          "中国の医療機器GMP規範はISO 13485を参考にしているが、独自の要件も多い。ISO 13485認証は直接的な代替とはならず、中国GMP適合が別途必要。GB/T 42061としてISO 13485を国家標準化。",
      },
      iso14971: {
        accepted: true,
        notes:
          "リスクマネジメントの実施が登録申請で要求される。YY/T 0316としてISO 14971を業界標準化。",
      },
      iec62304: {
        accepted: true,
        notes:
          "ソフトウェア医療機器の登録申請でIEC 62304への適合が求められる。YY/T 0664として標準化。",
      },
      iec60601: {
        accepted: true,
        notes:
          "医用電気機器の安全規格。GB 9706シリーズとしてIEC 60601を国家強制標準化。強制認証（CCC）の対象品目あり。",
      },
      others: [
        {
          name: "GB規格（国家標準）",
          notes:
            "中国独自の国家標準。GB（強制）とGB/T（推奨）がある。多くの国際規格を翻訳採用しているが、中国固有要件が追加される場合あり。",
        },
        {
          name: "YY規格（医療機器業界標準）",
          notes:
            "NMPAが策定する医療機器業界標準。国際規格の翻訳採用が多いが、中国独自の技術要件も含む。",
        },
      ],
    },

    recentDevelopments: [
      {
        date: "2026-03",
        title: "NMPAソフトウェア関連規格更新（YY/T 1406-2026）",
        description:
          "NMPAがソフトウェア関連の医療機器規格（YY/T 1406-2026）を公布。医療機器ソフトウェアのライフサイクル管理に関する要件を更新。",
      },
      {
        date: "2024-06",
        title: "クラスII UDI第3弾義務化（103品目）",
        description:
          "第二類医療機器のUDI（唯一標識）実施の第3弾として103品目が義務化。クラスII全面義務化は2027年6月1日、クラスI全面義務化は2029年6月1日が期限。",
      },
      {
        date: "2025-11",
        title: "NMPA新版GMP公布（2026年11月1日施行）",
        description:
          "NMPAが医療機器生産品質管理規範（新版GMP、2025年第107号）を公布。2026年11月1日施行。ISO 13485との整合強化、リスクベースのアプローチを導入。",
      },
      {
        date: "2021-06",
        title: "医療機器監督管理条例改正施行",
        description:
          "国務院令第739号として全面改正された医療機器監督管理条例が施行。登録人制度、緊急使用許可、市販後監視の強化等を導入。",
      },
    ],

    lastUpdated: "2026-04-01",
    verified: null,
  },

  /* ================================================================
   *  韓国 (KOR)
   * ================================================================ */
  {
    code: "KOR",
    country: "韓国",
    countryEn: "South Korea",
    region: "ASPAC",
    flag: "🇰🇷",

    legalSystemOverview: {
      type: "大統領制・食品医薬品安全処（MFDS）所管",
      description:
        "食品医薬品安全処（MFDS）が医療機器の許認可・監督を統括。国立医療機器情報院（NIDS）が情報管理・UDI・データベース運営を担当。医療機器法（의료기기법）に基づく4クラス分類制を採用し、リスクに応じた届出（신고）・認証（인증）・許可（허가）の3段階体制。",
      keyCharacteristics: [
        "MFDSが許認可・安全監視を一元管理",
        "NIDSが医療機器情報・UDI・データベースを運営",
        "4クラス分類（IMDRF整合）",
        "KGMP（韓国GMP）の遵守が必須",
        "MDSAP参加国（2021年〜）",
      ],
    },

    authorities: [
      {
        name: "MFDS",
        fullName: "Ministry of Food and Drug Safety",
        localName: "식품의약품안전처",
        role: "医療機器の許可・認証審査、GMP査察、市販後安全管理、法令策定を統括",
        url: "https://www.mfds.go.kr/",
        isPrimary: true,
      },
      {
        name: "NIDS",
        fullName: "National Institute of Medical Device Safety Information",
        localName: "국립의료기기정보원",
        role: "医療機器情報管理、UDIデータベース運営、安全性情報の収集・分析、医療機器統計",
        url: "https://www.nids.or.kr/",
        isPrimary: false,
      },
    ],

    notifiedBodies: {
      system: "該当なし（MFDS直接審査 + 指定認証機関）",
      description:
        "クラスII医療機器の認証（인증）は、MFDSが指定する認証機関（한국산업기술시험원 KTL、한국화학융합시험연구원 KTR等）が実施。クラスIII/IVの許可はMFDSが直接審査。欧州型のNotified Body制度とは異なるが、認証機関による第三者評価の枠組みが存在。",
      bodies: [
        {
          name: "韓国産業技術試験院（KTL）",
          url: "https://www.ktl.re.kr/",
        },
        {
          name: "韓国化学融合試験研究院（KTR）",
          url: "https://www.ktr.or.kr/",
        },
      ],
    },

    deviceDefinition: {
      legalDefinition:
        "人または動物の疾病の診断・治療・軽減・処置または予防の目的で使用される製品、人または動物の構造・機能に影響を及ぼす目的で使用される製品であって、薬理学的・免疫学的・代謝的手段による主要な目的作用を持たないもの（의료기기법第2条）",
      scope:
        "機器・器具・材料・ソフトウェア。体外診断用医療機器は2019年に別途法律（체외진단의료기기법）で規定。プログラム医療機器（SaMD）も対象。",
      notes:
        "2019年に体外診断用医療機器法（IVD法）を別途制定。2025年にデジタルヘルス関連法を施行し、AI/ML SaMDの規制枠組みを整備。",
    },

    primaryLaw: {
      title: "医療機器法（의료기기법）",
      originalTitle: "의료기기법",
      enacted: "2003-05-29",
      lastAmended: "2025-01-31",
      url: "https://www.law.go.kr/LSW/lsInfoP.do?lsiSeq=259122",
      description:
        "韓国の医療機器規制の根拠法。製造・輸入・販売業の許可制度、4クラス分類に応じた届出・認証・許可制度、KGMP、市販後安全管理、広告規制等を包括的に規定。デジタル医療製品への対応を含む複数回の改正を経て現在に至る。",
    },

    implementingRegulations: [
      {
        title: "医療機器法施行規則",
        date: "2003-09-03",
        url: "https://www.law.go.kr/LSW/lsInfoP.do?lsiSeq=259130",
        description:
          "医療機器法の施行に必要な詳細手続き（申請書様式、審査基準、手数料等）を規定する総理令。",
        category: "施行規則",
      },
      {
        title: "医療機器製造及び品質管理基準（KGMP）",
        date: "2009-05-14",
        url: "https://www.mfds.go.kr/",
        description:
          "ISO 13485に整合した韓国版GMP。医療機器の製造業者はKGMP適合が許可・認証の前提要件。MFDS告示。MDSAP監査報告書での代替が可能。",
        category: "GMP",
      },
      {
        title: "医療機器の基準規格（Essential Principles）",
        date: "2015-01-01",
        url: "https://www.mfds.go.kr/",
        description:
          "医療機器の安全性・性能に関する基本要件。IMDRF Essential Principlesに整合。許可・認証申請時に適合性を示す必要がある。",
        category: "基準規格",
      },
      {
        title: "体外診断用医療機器法（체외진단의료기기법）",
        date: "2019-04-30",
        url: "https://www.law.go.kr/LSW/lsInfoP.do?lsiSeq=210791",
        description:
          "体外診断用医療機器（IVD）に特化した法律。医療機器法から独立して規定。IVDの分類・許認可・品質管理を個別に規定。",
        category: "IVD",
      },
      {
        title: "デジタル医療製品法（디지털의료제품법）",
        date: "2025-01-24",
        url: "https://www.law.go.kr/",
        description:
          "2025年1月24日施行。AI/ML SaMD、デジタル治療機器（DTx）等のデジタル医療製品に特化した規制枠組み。迅速審査制度、変更管理計画、リアルワールドデータ活用を規定。",
        category: "デジタルヘルス",
      },
    ],

    relatedLaws: [
      {
        title: "個人情報保護法（개인정보보호법 / PIPA）",
        category: "データ保護",
        enacted: "2011-09-30",
        url: "https://www.law.go.kr/LSW/lsInfoP.do?lsiSeq=256542",
        relevance:
          "医療機器から取得される健康データの取扱いに適用。2023年改正で仮名処理情報の研究目的利用を拡大。個人情報保護委員会（PIPC）が所管。",
      },
      {
        title: "体外診断用医療機器法（체외진단의료기기법）",
        category: "IVD",
        enacted: "2019-04-30",
        url: "https://www.law.go.kr/LSW/lsInfoP.do?lsiSeq=210791",
        relevance:
          "IVDを医療機器法から独立して規制。IVDの分類体系、許認可手続き、性能評価要件を個別に規定。",
      },
      {
        title: "デジタル医療製品法（디지털의료제품법）",
        category: "デジタルヘルス",
        enacted: "2025-01-24",
        url: "https://www.law.go.kr/",
        relevance:
          "2025年1月24日施行。AI/ML SaMD、デジタル治療機器（DTx）の迅速審査・変更管理・リアルワールドエビデンス活用を規定する新法。",
      },
      {
        title: "生命倫理及び安全に関する法律（생명윤리및안전에관한법률）",
        category: "臨床研究倫理",
        enacted: "2004-01-29",
        url: "https://www.law.go.kr/LSW/lsInfoP.do?lsiSeq=243031",
        relevance:
          "医療機器の臨床試験における倫理審査委員会（IRB）の設置・運営、インフォームドコンセント要件に関連。",
      },
    ],

    classification: {
      system: "リスクベース4クラス分類",
      basis: "人体への潜在的リスクに基づく4段階分類。IMDRF分類ルールに整合。",
      classes: [
        {
          name: "Class I",
          nameJa: "1等級（저위험）",
          riskLevel: "低",
          description:
            "人体への潜在的リスクがほとんどない医療機器。",
          examples: ["外科用メス", "手動式血圧計", "X線フィルム", "医療用ピンセット"],
          approvalPath: "届出（신고）— MFDS",
        },
        {
          name: "Class II",
          nameJa: "2等級（중저위험）",
          riskLevel: "中低",
          description:
            "人体への潜在的リスクが低〜中程度の医療機器。認証機関による認証。",
          examples: [
            "超音波画像診断装置",
            "心電計",
            "歯科用合金",
            "電動式車椅子",
            "補聴器",
          ],
          approvalPath: "認証（인증）— MFDS指定認証機関",
        },
        {
          name: "Class III",
          nameJa: "3等級（중고위험）",
          riskLevel: "中高",
          description:
            "人体への潜在的リスクが中〜高程度の医療機器。MFDS直接審査による許可。",
          examples: [
            "人工呼吸器",
            "骨接合用プレート",
            "放射線治療装置",
            "透析器",
            "コンタクトレンズ",
          ],
          approvalPath: "許可（허가）— MFDS直接審査",
        },
        {
          name: "Class IV",
          nameJa: "4等級（고위험）",
          riskLevel: "高",
          description:
            "人体に直接的かつ重大な影響を与える高リスク医療機器。最も厳格な審査が適用。",
          examples: [
            "心臓ペースメーカー",
            "人工心臓弁",
            "冠動脈ステント",
            "脳深部刺激装置",
            "植込み型除細動器",
          ],
          approvalPath: "許可（허가）— MFDS直接審査（臨床試験データ必須）",
        },
      ],
      rules: [
        "IMDRF分類ルールに基づく判定",
        "品目別分類リスト（품목류）で品目コードとクラスを指定",
        "SaMDは機能・リスクに応じてクラスII〜IVに分類",
        "IVDは체외진단의료기기법で別途分類",
      ],
      totalProductCodes: "約3,600（品目分類数）",
    },

    conformityAssessment: {
      overview:
        "韓国の医療機器は、クラスIは届出（신고）、クラスIIは指定認証機関による認証（인증）、クラスIII/IVはMFDS直接審査による許可（허가）が必要。全クラスでKGMP適合が前提条件（クラスIは自己宣言）。輸入機器は韓国代理人（Authorized Representative）の設置が必要。",
      routes: [
        {
          name: "Notification (届出 / 신고)",
          nameJa: "医療機器届出",
          applicableClasses: ["Class I"],
          description:
            "クラスI医療機器はMFDSへの届出のみで市場投入可能。技術文書の提出は必要だが、実質的な審査は行われない。KGMP適合は自己宣言。",
          subtypes: [],
          avgReviewTime: "即日〜数日",
          fee: "少額",
          url: "https://www.mfds.go.kr/",
        },
        {
          name: "Certification (認証 / 인증)",
          nameJa: "医療機器認証",
          applicableClasses: ["Class II"],
          description:
            "MFDSが指定する認証機関（KTL、KTR等）が技術文書審査とKGMP適合性評価を実施して認証を付与。認証基準が定められた品目が対象。有効期限なし（継続的なKGMP適合が条件）。",
          subtypes: [
            "新規認証",
            "変更認証",
          ],
          avgReviewTime: "2〜4ヶ月",
          fee: "認証機関ごとに設定",
          url: "https://www.mfds.go.kr/",
        },
        {
          name: "Approval (許可 / 허가)",
          nameJa: "医療機器許可",
          applicableClasses: ["Class III", "Class IV"],
          description:
            "MFDSが直接審査を実施。技術文書、臨床評価資料（クラスIVは臨床試験データが原則必要）、KGMP適合証明を提出。許可証の有効期限なし（条件変更なき限り有効）。革新的医療機器（혁신의료기기）の迅速審査制度あり。",
          subtypes: [
            "新規許可",
            "変更許可",
            "革新的医療機器（迅速審査）",
            "条件付き許可",
          ],
          avgReviewTime: "6〜12ヶ月（革新的医療機器: 4〜6ヶ月）",
          fee: "品目により異なる（MFDS手数料規定に基づく）",
          url: "https://www.mfds.go.kr/",
        },
      ],
    },

    electronicSubmission: {
      system: "의료기기전자민원시스템（医療機器電子申請システム）",
      url: "https://emed.mfds.go.kr/",
      description:
        "MFDSの電子申請ポータル（eMED）を通じて、許可・認証・届出の申請をオンラインで提出可能。技術文書の電子提出が標準化されている。",
      mandatory: true,
    },

    udi: {
      required: true,
      system: "韓国UDI制度（의료기기 고유식별코드）",
      description:
        "NIDSが運営するUDIシステム。GS1、HIBC等の国際標準に対応。医療機器固有識別コード（UDI-DI）のデータベース登録と製品への表示を義務化。",
      url: "https://www.nids.or.kr/",
      timeline:
        "クラスIV: 義務化済み / クラスIII: 義務化済み / クラスII: 2024年〜義務化 / クラスI: 2025年〜義務化",
    },

    postMarket: {
      adverseEventReporting: {
        system: "의료기기 이상사례 보고제도（医療機器有害事象報告制度）",
        mandatory: true,
        url: "https://www.mfds.go.kr/",
        description:
          "製造業者・輸入業者・医療機関は医療機器の有害事象をMFDSに報告する義務がある。重大事象は15日以内、その他は定期報告。NIDSが報告データの収集・分析を担当。",
      },
      recalls: {
        authority: "MFDS",
        description:
          "MFDSの命令または製造業者の自主判断によるリコール。危害等級（1〜3級）に応じた対応。MFDSウェブサイトでリコール情報を公開。",
        url: "https://www.mfds.go.kr/",
      },
      surveillance:
        "MFDS による定期的なGMP査察（3年周期）、市販後安全性情報の収集・分析（NIDS）、品質再評価制度。安全性情報に基づく許可条件の変更・取消権限あり。",
    },

    certificateOfFreeSale: {
      available: true,
      issuingAuthority: "MFDS",
      name: "수출용 의료기기 제조・수출 증명서（輸出用医療機器証明書）",
      description:
        "韓国で許可・認証・届出済みの医療機器について、MFDSが自由販売証明書を発行。輸出先国の登録申請に使用。",
      processingTime: "約1〜2週間",
      url: "https://www.mfds.go.kr/",
    },

    reimbursement: {
      system: "国民健康保険制度（국민건강보험）",
      authority:
        "保健福祉部 / 健康保険審査評価院（HIRA）/ 国民健康保険公団（NHIS）",
      description:
        "医療機器の保険償還は、診療報酬の「行為料」への包括または「治療材料」としての個別償還。新規医療技術の保険適用には新医療技術評価（NECA）と健康保険審査評価院（HIRA）の評価が必要。革新的医療技術の暫定的保険適用制度あり。",
      codingSystems: [
        "治療材料コード",
        "行為料コード（診療報酬）",
        "DRG コード（包括払い対象品目）",
      ],
      url: "https://www.hira.or.kr/",
    },

    marketingRules: {
      authority: "MFDS / 公正取引委員会",
      description:
        "医療機器の広告は医療機器法に基づきMFDSが規制。事前審査制度は廃止されたが、虚偽・誇大広告は禁止。消費者向け広告には制限あり。",
      keyRules: [
        "虚偽・誇大広告の禁止",
        "未許可医療機器の広告禁止",
        "効能・効果に関する根拠のない表現の制限",
        "オンライン広告を含む全媒体への適用",
        "医療機関向け不当利益提供の禁止",
      ],
    },

    mdsap: {
      status: "協力会員（Affiliate Member、2019年10月〜）",
      description:
        "韓国（MFDS）は2019年10月からMDSAPの協力会員（Affiliate Member）として参加。正会員（Regulatory Authority）への移行を推進中。MDSAP監査報告書をKGMP査察の参考情報として活用。",
    },

    internationalStandards: {
      iso13485: {
        accepted: true,
        notes:
          "KGMPはISO 13485に完全整合。MDSAP監査報告書（ISO 13485ベース）でKGMP適合を代替可能。KS Q ISO 13485として韓国産業標準化。",
      },
      iso14971: {
        accepted: true,
        notes:
          "リスクマネジメントの実施が許可・認証の要件。KS C IEC/ISO 14971として標準化。技術文書にリスク分析結果の記載が必要。",
      },
      iec62304: {
        accepted: true,
        notes:
          "ソフトウェア医療機器の許可・認証でIEC 62304適合が要求される。KS C IEC 62304として標準化。",
      },
      iec60601: {
        accepted: true,
        notes:
          "医用電気機器の安全規格。KS C IEC 60601シリーズとして韓国産業標準化。許可・認証申請での適合が必須。",
      },
      others: [
        {
          name: "KS規格（韓国産業標準）",
          notes:
            "国際規格をKSとして翻訳採用するケースが多い。KSへの適合が許可・認証の基準として活用。",
        },
        {
          name: "IEC 62443（サイバーセキュリティ）",
          notes:
            "ネットワーク接続型医療機器のサイバーセキュリティ要件として参照。MFDSガイダンスで推奨。",
        },
      ],
    },

    recentDevelopments: [
      {
        date: "2025-01",
        title: "デジタル医療製品法（디지털의료제품법）施行",
        description:
          "2025年1月24日施行。AI/ML SaMD、デジタル治療機器（DTx）を含むデジタル医療製品の規制枠組みを定める新法。迅速審査制度とリアルワールドデータ活用を法制化。",
      },
      {
        date: "2024-01",
        title: "MDSAP監査報告書の活用拡大",
        description:
          "MDSAP監査報告書によるKGMP代替活用の運用が定着。輸入医療機器メーカーの負担軽減に寄与。",
      },
      {
        date: "2023-07",
        title: "SaMD許可審査ガイダンス更新",
        description:
          "MFDSがSaMD（ソフトウェア医療機器）の許可・認証審査に関するガイダンスを更新。AI/ML医療機器の変更管理に関する要件を明確化。",
      },
      {
        date: "2020-05",
        title: "医療機器産業育成法施行",
        description:
          "医療機器産業の競争力強化と規制環境の整備を目的とする医療機器産業育成法が施行。革新的医療機器の開発支援と規制合理化を推進。",
      },
    ],

    lastUpdated: "2026-04-01",
    verified: null,
   },

  // ─── その他（英国・豪州・ブラジル・インド・台湾・シンガポール）───
/* ================================================================
   *  イギリス (GBR)
   * ================================================================ */
  {
    code: "GBR",
    country: "イギリス",
    countryEn: "United Kingdom",
    region: "Europe",
    flag: "\u{1F1EC}\u{1F1E7}",

    legalSystemOverview: {
      type: "議会主権制（Parliamentary sovereignty）",
      description:
        "2020年のEU離脱（Brexit）により、英国は独自の医療機器規制体制を構築中。MHRA（医薬品・医療機器規制庁）が医療機器の規制・承認・市販後監視を一元的に所管する。EU MDR/IVDR から UK MDR 2002（改正版）への移行を段階的に進めており、CEマーキングからUKCAマーキングへの転換が進行中。北アイルランドはウィンザー枠組みに基づきEU MDRが引き続き適用される特殊な状況にある。",
      keyCharacteristics: [
        "MHRA による一元的な規制体制",
        "Brexit 移行期間中はCEマーク受入継続（期限延長あり）",
        "UKCA マーキングへの段階的移行",
        "EU MDR に基づく4クラス分類（I/IIa/IIb/III）を継続",
        "北アイルランド: ウィンザー枠組みに基づきEU MDR/CE マークが適用",
        "UK Approved Bodies（EU Notified Bodies に相当）制度の整備",
      ],
    },

    authorities: [
      {
        name: "MHRA",
        fullName: "Medicines and Healthcare products Regulatory Agency",
        localName: null,
        role: "医療機器の規制・承認・市販後安全対策・臨床試験監督を一元的に実施。UKCAマーキング制度の運営。",
        url: "https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency",
        isPrimary: true,
      },
      {
        name: "NICE",
        fullName: "National Institute for Health and Care Excellence",
        localName: null,
        role: "医療技術評価（HTA）に基づく医療機器の費用対効果評価と使用推奨ガイダンスの発行。NHS における償還推奨。",
        url: "https://www.nice.org.uk/",
        isPrimary: false,
      },
      {
        name: "ASA",
        fullName: "Advertising Standards Authority",
        localName: null,
        role: "医療機器を含む広告の適正性に関する監視・規制。CAP Code に基づく広告基準の適用。",
        url: "https://www.asa.org.uk/",
        isPrimary: false,
      },
    ],

    notifiedBodies: {
      system: "UK Approved Bodies",
      description:
        "Brexit後、EU Notified Bodies に代わりMHRAが指定するUK Approved Bodies が英国市場向け医療機器の適合性評価を実施。クラスIIa以上の機器はApproved Body による第三者評価が必要。移行期間中はEU Notified Bodies の認証も一定期間有効。2026年現在、BSI UK を含む複数のApproved Bodies が指定済み。",
      bodies: [
        {
          name: "BSI (British Standards Institution)",
          url: "https://www.bsigroup.com/en-GB/medical-devices/",
        },
        {
          name: "SGS United Kingdom Ltd",
          url: "https://www.sgs.co.uk/en-gb/health-science",
        },
      ],
    },

    deviceDefinition: {
      legalDefinition:
        "人の疾病の診断、予防、監視、予測、予後判定、治療若しくは緩和、負傷若しくは障害の診断・監視・治療・緩和・補償、解剖学的構造若しくは生理学的過程の検査・置換・修正、又は人体からの検体の体外検査による情報提供を意図する器具、装置、機器、ソフトウェア、インプラント、試薬、材料その他の物品（UK MDR 2002 改正版に基づく）",
      scope:
        "体外診断用医療機器（IVD）、能動埋込み医療機器（AIMD）、ソフトウェア（SaMD）を含む。EU MDR の定義を基本的に踏襲しつつ、英国法に適合させた定義。",
      notes:
        "北アイルランドではEU MDR 第2条の定義が直接適用される。グレートブリテン（イングランド・ウェールズ・スコットランド）とは法的根拠が異なる点に注意。",
    },

    primaryLaw: {
      title: "Medicines and Medical Devices Act 2021",
      originalTitle: "Medicines and Medical Devices Act 2021",
      enacted: "2021-02-11",
      lastAmended: "2025-06-01",
      url: "https://www.legislation.gov.uk/ukpga/2021/3/contents",
      description:
        "Brexit後の英国における医薬品・医療機器の枠組み法・授権法。EU法に依存しない独自の規制権限をMHRAに付与。実務上GB市場で医療機器を直接規律する主法はThe Medical Devices Regulations 2002（SI 2002/618, as amended）。本法は規則制定権限の委任、患者安全制度の強化等を規定。",
    },

    implementingRegulations: [
      {
        title: "The Medical Devices Regulations 2002 (SI 2002/618, as amended)",
        date: "2002-06-13",
        url: "https://www.legislation.gov.uk/uksi/2002/618/contents",
        description:
          "英国における医療機器の分類、適合性評価、市場投入の要件を規定。元はEU指令のトランスポジション。Brexit後もMHRAによる段階的改正が進行中で、UKCAマーキング要件等が追加。",
        category: "基本規則",
      },
      {
        title: "The Medical Devices (Amendment) (Great Britain) Regulations 2023",
        date: "2023-07-01",
        url: "https://www.legislation.gov.uk/uksi/2023/627/contents",
        description:
          "CEマーク認識期間の延長、UKCA移行スケジュールの改訂、市販後監視要件の強化等を含む重要改正。",
        category: "改正規則",
      },
      {
        title: "UK Medical Device Information System (UKMDIS) Regulations",
        date: "2025-01-01",
        url: "https://www.gov.uk/government/publications/medical-devices-registration",
        description:
          "UDI制度と連携した医療機器情報システムの構築・登録義務に関する規則。段階的に義務化が進行中。",
        category: "情報システム",
      },
    ],

    relatedLaws: [
      {
        title: "UK General Data Protection Regulation (UK GDPR)",
        category: "データ保護",
        enacted: "2018-05-25",
        url: "https://www.legislation.gov.uk/eur/2016/679/contents",
        relevance:
          "医療機器から取得される健康データ・個人データの処理に適用。EU GDPRを英国法に組み込んだもので、ICOが監督。",
      },
      {
        title: "Data Protection Act 2018",
        category: "データ保護",
        enacted: "2018-05-23",
        url: "https://www.legislation.gov.uk/ukpga/2018/12/contents",
        relevance:
          "UK GDPRを補完する国内法。医療機器関連の個人データ処理における特別カテゴリーデータの取扱いを規定。",
      },
      {
        title: "Environment Act 2021",
        category: "環境",
        enacted: "2021-11-09",
        url: "https://www.legislation.gov.uk/ukpga/2021/30/contents",
        relevance:
          "医療機器に含まれる有害化学物質の管理、使い捨て医療機器の廃棄に関する環境配慮義務に関連。",
      },
      {
        title: "Consumer Protection Act 1987",
        category: "製造物責任",
        enacted: "1987-05-15",
        url: "https://www.legislation.gov.uk/ukpga/1987/43/contents",
        relevance:
          "医療機器の欠陥による損害に対する製造物責任を規定。厳格責任原則（strict liability）が適用される。",
      },
    ],

    classification: {
      system: "UK MDR 2002（SI 2002/618）に基づく4クラス分類",
      basis: "意図する使用目的、侵襲性、使用期間、能動/非能動等のリスク要因に基づく分類。EU MDR Annex VIII の分類ルールを英国法に移行中。",
      classes: [
        {
          name: "Class I",
          nameJa: "クラスI",
          riskLevel: "低",
          description:
            "低リスクの非侵襲性医療機器。自己適合宣言で市場投入可能（ただし測定機能付き・滅菌品・再使用可能手術器具はApproved Body関与が必要）。",
          examples: ["聴診器", "弾性包帯", "車椅子", "手術用手袋（非滅菌）", "歩行器"],
          approvalPath: "自己適合宣言（Declaration of Conformity）",
        },
        {
          name: "Class IIa",
          nameJa: "クラスIIa",
          riskLevel: "中低",
          description:
            "中低リスクの医療機器。短期侵襲性機器や診断用画像装置等。Approved Body による適合性評価が必要。",
          examples: ["超音波画像診断装置", "補聴器", "尿道カテーテル", "手術用ドレープ", "歯科用充填材"],
          approvalPath: "Approved Body による適合性評価",
        },
        {
          name: "Class IIb",
          nameJa: "クラスIIb",
          riskLevel: "中高",
          description:
            "中高リスクの医療機器。長期侵襲性機器や生体に重要な影響を与える機器。Approved Body による厳格な適合性評価が必要。",
          examples: ["人工呼吸器", "整形外科用インプラント（非永久）", "輸液ポンプ", "血液透析器", "放射線治療計画ソフトウェア"],
          approvalPath: "Approved Body による適合性評価（技術文書の詳細審査）",
        },
        {
          name: "Class III",
          nameJa: "クラスIII",
          riskLevel: "高",
          description:
            "最高リスクの医療機器。永久埋め込み機器や生命維持に直結する機器。Approved Body によるフルQA審査および設計審査が必要。",
          examples: ["心臓ペースメーカー", "人工心臓弁", "薬剤溶出型ステント", "乳房インプラント", "脊椎固定用インプラント"],
          approvalPath: "Approved Body による適合性評価（フルQA + 設計審査）",
        },
      ],
      rules: [
        "EU MDR Annex VIII に基づく22の分類ルールを英国法に移行",
        "SaMD（プログラム医療機器）はRule 11により分類",
        "北アイルランドではEU MDRの分類ルールがそのまま適用",
        "CEマーク認識期間中はEU指令ベースの分類も有効",
      ],
      totalProductCodes: "GMDN（Global Medical Device Nomenclature）を使用",
    },

    conformityAssessment: {
      overview:
        "英国市場への医療機器上市にはUKCAマーキングの取得が必要（移行期間中はCEマークも認識）。クラスIは自己適合宣言、クラスIIa以上はUK Approved Bodyによる適合性評価を経てUKCA宣言を行う。全クラスでMHRAへの機器登録が義務付けられている。北アイルランド市場にはCEマークまたはUKNI マークが必要。",
      routes: [
        {
          name: "UKCA Self-Declaration",
          nameJa: "UKCA自己適合宣言",
          applicableClasses: ["Class I（一般）"],
          description:
            "低リスクのクラスI機器について、製造業者が技術文書を作成し自己適合宣言を行いUKCAマークを貼付。MHRAへの機器登録は必須。",
          subtypes: [],
          avgReviewTime: "登録処理: 約10営業日",
          fee: "MHRAへの登録: 1申請あたり£240",
          url: "https://www.gov.uk/guidance/regulating-medical-devices-in-the-uk",
        },
        {
          name: "UKCA with Approved Body",
          nameJa: "Approved Body による適合性評価",
          applicableClasses: ["Class I（測定・滅菌）", "Class IIa", "Class IIb", "Class III"],
          description:
            "UK Approved Body が品質マネジメントシステム審査、技術文書審査、型式試験等を実施。適合証明書発行後にUKCAマークを貼付可能。複数の適合性評価経路（Annex ベース）から選択。",
          subtypes: [
            "フルQA審査（Annex IX相当）",
            "型式審査 + 製品検証（Annex X + XI相当）",
            "技術文書審査",
          ],
          avgReviewTime: "6〜18ヶ月（クラスにより異なる）",
          fee: "Approved Body により異なる（数千〜数万ポンド）",
          url: "https://www.gov.uk/guidance/register-as-a-manufacturer-to-place-a-medical-device-on-the-uk-market",
        },
        {
          name: "CE Mark Recognition (Transitional)",
          nameJa: "CEマーク認識（移行措置）",
          applicableClasses: ["全クラス"],
          description:
            "移行期間中、EU Notified Body が発行した有効なCE認証に基づき英国（グレートブリテン）市場に上市可能。EU MDR適合機器は2030年6月30日まで、EU MDD適合機器は2028年6月30日まで。さらに2026年2月にMHRAがCEマークの無期限認識を提案するパブリックコンサルテーションを開始（2026年4月10日締切）。",
          subtypes: [],
          avgReviewTime: "MHRAへの登録のみ（CE認証は取得済み前提）",
          fee: "MHRA登録: 1申請あたり£240",
          url: "https://www.gov.uk/government/publications/ce-marking-and-ukca-marking-for-medical-devices",
        },
      ],
    },

    electronicSubmission: {
      system: "MHRA Device Registration Portal",
      url: "https://www.gov.uk/guidance/register-medical-devices-to-place-on-the-market",
      description:
        "MHRAのオンラインポータルを通じて医療機器の登録を電子的に実施。英国市場に上市する全ての医療機器の製造業者またはUK Responsible Personによる登録が義務。",
      mandatory: true,
    },

    udi: {
      required: false,
      system: "UK UDI制度（導入予定・未施行）",
      description:
        "英国独自のUDI制度は今後のpre-market SIで導入予定。2026年4月時点では現行義務ではない。IMDRF UDIガイダンスに整合する方向で検討中。",
      url: "https://www.gov.uk/government/publications/unique-device-identification-udi-system-for-medical-devices",
      timeline:
        "未施行。具体的なクラス別スケジュールは今後のpre-market規則で規定予定。",
    },

    postMarket: {
      adverseEventReporting: {
        system: "Yellow Card Scheme（医療機器有害事象報告制度）",
        mandatory: true,
        url: "https://yellowcard.mhra.gov.uk/",
        description:
          "製造業者はMHRAへの有害事象報告が義務。報告期限は3区分: serious public health threat 2日以内、death/unanticipated serious deterioration 10日以内、other serious incidents 15日以内。医療従事者・患者もYellow Card Schemeを通じて自主的に報告可能。PSURはMHRAへは要求時3営業日以内に提出、UK Approved Bodyへ定期提出。",
      },
      recalls: {
        authority: "MHRA",
        description:
          "MHRAがField Safety Corrective Action（FSCA）およびリコールを監督。製造業者はField Safety Notice（FSN）を発行し、MHRAに報告。National Patient Safety Alertsによる医療現場への緊急通知システムも運用。",
        url: "https://www.gov.uk/drug-device-alerts",
      },
      surveillance:
        "製造業者は市販後監視計画（PMS Plan）の策定・実施が義務。クラスIIa以上は定期安全性更新報告書（PSUR）をMHRAに提出。重大インシデントのトレンド報告も必要。MHRAによる能動的サーベイランスプログラムも実施。",
    },

    certificateOfFreeSale: {
      available: true,
      issuingAuthority: "MHRA",
      name: "Certificate of Free Sale (CFS)",
      description:
        "英国で合法的に販売されている医療機器について、MHRAが自由販売証明書を発行。輸出先国の規制申請に使用。オンラインで申請可能。",
      processingTime: "約20営業日",
      url: "https://www.gov.uk/guidance/apply-for-a-certificate-of-free-sale-for-a-medical-device",
    },

    reimbursement: {
      system: "National Health Service (NHS)",
      authority: "NICE / NHS England",
      description:
        "NICEの医療技術評価（HTA）に基づき、NHS における医療機器の使用推奨が決定される。Medical Technologies Evaluation Programme（MTEP）やDiagnostics Assessment Programme（DAP）を通じて費用対効果を評価。Innovation and Technology Payment（ITP）により革新的機器の早期導入を支援。NHSサプライチェーンを通じた調達も重要。",
      codingSystems: [
        "OPCS-4（手術・処置コード）",
        "NHS eClass（製品分類コード）",
        "GHX/PEPPOL（調達コード）",
      ],
      url: "https://www.nice.org.uk/about/what-we-do/our-programmes/nice-guidance/nice-medical-technologies-evaluation-programme",
    },

    marketingRules: {
      authority: "MHRA / ASA / CAP",
      description:
        "医療機器の広告はCAP Code（Committee of Advertising Practice）およびMHRA Blue Guideに基づき規制。ASA が広告基準の遵守を監視。処方機器の一般消費者向け広告は制限あり。",
      keyRules: [
        "CAP Code: 医療機器広告の正確性・誤解を招かない表現の義務",
        "MHRA Blue Guide: 医療機器の広告・販売促進に関するガイダンス",
        "処方医療機器の一般消費者向け広告の制限",
        "比較広告には客観的エビデンスが必要",
        "ASA によるクレーム調査と是正措置",
      ],
    },

    mdsap: {
      status: "オブザーバー（Observer、2021年3月〜）",
      description:
        "英国（MHRA）は2021年3月にMDSAPのオブザーバーステータスを取得。正式な参加国（Regulatory Authority）ではない。MDSAP監査報告書の受入れ可能性を検討中の段階。",
    },

    internationalStandards: {
      iso13485: {
        accepted: true,
        notes:
          "UK MDR においてISO 13485準拠のQMSが要求される。UK Approved Body の適合性評価においてISO 13485認証が確認対象。BS EN ISO 13485として英国規格化。",
      },
      iso14971: {
        accepted: true,
        notes:
          "リスクマネジメントの実施が必須要件。BS EN ISO 14971として英国規格化。技術文書にリスクマネジメントファイルの提出が必要。",
      },
      iec62304: {
        accepted: true,
        notes:
          "ソフトウェアを含む医療機器およびSaMDの開発に適用。BS EN IEC 62304として英国規格化。",
      },
      iec60601: {
        accepted: true,
        notes:
          "医用電気機器の安全規格。BS EN IEC 60601シリーズとして英国規格化。適合性評価で遵守が確認される。",
      },
      others: [
        {
          name: "ISO 10993シリーズ（生物学的安全性評価）",
          notes:
            "生体接触医療機器の生物学的安全性評価に必須。BS EN ISO 10993として規格化。",
        },
        {
          name: "IEC 62443（サイバーセキュリティ）",
          notes:
            "MHRAのサイバーセキュリティガイダンスで参照。ネットワーク接続型医療機器に推奨。",
        },
      ],
    },

    recentDevelopments: [
      {
        date: "2026-02",
        title: "CEマーク無期限認識のパブリックコンサルテーション開始",
        description:
          "MHRAが医療機器・IVDのCEマーク無期限認識を提案するパブリックコンサルテーションを開始（2026年4月10日締切）。UKCA完全移行方針からの重大な政策転換。",
      },
      {
        date: "2025-06",
        title: "The Medical Devices (Post-market Surveillance Requirements) (Amendment) (Great Britain) Regulations 2024 施行",
        description:
          "2024年制定の医療機器PMS改正規則が2025年6月16日に施行。市販後監視に関する詳細要件（PMS計画、PSUR、安全性報告等）を追加。",
      },
      {
        date: "2025-02",
        title: "SaMD分類ガイダンス更新",
        description:
          "MHRAがソフトウェア医療機器（SaMD）の分類に関するガイダンスを2025年2月3日に更新。AI/ML搭載機器の分類基準を明確化。",
      },
      {
        date: "2023-08",
        title: "UK Approved Body 3機関追加指定",
        description:
          "MHRAがTÜV SÜD、Intertek、TÜV Rheinland UK の3機関をUK Approved Bodiesとして追加指定。指定AB数は計7機関に拡充。",
      },
    ],

    lastUpdated: "2026-04-01",
    verified: null,
  },

  /* ================================================================
   *  オーストラリア (AUS)
   * ================================================================ */
  {
    code: "AUS",
    country: "オーストラリア",
    countryEn: "Australia",
    region: "ASPAC",
    flag: "\u{1F1E6}\u{1F1FA}",

    legalSystemOverview: {
      type: "連邦制（Federal Commonwealth system）",
      description:
        "TGA（治療用品管理局）が医療機器の規制・審査・市販後監視を一元的に所管する。Therapeutic Goods Act 1989 に基づき、オーストラリアで供給される全ての医療機器はARTG（オーストラリア治療用品登録簿）への登録が必要。EUに整合した分類体系を採用しつつ、MDSAP創設メンバーとして国際的な規制調和を推進する先進国。オーストラリアの規制承認は多くの国で参照規制として認められている。",
      keyCharacteristics: [
        "TGA による連邦レベルの一元的規制体制",
        "ARTG（Australian Register of Therapeutic Goods）への登録義務",
        "EU MDR に整合した分類体系（Class I〜III, AIMD, IVD）",
        "Australian Sponsor（現地責任者）の設置義務",
        "MDSAP 創設メンバーとしての国際調和推進",
        "Essential Principles（基本原則）への適合要求",
      ],
    },

    authorities: [
      {
        name: "TGA",
        fullName: "Therapeutic Goods Administration",
        localName: null,
        role: "医療機器の審査・登録（ARTG）・市販後監視・リコール管理・臨床試験監督。オーストラリアにおける医療機器規制の中核機関。",
        url: "https://www.tga.gov.au/",
        isPrimary: true,
      },
      {
        name: "PBAC",
        fullName: "Pharmaceutical Benefits Advisory Committee",
        localName: null,
        role: "医療機器を含む治療用品の費用対効果評価と公的給付推奨（主に医薬品だが、一部の医療機器関連技術にも関与）。",
        url: "https://www.pbs.gov.au/info/industry/listing/participants/pbac",
        isPrimary: false,
      },
      {
        name: "ACCC",
        fullName: "Australian Competition and Consumer Commission",
        localName: null,
        role: "消費者保護法に基づく医療機器の広告・マーケティングに関する監視。虚偽・誤解を招く表現の規制。",
        url: "https://www.accc.gov.au/",
        isPrimary: false,
      },
    ],

    notifiedBodies: {
      system: "EU Notified Body 認証の受入れ + TGA適合性評価",
      description:
        "TGAはEU Notified Body が発行した適合性評価認証を一定範囲で受入れる。クラスI機器は製造業者の自己宣言で登録可能。クラスIIa以上はTGAによる審査またはEU/MDSAP認証の活用が可能。TGA自体が適合性評価を行う点がEU制度と異なる。",
      bodies: [
        {
          name: "TGA（直接審査）",
          url: "https://www.tga.gov.au/how-we-regulate/manufacturing-and-quality/conformity-assessment",
        },
      ],
    },

    deviceDefinition: {
      legalDefinition:
        "人の疾病の診断、予防、監視、治療若しくは緩和、負傷若しくは障害の診断・監視・治療・緩和・補償、解剖学的構造若しくは生理学的過程の検査・置換・修正、又は人体からの検体の体外検査による情報提供を目的として、主たる作用が薬理学的・免疫学的・代謝的手段ではない器具、装置、機器、材料その他の物品（Therapeutic Goods Act 1989 に基づく）",
      scope:
        "能動機器・非能動機器・体外診断用医療機器（IVD）・能動埋込み医療機器（AIMD）・ソフトウェア（SaMD）を含む。",
      notes:
        "コンビネーション製品（医療機器と医薬品の組合せ）はTGAが主たる作用に基づき規制区分を判断。",
    },

    primaryLaw: {
      title: "Therapeutic Goods Act 1989",
      originalTitle: "Therapeutic Goods Act 1989",
      enacted: "1989-11-07",
      lastAmended: "2025-09-01",
      url: "https://www.legislation.gov.au/Details/C2023C00242",
      description:
        "オーストラリアにおける治療用品（医薬品・医療機器・生物製剤）規制の根拠法。ARTG登録制度、適合性評価、市販後監視、リコール権限、広告規制を包括的に規定。2002年改正で医療機器に関する章を大幅整備。",
    },

    implementingRegulations: [
      {
        title: "Therapeutic Goods (Medical Devices) Regulations 2002",
        date: "2002-10-04",
        url: "https://www.legislation.gov.au/Details/F2023C00670",
        description:
          "医療機器の分類、Essential Principles（基本原則）への適合要件、適合性評価手続、ARTG登録要件等を詳細に規定。EU MDD/MDRの枠組みをオーストラリア法に適合させた規則。",
        category: "基本規則",
      },
      {
        title: "Therapeutic Goods Order No. 110 — Essential Principles",
        date: "2022-07-01",
        url: "https://www.legislation.gov.au/Details/F2022L00996",
        description:
          "医療機器が満たすべき安全性・性能に関する基本原則（Essential Principles）を規定。EU MDRのGSPR（General Safety and Performance Requirements）に整合。",
        category: "基本要件",
      },
      {
        title: "Therapeutic Goods (Manufacturing Principles) Determination 2020",
        date: "2020-08-01",
        url: "https://www.tga.gov.au/manufacturing-principles",
        description:
          "医療機器のGMP（製造品質管理基準）を規定。ISO 13485に整合した製造管理要件。",
        category: "GMP",
      },
    ],

    relatedLaws: [
      {
        title: "Privacy Act 1988",
        category: "データ保護",
        enacted: "1988-12-14",
        url: "https://www.legislation.gov.au/Details/C2023C00130",
        relevance:
          "医療機器から収集される健康情報の取扱いに適用。Australian Privacy Principles（APPs）の遵守が必要。2024年改正で保護強化。",
      },
      {
        title: "Therapeutic Goods Advertising Code",
        category: "広告",
        enacted: "2021-01-01",
        url: "https://www.tga.gov.au/resources/resource/guidance/therapeutic-goods-advertising-code-2021",
        relevance:
          "医療機器を含む治療用品の広告に関する基準。消費者向け広告の内容要件と禁止表現を規定。TGAが監督。",
      },
      {
        title: "Australian Industrial Chemicals Introduction Scheme (AICIS) Act 2019",
        category: "化学物質",
        enacted: "2019-07-01",
        url: "https://www.industrialchemicals.gov.au/",
        relevance:
          "医療機器に含まれる化学物質（旧NICNAS所管）の安全性評価に関連。2020年にNICNASからAICISに移行。",
      },
      {
        title: "Competition and Consumer Act 2010",
        category: "消費者保護",
        enacted: "2010-01-01",
        url: "https://www.legislation.gov.au/Details/C2023C00368",
        relevance:
          "医療機器の安全基準、リコール権限、虚偽・誤解を招く広告の禁止に関する消費者保護規定。ACCCが監督。",
      },
    ],

    classification: {
      system: "EU整合型分類体系",
      basis: "意図する使用目的、侵襲性、使用期間、能動/非能動等のリスク要因に基づく分類。EU MDD/MDR の分類ルールに整合。",
      classes: [
        {
          name: "Class I",
          nameJa: "クラスI",
          riskLevel: "低",
          description:
            "低リスクの医療機器。自己宣言に基づきARTGに登録（Include）。測定機能付き・滅菌品は追加要件あり。",
          examples: ["聴診器", "ウォーキングフレーム", "非滅菌手術器具", "舌圧子", "コールドパック"],
          approvalPath: "ARTG Include（届出登録）",
        },
        {
          name: "Class IIa",
          nameJa: "クラスIIa",
          riskLevel: "中低",
          description:
            "中低リスクの医療機器。TGA審査またはEU認証に基づきARTGに登録。",
          examples: ["補聴器", "超音波画像診断装置", "歯科用レジン", "コンタクトレンズ洗浄液", "手術用吸引器"],
          approvalPath: "ARTG Register（TGA審査登録）",
        },
        {
          name: "Class IIb",
          nameJa: "クラスIIb",
          riskLevel: "中高",
          description:
            "中高リスクの医療機器。TGAによる詳細な審査を経てARTGに登録。",
          examples: ["人工呼吸器", "血液透析器", "整形外科用ボーンプレート", "輸液ポンプ", "コンタクトレンズ（長期）"],
          approvalPath: "ARTG Register（TGA審査登録）",
        },
        {
          name: "Class III",
          nameJa: "クラスIII",
          riskLevel: "高",
          description:
            "最高リスクの医療機器。TGAによる最も厳格な審査。臨床エビデンスの提出が通常必要。",
          examples: ["心臓ペースメーカー", "人工心臓弁", "薬剤溶出型ステント", "乳房インプラント", "脊椎インプラント"],
          approvalPath: "ARTG Register（TGA審査登録 / Application audit）",
        },
        {
          name: "AIMD",
          nameJa: "能動埋込み医療機器",
          riskLevel: "高",
          description:
            "体内に外科的に埋め込まれ、電気エネルギー等で動作する医療機器。クラスIII相当の審査。",
          examples: ["植込み型除細動器（ICD）", "人工内耳", "脳深部刺激装置", "植込み型インスリンポンプ"],
          approvalPath: "ARTG Register（TGA審査登録）",
        },
      ],
      rules: [
        "EU MDD/MDR 分類ルールに整合した分類基準",
        "TGA Classification Rules（Schedule 2 of Medical Devices Regulations）",
        "IVDは別途4クラス（1〜4）に分類",
        "SaMDはその意図する使用目的に応じて分類",
      ],
      totalProductCodes: "GMDN（Global Medical Device Nomenclature）を使用",
    },

    conformityAssessment: {
      overview:
        "オーストラリアで医療機器を供給するにはARTG登録が必要。Australian Sponsor（現地責任者）がTGAに申請を行う。クラスIはInclude（届出登録）、クラスIIa以上はRegister（審査登録）が必要。EU Notified Body認証やMDSAP報告書を活用して審査を効率化する経路が存在する。全クラスでEssential Principlesへの適合が要求される。",
      routes: [
        {
          name: "ARTG Include",
          nameJa: "ARTG届出登録（Include）",
          applicableClasses: ["Class I"],
          description:
            "低リスクのクラスI機器について、Australian Sponsorが自己適合宣言に基づきARTGへの登録を届出。TGAによる事前審査は実施されないが、Essential Principlesへの適合が前提。",
          subtypes: [],
          avgReviewTime: "約20営業日",
          fee: "AUD 1,290（2025/26年度）",
          url: "https://www.tga.gov.au/resources/resource/guidance/medical-devices-how-include-devices-artg",
        },
        {
          name: "ARTG Register — Standard",
          nameJa: "ARTG審査登録（Standard）",
          applicableClasses: ["Class IIa", "Class IIb", "Class III", "AIMD"],
          description:
            "TGAがEssential Principlesへの適合性、技術文書、臨床エビデンス等を審査。有効なEU認証またはMDSAP報告書の提出により審査が効率化される場合がある。",
          subtypes: [
            "新規登録申請",
            "変更申請（Variation）",
            "更新申請（Renewal）",
          ],
          avgReviewTime: "クラスIIa: 4〜6ヶ月 / クラスIIb: 6〜9ヶ月 / クラスIII・AIMD: 9〜12ヶ月",
          fee: "AUD 4,040〜36,700（クラスにより異なる、2025/26年度）",
          url: "https://www.tga.gov.au/resources/resource/guidance/medical-devices-how-register-devices-artg",
        },
        {
          name: "ARTG Register — Priority Review",
          nameJa: "優先審査",
          applicableClasses: ["Class IIb", "Class III", "AIMD"],
          description:
            "重大な医療ニーズに対応する革新的機器に対する優先審査経路。TGAが審査を迅速に実施。",
          subtypes: [],
          avgReviewTime: "通常の半分程度の期間",
          fee: "追加手数料あり",
          url: "https://www.tga.gov.au/resources/resource/guidance/priority-review-pathway-medical-devices",
        },
      ],
    },

    electronicSubmission: {
      system: "TGA Business Services (TBS) / eBusiness Portal",
      url: "https://www.tga.gov.au/tga-business-services",
      description:
        "TGA Business Servicesポータルを通じて医療機器のARTG登録申請、変更申請、有害事象報告等を電子的に提出。2024年に新プラットフォームへ移行が進行中。",
      mandatory: true,
    },

    udi: {
      required: true,
      system: "TGA UDI制度（段階的導入中）",
      description:
        "TGAはIMDRF UDIガイダンスに基づく独自のUDI制度を導入中。GS1/HIBCC/ICCBBA の発行機関コードを使用。医療機器へのUDI表示とTGAデータベースへの情報登録を段階的に義務化。",
      url: "https://www.tga.gov.au/how-we-regulate/supply-therapeutic-good/supply-medical-device/unique-device-identification",
      timeline:
        "クラスIII・AIMD: 2025年から段階的導入 / クラスIIb: 2026年 / クラスIIa: 2027年 / クラスI: 2028年（予定）",
    },

    postMarket: {
      adverseEventReporting: {
        system: "Mandatory Problem Reporting",
        mandatory: true,
        url: "https://www.tga.gov.au/reporting-problems",
        description:
          "Australian Sponsorは医療機器に関連する重篤有害事象・不具合をTGAに報告する義務がある。死亡・重篤な健康被害は10営業日以内、その他は30営業日以内に報告。医療従事者・消費者からの自主報告制度も運用。",
      },
      recalls: {
        authority: "TGA",
        description:
          "TGAがUniform Recall Procedure for Therapeutic Goodsに基づきリコールを監督。スポンサーが自主的に回収を実施し、TGAに報告。リコール分類はClass I（重篤）〜Class III（軽微）。TGAウェブサイトでリコール情報を公開。",
        url: "https://www.tga.gov.au/safety/recalls-and-alerts/medical-device-recalls",
      },
      surveillance:
        "スポンサーは市販後監視計画の策定・実施が義務。TGAによるPost-market Review Program（特定機器カテゴリの体系的評価）も実施。ARTGの年次更新（Annual Charge）と併せて安全性情報を更新。",
    },

    certificateOfFreeSale: {
      available: true,
      issuingAuthority: "TGA",
      name: "Certificate of Free Sale (CFS)",
      description:
        "ARTGに登録済みの医療機器について、TGAが自由販売証明書を発行。輸出先国の規制申請に使用。オンライン申請が可能。",
      processingTime: "約20営業日",
      url: "https://www.tga.gov.au/resources/resource/guidance/certificates-pharmaceutical-products-and-certificates-free-sale",
    },

    reimbursement: {
      system: "Medicare Benefits Schedule (MBS) / Prostheses List",
      authority: "Department of Health and Aged Care / MSAC / PLAC",
      description:
        "医療機器の公的償還は主に2経路：(1) MBS（メディケア給付スケジュール）の技術料に包含される経路、(2) Prostheses List（人工器官等リスト）に個別収載される経路。MSAC（Medical Services Advisory Committee）が新規医療技術の費用対効果を評価。PLAC（Prostheses List Advisory Committee）がインプラント等の価格・収載を審議。",
      codingSystems: [
        "MBS Item Number（手術・検査コード）",
        "Prostheses List Billing Code",
        "AR-DRG（入院包括評価）",
      ],
      url: "https://www.health.gov.au/topics/private-health-insurance/the-prostheses-list",
    },

    marketingRules: {
      authority: "TGA / ACCC",
      description:
        "医療機器の広告はTherapeutic Goods Advertising Code 2021 に基づき規制。一般消費者向け広告はTGAの事前承認が一部必要。ACCC が消費者保護法に基づく虚偽広告を監視。",
      keyRules: [
        "Therapeutic Goods Advertising Code 2021 の遵守",
        "処方機器（Prescription Device）の消費者向け広告の制限",
        "広告における効能・効果の表現にはエビデンスが必要",
        "TGA Complaints Resolution Panel による苦情処理",
        "Australian Consumer Law に基づく虚偽・誤解を招く表現の禁止",
      ],
    },

    mdsap: {
      status: "創設メンバー（Founding Regulatory Authority）",
      description:
        "オーストラリア（TGA）はMDSAP（Medical Device Single Audit Program）の創設メンバー5カ国の一つ。MDSAP監査報告書をQMS適合性の根拠として受入れ。TGA自身のGMP監査の代替としてMDSAP報告書を活用可能で、国際企業の規制負担軽減に貢献。",
    },

    internationalStandards: {
      iso13485: {
        accepted: true,
        notes:
          "TGAの製造品質管理要件はISO 13485に整合。ARTG登録申請時にISO 13485適合の証拠提出が求められる。MDSAP監査でもISO 13485が基準。",
      },
      iso14971: {
        accepted: true,
        notes:
          "Essential Principlesにおいてリスクマネジメントの実施が要求され、ISO 14971への適合が事実上の標準。",
      },
      iec62304: {
        accepted: true,
        notes:
          "ソフトウェアを含む医療機器およびSaMDの開発にIEC 62304適合が求められる。",
      },
      iec60601: {
        accepted: true,
        notes:
          "医用電気機器の安全規格。AS/NZS IEC 60601シリーズとしてオーストラリア・ニュージーランド共同規格化。",
      },
      others: [
        {
          name: "ISO 10993シリーズ（生物学的安全性評価）",
          notes: "生体接触医療機器の生物学的安全性評価に必須。",
        },
        {
          name: "IEC 62366（ユーザビリティエンジニアリング）",
          notes: "医療機器のユーザビリティ評価に推奨。TGAガイダンスで参照。",
        },
      ],
    },

    recentDevelopments: [
      {
        date: "2026-02",
        title: "SaMD規制フレームワーク最終化",
        description:
          "TGAがAI/ML搭載SaMDの分類・審査に関する規制フレームワークを最終化。変更管理計画（Predetermined Change Control Plan）の運用開始。",
      },
      {
        date: "2025-10",
        title: "EU MDR整合の規制改革進行",
        description:
          "TGAがEU MDRのGSPRとの整合に向けたEssential Principles改訂案を公表。パブリックコメントを実施。",
      },
      {
        date: "2025-07",
        title: "MDSAP Version 2.0 への対応",
        description:
          "MDSAP Version 2.0 の要件に対応するTGAガイダンスを公表。監査基準の強化と効率化を推進。",
      },
      {
        date: "2025-04",
        title: "サイバーセキュリティガイダンス改訂",
        description:
          "ネットワーク接続型医療機器のサイバーセキュリティに関するTGAガイダンスを改訂。IEC 62443を参照し、SBOM（Software Bill of Materials）の提出を推奨。",
      },
    ],

    lastUpdated: "2026-04-01",
    verified: null,
  },

  /* ================================================================
   *  ブラジル (BRA)
   * ================================================================ */
  {
    code: "BRA",
    country: "ブラジル",
    countryEn: "Brazil",
    region: "Latam",
    flag: "\u{1F1E7}\u{1F1F7}",

    legalSystemOverview: {
      type: "連邦制・大統領制（Federal presidential system）",
      description:
        "ANVISA（国家衛生監督庁）が医療機器の登録・監督を一元的に所管する。2022年施行のRDC 751/2022により規制フレームワークが大幅に刷新され、IMDRF整合の4クラス分類制度へ移行。ブラジル国内の登録保持者（BRH: Brazilian Registration Holder）の設置が義務付けられている。MDSAP参加国として国際調和を推進。",
      keyCharacteristics: [
        "ANVISA による連邦レベルの一元的規制体制",
        "RDC 751/2022 による新規制フレームワーク（IMDRF整合）",
        "4クラス分類（I/II/III/IV）— IMDRF分類ルールに整合",
        "Cadastro（クラスI/II届出）vs Registro（クラスIII/IV登録）の二元構造",
        "BRH（Brazilian Registration Holder）の設置義務",
        "CBPF認証（GMP適合証明）の取得義務",
      ],
    },

    authorities: [
      {
        name: "ANVISA",
        fullName: "Agência Nacional de Vigilância Sanitária",
        localName: "Agência Nacional de Vigilância Sanitária",
        role: "医療機器の登録・適合性評価・GMP査察・市販後監視・リコール管理。ブラジルにおける医療機器規制の中核機関。",
        url: "https://www.gov.br/anvisa/pt-br",
        isPrimary: true,
      },
      {
        name: "INMETRO",
        fullName: "Instituto Nacional de Metrologia, Qualidade e Tecnologia",
        localName: "Instituto Nacional de Metrologia, Qualidade e Tecnologia",
        role: "計量・品質・技術標準の認定機関。医療機器の適合性評価機関の認定、特定製品の強制認証を所管。",
        url: "https://www.gov.br/inmetro/pt-br",
        isPrimary: false,
      },
    ],

    notifiedBodies: {
      system: "ANVISA直接審査 + INMETRO認定機関",
      description:
        "ブラジルではANVISAが医療機器の登録審査を直接実施する。GMP査察はANVISAまたはMDSAP認定監査機関が実施し、CBPF（Certificado de Boas Práticas de Fabricação）を発行。INMETRO認定の試験機関が特定の技術試験を実施する場合がある。",
      bodies: [
        {
          name: "ANVISA（直接審査）",
          url: "https://www.gov.br/anvisa/pt-br/assuntos/produtossaude/produtos-para-a-saude",
        },
      ],
    },

    deviceDefinition: {
      legalDefinition:
        "健康の目的で、疾病の診断、予防、監視、治療若しくは緩和、負傷の診断・監視・治療・緩和・補償、解剖学的構造若しくは生理学的過程の検査・置換・修正・支援、又は生命の維持に使用される器具、装置、機器、材料、体外診断用製品その他類似の物品であって、主たる作用が薬理学的・免疫学的・代謝的手段ではないもの（RDC 751/2022に基づく）",
      scope:
        "体外診断用医療機器（IVD）を含む。SaMD（ソフトウェア医療機器）も対象。コンビネーション製品は主たる作用により分類。",
      notes:
        "RDC 751/2022はIMDRFの医療機器定義に整合しており、旧規制（RDC 185/2001等）から大幅に近代化された。",
    },

    primaryLaw: {
      title: "Lei nº 6.360, de 23 de setembro de 1976",
      originalTitle: "Lei nº 6.360, de 23 de setembro de 1976",
      enacted: "1976-09-23",
      lastAmended: "2024-06-01",
      url: "https://www.planalto.gov.br/ccivil_03/leis/l6360.htm",
      description:
        "ブラジルにおける医薬品・医療機器を含む衛生製品の規制根拠法。製品の登録義務、製造・輸入・販売の許可要件、広告規制、罰則等を包括的に規定。ANVISAの規制権限の法的基盤。",
    },

    implementingRegulations: [
      {
        title: "RDC 751/2022（医療機器登録・届出に関する決議）",
        date: "2022-09-15",
        url: "https://www.gov.br/anvisa/pt-br/assuntos/noticias-anvisa/2022/publicada-a-rdc-751-2022",
        description:
          "医療機器の分類、登録（Registro）・届出（Cadastro）手続、技術文書要件を包括的に規定する主要規則。IMDRF分類ルールに整合した4クラス分類を導入。旧RDC 185/2001等を統合・刷新。",
        category: "基本規則",
      },
      {
        title: "RDC 665/2022（GMP要件）",
        date: "2022-03-30",
        url: "https://www.gov.br/anvisa/pt-br/assuntos/noticias-anvisa/2022/anvisa-atualiza-requisitos-de-boas-praticas-de-fabricacao-de-dispositivos-medicos",
        description:
          "医療機器の製造品質管理基準（GMP/Boas Práticas de Fabricação）を規定。ISO 13485に整合。CBPF認証の取得要件。",
        category: "GMP",
      },
      {
        title: "RDC 546/2021（臨床試験要件）",
        date: "2021-08-30",
        url: "https://www.gov.br/anvisa/pt-br/assuntos/produtossaude/produtos-para-a-saude",
        description:
          "医療機器の臨床試験（臨床評価）の計画・実施・報告に関する要件。GCP遵守義務。",
        category: "臨床試験",
      },
      {
        title: "IN 261/2023（技術文書ガイダンス）",
        date: "2023-04-15",
        url: "https://www.gov.br/anvisa/pt-br/assuntos/produtossaude/produtos-para-a-saude",
        description:
          "RDC 751/2022に基づく登録申請の技術文書作成に関する詳細ガイダンス。STED形式を参考にした文書構成。",
        category: "申請様式",
      },
    ],

    relatedLaws: [
      {
        title: "Lei Geral de Proteção de Dados (LGPD) — Lei 13.709/2018",
        category: "データ保護",
        enacted: "2018-08-14",
        url: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm",
        relevance:
          "医療機器から収集される個人健康データの処理に適用。センシティブデータ（健康情報）の処理には明示的同意等の法的根拠が必要。ANPD（国家データ保護庁）が監督。",
      },
      {
        title: "CONAMA Resolution 358/2005（医療廃棄物処理）",
        category: "環境",
        enacted: "2005-04-29",
        url: "https://www.ibama.gov.br/",
        relevance:
          "使用済み医療機器・単回使用機器の廃棄処理に関する環境規制。感染性廃棄物の分別・処理要件を規定。",
      },
      {
        title: "Lei 9.782/1999（ANVISA設立法）",
        category: "組織法",
        enacted: "1999-01-26",
        url: "https://www.planalto.gov.br/ccivil_03/leis/l9782.htm",
        relevance:
          "ANVISAの設立・権限・組織構成を規定。医療機器を含む衛生製品の規制権限の法的根拠。",
      },
    ],

    classification: {
      system: "IMDRF整合4クラス分類（RDC 751/2022）",
      basis: "意図する使用目的、侵襲性、使用期間、能動/非能動等のリスク要因に基づく分類。IMDRF分類ルールに整合。2022年にRDC 751/2022で刷新。",
      classes: [
        {
          name: "Class I",
          nameJa: "クラスI",
          riskLevel: "低",
          description:
            "低リスクの医療機器。Cadastro（届出）で市場投入が可能。ANVISAによる事前審査は不要。",
          examples: ["聴診器", "圧迫包帯", "手術用手袋", "歩行補助器", "舌圧子"],
          approvalPath: "Cadastro（届出）",
        },
        {
          name: "Class II",
          nameJa: "クラスII",
          riskLevel: "中低",
          description:
            "中低リスクの医療機器。Cadastro（届出）で市場投入が可能だが、クラスIより詳細な技術文書が必要。",
          examples: ["補聴器", "超音波画像診断装置", "歯科用充填材", "電子体温計", "注射針"],
          approvalPath: "Cadastro（届出）",
        },
        {
          name: "Class III",
          nameJa: "クラスIII",
          riskLevel: "中高",
          description:
            "中高リスクの医療機器。Registro（登録）が必要で、ANVISAによる技術審査を経て承認。",
          examples: ["人工呼吸器", "血液透析器", "整形外科用インプラント", "輸液ポンプ", "コンタクトレンズ"],
          approvalPath: "Registro（登録 — ANVISA審査）",
        },
        {
          name: "Class IV",
          nameJa: "クラスIV",
          riskLevel: "高",
          description:
            "最高リスクの医療機器。Registro（登録）が必要で、ANVISAによる最も厳格な審査。臨床データの提出が通常必要。",
          examples: ["心臓ペースメーカー", "人工心臓弁", "薬剤溶出型ステント", "乳房インプラント", "脳深部刺激装置"],
          approvalPath: "Registro（登録 — ANVISA審査 / 臨床データ要求）",
        },
      ],
      rules: [
        "IMDRF分類ルール（SG1/N77:2012）に整合した18の分類ルール",
        "RDC 751/2022 Annex に基づく分類基準",
        "IVDは別途RDC 36/2015（改正中）で分類",
        "SaMDはその意図する使用目的に応じて分類",
      ],
      totalProductCodes: "ANVISA独自の製品分類コード体系",
    },

    conformityAssessment: {
      overview:
        "ブラジルで医療機器を販売するにはANVISAへの登録または届出が必要。BRH（Brazilian Registration Holder）が申請主体となる。クラスI/IIはCadastro（届出）、クラスIII/IVはRegistro（登録）が必要。全クラスでCBPF（GMP適合証明書）の取得が前提条件。MDSAP監査報告書はCBPF取得の代替として活用可能。",
      routes: [
        {
          name: "Cadastro",
          nameJa: "届出（Cadastro）",
          applicableClasses: ["Class I", "Class II"],
          description:
            "低・中低リスクの医療機器についてBRHがANVISAに届出。基本的な技術文書の提出が必要だが、ANVISAによる事前の実質的審査は行われない。CBPF取得済みが前提。有効期間10年（更新可能）。",
          subtypes: [
            "新規届出",
            "変更届出（Alteração）",
            "更新届出（Revalidação）",
          ],
          avgReviewTime: "約30〜60日",
          fee: "BRL 500〜2,000程度（製品分類により異なる）",
          url: "https://www.gov.br/anvisa/pt-br/assuntos/produtossaude/produtos-para-a-saude",
        },
        {
          name: "Registro",
          nameJa: "登録（Registro）",
          applicableClasses: ["Class III", "Class IV"],
          description:
            "中高・高リスクの医療機器についてBRHがANVISAに登録申請。ANVISAが技術文書・臨床データ等を審査。クラスIVは最も厳格な審査が適用され、臨床試験データの提出が通常必要。有効期間10年（更新可能）。",
          subtypes: [
            "新規登録申請",
            "変更申請（Alteração）",
            "更新申請（Revalidação）",
            "ファミリー登録",
          ],
          avgReviewTime: "クラスIII: 6〜12ヶ月 / クラスIV: 12〜24ヶ月",
          fee: "BRL 5,000〜30,000程度（製品分類により異なる）",
          url: "https://www.gov.br/anvisa/pt-br/assuntos/produtossaude/produtos-para-a-saude",
        },
      ],
    },

    electronicSubmission: {
      system: "SOLICITA (ANVISAオンライン申請システム)",
      url: "https://www.gov.br/anvisa/pt-br/sistemas/solicita",
      description:
        "ANVISAのオンラインシステム「SOLICITA」を通じて医療機器の登録・届出申請を電子的に実施。技術文書のアップロード、審査状況の追跡が可能。2023年から段階的に新システムへ移行中。",
      mandatory: true,
    },

    udi: {
      required: true,
      system: "ANVISA UDI制度（導入中）",
      description:
        "ANVISAはIMDRF UDIガイダンスに基づくUDI制度を段階的に導入中。GS1ブラジルとの連携により、GS1標準のUDI-DIを使用。RDC 751/2022にUDI要件が含まれ、ラベル表示と登録データベースへの情報提供を義務化予定。",
      url: "https://www.gov.br/anvisa/pt-br/assuntos/produtossaude/produtos-para-a-saude",
      timeline:
        "クラスIV: 2025年から段階的導入 / クラスIII: 2026年 / クラスII: 2027年 / クラスI: 2028年（予定）",
    },

    postMarket: {
      adverseEventReporting: {
        system: "NOTIVISA / VIGIMED",
        mandatory: true,
        url: "https://www.gov.br/anvisa/pt-br/assuntos/fiscalizacao-e-monitoramento/notificacoes/tecnovigilancia",
        description:
          "BRHはANVISAに医療機器関連の有害事象を報告する義務がある。NOTIVISAシステム（新システムVIGIMEDへ移行中）を通じて電子報告。死亡・重篤な健康被害は10営業日以内、その他は30営業日以内。医療機関からの報告も義務。",
      },
      recalls: {
        authority: "ANVISA",
        description:
          "ANVISAがリコール・是正措置を監督。BRHは自主的な回収とANVISAへの報告義務を負う。ANVISAウェブサイトでリコール情報を公開。Tecnovigilânciaプログラムの一環として実施。",
        url: "https://www.gov.br/anvisa/pt-br/assuntos/fiscalizacao-e-monitoramento/alertas-e-recalls",
      },
      surveillance:
        "BRHは市販後監視（Tecnovigilância）プログラムに基づくモニタリング義務を負う。ANVISAはシグナル検出・リスク評価を実施し、必要に応じて市場措置（販売停止・回収命令）を発出。定期安全性報告の提出義務も順次導入。",
    },

    certificateOfFreeSale: {
      available: true,
      issuingAuthority: "ANVISA",
      name: "Certificado de Livre Comércio (CLC)",
      description:
        "ANVISAに登録・届出済みの医療機器について、自由販売証明書（Certificado de Livre Comércio）を発行。輸出先国の規制申請に使用。",
      processingTime: "約30〜60日",
      url: "https://www.gov.br/anvisa/pt-br/assuntos/produtossaude/produtos-para-a-saude",
    },

    reimbursement: {
      system: "SUS (Sistema Único de Saúde) / CONITEC",
      authority: "Ministério da Saúde / CONITEC",
      description:
        "公的医療制度SUS（統一医療制度）における医療機器の償還はCONITEC（国家保健技術統合委員会）が評価・推奨。医療技術評価（HTA）に基づき、費用対効果・予算影響分析を実施。民間保険（ANS監督）でも医療機器カバレッジの規定あり。",
      codingSystems: [
        "SIGTAP（SUS手技・手術コード表）",
        "CNES（医療施設コード）",
        "TUSS（民間保険統一用語システム）",
      ],
      url: "https://www.gov.br/conitec/pt-br",
    },

    marketingRules: {
      authority: "ANVISA / CMED",
      description:
        "医療機器の広告はANVISAの広告規制（RDC 96/2008等）に基づき規制。処方機器の一般消費者向け広告は禁止。虚偽・誇大広告に対する罰則あり。",
      keyRules: [
        "処方機器の一般消費者向け広告の禁止",
        "広告内容の正確性・エビデンスに基づく表現の義務",
        "未登録機器の広告禁止",
        "ANVISAによる広告監視と是正命令権限",
        "医療従事者向けプロモーションの倫理基準",
      ],
    },

    mdsap: {
      status: "参加国（Regulatory Authority）",
      description:
        "ブラジル（ANVISA）はMDSAP参加国。MDSAP監査報告書をCBPF（GMP適合証明書）取得の根拠として受入れ。MDSAP導入以前はANVISAによる海外工場査察が必須であったが、MDSAP報告書の活用により国際企業のGMP認証プロセスが大幅に効率化。",
    },

    internationalStandards: {
      iso13485: {
        accepted: true,
        notes:
          "RDC 665/2022のGMP要件はISO 13485に整合。CBPF認証においてISO 13485適合が確認される。MDSAP監査でもISO 13485が基準。",
      },
      iso14971: {
        accepted: true,
        notes:
          "リスクマネジメントの実施が登録・届出要件。ISO 14971への適合が事実上の標準。ABNT NBR ISO 14971として国内規格化。",
      },
      iec62304: {
        accepted: true,
        notes:
          "ソフトウェアを含む医療機器の開発にIEC 62304適合が推奨。ANVISAガイダンスで参照。",
      },
      iec60601: {
        accepted: true,
        notes:
          "医用電気機器の安全規格。ABNT NBR IEC 60601シリーズとして国内規格化。INMETRO強制認証の基準として適用される場合がある。",
      },
      others: [
        {
          name: "ISO 10993シリーズ（生物学的安全性評価）",
          notes: "生体接触医療機器の生物学的安全性評価に必須。ABNT NBR ISO 10993として規格化。",
        },
        {
          name: "ABNT NBR IEC 62366（ユーザビリティ）",
          notes: "医療機器のユーザビリティ評価に関するブラジル国内規格。",
        },
      ],
    },

    recentDevelopments: [
      {
        date: "2026-01",
        title: "RDC 751/2022 完全施行フェーズ開始",
        description:
          "RDC 751/2022の全条項が完全施行。旧規制からの移行期間が終了し、新分類体系・登録要件が全面適用。",
      },
      {
        date: "2025-09",
        title: "IVD規制改革案公表",
        description:
          "ANVISAが体外診断用医療機器（IVD）の規制改革案を公表。IMDRF IVD分類に整合した新規則を策定中。",
      },
      {
        date: "2025-06",
        title: "SaMD分類ガイダンス公表",
        description:
          "ANVISAがAI/ML搭載SaMDの分類と登録に関するガイダンスを公表。IMDRF SaMDフレームワークに基づく分類基準を提示。",
      },
      {
        date: "2025-03",
        title: "MDSAP Version 2.0 対応",
        description:
          "ANVISAがMDSAP Version 2.0の要件に対応するガイダンスを公表。CBPF認証プロセスとMDSAP報告書の連携を強化。",
      },
    ],

    lastUpdated: "2026-04-01",
    verified: null,
  },

  /* ================================================================
   *  インド (IND)
   * ================================================================ */
  {
    code: "IND",
    country: "インド",
    countryEn: "India",
    region: "ASPAC",
    flag: "\u{1F1EE}\u{1F1F3}",

    legalSystemOverview: {
      type: "連邦制・議院内閣制（Federal parliamentary system）",
      description:
        "CDSCO（中央医薬品基準管理機構）が医療機器の規制を中央レベルで所管する。Medical Devices Rules 2017 により医療機器に特化した規制枠組みが整備され、Drugs and Cosmetics Act 1940 の下位規則として運用。4クラス分類（A/B/C/D）を段階的に導入中で、クラスA/Bは州レベル、クラスC/Dは中央レベルでの承認が必要。急速な規制近代化が進行中だが、運用面では課題も残る。",
      keyCharacteristics: [
        "CDSCO が中央レベルで医療機器規制を所管",
        "州薬事管理者（State Drug Controllers）が一部クラスの監督を担当",
        "4クラス分類（A/B/C/D）の段階的導入",
        "Medical Devices Rules 2017 による近代的規制枠組み",
        "Indian Authorized Representative の設置義務（海外製造業者）",
        "段階的な規制対象品目の拡大（Phased implementation）",
      ],
    },

    authorities: [
      {
        name: "CDSCO",
        fullName: "Central Drugs Standard Control Organisation",
        localName: null,
        role: "医療機器の規制・クラスC/D機器の承認審査・臨床試験承認・輸入ライセンス発行・市販後監視。中央レベルの医療機器規制の中核機関。",
        url: "https://cdsco.gov.in/opencms/opencms/en/Medical-Device-Diagnostics/Medical-Device-Diagnostics/",
        isPrimary: true,
      },
      {
        name: "State Drug Controllers",
        fullName: "State Drugs Control Administration",
        localName: null,
        role: "クラスA/B医療機器の製造ライセンス発行、州レベルでの品質監視・査察。各州にDrugs Controllerが設置。",
        url: "https://cdsco.gov.in/opencms/opencms/en/state-drug-controller/",
        isPrimary: false,
      },
      {
        name: "BIS",
        fullName: "Bureau of Indian Standards",
        localName: null,
        role: "インド国家標準の策定・認証。医療機器に関するインド規格（IS規格）の策定。特定製品への強制BIS認証の適用。",
        url: "https://www.bis.gov.in/",
        isPrimary: false,
      },
    ],

    notifiedBodies: {
      system: "CDSCO直接審査 + Notified Body（導入中）",
      description:
        "インドではCDSCOが医療機器の登録・承認審査を直接実施する。Medical Devices Rules 2017に基づくNotified Body制度（第三者適合性評価機関）の整備が進行中だが、2026年現在はCDSCOによる直接審査が主流。品質管理審査（QMS audit）は認定された第三者機関が一部実施。",
      bodies: [
        {
          name: "CDSCO（直接審査）",
          url: "https://cdsco.gov.in/opencms/opencms/en/Medical-Device-Diagnostics/Medical-Device-Diagnostics/",
        },
      ],
    },

    deviceDefinition: {
      legalDefinition:
        "疾病の診断、予防、監視、治療若しくは緩和、負傷若しくは障害の診断・監視・治療・緩和・補償、解剖学的構造若しくは生理学的過程の検査・置換・修正・支援、又は生命の維持・受胎の制御に使用される器具、装置、機器、インプラント、体外試薬、ソフトウェアその他の物品であって、主たる作用が薬理学的・免疫学的・代謝的手段ではないもの（Medical Devices Rules 2017, Rule 2(b)に基づく）",
      scope:
        "体外診断用医療機器（IVD）を含む。SaMD（ソフトウェア医療機器）も対象。Drugs and Cosmetics Act 1940の下で医療機器として通知された品目が規制対象。",
      notes:
        "インドでは段階的に規制対象品目を通知（Gazette notification）により拡大中。2026年現在、全ての医療機器が規制対象となるよう移行が進行中。",
    },

    primaryLaw: {
      title: "Drugs and Cosmetics Act 1940",
      originalTitle: "The Drugs and Cosmetics Act, 1940 (Act No. 23 of 1940)",
      enacted: "1940-04-10",
      lastAmended: "2024-01-01",
      url: "https://cdsco.gov.in/opencms/opencms/en/Acts-Rules/",
      description:
        "インドにおける医薬品・化粧品・医療機器の規制根拠法。医療機器は2017年までは「医薬品」の一部として規制されていたが、Medical Devices Rules 2017の制定により独立した規制枠組みが整備された。製造・販売・輸入の許可制度、品質基準、罰則等を規定。",
    },

    implementingRegulations: [
      {
        title: "Medical Devices Rules 2017",
        date: "2017-01-31",
        url: "https://cdsco.gov.in/opencms/opencms/en/Medical-Device-Diagnostics/Medical-Device-Diagnostics/",
        description:
          "医療機器に特化した規制規則。4クラス分類（A/B/C/D）、登録・承認手続、品質管理要件、臨床試験要件、市販後監視要件を規定。段階的に施行範囲を拡大中。",
        category: "基本規則",
      },
      {
        title: "Medical Devices (Amendment) Rules 2020",
        date: "2020-02-11",
        url: "https://cdsco.gov.in/opencms/opencms/en/Medical-Device-Diagnostics/Medical-Device-Diagnostics/",
        description:
          "MDR 2017の改正。全ての医療機器を段階的に規制対象とするスケジュールの設定、輸入・製造ライセンス要件の明確化。",
        category: "改正規則",
      },
      {
        title: "Medical Device (Quality Management System) Guidelines",
        date: "2021-06-01",
        url: "https://cdsco.gov.in/opencms/opencms/en/Medical-Device-Diagnostics/Medical-Device-Diagnostics/",
        description:
          "医療機器のQMS要件ガイダンス。ISO 13485に整合した品質管理システムの構築と遵守を要求。Schedule V（第5附則）に基づく要件。",
        category: "QMS",
      },
    ],

    relatedLaws: [
      {
        title: "Digital Personal Data Protection Act 2023",
        category: "データ保護",
        enacted: "2023-08-11",
        url: "https://www.meity.gov.in/data-protection-framework",
        relevance:
          "医療機器から収集されるデジタル個人データの処理に適用。健康データはセンシティブデータとして追加的保護が必要。2025年から段階的施行。",
      },
      {
        title: "Bureau of Indian Standards Act 2016",
        category: "標準",
        enacted: "2016-03-22",
        url: "https://www.bis.gov.in/index.php/the-bureau-of-indian-standards-act-2016/",
        relevance:
          "BISによるインド国家標準の策定権限。特定の医療機器に対するBIS強制認証の法的根拠。",
      },
      {
        title: "Environment Protection Act 1986",
        category: "環境",
        enacted: "1986-05-23",
        url: "https://www.indiacode.nic.in/handle/123456789/1860",
        relevance:
          "医療機器の製造に伴う環境汚染防止、医療廃棄物（Biomedical Waste Management Rules 2016）の処理に関連。",
      },
      {
        title: "Clinical Establishments (Registration and Regulation) Act 2010",
        category: "医療施設",
        enacted: "2010-08-19",
        url: "https://www.indiacode.nic.in/handle/123456789/2058",
        relevance:
          "医療機器を使用する臨床施設の登録・規制に関連。機器の適正使用環境の確保。",
      },
    ],

    classification: {
      system: "4クラス分類（A/B/C/D）",
      basis: "意図する使用目的、人体へのリスクの程度に基づく分類。IMDRFの分類ルールを参考にしつつ、インド独自の分類基準を策定。段階的に規制対象品目を拡大中。",
      classes: [
        {
          name: "Class A",
          nameJa: "クラスA",
          riskLevel: "低",
          description:
            "低リスクの医療機器。州レベルのDrugs Controllerによる登録。比較的簡素な手続き。",
          examples: ["聴診器", "舌圧子", "手術用ガーゼ", "氷嚢", "歩行器"],
          approvalPath: "州登録（State Licensing Authority）",
        },
        {
          name: "Class B",
          nameJa: "クラスB",
          riskLevel: "中低",
          description:
            "中低リスクの医療機器。州レベルのDrugs Controllerによる登録。クラスAより詳細な技術文書が必要。",
          examples: ["補聴器", "血圧計", "歯科用充填材", "コンドーム", "手術用手袋"],
          approvalPath: "州登録（State Licensing Authority）",
        },
        {
          name: "Class C",
          nameJa: "クラスC",
          riskLevel: "中高",
          description:
            "中高リスクの医療機器。CDSCO（中央レベル）による承認審査が必要。技術審査委員会による評価。",
          examples: ["人工呼吸器", "血液透析器", "整形外科用インプラント（非永久）", "輸液ポンプ", "CT装置"],
          approvalPath: "CDSCO承認（中央レベル審査）",
        },
        {
          name: "Class D",
          nameJa: "クラスD",
          riskLevel: "高",
          description:
            "最高リスクの医療機器。CDSCOによる最も厳格な審査。臨床試験データの提出が通常必要。",
          examples: ["心臓ペースメーカー", "人工心臓弁", "薬剤溶出型ステント", "乳房インプラント", "脳深部刺激装置"],
          approvalPath: "CDSCO承認（中央レベル審査 / 臨床試験データ要求）",
        },
      ],
      rules: [
        "Medical Devices Rules 2017 Schedule I に基づく分類",
        "リスクベースの分類基準（侵襲性、使用期間、能動性等）",
        "Gazette notification により規制対象品目を段階的に追加",
        "IVDは別途分類（Class A-IVD〜D-IVD）",
      ],
      totalProductCodes: "CDSCO Gazette Notification で通知された品目リスト",
    },

    conformityAssessment: {
      overview:
        "インドで医療機器を製造・販売・輸入するには、Medical Devices Rules 2017に基づく登録・承認が必要。クラスA/Bは州レベル、クラスC/DはCDSCO（中央レベル）で審査。海外製造業者はIndian Authorized Representativeの設置が義務。全クラスでQMS（ISO 13485準拠）の遵守が要求される。段階的に規制対象品目を拡大中。",
      routes: [
        {
          name: "State Registration",
          nameJa: "州レベル登録",
          applicableClasses: ["Class A", "Class B"],
          description:
            "低・中低リスクの医療機器について、州Drugs Controllerに製造ライセンス・販売ライセンスを申請。比較的簡素な手続きだが、QMS遵守とGMP適合が前提。",
          subtypes: [
            "製造ライセンス（Manufacturing License）",
            "販売ライセンス（Sale License）",
            "輸入登録（Import Registration）",
          ],
          avgReviewTime: "約1〜3ヶ月",
          fee: "INR 5,000〜50,000程度",
          url: "https://cdsco.gov.in/opencms/opencms/en/Medical-Device-Diagnostics/Medical-Device-Diagnostics/",
        },
        {
          name: "CDSCO Registration/Approval",
          nameJa: "CDSCO登録・承認",
          applicableClasses: ["Class C", "Class D"],
          description:
            "中高・高リスクの医療機器について、CDSCOに登録・承認申請。技術審査委員会（MDAC: Medical Device Advisory Committee）による審査。クラスDは臨床試験データの提出が通常要求される。輸入品はImport License（Form 40）の取得が必要。",
          subtypes: [
            "製造承認（Manufacturing License + Marketing Authorization）",
            "輸入ライセンス（Import License — Form 40）",
            "臨床試験承認（Clinical Trial Permission）",
          ],
          avgReviewTime: "クラスC: 6〜12ヶ月 / クラスD: 12〜18ヶ月",
          fee: "INR 50,000〜500,000程度（製品により異なる）",
          url: "https://cdsco.gov.in/opencms/opencms/en/Medical-Device-Diagnostics/Medical-Device-Diagnostics/",
        },
      ],
    },

    electronicSubmission: {
      system: "SUGAM (CDSCOオンラインポータル) / MDR Portal",
      url: "https://sugam.cdsco.gov.in/",
      description:
        "CDSCOのオンラインポータル「SUGAM」を通じて医療機器の申請を電子的に提出可能。ただし、運用面では紙ベースの提出が併存する場合があり、完全電子化は発展途上。2024年にMedical Device専用ポータルの改善が進行中。",
      mandatory: false,
    },

    udi: {
      required: false,
      system: "UDI制度（検討・導入準備中）",
      description:
        "インドではIMDRF UDIガイダンスに基づくUDI制度の導入を検討中。CDSCOがUDI実装のロードマップを策定中だが、2026年現在は法的義務化には至っていない。GS1 Indiaとの連携によるパイロットプログラムが進行。",
      url: "https://cdsco.gov.in/opencms/opencms/en/Medical-Device-Diagnostics/Medical-Device-Diagnostics/",
      timeline: "ロードマップ策定中。段階的導入を計画（具体的日程は未確定）",
    },

    postMarket: {
      adverseEventReporting: {
        system: "Materiovigilance Programme of India (MvPI)",
        mandatory: true,
        url: "https://cdsco.gov.in/opencms/opencms/en/Medical-Device-Diagnostics/MvPI/",
        description:
          "製造業者・輸入業者は医療機器に関連する有害事象をCDSCO/MvPIに報告する義務がある。死亡・重篤な健康被害は10日以内、その他は30日以内に報告。IPC（Indian Pharmacopoeia Commission）がMvPIの運営を支援。医療機関からの報告はAMC（Adverse Event Monitoring Centers）を通じて収集。",
      },
      recalls: {
        authority: "CDSCO",
        description:
          "CDSCOがリコール・是正措置を監督。製造業者・輸入業者は自主回収とCDSCOへの報告義務を負う。Medical Devices Rules 2017にリコール手続きを規定。",
        url: "https://cdsco.gov.in/opencms/opencms/en/Medical-Device-Diagnostics/Medical-Device-Diagnostics/",
      },
      surveillance:
        "Materiovigilance Programme of India (MvPI) に基づく有害事象モニタリング。全国のAMC（Adverse Event Monitoring Centers）ネットワークを通じた報告収集。CDSCOによる市販後安全性評価と必要に応じた市場措置。",
    },

    certificateOfFreeSale: {
      available: true,
      issuingAuthority: "CDSCO",
      name: "Certificate of Free Sale (CFS) / Non-Objection Certificate (NOC)",
      description:
        "インドで製造・登録済みの医療機器について、CDSCOが自由販売証明書を発行。輸出先国の規制申請に使用。オンライン申請が一部可能。",
      processingTime: "約4〜8週間",
      url: "https://cdsco.gov.in/opencms/opencms/en/Medical-Device-Diagnostics/Medical-Device-Diagnostics/",
    },

    reimbursement: {
      system: "National Health Authority (NHA) / Ayushman Bharat",
      authority: "National Health Authority / Ministry of Health and Family Welfare",
      description:
        "公的医療保険Ayushman Bharat Pradhan Mantri Jan Arogya Yojana（AB-PMJAY）による医療機器を含む治療パッケージの償還。対象は経済的弱者層。中央政府医療制度（CGHS）による政府職員向け償還もある。民間保険ではIRDAIが規制。医療機器の価格はNPPA（National Pharmaceutical Pricing Authority）が一部管理。",
      codingSystems: [
        "AB-PMJAY Health Benefit Packages（HBP）コード",
        "CGHS料金表",
        "NPPA価格管理リスト",
      ],
      url: "https://nha.gov.in/",
    },

    marketingRules: {
      authority: "CDSCO / Advertising Standards Council of India (ASCI)",
      description:
        "医療機器の広告はDrugs and Cosmetics Act 1940およびDrugs and Magic Remedies (Objectionable Advertisements) Act 1954に基づき規制。ASCIが広告の自主規制を監督。",
      keyRules: [
        "未登録医療機器の広告禁止",
        "虚偽・誇大な効能表示の禁止",
        "Drugs and Magic Remedies Act に基づく「魔法的治療」の広告禁止",
        "ASCI Code に基づく広告の正確性と倫理基準",
        "オンライン広告・ソーシャルメディアプロモーションへの適用拡大",
      ],
    },

    mdsap: {
      status: "非参加（受入れ検討中）",
      description:
        "インド（CDSCO）はMDSAP公式参加国ではない。ただし、MDSAP監査報告書をQMS適合性の参考資料として受入れる方向で検討が進んでいる。将来的な正式参加に向けた関与を強化中。",
    },

    internationalStandards: {
      iso13485: {
        accepted: true,
        notes:
          "Medical Devices Rules 2017のQMS要件はISO 13485に整合。製造ライセンス取得時にISO 13485認証の提示が求められる。IS 13485として国内規格化。",
      },
      iso14971: {
        accepted: true,
        notes:
          "リスクマネジメントの実施が推奨・要求される。IS/ISO 14971として国内採用。登録申請の技術文書にリスク分析の提出が必要。",
      },
      iec62304: {
        accepted: true,
        notes:
          "ソフトウェアを含む医療機器の開発にIEC 62304適合が推奨。CDSCOガイダンスで参照。",
      },
      iec60601: {
        accepted: true,
        notes:
          "医用電気機器の安全規格。IS/IEC 60601シリーズとして国内規格化。BIS強制認証の基準として一部適用。",
      },
      others: [
        {
          name: "ISO 10993シリーズ（生物学的安全性評価）",
          notes: "生体接触医療機器の生物学的安全性評価に必須。IS/ISO 10993として採用。",
        },
        {
          name: "BIS強制認証対象規格",
          notes: "特定の医療機器（コンドーム、心臓ステント等）にBIS認証が義務付けられている。",
        },
      ],
    },

    recentDevelopments: [
      {
        date: "2026-01",
        title: "全医療機器の規制対象化完了に向けた最終フェーズ",
        description:
          "Gazette notificationにより、残りの未通知品目を含む全ての医療機器を規制対象とする最終フェーズのスケジュールを公表。",
      },
      {
        date: "2025-10",
        title: "Digital Personal Data Protection Act 施行細則公表",
        description:
          "医療機器に関連する健康データの処理要件を含む施行細則が公表。機器メーカーのデータ保護義務を明確化。",
      },
      {
        date: "2025-07",
        title: "医療機器臨床試験ガイダンス改訂",
        description:
          "CDSCOが医療機器の臨床試験要件に関するガイダンスを改訂。Global Clinical Trial データの受入れ基準を明確化し、インド固有の臨床データ要件を緩和。",
      },
      {
        date: "2025-04",
        title: "Make in India — 医療機器製造推進策",
        description:
          "政府がMake in India政策の一環として医療機器の国内製造を推進。PLI（Production Linked Incentive）スキームの対象品目拡大と規制手続の簡素化。",
      },
    ],

    lastUpdated: "2026-04-01",
    verified: null,
  },

  /* ================================================================
   *  台湾 (TWN)
   * ================================================================ */
  {
    code: "TWN",
    country: "台湾",
    countryEn: "Taiwan",
    region: "ASPAC",
    flag: "\u{1F1F9}\u{1F1FC}",

    legalSystemOverview: {
      type: "半大統領制（Semi-presidential system）",
      description:
        "TFDA（食品藥物管理署）が医療機器の規制・審査・市販後監視を所管する。2021年5月に施行された「醫療器材管理法」により、従来の薬事法（藥事法）から医療機器に特化した独立法体系へ移行。3クラス分類（I/II/III）に基づく規制を実施。台湾はIMDRFの正式メンバーではないがオブザーバーとして参加し、国際規制調和を推進。",
      keyCharacteristics: [
        "TFDA が医療機器規制を一元的に所管",
        "醫療器材管理法（2021年施行）による独立法体系",
        "3クラス分類（I/II/III）",
        "備查（クラスI届出）vs 查驗登記（クラスII/III登録）",
        "台湾ライセンスホルダー（台灣許可證持有者）の設置義務",
        "MDSAP監査報告書の受入れ",
      ],
    },

    authorities: [
      {
        name: "TFDA",
        fullName: "Taiwan Food and Drug Administration",
        localName: "衛生福利部食品藥物管理署",
        role: "医療機器の審査・登録・市販後監視・GMP査察・臨床試験監督。台湾における医療機器規制の中核機関。",
        url: "https://www.fda.gov.tw/",
        isPrimary: true,
      },
      {
        name: "MOHW",
        fullName: "Ministry of Health and Welfare",
        localName: "衛生福利部",
        role: "医療機器を含む保健衛生政策の策定。TFDAの上位機関として法令・政策を所管。",
        url: "https://www.mohw.gov.tw/",
        isPrimary: false,
      },
    ],

    notifiedBodies: {
      system: "TFDA直接審査 + 指定試験機関",
      description:
        "台湾ではTFDAが医療機器の登録審査を直接実施する。技術試験・安全性試験は認定された試験機関（TAF認定ラボ等）が実施。電気安全試験はBSMI（経済部標準検験局）認定機関で実施する場合がある。",
      bodies: [
        {
          name: "TFDA（直接審査）",
          url: "https://www.fda.gov.tw/TC/site.aspx?sid=38",
        },
        {
          name: "台灣認證基金會（TAF）認定試験機関",
          url: "https://www.taftw.org.tw/",
        },
      ],
    },

    deviceDefinition: {
      legalDefinition:
        "疾病の診断、治療、緩和若しくは直接予防、又は人体の構造若しくは機能に影響を及ぼすことを目的とする器具、器械、用具、物質、軟體（ソフトウェア）、体外診断試薬及びその付属品であって、主たる作用が薬理学的・免疫学的・代謝的手段ではないもの（醫療器材管理法第3条に基づく）",
      scope:
        "体外診断用医療機器（IVD）、ソフトウェア医療機器（SaMD）を含む。醫療器材管理法で包括的に定義。",
      notes:
        "2021年の醫療器材管理法施行により、従来の藥事法（Pharmaceutical Affairs Act）から医療機器部分が独立。医療機器に特化した定義と規制体系が整備された。",
    },

    primaryLaw: {
      title: "醫療器材管理法（Medical Devices Act）",
      originalTitle: "醫療器材管理法",
      enacted: "2020-01-15",
      lastAmended: "2020-01-15",
      url: "https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=L0030106",
      description:
        "台湾における医療機器規制の専用法。2021年5月1日施行。従来の藥事法から医療機器関連条項を独立させた法律で、製造・輸入・販売の許可制度、3クラス分類、登録（查驗登記）・届出（備查）制度、GMP要件、広告規制、市販後監視、罰則等を包括的に規定。",
    },

    implementingRegulations: [
      {
        title: "醫療器材分類分級管理辦法",
        date: "2021-04-29",
        url: "https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=L0030107",
        description:
          "医療機器の分類・等級（リスクレベル）に関する規則。3クラス分類の基準と品目ごとの分類コードを規定。",
        category: "分類",
      },
      {
        title: "醫療器材查驗登記審查準則",
        date: "2021-04-29",
        url: "https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=L0030108",
        description:
          "医療機器の登録（查驗登記）審査に関する規則。申請書類、審査基準、技術文書要件を規定。",
        category: "登録審査",
      },
      {
        title: "醫療器材優良製造規範（GMP）",
        date: "2021-05-01",
        url: "https://www.fda.gov.tw/TC/site.aspx?sid=38",
        description:
          "医療機器の製造品質管理基準（GMP）。ISO 13485に整合した品質マネジメントシステム要件を規定。",
        category: "GMP",
      },
      {
        title: "醫療器材臨床試驗管理辦法",
        date: "2021-04-29",
        url: "https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=L0030109",
        description:
          "医療機器の臨床試験の計画・実施・報告に関する規則。GCP遵守義務。TFDA倫理審査委員会の承認が必要。",
        category: "臨床試験",
      },
    ],

    relatedLaws: [
      {
        title: "個人資料保護法（Personal Data Protection Act）",
        category: "データ保護",
        enacted: "2010-05-26",
        url: "https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=I0050021",
        relevance:
          "医療機器から収集される個人データ（健康情報を含む）の処理に適用。センシティブデータの処理には特別な法的根拠が必要。2023年改正で保護強化。",
      },
      {
        title: "藥事法（Pharmaceutical Affairs Act）",
        category: "旧法",
        enacted: "1970-08-17",
        url: "https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=L0030001",
        relevance:
          "醫療器材管理法の施行前に医療機器を規制していた旧法。2021年5月以降は医療機器部分が醫療器材管理法に移行。医薬品の規制は引き続き藥事法に基づく。",
      },
      {
        title: "醫療法（Medical Care Act）",
        category: "医療制度",
        enacted: "1986-11-24",
        url: "https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=L0020021",
        relevance:
          "医療機関における医療機器の使用・管理に関する規定。医療広告規制にも関連。",
      },
    ],

    classification: {
      system: "3クラス分類（I/II/III）",
      basis: "意図する使用目的、人体へのリスクの程度に基づく分類。醫療器材分類分級管理辦法に基づき、品目ごとにクラスを指定。国際的な分類基準を参考にしつつ、台湾独自の分類コード体系を運用。",
      classes: [
        {
          name: "Class I（第一等級）",
          nameJa: "第一等級（低リスク）",
          riskLevel: "低",
          description:
            "低リスクの医療機器。備查（届出）で市場投入が可能。TFDAによる事前審査は不要。",
          examples: ["聴診器", "手術用手袋", "弾性包帯", "歩行器", "舌圧子"],
          approvalPath: "備查（届出 / Listing）",
        },
        {
          name: "Class II（第二等級）",
          nameJa: "第二等級（中リスク）",
          riskLevel: "中",
          description:
            "中リスクの医療機器。查驗登記（登録）が必要で、TFDAによる審査を経て許可証（醫療器材許可證）を取得。",
          examples: ["超音波画像診断装置", "補聴器", "コンタクトレンズ", "電子血圧計", "歯科用充填材"],
          approvalPath: "查驗登記（登録 / Registration — TFDA審査）",
        },
        {
          name: "Class III（第三等級）",
          nameJa: "第三等級（高リスク）",
          riskLevel: "高",
          description:
            "最高リスクの医療機器。查驗登記（登録）が必要で、TFDAによる最も厳格な審査。臨床試験データの提出が通常必要。",
          examples: ["心臓ペースメーカー", "人工心臓弁", "薬剤溶出型ステント", "人工関節", "脳深部刺激装置"],
          approvalPath: "查驗登記（登録 / Registration — TFDA審査 / 臨床データ要求）",
        },
      ],
      rules: [
        "醫療器材分類分級管理辦法に基づく品目別分類",
        "約3,500の品目コード（鑑別碼）に基づく管理",
        "IVDは同法で別途分類",
        "SaMDの分類はTFDAガイダンスで指針を提示",
      ],
      totalProductCodes: "約3,500（鑑別碼）",
    },

    conformityAssessment: {
      overview:
        "台湾で医療機器を製造・輸入・販売するには、醫療器材管理法に基づく登録または届出が必要。クラスIは備查（届出）、クラスII/IIIは查驗登記（登録）が必要。台湾ライセンスホルダーが申請主体。GMP（ISO 13485整合）適合が全クラスで前提。MDSAP監査報告書の活用も可能。",
      routes: [
        {
          name: "備查 (Listing)",
          nameJa: "備查（届出）",
          applicableClasses: ["Class I"],
          description:
            "低リスクのクラスI機器について、台湾ライセンスホルダーがTFDAに届出。基本的な技術文書の提出が必要だが、TFDAによる実質的審査は行われない。GMP適合が前提。",
          subtypes: [],
          avgReviewTime: "約15〜30営業日",
          fee: "NTD 2,000〜5,000程度",
          url: "https://www.fda.gov.tw/TC/site.aspx?sid=38",
        },
        {
          name: "查驗登記 (Registration)",
          nameJa: "查驗登記（登録）",
          applicableClasses: ["Class II", "Class III"],
          description:
            "中・高リスクの医療機器について、台湾ライセンスホルダーがTFDAに登録申請。TFDAが技術文書・臨床データ・品質管理体制を審査し、醫療器材許可證を発行。クラスIIIは臨床試験データの提出が通常必要。FDA（米国）やCEマーク承認の参照が可能な場合がある。",
          subtypes: [
            "新規登録申請",
            "変更登録申請",
            "許可証更新",
            "ファミリー登録",
          ],
          avgReviewTime: "クラスII: 3〜6ヶ月 / クラスIII: 6〜12ヶ月",
          fee: "NTD 10,000〜50,000程度（製品分類により異なる）",
          url: "https://www.fda.gov.tw/TC/site.aspx?sid=38",
        },
      ],
    },

    electronicSubmission: {
      system: "TFDA醫療器材線上申請系統",
      url: "https://mdregistry.fda.gov.tw/",
      description:
        "TFDAのオンライン申請システムを通じて医療機器の登録・届出を電子的に実施。技術文書のアップロード、審査状況の追跡が可能。段階的に電子化を推進中。",
      mandatory: true,
    },

    udi: {
      required: true,
      system: "台湾UDI制度（段階的導入中）",
      description:
        "TFDAはIMDRF UDIガイダンスに基づくUDI制度を段階的に導入中。GS1標準のUDI-DIを使用。高リスク機器から順次ラベル表示とTFDAデータベースへの登録を義務化。",
      url: "https://www.fda.gov.tw/TC/site.aspx?sid=38",
      timeline:
        "クラスIII: 2024年実施済み / クラスII: 2025年〜段階的導入 / クラスI: 2027年予定",
    },

    postMarket: {
      adverseEventReporting: {
        system: "醫療器材不良品通報系統（Medical Device Adverse Event Reporting System）",
        mandatory: true,
        url: "https://qms.fda.gov.tw/tcbw/",
        description:
          "製造業者・輸入業者はTFDAに医療機器の不良・有害事象を報告する義務がある。死亡・重篤な健康被害は15日以内、その他は30日以内に報告。医療機関からの報告制度も運用。",
      },
      recalls: {
        authority: "TFDA",
        description:
          "TFDAがリコール・是正措置を監督。製造業者・輸入業者は自主回収とTFDAへの報告義務を負う。リコール分類は第一級（重篤）〜第三級（軽微）。TFDAウェブサイトで回収情報を公開。",
        url: "https://www.fda.gov.tw/TC/site.aspx?sid=46",
      },
      surveillance:
        "製造業者は市販後監視計画の策定・実施が義務。TFDAによるPost-market Surveillance Programの運用。定期安全性報告の提出義務（クラスIII機器）。GMP査察による製造品質の継続的監視。",
    },

    certificateOfFreeSale: {
      available: true,
      issuingAuthority: "TFDA",
      name: "自由銷售證明書（Certificate of Free Sale）",
      description:
        "台湾で許可証を取得済みの医療機器について、TFDAが自由販売証明書を発行。輸出先国の規制申請に使用。",
      processingTime: "約2〜4週間",
      url: "https://www.fda.gov.tw/TC/site.aspx?sid=38",
    },

    reimbursement: {
      system: "全民健康保險（National Health Insurance）",
      authority: "衛生福利部中央健康保險署（NHIA）",
      description:
        "台湾の全民健康保險（NHI）は全国民をカバーする単一保険者制度。医療機器の償還はNHIAが管理する支付基準（Payment Standards）に基づく。高額な特殊材料（特材）は個別の収載・価格交渉が必要。HTA（医療技術評価）機能はCDE（醫藥品查驗中心）が支援。",
      codingSystems: [
        "NHI支付基準コード（特材コード）",
        "ICD-10-PCS（手術コード）",
        "TW-DRG（入院包括評価）",
      ],
      url: "https://www.nhi.gov.tw/",
    },

    marketingRules: {
      authority: "TFDA / NCC（國家通訊傳播委員會）",
      description:
        "医療機器の広告は醫療器材管理法に基づき規制。広告内容はTFDAの事前審査が必要な場合がある。虚偽・誇大広告は禁止。放送・インターネット広告はNCCも監督。",
      keyRules: [
        "醫療器材管理法に基づく広告規制",
        "TFDAによる広告内容の事前審査（必要な場合）",
        "未許可医療機器の広告禁止",
        "虚偽・誇大な効能表示の禁止と罰則",
        "医療機器の適正使用に関する情報提供義務",
      ],
    },

    mdsap: {
      status: "Affiliate Member",
      description:
        "台湾（TFDA）はMDSAPのAffiliate Memberとして参加。MDSAP監査報告書をGMP適合の参考資料として受入れ、GMP審査プロセスの効率化に活用。",
    },

    internationalStandards: {
      iso13485: {
        accepted: true,
        notes:
          "台湾のGMP要件はISO 13485に整合。醫療器材許可證取得時にISO 13485認証の提示が求められる。CNS 13485として国内規格化。",
      },
      iso14971: {
        accepted: true,
        notes:
          "リスクマネジメントの実施が必須要件。CNS 14971として国内規格化。技術文書にリスクマネジメントファイルの提出が必要。",
      },
      iec62304: {
        accepted: true,
        notes:
          "ソフトウェアを含む医療機器の開発にIEC 62304適合が求められる。TFDAガイダンスで参照。",
      },
      iec60601: {
        accepted: true,
        notes:
          "医用電気機器の安全規格。CNS 60601シリーズとして国内規格化。電気安全試験はBSMI認定機関で実施。",
      },
      others: [
        {
          name: "ISO 10993シリーズ（生物学的安全性評価）",
          notes: "生体接触医療機器の生物学的安全性評価に必須。CNS 10993として規格化。",
        },
        {
          name: "IEC 62366（ユーザビリティ）",
          notes: "医療機器のユーザビリティ評価に推奨。TFDAガイダンスで参照。",
        },
      ],
    },

    recentDevelopments: [
      {
        date: "2026-02",
        title: "SaMD審査ガイダンス公表",
        description:
          "TFDAがAI/ML搭載SaMDの分類・審査に関するガイダンスを公表。国際的な規制動向を踏まえた台湾独自の審査基準を提示。",
      },
      {
        date: "2025-11",
        title: "醫療器材管理法施行細則改正",
        description:
          "醫療器材管理法の施行細則が改正。UDI制度の詳細要件、市販後監視報告の強化等を含む。",
      },
      {
        date: "2025-07",
        title: "サイバーセキュリティガイダンス策定",
        description:
          "TFDAがネットワーク接続型医療機器のサイバーセキュリティに関するガイダンスを策定。IMDRF Cybersecurity Guidanceに整合。",
      },
      {
        date: "2025-03",
        title: "GMP査察の国際連携強化",
        description:
          "TFDAがMDSAP参加国との相互協力を強化。GMP査察結果の相互活用に向けた協議を推進。",
      },
    ],

    lastUpdated: "2026-04-01",
    verified: null,
  },

  /* ================================================================
   *  シンガポール (SGP)
   * ================================================================ */
  {
    code: "SGP",
    country: "シンガポール",
    countryEn: "Singapore",
    region: "ASPAC",
    flag: "\u{1F1F8}\u{1F1EC}",

    legalSystemOverview: {
      type: "議院内閣制・一院制（Parliamentary republic）",
      description:
        "HSA（Health Sciences Authority）が医療機器の規制・審査・市販後監視を一元的に所管する。Health Products Act 2007およびHealth Products (Medical Devices) Regulations 2010に基づき、4クラス分類（A/B/C/D）のリスクベース規制を実施。FDA・EU・Health Canada・TGA・PMDAを参照規制機関（Reference Regulators）として認め、これらの承認を活用した簡略審査経路（Abridged Route）が特徴。SHAREオンラインポータルによる効率的な電子申請システムを運用。",
      keyCharacteristics: [
        "HSA による一元的規制体制",
        "4クラス分類（A/B/C/D）のリスクベース規制",
        "参照規制機関（Reference Regulators）制度による簡略審査",
        "SHAREオンラインポータルによる電子申請",
        "Dealer's License（クラスA）vs Product Registration（クラスB/C/D）",
        "ASEAN医療機器指令（AMDD）への整合",
      ],
    },

    authorities: [
      {
        name: "HSA",
        fullName: "Health Sciences Authority",
        localName: null,
        role: "医療機器の規制・登録審査・市販後監視・リコール管理・広告規制。シンガポールにおける医療機器規制の中核機関。Health Products Regulation Group (HPRG) が医療機器部門を担当。",
        url: "https://www.hsa.gov.sg/medical-devices",
        isPrimary: true,
      },
    ],

    notifiedBodies: {
      system: "HSA直接審査（参照規制機関制度活用）",
      description:
        "シンガポールではHSAが医療機器の登録審査を直接実施する。独自のNotified Body制度は存在しないが、FDA・EU・Health Canada・TGA・PMDAの5つの参照規制機関による承認を活用した簡略審査経路が設けられている。これにより審査の効率化と国際整合を実現。",
      bodies: [
        {
          name: "HSA Health Products Regulation Group（直接審査）",
          url: "https://www.hsa.gov.sg/medical-devices/registration",
        },
      ],
    },

    deviceDefinition: {
      legalDefinition:
        "疾病の診断、予防、監視、治療若しくは緩和、負傷若しくは障害の診断・監視・治療・緩和・補償、解剖学的構造若しくは生理学的過程の検査・置換・修正・支援、生命の維持・受胎の制御、又は人体からの検体の体外検査による情報提供を目的とする器具、装置、機器、材料、ソフトウェアその他の物品であって、主たる作用が薬理学的・免疫学的・代謝的手段ではないもの（Health Products Act 2007に基づく）",
      scope:
        "体外診断用医療機器（IVD）、ソフトウェア医療機器（SaMD）を含む。GHTF/IMDRFの定義に整合。",
      notes:
        "コンビネーション製品は主たる作用により規制区分を判断。HSAガイダンスで詳細な判断基準を提示。",
    },

    primaryLaw: {
      title: "Health Products Act 2007",
      originalTitle: "Health Products Act 2007 (Act 15 of 2007)",
      enacted: "2007-09-17",
      lastAmended: "2025-03-01",
      url: "https://sso.agc.gov.sg/Act/HPA2007",
      description:
        "シンガポールにおける健康製品（医薬品・医療機器・化粧品等）の規制根拠法。医療機器の登録義務、製造・輸入・販売の許可要件、広告規制、市販後監視、罰則等を規定。2010年に医療機器への適用が開始。",
    },

    implementingRegulations: [
      {
        title: "Health Products (Medical Devices) Regulations 2010",
        date: "2010-08-01",
        url: "https://sso.agc.gov.sg/SL/HPA2007-S436-2010",
        description:
          "医療機器の分類、登録手続、Essential Principles、Dealer's License、市販後監視要件等を詳細に規定。シンガポールの医療機器規制の主要実施規則。",
        category: "基本規則",
      },
      {
        title: "GN-13: Guidance on Medical Device Product Registration",
        date: "2023-11-01",
        url: "https://www.hsa.gov.sg/medical-devices/registration/guidance-documents",
        description:
          "医療機器の製品登録に関する包括的ガイダンス。登録経路（Full/Abridged/Immediate）の選択基準、申請要件、技術文書の内容を詳述。",
        category: "登録ガイダンス",
      },
      {
        title: "GN-15: Guidance on Essential Principles for Safety and Performance",
        date: "2021-06-01",
        url: "https://www.hsa.gov.sg/medical-devices/registration/guidance-documents",
        description:
          "医療機器の安全性・性能に関する基本原則（Essential Principles）への適合に関するガイダンス。IMDRF Essential Principlesに整合。",
        category: "基本要件",
      },
    ],

    relatedLaws: [
      {
        title: "Personal Data Protection Act 2012 (PDPA)",
        category: "データ保護",
        enacted: "2012-10-15",
        url: "https://sso.agc.gov.sg/Act/PDPA2012",
        relevance:
          "医療機器から収集される個人データの処理に適用。PDPC（Personal Data Protection Commission）が監督。2021年改正でデータ侵害通知義務を導入。",
      },
      {
        title: "Cybersecurity Act 2018",
        category: "サイバーセキュリティ",
        enacted: "2018-02-05",
        url: "https://sso.agc.gov.sg/Act/CA2018",
        relevance:
          "医療機関の情報システムがCritical Information Infrastructure（CII）に指定される場合、接続する医療機器にもサイバーセキュリティ義務が及ぶ。CSA（Cyber Security Agency）が監督。",
      },
      {
        title: "Medicines Act (Cap. 176)",
        category: "医薬品",
        enacted: "1977-01-01",
        url: "https://sso.agc.gov.sg/Act/MA1975",
        relevance:
          "コンビネーション製品（医療機器と医薬品の組合せ）の規制区分判断に関連。主たる作用が薬理学的な場合はMedicines Actの適用。",
      },
      {
        title: "Medicines (Advertisement and Sale) Act (Cap. 177)",
        category: "広告",
        enacted: "1977-01-01",
        url: "https://sso.agc.gov.sg/Act/MASA1955",
        relevance:
          "医療機器の広告に関する補完的規制。虚偽の治療効果の広告禁止。Health Products Actと併せて適用。",
      },
    ],

    classification: {
      system: "4クラス分類（A/B/C/D）",
      basis: "意図する使用目的、人体へのリスクの程度に基づく分類。GHTF/IMDRFの分類ルールに整合。ASEAN医療機器指令（AMDD）の分類基準にも対応。",
      classes: [
        {
          name: "Class A",
          nameJa: "クラスA",
          riskLevel: "低",
          description:
            "低リスクの医療機器。製品登録は不要だが、Dealer's License（販売業ライセンス）の取得が必要。",
          examples: ["聴診器", "舌圧子", "弾性包帯", "手術用手袋（非滅菌）", "歩行器"],
          approvalPath: "Dealer's License（販売業ライセンス — 製品登録不要）",
        },
        {
          name: "Class B",
          nameJa: "クラスB",
          riskLevel: "中低",
          description:
            "中低リスクの医療機器。HSAへの製品登録が必要。参照規制機関の承認がある場合はAbridged Routeが利用可能。",
          examples: ["補聴器", "超音波画像診断装置", "歯科用充填材", "電子血圧計", "注射針"],
          approvalPath: "HSA製品登録（Full / Abridged / Immediate Route）",
        },
        {
          name: "Class C",
          nameJa: "クラスC",
          riskLevel: "中高",
          description:
            "中高リスクの医療機器。HSAへの製品登録が必要。より詳細な技術文書と臨床データの提出が求められる。",
          examples: ["人工呼吸器", "血液透析器", "整形外科用インプラント", "輸液ポンプ", "コンタクトレンズ"],
          approvalPath: "HSA製品登録（Full / Abridged Route）",
        },
        {
          name: "Class D",
          nameJa: "クラスD",
          riskLevel: "高",
          description:
            "最高リスクの医療機器。HSAによる最も厳格な審査。包括的な臨床データの提出が通常必要。",
          examples: ["心臓ペースメーカー", "人工心臓弁", "薬剤溶出型ステント", "乳房インプラント", "脳深部刺激装置"],
          approvalPath: "HSA製品登録（Full Route / Abridged Route）",
        },
      ],
      rules: [
        "GHTF/IMDRF分類ルールに整合した分類基準",
        "HSA Risk Classification Rules（GN-13に記載）",
        "IVDは別途4リスクレベル（1〜4）に分類",
        "SaMDはその意図する使用目的に応じて分類",
        "ASEAN AMDD分類との互換性を確保",
      ],
      totalProductCodes: "GMDN（Global Medical Device Nomenclature）を使用",
    },

    conformityAssessment: {
      overview:
        "シンガポールで医療機器を販売するには、クラスに応じた規制要件の遵守が必要。クラスAはDealer's License取得のみ、クラスB/C/DはHSAへの製品登録が必要。登録経路はFull Route（独自審査）、Abridged Route（参照規制機関の承認活用）、Immediate Route（参照規制機関の承認+条件充足で即時登録）の3種。SHAREポータルで電子申請を実施。",
      routes: [
        {
          name: "Dealer's License",
          nameJa: "販売業ライセンス（Dealer's License）",
          applicableClasses: ["Class A"],
          description:
            "低リスクのクラスA機器は個別の製品登録が不要。医療機器の輸入・販売・供給を行う事業者がDealer's Licenseを取得すれば市場投入可能。ライセンスは毎年更新。",
          subtypes: [
            "Importer's License",
            "Wholesaler's License",
            "Manufacturer's License",
          ],
          avgReviewTime: "約30営業日",
          fee: "SGD 250（年間ライセンス料）",
          url: "https://www.hsa.gov.sg/medical-devices/dealers-licence",
        },
        {
          name: "Full Evaluation Route",
          nameJa: "フル審査経路（Full Route）",
          applicableClasses: ["Class B", "Class C", "Class D"],
          description:
            "参照規制機関の承認がない場合、HSAが独自に包括的な審査を実施。技術文書、臨床データ、QMS適合証拠等の完全な提出が必要。最も審査期間が長いが、先行承認がない革新的機器に適用。",
          subtypes: [
            "新規登録申請",
            "変更申請（Major/Minor Change Notification）",
          ],
          avgReviewTime: "クラスB: 6〜9ヶ月 / クラスC: 9〜12ヶ月 / クラスD: 12〜16ヶ月",
          fee: "SGD 7,800〜14,400（クラスにより異なる）",
          url: "https://www.hsa.gov.sg/medical-devices/registration",
        },
        {
          name: "Abridged Evaluation Route",
          nameJa: "簡略審査経路（Abridged Route）",
          applicableClasses: ["Class B", "Class C", "Class D"],
          description:
            "1つ以上の参照規制機関（FDA、EU、Health Canada、TGA、PMDA）からの承認がある場合に利用可能。参照規制機関の審査結果を活用してHSAの審査を簡略化。最も一般的に利用される経路。",
          subtypes: [
            "Abridged with single reference",
            "Abridged with multiple references",
          ],
          avgReviewTime: "クラスB: 3〜6ヶ月 / クラスC: 4〜8ヶ月 / クラスD: 6〜10ヶ月",
          fee: "SGD 5,300〜9,400（クラスにより異なる）",
          url: "https://www.hsa.gov.sg/medical-devices/registration",
        },
        {
          name: "Immediate Route",
          nameJa: "即時登録経路（Immediate Route）",
          applicableClasses: ["Class B"],
          description:
            "クラスB機器で、参照規制機関からの承認があり、かつ特定の条件（市販後安全性実績等）を満たす場合に利用可能。HSAの実質的審査なしに迅速に登録が完了。",
          subtypes: [],
          avgReviewTime: "約10〜15営業日",
          fee: "SGD 1,080",
          url: "https://www.hsa.gov.sg/medical-devices/registration",
        },
      ],
    },

    electronicSubmission: {
      system: "SHARE (Singapore Health Product Access and Regulatory E-System)",
      url: "https://www.hsa.gov.sg/e-services/prism",
      description:
        "HSAのオンライン統合規制情報システム「SHARE」を通じて、医療機器の製品登録申請、Dealer's License申請、有害事象報告、変更通知等の全ての規制手続を電子的に実施。効率的なオンライン審査プロセスを提供。",
      mandatory: true,
    },

    udi: {
      required: true,
      system: "シンガポールUDI制度（段階的導入中）",
      description:
        "HSAはIMDRF UDIガイダンスに基づくUDI制度を段階的に導入中。GS1/HIBCC/ICCBBA の発行機関コードを使用。製品登録時のUDI情報提出と製品ラベルへのUDI表示を段階的に義務化。",
      url: "https://www.hsa.gov.sg/medical-devices/udi",
      timeline:
        "クラスD: 2025年実施済み / クラスC: 2026年 / クラスB: 2027年 / クラスA: 対象外（製品登録不要のため）",
    },

    postMarket: {
      adverseEventReporting: {
        system: "Mandatory Adverse Event Reporting",
        mandatory: true,
        url: "https://www.hsa.gov.sg/medical-devices/safety-reporting",
        description:
          "医療機器のDealer/Registrantは、重篤な有害事象をHSAに報告する義務がある。死亡・重篤な健康被害は10営業日以内、その他のイベントは30営業日以内にSHAREを通じて報告。医療従事者からの自主報告制度も運用。",
      },
      recalls: {
        authority: "HSA",
        description:
          "HSAがField Safety Corrective Action（FSCA）およびリコールを監督。Registrant/Dealerは自主回収とHSAへの報告義務を負う。HSAウェブサイトでリコール・安全情報を公開。",
        url: "https://www.hsa.gov.sg/medical-devices/safety",
      },
      surveillance:
        "Registrant/DealerはPost-market Surveillance計画の策定・実施が義務。HSAによる定期的な市販後安全性評価。Dealer's Licenseの更新時にコンプライアンス確認。HSAは必要に応じて市場措置（販売停止・登録取消）を実施。",
    },

    certificateOfFreeSale: {
      available: true,
      issuingAuthority: "HSA",
      name: "Certificate of Free Sale (CFS)",
      description:
        "シンガポールで登録済みの医療機器について、HSAが自由販売証明書を発行。輸出先国の規制申請に使用。SHAREを通じてオンライン申請が可能。",
      processingTime: "約10〜15営業日",
      url: "https://www.hsa.gov.sg/medical-devices/registration",
    },

    reimbursement: {
      system: "MediShield Life / MediFund / Private Insurance",
      authority: "Ministry of Health (MOH)",
      description:
        "シンガポールの医療費償還は複層的制度：(1) MediShield Life（全国民加入の基本保険）、(2) MediSave（個人医療貯蓄口座）、(3) MediFund（低所得者向け支援）、(4) 民間保険（Integrated Shield Plans等）。医療機器の償還は治療・手術パッケージに包含される形が主流。MOHがStandard Drug List/Medical Device Listを管理。Agency for Care Effectiveness (ACE) がHTA評価を実施。",
      codingSystems: [
        "MOH Medical Device List",
        "Surgical Procedure Codes",
        "TOSP（Table of Surgical Procedures）",
      ],
      url: "https://www.moh.gov.sg/",
    },

    marketingRules: {
      authority: "HSA / Health Promotion Board (HPB)",
      description:
        "医療機器の広告はHealth Products Act 2007およびMedicines (Advertisement and Sale) Actに基づき規制。HSAが広告の適正性を監督。未登録機器の広告は禁止。",
      keyRules: [
        "未登録医療機器の広告禁止",
        "虚偽・誤解を招く効能表示の禁止",
        "HSAによる広告監視と是正措置",
        "Medicines (Advertisement and Sale) Act に基づく広告制限",
        "オンライン販売・広告に関するHSAガイダンス",
      ],
    },

    mdsap: {
      status: "オブザーバー（Observer）",
      description:
        "シンガポール（HSA）はMDSAPのオブザーバーとして参加。正式な参加国（Regulatory Authority）ではないが、MDSAP監査報告書をQMS適合性の参考情報として活用。参照規制機関制度との相乗効果により、国際的な規制負担の軽減を実現。",
    },

    internationalStandards: {
      iso13485: {
        accepted: true,
        notes:
          "HSAの製品登録要件としてISO 13485準拠のQMS適合が求められる。登録申請時にISO 13485認証書の提出が必要。SS ISO 13485としてシンガポール規格化。",
      },
      iso14971: {
        accepted: true,
        notes:
          "Essential Principlesにおいてリスクマネジメントの実施が要求され、ISO 14971への適合が事実上の標準。SS ISO 14971として規格化。",
      },
      iec62304: {
        accepted: true,
        notes:
          "ソフトウェアを含む医療機器およびSaMDの開発にIEC 62304適合が求められる。HSAガイダンスで参照。",
      },
      iec60601: {
        accepted: true,
        notes:
          "医用電気機器の安全規格。SS IEC 60601シリーズとしてシンガポール規格化。安全性試験の基準として適用。",
      },
      others: [
        {
          name: "ISO 10993シリーズ（生物学的安全性評価）",
          notes: "生体接触医療機器の生物学的安全性評価に必須。",
        },
        {
          name: "IEC 62443（サイバーセキュリティ）",
          notes: "Cybersecurity Act 2018との関連で、医療機器のサイバーセキュリティ対策に推奨。HSAガイダンスで参照。",
        },
        {
          name: "IEC 62366（ユーザビリティ）",
          notes: "医療機器のユーザビリティ評価に推奨。HSAの審査で考慮。",
        },
      ],
    },

    recentDevelopments: [
      {
        date: "2026-03",
        title: "SaMD規制フレームワーク更新",
        description:
          "HSAがAI/ML搭載SaMDの登録・審査に関する規制フレームワークを更新。Predetermined Change Control Planの導入とSaMD分類ガイダンスの改訂。",
      },
      {
        date: "2025-11",
        title: "ASEAN AMDD相互認証の進展",
        description:
          "ASEAN医療機器指令（AMDD）に基づくASEAN域内の医療機器相互認証が進展。シンガポールがリーダーとしてパイロットプログラムを推進。",
      },
      {
        date: "2025-08",
        title: "サイバーセキュリティ要件の強化",
        description:
          "HSAがネットワーク接続型医療機器のサイバーセキュリティ要件を強化。SBOM（Software Bill of Materials）の提出推奨とCSA（Cyber Security Agency）との連携。",
      },
      {
        date: "2025-04",
        title: "参照規制機関リストの更新検討",
        description:
          "HSAが参照規制機関（Reference Regulators）のリスト更新を検討。新たな規制機関の追加候補について業界コンサルテーションを実施。",
      },
    ],

    lastUpdated: "2026-04-01",
    verified: null,
   },

  // =========================================================================
  // --- Thailand ---
  // =========================================================================
  {
    code: "THA",
    country: "タイ",
    countryEn: "Thailand",
    region: "ASPAC",
    flag: "🇹🇭",

    legalSystemOverview: {
      type: "立憲君主制（Constitutional monarchy）",
      description:
        "タイの医療機器規制は Thai FDA（Food and Drug Administration, Ministry of Public Health）が一元的に管轄する。Medical Device Act B.E. 2551（2008年）を根拠法とし、2019年の大幅改正で現行のリスクベース分類制度が導入された。ASEAN医療機器指令（AMDD）への整合を積極的に推進しており、CSDT（Common Submission Dossier Template）を採用。東南アジア最大の医療機器市場の一つとして、規制の近代化と国際整合を進めている。",
      keyCharacteristics: [
        "Thai FDA による一元的規制体制",
        "リスクベースの4クラス分類（Class 1〜4）",
        "ASEAN AMDD / CSDT への整合",
        "現地代理人（Local Agent）の配置義務",
        "製造・輸入施設のライセンス制度",
        "タイ語ラベル表示義務",
      ],
    },

    authorities: [
      {
        name: "Thai FDA",
        fullName: "Food and Drug Administration, Ministry of Public Health",
        localName: "สำนักงานคณะกรรมการอาหารและยา",
        role: "医療機器の登録審査・製造輸入ライセンス・市販後監視・リコール管理。Medical Device Control Division が医療機器部門を担当。",
        url: "https://medical.fda.moph.go.th/",
        isPrimary: true,
      },
      {
        name: "NHSO",
        fullName: "National Health Security Office",
        localName: "สำนักงานหลักประกันสุขภาพแห่งชาติ",
        role: "Universal Coverage Scheme（UCS）における医療機器の償還管理",
        url: "https://www.nhso.go.th/",
        isPrimary: false,
      },
    ],

    notifiedBodies: {
      system: "Thai FDA 直接審査",
      description:
        "タイではThai FDAが医療機器の審査を直接実施する。独自のNotified Body制度は存在しない。高リスク機器（Class 3・4）はThai FDAのMedical Device Control Divisionが技術審査を実施。ASEAN域内の相互認証に向けた取り組みが進行中。",
      bodies: [
        {
          name: "Thai FDA Medical Device Control Division（直接審査）",
          url: "https://en.fda.moph.go.th/contact-us-fda/cu-medical-devices-control-division",
        },
      ],
    },

    deviceDefinition: {
      legalDefinition:
        "Medical Device Act B.E. 2551（2008年）に定義。疾病の診断、予防、監視、治療、緩和、障害の補償、解剖学的・生理学的過程の検査・置換・修正・支援を目的とする機器、装置、器具、材料、ソフトウェアその他の物品であって、主たる作用が薬理学的・免疫学的・代謝的手段によらないもの。",
      scope:
        "体外診断用医療機器（IVD）を含む。コンビネーション製品は主たる作用により規制区分を判断。",
      notes:
        "SaMD（Software as a Medical Device）の規制明確化が進行中。Thai FDAがガイダンス策定を検討。",
    },

    primaryLaw: {
      title: "Medical Device Act B.E. 2551 (2008)",
      originalTitle: "พระราชบัญญัติเครื่องมือแพทย์ พ.ศ. 2551",
      enacted: "2008",
      lastAmended: "2019",
      url: "https://en.fda.moph.go.th/cat2-health-products/category/health-products-medical-devices",
      description:
        "タイにおける医療機器規制の根拠法。医療機器の定義、分類、製造・輸入・販売の許可要件、品質管理、広告規制、市販後監視、罰則等を規定。2019年の改正（No. 2, B.E. 2562）でリスクベース4クラス分類への移行を規定し、2021年2月に新分類制度が施行。",
    },

    implementingRegulations: [
      {
        title: "Ministerial Regulation on Medical Device Classification B.E. 2562 (2019)",
        date: "2019",
        url: "https://en.fda.moph.go.th/entrepreneurs-medical-devices/manufacture-import-commercialpurposes/",
        description:
          "医療機器のリスクベース4クラス分類（Class 1〜4）を規定。ASEAN AMDDの分類基準に整合し、従来の3カテゴリ制（General/Notified/Licensed）から移行。2021年2月15日より施行。",
        category: "分類",
      },
      {
        title: "Notification on Application for Medical Device Registration",
        date: "2020-01-01",
        url: "https://en.fda.moph.go.th/cat2-health-products/category/health-products-medical-devices",
        description:
          "医療機器の登録申請手続、必要書類、CSDT（Common Submission Dossier Template）に基づく技術文書要件を規定。",
        category: "登録手続",
      },
      {
        title: "Notification on Quality Management System Requirements",
        date: "2019-07-01",
        url: "https://medical.fda.moph.go.th/media.php?id=482419711569698816&name=MEDICAL+DEVICES+ACT%2C++B.E.+2551+%282008%29.pdf",
        description:
          "医療機器の製造・輸入事業者に対するISO 13485準拠の品質管理システム要件を規定。",
        category: "QMS",
      },
    ],

    relatedLaws: [
      {
        title: "Personal Data Protection Act B.E. 2562 (PDPA) (2019)",
        category: "データ保護",
        enacted: "2019-05-27",
        url: "https://www.pdpc.or.th/en/10455/",
        relevance:
          "医療機器から収集される個人データ（健康データを含む）の処理に適用。2022年6月より完全施行。健康データは機微情報として厳格な同意要件が適用。",
      },
      {
        title: "National Health Act B.E. 2550 (2007)",
        category: "医療",
        enacted: "2007-03-19",
        url: "https://en.nationalhealth.or.th/national-health-act/",
        relevance:
          "国民の健康権と医療サービスへのアクセスを規定。医療機器の安全性・有効性確保の政策的根拠。",
      },
      {
        title: "Consumer Protection Act B.E. 2522 (1979)",
        category: "消費者保護",
        enacted: "1979-04-30",
        url: "https://www.ocpb.go.th/main.php?filename=law_CPA",
        relevance:
          "医療機器の消費者向け広告・表示に関する補完的規制。不当表示の禁止。",
      },
    ],

    classification: {
      system: "4クラス分類（Class 1〜4）",
      basis: "意図する使用目的、人体へのリスクの程度に基づく分類。ASEAN AMDD分類ルールに整合。2019年の法改正（B.E. 2562）により従来の3カテゴリ制からリスクベース4クラス分類に移行し、2021年2月15日に施行。",
      classes: [
        {
          name: "Class 1",
          nameJa: "クラス1",
          riskLevel: "低",
          description:
            "低リスクの医療機器。Listing（届出）のみで市場投入可能。Thai FDAへの届出と施設ライセンスが必要。",
          examples: ["手術用手袋", "聴診器", "弾性包帯", "舌圧子", "ガーゼ"],
          approvalPath: "Listing（届出 / e-Listing）",
        },
        {
          name: "Class 2",
          nameJa: "クラス2",
          riskLevel: "中低",
          description:
            "中低リスクの医療機器。Thai FDAへのNotification（届出）が必要。技術文書の提出が求められる。",
          examples: ["補聴器", "電子血圧計", "超音波診断装置", "歯科用材料", "注射器"],
          approvalPath: "Notification（届出）",
        },
        {
          name: "Class 3",
          nameJa: "クラス3",
          riskLevel: "中高",
          description:
            "中高リスクの医療機器。Thai FDAへのNotification（届出）が必要。CSDTに基づく技術文書と臨床データの提出が求められ、Class 2より詳細な審査が行われる。",
          examples: ["人工呼吸器", "血液透析器", "整形外科用インプラント", "輸液ポンプ", "コンタクトレンズ"],
          approvalPath: "Notification（届出）— Thai FDA技術審査",
        },
        {
          name: "Class 4",
          nameJa: "クラス4",
          riskLevel: "高",
          description:
            "最高リスクの医療機器。Thai FDAによるLicensing（ライセンス）審査。包括的な臨床データと安全性・有効性のエビデンスが必要。最も厳格な審査プロセス。",
          examples: ["心臓ペースメーカー", "人工心臓弁", "薬剤溶出型ステント", "人工関節", "植込み型除細動器"],
          approvalPath: "Licensing（ライセンス）— Thai FDA 包括的審査",
        },
      ],
      rules: [
        "ASEAN AMDD分類ルールに基づく分類基準",
        "Thai FDA Notification に基づく分類ガイダンス",
        "IVDは別途分類（Class 1〜4）",
        "SaMDはその意図する使用目的に応じて分類",
        "不明確な場合はThai FDAに分類照会が可能",
      ],
      totalProductCodes: "Thai FDA独自の製品コード + GMDNを参照",
    },

    conformityAssessment: {
      overview:
        "タイで医療機器を販売するには、クラスに応じてListing・Notification・Licensingのいずれかの手続が必要。Class 1はListing（届出）、Class 2・3はNotification（届出）、Class 4はLicensing（ライセンス）。全クラスで製造・輸入施設のEstablishment License取得が前提条件。外国製造者はタイの現地代理人（Local Agent）の指定が必要。CSDTに基づく申請書類の準備が求められる。",
      routes: [
        {
          name: "Establishment License",
          nameJa: "施設ライセンス（製造・輸入許可）",
          applicableClasses: ["Class 1", "Class 2", "Class 3", "Class 4"],
          description:
            "全ての医療機器の製造・輸入に先立ち、事業所（製造所・輸入業者）のライセンス取得が必要。GMP/ISO 13485準拠の品質管理体制が審査される。",
          subtypes: [
            "Manufacturing License（製造許可）",
            "Import License（輸入許可）",
            "Sales License（販売許可）",
          ],
          avgReviewTime: "約30〜60営業日",
          fee: "要確認（Thai FDA公式サイト参照）",
          url: "https://medical.fda.moph.go.th/",
        },
        {
          name: "Listing",
          nameJa: "届出（Listing / e-Listing）",
          applicableClasses: ["Class 1"],
          description:
            "最低リスクのClass 1機器はThai FDAへのListing（届出）により市場投入が可能。e-Submissionシステムでオンライン届出。基本的な製品情報・ラベル情報の提出。",
          subtypes: [],
          avgReviewTime: "約15営業日",
          fee: "要確認（Thai FDA公式サイト参照）",
          url: "https://en.fda.moph.go.th/entrepreneurs-medical-devices/manufacture-import-commercialpurposes/",
        },
        {
          name: "Notification",
          nameJa: "届出（Notification）",
          applicableClasses: ["Class 2", "Class 3"],
          description:
            "中リスクのClass 2・3機器はThai FDAへのNotification（届出）が必要。CSDTに基づく技術文書の提出が求められ、Class 3ではより詳細な臨床データ・安全性データの審査が行われる。",
          subtypes: [
            "Class 2 Notification（基本的技術文書）",
            "Class 3 Notification（詳細な技術審査を伴う届出）",
          ],
          avgReviewTime: "Class 2: 約30〜45営業日 / Class 3: 約250営業日（約8ヶ月）",
          fee: "要確認（Thai FDA公式サイト参照）",
          url: "https://en.fda.moph.go.th/health-products-vigilance-center/reporting-of-safety-information-1/",
        },
        {
          name: "Licensing",
          nameJa: "ライセンス（Licensing）",
          applicableClasses: ["Class 4"],
          description:
            "最高リスクのClass 4機器はThai FDAによるLicensing審査が必要。CSDTに基づく包括的な技術文書・臨床データ・QMS適合証拠の提出が必要。Expert committeeによる厳格な審査プロセス。",
          subtypes: [
            "Standard Licensing（通常審査）",
            "Expedited Licensing（優先審査 — 革新的機器等）",
          ],
          avgReviewTime: "約300営業日（約10ヶ月）",
          fee: "要確認（Thai FDA公式サイト参照）",
          url: "https://medical.fda.moph.go.th/media.php?id=482419711569698816&name=MEDICAL+DEVICES+ACT%2C++B.E.+2551+%282008%29.pdf",
        },
      ],
    },

    electronicSubmission: {
      system: "PRIVUS",
      url: "https://privus.fda.moph.go.th/Application",
      description:
        "Thai FDAのオンライン申請システム「PRIVUS」を通じて、医療機器の届出・登録申請、施設ライセンス申請、変更届等の規制手続を電子的に実施。段階的にペーパーレス化を推進中。",
      mandatory: true,
    },

    udi: {
      required: false,
      system: "検討段階",
      description:
        "タイではUDI制度の導入を検討中。ASEAN域内でのUDI整合に向けた議論に参加しており、IMDRF UDIガイダンスを参照しつつ段階的導入のロードマップを策定中。現時点では法的義務化には至っていない。",
      url: "https://en.fda.moph.go.th/entrepreneurs-medical-devices",
      timeline: "導入時期未定（ASEAN域内整合を踏まえて検討中）",
    },

    postMarket: {
      adverseEventReporting: {
        system: "Adverse Event Reporting System",
        mandatory: true,
        url: "https://en.fda.moph.go.th/health-products-vigilance-center/health-product-safety-reports-01",
        description:
          "医療機器の製造者・輸入業者・医療施設は、重篤な有害事象をThai FDAに報告する義務がある。死亡・生命の危機に関わる事象は15日以内、その他の重篤事象は30日以内に報告。Thai FDAはFSCA（Field Safety Corrective Action）の監督も実施。",
      },
      recalls: {
        authority: "Thai FDA",
        description:
          "Thai FDAがリコール・是正措置を監督。製造者・輸入業者は自主回収とThai FDAへの報告義務を負う。Thai FDAは必要に応じて強制リコールを命令可能。",
        url: "https://en.fda.moph.go.th/health-products-vigilance-center/health-product-safety-reports-01",
      },
      surveillance:
        "製造者・輸入業者は市販後監視計画の策定・実施が義務。Thai FDAによる定期的な施設査察とコンプライアンス確認。市場サンプリング検査の実施。不適合製品に対する販売停止・登録取消等の行政措置。",
    },

    certificateOfFreeSale: {
      available: true,
      issuingAuthority: "Thai FDA",
      name: "Certificate of Free Sale (CFS)",
      description:
        "タイで登録済みの医療機器について、Thai FDAが自由販売証明書を発行。輸出先国の規制申請に使用。",
      processingTime: "約15〜30営業日",
      url: "https://en.fda.moph.go.th/entrepreneurs-medical-devices",
    },

    reimbursement: {
      system: "Universal Coverage Scheme (UCS) / Social Security Scheme (SSS) / Civil Servant Medical Benefit Scheme (CSMBS)",
      authority: "National Health Security Office (NHSO) / Social Security Office (SSO)",
      description:
        "タイの医療費償還は3つの公的保険制度で構成：(1) UCS（国民皆保険 — 人口の約75%をカバー、NHSOが管理）、(2) SSS（社会保険 — 被雇用者対象、SSOが管理）、(3) CSMBS（公務員医療給付 — 公務員・家族対象）。医療機器の償還はDRG（Diagnosis Related Groups）ベースの包括支払に含まれることが多い。高額医療機器は個別の償還リストで管理。HITAP（Health Intervention and Technology Assessment Program）がHTA評価を実施。",
      codingSystems: [
        "Thai DRG",
        "ICD-10-TM（Thai Modification）",
        "NHSO Medical Device List",
      ],
      url: "https://eng.nhso.go.th/view/1/Description_En/EN-US",
    },

    marketingRules: {
      authority: "Thai FDA",
      description:
        "医療機器の広告はMedical Device Act B.E. 2551および関連告示に基づき規制。Thai FDAの事前承認なしの医療機器広告は原則禁止。虚偽・誇大な効能表示は厳格に取り締まり。",
      keyRules: [
        "医療機器広告のThai FDA事前承認義務",
        "虚偽・誇大な効能表示の禁止",
        "未届出・未登録機器の広告禁止",
        "タイ語での表示・広告義務",
        "オンライン販売に関する規制強化",
      ],
    },

    mdsap: {
      status: "非参加",
      description:
        "タイはMDSAPに正式参加していない。ただしISO 13485認証は製造施設の品質管理体制の証拠として受け入れられる。ASEAN域内でのQMS相互認証に向けた議論に参加中。",
    },

    internationalStandards: {
      iso13485: {
        accepted: true,
        notes:
          "Thai FDAの施設ライセンスおよび製品登録要件としてISO 13485準拠のQMSが求められる。TIS（Thai Industrial Standard）としても採用。",
      },
      iso14971: {
        accepted: true,
        notes:
          "リスクマネジメントの実施が要求され、ISO 14971への適合が推奨。登録申請時のリスク分析文書に反映。",
      },
      iec62304: {
        accepted: true,
        notes:
          "ソフトウェアを含む医療機器の開発にIEC 62304の適用が推奨。Thai FDAガイダンスで参照。",
      },
      iec60601: {
        accepted: true,
        notes:
          "医用電気機器の安全規格。TIS IEC 60601シリーズとしてタイ工業規格化。安全性試験の基準として適用。",
      },
      others: [
        {
          name: "ISO 10993シリーズ（生物学的安全性評価）",
          notes: "生体接触医療機器の生物学的安全性評価に必須。",
        },
        {
          name: "ASEAN AMDD CSDT（Common Submission Dossier Template）",
          notes: "ASEAN域内で統一された申請書類テンプレート。タイの登録申請で採用。",
        },
      ],
    },

    recentDevelopments: [
      {
        date: "2026-01",
        title: "医療機器オンライン販売規制の強化",
        description:
          "Thai FDAがeコマースプラットフォームにおける医療機器販売の規制を強化。未届出・未登録機器のオンライン販売に対する取り締まり強化と、プラットフォーム事業者の責任を明確化。",
      },
      {
        date: "2025-09",
        title: "ASEAN AMDD 相互認証パイロットの進展",
        description:
          "ASEAN医療機器指令に基づく域内相互認証パイロットプログラムが進展。タイがASEAN加盟国間のCSDT整合と審査結果の相互活用に向けた取り組みを推進。",
      },
      {
        date: "2025-06",
        title: "IVD規制の体系整備",
        description:
          "Thai FDAがIVD（体外診断用医療機器）の規制体系を整備。IVD専用の分類ガイダンスと登録要件を明確化し、COVID-19以降の迅速診断キットの品質確保を強化。",
      },
      {
        date: "2025-03",
        title: "電子申請システムPRIVUSの機能拡張",
        description:
          "PRIVUSシステムの機能を拡張し、施設ライセンスの更新・変更届のオンライン処理を追加。ペーパーレス化と審査効率の向上を推進。",
      },
    ],

    lastUpdated: "2026-04-01",
    verified: null,
  },

  // =========================================================================
  // --- Indonesia ---
  // =========================================================================
  {
    code: "IDN",
    country: "インドネシア",
    countryEn: "Indonesia",
    region: "ASPAC",
    flag: "🇮🇩",

    legalSystemOverview: {
      type: "共和制・大統領制（Presidential republic）",
      description:
        "インドネシアの医療機器規制は保健省（Kementerian Kesehatan / Kemenkes）が一元的に管轄する。Dirjen Farmalkes（医薬品・医療機器総局）が登録審査の実務を担当。Permenkes No. 62/2017（保健大臣規則）が流通許可（Izin Edar）の主要規則であり、ASEAN AMDDに準拠した4クラス分類を採用。2025年のPermenkes No. 11/2025でリスクベース許認可のOSSシステム統合とCDAKB（適正流通基準）の義務化が進んだ。なお、BPOM（医薬品食品監督庁）は医薬品・食品・化粧品を管轄し、医療機器はBPOMの管轄外である。",
      keyCharacteristics: [
        "保健省（Kemenkes）による一元的規制体制",
        "リスクベースの4クラス分類（Class A/B/C/D）",
        "ASEAN AMDD / CSDT への整合",
        "ローカルライセンスホルダー（LAR）の配置義務",
        "CDAKB（適正流通基準）認証の義務化",
        "ハラール認証の段階的義務化（2026年〜）",
      ],
    },

    authorities: [
      {
        name: "Kemenkes / Dirjen Farmalkes",
        fullName: "Ministry of Health — Directorate General of Pharmaceutical and Medical Devices",
        localName: "Kementerian Kesehatan — Direktorat Jenderal Kefarmasian dan Alat Kesehatan",
        role: "医療機器の流通許可（Izin Edar）審査・GMP認証・市販後監視・法規策定。医療機器規制の中核機関。",
        url: "https://farmalkes.kemkes.go.id/",
        isPrimary: true,
      },
      {
        name: "BPJPH",
        fullName: "Halal Product Assurance Organizing Agency",
        localName: "Badan Penyelenggara Jaminan Produk Halal",
        role: "医療機器を含むハラール認証の管理。2026年10月よりClass A医療機器のハラール認証義務化。",
        url: "https://bpjph.halal.go.id/",
        isPrimary: false,
      },
      {
        name: "BPJS Kesehatan",
        fullName: "Social Security Administrator for Health",
        localName: "Badan Penyelenggara Jaminan Sosial Kesehatan",
        role: "国民健康保険（JKN）制度における医療機器の償還管理",
        url: "https://bpjs-kesehatan.go.id/",
        isPrimary: false,
      },
    ],

    notifiedBodies: {
      system: "Kemenkes 直接審査",
      description:
        "インドネシアでは保健省（Dirjen Farmalkes）が医療機器の流通許可審査を直接実施する。独自のNotified Body制度は存在しない。参照国（オーストラリア、カナダ、EU、日本、米国）からのFree Sales Certificateが登録申請の前提条件。",
      bodies: [
        {
          name: "Dirjen Farmalkes（直接審査）",
          url: "https://farmalkes.kemkes.go.id/",
        },
      ],
    },

    deviceDefinition: {
      legalDefinition:
        "Permenkes No. 62/2017に基づく定義。疾病の診断、予防、監視、治療、緩和、障害の補償、解剖学的・生理学的過程の検査・置換・修正・支援を目的とする器具、装置、機器、材料、ソフトウェアその他の物品であって、主たる作用が薬理学的・免疫学的・代謝的手段によらないもの。",
      scope:
        "製品は3カテゴリに分類：Alat Kesehatan（医療機器）、Diagnostik in Vitro（IVD）、PKRT（家庭用健康用品）。",
      notes:
        "SaMD（Software as a Medical Device）・AI診断機器の分類・承認要件に関するフレームワークが策定中。",
    },

    primaryLaw: {
      title: "Permenkes No. 62/2017 (Regulation on Marketing Authorization of Medical Devices)",
      originalTitle: "Peraturan Menteri Kesehatan No. 62 Tahun 2017 tentang Izin Edar Alat Kesehatan, Alat Kesehatan Diagnostik In Vitro dan PKRT",
      enacted: "2017-12-29",
      lastAmended: "2025",
      url: "https://farmalkes.kemkes.go.id/en/unduh/permenkes-62-2017/",
      description:
        "医療機器・IVD・家庭用健康用品の流通許可（Izin Edar）に関する主要規則。旧Permenkes No. 1190/2010を廃止。分類、登録手続、必要書類、品質管理要件等を規定。2025年のPermenkes No. 11/2025でOSSシステム統合とCDAKB義務化が追加。",
    },

    implementingRegulations: [
      {
        title: "Permenkes No. 11/2025 (Risk-Based Licensing Integration)",
        date: "2025",
        url: "https://peraturan.go.id/id/permenkes-no-11-tahun-2025",
        description:
          "リスクベース許認可をOSS（Online Single Submission）システムに統合。CDAKB（医療機器適正流通基準）認証をNIB（事業者番号）の運用条件として義務化。",
        category: "許認可",
      },
      {
        title: "PP No. 42/2024 (Halal Certification for Products)",
        date: "2024",
        url: "https://halalmui.org/en/why-are-medical-devices-required-to-have-bpjph-halal-certification-starting-in-2026/",
        description:
          "インドネシア国内流通製品のハラール認証義務。医療機器にも段階的に適用（Class A: 2026年10月、Class B: 2029年、Class C: 2034年、Class D: 2039年）。",
        category: "ハラール認証",
      },
      {
        title: "ASEAN CSDT (Common Submission Dossier Template)",
        date: "2018",
        url: "https://farmalkes.kemkes.go.id/en/unduh/petunjuk-penggunaan-aplikasi-e-regalkes/",
        description:
          "ASEAN域内で統一された申請書類テンプレート。REGALKESポータルに統合済み。全クラスの登録申請で使用。",
        category: "申請様式",
      },
    ],

    relatedLaws: [
      {
        title: "UU No. 27/2022 (Personal Data Protection Law / PDP Law)",
        category: "データ保護",
        enacted: "2022-10-17",
        url: "https://www.dlapiperdataprotection.com/index.html?t=law&c=ID",
        relevance:
          "インドネシア初の包括的個人データ保護法。健康データは機微情報に分類。2024年10月より完全施行。医療機器がデータ収集する場合に適用。",
      },
      {
        title: "UU No. 17/2023 (Omnibus Health Law)",
        category: "医療",
        enacted: "2023-08-08",
        url: "https://peraturan.bpk.go.id/Details/258028/uu-no-17-tahun-2023",
        relevance:
          "2023年制定のオムニバス保健法。旧UU No. 36/2009を廃止・統合。医療機器を含む保健サービス全般の基盤を規定。",
      },
      {
        title: "UU No. 8/1999 (Consumer Protection Law)",
        category: "消費者保護",
        enacted: "1999",
        url: "https://iclg.com/practice-areas/digital-health-laws-and-regulations/indonesia",
        relevance:
          "消費者の権利保護。医療機器の安全性・品質に関する一般規定。",
      },
    ],

    classification: {
      system: "4クラス分類（Class A/B/C/D）",
      basis: "意図する使用目的、人体へのリスクの程度に基づく分類。ASEAN AMDD分類ルールに準拠。SIKLARA（分類支援ツール）がREGALKES上で利用可能。",
      classes: [
        {
          name: "Class A",
          nameJa: "クラスA",
          riskLevel: "低",
          description:
            "低リスクの医療機器。人体への害が最小。流通許可（Izin Edar）の取得が必要だが、審査は簡略化。",
          examples: ["絆創膏", "舌圧子", "検査用手袋", "車椅子", "ガーゼ"],
          approvalPath: "流通許可（Izin Edar）— 簡略審査",
        },
        {
          name: "Class B",
          nameJa: "クラスB",
          riskLevel: "中低",
          description:
            "中低リスクの医療機器。中程度のリスクを伴う。技術文書の審査が行われる。",
          examples: ["血圧計", "体温計", "超音波診断装置", "歯科用材料", "注射器"],
          approvalPath: "流通許可（Izin Edar）— 技術文書審査",
        },
        {
          name: "Class C",
          nameJa: "クラスC",
          riskLevel: "中高",
          description:
            "中高リスクの医療機器。誤作動時に重大なリスク。詳細な技術審査と臨床データの提出が求められる。",
          examples: ["手術器具", "カテーテル", "人工呼吸器", "透析装置", "一部のIVD機器"],
          approvalPath: "流通許可（Izin Edar）— 詳細技術審査",
        },
        {
          name: "Class D",
          nameJa: "クラスD",
          riskLevel: "高",
          description:
            "最高リスクの医療機器。故障時に生命への重大リスク。最も厳格な審査。包括的な臨床データと安全性エビデンスが必要。",
          examples: ["心臓ペースメーカー", "人工関節", "人工心臓弁", "脊椎インプラント", "植込み型除細動器"],
          approvalPath: "流通許可（Izin Edar）— 包括的審査",
        },
      ],
      rules: [
        "ASEAN AMDD分類ルールに準拠",
        "SIKLARA（分類支援ツール）による分類判定",
        "IVDは別途分類（Class A〜D）",
        "PKRT（家庭用健康用品）は医療機器とは別カテゴリ",
        "AMDD整合：31規格中26規格を整合化済み",
      ],
      totalProductCodes: "Kemenkes独自の製品コード + GMDNを参照",
    },

    conformityAssessment: {
      overview:
        "インドネシアで医療機器を販売するには、保健省からの流通許可（Izin Edar / NIE番号）の取得が必要。全クラスで登録が義務。外国製造者はローカルライセンスホルダー（LAR）の指定が必須。参照国（AU/CA/EU/JP/US）からのFSC（Free Sales Certificate）が登録の前提条件。CDAKB（適正流通基準）認証が流通業者に義務化。ASEAN CSDTに基づく申請書類の準備が求められる。NIE（流通許可番号）の有効期間は5年間で、期限前に更新申請が必要。",
      routes: [
        {
          name: "Izin Edar — Class A",
          nameJa: "流通許可 — クラスA（簡略審査）",
          applicableClasses: ["Class A"],
          description:
            "低リスク機器の流通許可。簡略化された審査プロセス。基本的な製品情報・ラベル情報・ISO 13485証明書の提出。",
          subtypes: [],
          avgReviewTime: "公式21営業日（Permenkes 11/2025基準、実務上1.5〜2ヶ月）",
          fee: "IDR 1,500,000（約125 USD）",
          url: "https://asiaactual.com/indonesia/medical-device-registration/",
        },
        {
          name: "Izin Edar — Class B",
          nameJa: "流通許可 — クラスB（技術文書審査）",
          applicableClasses: ["Class B"],
          description:
            "中低リスク機器の流通許可。CSDT形式の技術文書・QMS証明書・FSCの提出が必要。",
          subtypes: [],
          avgReviewTime: "公式36営業日（Permenkes 11/2025基準、実務上3〜6ヶ月）",
          fee: "IDR 3,000,000（約230 USD）",
          url: "https://insightof.id/indonesia-medical-device-registration-guide-2025/",
        },
        {
          name: "Izin Edar — Class C",
          nameJa: "流通許可 — クラスC（詳細技術審査）",
          applicableClasses: ["Class C"],
          description:
            "中高リスク機器の流通許可。包括的な技術文書・臨床データ・安全性エビデンスの審査。",
          subtypes: [],
          avgReviewTime: "公式36営業日（Permenkes 11/2025基準、実務上6〜12ヶ月）",
          fee: "IDR 3,000,000（約230 USD）",
          url: "https://www.elendilabs.com/en/articles/idn-medical-device-registration-timelines-in-2025",
        },
        {
          name: "Izin Edar — Class D",
          nameJa: "流通許可 — クラスD（包括的審査）",
          applicableClasses: ["Class D"],
          description:
            "最高リスク機器の流通許可。最も厳格な審査プロセス。Expert committeeによる包括的な臨床・安全性データの評価。",
          subtypes: [],
          avgReviewTime: "公式55営業日（Permenkes 11/2025基準、実務上5〜7ヶ月）",
          fee: "IDR 5,000,000（約340 USD）",
          url: "https://farmalkes.kemkes.go.id/en/unduh/permenkes-62-2017/",
        },
      ],
    },

    electronicSubmission: {
      system: "REGALKES",
      url: "https://regalkes.kemkes.go.id/informasi_alkes/Indonesia%20Guideline%20for%20Evaluation%20of%20Medical%20Device%20and%20IVD%202020.pdf",
      description:
        "保健省の医療機器・PKRT オンライン登録ポータル「REGALKES」を通じて、流通許可の申請・更新・変更を電子的に実施。SIKLARA（分類支援ツール）を内蔵。OSS（Online Single Submission）システムとも連携し、NIB（事業者番号）の取得・CDAKB認証管理にも対応。E-Watch（有害事象報告）・E-Report（流通記録報告）機能も提供。",
      mandatory: true,
    },

    udi: {
      required: false,
      system: "未導入",
      description:
        "インドネシアは現時点で独自のUDI制度を正式に導入していない。ASEAN域内でのUDI整合化に向けた議論に参加しているが、具体的な実施タイムラインは公表されていない。製品追跡は登録番号（NIE）とロット番号・製造番号により管理。",
      url: "https://asiaactual.com/indonesia/medical-device-registration/",
      timeline: "導入時期未定（ASEAN域内整合を踏まえて検討中）",
    },

    postMarket: {
      adverseEventReporting: {
        system: "E-Watch (Adverse Event Reporting)",
        mandatory: true,
        url: "https://e-watch-alkes.kemkes.go.id/",
        description:
          "医療機器の製造者・輸入業者・医療施設は、有害事象を保健省に報告する義務がある。公衆衛生への重大な脅威は48時間以内、死亡・重篤な健康悪化は10日以内、その他の重篤事象は30日以内に報告。ASEAN AMDD Annex 5（Post Market Vigilanceガイドライン）に準拠。",
      },
      recalls: {
        authority: "Kemenkes（保健省）",
        description:
          "保健省がFSCA（Field Safety Corrective Action）およびリコールを監督。製造者・輸入業者は自主回収と保健省への報告義務を負う。E-Watchシステムを通じて報告。",
        url: "https://farmalkes.kemkes.go.id/en/unduh/tata-cara-pelaporan-kejadian-tidak-diinginkan-ktd-alat-kesehatan/",
      },
      surveillance:
        "流通許可保有者はKTD（不具合事象）の報告義務を負う。E-Reportシステムによる流通記録・トレーサビリティの維持管理が義務。保健省による定期的な施設査察とコンプライアンス確認。不適合製品に対する流通許可の停止・取消等の行政措置。",
    },

    certificateOfFreeSale: {
      available: true,
      issuingAuthority: "Kemenkes（保健省）",
      name: "Surat Keterangan Ekspor (SKE) / Certificate of Free Sale",
      description:
        "インドネシアで流通許可を取得済みの医療機器について、保健省が輸出証明書を発行。輸出先国の規制申請に使用。",
      processingTime: "約15〜30営業日",
      url: "https://esuka.kemkes.go.id/",
    },

    reimbursement: {
      system: "JKN (Jaminan Kesehatan Nasional) — National Health Insurance",
      authority: "BPJS Kesehatan",
      description:
        "インドネシアの医療費償還はJKN（国民健康保障）制度が中心で、人口の約84%以上をカバー。BPJS Kesehatanが運営。INA-CBG（Indonesia Case Based Groups）による包括払い方式を採用。医療機器の償還は標準的な診断機器・モニタリング機器・消耗品が中心で、高度・先進的な医療機器は全額カバーされない場合がある。BPJS提携の公立病院が医療機器収益の約40%を占める。",
      codingSystems: [
        "INA-CBG（Indonesia Case Based Groups）",
        "ICD-10",
        "BPJS Medical Device List",
      ],
      url: "https://www.badankebijakan.kemkes.go.id/en/kemenkes-dan-bpjs-kesehatan-gelar-sosialisasi-penatalaksanaan-klaim-ina-cbg/",
    },

    marketingRules: {
      authority: "Kemenkes（保健省）",
      description:
        "医療機器の広告はPermenkes No. 62/2017および関連規則に基づき規制。流通許可（Izin Edar）未取得機器の広告・販売は禁止。インドネシア語でのラベル表示が義務。",
      keyRules: [
        "流通許可（Izin Edar）未取得機器の広告・販売禁止",
        "虚偽・誇大な効能表示の禁止",
        "インドネシア語でのラベル表示義務",
        "オンライン販売に関する規制",
        "CDAKB認証なしの流通禁止",
      ],
    },

    mdsap: {
      status: "非参加",
      description:
        "インドネシアはMDSAPに正式参加していない。ただしISO 13485認証は製造施設の品質管理体制の証拠として登録要件に含まれる。",
    },

    internationalStandards: {
      iso13485: {
        accepted: true,
        notes:
          "流通許可の登録要件としてISO 13485認証の提出が必須。全クラスで求められる。",
      },
      iso14971: {
        accepted: true,
        notes:
          "リスクマネジメントの実施が要求され、ISO 14971に基づくリスク分析・管理報告書の提出が登録書類に含まれる。",
      },
      iec62304: {
        accepted: true,
        notes:
          "ソフトウェアを含む医療機器の開発に参照。デジタルヘルス規制の整備に伴い重要性が増加。",
      },
      iec60601: {
        accepted: true,
        notes:
          "医用電気機器の安全規格として受入済み。安全性試験の基準として適用。",
      },
      others: [
        {
          name: "ISO 10993シリーズ（生物学的安全性評価）",
          notes: "生体接触医療機器の生物学的安全性評価に必須。",
        },
        {
          name: "ISO 15223-1（医療機器表示記号）",
          notes: "医療機器のラベル表示記号として受入済み。",
        },
        {
          name: "ASEAN AMDD CSDT（Common Submission Dossier Template）",
          notes: "ASEAN域内で統一された申請書類テンプレート。REGALKESに統合済み。",
        },
      ],
    },

    recentDevelopments: [
      {
        date: "2026-10",
        title: "Class A医療機器のハラール認証義務化",
        description:
          "PP No. 42/2024に基づき、Class A医療機器にBPJPHハラール認証が義務化。動物由来成分を含まない製品は対象外。以降Class B（2029年）、Class C（2034年）、Class D（2039年）に段階的拡大。",
      },
      {
        date: "2025-12",
        title: "許認可システムの一時凍結",
        description:
          "Kemenkesの許認可システムが2025年12月15日〜2026年1月9日に完全停止。システム移行に伴う措置で、期間中の申請処理が影響を受けた。",
      },
      {
        date: "2025-01",
        title: "Permenkes No. 11/2025 — CDAKB・OSSシステム統合",
        description:
          "CDAKB（適正流通基準）認証をOSS（Online Single Submission）に統合。CDAKB未取得の場合NIB（事業者番号）が運用不可に。リスクベース許認可の近代化。",
      },
      {
        date: "2025-01",
        title: "デジタルヘルス規制の検討",
        description:
          "SaMD（Software as a Medical Device）、AI診断、ウェアラブル機器の分類・承認要件に関するフレームワーク策定を開始。サイバーセキュリティ基準も検討中。",
      },
    ],

    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- Vietnam ---
  // =========================================================================
  {
    code: "VNM",
    country: "ベトナム",
    countryEn: "Vietnam",
    region: "ASPAC",
    flag: "🇻🇳",

    legalSystemOverview: {
      type: "社会主義共和制（Socialist republic）",
      description:
        "ベトナムの医療機器規制は保健省（Ministry of Health / Bộ Y tế）が管轄し、その下部機関であるIMDA（Infrastructure and Medical Device Administration / Cục Hạ tầng và Thiết bị Y tế）が登録審査の実務を担当する。IMDAは2025年1月に旧DMEC（Department of Medical Equipment and Construction）から改組された。Decree 98/2021/ND-CPが医療機器管理の基本政令であり、ASEAN AMDDに準拠した4クラス分類（A/B/C/D）を採用。Class A/Bは地方保健局への届出制、Class C/Dは IMDA による登録審査制。2024年1月以降、Class C/D機器のドシエはASEAN CSDT形式での提出が義務化されている。",
      keyCharacteristics: [
        "保健省（MOH）/ IMDA（旧DMEC）による規制体制",
        "リスクベースの4クラス分類（Class A/B/C/D）",
        "Class A/Bは地方保健局への届出、Class C/DはIMDAへの登録",
        "ASEAN AMDD / CSDT への整合（2024年1月よりCSDT義務化）",
        "国内代理人（In-country Representative）の配置義務",
        "流通番号（Circulation Number）は無期限有効",
      ],
    },

    authorities: [
      {
        name: "IMDA (旧DMEC)",
        fullName: "Infrastructure and Medical Device Administration, Ministry of Health",
        localName: "Cục Hạ tầng và Thiết bị Y tế, Bộ Y tế",
        role: "Class C/D機器の登録審査・輸入許可・FSC発行・市販後検査。2025年1月に旧DMEC（Vụ Trang thiết bị và Công trình y tế）から改組。",
        url: "https://imda.moh.gov.vn",
        isPrimary: true,
      },
      {
        name: "MOH",
        fullName: "Ministry of Health",
        localName: "Bộ Y tế",
        role: "医療機器規制の最上位機関。政令・通達の制定、政策立案。",
        url: "https://moh.gov.vn",
        isPrimary: false,
      },
      {
        name: "地方保健局（DoH）",
        fullName: "Provincial Department of Health",
        localName: "Sở Y tế",
        role: "Class A/B機器の届出（Declaration / Notification）受理を担当。",
        url: null,
        isPrimary: false,
      },
    ],

    notifiedBodies: {
      system: "IMDA直接審査 / 地方保健局届出制",
      description:
        "ベトナムでは独自のNotified Body制度は存在しない。Class C/D機器はIMDA（旧DMEC）が直接登録審査を実施。Class A/B機器は地方保健局（Provincial Department of Health）への届出により市場投入が可能。",
      bodies: [
        {
          name: "IMDA（Class C/D 直接審査）",
          url: "https://imda.moh.gov.vn",
        },
      ],
    },

    deviceDefinition: {
      legalDefinition:
        "Decree 98/2021/ND-CPに基づく定義。疾病の診断、予防、監視、治療、緩和、障害の補償、解剖学的・生理学的過程の検査・置換・修正・支援を目的とする器具、装置、機器、材料、ソフトウェアその他の物品であって、主たる作用が薬理学的・免疫学的・代謝的手段によらないもの。",
      scope:
        "体外診断用医療機器（IVD）を含む。GHTF/IMDRFの定義に整合。",
      notes:
        "SaMD（Software as a Medical Device）はDecree 98/2021の医療機器定義に含まれるが、SaMD固有の分類ルールは明示的に規定されておらず、一般的な分類ルールに従って分類される。",
    },

    primaryLaw: {
      title: "Decree 98/2021/ND-CP (Management of Medical Devices)",
      originalTitle: "Nghị định 98/2021/NĐ-CP về quản lý trang thiết bị y tế",
      enacted: "2022-01-01",
      lastAmended: "2025-01-01",
      url: "https://english.luatvietnam.vn/decree-no-98-2021-nd-cp-dated-november-08-2021-of-the-government-on-the-management-of-medical-devices-212320-doc1.html",
      description:
        "医療機器管理に関する基本政令。2021年11月8日公布、2022年1月1日施行。旧Decree 36/2016、Decree 169/2018、Decree 03/2020を置換。分類、登録手続、流通許可、市販後監視等を包括的に規定。Decree 07/2023（第1次改正）、Decree 04/2025（第2次改正）で順次改正。",
    },

    implementingRegulations: [
      {
        title: "Decree 07/2023/ND-CP (First Amendment to Decree 98)",
        date: "2023-03-03",
        url: "https://english.luatvietnam.vn/decree-no-07-2023-nd-cp-amending-and-supplementing-a-number-of-articles-of-the-governments-decree-no-98-2021-244958-doc1.html",
        description:
          "Decree 98の第1次改正。既存輸入許可の延長措置等を規定。",
        category: "改正政令",
      },
      {
        title: "Decree 04/2025/ND-CP (Second Amendment to Decree 98)",
        date: "2025-01-01",
        url: "https://english.luatvietnam.vn/y-te/decree-04-2025-nd-cp-management-of-medical-equipment-385264-d1.html",
        description:
          "Decree 98の第2次改正。輸入手続き・経過措置の更新。輸入許可を2025年6月30日まで延長。2025年7月1日以降はDecree 98の完全施行に移行。",
        category: "改正政令",
      },
      {
        title: "Circular 05/2022/TT-BYT (Medical Device Classification)",
        date: "2022-08-01",
        url: "https://asiaactual.com/vietnam/medical-device-classification/",
        description:
          "医療機器分類に関する通達。旧Circular 39/2016を置換。GHTF/ASEAN AMDDに基づくClass A/B/C/D分類の詳細基準を規定。",
        category: "分類",
      },
      {
        title: "Circular 44/2025 (Administrative Procedures Update)",
        date: "2025-11-22",
        url: "https://andamanmed.com/vietnam-moh-releases-new-circular-on-medical-device-management-and-regulatory-documentation-requirements/",
        description:
          "医療機器管理に関する行政手続き・文書様式の全面更新。IMDAへの権限委譲の明確化。8つの附属書による標準テンプレート導入。",
        category: "行政手続",
      },
    ],

    relatedLaws: [
      {
        title: "Decree 13/2023/ND-CP (Personal Data Protection)",
        category: "データ保護",
        enacted: "2023-07-01",
        url: "https://kpmg.com/vn/en/home/insights/2023/04/legal-alert-on-decree-13.html",
        relevance:
          "ベトナム初の包括的個人データ保護法令。健康情報は「敏感個人データ」に分類。データ侵害発生から72時間以内にサイバーセキュリティ部門へ通知義務。PDPIA（個人データ処理影響評価）の策定・保管が必要。",
      },
      {
        title: "Law 116/2025/QH15 (Cybersecurity Law 2025)",
        category: "サイバーセキュリティ",
        enacted: "2026-07-01",
        url: "https://www.allenandgledhill.com/perspectives/articles/32082/vnkh-vietnam-s-new-cybersecurity-law-to-come-into-effect-1-july-2026",
        relevance:
          "2025年12月10日国会通過、2026年7月1日施行予定の新サイバーセキュリティ法。旧Law 24/2018/QH14（サイバーセキュリティ法）およびLaw 86/2015/QH13（ネットワーク情報セキュリティ法）の両方を統合・置換。データローカライゼーション要件の更新を含み、医療機器（SaMD、IoT機器）への影響が注目される。",
      },
      {
        title: "Decree 96/2023/ND-CP (Implementation of Law on Medical Examination and Treatment)",
        category: "医療診療法実施",
        enacted: "2023",
        url: "https://asiaactual.com/vietnam/post-market-surveillance/",
        relevance:
          "医療診療法（Law on Medical Examination and Treatment）の実施細則。一部の条項でDecree 98/2021を改正・補充する形で医療機器の使用・管理に関連する規定を含む。",
      },
    ],

    classification: {
      system: "4クラス分類（Class A/B/C/D）",
      basis: "意図する使用目的、人体へのリスクの程度、侵襲性、人体接触期間に基づく分類。GHTF/ASEAN AMDDの分類ルールに準拠。Circular 05/2022/TT-BYTに規定。",
      classes: [
        {
          name: "Class A",
          nameJa: "クラスA",
          riskLevel: "低",
          description:
            "低リスクの医療機器。人体への潜在的リスクが最小。地方保健局への届出（Declaration）により市場投入可能。",
          examples: ["包帯", "検査用手袋", "聴診器", "車椅子", "舌圧子"],
          approvalPath: "届出（Declaration）— 地方保健局（DoH）",
        },
        {
          name: "Class B",
          nameJa: "クラスB",
          riskLevel: "中低",
          description:
            "中低リスクの医療機器。限定的な侵襲性または一時的な人体接触。地方保健局への届出が必要。",
          examples: ["皮下注射針", "輸液セット", "吸引器", "超音波診断装置", "血圧計"],
          approvalPath: "届出（Declaration）— 地方保健局（DoH）",
        },
        {
          name: "Class C",
          nameJa: "クラスC",
          riskLevel: "中高",
          description:
            "中高リスクの医療機器。生命維持・支持機能を持つ、長時間の侵襲性、故障時のリスクが顕著。IMDAへの登録申請が必要。CSDT形式のドシエ提出が義務。",
          examples: ["人工呼吸器", "骨固定システム", "透析装置", "一部の画像診断装置", "コンタクトレンズ"],
          approvalPath: "登録（Marketing Authorization）— IMDA",
        },
        {
          name: "Class D",
          nameJa: "クラスD",
          riskLevel: "高",
          description:
            "最高リスクの医療機器。体内留置（インプラント）、中枢神経系・心臓に直接作用。IMDAによる最も厳格な審査。",
          examples: ["心臓弁", "心臓ペースメーカー", "人工関節", "脊椎インプラント", "植込み型除細動器"],
          approvalPath: "登録（Marketing Authorization）— IMDA",
        },
      ],
      rules: [
        "GHTF/ASEAN AMDDの分類ルールに準拠",
        "Circular 05/2022/TT-BYTに詳細基準を規定",
        "IVDは別途分類（Class A〜D）",
        "SaMDは一般的な分類ルールに従い分類（固有ルールは未整備）",
        "不明確な場合はIMDA/MOHに照会可能",
      ],
      totalProductCodes: "GMDNを参照",
    },

    conformityAssessment: {
      overview:
        "ベトナムで医療機器を販売するには、クラスに応じた手続が必要。Class A/Bは地方保健局（DoH）への届出（Declaration）、Class C/DはIMDA（旧DMEC）への登録（Marketing Authorization）が必要。外国製造者は国内代理人（In-country Representative）の配置が必須。ISO 13485証明書の提出が全クラスで要求される。Class C/Dは2024年1月以降ASEAN CSDT形式でのドシエ提出が義務化。流通番号（Circulation Number）は無期限有効。",
      routes: [
        {
          name: "Declaration (Class A/B)",
          nameJa: "届出（Declaration / Notification）",
          applicableClasses: ["Class A", "Class B"],
          description:
            "低〜中低リスク機器は地方保健局（Provincial Department of Health）への届出により市場投入が可能。適用基準への適合宣言（Declaration of Applied Standards）と基本的な技術情報の提出。",
          subtypes: [
            "Class A Declaration（簡易届出）",
            "Class B Declaration（技術文書付き届出）",
          ],
          avgReviewTime: "Class A/B: 7〜10営業日",
          fee: "Class A: VND 1,000,000（約43 USD）/ Class B: VND 3,000,000（約130 USD）※2025年7月〜2026年12月は50%割引",
          url: "https://cisema.com/en/vietnam-medical-device-registration-guide/",
        },
        {
          name: "Marketing Authorization (Class C/D)",
          nameJa: "登録（Marketing Authorization）",
          applicableClasses: ["Class C", "Class D"],
          description:
            "中高〜高リスク機器はIMDAによる登録審査。ASEAN CSDT形式の包括的ドシエ（技術文書・臨床データ・QMS適合証拠）の提出が必要。",
          subtypes: [
            "Standard Registration（通常登録）",
            "Expedited Registration（緊急時等の優先審査）",
          ],
          avgReviewTime: "法定30営業日（実務上60日〜6ヶ月）",
          fee: "VND 6,000,000（約260 USD）※2025年7月〜2026年12月は50%割引",
          url: "https://asiaactual.com/vietnam/medical-device-registration/",
        },
      ],
    },

    electronicSubmission: {
      system: "IMDA Medical Device Registration Portal（旧DMEC Portal）",
      url: "https://andamanmed.com/vietnam-notice-of-domain-change-for-the-online-public-service-system-for-medical-device-management/",
      description:
        "IMDAのオンライン登録ポータルを通じて、Class A/Bの届出、Class C/Dの登録申請、輸入許可申請を電子的に実施。2025年のDMEC→IMDA改組に伴い旧URL（dmec.moh.gov.vn）からimda.moh.gov.vnへ移行済み。全ての医療機器登録はオンラインポータル経由での提出が義務。",
      mandatory: true,
    },

    udi: {
      required: false,
      system: "未導入",
      description:
        "ベトナムは現時点で独自のUDI制度を導入していない。ASEAN域内でのUDI整合化の議論に参加しているが、具体的な実施スケジュールは公表されていない。製品追跡は流通番号（Circulation Number）とロット番号・製造番号で管理。",
      url: "https://asiaactual.com/vietnam/medical-device-registration/",
      timeline: "導入時期未定（ASEAN域内整合を踏まえて検討中）",
    },

    postMarket: {
      adverseEventReporting: {
        system: "Adverse Event Reporting (Decree 98/2021, Decree 96/2023)",
        mandatory: true,
        url: "https://asiaactual.com/vietnam/post-market-surveillance/",
        description:
          "医療機器の製造者・輸入業者・医療施設は有害事象をMOH/IMDAに報告する義務がある。死亡・重篤な健康悪化のリスクがある事象は即時報告し、流通を即時停止。死亡・重篤な健康悪化・重大な公衆衛生上の脅威は30日以内に詳細報告。原因調査・是正措置の実施・最終報告書の提出が義務。",
      },
      recalls: {
        authority: "MOH / IMDA",
        description:
          "MOH/IMDAがFSCA（Field Safety Corrective Action）およびリコールを監督。不良バッチの是正計画策定・リコール実施・完了報告の提出が義務。",
        url: "https://andamanmed.com/regulatory-services/post-market-surveillance-medical-devices/vietnam/",
      },
      surveillance:
        "製造者・輸入業者はPMS（市販後監視）プログラムの構築・運用が義務。性能データの継続収集、ユーザーフィードバック調査、不適合品の是正予防措置。流通ドシエ・ロット別証明書・有害事象ログ・苦情記録・是正措置記録・廃棄記録の保管が必要。",
    },

    certificateOfFreeSale: {
      available: true,
      issuingAuthority: "IMDA（旧DMEC）",
      name: "Certificate of Free Sale (CFS)",
      description:
        "ベトナムで登録済みの医療機器について、IMDAが自由販売証明書を発行。輸出先国の規制申請に使用。",
      processingTime: "約15〜30営業日",
      url: "https://medgate.vn/en/certificate-of-free-sale-cfs-for-class-c-and-d-medical-devices/",
    },

    reimbursement: {
      system: "SHI (Social Health Insurance) — Bảo Hiểm Xã Hội Việt Nam (BHXH)",
      authority: "BHXH (Vietnam Social Security)",
      description:
        "ベトナムは社会健康保険（SHI）による国民皆保険を推進しており、人口の約90%をカバー。医療消耗品・人工代替品・インプラント・専用機器のうち安全性・有効性・需要の基準を満たすものが償還対象（Circular 04/2017/TT-BYT）。国産医療機器・消耗品が優先的に償還対象となる傾向。全ての医療機器が対象ではなく、リスト外は民間保険または患者自己負担。",
      codingSystems: [
        "ICD-10",
        "MOH Medical Device Reimbursement List",
        "BHXH Procedure Codes",
      ],
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8050760/",
    },

    marketingRules: {
      authority: "MOH / IMDA",
      description:
        "医療機器の広告はDecree 98/2021および関連通達に基づき規制。未登録・未届出機器の広告・販売は禁止。",
      keyRules: [
        "未登録・未届出機器の広告・販売禁止",
        "虚偽・誇大な効能表示の禁止",
        "ベトナム語でのラベル表示義務",
        "輸入品のベトナム語ラベル貼付義務",
        "オンライン販売に関する規制",
      ],
    },

    mdsap: {
      status: "非参加",
      description:
        "ベトナムはMDSAPに正式参加していない。ただしISO 13485認証は製造施設の品質管理体制の証拠として全クラスの登録要件に含まれる。",
    },

    internationalStandards: {
      iso13485: {
        accepted: true,
        notes:
          "全クラスの登録ドシエにおいてISO 13485証明書の提出が必須。製造施設の品質管理体制の前提条件。",
      },
      iso14971: {
        accepted: true,
        notes:
          "リスクマネジメントの実施が要求され、ISO 14971に基づくハザード特定・リスク軽減の記載がドシエに必要。",
      },
      iec62304: {
        accepted: true,
        notes:
          "医療機器ソフトウェアのライフサイクル規格として参照。SaMDの登録申請時に適用。",
      },
      iec60601: {
        accepted: true,
        notes:
          "電気医療機器の安全規格として受入・認知。安全性試験の基準として適用。",
      },
      others: [
        {
          name: "ISO 10993シリーズ（生物学的安全性評価）",
          notes: "生体接触医療機器の生物学的安全性評価に必須。",
        },
        {
          name: "ASEAN AMDD CSDT（Common Submission Dossier Template）",
          notes: "ASEAN域内統一申請書類テンプレート。2024年1月よりClass C/Dで義務化。",
        },
      ],
    },

    recentDevelopments: [
      {
        date: "2026-07",
        title: "新サイバーセキュリティ法の施行予定",
        description:
          "現行Law 24/2018を置換する新サイバーセキュリティ法が2026年7月1日に施行予定。医療機器（特にSaMD、IoT機器）への影響が注目される。データローカライゼーション要件の更新。",
      },
      {
        date: "2025-11",
        title: "Circular 44 — 行政手続き・文書様式の全面更新",
        description:
          "医療機器管理に関する行政手続きと文書様式を全面更新。IMDAへの権限委譲を明確化し、8つの附属書による標準テンプレートを導入。",
      },
      {
        date: "2025-07",
        title: "輸入許可経過措置の終了・手数料割引開始",
        description:
          "2018〜2021年に発行された輸入許可の経過措置が2025年7月1日で終了し、Decree 98の完全施行へ移行。同時にMoH Notification No. 645に基づく全クラス対象の登録手数料50%割引を2026年12月31日まで実施。",
      },
      {
        date: "2025-01",
        title: "DMEC → IMDA 改組",
        description:
          "医療機器規制機関がDMEC（Department of Medical Equipment and Construction）からIMDA（Infrastructure and Medical Device Administration）へ改名・再編。医療インフラ管理も統合。",
      },
    ],

    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- Malaysia ---
  // =========================================================================
  {
    code: "MYS",
    country: "マレーシア",
    countryEn: "Malaysia",
    region: "ASPAC",
    flag: "🇲🇾",

    legalSystemOverview: {
      type: "立憲君主制・議院内閣制（Federal constitutional monarchy）",
      description:
        "マレーシアの医療機器規制はMDA（Medical Device Authority / Pihak Berkuasa Peranti Perubatan Malaysia）が一元的に管轄する。Medical Device Act 2012（Act 737）を根拠法とし、ASEAN AMDDに準拠した4クラス分類（A/B/C/D）を採用。MDA認定のCAB（Conformity Assessment Body）による第三者審査制度が特徴。MeDC@St（Medical Device Centralized System）によるオンライン申請を実施。ASEAN域内で最も規制整備が進んだ国の一つ。",
      keyCharacteristics: [
        "MDA による一元的規制体制",
        "リスクベースの4クラス分類（Class A/B/C/D）",
        "CAB（Conformity Assessment Body）による第三者審査",
        "MeDC@St オンライン登録システム",
        "ASEAN AMDD / CSDT への完全整合",
        "Verification Route（参照規制当局の承認活用による簡略審査）",
      ],
    },

    authorities: [
      {
        name: "MDA",
        fullName: "Medical Device Authority",
        localName: "Pihak Berkuasa Peranti Perubatan Malaysia",
        role: "医療機器の登録審査・施設ライセンス・適合性評価・市販後監視・業界振興。保健省傘下の法定機関。",
        url: "https://portal.mda.gov.my/",
        isPrimary: true,
      },
      {
        name: "MOH",
        fullName: "Ministry of Health Malaysia",
        localName: "Kementerian Kesihatan Malaysia",
        role: "医療機器規制の上位政策機関。MDAの監督省庁。",
        url: "https://www.moh.gov.my/",
        isPrimary: false,
      },
    ],

    notifiedBodies: {
      system: "CAB（Conformity Assessment Body）制度",
      description:
        "マレーシアではMDA認定のCAB（Conformity Assessment Body）がClass B/C/D機器の技術文書レビューとQMS監査を実施する第三者審査制度を採用。Class AはCAB審査不要。シンガポールHSA等の参照規制当局の承認を持つ機器はVerification Route（簡略審査、30営業日）が利用可能。",
      bodies: [
        {
          name: "MDA認定 CAB（複数の民間認証機関）",
          url: "https://www.mda.gov.my/index.php/documents/guidance-documents/1800-conformity-assessment-for-medical-device/file",
        },
      ],
    },

    deviceDefinition: {
      legalDefinition:
        "Medical Device Act 2012（Act 737）に基づく定義。疾病の診断、予防、監視、治療、緩和、障害の補償、解剖学的・生理学的過程の検査・置換・修正・支援を目的とする器具、装置、機器、材料、ソフトウェアその他の物品であって、主たる作用が薬理学的・免疫学的・代謝的手段によらないもの。",
      scope:
        "体外診断用医療機器（IVD）、Combination Device（複合機器）を含む。GHTF/IMDRFの定義に整合。",
      notes:
        "AI駆動型医療技術向けのRegulatory Sandboxが2025年に開始。SaMD規制の整備が進行中。",
    },

    primaryLaw: {
      title: "Medical Device Act 2012 (Act 737)",
      originalTitle: "Akta Peranti Perubatan 2012",
      enacted: "2012",
      lastAmended: "2012",
      url: "https://portal.mda.gov.my/index.php/industry/medical-device-registration/medical-device-registration-information",
      description:
        "マレーシアにおける医療機器規制の根拠法。2012年2月9日官報掲載、2013年6月30日施行。医療機器の登録・ライセンス・適合性評価・市販後監視を包括的に規定。Act本体の大きな改正は行われていないが、下位規則（Medical Device Regulations）が継続的に更新されている。",
    },

    implementingRegulations: [
      {
        title: "Medical Device Regulations 2012",
        date: "2012",
        url: "https://www.mda.gov.my/index.php/doc-list/legislation",
        description:
          "Act 737の下位規則。分類、登録手続、手数料等を規定。",
        category: "基本規則",
      },
      {
        title: "Medical Device (Amendment) Regulations 2025 [P.U.(A) 330]",
        date: "2025",
        url: "https://www.mda.gov.my/index.php/doc-list/legislation",
        description:
          "Class A機器の申請料をRM100からRM500に引き上げ、登録料RM750を新設。2026年1月1日施行。",
        category: "手数料改定",
      },
      {
        title: "MDA/GD/0062 — Harmonised Classification of Medical Devices in ASEAN (3rd Edition)",
        date: "2025-06",
        url: "https://portal.mda.gov.my/index.php/documents/ukk/3665-20250612-harmonised-classification-of-medical-devices-in-asean/file",
        description:
          "ASEAN医療機器委員会（AMDC）によるハーモナイズド分類リスト第3版。年次更新。",
        category: "分類ガイダンス",
      },
    ],

    relatedLaws: [
      {
        title: "Personal Data Protection Act 2010 (Act 709)",
        category: "データ保護",
        enacted: "2010",
        url: "https://www.malaysia.gov.my/portal/content/654",
        relevance:
          "個人データ保護法。2024年改正でDPO（データ保護責任者）任命義務が2025年6月施行。医療データは「Sensitive Personal Data」に該当。",
      },
      {
        title: "Radiation Protection Act 2023",
        category: "放射線",
        enacted: "2023",
        url: "https://www.moh.gov.my/index.php/database_stores/store_view/18",
        relevance:
          "放射線機器に適用。医療用放射線機器の安全管理要件を規定。",
      },
      {
        title: "Private Healthcare Facilities and Services Act 1998",
        category: "医療施設",
        enacted: "1998",
        url: "https://www.moh.gov.my/index.php/database_stores/store_view/18",
        relevance:
          "民間医療施設の規制。医療機器の使用環境に関する間接的な規制。",
      },
    ],

    classification: {
      system: "4クラス分類（Class A/B/C/D）",
      basis: "意図する使用目的、人体へのリスクの程度に基づく分類。ASEAN AMDD分類ルールに完全準拠。Combination Device（複合機器）カテゴリも存在。MDA/GD/0062（ハーモナイズドリスト）で年次更新。",
      classes: [
        {
          name: "Class A",
          nameJa: "クラスA",
          riskLevel: "低",
          description:
            "低リスクの医療機器。CAB審査不要。MDAへの直接登録申請のみ。2026年1月より手数料改定（申請料RM500 + 登録料RM750）。",
          examples: ["外科用リトラクター", "舌圧子", "車椅子", "聴診器", "手術用手袋"],
          approvalPath: "MDA直接登録（CAB審査不要）",
        },
        {
          name: "Class B",
          nameJa: "クラスB",
          riskLevel: "中低",
          description:
            "中低リスクの医療機器。MDA認定CABによる技術文書レビューとQMS監査が必要。",
          examples: ["皮下注射針", "吸引器", "血圧計", "超音波診断装置", "歯科用材料"],
          approvalPath: "CAB審査 → MDA登録",
        },
        {
          name: "Class C",
          nameJa: "クラスC",
          riskLevel: "中高",
          description:
            "中高リスクの医療機器。CABによるより詳細な審査。臨床データの評価を含む。",
          examples: ["人工透析器", "整形外科インプラント", "人工呼吸器", "輸液ポンプ", "コンタクトレンズ"],
          approvalPath: "CAB審査 → MDA登録",
        },
        {
          name: "Class D",
          nameJa: "クラスD",
          riskLevel: "高",
          description:
            "最高リスクの医療機器。生命維持に直接関与、または重大な公衆衛生リスク。最も厳格なCAB審査。",
          examples: ["HIV血液スクリーニング検査", "心臓弁", "薬剤溶出ステント", "心臓ペースメーカー", "脳深部刺激装置"],
          approvalPath: "CAB審査（最も厳格）→ MDA登録",
        },
      ],
      rules: [
        "ASEAN AMDD分類ルールに完全準拠",
        "MDA/GD/0062（ハーモナイズドリスト第3版、2025年6月）で分類基準を公開",
        "Combination Device は別途カテゴリ（Class B/C/Dのいずれかに分類）",
        "IVDはリスクに応じてClass A〜Dに分類",
        "SaMDは使用目的に応じた一般分類ルールを適用",
      ],
      totalProductCodes: "ASEAN AMDCハーモナイズドリストに準拠",
    },

    conformityAssessment: {
      overview:
        "マレーシアで医療機器を販売するには、MDAへの登録が必要。Class AはCAB審査不要でMDAに直接申請。Class B/C/DはMDA認定CABによる技術文書レビューとQMS監査（ISO 13485ベース）を経てMDAに登録申請。参照規制当局（シンガポールHSA等）の承認を持つ機器はVerification Route（30営業日に短縮）が利用可能。全ての申請はMeDC@Stオンラインポータルで実施。",
      routes: [
        {
          name: "Class A Direct Registration",
          nameJa: "クラスA 直接登録（CAB審査不要）",
          applicableClasses: ["Class A"],
          description:
            "低リスクのClass A機器はCAB審査なしでMDAに直接登録申請。MeDC@Stで製品情報・ラベル情報を提出。",
          subtypes: [],
          avgReviewTime: "6〜8週間",
          avgReviewTimeSource: "https://cisema.com/en/medical-device-registration-malaysia-guide/",
          fee: "申請料 RM 500 + 登録料 RM 750（2026年1月〜）",
          feeSource: "https://www.pureglobal.com/news/malaysia-mda-2026-update-on-class-a-medical-device-fees",
          url: "https://portal.mda.gov.my/index.php/industry/medical-device-registration/medical-device-registration-information",
        },
        {
          name: "CAB Assessment + MDA Registration (Class B/C/D)",
          nameJa: "CAB審査 + MDA登録（クラスB/C/D）",
          applicableClasses: ["Class B", "Class C", "Class D"],
          description:
            "MDA認定CABが技術文書レビュー・QMS監査を実施し、適合証明を発行。その後MeDC@StでMDAに登録申請。CAB審査自体に約3〜4ヶ月、MDAレビューに別途3〜6ヶ月。",
          subtypes: [
            "Standard Route（通常審査）",
            "Verification Route（参照規制当局の承認活用、30営業日に短縮）",
          ],
          avgReviewTime: "合計6〜10ヶ月（CAB 3〜4ヶ月 + MDA 3〜6ヶ月）",
          avgReviewTimeSource: "https://cisema.com/en/medical-device-registration-malaysia-guide/",
          fee: "MDA申請料 B=RM250/C=RM500/D=RM750 + MDA登録料 B=RM1,000/C=RM2,000/D=RM3,000/Combination=RM5,000 + CAB費用（民間CABにより異なる）",
          feeSource: "https://portal.mda.gov.my/index.php/industry/medical-device-registration/medical-device-registration-information",
          url: "https://www.mda.gov.my/index.php/documents/guidance-documents/1800-conformity-assessment-for-medical-device/file",
        },
        {
          name: "Innovative Medical Device Review Pathway",
          nameJa: "革新的医療機器審査経路",
          applicableClasses: ["Class B", "Class C", "Class D"],
          description:
            "2026年3月9日開始。革新的医療機器（AI/ML搭載機器等）に対する規制助言サービスを含む特別審査経路。MDAが開発段階から規制助言を提供し、承認プロセスを効率化。",
          subtypes: [],
          avgReviewTime: "要確認（新設制度のため実績なし）",
          fee: "要確認（新設制度のため実績なし）",
          url: "https://www.pureglobal.com/news/malaysia-mda-launches-first-regulatory-sandbox-for-medical-devices-2025",
        },
      ],
    },

    electronicSubmission: {
      system: "MeDC@St (Medical Device Centralized System)",
      url: "https://portal.mda.gov.my/index.php/medc-st",
      description:
        "MDAのワンストップオンラインポータル「MeDC@St」を通じて、施設ライセンス申請・医療機器登録申請を電子的に実施。8パートの申請フォームで機器分類・使用目的・適合性文書・海外市場認可状況等を提出。複数ユーザーアクセス対応。UDI対応のMeDC@St 3.0+を準備中。",
      mandatory: true,
    },

    udi: {
      required: false,
      system: "パイロット調査段階",
      description:
        "MDAはUDI制度の導入準備としてパイロット調査を実施。Phase 1（Class D施設対象、2024年6月〜8月15日に延長）、Phase 2（Class B施設対象、2024年9月1日〜10月30日）で施設のUDI情報提供準備状況を評価。調査結果を基にMeDC@St 3.0+のUDI対応機能を開発中。2026年2月のラベリングガイダンス第7版でUDI参照を電子ラベリングオプションに組み込み。本格義務化時期は未確定。",
      url: "https://www.mda.gov.my/index.php/announcement/1432-announcement-pilot-survey-for-unique-device-identification-udi-in-malaysia",
      timeline: "パイロット調査完了（2024年）。本格導入時期は調査結果に基づき決定予定",
    },

    postMarket: {
      adverseEventReporting: {
        system: "Mandatory Problem Reporting",
        mandatory: true,
        url: "https://portal.mda.gov.my/index.php/industry/vigilance-unit/mandatory-problem-reporting",
        description:
          "マレーシアで登録された医療機器に関連するインシデントは、国内外を問わず報告義務がある。3区分制：死亡等の緊急事象は48時間以内、重大インシデント（Serious Incident）は10日以内、非重大インシデントは30日以内にMDA Vigilance Unitに報告（暦日ベース）。製造業者は根本原因調査とCAPAの実施が必要。",
      },
      recalls: {
        authority: "MDA",
        description:
          "MDAがField Safety Corrective Action（FSCA）およびリコールを監督。MDA/GD/0014ガイダンスに基づき、製造業者・輸入業者が自主回収とMDAへの報告を実施。",
        url: "https://portal.mda.gov.my/index.php/documents/guidance-documents/1815-mandatory-problem-reporting-1/file",
      },
      surveillance:
        "登録保有者は市販後監視プログラムの運用が義務。MDAによる定期的な施設査察・コンプライアンス確認。不適合製品に対する登録停止・取消等の行政措置。ASEAN加盟国間のPMS情報交換ガイダンスに基づく域内連携。",
    },

    certificateOfFreeSale: {
      available: true,
      issuingAuthority: "MDA",
      name: "Certificate of Free Sale (CFS)",
      description:
        "マレーシアで登録済みの医療機器について、MDAが自由販売証明書を発行。輸出先国の規制申請に使用。MeDC@Stを通じてオンライン申請。",
      processingTime: "約15〜30営業日",
      url: "https://portal.mda.gov.my/index.php/medc-st",
    },

    reimbursement: {
      system: "税財源ユニバーサルヘルスケア / MySalam / PeKa B40",
      authority: "Ministry of Health Malaysia (MOH)",
      description:
        "マレーシアは二層型医療制度を採用。公的医療は税財源で運営され、公立病院での医療費は極めて低額（外来RM1、入院RM5程度）。医療機器のコストは政府調達予算で吸収。MySalam（低所得層B40向け健康保護スキーム）およびPeKa B40（健康補助金）が補完。民間医療は民間保険またはout-of-pocketで賄う。医療機器の個別償還制度は存在せず、公立病院での使用は政府調達に依存。MaHTAS（Malaysia Health Technology Assessment Section）がHTA評価を実施。",
      codingSystems: [
        "Malaysia DRG (MY-DRG)",
        "ICD-10",
        "MOH Procurement List",
      ],
      url: "https://www.mysalam.com.my/b40/info/?url=main_EN",
    },

    marketingRules: {
      authority: "MDA",
      description:
        "医療機器の広告はMedical Device Act 2012および関連規則に基づき規制。未登録機器の広告・販売は禁止。",
      keyRules: [
        "未登録医療機器の広告・販売禁止",
        "虚偽・誇大な効能表示の禁止",
        "MDAによる広告監視と是正措置",
        "マレー語/英語でのラベル表示義務",
        "オンライン販売に関する規制",
      ],
    },

    mdsap: {
      status: "Affiliate Member（2025年9月〜）",
      description:
        "マレーシア（MDA）は2025年9月16日よりMDSAPのAffiliate Memberとして参加。MDSAP監査報告書をQMS適合性の根拠として受入。CABによるQMS監査においてISO 13485認証・MDSAP報告書・FDA QSR・MHLW Ordinance 169等を受入可能。",
    },

    internationalStandards: {
      iso13485: {
        accepted: true,
        notes:
          "MDA登録の主要要件。CABによるQMS監査はISO 13485に基づく。MS ISO 13485としてマレーシア国内規格化。",
      },
      iso14971: {
        accepted: true,
        notes:
          "リスクマネジメントの技術文書要件として必須。リスクアセスメントサマリーの提出が登録申請で求められる。",
      },
      iec62304: {
        accepted: true,
        notes:
          "ソフトウェアライフサイクル規格。SaMD登録時に参照。Regulatory Sandboxの対象にも関連。",
      },
      iec60601: {
        accepted: true,
        notes:
          "電気医療機器の安全規格として受入。MS IEC 60601シリーズとしてマレーシア規格化。",
      },
      others: [
        {
          name: "ISO 10993シリーズ（生物学的安全性評価）",
          notes: "生体接触医療機器の生物学的安全性評価に必須。",
        },
        {
          name: "ASEAN AMDD CSDT（Common Submission Dossier Template）",
          notes: "ASEAN域内統一申請書類テンプレート。MDA登録文書として完全統合。",
        },
      ],
    },

    recentDevelopments: [
      {
        date: "2026-03",
        title: "MDA-HSA Regulatory Reliance 適用開始",
        description:
          "マレーシアMDAが2026年3月1日よりシンガポールHSA承認をverification processに利用可能と告知。HSA登録機器はVerification Routeで30営業日に短縮。ASEAN域内の規制連携強化のモデルケース。",
      },
      {
        date: "2026-02",
        title: "ラベリングガイダンス第7版発行",
        description:
          "電子ラベリング（e-labelling）を導入。UDI参照を電子ラベリングオプションの一部として組み込み。デジタル化推進。",
      },
      {
        date: "2026-01",
        title: "Class A 新手数料施行・調達規制強化",
        description:
          "Medical Device (Amendment) Regulations 2025に基づきClass A手数料改定（申請料RM500 + 登録料RM750）。Circular Letter No. 1/2026で医療施設における医療機器調達の規制強化。",
      },
      {
        date: "2026-03",
        title: "Innovative Medical Device Review Pathway 開始",
        description:
          "2026年3月9日より革新的医療機器（AI/ML搭載機器等）向けの特別審査経路を開始。MDAが開発段階から規制助言を提供し、承認プロセスを効率化するイノベーション支援策。",
      },
    ],

    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- Saudi Arabia ---
  // =========================================================================
  {
    code: "SAU",
    country: "サウジアラビア",
    countryEn: "Saudi Arabia",
    region: "Middle East & Africa",
    flag: "🇸🇦",

    legalSystemOverview: {
      type: "イスラム法を基盤とする中央集権制（Centralized system）",
      description:
        "サウジアラビアの医療機器規制はSFDA（Saudi Food and Drug Authority）が一元的に管轄する。2021年に新法「Law of Medical Devices and Supplies」（Royal Decree No. M/54, 1442H）が制定され、旧Medical Devices Interim Regulation（2008年）を置換。EU MDR/IVDRおよびGHTFに整合した4クラス制（Class A/B/C/D）を採用。2022年以降、SFDA独立審査によるMDMA-2（技術文書評価）に一本化。",
      keyCharacteristics: [
        "SFDA による一元的な中央規制体制",
        "リスクベースの4クラス分類（Class A/B/C/D）",
        "EU MDR/IVDR および GHTF に整合した規制枠組み",
        "MDMA（Medical Device Marketing Authorization）による市販前認可",
        "MDMA-2（技術文書の独立審査）に一本化（MDMA-1は廃止）",
        "Saudi-DIデータベースによるUDI制度",
      ],
    },

    authorities: [
      {
        name: "SFDA",
        fullName: "Saudi Food and Drug Authority",
        localName: "الهيئة العامة للغذاء والدواء",
        role: "医療機器の市販前認可（MDMA）・市販後監視・リコール管理・施設査察・広告承認。医療機器規制の中核機関。",
        url: "https://www.sfda.gov.sa/en/overview-medical",
        isPrimary: true,
      },
      {
        name: "NCMDR",
        fullName: "National Center for Medical Device Reporting",
        localName: null,
        role: "有害事象報告データベースの管理・リコール分類・安全性情報の共有",
        url: "https://www.bio-standards.com/blog/sfda-ncmdr-everything-you-should-know-about-medical-device-reporting",
        isPrimary: false,
      },
      {
        name: "CHI",
        fullName: "Council of Health Insurance",
        localName: null,
        role: "医療保険制度の規制・保険償還管理",
        url: "https://www.chi.gov.sa/en/aboutchi/cchiprograms/Pages/IDF.aspx",
        isPrimary: false,
      },
    ],

    notifiedBodies: {
      system: "なし（SFDA が直接技術文書を審査）",
      description:
        "サウジアラビアでは欧州型のNotified Body制度は存在しない。SFDAが直接、技術文書評価（Technical File Assessment）を実施しMDMAを交付する。ただしISO 13485認証を第三者認証機関から取得することが事前要件。",
      bodies: [],
    },

    deviceDefinition: {
      legalDefinition:
        "Law of Medical Devices and Supplies（Royal Decree No. M/54）に定義。疾病の診断・治療・予防・監視・軽減等を目的とする機器・装置・器具・材料・ソフトウェア等で、主たる意図する作用が薬理学的・免疫学的・代謝的手段によらないもの。",
      scope:
        "IVD（体外診断用医療機器）も適用範囲に含まれる。SaMDについてはMDS-G010ガイダンスで個別要件を規定。",
      notes:
        "定義はEU MDR/IVDRの定義と大きく整合。AI/ML医療機器に対するMDS-G010ガイダンスで中東地域をリード。",
    },

    primaryLaw: {
      title: "Law of Medical Devices and Supplies",
      originalTitle: "نظام الأجهزة والمنتجات الطبية",
      enacted: "2021",
      lastAmended: "要確認（2021年制定後の改正公布日は裏付け未確認）",
      url: "https://www.sfda.gov.sa/sites/default/files/2023-10/MDSysExcE.pdf",
      description:
        "2021年制定（Royal Decree No. M/54, 1442H）。旧Medical Devices Interim Regulation（2008年）を置換する現行の基本法。SFDAの医療機器規制権限の根拠法。施行規則はSFDA理事会決定No. 3-29-1443で発出。",
    },

    implementingRegulations: [
      {
        title: "Implementing Regulation of the Law of Medical Devices (SFDA Board Decision No. 3-29-1443)",
        date: "2021",
        url: "https://www.sfda.gov.sa/sites/default/files/2023-10/MDSysExcE.pdf",
        description:
          "基本法の施行規則。分類、登録手続、市販後監視、査察等の詳細を規定。",
        category: "施行規則",
      },
      {
        title: "MDS-REQ 5 — Requirements for Medical Devices Marketing Authorisation (V6)",
        date: "2023-07",
        url: "https://www.sfda.gov.sa/en/regulations",
        description:
          "MDMA（市販前認可）の要件。技術文書評価、臨床評価報告書、ラベリング要件等を規定。",
        category: "市販前認可",
      },
      {
        title: "MDS-REQ 7 — Requirements for Unique Device Identification (UDI)",
        date: "2022-06",
        url: "https://www.sfda.gov.sa/sites/default/files/2022-06/RequirementsUDI_0.pdf",
        description:
          "UDI制度の要件。Saudi-DIデータベースへの登録義務、UDI-DI/UDI-PI、発行機関（GS1/HIBCC/ICCBBA）を規定。",
        category: "UDI",
      },
      {
        title: "MDS-REQ 10 — Requirements for Inspections and QMS for Medical Devices",
        date: "2026-01-11",
        url: "https://www.sfda.gov.sa/en/overview-medical",
        description:
          "査察・品質管理システム要件。ISO 13485準拠のQMS維持が必要。",
        category: "QMS・査察",
      },
    ],

    relatedLaws: [
      {
        title: "Personal Data Protection Law (PDPL)",
        category: "データ保護",
        enacted: "2021",
        url: "https://sdaia.gov.sa/en/SDAIA/about/Documents/PersonalDataEnglish.pdf",
        relevance:
          "SDAIA（Saudi Data & Artificial Intelligence Authority）が管轄。コネクテッドデバイス・SaMDが取り扱う個人医療情報のプライバシー要件に適用。",
      },
    ],

    classification: {
      system: "4クラス制（Class A/B/C/D）",
      basis: "リスクベース（EU MDR/GHTF分類ルールに整合）。意図する用途・侵襲性・使用期間・エネルギー源等に基づく。MDS-G5ガイダンスに詳細規定。IVDは別途分類ルール（EU IVDRに整合）。",
      classes: [
        {
          name: "Class A",
          nameJa: "クラスA",
          riskLevel: "低",
          description: "一般的な低リスク機器。MDMA（技術文書評価）が必要。",
          examples: ["弾性包帯", "聴診器", "手術用手袋", "車椅子", "舌圧子"],
          approvalPath: "MDMA（技術文書評価）",
        },
        {
          name: "Class B",
          nameJa: "クラスB",
          riskLevel: "中低",
          description: "中程度のリスク機器。MDMA（技術文書評価）が必要。",
          examples: ["輸液ポンプ", "補聴器", "超音波診断装置", "歯科用材料", "血圧計"],
          approvalPath: "MDMA（技術文書評価）",
        },
        {
          name: "Class C",
          nameJa: "クラスC",
          riskLevel: "中高",
          description: "高リスク機器。MDMA（技術文書評価＋臨床評価報告書）が必要。",
          examples: ["人工関節", "冠動脈ステント", "人工呼吸器", "透析装置", "コンタクトレンズ"],
          approvalPath: "MDMA（技術文書評価＋臨床評価報告書）",
        },
        {
          name: "Class D",
          nameJa: "クラスD",
          riskLevel: "高",
          description: "最高リスク機器。MDMA（技術文書評価＋臨床データ）が必要。最も厳格な審査。",
          examples: ["人工心臓弁", "埋込み型除細動器", "薬剤溶出ステント", "脳深部刺激装置", "人工内耳"],
          approvalPath: "MDMA（技術文書評価＋臨床データ）",
        },
      ],
      rules: [
        "EU MDR/GHTF分類ルールに基づく分類基準",
        "MDS-G5ガイダンスに詳細規定",
        "IVDは別途分類（Class A〜D、EU IVDRに整合）",
        "SaMDはMDS-G010ガイダンスに基づき分類",
      ],
      totalProductCodes: "GMDN（Global Medical Device Nomenclature）を使用",
    },

    conformityAssessment: {
      overview:
        "全クラスの医療機器にMDMA（Medical Device Marketing Authorization）が必要。2022年以降はMDMA-2ルート（技術文書のSFDA独立審査）に一本化（旧MDMA-1は廃止）。EU MDR準拠の技術文書をSFDAが審査。MDMA有効期間は3年（更新は90日前から申請可）。1つのMDMA申請に最大50機器をバンドル可能。",
      routes: [
        {
          name: "MDMA-2 Technical File Assessment",
          nameJa: "MDMA-2 技術文書評価",
          applicableClasses: ["Class A", "Class B", "Class C", "Class D"],
          description:
            "EU MDR準拠の技術文書をSFDAが独立審査。先行認可（CE/FDA等）は参考にするが必須ではない。ISO 13485認証が前提条件。",
          subtypes: [
            { name: "新規MDMA申請", description: "初回のMDMA取得。技術文書・臨床評価・ラベリング・QMS証明書を提出。" },
            { name: "MDMA更新（3年ごと）", description: "有効期限90日前から申請可。変更がなければ簡略審査。" },
            { name: "MDMA変更申請", description: "製品仕様・製造所・ラベリング等の変更時。" },
          ],
          avgReviewTime: "公式: 35営業日 / 実績: 3〜6ヶ月",
          avgReviewTimeSource: "https://omcmedical.com/sfda-fees-for-medical-devices/",
          fee: "Class A: SAR 15,000 / Class B: SAR 19,000 / Class C: SAR 21,000 / Class D: SAR 23,000",
          feeSource: "https://omcmedical.com/sfda-fees-for-medical-devices/",
          url: "https://mdma.sfda.gov.sa/",
        },
      ],
    },

    electronicSubmission: {
      system: "GHAD統合電子システム + MDMA e-Service",
      url: "https://mdma.sfda.gov.sa/",
      description:
        "全ての申請（MDMA申請・更新・変更・広告承認等）はSFDAの統合電子システム「GHAD」経由でオンライン提出。紙ベースの申請は不可。",
      mandatory: true,
    },

    udi: {
      required: true,
      system: "SFDA UDI System — Saudi-DIデータベース",
      description:
        "MDS-REQ 7に基づくUDI要件。UDI-DI（機器識別子）とUDI-PI（製造識別子）で構成。発行機関はGS1/HIBCC/ICCBBAを承認。Saudi-DIデータベースへの登録が義務。",
      url: "https://www.sfda.gov.sa/sites/default/files/2022-06/RequirementsUDI_0.pdf",
      timeline: "Saudi-DIデータベース: 2020年10月稼働。Class B/C/D: 2023年9月期限。Class A: 2024年9月期限。正式エンフォースメントは段階的に進行中。",
    },

    postMarket: {
      adverseEventReporting: {
        system: "NCMDR (National Center for Medical Device Reporting)",
        mandatory: true,
        url: "https://www.bio-standards.com/blog/sfda-ncmdr-everything-you-should-know-about-medical-device-reporting",
        description:
          "製造業者・認定代理人・流通業者・医療従事者・一般市民が有害事象を報告可能。NCMDRデータベースで管理。リコールはClass I（高リスク）/Class II（中リスク）/Class III（低リスク）の3段階。",
      },
      recalls: {
        authority: "SFDA / NCMDR",
        description:
          "SFDAがFSCA（Field Safety Corrective Action）およびリコールを監督。NCMDRがリコール情報を管理・公開。",
        url: "https://www.sfda.gov.sa/en/overview-medical",
      },
      surveillance:
        "Class A: PMS報告書の維持（SFDA要求時に提出）。Class B: PSUR（2年ごと更新）。Class C/D: PSUR（毎年更新）。Class C/DではPost-Market Clinical Follow-up（PMCF）が特に重要。",
    },

    certificateOfFreeSale: {
      available: true,
      issuingAuthority: "輸出国の規制当局（MDMA申請時に提出が必要）",
      name: "Certificate of Free Sale (CFS)",
      description:
        "MDMA申請時に、原産国の規制当局が発行するCFSの提出が求められる。有効期限は発行日から12ヶ月以内。サウジアラビアが宛先国として明記されている必要がある。",
      processingTime: "輸出国側の手続きによる",
      url: "https://mdma.sfda.gov.sa/",
    },

    reimbursement: {
      system: "公的医療（MOH直営施設）+ 協同医療保険（Cooperative Health Insurance）",
      authority: "CHI（Council of Health Insurance）/ MOH",
      description:
        "公的病院（MOH/National Guard/軍病院等）は政府予算で調達。民間セクターは協同医療保険法に基づく保険制度。医療機器の保険償還制度は医薬品ほど体系化されておらず、個別の保険契約・施設調達方針に依存。",
      codingSystems: [
        "要確認（固有の医療機器償還コード体系は未確認）",
      ],
      url: "https://www.chi.gov.sa/en/aboutchi/cchiprograms/Pages/IDF.aspx",
    },

    marketingRules: {
      authority: "SFDA",
      description:
        "MDS-REQ 8（V3, 2023年3月15日発出）に基づき、医療機器の広告にはSFDAの事前承認（AMDA）が必要。MDMA未取得機器の広告は厳禁。",
      keyRules: [
        "一般市民向け広告はアラビア語必須、医療専門家向けは英語可",
        "広告承認手数料: 一般向けSAR 3,000、専門家向けSAR 6,000",
        "SFDAロゴ・施設登録番号の広告使用禁止",
        "違反時: 最大SAR 5,000,000の罰金、最大180日の施設閉鎖、MDMA取消",
      ],
    },

    mdsap: {
      status: "オブザーバー（Observer）",
      description:
        "SFDAはMDSAPのオブザーバーとして参加。正式参加国ではない。MDSAP監査報告書はSFDAの規制要件を代替せず、MDMA取得が別途必要。",
    },

    internationalStandards: {
      iso13485: {
        accepted: true,
        notes: "MDMA申請の前提条件。第三者認証機関からのISO 13485認証が必須。",
      },
      iso14971: {
        accepted: true,
        notes: "リスクマネジメント。技術文書のリスク評価に適用。",
      },
      iec62304: {
        accepted: true,
        notes: "ソフトウェアライフサイクル。SaMD申請に適用。MDS-G010で参照。",
      },
      iec60601: {
        accepted: true,
        notes: "医用電気機器の安全・性能要求。",
      },
      others: [
        {
          name: "ISO 10993シリーズ（生物学的安全性評価）",
          notes: "生体接触医療機器の生物学的安全性評価に必須。",
        },
        {
          name: "MDS-G010（AI/ML医療機器ガイダンス）",
          notes: "AI/ML技術を用いた医療機器に対する要件。SFDAが中東地域でAI医療機器規制をリード。",
        },
      ],
    },

    recentDevelopments: [
      {
        date: "2026-01",
        title: "QMS・査察要件（MDS-REQ 10）および輸送・保管要件（MDS-REQ 12）の更新",
        description:
          "SFDAが査察・品質管理システム要件および輸送・保管要件のガイダンスを2026年1月11日に更新。",
      },
      {
        date: "2025-06",
        title: "臨床試験要件（MDS-REQ 2）の更新",
        description:
          "医療機器の臨床試験に関する要件ガイダンスを更新。",
      },
      {
        date: "2024",
        title: "AI/ML医療機器ガイダンス（MDS-G010）の運用",
        description:
          "AI/ML技術を用いた医療機器に対するバインディングな要件を規定。SFDAは中東地域でAI医療機器規制をリードする立場。",
      },
      {
        date: "2022",
        title: "MDMA-2ルートへの全面移行",
        description:
          "GHTF参照国の認可を前提としたMDMA-1を廃止し、SFDA独立審査によるMDMA-2（技術文書評価）に一本化。",
      },
    ],

    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- Switzerland ---
  // =========================================================================
  {
    code: "CHE",
    country: "スイス",
    countryEn: "Switzerland",
    region: "Europe",
    flag: "🇨🇭",

    legalSystemOverview: {
      type: "連邦制（Federal system）",
      description:
        "スイスの医療機器規制は連邦法 Heilmittelgesetz（HMG, SR 812.21）を根幹とし、Swissmedic（スイス医薬品庁）が主管当局として市販後監視・ビジランスを担う。2021年5月26日に新医療機器条例（MedDO, SR 812.213）が施行され、EU MDRに大幅に整合した規制枠組みへ移行。スイスはEU加盟国ではないが、MRA（相互承認協定）の医療機器章が凍結中のため、独自の規制制度を運用。EU認定Notified BodyのCE証明書を一方的に承認するが、スイスの承認はEU域内では効力を持たない。",
      keyCharacteristics: [
        "Swissmedic による市販後監視・ビジランス（市販前の型式審査はなし）",
        "EU MDR Annex VIIIに準用したリスクベース4クラス分類（Class I/IIa/IIb/III）",
        "EU認定Notified BodyのCE証明書を一方的承認",
        "CH-REP（スイス国内代理人）制度の義務化",
        "swissdamedデータベースによる機器登録・UDI管理",
        "Bilaterals III交渉によるMRA医療機器章の復活が進行中",
      ],
    },

    authorities: [
      {
        name: "Swissmedic",
        fullName: "Swiss Agency for Therapeutic Products",
        localName: "Schweizerisches Heilmittelinstitut",
        role: "医療機器の市販後監視・ビジランス・FSCA管理・施設査察。主管当局。",
        url: "https://www.swissmedic.ch/swissmedic/en/home/medical-devices.html",
        isPrimary: true,
      },
      {
        name: "BAG/FOPH",
        fullName: "Federal Office of Public Health",
        localName: "Bundesamt für Gesundheit",
        role: "医療機器の法規制策定・MiGeL（医療機器・補助機器リスト）による償還管理",
        url: "https://www.bag.admin.ch/bag/en/home.html",
        isPrimary: false,
      },
      {
        name: "SECO",
        fullName: "State Secretariat for Economic Affairs",
        localName: "Staatssekretariat für Wirtschaft",
        role: "適合性評価・Designated Bodyの認定（現在該当なし）・MRA管理",
        url: "https://www.seco.admin.ch/",
        isPrimary: false,
      },
    ],

    notifiedBodies: {
      system: "Designated Body制度（現在スイス国内に認定機関なし）",
      description:
        "MedDOに基づきスイス国内にDesignated Body（適合性評価機関）を設置可能だが、現時点で認定された機関はない。実運用ではEU認定Notified Bodyが発行したCE証明書をスイスが一方的に承認している。Bilaterals IIIの署名（2026年3月）によりMRA医療機器章の復活が見込まれる。",
      bodies: [],
    },

    deviceDefinition: {
      legalDefinition:
        "MedDO（SR 812.213）Art. 3に定義。EU MDR Article 2(1)に整合。疾病の診断・治療・予防・監視・軽減等を目的とする機器・装置・器具・材料・ソフトウェア等で、主たる意図する作用が薬理学的・免疫学的・代謝的手段によらないもの。",
      scope:
        "IVD（体外診断用医療機器）はIvDO（SR 812.219）で別途規定。SaMD・AI/ML機器も適用対象。",
      notes:
        "EU MDRの定義と実質的に同一。美容目的機器等もMedDO Annex XVIで対象拡大。",
    },

    primaryLaw: {
      title: "Heilmittelgesetz (HMG) — Federal Act on Medicinal Products and Medical Devices",
      originalTitle: "Bundesgesetz über Arzneimittel und Medizinprodukte (Heilmittelgesetz, HMG)",
      enacted: "2000-12-15",
      lastAmended: "2020（MedDO/IvDO導入に伴う改正）",
      url: "https://www.fedlex.admin.ch/eli/cc/2001/422/en",
      description:
        "医薬品・医療機器の両方を規律する連邦法。SR 812.21。医療機器に関しては第4章（Medizinprodukte）が規定。実施法令としてMedDO（SR 812.213）およびIvDO（SR 812.219）が制定されている。",
    },

    implementingRegulations: [
      {
        title: "Medical Devices Ordinance (MedDO, SR 812.213)",
        date: "2021-05-26",
        url: "https://www.fedlex.admin.ch/eli/cc/2020/552/en",
        description:
          "EU MDRに整合した医療機器の基本実施法令。分類・適合性評価・CH-REP・ラベリング・UDI・ビジランス等を規定。2025年1月改正で移行期限の調整等。",
        category: "医療機器",
      },
      {
        title: "Ordinance on In Vitro Diagnostic Medical Devices (IvDO, SR 812.219)",
        date: "2021-05-26",
        url: "https://www.fedlex.admin.ch/eli/cc/2022/294/en",
        description:
          "EU IVDRに整合した体外診断用医療機器の実施法令。",
        category: "体外診断",
      },
    ],

    relatedLaws: [
      {
        title: "Federal Act on Data Protection (nFADP / DSG)",
        category: "データ保護",
        enacted: "2020 (revised)",
        url: "https://www.fedlex.admin.ch/eli/cc/2022/491/en",
        relevance:
          "2023年9月1日施行の改正データ保護法。コネクテッドデバイス・SaMDが取り扱う個人医療情報のプライバシー要件に適用。",
      },
      {
        title: "Federal Act on Technical Barriers to Trade (THG, SR 946.51)",
        category: "貿易・適合性評価",
        enacted: "1995",
        url: "https://www.fedlex.admin.ch/eli/cc/1996/1725_1725_1725/en",
        relevance:
          "適合性評価の相互承認・国際整合性の法的基盤。MRA（相互承認協定）の国内法根拠。",
      },
    ],

    classification: {
      system: "4クラス制（Class I/IIa/IIb/III）— EU MDR Annex VIII準用",
      basis: "リスクベース。EU MDR Annex VIIIの分類ルールを準用。意図する用途・侵襲性・使用期間・エネルギー源等に基づく。IVDはIvDOで別途分類（EU IVDR整合）。",
      classes: [
        {
          name: "Class I",
          nameJa: "クラスI",
          riskLevel: "低",
          description: "低リスク機器。適合宣言のみ（計測・滅菌・再利用外科用はNB証明書必要）。",
          examples: ["弾性包帯", "歩行補助器具", "聴診器", "車椅子", "舌圧子"],
          approvalPath: "自己適合宣言（一部はNB証明書必要）",
        },
        {
          name: "Class IIa",
          nameJa: "クラスIIa",
          riskLevel: "中低",
          description: "中低リスク機器。Notified Body（EU認定）のCE証明書が必要。",
          examples: ["補聴器", "超音波診断装置", "歯科用材料", "輸液セット", "血圧計"],
          approvalPath: "EU認定Notified BodyのCE証明書",
        },
        {
          name: "Class IIb",
          nameJa: "クラスIIb",
          riskLevel: "中高",
          description: "中高リスク機器。Notified Body（EU認定）のCE証明書が必要。",
          examples: ["人工呼吸器", "透析装置", "外科用レーザー", "輸液ポンプ", "コンタクトレンズ"],
          approvalPath: "EU認定Notified BodyのCE証明書",
        },
        {
          name: "Class III",
          nameJa: "クラスIII",
          riskLevel: "高",
          description: "最高リスク機器。Notified Body（EU認定）のCE証明書が必要。最も厳格な適合性評価。",
          examples: ["人工心臓弁", "冠動脈ステント", "埋込み型除細動器", "人工関節（セメント固定）", "薬剤溶出ステント"],
          approvalPath: "EU認定Notified BodyのCE証明書（臨床データ含む）",
        },
      ],
      rules: [
        "EU MDR Annex VIII分類ルールを準用（MedDO Annex IX）",
        "IVDはIvDOで別途分類（EU IVDRのClass A/B/C/Dに整合）",
        "SaMDはRule 11（EU MDR）に基づき分類",
        "美容目的機器等もMedDO Annex XVIで適用対象に追加",
      ],
      totalProductCodes: "GMDN（Global Medical Device Nomenclature）を使用",
    },

    conformityAssessment: {
      overview:
        "スイスではSwissmedic による市販前の型式審査は行われない。製造業者はEU MDRに準拠した適合性評価を実施し、Class I（計測・滅菌・再利用外科用以外）は自己適合宣言、Class IIa以上はEU認定Notified Bodyが発行したCE証明書で適合性を証明する。スイスはEU認定NBのCE証明書を一方的に承認するが、この承認は一方通行であり、スイスでの市販許可はEU域内では効力を持たない。CH-REP（スイス国内代理人）の指定が必要。",
      routes: [
        {
          name: "Self-Declaration of Conformity (Class I)",
          nameJa: "自己適合宣言（クラスI）",
          applicableClasses: ["Class I"],
          description:
            "低リスクClass I機器（計測・滅菌・再利用外科用を除く）は製造業者の自己適合宣言のみで上市可能。swissdamedへの機器登録が必要。",
          subtypes: [],
          avgReviewTime: null,
          avgReviewTimeSource: null,
          fee: "swissdamed登録手数料（詳細はSwissmedic手数料規則参照）",
          feeSource: "https://www.swissmedic.ch/swissmedic/en/home/medical-devices/swissdamed.html",
          url: "https://www.swissmedic.ch/swissmedic/en/home/medical-devices/market-access.html",
        },
        {
          name: "CE Certificate Route (Class IIa/IIb/III)",
          nameJa: "CE証明書ルート（クラスIIa/IIb/III）",
          applicableClasses: ["Class IIa", "Class IIb", "Class III"],
          description:
            "EU認定Notified Bodyが発行したCE証明書をSwissmedic/スイスが一方的に承認。別途Swissmedicへの市販前申請は不要。CH-REP指定・swissdamed登録・CHRNラベリングが必要。",
          subtypes: [],
          avgReviewTime: null,
          avgReviewTimeSource: null,
          fee: "swissdamed登録手数料",
          feeSource: "https://www.swissmedic.ch/swissmedic/en/home/medical-devices/swissdamed.html",
          url: "https://www.swissmedic.ch/swissmedic/en/home/medical-devices/market-access.html",
        },
      ],
    },

    electronicSubmission: {
      system: "swissdamed（Swiss Database for Medical Devices）",
      url: "https://www.swissmedic.ch/swissmedic/en/home/medical-devices/swissdamed.html",
      description:
        "swissdamedはスイスの医療機器登録データベース。2026年7月より機器登録が義務化。UDI/Devicesモジュールは2025年8月稼働予定。Economic operators（製造業者・CH-REP・輸入業者）の登録およびビジランス報告にも使用。",
      mandatory: true,
    },

    udi: {
      required: true,
      system: "EU UDI準拠 — swissdamed UDI/Devicesモジュール",
      description:
        "MedDO Art. 31–36に基づくUDI要件。EU MDRのUDI制度に準拠。UDI-DI（機器識別子）とUDI-PI（製造識別子）で構成。発行機関はGS1/HIBCC/ICCBBA。swissdamed UDI/Devicesモジュール（2025年8月稼働予定）にUDI-DIデータを登録。",
      url: "https://www.swissmedic.ch/swissmedic/en/home/medical-devices/swissdamed.html",
      timeline: "swissdamed UDI/Devicesモジュール: 2025年8月稼働予定。2026年7月機器登録義務化。Class III: 移行期限2025年5月。Class IIb: 2025年5月。Class IIa: 2027年5月。Class I: 2027年5月。",
    },

    postMarket: {
      adverseEventReporting: {
        system: "Swissmedic Materiovigilance",
        mandatory: true,
        url: "https://www.swissmedic.ch/swissmedic/en/home/medical-devices/vigilance-of-medical-devices.html",
        description:
          "製造業者・CH-REP・医療機関はSwissmedicに有害事象（重篤事象）を報告する義務がある。FSCA（Field Safety Corrective Action）もSwissmedicに通知が必要。報告はswissdamed経由で電子提出。",
      },
      recalls: {
        authority: "Swissmedic",
        description:
          "SwissmedicがFSCA・リコールを監督。FSCA情報はSwissmedic公式サイトで公開。",
        url: "https://www.swissmedic.ch/swissmedic/en/home/medical-devices/fsca.html",
      },
      surveillance:
        "EU MDRに準じたPMS要件。Class IIa以上: PSUR（定期安全性更新報告書）。Class IIb/III: PMCF（市販後臨床フォローアップ）が特に重要。PMS計画・PMS報告書の維持が義務。",
    },

    certificateOfFreeSale: {
      available: true,
      issuingAuthority: "Swissmedic",
      name: "Certificate of Free Sale (CFS)",
      description:
        "Swissmedicがスイスで合法的に流通している医療機器のCFSを発行。輸出目的で利用。",
      processingTime: "要確認",
      url: "https://www.swissmedic.ch/swissmedic/en/home/medical-devices.html",
    },

    reimbursement: {
      system: "MiGeL（Mittel- und Gegenständeliste）— 医療機器・補助機器リスト",
      authority: "BAG/FOPH（Federal Office of Public Health）",
      description:
        "社会医療保険（KVG/LAMal）における医療機器の償還はMiGeL（SR 832.112.31）に基づく。MiGeLに収載された機器カテゴリが保険償還対象。最大償還額が設定され、超過分は自己負担。入院時に使用される高額医療機器はDRG（SwissDRG）に包括。",
      codingSystems: [
        "MiGeL Position番号",
        "SwissDRG（入院医療）",
      ],
      url: "https://www.bag.admin.ch/bag/de/home/versicherungen/krankenversicherung/krankenversicherung-leistungen-tarife/Mittel-und-Gegenstaendeliste.html",
    },

    marketingRules: {
      authority: "Swissmedic / BAG",
      description:
        "HMG Art. 21に基づき、医療機器の広告は法令に適合する必要がある。虚偽・誤解を招く広告は禁止。処方箋対象機器の一般向け広告は制限。",
      keyRules: [
        "適合宣言・CE証明書のない機器の広告は禁止",
        "虚偽・誤解を招く表示の禁止",
        "処方箋対象機器の一般消費者向け広告は制限あり",
      ],
    },

    mdsap: {
      status: "非参加（Non-participant）",
      description:
        "スイスはMDSAPに参加していない。MDSAP監査報告書はスイスの規制要件を代替しない。",
    },

    internationalStandards: {
      iso13485: {
        accepted: true,
        notes: "Class IIa以上の適合性評価にISO 13485認証が実質的に必要（Notified Body審査の前提）。",
      },
      iso14971: {
        accepted: true,
        notes: "リスクマネジメント。技術文書のリスク評価に適用。",
      },
      iec62304: {
        accepted: true,
        notes: "ソフトウェアライフサイクル。SaMD・ソフトウェア組込み機器に適用。",
      },
      iec60601: {
        accepted: true,
        notes: "医用電気機器の安全・性能要求。",
      },
      others: [
        {
          name: "ISO 10993シリーズ（生物学的安全性評価）",
          notes: "生体接触医療機器の生物学的安全性評価に必須。",
        },
        {
          name: "EN規格（EU Harmonised Standards）",
          notes: "EU MDR整合規格をスイスでも適合性推定の根拠として利用。",
        },
      ],
    },

    recentDevelopments: [
      {
        date: "2026-03",
        title: "Bilaterals III パッケージ署名",
        description:
          "2026年3月、スイスとEUがBilaterals IIIパッケージに署名。MRA（相互承認協定）の医療機器章の復活が含まれ、今後の批准プロセスでスイス・EU間の医療機器の相互承認が再開される見込み。",
      },
      {
        date: "2026-07",
        title: "swissdamed 機器登録義務化",
        description:
          "2026年7月よりswissdamedでの医療機器登録が義務化。全クラスの機器がswissdamedに登録される。",
      },
      {
        date: "2025-08",
        title: "swissdamed UDI/Devicesモジュール稼働",
        description:
          "swissdamedのUDI/Devicesモジュールが2025年8月に稼働開始。UDI-DIデータの登録が可能に。",
      },
      {
        date: "2025-01",
        title: "MedDO/IvDO改正",
        description:
          "2025年1月にMedDO（SR 812.213）およびIvDO（SR 812.219）の改正が施行。移行期限の調整、CH-REP要件の明確化等。",
      },
    ],

    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- Mexico ---
  // =========================================================================
  {
    code: "MEX",
    country: "メキシコ",
    countryEn: "Mexico",
    region: "Latam",
    flag: "🇲🇽",

    legalSystemOverview: {
      type: "連邦制（Federal system）",
      description:
        "メキシコの医療機器規制はLey General de Salud（一般保健法）を根幹とし、COFEPRIS（連邦衛生リスク対策委員会）が主管当局として市販前登録・市販後監視を担う。2026年1月の大規模法改正により規制枠組みが刷新。3クラス制（Class I/II/III）を採用し、メキシコ薬局方（FEUM）の23分類ルールに基づく。2025年9月に簡略化経路（Abbreviated pathway）が導入され、参照国認可を活用した迅速な登録が可能に。",
      keyCharacteristics: [
        "COFEPRIS による一元的な連邦規制体制",
        "リスクベースの3クラス分類（Class I/II/III）",
        "標準経路と簡略化経路（Abbreviated pathway, 2025年9月導入）",
        "DIGIPRIS電子申請システムの義務化",
        "MDSAP Affiliate Member — MDSAP監査報告書をGMP代替として受入",
        "NOM-241-SSA1-2025によるGMP要件の改訂",
      ],
    },

    authorities: [
      {
        name: "COFEPRIS",
        fullName: "Federal Commission for the Protection against Sanitary Risks",
        localName: "Comisión Federal para la Protección contra Riesgos Sanitarios",
        role: "医療機器の市販前登録（Registro Sanitario）・市販後監視・GMP査察・リコール管理。主管当局。",
        url: "https://www.gob.mx/cofepris",
        isPrimary: true,
      },
    ],

    notifiedBodies: {
      system: "第三者試験機関（Terceros Autorizados）",
      description:
        "COFEPRISが認定する第三者試験機関（Terceros Autorizados）が安全性・性能試験を実施。ただし最終的な登録判断はCOFEPRISが行う。EU型のNotified Body制度とは異なる。",
      bodies: [],
    },

    deviceDefinition: {
      legalDefinition:
        "Ley General de Salud Art. 262に定義。疾病の診断・治療・リハビリ・予防等を目的とする機器・装置・器具・材料等。",
      scope:
        "IVD（体外診断用医療機器）も適用範囲に含む。Class II/IIIに分類されるIVDが多い。",
      notes:
        "2026年1月のLey General de Salud改正で定義の明確化が行われた。SaMD・AI医療機器の取扱いは今後のガイダンスで明確化予定。",
    },

    primaryLaw: {
      title: "Ley General de Salud (General Health Law)",
      originalTitle: "Ley General de Salud",
      enacted: "1984-02-07",
      lastAmended: "2026-01-15",
      url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LGS.pdf",
      description:
        "メキシコの保健・医療全般を規律する基本法。医療機器はTitle XII（Sanitary Control of Products and Services）で規定。2026年1月15日の大規模改正で医療機器規制の近代化が図られた。",
    },

    implementingRegulations: [
      {
        title: "NOM-241-SSA1-2025 — Good Manufacturing Practices for Medical Devices",
        date: "2025-04",
        url: "https://dof.gob.mx/nota_detalle.php?codigo=NOM-241-SSA1-2025",
        description:
          "医療機器のGMP要件を規定するメキシコ公式規格。2025年4月改訂版。MDSAP監査報告書をGMP代替として受入可能とする規定を含む。旧NOM-241-SSA1-2012を置換。UDI条項は削除（一時停止）。",
        category: "GMP",
      },
      {
        title: "Reglamento de Insumos para la Salud (Health Supplies Regulation)",
        date: "要確認",
        url: "https://www.diputados.gob.mx/LeyesBiblio/regley/Reg_LGS_MIS.pdf",
        description:
          "Ley General de Saludの施行規則。医療機器の分類・登録手続き・表示要件等の詳細を規定。",
        category: "施行規則",
      },
    ],

    relatedLaws: [
      {
        title: "Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)",
        category: "データ保護",
        enacted: "2010",
        url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf",
        relevance:
          "民間部門における個人データ保護法。コネクテッドデバイス・SaMDが取り扱う個人医療情報のプライバシー要件に適用。",
      },
    ],

    classification: {
      system: "3クラス制（Class I/II/III）",
      basis: "リスクベース。メキシコ薬局方（FEUM: Farmacopea de los Estados Unidos Mexicanos）の23分類ルールに基づく。意図する用途・侵襲性・使用期間等に基づきクラスを決定。",
      classes: [
        {
          name: "Class I",
          nameJa: "クラスI",
          riskLevel: "低",
          description: "低リスク機器。登録手続きが最も簡略。",
          examples: ["弾性包帯", "舌圧子", "聴診器", "歩行補助器具", "外科用手袋"],
          approvalPath: "Registro Sanitario（標準 or 簡略化経路）",
        },
        {
          name: "Class II",
          nameJa: "クラスII",
          riskLevel: "中",
          description: "中リスク機器。臨床データ・性能試験データの提出が必要な場合あり。",
          examples: ["超音波診断装置", "血圧計", "輸液ポンプ", "補聴器", "歯科用材料"],
          approvalPath: "Registro Sanitario（標準 or 簡略化経路）",
        },
        {
          name: "Class III",
          nameJa: "クラスIII",
          riskLevel: "高",
          description: "高リスク機器。最も厳格な審査。臨床データの提出が必要。",
          examples: ["冠動脈ステント", "人工関節", "埋込み型ペースメーカー", "人工心臓弁", "薬剤溶出ステント"],
          approvalPath: "Registro Sanitario（標準経路、臨床データ必須）",
        },
      ],
      rules: [
        "メキシコ薬局方（FEUM）の23分類ルールに基づく",
        "IVDもClass I〜IIIに分類",
        "分類に疑義がある場合はCOFEPRISに事前相談可",
      ],
      totalProductCodes: "GMDN準拠（メキシコ薬局方の分類コードも併用）",
    },

    conformityAssessment: {
      overview:
        "全クラスの医療機器にRegistro Sanitario（衛生登録）が必要。2025年9月に簡略化経路（Abbreviated pathway）が導入され、参照国（FDA/EU/Health Canada等）の認可を活用した迅速登録が可能に。登録有効期間は5年。MDMA手数料はClass I MXN 12,374〜Class III MXN 23,098。GMP適合（NOM-241-SSA1-2025またはMDSAP監査報告書）が前提条件。",
      routes: [
        {
          name: "Standard Pathway (Registro Sanitario)",
          nameJa: "標準経路（Registro Sanitario）",
          applicableClasses: ["Class I", "Class II", "Class III"],
          description:
            "全クラスに適用可能な標準的な登録経路。技術文書・安全性/性能データ・GMP証明・ラベリング等を提出。Class IIIは臨床データが必須。",
          subtypes: [
            { name: "新規登録", description: "初回のRegistro Sanitario取得。" },
            { name: "更新（5年ごと）", description: "有効期限前に更新申請。" },
            { name: "変更届", description: "製品仕様・製造所・ラベリング等の変更時。" },
          ],
          avgReviewTime: "Class I: 約60営業日 / Class II: 約90営業日 / Class III: 約120営業日（目安）",
          avgReviewTimeSource: "https://www.gob.mx/tramites/ficha/registro-sanitario-de-dispositivos-medicos/COFEPRIS",
          fee: "Class I: MXN 12,374 / Class II: MXN 18,560 / Class III: MXN 23,098",
          feeSource: "https://www.gob.mx/tramites/ficha/registro-sanitario-de-dispositivos-medicos/COFEPRIS",
          url: "https://www.gob.mx/tramites/ficha/registro-sanitario-de-dispositivos-medicos/COFEPRIS",
        },
        {
          name: "Abbreviated Pathway (Simplified Registration)",
          nameJa: "簡略化経路（2025年9月導入）",
          applicableClasses: ["Class I", "Class II", "Class III"],
          description:
            "2025年9月に導入された新経路。FDA・EU（CE）・Health Canada等の参照国認可を有する機器について、一部の技術文書評価を省略し迅速にRegistro Sanitarioを交付。",
          subtypes: [],
          avgReviewTime: null,
          avgReviewTimeSource: null,
          fee: "標準経路と同額",
          feeSource: "https://www.gob.mx/tramites/ficha/registro-sanitario-de-dispositivos-medicos/COFEPRIS",
          url: "https://www.gob.mx/tramites/ficha/registro-sanitario-de-dispositivos-medicos/COFEPRIS",
        },
      ],
    },

    electronicSubmission: {
      system: "DIGIPRIS",
      url: "https://digipris.cofepris.gob.mx/login",
      description:
        "COFEPRISの電子申請プラットフォーム。Registro Sanitario申請・変更届・更新等をオンラインで提出。",
      mandatory: true,
    },

    udi: {
      required: false,
      system: "未導入（一時停止中）",
      description:
        "NOM-241-SSA1-2025の改訂でUDI条項が削除され、UDI制度は一時停止中。将来的な導入の方向性は維持されているが、具体的な再開時期は未定。",
      url: null,
      timeline: "未定（NOM-241-SSA1-2025でUDI条項削除、一時停止）",
    },

    postMarket: {
      adverseEventReporting: {
        system: "COFEPRIS Tecnovigilancia",
        mandatory: true,
        url: "https://www.gob.mx/cofepris/acciones-y-programas/tecnovigilancia",
        description:
          "製造業者・輸入業者・医療機関はCOFEPRISにテクノビジランス（有害事象）報告を行う義務がある。重篤事象は発生認知後10日以内に報告。",
      },
      recalls: {
        authority: "COFEPRIS",
        description:
          "COFEPRISがリコール・FSCA（Field Safety Corrective Action）を監督。",
        url: "https://www.gob.mx/cofepris/acciones-y-programas/tecnovigilancia",
      },
      surveillance:
        "テクノビジランスプログラムに基づく市販後監視。製造業者は定期安全性報告書の提出が求められる場合あり。",
    },

    certificateOfFreeSale: {
      available: true,
      issuingAuthority: "COFEPRIS",
      name: "Certificado de Libre Venta",
      description:
        "COFEPRISがメキシコで合法的に流通している医療機器のCFSを発行。輸出目的で利用。",
      processingTime: "要確認",
      url: "https://www.gob.mx/cofepris/acciones-y-programas/dispositivos-medicos",
    },

    reimbursement: {
      system: "公的医療保険（IMSS/ISSSTE/INSABI後継）+ 民間保険",
      authority: "IMSS / ISSSTE / COFEPRIS",
      description:
        "メキシコの公的医療はIMSS（社会保険庁）・ISSSTE（公務員保険）等が運営。医療機器の公的調達はCompraNet等の電子調達システムを通じて実施。保険償還はCuadro Básico y Catálogo de Insumos del Sector Salud（基本医薬品・医療材料カタログ）に収載されていることが条件。",
      codingSystems: [
        "Cuadro Básico y Catálogo de Insumos del Sector Salud",
      ],
      url: "https://www.gob.mx/insabi",
    },

    marketingRules: {
      authority: "COFEPRIS",
      description:
        "Registro Sanitario未取得の医療機器の広告・販売は禁止。広告はCOFEPRISの広告規制に適合する必要がある。",
      keyRules: [
        "Registro Sanitario未取得機器の広告・販売禁止",
        "虚偽・誤解を招く広告の禁止",
        "医療機器のラベリングはスペイン語必須",
      ],
    },

    mdsap: {
      status: "Affiliate Member",
      description:
        "メキシコはMDSAPのAffiliate Memberとして参加。2025年11月にMDSAP監査報告書の同等性を確認し、NOM-241-SSA1-2025に基づきMDSAP監査報告書をGMP証明の代替として受入可能。",
    },

    internationalStandards: {
      iso13485: {
        accepted: true,
        notes: "NOM-241-SSA1-2025のGMP要件はISO 13485に整合。MDSAP監査報告書もGMP代替として受入。",
      },
      iso14971: {
        accepted: true,
        notes: "リスクマネジメント。技術文書のリスク評価に適用。",
      },
      iec62304: {
        accepted: true,
        notes: "ソフトウェアライフサイクル。SaMD含むソフトウェア機器に適用。",
      },
      iec60601: {
        accepted: true,
        notes: "医用電気機器の安全・性能要求。NOM規格でも参照。",
      },
      others: [
        {
          name: "ISO 10993シリーズ（生物学的安全性評価）",
          notes: "生体接触医療機器の生物学的安全性評価に必須。",
        },
        {
          name: "NOM規格（Normas Oficiales Mexicanas）",
          notes: "メキシコ固有の公式規格。NOM-241-SSA1-2025（GMP）等。国際規格と併用。",
        },
      ],
    },

    recentDevelopments: [
      {
        date: "2026-01",
        title: "Ley General de Salud 大規模改正",
        description:
          "2026年1月15日にLey General de Salud（一般保健法）の大規模改正が施行。医療機器規制の近代化・規制枠組みの刷新が図られた。",
      },
      {
        date: "2025-11",
        title: "MDSAP同等性確認",
        description:
          "COFEPRISがMDSAP監査報告書の同等性を正式確認。NOM-241-SSA1-2025に基づきGMP証明の代替として受入開始。",
      },
      {
        date: "2025-09",
        title: "簡略化経路（Abbreviated pathway）導入",
        description:
          "参照国（FDA/EU/Health Canada等）の認可を活用した簡略化登録経路が導入。市場アクセスの迅速化を図る。",
      },
      {
        date: "2025-04",
        title: "NOM-241-SSA1-2025 改訂",
        description:
          "医療機器GMP規格の改訂版が発効。MDSAP監査報告書のGMP代替受入規定を含む。UDI条項は削除（一時停止）。",
      },
    ],

    lastUpdated: "2026-04-02",
    verified: null,
  },
];

// ===========================================================================
// ヘルパー関数
// ===========================================================================

/** 国コードでプロファイル検索 */
export function findProfileByCode(code) {
  return COUNTRY_PROFILES.find((p) => p.code === code) ?? null;
}

/** 地域でグループ化 */
export function groupProfilesByRegion() {
  const map = {};
  for (const p of COUNTRY_PROFILES) {
    (map[p.region] ??= []).push(p);
  }
  return map;
}
