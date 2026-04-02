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
  MYS: "🇲🇾", SAU: "🇸🇦", ZAF: "🇿🇦", CHE: "🇨🇭", MEX: "🇲🇽",
  NZL: "🇳🇿", PHL: "🇵🇭", ARG: "🇦🇷", TUR: "🇹🇷",
  ARE: "🇦🇪",
  SWE: "🇸🇪", DNK: "🇩🇰", NOR: "🇳🇴", FIN: "🇫🇮", IRL: "🇮🇪", AUT: "🇦🇹",
  RUS: "🇷🇺", POL: "🇵🇱", KWT: "🇰🇼", QAT: "🇶🇦",
  ISR: "🇮🇱", EGY: "🇪🇬", COL: "🇨🇴", CHL: "🇨🇱",
  PAK: "🇵🇰", KEN: "🇰🇪", NGA: "🇳🇬", MAR: "🇲🇦",
  JOR: "🇯🇴", BHR: "🇧🇭", OMN: "🇴🇲",
  PER: "🇵🇪", ECU: "🇪🇨", CRI: "🇨🇷",
  BGD: "🇧🇩", LKA: "🇱🇰", KHM: "🇰🇭", MMR: "🇲🇲", LAO: "🇱🇦", MNG: "🇲🇳",
  URY: "🇺🇾", PRY: "🇵🇾", DOM: "🇩🇴", PAN: "🇵🇦", GTM: "🇬🇹", HND: "🇭🇳",
  TZA: "🇹🇿", ETH: "🇪🇹", UGA: "🇺🇬", RWA: "🇷🇼", SEN: "🇸🇳", GHA: "🇬🇭",
  CZE: "🇨🇿", HUN: "🇭🇺", PRT: "🇵🇹", GRC: "🇬🇷", UKR: "🇺🇦", HKG: "🇭🇰",
  TUN: "🇹🇳", DZA: "🇩🇿", IRQ: "🇮🇶", LBN: "🇱🇧", NPL: "🇳🇵", IRN: "🇮🇷",
  VEN: "🇻🇪", BOL: "🇧🇴", SLV: "🇸🇻", CUB: "🇨🇺",
  BRN: "🇧🇳", FJI: "🇫🇯", KAZ: "🇰🇿", UZB: "🇺🇿",
  NLD: "🇳🇱", BEL: "🇧🇪", ESP: "🇪🇸", ITA: "🇮🇹", ROU: "🇷🇴", BGR: "🇧🇬", HRV: "🇭🇷",
  SVK: "🇸🇰", LTU: "🇱🇹", LVA: "🇱🇻", EST: "🇪🇪", MLT: "🇲🇹", MAC: "🇲🇴",
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
  // --- Sweden ---
  // =========================================================================
  {
    code: "SWE",
    country: "スウェーデン",
    countryEn: "Sweden",
    region: "Europe",
    flag: "🇸🇪",

    legalSystemOverview: {
      type: "EU加盟国（MDR/IVDR 直接適用）",
      description:
        "スウェーデンはEU加盟国であり、Regulation (EU) 2017/745（MDR）および Regulation (EU) 2017/746（IVDR）が直接適用される。国内補完法として Act (2021:600) with supplementary provisions to the EU Regulations on medical devices および Ordinance (2021:631) が制定されている。Läkemedelsverket（スウェーデン医薬品庁 / Swedish Medical Products Agency, MPA）がNCA（National Competent Authority）として市場監視・ビジランス・臨床試験監督を担う。",
      keyCharacteristics: [
        "EU MDR/IVDR が直接適用",
        "Läkemedelsverket がNCAとして市場監視・ビジランスを担当",
        "Act (2021:600) + Ordinance (2021:631) による国内補完",
        "ラベリング・使用説明書はスウェーデン語必須",
        "21の県議会（Region）が医療サービス提供・医療機器調達を管轄",
        "FINOSE/JNHB（北欧HTA協力）への参加",
      ],
    },

    authorities: [
      { name: "Läkemedelsverket (MPA)", fullName: "Swedish Medical Products Agency", localName: "Läkemedelsverket", role: "NCA: 医療機器の市場監視・ビジランス・臨床試験監督・登録管理", url: "https://www.lakemedelsverket.se/en/medical-devices", isPrimary: true },
      { name: "TLV", fullName: "Dental and Pharmaceutical Benefits Agency", localName: "Tandvårds- och läkemedelsförmånsverket", role: "医療機器の償還評価（消耗品）・HTA評価", url: "https://www.tlv.se/in-english.html", isPrimary: false },
      { name: "IVO", fullName: "Health and Social Care Inspectorate", localName: "Inspektionen för vård och omsorg", role: "医療機関における医療機器使用の監督", url: "https://www.ivo.se/en/", isPrimary: false },
    ],

    notifiedBodies: {
      system: "EU MDR Notified Body 制度（スウェーデン国内に2機関指定）",
      description: "Intertek Medical Notified Body AB（NB 2862）およびRISE Medical Notified Body AB（NB 3033）がMDR指定。いずれもIVDR未指定。",
      bodies: [
        { nb: "2862", name: "Intertek Medical Notified Body AB", url: "https://www.intertek.se/", mdr: true, ivdr: false },
        { nb: "3033", name: "RISE Medical Notified Body AB", url: "https://www.ri.se/", mdr: true, ivdr: false },
      ],
    },

    deviceDefinition: {
      legalDefinition: "EU MDR Article 2(1) の定義がそのまま適用。",
      scope: "IVD は IVDR で別途規定。SaMD・AI/ML 搭載機器も対象。美容目的製品（Annex XVI）も適用。",
      notes: "MDR の定義がそのまま国内法に適用。追加的な定義変更なし。",
    },

    primaryLaw: {
      title: "Regulation (EU) 2017/745 — Medical Devices Regulation (MDR)",
      originalTitle: null,
      enacted: "2017（EU採択）/ 2021年5月26日適用",
      lastAmended: "2025（Regulation (EU) 2025/2457）",
      url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32017R0745",
      description: "EU MDR がスウェーデンに直接適用。Act (2021:600) が国内補完法。",
    },

    implementingRegulations: [
      { title: "Act (2021:600) with supplementary provisions to the EU Regulations on medical devices", date: "2021-05-26", url: "https://www.lakemedelsverket.se/en/medical-devices/regulation", description: "MDR/IVDR 国内補完法。NCA権限・罰則・言語要件・登録義務。", category: "国内補完法" },
      { title: "Ordinance (2021:631)", date: "2021-05-26", url: "https://www.lakemedelsverket.se/en/medical-devices/regulation", description: "Act (2021:600) の下位法令。", category: "国内補完法令" },
      { title: "HSLF-FS 2021:32（MPA Regulation）", date: "2021", url: "https://www.lakemedelsverket.se/en/medical-devices/regulation", description: "登録手続・言語要件の具体化。", category: "当局規則" },
    ],

    relatedLaws: [
      { title: "GDPR (Regulation (EU) 2016/679)", category: "データ保護", enacted: "2018", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679", relevance: "健康データに適用。Patientdatalagen も併存。" },
      { title: "AI Act — Regulation (EU) 2024/1689", category: "人工知能", enacted: "2024", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32024R1689", relevance: "AI搭載医療機器はHigh-Risk AI System。" },
    ],

    classification: {
      system: "EU MDR 4クラス制（Class I / IIa / IIb / III）",
      basis: "EU MDR Annex VIII の22分類規則がそのまま適用。",
      classes: [
        { name: "Class I", nameJa: "クラスI", riskLevel: "低", description: "低リスク。自己宣言（Im/Is/Ir除く）。", examples: ["弾性包帯", "聴診器", "車椅子"], approvalPath: "自己宣言" },
        { name: "Class IIa", nameJa: "クラスIIa", riskLevel: "中低", description: "中低リスク。NB関与。", examples: ["補聴器", "超音波装置", "コンタクトレンズ"], approvalPath: "Notified Body審査" },
        { name: "Class IIb", nameJa: "クラスIIb", riskLevel: "中高", description: "中高リスク。NB詳細審査。", examples: ["人工呼吸器", "血液透析装置", "輸液ポンプ"], approvalPath: "Notified Body審査" },
        { name: "Class III", nameJa: "クラスIII", riskLevel: "高", description: "最高リスク。", examples: ["人工心臓弁", "冠動脈ステント", "乳房インプラント"], approvalPath: "NB審査 + Expert Panel相談" },
      ],
      rules: ["EU MDR Annex VIII の22分類規則を直接適用"],
      totalProductCodes: "EU CND コード",
    },

    conformityAssessment: {
      overview: "EU MDR に基づく適合性評価がそのまま適用。国内追加の市販前審査なし。Läkemedelsverket への事業者登録が必要。",
      routes: [{ name: "EU MDR Conformity Assessment", nameJa: "EU MDR 適合性評価", applicableClasses: ["全クラス"], description: "EU MDR Annex IX〜XI。詳細はEUプロファイル参照。", subtypes: [], avgReviewTime: "EUプロファイル参照", fee: "Notified Body により異なる", url: "https://www.lakemedelsverket.se/en/medical-devices/sale/market-access" }],
    },

    electronicSubmission: { system: "EUDAMED + Läkemedelsverket 国内登録", url: "https://www.lakemedelsverket.se/en/medical-devices/manufacture/registration/registration-at-the-swedish-mpa", description: "EUDAMED + 国内事業者登録。EUDAMED 4モジュール義務化: 2026年5月28日。", mandatory: true },
    udi: { required: true, system: "EU UDI System — EUDAMED", description: "EU MDR Article 27-29 UDI 要件がそのまま適用。", url: "https://ec.europa.eu/tools/eudamed/", timeline: "EUDAMED義務化: 2026年5月28日" },

    postMarket: {
      adverseEventReporting: { system: "EU Vigilance System — Läkemedelsverket", mandatory: true, url: "https://www.lakemedelsverket.se/en/medical-devices", description: "重篤有害事象をLäkemedelsverketに報告義務。MDR Article 87-92。" },
      recalls: { authority: "Läkemedelsverket", description: "FSCA/FSNはLäkemedelsverketに通知。", url: "https://www.lakemedelsverket.se/en/medical-devices" },
      surveillance: "EU MDR PMS/PSUR/PMCF要件がそのまま適用。",
    },

    certificateOfFreeSale: { available: true, issuingAuthority: "Läkemedelsverket", name: "Certificate of Free Sale (CFS)", description: "Läkemedelsverket がCFSを発行。", processingTime: "要確認", url: "https://www.lakemedelsverket.se/en/medical-devices" },

    reimbursement: {
      system: "県議会（Region）ベース + TLV 償還評価",
      authority: "TLV / 21の県議会（Region）",
      description: "21の県議会（Region）が医療提供・調達を管轄。TLV は消耗品（ストーマ用品、自己測定機器等）の償還決定・HTA評価。病院用高額機器は各Region独自判断。JNHB（旧FINOSE）参加。",
      codingSystems: ["TLV 製品グループコード", "NordDRG"],
      url: "https://www.tlv.se/in-english.html",
    },

    marketingRules: {
      authority: "Läkemedelsverket",
      description: "MDR Article 7 虚偽広告禁止。Act (2021:600) + LVFS 2009:6 に基づく広告規制。",
      keyRules: ["スウェーデン語ラベリング・IFU必須", "当局提出はスウェーデン語/英語", "MDR Article 7 虚偽広告禁止"],
    },

    mdsap: { status: "非参加", description: "EU加盟国としてMDSAP非参加。" },

    internationalStandards: {
      iso13485: { accepted: true, notes: "EU MDR QMS要件に基づき実質必須。EN ISO 13485:2016。" },
      iso14971: { accepted: true, notes: "EN ISO 14971:2019 + A11:2021。" },
      iec62304: { accepted: true, notes: "EN IEC 62304:2006 + A1:2015。" },
      iec60601: { accepted: true, notes: "EN IEC 60601 シリーズ。" },
      others: [],
    },

    recentDevelopments: [
      { date: "2024", title: "JNHB（旧FINOSE）拡大", description: "FINOSEが2023年デンマーク、2024年アイスランド追加でJNHBに改称。" },
      { date: "2024", title: "EUDAMED義務化準備", description: "EUDAMED 4モジュール2026年5月28日義務化。" },
    ],

    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- Denmark ---
  // =========================================================================
  {
    code: "DNK",
    country: "デンマーク",
    countryEn: "Denmark",
    region: "Europe",
    flag: "🇩🇰",

    legalSystemOverview: {
      type: "EU加盟国（MDR/IVDR 直接適用）",
      description: "デンマークはEU加盟国。MDR/IVDR直接適用。DKMA（Lægemiddelstyrelsen）がNCA。Executive Order on Medical Devicesが国内補完法。5地域（Region）が公立病院の機器調達を管轄。",
      keyCharacteristics: [
        "EU MDR/IVDR 直接適用",
        "DKMA がNCA",
        "デンマーク語ラベリング・IFU原則必須（言語免除あり）",
        "Behandlingsrådet がHTA評価",
        "Amgros が5地域の共同調達",
        "JNHB 2023年参加",
      ],
    },

    authorities: [
      { name: "DKMA", fullName: "Danish Medicines Agency", localName: "Lægemiddelstyrelsen", role: "NCA: 市場監視・ビジランス・臨床試験・登録・言語免除決定", url: "https://laegemiddelstyrelsen.dk/en/devices/", isPrimary: true },
      { name: "Behandlingsrådet", fullName: "Health Technology Council", localName: "Behandlingsrådet", role: "医療機器・技術のHTA評価・推奨", url: "https://behandlingsraadet.dk/", isPrimary: false },
      { name: "Amgros", fullName: "Amgros I/S", localName: null, role: "5地域の公立病院向け医薬品・機器の共同調達", url: "https://amgros.dk/medical-devices/", isPrimary: false },
    ],

    notifiedBodies: {
      system: "EU MDR Notified Body（デンマーク国内1機関）",
      description: "TÜV SÜD Danmark（NB 2443）がMDR指定。IVDR未指定。",
      bodies: [{ nb: "2443", name: "TÜV SÜD Danmark", url: "https://www.tuvsud.com/", mdr: true, ivdr: false }],
    },

    deviceDefinition: { legalDefinition: "EU MDR Article 2(1) がそのまま適用。", scope: "IVD は IVDR。SaMD・AI/ML も対象。", notes: "追加定義変更なし。" },

    primaryLaw: { title: "Regulation (EU) 2017/745 — MDR", originalTitle: null, enacted: "2017 / 2021年5月26日適用", lastAmended: "2025", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32017R0745", description: "EU MDR 直接適用。Executive Order on Medical Devicesが国内補完法。" },

    implementingRegulations: [
      { title: "Executive Order on Medical Devices (Bekendtgørelse om medicinsk udstyr)", date: "2021", url: "https://laegemiddelstyrelsen.dk/en/devices/legislation-and-guidance/legislation/", description: "デンマーク語情報提供義務・言語免除手続等。", category: "国内補完法令" },
    ],

    relatedLaws: [
      { title: "GDPR", category: "データ保護", enacted: "2018", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679", relevance: "健康データに適用。Databeskyttelsesloven併存。" },
    ],

    classification: {
      system: "EU MDR 4クラス制",
      basis: "EU MDR Annex VIII。",
      classes: [
        { name: "Class I", nameJa: "クラスI", riskLevel: "低", description: "自己宣言。", examples: ["弾性包帯", "聴診器"], approvalPath: "自己宣言" },
        { name: "Class IIa", nameJa: "クラスIIa", riskLevel: "中低", description: "NB関与。", examples: ["補聴器", "超音波装置"], approvalPath: "NB審査" },
        { name: "Class IIb", nameJa: "クラスIIb", riskLevel: "中高", description: "NB詳細審査。", examples: ["人工呼吸器", "輸液ポンプ"], approvalPath: "NB審査" },
        { name: "Class III", nameJa: "クラスIII", riskLevel: "高", description: "最も厳格。", examples: ["人工心臓弁", "冠動脈ステント"], approvalPath: "NB + Expert Panel" },
      ],
      rules: ["EU MDR Annex VIII 直接適用"],
      totalProductCodes: "EU CND",
    },

    conformityAssessment: {
      overview: "EU MDR 適合性評価がそのまま適用。国内追加審査なし。",
      routes: [{ name: "EU MDR Conformity Assessment", nameJa: "EU MDR 適合性評価", applicableClasses: ["全クラス"], description: "Annex IX〜XI。EUプロファイル参照。", subtypes: [], avgReviewTime: "EUプロファイル参照", fee: "NBにより異なる", url: "https://laegemiddelstyrelsen.dk/en/devices/" }],
    },

    electronicSubmission: { system: "EUDAMED + DKMA国内登録", url: "https://laegemiddelstyrelsen.dk/en/devices/registration-and-marketing/", description: "EUDAMED + DKMA国内登録。EUDAMED義務化: 2026年5月。", mandatory: true },
    udi: { required: true, system: "EU UDI — EUDAMED", description: "MDR UDI要件がそのまま適用。", url: "https://ec.europa.eu/tools/eudamed/", timeline: "EUDAMED義務化: 2026年5月28日" },

    postMarket: {
      adverseEventReporting: { system: "EU Vigilance — DKMA", mandatory: true, url: "https://laegemiddelstyrelsen.dk/en/devices/", description: "重篤有害事象をDKMAに報告。供給中断・停止の報告義務も。" },
      recalls: { authority: "DKMA", description: "FSCA/FSNはDKMAに通知。", url: "https://laegemiddelstyrelsen.dk/en/devices/" },
      surveillance: "EU MDR PMS/PSUR/PMCF適用。",
    },

    certificateOfFreeSale: { available: true, issuingAuthority: "DKMA", name: "CFS", description: "DKMAがCFSを発行。", processingTime: "要確認", url: "https://laegemiddelstyrelsen.dk/en/devices/" },

    reimbursement: {
      system: "5地域 + Amgros共同調達 + 市町村（Kommune）補助",
      authority: "Behandlingsrådet（HTA）/ Amgros（調達）/ 5地域 / 市町村",
      description: "病院用機器は5地域がAmgros経由で共同調達。BehandlingsrådetがHTA評価。エンドユーザー向けは市町村が償還。企業申請による一般償還制度はない。JNHB参加。",
      codingSystems: ["DRG", "ISO補助機器分類"],
      url: "https://behandlingsraadet.dk/",
    },

    marketingRules: {
      authority: "DKMA",
      description: "デンマーク語ラベリング・IFU原則必須。DKMA申請で言語免除可（専門家向け・英語）。",
      keyRules: ["デンマーク語ラベリング・IFU原則必須", "DKMA申請で言語免除可", "インプラントカードもデンマーク語"],
    },

    mdsap: { status: "非参加", description: "EU加盟国としてMDSAP非参加。" },
    internationalStandards: {
      iso13485: { accepted: true, notes: "実質必須。" }, iso14971: { accepted: true, notes: "EN ISO 14971:2019 + A11:2021。" },
      iec62304: { accepted: true, notes: "EN IEC 62304:2006 + A1:2015。" }, iec60601: { accepted: true, notes: "EN IEC 60601シリーズ。" }, others: [],
    },

    recentDevelopments: [
      { date: "2023", title: "JNHB参加", description: "北欧HTA協力JNHBに参加。" },
      { date: "2024", title: "Behandlingsrådet運用開始", description: "医療機器HTA評価開始。" },
    ],

    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- Norway ---
  // =========================================================================
  {
    code: "NOR",
    country: "ノルウェー",
    countryEn: "Norway",
    region: "Europe",
    flag: "🇳🇴",

    legalSystemOverview: {
      type: "EEA加盟国（MDR/IVDR がEEA経由で適用）",
      description: "ノルウェーはEU非加盟だが、EEA協定を通じてMDR/IVDRが国内法に組み込まれている。Lov om medisinsk utstyr（LOV-2020-06-07-37）で国内実施。DMP（旧NoMA/SLV）がNCA。",
      keyCharacteristics: [
        "EEA経由でMDR/IVDR適用",
        "DMP（旧NoMA/SLV）がNCA",
        "ノルウェー語ラベリング・IFU必須",
        "Nye MetoderがHTA評価",
        "HELFO Blue Prescription制度",
        "EUDAMEDアクセス制限（EEA調整中）",
      ],
    },

    authorities: [
      { name: "DMP", fullName: "Norwegian Medical Products Agency", localName: "Direktoratet for medisinske produkter（旧SLV）", role: "NCA: 市場監視・ビジランス・臨床試験・HTA", url: "https://www.dmp.no/en/medical-devices", isPrimary: true },
      { name: "Nye Metoder", fullName: "National System for Managed Introduction of New Health Technologies", localName: "Nye metoder", role: "新技術導入評価", url: "https://www.nyemetoder.no/en/english/", isPrimary: false },
      { name: "HELFO", fullName: "Norwegian Health Economics Administration", localName: null, role: "Blue Prescription償還管理", url: "https://www.helfo.no/", isPrimary: false },
    ],

    notifiedBodies: {
      system: "EU MDR Notified Body（ノルウェー国内1機関）",
      description: "DNV Product Assurance AS（NB 2460）がMDR指定。IVDR未指定。EEA経由NANDO登録。",
      bodies: [{ nb: "2460", name: "DNV Product Assurance AS", url: "https://www.dnv.com/", mdr: true, ivdr: false }],
    },

    deviceDefinition: { legalDefinition: "EU MDR Article 2(1) がEEA経由で適用。", scope: "IVD は IVDR。SaMD・AI/ML も対象。", notes: "独自追加定義なし。" },

    primaryLaw: { title: "Lov om medisinsk utstyr (Medical Devices Act)", originalTitle: "LOV-2020-06-07-37", enacted: "2020-06-07", lastAmended: "2024", url: "https://www.dmp.no/en/medical-devices/guidance-and-regulations/the-legislation-for-medical-devices", description: "MDR/IVDRをノルウェー法に組み込む国内法。" },

    implementingRegulations: [
      { title: "Forskrift om medisinsk utstyr", date: "2021", url: "https://www.dmp.no/en/medical-devices/guidance-and-regulations/the-legislation-for-medical-devices", description: "MDR/IVDR国内実施規則。言語要件・登録手続。", category: "国内実施規則" },
    ],

    relatedLaws: [
      { title: "Personopplysningsloven + GDPR", category: "データ保護", enacted: "2018", url: "https://lovdata.no/dokument/NL/lov/2018-06-15-38", relevance: "EEA経由GDPR適用。" },
    ],

    classification: {
      system: "EU MDR 4クラス制（EEA経由）",
      basis: "EU MDR Annex VIII をEEA経由で適用。",
      classes: [
        { name: "Class I", nameJa: "クラスI", riskLevel: "低", description: "自己宣言。", examples: ["弾性包帯", "聴診器"], approvalPath: "自己宣言" },
        { name: "Class IIa", nameJa: "クラスIIa", riskLevel: "中低", description: "NB関与。", examples: ["補聴器", "超音波装置"], approvalPath: "NB審査" },
        { name: "Class IIb", nameJa: "クラスIIb", riskLevel: "中高", description: "NB詳細審査。", examples: ["人工呼吸器", "輸液ポンプ"], approvalPath: "NB審査" },
        { name: "Class III", nameJa: "クラスIII", riskLevel: "高", description: "最も厳格。", examples: ["人工心臓弁", "冠動脈ステント"], approvalPath: "NB + Expert Panel" },
      ],
      rules: ["EU MDR Annex VIII EEA経由適用"],
      totalProductCodes: "EU CND",
    },

    conformityAssessment: {
      overview: "EU MDR 適合性評価がEEA経由で適用。国内追加審査なし。DMP登録必要。",
      routes: [{ name: "EU MDR Conformity Assessment (EEA)", nameJa: "EU MDR 適合性評価（EEA経由）", applicableClasses: ["全クラス"], description: "Annex IX〜XI。EUプロファイル参照。", subtypes: [], avgReviewTime: "EUプロファイル参照", fee: "NBにより異なる", url: "https://www.dmp.no/en/medical-devices" }],
    },

    electronicSubmission: { system: "EUDAMED（アクセス調整中）+ DMP国内登録", url: "https://www.dmp.no/en/medical-devices", description: "EU非加盟のためEUDAMEDアクセスに制限。DMP国内登録必要。", mandatory: true },
    udi: { required: true, system: "EU UDI（EEA経由）", description: "MDR UDI要件がEEA経由で適用。", url: "https://www.dmp.no/en/medical-devices", timeline: "EEA調整次第" },

    postMarket: {
      adverseEventReporting: { system: "EU Vigilance — DMP", mandatory: true, url: "https://www.dmp.no/en/medical-devices", description: "重篤有害事象をDMPに報告。MDR Article 87-92。" },
      recalls: { authority: "DMP", description: "FSCA/FSNはDMPに通知。", url: "https://www.dmp.no/en/medical-devices" },
      surveillance: "EU MDR PMS/PSUR/PMCF EEA経由適用。",
    },

    certificateOfFreeSale: { available: true, issuingAuthority: "DMP", name: "CFS", description: "DMPがCFSを発行。", processingTime: "要確認", url: "https://www.dmp.no/en/medical-devices" },

    reimbursement: {
      system: "Nye Metoder（専門医療）+ HELFO Blue Prescription（外来）+ 4地域保健局",
      authority: "DMP（HTA）/ Nye Metoder / HELFO / 4地域保健局",
      description: "病院用機器はNye Metoder でHTA導入決定。DMPがSTA実施。外来特定機器はHELFO Blue Prescription（§5品目リスト）。2025年1月EU HTAR参加。JNHB創設メンバー。",
      codingSystems: ["DRG/NordDRG", "HELFO製品価格リスト"],
      url: "https://www.nyemetoder.no/en/english/",
    },

    marketingRules: {
      authority: "DMP",
      description: "ノルウェー語ラベリング・IFU必須。当局文書はノルウェー語/英語。適合性評価文書は英語。",
      keyRules: ["ノルウェー語ラベリング・IFU必須", "当局文書: ノルウェー語/英語", "技術文書は英語"],
    },

    mdsap: { status: "非参加", description: "MDSAP非参加。" },
    internationalStandards: {
      iso13485: { accepted: true, notes: "実質必須。" }, iso14971: { accepted: true, notes: "EN ISO 14971:2019+A11:2021。" },
      iec62304: { accepted: true, notes: "EN IEC 62304:2006+A1:2015。" }, iec60601: { accepted: true, notes: "EN IEC 60601シリーズ。" }, others: [],
    },

    recentDevelopments: [
      { date: "2025-01", title: "EU HTAR参加", description: "EU HTAR枠組みに参加。JCA貢献開始。" },
      { date: "2025", title: "EUDAMEDアクセス問題", description: "EU非加盟のためEUDAMED完全アクセス遅延。EEA調整中。" },
    ],

    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- Finland ---
  // =========================================================================
  {
    code: "FIN",
    country: "フィンランド",
    countryEn: "Finland",
    region: "Europe",
    flag: "🇫🇮",

    legalSystemOverview: {
      type: "EU加盟国（MDR/IVDR 直接適用）",
      description: "フィンランドはEU加盟国。MDR/IVDR直接適用。Fimea がNCA。Medical Devices Act (719/2021)が国内補完法。NB密度が高い（MDR:2, IVDR:2）。",
      keyCharacteristics: [
        "EU MDR/IVDR 直接適用",
        "Fimea がNCA（NB指定・監督含む）",
        "安全使用情報はフィンランド語+スウェーデン語必須",
        "文書はフィンランド語/スウェーデン語/英語で可",
        "国内3 NB（MDR:2, IVDR:2）",
        "JNHB創設メンバー",
      ],
    },

    authorities: [
      { name: "Fimea", fullName: "Finnish Medicines Agency", localName: "Lääkealan turvallisuus- ja kehittämiskeskus", role: "NCA: 市場監視・ビジランス・臨床試験・NB指定監督・登録", url: "https://fimea.fi/en/medical-devices", isPrimary: true },
      { name: "PALKO / COHERE Finland", fullName: "Council for Choices in Health Care in Finland", localName: "Terveydenhuollon palveluvalikoimaneuvosto", role: "HTA評価・推奨", url: "https://palveluvalikoima.fi/", isPrimary: false },
      { name: "FinCCHTA", fullName: "Finnish Coordinating Center for Health Technology Assessment", localName: null, role: "大学病院HTAネットワーク", url: "https://www.fincchta.fi/", isPrimary: false },
    ],

    notifiedBodies: {
      system: "EU MDR/IVDR Notified Body（フィンランド国内3機関）",
      description: "Eurofins (NB 0537, MDR+IVDR)、SGS FIMKO (NB 0598, MDR)、Sertio (NB 3018, IVDR)。",
      bodies: [
        { nb: "0537", name: "Eurofins Electric & Electronics Finland Oy", url: "https://www.eurofins.fi/", mdr: true, ivdr: true },
        { nb: "0598", name: "SGS FIMKO OY", url: "https://www.sgs.fi/", mdr: true, ivdr: false },
        { nb: "3018", name: "Sertio Oy", url: "https://www.sertio.fi/", mdr: false, ivdr: true },
      ],
    },

    deviceDefinition: { legalDefinition: "EU MDR Article 2(1) がそのまま適用。", scope: "IVD は IVDR。SaMD・AI/ML も対象。", notes: "Act 719/2021が国内補完法。" },

    primaryLaw: { title: "Regulation (EU) 2017/745 — MDR", originalTitle: null, enacted: "2017 / 2021年5月26日適用", lastAmended: "2025", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32017R0745", description: "EU MDR 直接適用。Act 719/2021が国内補完法。" },

    implementingRegulations: [
      { title: "Medical Devices Act (719/2021)", date: "2021", url: "https://fimea.fi/en/medical-devices/legislation-related-to-medical-devices", description: "MDR/IVDR国内補完法。Fimea権限・罰則・言語・登録・NB指定。", category: "国内補完法" },
      { title: "Decree 437/2021", date: "2021", url: "https://fimea.fi/en/medical-devices/legislation-related-to-medical-devices", description: "Act下位法令。", category: "省令" },
      { title: "Fimea Regulation 2/2021", date: "2021", url: "https://fimea.fi/en/medical-devices/registrations", description: "EUDAMED/CERE届出要件。", category: "当局規則" },
    ],

    relatedLaws: [
      { title: "GDPR + Tietosuojalaki", category: "データ保護", enacted: "2018", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679", relevance: "健康データに適用。" },
    ],

    classification: {
      system: "EU MDR 4クラス制",
      basis: "EU MDR Annex VIII。",
      classes: [
        { name: "Class I", nameJa: "クラスI", riskLevel: "低", description: "自己宣言。", examples: ["弾性包帯", "聴診器"], approvalPath: "自己宣言" },
        { name: "Class IIa", nameJa: "クラスIIa", riskLevel: "中低", description: "NB関与。", examples: ["補聴器", "超音波装置"], approvalPath: "NB審査" },
        { name: "Class IIb", nameJa: "クラスIIb", riskLevel: "中高", description: "NB詳細審査。", examples: ["人工呼吸器", "輸液ポンプ"], approvalPath: "NB審査" },
        { name: "Class III", nameJa: "クラスIII", riskLevel: "高", description: "最も厳格。", examples: ["人工心臓弁", "冠動脈ステント"], approvalPath: "NB + Expert Panel" },
      ],
      rules: ["EU MDR Annex VIII 直接適用"],
      totalProductCodes: "EU CND",
    },

    conformityAssessment: {
      overview: "EU MDR 適合性評価がそのまま適用。EUDAMED早期活用。",
      routes: [{ name: "EU MDR Conformity Assessment", nameJa: "EU MDR 適合性評価", applicableClasses: ["全クラス"], description: "Annex IX〜XI。EUプロファイル参照。", subtypes: [], avgReviewTime: "EUプロファイル参照", fee: "NBにより異なる", url: "https://fimea.fi/en/medical-devices/placing-a-medical-device-on-the-market/conformity-assessment" }],
    },

    electronicSubmission: { system: "EUDAMED + CERE（Fimea国内システム）", url: "https://fimea.fi/en/medical-devices/registrations", description: "EUDAMED早期活用。CEREはFimea国内補助。EUDAMED義務化: 2026年5月。", mandatory: true },
    udi: { required: true, system: "EU UDI — EUDAMED", description: "MDR UDI要件がそのまま適用。", url: "https://ec.europa.eu/tools/eudamed/", timeline: "EUDAMED義務化: 2026年5月28日" },

    postMarket: {
      adverseEventReporting: { system: "EU Vigilance — Fimea", mandatory: true, url: "https://fimea.fi/en/medical-devices", description: "重篤有害事象をFimeaに報告。" },
      recalls: { authority: "Fimea", description: "FSCA/FSNはFimeaに通知。", url: "https://fimea.fi/en/medical-devices" },
      surveillance: "EU MDR PMS/PSUR/PMCF適用。",
    },

    certificateOfFreeSale: { available: true, issuingAuthority: "Fimea", name: "CFS", description: "FimeaがCFSを発行。", processingTime: "要確認", url: "https://fimea.fi/en/medical-devices" },

    reimbursement: {
      system: "公的医療 + PALKO/COHERE HTA + FinCCHTA",
      authority: "PALKO/COHERE（HTA推奨）/ Hila / FinCCHTA",
      description: "Hyvinvointialue が医療提供。PALKOが国レベルHTA。FinCCHTAが大学病院mini-HTA。JNHB創設メンバー。",
      codingSystems: ["NordDRG", "SHM補助機器分類"],
      url: "https://palveluvalikoima.fi/",
    },

    marketingRules: {
      authority: "Fimea",
      description: "安全使用情報はフィンランド語+スウェーデン語必須。その他はフィンランド語/スウェーデン語/英語。",
      keyRules: ["ラベル・IFU: フィンランド語+スウェーデン語必須", "その他文書: 3言語で可"],
    },

    mdsap: { status: "非参加", description: "EU加盟国としてMDSAP非参加。" },
    internationalStandards: {
      iso13485: { accepted: true, notes: "実質必須。" }, iso14971: { accepted: true, notes: "EN ISO 14971:2019+A11:2021。" },
      iec62304: { accepted: true, notes: "EN IEC 62304:2006+A1:2015。" }, iec60601: { accepted: true, notes: "EN IEC 60601シリーズ。" }, others: [],
    },

    recentDevelopments: [
      { date: "2023", title: "Sertio Oy IVDR NB指定", description: "フィンランド初のIVDR専用NB。" },
      { date: "2023", title: "Hyvinvointialue制度開始", description: "自治体医療が新制度に移行。" },
    ],

    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- Ireland ---
  // =========================================================================
  {
    code: "IRL",
    country: "アイルランド",
    countryEn: "Ireland",
    region: "Europe",
    flag: "🇮🇪",

    legalSystemOverview: {
      type: "EU加盟国（MDR/IVDR 直接適用）",
      description: "アイルランドはEU加盟国。MDR/IVDR直接適用。HPRAがNCA。NSAI (NB 0050) がMDR+IVDR NB。欧州有数の医療機器製造・輸出拠点。英語で対応可能。",
      keyCharacteristics: [
        "EU MDR/IVDR 直接適用",
        "HPRA がNCA",
        "NSAI がMDR+IVDR NB",
        "英語で対応可能（言語ハードル最小）",
        "欧州有数の医療機器拠点",
        "HIQA がHTA",
      ],
    },

    authorities: [
      { name: "HPRA", fullName: "Health Products Regulatory Authority", localName: null, role: "NCA: 市場監視・ビジランス・臨床試験・NB監督・登録", url: "https://www.hpra.ie/regulation/medical-devices", isPrimary: true },
      { name: "NSAI", fullName: "National Standards Authority of Ireland", localName: null, role: "MDR/IVDR NB (NB 0050)", url: "https://www.nsai.ie/", isPrimary: false },
      { name: "HIQA", fullName: "Health Information and Quality Authority", localName: null, role: "HTA評価", url: "https://www.hiqa.ie/areas-we-work/health-technology-assessment", isPrimary: false },
      { name: "HSE", fullName: "Health Service Executive", localName: null, role: "公的医療・償還決定", url: "https://www.hse.ie/", isPrimary: false },
    ],

    notifiedBodies: {
      system: "EU MDR/IVDR Notified Body（アイルランド国内1機関）",
      description: "NSAI (NB 0050) がMDR+IVDR両方指定。MDR指定11番目。",
      bodies: [{ nb: "0050", name: "National Standards Authority of Ireland (NSAI)", url: "https://www.nsai.ie/", mdr: true, ivdr: true }],
    },

    deviceDefinition: { legalDefinition: "EU MDR Article 2(1) がそのまま適用。", scope: "IVD は IVDR。SaMD・AI/ML も対象。", notes: "追加定義変更なし。" },

    primaryLaw: { title: "Regulation (EU) 2017/745 — MDR", originalTitle: null, enacted: "2017 / 2021年5月26日適用", lastAmended: "2025", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32017R0745", description: "EU MDR 直接適用。S.I. 261/2021が国内補完法。" },

    implementingRegulations: [
      { title: "S.I. No. 261/2021 — Medical Devices Regulations 2021", date: "2021-05-26", url: "https://www.hpra.ie/regulation/medical-devices", description: "HPRA権限（分類・市場監視・臨床試験・執行）。", category: "国内補完法" },
      { title: "S.I. No. 691/2021 — Medical Devices (Registration) Regulations 2021", date: "2021", url: "https://www.hpra.ie/regulation/medical-devices/registration", description: "アイルランド拠点事業者のHPRA国内登録。", category: "登録規則" },
    ],

    relatedLaws: [
      { title: "GDPR + Data Protection Act 2018", category: "データ保護", enacted: "2018", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679", relevance: "健康データ。DPC監督。" },
    ],

    classification: {
      system: "EU MDR 4クラス制",
      basis: "EU MDR Annex VIII。",
      classes: [
        { name: "Class I", nameJa: "クラスI", riskLevel: "低", description: "自己宣言。", examples: ["弾性包帯", "聴診器"], approvalPath: "自己宣言" },
        { name: "Class IIa", nameJa: "クラスIIa", riskLevel: "中低", description: "NB関与。", examples: ["補聴器", "超音波装置"], approvalPath: "NB審査" },
        { name: "Class IIb", nameJa: "クラスIIb", riskLevel: "中高", description: "NB詳細審査。", examples: ["人工呼吸器", "輸液ポンプ"], approvalPath: "NB審査" },
        { name: "Class III", nameJa: "クラスIII", riskLevel: "高", description: "最も厳格。", examples: ["人工心臓弁", "冠動脈ステント"], approvalPath: "NB + Expert Panel" },
      ],
      rules: ["EU MDR Annex VIII 直接適用"],
      totalProductCodes: "EU CND",
    },

    conformityAssessment: {
      overview: "EU MDR 適合性評価がそのまま適用。HPRA国内登録（S.I. 691/2021）必要。",
      routes: [{ name: "EU MDR Conformity Assessment", nameJa: "EU MDR 適合性評価", applicableClasses: ["全クラス"], description: "Annex IX〜XI。EUプロファイル参照。", subtypes: [], avgReviewTime: "EUプロファイル参照", fee: "NBにより異なる", url: "https://www.hpra.ie/regulation/medical-devices/medical-devices-regulation" }],
    },

    electronicSubmission: { system: "EUDAMED + HPRA国内登録", url: "https://www.hpra.ie/regulation/medical-devices/registration", description: "EUDAMED + S.I. 691/2021 HPRA国内登録。", mandatory: true },
    udi: { required: true, system: "EU UDI — EUDAMED", description: "MDR UDI要件がそのまま適用。", url: "https://ec.europa.eu/tools/eudamed/", timeline: "EUDAMED義務化: 2026年5月28日" },

    postMarket: {
      adverseEventReporting: { system: "EU Vigilance — HPRA", mandatory: true, url: "https://www.hpra.ie/regulation/medical-devices", description: "重篤有害事象をHPRAに報告。" },
      recalls: { authority: "HPRA", description: "FSCA/FSNはHPRAに通知。", url: "https://www.hpra.ie/regulation/medical-devices" },
      surveillance: "EU MDR PMS/PSUR/PMCF適用。",
    },

    certificateOfFreeSale: { available: true, issuingAuthority: "HPRA", name: "CFS", description: "HPRAがCFSを発行。", processingTime: "要確認", url: "https://www.hpra.ie/regulation/medical-devices" },

    reimbursement: {
      system: "HSE公的医療 + HIQA HTA",
      authority: "HSE（償還）/ HIQA（HTA）/ NCPE（薬事経済）",
      description: "公的医療はHSE提供。HIQA がHTA（2007年Health Act）。病院機器はHSE調達。",
      codingSystems: ["DRG", "HSE機器コード"],
      url: "https://www.hiqa.ie/areas-we-work/health-technology-assessment",
    },

    marketingRules: {
      authority: "HPRA",
      description: "英語で対応可能。アイルランド語は規制上不要。EU加盟国中最も言語ハードルが低い。",
      keyRules: ["英語ラベリング・IFUで対応可", "アイルランド語は規制上不要"],
    },

    mdsap: { status: "非参加", description: "EU加盟国としてMDSAP非参加。" },
    internationalStandards: {
      iso13485: { accepted: true, notes: "実質必須。" }, iso14971: { accepted: true, notes: "EN ISO 14971:2019+A11:2021。" },
      iec62304: { accepted: true, notes: "EN IEC 62304:2006+A1:2015。" }, iec60601: { accepted: true, notes: "EN IEC 60601シリーズ。" }, others: [],
    },

    recentDevelopments: [
      { date: "2020-02", title: "NSAI MDR NB指定", description: "EU全体11番目、アイルランド初のMDR NB。" },
      { date: "2025-03", title: "HIQA HTAガイドライン改訂", description: "経済評価・BIAガイドライン改訂。" },
    ],

    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- Austria ---
  // =========================================================================
  {
    code: "AUT",
    country: "オーストリア",
    countryEn: "Austria",
    region: "Europe",
    flag: "🇦🇹",

    legalSystemOverview: {
      type: "EU加盟国（MDR/IVDR 直接適用）",
      description: "オーストリアはEU加盟国。MDR/IVDR直接適用。BASGがNCA。MPG 2021が国内補完法。ドイツ語ラベリング必須。QMD Services (NB 2962) がMDR+IVDR NB。",
      keyCharacteristics: [
        "EU MDR/IVDR 直接適用",
        "BASG がNCA",
        "MPG 2021 国内補完法",
        "ドイツ語ラベリング・IFU必須",
        "QMD Services (NB 2962) MDR+IVDR NB",
        "AIHTA がHTA",
        "Medizinprodukteregister + 年間手数料",
      ],
    },

    authorities: [
      { name: "BASG", fullName: "Federal Office for Safety in Health Care", localName: "Bundesamt für Sicherheit im Gesundheitswesen", role: "NCA: 市場監視・ビジランス・臨床試験・NB監督", url: "https://www.basg.gv.at/en/medical-devices", isPrimary: true },
      { name: "AGES", fullName: "Austrian Agency for Health and Food Safety", localName: "Agentur für Gesundheit und Ernährungssicherheit", role: "BASG親組織", url: "https://www.ages.at/en/", isPrimary: false },
      { name: "AIHTA", fullName: "Austrian Institute for Health Technology Assessment", localName: "旧LBI-HTA", role: "HTA評価。病院給付カタログ支援。", url: "https://aihta.at/", isPrimary: false },
      { name: "Dachverband", fullName: "Federation of Austrian Social Insurance Institutions", localName: "旧HVB", role: "社会保険償還管理", url: "https://www.sozialversicherung.at/", isPrimary: false },
    ],

    notifiedBodies: {
      system: "EU MDR/IVDR Notified Body（オーストリア国内1機関）",
      description: "QMD Services GmbH (NB 2962) がMDR+IVDR両方指定。",
      bodies: [{ nb: "2962", name: "QMD Services GmbH", url: "https://www.qmd-services.com/", mdr: true, ivdr: true }],
    },

    deviceDefinition: { legalDefinition: "EU MDR Article 2(1) がそのまま適用。", scope: "IVD は IVDR。SaMD・AI/ML も対象。", notes: "MPG 2021が国内補完法。" },

    primaryLaw: { title: "Regulation (EU) 2017/745 — MDR", originalTitle: null, enacted: "2017 / 2021年5月26日適用", lastAmended: "2025", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32017R0745", description: "EU MDR 直接適用。MPG 2021が国内補完法。" },

    implementingRegulations: [
      { title: "Medizinproduktegesetz 2021 (MPG 2021)", date: "2021-07", url: "https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20011580", description: "BASG権限・罰則・言語・登録・手数料。", category: "国内補完法" },
      { title: "Medizinprodukte-Betreiber-Verordnung (MPBV)", date: "2021", url: "https://www.basg.gv.at/en/healthcare-professionals/medical-device-operators", description: "医療機器使用者義務（維持管理・安全検査）。", category: "事業者規制" },
      { title: "Medizinprodukte-Gebührenverordnung", date: "2021", url: "https://medizinprodukteregister.at/FAQs", description: "年間手数料。", category: "手数料" },
    ],

    relatedLaws: [
      { title: "GDPR + Datenschutzgesetz", category: "データ保護", enacted: "2018", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679", relevance: "健康データに適用。" },
    ],

    classification: {
      system: "EU MDR 4クラス制",
      basis: "EU MDR Annex VIII。",
      classes: [
        { name: "Class I", nameJa: "クラスI", riskLevel: "低", description: "自己宣言。", examples: ["弾性包帯", "聴診器"], approvalPath: "自己宣言" },
        { name: "Class IIa", nameJa: "クラスIIa", riskLevel: "中低", description: "NB関与。", examples: ["補聴器", "超音波装置"], approvalPath: "NB審査" },
        { name: "Class IIb", nameJa: "クラスIIb", riskLevel: "中高", description: "NB詳細審査。", examples: ["人工呼吸器", "輸液ポンプ"], approvalPath: "NB審査" },
        { name: "Class III", nameJa: "クラスIII", riskLevel: "高", description: "最も厳格。", examples: ["人工心臓弁", "冠動脈ステント"], approvalPath: "NB + Expert Panel" },
      ],
      rules: ["EU MDR Annex VIII 直接適用"],
      totalProductCodes: "EU CND",
    },

    conformityAssessment: {
      overview: "EU MDR 適合性評価がそのまま適用。Medizinprodukteregister国内登録+年間手数料必要。",
      routes: [{ name: "EU MDR Conformity Assessment", nameJa: "EU MDR 適合性評価", applicableClasses: ["全クラス"], description: "Annex IX〜XI。EUプロファイル参照。", subtypes: [], avgReviewTime: "EUプロファイル参照", fee: "NB + BASG年間手数料", url: "https://www.basg.gv.at/en/medical-devices" }],
    },

    electronicSubmission: { system: "EUDAMED + Medizinprodukteregister", url: "https://medizinprodukteregister.at/", description: "EUDAMED + 国内登録簿。年間手数料あり。", mandatory: true },
    udi: { required: true, system: "EU UDI — EUDAMED", description: "MDR UDI要件適用。全クラスUDI: 2027年5月。", url: "https://ec.europa.eu/tools/eudamed/", timeline: "EUDAMED義務化: 2026年5月。全クラスUDI: 2027年5月" },

    postMarket: {
      adverseEventReporting: { system: "EU Vigilance — BASG", mandatory: true, url: "https://www.basg.gv.at/en/medical-devices", description: "重篤有害事象をBASGに報告。FSNはドイツ語必須。" },
      recalls: { authority: "BASG", description: "FSCA/FSNはBASGに通知。FSNドイツ語。", url: "https://www.basg.gv.at/en/medical-devices" },
      surveillance: "EU MDR PMS/PSUR/PMCF適用。",
    },

    certificateOfFreeSale: { available: true, issuingAuthority: "BASG", name: "CFS", description: "BASGがCFSを発行。", processingTime: "要確認", url: "https://www.basg.gv.at/en/medical-devices" },

    reimbursement: {
      system: "社会保険 + AIHTA HTA + 病院給付カタログ（MEL/LKF）",
      authority: "Dachverband（旧HVB）/ AIHTA / BMASGK",
      description: "社会保険制度。病院用機器はMELに包含。AIHTAがエビデンス評価。外来機器はDachverband保険給付カタログ。HTAが償還に統合。",
      codingSystems: ["LKF/DRG", "MEL", "Heilbehelfe/Hilfsmittel"],
      url: "https://aihta.at/",
    },

    marketingRules: {
      authority: "BASG",
      description: "ドイツ語ラベリング・IFU必須。専門家向けは英語可の場合あり。FSNドイツ語必須。",
      keyRules: ["ドイツ語ラベリング・IFU必須", "FSN: ドイツ語", "インプラントカードもドイツ語"],
    },

    mdsap: { status: "非参加", description: "EU加盟国としてMDSAP非参加。" },
    internationalStandards: {
      iso13485: { accepted: true, notes: "実質必須。" }, iso14971: { accepted: true, notes: "EN ISO 14971:2019+A11:2021。" },
      iec62304: { accepted: true, notes: "EN IEC 62304:2006+A1:2015。" }, iec60601: { accepted: true, notes: "EN IEC 60601シリーズ。" }, others: [],
    },

    recentDevelopments: [
      { date: "2021-07", title: "MPG 2021施行", description: "MDR/IVDR国内補完法。BASG権限強化・登録・手数料。" },
      { date: "2024", title: "EUDAMED義務化準備", description: "2026年5月義務化に向け事業者準備推進。" },
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

  // =========================================================================
  // --- United Arab Emirates ---
  // =========================================================================
  {
    code: "ARE",
    country: "アラブ首長国連邦",
    countryEn: "United Arab Emirates",
    region: "Middle East & Africa",
    flag: "🇦🇪",

    legalSystemOverview: {
      type: "連邦制（Federal system）— 連邦MOHAPと首長国規制当局の二重構造",
      description:
        "UAEの医療機器規制は連邦レベルでMOHAP（Ministry of Health and Prevention）が管轄し、Federal Decree-Law No. 38 of 2024（2025年1月2日施行）が現行の基本法である。2023年9月に設立されたEmirates Drug Establishment（EDE）がMOHAPから規制機能を段階的に移管中。一方、アブダビ首長国はDOH（Department of Health）、ドバイ首長国はDHA（Dubai Health Authority）が独自の追加規制・施設監督を実施する二重規制構造が特徴。分類体系はGHTFに整合した4クラス制（Class I〜IV）を採用。",
      keyCharacteristics: [
        "連邦MOHAP/EDEによる市販前登録と首長国当局（DOH/DHA）による追加規制の二重構造",
        "リスクベースの4クラス分類（Class I/II/III/IV）— GHTFに整合",
        "IVDは別途4クラス（Class A/B/C/D）",
        "海外製造業者はUAEライセンスを持つLocal Agent（現地代理人）の任命が必須",
        "登録有効期間5年（更新制）",
        "EDE（Emirates Drug Establishment）への規制機能移管が進行中",
      ],
    },

    authorities: [
      {
        name: "MOHAP / EDE",
        fullName: "Ministry of Health and Prevention / Emirates Drug Establishment",
        localName: "وزارة الصحة ووقاية المجتمع / مؤسسة الإمارات للدواء",
        role: "医療機器の市販前登録（Marketing Authorization）・市販後監視・有害事象報告・広告規制。EDEが段階的にMOHAPの規制業務を承継中。",
        url: "https://mohap.gov.ae/en/services",
        isPrimary: true,
      },
      {
        name: "DOH",
        fullName: "Department of Health – Abu Dhabi",
        localName: "دائرة الصحة - أبوظبي",
        role: "アブダビ首長国における医療施設の許認可・査察、医療機器の市販後安全監視、追加規制の策定。",
        url: "https://www.doh.gov.ae/en/",
        isPrimary: false,
      },
      {
        name: "DHA",
        fullName: "Dubai Health Authority",
        localName: "هيئة الصحة بدبي",
        role: "ドバイ首長国における医療施設の許認可・査察、Sheryanポータルによる施設ライセンス管理。",
        url: "https://www.dha.gov.ae/en",
        isPrimary: false,
      },
    ],

    notifiedBodies: {
      system: "なし（MOHAP/EDE が直接審査）",
      description:
        "UAEでは欧州型のNotified Body制度は存在しない。MOHAP（移管後はEDE）が直接、登録申請の技術文書を審査しMarketing Authorizationを交付する。ただしISO 13485認証を第三者認証機関から取得することが事前要件。",
      bodies: [],
    },

    deviceDefinition: {
      legalDefinition:
        "Federal Decree-Law No. 38 of 2024に定義。疾病の診断・治療・予防・監視・軽減等を目的とする機器・装置・器具・材料・ソフトウェア等で、主たる意図する作用が薬理学的・免疫学的・代謝的手段によらないもの。",
      scope:
        "IVD（体外診断用医療機器）も適用範囲に含まれる。医薬品・栄養補助食品・化粧品・生物学的製品・遺伝子組換え生物（医療用）も同法の規制対象。",
      notes:
        "SaMD（Software as a Medical Device）は意図する用途に基づき医療機器として分類される場合がある。Federal Decree-Law No. 38/2024で規制範囲がバイオバンク・受託研究機関にも拡大。",
    },

    primaryLaw: {
      title: "Federal Decree-Law No. (38) of 2024 Concerning Medical Products, the Pharmacy Profession, and Pharmaceutical Establishments",
      originalTitle: "مرسوم بقانون اتحادي رقم (38) لسنة 2024 في شأن المنتجات الطبية ومهنة الصيدلة والمنشآت الصيدلانية",
      enacted: "2024",
      lastAmended: "2024-10-14（官報No. 785に掲載）",
      url: "https://uaelegislation.gov.ae/en/legislations/2751",
      description:
        "2024年10月1日発令、2024年10月14日官報掲載、2025年1月2日施行。旧Federal Law No. 8 of 2019（およびその改正法Federal Decree-Law No. 11 of 2023）を置換する現行の基本法。EDEの設立根拠と医療機器を含む医療製品全般の規制枠組みを規定。1年間の経過措置期間あり（2026年1月2日まで）。",
    },

    implementingRegulations: [
      {
        title: "Cabinet Resolution No. 90 of 2021 — Executive Regulations of Federal Law No. 8 of 2019",
        date: "2021",
        url: "https://mohap.gov.ae/en/w/cabinet-resolution-no.-90-of-the-year-2021-on-the-executive-regulations-of-federal-law-no-.8-of-the-year-2019-regarding-medical-products-the-pharmacy-profession-and-pharmaceutical-establishments",
        description:
          "旧法の施行規則。新法（FDL 38/2024）の施行規則が発出されるまで、矛盾しない範囲で継続適用。登録手続・分類・市販後監視・査察等の詳細を規定。",
        category: "施行規則",
      },
      {
        title: "Ministerial Decision No. 1412 of 2017 — Code of Practice for Marketing and Trading of Medical Products",
        date: "2017",
        url: "https://mohap.gov.ae/documents/20117/1212145/code+of+ethical+practices+for+the+promotion+and+distribution+of+medical+products+english-410.pdf/421e3579-bae1-7214-2878-d604d92e7af5",
        description:
          "医療製品のマーケティング・取引に関する倫理規定。広告の事前承認要件、医療従事者とのインタラクション規則を規定。",
        category: "広告・マーケティング",
      },
      {
        title: "MOHAP Medical Device Registration Infographic (Service Code)",
        date: "2025-02",
        url: "https://mohap.gov.ae/documents/20117/1212145/Infographic+-+Registration+of+a+Medical+Equipment+-+420KB.pdf/224e9f30-0bed-fa9e-0686-efb7bba31a4a",
        description:
          "医療機器登録のサービスフロー、必要書類、手数料を示す公式インフォグラフィック。",
        category: "登録手続",
      },
    ],

    relatedLaws: [
      {
        title: "Federal Decree-Law on the Establishment of the UAE Drug Corporation (EDE)",
        category: "組織法",
        enacted: "2023",
        url: "https://uaelegislation.gov.ae/en/legislations/2122",
        relevance:
          "2023年9月29日設立のEDE（Emirates Drug Establishment）の設置根拠法。MOHAPの医薬品・医療機器規制機能を段階的に承継。",
      },
      {
        title: "Federal Decree-Law No. 45 of 2021 — Personal Data Protection Law (PDPL)",
        category: "データ保護",
        enacted: "2021",
        url: "https://u.ae/en/about-the-uae/digital-uae/data/data-protection-laws",
        relevance:
          "コネクテッドデバイス・SaMDが取り扱う個人医療情報のプライバシー要件に適用。",
      },
    ],

    classification: {
      system: "4クラス制（Class I/II/III/IV）— GHTF整合",
      basis: "リスクベース（GHTF分類ルールに整合）。意図する用途・侵襲性・使用期間・エネルギー源等に基づく。IVDは別途4クラス（Class A〜D）。",
      classes: [
        {
          name: "Class I",
          nameJa: "クラスI",
          riskLevel: "低",
          description: "低リスクの非侵襲的機器。簡略審査。",
          examples: ["弾性包帯", "聴診器", "病院用ベッド", "手術用はさみ", "舌圧子"],
          approvalPath: "登録申請（簡略審査）",
        },
        {
          name: "Class II",
          nameJa: "クラスII",
          riskLevel: "中低",
          description: "低〜中リスク機器。標準審査。",
          examples: ["コンタクトレンズ", "輸液ポンプ", "超音波診断装置", "X線装置", "血圧計"],
          approvalPath: "登録申請（標準審査）",
        },
        {
          name: "Class III",
          nameJa: "クラスIII",
          riskLevel: "中高",
          description: "中〜高リスク機器。詳細審査＋臨床データが必要な場合あり。現地監査の対象となりうる。",
          examples: ["人工関節", "冠動脈ステント", "人工呼吸器", "透析装置", "埋込み型整形外科インプラント"],
          approvalPath: "登録申請（詳細審査＋臨床評価）",
        },
        {
          name: "Class IV",
          nameJa: "クラスIV",
          riskLevel: "高",
          description: "最高リスク・生命維持機器。最も厳格な審査。現地監査の対象。",
          examples: ["人工心臓弁", "埋込み型除細動器", "薬剤溶出ステント", "脳深部刺激装置", "人工内耳"],
          approvalPath: "登録申請（詳細審査＋臨床データ＋現地監査の可能性）",
        },
      ],
      rules: [
        "GHTF分類ルールに基づく分類基準（EU MDDにも整合）",
        "IVDは別途4クラス（Class A〜D）に分類",
        "MOHAP/EDEが分類確認（Classification Application）を実施",
        "GMDN（Global Medical Device Nomenclature）を参照",
      ],
      totalProductCodes: "GMDN（Global Medical Device Nomenclature）を使用",
    },

    conformityAssessment: {
      overview:
        "全クラスの医療機器にMOHAP（移管後はEDE）へのMarketing Authorization（登録）が必要。登録有効期間は5年（更新制）。海外製造業者はUAEライセンスを持つLocal Agent（現地代理人）を任命し、Local Agentが申請を提出する。Class III/IV機器は現地監査の対象となりうる。",
      routes: [
        {
          name: "Medical Device Registration",
          nameJa: "医療機器登録",
          applicableClasses: ["Class I", "Class II", "Class III", "Class IV"],
          description:
            "MOHAP/EDEへの登録申請。技術文書・ISO 13485認証・CFS（Certificate of Free Sale）・アラビア語ラベリング等を提出。Class III/IV機器は臨床データが求められる場合あり。",
          subtypes: [
            { name: "新規登録", description: "初回の登録申請。全必要書類の提出が必要。" },
            { name: "登録更新（5年ごと）", description: "有効期限前に更新申請。" },
            { name: "変更申請", description: "製品仕様・製造所・ラベリング等の変更時。" },
          ],
          avgReviewTime: "公式: 45営業日 / 実績: 6〜8週間（Class I/II）、3〜6ヶ月（Class III/IV）",
          avgReviewTimeSource: "https://omcmedical.com/guide-to-uae-medical-device-registration-process/",
          fee: "申請手数料: AED 100 / 登録手数料: AED 5,000（政府手数料 AED 5,000〜15,000はリスク分類により変動）",
          feeSource: "https://mohap.gov.ae/documents/20117/1212145/Infographic+-+Registration+of+a+Medical+Equipment+-+420KB.pdf/224e9f30-0bed-fa9e-0686-efb7bba31a4a",
          url: "https://mohap.gov.ae/en/services",
        },
      ],
    },

    electronicSubmission: {
      system: "MOHAP eサービス / EDE ポータル",
      url: "https://www.ede.gov.ae/en/home",
      description:
        "登録申請はMOHAP eサービス経由でオンライン提出。UAE PASSでログインし申請・支払を実施。2025年以降、段階的にEDEポータル（www.ede.gov.ae）に移行中。CFS発行サービスは2025年12月29日よりEDEに移管済み。",
      mandatory: true,
    },

    udi: {
      required: false,
      system: "未導入（UAE独自のUDI制度は未確立）",
      description:
        "2026年4月時点で、UAE独自の包括的UDI制度は正式に導入されていない。ただし登録申請時にGMDN情報の提出が求められる。Federal Decree-Law No. 38/2024はUDI関連の枠組み導入を可能にする法的基盤を含むが、具体的な実施規則は未発出。",
      url: "https://mohap.gov.ae/en/services",
      timeline: "未定（FDL 38/2024の施行規則で今後規定される可能性あり）",
    },

    postMarket: {
      adverseEventReporting: {
        system: "MOHAP / EDE 有害事象報告",
        mandatory: true,
        url: "https://mohap.gov.ae/en/services",
        description:
          "製造業者・Local Agent・医療従事者が有害事象をMOHAPに報告する義務を負う。MOHAPウェブサイトまたはスマートアプリ経由で報告を提出可能。報告はWHO（世界保健機関）にも共有される。",
      },
      recalls: {
        authority: "MOHAP / EDE",
        description:
          "MOHAP/EDEがリコール・FSCA（Field Safety Corrective Action）を監督。必要に応じてLocal Agentを通じた市場からの製品回収を命令。",
        url: "https://mohap.gov.ae/en/services",
      },
      surveillance:
        "Class III/IVおよび埋込み型機器は2年ごとの市販後監視報告の提出が求められる。MOHAPは市場監視・抜き打ち検査を実施し、安全性・品質の継続的適合を確認。",
    },

    certificateOfFreeSale: {
      available: true,
      issuingAuthority: "MOHAP / EDE（UAE製品の輸出用）/ 輸出国の規制当局（UAE登録時に提出が必要）",
      name: "Certificate of Free Sale (CFS)",
      description:
        "UAE登録申請時に、原産国の規制当局が発行するCFSの提出が必要。MOHAP/EDEはUAE国内製造業者向けにCFSを発行するサービスも提供（有効期間1年）。CFS発行サービスは2025年12月29日よりEDEに移管。",
      processingTime: "MOHAP/EDEによるCFS発行: 要確認",
      url: "https://mohap.gov.ae/en/w/issue-of-a-certificate-of-free-sale-of-a-medical-product-for-export",
    },

    reimbursement: {
      system: "首長国別の健康保険制度（アブダビ: 強制医療保険 / ドバイ: DHA必須保険 / 他首長国: MOHAP）",
      authority: "DOH（アブダビ）/ DHA（ドバイ）/ MOHAP（連邦）",
      description:
        "アブダビはDOH管轄の強制健康保険（Daman等）、ドバイはDHA管轄の必須保険（Essential Benefits Plan）を運用。2010年以降、アブダビではDRG（Diagnosis Related Groups）ベースの償還制度への移行が進行中。医療機器の個別償還制度は医薬品ほど体系化されておらず、施設調達・保険契約に依存する部分が大きい。",
      codingSystems: [
        "DRG（アブダビでの導入が進行中）",
        "要確認（UAE固有の医療機器償還コード体系は未確認）",
      ],
      url: "https://www.doh.gov.ae/en/resources/policies",
    },

    marketingRules: {
      authority: "MOHAP / EDE",
      description:
        "Federal Decree-Law No. 38/2024およびMinisterial Decision No. 1412 of 2017に基づき、医療製品の広告にはMOHAPの事前承認が必要。未登録医療機器の広告は厳禁。",
      keyRules: [
        "全ての医療機器広告にMOHAPの事前承認が必要",
        "承認された適応症・目的以外の広告は禁止",
        "誇大・虚偽・誤解を招く表現の禁止",
        "自己診断や不適切な治療を誘発する表現の禁止",
        "Ministerial Decision No. 1412/2017による倫理規定の遵守",
      ],
    },

    mdsap: {
      status: "非参加（Not participating）",
      description:
        "UAEはMDSAPの正式参加国・オブザーバー・アフィリエイトメンバーのいずれにも該当しない（2026年4月時点）。MDSAP監査報告書はUAEの規制要件を代替せず、MOHAP/EDEへの独立した登録申請が必要。",
    },

    internationalStandards: {
      iso13485: {
        accepted: true,
        notes: "登録申請の前提条件。製造施設のISO 13485:2016認証が必須。",
      },
      iso14971: {
        accepted: true,
        notes: "リスクマネジメント。技術文書のリスク評価に適用。",
      },
      iec62304: {
        accepted: true,
        notes: "ソフトウェアライフサイクル。SaMD申請に適用。",
      },
      iec60601: {
        accepted: true,
        notes: "医用電気機器の安全・性能要求。",
      },
      others: [
        {
          name: "ISO 10993シリーズ（生物学的安全性評価）",
          notes: "生体接触医療機器の生物学的安全性評価に適用。",
        },
        {
          name: "IEC 62366（ユーザビリティエンジニアリング）",
          notes: "医療機器のユーザビリティ評価に参照。",
        },
      ],
    },

    recentDevelopments: [
      {
        date: "2025-01",
        title: "Federal Decree-Law No. 38/2024 施行",
        description:
          "2025年1月2日にFederal Decree-Law No. 38 of 2024が施行。旧Federal Law No. 8 of 2019を置換。EDEへの規制機能移管の法的基盤。1年間の経過措置期間（2026年1月2日まで）。",
      },
      {
        date: "2025-12",
        title: "CFS発行サービスのEDE移管",
        description:
          "Certificate of Free Sale発行サービスがMOHAPからEDEに移管（2025年12月29日予定）。",
      },
      {
        date: "2023-09",
        title: "Emirates Drug Establishment（EDE）設立",
        description:
          "EDEが連邦医薬品・医療機器規制の中核機関として設立。MOHAPの規制業務を段階的に承継。www.ede.gov.ae で電子サービスを提供開始。",
      },
      {
        date: "2023",
        title: "Federal Decree-Law No. 11/2023（旧法改正）",
        description:
          "Federal Law No. 8 of 2019の一部条項を改正。EDEの設立に伴う経過的措置。その後FDL 38/2024で全面置換。",
      },
    ],

    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- SOUTH AFRICA (ZAF) ---
  // =========================================================================
  {
    code: "ZAF",
    country: "南アフリカ",
    countryEn: "South Africa",
    region: "Middle East & Africa",
    flag: "🇿🇦",

    legalSystemOverview: {
      type: "混合法体系（ローマ・オランダ法 + コモンロー）の中央集権制",
      description:
        "南アフリカの医療機器規制は Medicines and Related Substances Act（Act 101 of 1965、2015年改正）を根幹とし、SAHPRA（South African Health Products Regulatory Authority）が一元的に管轄する。SAHPRAは2018年2月に旧MCC（Medicines Control Council）から移行して設立された。医療機器規制は2016年12月に Government Gazette No. 40480（R.1515）として規則が公布され、段階的に施行中。GHTF/IMDRFに整合した4クラス分類制度（Class A/B/C/D）を採用。2025年現在、施設ライセンス（Establishment Licence）制度は運用中だが、機器登録（Registration）の Call-Up はまだ発行されておらず、段階的導入が進行中。",
      keyCharacteristics: [
        "SAHPRA による一元的な中央規制体制（2018年にMCCから移行）",
        "リスクベースの4クラス分類（Class A/B/C/D）— GHTF/IMDRF整合",
        "施設ライセンス制度（Manufacturer / Distributor / Wholesaler）が先行運用",
        "機器登録（Registration）は段階的 Call-Up 方式で導入予定",
        "参照国（FDA/EU/Health Canada/TGA等）の認可を活用する Reliance Pathway",
        "ISO 13485:2016 認証が施設ライセンスの必須要件（2025年6月〜）",
      ],
    },

    authorities: [
      {
        name: "SAHPRA",
        fullName: "South African Health Products Regulatory Authority",
        localName: null,
        role: "医療機器の施設ライセンス・機器登録・市販後監視・リコール管理・臨床試験承認・広告規制。医療機器規制の中核機関。",
        url: "https://www.sahpra.org.za/medical-devices/",
        isPrimary: true,
      },
      {
        name: "NDoH",
        fullName: "National Department of Health",
        localName: null,
        role: "保健政策全般の策定。NHI（National Health Insurance）の推進。SAHPRAの上位監督機関。",
        url: "https://www.health.gov.za/",
        isPrimary: false,
      },
      {
        name: "CMS",
        fullName: "Council for Medical Schemes",
        localName: null,
        role: "民間医療保険（Medical Aid Schemes）の規制・監督",
        url: "https://www.medicalschemes.co.za/",
        isPrimary: false,
      },
    ],

    notifiedBodies: {
      system: "SAHPRA 認定適合性評価機関（Conformity Assessment Bodies: CABs）",
      description:
        "SAHPRAは直接的な技術文書審査に加え、ISO 13485:2016認証のためにSAHPRA認定CABを指定。2025年6月1日から施設ライセンスの更新にはSAHPRA認定CABによるISO 13485認証が必須。機器登録時の適合性評価はSAHPRAが直接実施するが、参照国の認可を活用するReliance Pathwayも導入予定。",
      bodies: [
        { name: "SGS", country: "スイス", url: "https://www.sgs.com/" },
        { name: "BSI", country: "英国", url: "https://www.bsigroup.com/" },
        { name: "TÜV SÜD", country: "ドイツ", url: "https://www.tuvsud.com/" },
        { name: "Intertek", country: "英国", url: "https://www.intertek.com/" },
      ],
    },

    deviceDefinition: {
      legalDefinition:
        "Medicines and Related Substances Act (Act 101 of 1965) 及び R.1515 規則に定義。疾病の診断・治療・軽減・予防、又は身体の構造・機能の回復・矯正・修正を目的とする器具・装置・機械・インプラント・体外試薬・ソフトウェア・材料等で、その主たる作用が薬理学的・免疫学的・代謝的手段によらないもの。",
      scope:
        "IVD（体外診断用医療機器）も同一規制枠組みの適用範囲に含まれる。IVDは独自のClass A〜Dの分類規則が適用される。",
      notes:
        "SaMD（Software as a Medical Device）は2025年9月にSAHPRAがAI/ML医療機器に関するガイダンスを発行し、規制対象の明確化が進行。コンビネーション製品は主たる作用機序に基づき規制区分を判断。",
    },

    primaryLaw: {
      title: "Medicines and Related Substances Act (Act 101 of 1965, as amended)",
      originalTitle: null,
      enacted: "1965",
      lastAmended: "2015（Amendment Act No. 14 of 2015 — 2017年5月施行）",
      url: "https://www.sahpra.org.za/document/medicines-and-related-substances-act-1965-act-no-101-of-1965-as-amended/",
      description:
        "南アフリカにおける医薬品・医療機器規制の根幹法。2015年改正（Act 14 of 2015）により医療機器の規制権限が明確化され、SAHPRAの設立根拠が規定された。2017年5月に施行。",
    },

    implementingRegulations: [
      {
        title: "Regulations Relating to Medical Devices and IVDs (R.1515, GG 40480)",
        date: "2016-12-09",
        url: "https://sahpra.org.za/wp-content/uploads/2019/09/20161209_Medical-Device-Regulations_Gov-Gazette-40480.pdf",
        description:
          "医療機器及びIVDの分類・施設ライセンス・登録・ラベリング・市販後監視・臨床試験等を包括的に規定する中核規則。2016年12月9日公布。",
        category: "包括規制",
      },
      {
        title: "SAHPGL-MD-04 Guideline for Classification of Medical Devices and IVDs",
        date: "2024-08（v4）",
        url: "https://www.sahpra.org.za/wp-content/uploads/2024/08/SAHPGL-MD-04_v4-Guideline-for-Classification-of-MD-and-IVDs1.pdf",
        description:
          "医療機器及びIVDの4クラス分類（Class A/B/C/D）に関するガイドライン。GHTF/IMDRFの分類規則に整合。",
        category: "分類",
      },
      {
        title: "SAHPGL-MD-07 Guideline on Licensing of Medical Device Establishments",
        date: "2023-02（v4）",
        url: "https://www.sahpra.org.za/wp-content/uploads/2023/02/SAHPGL-MD-07_v4-Guideline-on-Questions-and-Answers-Licensing-of-Medical-Device-Establishments.pdf",
        description:
          "医療機器施設ライセンス（Manufacturer / Distributor / Wholesaler）の取得・更新・変更に関するQ&Aガイドライン。",
        category: "施設許可",
      },
      {
        title: "SAHPGL-MD-03 Guideline for Medical Device Vigilance (Adverse Event Reporting)",
        date: "2024-12（v4）",
        url: "https://www.sahpra.org.za/wp-content/uploads/2024/12/SAHPGL-MD-03_v4-Guideline-for-Medical-Device-Adverse-Event-Reporting.pdf",
        description:
          "医療機器の有害事象報告及びField Safety Corrective Action（FSCA）に関するガイドライン。GHTF SG2ガイダンスに整合。",
        category: "市販後",
      },
      {
        title: "SAHPGL-MD-16 Guideline on Clinical Evaluation of Medical Devices",
        date: "2025-09（v1）",
        url: "https://www.sahpra.org.za/wp-content/uploads/2025/09/SAHPGL-MD-16_v1-Guideline-on-Clinical-Evaluation-of-Medical-Devices.pdf",
        description:
          "医療機器の臨床評価に関するガイドライン。臨床データの収集・分析・評価の要件を規定。",
        category: "臨床評価",
      },
      {
        title: "SAHPGL-MD-17 Guideline on Clinical Investigation of Medical Devices",
        date: "2025-09（v1）",
        url: "https://www.sahpra.org.za/wp-content/uploads/2025/09/SAHPGL-MD-17_v1-Guideline-on-Clinical-Investigation-of-Medical-Devices.pdf",
        description:
          "南アフリカ国内で実施する医療機器の臨床試験要件。ISO 14155:2020に整合。SAHPRAの事前承認と倫理委員会の承認が必要。",
        category: "臨床試験",
      },
      {
        title: "MD08 Regulatory Requirements for AI/ML-enabled Medical Devices",
        date: "2025-09",
        url: "https://www.sahpra.org.za/wp-content/uploads/2025/09/MD08-20252026_-SAHPRA-Communication-to-Industry-AI-Medical-devices_Acknowledgements.pdf",
        description:
          "AI/ML搭載医療機器の規制要件に関するガイダンス。SAHPRA 2025-2030戦略計画に基づく。",
        category: "AI/ML",
      },
    ],

    relatedLaws: [
      {
        title: "National Health Act (Act 61 of 2003)",
        category: "保健法",
        enacted: "2003",
        url: "https://www.gov.za/documents/national-health-act",
        relevance:
          "南アフリカの国民保健制度の枠組み法。医療機器が使用される医療施設の基準や臨床試験の倫理的枠組みに関連。",
      },
      {
        title: "National Health Insurance Act (Act 20 of 2023)",
        category: "医療保険",
        enacted: "2024-05-15（署名）",
        url: "https://www.health.gov.za/nhi/",
        relevance:
          "国民皆保険制度（NHI）の設立根拠法。2024年5月15日に大統領が署名。段階的実施（2024〜2028年予定）。医療機器の償還制度に大きな影響を与える可能性。",
      },
      {
        title: "Protection of Personal Information Act (POPIA, Act 4 of 2013)",
        category: "個人情報保護",
        enacted: "2013（2021年7月完全施行）",
        url: "https://popia.co.za/",
        relevance:
          "医療機器が取り扱う個人健康情報の保護要件。コネクテッドデバイスやSaMDに直接影響。",
      },
      {
        title: "Consumer Protection Act (Act 68 of 2008)",
        category: "消費者保護",
        enacted: "2008",
        url: "https://www.gov.za/documents/consumer-protection-act",
        relevance:
          "医療機器を含む消費者製品の安全性・品質・表示に関する一般的な消費者保護規定。",
      },
    ],

    classification: {
      system: "4クラス制（Class A / B / C / D）",
      basis: "リスクベース（GHTF/IMDRF整合）",
      classes: [
        {
          name: "Class A",
          nameJa: "クラスA",
          riskLevel: "低リスク",
          description:
            "最も低いリスクの医療機器。非侵襲的で一般的な用途のものが該当。",
          examples: ["非滅菌の外科器具", "聴診器", "車椅子", "弾性包帯"],
          approvalPath: "施設ライセンス + 登録（Call-Up後。自己宣言ベースの予定）",
        },
        {
          name: "Class B",
          nameJa: "クラスB",
          riskLevel: "低〜中リスク",
          description:
            "低〜中リスクの医療機器。短期侵襲的デバイスや一部のエネルギー使用デバイスが該当。",
          examples: ["吸引器", "シリンジポンプ", "超音波診断装置", "歯科充填材"],
          approvalPath: "施設ライセンス + 登録（技術文書審査）",
        },
        {
          name: "Class C",
          nameJa: "クラスC",
          riskLevel: "中〜高リスク",
          description:
            "中〜高リスクの医療機器。長期侵襲的デバイスや一部のインプラントが該当。",
          examples: ["人工呼吸器", "骨固定プレート", "透析装置", "冠動脈カテーテル"],
          approvalPath: "施設ライセンス + 登録（詳細な技術文書審査・臨床データ要求）",
        },
        {
          name: "Class D",
          nameJa: "クラスD",
          riskLevel: "高リスク",
          description:
            "最高リスクの医療機器。生命維持・心臓血管系インプラント等が該当。",
          examples: ["埋込み型心臓ペースメーカー", "薬剤溶出ステント", "人工心臓弁", "人工内耳"],
          approvalPath: "施設ライセンス + 登録（最も厳格な審査・臨床データ必須）",
        },
      ],
      rules: [
        {
          id: "SAHPGL-MD-04 分類規則",
          description:
            "GHTF/IMDRFの分類原則に基づく分類規則。意図する用途、侵襲性の程度、使用期間、エネルギー源の有無等により分類。IVDは独自の分類規則（Class A〜D）が適用。",
          url: "https://www.sahpra.org.za/wp-content/uploads/2024/08/SAHPGL-MD-04_v4-Guideline-for-Classification-of-MD-and-IVDs1.pdf",
        },
      ],
      totalProductCodes: "GHTF/IMDRFの分類規則に基づく（南アフリカ独自のProduct Code体系は未整備）",
    },

    conformityAssessment: {
      overview:
        "SAHPRAが直接審査を実施する。現在は施設ライセンス制度が先行運用中で、機器登録（Registration）は段階的Call-Up方式で導入予定。参照国（FDA/EU/Health Canada/TGA/PMDA/ANVISA等）の認可を活用するReliance Pathwayが計画されている。",
      routes: [
        {
          name: "Medical Device Establishment Licence (MDEL)",
          nameJa: "医療機器施設ライセンス",
          applicableClasses: ["全クラス"],
          description:
            "南アフリカで医療機器を製造・輸入・流通する全ての事業者に必要。Manufacturer（製造）、Distributor（輸入・流通）、Wholesaler（保管・輸送）の3種。2025年6月からISO 13485:2016認証が更新要件。",
          subtypes: [
            {
              name: "Manufacturer Licence",
              description:
                "医療機器の製造・梱包・ラベリング・保守・輸入・輸出を行う施設用。手数料: R25,200。",
            },
            {
              name: "Distributor Licence",
              description:
                "医療機器の輸入・輸出・流通を行う施設用。手数料: R15,000。",
            },
            {
              name: "Wholesaler Licence",
              description:
                "医療機器の保管・輸送・配送を行う施設用。手数料: R15,000。",
            },
          ],
          avgReviewTime: "通常数ヶ月（SAHPRAの処理能力に依存）",
          fee: "Manufacturer: R25,200 / Distributor: R15,000 / Wholesaler: R15,000 + 年次維持費",
          url: "https://www.sahpra.org.za/medical-devices/",
        },
        {
          name: "Medical Device Registration（段階的導入予定）",
          nameJa: "医療機器登録",
          applicableClasses: ["全クラス（Call-Up順）"],
          description:
            "機器個別の登録制度。SAHPRAが Call-Up Notice を発行し、リスクの高いクラスから順次登録を求める方式。2025年11月時点で Call-Up Notice は未発行。参照国の認可を活用する Reliance Pathway を導入予定。登録証の有効期間は5年。",
          subtypes: [
            {
              name: "Full Assessment（完全審査）",
              description:
                "技術文書の完全な審査。安全性・性能・品質に関する包括的なエビデンスが必要。",
            },
            {
              name: "Reliance Pathway（参照経路）",
              description:
                "参照国（FDA/EU/Health Canada/TGA/PMDA/ANVISA/WHO PQ）の認可を活用した簡略化審査。",
            },
          ],
          avgReviewTime: "未確定（Call-Up未開始のため実績なし）",
          fee: "未確定（登録開始時にGovernment Gazetteで公示予定）",
          url: "https://www.sahpra.org.za/medical-devices/",
        },
        {
          name: "Clinical Investigation Approval",
          nameJa: "臨床試験承認",
          applicableClasses: ["全クラス（治験機器）"],
          description:
            "南アフリカ国内で医療機器の臨床試験を実施するにはSAHPRAの事前承認が必要。SAHPRA RIMS（Regulatory Information Management System）経由で申請。倫理委員会（REC）の承認も別途必要。ISO 14155:2020に整合。",
          subtypes: [],
          avgReviewTime: "SAHPRAに確認が必要（明確な目標期間は未公表）",
          fee: "Government Gazetteの手数料規則に準拠",
          url: "https://www.sahpra.org.za/clinical-trials/",
        },
      ],
    },

    electronicSubmission: {
      system: "SAHPRA Medical Device Submissions Portal (MDSP) / SAHPRA Engagement Portal",
      url: "https://www.sahpra.org.za/medical-devices/",
      description:
        "施設ライセンス申請はSAHPRA MDSP経由で電子提出。2025年4月にSAHPRA Engagement Portalが導入され、申請管理・文書アップロード・リアルタイム通知等のデジタル化が進行。臨床試験申請はSAHPRA RIMS経由。医薬品はeCTDポータルも運用中。",
      mandatory: true,
    },

    udi: {
      required: false,
      system: "未導入（IMDRF UDIガイダンスに準拠した導入を検討中）",
      description:
        "2026年4月時点で南アフリカ独自のUDI制度は未導入。SAHPRAはIMDRFメンバーとしてUDIガイダンスの策定に参加しており、将来的なUDI制度の導入が見込まれるが、具体的な導入時期は未定。機器登録制度の本格稼働後に段階的に導入される可能性が高い。",
      url: "https://www.imdrf.org/documents/udi-guidance-unique-device-identification-udi-medical-devices",
      timeline: "未定（機器登録制度の本格稼働後に導入予定）",
    },

    postMarket: {
      adverseEventReporting: {
        system: "SAHPRA Medical Device Vigilance System（SAHPGL-MD-03に基づく）",
        mandatory: true,
        url: "https://www.sahpra.org.za/wp-content/uploads/2024/12/SAHPGL-MD-03_v4-Guideline-for-Medical-Device-Adverse-Event-Reporting.pdf",
        description:
          "製造業者・輸入業者・Local Responsible Person（LRP）は重篤な有害事象及びField Safety Corrective Action（FSCA）をSAHPRAに報告する義務がある。GHTF SG2ガイダンスに整合した報告要件。",
      },
      recalls: {
        authority: "SAHPRA",
        description:
          "SAHPRAは医療機器のリコール及びField Safety Corrective Action（FSCA）を監督。製造業者・輸入業者はリコール発生時にSAHPRAへ通知義務。リコール分類はリスクレベルに基づく。",
        url: "https://www.sahpra.org.za/wp-content/uploads/2020/01/Recalls_Vigilance_Medical_Devices_IVDs_Nov19_v3.pdf",
      },
      surveillance:
        "SAHPRA Health Products Vigilance — 市販後安全性監視、FSCA監視、医療機器有害事象データベース",
    },

    certificateOfFreeSale: {
      available: true,
      issuingAuthority: "SAHPRA",
      name: "Certificate of Free Sale (CFS)",
      description:
        "SAHPRAにライセンスされた製造業者について、当該医療機器の製造元であることを確認する証明書。ただし、SAHPRAが安全性・性能を評価したことを証明するものではない点に注意。輸出先国の当局が要求する場合に使用。",
      processingTime: "15営業日（完全な申請書類の提出を条件）",
      url: "https://www.sahpra.org.za/document/md020-certificate-of-free-sale/",
    },

    reimbursement: {
      system: "二重構造：公的医療（公立病院）+ 民間Medical Aid Schemes / NHI（段階的導入中）",
      authority: "National Department of Health / Council for Medical Schemes",
      description:
        "南アフリカの医療制度は公的セクター（人口の約84%が依存）と民間セクター（Medical Aid Schemes、約16%がカバー）の二重構造。公的セクターでは政府予算による調達が中心で、State Tender Board を通じた入札制度。2024年5月にNational Health Insurance Act（NHI法）が署名され、国民皆保険制度の段階的導入（2024〜2028年）が進行中。NHI完全実施後は医療機器の償還制度が大きく変わる可能性があるが、具体的な償還メカニズムは未確定。",
      codingSystems: [
        "ICD-10（診断コード）",
        "NAPPI コード（National Pharmaceutical Product Interface — 医薬品・医療機器のコーディング）",
      ],
      url: "https://www.health.gov.za/nhi/",
    },

    marketingRules: {
      authority: "SAHPRA",
      description:
        "Medicines and Related Substances Act Section 18 に基づき、医療機器の広告は所定の要件に準拠しなければならない。広告は正確・完全・明瞭で、一般公衆及び医療従事者の信頼を促進するものでなければならない。虚偽又は誤解を招く表示は Section 29 により犯罪（最大10年の禁固刑）。",
      keyRules: [
        "Section 18: 医療機器の広告は所定要件への準拠が必要",
        "広告は正確・完全・明瞭で、誤解を招く表示の禁止",
        "登録された安全性・品質・有効性のエビデンスから逸脱する広告の禁止",
        "Section 29: 虚偽表示は犯罪（罰金又は最大10年の禁固）",
        "Marketing Code of Authority (MCA) — 業界自主規制コード",
        "Medical Device Code of Ethical Marketing and Business Practice",
      ],
    },

    mdsap: {
      status: "アフィリエイトメンバー（2025年4月加盟）",
      description:
        "SAHPRAは2025年4月4日にMDSAP（Medical Device Single Audit Program）にアフィリエイトメンバーとして加盟。MDSAP Forumの一部セッションへの参加権、MDSAP参加施設リスト・監査情報へのアクセス権を取得。製造業者のグローバルな品質管理体制の監視能力が強化された。ただし、現時点ではMDSAP監査報告書の正式な受入れ（施設ライセンスの代替）は未確定。",
    },

    internationalStandards: {
      iso13485: {
        accepted: true,
        notes:
          "2025年6月1日からSAHPRA認定CABによるISO 13485:2016認証が施設ライセンス（更新）の必須要件。2028年4月1日までに全ライセンス保有者が認証を取得する必要がある。",
      },
      iso14971: {
        accepted: true,
        notes: "リスクマネジメントの参照規格として使用。機器登録時の技術文書に含める必要がある。",
      },
      iec62304: {
        accepted: true,
        notes: "ソフトウェアライフサイクル要求の参照規格。AI/MLガイダンスでも参照。",
      },
      iec60601: {
        accepted: true,
        notes: "医用電気機器の安全・性能要求の参照規格。SANS（South African National Standards）としても採用。",
      },
      others: [
        { standard: "ISO 10993 シリーズ", notes: "生体適合性評価の参照規格" },
        { standard: "ISO 14155:2020", notes: "医療機器の臨床試験に関するGCP要求。SAHPGL-MD-17で参照。" },
        { standard: "SANS規格", notes: "SABSが発行する南アフリカ国家規格。IEC/ISO規格を多数採用。" },
      ],
    },

    recentDevelopments: [
      {
        date: "2025-09",
        title: "AI/ML医療機器ガイダンス発行",
        description:
          "SAHPRAが「Regulatory Requirements for AI/ML-enabled Medical Devices」を2025年9月26日に発行。AI/ML搭載医療機器の規制枠組みを初めて明確化。SAHPRA 2025-2030戦略計画に基づく。",
      },
      {
        date: "2025-09",
        title: "臨床評価・臨床試験ガイダンス発行",
        description:
          "SAHPGL-MD-16（臨床評価）及びSAHPGL-MD-17（臨床試験）のv1を2025年9月に発行。医療機器の臨床エビデンス要件を体系化。",
      },
      {
        date: "2025-06",
        title: "ISO 13485認証の必須化開始",
        description:
          "2025年6月1日からSAHPRA認定CABによるISO 13485:2016認証が施設ライセンス更新の必須要件に。2028年4月1日までの移行期間。",
      },
      {
        date: "2025-04",
        title: "MDSAP アフィリエイトメンバー加盟",
        description:
          "SAHPRAが2025年4月4日にMDSAPにアフィリエイトメンバーとして加盟。グローバルな品質管理体制の監視能力を強化。",
      },
      {
        date: "2025-04",
        title: "SAHPRA Engagement Portal 導入",
        description:
          "2025年4月1日にSAHPRA Engagement Portalを導入。申請管理・文書処理・リアルタイム通知等のデジタル化を推進。",
      },
      {
        date: "2024-05",
        title: "National Health Insurance Act 署名",
        description:
          "2024年5月15日にNHI法が大統領署名。国民皆保険制度の段階的導入が開始。医療機器の償還制度に将来的な大きな影響。",
      },
    ],

    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- Pakistan ---
  // =========================================================================
  {
    code: "PAK",
    country: "パキスタン",
    countryEn: "Pakistan",
    region: "ASPAC",
    flag: "🇵🇰",

    legalSystemOverview: {
      type: "連邦制（Federal system）",
      description:
        "パキスタンの医療機器規制はDRAP（Drug Regulatory Authority of Pakistan）が管轄する。2012年のDRAP Act（Act X of 2012）により設立されたDRAPが、医薬品・医療機器の両方を統括。2017年にMedical Devices Rules 2017が制定され、医療機器の登録・輸入・製造に関する規制枠組みが整備された。GHTF/IMDRFの4クラス分類（Class A/B/C/D）を採用し、リスクベースの規制を実施。",
      keyCharacteristics: [
        "DRAPによる一元的な連邦規制体制",
        "リスクベースの4クラス分類（Class A/B/C/D）",
        "Medical Devices Rules 2017に基づく登録制度",
        "3つの適合性評価オプション（Option A/B/C）",
        "先行認可国（CE/FDA/TGA等）の認証を参考にした審査",
      ],
    },

    authorities: [
      {
        name: "DRAP",
        fullName: "Drug Regulatory Authority of Pakistan",
        localName: null,
        role: "医療機器の登録・輸入許可・製造許可・市販後監視。主管当局。",
        url: "https://www.dfrh.org.pk/",
        isPrimary: true,
      },
    ],

    notifiedBodies: {
      system: "なし（DRAP が直接審査）",
      description:
        "パキスタンではNotified Body制度は存在しない。DRAPが直接、医療機器の登録審査を実施する。ただし適合性評価オプションによりISO 13485認証等の第三者認証が事前要件となる。",
      bodies: [],
    },

    deviceDefinition: {
      legalDefinition:
        "Medical Devices Rules 2017に定義。疾病の診断・治療・予防・監視・軽減等を目的とする機器・装置・器具・材料・ソフトウェア等で、主たる意図する作用が薬理学的・免疫学的・代謝的手段によらないもの。GHTF定義に準拠。",
      scope:
        "IVD（体外診断用医療機器）も適用対象。医療機器全般を包括的に規制。",
      notes:
        "GHTF/IMDRFの定義に整合。規制対象の範囲は段階的に拡大中。",
    },

    primaryLaw: {
      title: "DRAP Act 2012 (Act X of 2012)",
      originalTitle: null,
      enacted: "2012",
      lastAmended: null,
      url: "https://www.dfrh.org.pk/",
      description:
        "DRAPの設立根拠法。医薬品・医療機器の規制権限をDRAPに付与。医療機器の詳細規制はMedical Devices Rules 2017で規定。",
    },

    implementingRegulations: [
      {
        title: "Medical Devices Rules 2017",
        date: "2017",
        url: "https://www.dfrh.org.pk/",
        description:
          "医療機器の登録・分類・輸入・製造・ラベリング等の詳細を規定する主要な施行規則。",
        category: "医療機器",
      },
    ],

    relatedLaws: [],

    classification: {
      system: "4クラス制（Class A/B/C/D）",
      basis: "リスクベース（GHTF/IMDRF分類ルールに準拠）。意図する用途・侵襲性・使用期間・エネルギー源等に基づく。",
      classes: [
        {
          name: "Class A",
          nameJa: "クラスA",
          riskLevel: "低",
          description: "一般的な低リスク機器。登録申請が必要。",
          examples: ["弾性包帯", "聴診器", "舌圧子", "車椅子"],
          approvalPath: "DRAP登録（Option A/B/C）",
        },
        {
          name: "Class B",
          nameJa: "クラスB",
          riskLevel: "中低",
          description: "中程度の低リスク機器。登録申請が必要。",
          examples: ["血圧計", "補聴器", "超音波診断装置", "歯科用材料"],
          approvalPath: "DRAP登録（Option A/B/C）",
        },
        {
          name: "Class C",
          nameJa: "クラスC",
          riskLevel: "中高",
          description: "中高リスク機器。登録申請＋臨床評価が必要。",
          examples: ["人工関節", "冠動脈ステント", "人工呼吸器", "透析装置"],
          approvalPath: "DRAP登録（Option A/B/C）＋臨床評価",
        },
        {
          name: "Class D",
          nameJa: "クラスD",
          riskLevel: "高",
          description: "最高リスク機器。最も厳格な審査。臨床データが必要。",
          examples: ["人工心臓弁", "埋込み型除細動器", "薬剤溶出ステント"],
          approvalPath: "DRAP登録（Option A/B/C）＋臨床データ",
        },
      ],
      rules: [
        "GHTF/IMDRFの分類ルールに準拠",
        "Medical Devices Rules 2017のScheduleに詳細規定",
        "IVDは別途分類ルール適用",
      ],
      totalProductCodes: "GMDN（Global Medical Device Nomenclature）を参照",
    },

    conformityAssessment: {
      overview:
        "全クラスの医療機器にDRAP登録が必要。3つの適合性評価オプション（Option A/B/C）から選択可能。Option Aは先行認可国の承認に基づく簡略審査、Option BはISO 13485認証に基づく審査、Option CはDRAPの独立審査。",
      routes: [
        {
          name: "Option A — Prior Approval Based",
          nameJa: "オプションA — 先行認可ベース",
          applicableClasses: ["Class A", "Class B", "Class C", "Class D"],
          description:
            "参照国（CE/FDA/TGA/Health Canada等）の既存承認に基づく簡略審査。先行認可国の承認書類一式を提出。",
          subtypes: [],
          avgReviewTime: "要確認",
          avgReviewTimeSource: null,
          fee: "要確認",
          feeSource: null,
          url: "https://www.dfrh.org.pk/",
        },
        {
          name: "Option B — ISO 13485 Based",
          nameJa: "オプションB — ISO 13485ベース",
          applicableClasses: ["Class A", "Class B", "Class C", "Class D"],
          description:
            "ISO 13485認証を基盤とした適合性評価。ISO 13485認証書に加え、技術文書・臨床評価等を提出。",
          subtypes: [],
          avgReviewTime: "要確認",
          avgReviewTimeSource: null,
          fee: "要確認",
          feeSource: null,
          url: "https://www.dfrh.org.pk/",
        },
        {
          name: "Option C — DRAP Independent Review",
          nameJa: "オプションC — DRAP独立審査",
          applicableClasses: ["Class A", "Class B", "Class C", "Class D"],
          description:
            "DRAPによる独立した技術文書評価。先行認可やISO 13485認証がない場合に適用。",
          subtypes: [],
          avgReviewTime: "要確認",
          avgReviewTimeSource: null,
          fee: "要確認",
          feeSource: null,
          url: "https://www.dfrh.org.pk/",
        },
      ],
    },

    electronicSubmission: {
      system: "DRAP オンラインポータル",
      url: "https://www.dfrh.org.pk/",
      description:
        "DRAPのオンラインポータル経由で申請可能。電子申請の整備は進行中。",
      mandatory: false,
    },

    udi: {
      required: false,
      system: "未導入",
      description:
        "パキスタンではUDI制度は現時点で未導入。将来的な導入計画は検討段階。",
      url: null,
      timeline: "未定",
    },

    postMarket: {
      adverseEventReporting: {
        system: "DRAP有害事象報告制度",
        mandatory: true,
        url: "https://www.dfrh.org.pk/",
        description:
          "製造業者・輸入業者は重大な有害事象をDRAPに報告する義務がある。報告制度は整備途上。",
      },
      recalls: {
        authority: "DRAP",
        description:
          "DRAPがリコールを監督。安全性に関する問題が発見された場合、市場からの回収を命令可能。",
        url: "https://www.dfrh.org.pk/",
      },
      surveillance:
        "市販後監視の要件はMedical Devices Rules 2017に規定。実施体制は発展途上。",
    },

    certificateOfFreeSale: {
      available: true,
      issuingAuthority: "輸出国の規制当局",
      name: "Certificate of Free Sale (CFS)",
      description:
        "DRAP登録申請時に、原産国の規制当局が発行するCFSの提出が求められる場合がある。",
      processingTime: "輸出国側の手続きによる",
      url: "https://www.dfrh.org.pk/",
    },

    reimbursement: {
      system: "公的医療制度（限定的）",
      authority: "Ministry of National Health Services, Regulations and Coordination",
      description:
        "パキスタンの医療制度は公立病院と民間セクターが混在。医療機器に特化した体系的な償還制度は未整備。公立病院での調達は政府予算に基づく。",
      codingSystems: [],
      url: null,
    },

    marketingRules: {
      authority: "DRAP",
      description:
        "Medical Devices Rules 2017に基づき、医療機器の広告・マーケティングに関する規制が存在。虚偽・誇大広告は禁止。",
      keyRules: [
        "未登録医療機器の広告は禁止",
        "虚偽・誇大な効能表示の禁止",
      ],
    },

    mdsap: {
      status: "非参加（Non-participant）",
      description:
        "パキスタンはMDSAPに参加していない。MDSAP監査報告書はDRAPの規制要件を代替しない。",
    },

    internationalStandards: {
      iso13485: {
        accepted: true,
        notes: "適合性評価オプションBの基盤。ISO 13485認証の取得が推奨される。",
      },
      iso14971: {
        accepted: true,
        notes: "リスクマネジメント。技術文書のリスク評価に適用。",
      },
      iec62304: {
        accepted: true,
        notes: "ソフトウェアライフサイクル。SaMD申請に参照。",
      },
      iec60601: {
        accepted: true,
        notes: "医用電気機器の安全・性能要求。",
      },
      others: [],
    },

    recentDevelopments: [
      {
        date: "2017",
        title: "Medical Devices Rules 2017の制定",
        description:
          "DRAP Act 2012に基づく医療機器の包括的な規制規則が制定。4クラス分類と3つの適合性評価オプションを導入。",
      },
    ],

    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- Kenya ---
  // =========================================================================
  {
    code: "KEN",
    country: "ケニア",
    countryEn: "Kenya",
    region: "Middle East & Africa",
    flag: "🇰🇪",

    legalSystemOverview: {
      type: "中央集権制（Centralized system）",
      description:
        "ケニアの医療機器規制はPPB（Pharmacy and Poisons Board）が管轄する。Cap 244（Pharmacy and Poisons Act）を根拠法とし、医薬品・医療機器の両方を規制。4クラス分類（Class A/B/C/D）を採用し、リスクベースの市販前審査を実施。2024年3月にMDSAPアフィリエイトメンバーとなり、国際的な規制整合を推進。",
      keyCharacteristics: [
        "PPBによる一元的な規制体制",
        "リスクベースの4クラス分類（Class A/B/C/D）",
        "Cap 244（Pharmacy and Poisons Act）が根拠法",
        "FIFO/Fast Track/Expedited の3つの審査経路",
        "MDSAPアフィリエイトメンバー（2024年3月加入）",
        "東アフリカ共同体（EAC）との規制調和を推進",
      ],
    },

    authorities: [
      {
        name: "PPB",
        fullName: "Pharmacy and Poisons Board",
        localName: null,
        role: "医療機器の登録・市販後監視・査察・リコール管理。主管当局。",
        url: "https://www.pharmacyboardkenya.org/",
        isPrimary: true,
      },
    ],

    notifiedBodies: {
      system: "なし（PPB が直接審査）",
      description:
        "ケニアではNotified Body制度は存在しない。PPBが直接、医療機器の登録審査を実施する。",
      bodies: [],
    },

    deviceDefinition: {
      legalDefinition:
        "Cap 244およびPPBガイダンスに定義。疾病の診断・治療・予防・監視・軽減等を目的とする機器・装置・器具・材料・ソフトウェア等で、主たる意図する作用が薬理学的・免疫学的・代謝的手段によらないもの。GHTF/IMDRF定義に準拠。",
      scope:
        "IVD（体外診断用医療機器）も適用対象。医療機器全般を包括的に規制。",
      notes:
        "東アフリカ共同体（EAC）の医療機器調和ガイドラインとの整合を推進中。",
    },

    primaryLaw: {
      title: "Pharmacy and Poisons Act (Cap 244)",
      originalTitle: null,
      enacted: "1957（複数回改正）",
      lastAmended: null,
      url: "https://www.pharmacyboardkenya.org/",
      description:
        "薬局・医薬品・毒物の規制に関する基本法。医療機器の規制根拠もこの法律に含まれる。PPBの設立・権限の根拠法。",
    },

    implementingRegulations: [
      {
        title: "PPB Medical Devices Registration Guidelines",
        date: null,
        url: "https://www.pharmacyboardkenya.org/",
        description:
          "医療機器の登録手続・分類・ラベリング・品質管理等の詳細を規定するPPBガイドライン。",
        category: "医療機器",
      },
    ],

    relatedLaws: [],

    classification: {
      system: "4クラス制（Class A/B/C/D）",
      basis: "リスクベース（GHTF/IMDRF分類ルールに準拠）。意図する用途・侵襲性・使用期間・エネルギー源等に基づく。",
      classes: [
        {
          name: "Class A",
          nameJa: "クラスA",
          riskLevel: "低",
          description: "一般的な低リスク機器。PPB登録が必要。",
          examples: ["弾性包帯", "聴診器", "舌圧子", "車椅子"],
          approvalPath: "PPB登録",
        },
        {
          name: "Class B",
          nameJa: "クラスB",
          riskLevel: "中低",
          description: "中程度の低リスク機器。PPB登録が必要。",
          examples: ["血圧計", "補聴器", "超音波診断装置", "歯科用材料"],
          approvalPath: "PPB登録",
        },
        {
          name: "Class C",
          nameJa: "クラスC",
          riskLevel: "中高",
          description: "中高リスク機器。PPB登録＋臨床評価が必要。",
          examples: ["人工関節", "冠動脈ステント", "人工呼吸器", "透析装置"],
          approvalPath: "PPB登録＋臨床評価",
        },
        {
          name: "Class D",
          nameJa: "クラスD",
          riskLevel: "高",
          description: "最高リスク機器。最も厳格な審査。臨床データが必要。",
          examples: ["人工心臓弁", "埋込み型除細動器", "薬剤溶出ステント"],
          approvalPath: "PPB登録＋臨床データ",
        },
      ],
      rules: [
        "GHTF/IMDRFの分類ルールに準拠",
        "PPBガイドラインに詳細規定",
        "IVDは別途分類ルール適用",
      ],
      totalProductCodes: "GMDN（Global Medical Device Nomenclature）を参照",
    },

    conformityAssessment: {
      overview:
        "全クラスの医療機器にPPB登録が必要。審査経路はFIFO（先着順通常審査）、Fast Track（優先審査）、Expedited（緊急審査）の3つ。先行認可国（CE/FDA等）の承認書類を参考にした審査を実施。",
      routes: [
        {
          name: "FIFO (First In, First Out)",
          nameJa: "FIFO（先着順通常審査）",
          applicableClasses: ["Class A", "Class B", "Class C", "Class D"],
          description:
            "標準的な審査経路。申請順に審査が行われる。技術文書・臨床評価・品質管理文書を提出。",
          subtypes: [],
          avgReviewTime: "要確認",
          avgReviewTimeSource: null,
          fee: "要確認",
          feeSource: null,
          url: "https://www.pharmacyboardkenya.org/",
        },
        {
          name: "Fast Track",
          nameJa: "Fast Track（優先審査）",
          applicableClasses: ["Class A", "Class B", "Class C", "Class D"],
          description:
            "特定の条件を満たす医療機器に対する優先審査経路。公衆衛生上の必要性が高い機器等が対象。",
          subtypes: [],
          avgReviewTime: "FIFO より短縮",
          avgReviewTimeSource: null,
          fee: "要確認",
          feeSource: null,
          url: "https://www.pharmacyboardkenya.org/",
        },
        {
          name: "Expedited",
          nameJa: "Expedited（緊急審査）",
          applicableClasses: ["Class A", "Class B", "Class C", "Class D"],
          description:
            "緊急性の高い医療機器に対する迅速審査経路。パンデミック対応機器や代替品がない機器等が対象。",
          subtypes: [],
          avgReviewTime: "最短の審査期間",
          avgReviewTimeSource: null,
          fee: "要確認",
          feeSource: null,
          url: "https://www.pharmacyboardkenya.org/",
        },
      ],
    },

    electronicSubmission: {
      system: "PPB オンラインポータル",
      url: "https://www.pharmacyboardkenya.org/",
      description:
        "PPBのオンラインポータル経由で申請可能。電子申請の整備を推進中。",
      mandatory: false,
    },

    udi: {
      required: false,
      system: "未導入（検討段階）",
      description:
        "ケニアではUDI制度は現時点で未導入。MDSAP参加に伴い、将来的な導入が検討される可能性。",
      url: null,
      timeline: "未定",
    },

    postMarket: {
      adverseEventReporting: {
        system: "PPB有害事象報告制度",
        mandatory: true,
        url: "https://www.pharmacyboardkenya.org/",
        description:
          "製造業者・輸入業者・医療従事者は有害事象をPPBに報告する義務がある。",
      },
      recalls: {
        authority: "PPB",
        description:
          "PPBがリコールを監督。安全性に関する問題が発見された場合、市場からの回収を命令可能。",
        url: "https://www.pharmacyboardkenya.org/",
      },
      surveillance:
        "市販後監視の要件はPPBガイドラインに規定。MDSAPアフィリエイト参加により体制強化を推進中。",
    },

    certificateOfFreeSale: {
      available: true,
      issuingAuthority: "輸出国の規制当局",
      name: "Certificate of Free Sale (CFS)",
      description:
        "PPB登録申請時に、原産国の規制当局が発行するCFSの提出が求められる場合がある。",
      processingTime: "輸出国側の手続きによる",
      url: "https://www.pharmacyboardkenya.org/",
    },

    reimbursement: {
      system: "国民健康保険基金（NHIF）+ 民間保険",
      authority: "NHIF / Ministry of Health",
      description:
        "NHIFが公的医療保険を提供。医療機器に特化した体系的な償還制度は限定的。公立病院での調達は政府予算・ドナー資金に基づく。",
      codingSystems: [],
      url: null,
    },

    marketingRules: {
      authority: "PPB",
      description:
        "PPBガイドラインに基づき、医療機器の広告・マーケティングに関する規制が存在。未登録機器の広告は禁止。",
      keyRules: [
        "未登録医療機器の広告は禁止",
        "虚偽・誇大な効能表示の禁止",
      ],
    },

    mdsap: {
      status: "アフィリエイトメンバー（Affiliate Member, 2024年3月加入）",
      description:
        "ケニアは2024年3月にMDSAPアフィリエイトメンバーとして加入。MDSAP監査報告書の活用を検討中。正式な参加国への移行を目指している。",
    },

    internationalStandards: {
      iso13485: {
        accepted: true,
        notes: "ISO 13485認証の取得が推奨される。登録審査で参照。",
      },
      iso14971: {
        accepted: true,
        notes: "リスクマネジメント。技術文書のリスク評価に適用。",
      },
      iec62304: {
        accepted: true,
        notes: "ソフトウェアライフサイクル。SaMD申請に参照。",
      },
      iec60601: {
        accepted: true,
        notes: "医用電気機器の安全・性能要求。",
      },
      others: [],
    },

    recentDevelopments: [
      {
        date: "2024-03",
        title: "MDSAPアフィリエイトメンバーとして加入",
        description:
          "ケニアが2024年3月にMDSAP（Medical Device Single Audit Program）のアフィリエイトメンバーとして正式に加入。国際的な規制整合の推進。",
      },
    ],

    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- Nigeria ---
  // =========================================================================
  {
    code: "NGA",
    country: "ナイジェリア",
    countryEn: "Nigeria",
    region: "Middle East & Africa",
    flag: "🇳🇬",

    legalSystemOverview: {
      type: "連邦制（Federal system）",
      description:
        "ナイジェリアの医療機器規制はNAFDAC（National Agency for Food and Drug Administration and Control）が管轄する。2024年に新たなMedical Device Regulations 2024が制定され、規制枠組みが大幅に刷新された。GHTF/IMDRFの4クラス分類（Class A/B/C/D）を採用し、NAPAMS電子申請システムによるオンライン申請を導入。",
      keyCharacteristics: [
        "NAFDACによる一元的な連邦規制体制",
        "リスクベースの4クラス分類（Class A/B/C/D）",
        "Medical Device Regulations 2024による刷新された規制枠組み",
        "NAPAMS（NAFDAC Automated Product Administration and Monitoring System）電子申請",
        "審査期間: 120営業日（標準）",
      ],
    },

    authorities: [
      {
        name: "NAFDAC",
        fullName: "National Agency for Food and Drug Administration and Control",
        localName: null,
        role: "医療機器の登録・市販後監視・査察・リコール管理・広告規制。主管当局。",
        url: "https://www.nafdac.gov.ng/",
        isPrimary: true,
      },
    ],

    notifiedBodies: {
      system: "なし（NAFDAC が直接審査）",
      description:
        "ナイジェリアではNotified Body制度は存在しない。NAFDACが直接、医療機器の登録審査を実施する。",
      bodies: [],
    },

    deviceDefinition: {
      legalDefinition:
        "Medical Device Regulations 2024に定義。疾病の診断・治療・予防・監視・軽減等を目的とする機器・装置・器具・材料・ソフトウェア等で、主たる意図する作用が薬理学的・免疫学的・代謝的手段によらないもの。GHTF/IMDRF定義に準拠。",
      scope:
        "IVD（体外診断用医療機器）も適用対象。医療機器全般を包括的に規制。",
      notes:
        "2024年の新規制により、定義と適用範囲が国際基準に整合。",
    },

    primaryLaw: {
      title: "NAFDAC Act (CAP N1 LFN 2004)",
      originalTitle: null,
      enacted: "1993（2004年改正）",
      lastAmended: "2004",
      url: "https://www.nafdac.gov.ng/",
      description:
        "NAFDACの設立根拠法。食品・医薬品・化粧品・医療機器・化学物質の規制権限をNAFDACに付与。",
    },

    implementingRegulations: [
      {
        title: "Medical Device Regulations 2024",
        date: "2024",
        url: "https://www.nafdac.gov.ng/",
        description:
          "医療機器の登録・分類・市販後監視・ラベリング等の詳細を規定する主要な施行規則。2024年に制定された最新の規制枠組み。",
        category: "医療機器",
      },
    ],

    relatedLaws: [],

    classification: {
      system: "4クラス制（Class A/B/C/D）",
      basis: "リスクベース（GHTF/IMDRF分類ルールに準拠）。意図する用途・侵襲性・使用期間・エネルギー源等に基づく。",
      classes: [
        {
          name: "Class A",
          nameJa: "クラスA",
          riskLevel: "低",
          description: "一般的な低リスク機器。NAFDAC登録が必要。",
          examples: ["弾性包帯", "聴診器", "舌圧子", "車椅子"],
          approvalPath: "NAFDAC登録（NAPAMS経由）",
        },
        {
          name: "Class B",
          nameJa: "クラスB",
          riskLevel: "中低",
          description: "中程度の低リスク機器。NAFDAC登録が必要。",
          examples: ["血圧計", "補聴器", "超音波診断装置", "歯科用材料"],
          approvalPath: "NAFDAC登録（NAPAMS経由）",
        },
        {
          name: "Class C",
          nameJa: "クラスC",
          riskLevel: "中高",
          description: "中高リスク機器。NAFDAC登録＋臨床評価が必要。",
          examples: ["人工関節", "冠動脈ステント", "人工呼吸器", "透析装置"],
          approvalPath: "NAFDAC登録（NAPAMS経由）＋臨床評価",
        },
        {
          name: "Class D",
          nameJa: "クラスD",
          riskLevel: "高",
          description: "最高リスク機器。最も厳格な審査。臨床データが必要。",
          examples: ["人工心臓弁", "埋込み型除細動器", "薬剤溶出ステント"],
          approvalPath: "NAFDAC登録（NAPAMS経由）＋臨床データ",
        },
      ],
      rules: [
        "GHTF/IMDRFの分類ルールに準拠",
        "Medical Device Regulations 2024に詳細規定",
        "IVDは別途分類ルール適用",
      ],
      totalProductCodes: "GMDN（Global Medical Device Nomenclature）を参照",
    },

    conformityAssessment: {
      overview:
        "全クラスの医療機器にNAFDAC登録が必要。NAPAMS（NAFDAC Automated Product Administration and Monitoring System）電子申請システム経由でオンライン申請。標準審査期間は120営業日。先行認可国（CE/FDA等）の承認書類を参考にした審査を実施。",
      routes: [
        {
          name: "NAFDAC Standard Registration",
          nameJa: "NAFDAC標準登録",
          applicableClasses: ["Class A", "Class B", "Class C", "Class D"],
          description:
            "NAPAMS経由の標準的な登録審査。技術文書・臨床評価・品質管理文書・CFS等を提出。審査期間は120営業日。",
          subtypes: [],
          avgReviewTime: "120営業日",
          avgReviewTimeSource: null,
          fee: "要確認",
          feeSource: null,
          url: "https://www.nafdac.gov.ng/",
        },
      ],
    },

    electronicSubmission: {
      system: "NAPAMS（NAFDAC Automated Product Administration and Monitoring System）",
      url: "https://www.nafdac.gov.ng/",
      description:
        "NAPAMSは NAFDACの統合電子申請システム。全ての医療機器登録申請はNAPAMS経由でオンライン提出。",
      mandatory: true,
    },

    udi: {
      required: false,
      system: "未導入（検討段階）",
      description:
        "ナイジェリアではUDI制度は現時点で未導入。Medical Device Regulations 2024で将来的な導入の基盤が整備された。",
      url: null,
      timeline: "未定",
    },

    postMarket: {
      adverseEventReporting: {
        system: "NAFDAC有害事象報告制度",
        mandatory: true,
        url: "https://www.nafdac.gov.ng/",
        description:
          "製造業者・輸入業者・医療従事者は有害事象をNAFDACに報告する義務がある。Medical Device Regulations 2024で報告要件が強化。",
      },
      recalls: {
        authority: "NAFDAC",
        description:
          "NAFDACがリコールを監督。安全性に関する問題が発見された場合、市場からの回収を命令可能。",
        url: "https://www.nafdac.gov.ng/",
      },
      surveillance:
        "Medical Device Regulations 2024に基づく市販後監視要件。PMS報告書の提出義務が規定。",
    },

    certificateOfFreeSale: {
      available: true,
      issuingAuthority: "輸出国の規制当局",
      name: "Certificate of Free Sale (CFS)",
      description:
        "NAFDAC登録申請時に、原産国の規制当局が発行するCFSの提出が必要。",
      processingTime: "輸出国側の手続きによる",
      url: "https://www.nafdac.gov.ng/",
    },

    reimbursement: {
      system: "国民健康保険制度（NHIS）+ 民間保険",
      authority: "NHIA（National Health Insurance Authority）",
      description:
        "NHIAが公的医療保険を管轄。医療機器に特化した体系的な償還制度は限定的。公立病院での調達は政府予算に基づく。",
      codingSystems: [],
      url: null,
    },

    marketingRules: {
      authority: "NAFDAC",
      description:
        "NAFDACのガイドラインに基づき、医療機器の広告・マーケティングに関する規制が存在。未登録機器の広告は禁止。",
      keyRules: [
        "未登録医療機器の広告は禁止",
        "虚偽・誇大な効能表示の禁止",
        "広告にはNAFDAC登録番号の記載が必要",
      ],
    },

    mdsap: {
      status: "非参加（Non-participant）",
      description:
        "ナイジェリアはMDSAPに参加していない。MDSAP監査報告書はNAFDACの規制要件を代替しない。",
    },

    internationalStandards: {
      iso13485: {
        accepted: true,
        notes: "ISO 13485認証の取得が推奨される。登録審査で参照。",
      },
      iso14971: {
        accepted: true,
        notes: "リスクマネジメント。技術文書のリスク評価に適用。",
      },
      iec62304: {
        accepted: true,
        notes: "ソフトウェアライフサイクル。SaMD申請に参照。",
      },
      iec60601: {
        accepted: true,
        notes: "医用電気機器の安全・性能要求。",
      },
      others: [],
    },

    recentDevelopments: [
      {
        date: "2024",
        title: "Medical Device Regulations 2024の制定",
        description:
          "NAFDACが新たなMedical Device Regulations 2024を制定。4クラス分類・NAPAMS電子申請・市販後監視の強化等を導入し、規制枠組みを国際基準に整合。",
      },
    ],

    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- Morocco ---
  // =========================================================================
  {
    code: "MAR",
    country: "モロッコ",
    countryEn: "Morocco",
    region: "Middle East & Africa",
    flag: "🇲🇦",

    legalSystemOverview: {
      type: "中央集権制（Centralized system）",
      description:
        "モロッコの医療機器規制はDMP（Direction du Médicament et de la Pharmacie）が管轄してきたが、現在AMMPS（Agence Marocaine des Médicaments et des Produits de Santé）への移行が進行中。Loi 84-12（医療機器に関する法律）が根拠法。EU MDD/MDRに準拠した4クラス分類（Class I/IIa/IIb/III）を採用し、CE認証やFDA認証を広く認知・参照する規制アプローチ。",
      keyCharacteristics: [
        "DMP → AMMPS への規制当局移行が進行中",
        "EU MDD準拠のリスクベース4クラス分類（Class I/IIa/IIb/III）",
        "Loi 84-12が医療機器の基本法",
        "CE認証・FDA認証を広く認知・参照",
        "フランス語圏の規制伝統を踏襲",
        "北アフリカ・フランコフォン圏における規制ハブを目指す",
      ],
    },

    authorities: [
      {
        name: "DMP",
        fullName: "Direction du Médicament et de la Pharmacie",
        localName: "مديرية الأدوية والصيدلة",
        role: "医療機器の登録・市販後監視・査察。現行の主管当局（AMMPS移行まで）。",
        url: "https://www.sante.gov.ma/",
        isPrimary: true,
      },
      {
        name: "AMMPS",
        fullName: "Agence Marocaine des Médicaments et des Produits de Santé",
        localName: "الوكالة المغربية للأدوية والمنتجات الصحية",
        role: "DMPの機能を継承する新規制当局。設立・移行作業中。",
        url: "https://www.sante.gov.ma/",
        isPrimary: false,
      },
    ],

    notifiedBodies: {
      system: "なし（DMP/AMMPS が直接審査。CE認証を広く認知）",
      description:
        "モロッコではNotified Body制度は存在しないが、EU認定Notified BodyのCE証明書を広く認知・参照する。DMP/AMMPSが登録審査を実施。",
      bodies: [],
    },

    deviceDefinition: {
      legalDefinition:
        "Loi 84-12に定義。疾病の診断・治療・予防・監視・軽減等を目的とする機器・装置・器具・材料・ソフトウェア等で、主たる意図する作用が薬理学的・免疫学的・代謝的手段によらないもの。EU MDDの定義に準拠。",
      scope:
        "IVD（体外診断用医療機器）も適用対象。医療機器全般を規制。",
      notes:
        "フランス語圏の規制伝統を踏まえ、EU MDDの定義を基盤としている。EU MDRへの移行は検討段階。",
    },

    primaryLaw: {
      title: "Loi 84-12 relative aux dispositifs médicaux",
      originalTitle: "القانون رقم 84-12 المتعلق بالأجهزة الطبية",
      enacted: "2016",
      lastAmended: null,
      url: "https://www.sante.gov.ma/",
      description:
        "医療機器に関する基本法。医療機器の定義・分類・登録・市販後監視・広告規制等を規定。施行令・施行規則により詳細が補完される。",
    },

    implementingRegulations: [
      {
        title: "Décrets d'application de la Loi 84-12",
        date: null,
        url: "https://www.sante.gov.ma/",
        description:
          "Loi 84-12の施行令。医療機器の分類・登録手続・品質管理・市販後監視等の詳細を規定。段階的に公布中。",
        category: "医療機器",
      },
    ],

    relatedLaws: [
      {
        title: "Loi 09-08 relative à la protection des données personnelles",
        category: "データ保護",
        enacted: "2009",
        url: "https://www.cndp.ma/",
        relevance:
          "個人データ保護法。コネクテッドデバイス・SaMDが取り扱う個人医療情報のプライバシー要件に適用。",
      },
    ],

    classification: {
      system: "4クラス制（Class I/IIa/IIb/III）— EU MDD準拠",
      basis: "リスクベース（EU MDD分類ルールに準拠）。意図する用途・侵襲性・使用期間・エネルギー源等に基づく。",
      classes: [
        {
          name: "Class I",
          nameJa: "クラスI",
          riskLevel: "低",
          description: "低リスク機器。DMP/AMMPS登録が必要。",
          examples: ["弾性包帯", "聴診器", "舌圧子", "車椅子", "歩行補助器具"],
          approvalPath: "DMP/AMMPS登録",
        },
        {
          name: "Class IIa",
          nameJa: "クラスIIa",
          riskLevel: "中低",
          description: "中低リスク機器。DMP/AMMPS登録が必要。CE認証があれば審査が円滑化。",
          examples: ["血圧計", "補聴器", "超音波診断装置", "歯科用材料", "輸液セット"],
          approvalPath: "DMP/AMMPS登録（CE認証参照）",
        },
        {
          name: "Class IIb",
          nameJa: "クラスIIb",
          riskLevel: "中高",
          description: "中高リスク機器。DMP/AMMPS登録＋臨床評価が必要。CE/FDA認証を広く認知。",
          examples: ["人工呼吸器", "透析装置", "外科用レーザー", "輸液ポンプ", "コンタクトレンズ"],
          approvalPath: "DMP/AMMPS登録＋臨床評価（CE/FDA認証参照）",
        },
        {
          name: "Class III",
          nameJa: "クラスIII",
          riskLevel: "高",
          description: "最高リスク機器。最も厳格な審査。CE/FDA認証を広く認知。",
          examples: ["人工心臓弁", "冠動脈ステント", "埋込み型除細動器", "薬剤溶出ステント", "人工関節"],
          approvalPath: "DMP/AMMPS登録＋臨床データ（CE/FDA認証参照）",
        },
      ],
      rules: [
        "EU MDD分類ルールに準拠",
        "Loi 84-12の施行令に詳細規定",
        "IVDは別途分類ルール適用",
        "EU MDRへの分類ルール移行は検討段階",
      ],
      totalProductCodes: "GMDN（Global Medical Device Nomenclature）を参照",
    },

    conformityAssessment: {
      overview:
        "全クラスの医療機器にDMP/AMMPS登録が必要。CE認証やFDA認証を保有する製品は審査が円滑化される。EU認定Notified Bodyが発行したCE証明書やFDA 510(k)/PMAクリアランスを広く認知・参照。",
      routes: [
        {
          name: "DMP/AMMPS Standard Registration",
          nameJa: "DMP/AMMPS標準登録",
          applicableClasses: ["Class I", "Class IIa", "Class IIb", "Class III"],
          description:
            "標準的な登録審査。技術文書・臨床評価・品質管理文書・CFS等を提出。CE/FDA認証があれば審査が円滑化される。",
          subtypes: [],
          avgReviewTime: "要確認",
          avgReviewTimeSource: null,
          fee: "要確認",
          feeSource: null,
          url: "https://www.sante.gov.ma/",
        },
      ],
    },

    electronicSubmission: {
      system: "DMP/AMMPS ポータル（整備中）",
      url: "https://www.sante.gov.ma/",
      description:
        "電子申請システムはAMMPS移行に伴い整備中。現行は紙ベースとオンラインの併用。",
      mandatory: false,
    },

    udi: {
      required: false,
      system: "未導入（検討段階）",
      description:
        "モロッコではUDI制度は現時点で未導入。EU MDRへの整合に伴い、将来的な導入が検討される可能性。",
      url: null,
      timeline: "未定",
    },

    postMarket: {
      adverseEventReporting: {
        system: "DMP/AMMPS有害事象報告制度（マテリオビジランス）",
        mandatory: true,
        url: "https://www.sante.gov.ma/",
        description:
          "Loi 84-12に基づくマテリオビジランス制度。製造業者・輸入業者・医療従事者は有害事象をDMP/AMMPSに報告する義務がある。",
      },
      recalls: {
        authority: "DMP/AMMPS",
        description:
          "DMP/AMMPSがリコールを監督。安全性に関する問題が発見された場合、市場からの回収を命令可能。",
        url: "https://www.sante.gov.ma/",
      },
      surveillance:
        "Loi 84-12に基づく市販後監視要件。マテリオビジランス報告の提出義務が規定。AMMPS移行に伴い体制強化を予定。",
    },

    certificateOfFreeSale: {
      available: true,
      issuingAuthority: "輸出国の規制当局",
      name: "Certificate of Free Sale (CFS)",
      description:
        "DMP/AMMPS登録申請時に、原産国の規制当局が発行するCFSの提出が必要。CE認証書も重要な参照書類。",
      processingTime: "輸出国側の手続きによる",
      url: "https://www.sante.gov.ma/",
    },

    reimbursement: {
      system: "AMO（Assurance Maladie Obligatoire）+ RAMED + 民間保険",
      authority: "ANAM（Agence Nationale de l'Assurance Maladie）",
      description:
        "AMO（強制医療保険）が公的医療保険を提供。RAMED（低所得者向け医療扶助制度）も存在。医療機器に特化した体系的な償還制度は限定的。",
      codingSystems: [],
      url: null,
    },

    marketingRules: {
      authority: "DMP/AMMPS",
      description:
        "Loi 84-12に基づき、医療機器の広告・マーケティングに関する規制が存在。未登録機器の広告は禁止。",
      keyRules: [
        "未登録医療機器の広告は禁止",
        "虚偽・誇大な効能表示の禁止",
        "広告にはDMP/AMMPSの事前承認が必要な場合がある",
      ],
    },

    mdsap: {
      status: "非参加（Non-participant）",
      description:
        "モロッコはMDSAPに参加していない。MDSAP監査報告書はDMP/AMMPSの規制要件を代替しない。",
    },

    internationalStandards: {
      iso13485: {
        accepted: true,
        notes: "ISO 13485認証の取得が推奨される。CE認証の前提条件でもあり、登録審査で重視。",
      },
      iso14971: {
        accepted: true,
        notes: "リスクマネジメント。技術文書のリスク評価に適用。",
      },
      iec62304: {
        accepted: true,
        notes: "ソフトウェアライフサイクル。SaMD申請に参照。",
      },
      iec60601: {
        accepted: true,
        notes: "医用電気機器の安全・性能要求。",
      },
      others: [],
    },

    recentDevelopments: [
      {
        date: "2024",
        title: "AMMPS（Agence Marocaine des Médicaments et des Produits de Santé）の設立・移行",
        description:
          "DMPからAMMPSへの規制当局移行が進行中。AMMPSはより独立した規制機関として、医薬品・医療機器の規制を一元的に担う予定。",
      },
      {
        date: "2016",
        title: "Loi 84-12の制定",
        description:
          "医療機器に関する包括的な法律であるLoi 84-12が制定。4クラス分類・登録制度・市販後監視等の法的枠組みを確立。",
      },
    ],

    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- Israel ---
  // =========================================================================
  {
    code: "ISR",
    country: "イスラエル",
    countryEn: "Israel",
    region: "Middle East & Africa",
    flag: "🇮🇱",

    legalSystemOverview: {
      type: "中央集権制（Centralized system）",
      description:
        "イスラエルの医療機器規制は保健省（MOH）医療機器部門（AMAR）が一元的に管轄する。2012年制定の Medical Equipment Law（חוק ציוד רפואי, 5772-2012）が現行の基本法であり、医療機器の製造・輸入・販売・使用に関する登録義務を規定。イスラエルは独自のリスク分類制度を持たず、参照市場（米国FDA、EU、カナダ、オーストラリア、英国、ニュージーランド等）の分類を採用する。2024年に低・中リスク機器向けの Declaration Route と Fast-Track Route を新設し、2025年1月から運用開始。",
      keyCharacteristics: [
        "AMAR（MOH Medical Device Division）による一元的規制",
        "独自分類制度を持たず、参照市場（FDA/EU/TGA等）の分類を採用",
        "Declaration Route（Class I）・Fast-Track Route（Class II）・Standard Route（Class III）の3経路",
        "Israel Registration Holder（IRH）の任命が海外製造業者に義務",
        "参照市場の承認を活用した迅速登録が可能",
        "2025年1月より新手続ガイダンス（REG-2024/03）が発効",
      ],
    },

    authorities: [
      {
        name: "AMAR",
        fullName: "Medical Device Division, Ministry of Health",
        localName: "אגף ציוד רפואי, משרד הבריאות",
        role: "医療機器の市販前登録・市販後監視・ビジランス・施設査察・輸入管理。主管当局。",
        url: "https://www.gov.il/en/departments/amar",
        isPrimary: true,
      },
      {
        name: "MOH",
        fullName: "Ministry of Health",
        localName: "משרד הבריאות",
        role: "保健政策の策定・医療制度の監督・臨床試験の承認",
        url: "https://www.gov.il/en/departments/ministry_of_health",
        isPrimary: false,
      },
    ],

    notifiedBodies: {
      system: "なし（AMAR が直接審査、または参照市場の認可を活用）",
      description:
        "イスラエルでは欧州型のNotified Body制度は存在しない。AMARが直接、登録申請を審査する。ただし参照市場（FDA、EU Notified Body等）の承認を活用した迅速登録が主流であり、実質的に海外の認証機関の評価を受容するシステムとなっている。",
      bodies: [],
    },

    deviceDefinition: {
      legalDefinition:
        "Medical Equipment Law 5772-2012 に定義。医療処置に使用される器具（化学的・生物学的・バイオテクノロジー的・ソフトウェア等）であり、医薬品を除くもの。包帯・手術器具・注射器から超音波装置・MRI装置まで広範に対象。",
      scope:
        "IVD（体外診断用医療機器）も適用範囲に含まれる。SaMD（Software as a Medical Device）も規制対象。",
      notes:
        "定義は非常に広範で、EU MDRやFDAの定義と概ね整合。コンビネーション製品の扱いはケースバイケースでAMARが判断。",
    },

    primaryLaw: {
      title: "Medical Equipment Law, 5772-2012",
      originalTitle: "חוק ציוד רפואי, התשע״ב-2012",
      enacted: "2012",
      lastAmended: "2024（Registration and Renewal of Medical Devices Regulations改正）",
      url: "https://www.gov.il/en/departments/amar",
      description:
        "2012年制定の基本法。医療機器の製造・輸入・販売・使用に関する登録義務を規定。AMARへの登録なしに医療機器を市場に投入することを刑事罰付きで禁止。参照市場の承認活用を法的に認める枠組みを含む。",
    },

    implementingRegulations: [
      {
        title: "Registration and Renewal of Medical Devices Regulations, 2013",
        date: "2013",
        url: "https://www.gov.il/en/departments/amar",
        description:
          "Medical Equipment Law の施行規則。登録手続・必要書類・更新要件・参照市場リストを規定。",
        category: "登録手続",
      },
      {
        title: "REG-2024/03 — Updated Procedural Guidance for Submission Content and Format",
        date: "2025-01",
        url: "https://www.gov.il/en/departments/amar",
        description:
          "2025年1月発効。Declaration Route・Fast-Track Route・Standard Route の申請内容・書式に関する更新ガイダンス。",
        category: "申請手続",
      },
    ],

    relatedLaws: [
      {
        title: "Public Health Ordinance, 1940",
        category: "公衆衛生",
        enacted: "1940",
        url: "https://www.gov.il/en/departments/ministry_of_health",
        relevance:
          "臨床試験・感染症・公衆衛生に関する基本法。医療機器の臨床試験の法的根拠の一つ。",
      },
      {
        title: "Protection of Privacy Law, 5741-1981",
        category: "データ保護",
        enacted: "1981",
        url: "https://www.gov.il/en/departments/ministry_of_justice",
        relevance:
          "コネクテッドデバイス・SaMDが取り扱う個人医療情報のプライバシー要件に適用。",
      },
    ],

    classification: {
      system: "参照市場依存（独自分類制度なし）",
      basis: "イスラエルは独自のリスク分類制度を持たない。参照市場（米国FDA、EU MDR/IVDR、カナダ、オーストラリアTGA、英国MHRA、ニュージーランド等）が付与した分類をそのまま採用。登録経路は参照市場の分類に基づき決定される。",
      classes: [
        {
          name: "Class I（参照市場準拠）",
          nameJa: "クラスI（低リスク）",
          riskLevel: "低",
          description: "低リスク機器。Declaration Route で登録可能（2024年1月〜）。Class I / Is / Im / Ir / Class A を含む。",
          examples: ["弾性包帯", "舌圧子", "歩行補助具", "聴診器", "手術用手袋"],
          approvalPath: "Declaration Route（宣言登録）",
        },
        {
          name: "Class II（参照市場準拠）",
          nameJa: "クラスII（中リスク）",
          riskLevel: "中",
          description: "中リスク機器。Fast-Track Route で登録可能。Fast 1（FDA Class II / EU IIa相当、45営業日）とFast 2（EU IIb相当、60営業日）に細分化。",
          examples: ["超音波診断装置", "輸液ポンプ", "血圧計", "補聴器", "コンタクトレンズ"],
          approvalPath: "Fast-Track Route（Fast 1: 45営業日 / Fast 2: 60営業日）",
        },
        {
          name: "Class III（参照市場準拠）",
          nameJa: "クラスIII（高リスク）",
          riskLevel: "高",
          description: "高リスク機器・参照市場認可のない機器。Standard Route（Normal Route）で登録。120暦日。",
          examples: ["人工心臓弁", "埋込み型除細動器", "薬剤溶出ステント", "人工関節", "人工内耳"],
          approvalPath: "Standard Route（120暦日）",
        },
      ],
      rules: [
        "独自分類制度なし — 参照市場の分類をそのまま採用",
        "参照市場: 米国FDA、EU（MDR/IVDR）、カナダ、オーストラリアTGA、英国MHRA、ニュージーランド",
        "登録経路はリスクレベルに応じて自動決定（Declaration / Fast-Track / Standard）",
        "IVDも同様に参照市場の分類を採用",
      ],
      totalProductCodes: "参照市場の製品コード体系を使用（GMDN等）",
    },

    conformityAssessment: {
      overview:
        "全ての医療機器はAMARへの登録が必要。2024-2025年の改革により3つの登録経路が整備された。Declaration Route（Class I）は最も簡略で宣言ベース。Fast-Track Route（Class II）は参照市場の承認を前提とした迅速審査。Standard Route（Class III等）は詳細審査。参照市場の認可（FDA 510(k)/PMA、CE証明書等）が事実上の前提条件。IRH（Israel Registration Holder）の任命が必須。",
      routes: [
        {
          name: "Declaration Route",
          nameJa: "宣言登録（Declaration Route）",
          applicableClasses: ["Class I", "Class Is", "Class Im", "Class Ir"],
          description:
            "2024年1月から運用開始。低リスク機器（Class I / Is / Im / Ir）が対象。IRHが適合宣言を提出。AMARへの費用は無料。",
          subtypes: [
            { name: "新規宣言", description: "Class I機器の初回登録。適合宣言書を提出。" },
            { name: "更新", description: "登録の更新。" },
          ],
          avgReviewTime: "短期間（宣言ベースのため迅速）",
          avgReviewTimeSource: "https://www.emergobyul.com/news/details-declaration-route-class-i-medical-devices-israel",
          fee: "無料（Class I は手数料なし）",
          feeSource: "https://medenvoyglobal.com/blog/medical-device-and-ivd-registration-in-israel/",
          url: "https://www.gov.il/en/departments/amar",
        },
        {
          name: "Fast-Track Route",
          nameJa: "迅速登録（Fast-Track Route）",
          applicableClasses: ["Class IIa", "Class IIb", "Class II"],
          description:
            "中リスク機器向け。参照市場（FDA/EU等）の承認を前提。Fast 1（FDA Class II / EU IIa: 45営業日）と Fast 2（EU IIb: 60営業日）に細分化。",
          subtypes: [
            { name: "Fast 1", description: "FDA Class II または EU Class IIa 相当。45営業日。" },
            { name: "Fast 2", description: "EU Class IIb 相当。60営業日。" },
          ],
          avgReviewTime: "Fast 1: 45営業日 / Fast 2: 60営業日",
          avgReviewTimeSource: "https://www.emergobyul.com/news/updates-israels-declaration-and-fast-track-routes-medical-devices",
          fee: "要確認（公式手数料スケジュール未公開）",
          feeSource: "https://www.gov.il/en/departments/amar",
          url: "https://www.gov.il/en/departments/amar",
        },
        {
          name: "Standard Route (Normal Route)",
          nameJa: "標準登録（Standard Route）",
          applicableClasses: ["Class III", "IVDR Class D", "参照市場認可なし"],
          description:
            "高リスク機器および参照市場認可のない機器向け。詳細な技術文書審査。臨床データが求められる場合あり。",
          subtypes: [
            { name: "新規登録", description: "初回の登録申請。全必要書類の提出が必要。" },
            { name: "更新", description: "登録の更新申請。" },
            { name: "変更申請", description: "製品仕様・製造所等の変更時。" },
          ],
          avgReviewTime: "公式: 120暦日",
          avgReviewTimeSource: "https://bioregservices.com/regulatory-consulting-israel-amar/",
          fee: "要確認（公式手数料スケジュール未公開）",
          feeSource: "https://www.gov.il/en/departments/amar",
          url: "https://www.gov.il/en/departments/amar",
        },
      ],
    },

    electronicSubmission: {
      system: "AMAR 電子申請システム",
      url: "https://www.gov.il/en/departments/amar",
      description:
        "登録申請はAMARの電子システム経由で提出。IRH（Israel Registration Holder）が申請手続きを代行する。",
      mandatory: true,
    },

    udi: {
      required: false,
      system: "未導入（イスラエル独自のUDI制度は未確立）",
      description:
        "2026年4月時点で、イスラエル独自の包括的UDI制度は正式に導入されていない。ただし参照市場（FDA/EU）のUDI要件に準拠した機器は増加しており、ラベリングにUDI情報を含めることが推奨されている。",
      url: "https://www.gov.il/en/departments/amar",
      timeline: "未定（独自制度の導入計画は公表されていない）",
    },

    postMarket: {
      adverseEventReporting: {
        system: "AMAR ビジランス報告",
        mandatory: true,
        url: "https://www.gov.il/en/departments/amar",
        description:
          "IRH（Israel Registration Holder）が市販後ビジランスの責任を負う。報告対象は、患者の健康に害を及ぼした機器関連事象、およびユーザーにリスクをもたらしうる重大な欠陥。IRHは「state of control」を維持し、リアルタイムの市販後ビジランス管理が求められる。",
      },
      recalls: {
        authority: "AMAR / MOH",
        description:
          "AMARがFSCA（Field Safety Corrective Action）およびリコールを監督。グローバルリコール・FSN（Field Safety Notice）はIRHを通じてAMARに報告義務。",
        url: "https://www.gov.il/en/departments/amar",
      },
      surveillance:
        "IRHは包括的な「state of control」を維持し、市販後監視を実施する義務を負う。Declaration Route・Fast-Track Route で登録された機器はIRHの市販後監視義務が強化されている。",
    },

    certificateOfFreeSale: {
      available: true,
      issuingAuthority: "輸出国の規制当局（AMAR登録申請時に提出が必要）",
      name: "Certificate of Free Sale (CFS) / Certificate to Foreign Government (CFG)",
      description:
        "AMAR登録申請時に、参照市場の規制当局が発行するCFS/CFGまたは市場承認証明（FDA 510(k) Clearance Letter、CE Certificate等）の提出が求められる。",
      processingTime: "輸出国側の手続きによる",
      url: "https://www.gov.il/en/departments/amar",
    },

    reimbursement: {
      system: "国民健康保険制度（National Health Insurance Law, 1995）",
      authority: "MOH / Health Funds（Kupot Holim）",
      description:
        "1995年の国民健康保険法に基づき、全市民が4つの Health Fund（Clalit / Maccabi / Meuhedet / Leumit）のいずれかに加入。基本給付パッケージ（Health Basket）に収載された医療技術が保険償還対象。医療機器の個別償還は Health Basket の年次更新プロセスで決定されるが、医薬品ほど体系化されていない。",
      codingSystems: [
        "要確認（イスラエル固有の医療機器償還コード体系は未確認）",
      ],
      url: "https://www.gov.il/en/departments/ministry_of_health",
    },

    marketingRules: {
      authority: "AMAR / MOH",
      description:
        "Medical Equipment Law 5772-2012 に基づき、AMAR未登録機器の広告・販売は禁止。ラベリングは家庭用機器の場合ヘブライ語・アラビア語・英語の3言語が必須。医療専門家向け機器は英語のみ可。",
      keyRules: [
        "AMAR登録なしの医療機器の広告・販売は刑事罰付きで禁止",
        "家庭用機器のラベリング: ヘブライ語・アラビア語・英語の3言語必須",
        "医療専門家向け機器: 英語のみ可",
        "AMAR Marking Guidelines（2014年12月）に基づくラベリング要件",
      ],
    },

    mdsap: {
      status: "アフィリエイトメンバー（Affiliate Member）",
      description:
        "イスラエルは2025年時点でMDSAPのアフィリエイトメンバー。MDSAP監査報告書を活用してQMS適合性を評価するが、AMAR登録は別途必要。正式参加国（Regulatory Authority）ではない。",
    },

    internationalStandards: {
      iso13485: {
        accepted: true,
        notes: "参照市場の認可に伴い事実上必須。ISO 13485認証がQMS適合の証拠として受容。",
      },
      iso14971: {
        accepted: true,
        notes: "リスクマネジメント。技術文書のリスク評価に適用。",
      },
      iec62304: {
        accepted: true,
        notes: "ソフトウェアライフサイクル。SaMD申請に適用。",
      },
      iec60601: {
        accepted: true,
        notes: "医用電気機器の安全・性能要求。",
      },
      others: [
        {
          name: "ISO 10993シリーズ（生物学的安全性評価）",
          notes: "生体接触医療機器の生物学的安全性評価に適用。",
        },
        {
          name: "IEC 62366（ユーザビリティエンジニアリング）",
          notes: "医療機器のユーザビリティ評価に参照。",
        },
      ],
    },

    recentDevelopments: [
      {
        date: "2025-01",
        title: "新手続ガイダンス REG-2024/03 発効",
        description:
          "Declaration Route・Fast-Track Route・Standard Route の申請内容・書式に関する更新ガイダンスが2025年1月に発効。低・中リスク機器の市場アクセスが大幅に改善。",
      },
      {
        date: "2024-01",
        title: "Declaration Route 運用開始",
        description:
          "Class I（Is/Im/Ir含む）の低リスク機器向けに Declaration Route（宣言登録）が導入。IRHによる適合宣言で登録可能に。",
      },
      {
        date: "2024",
        title: "Fast-Track Route の拡充",
        description:
          "Class II機器向けの Fast-Track Route を Fast 1（45営業日）と Fast 2（60営業日）に細分化。EU MDR CE証明書の受入れを明確化。",
      },
      {
        date: "2012",
        title: "Medical Equipment Law 制定",
        description:
          "イスラエル初の包括的医療機器規制法が制定。AMARへの登録義務を法定化。",
      },
    ],

    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- Egypt ---
  // =========================================================================
  {
    code: "EGY",
    country: "エジプト",
    countryEn: "Egypt",
    region: "Middle East & Africa",
    flag: "🇪🇬",

    legalSystemOverview: {
      type: "中央集権制（Centralized system）",
      description:
        "エジプトの医療機器規制はEDA（Egyptian Drug Authority）の医療機器中央管理局（Central Administration of Medical Devices）が管轄する。2019年制定の Law No. 151 of 2019 が EDA の設立根拠法であり、その施行規則である Decree 777/2020 が登録手続・分類・市販後監視等の詳細を規定。EU MDR に整合した4クラス分類（Class I / IIa / IIb / III）を採用。2025年以降、CE マークまたは FDA クリアランスを持つ機器向けの Fast-Track 経路を導入。",
      keyCharacteristics: [
        "EDA（Egyptian Drug Authority）医療機器中央管理局による一元的規制",
        "EU MDR に整合したリスクベースの4クラス分類（Class I / IIa / IIb / III）",
        "Egyptian Registration Holder（ERH）の任命が海外製造業者に義務",
        "MeDevice オンラインポータルによる電子申請",
        "登録有効期間: 医療機器10年 / IVD 5年",
        "Fast-Track 経路の導入（CE/FDA承認機器向け）",
      ],
    },

    authorities: [
      {
        name: "EDA",
        fullName: "Egyptian Drug Authority — Central Administration of Medical Devices",
        localName: "هيئة الدواء المصرية — الإدارة المركزية للأجهزة والمستلزمات الطبية",
        role: "医療機器の登録・分類・市販後監視・ビジランス・施設査察・広告規制。主管当局。",
        url: "https://www.edaegypt.gov.eg/en/",
        isPrimary: true,
      },
      {
        name: "UHIA",
        fullName: "Universal Health Insurance Authority",
        localName: "الهيئة العامة للتأمين الصحي الشامل",
        role: "国民皆保険制度の管理・医療サービスの償還管理",
        url: "https://www.uhia.gov.eg/",
        isPrimary: false,
      },
      {
        name: "UPA",
        fullName: "Egyptian Authority for Unified Procurement, Medical Supply and the Management of Medical Technology",
        localName: null,
        role: "医療技術の統一調達・HTA（医療技術評価）の実施",
        url: "https://www.upa.gov.eg/",
        isPrimary: false,
      },
    ],

    notifiedBodies: {
      system: "なし（EDA が直接審査）",
      description:
        "エジプトでは欧州型のNotified Body制度は存在しない。EDA医療機器中央管理局が直接、技術文書を審査し登録を交付する。ただし参照市場（EU/FDA/TGA等）の認可を簡略審査の条件として活用可能。",
      bodies: [],
    },

    deviceDefinition: {
      legalDefinition:
        "Law No. 151 of 2019 および Decree 777/2020 に定義。疾病の診断・治療・予防・監視・軽減等を目的とする機器・装置・器具・材料・ソフトウェア等で、主たる意図する作用が薬理学的・免疫学的・代謝的手段によらないもの。",
      scope:
        "IVD（体外診断用医療機器）も適用範囲に含まれる。SaMDも対象。",
      notes:
        "定義はEU MDRの定義に概ね整合。EDAはAI分類ツールを導入し、機器分類の効率化を推進。",
    },

    primaryLaw: {
      title: "Law No. 151 of 2019 — Establishing the Egyptian Drug Authority",
      originalTitle: "قانون رقم 151 لسنة 2019 بإصدار قانون إنشاء هيئة الدواء المصرية",
      enacted: "2019",
      lastAmended: "要確認",
      url: "https://www.edaegypt.gov.eg/en/",
      description:
        "EDA（Egyptian Drug Authority）の設立根拠法。医薬品・医療機器・化粧品の規制・監督・品質管理に関するEDAの権限を規定。登録・ライセンス・査察・監督の権限をEDAに一元化。",
    },

    implementingRegulations: [
      {
        title: "Decree 777/2020 — Executive Regulations of Law No. 151/2019",
        date: "2020",
        url: "https://www.edaegypt.gov.eg/en/",
        description:
          "Law 151/2019の施行規則。医療機器の分類・登録手続・必要書類・市販後監視・査察等の詳細を規定。",
        category: "施行規則",
      },
      {
        title: "Regulatory Guideline for Procedures of Registering Imported and Local Medical Devices Holding International Quality Certificates",
        date: "2023",
        url: "https://www.edaegypt.gov.eg/media/i3wb2tdn/5_regulatory-guideline-for-procedures-of-registraing-imported-and-local-medical-devices-holding-international-quality-certificates.pdf",
        description:
          "国際品質認証（CE/FDA等）を保有する輸入・国産医療機器の登録手続ガイドライン。",
        category: "登録手続",
      },
      {
        title: "Guidelines on the Vigilance System for Medical Devices",
        date: "要確認",
        url: "https://www.edaegypt.gov.eg/en/",
        description:
          "医療機器のビジランスシステムに関するガイドライン。有害事象報告・リコール・FSCA等の手続きを規定。",
        category: "ビジランス",
      },
    ],

    relatedLaws: [
      {
        title: "Universal Health Insurance Law No. 2 of 2018",
        category: "医療保険",
        enacted: "2018",
        url: "https://sis.gov.eg/en/egypt/society/health-care/universal-health-insurance-law-no-2-of-2018/",
        relevance:
          "国民皆保険制度の法的基盤。UHIA・UPA・GAHCの設立根拠。医療技術の償還決定に影響。",
      },
      {
        title: "Personal Data Protection Law No. 151 of 2020",
        category: "データ保護",
        enacted: "2020",
        url: "https://www.edaegypt.gov.eg/en/",
        relevance:
          "個人情報保護法。コネクテッドデバイス・SaMDが取り扱う個人医療情報に適用。",
      },
    ],

    classification: {
      system: "4クラス制（Class I / IIa / IIb / III）— EU MDR整合",
      basis: "EU MDRの分類ルールに概ね整合したリスクベース分類。参照市場の分類も考慮し、いずれかの参照市場で上位クラスに分類されている場合はその分類を採用する傾向。",
      classes: [
        {
          name: "Class I",
          nameJa: "クラスI",
          riskLevel: "低",
          description: "低リスクの非侵襲的機器。",
          examples: ["弾性包帯", "聴診器", "車椅子", "手術用手袋", "舌圧子"],
          approvalPath: "登録申請",
        },
        {
          name: "Class IIa",
          nameJa: "クラスIIa",
          riskLevel: "中低",
          description: "中低リスク機器。",
          examples: ["超音波診断装置", "補聴器", "歯科用材料", "血圧計", "注射針"],
          approvalPath: "登録申請",
        },
        {
          name: "Class IIb",
          nameJa: "クラスIIb",
          riskLevel: "中高",
          description: "中高リスク機器。ビジランス部門の審査が関与する場合あり。",
          examples: ["人工呼吸器", "輸液ポンプ", "透析装置", "X線装置", "コンタクトレンズ"],
          approvalPath: "登録申請（ビジランス審査あり）",
        },
        {
          name: "Class III",
          nameJa: "クラスIII",
          riskLevel: "高",
          description: "最高リスク機器。詳細審査＋臨床データが必要な場合あり。",
          examples: ["人工心臓弁", "埋込み型除細動器", "薬剤溶出ステント", "人工関節", "人工内耳"],
          approvalPath: "登録申請（詳細審査＋臨床評価）",
        },
      ],
      rules: [
        "EU MDRの分類ルールに概ね整合",
        "参照市場の分類を考慮し、最も高いクラスを適用する傾向",
        "EDAのAI分類ツールが分類補助に利用可能",
        "IVDも適用（別途分類ルール）",
      ],
      totalProductCodes: "GMDN（Global Medical Device Nomenclature）を参照",
    },

    conformityAssessment: {
      overview:
        "全クラスの医療機器はEDAへの登録が必要。登録有効期間は医療機器10年、IVD 5年。海外製造業者はERH（Egyptian Registration Holder）の任命が必須。ERHがMeDeviceポータル経由で申請を提出。国際品質認証（CE/FDA/TGA等）を持つ機器は簡略手続が可能。2025年以降、Fast-Track経路を導入。",
      routes: [
        {
          name: "Standard Registration",
          nameJa: "標準登録（Regular Track）",
          applicableClasses: ["Class I", "Class IIa", "Class IIb", "Class III"],
          description:
            "全クラスの医療機器に適用。技術文書・品質認証（ISO 13485等）・CFS・アラビア語/英語ラベリングを提出。国際品質認証保有機器は簡略審査。",
          subtypes: [
            { name: "新規登録", description: "初回の登録申請。全必要書類の提出が必要。" },
            { name: "登録更新（医療機器10年/IVD 5年）", description: "有効期限前に更新申請。" },
            { name: "変更申請", description: "製品仕様・製造所・ラベリング等の変更時。" },
          ],
          avgReviewTime: "公式: 4〜9ヶ月（クラス・書類の完全性による） / 実績: 6〜8ヶ月",
          avgReviewTimeSource: "https://omcmedical.com/egypt-medical-device-registration",
          fee: "Regular Track: USD 450/機器 / Fast Track: USD 1,280/機器",
          feeSource: "https://omcmedical.com/egypt-medical-device-registration",
          url: "http://medevice.edaegypt.gov.eg",
        },
        {
          name: "Fast-Track Registration",
          nameJa: "迅速登録（Fast Track）",
          applicableClasses: ["Class I", "Class IIa", "Class IIb", "Class III"],
          description:
            "CE マークまたは FDA クリアランスを持つ機器向けの迅速審査経路。2025年以降に導入。クリティカルユース機器が優先。",
          subtypes: [],
          avgReviewTime: "3〜4ヶ月",
          avgReviewTimeSource: "https://medenvoyglobal.com/blog/navigating-egypts-medical-device-market-a-guide-to-registration/",
          fee: "USD 1,280/機器",
          feeSource: "https://omcmedical.com/egypt-medical-device-registration",
          url: "http://medevice.edaegypt.gov.eg",
        },
      ],
    },

    electronicSubmission: {
      system: "MeDevice ポータル",
      url: "http://medevice.edaegypt.gov.eg",
      description:
        "全ての登録申請はEDAのオンラインポータル「MeDevice」経由でERHが提出。技術文書・品質認証・CFS等のアップロードが必要。紙ベースの申請は不可。",
      mandatory: true,
    },

    udi: {
      required: false,
      system: "部分的導入（UDI ラベリング推奨）",
      description:
        "2026年4月時点で、エジプト独自の包括的UDI制度は正式に導入されていないが、ラベリングにUDI情報を含めることが推奨されている。アラビア語・英語の二言語ラベリングが必須。",
      url: "https://www.edaegypt.gov.eg/en/",
      timeline: "未定（包括的UDI制度の正式導入スケジュールは未公表）",
    },

    postMarket: {
      adverseEventReporting: {
        system: "EDA 医療機器安全ユニット / エジプトファーマコビジランスセンター",
        mandatory: true,
        url: "https://www.edaegypt.gov.eg/en/",
        description:
          "製造業者・ERH・医療従事者が有害事象をEDAに報告する義務を負う。グローバルリコール・FSN・FSCAもEDAへの報告が必須。Law 151/2019のビジランスガイドラインに基づき、所定の期間内に報告を提出。",
      },
      recalls: {
        authority: "EDA",
        description:
          "EDAがリコール・FSCA（Field Safety Corrective Action）を監督。必要に応じてERHを通じた市場からの製品回収を命令。",
        url: "https://www.edaegypt.gov.eg/en/",
      },
      surveillance:
        "ERHは市販後ビジランス義務を負い、登録時にビジランス規制遵守の宣言書を提出。Class IIb/III機器はビジランス部門の特別審査対象。",
    },

    certificateOfFreeSale: {
      available: true,
      issuingAuthority: "輸出国の規制当局（EDA登録申請時に提出が必要）",
      name: "Certificate of Free Sale (CFS)",
      description:
        "EDA登録申請時に、原産国または参照市場の規制当局が発行するCFSの提出が求められる。CE証明書やFDA承認書がCFSの代替として受容される場合あり。",
      processingTime: "輸出国側の手続きによる",
      url: "https://www.edaegypt.gov.eg/en/",
    },

    reimbursement: {
      system: "国民皆保険制度（Universal Health Insurance, UHI）— 段階的導入中",
      authority: "UHIA（Universal Health Insurance Authority）/ UPA",
      description:
        "2018年の Universal Health Insurance Law No. 2 に基づき、国民皆保険制度を段階的に導入中（2032年完全実施予定）。UPA（統一調達・医療技術管理庁）がHTA（医療技術評価）を実施し、UHIA が償還決定。UHI の給付パッケージは3,000以上の医療サービスを網羅し、補綴具・手術・画像診断等を含む。医療機器の個別償還は発展途上。",
      codingSystems: [
        "要確認（エジプト固有の医療機器償還コード体系は発展途上）",
      ],
      url: "https://www.uhia.gov.eg/",
    },

    marketingRules: {
      authority: "EDA",
      description:
        "Law 151/2019 および関連規制に基づき、EDA未登録機器の広告・販売は禁止。ラベリングはアラビア語・英語の二言語が必須。",
      keyRules: [
        "EDA登録なしの医療機器の広告・販売は禁止",
        "ラベリング: アラビア語・英語の二言語必須",
        "使用説明書（IFU）はアラビア語訳が必要",
        "誇大・虚偽・誤解を招く広告の禁止",
      ],
    },

    mdsap: {
      status: "非参加（Not participating）",
      description:
        "エジプトはMDSAPの正式参加国・オブザーバー・アフィリエイトメンバーのいずれにも該当しない（2026年4月時点）。MDSAP監査報告書はEDAの規制要件を代替せず、独立した登録申請が必要。",
    },

    internationalStandards: {
      iso13485: {
        accepted: true,
        notes: "登録申請の前提条件。ISO 13485認証または同等の国際品質認証が必須。",
      },
      iso14971: {
        accepted: true,
        notes: "リスクマネジメント。技術文書のリスク評価に適用。",
      },
      iec62304: {
        accepted: true,
        notes: "ソフトウェアライフサイクル。SaMD申請に適用。",
      },
      iec60601: {
        accepted: true,
        notes: "医用電気機器の安全・性能要求。",
      },
      others: [
        {
          name: "ISO 10993シリーズ（生物学的安全性評価）",
          notes: "生体接触医療機器の生物学的安全性評価に適用。",
        },
        {
          name: "IEC 62366（ユーザビリティエンジニアリング）",
          notes: "医療機器のユーザビリティ評価に参照。",
        },
      ],
    },

    recentDevelopments: [
      {
        date: "2025",
        title: "Fast-Track 登録経路の導入",
        description:
          "CE マークまたは FDA クリアランスを持つ機器向けの迅速登録経路を導入。クリティカルユース機器が優先。",
      },
      {
        date: "2025",
        title: "AI分類ツールの導入",
        description:
          "EDAがMeDeviceポータル上にAI搭載の分類ツールを導入。医療機器の分類判定を自動化・効率化。",
      },
      {
        date: "2020",
        title: "Decree 777/2020（施行規則）発出",
        description:
          "Law 151/2019の施行規則が発出。分類・登録手続・市販後監視の詳細を規定。",
      },
      {
        date: "2019",
        title: "Law No. 151 of 2019 制定 — EDA設立",
        description:
          "Egyptian Drug Authority（EDA）の設立根拠法。旧規制体制からEDAへの移行。医療機器・医薬品・化粧品の規制を一元化。",
      },
    ],

    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- Colombia ---
  // =========================================================================
  {
    code: "COL",
    country: "コロンビア",
    countryEn: "Colombia",
    region: "Latam",
    flag: "🇨🇴",

    legalSystemOverview: {
      type: "中央集権制（Centralized system）",
      description:
        "コロンビアの医療機器規制はINVIMA（Instituto Nacional de Vigilancia de Medicamentos y Alimentos）が一元的に管轄する。Decreto 4725 de 2005 が医療機器の登録・分類・市販後監視の基本枠組みを規定し、IVD は Decreto 3770 de 2004 で別途規律。EU MDR に整合した4クラス分類（Class I / IIa / IIb / III）を採用。Class I/IIa は「非管理品目（No Controlados）」として自動承認、Class IIb/III は「管理品目（Controlados）」として技術審査が必要。登録有効期間は10年。2022年以降、UDI-DI（Resolution 1405/2022）およびセマンティックレポートの義務化が段階的に進行。",
      keyCharacteristics: [
        "INVIMA による一元的な中央規制体制",
        "EU MDR に整合したリスクベースの4クラス分類（Class I / IIa / IIb / III）",
        "非管理品目（Class I/IIa: 自動承認）と管理品目（Class IIb/III: 技術審査）の二経路",
        "コロンビア国内の法定代理人（Representante Legal）の任命が必須",
        "登録有効期間10年（更新は3ヶ月前から申請可）",
        "UDI-DI 義務化の段階的実施（Resolution 1405/2022）",
      ],
    },

    authorities: [
      {
        name: "INVIMA",
        fullName: "Instituto Nacional de Vigilancia de Medicamentos y Alimentos",
        localName: "Instituto Nacional de Vigilancia de Medicamentos y Alimentos",
        role: "医療機器の登録（Registro Sanitario）・市販後監視・ビジランス・施設査察。主管当局。",
        url: "https://www.invima.gov.co/",
        isPrimary: true,
      },
      {
        name: "MinSalud",
        fullName: "Ministerio de Salud y Protección Social",
        localName: "Ministerio de Salud y Protección Social",
        role: "保健政策の策定・法令制定・医療制度の監督",
        url: "https://www.minsalud.gov.co/",
        isPrimary: false,
      },
    ],

    notifiedBodies: {
      system: "なし（INVIMA が直接審査）",
      description:
        "コロンビアでは欧州型のNotified Body制度は存在しない。INVIMAが直接、登録申請の技術文書を審査しRegistro Sanitario（衛生登録）を交付する。Class I/IIa は書類完備で自動承認（Automático）。",
      bodies: [],
    },

    deviceDefinition: {
      legalDefinition:
        "Decreto 4725 de 2005, Artículo 2 に定義。疾病の診断・治療・予防・監視・軽減等を目的とする機器・装置・器具・材料・ソフトウェア等で、主たる意図する作用が薬理学的・免疫学的・代謝的手段によらないもの。",
      scope:
        "IVD（体外診断用医療機器）は Decreto 3770 de 2004 で別途規定。",
      notes:
        "定義はEU MDRの定義に概ね整合。SaMDも対象に含まれる。",
    },

    primaryLaw: {
      title: "Decreto 4725 de 2005 — Régimen de Registros Sanitarios, Permiso de Comercialización y Vigilancia Sanitaria de los Dispositivos Médicos para Uso Humano",
      originalTitle: "Decreto 4725 de 2005",
      enacted: "2005",
      lastAmended: "要確認（UDI関連規制等で補完的改正あり）",
      url: "https://www.invima.gov.co/biblioteca/decreto-4725-2005-registros-sanitarios-dispositivos-medicos",
      description:
        "コロンビアの医療機器規制の基本法令。登録制度（Registro Sanitario）・分類・市販後監視・査察の枠組みを規定。保健社会保護省（MinSalud）が発出。",
    },

    implementingRegulations: [
      {
        title: "Decreto 3770 de 2004 — Régimen de Registros Sanitarios y Vigilancia Sanitaria de los Reactivos de Diagnóstico In Vitro",
        date: "2004",
        url: "https://www.invima.gov.co/",
        description:
          "IVD（体外診断用試薬）の登録・分類・市販後監視を規定する基本法令。",
        category: "IVD規制",
      },
      {
        title: "Resolution 1405 de 2022 — UDI-DI Requirements",
        date: "2022",
        url: "https://www.invima.gov.co/",
        description:
          "UDI-DI（固有機器識別子 - 機器識別子）の義務化。セマンティックレポートの提出要件を規定。段階的実施。",
        category: "UDI",
      },
      {
        title: "Resolution 4816 de 2008 — Programa Nacional de Tecnovigilancia",
        date: "2008",
        url: "https://www.invima.gov.co/",
        description:
          "テクノビジランス（医療機器安全性監視）の国家プログラムを規定。有害事象報告・四半期報告の義務化。",
        category: "ビジランス",
      },
    ],

    relatedLaws: [
      {
        title: "Ley 1581 de 2012 — Ley de Protección de Datos Personales",
        category: "データ保護",
        enacted: "2012",
        url: "https://www.sic.gov.co/",
        relevance:
          "個人情報保護法。コネクテッドデバイス・SaMDが取り扱う個人医療情報に適用。",
      },
    ],

    classification: {
      system: "4クラス制（Class I / IIa / IIb / III）— EU MDR整合",
      basis: "EU MDRの分類ルールに概ね整合したリスクベース分類。意図する用途・侵襲性・使用期間・エネルギー源等に基づく。Decreto 4725/2005 Capítulo IV に規定。",
      classes: [
        {
          name: "Class I",
          nameJa: "クラスI",
          riskLevel: "低",
          description: "低リスクの非侵襲的機器。非管理品目（No Controlado）— 自動承認。",
          examples: ["弾性包帯", "聴診器", "車椅子", "舌圧子", "ガーゼ"],
          approvalPath: "自動承認（Automático）",
        },
        {
          name: "Class IIa",
          nameJa: "クラスIIa",
          riskLevel: "中低",
          description: "中低リスク機器。非管理品目（No Controlado）— 自動承認。",
          examples: ["超音波診断装置", "補聴器", "歯科用材料", "注射針", "血圧計"],
          approvalPath: "自動承認（Automático）",
        },
        {
          name: "Class IIb",
          nameJa: "クラスIIb",
          riskLevel: "中高",
          description: "中高リスク機器。管理品目（Controlado）— INVIMA技術審査が必要。",
          examples: ["人工呼吸器", "輸液ポンプ", "透析装置", "X線装置", "コンタクトレンズ"],
          approvalPath: "技術審査（Controlado）",
        },
        {
          name: "Class III",
          nameJa: "クラスIII",
          riskLevel: "高",
          description: "最高リスク機器。管理品目（Controlado）— INVIMA技術審査＋臨床評価が必要。",
          examples: ["人工心臓弁", "埋込み型除細動器", "薬剤溶出ステント", "人工関節", "人工内耳"],
          approvalPath: "技術審査＋臨床評価（Controlado）",
        },
      ],
      rules: [
        "EU MDRの分類ルールに概ね整合",
        "Class I / IIa = 非管理品目（No Controlados）: 自動承認",
        "Class IIb / III = 管理品目（Controlados）: 技術審査",
        "IVDは Decreto 3770/2004 に基づき別途分類（Category I / II / III）",
      ],
      totalProductCodes: "GMDN（Global Medical Device Nomenclature）を参照",
    },

    conformityAssessment: {
      overview:
        "全クラスの医療機器にINVIMAへのRegistro Sanitario（衛生登録）が必要。Class I/IIa は「非管理品目」として書類完備で自動承認（日数以内）。Class IIb/III は「管理品目」として技術審査が必要。登録有効期間は10年。更新は有効期限の3ヶ月前から申請可。海外製造業者はコロンビア国内の法定代理人（Representante Legal）の任命が必須。申請書類はスペイン語。CFS/CFG が必要（米国・EU・カナダ・日本・オーストラリアのいずれかから）。",
      routes: [
        {
          name: "Registro Sanitario — No Controlados (Automatic)",
          nameJa: "衛生登録 — 非管理品目（自動承認）",
          applicableClasses: ["Class I", "Class IIa"],
          description:
            "書類完備で自動承認。INVIMAによる技術審査なし。",
          subtypes: [
            { name: "新規登録", description: "初回のRegistro Sanitario申請。" },
            { name: "更新（10年ごと）", description: "有効期限3ヶ月前から申請可。" },
            { name: "変更申請（Modificación）", description: "製品仕様・製造所等の変更時。" },
          ],
          avgReviewTime: "数日〜2週間（書類完備の場合、即日〜自動承認）",
          avgReviewTimeSource: "https://www.emergobyul.com/services/invima-medical-device-registration-and-approval-colombia",
          fee: "COP 3,898,330（約 USD 936）/製品",
          feeSource: "https://www.pureglobal.com/markets/colombia/invima-medical-device-regulations",
          url: "https://www.invima.gov.co/productos-vigilados/dispositivos-medicos/dispositivos-medicos-equipos-biomedicos",
        },
        {
          name: "Registro Sanitario — Controlados (Reviewed)",
          nameJa: "衛生登録 — 管理品目（技術審査）",
          applicableClasses: ["Class IIb", "Class III"],
          description:
            "INVIMAが技術文書・臨床エビデンス・ラベリングを審査。CFS/CFGおよびISO 13485認証が必要。",
          subtypes: [
            { name: "新規登録", description: "初回のRegistro Sanitario申請。技術審査あり。" },
            { name: "更新（10年ごと）", description: "有効期限3ヶ月前から申請可。" },
            { name: "変更申請（Modificación）", description: "製品仕様・製造所等の変更時。" },
          ],
          avgReviewTime: "3〜6ヶ月",
          avgReviewTimeSource: "https://www.emergobyul.com/services/invima-medical-device-registration-and-approval-colombia",
          fee: "COP 4,412,400（約 USD 1,059）/製品",
          feeSource: "https://www.pureglobal.com/markets/colombia/invima-medical-device-regulations",
          url: "https://www.invima.gov.co/productos-vigilados/dispositivos-medicos/dispositivos-medicos-equipos-biomedicos",
        },
      ],
    },

    electronicSubmission: {
      system: "INVIMA オンライン申請プラットフォーム",
      url: "https://www.invima.gov.co/",
      description:
        "登録申請はINVIMAのオンラインプラットフォーム経由で提出。UDI-DIセマンティックレポートもINVIMAプラットフォーム経由で提出。申請書類はスペイン語。",
      mandatory: true,
    },

    udi: {
      required: true,
      system: "INVIMA UDI-DI システム（Resolution 1405/2022）",
      description:
        "Resolution 1405 de 2022 に基づくUDI-DI義務化。登録保有者はINVIMA承認後にUDI-DIコードを認定機関（GS1等）から取得し、セマンティックレポートをINVIMAプラットフォーム経由で提出。基本属性・規制属性・商業属性を含む。",
      url: "https://www.invima.gov.co/",
      timeline: "Class IIb/III: 2024年2月施行済み。Class IIa: 2026年2月9日期限。Class I / IVD Category I: 2026年2月9日期限。",
    },

    postMarket: {
      adverseEventReporting: {
        system: "Programa Nacional de Tecnovigilancia",
        mandatory: true,
        url: "https://www.invima.gov.co/",
        description:
          "Resolution 4816/2008 に基づく国家テクノビジランスプログラム。製造業者・輸入業者は有害事象の四半期報告を義務付けられる（有害事象が発生しなかった場合も報告が必要）。",
      },
      recalls: {
        authority: "INVIMA",
        description:
          "INVIMAがリコール・FSCA（Field Safety Corrective Action）を監督。Decreto 4725/2005 Capítulo IX に規定。",
        url: "https://www.invima.gov.co/",
      },
      surveillance:
        "製造業者・輸入業者は四半期ごとにテクノビジランス要約報告書（Informe Periódico Resumido）をINVIMAに提出。有害事象の有無にかかわらず報告義務あり。重大有害事象は72時間以内に報告。",
    },

    certificateOfFreeSale: {
      available: true,
      issuingAuthority: "参照市場の規制当局（INVIMA登録申請時に提出が必要）",
      name: "Certificate of Free Sale (CFS) / Certificate to Foreign Government (CFG)",
      description:
        "INVIMA登録申請時に、参照市場（米国FDA、EU、カナダ、日本、オーストラリア）の規制当局が発行するCFS/CFGの提出が求められる。母国の承認に代えて参照市場の認可証を提出可能。",
      processingTime: "輸出国側の手続きによる",
      url: "https://www.invima.gov.co/",
    },

    reimbursement: {
      system: "社会保険制度（SGSSS: Sistema General de Seguridad Social en Salud）",
      authority: "MinSalud / ADRES（Administradora de los Recursos del SGSSS）",
      description:
        "コロンビアのSGSSS（社会保障健康制度）は、拠出制（Contributivo）と補助制（Subsidiado）の二本立て。Plan de Beneficios en Salud（PBS: 健康給付計画）に収載された医療技術が保険償還対象。医療機器の個別償還は医薬品ほど体系化されておらず、施設調達・保険契約に依存する部分が大きい。",
      codingSystems: [
        "CUPS（Clasificación Única de Procedimientos en Salud）— 医療行為分類",
        "要確認（医療機器個別の償還コード体系は未確認）",
      ],
      url: "https://www.minsalud.gov.co/",
    },

    marketingRules: {
      authority: "INVIMA",
      description:
        "INVIMA未登録機器の広告・販売は禁止。ラベリング・使用説明書はスペイン語が必須。",
      keyRules: [
        "Registro Sanitario 未取得の医療機器の広告・販売は禁止",
        "ラベリング・使用説明書はスペイン語必須",
        "誇大・虚偽・誤解を招く広告の禁止",
        "医療機器の広告はINVIMAの監視対象",
      ],
    },

    mdsap: {
      status: "非参加（Not participating）— ただしISO 13485 / MDSAP認証を品質証拠として受容",
      description:
        "コロンビアはMDSAPの正式参加国・オブザーバー・アフィリエイトメンバーのいずれにも該当しない（2026年4月時点）。ただしINVIMA登録時にISO 13485認証またはMDSAP認証をQMS適合の証拠として受容。",
    },

    internationalStandards: {
      iso13485: {
        accepted: true,
        notes: "登録申請時にISO 13485:2016認証の提出が求められる。MDSAP認証も代替として受容。",
      },
      iso14971: {
        accepted: true,
        notes: "リスクマネジメント。技術文書のリスク評価に適用。",
      },
      iec62304: {
        accepted: true,
        notes: "ソフトウェアライフサイクル。SaMD申請に適用。",
      },
      iec60601: {
        accepted: true,
        notes: "医用電気機器の安全・性能要求。",
      },
      others: [
        {
          name: "ISO 10993シリーズ（生物学的安全性評価）",
          notes: "生体接触医療機器の生物学的安全性評価に適用。",
        },
        {
          name: "IEC 62366（ユーザビリティエンジニアリング）",
          notes: "医療機器のユーザビリティ評価に参照。",
        },
      ],
    },

    recentDevelopments: [
      {
        date: "2026-02",
        title: "UDI-DI 義務化期限（Class IIa / Class I / IVD Category I）",
        description:
          "Resolution 1405/2022に基づくUDI-DI義務化の最終期限。2026年2月9日までにClass IIa・Class I・IVD Category Iの既存登録にUDI-DIコードを組み込む必要あり。",
      },
      {
        date: "2025-12",
        title: "新医療機器規制法令（Régimen Sanitario de Dispositivos Médicos）策定中",
        description:
          "MinSaludがDecrete 4725/2005を置換する新規制法令の策定を進行中。EU MDR/IVDRとの更なる整合が予想される。",
      },
      {
        date: "2022",
        title: "Resolution 1405/2022 — UDI-DI義務化",
        description:
          "UDI-DI（固有機器識別子）の義務化およびセマンティックレポートの提出要件を規定。段階的実施を開始。",
      },
      {
        date: "2005",
        title: "Decreto 4725 de 2005 制定",
        description:
          "コロンビアの医療機器規制の基本法令。登録制度・分類体系・市販後監視の枠組みを確立。",
      },
    ],

    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- Chile ---
  // =========================================================================
  {
    code: "CHL",
    country: "チリ",
    countryEn: "Chile",
    region: "Latam",
    flag: "🇨🇱",

    legalSystemOverview: {
      type: "中央集権制（Centralized system）— 段階的規制導入型",
      description:
        "チリの医療機器規制はISP（Instituto de Salud Pública de Chile）のANDID（Agencia Nacional de Dispositivos Médicos, Innovación y Desarrollo）が管轄する。Código Sanitario（衛生法典）および Decreto 825/98 が法的基盤だが、規制は段階的に導入されており、全医療機器が強制登録の対象ではない点が特徴。保健省（Ministerio de Salud）が個別のDecreto Supremo（最高政令）で対象製品カテゴリを順次指定し、ISPが適合性検証・認証を実施。4クラス分類（Class I / II / III / IV）を採用。IVDはリスクClass A〜Dに分類。",
      keyCharacteristics: [
        "ISP / ANDID による一元的規制",
        "段階的規制導入: 保健省のDecreto Supremoで対象カテゴリを順次指定",
        "リスクベースの4クラス分類（Class I / II / III / IV）",
        "IVDは別途4クラス（Class A / B / C / D）",
        "現時点で全医療機器の強制登録義務はなく、指定カテゴリのみ適合性検証が必要",
        "Código Sanitario（衛生法典）改正（Ley de Fármacos II）が議会審議中で、全面的規制強化が予想される",
      ],
    },

    authorities: [
      {
        name: "ISP / ANDID",
        fullName: "Instituto de Salud Pública de Chile — Agencia Nacional de Dispositivos Médicos, Innovación y Desarrollo",
        localName: "Instituto de Salud Pública de Chile — Agencia Nacional de Dispositivos Médicos, Innovación y Desarrollo",
        role: "医療機器の適合性検証・認証・登録・市販後監視・ビジランス。主管当局。",
        url: "https://www.ispch.gob.cl/andid/",
        isPrimary: true,
      },
      {
        name: "MinSalud",
        fullName: "Ministerio de Salud de Chile",
        localName: "Ministerio de Salud",
        role: "保健政策の策定・Decreto Supremo（規制対象カテゴリ指定）の発出",
        url: "https://www.minsal.cl/",
        isPrimary: false,
      },
      {
        name: "FONASA",
        fullName: "Fondo Nacional de Salud",
        localName: "Fondo Nacional de Salud",
        role: "公的健康保険制度の管理・償還管理",
        url: "https://www.fonasa.cl/",
        isPrimary: false,
      },
    ],

    notifiedBodies: {
      system: "なし（ISP/ANDID が直接適合性検証・認証を実施）",
      description:
        "チリでは欧州型のNotified Body制度は存在しない。ISP/ANDIDが直接、適合性検証（Verificación de Conformidad）および認証を実施する。国際品質認証（CE/FDA等）は参考資料として評価されるが、自動的な承認にはならない。",
      bodies: [],
    },

    deviceDefinition: {
      legalDefinition:
        "Código Sanitario（Libro VII）および Decreto 825/98 に定義。疾病の診断・治療・予防・監視・軽減等を目的とする機器・装置・器具・材料・ソフトウェア等。",
      scope:
        "IVD（体外診断用医療機器）も適用範囲に含まれる。",
      notes:
        "段階的規制のため、全製品カテゴリが同時に規制対象とはならない。保健省のDecreto Supremoで対象指定されたカテゴリのみ強制適合性検証の対象。",
    },

    primaryLaw: {
      title: "Código Sanitario — Libro VII: De los productos farmacéuticos y dispositivos médicos",
      originalTitle: "Código Sanitario (DFL N° 725/1967)",
      enacted: "1967",
      lastAmended: "2014（Ley 20.724 による改正）",
      url: "https://www.bcn.cl/leychile/navegar?idNorma=1058373",
      description:
        "チリの衛生法典。医薬品・医療機器の規制の法的基盤。Libro VII が医療機器を規定。Ley 20.724（2014年）による改正で医療機器規制の強化が図られた。Ley de Fármacos II（衛生法典の更なる改正）が議会で審議中。",
    },

    implementingRegulations: [
      {
        title: "Decreto Supremo 825/98 — Reglamento del control de productos y elementos de uso médico",
        date: "1998",
        url: "https://www.ispch.gob.cl/regulaciones/",
        description:
          "医療用製品・機器の管理に関する施行規則。分類体系・適合性検証手続・製造施設要件を規定。",
        category: "施行規則",
      },
      {
        title: "Decreto Exento 5/2025 — 免疫血液学的試薬の衛生管理体制への編入",
        date: "2025-02-21",
        url: "https://www.ispch.gob.cl/andid/",
        description:
          "免疫血液学的試薬をCódigo Sanitario Art. 111の衛生管理体制に編入。NCh-ISO 16142/2:2021準拠の適合性検証・認証を義務化。2026年2月22日施行。",
        category: "IVD規制",
      },
      {
        title: "Decreto Exento 25/2026 — 高リスク医療機器・IVDの衛生管理体制への追加編入",
        date: "2026-03-19",
        url: "https://www.ispch.gob.cl/andid/",
        description:
          "追加の高リスク医療機器・IVDカテゴリを衛生管理体制に編入。規制対象の段階的拡大。",
        category: "規制対象拡大",
      },
    ],

    relatedLaws: [
      {
        title: "Ley 20.724 de 2014 — Modificación del Código Sanitario",
        category: "法改正",
        enacted: "2014",
        url: "https://www.bcn.cl/leychile/navegar?idNorma=1058373",
        relevance:
          "衛生法典の改正法。医療機器規制の強化・ISPの権限明確化。",
      },
      {
        title: "Ley 19.628 — Ley sobre Protección de la Vida Privada",
        category: "データ保護",
        enacted: "1999",
        url: "https://www.bcn.cl/leychile/navegar?idNorma=141599",
        relevance:
          "個人情報保護法。コネクテッドデバイス・SaMDが取り扱う個人医療情報に適用。",
      },
    ],

    classification: {
      system: "4クラス制（Class I / II / III / IV）",
      basis: "リスクベース分類。意図する用途・侵襲性・使用期間・エネルギー源等に基づく。IVDは別途リスクClass A〜Dに分類。Decreto 825/98 に規定。",
      classes: [
        {
          name: "Class I",
          nameJa: "クラスI",
          riskLevel: "極低",
          description: "極低リスクの非侵襲的機器。",
          examples: ["弾性包帯", "聴診器", "車椅子", "舌圧子", "松葉杖"],
          approvalPath: "適合性検証（指定カテゴリのみ）",
        },
        {
          name: "Class II",
          nameJa: "クラスII",
          riskLevel: "中",
          description: "中リスク機器。",
          examples: ["超音波診断装置", "補聴器", "歯科用材料", "血圧計", "注射針"],
          approvalPath: "適合性検証（指定カテゴリのみ）",
        },
        {
          name: "Class III",
          nameJa: "クラスIII",
          riskLevel: "高",
          description: "高リスク機器。",
          examples: ["人工呼吸器", "輸液ポンプ", "透析装置", "冠動脈ステント", "コンタクトレンズ"],
          approvalPath: "適合性検証・認証（指定カテゴリ）",
        },
        {
          name: "Class IV",
          nameJa: "クラスIV",
          riskLevel: "最高",
          description: "最高リスク機器。最も厳格な適合性検証・認証。",
          examples: ["人工心臓弁", "埋込み型除細動器", "薬剤溶出ステント", "脳深部刺激装置", "人工内耳"],
          approvalPath: "適合性検証・認証（指定カテゴリ）",
        },
      ],
      rules: [
        "リスクベース分類（Class I〜IV）",
        "IVDは別途リスクClass A〜Dに分類",
        "保健省のDecreto Supremoで対象カテゴリが順次指定される段階的規制",
        "現時点で強制認証対象は限定的（避妊具・手袋・注射針・注射器等）",
      ],
      totalProductCodes: "GMDN（Global Medical Device Nomenclature）を参照",
    },

    conformityAssessment: {
      overview:
        "チリの医療機器規制は段階的導入型であり、保健省のDecreto Supremoで指定されたカテゴリの製品のみISP/ANDIDへの適合性検証（Verificación de Conformidad）・認証が強制される。指定カテゴリ外の医療機器は規制上のフリーマーケットとなっている。登録フォームはANDID-001。審査期間は約75営業日。NCh-ISO 16142に準拠した安全性・性能の Essential Principles 評価が中心。",
      routes: [
        {
          name: "Verificación de Conformidad y Certificación",
          nameJa: "適合性検証・認証",
          applicableClasses: ["指定カテゴリのClass I〜IV"],
          description:
            "保健省が指定した製品カテゴリに対し、ISP/ANDIDが適合性検証を実施。ANDID-001フォームおよび技術文書・法的文書を提出。NCh-ISO 16142準拠の安全性・性能評価。初回ロット性能評価を含む場合あり。",
          subtypes: [
            { name: "新規認証", description: "初回の適合性検証・認証申請。" },
            { name: "変更報告", description: "設計・製造工程・原材料・ラベリング等の変更時にISPに報告。" },
          ],
          avgReviewTime: "約75営業日",
          avgReviewTimeSource: "https://omcmedical.com/chile-medical-device-registration/",
          fee: "約 USD 350（公式申請手数料）",
          feeSource: "https://omcmedical.com/chile-medical-device-registration/",
          url: "https://www.ispch.gob.cl/andid/registro-y-autorizacion/registro/",
        },
      ],
    },

    electronicSubmission: {
      system: "ISP/ANDID オンライン申請",
      url: "https://www.ispch.gob.cl/andid/registro-y-autorizacion/registro/",
      description:
        "適合性検証申請はISP/ANDIDの窓口および電子システム経由で提出。ANDID-001フォームに技術文書・法的文書を添付。",
      mandatory: true,
    },

    udi: {
      required: false,
      system: "未導入（チリ独自のUDI制度は未確立）",
      description:
        "2026年4月時点で、チリ独自の包括的UDI制度は正式に導入されていない。ただしISPはIMDRF（国際医療機器規制当局フォーラム）のUDI作業グループに参加しており、将来的な導入が見込まれる。",
      url: "https://www.ispch.gob.cl/andid/",
      timeline: "未定（IMDRF参加を通じた検討段階）",
    },

    postMarket: {
      adverseEventReporting: {
        system: "ISP/ANDID ビジランス報告",
        mandatory: true,
        url: "https://www.ispch.gob.cl/andid/",
        description:
          "製造業者・輸入業者・医療従事者が有害事象をISP/ANDIDに報告する義務を負う。設計・製造工程・意図する用途・原材料・ラベリング・性能の変更もISPへの報告が必要。",
      },
      recalls: {
        authority: "ISP / ANDID",
        description:
          "ISP/ANDIDがリコール・FSCA（Field Safety Corrective Action）を監督。市場からの製品回収を命令する権限を有する。",
        url: "https://www.ispch.gob.cl/andid/",
      },
      surveillance:
        "ISP/ANDIDが市販後監視を実施。有害事象報告の監視・安全性情報の評価・是正措置の監督を担う。企業は製品発売後の性能モニタリングと有害事象報告が義務。",
    },

    certificateOfFreeSale: {
      available: true,
      issuingAuthority: "輸出国の規制当局（ISP/ANDID申請時に提出が推奨）",
      name: "Certificate of Free Sale (CFS)",
      description:
        "ISP/ANDID への適合性検証申請時に、原産国の規制当局が発行するCFSの提出が推奨される。必須要件かは製品カテゴリにより異なる。",
      processingTime: "輸出国側の手続きによる",
      url: "https://www.ispch.gob.cl/andid/",
    },

    reimbursement: {
      system: "公的保険（FONASA）と民間保険（ISAPRE）の混合制度",
      authority: "FONASA / ISAPRE / MinSalud",
      description:
        "チリの医療保険は公的FONASA（Fondo Nacional de Salud）と民間ISAPRE（Instituciones de Salud Previsional）の二本立て。FONASA加入者は公的・民間医療施設の両方にアクセス可能（FONASA提携施設の場合は3段階の料金体系）。ISAPREは各社が独自の償還率・自己負担率を設定。医療機器の個別償還制度は医薬品ほど体系化されておらず、施設調達・保険契約に依存する部分が大きい。",
      codingSystems: [
        "要確認（チリ固有の医療機器償還コード体系は未確認）",
      ],
      url: "https://www.fonasa.cl/",
    },

    marketingRules: {
      authority: "ISP / ANDID",
      description:
        "指定カテゴリの医療機器はISP/ANDIDの認証なしに販売・流通することは禁止。ラベリングはスペイン語が必須。",
      keyRules: [
        "指定カテゴリの医療機器はISP/ANDID認証なしの販売・流通禁止",
        "ラベリング・使用説明書はスペイン語必須",
        "ISPへの適合性検証なしの市場投入は衛生法典違反",
        "製品変更時はISPへの報告・再評価が必要",
      ],
    },

    mdsap: {
      status: "非参加（Not participating）",
      description:
        "チリはMDSAPの正式参加国・オブザーバー・アフィリエイトメンバーのいずれにも該当しない（2026年4月時点）。ただしISPはIMDRF（国際医療機器規制当局フォーラム）のメンバーであり、国際規制調和に積極的に参加。",
    },

    internationalStandards: {
      iso13485: {
        accepted: true,
        notes: "ISO 13485認証はQMS適合の証拠として受容。適合性検証申請時の提出が推奨。",
      },
      iso14971: {
        accepted: true,
        notes: "リスクマネジメント。技術文書のリスク評価に適用。",
      },
      iec62304: {
        accepted: true,
        notes: "ソフトウェアライフサイクル。SaMD申請に適用。",
      },
      iec60601: {
        accepted: true,
        notes: "医用電気機器の安全・性能要求。",
      },
      others: [
        {
          name: "NCh-ISO 16142/2:2021（Essential Principles of Safety and Performance — IVD）",
          notes: "IVD医療機器の安全性・性能に関する Essential Principles。チリ国家規格として採用。",
        },
        {
          name: "ISO 10993シリーズ（生物学的安全性評価）",
          notes: "生体接触医療機器の生物学的安全性評価に適用。",
        },
      ],
    },

    recentDevelopments: [
      {
        date: "2026-03",
        title: "Decreto Exento 25/2026 — 高リスク医療機器・IVDの追加編入",
        description:
          "2026年3月19日に官報公布。追加の高リスク医療機器・IVDカテゴリを衛生管理体制に編入。規制対象の段階的拡大が加速。",
      },
      {
        date: "2025-02",
        title: "Decreto Exento 5/2025 — 免疫血液学的試薬の規制対象化",
        description:
          "2025年2月21日に官報公布。免疫血液学的試薬を衛生管理体制に編入。2026年2月22日施行。NCh-ISO 16142/2:2021準拠の適合性検証・認証を義務化。",
      },
      {
        date: "2025",
        title: "Ley de Fármacos II（衛生法典改正案）審議中",
        description:
          "衛生法典（Código Sanitario）の大規模改正案が議会で審議中。全医療機器の登録義務化・規制強化が予想される。成立すればチリの医療機器規制が根本的に変革される見込み。",
      },
      {
        date: "2023",
        title: "ANDID設立",
        description:
          "ISP内にANDID（Agencia Nacional de Dispositivos Médicos, Innovación y Desarrollo）を設立。医療機器規制の専門機関として体制強化。",
      },
    ],

    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- NZL (ニュージーランド) ---
  // =========================================================================
  {
    code: "NZL",
    country: "ニュージーランド",
    countryEn: "New Zealand",
    region: "ASPAC",
    flag: "🇳🇿",

    legalSystemOverview: {
      type: "コモンロー（Common law）— 単一国家体制",
      description:
        "ニュージーランドの医療機器規制は現行 Medicines Act 1981 および Medicines (Database of Medical Devices) Regulations 2003 を根拠とする。現行法制は医療機器の市販前承認制度を持たず、WAND（Web Assisted Notification of Devices）データベースへの届出制を採用している。Therapeutic Products Act 2023 が成立したが、政府は Medical Products Bill による置換を決定し、2026年後半に新規制体制への移行を計画中。TGA（オーストラリア）との Trans-Tasman 相互認証や早期警告システムが重要な特徴。",
      keyCharacteristics: [
        "WAND データベースへの届出制（市販前承認ではない）",
        "リスクベースの5クラス分類（GHTF 準拠）",
        "TGA（オーストラリア）との Trans-Tasman 相互認証・早期警告システム",
        "Therapeutic Products Act 2023 から Medical Products Bill への移行中",
        "PHARMAC による公的部門の機器調達・償還管理",
      ],
    },

    authorities: [
      {
        name: "Medsafe",
        fullName: "New Zealand Medicines and Medical Devices Safety Authority",
        localName: null,
        role: "医療機器のWAND届出管理・市販後安全性監視・有害事象対応",
        url: "https://www.medsafe.govt.nz/",
        isPrimary: true,
      },
      {
        name: "PHARMAC",
        fullName: "Pharmaceutical Management Agency",
        localName: null,
        role: "公的医療制度における医療機器の調達・価格交渉・償還管理",
        url: "https://www.pharmac.govt.nz/",
        isPrimary: false,
      },
      {
        name: "Ministry of Health",
        fullName: "Ministry of Health — Manatū Hauora",
        localName: "Manatū Hauora",
        role: "医療機器規制の政策立案・Medical Products Bill の策定",
        url: "https://www.health.govt.nz/",
        isPrimary: false,
      },
    ],

    notifiedBodies: {
      system: "なし（WAND届出制、第三者適合性評価なし）",
      description:
        "現行法制下ではNotified Body制度は存在しない。WAND への届出は安全性・有効性の評価を伴わない。TGAのオーストラリア登録があれば Trans-Tasman MRA により相互認証の対象となりうる。新法（Medical Products Bill）では適合性評価の導入が検討されている。",
      bodies: [],
    },

    deviceDefinition: {
      legalDefinition:
        "Medicines Act 1981 に基づく定義。疾病の診断・予防・モニタリング・治療等を目的とする器具・装置・ソフトウェア等で、薬理学的・免疫学的・代謝的手段によらずその主たる目的を達成するもの。",
      scope:
        "IVD を含む。Medicines (Database of Medical Devices) Regulations 2003 の Schedule 1 で対象範囲を規定。一部の機器（カスタムメイド、治験用等）は WAND 届出免除。",
      notes:
        "SaMD は現行法では明確な規定がなく、新法で対応予定。Therapeutic Products Act 2023 / Medical Products Bill で SaMD の規制枠組みが整備される見込み。",
    },

    primaryLaw: {
      title: "Medicines Act 1981",
      originalTitle: null,
      enacted: "1981",
      lastAmended: "2025（2025年11月改正）",
      url: "https://www.legislation.govt.nz/act/public/1981/0118/latest/DLM53790.html",
      description:
        "医療機器規制の現行根拠法。ただし本法は主に医薬品を対象としており、医療機器に関する規定は限定的。Medicines (Database of Medical Devices) Regulations 2003 により WAND データベースを設置。政府は Medical Products Bill による全面的な置換を計画中（2026年後半発効予定）。",
    },

    implementingRegulations: [
      {
        title: "Medicines (Database of Medical Devices) Regulations 2003",
        date: "2003-11-03",
        url: "https://www.legislation.govt.nz/regulation/public/2003/0325/latest/DLM224223.html",
        description:
          "WAND データベースの設置根拠。スポンサーは NZ で供給する医療機器を30暦日以内に WAND に届出する義務。届出は無料。22の分類ルールを規定。",
        category: "登録",
      },
      {
        title: "Trans-Tasman Mutual Recognition Act 1997",
        date: "1997",
        url: "https://www.legislation.govt.nz/act/public/1997/0060/latest/DLM410793.html",
        description:
          "オーストラリアとの相互認証。一方の国で合法的に供給される製品は、一定条件下で他方の国でも販売可能。医療機器への適用には条件・制限あり。",
        category: "相互認証",
      },
    ],

    relatedLaws: [
      {
        title: "Therapeutic Products Act 2023",
        category: "規制改革",
        enacted: "2023",
        url: "https://www.legislation.govt.nz/act/public/2023/0058/latest/whole.html",
        relevance:
          "Medicines Act 1981 を置換する新法として成立。しかし政府は Medical Products Bill による再置換を決定。最終発効期限は2026年9月1日。",
      },
      {
        title: "Health and Disability Commissioner Act 1994",
        category: "患者権利",
        enacted: "1994",
        url: "https://www.legislation.govt.nz/act/public/1994/0088/latest/DLM333584.html",
        relevance:
          "医療機器の使用に関連する患者の権利保護。消費者の苦情処理制度。",
      },
      {
        title: "Privacy Act 2020",
        category: "個人情報保護",
        enacted: "2020",
        url: "https://www.legislation.govt.nz/act/public/2020/0031/latest/LMS23223.html",
        relevance:
          "コネクテッドデバイス・SaMD が取り扱う個人健康情報の保護要件。",
      },
    ],

    classification: {
      system: "5クラス制（Class I / IIa / IIb / III / AIMD）— GHTF準拠",
      basis: "リスクベース（GHTF分類原則）",
      classes: [
        {
          name: "Class I",
          nameJa: "クラスI",
          riskLevel: "低リスク",
          description: "最低リスク。非侵襲的機器の多くが該当。",
          examples: ["包帯", "車椅子", "聴診器"],
          approvalPath: "WAND 届出（自己認証）",
        },
        {
          name: "Class IIa",
          nameJa: "クラスIIa",
          riskLevel: "低〜中リスク",
          description: "低〜中リスクの機器。",
          examples: ["血圧計", "補聴器", "超音波プローブ"],
          approvalPath: "WAND 届出",
        },
        {
          name: "Class IIb",
          nameJa: "クラスIIb",
          riskLevel: "中〜高リスク",
          description: "中〜高リスクの機器。",
          examples: ["人工呼吸器", "血液透析装置", "骨接合プレート"],
          approvalPath: "WAND 届出",
        },
        {
          name: "Class III",
          nameJa: "クラスIII",
          riskLevel: "高リスク",
          description: "高リスクの機器。長期埋込み型など。",
          examples: ["人工股関節", "冠動脈ステント", "乳房インプラント"],
          approvalPath: "WAND 届出",
        },
        {
          name: "AIMD",
          nameJa: "能動埋込み医療機器",
          riskLevel: "高リスク",
          description: "体内に埋め込まれる能動型医療機器。",
          examples: ["ペースメーカー", "埋込み型除細動器", "人工内耳"],
          approvalPath: "WAND 届出",
        },
      ],
      rules: [
        {
          id: "22分類ルール",
          description:
            "Medicines (Database of Medical Devices) Regulations 2003 の Schedule 2 に規定される22の分類ルール。GHTF の分類原則に準拠。",
          url: "https://www.medsafe.govt.nz/regulatory/devicesnew/2-1Classification.asp",
        },
      ],
      totalProductCodes: "分類ルール22（Product Code 制度は採用していない）",
    },

    conformityAssessment: {
      overview:
        "現行法では市販前承認制度がなく、WAND への届出のみ。適合性評価はスポンサーの自己宣言に依拠。TGA登録がある場合は Trans-Tasman MRA により相互認証の根拠となりうる。新法で適合性評価制度の導入が予定されている。",
      routes: [
        {
          name: "WAND Notification",
          nameJa: "WAND 届出",
          applicableClasses: ["全クラス"],
          description:
            "スポンサーは NZ で医療機器を供給開始してから30暦日以内に WAND に届出。届出は機器の安全性・有効性を評価・承認するものではなく、市販後監視のための情報収集が目的。",
          subtypes: [],
          avgReviewTime: "即時（届出受理）",
          fee: "無料",
          url: "https://www.medsafe.govt.nz/regulatory/DevicesNew/3WAND.asp",
        },
        {
          name: "Trans-Tasman MRA",
          nameJa: "Trans-Tasman 相互認証",
          applicableClasses: ["TGA登録機器"],
          description:
            "オーストラリア TGA に登録された医療機器は、Trans-Tasman Mutual Recognition Arrangement に基づき、一定条件下で NZ でも供給可能。ただしWAND届出は別途必要。",
          subtypes: [],
          avgReviewTime: "条件による",
          fee: "WAND届出は無料",
          url: "https://www.legislation.govt.nz/act/public/1997/0060/latest/DLM410793.html",
        },
      ],
    },

    electronicSubmission: {
      system: "WAND Online System",
      url: "https://www.medsafe.govt.nz/regulatory/DevicesNew/3WAND.asp",
      description:
        "WAND はオンラインデータベースで、スポンサーがウェブ上で直接機器情報を入力・届出する。",
      mandatory: true,
    },

    udi: {
      required: false,
      system: "未導入（検討中）",
      description:
        "現行法では UDI は義務化されていない。一部の機器についてはトレーサビリティ要件があるが、体系的な UDI 制度は未導入。新法で IMDRF UDI ガイダンスに沿った制度導入が検討されている。",
      url: null,
      timeline: "新法（Medical Products Bill）の施行に伴い導入予定",
    },

    postMarket: {
      adverseEventReporting: {
        system: "Medsafe 有害事象報告制度 — CARM（Centre for Adverse Reactions Monitoring）",
        mandatory: true,
        url: "https://www.medsafe.govt.nz/regulatory/devicesnew/9adverseevent.asp",
        description:
          "スポンサーは有害事象を Medsafe に報告する義務がある。市場措置を伴うインシデントは10営業日以内に初回報告、最終報告は120暦日以内。医療専門家・患者も CARM 経由で報告可能。",
      },
      recalls: {
        authority: "Medsafe",
        description:
          "スポンサー主導のリコール（Field Safety Corrective Action）。Medsafe はリコール公告を発行し、TGA との Trans-Tasman 早期警告システムで情報共有。",
        url: "https://www.medsafe.govt.nz/hot/recalls/devicesrecalls.asp",
      },
      surveillance:
        "Medsafe による市販後安全性監視。Trans-Tasman Early Warning System により TGA と安全性情報を共有。CARM データベースで有害事象を一元管理。",
    },

    certificateOfFreeSale: {
      available: true,
      issuingAuthority: "Medsafe",
      name: "Certificate of Free Sale",
      description:
        "Medsafe が発行する自由販売証明書。NZ で合法的に供給されている医療機器について、輸出先国の当局が要求する場合に使用。",
      processingTime: "約2〜4週間",
      url: "https://www.medsafe.govt.nz/regulatory/reg.asp",
    },

    reimbursement: {
      system: "PHARMAC（公的部門の調達・償還）+ ACC（事故補償）",
      authority: "PHARMAC (Pharmaceutical Management Agency)",
      description:
        "PHARMAC は公的医療制度（Te Whatu Ora）で使用される医療機器の調達・価格交渉を管理。医療機器の償還リストを管理し、国家契約を通じて公的病院への供給を取り決める。民間部門は別途保険制度。ACC（Accident Compensation Corporation）は事故関連の医療機器費用をカバー。",
      codingSystems: [
        "PHARMAC Devices Schedule",
        "National Contract（国家調達契約）",
      ],
      url: "https://www.pharmac.govt.nz/",
    },

    marketingRules: {
      authority: "Medsafe + Commerce Commission",
      description:
        "医療機器の広告は Fair Trading Act 1986 および消費者保護法に基づき規制。虚偽・誤解を招く表示は禁止。医療専門家向けと一般消費者向けで異なる基準が適用される場合がある。",
      keyRules: [
        "Fair Trading Act 1986 による虚偽・誤解を招く表示の禁止",
        "WAND 届出情報との整合性が必要",
        "承認されていない効能・効果の広告禁止",
        "比較広告は事実に基づくことが必要",
      ],
    },

    mdsap: {
      status: "非参加（関連はあるが MDSAP 正式メンバーではない）",
      description:
        "NZ は MDSAP の正式参加国ではない。ただし TGA（オーストラリア）が MDSAP 参加国であるため、Trans-Tasman MRA を通じた間接的な関連がある。新法の下で MDSAP 参加が検討される可能性がある。",
    },

    internationalStandards: {
      iso13485: {
        accepted: true,
        notes:
          "現行法では法的義務ではないが、TGA 登録やCE マーキングの前提として実質的に必要。新法で QMS 要件が正式に導入される見込み。",
      },
      iso14971: {
        accepted: true,
        notes: "リスクマネジメントの国際標準として広く参照。",
      },
      iec62304: {
        accepted: true,
        notes: "ソフトウェアライフサイクル要求として参照。",
      },
      iec60601: {
        accepted: true,
        notes: "医用電気機器の安全・性能要求として参照。NZ/AS 規格として採用。",
      },
      others: [
        { standard: "ISO 10993 シリーズ", notes: "生体適合性評価の参照規格" },
        { standard: "AS/NZS 規格群", notes: "オーストラリアとの共通規格（Joint Standards）" },
      ],
    },

    recentDevelopments: [
      {
        date: "2026-Q2",
        title: "Medical Products Bill 策定中",
        description:
          "政府は Therapeutic Products Act 2023 を Medical Products Bill で置換する方針を2024年9月に決定。2026年後半に新規制体制への移行を計画。独立規制機関の設立を含む。",
      },
      {
        date: "2023",
        title: "Therapeutic Products Act 2023 成立",
        description:
          "Medicines Act 1981 を置換する新法が成立。しかし新政権が方針転換し、Medical Products Bill による再置換を決定。最終発効期限は2026年9月1日。",
      },
      {
        date: "2024",
        title: "Trans-Tasman Early Warning System 更新",
        description:
          "TGA との医療機器安全性に関する早期警告システムの運用を継続・強化。安全性シグナルの共有体制を改善。",
      },
    ],

    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- PHL (フィリピン) ---
  // =========================================================================
  {
    code: "PHL",
    country: "フィリピン",
    countryEn: "Republic of the Philippines",
    region: "ASPAC",
    flag: "🇵🇭",

    legalSystemOverview: {
      type: "大統領制共和国（混合法体系 — シビルロー＋コモンロー）",
      description:
        "フィリピンの医療機器規制は Republic Act No. 9711（FDA Act of 2009）を根拠とし、FDA Philippines（食品医薬品庁）が一元的に管轄する。ASEAN Medical Device Directive（AMDD）に整合した4クラス分類制度を採用。低リスク機器は Certificate of Medical Device Notification（CMDN）、高リスク機器は Certificate of Medical Device Registration（CMDR）で市場参入する。",
      keyCharacteristics: [
        "FDA Philippines による一元的な規制体制",
        "ASEAN AMDD 整合の4クラス分類（Class A / B / C / D）",
        "CMDN（届出）と CMDR（登録）の二層構造",
        "ASEAN 加盟国間の Abridged Pathway（簡略化経路）",
        "eServices Portal による電子申請の拡大（2025年〜）",
      ],
    },

    authorities: [
      {
        name: "FDA Philippines",
        fullName: "Food and Drug Administration Philippines",
        localName: "Pangasiwaan sa Pagkain at Gamot",
        role: "医療機器の登録・届出・市販後監視・施設認可",
        url: "https://www.fda.gov.ph/",
        isPrimary: true,
      },
      {
        name: "DOH",
        fullName: "Department of Health",
        localName: "Kagawaran ng Kalusugan",
        role: "医療機器規制の政策立案・行政命令の発行",
        url: "https://www.doh.gov.ph/",
        isPrimary: false,
      },
      {
        name: "PhilHealth",
        fullName: "Philippine Health Insurance Corporation",
        localName: null,
        role: "国民健康保険による医療機器関連給付の管理",
        url: "https://www.philhealth.gov.ph/",
        isPrimary: false,
      },
    ],

    notifiedBodies: {
      system: "なし（FDA Philippines が直接審査）",
      description:
        "フィリピンではNotified Body制度は存在しない。FDA Philippines（CDRRHR: Center for Device Regulation, Radiation Health and Research）が直接、医療機器の登録審査を実施する。ASEAN加盟国のNRAによる承認がある場合は Abridged Pathway（簡略化経路）を利用可能。",
      bodies: [],
    },

    deviceDefinition: {
      legalDefinition:
        "Republic Act No. 9711 および ASEAN AMDD に基づく定義。疾病の診断・予防・モニタリング・治療・緩和等を目的とする器具・装置・ソフトウェア・材料等で、薬理学的・免疫学的・代謝的手段によらずその主たる目的を達成するもの。",
      scope:
        "IVD を含む。医療機器ソフトウェア（MDSW）に関するドラフトガイドラインを2025年5月に公開。ASEAN AMDD の定義に整合。",
      notes:
        "2025年にドラフト FDA Circular で SaMD/MDSW の分類・評価ガイドラインを策定中。ASEAN および国際規制慣行に整合した枠組みを目指している。",
    },

    primaryLaw: {
      title: "Republic Act No. 9711 — FDA Act of 2009",
      originalTitle: null,
      enacted: "2009",
      lastAmended: null,
      url: "https://www.fda.gov.ph/republic-act-no-9711/",
      description:
        "FDA Philippines の設立根拠法。医薬品・医療機器・食品・化粧品等の規制を包括的に規定。FDA に医療機器の登録・監視・取締り権限を付与。",
    },

    implementingRegulations: [
      {
        title: "Administrative Order No. 2018-0002 — Rules and Regulations on the Regulation of Medical Devices",
        date: "2018",
        url: "https://www.fda.gov.ph/",
        description:
          "医療機器規制の包括的な実施規則。ASEAN AMDD に整合したクラス分類・登録手続き・市販後監視を規定。",
        category: "登録",
      },
      {
        title: "Administrative Order No. 2025-0030 — PMAS Requirements (AMDD Annex 5)",
        date: "2025-03",
        url: "https://www.fda.gov.ph/",
        description:
          "ASEAN AMDD Annex 5 に基づく Post-Marketing Alert System（PMAS）の実施ガイドライン。市販後安全性監視の義務的枠組みを確立。",
        category: "市販後",
      },
      {
        title: "FDA Circular No. 2025-007 — eServices Portal for CMDN",
        date: "2025-03",
        url: "https://www.fda.gov.ph/fda-circular-no-2025-007-guidelines-on-the-use-of-the-food-and-drug-administration-eservices-portal-system-for-the-initial-application-of-a-certificate-of-medical-device-notification-cmdn/",
        description:
          "Class A 医療機器の CMDN 初回申請に eServices Portal の使用を義務化。2025年3月10日から全面実施。",
        category: "電子申請",
      },
    ],

    relatedLaws: [
      {
        title: "Republic Act No. 3720 — Food, Drug and Cosmetic Act",
        category: "基本法",
        enacted: "1963",
        url: null,
        relevance:
          "FDA Philippines の前身法。RA 9711 により大幅改正・強化。",
      },
      {
        title: "Data Privacy Act of 2012 (RA 10173)",
        category: "個人情報保護",
        enacted: "2012",
        url: null,
        relevance:
          "コネクテッドデバイス・SaMD が取り扱う個人健康情報の保護要件。",
      },
    ],

    classification: {
      system: "4クラス制（Class A / B / C / D）— ASEAN AMDD 整合",
      basis: "リスクベース（GHTF/ASEAN AMDD 分類原則）",
      classes: [
        {
          name: "Class A",
          nameJa: "クラスA",
          riskLevel: "低リスク",
          description: "最低リスクの機器。CMDN（届出）で市場参入。",
          examples: ["舌圧子", "再使用可能手術器具", "非滅菌包帯"],
          approvalPath: "CMDN（Certificate of Medical Device Notification）",
        },
        {
          name: "Class B",
          nameJa: "クラスB",
          riskLevel: "低〜中リスク",
          description: "低〜中リスクの機器。CMDR（登録）が必要。",
          examples: ["血圧計", "補聴器", "超音波診断装置"],
          approvalPath: "CMDR（Certificate of Medical Device Registration）",
        },
        {
          name: "Class C",
          nameJa: "クラスC",
          riskLevel: "中〜高リスク",
          description: "中〜高リスクの機器。CMDR（登録）が必要。",
          examples: ["人工呼吸器", "血液透析装置", "整形外科インプラント"],
          approvalPath: "CMDR（Certificate of Medical Device Registration）",
        },
        {
          name: "Class D",
          nameJa: "クラスD",
          riskLevel: "高リスク",
          description: "最高リスクの機器。CMDR（登録）が必要。最も厳格な審査。",
          examples: ["心臓弁", "冠動脈ステント", "埋込み型除細動器"],
          approvalPath: "CMDR（Certificate of Medical Device Registration）",
        },
      ],
      rules: [
        {
          id: "ASEAN AMDD 分類ルール",
          description:
            "ASEAN Medical Device Directive に基づくリスク分類ルール。侵襲性・持続時間・能動/非能動等の基準で分類。",
          url: "https://www.fda.gov.ph/",
        },
      ],
      totalProductCodes: "ASEAN AMDD 分類ルール（GHTF 準拠）",
    },

    conformityAssessment: {
      overview:
        "FDA Philippines が直接審査。Class A は CMDN（届出）、Class B/C/D は CMDR（登録）。ASEAN 加盟国の NRA 承認がある場合は Abridged Pathway を利用可能。",
      routes: [
        {
          name: "CMDN (Certificate of Medical Device Notification)",
          nameJa: "CMDN 医療機器届出証明書",
          applicableClasses: ["Class A"],
          description:
            "低リスク機器の届出制度。eServices Portal 経由でオンライン申請（2025年3月〜必須）。",
          subtypes: [],
          avgReviewTime: "約30営業日",
          fee: "登録手数料あり（2025年は一時的に旧料金に戻し中）",
          url: "https://www.fda.gov.ph/",
        },
        {
          name: "CMDR (Certificate of Medical Device Registration)",
          nameJa: "CMDR 医療機器登録証明書",
          applicableClasses: ["Class B", "Class C", "Class D"],
          description:
            "中〜高リスク機器の登録制度。技術文書・安全性データ・品質管理システムの審査を伴う。",
          subtypes: [
            {
              name: "Full Evaluation",
              description: "フルの技術審査。初回登録に適用。",
            },
            {
              name: "Abridged Pathway",
              description:
                "ASEAN 加盟国の NRA 承認がある場合の簡略化経路。Class B/C/D に適用可能。審査期間短縮。",
            },
          ],
          avgReviewTime: "Full: 約90〜120営業日、Abridged: 約60営業日",
          fee: "US$736〜US$1,773（クラス・有効期間による。2025年は一時的に旧料金適用中）",
          url: "https://www.fda.gov.ph/",
        },
      ],
    },

    electronicSubmission: {
      system: "FDA eServices Portal",
      url: "https://eservices.fda.gov.ph/",
      description:
        "2025年3月10日から Class A 機器の CMDN 初回申請は eServices Portal 経由が必須。Class B/C/D の CMDR はメール（cdrrhr-productregistration@fda.gov.ph）による提出が継続中。",
      mandatory: true,
    },

    udi: {
      required: false,
      system: "未導入（ASEAN AMDD での検討中）",
      description:
        "フィリピンでは現時点で UDI は義務化されていない。ASEAN レベルでの UDI 導入議論が進行中。",
      url: null,
      timeline: "ASEAN AMDD の進展に連動して導入予定",
    },

    postMarket: {
      adverseEventReporting: {
        system: "FDA Philippines 有害事象報告制度 — CDRRHR",
        mandatory: true,
        url: "https://www.fda.gov.ph/",
        description:
          "製造業者・流通業者は重篤な有害事象を FDA Philippines（CDRRHR）に報告義務。AO 2025-0030 により ASEAN AMDD Annex 5 に基づく Post-Marketing Alert System（PMAS）を正式導入。報告は CDRRHR-PRSDD-Form 0.20 を使用。",
      },
      recalls: {
        authority: "FDA Philippines",
        description:
          "製造業者・流通業者主導のリコール（Field Safety Corrective Action）。FDA Philippines は安全性アラートを発行し、回収を監督。",
        url: "https://www.fda.gov.ph/",
      },
      surveillance:
        "AO 2025-0030 に基づく PMAS の運用。スポンサーは Post-Market Surveillance 計画の策定・実施が義務。ASEAN AMDD Annex 5 に整合した市販後監視体制。",
    },

    certificateOfFreeSale: {
      available: true,
      issuingAuthority: "FDA Philippines",
      name: "Certificate of Free Sale (CFS) / Certificate of Product Registration (CPR)",
      description:
        "FDA Philippines が登録済み医療機器について発行する自由販売証明書。輸出先国の当局が要求する場合に使用。",
      processingTime: "約2〜4週間",
      url: "https://www.fda.gov.ph/",
    },

    reimbursement: {
      system: "PhilHealth（国民健康保険）",
      authority: "PhilHealth (Philippine Health Insurance Corporation)",
      description:
        "PhilHealth は Universal Health Care Act（RA 11223, 2019年）に基づく国民健康保険制度を運営。医療機器関連の給付は主に手技・入院パッケージに含まれる形で償還。個別機器の直接償還リストは限定的。",
      codingSystems: [
        "PhilHealth Case Rates（包括支払い）",
        "ICD-10",
      ],
      url: "https://www.philhealth.gov.ph/",
    },

    marketingRules: {
      authority: "FDA Philippines",
      description:
        "医療機器の広告は FDA Philippines の規制に基づく。Consumer Act of the Philippines（RA 7394）による虚偽・誤解を招く広告の禁止。登録/届出済みの適応のみ広告可。",
      keyRules: [
        "FDA 登録/届出されていない機器の広告禁止",
        "虚偽・誤解を招く効能表示の禁止（RA 7394）",
        "医療機器広告は FDA の事前承認が必要な場合あり",
        "オンライン販売・広告に関するガイドラインの強化",
      ],
    },

    mdsap: {
      status: "非参加",
      description:
        "フィリピンは MDSAP の参加国ではない。ただし ISO 13485 認証は登録時に有利に作用する。",
    },

    internationalStandards: {
      iso13485: {
        accepted: true,
        notes:
          "CMDR 申請時に ISO 13485 認証の提出が推奨・考慮される。ASEAN AMDD の QMS 要件に整合。",
      },
      iso14971: {
        accepted: true,
        notes: "リスクマネジメントの参照規格として認知。",
      },
      iec62304: {
        accepted: true,
        notes: "SaMD/MDSW ガイドライン（ドラフト）で参照。",
      },
      iec60601: {
        accepted: true,
        notes: "医用電気機器の安全・性能要求として参照。",
      },
      others: [
        { standard: "ISO 10993 シリーズ", notes: "生体適合性評価の参照規格" },
        { standard: "ASEAN AMDD Essential Principles", notes: "ASEAN 共通の安全性・性能の基本原則" },
      ],
    },

    recentDevelopments: [
      {
        date: "2025-03",
        title: "AO 2025-0030: PMAS 実施ガイドライン発行",
        description:
          "ASEAN AMDD Annex 5 に基づく Post-Marketing Alert System（PMAS）の実施ガイドラインを発行。市販後安全性監視の義務的枠組みを確立。",
      },
      {
        date: "2025-05",
        title: "医療機器ソフトウェア（MDSW）ガイドライン ドラフト公開",
        description:
          "FDA Philippines が SaMD/MDSW の分類・評価に関するドラフト FDA Circular を公開。パブリックコメント期限は2025年7月20日。",
      },
      {
        date: "2025-03",
        title: "eServices Portal による CMDN 電子申請の全面実施",
        description:
          "Class A 医療機器の CMDN 初回申請が eServices Portal 経由で全面実施。デジタル化の推進。",
      },
      {
        date: "2025",
        title: "医療機器登録手数料の一時停止",
        description:
          "2025年の大幅な手数料引き上げに対し、一時的に旧料金への差し戻し措置を実施（60営業日間）。さらに延長措置あり。",
      },
    ],

    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- ARG (アルゼンチン) ---
  // =========================================================================
  {
    code: "ARG",
    country: "アルゼンチン",
    countryEn: "Argentine Republic",
    region: "Latam",
    flag: "🇦🇷",

    legalSystemOverview: {
      type: "連邦制共和国（シビルロー体系）",
      description:
        "アルゼンチンの医療機器規制は ANMAT（Administración Nacional de Medicamentos, Alimentos y Tecnología Médica）が管轄する。Disposición ANMAT 2318/2002 が医療機器登録の技術的・手続的要件を規定し、Disposición 727/2013 とともに主要な規制枠組みを形成。GHTF 分類原則に基づく4クラス制を採用。2025年には行政手続きの大幅な簡素化・デジタル化が進行中。",
      keyCharacteristics: [
        "ANMAT による一元的な規制体制",
        "GHTF 準拠の4クラス分類（Class I / II / III / IV）",
        "HELENA ポータルによるオンライン申請",
        "2025年の大規模な行政手続き簡素化改革",
        "認定国（米・EU・日・加・豪）の自由販売証明書を要求",
      ],
    },

    authorities: [
      {
        name: "ANMAT",
        fullName: "Administración Nacional de Medicamentos, Alimentos y Tecnología Médica",
        localName: "ANMAT",
        role: "医療機器の登録・市販後監視（Tecnovigilancia）・施設認可・GMP査察",
        url: "https://www.argentina.gob.ar/anmat",
        isPrimary: true,
      },
      {
        name: "Ministry of Health",
        fullName: "Ministerio de Salud de la Nación",
        localName: "Ministerio de Salud",
        role: "医療機器規制の政策立案",
        url: "https://www.argentina.gob.ar/salud",
        isPrimary: false,
      },
    ],

    notifiedBodies: {
      system: "なし（ANMAT が直接審査）",
      description:
        "アルゼンチンではNotified Body制度は存在しない。ANMAT が直接、医療機器の登録審査を実施する。Class I は届出（notification number）、Class II/III/IV は技術審査を経て登録証明書（clearance certificate）を発行。",
      bodies: [],
    },

    deviceDefinition: {
      legalDefinition:
        "Disposición ANMAT 2318/2002 に基づく定義。疾病の診断・予防・モニタリング・治療等を目的とする器具・装置・ソフトウェア・材料等で、薬理学的・免疫学的・代謝的手段によらずその主たる目的を達成するもの。",
      scope:
        "IVD を含む（IVD は別途 Class A/B 分類）。Disposición 64/2025 により SaMD が医療機器定義に含まれることを明確化。",
      notes:
        "コンビネーション製品は主たる作用機序に基づき医療機器または医薬品として分類。",
    },

    primaryLaw: {
      title: "Ley 16.463 — Ley de Medicamentos",
      originalTitle: "Ley de Medicamentos (Ley 16.463)",
      enacted: "1964",
      lastAmended: null,
      url: "https://www.argentina.gob.ar/anmat",
      description:
        "医療製品規制の基本法。ANMAT の権限根拠。医療機器の詳細な規制は主に ANMAT の Disposiciones（処分命令）で規定。",
    },

    implementingRegulations: [
      {
        title: "Disposición ANMAT 2318/2002",
        date: "2002",
        url: "https://www.argentina.gob.ar/anmat",
        description:
          "医療機器登録の技術的・手続的・文書的要件を規定する主要規則。Annex III.B でラベリング要件、技術文書（Technical File）の構成を規定。",
        category: "登録",
      },
      {
        title: "Disposición ANMAT 727/2013",
        date: "2013",
        url: "https://www.argentina.gob.ar/anmat",
        description:
          "医療機器のリスク分類規則。GHTF 分類原則に基づく4クラス制の詳細を規定。",
        category: "分類",
      },
      {
        title: "Disposición ANMAT 8194/2023",
        date: "2023",
        url: "https://www.argentina.gob.ar/anmat",
        description:
          "Tecnovigilancia（市販後安全性監視）プログラムの更新。旧 Provision 8054/2010 を置換。有害事象報告体制を近代化。",
        category: "市販後",
      },
      {
        title: "Disposición ANMAT 64/2025",
        date: "2025",
        url: "https://www.argentina.gob.ar/anmat",
        description:
          "SaMD を含む医療機器定義の更新。デジタルヘルス製品の規制枠組みを整備。",
        category: "定義",
      },
      {
        title: "Disposición ANMAT 8799/2025",
        date: "2025",
        url: "https://www.argentina.gob.ar/anmat",
        description:
          "Class I/II 医療機器および IVD Class A/B の製造・輸入施設認可手続きの簡素化。低リスク製品の市場参入を迅速化。",
        category: "施設認可",
      },
    ],

    relatedLaws: [
      {
        title: "Ley 25.326 — Protección de Datos Personales",
        category: "個人情報保護",
        enacted: "2000",
        url: null,
        relevance:
          "コネクテッドデバイス・SaMD が取り扱う個人健康情報の保護。",
      },
      {
        title: "Decreto 1490/92",
        category: "設立",
        enacted: "1992",
        url: null,
        relevance:
          "ANMAT の設立根拠。保健省傘下の分権機関としての位置づけ。",
      },
    ],

    classification: {
      system: "4クラス制（Class I / II / III / IV）— GHTF 準拠",
      basis: "リスクベース（GHTF 分類原則）",
      classes: [
        {
          name: "Class I",
          nameJa: "クラスI",
          riskLevel: "低リスク",
          description: "最低リスクの機器。ANMAT は届出番号（notification number）を付与。",
          examples: ["包帯", "車椅子", "手動外科器具"],
          approvalPath: "届出（Notification）— HELENA ポータル",
        },
        {
          name: "Class II",
          nameJa: "クラスII",
          riskLevel: "低〜中リスク",
          description: "低〜中リスクの機器。技術審査後に登録証明書を発行。",
          examples: ["血圧計", "シリンジ", "超音波診断装置"],
          approvalPath: "登録（Registration）— HELENA ポータル",
        },
        {
          name: "Class III",
          nameJa: "クラスIII",
          riskLevel: "中〜高リスク",
          description: "中〜高リスクの機器。詳細な技術審査。",
          examples: ["人工呼吸器", "血液透析装置", "整形外科インプラント"],
          approvalPath: "登録（Registration）— HELENA ポータル",
        },
        {
          name: "Class IV",
          nameJa: "クラスIV",
          riskLevel: "高リスク",
          description: "最高リスクの機器。最も厳格な審査。GMP査察を含む場合あり。",
          examples: ["心臓弁", "冠動脈ステント", "埋込み型除細動器"],
          approvalPath: "登録（Registration）— HELENA ポータル",
        },
      ],
      rules: [
        {
          id: "GHTF 分類ルール",
          description:
            "Disposición 727/2013 に基づく分類ルール。GHTF の分類原則に準拠し、侵襲性・持続時間・能動/非能動等の基準で分類。",
          url: "https://www.argentina.gob.ar/anmat",
        },
      ],
      totalProductCodes: "GHTF 準拠分類ルール（Disposición 727/2013）",
    },

    conformityAssessment: {
      overview:
        "ANMAT が直接審査。Class I は届出制、Class II/III/IV は技術文書の審査を経て登録。認定国（米・EU・日・加・豪）の自由販売証明書が必要。",
      routes: [
        {
          name: "Notification (Class I)",
          nameJa: "届出（クラスI）",
          applicableClasses: ["Class I"],
          description:
            "低リスク機器の届出制度。HELENA ポータル経由で申請。ANMAT は届出番号を付与。",
          subtypes: [],
          avgReviewTime: "約15〜30営業日",
          fee: "有料（ANMAT 手数料）",
          url: "https://www.argentina.gob.ar/anmat",
        },
        {
          name: "Registration (Class II / III / IV)",
          nameJa: "登録（クラスII/III/IV）",
          applicableClasses: ["Class II", "Class III", "Class IV"],
          description:
            "技術文書の詳細審査。自由販売証明書、技術資料、GMP証明書等の提出が必要。Class III/IV はより詳細な臨床データ・安全性データが要求される。",
          subtypes: [],
          avgReviewTime: "Class II: 15〜30営業日、Class III/IV: 60〜120営業日（法的上限180暦日、実績12〜18ヶ月の場合あり）",
          fee: "有料（ANMAT 手数料、クラスにより異なる）",
          url: "https://www.argentina.gob.ar/anmat",
        },
      ],
    },

    electronicSubmission: {
      system: "HELENA ポータル + TAD（Trámites a Distancia）",
      url: "https://www.argentina.gob.ar/anmat",
      description:
        "HELENA はオンライン申請・登録管理プラットフォーム。全クラスの医療機器の登録・再認証・変更が可能。低リスク機器の輸入届出は TAD（Remote Procedures Platform）経由。文書は PDF 形式で法定代理人・技術責任者のデジタル署名が必要。",
      mandatory: true,
    },

    udi: {
      required: false,
      system: "未導入（検討中）",
      description:
        "アルゼンチンでは現時点で UDI は義務化されていない。IMDRF の UDI ガイダンスへの対応は今後の課題。",
      url: null,
      timeline: "未定",
    },

    postMarket: {
      adverseEventReporting: {
        system: "Tecnovigilancia — Disposición 8194/2023",
        mandatory: true,
        url: "https://www.argentina.gob.ar/anmat",
        description:
          "医療機器の有害事象・品質不良の報告制度。登録保有者は市販後監視システムの構築・運用が義務。Argos プラットフォームを通じた報告。医療専門家・患者も ANMAT ウェブサイトから報告可能。",
      },
      recalls: {
        authority: "ANMAT",
        description:
          "製造業者/輸入業者主導のリコール（Field Safety Corrective Action）。ANMAT は安全性アラートを発行し、回収を監督。ANMAT ウェブサイトでリコール情報を公開。",
        url: "https://www.argentina.gob.ar/anmat",
      },
      surveillance:
        "Tecnovigilancia プログラム（Disposición 8194/2023）による市販後安全性監視。HELENA/Argos プラットフォームで有害事象を管理。",
    },

    certificateOfFreeSale: {
      available: true,
      issuingAuthority: "ANMAT",
      name: "Certificado de Libre Venta / Certificate of Free Sale",
      description:
        "ANMAT が登録済み医療機器について発行する自由販売証明書。なお、登録申請時には認定国（米国・EU・日本・カナダ・オーストラリア）からの自由販売証明書の提出が必要。",
      processingTime: "約2〜4週間",
      url: "https://www.argentina.gob.ar/anmat",
    },

    reimbursement: {
      system: "PMO（Programa Médico Obligatorio）+ 公的・民間保険",
      authority: "Superintendencia de Servicios de Salud",
      description:
        "PMO（義務的医療プログラム）がすべての保険制度（Obras Sociales、民間保険）がカバーすべき最低限の給付を規定。高額医療機器は個別審査。公的病院は保健省予算で調達。",
      codingSystems: [
        "PMO（義務的医療プログラム）",
        "Nomenclador Nacional de Prácticas Médicas",
      ],
      url: "https://www.argentina.gob.ar/sssalud",
    },

    marketingRules: {
      authority: "ANMAT",
      description:
        "医療機器の広告は ANMAT の規制に基づく。Disposición 2318/2002 Annex III.B のラベリング要件に準拠。虚偽・誤解を招く広告は禁止。",
      keyRules: [
        "ANMAT 登録されていない機器の広告禁止",
        "承認された適応のみ広告可",
        "ラベリングは Disposición 2318/2002 Annex III.B に準拠",
        "スペイン語での表示義務",
      ],
    },

    mdsap: {
      status: "アフィリエイトメンバー（Affiliate Member）",
      description:
        "アルゼンチン（ANMAT）は MDSAP のアフィリエイトメンバー。MDSAP 監査報告書を参照・考慮するが、MDSAP をGMP査察の完全な代替としては受入れていない。",
    },

    internationalStandards: {
      iso13485: {
        accepted: true,
        notes:
          "GMP 要件の一部として ISO 13485 認証が考慮される。ANMAT のGMP査察基準に整合。",
      },
      iso14971: {
        accepted: true,
        notes: "リスクマネジメントの参照規格として認知。",
      },
      iec62304: {
        accepted: true,
        notes: "SaMD の規制（Disposición 64/2025）で参照。",
      },
      iec60601: {
        accepted: true,
        notes: "医用電気機器の安全・性能要求として参照。IRAM 規格として採用。",
      },
      others: [
        { standard: "ISO 10993 シリーズ", notes: "生体適合性評価の参照規格" },
        { standard: "IRAM 規格群", notes: "アルゼンチン国家規格（一部は ISO/IEC の翻訳採用）" },
      ],
    },

    recentDevelopments: [
      {
        date: "2025",
        title: "行政手続き大幅簡素化",
        description:
          "ANMAT が300以上の行政手続きを廃止・統合。Class I/II 機器の輸入手続き簡素化（ANMAT の事前介入不要化、TAD経由の48時間以内届出に変更）。輸入品の有効期限要件を12ヶ月から6ヶ月に緩和。",
      },
      {
        date: "2025",
        title: "Disposición 8799/2025: 低リスク機器の施設認可簡素化",
        description:
          "Class I/II 医療機器および IVD Class A/B の製造・輸入施設の認可手続きを簡素化する新規則を公布。",
      },
      {
        date: "2025",
        title: "Disposición 64/2025: SaMD 規制の整備",
        description:
          "SaMD を医療機器定義に明確に含める規則を発行。デジタルヘルス製品の規制枠組みを整備。",
      },
      {
        date: "2023",
        title: "Tecnovigilancia プログラム更新（Disposición 8194/2023）",
        description:
          "市販後安全性監視プログラムを更新。旧 Provision 8054/2010 を置換。有害事象報告体制を近代化。",
      },
    ],

    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- TUR (トルコ) ---
  // =========================================================================
  {
    code: "TUR",
    country: "トルコ",
    countryEn: "Republic of Türkiye",
    region: "Europe",
    flag: "🇹🇷",

    legalSystemOverview: {
      type: "単一国家（シビルロー体系）— EU MDR 整合",
      description:
        "トルコの医療機器規制は TITCK（Türkiye İlaç ve Tıbbi Cihaz Kurumu / Turkish Medicines and Medical Devices Agency）が管轄する。2021年に EU Regulation 2017/745（MDR）および EU Regulation 2017/746（IVDR）をほぼ逐語的にトルコ法に移植（transposition）。CE マーキング・Notified Body 制度・UDI・市販後監視等、EU の規制枠組みと高度に整合。「動的整合（Dynamic Alignment）」政策により、EU の規制変更に迅速に追随。",
      keyCharacteristics: [
        "EU MDR 2017/745 のほぼ逐語的移植（2021年発効）",
        "CE マーキング必須（EU NB証明書を受入れ）",
        "ÜTS（Product Tracking System）への登録義務",
        "TITCK による Notified Body の指定権限",
        "「動的整合」政策による EU 規制変更への迅速追随",
      ],
    },

    authorities: [
      {
        name: "TİTCK",
        fullName: "Türkiye İlaç ve Tıbbi Cihaz Kurumu",
        localName: "Türkiye İlaç ve Tıbbi Cihaz Kurumu",
        role: "医療機器の規制・市場監視・Notified Body 指定・ÜTS 管理",
        url: "https://www.titck.gov.tr/",
        isPrimary: true,
      },
      {
        name: "SGK",
        fullName: "Sosyal Güvenlik Kurumu (Social Security Institution)",
        localName: "Sosyal Güvenlik Kurumu",
        role: "医療機器の保険償還・価格管理",
        url: "https://www.sgk.gov.tr/",
        isPrimary: false,
      },
      {
        name: "Ministry of Health",
        fullName: "T.C. Sağlık Bakanlığı (Ministry of Health)",
        localName: "T.C. Sağlık Bakanlığı",
        role: "医療機器規制の政策立案・TITCK の上位機関",
        url: "https://www.saglik.gov.tr/",
        isPrimary: false,
      },
    ],

    notifiedBodies: {
      system: "Notified Body 制度（EU MDR 整合）",
      description:
        "トルコは EU MDR/IVDR に整合した Notified Body 制度を運用。TITCK が国内の Notified Body を指定する権限を有する。現在7つの Notified Body が認定済み。さらに、EU の Notified Body が MDR/IVDR に基づき発行した CE 証明書もトルコで受入れられる。",
      bodies: [
        { name: "トルコ国内認定 NB（7機関）", id: "TITCK指定", scope: "EU MDR/IVDR 整合" },
      ],
    },

    deviceDefinition: {
      legalDefinition:
        "トルコ医療機器規制（EU MDR 2017/745 の移植）Article 2 に基づく定義。EU MDR と同一。疾病の診断・予防・モニタリング・予測・治療等を目的とする器具・装置・ソフトウェア・材料等。",
      scope:
        "IVD（IVDR 2017/746 の移植で別途規制）、付属品、SaMD を含む。EU MDR Article 1(2) の範囲に整合。",
      notes:
        "EU MDR と同様、特定の美容製品、清浄・消毒製品、遺伝子治療製品等の取扱いに関する規定あり。",
    },

    primaryLaw: {
      title: "Tıbbi Cihaz Yönetmeliği (Medical Device Regulation)",
      originalTitle: "Tıbbi Cihaz Yönetmeliği",
      enacted: "2021-06-02",
      lastAmended: "2024-08-17（Official Gazette No. 32635）",
      url: "https://www.titck.gov.tr/",
      description:
        "EU Regulation 2017/745（MDR）のほぼ逐語的トルコ法移植。2021年6月2日発効。2024年8月にEU Regulation 2024/1860 の改正に追随して更新。医療機器のライフサイクル全体（設計・製造・適合性評価・市場投入・市販後監視）を規制。",
    },

    implementingRegulations: [
      {
        title: "In Vitro Tanı Amaçlı Tıbbi Cihaz Yönetmeliği (IVDR)",
        date: "2022-05-26",
        url: "https://www.titck.gov.tr/",
        description:
          "EU Regulation 2017/746（IVDR）のトルコ法移植。IVD医療機器の規制。",
        category: "IVD",
      },
      {
        title: "ÜTS（Ürün Takip Sistemi）関連規則",
        date: null,
        url: "https://uts.saglik.gov.tr/",
        description:
          "Product Tracking System への医療機器登録義務。EU の EUDAMED に相当するトルコの電子登録システム。",
        category: "登録",
      },
      {
        title: "2024年8月改正（Official Gazette No. 32635）",
        date: "2024-08-17",
        url: "https://www.titck.gov.tr/",
        description:
          "EU Regulation 2024/1860 に追随した改正。EUDAMED モジュールの段階的義務化（2025年Q4〜）、供給途絶通知制度の導入、経過措置の延長等。",
        category: "改正",
      },
    ],

    relatedLaws: [
      {
        title: "Kişisel Verilerin Korunması Kanunu (KVKK) — Law No. 6698",
        category: "個人情報保護",
        enacted: "2016",
        url: null,
        relevance:
          "トルコの個人データ保護法。コネクテッドデバイス・SaMD が取り扱う個人健康情報の保護。EU GDPR に類似。",
      },
      {
        title: "Sosyal Sigortalar ve Genel Sağlık Sigortası Kanunu — Law No. 5510",
        category: "社会保険",
        enacted: "2006",
        url: null,
        relevance:
          "社会保険・一般健康保険法。SGK による医療機器の償還制度の法的根拠。",
      },
    ],

    classification: {
      system: "4クラス制（Class I / IIa / IIb / III）— EU MDR 整合",
      basis: "リスクベース（EU MDR Annex VIII 分類ルール）",
      classes: [
        {
          name: "Class I",
          nameJa: "クラスI",
          riskLevel: "低リスク",
          description: "最低リスク。自己適合性宣言（NB不要、ただし滅菌/計測/再使用外科器具はNB必要）。",
          examples: ["非滅菌包帯", "車椅子", "聴診器"],
          approvalPath: "自己適合性宣言 + CE マーキング + ÜTS登録",
        },
        {
          name: "Class IIa",
          nameJa: "クラスIIa",
          riskLevel: "低〜中リスク",
          description: "低〜中リスク。Notified Body の適合性評価が必要。",
          examples: ["血圧計", "補聴器", "超音波プローブ"],
          approvalPath: "NB適合性評価 + CE マーキング + ÜTS登録",
        },
        {
          name: "Class IIb",
          nameJa: "クラスIIb",
          riskLevel: "中〜高リスク",
          description: "中〜高リスク。Notified Body の詳細な適合性評価が必要。",
          examples: ["人工呼吸器", "血液透析装置", "骨接合プレート"],
          approvalPath: "NB適合性評価 + CE マーキング + ÜTS登録",
        },
        {
          name: "Class III",
          nameJa: "クラスIII",
          riskLevel: "高リスク",
          description: "最高リスク。Notified Body の最も厳格な適合性評価。臨床評価が必須。",
          examples: ["心臓弁", "冠動脈ステント", "埋込み型除細動器", "乳房インプラント"],
          approvalPath: "NB適合性評価（技術文書 + 設計審査）+ CE マーキング + ÜTS登録",
        },
      ],
      rules: [
        {
          id: "EU MDR Annex VIII 分類ルール（22ルール）",
          description:
            "EU MDR Annex VIII に準拠した22の分類ルール。侵襲性・持続時間・能動/非能動・SaMD等の基準で分類。EU MDR と同一。",
          url: "https://www.titck.gov.tr/",
        },
      ],
      totalProductCodes: "EU MDR Annex VIII 準拠の22分類ルール（EU GMDN/EMDN に整合）",
    },

    conformityAssessment: {
      overview:
        "EU MDR に整合した適合性評価制度。Notified Body による適合性評価後、CE マーキングを取得し、ÜTS に登録。EU NB 証明書もトルコで受入れ可能。",
      routes: [
        {
          name: "Self-Declaration (Class I)",
          nameJa: "自己適合性宣言（クラスI）",
          applicableClasses: ["Class I（非滅菌・非計測・非再使用外科器具）"],
          description:
            "低リスク機器は製造業者の自己適合性宣言で CE マーキング取得。NB は不要（ただし滅菌/計測/再使用外科器具は NB 必要）。",
          subtypes: [],
          avgReviewTime: "自己宣言のため審査不要。ÜTS登録は約1週間。",
          fee: "ÜTS登録手数料",
          url: "https://www.titck.gov.tr/",
        },
        {
          name: "Notified Body Conformity Assessment (Class IIa / IIb / III)",
          nameJa: "Notified Body 適合性評価（クラスIIa/IIb/III）",
          applicableClasses: ["Class IIa", "Class IIb", "Class III"],
          description:
            "EU MDR に基づく適合性評価手続き。Notified Body が技術文書審査・QMS監査・必要に応じて設計審査を実施。EU NB 証明書もトルコ市場で有効。",
          subtypes: [
            {
              name: "EU NB Certificate",
              description:
                "EU の Notified Body が MDR/IVDR に基づき発行した CE 証明書はトルコでも受入れ可能。追加のトルコ固有審査は不要。",
            },
            {
              name: "Turkish NB Certificate",
              description:
                "TITCK が指定したトルコ国内の Notified Body による適合性評価。",
            },
          ],
          avgReviewTime: "NB審査: 6〜18ヶ月（機器クラスによる）。ÜTS登録: 約1週間。",
          fee: "NB手数料（NB毎に異なる）+ ÜTS登録手数料",
          url: "https://www.titck.gov.tr/",
        },
      ],
    },

    electronicSubmission: {
      system: "ÜTS (Ürün Takip Sistemi / Product Tracking System)",
      url: "https://uts.saglik.gov.tr/",
      description:
        "ÜTS はトルコの医療機器電子登録・追跡システム。EU の EUDAMED に相当。全ての医療機器は市場投入前に ÜTS への登録が義務。製造業者情報・機器情報・CE証明書・適合性宣言等を電子的に登録。MERSIS（Central Registration System）への事前登録も必要。",
      mandatory: true,
    },

    udi: {
      required: true,
      system: "UDI System（EU MDR 整合）— ÜTS 連携",
      description:
        "EU MDR に整合した UDI 制度。製造業者は市場投入前に UDI コードを機器・包装に付与。ÜTS データベースに UDI 情報を登録。EUDAMED モジュールの段階的導入（2025年Q4〜）に連動。",
      url: "https://uts.saglik.gov.tr/",
      timeline: "2021年発効。EUDAMED 連携モジュールは2025年Q4〜段階的義務化。",
    },

    postMarket: {
      adverseEventReporting: {
        system: "Materiovigilance — EU MDR 整合",
        mandatory: true,
        url: "https://www.titck.gov.tr/",
        description:
          "EU MDR の Vigilance 制度に整合。製造業者は重篤なインシデントを ÜTS 経由で TITCK に報告義務。報告期限: 重大な公衆衛生リスク（即時）、死亡・重篤な健康悪化（10日以内）、その他の重篤インシデント（15日以内）。年次安全性報告書の提出義務。",
      },
      recalls: {
        authority: "TİTCK",
        description:
          "EU MDR の FSCA（Field Safety Corrective Action）制度に整合。製造業者は安全性是正措置を TITCK に通知し、Field Safety Notice を発行。TITCK は市場監視・取締りを実施。",
        url: "https://www.titck.gov.tr/",
      },
      surveillance:
        "EU MDR に整合した Post-Market Surveillance（PMS）制度。製造業者は PMS 計画の策定・実施が義務。Class IIa/IIb/III は PSUR（Periodic Safety Update Report）の作成・提出が必要。TITCK による市場監視査察。",
    },

    certificateOfFreeSale: {
      available: true,
      issuingAuthority: "TİTCK",
      name: "Certificate of Free Sale (CFS)",
      description:
        "TITCK が ÜTS 登録済み医療機器について発行する自由販売証明書。輸出先国の当局が要求する場合に使用。",
      processingTime: "約1〜2週間",
      url: "https://www.titck.gov.tr/",
    },

    reimbursement: {
      system: "SGK（社会保障機構）— 一般健康保険",
      authority: "SGK (Sosyal Güvenlik Kurumu / Social Security Institution)",
      description:
        "SGK がトルコの一般健康保険制度の下で医療機器の償還を管理。SUT（Sağlık Uygulama Tebliği / Health Implementation Communiqué）に基づく償還リスト・参照価格制度。テンダー（入札）制度も重要。",
      codingSystems: [
        "SUT (Sağlık Uygulama Tebliği)",
        "GMDN / EMDN（機器命名）",
        "ÜTS Product Code",
      ],
      url: "https://www.sgk.gov.tr/",
    },

    marketingRules: {
      authority: "TİTCK",
      description:
        "医療機器の広告は TITCK の規制に基づく。EU MDR に整合したラベリング要件。一般消費者向け広告は制限的。医療専門家向けの情報提供は別途規制。",
      keyRules: [
        "CE マーキング・ÜTS 登録されていない機器の販売・広告禁止",
        "EU MDR に整合したラベリング・IFU 要件",
        "一般消費者向け医療機器広告の制限",
        "トルコ語でのラベリング・IFU 義務",
      ],
    },

    mdsap: {
      status: "非参加",
      description:
        "トルコは MDSAP の参加国ではない。EU MDR に整合した独自の QMS/GMP 査察制度を運用。ISO 13485 認証が CE マーキングの前提。",
    },

    internationalStandards: {
      iso13485: {
        accepted: true,
        notes:
          "CE マーキングの前提として ISO 13485:2016 認証が必須。EU MDR の QMS 要件に整合。",
      },
      iso14971: {
        accepted: true,
        notes: "EU MDR の一般安全性能要件（GSPR）に整合。リスクマネジメントの必須規格。",
      },
      iec62304: {
        accepted: true,
        notes: "SaMD を含むソフトウェア搭載機器に必須。EU MDR 整合規格。",
      },
      iec60601: {
        accepted: true,
        notes: "医用電気機器の安全・性能要求。EU MDR 整合規格。",
      },
      others: [
        { standard: "ISO 10993 シリーズ", notes: "生体適合性評価。EU MDR 整合規格。" },
        { standard: "EU MDR Harmonised Standards", notes: "EU 官報公示の整合規格がトルコでも参照される" },
      ],
    },

    recentDevelopments: [
      {
        date: "2024-08",
        title: "EU Regulation 2024/1860 への追随改正",
        description:
          "EU が2024年3月に採択した MDR/IVDR 改正（Regulation 2024/1860）に5ヶ月で追随。Official Gazette No. 32635（2024年8月17日）で公布。EUDAMED モジュールの段階的義務化、供給途絶通知制度の導入。",
      },
      {
        date: "2025-Q4",
        title: "EUDAMED モジュール段階的導入開始予定",
        description:
          "EU に連動してトルコでも EUDAMED モジュールの段階的義務化が2025年Q4から開始予定。ÜTS との連携方法の詳細は TITCK ガイドラインで公表予定。",
      },
      {
        date: "2025-12",
        title: "供給途絶通知制度の経過措置期限",
        description:
          "医療機器の供給途絶・中止の事前通知制度について、2025年12月31日までの経過措置期間を設定。企業のサプライチェーン監視システム構築を促進。",
      },
      {
        date: "2025-H2",
        title: "供給途絶ガイドライン公表予定",
        description:
          "TITCK が2025年下半期に包括的ガイドラインを公表予定。「重大な被害」の定量的閾値、不可抗力の立証基準、Excel添付の電子データ形式等を明確化。",
      },
    ],

    lastUpdated: "2026-04-02",
    verified: null,
  },

  /* ================================================================
   *  ロシア (RUS)
   * ================================================================ */
  {
    code: "RUS",
    country: "ロシア",
    countryEn: "Russian Federation",
    region: "Europe",
    flag: "🇷🇺",
    legalSystemOverview: {
      type: "連邦制・大統領制（Presidential federal republic）",
      description: "ロシアの医療機器規制は連邦保健省（Ministry of Health）とRoszdravnadzor（連邦保健監督局）が中心となり運営される。2016年以降、ユーラシア経済連合（EAEU）の統一規制枠組みへの移行が進行中であり、2025年12月31日までにEAEU登録への完全移行が予定されている。GOST ISO 13485に基づくQMS適合が高リスク機器で義務化されており、2025年からはData Matrixコード（Honest Sign）による単品レベルのトレーサビリティが全医療機器に拡大された。",
      keyCharacteristics: [
        "Roszdravnadzor が市販前登録・市販後監視を統括",
        "EAEU統一登録制度への段階的移行（2025年末期限）",
        "4クラスリスク分類（Class I / IIa / IIb / III）",
        "GOST ISO 13485 に基づくQMS要求",
        "Honest Sign（Data Matrixコード）による単品トレーサビリティ",
        "ロシア国内臨床試験が原則必要（Class IIa以上）",
      ],
    },
    authorities: [
      { name: "Roszdravnadzor", fullName: "Federal Service for Surveillance in Healthcare", localName: "Росздравнадзор", role: "医療機器の登録審査、市販後監視、安全性情報収集、リコール管理、GMP査察を統括", url: "https://roszdravnadzor.gov.ru/", isPrimary: true },
      { name: "FGBU", fullName: "Federal State Budgetary Institution (VNIIMT / Roszdravnadzor Expert Organizations)", localName: "ФГБУ", role: "技術審査・臨床試験評価等のエキスパート機関。Roszdravnadzorの委託により技術文書の専門評価を実施", url: "https://roszdravnadzor.gov.ru/", isPrimary: false },
      { name: "Ministry of Health", fullName: "Ministry of Health of the Russian Federation", localName: "Министерство здравоохранения РФ", role: "医療機器規制に関する法令・省令の策定。臨床試験許可の発行", url: "https://minzdrav.gov.ru/", isPrimary: false },
    ],
    notifiedBodies: { system: "該当なし（Roszdravnadzor直接審査 + EAEU検査機関）", description: "欧州型のNotified Body制度は存在しない。Roszdravnadzorが直接登録審査を実施し、技術試験は認定試験機関が行う。EAEU制度ではConformity Assessment Body（CAB）が技術文書審査を実施するが、最終登録判断はRoszdravnadzorが行う。", bodies: [] },
    deviceDefinition: { legalDefinition: "疾病の予防、診断、治療、リハビリテーションの目的で使用される器具・装置・機器・材料等であって、薬理学的・免疫学的・代謝的手段によらず主たる目的作用を発揮するもの（連邦法No.323-FZ第38条）", scope: "体外診断用医療機器（IVD）、ソフトウェア医療機器（SaMD）、AI搭載医療ソフトウェアを含む。コンビネーション製品は主要な作用機序に基づき分類。", notes: "2025年9月1日から、従来型機器・ソフトウェア・AI搭載ソフトウェアに区分した技術文書要件が導入。サイバーセキュリティ要件がソフトウェア医療機器に義務化。" },
    primaryLaw: { title: "連邦法 No.323-FZ「ロシア連邦における国民の健康保護の基本に関する法律」", originalTitle: "Федеральный закон № 323-ФЗ", enacted: "2011-11-21", lastAmended: "2025", url: "http://www.consultant.ru/document/cons_doc_LAW_121895/", description: "ロシアにおける医療機器規制の根幹法。医療機器の定義、登録義務、市販後監視の基本原則を規定。政府決定（Постановление）および保健省令（Приказ）により詳細を実施。" },
    implementingRegulations: [
      { title: "政府決定 No.1416「医療機器の国家登録手続きに関する規則」", date: "2012-12-27", url: "http://government.ru/docs/all/81568/", description: "医療機器の国家登録手続き、必要書類、審査期間等を規定する主要な実施規則。2025年3月1日から新規則（保健省令 No.181n）に段階的に移行。", category: "登録手続き" },
      { title: "保健省令 No.181n（2025年4月11日）", date: "2025-04-11", url: "https://minzdrav.gov.ru/", description: "2025年9月1日施行。技術文書要件を大幅改訂。従来型機器・ソフトウェア・AI搭載ソフトウェアへの区分別要件、カラーモックアップ義務、リスクマネジメント強化、サイバーセキュリティ義務を導入。", category: "技術文書" },
      { title: "EAEU理事会決定 No.46「医療機器の登録及び専門家審査に関する規則」", date: "2016-02-12", url: "https://docs.eaeunion.org/", description: "EAEU統一医療機器登録制度の基本規則。EAEU登録証は加盟5カ国（ロシア、ベラルーシ、カザフスタン、アルメニア、キルギス）で有効。", category: "EAEU規制" },
      { title: "EAEU理事会決定 No.173「リスクベース分類規則」", date: "2018", url: "https://docs.eaeunion.org/", description: "EAEU統一の医療機器リスク分類規則。Class I / IIa / IIb / III の4クラス分類をIMDRFルールに整合して規定。", category: "分類" },
      { title: "GOST ISO 13485-2017「医療機器 — 品質マネジメントシステム」", date: "2017", url: "https://www.gost.ru/", description: "ISO 13485:2016のロシア国家標準（GOST）採用版。Class IIa（滅菌）/ IIb / III機器の登録前QMS査察で適合が必要。", category: "QMS" },
    ],
    relatedLaws: [
      { title: "連邦法 No.152-FZ「個人データに関する法律」", category: "データ保護", enacted: "2006-07-27", url: "http://www.consultant.ru/document/cons_doc_LAW_61801/", relevance: "医療機器から取得される患者データの処理に適用。データのロシア国内保存義務（データローカリゼーション）がある。" },
      { title: "連邦法 No.488-FZ「工業政策に関する法律」", category: "国産化政策", enacted: "2014-12-31", url: "http://www.consultant.ru/document/cons_doc_LAW_173119/", relevance: "医療機器の国産化推進政策。政府調達における国産品優遇措置（第三国制限を含む）の法的根拠。" },
    ],
    classification: {
      system: "リスクベース4クラス分類（EAEU整合）",
      basis: "EAEU理事会決定No.173に基づくリスクベース分類。IMDRFルールに整合。",
      classes: [
        { name: "Class I", nameJa: "クラス1（低リスク）", riskLevel: "低", description: "人体への潜在的リスクが最小限の医療機器。", examples: ["手術用メス", "聴診器", "ガーゼ", "松葉杖"], approvalPath: "登録（簡易審査）— Roszdravnadzor" },
        { name: "Class IIa", nameJa: "クラス2a（中低リスク）", riskLevel: "中低", description: "中程度のリスクを有する医療機器。", examples: ["超音波診断装置", "歯科用材料", "補聴器", "シリンジポンプ"], approvalPath: "登録（技術審査 + 滅菌品はQMS査察）— Roszdravnadzor" },
        { name: "Class IIb", nameJa: "クラス2b（中高リスク）", riskLevel: "中高", description: "中〜高程度のリスクを有する医療機器。臨床試験が原則必要。QMS査察必須。", examples: ["人工呼吸器", "透析器", "骨接合プレート", "放射線治療装置"], approvalPath: "登録（技術審査 + 臨床試験 + QMS査察）— Roszdravnadzor" },
        { name: "Class III", nameJa: "クラス3（高リスク）", riskLevel: "高", description: "人体に重大なリスクを与える高リスク医療機器。厳格な臨床試験とQMS査察が必須。", examples: ["心臓ペースメーカー", "人工心臓弁", "冠動脈ステント", "人工関節"], approvalPath: "登録（技術審査 + 臨床試験 + QMS査察 + 市販後モニタリング計画）— Roszdravnadzor" },
      ],
      rules: ["EAEU理事会決定No.173の分類ルールに基づく判定", "IVDは別途分類体系あり", "SaMDは機能・リスクに応じてClass I〜IIIに分類", "分類は製造業者が判断し、Roszdravnadzorが登録時に確認"],
      totalProductCodes: null,
    },
    conformityAssessment: {
      overview: "全クラスの医療機器はRoszdravnadzorへの国家登録が必要。Class IIa（滅菌）/ IIb / IIIは登録前のQMS査察（GOST ISO 13485適合）が2024年1月1日から義務化。Class IIa以上は原則としてロシア国内臨床試験が必要（一部免除あり）。外国メーカーはロシア国内のAuthorized Representative（権限受任者）の設置が必須。EAEU登録制度への段階的移行中。",
      routes: [
        { name: "National Registration (国家登録)", nameJa: "ロシア国家登録（RZN証明書）", applicableClasses: ["Class I", "Class IIa", "Class IIb", "Class III"], description: "Roszdravnadzorに申請し、技術審査、臨床試験評価（該当する場合）、QMS査察（該当する場合）を経て登録証（RZN）を取得。登録証の有効期限なし。2025年末まで申請可能。", subtypes: ["新規登録", "変更登録", "更新"], avgReviewTime: "6〜12ヶ月（Class III）/ 4〜6ヶ月（Class I/IIa）", fee: "申請区分により異なる（国家手数料規定に基づく）", url: "https://roszdravnadzor.gov.ru/" },
        { name: "EAEU Registration (EAEU統一登録)", nameJa: "EAEU統一登録証", applicableClasses: ["Class I", "Class IIa", "Class IIb", "Class III"], description: "EAEU加盟国共通の登録制度。EAEU登録証は加盟5カ国で有効。2026年1月1日以降は原則としてEAEU登録のみが有効。", subtypes: ["新規登録", "変更登録"], avgReviewTime: "12〜18ヶ月", fee: "加盟国ごとの手数料規定による", url: "https://docs.eaeunion.org/" },
      ],
    },
    electronicSubmission: { system: "Gosuslugi / Roszdravnadzor電子申請ポータル", url: "https://roszdravnadzor.gov.ru/", description: "2025年9月1日以降、全申請はGosuslugiポータルまたはRoszdravnadzorウェブサイトの電子アカウントを通じた電子提出が必須。書類は電子文書または署名付きスキャンコピーで提出。", mandatory: true },
    udi: { required: true, system: "Honest Sign（Честный знак）/ Data Matrixコード", description: "2025年9月1日から、全医療機器に対しData Matrixコードによる単品レベルのトレーサビリティが義務化。ロシア国営のHonest Signシステムを通じて製造・流通・販売の全過程を追跡。", url: "https://chestnyznak.ru/", timeline: "2025年9月1日〜: 全医療機器で単品トレーサビリティ（Data Matrix）義務化" },
    postMarket: {
      adverseEventReporting: { system: "有害事象報告制度（Roszdravnadzor）", mandatory: true, url: "https://roszdravnadzor.gov.ru/", description: "製造業者・流通業者・医療機関は、医療機器に関連する有害事象を発見から15日以内にRoszdravnadzorに報告する義務がある。Class III / Class IIb植込み型機器は年次安全性報告が必要（2021年1月以降の登録分）。" },
      recalls: { authority: "Roszdravnadzor", description: "Roszdravnadzorの命令または製造業者の自主判断によるリコール。安全性情報に基づく登録の一時停止・取消権限あり。2025年11月からリスクベース型監督モデルに移行。", url: "https://roszdravnadzor.gov.ru/" },
      surveillance: "Roszdravnadzorによる定期的GMP査察、市販後臨床モニタリング（Class III / Class IIb植込み型）、安全性情報の収集・分析。2025年11月からリスクベース型監督に移行。",
    },
    certificateOfFreeSale: { available: true, issuingAuthority: "Roszdravnadzor", name: "自由販売証明書（Certificate of Free Sale）", description: "ロシアで登録済みの医療機器について、Roszdravnadzorが自由販売証明書を発行。ロシアへの登録申請時に外国CFS提出は任意。", processingTime: "2〜4週間", url: "https://roszdravnadzor.gov.ru/" },
    reimbursement: { system: "強制医療保険制度（OMS: Обязательное медицинское страхование）", authority: "連邦強制医療保険基金（FFOMS）/ 保健省", description: "医療機器の償還は主にOMS（強制医療保険）のDRG類似包括払い（KSG）および高度医療（VMP）予算を通じて行われる。医療機器の個別償還制度は限定的で、主に高度医療技術（ВМП）枠で実施。", codingSystems: ["KSG（臨床統計群）コード", "VMP（高度医療技術）コード"], url: "https://www.ffoms.gov.ru/" },
    marketingRules: { authority: "Roszdravnadzor / FAS（連邦独占禁止局）", description: "医療機器の広告はロシア連邦広告法（No.38-FZ）により規制。虚偽・誤解を招く広告は禁止。FAS（連邦独占禁止局）が広告規制の主要な執行機関。", keyRules: ["虚偽・誇大広告の禁止", "未登録医療機器の広告禁止", "登録番号の広告への記載義務", "消費者向け広告に関する制限", "FASによる行政処分権限"] },
    mdsap: { status: "非参加", description: "ロシアはMDSAPに参加していない。ロシア独自のGOST ISO 13485査察が必要。" },
    internationalStandards: {
      iso13485: { accepted: true, notes: "GOST ISO 13485-2017としてロシア国家標準化。Class IIa（滅菌）/ IIb / III機器の登録前QMS査察で適合が必須。" },
      iso14971: { accepted: true, notes: "GOST R ISO 14971としてロシア国家標準化。リスクマネジメント文書の技術審査時の提出が必要。" },
      iec62304: { accepted: true, notes: "ソフトウェア医療機器の登録でGOST R IEC 62304適合が要求される。2025年9月からSaMD・AI-SaMDで強化。" },
      iec60601: { accepted: true, notes: "GOST R IEC 60601シリーズとしてロシア国家標準化。医用電気機器の安全性試験で適合が必要。" },
      others: [
        { name: "GOST R ISO 15223-1-2023", notes: "医療機器ラベリング記号の標準。2025年からカラーモックアップ義務化。" },
        { name: "GOST R ISO 10993シリーズ", notes: "生物学的安全性評価。EAEU決定No.38でも要求。" },
      ],
    },
    recentDevelopments: [
      { date: "2025-09", title: "保健省令No.181n施行（技術文書要件の大幅改訂）", description: "機器種別ごとの区分別要件、カラーモックアップ義務、サイバーセキュリティ要件を導入。" },
      { date: "2025-09", title: "Honest Sign全医療機器義務化", description: "全医療機器に対し単品レベルのData Matrixコードによるトレーサビリティが義務化。" },
      { date: "2025-11", title: "リスクベース型監督モデル導入", description: "Roszdravnadzorが予防的訪問制度と遠隔監督を導入。" },
      { date: "2024-01", title: "QMS査察の義務化拡大", description: "Class IIa（滅菌）/ IIb / III機器の登録前QMS査察が義務化。" },
    ],
    lastUpdated: "2026-04-02",
    verified: null,
  },

  /* ================================================================
   *  ポーランド (POL)
   * ================================================================ */
  {
    code: "POL",
    country: "ポーランド",
    countryEn: "Republic of Poland",
    region: "Europe",
    flag: "🇵🇱",
    legalSystemOverview: {
      type: "EU加盟国・議会共和制",
      description: "ポーランドはEU加盟国としてEU MDR（Regulation 2017/745）およびIVDR（Regulation 2017/746）が直接適用される。国内実施法として2022年4月7日医療機器法を制定し、広告規制等のEU規則を補完する事項を規定。URPL が管轄当局として機能する。",
      keyCharacteristics: ["EU MDR / IVDR が直接適用", "URPL が管轄当局（Competent Authority）", "2022年医療機器法で広告規制等を独自に強化", "EU MDRに基づく4クラス分類（I / IIa / IIb / III）", "CEマーキングが市場投入の前提条件", "EUDAMED登録が順次義務化"],
    },
    authorities: [
      { name: "URPL", fullName: "Office for Registration of Medicinal Products, Medical Devices and Biocidal Products", localName: "Urząd Rejestracji Produktów Leczniczych, Wyrobów Medycznych i Produktów Biobójczych", role: "医療機器の市場監視、臨床試験監督、ビジランス報告管理、EUDAMED連携、広告規制の執行を統括", url: "https://www.urpl.gov.pl/", isPrimary: true },
      { name: "NFZ", fullName: "National Health Fund", localName: "Narodowy Fundusz Zdrowia", role: "医療機器を含む医療技術の保険償還管理", url: "https://www.nfz.gov.pl/", isPrimary: false },
      { name: "AOTMiT", fullName: "Agency for Health Technology Assessment and Tariff System", localName: "Agencja Oceny Technologii Medycznych i Taryfikacji", role: "医療技術評価（HTA）の実施。NFZへの償還推奨の提供", url: "https://www.aotmit.gov.pl/", isPrimary: false },
    ],
    notifiedBodies: { system: "EU Notified Bodies（EU MDR/IVDR指定認証機関）", description: "EU MDRの枠組み内でNotified Body制度が適用される。Class IIa以上の機器はNotified Bodyによる適合性評価が必要。ポーランド国内NBは限定的だが、他EU加盟国のNB認証も有効。", bodies: [] },
    deviceDefinition: { legalDefinition: "EU MDR Article 2(1)に定義される医療機器と同一。", scope: "IVDはIVDR適用。SaMD、付属品、美容目的の特定製品（Annex XVI）を含む。", notes: "ポーランド国内法で追加の定義は行わず、EU MDR/IVDRの定義をそのまま適用。" },
    primaryLaw: { title: "2022年4月7日医療機器法（Ustawa o wyrobach medycznych）", originalTitle: "Ustawa z dnia 7 kwietnia 2022 r. o wyrobach medycznych", enacted: "2022-04-07", lastAmended: "2023-07-01", url: "https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20220000974", description: "EU MDR/IVDRを補完するポーランド国内実施法。広告規制の詳細規定、輸入業者・流通業者の追加義務、URPLの権限・罰則規定を規定。2023年7月1日に広告規制関連条項が完全施行。" },
    implementingRegulations: [
      { title: "EU MDR — Regulation (EU) 2017/745", date: "2017-05-05", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32017R0745", description: "EU全域で直接適用される医療機器規則。2021年5月26日から完全適用。", category: "EU規則" },
      { title: "EU IVDR — Regulation (EU) 2017/746", date: "2017-05-05", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32017R0746", description: "体外診断用医療機器に関するEU規則。2022年5月26日から完全適用。", category: "EU規則（IVD）" },
      { title: "保健大臣令（2023年4月21日）— 医療機器広告に関する規則", date: "2023-04-21", url: "https://www.urpl.gov.pl/", description: "2022年医療機器法第55条・56条に基づく広告規制の実施細則。2023年7月1日施行。", category: "広告規制" },
    ],
    relatedLaws: [
      { title: "GDPR — Regulation (EU) 2016/679", category: "データ保護", enacted: "2016-04-27", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679", relevance: "医療機器から取得される健康データの処理に適用。ポーランドではUODOが所管。" },
      { title: "医薬品法（Prawo farmaceutyczne）", category: "医薬品規制", enacted: "2001-09-06", url: "https://isap.sejm.gov.pl/", relevance: "コンビネーション製品の規制に関連。" },
    ],
    classification: {
      system: "EU MDRリスクベース4クラス分類",
      basis: "EU MDR Annex VIIIの分類ルールに基づく。",
      classes: [
        { name: "Class I", nameJa: "クラスI（低リスク）", riskLevel: "低", description: "低リスクの医療機器。自己宣言による適合性評価。", examples: ["包帯", "車椅子", "手術用メス（非滅菌）", "医療用ベッド"], approvalPath: "自己宣言 → CEマーキング → EUDAMED登録" },
        { name: "Class IIa", nameJa: "クラスIIa（中低リスク）", riskLevel: "中低", description: "中程度の低リスク。Notified Bodyの関与が必要。", examples: ["超音波診断装置", "歯科用充填材", "補聴器", "吸引器"], approvalPath: "Notified Body審査 → CEマーキング → EUDAMED登録" },
        { name: "Class IIb", nameJa: "クラスIIb（中高リスク）", riskLevel: "中高", description: "中〜高程度のリスク。", examples: ["人工呼吸器", "血液透析器", "骨接合プレート", "放射線治療装置"], approvalPath: "Notified Body審査（技術文書+QMS） → CEマーキング → EUDAMED登録" },
        { name: "Class III", nameJa: "クラスIII（高リスク）", riskLevel: "高", description: "最高リスクの医療機器。臨床データに基づく最も厳格な適合性評価。", examples: ["心臓ペースメーカー", "人工心臓弁", "冠動脈ステント", "乳房インプラント"], approvalPath: "Notified Body審査（技術文書+QMS+臨床評価） → CEマーキング → EUDAMED登録" },
      ],
      rules: ["EU MDR Annex VIIIの22分類ルールに基づく", "製造業者が分類を判断し、URPLが監視", "分類の相違がある場合はURPLが最終判断", "SaMD: Rule 11に基づき分類"],
      totalProductCodes: null,
    },
    conformityAssessment: {
      overview: "EU MDRに基づく適合性評価がそのまま適用。Class Iは自己宣言、Class IIa以上はNotified Bodyの関与が必要。CEマーキング取得によりEU全域で流通可能。ポーランド独自の追加承認手続きはないが、EUDAMED登録とURPLへの通知義務がある。",
      routes: [
        { name: "Self-Declaration (Class I)", nameJa: "自己適合宣言（Class I）", applicableClasses: ["Class I"], description: "製造業者が技術文書を整備し、適合宣言書を作成してCEマーキングを貼付。", subtypes: [], avgReviewTime: "N/A（自己宣言）", fee: "N/A", url: "https://www.urpl.gov.pl/" },
        { name: "Notified Body Assessment (Class IIa/IIb/III)", nameJa: "Notified Body適合性評価", applicableClasses: ["Class IIa", "Class IIb", "Class III"], description: "EU MDR Annex IX〜XIに基づく適合性評価手続き。", subtypes: ["Annex IX（QMS+技術文書審査）", "Annex X + Annex XI"], avgReviewTime: "6〜18ヶ月", fee: "Notified Bodyごとに設定", url: "https://www.urpl.gov.pl/" },
      ],
    },
    electronicSubmission: { system: "EUDAMED + URPLポータル", url: "https://ec.europa.eu/tools/eudamed/", description: "EUDAMED が順次稼働中。ポーランド国内の臨床試験申請等はURPLポータルを通じて提出。", mandatory: true },
    udi: { required: true, system: "EU UDI制度（EU MDR Article 27）", description: "EU MDRに基づくUDI制度。Basic UDI-DIとUDI-DIのEUDAMEDデータベース登録およびラベルへの表示が義務。", url: "https://ec.europa.eu/tools/eudamed/", timeline: "Class III・植込み型: 義務化済み / Class IIa・IIb: 段階的義務化中 / Class I: EUDAMED全面稼働後" },
    postMarket: {
      adverseEventReporting: { system: "EU MDR Article 87 — ビジランスシステム", mandatory: true, url: "https://www.urpl.gov.pl/", description: "製造業者は重大インシデントを発見から15日以内にURPLに報告。ポーランド2022年法で医療従事者・使用者にも報告義務を規定。" },
      recalls: { authority: "URPL / 製造業者", description: "FSCA はEU MDRに基づき実施。RAPEX/Safety Gate を通じたEU全域通報制度あり。", url: "https://www.urpl.gov.pl/" },
      surveillance: "URPLによる市場監視。EU MDR Chapter VIIに基づくPMS・PMCFの監督。",
    },
    certificateOfFreeSale: { available: true, issuingAuthority: "URPL", name: "Certificate of Free Sale", description: "CEマーキング取得済み医療機器について、URPLが自由販売証明書を発行。", processingTime: "約2〜4週間", url: "https://www.urpl.gov.pl/" },
    reimbursement: { system: "国民健康基金（NFZ）", authority: "NFZ / AOTMiT / 保健省", description: "医療機器の保険償還はNFZ制度を通じて実施。高額医療機器はAOTMiTによるHTA評価を経て償還推奨。JGP（DRG類似）および個別償還カタログが存在。", codingSystems: ["JGP（DRG類似コード）", "NFZ償還カタログコード"], url: "https://www.nfz.gov.pl/" },
    marketingRules: { authority: "URPL", description: "2022年医療機器法第55条・56条および2023年保健大臣令により詳細規則を規定。EU MDR Article 7を超える独自の厳格な広告規制を導入。", keyRules: ["広告の実施主体は事業者または書面承認者に限定", "虚偽・誤解を招く広告の禁止", "Class IIb/III植込み型の一般消費者向け広告を制限", "URPL所長が是正命令・広告停止命令を発出可能", "違反時の行政罰（最大200万PLN）"] },
    mdsap: { status: "該当なし（EU加盟国）", description: "ポーランドはEU加盟国としてMDSAPに参加していない。" },
    internationalStandards: {
      iso13485: { accepted: true, notes: "EN ISO 13485:2016がQMS標準。NB適合性評価で事実上の要件。" },
      iso14971: { accepted: true, notes: "EN ISO 14971:2019がEU整合規格。技術文書の必須要素。" },
      iec62304: { accepted: true, notes: "EN IEC 62304:2006+A1:2015がSW整合規格。SaMDで要求。" },
      iec60601: { accepted: true, notes: "EN IEC 60601シリーズがEU整合規格。" },
      others: [
        { name: "EN ISO 10993シリーズ", notes: "生物学的安全性評価のEU整合規格。" },
        { name: "EN IEC 62443", notes: "サイバーセキュリティ要件。MDCG 2019-16関連。" },
      ],
    },
    recentDevelopments: [
      { date: "2023-07", title: "医療機器広告規制の完全施行", description: "2022年医療機器法の広告関連条項が完全施行。EU域内で最も厳格な医療機器広告規制の一つ。" },
      { date: "2022-04", title: "2022年医療機器法の制定", description: "EU MDR/IVDRを補完する国内実施法が制定。" },
      { date: "2025-12", title: "EU MDR移行期限延長に関するEC提案", description: "MDD/AIMDD認証医療機器の移行期限に関する追加措置を提案。ポーランドを含むEU全域に影響。" },
    ],
    lastUpdated: "2026-04-02",
    verified: null,
  },

  /* ================================================================
   *  クウェート (KWT)
   * ================================================================ */
  {
    code: "KWT",
    country: "クウェート",
    countryEn: "State of Kuwait",
    region: "Middle East & Africa",
    flag: "🇰🇼",
    legalSystemOverview: {
      type: "立憲君主制（Constitutional Monarchy）",
      description: "クウェートの医療機器規制は保健省（MOH）のMMPRRA（旧KDFA）が所管する。2025年の省令MD 387/2025により規制枠組みが更新された。GCC標準化機構（GSO）による地域統一規格との整合を推進中。FDA/CE認証等の参照国認可に依拠する部分が大きい。GHTF/IMDRF枠組みに基づく4クラス分類（A/B/C/D）を採用。",
      keyCharacteristics: ["MOH / MMPRRA が医療機器規制を統括", "参照国認可（FDA、CE Mark、SFDA等）への依拠度が高い", "GCC地域統一規格との整合を推進", "4クラス分類（A / B / C / D）", "Local Authorized Representative（LAR）の設置が必須", "STED ベースの審査"],
    },
    authorities: [
      { name: "MOH / MMPRRA", fullName: "Ministry of Health — Medicine and Medical Products Registration and Regulatory Administration", localName: "وزارة الصحة — إدارة تسجيل ورقابة الأدوية والمنتجات الطبية", role: "医療機器の登録審査、輸入許可、市販後監視を統括", url: "https://www.moh.gov.kw/", isPrimary: true },
      { name: "KDFA", fullName: "Kuwait Drug and Food Control Administration", localName: "إدارة مراقبة الأغذية والأدوية", role: "食品・医薬品・医療機器の品質管理。MMPRRAと連携した市場監視", url: "https://www.moh.gov.kw/", isPrimary: false },
    ],
    notifiedBodies: { system: "該当なし（MOH直接審査 + 参照国認可依拠）", description: "欧州型のNotified Body制度は存在しない。MOH/MMPRRAが直接審査を行うが、FDA承認、CEマーキング、SFDA登録等の参照国認可に大きく依拠する。", bodies: [] },
    deviceDefinition: { legalDefinition: "疾病の診断、予防、監視、治療、緩和の目的で使用される器具・装置・機械・ソフトウェア・材料等であって、薬理学的・免疫学的・代謝的手段によらず主たる目的作用を発揮するもの（GCC/IMDRF定義に準拠）。", scope: "IVDを含む。GCC統一規格に基づく定義。", notes: "SaMDに関する独自規定は2026年時点で策定中。" },
    primaryLaw: { title: "省令 MD 387/2025（医療機器登録・規制に関する省令）", originalTitle: "Ministerial Decree MD 387/2025", enacted: "2025", lastAmended: "2025", url: "https://www.moh.gov.kw/", description: "医療機器の登録・輸入・流通・市販後監視に関する包括的省令。従来の省令No.381等を更新・統合。" },
    implementingRegulations: [
      { title: "GCC Technical Regulation for Medical Devices", date: "2015", url: "https://www.gso.org.sa/", description: "GCC加盟国共通の医療機器技術規制。Essential Principles、分類規則、ラベリング要件等を規定。", category: "GCC規制" },
      { title: "省令 No.381（有害事象報告修正）", date: "2023", url: "https://www.moh.gov.kw/", description: "有害事象報告に関する修正省令。15日以内の報告義務等を規定。", category: "ビジランス" },
    ],
    relatedLaws: [
      { title: "医薬品法（Pharmaceutical Law）", category: "医薬品規制", enacted: "1983", url: "https://www.moh.gov.kw/", relevance: "MOHの包括的な監督権限の法的根拠。" },
    ],
    classification: {
      system: "リスクベース4クラス分類（GCC/GHTF整合）",
      basis: "GHTF/IMDRF分類ルールに基づくリスクベース分類。GCC統一技術規制に準拠。",
      classes: [
        { name: "Class A", nameJa: "クラスA（低リスク）", riskLevel: "低", description: "個人及び公衆衛生への潜在的リスクが最小限。", examples: ["ガーゼ", "聴診器", "手術用手袋", "車椅子"], approvalPath: "登録（簡易審査）— MOH/MMPRRA" },
        { name: "Class B", nameJa: "クラスB（中低リスク）", riskLevel: "中低", description: "低〜中程度のリスク。", examples: ["超音波診断装置", "注射針", "歯科用充填材", "電動式車椅子"], approvalPath: "登録（STED審査）— MOH/MMPRRA" },
        { name: "Class C", nameJa: "クラスC（中高リスク）", riskLevel: "中高", description: "中〜高程度のリスク。", examples: ["人工呼吸器", "透析器", "骨接合プレート", "血管カテーテル"], approvalPath: "登録（STED + 臨床データ審査）— MOH/MMPRRA" },
        { name: "Class D", nameJa: "クラスD（高リスク）", riskLevel: "高", description: "高いリスク。最も厳格な審査。", examples: ["心臓ペースメーカー", "人工心臓弁", "冠動脈ステント", "人工関節"], approvalPath: "登録（STED + 臨床データ + 参照国認可審査）— MOH/MMPRRA" },
      ],
      rules: ["GHTF/IMDRF分類ルールに基づく", "参照国（FDA/EU/SFDA等）での分類を参考", "IVDも同じA/B/C/D分類"],
      totalProductCodes: null,
    },
    conformityAssessment: {
      overview: "全医療機器はMOH/MMPRRAへの登録が必要。Class B〜DはSTEDに基づく審査。参照国認可（FDA、CE、SFDA等）が事実上の前提条件。外国メーカーはLARの設置が必須。",
      routes: [
        { name: "Device Registration", nameJa: "クウェート医療機器登録", applicableClasses: ["Class A", "Class B", "Class C", "Class D"], description: "MOH/MMPRRAにSTED、参照国認可証明、QMS証明書等を提出。参照国認可の保有が審査を大幅に迅速化。", subtypes: ["新規登録", "変更登録", "更新"], avgReviewTime: "6〜8週間（参照国認可保有の場合）", fee: "申請区分により異なる", url: "https://www.moh.gov.kw/" },
      ],
    },
    electronicSubmission: { system: "MOH電子サービスポータル", url: "https://eservices.moh.gov.kw/", description: "MOHの電子サービスポータルを通じて一部のオンライン提出が可能。完全電子化は段階的に推進中。", mandatory: false },
    udi: { required: false, system: "GCC UDI制度（策定中）", description: "クウェート独自のUDI制度は2026年時点で未導入。GCC全体でのUDI制度導入が検討中。", url: null, timeline: "未定。GCC全体でのUDI制度導入を検討中" },
    postMarket: {
      adverseEventReporting: { system: "有害事象報告制度（MOH）", mandatory: true, url: "https://eservices.moh.gov.kw/SPCMS/DrugReaction.aspx", description: "省令No.381に基づき15日以内にMOH薬事監視チームに報告する義務。自主報告制度も併設。" },
      recalls: { authority: "MOH / MMPRRA", description: "MOHの命令または自主リコール。GCC加盟国間の安全性情報共有体制あり。", url: "https://www.moh.gov.kw/" },
      surveillance: "MOH/MMPRRAによる市販後データ収集・分析。GCC全体での市販後監視強化が計画中。",
    },
    certificateOfFreeSale: { available: false, issuingAuthority: null, name: null, description: "クウェートからのCFS発行に関する公式制度の情報は未確認。輸入時には製造国のCFS提出が求められる場合がある。", processingTime: null, url: null },
    reimbursement: { system: "政府主導型医療制度（MOH直轄病院 + 民間保険）", authority: "保健省（MOH）", description: "国民に対し政府病院での無料医療を提供。医療機器の調達はMOH直轄病院の公共調達。個別の医療機器償還制度は未整備。", codingSystems: [], url: "https://www.moh.gov.kw/" },
    marketingRules: { authority: "MOH", description: "詳細な医療機器広告法規は未整備。虚偽広告は一般消費者保護法等により規制。", keyRules: ["虚偽・誇大広告の禁止", "未登録医療機器の広告禁止", "MOH承認表示内容の遵守"] },
    mdsap: { status: "非参加", description: "クウェートはMDSAPに参加していない。" },
    internationalStandards: {
      iso13485: { accepted: true, notes: "ISO 13485認証は登録時に提出を求められるQMS証明の主要形式。" },
      iso14971: { accepted: true, notes: "リスクマネジメントの実施がSTED提出時に要求される。" },
      iec62304: { accepted: false, notes: "独自の要求は限定的。参照国認可で間接的に要求される場合あり。" },
      iec60601: { accepted: true, notes: "安全性試験結果がSTED提出時に参照される。" },
      others: [{ name: "GCC Essential Principles of Safety and Performance", notes: "GCC統一技術規制の基本要件。GHTF/IMDRF準拠。" }],
    },
    recentDevelopments: [
      { date: "2025", title: "省令MD 387/2025の発効", description: "MMPRRA体制の下で規制枠組みを刷新。" },
      { date: "2025", title: "UDI制度導入の検討", description: "GCC全体でのUDI制度導入が検討開始。" },
      { date: "2023", title: "有害事象報告制度の改訂", description: "15日以内の報告義務が明確化。" },
    ],
    lastUpdated: "2026-04-02",
    verified: null,
  },

  /* ================================================================
   *  カタール (QAT)
   * ================================================================ */
  {
    code: "QAT",
    country: "カタール",
    countryEn: "State of Qatar",
    region: "Middle East & Africa",
    flag: "🇶🇦",
    legalSystemOverview: {
      type: "絶対君主制（Absolute Monarchy）",
      description: "カタールの医療機器規制は公衆衛生省（MOPH）のPharmacy and Drug Control Department（PDCD）が所管する。植込み型医療機器のみが正式登録の対象であり、非植込み型は輸入許可制度で管理される。GHTF創設国による事前認可が市場参入の前提条件。規制制度は発展途上。",
      keyCharacteristics: ["MOPH / PDCD が規制当局", "植込み型医療機器のみ正式登録が必要", "非植込み型は輸入許可制度で管理", "GHTF創設国の事前認可が前提条件", "Local Authorized Representative（AR）の設置が必須", "規制制度は発展途上・GCC統一化を推進中"],
    },
    authorities: [
      { name: "MOPH / PDCD", fullName: "Ministry of Public Health — Pharmacy and Drug Control Department", localName: "وزارة الصحة العامة — إدارة الصيدلة ومراقبة الأدوية", role: "植込み型医療機器の登録審査、輸入許可の発行、市販後監視を統括", url: "https://www.moph.gov.qa/", isPrimary: true },
      { name: "MEC", fullName: "Ministry of Economy and Commerce", localName: "وزارة الاقتصاد والتجارة", role: "非植込み型医療機器の市場認可（輸入許可）に関与", url: "https://www.mec.gov.qa/", isPrimary: false },
    ],
    notifiedBodies: { system: "該当なし（MOPH直接審査 + 参照国認可依拠）", description: "Notified Body制度は存在しない。GHTF創設国の事前認可に大きく依拠。", bodies: [] },
    deviceDefinition: { legalDefinition: "GHTF/IMDRF定義に準拠。薬理学的・免疫学的・代謝的手段によらず主たる目的作用を発揮するもの。", scope: "IVDを含む。植込み型は登録対象、非植込み型は輸入許可対象。", notes: "SaMDに関する独自規定は2026年時点で未整備。" },
    primaryLaw: { title: "公衆衛生省令（医療機器登録・輸入に関する規則）", originalTitle: null, enacted: "要確認（包括的法典なし）", lastAmended: "要確認", url: "https://www.moph.gov.qa/", description: "包括的な単一法典ではなく、MOPHの省令・通達・手続規定等の組み合わせで構成。統一的な医療機器法は2026年時点で未確認。" },
    implementingRegulations: [
      { title: "MOPH/PDCD 医療機器登録手続きガイダンス", date: null, url: "https://www.moph.gov.qa/", description: "植込み型医療機器の登録に必要な書類・手続きを規定。", category: "登録手続き" },
      { title: "GCC Technical Regulation for Medical Devices", date: "2015", url: "https://www.gso.org.sa/", description: "GCC加盟国共通の医療機器技術規制。カタールは段階的に国内実施を推進中。", category: "GCC規制" },
    ],
    relatedLaws: [
      { title: "データプライバシー保護法（Law No. 13 of 2016）", category: "データ保護", enacted: "2016", url: "https://www.moj.gov.qa/", relevance: "医療機器から取得される健康データの処理に適用される可能性がある。" },
    ],
    classification: {
      system: "参照国分類（FDA/EU MDR準拠）",
      basis: "独自の分類体系は限定的。FDA分類またはEU MDR分類を受入。",
      classes: [
        { name: "Class I", nameJa: "クラスI（低リスク）", riskLevel: "低", description: "低リスク。FDA Class IまたはEU Class I相当。", examples: ["包帯", "聴診器", "松葉杖", "医療用手袋"], approvalPath: "輸入許可 — MOPH/PDCD（登録不要）" },
        { name: "Class IIa / II", nameJa: "クラスIIa / II（中リスク）", riskLevel: "中", description: "中程度のリスク。", examples: ["超音波診断装置", "電動式車椅子", "シリンジポンプ", "コンタクトレンズ"], approvalPath: "輸入許可 — MOPH/PDCD" },
        { name: "Class III (植込み型)", nameJa: "クラスIII / 植込み型（高リスク）", riskLevel: "高", description: "高リスクの植込み型医療機器。正式登録が必要。", examples: ["心臓ペースメーカー", "人工心臓弁", "冠動脈ステント", "人工関節", "乳房インプラント"], approvalPath: "正式登録 — MOPH/PDCD + 参照国認可必須" },
      ],
      rules: ["GHTF創設国の分類を受入", "植込み型は必ず正式登録", "非植込み型は輸入許可制度で管理", "独自分類ルールはGCC統一化の中で検討中"],
      totalProductCodes: null,
    },
    conformityAssessment: {
      overview: "植込み型のみがMOPH/PDCDへの正式登録を必要とする。非植込み型は輸入許可で管理。GHTF創設国の事前認可が前提条件。外国メーカーはLocal AR設置が必須。",
      routes: [
        { name: "Implantable Device Registration", nameJa: "植込み型医療機器登録", applicableClasses: ["Class III (植込み型)"], description: "MOPH/PDCDに登録書類一式を提出。PDCD審査・承認を経て登録証を取得。", subtypes: ["新規登録", "変更登録"], avgReviewTime: "数週間〜数ヶ月", fee: "MOPH規定による", url: "https://www.moph.gov.qa/" },
        { name: "Import Permit", nameJa: "非植込み型機器 輸入許可", applicableClasses: ["Class I", "Class IIa / II"], description: "非植込み型の輸入にはMOPH/PDCDの輸入許可が必要。", subtypes: [], avgReviewTime: "数日〜数週間", fee: "MOPH規定による", url: "https://www.moph.gov.qa/" },
      ],
    },
    electronicSubmission: { system: "MOPH DHP ポータル", url: "https://dhp.moph.gov.qa/", description: "一部のオンライン手続きが可能。完全電子化は段階的に推進中。", mandatory: false },
    udi: { required: false, system: "未導入", description: "独自のUDI制度は2026年時点で未導入。GCC統一UDI制度の検討に参加中。", url: null, timeline: "未定。GCC統一UDI制度の導入を検討中" },
    postMarket: {
      adverseEventReporting: { system: "有害事象報告制度（MOPH/PDCD）", mandatory: true, url: "https://www.moph.gov.qa/", description: "植込み型登録機器については有害事象報告義務がある。非植込み型の市販後監視は限定的。" },
      recalls: { authority: "MOPH / PDCD", description: "MOPHの命令または自主リコール。参照国でのリコール情報を監視。", url: "https://www.moph.gov.qa/" },
      surveillance: "MOPH/PDCDによる市販後安全性監視。植込み型機器を中心に監視。制度は発展途上。",
    },
    certificateOfFreeSale: { available: false, issuingAuthority: null, name: null, description: "CFS発行に関する公式制度の情報は未確認。登録時には製造国のCFS提出が求められる場合がある。", processingTime: null, url: null },
    reimbursement: { system: "政府主導型医療制度（公的医療 + 民間保険）", authority: "MOPH / Hamad Medical Corporation（HMC）", description: "カタール国民はHMC等の公的医療機関で低負担の医療を受けられる。医療機器調達は公共調達中心。個別の償還制度は未整備。", codingSystems: [], url: "https://www.moph.gov.qa/" },
    marketingRules: { authority: "MOPH", description: "詳細な医療機器広告法規は未整備。虚偽広告は一般法により禁止。", keyRules: ["虚偽・誇大広告の禁止", "未登録・未許可医療機器の広告禁止", "アラビア語・英語での表示義務"] },
    mdsap: { status: "非参加", description: "カタールはMDSAPに参加していない。" },
    internationalStandards: {
      iso13485: { accepted: true, notes: "植込み型機器の登録時に推奨/要求。参照国認可でISO 13485適合が前提。" },
      iso14971: { accepted: true, notes: "参照国認可の枠組みで間接的に要求。" },
      iec62304: { accepted: false, notes: "独自の要求は未整備。参照国認可で確認されている場合に受入。" },
      iec60601: { accepted: true, notes: "参照国の試験結果を受入。" },
      others: [{ name: "GCC Essential Principles of Safety and Performance", notes: "GCC統一技術規制。段階的に国内実施を推進中。" }],
    },
    recentDevelopments: [
      { date: "2025", title: "SEHA健康保険制度の段階的導入", description: "国民皆保険に向けたSEHA制度を段階的に導入。医療機器の公的償還環境に影響する可能性。" },
      { date: "2025", title: "GCC統一医療機器規制への段階的整合", description: "GCC統一技術規制の国内実施を推進中。UDI制度導入、市販後監視強化等がロードマップに含まれる。" },
    ],
    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- JOR（ヨルダン） ---
  // =========================================================================
  {
    code: "JOR",
    country: "ヨルダン",
    countryEn: "Hashemite Kingdom of Jordan",
    region: "Middle East & Africa",
    flag: "🇯🇴",
    legalSystemOverview: {
      type: "中央集権制（Centralized system）",
      description: "ヨルダンの医療機器規制はヨルダン食品医薬品庁（JFDA）が管轄する。2003年に設立されたJFDAは、薬事法（Drug & Pharmacy Law No. 88）に基づき医薬品・食品・医療機器を一元的に規制する。EU および FDA の分類モデルを受容しており、CE マークまたは FDA 認可を持つ機器に対する相互認証的なアプローチを採用。登録は比較的シンプルだが、Class III 機器にはより詳細な技術文書が要求される。",
      keyCharacteristics: [
        "JFDA による一元的な規制体制",
        "EU/FDA 分類モデルの受容",
        "CE マークまたは FDA 認可の機器は登録が簡素化",
        "ローカルライセンス保有者（輸入業者）の指定が必須",
        "登録有効期限なし（ラボ試験不要の場合）または5年",
      ],
    },
    authorities: [
      { name: "JFDA", fullName: "Jordan Food and Drug Administration", localName: "المؤسسة العامة للغذاء والدواء", role: "医療機器の登録・市販後監視・輸入管理", url: "https://www.jfda.jo/", isPrimary: true },
      { name: "MOH Jordan", fullName: "Ministry of Health — Jordan", localName: "وزارة الصحة الأردنية", role: "医療政策全般・公立病院の調達管理", url: "https://www.moh.gov.jo/", isPrimary: false },
    ],
    notifiedBodies: {
      system: "なし（JFDA が直接登録を審査。EU/FDA の承認文書に依拠）",
      description: "ヨルダンには欧州型の Notified Body 制度は存在しない。JFDA が申請書類を直接審査し、CE証明書またはFDA認可文書を主たるエビデンスとして登録判断を行う。",
      bodies: [],
    },
    deviceDefinition: {
      legalDefinition: "JFDA の医療機器規制に基づき、疾病の診断・治療・予防・監視等を目的とする器具・装置・機器・ソフトウェア等で、薬理学的・免疫学的・代謝的手段によらないもの。",
      scope: "体外診断用医薬品（IVD）も規制対象。JFDA の医療機器部門が管轄。",
      notes: "定義は GHTF/IMDRF の定義に概ね準拠しているが、ヨルダン固有の法的定義文書の公開は限定的。",
    },
    primaryLaw: {
      title: "Drug & Pharmacy Law No. 88 of 1964（改正あり）",
      originalTitle: "قانون الصيدلة والأدوية رقم 88",
      enacted: "1964",
      lastAmended: "随時改正（JFDA 設立法含む）",
      url: "https://www.jfda.jo/",
      description: "ヨルダンにおける医薬品・医療機器規制の根幹法。JFDA の設立根拠を含む。医療機器に関する具体的要件は JFDA が発出する規則・ガイドラインで規定。",
    },
    implementingRegulations: [
      { title: "JFDA Medical Device Registration Instructions", date: null, url: "https://www.jfda.jo/", description: "医療機器の登録手続き、必要書類、審査基準を規定する JFDA 発出の指示文書。", category: "登録" },
      { title: "JFDA Medical Device Import & Distribution Instructions", date: null, url: "https://www.jfda.jo/", description: "医療機器の輸入・流通に関する要件。ローカルライセンス保有者の要件を含む。", category: "輸入管理" },
    ],
    relatedLaws: [
      { title: "JFDA Law（JFDA 設立法）", category: "組織法", enacted: "2003", url: "https://www.jfda.jo/", relevance: "JFDA の設立、権限、組織構成を規定。医療機器を含む規制対象の管轄範囲を定義。" },
    ],
    classification: {
      system: "EU/FDA 分類モデルの受容（Class I / II / III）",
      basis: "リスクベース（EU MDDまたはFDA分類を参照）",
      classes: [
        { name: "Class I", nameJa: "クラスI", riskLevel: "低リスク", description: "低リスク医療機器。一般的制御で安全性を確保。", examples: ["弾性包帯", "手動外科器具", "聴診器"], approvalPath: "簡易登録" },
        { name: "Class II", nameJa: "クラスII", riskLevel: "中リスク", description: "中リスク医療機器。CE マークまたは FDA 認可文書が必要。", examples: ["超音波診断装置", "輸液ポンプ", "電動車椅子"], approvalPath: "標準登録（CE/FDA 証明書ベース）" },
        { name: "Class III", nameJa: "クラスIII", riskLevel: "高リスク", description: "高リスク医療機器。CE マーク（EC Full QA + Design Examination）または FDA PMA 承認が必要。より詳細な技術文書の提出が求められる。", examples: ["人工心臓弁", "冠動脈ステント", "埋込み型デバイス"], approvalPath: "詳細審査（技術文書 + CE/FDA 証明書）" },
      ],
      rules: [
        { id: "EU/FDA 参照分類", description: "JFDA は EU MDD/MDR または FDA の分類を参照して機器のクラスを決定する。ヨルダン独自の分類規則データベースは公開されていない。", url: "https://www.jfda.jo/" },
      ],
      totalProductCodes: "要確認（JFDA 独自のコード体系の公開情報なし）",
    },
    conformityAssessment: {
      overview: "JFDA は CE マークまたは FDA 認可を持つ機器に対し、書類審査ベースの登録を実施。独自の臨床データ要求は基本的にない。",
      routes: [
        { name: "JFDA Medical Device Registration", nameJa: "JFDA 医療機器登録", applicableClasses: ["全クラス"], description: "CE 証明書または FDA 認可文書と、Free Sale Certificate、技術文書、ラベリング情報等を提出して登録。Class III はより詳細な文書が要求される。ラボ試験が必要な場合は追加期間。", subtypes: [], avgReviewTime: "4〜8ヶ月（ラボ試験不要の場合は短縮の可能性あり）", fee: "要確認（JFDA 料金表は随時改定）", url: "https://www.jfda.jo/" },
      ],
    },
    electronicSubmission: { system: "要確認（JFDA オンラインポータルの有無は未確認）", url: "https://www.jfda.jo/", description: "JFDA への申請手続きの電子化状況は限定的な情報しか公開されていない。最新の申請方法は JFDA に直接確認が必要。", mandatory: false },
    udi: { required: false, system: "要確認（UDI 制度の導入状況は未確認）", description: "ヨルダンでは現時点で IMDRF/FDA 型の UDI 制度が法的に義務化されているとの確認情報はない。CE マーク機器は EU UDI（EUDAMED）の要件を満たしている場合がある。", url: null, timeline: "要確認" },
    postMarket: {
      adverseEventReporting: { system: "JFDA 有害事象報告制度", mandatory: true, url: "https://www.jfda.jo/", description: "医療機器に関連する有害事象は JFDA に報告義務がある。詳細な報告手順・期限は JFDA のガイドラインに依拠。" },
      recalls: { authority: "JFDA", description: "JFDA はリコール・Field Safety Corrective Action（FSCA）を管理。製造業者・輸入業者はリコール実施時に JFDA に通知義務。", url: "https://www.jfda.jo/" },
      surveillance: "JFDA による市販後監視。詳細な PMS 制度の公開情報は限定的。",
    },
    certificateOfFreeSale: { available: true, issuingAuthority: "JFDA", name: "Free Sale Certificate", description: "登録済み医療機器について JFDA が発行する自由販売証明書。登録申請時には原産国または参照国（スイス・豪州・カナダ・ノルウェー・英国）の CFS 提出が必要。", processingTime: "要確認", url: "https://www.jfda.jo/" },
    reimbursement: { system: "公的医療保険 + 軍保険 + 民間保険", authority: "MOH Jordan / Royal Medical Services", description: "ヨルダンの医療保険制度は MOH 管轄の公的保険、軍（Royal Medical Services）、UNRWA（難民支援）、民間保険の複合体制。医療機器の償還は主に公立病院の調達予算を通じて行われる。独立した医療機器償還制度の公開情報は限定的。", codingSystems: ["要確認"], url: "https://www.moh.gov.jo/" },
    marketingRules: { authority: "JFDA", description: "医療機器の広告・販促は JFDA の規制下にある。承認された適応のみの広告が原則。", keyRules: ["登録済み機器のみ広告可", "ラベリングは英語で記載（アラビア語追加を推奨）", "虚偽・誇大広告の禁止"] },
    mdsap: { status: "非参加", description: "ヨルダンは MDSAP プログラムに参加していない。ただし MDSAP 認証を保有する製造業者の ISO 13485 適合は間接的に考慮される可能性がある。" },
    internationalStandards: {
      iso13485: { accepted: true, notes: "ISO 13485 認証は CE マーク取得の前提として間接的に要求される。JFDA がISO 13485 を独自に法的義務として明示しているかは要確認。" },
      iso14971: { accepted: true, notes: "CE マーク機器の技術文書にリスクマネジメント（ISO 14971）準拠が含まれる。" },
      iec62304: { accepted: true, notes: "ソフトウェア医療機器に対し、CE/FDA 経由で間接的に参照。" },
      iec60601: { accepted: true, notes: "医用電気機器の安全規格として、CE マーク機器の適合要件に含まれる。" },
      others: [],
    },
    recentDevelopments: [
      { date: "2026", title: "医薬品シリアライゼーション義務化（DataMatrix）", description: "JFDA は2026年を期限として医薬品の DataMatrix シリアライゼーションを義務化。医療機器への拡大可能性は要確認。" },
    ],
    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- BHR（バーレーン） ---
  // =========================================================================
  {
    code: "BHR",
    country: "バーレーン",
    countryEn: "Kingdom of Bahrain",
    region: "Middle East & Africa",
    flag: "🇧🇭",
    legalSystemOverview: {
      type: "中央集権制（Centralized system）",
      description: "バーレーンの医療機器規制は国家保健規制庁（NHRA）が管轄する。2009年の法律第38号に基づき設立された NHRA は、医薬品・医療機器・医療施設の規制を一元的に担う。分類体系は EU MDR に準拠した Class I / IIa / IIb / III および IVD A-D を採用。米国 FDA、英国 MHRA、豪州 TGA 等の国際的規制機関のガイドラインを参照し、バーレーン市場に合わせてカスタマイズしている。",
      keyCharacteristics: [
        "NHRA による一元的な規制体制",
        "EU MDR ベースの5クラス分類（Class I / IIa / IIb / III / IVD A-D）",
        "FDA・MHRA・TGA・SFDA 等の承認を参照",
        "ローカル代理人（Authorized Representative）の指定が必須",
        "登録有効期限は QAC（品質保証証明書）の有効期限に連動（1〜5年）",
      ],
    },
    authorities: [
      { name: "NHRA", fullName: "National Health Regulatory Authority", localName: "الهيئة الوطنية لتنظيم المهن والخدمات الصحية", role: "医療機器の登録・市販後監視・施設許可", url: "https://www.nhra.bh/", isPrimary: true },
      { name: "MOH Bahrain", fullName: "Ministry of Health — Bahrain", localName: "وزارة الصحة", role: "医療政策全般・公立病院管理", url: "https://www.moh.gov.bh/", isPrimary: false },
    ],
    notifiedBodies: {
      system: "なし（NHRA が直接登録を審査。国際的承認文書に依拠）",
      description: "バーレーンには Notified Body 制度は存在しない。NHRA が直接申請書類を審査する。CE マーク、FDA 認可、SFDA 承認等の国際的承認文書を主たるエビデンスとして使用。",
      bodies: [],
    },
    deviceDefinition: {
      legalDefinition: "NHRA ガイドラインに基づき、疾病の診断・治療・予防・監視・軽減等を目的とする器具・装置・機器・ソフトウェア・材料等で、主たる作用が薬理学的・免疫学的・代謝的手段によらないもの。GHTF/IMDRF 定義に準拠。",
      scope: "体外診断用医薬品（IVD）も規制対象。IVD は Class A〜D の独自分類。",
      notes: "NHRA Medical Devices Registration Guideline Ver 7.0 が現行の主要ガイドライン文書。",
    },
    primaryLaw: {
      title: "Law No. 38 of 2009（NHRA 設立法）",
      originalTitle: "قانون رقم 38 لسنة 2009",
      enacted: "2009",
      lastAmended: "随時改正",
      url: "https://www.nhra.bh/",
      description: "NHRA の設立、権限、組織構成を規定する基本法。医療機器を含む保健関連製品・サービスの規制権限を NHRA に付与。",
    },
    implementingRegulations: [
      { title: "NHRA Medical Devices Registration Guideline (Ver 7.0)", date: null, url: "https://www.nhra.bh/Departments/MDR/MediaHandler/GenericHandler/documents/departments/MDR/guidelines/MDR_Guideline_Medical%20Device%20Registration_Ver%207.0.pdf", description: "医療機器の分類・登録手続き・必要書類・審査基準を包括的に規定する NHRA の主要ガイドライン。", category: "登録" },
      { title: "NHRA Medical Devices Regulation Guidelines", date: null, url: "https://www.nhra.bh/departments/mdr/", description: "医療機器の市販後監視、ビジランス報告、施設許可等に関するガイドライン群。", category: "市販後・施設" },
    ],
    relatedLaws: [],
    classification: {
      system: "EU MDR ベースの分類（Class I / IIa / IIb / III / IVD A-D）",
      basis: "リスクベース（EU MDR 分類規則を参照）",
      classes: [
        { name: "Class I", nameJa: "クラスI", riskLevel: "低リスク", description: "低リスク医療機器。", examples: ["弾性包帯", "聴診器", "手動外科器具"], approvalPath: "NHRA 登録（簡易書類）" },
        { name: "Class IIa", nameJa: "クラスIIa", riskLevel: "低〜中リスク", description: "低中リスク医療機器。", examples: ["超音波診断装置", "歯科用充填材"], approvalPath: "NHRA 登録（標準書類 + QAC）" },
        { name: "Class IIb", nameJa: "クラスIIb", riskLevel: "中〜高リスク", description: "中高リスク医療機器。", examples: ["輸液ポンプ", "人工呼吸器", "X線装置"], approvalPath: "NHRA 登録（詳細書類 + QAC）" },
        { name: "Class III", nameJa: "クラスIII", riskLevel: "高リスク", description: "高リスク医療機器。最も厳格な審査。", examples: ["人工心臓弁", "冠動脈ステント", "埋込み型デバイス"], approvalPath: "NHRA 登録（詳細技術文書 + QAC + 臨床データ）" },
        { name: "IVD A-D", nameJa: "IVD クラスA〜D", riskLevel: "低〜高リスク（IVD専用分類）", description: "体外診断用医療機器。リスクに応じた A〜D のクラス。", examples: ["一般臨床化学検査キット（A）", "血液型検査（D）"], approvalPath: "NHRA IVD 登録" },
      ],
      rules: [{ id: "NHRA 分類ガイドライン", description: "NHRA は EU MDR の分類規則を参照しつつ、独自のガイドラインで分類手順を規定。", url: "https://www.nhra.bh/departments/mdr/" }],
      totalProductCodes: "要確認（NHRA 独自のコード体系は未公開）",
    },
    conformityAssessment: {
      overview: "NHRA は申請書類の審査により登録を行う。CE マーク、FDA 認可、SFDA 承認等の国際的認証を主たるエビデンスとして利用。",
      routes: [
        { name: "NHRA Medical Device Registration", nameJa: "NHRA 医療機器登録", applicableClasses: ["全クラス"], description: "登録フォーム、技術文書（取扱説明書・サービスマニュアル・カタログ）、ラベリング、QAC（ISO 13485 証明書、CE 証明書等）を提出。NHRA が6〜8週間で審査。", subtypes: [], avgReviewTime: "6〜8週間", fee: "要確認（NHRA 料金表を参照）", url: "https://www.nhra.bh/departments/mdr/" },
      ],
    },
    electronicSubmission: { system: "NHRA オンラインポータル", url: "https://www.nhra.bh/", description: "NHRA はオンラインでの申請受付を実施。詳細な電子申請システムの仕様は NHRA に直接確認が必要。", mandatory: false },
    udi: { required: false, system: "要確認（UDI 制度の独自導入は未確認）", description: "バーレーンでは現時点で IMDRF 型の UDI 制度が法的に義務化されているとの確認情報はない。CE マーク機器は EU UDI 要件を満たしている場合がある。", url: null, timeline: "要確認" },
    postMarket: {
      adverseEventReporting: { system: "NHRA ビジランス報告制度", mandatory: true, url: "https://www.nhra.bh/departments/mdr/", description: "有害事象およびフィールドセーフティに関する事項は NHRA に報告義務。過去5年分のフィールドセーフティノーティス記録の提出が登録時に必要。" },
      recalls: { authority: "NHRA", description: "NHRA がリコール・FSCA を管理。製造業者・代理人はリコール実施時に NHRA に通知義務。", url: "https://www.nhra.bh/" },
      surveillance: "NHRA による市販後監視。登録済み機器の詳細は2025年末までに NHRA ウェブサイトで公開予定。",
    },
    certificateOfFreeSale: { available: false, issuingAuthority: "NHRA", name: "要確認", description: "NHRA が Free Sale Certificate を発行するかは確認が必要。登録時に申請元国の CFS 提出は必要。", processingTime: "要確認", url: "https://www.nhra.bh/" },
    reimbursement: { system: "公的医療制度（国民に対する無料医療サービス）+ 民間保険", authority: "MOH Bahrain", description: "バーレーン国民は公立病院で無料の医療サービスを受けられる。医療機器の調達は公立病院の調達予算を通じて行われる。独立した医療機器償還制度の公開情報は限定的。", codingSystems: ["要確認"], url: "https://www.moh.gov.bh/" },
    marketingRules: { authority: "NHRA", description: "医療機器の広告・販促は NHRA の規制下にある。登録済み機器のみの広告が原則。", keyRules: ["NHRA 登録済み機器のみ広告・販促可", "虚偽・誇大広告の禁止", "ラベリングは英語（アラビア語の追加を推奨）"] },
    mdsap: { status: "非参加", description: "バーレーンは MDSAP プログラムに参加していない。" },
    internationalStandards: {
      iso13485: { accepted: true, notes: "ISO 13485 認証は QAC（品質保証証明書）として登録申請時に必要。SFDA 発行の QMS 証明書も受容。" },
      iso14971: { accepted: true, notes: "リスクマネジメントの国際規格として参照。" },
      iec62304: { accepted: true, notes: "ソフトウェア医療機器に対して間接的に参照。" },
      iec60601: { accepted: true, notes: "医用電気機器の安全規格として参照。" },
      others: [],
    },
    recentDevelopments: [
      { date: "2025", title: "登録済み医療機器データの NHRA ウェブサイト公開予定", description: "2025年末までに、全ての承認・許可済み医療機器の登録詳細が NHRA ウェブサイトで公開される予定。" },
      { date: "2018", title: "NHRA 医療機器規制フレームワーク設立", description: "2018年に医療機器規制フレームワークを正式に確立。国際的な規制機関（FDA、MHRA、TGA）のガイドラインをバーレーン市場に適合させた。" },
    ],
    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- OMN（オマーン） ---
  // =========================================================================
  {
    code: "OMN",
    country: "オマーン",
    countryEn: "Sultanate of Oman",
    region: "Middle East & Africa",
    flag: "🇴🇲",
    legalSystemOverview: {
      type: "中央集権制（Centralized system）",
      description: "オマーンの医療機器規制は保健省（MOH）傘下の医薬品安全センター（Drug Safety Center / DGPADC: Directorate General of Pharmaceutical Affairs and Drug Control）が管轄する。2020年の大臣令第113号（Ministerial Decree 113/2020）が主たる規制根拠。GHTF/IMDRF の分類原則に準拠した Class A / B / C / D の4クラス分類を採用し、EU MDR のフレームワークとも整合性を持つ。",
      keyCharacteristics: [
        "MOH / DGPADC による中央規制体制",
        "GHTF ベースの4クラス分類（Class A / B / C / D）",
        "大臣令 113/2020 が主たる規制根拠",
        "ローカル代理人（Authorized Representative）の指定が必須",
        "登録有効期限5年",
      ],
    },
    authorities: [
      { name: "DGPADC / Drug Safety Center", fullName: "Directorate General of Pharmaceutical Affairs and Drug Control — Drug Safety Center", localName: "المديرية العامة للشؤون الصيدلانية والرقابة الدوائية", role: "医療機器の登録・市販後監視・輸入管理・施設許可", url: "https://www.moh.gov.om/en/hospitals-directorates/directorates-and-centers-at-hq/drug-safety-center/", isPrimary: true },
      { name: "MOH Oman", fullName: "Ministry of Health — Oman", localName: "وزارة الصحة", role: "医療政策全般・上位監督", url: "https://www.moh.gov.om/", isPrimary: false },
    ],
    notifiedBodies: {
      system: "なし（MOH/DGPADC が直接審査）",
      description: "オマーンには Notified Body 制度は存在しない。DGPADC が直接申請書類を審査し、登録判断を行う。CE 証明書、FDA 認可等の国際的認証文書を参照。",
      bodies: [],
    },
    deviceDefinition: {
      legalDefinition: "大臣令 113/2020 に基づき、疾病の診断・治療・予防・監視等を目的とする器具・装置・機器・ソフトウェア・材料等で、主たる作用が薬理学的・免疫学的・代謝的手段によらないもの。GHTF/IMDRF 定義に準拠。",
      scope: "体外診断用医薬品（IVD）も規制対象。IVD は独自の分類規則に従う。",
      notes: "MOH はガイダンス文書（GD シリーズ）で詳細な定義・適用範囲を規定。GD-22（製造業者登録）、GD-3（Class C/D 登録）、GD-9（低リスク機器登録）等。",
    },
    primaryLaw: {
      title: "Ministerial Decree 113/2020（薬局業務・医薬品企業規制執行令）",
      originalTitle: "القرار الوزاري رقم 113/2020",
      enacted: "2020",
      lastAmended: null,
      url: "https://decree.om/2020/moh20200113/",
      description: "薬局業務の実務および医薬品企業を規制する執行令。医療機器の規制根拠を含む。DGPADC の権限を規定。",
    },
    implementingRegulations: [
      { title: "GD-3: Guideline on Requirements of Class C & D Medical Devices Registration", date: null, url: "https://www.moh.gov.om/media/ov3mnntj/guidance-document-gd3-guideline-on-requirements-of-class-c-d-medical-devices-registration.pdf", description: "高リスク（Class C / D）医療機器の登録要件を詳細に規定。技術文書・臨床データ要件を含む。", category: "登録（高リスク）" },
      { title: "GD-9: Requirements of Low Risk Medical Devices Registration", date: null, url: "https://moh.gov.om/media/peqd3ouo/gd9-requirements-of-low-risk-medical-devices-registration.pdf", description: "低リスク（Class A / B）医療機器の登録要件を規定。", category: "登録（低リスク）" },
      { title: "GD-22: Guideline on Requirements of Medical Device Manufacturer Registration", date: null, url: "https://www.moh.gov.om/media/ubmn0pgh/guidance-document-gd-22-guideline-on-requirements-of-medical-device-manufacturer-registration-in-sultanate-of-oman.pdf", description: "医療機器製造業者のオマーンでの登録要件。GHTF 2010 ガイダンスを参照。", category: "製造業者登録" },
      { title: "GD-14: Guideline on Medical Devices Bundling/Grouping Criteria", date: null, url: "https://www.moh.gov.om/media/4vbkgbw2/guidance-document-gd14-guideline-on-medical-devices-bundling-grouping-criteria-1.pdf", description: "医療機器のバンドリング・グルーピング基準を規定。", category: "申請手続き" },
      { title: "GD-1: Medical Device Listing Guidance", date: null, url: "https://moh.gov.om/media/edhjumre/11plus5-listing-guidance.pdf", description: "医療機器のリスティング（データベース登録）要件を規定。", category: "リスティング" },
    ],
    relatedLaws: [],
    classification: {
      system: "GHTF ベースの4クラス分類（Class A / B / C / D）",
      basis: "リスクベース（GHTF/IMDRF 分類原則に準拠）",
      classes: [
        { name: "Class A", nameJa: "クラスA", riskLevel: "低リスク", description: "低リスク医療機器。患者への直接的リスクが最小限。", examples: ["弾性包帯", "手動外科器具", "聴診器"], approvalPath: "簡易登録（GD-9）" },
        { name: "Class B", nameJa: "クラスB", riskLevel: "低〜中リスク", description: "低中リスク医療機器。", examples: ["血圧計", "超音波プローブ", "歯科用充填材"], approvalPath: "標準登録（GD-9）" },
        { name: "Class C", nameJa: "クラスC", riskLevel: "中〜高リスク", description: "中高リスク医療機器。詳細な技術文書が必要。", examples: ["人工呼吸器", "透析器", "整形外科用インプラント"], approvalPath: "詳細登録（GD-3）" },
        { name: "Class D", nameJa: "クラスD", riskLevel: "高リスク", description: "最高リスク医療機器。最も厳格な審査。", examples: ["人工心臓弁", "冠動脈ステント", "埋込み型除細動器"], approvalPath: "詳細登録（GD-3 — 臨床データ要求あり）" },
      ],
      rules: [{ id: "GHTF/IMDRF 分類規則", description: "GHTF SG1 N015:2006 の分類原則を採用。意図する用途・侵襲性・使用期間・エネルギー源等に基づく規則ベースの分類。", url: "https://www.imdrf.org/" }],
      totalProductCodes: "要確認（オマーン独自のコード体系は未公開）",
    },
    conformityAssessment: {
      overview: "DGPADC がオンラインポータル経由で申請書類を審査。Free Sale Certificate と CE/FDA 認証文書が主たる証拠書類。高リスク機器は到着2ヶ月前に技術ファイル提出が要請される。",
      routes: [
        { name: "MOH Medical Device Registration", nameJa: "MOH 医療機器登録", applicableClasses: ["全クラス"], description: "技術ファイル、CE 証明書/FDA 認可文書、ISO 13485 証明書、適合宣言書、Free Sale Certificate、取扱説明書、ラベリング等を提出。クラスに応じて GD-3 または GD-9 の要件に従う。", subtypes: [], avgReviewTime: "3〜4ヶ月（書類の完全性に依存）", fee: "要確認（MOH 料金表を参照）", url: "https://moh.gov.om/en/services/businesses/drug-safety-center/request-for-registration-of-medical-device/" },
      ],
    },
    electronicSubmission: { system: "MOH オンラインポータル", url: "https://moh.gov.om/en/services/businesses/drug-safety-center/request-for-registration-of-medical-device/", description: "MOH はオンラインポータル経由での申請を実施。高リスク機器は出荷到着2ヶ月前にポータル経由で技術ファイルを提出する必要がある。", mandatory: true },
    udi: { required: false, system: "要確認（UDI 制度の独自導入は未確認）", description: "オマーンでは現時点で IMDRF 型の UDI 制度が法的に義務化されているとの確認情報はない。国際的な UDI 要件（EU MDR、FDA）への対応は製造業者の責任。", url: null, timeline: "要確認" },
    postMarket: {
      adverseEventReporting: { system: "Drug Safety Center — 市販後監視制度", mandatory: true, url: "https://www.moh.gov.om/en/hospitals-directorates/directorates-and-centers-at-hq/drug-safety-center/", description: "Drug Safety Center が市販後監視を実施。有害事象の報告義務あり。能動的かつ体系的な情報収集プロセスを運用。" },
      recalls: { authority: "MOH / DGPADC", description: "DGPADC がリコール・FSCA を管理。MOH データベースに未登録の機器は輸入・販売・使用禁止。", url: "https://www.moh.gov.om/" },
      surveillance: "Drug Safety Center による能動的市販後監視。PMS 計画の提出が高リスク機器に要求される。",
    },
    certificateOfFreeSale: { available: true, issuingAuthority: "MOH Oman", name: "Free Sale Certificate / Certificate of Foreign Government", description: "登録申請時に原産国の規制当局からの CFS/CFG 提出が必要。米国製品は Certificate for Medical Device Not Exporting (CDNE) も受容。", processingTime: "要確認", url: "https://www.moh.gov.om/" },
    reimbursement: { system: "公的医療制度（国民に対する無料または低額の医療サービス）", authority: "MOH Oman", description: "オマーン国民は公立病院で無料または低額の医療サービスを受けられる。医療機器の調達は公立病院の入札・調達プロセスを通じて行われる。独立した医療機器償還制度に関する公開情報は限定的。", codingSystems: ["要確認"], url: "https://www.moh.gov.om/" },
    marketingRules: { authority: "MOH / DGPADC", description: "医療機器の広告・販促は MOH の規制下にある。", keyRules: ["MOH データベースに登録済みの機器のみ販売・広告可", "虚偽・誇大広告の禁止"] },
    mdsap: { status: "非参加", description: "オマーンは MDSAP プログラムに参加していない。" },
    internationalStandards: {
      iso13485: { accepted: true, notes: "ISO 13485 認証は医療機器製造業者の登録要件として必須。GD-22 で明示的に要求。" },
      iso14971: { accepted: true, notes: "リスクマネジメントの国際規格として参照。技術文書に含める必要あり。" },
      iec62304: { accepted: true, notes: "ソフトウェア医療機器に対して参照。" },
      iec60601: { accepted: true, notes: "医用電気機器の安全規格として参照。" },
      others: [],
    },
    recentDevelopments: [
      { date: "2025", title: "MOH 通達 161/2025", description: "2025年に発出された MOH 通達。医療機器規制に関する追加的な要件・手続きの更新。" },
      { date: "2020", title: "大臣令 113/2020 発出", description: "薬局業務・医薬品企業規制の執行令。医療機器の規制枠組みの法的根拠を確立。DGPADC の権限を明確化。" },
    ],
    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- PER（ペルー） ---
  // =========================================================================
  {
    code: "PER",
    country: "ペルー",
    countryEn: "Republic of Peru",
    region: "Latam",
    flag: "🇵🇪",
    legalSystemOverview: {
      type: "中央集権制（Centralized system）",
      description: "ペルーの医療機器規制は保健省（MINSA）傘下の DIGEMID（Dirección General de Medicamentos, Insumos y Drogas）が管轄する。2009年の法律第29459号（Ley de los Productos Farmacéuticos, Dispositivos Médicos y Productos Sanitarios）が主たる規制根拠。EU/GHTF の分類原則を参照した4クラス分類（Class I〜IV）を採用。全ての医療機器は Registro Sanitario（衛生登録）の取得が必要。",
      keyCharacteristics: [
        "DIGEMID による一元的な規制体制",
        "リスクベースの4クラス分類（Class I / II / III / IV）",
        "Registro Sanitario（衛生登録）が市販の前提条件",
        "ローカル登録保有者（Titular de Registro Sanitario）の指定が必須",
        "参照国（18カ国）の CFS/CFG が重要な審査資料",
        "テクノビジランス（Tecnovigilancia）による市販後監視",
      ],
    },
    authorities: [
      { name: "DIGEMID", fullName: "Dirección General de Medicamentos, Insumos y Drogas", localName: "Dirección General de Medicamentos, Insumos y Drogas", role: "医療機器の衛生登録・市販後監視・テクノビジランス", url: "https://www.digemid.minsa.gob.pe/", isPrimary: true },
      { name: "MINSA", fullName: "Ministerio de Salud del Perú", localName: "Ministerio de Salud", role: "医療政策全般・上位監督", url: "https://www.minsa.gob.pe/", isPrimary: false },
    ],
    notifiedBodies: {
      system: "なし（DIGEMID が直接審査）",
      description: "ペルーには欧州型の Notified Body 制度は存在しない。DIGEMID が直接、衛生登録の申請書類を審査する。参照国の規制当局承認・CFS が重要な審査資料。",
      bodies: [],
    },
    deviceDefinition: {
      legalDefinition: "法律第29459号に基づき、疾病の診断・治療・予防・監視・軽減等を目的とする器具・装置・機器・ソフトウェア・材料等で、主たる作用が薬理学的・免疫学的・代謝的手段によらないもの。",
      scope: "体外診断用医薬品（IVD）も規制対象。IVD は同一の分類体系（Class I〜IV）に従う。",
      notes: "GMDN/UMDN コードによる国際命名法（スペイン語表記）の適用が必要。",
    },
    primaryLaw: {
      title: "Ley N° 29459 — Ley de los Productos Farmacéuticos, Dispositivos Médicos y Productos Sanitarios",
      originalTitle: "Ley N° 29459",
      enacted: "2009",
      lastAmended: "随時改正",
      url: "https://www.digemid.minsa.gob.pe/",
      description: "ペルーにおける医薬品・医療機器・衛生製品規制の根幹法。DIGEMID の権限、衛生登録制度、分類、市販後監視等を規定。",
    },
    implementingRegulations: [
      { title: "Decreto Supremo N° 016-2011-SA（衛生登録・管理・監視規則）", date: "2011", url: "https://www.digemid.minsa.gob.pe/", description: "医薬品・医療機器・衛生製品の登録・管理・衛生監視に関する規則。分類規則・登録手続き・必要書類を詳細に規定。", category: "包括規制" },
      { title: "Decreto Supremo N° 014-2011-SA（医薬品施設規則）", date: "2011", url: "https://www.digemid.minsa.gob.pe/", description: "医薬品施設に関する規則。医療機器の流通・保管に関する施設要件を含む。", category: "施設規制" },
    ],
    relatedLaws: [
      { title: "Ley N° 26842 — Ley General de Salud", category: "一般保健法", enacted: "1997", url: "https://www.minsa.gob.pe/", relevance: "ペルーの保健制度全般を規定する基本法。医療機器を含む保健製品の規制の上位法的根拠。" },
    ],
    classification: {
      system: "4クラス分類（Class I / II / III / IV）",
      basis: "リスクベース（EU/GHTF 分類規則を参照）",
      classes: [
        { name: "Class I", nameJa: "クラスI", riskLevel: "低リスク", description: "低リスク医療機器。一般的制御で安全性を確保。", examples: ["弾性包帯", "手動外科器具", "聴診器"], approvalPath: "衛生登録（審査目標: 60暦日）" },
        { name: "Class II", nameJa: "クラスII", riskLevel: "中リスク", description: "中リスク医療機器。製造段階での特別制御が必要。", examples: ["超音波診断装置", "輸液ポンプ", "歯科用充填材"], approvalPath: "衛生登録（審査目標: 90暦日）" },
        { name: "Class III", nameJa: "クラスIII", riskLevel: "高リスク", description: "高リスク医療機器。詳細な技術文書・臨床データが必要。", examples: ["人工呼吸器", "透析器", "整形外科用インプラント"], approvalPath: "衛生登録（審査目標: 120暦日）" },
        { name: "Class IV", nameJa: "クラスIV", riskLevel: "最高リスク（クリティカル）", description: "最高リスク医療機器。最も厳格な審査。生命維持・生命支持機器等。", examples: ["人工心臓弁", "冠動脈ステント", "埋込み型除細動器"], approvalPath: "衛生登録（審査目標: 120暦日）" },
      ],
      rules: [{ id: "EU/GHTF 参照分類規則", description: "EU MDR および GHTF の分類規則を参照。意図する用途・侵襲性・使用期間・エネルギー源等に基づくルールベースの分類。", url: "https://www.digemid.minsa.gob.pe/" }],
      totalProductCodes: "GMDN/UMDN コードを使用（スペイン語表記で登録）",
    },
    conformityAssessment: {
      overview: "DIGEMID が申請書類を直接審査。参照国（18カ国）の CFS/CFG、技術文書、臨床データ、製造情報等を評価。クラスに応じて審査期間・要求事項が異なる。",
      routes: [
        { name: "Inscripción de Registro Sanitario", nameJa: "衛生登録（新規登録）", applicableClasses: ["全クラス"], description: "技術文書、製品説明書、製造情報、臨床・安全性データ、QMS 文書、参照国の CFS/CFG を提出。DIGEMID が書類審査を実施。", subtypes: [], avgReviewTime: "Class I: 60日 / Class II: 90日 / Class III-IV: 120日（目標値。実績は6〜12ヶ月の場合あり）", fee: "要確認（DIGEMID 料金表を参照）", url: "https://www.digemid.minsa.gob.pe/webDigemid/registro-sanitario/dispositivos-medicos/" },
        { name: "Reinscripción de Registro Sanitario", nameJa: "衛生登録（更新）", applicableClasses: ["全クラス"], description: "登録有効期限満了前に更新申請。更新時の要件は新規登録に準じるが、市販後データの提出も求められる。", subtypes: [], avgReviewTime: "要確認", fee: "要確認", url: "https://www.digemid.minsa.gob.pe/" },
      ],
    },
    electronicSubmission: { system: "DIGEMID オンラインポータル / VUCE（Ventanilla Única de Comercio Exterior）", url: "https://www.digemid.minsa.gob.pe/", description: "DIGEMID はオンラインでの申請受付を実施。VUCE（外国貿易窓口）との連携もあり。", mandatory: false },
    udi: { required: false, system: "GMDN/UMDN コードの使用が必要（UDI 制度としては未導入）", description: "ペルーでは IMDRF 型の UDI 制度は法的に義務化されていない。ただし、登録申請時に GMDN/UMDN コード（国際命名法、スペイン語表記）の記載が必要。", url: null, timeline: "要確認" },
    postMarket: {
      adverseEventReporting: { system: "Sistema Peruano de Farmacovigilancia y Tecnovigilancia", mandatory: true, url: "https://www.digemid.minsa.gob.pe/", description: "法律第29459号および DS 016-2011-SA に基づくテクノビジランス制度。登録保有者は重篤な有害事象を DIGEMID に報告する義務がある。" },
      recalls: { authority: "DIGEMID", description: "DIGEMID がリコール・FSCA を管理。登録保有者はリコール実施時に DIGEMID に通知義務。", url: "https://www.digemid.minsa.gob.pe/" },
      surveillance: "Sistema Peruano de Tecnovigilancia によるテクノビジランス（市販後監視）。能動的・受動的監視を組み合わせたシステム。",
    },
    certificateOfFreeSale: { available: true, issuingAuthority: "DIGEMID", name: "Certificado de Libre Venta / Free Sale Certificate", description: "登録申請時に参照国（18カ国: フランス、オランダ、英国、米国、カナダ、日本、スイス、ドイツ、スペイン、豪州、デンマーク、イタリア、ノルウェー、ベルギー、スウェーデン、韓国、ポルトガル、アイルランド）からの CFS/CFG 提出が必要。", processingTime: "要確認", url: "https://www.digemid.minsa.gob.pe/" },
    reimbursement: { system: "SIS（Seguro Integral de Salud）+ EsSalud + 民間保険", authority: "MINSA / EsSalud", description: "ペルーの公的医療保険は SIS（総合健康保険）と EsSalud（社会保険）の二層構造。医療機器の調達は公立病院の入札プロセスを通じて行われる。", codingSystems: ["要確認"], url: "https://www.minsa.gob.pe/" },
    marketingRules: { authority: "DIGEMID", description: "医療機器の広告・販促は DIGEMID の規制下にある。衛生登録済み機器のみの広告が原則。", keyRules: ["Registro Sanitario 取得済み機器のみ広告・販促可", "虚偽・誇大広告の禁止", "ラベリングはスペイン語で記載"] },
    mdsap: { status: "非参加", description: "ペルーは MDSAP プログラムに参加していない。" },
    internationalStandards: {
      iso13485: { accepted: true, notes: "ISO 13485 認証は QMS 証明として登録申請時に参照される。法的義務として明示されているかは要確認。" },
      iso14971: { accepted: true, notes: "リスクマネジメントの国際規格として参照。" },
      iec62304: { accepted: true, notes: "ソフトウェア医療機器に対して参照。" },
      iec60601: { accepted: true, notes: "医用電気機器の安全規格として参照。" },
      others: [],
    },
    recentDevelopments: [
      { date: "2025", title: "DIGEMID — 医療機器登録の観察事項に関する通達", description: "DIGEMID が医療機器の新規登録・更新登録の申請書類に関する観察事項への対応について通達を発出。書類の品質向上を促進。" },
    ],
    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- ECU（エクアドル） ---
  // =========================================================================
  {
    code: "ECU",
    country: "エクアドル",
    countryEn: "Republic of Ecuador",
    region: "Latam",
    flag: "🇪🇨",
    legalSystemOverview: {
      type: "中央集権制（Centralized system）",
      description: "エクアドルの医療機器規制は ARCSA（Agencia Nacional de Regulación, Control y Vigilancia Sanitaria）が管轄する。Resolution ARCSA-DE-026-2016-YMIH が医療機器の衛生登録と管理に関する主要な技術衛生規範。GHTF/IMDRF の分類原則に準拠した Class I / IIa / IIb / III の4クラス分類を採用。認知国（米国・カナダ・豪州・日本・韓国・EU）で登録済みの Class I/II 機器には簡易経路あり。",
      keyCharacteristics: [
        "ARCSA による一元的な規制体制",
        "GHTF ベースの4クラス分類（Class I / IIa / IIb / III）",
        "Resolution ARCSA-DE-026-2016-YMIH が主要な規制根拠",
        "認知国登録済み機器に対する簡易登録経路",
        "Registro Sanitario の有効期限10年",
        "UDI（IMDRF 準拠）のトレーサビリティ要件を導入",
      ],
    },
    authorities: [
      { name: "ARCSA", fullName: "Agencia Nacional de Regulación, Control y Vigilancia Sanitaria", localName: "Agencia Nacional de Regulación, Control y Vigilancia Sanitaria", role: "医療機器の衛生登録・市販後監視・施設許可・輸入管理", url: "https://www.controlsanitario.gob.ec/", isPrimary: true },
      { name: "MSP", fullName: "Ministerio de Salud Pública del Ecuador", localName: "Ministerio de Salud Pública", role: "医療政策全般・上位監督", url: "https://www.salud.gob.ec/", isPrimary: false },
    ],
    notifiedBodies: {
      system: "なし（ARCSA が直接審査）",
      description: "エクアドルには Notified Body 制度は存在しない。ARCSA が直接、衛生登録の申請書類を審査する。認知国の規制当局承認を参照。",
      bodies: [],
    },
    deviceDefinition: {
      legalDefinition: "ARCSA の技術衛生規範に基づき、疾病の診断・治療・予防・監視・軽減等を目的とする器具・装置・機器・ソフトウェア・材料等で、主たる作用が薬理学的・免疫学的・代謝的手段によらないもの。GHTF/IMDRF 定義に準拠。",
      scope: "体外診断用医薬品（IVD）も規制対象。",
      notes: "Resolution ARCSA-DE-026-2016-YMIH（2018年に ARCSA-DE-030-2018-JCGO で改正）が詳細な定義・適用範囲を規定。",
    },
    primaryLaw: {
      title: "Ley Orgánica de Salud（組織的保健法）",
      originalTitle: "Ley Orgánica de Salud",
      enacted: "2006",
      lastAmended: "随時改正",
      url: "https://www.salud.gob.ec/",
      description: "エクアドルにおける保健制度全般を規定する基本法。医療機器を含む保健製品の規制の上位法的根拠。",
    },
    implementingRegulations: [
      { title: "Resolution ARCSA-DE-026-2016-YMIH（医療機器の衛生登録に関する技術衛生規範）", date: "2016", url: "https://www.controlsanitario.gob.ec/documentos-vigentes/", description: "医療機器の衛生登録・管理に関する主要な技術衛生規範。分類規則・登録手続き・必要書類・施設要件を包括的に規定。", category: "包括規制" },
      { title: "Resolution ARCSA-DE-030-2018-JCGO（2016年規範の改正）", date: "2018", url: "https://www.controlsanitario.gob.ec/documentos-vigentes/", description: "2016年規範の改正。認知国（米国・カナダ・豪州・日本・韓国・EU）で登録済みの Class I/II 機器に対する簡易登録経路を導入。", category: "改正" },
      { title: "Resolution ARCSA-DE-2023-033-AKRG（2023年改正）", date: "2023", url: "https://www.controlsanitario.gob.ec/wp-content/uploads/downloads/2023/11/Resolucion_ARCSA-DE-2023-033-AKRG_reforma-a-la-Normativa-Tecnica-Sanitaria-para-el-registro-sanitario-de-Dispositivos-medicos-de-uso-humano-y-de-los-establecimientos-en-donde-se-fabrican.pdf", description: "ヒト用医療機器の衛生登録および製造施設に関する技術衛生規範の改正。", category: "改正" },
    ],
    relatedLaws: [],
    classification: {
      system: "GHTF ベースの4クラス分類（Class I / IIa / IIb / III）",
      basis: "リスクベース（GHTF/IMDRF 分類規則を参照）",
      classes: [
        { name: "Class I", nameJa: "クラスI", riskLevel: "低リスク", description: "低リスク医療機器。一般的制御で安全性を確保。", examples: ["弾性包帯", "手動外科器具", "聴診器"], approvalPath: "衛生登録（簡易経路あり: 認知国登録済み）" },
        { name: "Class IIa", nameJa: "クラスIIa", riskLevel: "低〜中リスク", description: "低中リスク医療機器。", examples: ["超音波診断装置", "歯科用充填材", "血圧計"], approvalPath: "衛生登録（簡易経路あり: 認知国登録済み）" },
        { name: "Class IIb", nameJa: "クラスIIb", riskLevel: "中〜高リスク", description: "中高リスク医療機器。詳細な技術文書が必要。", examples: ["人工呼吸器", "輸液ポンプ", "X線装置"], approvalPath: "衛生登録（標準経路）" },
        { name: "Class III", nameJa: "クラスIII", riskLevel: "高リスク", description: "最高リスク医療機器。最も厳格な審査。", examples: ["人工心臓弁", "冠動脈ステント", "埋込み型デバイス"], approvalPath: "衛生登録（詳細審査 — 臨床データ要求あり）" },
      ],
      rules: [{ id: "GHTF/IMDRF 分類規則", description: "GHTF の分類原則に基づき、意図する用途・侵襲性・使用期間・エネルギー源等でクラスを決定。ARCSA の指示に従い分類。", url: "https://www.controlsanitario.gob.ec/" }],
      totalProductCodes: "要確認（ARCSA 独自のコード体系は未公開）",
    },
    conformityAssessment: {
      overview: "ARCSA が申請書類を直接審査。CFS、CE 証明書/FDA 認可、技術文書、QMS 文書等を評価。認知国登録済みの Class I/II には簡易経路あり。",
      routes: [
        {
          name: "Inscripción de Registro Sanitario de Dispositivos Médicos", nameJa: "医療機器衛生登録（新規登録）", applicableClasses: ["全クラス"],
          description: "CFS、CE/FDA 認証文書、技術文書、製品ラベリング、QMS 文書を提出。品質・安全性・有効性の要件を満たすことで登録発行。有効期限10年。",
          subtypes: [{ name: "簡易登録（認知国登録済み Class I/II）", description: "米国・カナダ・豪州・日本・韓国・EU で登録済みの Class I / II 機器は簡易登録経路を利用可能。必要書類の一部が省略される。" }],
          avgReviewTime: "要確認（クラスにより異なる。数ヶ月〜）", fee: "要確認（ARCSA 料金表を参照）", url: "https://www.gob.ec/arcsa/tramites/inscripcion-registro-sanitario-dispositivos-medicos-fabricacion-nacional-extranjera",
        },
      ],
    },
    electronicSubmission: { system: "ARCSA オンラインポータル（gob.ec 経由）", url: "https://www.gob.ec/arcsa/tramites/inscripcion-registro-sanitario-dispositivos-medicos-fabricacion-nacional-extranjera", description: "ARCSA はオンラインでの申請受付を実施。gob.ec プラットフォーム経由で電子申請。", mandatory: true },
    udi: { required: true, system: "IMDRF 準拠の UDI トレーサビリティ要件", description: "エクアドルは IMDRF のガイドラインに基づく UDI（GTIN コード・ロット番号・有効期限・DI + PI）をトレーサビリティコードとして採用。医療機器のトレーサビリティ管理に UDI を活用。", url: "https://www.controlsanitario.gob.ec/", timeline: "導入済み（段階的実施）" },
    postMarket: {
      adverseEventReporting: { system: "ARCSA テクノビジランス制度", mandatory: true, url: "https://www.controlsanitario.gob.ec/", description: "ARCSA が市販後の安全性監視を実施。定期検査・ラボ分析による品質・安全性の検証。有害事象の報告義務あり。" },
      recalls: { authority: "ARCSA", description: "ARCSA がリコール・FSCA を管理。登録保有者はリコール実施時に ARCSA に通知義務。", url: "https://www.controlsanitario.gob.ec/" },
      surveillance: "ARCSA による定期検査・ラボ分析を含む市販後監視。強化された市販後監視体制を構築中。",
    },
    certificateOfFreeSale: { available: true, issuingAuthority: "ARCSA", name: "Certificado de Libre Venta / Free Sale Certificate", description: "登録申請時に原産国の規制当局からの CFS/CFG/Export Certificate の提出が必要。米国 FDA の Certificate of Free Sale も受容。", processingTime: "要確認", url: "https://www.controlsanitario.gob.ec/" },
    reimbursement: { system: "IESS（Instituto Ecuatoriano de Seguridad Social）+ MSP 公立病院 + 民間保険", authority: "MSP / IESS", description: "エクアドルの公的医療は MSP の公立病院と IESS（社会保険）が中心。医療機器の調達は公立病院の入札プロセスを通じて行われる。", codingSystems: ["要確認"], url: "https://www.salud.gob.ec/" },
    marketingRules: { authority: "ARCSA", description: "医療機器の広告・販促は ARCSA の規制下にある。衛生登録済み機器のみの販売・広告が原則。", keyRules: ["Registro Sanitario 取得済み機器のみ販売・広告可", "虚偽・誇大広告の禁止", "ラベリングはスペイン語で記載"] },
    mdsap: { status: "非参加", description: "エクアドルは MDSAP プログラムに参加していない。" },
    internationalStandards: {
      iso13485: { accepted: true, notes: "ISO 13485 認証は QMS 証明として参照される。BPM（Buenas Prácticas de Manufactura）の要件にも関連。" },
      iso14971: { accepted: true, notes: "リスクマネジメントの国際規格として参照。" },
      iec62304: { accepted: true, notes: "ソフトウェア医療機器に対して参照。" },
      iec60601: { accepted: true, notes: "医用電気機器の安全規格として参照。" },
      others: [],
    },
    recentDevelopments: [
      { date: "2026-01", title: "Resolution ARCSA-DE-2025-053-DASP — 医療用ガスの GMP", description: "2026年1月に官報公布。医療用ガスの製造適正基準（GMP）を規定。" },
      { date: "2025", title: "Resolution ARCSA-DE-026-2016-YMIH の代替改正案策定中", description: "ARCSA は医療機器の衛生登録・管理に関する技術衛生規範（2016年規範）の代替改正案（borrador）を策定中。条文の全面的な見直し・更新が予定されている。" },
      { date: "2023", title: "Resolution ARCSA-DE-2023-033-AKRG — 技術衛生規範の改正", description: "ヒト用医療機器の衛生登録および製造施設に関する技術衛生規範の改正を公布。" },
    ],
    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- CRI（コスタリカ） ---
  // =========================================================================
  {
    code: "CRI",
    country: "コスタリカ",
    countryEn: "Republic of Costa Rica",
    region: "Latam",
    flag: "🇨🇷",
    legalSystemOverview: {
      type: "中央集権制（Centralized system）",
      description: "コスタリカの医療機器規制は保健省（Ministerio de Salud）が管轄する。Decreto N° 34482-S（医療機器の登録・分類・輸入・管理に関する規則）が主たる規制根拠。4クラス分類（Class 1〜4）を採用。Class 1 は登録免除、Class 2 は簡易登録、Class 3/4 は詳細な審査が必要だが、US FDA 認可済み機器は簡易経路を利用可能。CONIS（Consejo Nacional de Investigación en Salud）は臨床研究の倫理審査を担当する組織。",
      keyCharacteristics: [
        "保健省（Ministerio de Salud）による規制体制",
        "Decreto 34482-S に基づく4クラス分類（Class 1 / 2 / 3 / 4）",
        "Class 1 は登録免除",
        "FDA 認可済み Class 3/4 機器には簡易経路あり",
        "ローカル登録保有者（Registration Holder）の指定が必須",
        "二段階審査（法的評価 + 技術評価）",
      ],
    },
    authorities: [
      { name: "Ministerio de Salud", fullName: "Ministerio de Salud de Costa Rica", localName: "Ministerio de Salud", role: "医療機器の衛生登録・市販後監視・施設許可・輸入管理", url: "https://www.ministeriodesalud.go.cr/", isPrimary: true },
      { name: "CONIS", fullName: "Consejo Nacional de Investigación en Salud", localName: "Consejo Nacional de Investigación en Salud", role: "臨床研究の倫理審査・承認", url: "https://www.ministeriodesalud.go.cr/", isPrimary: false },
    ],
    notifiedBodies: {
      system: "なし（保健省が直接審査）",
      description: "コスタリカには Notified Body 制度は存在しない。保健省が直接、衛生登録の申請書類を審査する。",
      bodies: [],
    },
    deviceDefinition: {
      legalDefinition: "Decreto 34482-S に基づき、疾病の診断・治療・予防・監視・軽減等を目的とする器具・装置・機器・ソフトウェア・材料等で、主たる作用が薬理学的・免疫学的・代謝的手段によらないもの。",
      scope: "体外診断用医薬品（IVD）も規制対象。",
      notes: "定義は国際的な GHTF/IMDRF の定義に概ね準拠。",
    },
    primaryLaw: {
      title: "Ley General de Salud N° 5395（一般保健法）",
      originalTitle: "Ley General de Salud N° 5395",
      enacted: "1973",
      lastAmended: "随時改正",
      url: "https://www.ministeriodesalud.go.cr/",
      description: "コスタリカにおける保健制度全般を規定する基本法。医療機器を含む保健製品の規制の上位法的根拠。",
    },
    implementingRegulations: [
      { title: "Decreto N° 34482-S（医療機器の登録・分類・輸入・管理に関する規則）", date: "2008", url: "https://www.ministeriodesalud.go.cr/", description: "医療機器の分類・登録手続き・必要書類・輸入管理を包括的に規定する主要な規則。Reglamento de Inscripción, Clasificación, Importación y Control de Equipo y Material Biomédico。", category: "包括規制" },
    ],
    relatedLaws: [
      { title: "Ley de Protección al Consumidor N° 7472", category: "消費者保護", enacted: "1994", url: "https://www.ministeriodesalud.go.cr/", relevance: "消費者保護の観点から医療機器の安全性・表示要件に関連。" },
    ],
    classification: {
      system: "4クラス分類（Class 1 / 2 / 3 / 4）",
      basis: "リスクベース",
      classes: [
        { name: "Class 1", nameJa: "クラス1", riskLevel: "低リスク", description: "低リスク医療機器。登録免除。", examples: ["弾性包帯", "手動外科器具", "聴診器"], approvalPath: "登録免除（Exento）" },
        { name: "Class 2", nameJa: "クラス2", riskLevel: "中リスク", description: "中リスク医療機器。簡易登録手続き。", examples: ["超音波診断装置", "歯科用充填材", "血圧計"], approvalPath: "簡易登録（Procedimiento simplificado）" },
        { name: "Class 3", nameJa: "クラス3", riskLevel: "高リスク", description: "高リスク医療機器。詳細な審査が必要。臨床データの提出が求められる場合あり。FDA 認可済みなら簡易経路可。", examples: ["人工呼吸器", "透析器", "整形外科用インプラント"], approvalPath: "詳細登録（FDA 認可済みなら簡易経路可）" },
        { name: "Class 4", nameJa: "クラス4", riskLevel: "最高リスク", description: "最高リスク医療機器。最も厳格な審査。FDA 認可済みなら簡易経路可。", examples: ["人工心臓弁", "冠動脈ステント", "埋込み型デバイス"], approvalPath: "詳細登録（FDA 認可済みなら簡易経路可）" },
      ],
      rules: [{ id: "Decreto 34482-S 分類規則", description: "リスクベースの分類規則。意図する用途・侵襲性・使用期間等に基づきクラスを決定。", url: "https://www.ministeriodesalud.go.cr/" }],
      totalProductCodes: "要確認",
    },
    conformityAssessment: {
      overview: "保健省が二段階審査（法的評価 + 技術評価）を実施。CFS、CE/FDA 認証文書、技術文書等を評価。FDA 認可済み Class 3/4 機器には簡易経路あり。",
      routes: [
        {
          name: "Registro Sanitario de Equipo y Material Biomédico", nameJa: "医療機器衛生登録", applicableClasses: ["Class 2 / 3 / 4（Class 1 は免除）"],
          description: "Phase A: 法的評価（提出書類の適合性確認） → Phase B: 技術評価（技術文書の審査）の二段階。CFS、技術文書、ラベリング、QMS 文書等を提出。",
          subtypes: [{ name: "簡易登録（FDA 認可済み Class 3/4）", description: "US FDA で認可済みの Class 3 / 4 機器は Class 2 と同様の簡易登録手続きを利用可能。" }],
          avgReviewTime: "Phase A: 15日（Class 1/2）〜30日（Class 3/4）、Phase B: 30日", fee: "要確認（保健省料金表を参照）", url: "https://registrelo.go.cr/",
        },
      ],
    },
    electronicSubmission: { system: "Regístrelo（保健省オンライン登録ポータル）", url: "https://registrelo.go.cr/", description: "保健省は Regístrelo プラットフォームを通じてオンラインでの衛生登録申請を受付。", mandatory: true },
    udi: { required: false, system: "要確認（UDI 制度の独自導入は未確認）", description: "コスタリカでは現時点で IMDRF 型の UDI 制度が法的に義務化されているとの確認情報はない。", url: null, timeline: "要確認" },
    postMarket: {
      adverseEventReporting: { system: "保健省テクノビジランス制度", mandatory: true, url: "https://www.ministeriodesalud.go.cr/", description: "登録保有者は医療機器に関連する有害事象を保健省に報告する義務がある。テクノビジランス（Tecnovigilancia）制度により市販後安全性を監視。" },
      recalls: { authority: "Ministerio de Salud", description: "保健省がリコール・FSCA を管理。登録保有者はリコール実施時に保健省に通知義務。", url: "https://www.ministeriodesalud.go.cr/" },
      surveillance: "保健省によるテクノビジランス（市販後監視）。詳細な PMS 制度の公開情報は限定的。",
    },
    certificateOfFreeSale: { available: true, issuingAuthority: "Ministerio de Salud", name: "Certificado de Libre Venta / Free Sale Certificate", description: "登録申請時に原産国の規制当局からの CFS 提出が必要。コスタリカの保健省も登録済み機器について CFS を発行可能。", processingTime: "要確認", url: "https://www.ministeriodesalud.go.cr/" },
    reimbursement: { system: "CCSS（Caja Costarricense de Seguro Social）+ 民間保険", authority: "CCSS", description: "コスタリカの公的医療保険は CCSS（コスタリカ社会保険公社）が運営。国民皆保険に近い制度。医療機器の調達は CCSS の入札・調達プロセスを通じて行われる。", codingSystems: ["要確認"], url: "https://www.ccss.sa.cr/" },
    marketingRules: { authority: "Ministerio de Salud", description: "医療機器の広告・販促は保健省の規制下にある。衛生登録済み機器のみの販売・広告が原則。", keyRules: ["Registro Sanitario 取得済み機器のみ販売・広告可（Class 1 は免除）", "虚偽・誇大広告の禁止", "ラベリングはスペイン語で記載"] },
    mdsap: { status: "非参加", description: "コスタリカは MDSAP プログラムに参加していない。" },
    internationalStandards: {
      iso13485: { accepted: true, notes: "ISO 13485 認証は QMS 証明として参照される。法的義務として明示されているかは要確認。" },
      iso14971: { accepted: true, notes: "リスクマネジメントの国際規格として参照。" },
      iec62304: { accepted: true, notes: "ソフトウェア医療機器に対して参照。" },
      iec60601: { accepted: true, notes: "医用電気機器の安全規格として参照。" },
      others: [],
    },
    recentDevelopments: [
      { date: "2025", title: "Regístrelo ポータルの運用拡大", description: "保健省はオンライン登録ポータル Regístrelo の機能を拡大し、医療機器の衛生登録プロセスのデジタル化を推進中。" },
    ],
    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- URY（ウルグアイ） ---
  // =========================================================================
  {
    code: "URY",
    country: "ウルグアイ",
    countryEn: "Oriental Republic of Uruguay",
    region: "Latam",
    flag: "🇺🇾",
    legalSystemOverview: {
      type: "中央集権制（Centralized system）",
      description: "ウルグアイの医療機器規制は公衆衛生省（MSP）傘下の保健製品総局（DGSP: Dirección General de Servicios de Salud / División Productos de Salud）が管轄する。Decreto 59/005（医療機器の登録・管理に関する規則）が主要な規制根拠。MERCOSUR の共通規則（GMC 決議）を国内法に取り込んでおり、MERCOSUR 整合化が進んでいる。3クラス分類（Class I / II / III）を採用し、リスクベースの登録制度を運用。",
      keyCharacteristics: [
        "MSP/DGSP による中央規制体制",
        "Decreto 59/005 に基づく3クラス分類（Class I / II / III）",
        "MERCOSUR GMC 決議の国内法化により地域整合化が進行",
        "ローカル登録保有者（Titular del Registro）の指定が必須",
        "CFS（Certificate of Free Sale）の提出が原則必要",
        "GMP（BPF: Buenas Prácticas de Fabricación）適合が求められる",
      ],
    },
    authorities: [
      { name: "MSP/DGSP", fullName: "Ministerio de Salud Pública - Dirección General de Servicios de Salud / División Productos de Salud", localName: "Ministerio de Salud Pública", role: "医療機器の登録・市販後監視・施設許可・輸入管理", url: "https://www.gub.uy/ministerio-salud-publica/", isPrimary: true },
    ],
    notifiedBodies: {
      system: "なし（MSP が直接審査）",
      description: "ウルグアイには Notified Body 制度は存在しない。MSP/DGSP が直接、登録申請書類を審査する。",
      bodies: [],
    },
    deviceDefinition: {
      legalDefinition: "Decreto 59/005 に基づき、疾病の診断・治療・予防・監視・軽減等を目的とする器具・装置・機器・ソフトウェア・材料等で、主たる作用が薬理学的・免疫学的・代謝的手段によらないもの。MERCOSUR の定義に準拠。",
      scope: "体外診断用医薬品（IVD）も規制対象。",
      notes: "定義は MERCOSUR GMC 決議に基づき、GHTF/IMDRF の定義に概ね準拠。",
    },
    primaryLaw: {
      title: "Decreto 59/005（医療機器の登録・管理に関する規則）",
      originalTitle: "Decreto 59/005 - Reglamento de Registro de Productos Médicos",
      enacted: "2005",
      lastAmended: "随時改正",
      url: "https://www.gub.uy/ministerio-salud-publica/",
      description: "ウルグアイにおける医療機器の分類・登録・輸入管理を規定する主要な規則。MERCOSUR GMC 決議を国内法に取り込んだもの。",
    },
    implementingRegulations: [
      { title: "Ordenanza 615/007（医療機器の技術要件）", date: "2007", url: "https://www.gub.uy/ministerio-salud-publica/", description: "医療機器の登録に必要な技術文書・ラベリング要件等を規定。", category: "技術要件" },
      { title: "MERCOSUR GMC 決議（各種）", date: "各年", url: "https://www.mercosur.int/", description: "MERCOSUR 加盟国間で整合化された医療機器規制。GMP、分類、登録手続き等に関する決議。", category: "地域整合化" },
    ],
    relatedLaws: [
      { title: "Ley 9.202 - Ley Orgánica de Salud Pública", category: "保健基本法", enacted: "1934", url: "https://www.gub.uy/ministerio-salud-publica/", relevance: "公衆衛生制度の基本法。MSP の権限を規定。" },
    ],
    classification: {
      system: "3クラス分類（Class I / II / III）",
      basis: "リスクベース（MERCOSUR 整合化規則に準拠）",
      classes: [
        { name: "Class I", nameJa: "クラスI", riskLevel: "低リスク", description: "低リスク医療機器。", examples: ["聴診器", "手動外科器具", "弾性包帯"], approvalPath: "登録（簡易手続き）" },
        { name: "Class II", nameJa: "クラスII", riskLevel: "中リスク", description: "中リスク医療機器。", examples: ["超音波診断装置", "歯科用充填材", "注射器"], approvalPath: "登録（標準手続き）" },
        { name: "Class III", nameJa: "クラスIII", riskLevel: "高リスク", description: "高リスク医療機器。詳細な審査が必要。", examples: ["人工心臓弁", "冠動脈ステント", "埋込み型デバイス"], approvalPath: "登録（詳細審査）" },
      ],
      rules: [{ id: "MERCOSUR GMC 分類規則", description: "MERCOSUR で整合化されたリスクベースの分類規則。意図する用途・侵襲性・使用期間等に基づきクラスを決定。", url: "https://www.mercosur.int/" }],
      totalProductCodes: "要確認",
    },
    conformityAssessment: {
      overview: "MSP/DGSP が登録申請書類を審査。CFS、技術文書、GMP 証明等を評価。MERCOSUR 加盟国での既承認は参照情報として考慮される。",
      routes: [
        {
          name: "Registro de Producto Médico", nameJa: "医療機器登録", applicableClasses: ["Class I / II / III"],
          description: "MSP/DGSP に登録申請書類を提出。技術文書、CFS、GMP 適合証明、ラベリング等を審査。リスククラスに応じた審査深度。",
          subtypes: [],
          avgReviewTime: "60〜180日（クラス・書類の完全性による）", fee: "要確認", url: "https://www.gub.uy/ministerio-salud-publica/",
        },
      ],
    },
    electronicSubmission: { system: "要確認", url: "https://www.gub.uy/ministerio-salud-publica/", description: "MSP は一部手続きのデジタル化を進めているが、完全な電子申請システムの運用状況は要確認。", mandatory: false },
    udi: { required: false, system: "要確認", description: "ウルグアイでは現時点で独自の UDI 制度が法的に義務化されているとの確認情報はない。MERCOSUR レベルでの議論は進行中。", url: null, timeline: "要確認" },
    postMarket: {
      adverseEventReporting: { system: "MSP テクノビジランス制度", mandatory: true, url: "https://www.gub.uy/ministerio-salud-publica/", description: "登録保有者は医療機器に関連する有害事象を MSP に報告する義務がある。テクノビジランス（Tecnovigilancia）制度により市販後安全性を監視。" },
      recalls: { authority: "MSP/DGSP", description: "MSP がリコール・FSCA を管理。登録保有者はリコール実施時に MSP に通知義務。", url: "https://www.gub.uy/ministerio-salud-publica/" },
      surveillance: "MSP によるテクノビジランス（市販後監視）。MERCOSUR レベルでの情報共有も行われる。",
    },
    certificateOfFreeSale: { available: true, issuingAuthority: "MSP", name: "Certificado de Libre Venta", description: "登録申請時に原産国の規制当局からの CFS 提出が必要。MSP も登録済み機器について CFS を発行可能。", processingTime: "要確認", url: "https://www.gub.uy/ministerio-salud-publica/" },
    reimbursement: { system: "FONASA（Fondo Nacional de Salud）+ 民間保険", authority: "MSP / FONASA", description: "ウルグアイの公的医療保険は FONASA が運営。国民統合健康保険制度（SNIS）を通じて医療サービスを提供。医療機器の調達は公的医療機関の入札プロセスを通じて行われる。", codingSystems: ["要確認"], url: "https://www.gub.uy/ministerio-salud-publica/" },
    marketingRules: { authority: "MSP", description: "医療機器の広告・販促は MSP の規制下にある。登録済み機器のみの販売・広告が原則。", keyRules: ["登録済み機器のみ販売・広告可", "虚偽・誇大広告の禁止", "ラベリングはスペイン語で記載"] },
    mdsap: { status: "非参加", description: "ウルグアイは MDSAP プログラムに参加していない。" },
    internationalStandards: {
      iso13485: { accepted: true, notes: "ISO 13485 認証は GMP/QMS 証明として参照される。" },
      iso14971: { accepted: true, notes: "リスクマネジメントの国際規格として参照。" },
      iec62304: { accepted: true, notes: "ソフトウェア医療機器に対して参照。" },
      iec60601: { accepted: true, notes: "医用電気機器の安全規格として参照。" },
      others: [],
    },
    recentDevelopments: [
      { date: "2025", title: "MERCOSUR 規制整合化の継続", description: "MERCOSUR 加盟国間での医療機器規制の整合化が継続的に進められている。GMP 相互承認やテクノビジランスの情報共有が強化されている。" },
    ],
    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- PRY（パラグアイ） ---
  // =========================================================================
  {
    code: "PRY",
    country: "パラグアイ",
    countryEn: "Republic of Paraguay",
    region: "Latam",
    flag: "🇵🇾",
    legalSystemOverview: {
      type: "中央集権制（Centralized system）",
      description: "パラグアイの医療機器規制は保健福祉省（MSPBS）傘下の国家衛生監視局（DNVS: Dirección Nacional de Vigilancia Sanitaria）が管轄する。Ley 1119/97（医薬品・医療機器法）および関連する規則が主要な規制根拠。MERCOSUR の共通規則を国内法に取り込んでおり、地域整合化が進行中。4クラス分類（Class I / II / III / IV）を採用。",
      keyCharacteristics: [
        "MSPBS/DNVS による中央規制体制",
        "Ley 1119/97 に基づく4クラス分類（Class I / II / III / IV）",
        "MERCOSUR GMC 決議の国内法化による地域整合化",
        "ローカル登録保有者の指定が必須",
        "CFS（Certificate of Free Sale）の提出が必要",
        "DNVS による直接審査",
      ],
    },
    authorities: [
      { name: "DNVS", fullName: "Dirección Nacional de Vigilancia Sanitaria", localName: "Dirección Nacional de Vigilancia Sanitaria", role: "医療機器の登録・市販後監視・施設許可・輸入管理", url: "https://www.dnvs.gov.py/", isPrimary: true },
      { name: "MSPBS", fullName: "Ministerio de Salud Pública y Bienestar Social", localName: "Ministerio de Salud Pública y Bienestar Social", role: "保健政策の策定・監督", url: "https://www.mspbs.gov.py/", isPrimary: false },
    ],
    notifiedBodies: {
      system: "なし（DNVS が直接審査）",
      description: "パラグアイには Notified Body 制度は存在しない。DNVS が直接、登録申請書類を審査する。",
      bodies: [],
    },
    deviceDefinition: {
      legalDefinition: "Ley 1119/97 および関連規則に基づき、疾病の診断・治療・予防・監視・軽減等を目的とする器具・装置・機器・ソフトウェア・材料等で、主たる作用が薬理学的・免疫学的・代謝的手段によらないもの。MERCOSUR の定義に準拠。",
      scope: "体外診断用医薬品（IVD）も規制対象。",
      notes: "定義は MERCOSUR GMC 決議に基づく。",
    },
    primaryLaw: {
      title: "Ley N° 1119/97（医薬品等に関する法律）",
      originalTitle: "Ley N° 1119/97 - De Productos para la Salud y Otros",
      enacted: "1997",
      lastAmended: "随時改正",
      url: "https://www.dnvs.gov.py/",
      description: "パラグアイにおける医薬品・医療機器・体外診断薬等の保健製品を規制する基本法。DNVS の権限と規制枠組みを規定。",
    },
    implementingRegulations: [
      { title: "Decreto 7.442/2006（医療機器の登録に関する規則）", date: "2006", url: "https://www.dnvs.gov.py/", description: "医療機器の分類・登録手続き・必要書類を規定する主要な施行規則。", category: "包括規制" },
      { title: "MERCOSUR GMC 決議（各種）", date: "各年", url: "https://www.mercosur.int/", description: "MERCOSUR 加盟国間で整合化された医療機器規制。", category: "地域整合化" },
    ],
    relatedLaws: [
      { title: "Código Sanitario (Ley 836/80)", category: "衛生法", enacted: "1980", url: "https://www.mspbs.gov.py/", relevance: "保健衛生制度の基本法。" },
    ],
    classification: {
      system: "4クラス分類（Class I / II / III / IV）",
      basis: "リスクベース（MERCOSUR 整合化規則に準拠）",
      classes: [
        { name: "Class I", nameJa: "クラスI", riskLevel: "低リスク", description: "低リスク医療機器。", examples: ["聴診器", "弾性包帯", "手動外科器具"], approvalPath: "登録（簡易手続き）" },
        { name: "Class II", nameJa: "クラスII", riskLevel: "中低リスク", description: "中低リスク医療機器。", examples: ["注射器", "血圧計", "歯科用充填材"], approvalPath: "登録（標準手続き）" },
        { name: "Class III", nameJa: "クラスIII", riskLevel: "中高リスク", description: "中高リスク医療機器。", examples: ["人工呼吸器", "透析器", "整形外科用インプラント"], approvalPath: "登録（詳細審査）" },
        { name: "Class IV", nameJa: "クラスIV", riskLevel: "高リスク", description: "最高リスク医療機器。最も厳格な審査。", examples: ["人工心臓弁", "冠動脈ステント", "埋込み型除細動器"], approvalPath: "登録（最も詳細な審査）" },
      ],
      rules: [{ id: "MERCOSUR GMC 分類規則", description: "MERCOSUR で整合化されたリスクベースの分類規則。", url: "https://www.mercosur.int/" }],
      totalProductCodes: "要確認",
    },
    conformityAssessment: {
      overview: "DNVS が登録申請書類を審査。CFS、技術文書、GMP 証明、ラベリング等を評価。",
      routes: [
        {
          name: "Registro Sanitario de Productos Médicos", nameJa: "医療機器衛生登録", applicableClasses: ["Class I / II / III / IV"],
          description: "DNVS に登録申請書類を提出。技術文書、CFS、GMP 適合証明、ラベリング等を審査。",
          subtypes: [],
          avgReviewTime: "60〜180日（クラス・書類の完全性による）", fee: "要確認", url: "https://www.dnvs.gov.py/",
        },
      ],
    },
    electronicSubmission: { system: "DNVS オンラインシステム", url: "https://www.dnvs.gov.py/", description: "DNVS は電子申請システムの整備を進めている。一部手続きはオンラインで対応可能。", mandatory: false },
    udi: { required: false, system: "要確認", description: "パラグアイでは現時点で独自の UDI 制度が法的に義務化されているとの確認情報はない。", url: null, timeline: "要確認" },
    postMarket: {
      adverseEventReporting: { system: "DNVS テクノビジランス制度", mandatory: true, url: "https://www.dnvs.gov.py/", description: "登録保有者は医療機器に関連する有害事象を DNVS に報告する義務がある。テクノビジランス制度により市販後安全性を監視。" },
      recalls: { authority: "DNVS", description: "DNVS がリコール・FSCA を管理。", url: "https://www.dnvs.gov.py/" },
      surveillance: "DNVS によるテクノビジランス（市販後監視）。MERCOSUR レベルでの情報共有も行われる。",
    },
    certificateOfFreeSale: { available: true, issuingAuthority: "DNVS", name: "Certificado de Libre Venta", description: "登録申請時に原産国の規制当局からの CFS 提出が必要。DNVS も登録済み機器について CFS を発行可能。", processingTime: "要確認", url: "https://www.dnvs.gov.py/" },
    reimbursement: { system: "IPS（Instituto de Previsión Social）+ 公的医療機関 + 民間保険", authority: "MSPBS / IPS", description: "パラグアイの公的医療は MSPBS 傘下の公立病院と IPS（社会保険機関）が中心。医療機器の調達は公的入札プロセスを通じて行われる。", codingSystems: ["要確認"], url: "https://www.mspbs.gov.py/" },
    marketingRules: { authority: "DNVS", description: "医療機器の広告・販促は DNVS の規制下にある。登録済み機器のみの販売・広告が原則。", keyRules: ["登録済み機器のみ販売・広告可", "虚偽・誇大広告の禁止", "ラベリングはスペイン語で記載"] },
    mdsap: { status: "非参加", description: "パラグアイは MDSAP プログラムに参加していない。" },
    internationalStandards: {
      iso13485: { accepted: true, notes: "ISO 13485 認証は GMP/QMS 証明として参照される。" },
      iso14971: { accepted: true, notes: "リスクマネジメントの国際規格として参照。" },
      iec62304: { accepted: true, notes: "ソフトウェア医療機器に対して参照。" },
      iec60601: { accepted: true, notes: "医用電気機器の安全規格として参照。" },
      others: [],
    },
    recentDevelopments: [
      { date: "2025", title: "DNVS の組織強化と MERCOSUR 整合化", description: "DNVS は医療機器規制の体制強化と MERCOSUR 加盟国間での規制整合化を継続的に推進中。" },
    ],
    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- DOM（ドミニカ共和国） ---
  // =========================================================================
  {
    code: "DOM",
    country: "ドミニカ共和国",
    countryEn: "Dominican Republic",
    region: "Latam",
    flag: "🇩🇴",
    legalSystemOverview: {
      type: "中央集権制（Centralized system）",
      description: "ドミニカ共和国の医療機器規制は公衆衛生省（MSP: Ministerio de Salud Pública）傘下の医薬品・保健製品総局（DIGEMAPS: Dirección General de Medicamentos, Alimentos y Productos Sanitarios）が管轄する。Ley General de Salud 42-01 および関連規則が主要な法的根拠。医療機器は衛生登録（Registro Sanitario）が必要。分類体系は国際的なリスクベース分類を参照。",
      keyCharacteristics: [
        "MSP/DIGEMAPS による中央規制体制",
        "Ley 42-01 に基づく衛生登録制度",
        "リスクベースの分類体系",
        "ローカル登録保有者の指定が必須",
        "CFS の提出が必要",
        "カリブ海地域の規制当局との連携",
      ],
    },
    authorities: [
      { name: "DIGEMAPS", fullName: "Dirección General de Medicamentos, Alimentos y Productos Sanitarios", localName: "Dirección General de Medicamentos, Alimentos y Productos Sanitarios", role: "医療機器の登録・市販後監視・施設許可・輸入管理", url: "https://www.msp.gob.do/", isPrimary: true },
      { name: "MSP", fullName: "Ministerio de Salud Pública", localName: "Ministerio de Salud Pública", role: "保健政策の策定・監督", url: "https://www.msp.gob.do/", isPrimary: false },
    ],
    notifiedBodies: {
      system: "なし（DIGEMAPS が直接審査）",
      description: "ドミニカ共和国には Notified Body 制度は存在しない。DIGEMAPS が直接、登録申請書類を審査する。",
      bodies: [],
    },
    deviceDefinition: {
      legalDefinition: "関連規則に基づき、疾病の診断・治療・予防・監視・軽減等を目的とする器具・装置・機器・ソフトウェア・材料等で、主たる作用が薬理学的・免疫学的・代謝的手段によらないもの。",
      scope: "体外診断用医薬品（IVD）も規制対象。",
      notes: "定義は GHTF/IMDRF の国際的定義に概ね準拠。",
    },
    primaryLaw: {
      title: "Ley General de Salud N° 42-01（一般保健法）",
      originalTitle: "Ley General de Salud N° 42-01",
      enacted: "2001",
      lastAmended: "随時改正",
      url: "https://www.msp.gob.do/",
      description: "ドミニカ共和国における保健制度全般を規定する基本法。医療機器を含む保健製品の規制の上位法的根拠。",
    },
    implementingRegulations: [
      { title: "医療機器衛生登録に関する規則", date: "各種", url: "https://www.msp.gob.do/", description: "医療機器の分類・登録手続き・必要書類を規定。DIGEMAPS が発行する技術規則・ガイダンス。", category: "包括規制" },
    ],
    relatedLaws: [
      { title: "Ley 42-01 施行規則（各種 Decreto）", category: "施行規則", enacted: "各年", url: "https://www.msp.gob.do/", relevance: "一般保健法の施行に関する詳細規定。" },
    ],
    classification: {
      system: "4クラス分類（Class I / II / III / IV）",
      basis: "リスクベース",
      classes: [
        { name: "Class I", nameJa: "クラスI", riskLevel: "低リスク", description: "低リスク医療機器。", examples: ["聴診器", "弾性包帯", "手動外科器具"], approvalPath: "登録（簡易手続き）" },
        { name: "Class II", nameJa: "クラスII", riskLevel: "中低リスク", description: "中低リスク医療機器。", examples: ["血圧計", "注射器", "超音波診断装置"], approvalPath: "登録（標準手続き）" },
        { name: "Class III", nameJa: "クラスIII", riskLevel: "中高リスク", description: "中高リスク医療機器。", examples: ["人工呼吸器", "透析器", "整形外科用インプラント"], approvalPath: "登録（詳細審査）" },
        { name: "Class IV", nameJa: "クラスIV", riskLevel: "高リスク", description: "最高リスク医療機器。", examples: ["人工心臓弁", "冠動脈ステント", "埋込み型デバイス"], approvalPath: "登録（最も詳細な審査）" },
      ],
      rules: [{ id: "DIGEMAPS 分類規則", description: "リスクベースの分類規則。意図する用途・侵襲性・使用期間等に基づきクラスを決定。", url: "https://www.msp.gob.do/" }],
      totalProductCodes: "要確認",
    },
    conformityAssessment: {
      overview: "DIGEMAPS が登録申請書類を審査。CFS、技術文書、GMP 証明、ラベリング等を評価。US FDA 承認や CE マーキングは参照情報として考慮される場合がある。",
      routes: [
        {
          name: "Registro Sanitario de Dispositivos Médicos", nameJa: "医療機器衛生登録", applicableClasses: ["Class I / II / III / IV"],
          description: "DIGEMAPS に登録申請書類を提出。技術文書、CFS、GMP 適合証明、ラベリング等を審査。",
          subtypes: [],
          avgReviewTime: "90〜180日（クラス・書類の完全性による）", fee: "要確認", url: "https://www.msp.gob.do/",
        },
      ],
    },
    electronicSubmission: { system: "要確認", url: "https://www.msp.gob.do/", description: "DIGEMAPS は手続きのデジタル化を進めているが、完全な電子申請システムの運用状況は要確認。", mandatory: false },
    udi: { required: false, system: "要確認", description: "ドミニカ共和国では現時点で独自の UDI 制度が法的に義務化されているとの確認情報はない。", url: null, timeline: "要確認" },
    postMarket: {
      adverseEventReporting: { system: "DIGEMAPS ファーマコ・テクノビジランス制度", mandatory: true, url: "https://www.msp.gob.do/", description: "登録保有者は医療機器に関連する有害事象を DIGEMAPS に報告する義務がある。" },
      recalls: { authority: "DIGEMAPS", description: "DIGEMAPS がリコール・FSCA を管理。", url: "https://www.msp.gob.do/" },
      surveillance: "DIGEMAPS によるテクノビジランス（市販後監視）。",
    },
    certificateOfFreeSale: { available: true, issuingAuthority: "DIGEMAPS", name: "Certificado de Libre Venta", description: "登録申請時に原産国の規制当局からの CFS 提出が必要。DIGEMAPS も登録済み機器について CFS を発行可能。", processingTime: "要確認", url: "https://www.msp.gob.do/" },
    reimbursement: { system: "SENASA（Seguro Nacional de Salud）+ 民間保険", authority: "SENASA / MSP", description: "ドミニカ共和国の公的医療保険は SENASA が運営。社会保障制度（Ley 87-01）に基づく医療保険制度。医療機器の調達は公的医療機関の入札プロセスを通じて行われる。", codingSystems: ["要確認"], url: "https://www.senasa.gob.do/" },
    marketingRules: { authority: "DIGEMAPS", description: "医療機器の広告・販促は DIGEMAPS の規制下にある。登録済み機器のみの販売・広告が原則。", keyRules: ["登録済み機器のみ販売・広告可", "虚偽・誇大広告の禁止", "ラベリングはスペイン語で記載"] },
    mdsap: { status: "非参加", description: "ドミニカ共和国は MDSAP プログラムに参加していない。" },
    internationalStandards: {
      iso13485: { accepted: true, notes: "ISO 13485 認証は GMP/QMS 証明として参照される。" },
      iso14971: { accepted: true, notes: "リスクマネジメントの国際規格として参照。" },
      iec62304: { accepted: true, notes: "ソフトウェア医療機器に対して参照。" },
      iec60601: { accepted: true, notes: "医用電気機器の安全規格として参照。" },
      others: [],
    },
    recentDevelopments: [
      { date: "2025", title: "医療機器規制の近代化", description: "DIGEMAPS は医療機器の衛生登録プロセスの近代化と国際的整合化を推進中。" },
    ],
    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- PAN（パナマ） ---
  // =========================================================================
  {
    code: "PAN",
    country: "パナマ",
    countryEn: "Republic of Panama",
    region: "Latam",
    flag: "🇵🇦",
    legalSystemOverview: {
      type: "中央集権制（Centralized system）",
      description: "パナマの医療機器規制は保健省（MINSA: Ministerio de Salud）傘下の国家薬事局（DNFD: Dirección Nacional de Farmacia y Drogas）が管轄する。Ley 1 de 2001（医薬品法）および Decreto Ejecutivo N° 178 de 2001（施行規則）が主要な法的根拠。医療機器は衛生登録（Registro Sanitario）が必要。リスクベースの4クラス分類を採用。FDA 承認済み・CE マーキング取得済み機器に対しては一部簡易経路あり。",
      keyCharacteristics: [
        "MINSA/DNFD による中央規制体制",
        "Ley 1 de 2001 に基づく衛生登録制度",
        "4クラス分類（Class I / II / III / IV）",
        "ローカル登録保有者の指定が必須",
        "CFS の提出が必要",
        "FDA/CE 承認済み機器には簡易経路の可能性あり",
      ],
    },
    authorities: [
      { name: "DNFD", fullName: "Dirección Nacional de Farmacia y Drogas", localName: "Dirección Nacional de Farmacia y Drogas", role: "医療機器の登録・市販後監視・施設許可・輸入管理", url: "http://www.minsa.gob.pa/", isPrimary: true },
      { name: "MINSA", fullName: "Ministerio de Salud", localName: "Ministerio de Salud", role: "保健政策の策定・監督", url: "http://www.minsa.gob.pa/", isPrimary: false },
    ],
    notifiedBodies: {
      system: "なし（DNFD が直接審査）",
      description: "パナマには Notified Body 制度は存在しない。DNFD が直接、登録申請書類を審査する。",
      bodies: [],
    },
    deviceDefinition: {
      legalDefinition: "Ley 1 de 2001 および関連規則に基づき、疾病の診断・治療・予防・監視・軽減等を目的とする器具・装置・機器・ソフトウェア・材料等で、主たる作用が薬理学的・免疫学的・代謝的手段によらないもの。",
      scope: "体外診断用医薬品（IVD）も規制対象。",
      notes: "定義は GHTF/IMDRF の国際的定義に概ね準拠。",
    },
    primaryLaw: {
      title: "Ley N° 1 de 2001（医薬品・その他保健製品に関する法律）",
      originalTitle: "Ley 1 de 10 de enero de 2001 - Sobre Medicamentos y otros Productos para la Salud Humana",
      enacted: "2001",
      lastAmended: "随時改正",
      url: "http://www.minsa.gob.pa/",
      description: "パナマにおける医薬品・医療機器等の保健製品を規制する基本法。DNFD の権限と規制枠組みを規定。",
    },
    implementingRegulations: [
      { title: "Decreto Ejecutivo N° 178 de 2001（施行規則）", date: "2001", url: "http://www.minsa.gob.pa/", description: "Ley 1 de 2001 の施行規則。医療機器の登録手続き・分類・必要書類を規定。", category: "包括規制" },
      { title: "Resolución N° 442（医療機器の登録に関する技術規則）", date: "各種", url: "http://www.minsa.gob.pa/", description: "医療機器の登録に関する追加的な技術規則・ガイダンス。", category: "技術要件" },
    ],
    relatedLaws: [
      { title: "Código Sanitario (Ley 66 de 1947)", category: "衛生法", enacted: "1947", url: "http://www.minsa.gob.pa/", relevance: "保健衛生制度の基本法。" },
    ],
    classification: {
      system: "4クラス分類（Class I / II / III / IV）",
      basis: "リスクベース",
      classes: [
        { name: "Class I", nameJa: "クラスI", riskLevel: "低リスク", description: "低リスク医療機器。", examples: ["聴診器", "弾性包帯", "手動外科器具"], approvalPath: "登録（簡易手続き）" },
        { name: "Class II", nameJa: "クラスII", riskLevel: "中低リスク", description: "中低リスク医療機器。", examples: ["血圧計", "注射器", "超音波診断装置"], approvalPath: "登録（標準手続き）" },
        { name: "Class III", nameJa: "クラスIII", riskLevel: "中高リスク", description: "中高リスク医療機器。", examples: ["人工呼吸器", "透析器", "整形外科用インプラント"], approvalPath: "登録（詳細審査）" },
        { name: "Class IV", nameJa: "クラスIV", riskLevel: "高リスク", description: "最高リスク医療機器。", examples: ["人工心臓弁", "冠動脈ステント", "埋込み型デバイス"], approvalPath: "登録（最も詳細な審査）" },
      ],
      rules: [{ id: "DNFD 分類規則", description: "リスクベースの分類規則。意図する用途・侵襲性・使用期間等に基づきクラスを決定。", url: "http://www.minsa.gob.pa/" }],
      totalProductCodes: "要確認",
    },
    conformityAssessment: {
      overview: "DNFD が登録申請書類を審査。CFS、技術文書、GMP 証明、ラベリング等を評価。FDA 承認済みや CE マーキング取得済み機器は審査の参考とされる。",
      routes: [
        {
          name: "Registro Sanitario de Dispositivos Médicos", nameJa: "医療機器衛生登録", applicableClasses: ["Class I / II / III / IV"],
          description: "DNFD に登録申請書類を提出。技術文書、CFS、GMP 適合証明、ラベリング等を審査。",
          subtypes: [{ name: "簡易登録（FDA/CE 承認済み機器）", description: "US FDA 承認済みまたは CE マーキング取得済み機器は審査が簡略化される場合がある。" }],
          avgReviewTime: "60〜180日（クラス・書類の完全性による）", fee: "要確認", url: "http://www.minsa.gob.pa/",
        },
      ],
    },
    electronicSubmission: { system: "要確認", url: "http://www.minsa.gob.pa/", description: "DNFD は手続きのデジタル化を進めているが、完全な電子申請システムの運用状況は要確認。", mandatory: false },
    udi: { required: false, system: "要確認", description: "パナマでは現時点で独自の UDI 制度が法的に義務化されているとの確認情報はない。", url: null, timeline: "要確認" },
    postMarket: {
      adverseEventReporting: { system: "DNFD テクノビジランス制度", mandatory: true, url: "http://www.minsa.gob.pa/", description: "登録保有者は医療機器に関連する有害事象を DNFD に報告する義務がある。テクノビジランス制度により市販後安全性を監視。" },
      recalls: { authority: "DNFD", description: "DNFD がリコール・FSCA を管理。", url: "http://www.minsa.gob.pa/" },
      surveillance: "DNFD によるテクノビジランス（市販後監視）。",
    },
    certificateOfFreeSale: { available: true, issuingAuthority: "DNFD", name: "Certificado de Libre Venta", description: "登録申請時に原産国の規制当局からの CFS 提出が必要。DNFD も登録済み機器について CFS を発行可能。", processingTime: "要確認", url: "http://www.minsa.gob.pa/" },
    reimbursement: { system: "CSS（Caja de Seguro Social）+ 公的医療機関 + 民間保険", authority: "MINSA / CSS", description: "パナマの公的医療は MINSA 傘下の公立病院と CSS（社会保険公社）が中心。医療機器の調達は公的入札プロセス（Panamá Compra en Línea）を通じて行われる。", codingSystems: ["要確認"], url: "http://www.css.gob.pa/" },
    marketingRules: { authority: "DNFD", description: "医療機器の広告・販促は DNFD の規制下にある。登録済み機器のみの販売・広告が原則。", keyRules: ["登録済み機器のみ販売・広告可", "虚偽・誇大広告の禁止", "ラベリングはスペイン語で記載"] },
    mdsap: { status: "非参加", description: "パナマは MDSAP プログラムに参加していない。" },
    internationalStandards: {
      iso13485: { accepted: true, notes: "ISO 13485 認証は GMP/QMS 証明として参照される。" },
      iso14971: { accepted: true, notes: "リスクマネジメントの国際規格として参照。" },
      iec62304: { accepted: true, notes: "ソフトウェア医療機器に対して参照。" },
      iec60601: { accepted: true, notes: "医用電気機器の安全規格として参照。" },
      others: [],
    },
    recentDevelopments: [
      { date: "2025", title: "医療機器規制の近代化", description: "DNFD は医療機器の衛生登録プロセスの効率化と国際的整合化を推進中。電子申請システムの整備も進行。" },
    ],
    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- GTM（グアテマラ） ---
  // =========================================================================
  {
    code: "GTM",
    country: "グアテマラ",
    countryEn: "Republic of Guatemala",
    region: "Latam",
    flag: "🇬🇹",
    legalSystemOverview: {
      type: "中央集権制（Centralized system）",
      description: "グアテマラの医療機器規制は公衆衛生社会福祉省（MSPAS: Ministerio de Salud Pública y Asistencia Social）傘下の薬務・医薬品規制局（DRPF: Departamento de Regulación y Control de Productos Farmacéuticos y Afines）が管轄する。Código de Salud (Decreto 90-97) および関連規則が主要な法的根拠。中米経済統合に伴い RTCA（中米技術規則）も適用。医療機器は衛生登録が必要。",
      keyCharacteristics: [
        "MSPAS/DRPF による中央規制体制",
        "Código de Salud (Decreto 90-97) に基づく衛生登録制度",
        "RTCA（中米技術規則）の適用による地域整合化",
        "ローカル登録保有者の指定が必須",
        "CFS の提出が必要",
        "FDA/CE 承認は審査の参考情報として考慮",
      ],
    },
    authorities: [
      { name: "MSPAS/DRPF", fullName: "Ministerio de Salud Pública y Asistencia Social - Departamento de Regulación y Control de Productos Farmacéuticos y Afines", localName: "DRPF", role: "医療機器の登録・市販後監視・施設許可・輸入管理", url: "https://www.mspas.gob.gt/", isPrimary: true },
    ],
    notifiedBodies: {
      system: "なし（DRPF が直接審査）",
      description: "グアテマラには Notified Body 制度は存在しない。DRPF が直接、登録申請書類を審査する。",
      bodies: [],
    },
    deviceDefinition: {
      legalDefinition: "関連規則に基づき、疾病の診断・治療・予防・監視・軽減等を目的とする器具・装置・機器・ソフトウェア・材料等で、主たる作用が薬理学的・免疫学的・代謝的手段によらないもの。RTCA の定義に準拠。",
      scope: "体外診断用医薬品（IVD）も規制対象。",
      notes: "定義は RTCA（中米技術規則）に基づき、GHTF/IMDRF の定義に概ね準拠。",
    },
    primaryLaw: {
      title: "Código de Salud (Decreto 90-97)（保健法典）",
      originalTitle: "Código de Salud - Decreto 90-97",
      enacted: "1997",
      lastAmended: "随時改正",
      url: "https://www.mspas.gob.gt/",
      description: "グアテマラにおける保健制度全般を規定する基本法。医療機器を含む保健製品の規制の上位法的根拠。",
    },
    implementingRegulations: [
      { title: "RTCA 11.03.56:09（医療機器の登録に関する中米技術規則）", date: "2009", url: "https://www.mspas.gob.gt/", description: "中米経済統合の枠組みで策定された医療機器の衛生登録に関する技術規則。中米各国で共通適用。", category: "地域整合化" },
      { title: "Acuerdo Gubernativo（各種政府令）", date: "各年", url: "https://www.mspas.gob.gt/", description: "医療機器の登録・分類・輸入管理に関する追加的な政府令。", category: "包括規制" },
    ],
    relatedLaws: [
      { title: "Ley del Organismo Ejecutivo", category: "行政組織法", enacted: "1997", url: "https://www.mspas.gob.gt/", relevance: "MSPAS の組織と権限を規定。" },
    ],
    classification: {
      system: "4クラス分類（Class I / II / III / IV）",
      basis: "リスクベース（RTCA に準拠）",
      classes: [
        { name: "Class I", nameJa: "クラスI", riskLevel: "低リスク", description: "低リスク医療機器。", examples: ["聴診器", "弾性包帯", "手動外科器具"], approvalPath: "登録（簡易手続き）" },
        { name: "Class II", nameJa: "クラスII", riskLevel: "中低リスク", description: "中低リスク医療機器。", examples: ["血圧計", "注射器", "超音波診断装置"], approvalPath: "登録（標準手続き）" },
        { name: "Class III", nameJa: "クラスIII", riskLevel: "中高リスク", description: "中高リスク医療機器。", examples: ["人工呼吸器", "透析器", "整形外科用インプラント"], approvalPath: "登録（詳細審査）" },
        { name: "Class IV", nameJa: "クラスIV", riskLevel: "高リスク", description: "最高リスク医療機器。", examples: ["人工心臓弁", "冠動脈ステント", "埋込み型デバイス"], approvalPath: "登録（最も詳細な審査）" },
      ],
      rules: [{ id: "RTCA 分類規則", description: "RTCA に基づくリスクベースの分類規則。意図する用途・侵襲性・使用期間等に基づきクラスを決定。", url: "https://www.mspas.gob.gt/" }],
      totalProductCodes: "要確認",
    },
    conformityAssessment: {
      overview: "DRPF が登録申請書類を審査。CFS、技術文書、GMP 証明、ラベリング等を評価。RTCA に基づく中米共通の審査要件が適用される。",
      routes: [
        {
          name: "Registro Sanitario de Dispositivos Médicos", nameJa: "医療機器衛生登録", applicableClasses: ["Class I / II / III / IV"],
          description: "DRPF に登録申請書類を提出。RTCA に基づく技術文書、CFS、GMP 適合証明、ラベリング等を審査。",
          subtypes: [{ name: "中米統一登録（Registro Unificado Centroamericano）", description: "RTCA に基づき、1カ国での登録を他の中米諸国で認証する統一登録制度（実施状況は要確認）。" }],
          avgReviewTime: "60〜180日（クラス・書類の完全性による）", fee: "要確認", url: "https://www.mspas.gob.gt/",
        },
      ],
    },
    electronicSubmission: { system: "要確認", url: "https://www.mspas.gob.gt/", description: "DRPF は手続きのデジタル化を進めているが、完全な電子申請システムの運用状況は要確認。", mandatory: false },
    udi: { required: false, system: "要確認", description: "グアテマラでは現時点で独自の UDI 制度が法的に義務化されているとの確認情報はない。", url: null, timeline: "要確認" },
    postMarket: {
      adverseEventReporting: { system: "DRPF テクノビジランス制度", mandatory: true, url: "https://www.mspas.gob.gt/", description: "登録保有者は医療機器に関連する有害事象を DRPF に報告する義務がある。テクノビジランス制度により市販後安全性を監視。" },
      recalls: { authority: "DRPF", description: "DRPF がリコール・FSCA を管理。", url: "https://www.mspas.gob.gt/" },
      surveillance: "DRPF によるテクノビジランス（市販後監視）。中米地域での情報共有も進行中。",
    },
    certificateOfFreeSale: { available: true, issuingAuthority: "DRPF", name: "Certificado de Libre Venta", description: "登録申請時に原産国の規制当局からの CFS 提出が必要。DRPF も登録済み機器について CFS を発行可能。", processingTime: "要確認", url: "https://www.mspas.gob.gt/" },
    reimbursement: { system: "IGSS（Instituto Guatemalteco de Seguridad Social）+ 公的医療機関 + 民間保険", authority: "MSPAS / IGSS", description: "グアテマラの公的医療は MSPAS 傘下の公立病院と IGSS（社会保険機関）が中心。医療機器の調達は公的入札プロセス（Guatecompras）を通じて行われる。", codingSystems: ["要確認"], url: "https://www.igss.gob.gt/" },
    marketingRules: { authority: "DRPF", description: "医療機器の広告・販促は DRPF の規制下にある。登録済み機器のみの販売・広告が原則。", keyRules: ["登録済み機器のみ販売・広告可", "虚偽・誇大広告の禁止", "ラベリングはスペイン語で記載"] },
    mdsap: { status: "非参加", description: "グアテマラは MDSAP プログラムに参加していない。" },
    internationalStandards: {
      iso13485: { accepted: true, notes: "ISO 13485 認証は GMP/QMS 証明として参照される。" },
      iso14971: { accepted: true, notes: "リスクマネジメントの国際規格として参照。" },
      iec62304: { accepted: true, notes: "ソフトウェア医療機器に対して参照。" },
      iec60601: { accepted: true, notes: "医用電気機器の安全規格として参照。" },
      others: [],
    },
    recentDevelopments: [
      { date: "2025", title: "RTCA に基づく中米規制整合化の推進", description: "グアテマラは RTCA（中米技術規則）に基づく医療機器規制の整合化を中米各国と共同で推進中。統一登録制度の実効化に向けた議論が続く。" },
    ],
    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- HND（ホンジュラス） ---
  // =========================================================================
  {
    code: "HND",
    country: "ホンジュラス",
    countryEn: "Republic of Honduras",
    region: "Latam",
    flag: "🇭🇳",
    legalSystemOverview: {
      type: "中央集権制（Centralized system）",
      description: "ホンジュラスの医療機器規制は ARSA（Agencia de Regulación Sanitaria）が管轄する。ARSA は2014年に設立された独立規制機関で、旧来の保健省薬事局の機能を引き継いだ。Ley Marco del Sistema de Protección Social および関連規則が法的根拠。RTCA（中米技術規則）も適用。医療機器は衛生登録が必要で、リスクベースの分類を採用。",
      keyCharacteristics: [
        "ARSA による独立規制機関としての管理",
        "RTCA（中米技術規則）の適用による地域整合化",
        "4クラス分類（Class I / II / III / IV）",
        "ローカル登録保有者の指定が必須",
        "CFS の提出が必要",
        "FDA/CE 承認は審査の参考情報として考慮",
      ],
    },
    authorities: [
      { name: "ARSA", fullName: "Agencia de Regulación Sanitaria", localName: "Agencia de Regulación Sanitaria", role: "医療機器の登録・市販後監視・施設許可・輸入管理", url: "https://www.arsa.gob.hn/", isPrimary: true },
      { name: "SESAL", fullName: "Secretaría de Salud", localName: "Secretaría de Salud", role: "保健政策の策定・監督", url: "https://www.salud.gob.hn/", isPrimary: false },
    ],
    notifiedBodies: {
      system: "なし（ARSA が直接審査）",
      description: "ホンジュラスには Notified Body 制度は存在しない。ARSA が直接、登録申請書類を審査する。",
      bodies: [],
    },
    deviceDefinition: {
      legalDefinition: "関連規則に基づき、疾病の診断・治療・予防・監視・軽減等を目的とする器具・装置・機器・ソフトウェア・材料等で、主たる作用が薬理学的・免疫学的・代謝的手段によらないもの。RTCA の定義に準拠。",
      scope: "体外診断用医薬品（IVD）も規制対象。",
      notes: "定義は RTCA（中米技術規則）に基づき、GHTF/IMDRF の定義に概ね準拠。",
    },
    primaryLaw: {
      title: "Ley para la creación de ARSA（ARSA 設立法）",
      originalTitle: "Decreto Legislativo N° 6-2014 - Ley para la creación de la Agencia de Regulación Sanitaria",
      enacted: "2014",
      lastAmended: "随時改正",
      url: "https://www.arsa.gob.hn/",
      description: "ARSA を独立規制機関として設立する法律。医薬品・医療機器・食品等の衛生規制に関する権限を ARSA に付与。",
    },
    implementingRegulations: [
      { title: "RTCA 11.03.56:09（医療機器の登録に関する中米技術規則）", date: "2009", url: "https://www.arsa.gob.hn/", description: "中米経済統合の枠組みで策定された医療機器の衛生登録に関する技術規則。中米各国で共通適用。", category: "地域整合化" },
      { title: "Reglamento de Dispositivos Médicos（医療機器規則）", date: "各種", url: "https://www.arsa.gob.hn/", description: "ARSA が発行する医療機器の登録・分類・輸入管理に関する規則。", category: "包括規制" },
    ],
    relatedLaws: [
      { title: "Código de Salud", category: "保健法典", enacted: "1991", url: "https://www.salud.gob.hn/", relevance: "ホンジュラスの保健制度の基本法。" },
    ],
    classification: {
      system: "4クラス分類（Class I / II / III / IV）",
      basis: "リスクベース（RTCA に準拠）",
      classes: [
        { name: "Class I", nameJa: "クラスI", riskLevel: "低リスク", description: "低リスク医療機器。", examples: ["聴診器", "弾性包帯", "手動外科器具"], approvalPath: "登録（簡易手続き）" },
        { name: "Class II", nameJa: "クラスII", riskLevel: "中低リスク", description: "中低リスク医療機器。", examples: ["血圧計", "注射器", "超音波診断装置"], approvalPath: "登録（標準手続き）" },
        { name: "Class III", nameJa: "クラスIII", riskLevel: "中高リスク", description: "中高リスク医療機器。", examples: ["人工呼吸器", "透析器", "整形外科用インプラント"], approvalPath: "登録（詳細審査）" },
        { name: "Class IV", nameJa: "クラスIV", riskLevel: "高リスク", description: "最高リスク医療機器。", examples: ["人工心臓弁", "冠動脈ステント", "埋込み型デバイス"], approvalPath: "登録（最も詳細な審査）" },
      ],
      rules: [{ id: "RTCA 分類規則", description: "RTCA に基づくリスクベースの分類規則。意図する用途・侵襲性・使用期間等に基づきクラスを決定。", url: "https://www.arsa.gob.hn/" }],
      totalProductCodes: "要確認",
    },
    conformityAssessment: {
      overview: "ARSA が登録申請書類を審査。CFS、技術文書、GMP 証明、ラベリング等を評価。RTCA に基づく中米共通の審査要件が適用される。",
      routes: [
        {
          name: "Registro Sanitario de Dispositivos Médicos", nameJa: "医療機器衛生登録", applicableClasses: ["Class I / II / III / IV"],
          description: "ARSA に登録申請書類を提出。RTCA に基づく技術文書、CFS、GMP 適合証明、ラベリング等を審査。",
          subtypes: [{ name: "中米統一登録（Registro Unificado Centroamericano）", description: "RTCA に基づき、1カ国での登録を他の中米諸国で認証する統一登録制度（実施状況は要確認）。" }],
          avgReviewTime: "60〜180日（クラス・書類の完全性による）", fee: "要確認", url: "https://www.arsa.gob.hn/",
        },
      ],
    },
    electronicSubmission: { system: "ARSA オンラインシステム", url: "https://www.arsa.gob.hn/", description: "ARSA はオンラインでの申請受付を一部開始。完全な電子申請システムの整備状況は要確認。", mandatory: false },
    udi: { required: false, system: "要確認", description: "ホンジュラスでは現時点で独自の UDI 制度が法的に義務化されているとの確認情報はない。", url: null, timeline: "要確認" },
    postMarket: {
      adverseEventReporting: { system: "ARSA テクノビジランス制度", mandatory: true, url: "https://www.arsa.gob.hn/", description: "登録保有者は医療機器に関連する有害事象を ARSA に報告する義務がある。テクノビジランス制度により市販後安全性を監視。" },
      recalls: { authority: "ARSA", description: "ARSA がリコール・FSCA を管理。", url: "https://www.arsa.gob.hn/" },
      surveillance: "ARSA によるテクノビジランス（市販後監視）。中米地域での情報共有も進行中。",
    },
    certificateOfFreeSale: { available: true, issuingAuthority: "ARSA", name: "Certificado de Libre Venta", description: "登録申請時に原産国の規制当局からの CFS 提出が必要。ARSA も登録済み機器について CFS を発行可能。", processingTime: "要確認", url: "https://www.arsa.gob.hn/" },
    reimbursement: { system: "IHSS（Instituto Hondureño de Seguridad Social）+ 公的医療機関 + 民間保険", authority: "SESAL / IHSS", description: "ホンジュラスの公的医療は SESAL 傘下の公立病院と IHSS（社会保険機関）が中心。医療機器の調達は公的入札プロセス（Honducompras）を通じて行われる。", codingSystems: ["要確認"], url: "https://www.ihss.gob.hn/" },
    marketingRules: { authority: "ARSA", description: "医療機器の広告・販促は ARSA の規制下にある。登録済み機器のみの販売・広告が原則。", keyRules: ["登録済み機器のみ販売・広告可", "虚偽・誇大広告の禁止", "ラベリングはスペイン語で記載"] },
    mdsap: { status: "非参加", description: "ホンジュラスは MDSAP プログラムに参加していない。" },
    internationalStandards: {
      iso13485: { accepted: true, notes: "ISO 13485 認証は GMP/QMS 証明として参照される。" },
      iso14971: { accepted: true, notes: "リスクマネジメントの国際規格として参照。" },
      iec62304: { accepted: true, notes: "ソフトウェア医療機器に対して参照。" },
      iec60601: { accepted: true, notes: "医用電気機器の安全規格として参照。" },
      others: [],
    },
    recentDevelopments: [
      { date: "2025", title: "ARSA の体制強化と中米整合化", description: "ARSA は独立規制機関としての体制強化を継続。RTCA に基づく中米規制整合化の推進と、電子申請システムの整備に注力中。" },
    ],
    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- BGD（バングラデシュ） ---
  // =========================================================================
  {
    code: "BGD",
    country: "バングラデシュ",
    countryEn: "People's Republic of Bangladesh",
    region: "ASPAC",
    flag: "🇧🇩",
    legalSystemOverview: {
      type: "議会制共和制（Parliamentary Republic）",
      description: "バングラデシュの医療機器規制は医薬品管理局（DGDA: Directorate General of Drug Administration）が所管する。従来は Drugs Act 1940 および Drugs (Control) Ordinance 1982 の下で医薬品と同様に規制されてきたが、医療機器固有の規制枠組みは発展途上段階にある。2023年の Medical Devices Act 2023 により、医療機器の定義・分類・登録・市販後監視を包括的にカバーする法的基盤が整備されつつある。WHOおよびIMDRF枠組みとの整合を目指している。",
      keyCharacteristics: [
        "DGDA が医療機器規制を統括",
        "Medical Devices Act 2023 により包括的枠組みを整備中",
        "リスクベース4クラス分類（A / B / C / D）を導入予定",
        "輸入品は DGDA への登録・輸入許可が必要",
        "規制制度は発展途上、実施規則の整備が進行中",
        "WHO / IMDRF 枠組みとの整合を推進",
      ],
    },
    authorities: [
      { name: "DGDA", fullName: "Directorate General of Drug Administration", localName: "ওষুধ প্রশাসন অধিদপ্তর", role: "医療機器の登録・輸入許可・市販後監視・品質管理を統括", url: "https://www.dgda.gov.bd/", isPrimary: true },
      { name: "MOH&FW", fullName: "Ministry of Health and Family Welfare", localName: "স্বাস্থ্য ও পরিবার কল্যাণ মন্ত্রণালয়", role: "医療政策全般、法令の策定・監督", url: "https://mohfw.gov.bd/", isPrimary: false },
    ],
    notifiedBodies: { system: "該当なし（DGDA 直接審査）", description: "欧州型の Notified Body 制度は存在しない。DGDA が直接登録審査を行う。参照国認可（CE、FDA等）の保有が審査で有利に働く。", bodies: [] },
    deviceDefinition: { legalDefinition: "Medical Devices Act 2023 に基づく定義（IMDRF定義に準拠）。疾病の診断・治療・予防・監視等を目的とする器具・装置・機器・ソフトウェア等で、薬理学的・免疫学的・代謝的手段によらないもの。", scope: "IVDを含む。SaMDに関する詳細規定は要確認。", notes: "従来は Drugs Act 1940 の「drug」定義に一部の機器が含まれていた。Medical Devices Act 2023 で独立した定義を導入。" },
    primaryLaw: { title: "Medical Devices Act 2023（医療機器法）", originalTitle: "মেডিকেল ডিভাইস আইন ২০২৩", enacted: "2023", lastAmended: "2023", url: "https://www.dgda.gov.bd/", description: "バングラデシュ初の医療機器専用法。医療機器の定義、分類、登録制度、市販後監視、罰則等を規定。実施規則の策定が進行中。" },
    implementingRegulations: [
      { title: "Medical Devices Rules（策定中）", date: "要確認", url: "https://www.dgda.gov.bd/", description: "Medical Devices Act 2023 の実施規則。分類基準、登録手続きの詳細、技術文書要件等を規定予定。策定中。", category: "登録手続き" },
      { title: "Drugs (Control) Ordinance 1982", date: "1982", url: "https://www.dgda.gov.bd/", description: "従来の医薬品・医療機器規制の法的根拠。医療機器専用法の完全施行まで部分的に適用。", category: "従来規制" },
    ],
    relatedLaws: [
      { title: "Drugs Act 1940", category: "医薬品規制", enacted: "1940", url: "https://www.dgda.gov.bd/", relevance: "医薬品規制の基本法。医療機器の一部が「drug」として規制されてきた歴史的経緯。" },
    ],
    classification: {
      system: "リスクベース4クラス分類（IMDRF整合・導入中）",
      basis: "Medical Devices Act 2023 に基づくIMDRF準拠の分類。実施規則で詳細を規定予定。",
      classes: [
        { name: "Class A", nameJa: "クラスA（低リスク）", riskLevel: "低", description: "低リスク医療機器。", examples: ["ガーゼ", "聴診器", "手術用手袋", "松葉杖"], approvalPath: "登録（簡易審査）— DGDA" },
        { name: "Class B", nameJa: "クラスB（中低リスク）", riskLevel: "中低", description: "中低リスク医療機器。", examples: ["超音波診断装置", "注射針", "歯科用材料"], approvalPath: "登録 — DGDA" },
        { name: "Class C", nameJa: "クラスC（中高リスク）", riskLevel: "中高", description: "中高リスク医療機器。", examples: ["人工呼吸器", "透析器", "骨接合プレート"], approvalPath: "登録（技術審査）— DGDA" },
        { name: "Class D", nameJa: "クラスD（高リスク）", riskLevel: "高", description: "高リスク医療機器。", examples: ["心臓ペースメーカー", "人工心臓弁", "冠動脈ステント"], approvalPath: "登録（詳細審査）— DGDA" },
      ],
      rules: ["IMDRF分類ルールに基づく（実施規則で詳細規定予定）", "IVDの分類基準は要確認", "従来はDGDAの個別判断で分類"],
      totalProductCodes: null,
    },
    conformityAssessment: {
      overview: "全医療機器はDGDAへの登録が必要。Medical Devices Act 2023 の実施規則が完全に整備されるまでは、既存のDGDA登録手続きに基づく。参照国認可（CE、FDA等）の保有が審査で考慮される。外国メーカーはローカル代理人の指定が必要。",
      routes: [
        { name: "DGDA Device Registration", nameJa: "DGDA 医療機器登録", applicableClasses: ["Class A", "Class B", "Class C", "Class D"], description: "DGDAに申請書類一式を提出。技術文書、参照国認可証明、品質管理証明書等が必要。", subtypes: ["新規登録", "変更登録", "更新"], avgReviewTime: "要確認（数ヶ月〜）", fee: "DGDA規定による", url: "https://www.dgda.gov.bd/" },
      ],
    },
    electronicSubmission: { system: "DGDA オンラインポータル（段階的導入中）", url: "https://www.dgda.gov.bd/", description: "DGDAはオンライン申請システムを段階的に導入中。一部の手続きは書面提出が必要。", mandatory: false },
    udi: { required: false, system: "未導入", description: "独自のUDI制度は2026年時点で未導入。Medical Devices Act 2023 にUDI関連の条項があるが、実施時期は未定。", url: null, timeline: "未定" },
    postMarket: {
      adverseEventReporting: { system: "有害事象報告制度（DGDA）", mandatory: true, url: "https://www.dgda.gov.bd/", description: "Medical Devices Act 2023 に基づき有害事象報告が義務化。報告期限・様式等の詳細は実施規則で規定予定。" },
      recalls: { authority: "DGDA", description: "DGDAの命令または自主リコール。リコール手続きの詳細は実施規則で規定予定。", url: "https://www.dgda.gov.bd/" },
      surveillance: "DGDAによる市販後監視。制度は発展途上。WHO支援の下で市販後監視体制の強化を推進中。",
    },
    certificateOfFreeSale: { available: false, issuingAuthority: null, name: null, description: "バングラデシュからのCFS発行に関する公式制度は要確認。輸入登録時に製造国のCFS提出が求められる。", processingTime: null, url: null },
    reimbursement: { system: "政府主導型医療制度（公的医療機関 + 民間セクター）", authority: "保健家族福祉省（MOH&FW）", description: "公的医療機関での基本的な医療は無料で提供される。医療機器の個別償還制度は未整備。公共調達を通じた供給が中心。", codingSystems: [], url: "https://mohfw.gov.bd/" },
    marketingRules: { authority: "DGDA", description: "医療機器広告に関する詳細法規は要確認。虚偽・誇大広告は一般法により禁止。", keyRules: ["虚偽・誇大広告の禁止", "未登録機器の広告禁止"] },
    mdsap: { status: "非参加", description: "バングラデシュはMDSAPに参加していない。" },
    internationalStandards: {
      iso13485: { accepted: true, notes: "ISO 13485認証は登録時にQMS証明として参照される。法的義務化の状況は要確認。" },
      iso14971: { accepted: true, notes: "リスクマネジメントの国際規格として参照。" },
      iec62304: { accepted: false, notes: "独自の要求は要確認。" },
      iec60601: { accepted: true, notes: "医用電気機器の安全規格として参照。" },
      others: [],
    },
    recentDevelopments: [
      { date: "2023", title: "Medical Devices Act 2023 制定", description: "バングラデシュ初の医療機器専用法が制定。リスクベース分類、登録制度、市販後監視の法的基盤を整備。" },
      { date: "2024-2025", title: "実施規則の策定作業", description: "Medical Devices Act 2023 の実施規則をWHO支援の下で策定中。" },
    ],
    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- LKA（スリランカ） ---
  // =========================================================================
  {
    code: "LKA",
    country: "スリランカ",
    countryEn: "Democratic Socialist Republic of Sri Lanka",
    region: "ASPAC",
    flag: "🇱🇰",
    legalSystemOverview: {
      type: "議会制共和制（Parliamentary Republic）",
      description: "スリランカの医療機器規制は国家医薬品規制庁（NMRA: National Medicines Regulatory Authority）が所管する。NMRA Act No. 5 of 2015 により医療機器が正式に規制対象に含められた。リスクベース分類を導入し、IMDRF枠組みとの整合を推進中。規制制度は近年急速に整備が進んでいるが、実施面では段階的な運用が続いている。",
      keyCharacteristics: [
        "NMRA が医療機器規制を統括",
        "NMRA Act No. 5 of 2015 が法的根拠",
        "リスクベース4クラス分類（A / B / C / D）を導入",
        "輸入品は NMRA への登録が必要",
        "WHO / IMDRF 枠組みとの整合を推進",
        "参照国認可（CE、FDA等）を審査で考慮",
      ],
    },
    authorities: [
      { name: "NMRA", fullName: "National Medicines Regulatory Authority", localName: "ජාතික ඖෂධ නියාමන අධිකාරිය", role: "医療機器の登録・輸入許可・市販後監視・品質管理を統括", url: "https://www.nmra.gov.lk/", isPrimary: true },
      { name: "MOH Sri Lanka", fullName: "Ministry of Health — Sri Lanka", localName: "සෞඛ්‍ය අමාත්‍යාංශය", role: "医療政策全般・法令の策定・監督", url: "https://www.health.gov.lk/", isPrimary: false },
    ],
    notifiedBodies: { system: "該当なし（NMRA 直接審査）", description: "欧州型の Notified Body 制度は存在しない。NMRA が直接登録審査を行う。参照国認可（CE、FDA等）が審査において重要な参考情報となる。", bodies: [] },
    deviceDefinition: { legalDefinition: "NMRA Act No. 5 of 2015 に基づく定義。疾病の診断・治療・予防・監視等を目的とする器具・装置・機器・ソフトウェア等で、薬理学的・免疫学的・代謝的手段によらないもの（IMDRF定義に準拠）。", scope: "IVDを含む。SaMDに関する詳細規定は要確認。", notes: "NMRA Act により医療機器が医薬品と区別して定義・規制される枠組みが確立。" },
    primaryLaw: { title: "NMRA Act No. 5 of 2015（国家医薬品規制庁法）", originalTitle: null, enacted: "2015", lastAmended: "要確認", url: "https://www.nmra.gov.lk/", description: "NMRAの設立根拠法。医薬品・医療機器の登録、品質管理、市販後監視に関する包括的な法的枠組みを規定。" },
    implementingRegulations: [
      { title: "Medical Devices Regulations（NMRA発出）", date: "要確認", url: "https://www.nmra.gov.lk/", description: "医療機器の分類基準、登録手続き、技術文書要件等を規定する実施規則。", category: "登録手続き" },
      { title: "NMRA Guidelines for Medical Device Registration", date: "要確認", url: "https://www.nmra.gov.lk/", description: "医療機器登録に必要な書類・手続きの詳細ガイダンス。", category: "ガイダンス" },
    ],
    relatedLaws: [
      { title: "Consumer Affairs Authority Act No. 9 of 2003", category: "消費者保護", enacted: "2003", url: null, relevance: "消費者保護の観点から医療機器の安全性にも関連。" },
    ],
    classification: {
      system: "リスクベース4クラス分類（IMDRF整合）",
      basis: "NMRA規則に基づくIMDRF準拠のリスクベース分類。",
      classes: [
        { name: "Class A", nameJa: "クラスA（低リスク）", riskLevel: "低", description: "低リスク医療機器。", examples: ["ガーゼ", "聴診器", "手術用手袋"], approvalPath: "登録（簡易審査）— NMRA" },
        { name: "Class B", nameJa: "クラスB（中低リスク）", riskLevel: "中低", description: "中低リスク医療機器。", examples: ["超音波診断装置", "注射針", "歯科用材料"], approvalPath: "登録 — NMRA" },
        { name: "Class C", nameJa: "クラスC（中高リスク）", riskLevel: "中高", description: "中高リスク医療機器。", examples: ["人工呼吸器", "透析器", "骨接合プレート"], approvalPath: "登録（技術審査）— NMRA" },
        { name: "Class D", nameJa: "クラスD（高リスク）", riskLevel: "高", description: "高リスク医療機器。", examples: ["心臓ペースメーカー", "人工心臓弁", "冠動脈ステント"], approvalPath: "登録（詳細審査）— NMRA" },
      ],
      rules: ["IMDRF分類ルールに基づく", "IVDの分類基準はNMRA規則で規定", "参照国での分類を参考"],
      totalProductCodes: null,
    },
    conformityAssessment: {
      overview: "全医療機器はNMRAへの登録が必要。参照国認可（CE、FDA等）の保有が審査を円滑化する。外国メーカーはローカル代理人の指定が必要。",
      routes: [
        { name: "NMRA Device Registration", nameJa: "NMRA 医療機器登録", applicableClasses: ["Class A", "Class B", "Class C", "Class D"], description: "NMRAに申請書類一式を提出。技術文書、参照国認可証明、ISO 13485証明書等が必要。", subtypes: ["新規登録", "変更登録", "更新"], avgReviewTime: "要確認（数ヶ月〜）", fee: "NMRA規定による", url: "https://www.nmra.gov.lk/" },
      ],
    },
    electronicSubmission: { system: "NMRA オンラインシステム（段階的導入中）", url: "https://www.nmra.gov.lk/", description: "NMRAはオンライン申請を段階的に導入中。", mandatory: false },
    udi: { required: false, system: "未導入", description: "独自のUDI制度は2026年時点で未導入。", url: null, timeline: "未定" },
    postMarket: {
      adverseEventReporting: { system: "有害事象報告制度（NMRA）", mandatory: true, url: "https://www.nmra.gov.lk/", description: "NMRAへの有害事象報告が義務付けられている。報告様式・期限の詳細は要確認。" },
      recalls: { authority: "NMRA", description: "NMRAの命令または自主リコール。", url: "https://www.nmra.gov.lk/" },
      surveillance: "NMRAによる市販後監視。WHO支援の下で体制強化を推進中。",
    },
    certificateOfFreeSale: { available: false, issuingAuthority: null, name: null, description: "スリランカからのCFS発行に関する公式制度は要確認。輸入登録時に製造国のCFS提出が求められる。", processingTime: null, url: null },
    reimbursement: { system: "政府主導型医療制度（公的医療機関 + 民間セクター）", authority: "保健省（MOH）", description: "公的医療機関での医療は基本的に無料。医療機器の個別償還制度は未整備。公共調達が中心。", codingSystems: [], url: "https://www.health.gov.lk/" },
    marketingRules: { authority: "NMRA", description: "医療機器広告に関する詳細法規は要確認。虚偽・誇大広告は一般法により禁止。", keyRules: ["虚偽・誇大広告の禁止", "未登録機器の広告禁止"] },
    mdsap: { status: "非参加", description: "スリランカはMDSAPに参加していない。" },
    internationalStandards: {
      iso13485: { accepted: true, notes: "ISO 13485認証は登録時にQMS証明として重要視される。" },
      iso14971: { accepted: true, notes: "リスクマネジメントの国際規格として参照。" },
      iec62304: { accepted: false, notes: "独自の要求は要確認。" },
      iec60601: { accepted: true, notes: "医用電気機器の安全規格として参照。" },
      others: [],
    },
    recentDevelopments: [
      { date: "2015", title: "NMRA Act No. 5 of 2015 制定", description: "NMRAの法的根拠を確立し、医療機器を正式に規制対象に含める法整備。" },
      { date: "2024-2025", title: "医療機器登録制度の強化", description: "NMRAが医療機器登録制度の運用強化とオンライン化を推進中。WHO技術支援を活用。" },
    ],
    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- KHM（カンボジア） ---
  // =========================================================================
  {
    code: "KHM",
    country: "カンボジア",
    countryEn: "Kingdom of Cambodia",
    region: "ASPAC",
    flag: "🇰🇭",
    legalSystemOverview: {
      type: "立憲君主制（Constitutional Monarchy）",
      description: "カンボジアの医療機器規制は保健省（MOH）傘下の薬事食品局（DDF: Department of Drugs and Food）が所管する。Medical Devices Sub-decree（王令）により医療機器の登録制度が導入されている。ASEAN Medical Device Directive（AMDD）との整合を目指しており、ASEAN CSDT（Common Submission Dossier Template）の採用を段階的に進めている。規制制度は発展途上。",
      keyCharacteristics: [
        "DDF/MOH が医療機器規制を統括",
        "Sub-decree（王令）に基づく登録制度",
        "ASEAN AMDD との整合を推進中",
        "リスクベース4クラス分類（A / B / C / D）を採用",
        "輸入品は DDF への登録・輸入許可が必要",
        "参照国認可（CE、FDA、ASEAN認可等）を審査で考慮",
      ],
    },
    authorities: [
      { name: "DDF", fullName: "Department of Drugs and Food, Ministry of Health", localName: "នាយកដ្ឋានឱសថ និងចំណីអាហារ", role: "医療機器の登録・輸入許可・市販後監視を統括", url: "https://www.dfrmedical.com/", isPrimary: true },
      { name: "MOH Cambodia", fullName: "Ministry of Health — Cambodia", localName: "ក្រសួងសុខាភិបាល", role: "医療政策全般・法令の策定・監督", url: "https://www.moh.gov.kh/", isPrimary: false },
    ],
    notifiedBodies: { system: "該当なし（DDF 直接審査）", description: "欧州型の Notified Body 制度は存在しない。DDF が直接登録審査を行う。参照国認可が審査で重要視される。", bodies: [] },
    deviceDefinition: { legalDefinition: "医療機器に関するSub-decreeに基づく定義（ASEAN AMDD / IMDRF定義に準拠）。疾病の診断・治療・予防・監視等を目的とする器具・装置・機器・ソフトウェア等。", scope: "IVDを含む。SaMDに関する詳細規定は要確認。", notes: "ASEAN AMDDの定義に整合する方向で制度整備中。" },
    primaryLaw: { title: "Sub-decree on Management of Medical Devices（医療機器管理に関する王令）", originalTitle: "អនុក្រឹត្យស្តីពីការគ្រប់គ្រងសម្ភារៈពេទ្យ", enacted: "要確認", lastAmended: "要確認", url: "https://www.moh.gov.kh/", description: "医療機器の定義、分類、登録制度、輸入管理、市販後監視等を規定する王令。" },
    implementingRegulations: [
      { title: "Prakas（省令）on Medical Device Registration", date: "要確認", url: "https://www.moh.gov.kh/", description: "医療機器登録の手続き、必要書類、分類基準等の詳細を規定する保健省令。", category: "登録手続き" },
      { title: "ASEAN CSDT（Common Submission Dossier Template）ガイダンス", date: "要確認", url: "https://asean.org/", description: "ASEAN共通の申請書類テンプレート。カンボジアでの採用を段階的に推進中。", category: "ASEAN整合" },
    ],
    relatedLaws: [
      { title: "Law on the Management of Pharmaceuticals（医薬品管理法）", category: "医薬品規制", enacted: "1996", url: "https://www.moh.gov.kh/", relevance: "医薬品規制の基本法。医療機器規制の法的根拠の一部を提供。" },
    ],
    classification: {
      system: "リスクベース4クラス分類（ASEAN AMDD / IMDRF整合）",
      basis: "ASEAN AMDDの分類ルールに基づくリスクベース分類。",
      classes: [
        { name: "Class A", nameJa: "クラスA（低リスク）", riskLevel: "低", description: "低リスク医療機器。", examples: ["ガーゼ", "聴診器", "手術用手袋"], approvalPath: "登録（簡易審査）— DDF" },
        { name: "Class B", nameJa: "クラスB（中低リスク）", riskLevel: "中低", description: "中低リスク医療機器。", examples: ["超音波診断装置", "注射針", "歯科用材料"], approvalPath: "登録 — DDF" },
        { name: "Class C", nameJa: "クラスC（中高リスク）", riskLevel: "中高", description: "中高リスク医療機器。", examples: ["人工呼吸器", "透析器", "骨接合プレート"], approvalPath: "登録（技術審査）— DDF" },
        { name: "Class D", nameJa: "クラスD（高リスク）", riskLevel: "高", description: "高リスク医療機器。", examples: ["心臓ペースメーカー", "人工心臓弁", "冠動脈ステント"], approvalPath: "登録（詳細審査）— DDF" },
      ],
      rules: ["ASEAN AMDDの分類ルールに準拠", "IVDの分類基準は要確認", "参照国での分類を参考"],
      totalProductCodes: null,
    },
    conformityAssessment: {
      overview: "全医療機器はDDFへの登録が必要。参照国認可（CE、FDA、ASEAN認可等）の保有が審査を円滑化する。外国メーカーはローカル代理人（輸入業者）の指定が必要。",
      routes: [
        { name: "DDF Device Registration", nameJa: "DDF 医療機器登録", applicableClasses: ["Class A", "Class B", "Class C", "Class D"], description: "DDFに申請書類一式を提出。ASEAN CSDTに基づく技術文書、参照国認可証明等が必要。", subtypes: ["新規登録", "変更登録", "更新"], avgReviewTime: "要確認（数ヶ月〜）", fee: "MOH規定による", url: "https://www.dfrmedical.com/" },
      ],
    },
    electronicSubmission: { system: "要確認", url: null, description: "電子申請システムの導入状況は要確認。書面提出が主。", mandatory: false },
    udi: { required: false, system: "未導入", description: "独自のUDI制度は2026年時点で未導入。", url: null, timeline: "未定" },
    postMarket: {
      adverseEventReporting: { system: "有害事象報告制度（DDF/MOH）", mandatory: true, url: "https://www.moh.gov.kh/", description: "DDFへの有害事象報告が義務付けられている。報告様式・期限の詳細は要確認。" },
      recalls: { authority: "DDF / MOH", description: "MOHの命令または自主リコール。", url: "https://www.moh.gov.kh/" },
      surveillance: "DDF/MOHによる市販後監視。制度は発展途上。",
    },
    certificateOfFreeSale: { available: false, issuingAuthority: null, name: null, description: "カンボジアからのCFS発行に関する公式制度は要確認。輸入登録時に製造国のCFS提出が求められる。", processingTime: null, url: null },
    reimbursement: { system: "政府主導型医療制度（公的医療 + 民間セクター + NGO支援）", authority: "保健省（MOH）", description: "Health Equity Fund等により貧困層への医療アクセスを確保。医療機器の個別償還制度は未整備。公共調達・ドナー支援が中心。", codingSystems: [], url: "https://www.moh.gov.kh/" },
    marketingRules: { authority: "DDF / MOH", description: "医療機器広告に関する詳細法規は要確認。虚偽広告は一般法により禁止。", keyRules: ["虚偽・誇大広告の禁止", "未登録機器の広告禁止"] },
    mdsap: { status: "非参加", description: "カンボジアはMDSAPに参加していない。" },
    internationalStandards: {
      iso13485: { accepted: true, notes: "ISO 13485認証は登録時にQMS証明として参照される。" },
      iso14971: { accepted: true, notes: "リスクマネジメントの国際規格として参照。" },
      iec62304: { accepted: false, notes: "独自の要求は要確認。" },
      iec60601: { accepted: true, notes: "医用電気機器の安全規格として参照。" },
      others: [],
    },
    recentDevelopments: [
      { date: "2024-2025", title: "ASEAN AMDD整合の推進", description: "ASEAN医療機器指令との整合を段階的に推進中。ASEAN CSDTの採用を準備。" },
      { date: "2025", title: "医療機器登録制度の運用強化", description: "DDF/MOHが登録審査の体制強化を進行中。" },
    ],
    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- MMR（ミャンマー） ---
  // =========================================================================
  {
    code: "MMR",
    country: "ミャンマー",
    countryEn: "Republic of the Union of Myanmar",
    region: "ASPAC",
    flag: "🇲🇲",
    legalSystemOverview: {
      type: "軍事政権下の共和制",
      description: "ミャンマーの医療機器規制は保健省（MOH）傘下のFDA Myanmar（食品医薬品局）が所管する。National Drug Law 1992 を基盤とし、医療機器に関する規制枠組みの整備を進めてきたが、2021年2月の軍事クーデター以降、政治的不安定により規制制度の発展は大幅に停滞している。ASEAN AMDDとの整合を目指していたが、現在の進捗は不透明。",
      keyCharacteristics: [
        "FDA Myanmar が医療機器規制を統括",
        "National Drug Law 1992 が法的根拠",
        "ASEAN AMDD との整合を目指していた（現在停滞）",
        "輸入品は FDA Myanmar への登録・輸入許可が必要",
        "政治的不安定により規制制度の発展が停滞",
        "規制の実施・執行状況は要確認",
      ],
    },
    authorities: [
      { name: "FDA Myanmar", fullName: "Food and Drug Administration — Myanmar", localName: "အစားအသောက်နှင့် ဆေးဝါးကွပ်ကဲရေးဦးစီးဌာန", role: "医療機器の登録・輸入許可・市販後監視を統括", url: "https://www.fdamyanmar.gov.mm/", isPrimary: true },
      { name: "MOH Myanmar", fullName: "Ministry of Health — Myanmar", localName: "ကျန်းမာရေးဝန်ကြီးဌာန", role: "医療政策全般・法令の策定・監督", url: null, isPrimary: false },
    ],
    notifiedBodies: { system: "該当なし（FDA Myanmar 直接審査）", description: "Notified Body 制度は存在しない。FDA Myanmarが直接登録審査を行う。参照国認可が審査で考慮される。", bodies: [] },
    deviceDefinition: { legalDefinition: "National Drug Law 1992 および関連規則に基づく定義。詳細な法的定義文書の公開は限定的。ASEAN AMDD / IMDRF定義との整合を目指していた。", scope: "IVDを含む。SaMDに関する詳細規定は要確認。", notes: "政治的不安定により、最新の法的定義の確認が困難な状況。" },
    primaryLaw: { title: "National Drug Law 1992（国家医薬品法）", originalTitle: null, enacted: "1992", lastAmended: "要確認", url: "https://www.fdamyanmar.gov.mm/", description: "医薬品・医療機器規制の法的根拠。医療機器に特化した法令の整備状況は要確認。" },
    implementingRegulations: [
      { title: "FDA Myanmar 医療機器登録手続き", date: "要確認", url: "https://www.fdamyanmar.gov.mm/", description: "医療機器の登録に必要な書類・手続きを規定。最新の運用状況は要確認。", category: "登録手続き" },
    ],
    relatedLaws: [
      { title: "Consumer Protection Law 2014", category: "消費者保護", enacted: "2014", url: null, relevance: "消費者保護の観点から医療機器の安全性にも関連。" },
    ],
    classification: {
      system: "リスクベース4クラス分類（ASEAN AMDD整合を目指す）",
      basis: "ASEAN AMDDの分類ルールに基づく分類を導入予定であったが、現在の運用状況は要確認。",
      classes: [
        { name: "Class A", nameJa: "クラスA（低リスク）", riskLevel: "低", description: "低リスク医療機器。", examples: ["ガーゼ", "聴診器", "手術用手袋"], approvalPath: "登録 — FDA Myanmar" },
        { name: "Class B", nameJa: "クラスB（中低リスク）", riskLevel: "中低", description: "中低リスク医療機器。", examples: ["超音波診断装置", "注射針"], approvalPath: "登録 — FDA Myanmar" },
        { name: "Class C", nameJa: "クラスC（中高リスク）", riskLevel: "中高", description: "中高リスク医療機器。", examples: ["人工呼吸器", "透析器"], approvalPath: "登録 — FDA Myanmar" },
        { name: "Class D", nameJa: "クラスD（高リスク）", riskLevel: "高", description: "高リスク医療機器。", examples: ["心臓ペースメーカー", "人工心臓弁"], approvalPath: "登録 — FDA Myanmar" },
      ],
      rules: ["ASEAN AMDD分類ルールを参照", "実際の運用・分類判断の詳細は要確認"],
      totalProductCodes: null,
    },
    conformityAssessment: {
      overview: "医療機器はFDA Myanmarへの登録が必要とされるが、政治的不安定により運用状況は流動的。参照国認可（CE、FDA等）の保有が審査で考慮される。外国メーカーはローカル代理人の指定が必要。",
      routes: [
        { name: "FDA Myanmar Device Registration", nameJa: "FDA Myanmar 医療機器登録", applicableClasses: ["Class A", "Class B", "Class C", "Class D"], description: "FDA Myanmarに申請書類一式を提出。参照国認可証明、品質管理証明書等が必要。現在の審査状況は要確認。", subtypes: ["新規登録", "変更登録"], avgReviewTime: "要確認", fee: "要確認", url: "https://www.fdamyanmar.gov.mm/" },
      ],
    },
    electronicSubmission: { system: "要確認", url: null, description: "電子申請システムの導入状況は要確認。", mandatory: false },
    udi: { required: false, system: "未導入", description: "独自のUDI制度は2026年時点で未導入。", url: null, timeline: "未定" },
    postMarket: {
      adverseEventReporting: { system: "有害事象報告制度（FDA Myanmar）", mandatory: true, url: "https://www.fdamyanmar.gov.mm/", description: "FDA Myanmarへの有害事象報告義務がある。現在の運用状況は要確認。" },
      recalls: { authority: "FDA Myanmar", description: "FDA Myanmarの命令または自主リコール。運用状況は要確認。", url: "https://www.fdamyanmar.gov.mm/" },
      surveillance: "FDA Myanmarによる市販後監視。政治的不安定により体制の実効性は要確認。",
    },
    certificateOfFreeSale: { available: false, issuingAuthority: null, name: null, description: "ミャンマーからのCFS発行に関する公式制度は要確認。", processingTime: null, url: null },
    reimbursement: { system: "政府主導型医療制度（公的医療 + 民間セクター + NGO支援）", authority: "保健省（MOH）", description: "公的医療機関での基本的な医療を提供。医療機器の個別償還制度は未整備。国際機関・NGO支援が重要な役割を果たす。", codingSystems: [], url: null },
    marketingRules: { authority: "FDA Myanmar", description: "医療機器広告に関する詳細法規は要確認。", keyRules: ["虚偽・誇大広告の禁止", "未登録機器の広告禁止"] },
    mdsap: { status: "非参加", description: "ミャンマーはMDSAPに参加していない。" },
    internationalStandards: {
      iso13485: { accepted: true, notes: "ISO 13485認証は登録時にQMS証明として参照される。法的義務化の状況は要確認。" },
      iso14971: { accepted: true, notes: "リスクマネジメントの国際規格として参照。" },
      iec62304: { accepted: false, notes: "独自の要求は要確認。" },
      iec60601: { accepted: true, notes: "医用電気機器の安全規格として参照。" },
      others: [],
    },
    recentDevelopments: [
      { date: "2021", title: "軍事クーデターによる規制制度への影響", description: "2021年2月の軍事クーデター以降、規制制度の発展が停滞。ASEAN AMDDとの整合作業も遅延。" },
      { date: "2024-2025", title: "規制運用の現状", description: "FDA Myanmarは基本的な登録・輸入許可業務を継続しているが、制度の拡充・国際整合は停滞中。最新の運用状況は要確認。" },
    ],
    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- LAO（ラオス） ---
  // =========================================================================
  {
    code: "LAO",
    country: "ラオス",
    countryEn: "Lao People's Democratic Republic",
    region: "ASPAC",
    flag: "🇱🇦",
    legalSystemOverview: {
      type: "人民民主共和制（People's Democratic Republic）",
      description: "ラオスの医療機器規制は保健省（MOH）傘下の食品薬品局（FDD: Food and Drug Department）が所管する。Drug and Medical Products Law を法的根拠とし、医療機器の輸入管理・登録制度を運用している。ASEAN AMDDとの整合を段階的に推進中であるが、規制制度は発展途上であり、実施面での能力構築が課題。",
      keyCharacteristics: [
        "FDD/MOH が医療機器規制を統括",
        "Drug and Medical Products Law が法的根拠",
        "ASEAN AMDD との整合を段階的に推進",
        "リスクベース4クラス分類（A / B / C / D）を採用",
        "輸入品は FDD への登録・輸入許可が必要",
        "規制制度は発展途上、WHO/ASEAN支援を活用",
      ],
    },
    authorities: [
      { name: "FDD", fullName: "Food and Drug Department, Ministry of Health", localName: "ກົมອາຫານ ແລະ ຢາ", role: "医療機器の登録・輸入許可・市販後監視を統括", url: "https://www.fdd.gov.la/", isPrimary: true },
      { name: "MOH Lao", fullName: "Ministry of Health — Lao PDR", localName: "ກະຊວງສາທາລະນະສຸກ", role: "医療政策全般・法令の策定・監督", url: "https://www.moh.gov.la/", isPrimary: false },
    ],
    notifiedBodies: { system: "該当なし（FDD 直接審査）", description: "Notified Body 制度は存在しない。FDD が直接登録審査を行う。参照国認可が審査で重要視される。", bodies: [] },
    deviceDefinition: { legalDefinition: "Drug and Medical Products Law に基づく定義。ASEAN AMDD / IMDRF定義との整合を推進中。詳細な法的定義文書の公開は限定的。", scope: "IVDを含む。SaMDに関する詳細規定は要確認。", notes: "ASEAN AMDDの定義に整合する方向で制度整備中。" },
    primaryLaw: { title: "Drug and Medical Products Law（医薬品・医療製品法）", originalTitle: "ກົດໝາຍວ່າດ້ວຍຢາ ແລະ ຜະລິດຕະພັນການແພດ", enacted: "要確認", lastAmended: "要確認", url: "https://www.fdd.gov.la/", description: "医薬品・医療機器を含む医療製品の規制に関する基本法。FDDの権限・登録制度の法的根拠を規定。" },
    implementingRegulations: [
      { title: "FDD 医療機器登録手続きガイダンス", date: "要確認", url: "https://www.fdd.gov.la/", description: "医療機器の登録に必要な書類・手続きの詳細。", category: "登録手続き" },
      { title: "ASEAN CSDT ガイダンス（段階的採用）", date: "要確認", url: "https://asean.org/", description: "ASEAN共通の申請書類テンプレート。ラオスでの採用を段階的に推進中。", category: "ASEAN整合" },
    ],
    relatedLaws: [
      { title: "Hygiene, Disease Prevention and Health Promotion Law", category: "公衆衛生", enacted: "要確認", url: null, relevance: "公衆衛生全般に関する法律。医療機器の安全性にも関連。" },
    ],
    classification: {
      system: "リスクベース4クラス分類（ASEAN AMDD / IMDRF整合）",
      basis: "ASEAN AMDDの分類ルールに基づくリスクベース分類。",
      classes: [
        { name: "Class A", nameJa: "クラスA（低リスク）", riskLevel: "低", description: "低リスク医療機器。", examples: ["ガーゼ", "聴診器", "手術用手袋"], approvalPath: "登録（簡易審査）— FDD" },
        { name: "Class B", nameJa: "クラスB（中低リスク）", riskLevel: "中低", description: "中低リスク医療機器。", examples: ["超音波診断装置", "注射針"], approvalPath: "登録 — FDD" },
        { name: "Class C", nameJa: "クラスC（中高リスク）", riskLevel: "中高", description: "中高リスク医療機器。", examples: ["人工呼吸器", "透析器"], approvalPath: "登録（技術審査）— FDD" },
        { name: "Class D", nameJa: "クラスD（高リスク）", riskLevel: "高", description: "高リスク医療機器。", examples: ["心臓ペースメーカー", "人工心臓弁"], approvalPath: "登録（詳細審査）— FDD" },
      ],
      rules: ["ASEAN AMDD分類ルールに準拠", "IVDの分類基準は要確認", "参照国での分類を参考"],
      totalProductCodes: null,
    },
    conformityAssessment: {
      overview: "医療機器はFDDへの登録が必要。参照国認可（CE、FDA、ASEAN認可等）の保有が審査を円滑化する。外国メーカーはローカル代理人（輸入業者）の指定が必要。",
      routes: [
        { name: "FDD Device Registration", nameJa: "FDD 医療機器登録", applicableClasses: ["Class A", "Class B", "Class C", "Class D"], description: "FDDに申請書類一式を提出。技術文書、参照国認可証明、品質管理証明書等が必要。", subtypes: ["新規登録", "変更登録", "更新"], avgReviewTime: "要確認（数ヶ月〜）", fee: "FDD規定による", url: "https://www.fdd.gov.la/" },
      ],
    },
    electronicSubmission: { system: "要確認", url: null, description: "電子申請システムの導入状況は要確認。書面提出が主。", mandatory: false },
    udi: { required: false, system: "未導入", description: "独自のUDI制度は2026年時点で未導入。", url: null, timeline: "未定" },
    postMarket: {
      adverseEventReporting: { system: "有害事象報告制度（FDD/MOH）", mandatory: true, url: "https://www.fdd.gov.la/", description: "FDDへの有害事象報告が義務付けられている。報告様式・期限の詳細は要確認。" },
      recalls: { authority: "FDD / MOH", description: "MOHの命令または自主リコール。", url: "https://www.fdd.gov.la/" },
      surveillance: "FDD/MOHによる市販後監視。制度は発展途上。WHO/ASEAN支援を活用して体制構築中。",
    },
    certificateOfFreeSale: { available: false, issuingAuthority: null, name: null, description: "ラオスからのCFS発行に関する公式制度は要確認。輸入登録時に製造国のCFS提出が求められる場合がある。", processingTime: null, url: null },
    reimbursement: { system: "政府主導型医療制度（公的医療 + 民間セクター + 国際支援）", authority: "保健省（MOH）", description: "National Health Insurance制度を段階的に拡大中。医療機器の個別償還制度は未整備。公共調達・国際機関支援が中心。", codingSystems: [], url: "https://www.moh.gov.la/" },
    marketingRules: { authority: "FDD / MOH", description: "医療機器広告に関する詳細法規は要確認。虚偽広告は一般法により禁止。", keyRules: ["虚偽・誇大広告の禁止", "未登録機器の広告禁止"] },
    mdsap: { status: "非参加", description: "ラオスはMDSAPに参加していない。" },
    internationalStandards: {
      iso13485: { accepted: true, notes: "ISO 13485認証は登録時にQMS証明として参照される。" },
      iso14971: { accepted: true, notes: "リスクマネジメントの国際規格として参照。" },
      iec62304: { accepted: false, notes: "独自の要求は要確認。" },
      iec60601: { accepted: true, notes: "医用電気機器の安全規格として参照。" },
      others: [],
    },
    recentDevelopments: [
      { date: "2024-2025", title: "ASEAN AMDD整合の段階的推進", description: "ASEAN医療機器指令との整合を段階的に推進中。WHO/ASEAN技術支援を活用。" },
      { date: "2025", title: "医療機器登録制度の運用強化", description: "FDDが登録審査の体制強化を段階的に進行中。" },
    ],
    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- MNG（モンゴル） ---
  // =========================================================================
  {
    code: "MNG",
    country: "モンゴル",
    countryEn: "Mongolia",
    region: "ASPAC",
    flag: "🇲🇳",
    legalSystemOverview: {
      type: "議会制共和制（Parliamentary Republic）",
      description: "モンゴルの医療機器規制は保健省（MOH）が所管する。Health Law および Medicines and Medical Devices Law に基づき、医療機器の登録・輸入管理・市販後監視を実施。規制制度は発展途上であり、WHOの技術支援を受けながら制度整備を進めている。参照国認可（CE、FDA等）への依存度が高い。",
      keyCharacteristics: [
        "保健省（MOH）が医療機器規制を統括",
        "Medicines and Medical Devices Law が法的根拠",
        "リスクベース分類を導入（詳細は要確認）",
        "輸入品は MOH への登録が必要",
        "参照国認可（CE、FDA等）への依存度が高い",
        "WHO 支援の下で規制制度を整備中",
      ],
    },
    authorities: [
      { name: "MOH Mongolia", fullName: "Ministry of Health — Mongolia", localName: "Эрүүл мэндийн яам", role: "医療機器の登録・輸入許可・市販後監視・医療政策全般を統括", url: "https://www.moh.gov.mn/", isPrimary: true },
      { name: "GASI", fullName: "General Agency for Specialized Inspection", localName: "Мэргэжлийн хяналтын ерөнхий газар", role: "医療機器を含む製品の品質・安全性の検査・監督", url: "https://www.inspection.gov.mn/", isPrimary: false },
    ],
    notifiedBodies: { system: "該当なし（MOH 直接審査）", description: "Notified Body 制度は存在しない。MOH が直接登録審査を行う。参照国認可が審査で重要視される。", bodies: [] },
    deviceDefinition: { legalDefinition: "Medicines and Medical Devices Law に基づく定義。疾病の診断・治療・予防・監視等を目的とする器具・装置・機器等。詳細な法的定義文書の公開は限定的。", scope: "IVDを含む。SaMDに関する詳細規定は要確認。", notes: "WHO/IMDRF定義との整合を推進中。" },
    primaryLaw: { title: "Medicines and Medical Devices Law（医薬品・医療機器法）", originalTitle: "Эм, эмнэлгийн хэрэгслийн тухай хууль", enacted: "要確認", lastAmended: "要確認", url: "https://www.moh.gov.mn/", description: "医薬品および医療機器の規制に関する基本法。登録制度、品質管理、市販後監視の法的根拠を規定。" },
    implementingRegulations: [
      { title: "MOH 医療機器登録手続き規則", date: "要確認", url: "https://www.moh.gov.mn/", description: "医療機器の登録に必要な書類・手続きの詳細を規定。", category: "登録手続き" },
    ],
    relatedLaws: [
      { title: "Health Law（健康法）", category: "医療全般", enacted: "要確認", url: "https://www.moh.gov.mn/", relevance: "モンゴルの医療制度全般の法的根拠。医療機器の使用・管理にも関連。" },
    ],
    classification: {
      system: "リスクベース分類（詳細は要確認）",
      basis: "MOH規則に基づく分類。IMDRF枠組みとの整合を検討中。",
      classes: [
        { name: "Low Risk", nameJa: "低リスク", riskLevel: "低", description: "低リスク医療機器。", examples: ["ガーゼ", "聴診器", "手術用手袋"], approvalPath: "登録 — MOH" },
        { name: "Medium Risk", nameJa: "中リスク", riskLevel: "中", description: "中程度のリスクの医療機器。", examples: ["超音波診断装置", "注射針"], approvalPath: "登録 — MOH" },
        { name: "High Risk", nameJa: "高リスク", riskLevel: "高", description: "高リスク医療機器。", examples: ["心臓ペースメーカー", "人工心臓弁", "冠動脈ステント"], approvalPath: "登録（詳細審査）— MOH" },
      ],
      rules: ["MOH規則に基づく分類", "参照国での分類を参考", "分類体系の詳細は要確認（IMDRF整合を検討中）"],
      totalProductCodes: null,
    },
    conformityAssessment: {
      overview: "医療機器はMOHへの登録が必要。参照国認可（CE、FDA等）の保有が審査で考慮される。外国メーカーはローカル代理人（輸入業者）の指定が必要。",
      routes: [
        { name: "MOH Device Registration", nameJa: "MOH 医療機器登録", applicableClasses: ["Low Risk", "Medium Risk", "High Risk"], description: "MOHに申請書類一式を提出。技術文書、参照国認可証明、品質管理証明書等が必要。", subtypes: ["新規登録", "変更登録", "更新"], avgReviewTime: "要確認（数ヶ月〜）", fee: "MOH規定による", url: "https://www.moh.gov.mn/" },
      ],
    },
    electronicSubmission: { system: "要確認", url: null, description: "電子申請システムの導入状況は要確認。", mandatory: false },
    udi: { required: false, system: "未導入", description: "独自のUDI制度は2026年時点で未導入。", url: null, timeline: "未定" },
    postMarket: {
      adverseEventReporting: { system: "有害事象報告制度（MOH）", mandatory: true, url: "https://www.moh.gov.mn/", description: "MOHへの有害事象報告義務がある。報告様式・期限の詳細は要確認。" },
      recalls: { authority: "MOH / GASI", description: "MOHの命令または自主リコール。GASIが市場監視を支援。", url: "https://www.moh.gov.mn/" },
      surveillance: "MOH/GASIによる市販後監視。制度は発展途上。WHO支援の下で体制構築中。",
    },
    certificateOfFreeSale: { available: false, issuingAuthority: null, name: null, description: "モンゴルからのCFS発行に関する公式制度は要確認。輸入登録時に製造国のCFS提出が求められる場合がある。", processingTime: null, url: null },
    reimbursement: { system: "社会保険制度（Health Insurance Fund）", authority: "保健省（MOH）/ 社会保険庁", description: "国民健康保険制度により基本的な医療サービスをカバー。医療機器の個別償還制度は限定的。公共調達が中心。", codingSystems: [], url: "https://www.moh.gov.mn/" },
    marketingRules: { authority: "MOH", description: "医療機器広告に関する詳細法規は要確認。虚偽広告は一般法により禁止。", keyRules: ["虚偽・誇大広告の禁止", "未登録機器の広告禁止"] },
    mdsap: { status: "非参加", description: "モンゴルはMDSAPに参加していない。" },
    internationalStandards: {
      iso13485: { accepted: true, notes: "ISO 13485認証は登録時にQMS証明として参照される。" },
      iso14971: { accepted: true, notes: "リスクマネジメントの国際規格として参照。" },
      iec62304: { accepted: false, notes: "独自の要求は要確認。" },
      iec60601: { accepted: true, notes: "医用電気機器の安全規格として参照。" },
      others: [],
    },
    recentDevelopments: [
      { date: "2024-2025", title: "医療機器規制制度の整備", description: "WHO支援の下で医療機器規制の制度化・能力構築を推進中。" },
      { date: "2025", title: "保健セクター改革の推進", description: "保健セクター改革の一環として、医療機器の品質管理・規制体制の強化を計画。" },
    ],
    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- Netherlands ---
  // =========================================================================
  {
    code: "NLD",
    country: "オランダ",
    countryEn: "Netherlands",
    region: "Europe",
    flag: "🇳🇱",

    legalSystemOverview: {
      type: "EU加盟国（MDR/IVDR 直接適用）",
      description:
        "オランダはEU加盟国であり、Regulation (EU) 2017/745（MDR）および Regulation (EU) 2017/746（IVDR）が直接適用される。国内補完法として Wet medische hulpmiddelen（医療機器法、2021年施行）および Besluit medische hulpmiddelen（医療機器政令）が制定されている。IGJ（Inspectie Gezondheidszorg en Jeugd / 医療・青少年ケア監督局）がNCA（National Competent Authority）として市場監視・ビジランスを担う。CIBG が事業者登録を管理。",
      keyCharacteristics: [
        "EU MDR/IVDR が直接適用",
        "IGJ がNCAとして市場監視・ビジランスを担当",
        "Wet medische hulpmiddelen（2021年）による国内補完",
        "ラベリング・IFU はオランダ語必須（専門家向け機器は英語も可）",
        "CIBG が事業者登録管理",
        "国内に複数のNotified Body（BSI NL、DEKRA等）を有する",
      ],
    },

    authorities: [
      { name: "IGJ", fullName: "Health and Youth Care Inspectorate", localName: "Inspectie Gezondheidszorg en Jeugd", role: "NCA: 医療機器の市場監視・ビジランス・臨床試験監督", url: "https://www.igj.nl/onderwerpen/medische-hulpmiddelen", isPrimary: true },
      { name: "CIBG", fullName: "CIBG (Agency of the Ministry of Health)", localName: "CIBG", role: "医療機器事業者登録・EUDAMED連携", url: "https://www.cibg.nl/", isPrimary: false },
      { name: "ZIN", fullName: "National Health Care Institute", localName: "Zorginstituut Nederland", role: "医療技術評価（HTA）・償還評価・保険パッケージ管理", url: "https://www.zorginstituutnederland.nl/", isPrimary: false },
      { name: "VWS", fullName: "Ministry of Health, Welfare and Sport", localName: "Ministerie van Volksgezondheid, Welzijn en Sport", role: "医療機器政策立案・法整備", url: "https://www.rijksoverheid.nl/ministeries/ministerie-van-volksgezondheid-welzijn-en-sport", isPrimary: false },
    ],

    notifiedBodies: {
      system: "EU MDR Notified Body 制度（オランダ国内に複数機関指定）",
      description: "BSI Group The Netherlands B.V.（NB 2797）、DEKRA Certification B.V.（NB 0344）、Kiwa Dare B.V.（NB 0344 — IVDR）等が指定されている。オランダは欧州有数のNB集積地。",
      bodies: [
        { nb: "2797", name: "BSI Group The Netherlands B.V.", url: "https://www.bsigroup.com/", mdr: true, ivdr: true },
        { nb: "0344", name: "DEKRA Certification B.V.", url: "https://www.dekra.nl/", mdr: true, ivdr: false },
      ],
    },

    deviceDefinition: {
      legalDefinition: "EU MDR Article 2(1) の定義がそのまま適用。",
      scope: "IVD は IVDR で別途規定。SaMD・AI/ML 搭載機器も対象。美容目的製品（Annex XVI）も適用。",
      notes: "MDR の定義がそのまま国内法に適用。追加的な定義変更なし。",
    },

    primaryLaw: {
      title: "Regulation (EU) 2017/745 — Medical Devices Regulation (MDR)",
      originalTitle: null,
      enacted: "2017（EU採択）/ 2021年5月26日適用",
      lastAmended: "2025（Regulation (EU) 2025/2457）",
      url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32017R0745",
      description: "EU MDR がオランダに直接適用。Wet medische hulpmiddelen が国内補完法。",
    },

    implementingRegulations: [
      { title: "Wet medische hulpmiddelen", date: "2021-05-26", url: "https://wetten.overheid.nl/BWBR0045186/", description: "MDR/IVDR 国内補完法。NCA権限・罰則・言語要件・登録義務。", category: "国内補完法" },
      { title: "Besluit medische hulpmiddelen", date: "2021-05-26", url: "https://wetten.overheid.nl/BWBR0045474/", description: "Wet medische hulpmiddelen の下位法令。手数料・登録要件。", category: "国内補完法令" },
      { title: "Regeling medische hulpmiddelen", date: "2021", url: "https://wetten.overheid.nl/BWBR0045476/", description: "登録手続・言語要件の具体化。", category: "省令" },
    ],

    relatedLaws: [
      { title: "GDPR (Regulation (EU) 2016/679)", category: "データ保護", enacted: "2018", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679", relevance: "健康データに適用。UAVG（オランダGDPR施行法）も併存。" },
      { title: "AI Act — Regulation (EU) 2024/1689", category: "人工知能", enacted: "2024", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32024R1689", relevance: "AI搭載医療機器はHigh-Risk AI System。" },
    ],

    classification: {
      system: "EU MDR 4クラス制（Class I / IIa / IIb / III）",
      basis: "EU MDR Annex VIII の22分類規則がそのまま適用。",
      classes: [
        { name: "Class I", nameJa: "クラスI", riskLevel: "低", description: "低リスク。自己宣言（Im/Is/Ir除く）。", examples: ["弾性包帯", "聴診器", "車椅子"], approvalPath: "自己宣言" },
        { name: "Class IIa", nameJa: "クラスIIa", riskLevel: "中低", description: "中低リスク。NB関与。", examples: ["補聴器", "超音波装置", "コンタクトレンズ"], approvalPath: "Notified Body審査" },
        { name: "Class IIb", nameJa: "クラスIIb", riskLevel: "中高", description: "中高リスク。NB詳細審査。", examples: ["人工呼吸器", "血液透析装置", "輸液ポンプ"], approvalPath: "Notified Body審査" },
        { name: "Class III", nameJa: "クラスIII", riskLevel: "高", description: "最高リスク。", examples: ["人工心臓弁", "冠動脈ステント", "乳房インプラント"], approvalPath: "NB審査 + Expert Panel相談" },
      ],
      rules: ["EU MDR Annex VIII の22分類規則を直接適用"],
      totalProductCodes: "EU CND コード",
    },

    conformityAssessment: {
      overview: "EU MDR に基づく適合性評価がそのまま適用。国内追加の市販前審査なし。CIBG への事業者登録が必要。",
      routes: [{ name: "EU MDR Conformity Assessment", nameJa: "EU MDR 適合性評価", applicableClasses: ["全クラス"], description: "EU MDR Annex IX〜XI。詳細はEUプロファイル参照。", subtypes: [], avgReviewTime: "EUプロファイル参照", fee: "Notified Body により異なる", url: "https://www.igj.nl/onderwerpen/medische-hulpmiddelen" }],
    },

    electronicSubmission: { system: "EUDAMED + CIBG 国内登録", url: "https://www.cibg.nl/", description: "EUDAMED + CIBG 事業者登録。EUDAMED 4モジュール義務化: 2026年5月28日。", mandatory: true },
    udi: { required: true, system: "EU UDI System — EUDAMED", description: "EU MDR Article 27-29 UDI 要件がそのまま適用。", url: "https://ec.europa.eu/tools/eudamed/", timeline: "EUDAMED義務化: 2026年5月28日" },

    postMarket: {
      adverseEventReporting: { system: "EU Vigilance System — IGJ", mandatory: true, url: "https://www.igj.nl/onderwerpen/medische-hulpmiddelen/melden", description: "重篤有害事象をIGJに報告義務。MDR Article 87-92。製造業者・医療機関双方に報告義務。" },
      recalls: { authority: "IGJ", description: "FSCA/FSNはIGJに通知。IGJが市場からの回収命令権限を有する。", url: "https://www.igj.nl/" },
      surveillance: "EU MDR PMS/PSUR/PMCF要件がそのまま適用。",
    },

    certificateOfFreeSale: { available: true, issuingAuthority: "CIBG", name: "Certificate of Free Sale (CFS)", description: "CIBG がCFSを発行。", processingTime: "約2〜4週間", url: "https://www.cibg.nl/" },

    reimbursement: {
      system: "社会健康保険制度（Zorgverzekeringswet: Zvw）",
      authority: "ZIN（Zorginstituut Nederland）/ NZa（Nederlandse Zorgautoriteit）",
      description: "オランダの医療保険は全国民に義務的な基本保険（Zvw）を基盤とする。ZIN が保険パッケージの内容を評価・助言。医療機器は機能性包帯・補装具等は保険カバー。高額医療機器の病院使用はDBC/DOT（DRG類似）システムを通じて償還。NZa が料金規制。",
      codingSystems: ["DBC/DOT", "GIP（Genees- en hulpmiddelen Informatie Project）"],
      url: "https://www.zorginstituutnederland.nl/",
    },

    marketingRules: {
      authority: "IGJ",
      description: "MDR Article 7 虚偽広告禁止。Wet medische hulpmiddelen に基づく広告規制。Code Medische Hulpmiddelen（業界自主規範）も存在。",
      keyRules: ["オランダ語ラベリング・IFU必須（専門家向け英語可）", "MDR Article 7 虚偽広告禁止", "Code Medische Hulpmiddelen（業界自主規範）"],
    },

    mdsap: { status: "非参加", description: "EU加盟国としてMDSAP非参加。" },

    internationalStandards: {
      iso13485: { accepted: true, notes: "EU MDR QMS要件に基づき実質必須。EN ISO 13485:2016。" },
      iso14971: { accepted: true, notes: "EN ISO 14971:2019 + A11:2021。" },
      iec62304: { accepted: true, notes: "EN IEC 62304:2006 + A1:2015。" },
      iec60601: { accepted: true, notes: "EN IEC 60601 シリーズ。" },
      others: [],
    },

    recentDevelopments: [
      { date: "2025", title: "MDR延長規則適用", description: "Regulation (EU) 2025/2457 による移行期間延長。MDD証書の段階的失効スケジュール適用。" },
      { date: "2024", title: "EUDAMED義務化準備", description: "EUDAMED 4モジュール2026年5月28日義務化に向けた準備。" },
    ],

    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- Belgium ---
  // =========================================================================
  {
    code: "BEL",
    country: "ベルギー",
    countryEn: "Belgium",
    region: "Europe",
    flag: "🇧🇪",

    legalSystemOverview: {
      type: "EU加盟国（MDR/IVDR 直接適用）",
      description:
        "ベルギーはEU加盟国であり、Regulation (EU) 2017/745（MDR）および Regulation (EU) 2017/746（IVDR）が直接適用される。国内補完法として Loi relative aux dispositifs médicaux（医療機器法、2022年施行）が制定されている。FAMHP（Federal Agency for Medicines and Health Products / Agence fédérale des médicaments et des produits de santé, AFMPS）がNCAとして市場監視・ビジランス・臨床試験を管轄する。",
      keyCharacteristics: [
        "EU MDR/IVDR が直接適用",
        "FAMHP がNCAとして市場監視・ビジランスを担当",
        "2022年医療機器法による国内補完",
        "ラベリング・IFU はフランス語・オランダ語・ドイツ語の三言語必須（流通地域に応じる）",
        "臨床試験はFAMHP + 倫理委員会の承認が必要",
        "EU MDR Article 97 derogation を積極的に活用（供給不足対応）",
      ],
    },

    authorities: [
      { name: "FAMHP (AFMPS)", fullName: "Federal Agency for Medicines and Health Products", localName: "Agence fédérale des médicaments et des produits de santé / Federaal Agentschap voor Geneesmiddelen en Gezondheidsproducten", role: "NCA: 医療機器の市場監視・ビジランス・臨床試験監督・登録管理", url: "https://www.famhp.be/en/human_use/health_products/medical_devices_accessories", isPrimary: true },
      { name: "INAMI/RIZIV", fullName: "National Institute for Health and Disability Insurance", localName: "Institut national d'assurance maladie-invalidité / Rijksinstituut voor ziekte- en invaliditeitsverzekering", role: "医療機器の償還管理・保険給付", url: "https://www.riziv.fgov.be/", isPrimary: false },
      { name: "KCE", fullName: "Belgian Health Care Knowledge Centre", localName: "Federaal Kenniscentrum voor de Gezondheidszorg", role: "医療技術評価（HTA）", url: "https://kce.fgov.be/", isPrimary: false },
    ],

    notifiedBodies: {
      system: "EU MDR Notified Body 制度（ベルギー国内に指定機関あり）",
      description: "SGS Belgium NV（NB 1639）がMDR指定されている。IVDRについても指定。",
      bodies: [
        { nb: "1639", name: "SGS Belgium NV", url: "https://www.sgs.com/en-be", mdr: true, ivdr: true },
      ],
    },

    deviceDefinition: {
      legalDefinition: "EU MDR Article 2(1) の定義がそのまま適用。",
      scope: "IVD は IVDR で別途規定。SaMD・AI/ML 搭載機器も対象。美容目的製品（Annex XVI）も適用。",
      notes: "MDR の定義がそのまま国内法に適用。追加的な定義変更なし。",
    },

    primaryLaw: {
      title: "Regulation (EU) 2017/745 — Medical Devices Regulation (MDR)",
      originalTitle: null,
      enacted: "2017（EU採択）/ 2021年5月26日適用",
      lastAmended: "2025（Regulation (EU) 2025/2457）",
      url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32017R0745",
      description: "EU MDR がベルギーに直接適用。2022年医療機器法が国内補完法。",
    },

    implementingRegulations: [
      { title: "Loi relative aux dispositifs médicaux（医療機器法）", date: "2022-05-22", url: "https://www.famhp.be/en/human_use/health_products/medical_devices_accessories", description: "MDR/IVDR 国内補完法。NCA権限・罰則・登録義務・言語要件。", category: "国内補完法" },
      { title: "Arrêté royal du 12 janvier 2024（王令）", date: "2024-01-12", url: "https://www.famhp.be/", description: "医療機器法の施行細則。手数料・登録手続。", category: "国内補完法令" },
    ],

    relatedLaws: [
      { title: "GDPR (Regulation (EU) 2016/679)", category: "データ保護", enacted: "2018", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679", relevance: "健康データに適用。" },
      { title: "AI Act — Regulation (EU) 2024/1689", category: "人工知能", enacted: "2024", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32024R1689", relevance: "AI搭載医療機器はHigh-Risk AI System。" },
    ],

    classification: {
      system: "EU MDR 4クラス制（Class I / IIa / IIb / III）",
      basis: "EU MDR Annex VIII の22分類規則がそのまま適用。",
      classes: [
        { name: "Class I", nameJa: "クラスI", riskLevel: "低", description: "低リスク。自己宣言（Im/Is/Ir除く）。", examples: ["弾性包帯", "聴診器", "車椅子"], approvalPath: "自己宣言" },
        { name: "Class IIa", nameJa: "クラスIIa", riskLevel: "中低", description: "中低リスク。NB関与。", examples: ["補聴器", "超音波装置", "コンタクトレンズ"], approvalPath: "Notified Body審査" },
        { name: "Class IIb", nameJa: "クラスIIb", riskLevel: "中高", description: "中高リスク。NB詳細審査。", examples: ["人工呼吸器", "血液透析装置", "輸液ポンプ"], approvalPath: "Notified Body審査" },
        { name: "Class III", nameJa: "クラスIII", riskLevel: "高", description: "最高リスク。", examples: ["人工心臓弁", "冠動脈ステント", "乳房インプラント"], approvalPath: "NB審査 + Expert Panel相談" },
      ],
      rules: ["EU MDR Annex VIII の22分類規則を直接適用"],
      totalProductCodes: "EU CND コード",
    },

    conformityAssessment: {
      overview: "EU MDR に基づく適合性評価がそのまま適用。国内追加の市販前審査なし。FAMHPへの事業者登録・機器届出が必要。",
      routes: [{ name: "EU MDR Conformity Assessment", nameJa: "EU MDR 適合性評価", applicableClasses: ["全クラス"], description: "EU MDR Annex IX〜XI。詳細はEUプロファイル参照。", subtypes: [], avgReviewTime: "EUプロファイル参照", fee: "Notified Body により異なる", url: "https://www.famhp.be/en/human_use/health_products/medical_devices_accessories" }],
    },

    electronicSubmission: { system: "EUDAMED + FAMHP 国内登録", url: "https://www.famhp.be/", description: "EUDAMED + FAMHP 事業者登録。EUDAMED 4モジュール義務化: 2026年5月28日。", mandatory: true },
    udi: { required: true, system: "EU UDI System — EUDAMED", description: "EU MDR Article 27-29 UDI 要件がそのまま適用。", url: "https://ec.europa.eu/tools/eudamed/", timeline: "EUDAMED義務化: 2026年5月28日" },

    postMarket: {
      adverseEventReporting: { system: "EU Vigilance System — FAMHP", mandatory: true, url: "https://www.famhp.be/en/human_use/health_products/medical_devices_accessories/vigilance", description: "重篤有害事象をFAMHPに報告義務。MDR Article 87-92。オンライン報告システムあり。" },
      recalls: { authority: "FAMHP", description: "FSCA/FSNはFAMHPに通知。FAMHPが市場からの回収命令権限を有する。", url: "https://www.famhp.be/" },
      surveillance: "EU MDR PMS/PSUR/PMCF要件がそのまま適用。",
    },

    certificateOfFreeSale: { available: true, issuingAuthority: "FAMHP", name: "Certificate of Free Sale (CFS)", description: "FAMHP がCFSを発行。", processingTime: "約2〜4週間", url: "https://www.famhp.be/" },

    reimbursement: {
      system: "社会健康保険制度（INAMI/RIZIV）",
      authority: "INAMI/RIZIV",
      description: "ベルギーは強制的社会健康保険制度を有する。インプラント等の高リスク医療機器はINAMI/RIZIV の Liste des produits admis au remboursement（償還リスト）への登録が必要。KCE がHTA評価を実施。償還価格交渉は Commission de remboursement des implants et dispositifs médicaux invasifs で実施。",
      codingSystems: ["INAMI/RIZIV 製品リスト", "APR-DRG"],
      url: "https://www.riziv.fgov.be/",
    },

    marketingRules: {
      authority: "FAMHP",
      description: "MDR Article 7 虚偽広告禁止。2022年医療機器法に基づく広告規制。",
      keyRules: ["フランス語・オランダ語・ドイツ語ラベリング・IFU必須（流通地域に応じる）", "MDR Article 7 虚偽広告禁止", "FAMHP への広告事前届出は不要"],
    },

    mdsap: { status: "非参加", description: "EU加盟国としてMDSAP非参加。" },

    internationalStandards: {
      iso13485: { accepted: true, notes: "EU MDR QMS要件に基づき実質必須。EN ISO 13485:2016。" },
      iso14971: { accepted: true, notes: "EN ISO 14971:2019 + A11:2021。" },
      iec62304: { accepted: true, notes: "EN IEC 62304:2006 + A1:2015。" },
      iec60601: { accepted: true, notes: "EN IEC 60601 シリーズ。" },
      others: [],
    },

    recentDevelopments: [
      { date: "2025", title: "MDR延長規則適用", description: "Regulation (EU) 2025/2457 による移行期間延長。" },
      { date: "2024", title: "Article 97 derogation 活用", description: "供給不足対応としてMDR Article 97に基づくderogation（特例措置）を積極活用。" },
    ],

    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- Spain ---
  // =========================================================================
  {
    code: "ESP",
    country: "スペイン",
    countryEn: "Spain",
    region: "Europe",
    flag: "🇪🇸",

    legalSystemOverview: {
      type: "EU加盟国（MDR/IVDR 直接適用）",
      description:
        "スペインはEU加盟国であり、Regulation (EU) 2017/745（MDR）および Regulation (EU) 2017/746（IVDR）が直接適用される。国内補完法として Real Decreto 192/2023（王令192/2023号）が2023年に施行され、MDR/IVDRの国内実施を規定する。AEMPS（Agencia Española de Medicamentos y Productos Sanitarios / スペイン医薬品・医療機器庁）がNCAとして市場監視・ビジランス・臨床試験監督を担う。自治州（Comunidades Autónomas）が地域レベルの市場監視を実施。",
      keyCharacteristics: [
        "EU MDR/IVDR が直接適用",
        "AEMPS がNCAとして市場監視・ビジランスを担当",
        "Real Decreto 192/2023 による国内補完",
        "ラベリング・IFU はスペイン語（カスティーリャ語）必須",
        "17の自治州が地域レベルの市場監視を実施",
        "スペイン固有の機器登録制度（Registro Español de Productos Sanitarios）",
      ],
    },

    authorities: [
      { name: "AEMPS", fullName: "Spanish Agency of Medicines and Medical Devices", localName: "Agencia Española de Medicamentos y Productos Sanitarios", role: "NCA: 医療機器の市場監視・ビジランス・臨床試験監督・登録管理", url: "https://www.aemps.gob.es/productos-sanitarios/", isPrimary: true },
      { name: "CCAA", fullName: "Autonomous Communities Health Authorities", localName: "Comunidades Autónomas", role: "地域レベルの市場監視・施設査察", url: null, isPrimary: false },
      { name: "DGFPS", fullName: "Directorate-General for Pharmacy and Health Products", localName: "Dirección General de Farmacia y Productos Sanitarios", role: "医療機器の償還・価格政策", url: "https://www.sanidad.gob.es/", isPrimary: false },
    ],

    notifiedBodies: {
      system: "EU MDR Notified Body 制度（スペイン国内に指定機関あり）",
      description: "AENOR International S.A.U.（NB 0099）がMDR指定。スペイン唯一のMDR指定NB。",
      bodies: [
        { nb: "0099", name: "AENOR International S.A.U.", url: "https://www.aenor.com/", mdr: true, ivdr: false },
      ],
    },

    deviceDefinition: {
      legalDefinition: "EU MDR Article 2(1) の定義がそのまま適用。",
      scope: "IVD は IVDR で別途規定。SaMD・AI/ML 搭載機器も対象。美容目的製品（Annex XVI）も適用。",
      notes: "MDR の定義がそのまま国内法に適用。追加的な定義変更なし。",
    },

    primaryLaw: {
      title: "Regulation (EU) 2017/745 — Medical Devices Regulation (MDR)",
      originalTitle: null,
      enacted: "2017（EU採択）/ 2021年5月26日適用",
      lastAmended: "2025（Regulation (EU) 2025/2457）",
      url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32017R0745",
      description: "EU MDR がスペインに直接適用。Real Decreto 192/2023 が国内補完法。",
    },

    implementingRegulations: [
      { title: "Real Decreto 192/2023", date: "2023-03-21", url: "https://www.boe.es/diario_boe/txt.php?id=BOE-A-2023-7335", description: "MDR/IVDR 国内補完法令。AEMPS権限・罰則・登録義務・言語要件。", category: "国内補完法令" },
      { title: "Real Decreto 1591/2009（旧規制、一部有効）", date: "2009", url: "https://www.boe.es/", description: "旧MDD国内実施令。MDR移行完了まで一部経過措置として残存。", category: "旧規制（経過措置）" },
    ],

    relatedLaws: [
      { title: "GDPR (Regulation (EU) 2016/679)", category: "データ保護", enacted: "2018", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679", relevance: "健康データに適用。Ley Orgánica 3/2018 (LOPDGDD) も併存。" },
      { title: "AI Act — Regulation (EU) 2024/1689", category: "人工知能", enacted: "2024", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32024R1689", relevance: "AI搭載医療機器はHigh-Risk AI System。" },
    ],

    classification: {
      system: "EU MDR 4クラス制（Class I / IIa / IIb / III）",
      basis: "EU MDR Annex VIII の22分類規則がそのまま適用。",
      classes: [
        { name: "Class I", nameJa: "クラスI", riskLevel: "低", description: "低リスク。自己宣言（Im/Is/Ir除く）。", examples: ["弾性包帯", "聴診器", "車椅子"], approvalPath: "自己宣言" },
        { name: "Class IIa", nameJa: "クラスIIa", riskLevel: "中低", description: "中低リスク。NB関与。", examples: ["補聴器", "超音波装置", "コンタクトレンズ"], approvalPath: "Notified Body審査" },
        { name: "Class IIb", nameJa: "クラスIIb", riskLevel: "中高", description: "中高リスク。NB詳細審査。", examples: ["人工呼吸器", "血液透析装置", "輸液ポンプ"], approvalPath: "Notified Body審査" },
        { name: "Class III", nameJa: "クラスIII", riskLevel: "高", description: "最高リスク。", examples: ["人工心臓弁", "冠動脈ステント", "乳房インプラント"], approvalPath: "NB審査 + Expert Panel相談" },
      ],
      rules: ["EU MDR Annex VIII の22分類規則を直接適用"],
      totalProductCodes: "EU CND コード",
    },

    conformityAssessment: {
      overview: "EU MDR に基づく適合性評価がそのまま適用。国内追加の市販前審査なし。AEMPS への事業者登録・Registro Español de Productos Sanitarios への機器登録が必要。",
      routes: [{ name: "EU MDR Conformity Assessment", nameJa: "EU MDR 適合性評価", applicableClasses: ["全クラス"], description: "EU MDR Annex IX〜XI。詳細はEUプロファイル参照。", subtypes: [], avgReviewTime: "EUプロファイル参照", fee: "Notified Body により異なる", url: "https://www.aemps.gob.es/productos-sanitarios/" }],
    },

    electronicSubmission: { system: "EUDAMED + AEMPS 国内登録（Registro Español de Productos Sanitarios）", url: "https://www.aemps.gob.es/productos-sanitarios/", description: "EUDAMED + AEMPS 国内機器登録。EUDAMED 4モジュール義務化: 2026年5月28日。", mandatory: true },
    udi: { required: true, system: "EU UDI System — EUDAMED", description: "EU MDR Article 27-29 UDI 要件がそのまま適用。", url: "https://ec.europa.eu/tools/eudamed/", timeline: "EUDAMED義務化: 2026年5月28日" },

    postMarket: {
      adverseEventReporting: { system: "EU Vigilance System — AEMPS", mandatory: true, url: "https://www.aemps.gob.es/productos-sanitarios/vigilancia/", description: "重篤有害事象をAEMPSに報告義務。MDR Article 87-92。Sistema Español de Vigilanciaで管理。" },
      recalls: { authority: "AEMPS", description: "FSCA/FSNはAEMPSに通知。AEMPSと自治州が連携して回収措置を実施。", url: "https://www.aemps.gob.es/" },
      surveillance: "EU MDR PMS/PSUR/PMCF要件がそのまま適用。",
    },

    certificateOfFreeSale: { available: true, issuingAuthority: "AEMPS", name: "Certificate of Free Sale (CFS)", description: "AEMPS がCFSを発行。", processingTime: "約2〜4週間", url: "https://www.aemps.gob.es/" },

    reimbursement: {
      system: "国民健康システム（Sistema Nacional de Salud: SNS）",
      authority: "Ministerio de Sanidad / DGFPS / 自治州",
      description: "スペインはSNSにより全国民に公的医療を提供。医療機器の償還はカタログ（Catálogo Común de Productos Sanitarios）に基づく。高額機器は病院予算から。インプラント等は個別償還リスト。各自治州が地域別に補充的償還決定を行う。",
      codingSystems: ["SNS 製品カタログ", "GRD（Grupos Relacionados por el Diagnóstico）"],
      url: "https://www.sanidad.gob.es/",
    },

    marketingRules: {
      authority: "AEMPS",
      description: "MDR Article 7 虚偽広告禁止。Real Decreto 192/2023 に基づく広告規制。",
      keyRules: ["スペイン語ラベリング・IFU必須", "MDR Article 7 虚偽広告禁止", "自治州レベルでの追加規制あり"],
    },

    mdsap: { status: "非参加", description: "EU加盟国としてMDSAP非参加。" },

    internationalStandards: {
      iso13485: { accepted: true, notes: "EU MDR QMS要件に基づき実質必須。EN ISO 13485:2016。" },
      iso14971: { accepted: true, notes: "EN ISO 14971:2019 + A11:2021。" },
      iec62304: { accepted: true, notes: "EN IEC 62304:2006 + A1:2015。" },
      iec60601: { accepted: true, notes: "EN IEC 60601 シリーズ。" },
      others: [],
    },

    recentDevelopments: [
      { date: "2025", title: "MDR延長規則適用", description: "Regulation (EU) 2025/2457 による移行期間延長。" },
      { date: "2023", title: "Real Decreto 192/2023 施行", description: "MDR/IVDR国内補完法令が施行。AEMPSの権限・手続を明確化。" },
    ],

    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- Italy ---
  // =========================================================================
  {
    code: "ITA",
    country: "イタリア",
    countryEn: "Italy",
    region: "Europe",
    flag: "🇮🇹",

    legalSystemOverview: {
      type: "EU加盟国（MDR/IVDR 直接適用）",
      description:
        "イタリアはEU加盟国であり、Regulation (EU) 2017/745（MDR）および Regulation (EU) 2017/746（IVDR）が直接適用される。国内補完法として Decreto legislativo 137/2022（立法命令137/2022号、MDR補完）および Decreto legislativo 138/2022（IVDR補完）が2022年に施行。Ministero della Salute（保健省）がNCAとして市場監視・ビジランスを管轄。機器登録はBanca dati/Repertorio dei dispositivi medici で管理される。",
      keyCharacteristics: [
        "EU MDR/IVDR が直接適用",
        "Ministero della Salute がNCAとして市場監視・ビジランスを担当",
        "D.lgs. 137/2022 + D.lgs. 138/2022 による国内補完",
        "ラベリング・IFU はイタリア語必須",
        "Banca dati/Repertorio（国内機器データベース）への登録義務",
        "国内に複数のNotified Body（IMQ、CERTIQUALITY等）",
      ],
    },

    authorities: [
      { name: "Min. Salute", fullName: "Ministry of Health — Directorate General for Medical Devices and Pharmaceutical Service", localName: "Ministero della Salute — Direzione Generale dei Dispositivi Medici e del Servizio Farmaceutico", role: "NCA: 医療機器の市場監視・ビジランス・臨床試験監督・登録管理", url: "https://www.salute.gov.it/portale/dispositiviMedici/", isPrimary: true },
      { name: "AIFA", fullName: "Italian Medicines Agency", localName: "Agenzia Italiana del Farmaco", role: "コンビネーション製品の規制（医薬品主要部分）", url: "https://www.aifa.gov.it/", isPrimary: false },
      { name: "AGENAS", fullName: "National Agency for Regional Health Services", localName: "Agenzia Nazionale per i Servizi Sanitari Regionali", role: "医療技術評価（HTA）・地域医療支援", url: "https://www.agenas.gov.it/", isPrimary: false },
    ],

    notifiedBodies: {
      system: "EU MDR Notified Body 制度（イタリア国内に複数機関指定）",
      description: "IMQ S.p.A.（NB 0051）、CERTIQUALITY S.r.l.（NB 0546）、Istituto Superiore di Sanità（NB 0373）等がMDR指定。イタリアは欧州有数のNB数を有する。",
      bodies: [
        { nb: "0051", name: "IMQ S.p.A.", url: "https://www.imq.it/", mdr: true, ivdr: false },
        { nb: "0546", name: "CERTIQUALITY S.r.l.", url: "https://www.certiquality.it/", mdr: true, ivdr: false },
        { nb: "0373", name: "Istituto Superiore di Sanità", url: "https://www.iss.it/", mdr: true, ivdr: true },
      ],
    },

    deviceDefinition: {
      legalDefinition: "EU MDR Article 2(1) の定義がそのまま適用。",
      scope: "IVD は IVDR で別途規定。SaMD・AI/ML 搭載機器も対象。美容目的製品（Annex XVI）も適用。",
      notes: "MDR の定義がそのまま国内法に適用。追加的な定義変更なし。",
    },

    primaryLaw: {
      title: "Regulation (EU) 2017/745 — Medical Devices Regulation (MDR)",
      originalTitle: null,
      enacted: "2017（EU採択）/ 2021年5月26日適用",
      lastAmended: "2025（Regulation (EU) 2025/2457）",
      url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32017R0745",
      description: "EU MDR がイタリアに直接適用。D.lgs. 137/2022 が国内補完法。",
    },

    implementingRegulations: [
      { title: "Decreto legislativo 5 agosto 2022, n. 137", date: "2022-08-05", url: "https://www.gazzettaufficiale.it/", description: "MDR 国内補完法。NCA権限・罰則・登録義務・言語要件。", category: "国内補完法" },
      { title: "Decreto legislativo 5 agosto 2022, n. 138", date: "2022-08-05", url: "https://www.gazzettaufficiale.it/", description: "IVDR 国内補完法。", category: "国内補完法" },
      { title: "Decreto Ministero della Salute（各種省令）", date: "各年", url: "https://www.salute.gov.it/", description: "機器登録・手数料・ビジランス手続等の詳細。", category: "省令" },
    ],

    relatedLaws: [
      { title: "GDPR (Regulation (EU) 2016/679)", category: "データ保護", enacted: "2018", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679", relevance: "健康データに適用。D.lgs. 196/2003（改正済）も併存。" },
      { title: "AI Act — Regulation (EU) 2024/1689", category: "人工知能", enacted: "2024", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32024R1689", relevance: "AI搭載医療機器はHigh-Risk AI System。" },
    ],

    classification: {
      system: "EU MDR 4クラス制（Class I / IIa / IIb / III）",
      basis: "EU MDR Annex VIII の22分類規則がそのまま適用。",
      classes: [
        { name: "Class I", nameJa: "クラスI", riskLevel: "低", description: "低リスク。自己宣言（Im/Is/Ir除く）。", examples: ["弾性包帯", "聴診器", "車椅子"], approvalPath: "自己宣言" },
        { name: "Class IIa", nameJa: "クラスIIa", riskLevel: "中低", description: "中低リスク。NB関与。", examples: ["補聴器", "超音波装置", "コンタクトレンズ"], approvalPath: "Notified Body審査" },
        { name: "Class IIb", nameJa: "クラスIIb", riskLevel: "中高", description: "中高リスク。NB詳細審査。", examples: ["人工呼吸器", "血液透析装置", "輸液ポンプ"], approvalPath: "Notified Body審査" },
        { name: "Class III", nameJa: "クラスIII", riskLevel: "高", description: "最高リスク。", examples: ["人工心臓弁", "冠動脈ステント", "乳房インプラント"], approvalPath: "NB審査 + Expert Panel相談" },
      ],
      rules: ["EU MDR Annex VIII の22分類規則を直接適用"],
      totalProductCodes: "EU CND コード + Repertorio CND",
    },

    conformityAssessment: {
      overview: "EU MDR に基づく適合性評価がそのまま適用。国内追加の市販前審査なし。Ministero della Salute への事業者登録・Repertorio への機器登録が必要。",
      routes: [{ name: "EU MDR Conformity Assessment", nameJa: "EU MDR 適合性評価", applicableClasses: ["全クラス"], description: "EU MDR Annex IX〜XI。詳細はEUプロファイル参照。", subtypes: [], avgReviewTime: "EUプロファイル参照", fee: "Notified Body により異なる", url: "https://www.salute.gov.it/portale/dispositiviMedici/" }],
    },

    electronicSubmission: { system: "EUDAMED + Banca dati/Repertorio dei dispositivi medici", url: "https://www.salute.gov.it/portale/dispositiviMedici/", description: "EUDAMED + 国内Repertorio登録（義務）。EUDAMED 4モジュール義務化: 2026年5月28日。", mandatory: true },
    udi: { required: true, system: "EU UDI System — EUDAMED", description: "EU MDR Article 27-29 UDI 要件がそのまま適用。Repertorio のCNDコードも並行。", url: "https://ec.europa.eu/tools/eudamed/", timeline: "EUDAMED義務化: 2026年5月28日" },

    postMarket: {
      adverseEventReporting: { system: "EU Vigilance System — Ministero della Salute", mandatory: true, url: "https://www.salute.gov.it/portale/dispositiviMedici/", description: "重篤有害事象をMinistero della Saluteに報告義務。MDR Article 87-92。" },
      recalls: { authority: "Ministero della Salute", description: "FSCA/FSNはMinistero della Saluteに通知。保健省が回収命令権限を有する。", url: "https://www.salute.gov.it/" },
      surveillance: "EU MDR PMS/PSUR/PMCF要件がそのまま適用。",
    },

    certificateOfFreeSale: { available: true, issuingAuthority: "Ministero della Salute", name: "Certificate of Free Sale (CFS)", description: "Ministero della Salute がCFSを発行。", processingTime: "約4〜6週間", url: "https://www.salute.gov.it/" },

    reimbursement: {
      system: "国民保健サービス（Servizio Sanitario Nazionale: SSN）",
      authority: "Ministero della Salute / AGENAS / 州（Regioni）",
      description: "イタリアはSSNにより全国民に公的医療を提供。医療機器の償還はRepertorio登録に基づく。高額機器は病院予算（DRG: Diagnosis Related Groups）。インプラント・補装具等はLEA（Livelli Essenziali di Assistenza、必須給付水準）に含まれるものが償還対象。20州 + 2自治県が地域別に医療予算を管理。AGENAS がHTA評価を担当。",
      codingSystems: ["Repertorio CND コード", "DRG", "Nomenclatore tariffario"],
      url: "https://www.salute.gov.it/",
    },

    marketingRules: {
      authority: "Ministero della Salute",
      description: "MDR Article 7 虚偽広告禁止。D.lgs. 137/2022 および D.lgs. 46/1997（旧規定残存部分）に基づく広告規制。",
      keyRules: ["イタリア語ラベリング・IFU必須", "MDR Article 7 虚偽広告禁止", "医療機器広告はMinistero della Saluteの監督下"],
    },

    mdsap: { status: "非参加", description: "EU加盟国としてMDSAP非参加。" },

    internationalStandards: {
      iso13485: { accepted: true, notes: "EU MDR QMS要件に基づき実質必須。EN ISO 13485:2016。" },
      iso14971: { accepted: true, notes: "EN ISO 14971:2019 + A11:2021。" },
      iec62304: { accepted: true, notes: "EN IEC 62304:2006 + A1:2015。" },
      iec60601: { accepted: true, notes: "EN IEC 60601 シリーズ。" },
      others: [],
    },

    recentDevelopments: [
      { date: "2025", title: "MDR延長規則適用", description: "Regulation (EU) 2025/2457 による移行期間延長。" },
      { date: "2024", title: "HTA制度改革", description: "EU HTA Regulation (EU) 2021/2282 の国内実施に向けAGENASの役割強化。" },
      { date: "2022", title: "D.lgs. 137/2022 施行", description: "MDR国内補完法が施行。罰則・登録義務等を規定。" },
    ],

    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- Romania ---
  // =========================================================================
  {
    code: "ROU",
    country: "ルーマニア",
    countryEn: "Romania",
    region: "Europe",
    flag: "🇷🇴",

    legalSystemOverview: {
      type: "EU加盟国（MDR/IVDR 直接適用）",
      description:
        "ルーマニアはEU加盟国であり、Regulation (EU) 2017/745（MDR）および Regulation (EU) 2017/746（IVDR）が直接適用される。国内補完法として OUG 46/2021（緊急政府令46/2021号）が制定されている。NAMMDR（National Agency for Medicines and Medical Devices of Romania / Agenția Națională a Medicamentului și a Dispozitivelor Medicale din România, ANMDMR）がNCAとして市場監視・ビジランスを管轄する。",
      keyCharacteristics: [
        "EU MDR/IVDR が直接適用",
        "NAMMDR がNCAとして市場監視・ビジランスを担当",
        "OUG 46/2021 による国内補完",
        "ラベリング・IFU はルーマニア語必須",
        "国内にNotified Body なし（EU域内他国のNBを利用）",
        "EU加盟後も規制体制の近代化が進行中",
      ],
    },

    authorities: [
      { name: "NAMMDR (ANMDMR)", fullName: "National Agency for Medicines and Medical Devices of Romania", localName: "Agenția Națională a Medicamentului și a Dispozitivelor Medicale din România", role: "NCA: 医療機器の市場監視・ビジランス・臨床試験監督・登録管理", url: "https://www.anm.ro/", isPrimary: true },
      { name: "CNAS", fullName: "National Health Insurance House", localName: "Casa Națională de Asigurări de Sănătate", role: "医療保険償還管理", url: "https://www.cnas.ro/", isPrimary: false },
      { name: "MS", fullName: "Ministry of Health", localName: "Ministerul Sănătății", role: "医療機器政策立案・法整備", url: "https://www.ms.ro/", isPrimary: false },
    ],

    notifiedBodies: {
      system: "EU MDR Notified Body 制度（ルーマニア国内に指定機関なし）",
      description: "ルーマニア国内にMDR指定Notified Bodyは存在しない。製造業者はEU域内他国の指定NBを利用する。",
      bodies: [],
    },

    deviceDefinition: {
      legalDefinition: "EU MDR Article 2(1) の定義がそのまま適用。",
      scope: "IVD は IVDR で別途規定。SaMD・AI/ML 搭載機器も対象。美容目的製品（Annex XVI）も適用。",
      notes: "MDR の定義がそのまま国内法に適用。追加的な定義変更なし。",
    },

    primaryLaw: {
      title: "Regulation (EU) 2017/745 — Medical Devices Regulation (MDR)",
      originalTitle: null,
      enacted: "2017（EU採択）/ 2021年5月26日適用",
      lastAmended: "2025（Regulation (EU) 2025/2457）",
      url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32017R0745",
      description: "EU MDR がルーマニアに直接適用。OUG 46/2021 が国内補完法。",
    },

    implementingRegulations: [
      { title: "OUG 46/2021（緊急政府令46/2021号）", date: "2021-05-26", url: "https://www.anm.ro/", description: "MDR/IVDR 国内補完法令。NCA権限・罰則・登録義務。", category: "国内補完法令" },
      { title: "HG（政府決定）— 各種施行細則", date: "各年", url: "https://www.anm.ro/", description: "手数料・登録手続等の具体化。", category: "施行細則" },
    ],

    relatedLaws: [
      { title: "GDPR (Regulation (EU) 2016/679)", category: "データ保護", enacted: "2018", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679", relevance: "健康データに適用。Law 190/2018 も併存。" },
      { title: "AI Act — Regulation (EU) 2024/1689", category: "人工知能", enacted: "2024", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32024R1689", relevance: "AI搭載医療機器はHigh-Risk AI System。" },
    ],

    classification: {
      system: "EU MDR 4クラス制（Class I / IIa / IIb / III）",
      basis: "EU MDR Annex VIII の22分類規則がそのまま適用。",
      classes: [
        { name: "Class I", nameJa: "クラスI", riskLevel: "低", description: "低リスク。自己宣言（Im/Is/Ir除く）。", examples: ["弾性包帯", "聴診器", "車椅子"], approvalPath: "自己宣言" },
        { name: "Class IIa", nameJa: "クラスIIa", riskLevel: "中低", description: "中低リスク。NB関与。", examples: ["補聴器", "超音波装置", "コンタクトレンズ"], approvalPath: "Notified Body審査" },
        { name: "Class IIb", nameJa: "クラスIIb", riskLevel: "中高", description: "中高リスク。NB詳細審査。", examples: ["人工呼吸器", "血液透析装置", "輸液ポンプ"], approvalPath: "Notified Body審査" },
        { name: "Class III", nameJa: "クラスIII", riskLevel: "高", description: "最高リスク。", examples: ["人工心臓弁", "冠動脈ステント", "乳房インプラント"], approvalPath: "NB審査 + Expert Panel相談" },
      ],
      rules: ["EU MDR Annex VIII の22分類規則を直接適用"],
      totalProductCodes: "EU CND コード",
    },

    conformityAssessment: {
      overview: "EU MDR に基づく適合性評価がそのまま適用。国内追加の市販前審査なし。NAMMDR への事業者登録が必要。",
      routes: [{ name: "EU MDR Conformity Assessment", nameJa: "EU MDR 適合性評価", applicableClasses: ["全クラス"], description: "EU MDR Annex IX〜XI。詳細はEUプロファイル参照。", subtypes: [], avgReviewTime: "EUプロファイル参照", fee: "Notified Body により異なる（EU域内他国のNBを利用）", url: "https://www.anm.ro/" }],
    },

    electronicSubmission: { system: "EUDAMED + NAMMDR 国内登録", url: "https://www.anm.ro/", description: "EUDAMED + NAMMDR 事業者登録。EUDAMED 4モジュール義務化: 2026年5月28日。", mandatory: true },
    udi: { required: true, system: "EU UDI System — EUDAMED", description: "EU MDR Article 27-29 UDI 要件がそのまま適用。", url: "https://ec.europa.eu/tools/eudamed/", timeline: "EUDAMED義務化: 2026年5月28日" },

    postMarket: {
      adverseEventReporting: { system: "EU Vigilance System — NAMMDR", mandatory: true, url: "https://www.anm.ro/", description: "重篤有害事象をNAMMDRに報告義務。MDR Article 87-92。" },
      recalls: { authority: "NAMMDR", description: "FSCA/FSNはNAMMDRに通知。NAMMDRが市場からの回収命令権限を有する。", url: "https://www.anm.ro/" },
      surveillance: "EU MDR PMS/PSUR/PMCF要件がそのまま適用。",
    },

    certificateOfFreeSale: { available: true, issuingAuthority: "NAMMDR", name: "Certificate of Free Sale (CFS)", description: "NAMMDR がCFSを発行。", processingTime: "要確認", url: "https://www.anm.ro/" },

    reimbursement: {
      system: "社会健康保険制度（CNAS）",
      authority: "CNAS（Casa Națională de Asigurări de Sănătate）",
      description: "ルーマニアはCNASによる社会健康保険制度。医療機器の償還は基本パッケージ（pachetul de bază）に含まれるサービスの一部として提供。高額インプラント・補装具はCNAS償還リストに基づく。DRGシステムも導入。",
      codingSystems: ["DRG-RO", "CNAS 償還リスト"],
      url: "https://www.cnas.ro/",
    },

    marketingRules: {
      authority: "NAMMDR",
      description: "MDR Article 7 虚偽広告禁止。OUG 46/2021 に基づく規制。",
      keyRules: ["ルーマニア語ラベリング・IFU必須", "MDR Article 7 虚偽広告禁止"],
    },

    mdsap: { status: "非参加", description: "EU加盟国としてMDSAP非参加。" },

    internationalStandards: {
      iso13485: { accepted: true, notes: "EU MDR QMS要件に基づき実質必須。EN ISO 13485:2016。" },
      iso14971: { accepted: true, notes: "EN ISO 14971:2019 + A11:2021。" },
      iec62304: { accepted: true, notes: "EN IEC 62304:2006 + A1:2015。" },
      iec60601: { accepted: true, notes: "EN IEC 60601 シリーズ。" },
      others: [],
    },

    recentDevelopments: [
      { date: "2025", title: "MDR延長規則適用", description: "Regulation (EU) 2025/2457 による移行期間延長。" },
      { date: "2024-2025", title: "規制体制の近代化", description: "NAMMDR の体制強化。EU資金を活用した規制能力構築。" },
    ],

    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- Bulgaria ---
  // =========================================================================
  {
    code: "BGR",
    country: "ブルガリア",
    countryEn: "Bulgaria",
    region: "Europe",
    flag: "🇧🇬",

    legalSystemOverview: {
      type: "EU加盟国（MDR/IVDR 直接適用）",
      description:
        "ブルガリアはEU加盟国であり、Regulation (EU) 2017/745（MDR）および Regulation (EU) 2017/746（IVDR）が直接適用される。国内補完法として Закон за медицинските изделия（ZMI / 医療機器法）の改正版が施行されている。BDA（Bulgarian Drug Agency / Изпълнителна агенция по лекарствата, IAL）がNCAとして市場監視・ビジランスを管轄する。",
      keyCharacteristics: [
        "EU MDR/IVDR が直接適用",
        "BDA（IAL）がNCAとして市場監視・ビジランスを担当",
        "ZMI（医療機器法）改正による国内補完",
        "ラベリング・IFU はブルガリア語必須",
        "国内にNotified Body なし（EU域内他国のNBを利用）",
        "規制体制はEU加盟以降継続的に強化中",
      ],
    },

    authorities: [
      { name: "BDA (IAL)", fullName: "Bulgarian Drug Agency", localName: "Изпълнителна агенция по лекарствата (ИАЛ)", role: "NCA: 医療機器の市場監視・ビジランス・臨床試験監督・登録管理", url: "https://www.bda.bg/", isPrimary: true },
      { name: "NHIF", fullName: "National Health Insurance Fund", localName: "Национална здравноосигурителна каса (НЗОК)", role: "医療保険償還管理", url: "https://www.nhif.bg/", isPrimary: false },
      { name: "MH", fullName: "Ministry of Health", localName: "Министерство на здравеопазването", role: "医療機器政策立案・法整備", url: "https://www.mh.government.bg/", isPrimary: false },
    ],

    notifiedBodies: {
      system: "EU MDR Notified Body 制度（ブルガリア国内に指定機関なし）",
      description: "ブルガリア国内にMDR指定Notified Bodyは存在しない。製造業者はEU域内他国の指定NBを利用する。",
      bodies: [],
    },

    deviceDefinition: {
      legalDefinition: "EU MDR Article 2(1) の定義がそのまま適用。",
      scope: "IVD は IVDR で別途規定。SaMD・AI/ML 搭載機器も対象。美容目的製品（Annex XVI）も適用。",
      notes: "MDR の定義がそのまま国内法に適用。追加的な定義変更なし。",
    },

    primaryLaw: {
      title: "Regulation (EU) 2017/745 — Medical Devices Regulation (MDR)",
      originalTitle: null,
      enacted: "2017（EU採択）/ 2021年5月26日適用",
      lastAmended: "2025（Regulation (EU) 2025/2457）",
      url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32017R0745",
      description: "EU MDR がブルガリアに直接適用。ZMI（医療機器法）改正が国内補完法。",
    },

    implementingRegulations: [
      { title: "Закон за медицинските изделия（ZMI / 医療機器法）改正", date: "2021", url: "https://www.bda.bg/", description: "MDR/IVDR 国内補完法。NCA権限・罰則・登録義務・言語要件。", category: "国内補完法" },
      { title: "Наредби（省令）— 各種施行細則", date: "各年", url: "https://www.bda.bg/", description: "登録手続・手数料・ビジランス手続等。", category: "施行細則" },
    ],

    relatedLaws: [
      { title: "GDPR (Regulation (EU) 2016/679)", category: "データ保護", enacted: "2018", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679", relevance: "健康データに適用。Закон за защита на личните данни も併存。" },
      { title: "AI Act — Regulation (EU) 2024/1689", category: "人工知能", enacted: "2024", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32024R1689", relevance: "AI搭載医療機器はHigh-Risk AI System。" },
    ],

    classification: {
      system: "EU MDR 4クラス制（Class I / IIa / IIb / III）",
      basis: "EU MDR Annex VIII の22分類規則がそのまま適用。",
      classes: [
        { name: "Class I", nameJa: "クラスI", riskLevel: "低", description: "低リスク。自己宣言（Im/Is/Ir除く）。", examples: ["弾性包帯", "聴診器", "車椅子"], approvalPath: "自己宣言" },
        { name: "Class IIa", nameJa: "クラスIIa", riskLevel: "中低", description: "中低リスク。NB関与。", examples: ["補聴器", "超音波装置", "コンタクトレンズ"], approvalPath: "Notified Body審査" },
        { name: "Class IIb", nameJa: "クラスIIb", riskLevel: "中高", description: "中高リスク。NB詳細審査。", examples: ["人工呼吸器", "血液透析装置", "輸液ポンプ"], approvalPath: "Notified Body審査" },
        { name: "Class III", nameJa: "クラスIII", riskLevel: "高", description: "最高リスク。", examples: ["人工心臓弁", "冠動脈ステント", "乳房インプラント"], approvalPath: "NB審査 + Expert Panel相談" },
      ],
      rules: ["EU MDR Annex VIII の22分類規則を直接適用"],
      totalProductCodes: "EU CND コード",
    },

    conformityAssessment: {
      overview: "EU MDR に基づく適合性評価がそのまま適用。国内追加の市販前審査なし。BDA への事業者登録が必要。",
      routes: [{ name: "EU MDR Conformity Assessment", nameJa: "EU MDR 適合性評価", applicableClasses: ["全クラス"], description: "EU MDR Annex IX〜XI。詳細はEUプロファイル参照。", subtypes: [], avgReviewTime: "EUプロファイル参照", fee: "Notified Body により異なる（EU域内他国のNBを利用）", url: "https://www.bda.bg/" }],
    },

    electronicSubmission: { system: "EUDAMED + BDA 国内登録", url: "https://www.bda.bg/", description: "EUDAMED + BDA 事業者登録。EUDAMED 4モジュール義務化: 2026年5月28日。", mandatory: true },
    udi: { required: true, system: "EU UDI System — EUDAMED", description: "EU MDR Article 27-29 UDI 要件がそのまま適用。", url: "https://ec.europa.eu/tools/eudamed/", timeline: "EUDAMED義務化: 2026年5月28日" },

    postMarket: {
      adverseEventReporting: { system: "EU Vigilance System — BDA", mandatory: true, url: "https://www.bda.bg/", description: "重篤有害事象をBDAに報告義務。MDR Article 87-92。" },
      recalls: { authority: "BDA", description: "FSCA/FSNはBDAに通知。BDAが市場からの回収命令権限を有する。", url: "https://www.bda.bg/" },
      surveillance: "EU MDR PMS/PSUR/PMCF要件がそのまま適用。",
    },

    certificateOfFreeSale: { available: true, issuingAuthority: "BDA", name: "Certificate of Free Sale (CFS)", description: "BDA がCFSを発行。", processingTime: "要確認", url: "https://www.bda.bg/" },

    reimbursement: {
      system: "社会健康保険制度（NHIF）",
      authority: "NHIF（Национална здравноосигурителна каса）",
      description: "ブルガリアはNHIFによる社会健康保険制度。医療機器の償還は基本パッケージに含まれるサービスの一部。高額インプラントはNHIF対象リスト。補装具は社会支援制度でカバー。DRGベースの病院支払。EU加盟国中で医療支出GDPに対する比率が低く、償還範囲は限定的。",
      codingSystems: ["DRG-BG", "NHIF 償還リスト"],
      url: "https://www.nhif.bg/",
    },

    marketingRules: {
      authority: "BDA",
      description: "MDR Article 7 虚偽広告禁止。ZMI に基づく規制。",
      keyRules: ["ブルガリア語ラベリング・IFU必須", "MDR Article 7 虚偽広告禁止"],
    },

    mdsap: { status: "非参加", description: "EU加盟国としてMDSAP非参加。" },

    internationalStandards: {
      iso13485: { accepted: true, notes: "EU MDR QMS要件に基づき実質必須。EN ISO 13485:2016。" },
      iso14971: { accepted: true, notes: "EN ISO 14971:2019 + A11:2021。" },
      iec62304: { accepted: true, notes: "EN IEC 62304:2006 + A1:2015。" },
      iec60601: { accepted: true, notes: "EN IEC 60601 シリーズ。" },
      others: [],
    },

    recentDevelopments: [
      { date: "2025", title: "MDR延長規則適用", description: "Regulation (EU) 2025/2457 による移行期間延長。" },
      { date: "2024-2025", title: "規制能力構築", description: "EU支援を活用したBDAの市場監視能力強化。" },
    ],

    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- Croatia ---
  // =========================================================================
  {
    code: "HRV",
    country: "クロアチア",
    countryEn: "Croatia",
    region: "Europe",
    flag: "🇭🇷",

    legalSystemOverview: {
      type: "EU加盟国（MDR/IVDR 直接適用）",
      description:
        "クロアチアはEU加盟国（2013年加盟）であり、Regulation (EU) 2017/745（MDR）および Regulation (EU) 2017/746（IVDR）が直接適用される。国内補完法として Zakon o medicinskim proizvodima（医療機器法）の改正版が施行されている。HALMED（Agency for Medicinal Products and Medical Devices of Croatia / Agencija za lijekove i medicinske proizvode）がNCAとして市場監視・ビジランスを管轄する。",
      keyCharacteristics: [
        "EU MDR/IVDR が直接適用",
        "HALMED がNCAとして市場監視・ビジランスを担当",
        "Zakon o medicinskim proizvodima 改正による国内補完",
        "ラベリング・IFU はクロアチア語必須",
        "国内にNotified Body なし（EU域内他国のNBを利用）",
        "2013年EU加盟後、規制体制をEU基準に完全移行",
      ],
    },

    authorities: [
      { name: "HALMED", fullName: "Agency for Medicinal Products and Medical Devices of Croatia", localName: "Agencija za lijekove i medicinske proizvode", role: "NCA: 医療機器の市場監視・ビジランス・臨床試験監督・登録管理", url: "https://www.halmed.hr/en/Medicinski-proizvodi/", isPrimary: true },
      { name: "HZZO", fullName: "Croatian Health Insurance Fund", localName: "Hrvatski zavod za zdravstveno osiguranje", role: "医療保険償還管理", url: "https://www.hzzo.hr/", isPrimary: false },
      { name: "MIZ", fullName: "Ministry of Health", localName: "Ministarstvo zdravstva", role: "医療機器政策立案・法整備", url: "https://zdravlje.gov.hr/", isPrimary: false },
    ],

    notifiedBodies: {
      system: "EU MDR Notified Body 制度（クロアチア国内に指定機関なし）",
      description: "クロアチア国内にMDR指定Notified Bodyは存在しない。製造業者はEU域内他国の指定NBを利用する。",
      bodies: [],
    },

    deviceDefinition: {
      legalDefinition: "EU MDR Article 2(1) の定義がそのまま適用。",
      scope: "IVD は IVDR で別途規定。SaMD・AI/ML 搭載機器も対象。美容目的製品（Annex XVI）も適用。",
      notes: "MDR の定義がそのまま国内法に適用。追加的な定義変更なし。",
    },

    primaryLaw: {
      title: "Regulation (EU) 2017/745 — Medical Devices Regulation (MDR)",
      originalTitle: null,
      enacted: "2017（EU採択）/ 2021年5月26日適用",
      lastAmended: "2025（Regulation (EU) 2025/2457）",
      url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32017R0745",
      description: "EU MDR がクロアチアに直接適用。Zakon o medicinskim proizvodima 改正が国内補完法。",
    },

    implementingRegulations: [
      { title: "Zakon o medicinskim proizvodima（医療機器法）改正", date: "2021", url: "https://www.halmed.hr/en/Medicinski-proizvodi/", description: "MDR/IVDR 国内補完法。NCA権限・罰則・登録義務・言語要件。", category: "国内補完法" },
      { title: "Pravilnici（省令）— 各種施行細則", date: "各年", url: "https://www.halmed.hr/", description: "登録手続・手数料・ビジランス手続等。", category: "施行細則" },
    ],

    relatedLaws: [
      { title: "GDPR (Regulation (EU) 2016/679)", category: "データ保護", enacted: "2018", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679", relevance: "健康データに適用。Zakon o provedbi Opće uredbe o zaštiti podataka も併存。" },
      { title: "AI Act — Regulation (EU) 2024/1689", category: "人工知能", enacted: "2024", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32024R1689", relevance: "AI搭載医療機器はHigh-Risk AI System。" },
    ],

    classification: {
      system: "EU MDR 4クラス制（Class I / IIa / IIb / III）",
      basis: "EU MDR Annex VIII の22分類規則がそのまま適用。",
      classes: [
        { name: "Class I", nameJa: "クラスI", riskLevel: "低", description: "低リスク。自己宣言（Im/Is/Ir除く）。", examples: ["弾性包帯", "聴診器", "車椅子"], approvalPath: "自己宣言" },
        { name: "Class IIa", nameJa: "クラスIIa", riskLevel: "中低", description: "中低リスク。NB関与。", examples: ["補聴器", "超音波装置", "コンタクトレンズ"], approvalPath: "Notified Body審査" },
        { name: "Class IIb", nameJa: "クラスIIb", riskLevel: "中高", description: "中高リスク。NB詳細審査。", examples: ["人工呼吸器", "血液透析装置", "輸液ポンプ"], approvalPath: "Notified Body審査" },
        { name: "Class III", nameJa: "クラスIII", riskLevel: "高", description: "最高リスク。", examples: ["人工心臓弁", "冠動脈ステント", "乳房インプラント"], approvalPath: "NB審査 + Expert Panel相談" },
      ],
      rules: ["EU MDR Annex VIII の22分類規則を直接適用"],
      totalProductCodes: "EU CND コード",
    },

    conformityAssessment: {
      overview: "EU MDR に基づく適合性評価がそのまま適用。国内追加の市販前審査なし。HALMED への事業者登録が必要。",
      routes: [{ name: "EU MDR Conformity Assessment", nameJa: "EU MDR 適合性評価", applicableClasses: ["全クラス"], description: "EU MDR Annex IX〜XI。詳細はEUプロファイル参照。", subtypes: [], avgReviewTime: "EUプロファイル参照", fee: "Notified Body により異なる（EU域内他国のNBを利用）", url: "https://www.halmed.hr/en/Medicinski-proizvodi/" }],
    },

    electronicSubmission: { system: "EUDAMED + HALMED 国内登録", url: "https://www.halmed.hr/", description: "EUDAMED + HALMED 事業者登録。EUDAMED 4モジュール義務化: 2026年5月28日。", mandatory: true },
    udi: { required: true, system: "EU UDI System — EUDAMED", description: "EU MDR Article 27-29 UDI 要件がそのまま適用。", url: "https://ec.europa.eu/tools/eudamed/", timeline: "EUDAMED義務化: 2026年5月28日" },

    postMarket: {
      adverseEventReporting: { system: "EU Vigilance System — HALMED", mandatory: true, url: "https://www.halmed.hr/en/Medicinski-proizvodi/Vigilancija/", description: "重篤有害事象をHALMEDに報告義務。MDR Article 87-92。" },
      recalls: { authority: "HALMED", description: "FSCA/FSNはHALMEDに通知。HALMEDが市場からの回収命令権限を有する。", url: "https://www.halmed.hr/" },
      surveillance: "EU MDR PMS/PSUR/PMCF要件がそのまま適用。",
    },

    certificateOfFreeSale: { available: true, issuingAuthority: "HALMED", name: "Certificate of Free Sale (CFS)", description: "HALMED がCFSを発行。", processingTime: "要確認", url: "https://www.halmed.hr/" },

    reimbursement: {
      system: "社会健康保険制度（HZZO）",
      authority: "HZZO（Hrvatski zavod za zdravstveno osiguranje）",
      description: "クロアチアはHZZOによる社会健康保険制度。基本パッケージにより医療サービスをカバー。医療機器の償還はHZZO 基本リスト・補充リストに基づく。インプラント・補装具はHZZO承認リスト。DRGシステム（Australian DRG adapted）を導入。",
      codingSystems: ["HR-DRG", "HZZO 償還リスト"],
      url: "https://www.hzzo.hr/",
    },

    marketingRules: {
      authority: "HALMED",
      description: "MDR Article 7 虚偽広告禁止。Zakon o medicinskim proizvodima に基づく規制。",
      keyRules: ["クロアチア語ラベリング・IFU必須", "MDR Article 7 虚偽広告禁止"],
    },

    mdsap: { status: "非参加", description: "EU加盟国としてMDSAP非参加。" },

    internationalStandards: {
      iso13485: { accepted: true, notes: "EU MDR QMS要件に基づき実質必須。EN ISO 13485:2016。" },
      iso14971: { accepted: true, notes: "EN ISO 14971:2019 + A11:2021。" },
      iec62304: { accepted: true, notes: "EN IEC 62304:2006 + A1:2015。" },
      iec60601: { accepted: true, notes: "EN IEC 60601 シリーズ。" },
      others: [],
    },

    recentDevelopments: [
      { date: "2025", title: "MDR延長規則適用", description: "Regulation (EU) 2025/2457 による移行期間延長。" },
      { date: "2023", title: "ユーロ導入", description: "2023年1月ユーロ導入。医療機器の価格・手数料体系にも影響。" },
    ],

    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- Tanzania ---
  // =========================================================================
  {
    code: "TZA",
    country: "タンザニア",
    countryEn: "United Republic of Tanzania",
    region: "Middle East & Africa",
    flag: "🇹🇿",
    legalSystemOverview: {
      type: "中央集権制（Centralized system）",
      description: "タンザニアの医療機器規制はTMDA（Tanzania Medicines and Medical Devices Authority）が管轄する。Tanzania Medicines and Medical Devices Act, 2003（Act No.1 of 2003）を根拠法とし、医薬品・医療機器の規制を一元管理。東アフリカ共同体（EAC）の規制調和ガイドラインとの整合も推進中。",
      keyCharacteristics: ["TMDAによる一元的な規制体制", "リスクベースの4クラス分類（Class A/B/C/D）", "Tanzania Medicines and Medical Devices Act, 2003が根拠法", "EAC規制調和ガイドラインとの整合を推進", "先行認可国（CE/FDA等）の承認書類を参考にした審査"],
    },
    authorities: [{ name: "TMDA", fullName: "Tanzania Medicines and Medical Devices Authority", localName: null, role: "医療機器の登録・市販後監視・査察・リコール管理。主管当局。", url: "https://www.tmda.go.tz/", isPrimary: true }],
    notifiedBodies: { system: "なし（TMDA が直接審査）", description: "タンザニアではNotified Body制度は存在しない。TMDAが直接、医療機器の登録審査を実施する。", bodies: [] },
    deviceDefinition: { legalDefinition: "Tanzania Medicines and Medical Devices Act, 2003に定義。疾病の診断・治療・予防・監視・軽減等を目的とする機器・装置・器具・材料・ソフトウェア等で、主たる意図する作用が薬理学的・免疫学的・代謝的手段によらないもの。", scope: "IVD（体外診断用医療機器）も適用対象。医療機器全般を包括的に規制。", notes: "GHTF/IMDRF定義との整合を推進中。" },
    primaryLaw: { title: "Tanzania Medicines and Medical Devices Act, 2003 (Act No.1 of 2003)", originalTitle: null, enacted: "2003", lastAmended: "要確認", url: "https://www.tmda.go.tz/", description: "TMDAの設立根拠法。医薬品・医療機器の規制権限をTMDAに付与。登録・市販後監視・査察等の権限を規定。" },
    implementingRegulations: [{ title: "Tanzania Medicines and Medical Devices (Registration of Medical Devices) Regulations", date: "要確認", url: "https://www.tmda.go.tz/", description: "医療機器の登録手続・分類・ラベリング等の詳細を規定する施行規則。", category: "医療機器" }],
    relatedLaws: [],
    classification: {
      system: "4クラス制（Class A/B/C/D）",
      basis: "リスクベース（GHTF/IMDRF分類ルールに準拠）。意図する用途・侵襲性・使用期間・エネルギー源等に基づく。",
      classes: [
        { name: "Class A", nameJa: "クラスA", riskLevel: "低", description: "低リスク機器。TMDA登録が必要。", examples: ["弾性包帯", "聴診器", "舌圧子"], approvalPath: "TMDA登録" },
        { name: "Class B", nameJa: "クラスB", riskLevel: "中低", description: "中程度の低リスク機器。TMDA登録が必要。", examples: ["血圧計", "補聴器", "超音波診断装置"], approvalPath: "TMDA登録" },
        { name: "Class C", nameJa: "クラスC", riskLevel: "中高", description: "中高リスク機器。TMDA登録＋臨床評価が必要。", examples: ["人工関節", "人工呼吸器", "透析装置"], approvalPath: "TMDA登録＋臨床評価" },
        { name: "Class D", nameJa: "クラスD", riskLevel: "高", description: "最高リスク機器。最も厳格な審査。", examples: ["人工心臓弁", "埋込み型除細動器"], approvalPath: "TMDA登録＋臨床データ" },
      ],
      rules: ["GHTF/IMDRFの分類ルールに準拠", "TMDAガイドラインに詳細規定"],
      totalProductCodes: "要確認",
    },
    conformityAssessment: {
      overview: "全クラスの医療機器にTMDA登録が必要。先行認可国（CE/FDA等）の承認書類を参考にした審査を実施。",
      routes: [{ name: "TMDA Registration", nameJa: "TMDA登録", applicableClasses: ["Class A", "Class B", "Class C", "Class D"], description: "TMDAに登録申請書類を提出。技術文書・CFS・QMS証明・ラベリング等を審査。", subtypes: [], avgReviewTime: "要確認", avgReviewTimeSource: null, fee: "要確認", feeSource: null, url: "https://www.tmda.go.tz/" }],
    },
    electronicSubmission: { system: "TMDA オンラインポータル", url: "https://www.tmda.go.tz/", description: "TMDAはオンラインでの申請受付を推進中。", mandatory: false },
    udi: { required: false, system: "未導入", description: "タンザニアでは現時点でUDI制度は未導入。", url: null, timeline: "要確認" },
    postMarket: {
      adverseEventReporting: { system: "TMDA有害事象報告制度", mandatory: true, url: "https://www.tmda.go.tz/", description: "製造業者・輸入業者・医療従事者は有害事象をTMDAに報告する義務がある。" },
      recalls: { authority: "TMDA", description: "TMDAがリコールを監督。安全性問題発見時に市場回収を命令可能。", url: "https://www.tmda.go.tz/" },
      surveillance: "TMDAによる市販後監視。EAC地域での情報共有も推進中。",
    },
    certificateOfFreeSale: { available: true, issuingAuthority: "輸出国の規制当局", name: "Certificate of Free Sale (CFS)", description: "登録申請時に原産国の規制当局からのCFS提出が求められる。", processingTime: "要確認", url: "https://www.tmda.go.tz/" },
    reimbursement: { system: "NHIF（National Health Insurance Fund）+ 民間保険", authority: "NHIF / Ministry of Health", description: "NHIFが公的医療保険を提供。医療機器に特化した体系的な償還制度は限定的。公立病院での調達は政府予算・ドナー資金に基づく。", codingSystems: [], url: null },
    marketingRules: { authority: "TMDA", description: "TMDAガイドラインに基づき、医療機器の広告・マーケティングを規制。未登録機器の広告は禁止。", keyRules: ["未登録医療機器の広告は禁止", "虚偽・誇大広告の禁止"] },
    mdsap: { status: "非参加", description: "タンザニアはMDSAPプログラムに参加していない。" },
    internationalStandards: {
      iso13485: { accepted: true, notes: "ISO 13485認証の取得が推奨される。登録審査で参照。" },
      iso14971: { accepted: true, notes: "リスクマネジメント。技術文書のリスク評価に適用。" },
      iec62304: { accepted: true, notes: "ソフトウェアライフサイクル。SaMD申請に参照。" },
      iec60601: { accepted: true, notes: "医用電気機器の安全・性能要求。" },
      others: [],
    },
    recentDevelopments: [{ date: "2025", title: "EAC規制調和の推進", description: "東アフリカ共同体（EAC）の医療機器規制調和ガイドラインとの整合を継続的に推進。" }],
    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- Ethiopia ---
  // =========================================================================
  {
    code: "ETH",
    country: "エチオピア",
    countryEn: "Ethiopia",
    region: "Middle East & Africa",
    flag: "🇪🇹",
    legalSystemOverview: {
      type: "中央集権制（Centralized system）",
      description: "エチオピアの医療機器規制はEFDA（Ethiopian Food and Drug Authority）が管轄する。Food and Medicine Administration Proclamation No. 1112/2019を根拠法とし、食品・医薬品・医療機器の規制を一元的に担う。規制枠組みは発展途上であり、国際的な規制整合を推進中。",
      keyCharacteristics: ["EFDAによる一元的な規制体制", "Proclamation No. 1112/2019が根拠法", "医療機器の登録制度を整備中", "WHO事前認定（PQ）製品の優先的受入れ", "規制能力の強化を国際支援のもと推進"],
    },
    authorities: [{ name: "EFDA", fullName: "Ethiopian Food and Drug Authority", localName: null, role: "医療機器の登録・市販後監視・査察・輸入管理。主管当局。", url: "https://www.efda.gov.et/", isPrimary: true }],
    notifiedBodies: { system: "なし（EFDA が直接審査）", description: "エチオピアではNotified Body制度は存在しない。EFDAが直接、医療機器の登録審査を実施する。", bodies: [] },
    deviceDefinition: { legalDefinition: "Proclamation No. 1112/2019および関連規則に定義。疾病の診断・治療・予防・監視・軽減等を目的とする機器・装置等。詳細な定義は要確認。", scope: "IVD（体外診断用医療機器）も適用対象。", notes: "定義と適用範囲の国際基準への整合を推進中。" },
    primaryLaw: { title: "Food and Medicine Administration Proclamation No. 1112/2019", originalTitle: null, enacted: "2019", lastAmended: null, url: "https://www.efda.gov.et/", description: "EFDAの設立根拠法。食品・医薬品・医療機器・化粧品の規制権限をEFDAに付与。" },
    implementingRegulations: [{ title: "EFDA Medical Device Registration Directive", date: "要確認", url: "https://www.efda.gov.et/", description: "医療機器の登録手続・分類等の詳細を規定する指令。整備中。", category: "医療機器" }],
    relatedLaws: [],
    classification: {
      system: "要確認（4クラス制を検討中）",
      basis: "リスクベース。GHTF/IMDRF分類ルールへの整合を推進中。詳細は要確認。",
      classes: [
        { name: "Class A", nameJa: "クラスA（想定）", riskLevel: "低", description: "低リスク機器。", examples: ["弾性包帯", "聴診器"], approvalPath: "EFDA登録" },
        { name: "Class B", nameJa: "クラスB（想定）", riskLevel: "中低", description: "中程度の低リスク機器。", examples: ["血圧計", "補聴器"], approvalPath: "EFDA登録" },
        { name: "Class C", nameJa: "クラスC（想定）", riskLevel: "中高", description: "中高リスク機器。", examples: ["人工呼吸器", "透析装置"], approvalPath: "EFDA登録＋臨床評価" },
        { name: "Class D", nameJa: "クラスD（想定）", riskLevel: "高", description: "最高リスク機器。", examples: ["人工心臓弁"], approvalPath: "EFDA登録＋臨床データ" },
      ],
      rules: ["分類制度の詳細は整備中", "GHTF/IMDRF分類ルールへの整合を目指す"],
      totalProductCodes: "要確認",
    },
    conformityAssessment: {
      overview: "医療機器のEFDA登録が必要。先行認可国（CE/FDA/WHO PQ等）の承認を参考にした審査。規制枠組みは整備中。",
      routes: [{ name: "EFDA Registration", nameJa: "EFDA登録", applicableClasses: ["全クラス"], description: "EFDAに登録申請書類を提出。CFS・技術文書・QMS証明等を審査。WHO PQ製品は優先処理される場合がある。", subtypes: [], avgReviewTime: "要確認", avgReviewTimeSource: null, fee: "要確認", feeSource: null, url: "https://www.efda.gov.et/" }],
    },
    electronicSubmission: { system: "要確認", url: "https://www.efda.gov.et/", description: "電子申請システムの整備状況は要確認。", mandatory: false },
    udi: { required: false, system: "未導入", description: "エチオピアでは現時点でUDI制度は未導入。", url: null, timeline: "要確認" },
    postMarket: {
      adverseEventReporting: { system: "EFDA有害事象報告制度", mandatory: true, url: "https://www.efda.gov.et/", description: "有害事象のEFDAへの報告義務が規定されている。体制は整備中。" },
      recalls: { authority: "EFDA", description: "EFDAがリコールを監督。", url: "https://www.efda.gov.et/" },
      surveillance: "市販後監視体制は整備中。国際支援のもと能力強化を推進。",
    },
    certificateOfFreeSale: { available: true, issuingAuthority: "輸出国の規制当局", name: "Certificate of Free Sale (CFS)", description: "登録申請時に原産国の規制当局からのCFS提出が求められる。", processingTime: "要確認", url: "https://www.efda.gov.et/" },
    reimbursement: { system: "CBHI（Community Based Health Insurance）+ 公的医療機関", authority: "Ministry of Health", description: "公的医療機関での調達が中心。CBHIの拡大を推進中。医療機器に特化した償還制度は限定的。", codingSystems: [], url: null },
    marketingRules: { authority: "EFDA", description: "EFDAが医療機器の広告・マーケティングを規制。未登録機器の販売・広告は禁止。", keyRules: ["未登録医療機器の販売・広告は禁止", "虚偽・誇大広告の禁止"] },
    mdsap: { status: "非参加", description: "エチオピアはMDSAPプログラムに参加していない。" },
    internationalStandards: {
      iso13485: { accepted: true, notes: "ISO 13485認証はQMS証明として参照。" },
      iso14971: { accepted: true, notes: "リスクマネジメントの国際規格として参照。" },
      iec62304: { accepted: true, notes: "ソフトウェア医療機器に対して参照。" },
      iec60601: { accepted: true, notes: "医用電気機器の安全規格として参照。" },
      others: [],
    },
    recentDevelopments: [{ date: "2019", title: "Proclamation No. 1112/2019の制定", description: "EFDAの設立根拠法であるProclamation No. 1112/2019が制定。医療機器を含む包括的な規制枠組みを整備。" }],
    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- Uganda ---
  // =========================================================================
  {
    code: "UGA",
    country: "ウガンダ",
    countryEn: "Uganda",
    region: "Middle East & Africa",
    flag: "🇺🇬",
    legalSystemOverview: {
      type: "中央集権制（Centralized system）",
      description: "ウガンダの医療機器規制はNDA（National Drug Authority）が管轄する。National Drug Policy and Authority Act (Cap 206)を根拠法とし、医薬品・医療機器の規制を担う。東アフリカ共同体（EAC）の規制調和ガイドラインとの整合も推進中。",
      keyCharacteristics: ["NDAによる一元的な規制体制", "National Drug Policy and Authority Act (Cap 206)が根拠法", "医療機器の登録制度を運用", "EAC規制調和ガイドラインとの整合を推進", "リスクベースの分類体系"],
    },
    authorities: [{ name: "NDA", fullName: "National Drug Authority", localName: null, role: "医療機器の登録・市販後監視・査察・輸入管理。主管当局。", url: "https://www.nda.or.ug/", isPrimary: true }],
    notifiedBodies: { system: "なし（NDA が直接審査）", description: "ウガンダではNotified Body制度は存在しない。NDAが直接、医療機器の登録審査を実施する。", bodies: [] },
    deviceDefinition: { legalDefinition: "National Drug Policy and Authority Actおよび関連規則に基づく定義。疾病の診断・治療・予防・監視・軽減等を目的とする機器。詳細はNDAガイドラインに規定。", scope: "IVD（体外診断用医療機器）も適用対象。", notes: "EACの医療機器調和ガイドラインとの整合を推進中。" },
    primaryLaw: { title: "National Drug Policy and Authority Act (Cap 206)", originalTitle: null, enacted: "1993", lastAmended: "要確認", url: "https://www.nda.or.ug/", description: "NDAの設立根拠法。医薬品・医療機器の規制権限をNDAに付与。" },
    implementingRegulations: [{ title: "NDA Medical Device Registration Guidelines", date: "要確認", url: "https://www.nda.or.ug/", description: "医療機器の登録手続・分類・ラベリング等の詳細を規定するNDAガイドライン。", category: "医療機器" }],
    relatedLaws: [],
    classification: {
      system: "4クラス制（Class A/B/C/D）",
      basis: "リスクベース（GHTF/IMDRF分類ルールに準拠）。意図する用途・侵襲性・使用期間等に基づく。",
      classes: [
        { name: "Class A", nameJa: "クラスA", riskLevel: "低", description: "低リスク機器。NDA登録が必要。", examples: ["弾性包帯", "聴診器", "舌圧子"], approvalPath: "NDA登録" },
        { name: "Class B", nameJa: "クラスB", riskLevel: "中低", description: "中程度の低リスク機器。NDA登録が必要。", examples: ["血圧計", "補聴器"], approvalPath: "NDA登録" },
        { name: "Class C", nameJa: "クラスC", riskLevel: "中高", description: "中高リスク機器。NDA登録＋臨床評価が必要。", examples: ["人工関節", "人工呼吸器"], approvalPath: "NDA登録＋臨床評価" },
        { name: "Class D", nameJa: "クラスD", riskLevel: "高", description: "最高リスク機器。", examples: ["人工心臓弁", "埋込み型除細動器"], approvalPath: "NDA登録＋臨床データ" },
      ],
      rules: ["GHTF/IMDRFの分類ルールに準拠", "NDAガイドラインに詳細規定"],
      totalProductCodes: "要確認",
    },
    conformityAssessment: {
      overview: "全クラスの医療機器にNDA登録が必要。先行認可国（CE/FDA等）の承認書類を参考にした審査を実施。",
      routes: [{ name: "NDA Registration", nameJa: "NDA登録", applicableClasses: ["Class A", "Class B", "Class C", "Class D"], description: "NDAに登録申請書類を提出。技術文書・CFS・QMS証明・ラベリング等を審査。", subtypes: [], avgReviewTime: "要確認", avgReviewTimeSource: null, fee: "要確認", feeSource: null, url: "https://www.nda.or.ug/" }],
    },
    electronicSubmission: { system: "NDA オンラインシステム", url: "https://www.nda.or.ug/", description: "NDAはオンラインでの申請受付を推進中。整備状況は要確認。", mandatory: false },
    udi: { required: false, system: "未導入", description: "ウガンダでは現時点でUDI制度は未導入。", url: null, timeline: "要確認" },
    postMarket: {
      adverseEventReporting: { system: "NDA有害事象報告制度", mandatory: true, url: "https://www.nda.or.ug/", description: "製造業者・輸入業者・医療従事者は有害事象をNDAに報告する義務がある。" },
      recalls: { authority: "NDA", description: "NDAがリコールを監督。", url: "https://www.nda.or.ug/" },
      surveillance: "NDAによる市販後監視。EAC地域での情報共有も推進中。",
    },
    certificateOfFreeSale: { available: true, issuingAuthority: "輸出国の規制当局", name: "Certificate of Free Sale (CFS)", description: "登録申請時に原産国の規制当局からのCFS提出が求められる。", processingTime: "要確認", url: "https://www.nda.or.ug/" },
    reimbursement: { system: "公的医療機関 + 民間保険", authority: "Ministry of Health", description: "公的医療機関での調達が中心。国民健康保険制度の整備を推進中。医療機器に特化した償還制度は限定的。", codingSystems: [], url: null },
    marketingRules: { authority: "NDA", description: "NDAが医療機器の広告・マーケティングを規制。未登録機器の広告は禁止。", keyRules: ["未登録医療機器の広告は禁止", "虚偽・誇大広告の禁止"] },
    mdsap: { status: "非参加", description: "ウガンダはMDSAPプログラムに参加していない。" },
    internationalStandards: {
      iso13485: { accepted: true, notes: "ISO 13485認証はQMS証明として参照。" },
      iso14971: { accepted: true, notes: "リスクマネジメントの国際規格として参照。" },
      iec62304: { accepted: true, notes: "ソフトウェア医療機器に対して参照。" },
      iec60601: { accepted: true, notes: "医用電気機器の安全規格として参照。" },
      others: [],
    },
    recentDevelopments: [{ date: "2025", title: "EAC規制調和の推進", description: "東アフリカ共同体（EAC）の医療機器規制調和ガイドラインとの整合を推進。NDAの規制能力強化も継続中。" }],
    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- Rwanda ---
  // =========================================================================
  {
    code: "RWA",
    country: "ルワンダ",
    countryEn: "Rwanda",
    region: "Middle East & Africa",
    flag: "🇷🇼",
    legalSystemOverview: {
      type: "中央集権制（Centralized system）",
      description: "ルワンダの医療機器規制はRwanda FDA（Rwanda Food and Drugs Authority）が管轄する。Law No. 003/2018 establishing Rwanda FDAを根拠法とし、食品・医薬品・医療機器の規制を一元管理。東アフリカ共同体（EAC）の規制調和ガイドラインとの整合も推進中。",
      keyCharacteristics: ["Rwanda FDAによる一元的な規制体制", "Law No. 003/2018が設立根拠法", "リスクベースの分類体系", "EAC規制調和ガイドラインとの整合を推進", "比較的新しい規制機関（2018年設立）"],
    },
    authorities: [{ name: "Rwanda FDA", fullName: "Rwanda Food and Drugs Authority", localName: null, role: "医療機器の登録・市販後監視・査察・輸入管理。主管当局。", url: "https://www.rwandafda.gov.rw/", isPrimary: true }],
    notifiedBodies: { system: "なし（Rwanda FDA が直接審査）", description: "ルワンダではNotified Body制度は存在しない。Rwanda FDAが直接、医療機器の登録審査を実施する。", bodies: [] },
    deviceDefinition: { legalDefinition: "Law No. 003/2018および関連規則に基づく定義。詳細は要確認。GHTF/IMDRF定義との整合を推進中。", scope: "IVD（体外診断用医療機器）も適用対象。", notes: "EACの医療機器調和ガイドラインとの整合を推進中。" },
    primaryLaw: { title: "Law No. 003/2018 establishing Rwanda Food and Drugs Authority", originalTitle: null, enacted: "2018", lastAmended: null, url: "https://www.rwandafda.gov.rw/", description: "Rwanda FDAの設立根拠法。食品・医薬品・医療機器の規制権限をRwanda FDAに付与。" },
    implementingRegulations: [{ title: "Rwanda FDA Medical Device Registration Guidelines", date: "要確認", url: "https://www.rwandafda.gov.rw/", description: "医療機器の登録手続・分類等の詳細を規定するガイドライン。", category: "医療機器" }],
    relatedLaws: [],
    classification: {
      system: "4クラス制（Class A/B/C/D）（要確認）",
      basis: "リスクベース。EAC規制調和ガイドラインに基づく分類を採用（詳細は要確認）。",
      classes: [
        { name: "Class A", nameJa: "クラスA", riskLevel: "低", description: "低リスク機器。", examples: ["弾性包帯", "聴診器"], approvalPath: "Rwanda FDA登録" },
        { name: "Class B", nameJa: "クラスB", riskLevel: "中低", description: "中程度の低リスク機器。", examples: ["血圧計", "補聴器"], approvalPath: "Rwanda FDA登録" },
        { name: "Class C", nameJa: "クラスC", riskLevel: "中高", description: "中高リスク機器。", examples: ["人工呼吸器", "透析装置"], approvalPath: "Rwanda FDA登録＋臨床評価" },
        { name: "Class D", nameJa: "クラスD", riskLevel: "高", description: "最高リスク機器。", examples: ["人工心臓弁"], approvalPath: "Rwanda FDA登録＋臨床データ" },
      ],
      rules: ["EAC規制調和ガイドラインに準拠", "詳細分類ルールは要確認"],
      totalProductCodes: "要確認",
    },
    conformityAssessment: {
      overview: "医療機器のRwanda FDA登録が必要。先行認可国（CE/FDA等）の承認書類を参考にした審査を実施。",
      routes: [{ name: "Rwanda FDA Registration", nameJa: "Rwanda FDA登録", applicableClasses: ["全クラス"], description: "Rwanda FDAに登録申請書類を提出。技術文書・CFS・QMS証明等を審査。", subtypes: [], avgReviewTime: "要確認", avgReviewTimeSource: null, fee: "要確認", feeSource: null, url: "https://www.rwandafda.gov.rw/" }],
    },
    electronicSubmission: { system: "Rwanda FDA オンラインシステム", url: "https://www.rwandafda.gov.rw/", description: "Rwanda FDAはオンライン申請の整備を推進中。", mandatory: false },
    udi: { required: false, system: "未導入", description: "ルワンダでは現時点でUDI制度は未導入。", url: null, timeline: "要確認" },
    postMarket: {
      adverseEventReporting: { system: "Rwanda FDA有害事象報告制度", mandatory: true, url: "https://www.rwandafda.gov.rw/", description: "有害事象のRwanda FDAへの報告義務が規定されている。" },
      recalls: { authority: "Rwanda FDA", description: "Rwanda FDAがリコールを監督。", url: "https://www.rwandafda.gov.rw/" },
      surveillance: "Rwanda FDAによる市販後監視。EAC地域での情報共有も推進中。",
    },
    certificateOfFreeSale: { available: true, issuingAuthority: "輸出国の規制当局", name: "Certificate of Free Sale (CFS)", description: "登録申請時に原産国の規制当局からのCFS提出が求められる。", processingTime: "要確認", url: "https://www.rwandafda.gov.rw/" },
    reimbursement: { system: "CBHI（Mutuelle de Santé）+ RSSB + 民間保険", authority: "Ministry of Health / RSSB", description: "ルワンダは地域社会ベースの健康保険（Mutuelle de Santé）により高い保険加入率を達成。RSSB（Rwanda Social Security Board）が正規雇用者向け保険を運営。医療機器に特化した償還制度は限定的。", codingSystems: [], url: null },
    marketingRules: { authority: "Rwanda FDA", description: "Rwanda FDAが医療機器の広告・マーケティングを規制。", keyRules: ["未登録医療機器の販売・広告は禁止", "虚偽・誇大広告の禁止"] },
    mdsap: { status: "非参加", description: "ルワンダはMDSAPプログラムに参加していない。" },
    internationalStandards: {
      iso13485: { accepted: true, notes: "ISO 13485認証はQMS証明として参照。" },
      iso14971: { accepted: true, notes: "リスクマネジメントの国際規格として参照。" },
      iec62304: { accepted: true, notes: "ソフトウェア医療機器に対して参照。" },
      iec60601: { accepted: true, notes: "医用電気機器の安全規格として参照。" },
      others: [],
    },
    recentDevelopments: [{ date: "2018", title: "Rwanda FDAの設立", description: "Law No. 003/2018によりRwanda FDAが設立。食品・医薬品・医療機器の一元的な規制体制を構築。" }],
    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- Senegal ---
  // =========================================================================
  {
    code: "SEN",
    country: "セネガル",
    countryEn: "Senegal",
    region: "Middle East & Africa",
    flag: "🇸🇳",
    legalSystemOverview: {
      type: "中央集権制（Centralized system）",
      description: "セネガルの医療機器規制はDPM（Direction de la Pharmacie et du Médicament）が管轄する。フランス法制度の影響を受けた規制枠組み。西アフリカ経済通貨同盟（UEMOA）および西アフリカ保健機構（OOAS/WAHO）による地域規制調和にも参加。",
      keyCharacteristics: ["DPMによる一元的な規制体制", "フランス法制度の影響を受けた規制枠組み", "UEMOA / OOAS（WAHO）による地域規制調和に参加", "医療機器規制は発展段階", "先行認可国（CE等）の承認を参考にした審査"],
    },
    authorities: [{ name: "DPM", fullName: "Direction de la Pharmacie et du Médicament", localName: "薬事・医薬品局", role: "医療機器の登録・輸入管理・市販後監視。主管当局。", url: "https://www.sante.gouv.sn/", isPrimary: true }],
    notifiedBodies: { system: "なし（DPM が直接審査）", description: "セネガルではNotified Body制度は存在しない。DPMが直接、医療機器の登録審査を実施する。", bodies: [] },
    deviceDefinition: { legalDefinition: "DPMの規制に基づく定義。詳細は要確認。フランス法制度の影響を受けた医療機器の定義を採用。", scope: "IVD（体外診断用医療機器）も適用対象（要確認）。", notes: "UEMOA / OOAS地域規制調和との整合を推進中。" },
    primaryLaw: { title: "要確認（薬事関連法）", originalTitle: null, enacted: "要確認", lastAmended: null, url: "https://www.sante.gouv.sn/", description: "セネガルの薬事規制に関する基本法。DPMの権限の根拠法。医療機器に特化した法律の整備状況は要確認。" },
    implementingRegulations: [{ title: "DPM 医療機器登録に関する規定", date: "要確認", url: "https://www.sante.gouv.sn/", description: "医療機器の登録手続等を規定。詳細は要確認。", category: "医療機器" }],
    relatedLaws: [],
    classification: {
      system: "要確認",
      basis: "リスクベースの分類を採用していると推定されるが、詳細は要確認。",
      classes: [
        { name: "要確認", nameJa: "要確認", riskLevel: "低〜高", description: "分類体系の詳細は要確認。CE分類を参考にしている可能性。", examples: [], approvalPath: "DPM登録" },
      ],
      rules: ["分類制度の詳細は要確認", "UEMOA地域規制調和との整合を推進中"],
      totalProductCodes: "要確認",
    },
    conformityAssessment: {
      overview: "医療機器のDPM登録・輸入許可が必要。先行認可国（CE等）の承認書類を参考にした審査を実施。",
      routes: [{ name: "DPM Registration / Import Authorization", nameJa: "DPM登録・輸入許可", applicableClasses: ["全クラス"], description: "DPMに登録・輸入許可申請書類を提出。CFS・技術文書・品質証明等を審査。CE認証の提出が有用。", subtypes: [], avgReviewTime: "要確認", avgReviewTimeSource: null, fee: "要確認", feeSource: null, url: "https://www.sante.gouv.sn/" }],
    },
    electronicSubmission: { system: "要確認", url: "https://www.sante.gouv.sn/", description: "電子申請システムの整備状況は要確認。", mandatory: false },
    udi: { required: false, system: "未導入", description: "セネガルでは現時点でUDI制度は未導入。", url: null, timeline: "要確認" },
    postMarket: {
      adverseEventReporting: { system: "DPMファーマコビジランス制度", mandatory: true, url: "https://www.sante.gouv.sn/", description: "有害事象のDPMへの報告義務が規定されている。体制は整備中。" },
      recalls: { authority: "DPM", description: "DPMがリコールを監督。", url: "https://www.sante.gouv.sn/" },
      surveillance: "市販後監視体制は整備中。OOAS（WAHO）地域での情報共有にも参加。",
    },
    certificateOfFreeSale: { available: true, issuingAuthority: "輸出国の規制当局", name: "Certificate of Free Sale (CFS)", description: "登録申請時に原産国の規制当局からのCFS提出が求められる。", processingTime: "要確認", url: "https://www.sante.gouv.sn/" },
    reimbursement: { system: "CMU（Couverture Maladie Universelle）+ 民間保険", authority: "Ministry of Health", description: "CMU（国民皆保険）の拡大を推進中。公立病院での調達は政府予算に基づく。医療機器に特化した償還制度は限定的。", codingSystems: [], url: null },
    marketingRules: { authority: "DPM", description: "DPMが医療機器の広告・マーケティングを規制。", keyRules: ["未登録医療機器の販売・広告は禁止", "虚偽・誇大広告の禁止"] },
    mdsap: { status: "非参加", description: "セネガルはMDSAPプログラムに参加していない。" },
    internationalStandards: {
      iso13485: { accepted: true, notes: "ISO 13485認証はQMS証明として参照。" },
      iso14971: { accepted: true, notes: "リスクマネジメントの国際規格として参照。" },
      iec62304: { accepted: true, notes: "ソフトウェア医療機器に対して参照。" },
      iec60601: { accepted: true, notes: "医用電気機器の安全規格として参照。" },
      others: [],
    },
    recentDevelopments: [{ date: "2025", title: "UEMOA / OOAS地域規制調和の推進", description: "西アフリカ地域での医療機器規制調和の取り組みに参加。規制能力の強化を推進中。" }],
    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- Ghana ---
  // =========================================================================
  {
    code: "GHA",
    country: "ガーナ",
    countryEn: "Ghana",
    region: "Middle East & Africa",
    flag: "🇬🇭",
    legalSystemOverview: {
      type: "中央集権制（Centralized system）",
      description: "ガーナの医療機器規制はFDA Ghana（Food and Drugs Authority）が管轄する。Public Health Act, 2012 (Act 851)を根拠法とし、食品・医薬品・医療機器・化粧品の規制を一元的に担う。4クラス分類を採用し、リスクベースの審査を実施。ECOWAS / OOAS（WAHO）による地域規制調和にも参加。",
      keyCharacteristics: ["FDA Ghanaによる一元的な規制体制", "Public Health Act, 2012 (Act 851)が根拠法", "リスクベースの4クラス分類（Class A/B/C/D）", "ECOWAS / OOAS（WAHO）地域規制調和に参加", "先行認可国（CE/FDA等）の承認を参考にした審査"],
    },
    authorities: [{ name: "FDA Ghana", fullName: "Food and Drugs Authority", localName: null, role: "医療機器の登録・市販後監視・査察・輸入管理・広告規制。主管当局。", url: "https://www.fdaghana.gov.gh/", isPrimary: true }],
    notifiedBodies: { system: "なし（FDA Ghana が直接審査）", description: "ガーナではNotified Body制度は存在しない。FDA Ghanaが直接、医療機器の登録審査を実施する。", bodies: [] },
    deviceDefinition: { legalDefinition: "Public Health Act, 2012 (Act 851)に定義。疾病の診断・治療・予防・監視・軽減等を目的とする機器・装置・器具・材料・ソフトウェア等で、主たる意図する作用が薬理学的・免疫学的・代謝的手段によらないもの。", scope: "IVD（体外診断用医療機器）も適用対象。医療機器全般を包括的に規制。", notes: "GHTF/IMDRF定義との整合を推進中。" },
    primaryLaw: { title: "Public Health Act, 2012 (Act 851)", originalTitle: null, enacted: "2012", lastAmended: null, url: "https://www.fdaghana.gov.gh/", description: "ガーナの公衆衛生に関する基本法。FDA Ghanaの設立根拠法。食品・医薬品・医療機器・化粧品の規制権限を付与。" },
    implementingRegulations: [{ title: "FDA Ghana Medical Device Registration Guidelines", date: "要確認", url: "https://www.fdaghana.gov.gh/", description: "医療機器の登録手続・分類・ラベリング等の詳細を規定するガイドライン。", category: "医療機器" }],
    relatedLaws: [],
    classification: {
      system: "4クラス制（Class A/B/C/D）",
      basis: "リスクベース（GHTF/IMDRF分類ルールに準拠）。意図する用途・侵襲性・使用期間・エネルギー源等に基づく。",
      classes: [
        { name: "Class A", nameJa: "クラスA", riskLevel: "低", description: "低リスク機器。FDA Ghana登録が必要。", examples: ["弾性包帯", "聴診器", "舌圧子"], approvalPath: "FDA Ghana登録" },
        { name: "Class B", nameJa: "クラスB", riskLevel: "中低", description: "中程度の低リスク機器。FDA Ghana登録が必要。", examples: ["血圧計", "補聴器", "超音波診断装置"], approvalPath: "FDA Ghana登録" },
        { name: "Class C", nameJa: "クラスC", riskLevel: "中高", description: "中高リスク機器。FDA Ghana登録＋臨床評価が必要。", examples: ["人工関節", "人工呼吸器", "透析装置"], approvalPath: "FDA Ghana登録＋臨床評価" },
        { name: "Class D", nameJa: "クラスD", riskLevel: "高", description: "最高リスク機器。最も厳格な審査。", examples: ["人工心臓弁", "埋込み型除細動器"], approvalPath: "FDA Ghana登録＋臨床データ" },
      ],
      rules: ["GHTF/IMDRFの分類ルールに準拠", "FDA Ghanaガイドラインに詳細規定"],
      totalProductCodes: "要確認",
    },
    conformityAssessment: {
      overview: "全クラスの医療機器にFDA Ghana登録が必要。先行認可国（CE/FDA等）の承認書類を参考にした審査を実施。",
      routes: [{ name: "FDA Ghana Registration", nameJa: "FDA Ghana登録", applicableClasses: ["Class A", "Class B", "Class C", "Class D"], description: "FDA Ghanaに登録申請書類を提出。技術文書・CFS・QMS証明・ラベリング等を審査。", subtypes: [], avgReviewTime: "要確認", avgReviewTimeSource: null, fee: "要確認", feeSource: null, url: "https://www.fdaghana.gov.gh/" }],
    },
    electronicSubmission: { system: "FDA Ghana オンラインポータル", url: "https://www.fdaghana.gov.gh/", description: "FDA Ghanaはオンラインでの申請受付を推進中。", mandatory: false },
    udi: { required: false, system: "未導入", description: "ガーナでは現時点でUDI制度は未導入。", url: null, timeline: "要確認" },
    postMarket: {
      adverseEventReporting: { system: "FDA Ghana有害事象報告制度", mandatory: true, url: "https://www.fdaghana.gov.gh/", description: "製造業者・輸入業者・医療従事者は有害事象をFDA Ghanaに報告する義務がある。" },
      recalls: { authority: "FDA Ghana", description: "FDA Ghanaがリコールを監督。安全性問題発見時に市場回収を命令可能。", url: "https://www.fdaghana.gov.gh/" },
      surveillance: "FDA Ghanaによる市販後監視。ECOWAS / OOAS地域での情報共有にも参加。",
    },
    certificateOfFreeSale: { available: true, issuingAuthority: "輸出国の規制当局", name: "Certificate of Free Sale (CFS)", description: "登録申請時に原産国の規制当局からのCFS提出が求められる。", processingTime: "要確認", url: "https://www.fdaghana.gov.gh/" },
    reimbursement: { system: "NHIS（National Health Insurance Scheme）+ 民間保険", authority: "NHIA / Ministry of Health", description: "NHIS（国民健康保険制度）が公的医療保険を提供。医療機器に特化した体系的な償還制度は限定的。公立病院での調達は政府予算に基づく。", codingSystems: [], url: null },
    marketingRules: { authority: "FDA Ghana", description: "FDA Ghanaが医療機器の広告・マーケティングを規制。未登録機器の広告は禁止。", keyRules: ["未登録医療機器の広告は禁止", "虚偽・誇大広告の禁止"] },
    mdsap: { status: "非参加", description: "ガーナはMDSAPプログラムに参加していない。" },
    internationalStandards: {
      iso13485: { accepted: true, notes: "ISO 13485認証はQMS証明として参照。" },
      iso14971: { accepted: true, notes: "リスクマネジメントの国際規格として参照。" },
      iec62304: { accepted: true, notes: "ソフトウェア医療機器に対して参照。" },
      iec60601: { accepted: true, notes: "医用電気機器の安全規格として参照。" },
      others: [],
    },
    recentDevelopments: [{ date: "2025", title: "FDA Ghanaの規制能力強化", description: "FDA Ghanaは医療機器規制の能力強化を継続。ECOWAS / OOAS地域での規制調和の推進にも注力。" }],
    lastUpdated: "2026-04-02",
    verified: null,
  },


  // =========================================================================
  // --- TUN（チュニジア） ---
  // =========================================================================
  {
    code: "TUN",
    country: "チュニジア",
    countryEn: "Republic of Tunisia",
    region: "Middle East & Africa",
    flag: "🇹🇳",
    legalSystemOverview: {
      type: "中央集権制（Centralized system）",
      description: "チュニジアの医療機器規制は薬事・医療機器局（DPM: Direction de la Pharmacie et du Médicament）が管轄する。DPM は保健省傘下の機関であり、医薬品および医療機器の市場参入を規制する。2014年制定の Loi n° 2014-19（医療機器に関する法律）が医療機器規制の根幹法で、リスクベースの4クラス分類を採用。EU MDDの影響を強く受けた制度設計となっている。",
      keyCharacteristics: [
        "DPM（薬事・医療機器局）による一元的な規制体制",
        "Loi n° 2014-19 に基づく医療機器固有の法規制",
        "EU MDD に準拠した4クラス分類（Class I / IIa / IIb / III）",
        "CE マーク取得機器は登録が簡素化される",
        "ローカル代理人（mandataire local）の指定が必須",
        "CFS（自由販売証明書）の提出が要求される",
      ],
    },
    authorities: [
      { name: "DPM", fullName: "Direction de la Pharmacie et du Médicament", localName: "الإدارة العامة للصيدلية والدواء", role: "医療機器の登録・市販後監視・輸入許可・施設許可", url: "http://www.santetunisie.rns.tn/", isPrimary: true },
      { name: "MOH Tunisia", fullName: "Ministère de la Santé", localName: "وزارة الصحة", role: "保健政策全般・公立病院の管理", url: "http://www.santetunisie.rns.tn/", isPrimary: false },
    ],
    notifiedBodies: {
      system: "なし（DPM が直接審査。EU の NB 証明書を参照）",
      description: "チュニジアには欧州型の Notified Body 制度は存在しない。DPM が申請書類を直接審査し、CE 証明書を主たるエビデンスとして登録判断を行う。",
      bodies: [],
    },
    deviceDefinition: {
      legalDefinition: "Loi n° 2014-19 に基づき、人体に対して使用される器具・装置・機器・ソフトウェア・材料等で、疾病の診断・予防・監視・治療・軽減等を目的とし、主たる作用が薬理学的・免疫学的・代謝的手段によらないもの。",
      scope: "体外診断用医薬品（IVD）も規制対象。",
      notes: "定義は EU MDD/GHTF の定義に準拠。",
    },
    primaryLaw: {
      title: "Loi n° 2014-19 du 20 mars 2014 relative aux dispositifs médicaux",
      originalTitle: "القانون عدد 19 لسنة 2014 المتعلق بالأجهزة الطبية",
      enacted: "2014",
      lastAmended: "随時改正",
      url: "http://www.santetunisie.rns.tn/",
      description: "チュニジアにおける医療機器規制の根幹法。医療機器の定義、分類、市場参入要件、市販後監視、違反時の罰則等を規定。",
    },
    implementingRegulations: [
      { title: "Décret gouvernemental relatif aux dispositifs médicaux（医療機器に関する政令）", date: "2014以降", url: "http://www.santetunisie.rns.tn/", description: "Loi n° 2014-19 の施行細則。登録手続き、分類規則、技術文書要件等を規定。", category: "包括規制" },
      { title: "Arrêté du Ministre de la Santé（保健大臣令）", date: "各種", url: "http://www.santetunisie.rns.tn/", description: "医療機器の輸入許可・施設許可・ラベリング要件等に関する省令。", category: "輸入管理" },
    ],
    relatedLaws: [
      { title: "Loi n° 73-55 du 3 août 1973（薬事法）", category: "薬事法", enacted: "1973", url: "http://www.santetunisie.rns.tn/", relevance: "チュニジアの薬事制度の基本法。2014年法以前は医療機器もこの法律の枠組みで規制されていた。" },
    ],
    classification: {
      system: "EU MDD 準拠4クラス分類（Class I / IIa / IIb / III）",
      basis: "リスクベース（EU MDD 分類規則を参照）",
      classes: [
        { name: "Class I", nameJa: "クラスI", riskLevel: "低リスク", description: "低リスク医療機器。一般的制御で安全性を確保。", examples: ["弾性包帯", "手動外科器具", "聴診器"], approvalPath: "自己宣言 + 登録届出" },
        { name: "Class IIa", nameJa: "クラスIIa", riskLevel: "中低リスク", description: "中低リスク医療機器。CE マークまたは同等の適合性証明が必要。", examples: ["超音波診断装置", "手術用手袋", "歯科用充填材"], approvalPath: "DPM 登録（CE 証明書ベース）" },
        { name: "Class IIb", nameJa: "クラスIIb", riskLevel: "中高リスク", description: "中高リスク医療機器。より詳細な技術文書の提出が必要。", examples: ["人工呼吸器", "血液透析装置", "放射線治療装置"], approvalPath: "DPM 登録（詳細審査）" },
        { name: "Class III", nameJa: "クラスIII", riskLevel: "高リスク", description: "高リスク医療機器。CE マーク（EC Full QA + Design Examination）等のフル適合性評価が必要。", examples: ["人工心臓弁", "冠動脈ステント", "埋込み型除細動器"], approvalPath: "DPM 詳細審査" },
      ],
      rules: [
        { id: "EU MDD 分類規則参照", description: "DPM は EU MDD（93/42/EEC）の分類規則を参照して機器のクラスを決定する。", url: "http://www.santetunisie.rns.tn/" },
      ],
      totalProductCodes: "要確認（DPM 独自のコード体系の公開情報なし）",
    },
    conformityAssessment: {
      overview: "DPM は CE マークを持つ機器に対し、書類審査ベースの登録を実施。CE マークのない機器については、同等の適合性証明を求める。",
      routes: [
        { name: "DPM Medical Device Registration", nameJa: "DPM 医療機器登録", applicableClasses: ["全クラス"], description: "CE 証明書、Free Sale Certificate、技術文書、ラベリング情報等を提出して登録。Class III はより詳細な審査。", subtypes: [], avgReviewTime: "3〜12ヶ月（クラスにより異なる）", fee: "要確認（DPM 料金表は随時改定）", url: "http://www.santetunisie.rns.tn/" },
      ],
    },
    electronicSubmission: { system: "要確認（DPM の電子申請システムの整備状況は限定的情報）", url: "http://www.santetunisie.rns.tn/", description: "DPM への申請は紙ベースが主流だが、電子化の取り組みが進行中。最新の申請方法は DPM に直接確認が必要。", mandatory: false },
    udi: { required: false, system: "要確認（UDI 制度の導入状況は未確認）", description: "チュニジアでは現時点で IMDRF 型の UDI 制度が法的に義務化されているとの確認情報はない。CE マーク機器は EU UDI 要件を満たしている場合がある。", url: null, timeline: "要確認" },
    postMarket: {
      adverseEventReporting: { system: "DPM マテリオビジランス（matériovigilance）制度", mandatory: true, url: "http://www.santetunisie.rns.tn/", description: "医療機器に関連する有害事象は DPM に報告義務がある。Loi n° 2014-19 に基づくマテリオビジランス体制。" },
      recalls: { authority: "DPM", description: "DPM はリコール・Field Safety Corrective Action（FSCA）を管理。製造業者・輸入業者はリコール実施時に DPM に通知義務。", url: "http://www.santetunisie.rns.tn/" },
      surveillance: "DPM による市販後監視。マテリオビジランスに基づく報告・調査体制。",
    },
    certificateOfFreeSale: { available: true, issuingAuthority: "DPM", name: "Certificat de Libre Vente", description: "登録済み医療機器について DPM が発行する自由販売証明書。登録申請時には原産国の CFS 提出が必要。", processingTime: "要確認", url: "http://www.santetunisie.rns.tn/" },
    reimbursement: { system: "公的医療保険（CNAM）+ 民間保険", authority: "CNAM / MOH Tunisia", description: "チュニジアの医療保険は CNAM（Caisse Nationale d'Assurance Maladie）が管轄する公的保険制度が中心。医療機器の償還は主に公立病院の調達予算および CNAM の給付リストを通じて行われる。", codingSystems: ["要確認"], url: "http://www.cnam.nat.tn/" },
    marketingRules: { authority: "DPM", description: "医療機器の広告・販促は DPM の規制下にある。承認された適応のみの広告が原則。", keyRules: ["登録済み機器のみ広告可", "ラベリングはフランス語で記載（アラビア語追加を推奨）", "虚偽・誇大広告の禁止"] },
    mdsap: { status: "非参加", description: "チュニジアは MDSAP プログラムに参加していない。" },
    internationalStandards: {
      iso13485: { accepted: true, notes: "ISO 13485 認証は CE マーク取得の前提として間接的に要求される。" },
      iso14971: { accepted: true, notes: "リスクマネジメントの国際規格として参照。" },
      iec62304: { accepted: true, notes: "ソフトウェア医療機器に対して参照。" },
      iec60601: { accepted: true, notes: "医用電気機器の安全規格として参照。" },
      others: [],
    },
    recentDevelopments: [
      { date: "2025", title: "Loi n° 2014-19 の施行細則の整備推進", description: "DPM は2014年法の施行細則の整備を継続。分類規則の明確化と電子申請システムの導入に注力中。" },
    ],
    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- DZA（アルジェリア） ---
  // =========================================================================
  {
    code: "DZA",
    country: "アルジェリア",
    countryEn: "People's Democratic Republic of Algeria",
    region: "Middle East & Africa",
    flag: "🇩🇿",
    legalSystemOverview: {
      type: "中央集権制（Centralized system）",
      description: "アルジェリアの医療機器規制は保健省（MOH）および国立医薬品管理研究所（LNCPP: Laboratoire National de Contrôle des Produits Pharmaceutiques）が管轄する。Loi n° 18-11 du 2 juillet 2018（衛生法）および関連規則が法的根拠。医療機器は homologation（型式認証）手続きが必要で、LNCPP が技術評価を担当する。EU CE マークの影響を受けた制度だが、独自の登録プロセスを有する。",
      keyCharacteristics: [
        "LNCPP と MOH による二元的な規制体制",
        "Homologation（型式認証）制度",
        "EU の分類モデルを参照した4クラス分類",
        "CE マーク取得機器は審査で考慮されるが、自動承認ではない",
        "ローカル代理人の指定が必須",
        "CFS および品質認証書（ISO 13485）の提出が要求される",
      ],
    },
    authorities: [
      { name: "LNCPP", fullName: "Laboratoire National de Contrôle des Produits Pharmaceutiques", localName: "المخبر الوطني لمراقبة المنتجات الصيدلانية", role: "医療機器の技術評価・試験・品質管理", url: "https://www.lncpp.dz/", isPrimary: true },
      { name: "MOH Algeria", fullName: "Ministère de la Santé", localName: "وزارة الصحة", role: "医療機器の登録許可・保健政策・市販後監視", url: "https://www.sante.gov.dz/", isPrimary: true },
    ],
    notifiedBodies: {
      system: "なし（LNCPP/MOH が直接審査）",
      description: "アルジェリアには Notified Body 制度は存在しない。LNCPP が技術評価を行い、MOH が最終的な登録許可を付与する。",
      bodies: [],
    },
    deviceDefinition: {
      legalDefinition: "衛生法および関連規則に基づき、人体に対して使用される器具・装置・機器・ソフトウェア・材料等で、疾病の診断・予防・監視・治療・軽減等を目的とし、主たる作用が薬理学的・免疫学的・代謝的手段によらないもの。",
      scope: "体外診断用医薬品（IVD）も規制対象。",
      notes: "定義は GHTF/IMDRF の定義に概ね準拠。",
    },
    primaryLaw: {
      title: "Loi n° 18-11 du 2 juillet 2018 relative à la santé",
      originalTitle: "القانون رقم 18-11 المتعلق بالصحة",
      enacted: "2018",
      lastAmended: "随時改正",
      url: "https://www.sante.gov.dz/",
      description: "アルジェリアの衛生法。医薬品・医療機器を含む衛生製品の規制の法的根拠を提供。医療機器の homologation 要件を規定。",
    },
    implementingRegulations: [
      { title: "Décret exécutif relatif à l'homologation des dispositifs médicaux（医療機器型式認証に関する施行令）", date: "各種", url: "https://www.sante.gov.dz/", description: "医療機器の homologation 手続き、必要書類、技術要件等を規定。", category: "登録" },
      { title: "Arrêté relatif à l'importation des dispositifs médicaux（医療機器輸入に関する省令）", date: "各種", url: "https://www.sante.gov.dz/", description: "医療機器の輸入許可・要件を規定。", category: "輸入管理" },
    ],
    relatedLaws: [
      { title: "Loi n° 85-05 du 16 février 1985（旧衛生法）", category: "衛生法", enacted: "1985", url: "https://www.sante.gov.dz/", relevance: "2018年法以前のアルジェリアの衛生法。" },
    ],
    classification: {
      system: "EU 参照4クラス分類（Class I / IIa / IIb / III）",
      basis: "リスクベース（EU 分類モデルを参照）",
      classes: [
        { name: "Class I", nameJa: "クラスI", riskLevel: "低リスク", description: "低リスク医療機器。", examples: ["弾性包帯", "手動外科器具", "聴診器"], approvalPath: "簡易 homologation" },
        { name: "Class IIa", nameJa: "クラスIIa", riskLevel: "中低リスク", description: "中低リスク医療機器。", examples: ["超音波診断装置", "手術用手袋", "歯科用充填材"], approvalPath: "標準 homologation" },
        { name: "Class IIb", nameJa: "クラスIIb", riskLevel: "中高リスク", description: "中高リスク医療機器。", examples: ["人工呼吸器", "血液透析装置", "放射線治療装置"], approvalPath: "詳細 homologation" },
        { name: "Class III", nameJa: "クラスIII", riskLevel: "高リスク", description: "高リスク医療機器。最も厳格な審査が適用される。", examples: ["人工心臓弁", "冠動脈ステント", "埋込み型除細動器"], approvalPath: "フル homologation（技術文書 + 臨床データ）" },
      ],
      rules: [
        { id: "EU 参照分類規則", description: "LNCPP/MOH は EU の分類規則を参照して機器のクラスを決定する。", url: "https://www.sante.gov.dz/" },
      ],
      totalProductCodes: "要確認",
    },
    conformityAssessment: {
      overview: "LNCPP が技術評価を行い、MOH が homologation（型式認証）を付与する。CE マーク取得機器は審査で考慮されるが、別途アルジェリア固有の手続きが必要。",
      routes: [
        { name: "Homologation des dispositifs médicaux", nameJa: "医療機器型式認証", applicableClasses: ["全クラス"], description: "CE 証明書、ISO 13485 認証、CFS、技術文書、臨床データ等を提出。LNCPP が技術評価を実施し、MOH が最終認可。", subtypes: [], avgReviewTime: "6〜18ヶ月（クラス・製品による）", fee: "要確認", url: "https://www.sante.gov.dz/" },
      ],
    },
    electronicSubmission: { system: "要確認", url: "https://www.sante.gov.dz/", description: "アルジェリアの医療機器登録申請は紙ベースが主流。電子化の進捗は限定的情報。", mandatory: false },
    udi: { required: false, system: "要確認", description: "アルジェリアでは UDI 制度の法的義務化は確認されていない。", url: null, timeline: "要確認" },
    postMarket: {
      adverseEventReporting: { system: "MOH / LNCPP マテリオビジランス制度", mandatory: true, url: "https://www.sante.gov.dz/", description: "医療機器に関連する有害事象は MOH/LNCPP に報告義務がある。" },
      recalls: { authority: "MOH / LNCPP", description: "MOH/LNCPP がリコールを管理。製造業者・輸入業者はリコール実施時に通知義務。", url: "https://www.sante.gov.dz/" },
      surveillance: "MOH/LNCPP による市販後監視。",
    },
    certificateOfFreeSale: { available: true, issuingAuthority: "MOH Algeria", name: "Certificat de Libre Vente", description: "登録済み医療機器について MOH が発行する自由販売証明書。申請時には原産国の CFS 提出が要求される。", processingTime: "要確認", url: "https://www.sante.gov.dz/" },
    reimbursement: { system: "公的医療保険（CNAS / CASNOS）+ 公立病院", authority: "MOH Algeria / CNAS", description: "アルジェリアの医療保険は CNAS（社会保険基金）が管轄。医療機器の償還は主に公立病院の調達予算を通じて行われる。", codingSystems: ["要確認"], url: "https://www.sante.gov.dz/" },
    marketingRules: { authority: "MOH Algeria", description: "医療機器の広告・販促は MOH の規制下にある。", keyRules: ["登録済み機器のみ広告可", "ラベリングはフランス語またはアラビア語で記載", "虚偽・誇大広告の禁止"] },
    mdsap: { status: "非参加", description: "アルジェリアは MDSAP プログラムに参加していない。" },
    internationalStandards: {
      iso13485: { accepted: true, notes: "ISO 13485 認証は homologation 申請時に要求される。" },
      iso14971: { accepted: true, notes: "リスクマネジメントの国際規格として参照。" },
      iec62304: { accepted: true, notes: "ソフトウェア医療機器に対して参照。" },
      iec60601: { accepted: true, notes: "医用電気機器の安全規格として参照。" },
      others: [],
    },
    recentDevelopments: [
      { date: "2025", title: "医療機器規制の近代化推進", description: "MOH/LNCPP は Loi n° 18-11 に基づく医療機器規制の施行細則の整備を継続。現地製造の促進と輸入依存の軽減が政策課題。" },
    ],
    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- IRQ（イラク） ---
  // =========================================================================
  {
    code: "IRQ",
    country: "イラク",
    countryEn: "Republic of Iraq",
    region: "Middle East & Africa",
    flag: "🇮🇶",
    legalSystemOverview: {
      type: "中央集権制（Centralized system）",
      description: "イラクの医療機器規制は保健省（MOH）傘下の KIMADIA（国立医薬品・医療機器公社: State Company for Marketing Drugs and Medical Appliances）が管轄する。KIMADIA は公的部門における医薬品・医療機器の調達・流通を担う国営企業で、輸入許可と品質管理を行う。民間部門の輸入は MOH の許可制。体系的な医療機器登録制度は発展途上であり、主に CFS と CE マークまたは FDA 認可に依拠する。",
      keyCharacteristics: [
        "KIMADIA が公的部門の医療機器調達・輸入を管理",
        "MOH が民間輸入を許可制で規制",
        "体系的な医療機器登録制度は発展途上",
        "CE マークまたは FDA 認可が事実上の市場参入要件",
        "CFS の提出が必須",
        "ローカル代理人（輸入業者）の指定が必須",
      ],
    },
    authorities: [
      { name: "KIMADIA", fullName: "State Company for Marketing Drugs and Medical Appliances", localName: "الشركة العامة لتسويق الأدوية والمستلزمات الطبية", role: "公的部門の医療機器調達・輸入・品質管理", url: "https://www.kimadia.iq/", isPrimary: true },
      { name: "MOH Iraq", fullName: "Ministry of Health — Iraq", localName: "وزارة الصحة العراقية", role: "保健政策・民間輸入許可・規制監督", url: "https://moh.gov.iq/", isPrimary: true },
    ],
    notifiedBodies: {
      system: "なし（KIMADIA/MOH が直接審査。CE/FDA 承認に依拠）",
      description: "イラクには Notified Body 制度は存在しない。KIMADIA/MOH が輸入申請を審査し、CE 証明書または FDA 認可文書を主たるエビデンスとして判断する。",
      bodies: [],
    },
    deviceDefinition: {
      legalDefinition: "MOH の規則に基づき、疾病の診断・治療・予防・監視等を目的とする器具・装置・機器等で、薬理学的・免疫学的・代謝的手段によらないもの。",
      scope: "体外診断用医薬品（IVD）も規制対象。",
      notes: "体系的な医療機器の法的定義文書の公開は限定的。実務上は国際的な定義が参照される。",
    },
    primaryLaw: {
      title: "Public Health Law No. 89 of 1981（改正あり）",
      originalTitle: "قانون الصحة العامة رقم 89 لسنة 1981",
      enacted: "1981",
      lastAmended: "随時改正",
      url: "https://moh.gov.iq/",
      description: "イラクの公衆衛生法。医薬品・医療機器の規制の法的根拠を提供。KIMADIA の役割を含む。",
    },
    implementingRegulations: [
      { title: "KIMADIA Import Regulations（KIMADIA 輸入規則）", date: "各種", url: "https://www.kimadia.iq/", description: "公的部門向けの医療機器輸入手続き、必要書類、品質要件を規定。", category: "輸入管理" },
      { title: "MOH Private Sector Import Instructions（民間輸入指示）", date: "各種", url: "https://moh.gov.iq/", description: "民間部門の医療機器輸入に関する許可手続きと要件。", category: "輸入管理" },
    ],
    relatedLaws: [
      { title: "KIMADIA 設立法", category: "組織法", enacted: "1964", url: "https://www.kimadia.iq/", relevance: "KIMADIA の設立と権限を規定。" },
    ],
    classification: {
      system: "国際分類参照（CE/FDA 分類を事実上採用）",
      basis: "リスクベース（CE/FDA の分類を参照）",
      classes: [
        { name: "Class I", nameJa: "クラスI", riskLevel: "低リスク", description: "低リスク医療機器。", examples: ["弾性包帯", "手動外科器具", "聴診器"], approvalPath: "輸入許可（CFS + CE/FDA 証明）" },
        { name: "Class II", nameJa: "クラスII", riskLevel: "中リスク", description: "中リスク医療機器。", examples: ["超音波診断装置", "輸液ポンプ", "電動車椅子"], approvalPath: "輸入許可（CFS + CE/FDA 証明）" },
        { name: "Class III", nameJa: "クラスIII", riskLevel: "高リスク", description: "高リスク医療機器。追加的な技術文書が要求される場合がある。", examples: ["人工心臓弁", "冠動脈ステント", "埋込み型デバイス"], approvalPath: "輸入許可（詳細審査）" },
      ],
      rules: [
        { id: "国際分類参照", description: "KIMADIA/MOH は CE または FDA の分類を参照。イラク独自の分類規則は体系的に公開されていない。", url: "https://moh.gov.iq/" },
      ],
      totalProductCodes: "要確認",
    },
    conformityAssessment: {
      overview: "KIMADIA/MOH は CE マークまたは FDA 認可を持つ機器に対し、輸入許可を付与する。独自の適合性評価制度は発展途上。",
      routes: [
        { name: "KIMADIA/MOH Import Authorization", nameJa: "KIMADIA/MOH 輸入許可", applicableClasses: ["全クラス"], description: "CE 証明書または FDA 認可文書、CFS、品質証明書（ISO 13485）、技術仕様書等を提出して輸入許可を取得。公的部門は KIMADIA 入札、民間は MOH 許可制。", subtypes: [], avgReviewTime: "3〜12ヶ月（調達プロセスにより大幅に異なる）", fee: "要確認", url: "https://www.kimadia.iq/" },
      ],
    },
    electronicSubmission: { system: "要確認（KIMADIA のオンラインシステムの整備状況は限定的）", url: "https://www.kimadia.iq/", description: "KIMADIA/MOH への申請は紙ベースが主流。", mandatory: false },
    udi: { required: false, system: "未導入", description: "イラクでは UDI 制度は導入されていない。", url: null, timeline: "要確認" },
    postMarket: {
      adverseEventReporting: { system: "MOH 有害事象報告", mandatory: true, url: "https://moh.gov.iq/", description: "医療機器に関連する有害事象は MOH に報告義務がある。ただし、体系的な報告制度は発展途上。" },
      recalls: { authority: "MOH Iraq / KIMADIA", description: "MOH/KIMADIA がリコールを管理。国際的なリコール情報に基づく対応。", url: "https://moh.gov.iq/" },
      surveillance: "MOH による市販後監視。体系的な PMS 制度は発展途上。",
    },
    certificateOfFreeSale: { available: true, issuingAuthority: "MOH Iraq", name: "Free Sale Certificate", description: "登録・許可済み医療機器について MOH が発行。輸入申請時には原産国の CFS 提出が必須。", processingTime: "要確認", url: "https://moh.gov.iq/" },
    reimbursement: { system: "公的医療制度（MOH 管轄の公立病院）", authority: "MOH Iraq", description: "イラクの医療は主に公立病院を通じた公的医療制度で提供される。医療機器の調達は KIMADIA の入札プロセスを通じて行われる。民間医療も拡大中。", codingSystems: ["要確認"], url: "https://moh.gov.iq/" },
    marketingRules: { authority: "MOH Iraq", description: "医療機器の広告・販促は MOH の規制下にある。", keyRules: ["許可済み機器のみ広告可", "ラベリングは英語で記載（アラビア語追加を推奨）", "虚偽・誇大広告の禁止"] },
    mdsap: { status: "非参加", description: "イラクは MDSAP プログラムに参加していない。" },
    internationalStandards: {
      iso13485: { accepted: true, notes: "ISO 13485 認証は輸入許可申請時に要求される。" },
      iso14971: { accepted: true, notes: "リスクマネジメントの国際規格として参照。" },
      iec62304: { accepted: true, notes: "ソフトウェア医療機器に対して参照。" },
      iec60601: { accepted: true, notes: "医用電気機器の安全規格として参照。" },
      others: [],
    },
    recentDevelopments: [
      { date: "2025", title: "医療機器規制の体系化に向けた取り組み", description: "MOH/KIMADIA は WHO の支援を受けて医療機器規制の体系化を推進中。独立した登録制度の構築が課題。" },
    ],
    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- LBN（レバノン） ---
  // =========================================================================
  {
    code: "LBN",
    country: "レバノン",
    countryEn: "Lebanese Republic",
    region: "Middle East & Africa",
    flag: "🇱🇧",
    legalSystemOverview: {
      type: "中央集権制（Centralized system）",
      description: "レバノンの医療機器規制は公衆衛生省（MOPH）および薬事監査局（IFP: Inspection Pharmaceutique）が管轄する。MOPH の医療機器部門が主管し、輸入許可・登録を行う。レバノンは WHO のグローバルモデルを参照した規制枠組みの構築を進めているが、経済危機等の影響で制度の整備は遅延している。CE マークまたは FDA 認可を持つ機器に対する輸入許可ベースの規制が主流。",
      keyCharacteristics: [
        "MOPH が医療機器の輸入許可・登録を管理",
        "IFP（薬事監査局）が品質監査を担当",
        "CE マークまたは FDA 認可が事実上の市場参入要件",
        "体系的な医療機器登録制度は発展途上",
        "CFS の提出が要求される",
        "ローカル代理人（輸入業者）の指定が必須",
        "経済危機の影響で規制体制の強化が遅延",
      ],
    },
    authorities: [
      { name: "MOPH", fullName: "Ministry of Public Health — Lebanon", localName: "وزارة الصحة العامة", role: "医療機器の輸入許可・登録・市販後監視", url: "https://www.moph.gov.lb/", isPrimary: true },
      { name: "IFP", fullName: "Inspection Pharmaceutique", localName: "التفتيش الصيدلاني", role: "薬事監査・品質管理・施設検査", url: "https://www.moph.gov.lb/", isPrimary: false },
    ],
    notifiedBodies: {
      system: "なし（MOPH が直接審査。CE/FDA 承認に依拠）",
      description: "レバノンには Notified Body 制度は存在しない。MOPH が輸入許可申請を審査し、CE 証明書または FDA 認可文書を主たるエビデンスとして判断する。",
      bodies: [],
    },
    deviceDefinition: {
      legalDefinition: "MOPH の規則に基づき、疾病の診断・治療・予防・監視等を目的とする器具・装置・機器・ソフトウェア等で、薬理学的・免疫学的・代謝的手段によらないもの。",
      scope: "体外診断用医薬品（IVD）も規制対象。",
      notes: "体系的な法的定義文書の公開は限定的。国際的な定義が参照される。",
    },
    primaryLaw: {
      title: "Law on Exercise of Pharmacy（薬事法）および関連規則",
      originalTitle: "قانون ممارسة مهنة الصيدلة",
      enacted: "1983（改正あり）",
      lastAmended: "随時改正",
      url: "https://www.moph.gov.lb/",
      description: "レバノンの薬事法。医療機器も薬事法の枠組みで規制される。独立した医療機器法の制定が検討されている。",
    },
    implementingRegulations: [
      { title: "MOPH Medical Device Import Circular（医療機器輸入通達）", date: "各種", url: "https://www.moph.gov.lb/", description: "医療機器の輸入許可手続き、必要書類を規定する MOPH 発出の通達。", category: "輸入管理" },
      { title: "MOPH Medical Device Registration Guidelines", date: "各種", url: "https://www.moph.gov.lb/", description: "医療機器の登録ガイドライン（整備中）。", category: "登録" },
    ],
    relatedLaws: [
      { title: "Code de la Santé（衛生法典）", category: "衛生法", enacted: "各種", url: "https://www.moph.gov.lb/", relevance: "レバノンの公衆衛生に関する法規の集成。" },
    ],
    classification: {
      system: "国際分類参照（CE/FDA 分類を事実上採用）",
      basis: "リスクベース（CE/FDA の分類を参照）",
      classes: [
        { name: "Class I", nameJa: "クラスI", riskLevel: "低リスク", description: "低リスク医療機器。", examples: ["弾性包帯", "手動外科器具", "聴診器"], approvalPath: "輸入許可" },
        { name: "Class II", nameJa: "クラスII", riskLevel: "中リスク", description: "中リスク医療機器。", examples: ["超音波診断装置", "輸液ポンプ", "電動車椅子"], approvalPath: "輸入許可（CE/FDA 証明書ベース）" },
        { name: "Class III", nameJa: "クラスIII", riskLevel: "高リスク", description: "高リスク医療機器。", examples: ["人工心臓弁", "冠動脈ステント", "埋込み型デバイス"], approvalPath: "輸入許可（詳細審査）" },
      ],
      rules: [
        { id: "国際分類参照", description: "MOPH は CE または FDA の分類を参照。レバノン独自の分類規則は体系的に公開されていない。", url: "https://www.moph.gov.lb/" },
      ],
      totalProductCodes: "要確認",
    },
    conformityAssessment: {
      overview: "MOPH は CE マークまたは FDA 認可を持つ機器に対し、輸入許可を付与する。独自の適合性評価制度は発展途上。",
      routes: [
        { name: "MOPH Import Authorization", nameJa: "MOPH 輸入許可", applicableClasses: ["全クラス"], description: "CE 証明書または FDA 認可文書、CFS、ISO 13485 認証、技術仕様書等を提出。MOPH が書類審査を行い輸入許可を付与。", subtypes: [], avgReviewTime: "2〜6ヶ月（状況により大幅に変動）", fee: "要確認", url: "https://www.moph.gov.lb/" },
      ],
    },
    electronicSubmission: { system: "要確認", url: "https://www.moph.gov.lb/", description: "MOPH への申請は紙ベースが主流。電子化の進捗は限定的。", mandatory: false },
    udi: { required: false, system: "未導入", description: "レバノンでは UDI 制度は導入されていない。", url: null, timeline: "要確認" },
    postMarket: {
      adverseEventReporting: { system: "MOPH 有害事象報告", mandatory: true, url: "https://www.moph.gov.lb/", description: "医療機器に関連する有害事象は MOPH に報告義務がある。体系的な報告制度は発展途上。" },
      recalls: { authority: "MOPH", description: "MOPH がリコールを管理。国際的なリコール情報に基づく対応。", url: "https://www.moph.gov.lb/" },
      surveillance: "MOPH による市販後監視。体系的な PMS 制度は発展途上。",
    },
    certificateOfFreeSale: { available: true, issuingAuthority: "MOPH", name: "Free Sale Certificate", description: "輸入許可済み医療機器について MOPH が発行。申請時には原産国の CFS 提出が要求される。", processingTime: "要確認", url: "https://www.moph.gov.lb/" },
    reimbursement: { system: "公的医療保険（NSSF）+ 民間保険", authority: "NSSF / MOPH", description: "レバノンの医療保険は NSSF（国家社会保障基金）と民間保険の混合体制。経済危機により公的医療制度は深刻な資金不足に直面。医療機器の償還は主に病院の調達予算を通じて行われる。", codingSystems: ["要確認"], url: "https://www.moph.gov.lb/" },
    marketingRules: { authority: "MOPH", description: "医療機器の広告・販促は MOPH の規制下にある。", keyRules: ["許可済み機器のみ広告可", "ラベリングは英語またはフランス語で記載（アラビア語追加を推奨）", "虚偽・誇大広告の禁止"] },
    mdsap: { status: "非参加", description: "レバノンは MDSAP プログラムに参加していない。" },
    internationalStandards: {
      iso13485: { accepted: true, notes: "ISO 13485 認証は輸入許可申請時に参照される。" },
      iso14971: { accepted: true, notes: "リスクマネジメントの国際規格として参照。" },
      iec62304: { accepted: true, notes: "ソフトウェア医療機器に対して参照。" },
      iec60601: { accepted: true, notes: "医用電気機器の安全規格として参照。" },
      others: [],
    },
    recentDevelopments: [
      { date: "2025", title: "医療機器規制の体系化に向けた取り組み", description: "MOPH は WHO/世界銀行の支援を受けて医療機器規制の体系化を推進中。経済危機からの回復と規制体制の再構築が課題。" },
    ],
    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- NPL（ネパール） ---
  // =========================================================================
  {
    code: "NPL",
    country: "ネパール",
    countryEn: "Federal Democratic Republic of Nepal",
    region: "ASPAC",
    flag: "🇳🇵",
    legalSystemOverview: {
      type: "中央集権制（Centralized system）",
      description: "ネパールの医療機器規制は薬物管理局（DDA: Department of Drug Administration）が管轄する。DDA は保健人口省（MoHP）傘下の機関で、Drug Act 1978 およびその規則に基づき医薬品・医療機器を規制する。医療機器に特化した法律はなく、薬事法の枠組みで規制されている。WHO のグローバルモデルを参照した医療機器規制の体系化が進行中。CE マークまたは FDA 認可を持つ機器に対する輸入許可ベースの規制が主流。",
      keyCharacteristics: [
        "DDA（薬物管理局）による一元的な規制体制",
        "Drug Act 1978 に基づく薬事法の枠組みで規制",
        "医療機器に特化した法律は制定中",
        "CE マークまたは FDA 認可が事実上の市場参入要件",
        "CFS の提出が要求される",
        "ローカル代理人（輸入業者）の指定が必須",
      ],
    },
    authorities: [
      { name: "DDA", fullName: "Department of Drug Administration", localName: "औषधि व्यवस्था विभाग", role: "医療機器の輸入許可・登録・品質管理・市販後監視", url: "https://www.dda.gov.np/", isPrimary: true },
      { name: "MoHP", fullName: "Ministry of Health and Population", localName: "स्वास्थ्य तथा जनसंख्या मन्त्रालय", role: "保健政策全般・規制監督", url: "https://www.mohp.gov.np/", isPrimary: false },
    ],
    notifiedBodies: {
      system: "なし（DDA が直接審査。CE/FDA 承認に依拠）",
      description: "ネパールには Notified Body 制度は存在しない。DDA が輸入許可申請を審査し、CE 証明書または FDA 認可文書を主たるエビデンスとして判断する。",
      bodies: [],
    },
    deviceDefinition: {
      legalDefinition: "DDA の規則に基づき、疾病の診断・治療・予防・監視等を目的とする器具・装置・機器・ソフトウェア等で、薬理学的・免疫学的・代謝的手段によらないもの。",
      scope: "体外診断用医薬品（IVD）も規制対象。",
      notes: "医療機器の法的定義は Drug Act の枠組みで間接的に規定。独立した医療機器法の制定が検討されている。",
    },
    primaryLaw: {
      title: "Drug Act 2035 (1978)",
      originalTitle: "औषधि ऐन, २०३५",
      enacted: "1978",
      lastAmended: "随時改正",
      url: "https://www.dda.gov.np/",
      description: "ネパールの薬事法。医薬品・医療機器の製造・輸入・販売・流通を規制する根幹法。医療機器に特化した規定は限定的で、独立した医療機器法の制定が進行中。",
    },
    implementingRegulations: [
      { title: "Drug Rules 2043 (1986)", date: "1986", url: "https://www.dda.gov.np/", description: "Drug Act の施行規則。医薬品・医療機器の登録・輸入・品質管理の詳細を規定。", category: "包括規制" },
      { title: "DDA Medical Device Import Guidelines", date: "各種", url: "https://www.dda.gov.np/", description: "医療機器の輸入許可手続き、必要書類を規定する DDA 発出のガイドライン。", category: "輸入管理" },
    ],
    relatedLaws: [
      { title: "Medical Device Bill（医療機器法案）", category: "法案", enacted: "検討中", url: "https://www.dda.gov.np/", relevance: "医療機器に特化した独立法の制定が検討されている。" },
    ],
    classification: {
      system: "国際分類参照（WHO/IMDRF ガイドラインを参照）",
      basis: "リスクベース（WHO/IMDRF の分類を参照）",
      classes: [
        { name: "Class A", nameJa: "クラスA", riskLevel: "低リスク", description: "低リスク医療機器。", examples: ["弾性包帯", "手動外科器具", "聴診器"], approvalPath: "DDA 輸入許可" },
        { name: "Class B", nameJa: "クラスB", riskLevel: "中低リスク", description: "中低リスク医療機器。", examples: ["超音波診断装置", "手術用手袋", "歯科用充填材"], approvalPath: "DDA 輸入許可" },
        { name: "Class C", nameJa: "クラスC", riskLevel: "中高リスク", description: "中高リスク医療機器。", examples: ["人工呼吸器", "血液透析装置", "輸液ポンプ"], approvalPath: "DDA 輸入許可（詳細審査）" },
        { name: "Class D", nameJa: "クラスD", riskLevel: "高リスク", description: "高リスク医療機器。", examples: ["人工心臓弁", "冠動脈ステント", "埋込み型デバイス"], approvalPath: "DDA 輸入許可（詳細審査）" },
      ],
      rules: [
        { id: "国際分類参照", description: "DDA は WHO/IMDRF の分類ガイドラインを参照。独自の分類規則の体系的な公開は進行中。", url: "https://www.dda.gov.np/" },
      ],
      totalProductCodes: "要確認",
    },
    conformityAssessment: {
      overview: "DDA は CE マークまたは FDA 認可を持つ機器に対し、輸入許可を付与する。独自の適合性評価制度は発展途上。",
      routes: [
        { name: "DDA Import Authorization", nameJa: "DDA 輸入許可", applicableClasses: ["全クラス"], description: "CE 証明書または FDA 認可文書、CFS、ISO 13485 認証、技術仕様書等を提出。DDA が書類審査を行い輸入許可を付与。", subtypes: [], avgReviewTime: "2〜6ヶ月", fee: "要確認", url: "https://www.dda.gov.np/" },
      ],
    },
    electronicSubmission: { system: "要確認（DDA のオンラインシステムの整備が進行中）", url: "https://www.dda.gov.np/", description: "DDA への申請は紙ベースが主流だが、電子化の取り組みが進行中。", mandatory: false },
    udi: { required: false, system: "未導入", description: "ネパールでは UDI 制度は導入されていない。", url: null, timeline: "要確認" },
    postMarket: {
      adverseEventReporting: { system: "DDA 有害事象報告制度", mandatory: true, url: "https://www.dda.gov.np/", description: "医療機器に関連する有害事象は DDA に報告義務がある。ファーマコビジランス体制の一環として医療機器の監視も行われる。" },
      recalls: { authority: "DDA", description: "DDA がリコールを管理。国際的なリコール情報に基づく対応。", url: "https://www.dda.gov.np/" },
      surveillance: "DDA による市販後監視。体系的な PMS 制度の構築が進行中。",
    },
    certificateOfFreeSale: { available: true, issuingAuthority: "DDA", name: "Free Sale Certificate", description: "輸入許可済み医療機器について DDA が発行。申請時には原産国の CFS 提出が要求される。", processingTime: "要確認", url: "https://www.dda.gov.np/" },
    reimbursement: { system: "公的医療保険（社会保険制度整備中）+ 自己負担", authority: "MoHP / Health Insurance Board", description: "ネパールの医療保険制度は Health Insurance Board が管轄する社会健康保険の拡大を推進中。医療機器の償還は主に公立病院の調達予算を通じて行われる。自己負担比率が高い。", codingSystems: ["要確認"], url: "https://www.dda.gov.np/" },
    marketingRules: { authority: "DDA", description: "医療機器の広告・販促は DDA の規制下にある。", keyRules: ["許可済み機器のみ広告可", "ラベリングは英語で記載（ネパール語追加を推奨）", "虚偽・誇大広告の禁止"] },
    mdsap: { status: "非参加", description: "ネパールは MDSAP プログラムに参加していない。" },
    internationalStandards: {
      iso13485: { accepted: true, notes: "ISO 13485 認証は輸入許可申請時に参照される。" },
      iso14971: { accepted: true, notes: "リスクマネジメントの国際規格として参照。" },
      iec62304: { accepted: true, notes: "ソフトウェア医療機器に対して参照。" },
      iec60601: { accepted: true, notes: "医用電気機器の安全規格として参照。" },
      others: [],
    },
    recentDevelopments: [
      { date: "2025", title: "医療機器法の制定に向けた取り組み", description: "DDA/MoHP は WHO の支援を受けて医療機器に特化した法律の制定を推進中。Drug Act の枠組みからの独立と、IMDRF ガイドラインに基づく規制体系の構築が目標。" },
    ],
    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- IRN（イラン） ---
  // =========================================================================
  {
    code: "IRN",
    country: "イラン",
    countryEn: "Islamic Republic of Iran",
    region: "Middle East & Africa",
    flag: "🇮🇷",
    legalSystemOverview: {
      type: "中央集権制（Centralized system）",
      description: "イランの医療機器規制はイラン医療機器局（IMED: Iranian Medical Equipment Directorate）および食品医薬品庁（IFDA: Iran Food and Drug Administration）が管轄する。IMED は保健省傘下の専門機関で、医療機器の登録・市場監視を担当。IFDA は医薬品・食品・化粧品を含む包括的な規制機関。イランは独自の医療機器規制制度を有し、WHO のグローバルモデルや EU の MDR に触発された制度改革を推進中。国内製造の促進が重要な政策課題。",
      keyCharacteristics: [
        "IMED（医療機器局）による専門的な規制体制",
        "IFDA との連携による包括的な規制",
        "リスクベースの4クラス分類（Class A / B / C / D）",
        "独自の登録制度（IRC: Iran Registration Certificate）",
        "国内製造促進政策が規制に影響",
        "ローカル代理人の指定が必須",
        "CFS と ISO 13485 認証の提出が必要",
      ],
    },
    authorities: [
      { name: "IMED", fullName: "Iranian Medical Equipment Directorate", localName: "اداره کل تجهیزات پزشکی", role: "医療機器の登録・技術評価・市場監視・施設許可", url: "https://imed.ir/", isPrimary: true },
      { name: "IFDA", fullName: "Iran Food and Drug Administration", localName: "سازمان غذا و دارو", role: "医薬品・食品・化粧品を含む包括的規制・IMED の上位機関", url: "https://www.fda.gov.ir/", isPrimary: true },
      { name: "MoHME", fullName: "Ministry of Health and Medical Education", localName: "وزارت بهداشت، درمان و آموزش پزشکی", role: "保健政策全般・規制監督", url: "https://behdasht.gov.ir/", isPrimary: false },
    ],
    notifiedBodies: {
      system: "なし（IMED が直接審査）",
      description: "イランには欧州型の Notified Body 制度は存在しない。IMED が申請書類を直接審査し、登録証（IRC）を発行する。CE 証明書や FDA 認可は審査で参照されるが、IMED の独自審査が必要。",
      bodies: [],
    },
    deviceDefinition: {
      legalDefinition: "IMED/IFDA の規則に基づき、人体に対して使用される器具・装置・機器・ソフトウェア・材料等で、疾病の診断・予防・監視・治療・軽減等を目的とし、主たる作用が薬理学的・免疫学的・代謝的手段によらないもの。",
      scope: "体外診断用医薬品（IVD）も規制対象。IMED が管轄。",
      notes: "定義は GHTF/IMDRF の定義に概ね準拠。",
    },
    primaryLaw: {
      title: "Food, Drug, and Cosmetics Act（食品・医薬品・化粧品法）",
      originalTitle: "قانون مواد خوراکی، آشامیدنی، آرایشی و بهداشتی",
      enacted: "1967（改正あり）",
      lastAmended: "随時改正",
      url: "https://www.fda.gov.ir/",
      description: "イランにおける医薬品・食品・化粧品・医療機器規制の根幹法。IFDA/IMED の権限の法的根拠を提供。",
    },
    implementingRegulations: [
      { title: "IMED Medical Device Registration Regulation", date: "各種", url: "https://imed.ir/", description: "医療機器の登録手続き、必要書類、技術要件、分類規則等を規定。", category: "登録" },
      { title: "IMED Import and Distribution Regulation", date: "各種", url: "https://imed.ir/", description: "医療機器の輸入・流通に関する要件。ローカル代理人の要件を含む。", category: "輸入管理" },
      { title: "IMED Clinical Investigation Regulation", date: "各種", url: "https://imed.ir/", description: "イランにおける医療機器の臨床試験に関する要件。", category: "臨床試験" },
    ],
    relatedLaws: [
      { title: "IFDA Organization Law", category: "組織法", enacted: "2010", url: "https://www.fda.gov.ir/", relevance: "IFDA の設立、権限、組織構成を規定。" },
    ],
    classification: {
      system: "リスクベース4クラス分類（Class A / B / C / D）",
      basis: "リスクベース（GHTF/IMDRF の分類ガイドラインを参照）",
      classes: [
        { name: "Class A", nameJa: "クラスA", riskLevel: "低リスク", description: "低リスク医療機器。一般的制御で安全性を確保。", examples: ["弾性包帯", "手動外科器具", "聴診器"], approvalPath: "簡易登録（届出）" },
        { name: "Class B", nameJa: "クラスB", riskLevel: "中低リスク", description: "中低リスク医療機器。", examples: ["超音波診断装置", "手術用手袋", "歯科用充填材"], approvalPath: "標準登録" },
        { name: "Class C", nameJa: "クラスC", riskLevel: "中高リスク", description: "中高リスク医療機器。より詳細な技術文書の提出が必要。", examples: ["人工呼吸器", "血液透析装置", "輸液ポンプ"], approvalPath: "詳細登録（技術文書審査）" },
        { name: "Class D", nameJa: "クラスD", riskLevel: "高リスク", description: "高リスク医療機器。最も厳格な審査が適用される。臨床データの提出が要求される場合がある。", examples: ["人工心臓弁", "冠動脈ステント", "埋込み型除細動器"], approvalPath: "フル登録（技術文書 + 臨床データ審査）" },
      ],
      rules: [
        { id: "IMED 分類規則", description: "IMED は GHTF/IMDRF の分類ガイドラインを参照した独自の分類規則を運用。", url: "https://imed.ir/" },
      ],
      totalProductCodes: "要確認（IMED 製品コードデータベースは imed.ir で参照可能）",
    },
    conformityAssessment: {
      overview: "IMED は独自の登録審査を実施し、IRC（Iran Registration Certificate）を発行する。CE マークや FDA 認可は審査で参照されるが、IMED の独立審査が必須。国内製造品には優遇措置がある。",
      routes: [
        { name: "IMED Device Registration (IRC)", nameJa: "IMED 医療機器登録（IRC）", applicableClasses: ["全クラス"], description: "ISO 13485 認証、CFS、技術文書、ラベリング情報、臨床データ（高リスク機器）等を提出。IMED が技術評価を行い IRC を発行。国内製造品は優先審査。", subtypes: [], avgReviewTime: "3〜12ヶ月（クラスにより異なる）", fee: "要確認（IMED 料金表に依拠）", url: "https://imed.ir/" },
      ],
    },
    electronicSubmission: { system: "IMED オンラインポータル", url: "https://imed.ir/", description: "IMED はオンライン申請ポータルを運用しており、電子申請が可能。登録申請、進捗確認等をオンラインで行える。", mandatory: true },
    udi: { required: false, system: "検討中", description: "イランでは UDI 制度の導入が検討されている。IMED は段階的な UDI 導入計画を策定中。", url: "https://imed.ir/", timeline: "要確認（段階的導入の計画あり）" },
    postMarket: {
      adverseEventReporting: { system: "IMED 有害事象報告制度（マテリオビジランス）", mandatory: true, url: "https://imed.ir/", description: "医療機器に関連する有害事象は IMED に報告義務がある。IMED はマテリオビジランスシステムを運用し、有害事象の収集・分析・対応を行う。" },
      recalls: { authority: "IMED", description: "IMED がリコール・Field Safety Corrective Action を管理。製造業者・輸入業者はリコール実施時に IMED に通知義務。", url: "https://imed.ir/" },
      surveillance: "IMED による市販後監視。マテリオビジランスに基づく報告・調査体制。市場サーベイランスも実施。",
    },
    certificateOfFreeSale: { available: true, issuingAuthority: "IMED", name: "Free Sale Certificate", description: "登録済み医療機器について IMED が発行する自由販売証明書。登録申請時には原産国の CFS 提出が必要。", processingTime: "要確認", url: "https://imed.ir/" },
    reimbursement: { system: "公的医療保険 + 民間保険", authority: "Iran Health Insurance Organization / MoHME", description: "イランの医療保険は Iran Health Insurance Organization が管轄する公的保険制度が中心。医療機器の償還は主に公立病院の調達予算および保険基金の給付リストを通じて行われる。国内製造品には償還面での優遇措置がある場合がある。", codingSystems: ["要確認"], url: "https://www.fda.gov.ir/" },
    marketingRules: { authority: "IMED", description: "医療機器の広告・販促は IMED の規制下にある。承認された適応のみの広告が原則。", keyRules: ["登録済み機器（IRC 保有）のみ広告可", "ラベリングはペルシア語で記載（英語併記を推奨）", "虚偽・誇大広告の禁止", "国内製造品の推奨"] },
    mdsap: { status: "非参加", description: "イランは MDSAP プログラムに参加していない。" },
    internationalStandards: {
      iso13485: { accepted: true, notes: "ISO 13485 認証は登録申請時に必須。ISIRI（イラン国家標準機構）認定の認証機関による認証も受け入れられる。" },
      iso14971: { accepted: true, notes: "リスクマネジメントの国際規格として参照。登録申請時にリスク分析報告書の提出が要求される。" },
      iec62304: { accepted: true, notes: "ソフトウェア医療機器に対して参照。" },
      iec60601: { accepted: true, notes: "医用電気機器の安全規格として参照。ISIRI の国家規格としても採用。" },
      others: [
        { standard: "ISIRI（イラン国家規格）", notes: "イラン国家標準機構（ISIRI）が ISO/IEC 規格のイラン版国家規格を策定・発行。" },
      ],
    },
    recentDevelopments: [
      { date: "2025", title: "IMED 規制制度の近代化推進", description: "IMED は WHO の基準に準拠した規制制度の近代化を推進中。電子申請の拡充、UDI 導入計画、臨床試験規制の強化、国内製造促進政策の充実に注力。" },
    ],
    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- Slovakia ---
  // =========================================================================
  {
    code: "SVK",
    country: "スロバキア",
    countryEn: "Slovakia",
    region: "Europe",
    flag: "🇸🇰",

    legalSystemOverview: {
      type: "EU加盟国（MDR/IVDR 直接適用）",
      description:
        "スロバキアはEU加盟国（2004年加盟）であり、Regulation (EU) 2017/745（MDR）および Regulation (EU) 2017/746（IVDR）が直接適用される。国内補完法として Zákon č. 56/2018 Z.z. o posudzovaní zhody výrobku（適合性評価法）および関連法令が施行されている。ŠÚKL（Štátny ústav pre kontrolu liečiv / 国家医薬品管理局）がNCAとして医療機器の市場監視・ビジランスを管轄する。",
      keyCharacteristics: [
        "EU MDR/IVDR が直接適用",
        "ŠÚKL がNCAとして市場監視・ビジランスを担当",
        "Zákon č. 56/2018 Z.z. による国内補完",
        "ラベリング・IFU はスロバキア語必須",
        "国内にNotified Body なし（EU域内他国のNBを利用）",
        "2004年EU加盟後、規制体制をEU基準に完全移行",
      ],
    },

    authorities: [
      { name: "ŠÚKL", fullName: "State Institute for Drug Control", localName: "Štátny ústav pre kontrolu liečiv", role: "NCA: 医療機器の市場監視・ビジランス・臨床試験監督・登録管理", url: "https://www.sukl.sk/", isPrimary: true },
      { name: "MZ SR", fullName: "Ministry of Health of the Slovak Republic", localName: "Ministerstvo zdravotníctva Slovenskej republiky", role: "医療機器政策立案・法整備", url: "https://www.health.gov.sk/", isPrimary: false },
      { name: "VšZP", fullName: "General Health Insurance Company", localName: "Všeobecná zdravotná poisťovňa", role: "公的医療保険（最大の保険者）", url: "https://www.vszp.sk/", isPrimary: false },
    ],

    notifiedBodies: {
      system: "EU MDR Notified Body 制度（スロバキア国内に指定機関なし）",
      description: "スロバキア国内にMDR指定Notified Bodyは存在しない。製造業者はEU域内他国の指定NBを利用する。",
      bodies: [],
    },

    deviceDefinition: {
      legalDefinition: "EU MDR Article 2(1) の定義がそのまま適用。",
      scope: "IVD は IVDR で別途規定。SaMD・AI/ML 搭載機器も対象。美容目的製品（Annex XVI）も適用。",
      notes: "MDR の定義がそのまま国内法に適用。追加的な定義変更なし。",
    },

    primaryLaw: {
      title: "Regulation (EU) 2017/745 — Medical Devices Regulation (MDR)",
      originalTitle: null,
      enacted: "2017（EU採択）/ 2021年5月26日適用",
      lastAmended: "2025（Regulation (EU) 2025/2457）",
      url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32017R0745",
      description: "EU MDR がスロバキアに直接適用。Zákon č. 56/2018 Z.z. が国内補完法。",
    },

    implementingRegulations: [
      { title: "Zákon č. 56/2018 Z.z. o posudzovaní zhody výrobku（適合性評価法）", date: "2018", url: "https://www.slov-lex.sk/pravne-predpisy/SK/ZZ/2018/56/", description: "MDR/IVDR 国内補完法。NCA権限・罰則・登録義務・適合性評価。", category: "国内補完法" },
      { title: "Zákon č. 362/2011 Z.z. o liekoch a zdravotníckych pomôckach（医薬品・医療機器法）", date: "2011（随時改正）", url: "https://www.slov-lex.sk/pravne-predpisy/SK/ZZ/2011/362/", description: "医薬品・医療機器の包括的法律。ŠÚKL の権限・組織。", category: "包括法" },
    ],

    relatedLaws: [
      { title: "GDPR (Regulation (EU) 2016/679)", category: "データ保護", enacted: "2018", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679", relevance: "健康データに適用。Zákon č. 18/2018 Z.z. o ochrane osobných údajov も併存。" },
      { title: "AI Act — Regulation (EU) 2024/1689", category: "人工知能", enacted: "2024", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32024R1689", relevance: "AI搭載医療機器はHigh-Risk AI System。" },
    ],

    classification: {
      system: "EU MDR 4クラス制（Class I / IIa / IIb / III）",
      basis: "EU MDR Annex VIII の22分類規則がそのまま適用。",
      classes: [
        { name: "Class I", nameJa: "クラスI", riskLevel: "低", description: "低リスク。自己宣言（Im/Is/Ir除く）。", examples: ["弾性包帯", "聴診器", "車椅子"], approvalPath: "自己宣言" },
        { name: "Class IIa", nameJa: "クラスIIa", riskLevel: "中低", description: "中低リスク。NB関与。", examples: ["補聴器", "超音波装置", "コンタクトレンズ"], approvalPath: "Notified Body審査" },
        { name: "Class IIb", nameJa: "クラスIIb", riskLevel: "中高", description: "中高リスク。NB詳細審査。", examples: ["人工呼吸器", "血液透析装置", "輸液ポンプ"], approvalPath: "Notified Body審査" },
        { name: "Class III", nameJa: "クラスIII", riskLevel: "高", description: "最高リスク。", examples: ["人工心臓弁", "冠動脈ステント", "乳房インプラント"], approvalPath: "NB審査 + Expert Panel相談" },
      ],
      rules: ["EU MDR Annex VIII の22分類規則を直接適用"],
      totalProductCodes: "EU CND コード",
    },

    conformityAssessment: {
      overview: "EU MDR に基づく適合性評価がそのまま適用。国内追加の市販前審査なし。ŠÚKL への事業者登録が必要。",
      routes: [{ name: "EU MDR Conformity Assessment", nameJa: "EU MDR 適合性評価", applicableClasses: ["全クラス"], description: "EU MDR Annex IX〜XI。詳細はEUプロファイル参照。", subtypes: [], avgReviewTime: "EUプロファイル参照", fee: "Notified Body により異なる（EU域内他国のNBを利用）", url: "https://www.sukl.sk/" }],
    },

    electronicSubmission: { system: "EUDAMED + ŠÚKL 国内登録", url: "https://www.sukl.sk/", description: "EUDAMED + ŠÚKL 事業者登録。EUDAMED 4モジュール義務化: 2026年5月28日。", mandatory: true },
    udi: { required: true, system: "EU UDI System — EUDAMED", description: "EU MDR Article 27-29 UDI 要件がそのまま適用。", url: "https://ec.europa.eu/tools/eudamed/", timeline: "EUDAMED義務化: 2026年5月28日" },

    postMarket: {
      adverseEventReporting: { system: "EU Vigilance System — ŠÚKL", mandatory: true, url: "https://www.sukl.sk/", description: "重篤有害事象をŠÚKLに報告義務。MDR Article 87-92。" },
      recalls: { authority: "ŠÚKL", description: "FSCA/FSNはŠÚKLに通知。ŠÚKLが市場からの回収命令権限を有する。", url: "https://www.sukl.sk/" },
      surveillance: "EU MDR PMS/PSUR/PMCF要件がそのまま適用。",
    },

    certificateOfFreeSale: { available: true, issuingAuthority: "ŠÚKL", name: "Certificate of Free Sale (CFS)", description: "ŠÚKL がCFSを発行。", processingTime: "要確認", url: "https://www.sukl.sk/" },

    reimbursement: {
      system: "社会健康保険制度（複数保険者制）",
      authority: "MZ SR / VšZP 他3保険者",
      description: "スロバキアは3つの健康保険会社（VšZP、Dôvera、Union）による社会健康保険制度。医療機器の償還はMZ SR が策定する「カテゴリー化リスト」に基づく。インプラント・補装具はリスト掲載が必要。DRG制度を導入済み。",
      codingSystems: ["SK-DRG", "カテゴリー化リスト"],
      url: "https://www.health.gov.sk/",
    },

    marketingRules: {
      authority: "ŠÚKL",
      description: "MDR Article 7 虚偽広告禁止。スロバキア国内法に基づく広告規制。",
      keyRules: ["スロバキア語ラベリング・IFU必須", "MDR Article 7 虚偽広告禁止"],
    },

    mdsap: { status: "非参加", description: "EU加盟国としてMDSAP非参加。" },

    internationalStandards: {
      iso13485: { accepted: true, notes: "EU MDR QMS要件に基づき実質必須。EN ISO 13485:2016。" },
      iso14971: { accepted: true, notes: "EN ISO 14971:2019 + A11:2021。" },
      iec62304: { accepted: true, notes: "EN IEC 62304:2006 + A1:2015。" },
      iec60601: { accepted: true, notes: "EN IEC 60601 シリーズ。" },
      others: [],
    },

    recentDevelopments: [
      { date: "2025", title: "MDR延長規則適用", description: "Regulation (EU) 2025/2457 による移行期間延長。MDD証書の段階的失効スケジュール適用。" },
      { date: "2024", title: "EUDAMED義務化準備", description: "EUDAMED 4モジュール2026年5月28日義務化に向けた準備。" },
    ],

    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- Lithuania ---
  // =========================================================================
  {
    code: "LTU",
    country: "リトアニア",
    countryEn: "Lithuania",
    region: "Europe",
    flag: "🇱🇹",

    legalSystemOverview: {
      type: "EU加盟国（MDR/IVDR 直接適用）",
      description:
        "リトアニアはEU加盟国（2004年加盟）であり、Regulation (EU) 2017/745（MDR）および Regulation (EU) 2017/746（IVDR）が直接適用される。国内補完法として Lietuvos Respublikos medicinos priemonių įstatymas（医療機器法）の改正版が施行されている。VVKT（Valstybinė vaistų kontrolės tarnyba prie Lietuvos Respublikos sveikatos apsaugos ministerijos / 国家医薬品管理局）がNCAとして市場監視・ビジランスを管轄する。",
      keyCharacteristics: [
        "EU MDR/IVDR が直接適用",
        "VVKT がNCAとして市場監視・ビジランスを担当",
        "Medicinos priemonių įstatymas 改正による国内補完",
        "ラベリング・IFU はリトアニア語必須",
        "国内にNotified Body なし（EU域内他国のNBを利用）",
        "2004年EU加盟後、規制体制をEU基準に完全移行",
      ],
    },

    authorities: [
      { name: "VVKT", fullName: "State Medicines Control Agency", localName: "Valstybinė vaistų kontrolės tarnyba", role: "NCA: 医療機器の市場監視・ビジランス・臨床試験監督・登録管理", url: "https://www.vvkt.lt/", isPrimary: true },
      { name: "SAM", fullName: "Ministry of Health of the Republic of Lithuania", localName: "Lietuvos Respublikos sveikatos apsaugos ministerija", role: "医療機器政策立案・法整備", url: "https://sam.lrv.lt/", isPrimary: false },
      { name: "VLK", fullName: "National Health Insurance Fund", localName: "Valstybinė ligonių kasa", role: "公的医療保険・償還管理", url: "https://www.vlk.lt/", isPrimary: false },
    ],

    notifiedBodies: {
      system: "EU MDR Notified Body 制度（リトアニア国内に指定機関なし）",
      description: "リトアニア国内にMDR指定Notified Bodyは存在しない。製造業者はEU域内他国の指定NBを利用する。",
      bodies: [],
    },

    deviceDefinition: {
      legalDefinition: "EU MDR Article 2(1) の定義がそのまま適用。",
      scope: "IVD は IVDR で別途規定。SaMD・AI/ML 搭載機器も対象。美容目的製品（Annex XVI）も適用。",
      notes: "MDR の定義がそのまま国内法に適用。追加的な定義変更なし。",
    },

    primaryLaw: {
      title: "Regulation (EU) 2017/745 — Medical Devices Regulation (MDR)",
      originalTitle: null,
      enacted: "2017（EU採択）/ 2021年5月26日適用",
      lastAmended: "2025（Regulation (EU) 2025/2457）",
      url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32017R0745",
      description: "EU MDR がリトアニアに直接適用。Medicinos priemonių įstatymas 改正が国内補完法。",
    },

    implementingRegulations: [
      { title: "Lietuvos Respublikos medicinos priemonių įstatymas（医療機器法）改正", date: "2021", url: "https://www.e-tar.lt/", description: "MDR/IVDR 国内補完法。NCA権限・罰則・登録義務・言語要件。", category: "国内補完法" },
      { title: "SAM 省令 — 各種施行細則", date: "各年", url: "https://sam.lrv.lt/", description: "登録手続・手数料・ビジランス手続等。", category: "施行細則" },
    ],

    relatedLaws: [
      { title: "GDPR (Regulation (EU) 2016/679)", category: "データ保護", enacted: "2018", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679", relevance: "健康データに適用。Asmens duomenų teisinės apsaugos įstatymas も併存。" },
      { title: "AI Act — Regulation (EU) 2024/1689", category: "人工知能", enacted: "2024", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32024R1689", relevance: "AI搭載医療機器はHigh-Risk AI System。" },
    ],

    classification: {
      system: "EU MDR 4クラス制（Class I / IIa / IIb / III）",
      basis: "EU MDR Annex VIII の22分類規則がそのまま適用。",
      classes: [
        { name: "Class I", nameJa: "クラスI", riskLevel: "低", description: "低リスク。自己宣言（Im/Is/Ir除く）。", examples: ["弾性包帯", "聴診器", "車椅子"], approvalPath: "自己宣言" },
        { name: "Class IIa", nameJa: "クラスIIa", riskLevel: "中低", description: "中低リスク。NB関与。", examples: ["補聴器", "超音波装置", "コンタクトレンズ"], approvalPath: "Notified Body審査" },
        { name: "Class IIb", nameJa: "クラスIIb", riskLevel: "中高", description: "中高リスク。NB詳細審査。", examples: ["人工呼吸器", "血液透析装置", "輸液ポンプ"], approvalPath: "Notified Body審査" },
        { name: "Class III", nameJa: "クラスIII", riskLevel: "高", description: "最高リスク。", examples: ["人工心臓弁", "冠動脈ステント", "乳房インプラント"], approvalPath: "NB審査 + Expert Panel相談" },
      ],
      rules: ["EU MDR Annex VIII の22分類規則を直接適用"],
      totalProductCodes: "EU CND コード",
    },

    conformityAssessment: {
      overview: "EU MDR に基づく適合性評価がそのまま適用。国内追加の市販前審査なし。VVKT への事業者登録が必要。",
      routes: [{ name: "EU MDR Conformity Assessment", nameJa: "EU MDR 適合性評価", applicableClasses: ["全クラス"], description: "EU MDR Annex IX〜XI。詳細はEUプロファイル参照。", subtypes: [], avgReviewTime: "EUプロファイル参照", fee: "Notified Body により異なる（EU域内他国のNBを利用）", url: "https://www.vvkt.lt/" }],
    },

    electronicSubmission: { system: "EUDAMED + VVKT 国内登録", url: "https://www.vvkt.lt/", description: "EUDAMED + VVKT 事業者登録。EUDAMED 4モジュール義務化: 2026年5月28日。", mandatory: true },
    udi: { required: true, system: "EU UDI System — EUDAMED", description: "EU MDR Article 27-29 UDI 要件がそのまま適用。", url: "https://ec.europa.eu/tools/eudamed/", timeline: "EUDAMED義務化: 2026年5月28日" },

    postMarket: {
      adverseEventReporting: { system: "EU Vigilance System — VVKT", mandatory: true, url: "https://www.vvkt.lt/", description: "重篤有害事象をVVKTに報告義務。MDR Article 87-92。" },
      recalls: { authority: "VVKT", description: "FSCA/FSNはVVKTに通知。VVKTが市場からの回収命令権限を有する。", url: "https://www.vvkt.lt/" },
      surveillance: "EU MDR PMS/PSUR/PMCF要件がそのまま適用。",
    },

    certificateOfFreeSale: { available: true, issuingAuthority: "VVKT", name: "Certificate of Free Sale (CFS)", description: "VVKT がCFSを発行。", processingTime: "要確認", url: "https://www.vvkt.lt/" },

    reimbursement: {
      system: "社会健康保険制度（VLK）",
      authority: "VLK（Valstybinė ligonių kasa）",
      description: "リトアニアは国民健康保険基金（VLK）による社会健康保険制度。医療機器の償還はVLK が管理する償還リストに基づく。インプラント・補装具はリスト掲載が必要。DRG（Lithuanian DRG）システムを導入。",
      codingSystems: ["LT-DRG", "VLK 償還リスト"],
      url: "https://www.vlk.lt/",
    },

    marketingRules: {
      authority: "VVKT",
      description: "MDR Article 7 虚偽広告禁止。リトアニア国内法に基づく広告規制。",
      keyRules: ["リトアニア語ラベリング・IFU必須", "MDR Article 7 虚偽広告禁止"],
    },

    mdsap: { status: "非参加", description: "EU加盟国としてMDSAP非参加。" },

    internationalStandards: {
      iso13485: { accepted: true, notes: "EU MDR QMS要件に基づき実質必須。EN ISO 13485:2016。" },
      iso14971: { accepted: true, notes: "EN ISO 14971:2019 + A11:2021。" },
      iec62304: { accepted: true, notes: "EN IEC 62304:2006 + A1:2015。" },
      iec60601: { accepted: true, notes: "EN IEC 60601 シリーズ。" },
      others: [],
    },

    recentDevelopments: [
      { date: "2025", title: "MDR延長規則適用", description: "Regulation (EU) 2025/2457 による移行期間延長。MDD証書の段階的失効スケジュール適用。" },
      { date: "2024", title: "EUDAMED義務化準備", description: "EUDAMED 4モジュール2026年5月28日義務化に向けた準備。" },
    ],

    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- Latvia ---
  // =========================================================================
  {
    code: "LVA",
    country: "ラトビア",
    countryEn: "Latvia",
    region: "Europe",
    flag: "🇱🇻",

    legalSystemOverview: {
      type: "EU加盟国（MDR/IVDR 直接適用）",
      description:
        "ラトビアはEU加盟国（2004年加盟）であり、Regulation (EU) 2017/745（MDR）および Regulation (EU) 2017/746（IVDR）が直接適用される。国内補完法として Ārstniecībā un farmācijā lietojamo medicīnisko ierīču likums（医療機器法）の改正版が施行されている。ZVA（Zāļu valsts aģentūra / 国家医薬品庁）がNCAとして医療機器の市場監視・ビジランスを管轄する。",
      keyCharacteristics: [
        "EU MDR/IVDR が直接適用",
        "ZVA がNCAとして市場監視・ビジランスを担当",
        "医療機器法改正による国内補完",
        "ラベリング・IFU はラトビア語必須",
        "国内にNotified Body なし（EU域内他国のNBを利用）",
        "2004年EU加盟後、規制体制をEU基準に完全移行",
      ],
    },

    authorities: [
      { name: "ZVA", fullName: "State Agency of Medicines", localName: "Zāļu valsts aģentūra", role: "NCA: 医療機器の市場監視・ビジランス・臨床試験監督・登録管理", url: "https://www.zva.gov.lv/", isPrimary: true },
      { name: "VM", fullName: "Ministry of Health", localName: "Veselības ministrija", role: "医療機器政策立案・法整備", url: "https://www.vm.gov.lv/", isPrimary: false },
      { name: "NVD", fullName: "National Health Service", localName: "Nacionālais veselības dienests", role: "公的医療サービス・償還管理", url: "https://www.vmnvd.gov.lv/", isPrimary: false },
    ],

    notifiedBodies: {
      system: "EU MDR Notified Body 制度（ラトビア国内に指定機関なし）",
      description: "ラトビア国内にMDR指定Notified Bodyは存在しない。製造業者はEU域内他国の指定NBを利用する。",
      bodies: [],
    },

    deviceDefinition: {
      legalDefinition: "EU MDR Article 2(1) の定義がそのまま適用。",
      scope: "IVD は IVDR で別途規定。SaMD・AI/ML 搭載機器も対象。美容目的製品（Annex XVI）も適用。",
      notes: "MDR の定義がそのまま国内法に適用。追加的な定義変更なし。",
    },

    primaryLaw: {
      title: "Regulation (EU) 2017/745 — Medical Devices Regulation (MDR)",
      originalTitle: null,
      enacted: "2017（EU採択）/ 2021年5月26日適用",
      lastAmended: "2025（Regulation (EU) 2025/2457）",
      url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32017R0745",
      description: "EU MDR がラトビアに直接適用。医療機器法改正が国内補完法。",
    },

    implementingRegulations: [
      { title: "Medicīnisko ierīču likums（医療機器法）改正", date: "2021", url: "https://likumi.lv/", description: "MDR/IVDR 国内補完法。NCA権限・罰則・登録義務・言語要件。", category: "国内補完法" },
      { title: "MK noteikumi（閣僚会議規則）— 各種施行細則", date: "各年", url: "https://likumi.lv/", description: "登録手続・手数料・ビジランス手続等。", category: "施行細則" },
    ],

    relatedLaws: [
      { title: "GDPR (Regulation (EU) 2016/679)", category: "データ保護", enacted: "2018", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679", relevance: "健康データに適用。Fizisko personu datu apstrādes likums も併存。" },
      { title: "AI Act — Regulation (EU) 2024/1689", category: "人工知能", enacted: "2024", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32024R1689", relevance: "AI搭載医療機器はHigh-Risk AI System。" },
    ],

    classification: {
      system: "EU MDR 4クラス制（Class I / IIa / IIb / III）",
      basis: "EU MDR Annex VIII の22分類規則がそのまま適用。",
      classes: [
        { name: "Class I", nameJa: "クラスI", riskLevel: "低", description: "低リスク。自己宣言（Im/Is/Ir除く）。", examples: ["弾性包帯", "聴診器", "車椅子"], approvalPath: "自己宣言" },
        { name: "Class IIa", nameJa: "クラスIIa", riskLevel: "中低", description: "中低リスク。NB関与。", examples: ["補聴器", "超音波装置", "コンタクトレンズ"], approvalPath: "Notified Body審査" },
        { name: "Class IIb", nameJa: "クラスIIb", riskLevel: "中高", description: "中高リスク。NB詳細審査。", examples: ["人工呼吸器", "血液透析装置", "輸液ポンプ"], approvalPath: "Notified Body審査" },
        { name: "Class III", nameJa: "クラスIII", riskLevel: "高", description: "最高リスク。", examples: ["人工心臓弁", "冠動脈ステント", "乳房インプラント"], approvalPath: "NB審査 + Expert Panel相談" },
      ],
      rules: ["EU MDR Annex VIII の22分類規則を直接適用"],
      totalProductCodes: "EU CND コード",
    },

    conformityAssessment: {
      overview: "EU MDR に基づく適合性評価がそのまま適用。国内追加の市販前審査なし。ZVA への事業者登録が必要。",
      routes: [{ name: "EU MDR Conformity Assessment", nameJa: "EU MDR 適合性評価", applicableClasses: ["全クラス"], description: "EU MDR Annex IX〜XI。詳細はEUプロファイル参照。", subtypes: [], avgReviewTime: "EUプロファイル参照", fee: "Notified Body により異なる（EU域内他国のNBを利用）", url: "https://www.zva.gov.lv/" }],
    },

    electronicSubmission: { system: "EUDAMED + ZVA 国内登録", url: "https://www.zva.gov.lv/", description: "EUDAMED + ZVA 事業者登録。EUDAMED 4モジュール義務化: 2026年5月28日。", mandatory: true },
    udi: { required: true, system: "EU UDI System — EUDAMED", description: "EU MDR Article 27-29 UDI 要件がそのまま適用。", url: "https://ec.europa.eu/tools/eudamed/", timeline: "EUDAMED義務化: 2026年5月28日" },

    postMarket: {
      adverseEventReporting: { system: "EU Vigilance System — ZVA", mandatory: true, url: "https://www.zva.gov.lv/", description: "重篤有害事象をZVAに報告義務。MDR Article 87-92。" },
      recalls: { authority: "ZVA", description: "FSCA/FSNはZVAに通知。ZVAが市場からの回収命令権限を有する。", url: "https://www.zva.gov.lv/" },
      surveillance: "EU MDR PMS/PSUR/PMCF要件がそのまま適用。",
    },

    certificateOfFreeSale: { available: true, issuingAuthority: "ZVA", name: "Certificate of Free Sale (CFS)", description: "ZVA がCFSを発行。", processingTime: "要確認", url: "https://www.zva.gov.lv/" },

    reimbursement: {
      system: "国家健康サービス（NVD）",
      authority: "NVD（Nacionālais veselības dienests）",
      description: "ラトビアは税財源ベースの国家健康サービス制度。NVD が医療サービスの購入・償還を管理。医療機器の償還は「補償対象医療機器リスト」に基づく。インプラント等は病院予算内でカバー。",
      codingSystems: ["NVD 償還リスト"],
      url: "https://www.vmnvd.gov.lv/",
    },

    marketingRules: {
      authority: "ZVA",
      description: "MDR Article 7 虚偽広告禁止。ラトビア国内法に基づく広告規制。",
      keyRules: ["ラトビア語ラベリング・IFU必須", "MDR Article 7 虚偽広告禁止"],
    },

    mdsap: { status: "非参加", description: "EU加盟国としてMDSAP非参加。" },

    internationalStandards: {
      iso13485: { accepted: true, notes: "EU MDR QMS要件に基づき実質必須。EN ISO 13485:2016。" },
      iso14971: { accepted: true, notes: "EN ISO 14971:2019 + A11:2021。" },
      iec62304: { accepted: true, notes: "EN IEC 62304:2006 + A1:2015。" },
      iec60601: { accepted: true, notes: "EN IEC 60601 シリーズ。" },
      others: [],
    },

    recentDevelopments: [
      { date: "2025", title: "MDR延長規則適用", description: "Regulation (EU) 2025/2457 による移行期間延長。MDD証書の段階的失効スケジュール適用。" },
      { date: "2024", title: "EUDAMED義務化準備", description: "EUDAMED 4モジュール2026年5月28日義務化に向けた準備。" },
    ],

    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- Estonia ---
  // =========================================================================
  {
    code: "EST",
    country: "エストニア",
    countryEn: "Estonia",
    region: "Europe",
    flag: "🇪🇪",

    legalSystemOverview: {
      type: "EU加盟国（MDR/IVDR 直接適用）",
      description:
        "エストニアはEU加盟国（2004年加盟）であり、Regulation (EU) 2017/745（MDR）および Regulation (EU) 2017/746（IVDR）が直接適用される。国内補完法として Meditsiiniseadme seadus（医療機器法）の改正版が施行されている。Ravimiamet（State Agency of Medicines / 国家医薬品庁）がNCAとして医療機器の市場監視・ビジランスを管轄する。エストニアはデジタル先進国であり、電子政府基盤（X-Road）を活用した効率的な規制プロセスが特徴。",
      keyCharacteristics: [
        "EU MDR/IVDR が直接適用",
        "Ravimiamet がNCAとして市場監視・ビジランスを担当",
        "Meditsiiniseadme seadus 改正による国内補完",
        "ラベリング・IFU はエストニア語必須",
        "国内にNotified Body なし（EU域内他国のNBを利用）",
        "デジタル先進国 — 電子政府基盤を活用した効率的規制プロセス",
      ],
    },

    authorities: [
      { name: "Ravimiamet", fullName: "State Agency of Medicines", localName: "Ravimiamet", role: "NCA: 医療機器の市場監視・ビジランス・臨床試験監督・登録管理", url: "https://www.ravimiamet.ee/en", isPrimary: true },
      { name: "Sotsiaalministeerium", fullName: "Ministry of Social Affairs", localName: "Sotsiaalministeerium", role: "医療機器政策立案・法整備", url: "https://www.sm.ee/en", isPrimary: false },
      { name: "Haigekassa", fullName: "Estonian Health Insurance Fund", localName: "Eesti Haigekassa", role: "公的医療保険・償還管理", url: "https://www.haigekassa.ee/en", isPrimary: false },
    ],

    notifiedBodies: {
      system: "EU MDR Notified Body 制度（エストニア国内に指定機関なし）",
      description: "エストニア国内にMDR指定Notified Bodyは存在しない。製造業者はEU域内他国の指定NBを利用する。",
      bodies: [],
    },

    deviceDefinition: {
      legalDefinition: "EU MDR Article 2(1) の定義がそのまま適用。",
      scope: "IVD は IVDR で別途規定。SaMD・AI/ML 搭載機器も対象。美容目的製品（Annex XVI）も適用。",
      notes: "MDR の定義がそのまま国内法に適用。追加的な定義変更なし。デジタルヘルス分野はエストニアの強みであり、SaMD/AI関連規制の関心が高い。",
    },

    primaryLaw: {
      title: "Regulation (EU) 2017/745 — Medical Devices Regulation (MDR)",
      originalTitle: null,
      enacted: "2017（EU採択）/ 2021年5月26日適用",
      lastAmended: "2025（Regulation (EU) 2025/2457）",
      url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32017R0745",
      description: "EU MDR がエストニアに直接適用。Meditsiiniseadme seadus 改正が国内補完法。",
    },

    implementingRegulations: [
      { title: "Meditsiiniseadme seadus（医療機器法）改正", date: "2021", url: "https://www.riigiteataja.ee/", description: "MDR/IVDR 国内補完法。NCA権限・罰則・登録義務・言語要件。", category: "国内補完法" },
      { title: "Sotsiaalministri määrused（社会大臣令）— 各種施行細則", date: "各年", url: "https://www.riigiteataja.ee/", description: "登録手続・手数料・ビジランス手続等。", category: "施行細則" },
    ],

    relatedLaws: [
      { title: "GDPR (Regulation (EU) 2016/679)", category: "データ保護", enacted: "2018", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679", relevance: "健康データに適用。Isikuandmete kaitse seadus も併存。" },
      { title: "AI Act — Regulation (EU) 2024/1689", category: "人工知能", enacted: "2024", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32024R1689", relevance: "AI搭載医療機器はHigh-Risk AI System。エストニアはAI戦略先進国。" },
    ],

    classification: {
      system: "EU MDR 4クラス制（Class I / IIa / IIb / III）",
      basis: "EU MDR Annex VIII の22分類規則がそのまま適用。",
      classes: [
        { name: "Class I", nameJa: "クラスI", riskLevel: "低", description: "低リスク。自己宣言（Im/Is/Ir除く）。", examples: ["弾性包帯", "聴診器", "車椅子"], approvalPath: "自己宣言" },
        { name: "Class IIa", nameJa: "クラスIIa", riskLevel: "中低", description: "中低リスク。NB関与。", examples: ["補聴器", "超音波装置", "コンタクトレンズ"], approvalPath: "Notified Body審査" },
        { name: "Class IIb", nameJa: "クラスIIb", riskLevel: "中高", description: "中高リスク。NB詳細審査。", examples: ["人工呼吸器", "血液透析装置", "輸液ポンプ"], approvalPath: "Notified Body審査" },
        { name: "Class III", nameJa: "クラスIII", riskLevel: "高", description: "最高リスク。", examples: ["人工心臓弁", "冠動脈ステント", "乳房インプラント"], approvalPath: "NB審査 + Expert Panel相談" },
      ],
      rules: ["EU MDR Annex VIII の22分類規則を直接適用"],
      totalProductCodes: "EU CND コード",
    },

    conformityAssessment: {
      overview: "EU MDR に基づく適合性評価がそのまま適用。国内追加の市販前審査なし。Ravimiamet への事業者登録が必要。",
      routes: [{ name: "EU MDR Conformity Assessment", nameJa: "EU MDR 適合性評価", applicableClasses: ["全クラス"], description: "EU MDR Annex IX〜XI。詳細はEUプロファイル参照。", subtypes: [], avgReviewTime: "EUプロファイル参照", fee: "Notified Body により異なる（EU域内他国のNBを利用）", url: "https://www.ravimiamet.ee/en" }],
    },

    electronicSubmission: { system: "EUDAMED + Ravimiamet 国内登録", url: "https://www.ravimiamet.ee/en", description: "EUDAMED + Ravimiamet 事業者登録。EUDAMED 4モジュール義務化: 2026年5月28日。X-Road 基盤を活用。", mandatory: true },
    udi: { required: true, system: "EU UDI System — EUDAMED", description: "EU MDR Article 27-29 UDI 要件がそのまま適用。", url: "https://ec.europa.eu/tools/eudamed/", timeline: "EUDAMED義務化: 2026年5月28日" },

    postMarket: {
      adverseEventReporting: { system: "EU Vigilance System — Ravimiamet", mandatory: true, url: "https://www.ravimiamet.ee/en", description: "重篤有害事象をRavimiametに報告義務。MDR Article 87-92。" },
      recalls: { authority: "Ravimiamet", description: "FSCA/FSNはRavimiametに通知。Ravimiametが市場からの回収命令権限を有する。", url: "https://www.ravimiamet.ee/en" },
      surveillance: "EU MDR PMS/PSUR/PMCF要件がそのまま適用。",
    },

    certificateOfFreeSale: { available: true, issuingAuthority: "Ravimiamet", name: "Certificate of Free Sale (CFS)", description: "Ravimiamet がCFSを発行。", processingTime: "要確認", url: "https://www.ravimiamet.ee/en" },

    reimbursement: {
      system: "社会健康保険制度（Haigekassa）",
      authority: "Haigekassa（Eesti Haigekassa）",
      description: "エストニアは国民健康保険基金（Haigekassa）による社会健康保険制度。医療機器の償還はHaigekassa が管理する償還リストに基づく。インプラント等は病院予算またはHaigekassa 承認リスト。DRG（NordDRG adapted）システムを導入。e-Health基盤が充実。",
      codingSystems: ["NordDRG（エストニア版）", "Haigekassa 償還リスト"],
      url: "https://www.haigekassa.ee/en",
    },

    marketingRules: {
      authority: "Ravimiamet",
      description: "MDR Article 7 虚偽広告禁止。エストニア国内法に基づく広告規制。",
      keyRules: ["エストニア語ラベリング・IFU必須", "MDR Article 7 虚偽広告禁止"],
    },

    mdsap: { status: "非参加", description: "EU加盟国としてMDSAP非参加。" },

    internationalStandards: {
      iso13485: { accepted: true, notes: "EU MDR QMS要件に基づき実質必須。EN ISO 13485:2016。" },
      iso14971: { accepted: true, notes: "EN ISO 14971:2019 + A11:2021。" },
      iec62304: { accepted: true, notes: "EN IEC 62304:2006 + A1:2015。" },
      iec60601: { accepted: true, notes: "EN IEC 60601 シリーズ。" },
      others: [],
    },

    recentDevelopments: [
      { date: "2025", title: "MDR延長規則適用", description: "Regulation (EU) 2025/2457 による移行期間延長。MDD証書の段階的失効スケジュール適用。" },
      { date: "2024", title: "デジタルヘルス規制強化", description: "AI Act施行に向けたデジタルヘルス・SaMD規制の整備。エストニアのe-Health基盤との統合。" },
    ],

    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- Malta ---
  // =========================================================================
  {
    code: "MLT",
    country: "マルタ",
    countryEn: "Malta",
    region: "Europe",
    flag: "🇲🇹",

    legalSystemOverview: {
      type: "EU加盟国（MDR/IVDR 直接適用）",
      description:
        "マルタはEU加盟国（2004年加盟）であり、Regulation (EU) 2017/745（MDR）および Regulation (EU) 2017/746（IVDR）が直接適用される。国内補完法として Medical Devices Act（Cap. 461）および Subsidiary Legislation 461 が施行されている。MMA（Medicines Authority / マルタ医薬品庁）がNCAとして医療機器の市場監視・ビジランスを管轄する。EU最小の加盟国であるが、規制体制はEU基準に完全準拠。",
      keyCharacteristics: [
        "EU MDR/IVDR が直接適用",
        "MMA がNCAとして市場監視・ビジランスを担当",
        "Medical Devices Act (Cap. 461) による国内補完",
        "ラベリング・IFU はマルタ語または英語（実務上は英語が主流）",
        "国内にNotified Body なし（EU域内他国のNBを利用）",
        "EU最小加盟国だが規制体制は完全準拠",
      ],
    },

    authorities: [
      { name: "MMA", fullName: "Medicines Authority", localName: "Awtorità dwar il-Mediċini", role: "NCA: 医療機器の市場監視・ビジランス・臨床試験監督・登録管理", url: "https://www.medicinesauthority.gov.mt/medical-devices", isPrimary: true },
      { name: "MFH", fullName: "Ministry for Health", localName: "Ministeru għas-Saħħa", role: "医療機器政策立案・法整備", url: "https://health.gov.mt/", isPrimary: false },
    ],

    notifiedBodies: {
      system: "EU MDR Notified Body 制度（マルタ国内に指定機関なし）",
      description: "マルタ国内にMDR指定Notified Bodyは存在しない。製造業者はEU域内他国の指定NBを利用する。",
      bodies: [],
    },

    deviceDefinition: {
      legalDefinition: "EU MDR Article 2(1) の定義がそのまま適用。",
      scope: "IVD は IVDR で別途規定。SaMD・AI/ML 搭載機器も対象。美容目的製品（Annex XVI）も適用。",
      notes: "MDR の定義がそのまま国内法に適用。追加的な定義変更なし。",
    },

    primaryLaw: {
      title: "Regulation (EU) 2017/745 — Medical Devices Regulation (MDR)",
      originalTitle: null,
      enacted: "2017（EU採択）/ 2021年5月26日適用",
      lastAmended: "2025（Regulation (EU) 2025/2457）",
      url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32017R0745",
      description: "EU MDR がマルタに直接適用。Medical Devices Act (Cap. 461) が国内補完法。",
    },

    implementingRegulations: [
      { title: "Medical Devices Act (Cap. 461)", date: "2014（随時改正）", url: "https://legislation.mt/eli/cap/461/eng", description: "MDR/IVDR 国内補完法。NCA権限・罰則・登録義務。", category: "国内補完法" },
      { title: "Subsidiary Legislation 461 — Medical Devices Regulations", date: "各年", url: "https://legislation.mt/", description: "登録手続・手数料・ビジランス手続等の施行細則。", category: "施行細則" },
    ],

    relatedLaws: [
      { title: "GDPR (Regulation (EU) 2016/679)", category: "データ保護", enacted: "2018", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679", relevance: "健康データに適用。Data Protection Act (Cap. 586) も併存。" },
      { title: "AI Act — Regulation (EU) 2024/1689", category: "人工知能", enacted: "2024", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32024R1689", relevance: "AI搭載医療機器はHigh-Risk AI System。マルタはAI・ブロックチェーン規制の先駆国。" },
    ],

    classification: {
      system: "EU MDR 4クラス制（Class I / IIa / IIb / III）",
      basis: "EU MDR Annex VIII の22分類規則がそのまま適用。",
      classes: [
        { name: "Class I", nameJa: "クラスI", riskLevel: "低", description: "低リスク。自己宣言（Im/Is/Ir除く）。", examples: ["弾性包帯", "聴診器", "車椅子"], approvalPath: "自己宣言" },
        { name: "Class IIa", nameJa: "クラスIIa", riskLevel: "中低", description: "中低リスク。NB関与。", examples: ["補聴器", "超音波装置", "コンタクトレンズ"], approvalPath: "Notified Body審査" },
        { name: "Class IIb", nameJa: "クラスIIb", riskLevel: "中高", description: "中高リスク。NB詳細審査。", examples: ["人工呼吸器", "血液透析装置", "輸液ポンプ"], approvalPath: "Notified Body審査" },
        { name: "Class III", nameJa: "クラスIII", riskLevel: "高", description: "最高リスク。", examples: ["人工心臓弁", "冠動脈ステント", "乳房インプラント"], approvalPath: "NB審査 + Expert Panel相談" },
      ],
      rules: ["EU MDR Annex VIII の22分類規則を直接適用"],
      totalProductCodes: "EU CND コード",
    },

    conformityAssessment: {
      overview: "EU MDR に基づく適合性評価がそのまま適用。国内追加の市販前審査なし。MMA への事業者登録が必要。",
      routes: [{ name: "EU MDR Conformity Assessment", nameJa: "EU MDR 適合性評価", applicableClasses: ["全クラス"], description: "EU MDR Annex IX〜XI。詳細はEUプロファイル参照。", subtypes: [], avgReviewTime: "EUプロファイル参照", fee: "Notified Body により異なる（EU域内他国のNBを利用）", url: "https://www.medicinesauthority.gov.mt/medical-devices" }],
    },

    electronicSubmission: { system: "EUDAMED + MMA 国内登録", url: "https://www.medicinesauthority.gov.mt/", description: "EUDAMED + MMA 事業者登録。EUDAMED 4モジュール義務化: 2026年5月28日。", mandatory: true },
    udi: { required: true, system: "EU UDI System — EUDAMED", description: "EU MDR Article 27-29 UDI 要件がそのまま適用。", url: "https://ec.europa.eu/tools/eudamed/", timeline: "EUDAMED義務化: 2026年5月28日" },

    postMarket: {
      adverseEventReporting: { system: "EU Vigilance System — MMA", mandatory: true, url: "https://www.medicinesauthority.gov.mt/", description: "重篤有害事象をMMAに報告義務。MDR Article 87-92。" },
      recalls: { authority: "MMA", description: "FSCA/FSNはMMAに通知。MMAが市場からの回収命令権限を有する。", url: "https://www.medicinesauthority.gov.mt/" },
      surveillance: "EU MDR PMS/PSUR/PMCF要件がそのまま適用。",
    },

    certificateOfFreeSale: { available: true, issuingAuthority: "MMA", name: "Certificate of Free Sale (CFS)", description: "MMA がCFSを発行。", processingTime: "要確認", url: "https://www.medicinesauthority.gov.mt/" },

    reimbursement: {
      system: "国家健康サービス（NHS Malta）",
      authority: "MFH / Government Pharmaceutical Services",
      description: "マルタは税財源ベースの国家健康サービス（NHS）。公立病院での医療は無料。医療機器は政府調達（Government Pharmaceutical Services）を通じて公立病院に供給。Government Formulary List に掲載された機器が公費でカバー。民間セクターは自費負担。",
      codingSystems: ["Government Formulary List"],
      url: "https://health.gov.mt/",
    },

    marketingRules: {
      authority: "MMA",
      description: "MDR Article 7 虚偽広告禁止。Medical Devices Act に基づく広告規制。",
      keyRules: ["マルタ語または英語ラベリング・IFU（実務上は英語が主流）", "MDR Article 7 虚偽広告禁止"],
    },

    mdsap: { status: "非参加", description: "EU加盟国としてMDSAP非参加。" },

    internationalStandards: {
      iso13485: { accepted: true, notes: "EU MDR QMS要件に基づき実質必須。EN ISO 13485:2016。" },
      iso14971: { accepted: true, notes: "EN ISO 14971:2019 + A11:2021。" },
      iec62304: { accepted: true, notes: "EN IEC 62304:2006 + A1:2015。" },
      iec60601: { accepted: true, notes: "EN IEC 60601 シリーズ。" },
      others: [],
    },

    recentDevelopments: [
      { date: "2025", title: "MDR延長規則適用", description: "Regulation (EU) 2025/2457 による移行期間延長。MDD証書の段階的失効スケジュール適用。" },
      { date: "2024", title: "EUDAMED義務化準備", description: "EUDAMED 4モジュール2026年5月28日義務化に向けた準備。" },
    ],

    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- Macao ---
  // =========================================================================
  {
    code: "MAC",
    country: "マカオ",
    countryEn: "Macao SAR",
    region: "ASPAC",
    flag: "🇲🇴",

    legalSystemOverview: {
      type: "中国特別行政区（独自制度）",
      description:
        "マカオ（澳門）は中華人民共和国の特別行政区であり、「一国二制度」の下で独自の法体系・規制制度を有する。医療機器の規制は ISAF/SSM（Instituto para os Assuntos Farmacêuticos / Serviços de Saúde de Macau / 薬物事務局 / 衛生局）が管轄する。Decreto-Lei n.º 53/94/M（医療機器規制に関する法令）を基盤とし、ポルトガル法の影響を強く受けた法体系を維持。中国本土のNMPAとは別の独立した規制制度を運用する。",
      keyCharacteristics: [
        "一国二制度の下での独自規制",
        "ISAF（薬物事務局）/ SSM（衛生局）が規制当局",
        "ポルトガル法の影響を受けた法体系",
        "中国本土（NMPA）とは独立した制度",
        "ラベリングはポルトガル語・中国語（繁体字）必須",
        "CE マーキング・FDA 承認等の外国認証を参照・受入れ",
        "市場規模が小さく、規制体制は比較的簡素",
      ],
    },

    authorities: [
      { name: "ISAF", fullName: "Pharmaceutical Administration Bureau", localName: "Instituto para os Assuntos Farmacêuticos / 藥物事務局", role: "医療機器の登録・輸入許可・市場監視", url: "https://www.isaf.gov.mo/", isPrimary: true },
      { name: "SSM", fullName: "Health Bureau", localName: "Serviços de Saúde de Macau / 衛生局", role: "公衆衛生政策・医療サービス管理・医療機器の使用監督", url: "https://www.ssm.gov.mo/", isPrimary: false },
    ],

    notifiedBodies: {
      system: "なし（独自制度）",
      description: "マカオにはNotified Body制度は存在しない。ISAFが直接審査を行う。CE マーキング、FDA 510(k)/PMA、中国NMPA承認等の外国認証を参照・受入れることがある。",
      bodies: [],
    },

    deviceDefinition: {
      legalDefinition: "Decreto-Lei n.º 53/94/M に基づく医療機器の定義。疾病の診断・治療・予防・監視等を目的とする器具・装置・機器・材料等。",
      scope: "IVD を含む。ソフトウェア医療機器の分類は発展途上。",
      notes: "定義はEU旧MDD やポルトガル法の影響を受ける。近年、国際基準への整合化を推進中。",
    },

    primaryLaw: {
      title: "Decreto-Lei n.º 53/94/M — 医療機器規制法令",
      originalTitle: "Decreto-Lei n.º 53/94/M",
      enacted: "1994",
      lastAmended: "随時改正",
      url: "https://www.isaf.gov.mo/",
      description: "マカオにおける医療機器規制の基本法令。ポルトガル統治時代の法体系を基盤とする。",
    },

    implementingRegulations: [
      { title: "Regulamento Administrativo（行政法規）— 医療機器登録・輸入規則", date: "各年", url: "https://www.isaf.gov.mo/", description: "医療機器の登録・輸入許可手続・品質管理要件。", category: "行政法規" },
      { title: "ISAF 通達・ガイドライン", date: "各年", url: "https://www.isaf.gov.mo/", description: "ISAFが発行する実務ガイドライン・通達。", category: "ガイドライン" },
    ],

    relatedLaws: [
      { title: "Lei n.º 8/2005 — 個人データ保護法", category: "データ保護", enacted: "2005", url: "https://www.gpdp.gov.mo/", relevance: "健康データを含む個人データの保護。" },
    ],

    classification: {
      system: "リスクベース分類（国際基準参照）",
      basis: "ISAF の分類基準。EU MDR / GHTF 分類を参照。",
      classes: [
        { name: "Class I", nameJa: "クラスI", riskLevel: "低", description: "低リスク医療機器。", examples: ["包帯", "聴診器"], approvalPath: "届出・登録" },
        { name: "Class II", nameJa: "クラスII", riskLevel: "中", description: "中リスク医療機器。", examples: ["血圧計", "超音波装置"], approvalPath: "登録審査" },
        { name: "Class III", nameJa: "クラスIII", riskLevel: "高", description: "高リスク医療機器。", examples: ["心臓ペースメーカー", "人工関節"], approvalPath: "詳細審査" },
      ],
      rules: ["GHTF/IMDRF 分類ガイダンスを参照", "EU MDR 分類規則も参考"],
      totalProductCodes: "ISAF 製品コード",
    },

    conformityAssessment: {
      overview: "ISAFへの登録申請が必要。外国規制当局（CE、FDA、NMPA等）の承認・認証を参照し、審査を簡素化する場合がある。品質管理システム（ISO 13485等）の証明が求められる。",
      routes: [{ name: "ISAF 登録", nameJa: "ISAF 医療機器登録", applicableClasses: ["全クラス"], description: "ISAFへの登録申請。外国認証（CE、FDA等）の提出により審査が簡素化される場合がある。", subtypes: [], avgReviewTime: "3〜6ヶ月（製品による）", fee: "ISAF手数料表に基づく", url: "https://www.isaf.gov.mo/" }],
    },

    electronicSubmission: { system: "ISAF 申請システム", url: "https://www.isaf.gov.mo/", description: "ISAFの申請窓口を通じた登録。電子化は段階的に推進中。", mandatory: false },
    udi: { required: false, system: "未導入", description: "マカオではUDI制度は未導入。国際動向を注視中。", url: null, timeline: "未定" },

    postMarket: {
      adverseEventReporting: { system: "ISAF / SSM 有害事象報告", mandatory: true, url: "https://www.isaf.gov.mo/", description: "医療機器の有害事象はISAF/SSMに報告義務。報告制度は整備中。" },
      recalls: { authority: "ISAF / SSM", description: "安全性問題が判明した場合、ISAFが回収命令・市場撤去を指示。国際的なリコール情報も監視。", url: "https://www.isaf.gov.mo/" },
      surveillance: "市販後監視制度は基本的な枠組みを有する。国際基準への整合化を推進中。",
    },

    certificateOfFreeSale: { available: false, issuingAuthority: null, name: null, description: "マカオでのCFS発行制度は確認されていない。", processingTime: null, url: null },

    reimbursement: {
      system: "公的医療サービス（SSM）+ 民間保険",
      authority: "SSM（衛生局）",
      description: "マカオの公的医療はSSMが運営する公立病院・診療所を通じて提供される。マカオ居民は公立医療サービスを低負担で利用可能。医療機器は政府調達を通じて公立病院に供給される。民間病院利用は自費または民間保険。DRGシステムは未導入。",
      codingSystems: ["政府調達リスト"],
      url: "https://www.ssm.gov.mo/",
    },

    marketingRules: {
      authority: "ISAF",
      description: "ISAFの規制に基づく医療機器の広告・マーケティング規制。虚偽・誇大広告の禁止。",
      keyRules: ["ポルトガル語・中国語（繁体字）ラベリング必須", "虚偽・誇大広告の禁止", "ISAF登録番号の表示"],
    },

    mdsap: { status: "非参加", description: "マカオはMDSAP非参加。" },

    internationalStandards: {
      iso13485: { accepted: true, notes: "品質管理システムの証明として参照。ISO 13485 認証の提出が推奨。" },
      iso14971: { accepted: true, notes: "リスクマネジメントの国際規格として参照。" },
      iec62304: { accepted: true, notes: "ソフトウェア医療機器に対して参照。" },
      iec60601: { accepted: true, notes: "医用電気機器の安全規格として参照。" },
      others: [
        { standard: "CE マーキング（EU MDR）", notes: "EU CEマーキング取得済み製品は審査が簡素化される場合がある。" },
        { standard: "FDA 510(k)/PMA", notes: "米国FDA承認済み製品も参照。" },
      ],
    },

    recentDevelopments: [
      { date: "2025", title: "医療機器規制の近代化推進", description: "ISAFは国際基準（IMDRF等）への整合化を推進中。電子申請の拡充、品質管理要件の強化、市販後監視制度の充実に注力。粤港澳大湾区（GBA）構想の下、香港・広東省との規制協調も模索。" },
    ],

    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- Czech Republic (CZE) ---
  // =========================================================================
  {
    code: "CZE",
    country: "チェコ",
    countryEn: "Czech Republic",
    region: "Europe",
    flag: "🇨🇿",

    legalSystemOverview: {
      type: "EU加盟国（MDR/IVDR 直接適用）",
      description:
        "チェコはEU加盟国であり、Regulation (EU) 2017/745（MDR）および Regulation (EU) 2017/746（IVDR）が直接適用される。国内補完法として Act No. 375/2022 Sb. on Medical Devices（Zákon o zdravotnických prostředcích）が制定されている。SÚKL（チェコ国立医薬品管理局 / State Institute for Drug Control）がNCA（National Competent Authority）として市場監視・ビジランス・臨床試験監督を担う。",
      keyCharacteristics: [
        "EU MDR/IVDR が直接適用",
        "SÚKL がNCAとして市場監視・ビジランスを担当",
        "Act No. 375/2022 Sb. による国内補完",
        "ラベリング・使用説明書はチェコ語必須",
        "SÚKL が医療機器登録データベース（RZPRO）を運営",
        "VZP（公的保険基金）等による保険償還制度",
      ],
    },

    authorities: [
      { name: "SÚKL", fullName: "State Institute for Drug Control", localName: "Státní ústav pro kontrolu léčiv", role: "NCA: 医療機器の市場監視・ビジランス・臨床試験監督・登録管理", url: "https://www.sukl.cz/", isPrimary: true },
      { name: "VZP ČR", fullName: "General Health Insurance Company of the Czech Republic", localName: "Všeobecná zdravotní pojišťovna ČR", role: "公的医療保険・医療機器償還管理", url: "https://www.vzp.cz/", isPrimary: false },
      { name: "MZ ČR", fullName: "Ministry of Health of the Czech Republic", localName: "Ministerstvo zdravotnictví ČR", role: "医療政策・法制度策定", url: "https://www.mzcr.cz/", isPrimary: false },
    ],

    notifiedBodies: {
      system: "EU MDR Notified Body 制度（チェコ国内に指定NB）",
      description: "EZÚ（Elektrotechnický zkušební ústav, NB 1014）がMDR/IVDR指定Notified Bodyとして活動。",
      bodies: [
        { nb: "1014", name: "EZÚ (Elektrotechnický zkušební ústav)", url: "https://www.ezu.cz/", mdr: true, ivdr: true },
      ],
    },

    deviceDefinition: {
      legalDefinition: "EU MDR Article 2(1) の定義がそのまま適用。",
      scope: "IVD は IVDR で別途規定。SaMD・AI/ML 搭載機器も対象。美容目的製品（Annex XVI）も適用。",
      notes: "MDR の定義がそのまま国内法に適用。追加的な定義変更なし。",
    },

    primaryLaw: {
      title: "Regulation (EU) 2017/745 — Medical Devices Regulation (MDR)",
      originalTitle: null,
      enacted: "2017（EU採択）/ 2021年5月26日適用",
      lastAmended: "2025（Regulation (EU) 2025/2457）",
      url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32017R0745",
      description: "EU MDR がチェコに直接適用。Act No. 375/2022 Sb. が国内補完法。",
    },

    implementingRegulations: [
      { title: "Act No. 375/2022 Sb. on Medical Devices (Zákon o zdravotnických prostředcích)", date: "2022-12-01", url: "https://www.sukl.cz/", description: "MDR/IVDR 国内補完法。NCA権限・罰則・言語要件・登録義務・臨床試験手続。", category: "国内補完法" },
      { title: "Decree No. 377/2022 Sb.", date: "2022-12-01", url: "https://www.sukl.cz/", description: "Act No. 375/2022 Sb. の施行細則。登録手続の具体的規定。", category: "施行細則" },
    ],

    relatedLaws: [
      { title: "GDPR (Regulation (EU) 2016/679)", category: "データ保護", enacted: "2018", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679", relevance: "健康データに適用。Act No. 110/2019 Sb.（個人情報保護法）も併存。" },
      { title: "AI Act — Regulation (EU) 2024/1689", category: "人工知能", enacted: "2024", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32024R1689", relevance: "AI搭載医療機器はHigh-Risk AI System。" },
    ],

    classification: {
      system: "EU MDR 4クラス制（Class I / IIa / IIb / III）",
      basis: "EU MDR Annex VIII の22分類規則がそのまま適用。",
      classes: [
        { name: "Class I", nameJa: "クラスI", riskLevel: "低", description: "低リスク。自己宣言（Im/Is/Ir除く）。", examples: ["弾性包帯", "聴診器", "車椅子"], approvalPath: "自己宣言" },
        { name: "Class IIa", nameJa: "クラスIIa", riskLevel: "中低", description: "中低リスク。NB関与。", examples: ["補聴器", "超音波装置", "コンタクトレンズ"], approvalPath: "Notified Body審査" },
        { name: "Class IIb", nameJa: "クラスIIb", riskLevel: "中高", description: "中高リスク。NB詳細審査。", examples: ["人工呼吸器", "血液透析装置", "輸液ポンプ"], approvalPath: "Notified Body審査" },
        { name: "Class III", nameJa: "クラスIII", riskLevel: "高", description: "最高リスク。", examples: ["人工心臓弁", "冠動脈ステント", "乳房インプラント"], approvalPath: "NB審査 + Expert Panel相談" },
      ],
      rules: ["EU MDR Annex VIII の22分類規則を直接適用"],
      totalProductCodes: "EU CND コード",
    },

    conformityAssessment: {
      overview: "EU MDR に基づく適合性評価がそのまま適用。国内追加の市販前審査なし。SÚKL への事業者・機器登録（RZPRO）が必要。",
      routes: [{ name: "EU MDR Conformity Assessment", nameJa: "EU MDR 適合性評価", applicableClasses: ["全クラス"], description: "EU MDR Annex IX〜XI。詳細はEUプロファイル参照。", subtypes: [], avgReviewTime: "EUプロファイル参照", fee: "Notified Body により異なる", url: "https://www.sukl.cz/" }],
    },

    electronicSubmission: { system: "EUDAMED + SÚKL RZPRO", url: "https://www.sukl.cz/", description: "EUDAMED + SÚKL 国内登録データベース（RZPRO）。EUDAMED 4モジュール義務化: 2026年5月28日。", mandatory: true },
    udi: { required: true, system: "EU UDI System — EUDAMED", description: "EU MDR Article 27-29 UDI 要件がそのまま適用。", url: "https://ec.europa.eu/tools/eudamed/", timeline: "EUDAMED義務化: 2026年5月28日" },

    postMarket: {
      adverseEventReporting: { system: "EU Vigilance System — SÚKL", mandatory: true, url: "https://www.sukl.cz/", description: "重篤有害事象をSÚKLに報告義務。MDR Article 87-92。" },
      recalls: { authority: "SÚKL", description: "FSCA/FSNはSÚKLに通知。", url: "https://www.sukl.cz/" },
      surveillance: "EU MDR PMS/PSUR/PMCF要件がそのまま適用。",
    },

    certificateOfFreeSale: { available: true, issuingAuthority: "SÚKL", name: "Certificate of Free Sale (CFS)", description: "SÚKL がCFSを発行。", processingTime: "要確認", url: "https://www.sukl.cz/" },

    reimbursement: {
      system: "公的健康保険制度（法定保険）",
      authority: "MZ ČR / SÚKL / VZP ČR 他保険基金",
      description: "チェコは法定健康保険制度。VZP ČR を含む7つの健康保険基金が運営。医療機器の償還カテゴリーはSÚKL が管理し、保険適用の可否・上限額を決定。高額医療機器（特に病院用）は別途予算配分。",
      codingSystems: ["SÚKL 償還カテゴリーコード", "CZ-DRG"],
      url: "https://www.sukl.cz/",
    },

    marketingRules: {
      authority: "SÚKL",
      description: "MDR Article 7 虚偽広告禁止。Act No. 375/2022 Sb. に基づく広告規制。",
      keyRules: ["チェコ語ラベリング・IFU必須", "MDR Article 7 虚偽広告禁止", "登録済み機器のみ販売可"],
    },

    mdsap: { status: "非参加", description: "EU加盟国としてMDSAP非参加。" },

    internationalStandards: {
      iso13485: { accepted: true, notes: "EU MDR QMS要件に基づき実質必須。EN ISO 13485:2016。" },
      iso14971: { accepted: true, notes: "EN ISO 14971:2019 + A11:2021。" },
      iec62304: { accepted: true, notes: "EN IEC 62304:2006 + A1:2015。" },
      iec60601: { accepted: true, notes: "EN IEC 60601 シリーズ。" },
      others: [],
    },

    recentDevelopments: [
      { date: "2022", title: "Act No. 375/2022 Sb. 施行", description: "MDR/IVDR の国内補完法として新法を施行。従来の Act No. 268/2014 Sb. を置換。" },
      { date: "2024", title: "EUDAMED義務化準備", description: "EUDAMED 4モジュール2026年5月28日義務化に向けた準備。" },
    ],

    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- Hungary (HUN) ---
  // =========================================================================
  {
    code: "HUN",
    country: "ハンガリー",
    countryEn: "Hungary",
    region: "Europe",
    flag: "🇭🇺",

    legalSystemOverview: {
      type: "EU加盟国（MDR/IVDR 直接適用）",
      description:
        "ハンガリーはEU加盟国であり、Regulation (EU) 2017/745（MDR）および Regulation (EU) 2017/746（IVDR）が直接適用される。国内補完法として Government Decree 4/2009 (III.17.) EüM（医療機器に関する保健大臣令）が改正適用されている。OGYÉI（国立薬学・食品衛生研究所 / National Institute of Pharmacy and Nutrition）がNCA（National Competent Authority）として市場監視・ビジランス・臨床試験監督を担う。",
      keyCharacteristics: [
        "EU MDR/IVDR が直接適用",
        "OGYÉI がNCAとして市場監視・ビジランスを担当",
        "Government Decree 4/2009 (III.17.) EüM 改正による国内補完",
        "ラベリング・使用説明書はハンガリー語必須",
        "NEAK（国民健康保険基金管理局）が保険償還を管理",
        "中東欧での医療機器ハブとしての地位",
      ],
    },

    authorities: [
      { name: "OGYÉI", fullName: "National Institute of Pharmacy and Nutrition", localName: "Országos Gyógyszerészeti és Élelmezés-egészségügyi Intézet", role: "NCA: 医療機器の市場監視・ビジランス・臨床試験監督・登録管理", url: "https://www.ogyei.gov.hu/", isPrimary: true },
      { name: "NEAK", fullName: "National Health Insurance Fund Management", localName: "Nemzeti Egészségbiztosítási Alapkezelő", role: "医療機器の保険償還管理", url: "https://www.neak.gov.hu/", isPrimary: false },
      { name: "EMMI / BM", fullName: "Ministry of Interior (Health policy)", localName: "Belügyminisztérium（Egészségügyért felelős）", role: "医療政策・法制度策定", url: "https://www.kormany.hu/", isPrimary: false },
    ],

    notifiedBodies: {
      system: "EU MDR Notified Body 制度（ハンガリー国内に指定NB無し — 他EU加盟国のNBを利用）",
      description: "2026年4月時点でハンガリー国内にMDR/IVDR指定のNotified Bodyは無い。製造業者は他EU加盟国のNBを利用。",
      bodies: [],
    },

    deviceDefinition: {
      legalDefinition: "EU MDR Article 2(1) の定義がそのまま適用。",
      scope: "IVD は IVDR で別途規定。SaMD・AI/ML 搭載機器も対象。美容目的製品（Annex XVI）も適用。",
      notes: "MDR の定義がそのまま国内法に適用。追加的な定義変更なし。",
    },

    primaryLaw: {
      title: "Regulation (EU) 2017/745 — Medical Devices Regulation (MDR)",
      originalTitle: null,
      enacted: "2017（EU採択）/ 2021年5月26日適用",
      lastAmended: "2025（Regulation (EU) 2025/2457）",
      url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32017R0745",
      description: "EU MDR がハンガリーに直接適用。Government Decree 4/2009 (III.17.) EüM 改正が国内補完法。",
    },

    implementingRegulations: [
      { title: "Government Decree 4/2009 (III.17.) EüM on Medical Devices（改正版）", date: "2009（原版）/ 2021改正", url: "https://www.ogyei.gov.hu/", description: "MDR/IVDR 国内補完法令。NCA権限・言語要件・登録義務・罰則を規定。", category: "国内補完法令" },
      { title: "Act CLIV of 1997 on Health（改正版）", date: "1997（原版）/ 随時改正", url: "https://www.kormany.hu/", description: "保健法。医療機器の使用に関する一般的枠組み。", category: "保健法" },
    ],

    relatedLaws: [
      { title: "GDPR (Regulation (EU) 2016/679)", category: "データ保護", enacted: "2018", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679", relevance: "健康データに適用。Act CXII of 2011（情報自己決定法）も併存。" },
      { title: "AI Act — Regulation (EU) 2024/1689", category: "人工知能", enacted: "2024", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32024R1689", relevance: "AI搭載医療機器はHigh-Risk AI System。" },
    ],

    classification: {
      system: "EU MDR 4クラス制（Class I / IIa / IIb / III）",
      basis: "EU MDR Annex VIII の22分類規則がそのまま適用。",
      classes: [
        { name: "Class I", nameJa: "クラスI", riskLevel: "低", description: "低リスク。自己宣言（Im/Is/Ir除く）。", examples: ["弾性包帯", "聴診器", "車椅子"], approvalPath: "自己宣言" },
        { name: "Class IIa", nameJa: "クラスIIa", riskLevel: "中低", description: "中低リスク。NB関与。", examples: ["補聴器", "超音波装置", "コンタクトレンズ"], approvalPath: "Notified Body審査" },
        { name: "Class IIb", nameJa: "クラスIIb", riskLevel: "中高", description: "中高リスク。NB詳細審査。", examples: ["人工呼吸器", "血液透析装置", "輸液ポンプ"], approvalPath: "Notified Body審査" },
        { name: "Class III", nameJa: "クラスIII", riskLevel: "高", description: "最高リスク。", examples: ["人工心臓弁", "冠動脈ステント", "乳房インプラント"], approvalPath: "NB審査 + Expert Panel相談" },
      ],
      rules: ["EU MDR Annex VIII の22分類規則を直接適用"],
      totalProductCodes: "EU CND コード",
    },

    conformityAssessment: {
      overview: "EU MDR に基づく適合性評価がそのまま適用。国内追加の市販前審査なし。OGYÉI への事業者・機器登録が必要。",
      routes: [{ name: "EU MDR Conformity Assessment", nameJa: "EU MDR 適合性評価", applicableClasses: ["全クラス"], description: "EU MDR Annex IX〜XI。詳細はEUプロファイル参照。", subtypes: [], avgReviewTime: "EUプロファイル参照", fee: "Notified Body により異なる", url: "https://www.ogyei.gov.hu/" }],
    },

    electronicSubmission: { system: "EUDAMED + OGYÉI 国内登録", url: "https://www.ogyei.gov.hu/", description: "EUDAMED + OGYÉI 国内登録。EUDAMED 4モジュール義務化: 2026年5月28日。", mandatory: true },
    udi: { required: true, system: "EU UDI System — EUDAMED", description: "EU MDR Article 27-29 UDI 要件がそのまま適用。", url: "https://ec.europa.eu/tools/eudamed/", timeline: "EUDAMED義務化: 2026年5月28日" },

    postMarket: {
      adverseEventReporting: { system: "EU Vigilance System — OGYÉI", mandatory: true, url: "https://www.ogyei.gov.hu/", description: "重篤有害事象をOGYÉIに報告義務。MDR Article 87-92。" },
      recalls: { authority: "OGYÉI", description: "FSCA/FSNはOGYÉIに通知。", url: "https://www.ogyei.gov.hu/" },
      surveillance: "EU MDR PMS/PSUR/PMCF要件がそのまま適用。",
    },

    certificateOfFreeSale: { available: true, issuingAuthority: "OGYÉI", name: "Certificate of Free Sale (CFS)", description: "OGYÉI がCFSを発行。", processingTime: "要確認", url: "https://www.ogyei.gov.hu/" },

    reimbursement: {
      system: "国民健康保険基金（単一支払者制度）",
      authority: "NEAK / OGYÉI",
      description: "ハンガリーは単一支払者型の国民健康保険制度（NEAK）。医療機器は「gyógyászati segédeszköz」（治療補助器具）カテゴリーで償還管理。NEAK が償還カテゴリー・患者自己負担率を決定。高額病院用機器は別途調達。",
      codingSystems: ["NEAK 償還コード", "HUN-DRG (HBCS)"],
      url: "https://www.neak.gov.hu/",
    },

    marketingRules: {
      authority: "OGYÉI",
      description: "MDR Article 7 虚偽広告禁止。国内広告規制法が併存。",
      keyRules: ["ハンガリー語ラベリング・IFU必須", "MDR Article 7 虚偽広告禁止", "登録済み機器のみ販売可"],
    },

    mdsap: { status: "非参加", description: "EU加盟国としてMDSAP非参加。" },

    internationalStandards: {
      iso13485: { accepted: true, notes: "EU MDR QMS要件に基づき実質必須。EN ISO 13485:2016。" },
      iso14971: { accepted: true, notes: "EN ISO 14971:2019 + A11:2021。" },
      iec62304: { accepted: true, notes: "EN IEC 62304:2006 + A1:2015。" },
      iec60601: { accepted: true, notes: "EN IEC 60601 シリーズ。" },
      others: [],
    },

    recentDevelopments: [
      { date: "2021", title: "MDR 適用開始", description: "2021年5月26日よりEU MDRが適用開始。OGYÉI が準備を完了。" },
      { date: "2024", title: "EUDAMED義務化準備", description: "EUDAMED 4モジュール2026年5月28日義務化に向けた準備。" },
    ],

    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- Portugal (PRT) ---
  // =========================================================================
  {
    code: "PRT",
    country: "ポルトガル",
    countryEn: "Portugal",
    region: "Europe",
    flag: "🇵🇹",

    legalSystemOverview: {
      type: "EU加盟国（MDR/IVDR 直接適用）",
      description:
        "ポルトガルはEU加盟国であり、Regulation (EU) 2017/745（MDR）および Regulation (EU) 2017/746（IVDR）が直接適用される。国内補完法として Decree-Law No. 145/2009（改正版）が適用されている。Infarmed（国立医薬品・医療製品局 / National Authority of Medicines and Health Products）がNCA（National Competent Authority）として市場監視・ビジランス・臨床試験監督を担う。",
      keyCharacteristics: [
        "EU MDR/IVDR が直接適用",
        "Infarmed がNCAとして市場監視・ビジランスを担当",
        "Decree-Law No. 145/2009（改正版）による国内補完",
        "ラベリング・使用説明書はポルトガル語必須",
        "SNS（国民保健サービス）が公的医療を提供",
        "INFARMED が医療機器の価格・償還決定にも関与",
      ],
    },

    authorities: [
      { name: "Infarmed", fullName: "National Authority of Medicines and Health Products", localName: "Autoridade Nacional do Medicamento e Produtos de Saúde, I.P.", role: "NCA: 医療機器の市場監視・ビジランス・臨床試験監督・登録管理", url: "https://www.infarmed.pt/", isPrimary: true },
      { name: "ACSS", fullName: "Central Administration of the Health System", localName: "Administração Central do Sistema de Saúde", role: "SNS管理・病院への医療機器調達", url: "https://www.acss.min-saude.pt/", isPrimary: false },
      { name: "MS", fullName: "Ministry of Health", localName: "Ministério da Saúde", role: "医療政策・法制度策定", url: "https://www.sns.gov.pt/", isPrimary: false },
    ],

    notifiedBodies: {
      system: "EU MDR Notified Body 制度（ポルトガル国内に指定NB無し — 他EU加盟国のNBを利用）",
      description: "2026年4月時点でポルトガル国内にMDR/IVDR指定のNotified Bodyは無い。製造業者は他EU加盟国のNBを利用。",
      bodies: [],
    },

    deviceDefinition: { legalDefinition: "EU MDR Article 2(1) の定義がそのまま適用。", scope: "IVD は IVDR で別途規定。SaMD・AI/ML 搭載機器も対象。美容目的製品（Annex XVI）も適用。", notes: "MDR の定義がそのまま国内法に適用。追加的な定義変更なし。" },

    primaryLaw: { title: "Regulation (EU) 2017/745 — Medical Devices Regulation (MDR)", originalTitle: null, enacted: "2017（EU採択）/ 2021年5月26日適用", lastAmended: "2025（Regulation (EU) 2025/2457）", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32017R0745", description: "EU MDR がポルトガルに直接適用。Decree-Law No. 145/2009（改正版）が国内補完法。" },

    implementingRegulations: [
      { title: "Decree-Law No. 145/2009（改正版）", date: "2009（原版）/ 2021改正", url: "https://www.infarmed.pt/", description: "MDR/IVDR 国内補完法令。NCA権限・言語要件・登録義務・罰則を規定。", category: "国内補完法令" },
      { title: "Portaria No. 342/2021", date: "2021", url: "https://www.infarmed.pt/", description: "医療機器登録手数料規則。", category: "手数料規則" },
    ],

    relatedLaws: [
      { title: "GDPR (Regulation (EU) 2016/679)", category: "データ保護", enacted: "2018", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679", relevance: "健康データに適用。Lei No. 58/2019（GDPR国内実施法）も併存。" },
      { title: "AI Act — Regulation (EU) 2024/1689", category: "人工知能", enacted: "2024", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32024R1689", relevance: "AI搭載医療機器はHigh-Risk AI System。" },
    ],

    classification: {
      system: "EU MDR 4クラス制（Class I / IIa / IIb / III）",
      basis: "EU MDR Annex VIII の22分類規則がそのまま適用。",
      classes: [
        { name: "Class I", nameJa: "クラスI", riskLevel: "低", description: "低リスク。自己宣言（Im/Is/Ir除く）。", examples: ["弾性包帯", "聴診器", "車椅子"], approvalPath: "自己宣言" },
        { name: "Class IIa", nameJa: "クラスIIa", riskLevel: "中低", description: "中低リスク。NB関与。", examples: ["補聴器", "超音波装置", "コンタクトレンズ"], approvalPath: "Notified Body審査" },
        { name: "Class IIb", nameJa: "クラスIIb", riskLevel: "中高", description: "中高リスク。NB詳細審査。", examples: ["人工呼吸器", "血液透析装置", "輸液ポンプ"], approvalPath: "Notified Body審査" },
        { name: "Class III", nameJa: "クラスIII", riskLevel: "高", description: "最高リスク。", examples: ["人工心臓弁", "冠動脈ステント", "乳房インプラント"], approvalPath: "NB審査 + Expert Panel相談" },
      ],
      rules: ["EU MDR Annex VIII の22分類規則を直接適用"],
      totalProductCodes: "EU CND コード",
    },

    conformityAssessment: { overview: "EU MDR に基づく適合性評価がそのまま適用。国内追加の市販前審査なし。Infarmed への事業者・機器登録が必要。", routes: [{ name: "EU MDR Conformity Assessment", nameJa: "EU MDR 適合性評価", applicableClasses: ["全クラス"], description: "EU MDR Annex IX〜XI。詳細はEUプロファイル参照。", subtypes: [], avgReviewTime: "EUプロファイル参照", fee: "Notified Body により異なる", url: "https://www.infarmed.pt/" }] },
    electronicSubmission: { system: "EUDAMED + Infarmed 国内登録", url: "https://www.infarmed.pt/", description: "EUDAMED + Infarmed 国内登録システム。EUDAMED 4モジュール義務化: 2026年5月28日。", mandatory: true },
    udi: { required: true, system: "EU UDI System — EUDAMED", description: "EU MDR Article 27-29 UDI 要件がそのまま適用。", url: "https://ec.europa.eu/tools/eudamed/", timeline: "EUDAMED義務化: 2026年5月28日" },
    postMarket: { adverseEventReporting: { system: "EU Vigilance System — Infarmed", mandatory: true, url: "https://www.infarmed.pt/", description: "重篤有害事象をInfarmedに報告義務。MDR Article 87-92。" }, recalls: { authority: "Infarmed", description: "FSCA/FSNはInfarmedに通知。", url: "https://www.infarmed.pt/" }, surveillance: "EU MDR PMS/PSUR/PMCF要件がそのまま適用。" },
    certificateOfFreeSale: { available: true, issuingAuthority: "Infarmed", name: "Certificate of Free Sale (CFS)", description: "Infarmed がCFSを発行。", processingTime: "要確認", url: "https://www.infarmed.pt/" },
    reimbursement: { system: "SNS（国民保健サービス）— 税財源", authority: "Infarmed / ACSS / MS", description: "ポルトガルはSNS（Serviço Nacional de Saúde）による税財源の公的医療制度。Infarmed が医療機器の価格設定・償還に関与。病院用機器はSPMS（Serviços Partilhados do Ministério da Saúde）による集中調達。", codingSystems: ["GDH (Grupos de Diagnóstico Homogéneos / PT-DRG)"], url: "https://www.infarmed.pt/" },
    marketingRules: { authority: "Infarmed", description: "MDR Article 7 虚偽広告禁止。国内広告規制法が併存。", keyRules: ["ポルトガル語ラベリング・IFU必須", "MDR Article 7 虚偽広告禁止", "登録済み機器のみ販売可"] },
    mdsap: { status: "非参加", description: "EU加盟国としてMDSAP非参加。" },
    internationalStandards: { iso13485: { accepted: true, notes: "EU MDR QMS要件に基づき実質必須。EN ISO 13485:2016。" }, iso14971: { accepted: true, notes: "EN ISO 14971:2019 + A11:2021。" }, iec62304: { accepted: true, notes: "EN IEC 62304:2006 + A1:2015。" }, iec60601: { accepted: true, notes: "EN IEC 60601 シリーズ。" }, others: [] },
    recentDevelopments: [
      { date: "2021", title: "MDR 適用開始", description: "2021年5月26日よりEU MDRが適用開始。" },
      { date: "2024", title: "EUDAMED義務化準備", description: "EUDAMED 4モジュール2026年5月28日義務化に向けた準備。" },
    ],
    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- Greece (GRC) ---
  // =========================================================================
  {
    code: "GRC",
    country: "ギリシャ",
    countryEn: "Greece",
    region: "Europe",
    flag: "🇬🇷",

    legalSystemOverview: {
      type: "EU加盟国（MDR/IVDR 直接適用）",
      description:
        "ギリシャはEU加盟国であり、Regulation (EU) 2017/745（MDR）および Regulation (EU) 2017/746（IVDR）が直接適用される。国内補完法として Law 4600/2019（改正版）が適用されている。EOF（国立医薬品機構 / National Organisation for Medicines）がNCA（National Competent Authority）として市場監視・ビジランス・臨床試験監督を担う。",
      keyCharacteristics: [
        "EU MDR/IVDR が直接適用",
        "EOF がNCAとして市場監視・ビジランスを担当",
        "Law 4600/2019（改正版）による国内補完",
        "ラベリング・使用説明書はギリシャ語必須",
        "EOPYY（国立医療サービス提供機構）が保険償還を管理",
        "Ministerial Decisions による詳細規定",
      ],
    },

    authorities: [
      { name: "EOF", fullName: "National Organisation for Medicines", localName: "Εθνικός Οργανισμός Φαρμάκων (ΕΟΦ)", role: "NCA: 医療機器の市場監視・ビジランス・臨床試験監督・登録管理", url: "https://www.eof.gr/", isPrimary: true },
      { name: "EOPYY", fullName: "National Organization for the Provision of Healthcare Services", localName: "Εθνικός Οργανισμός Παροχής Υπηρεσιών Υγείας", role: "医療機器の保険償還管理", url: "https://www.eopyy.gov.gr/", isPrimary: false },
      { name: "MY", fullName: "Ministry of Health", localName: "Υπουργείο Υγείας", role: "医療政策・法制度策定", url: "https://www.moh.gov.gr/", isPrimary: false },
    ],

    notifiedBodies: { system: "EU MDR Notified Body 制度（ギリシャ国内に指定NB無し — 他EU加盟国のNBを利用）", description: "2026年4月時点でギリシャ国内にMDR/IVDR指定のNotified Bodyは無い。製造業者は他EU加盟国のNBを利用。", bodies: [] },
    deviceDefinition: { legalDefinition: "EU MDR Article 2(1) の定義がそのまま適用。", scope: "IVD は IVDR で別途規定。SaMD・AI/ML 搭載機器も対象。美容目的製品（Annex XVI）も適用。", notes: "MDR の定義がそのまま国内法に適用。追加的な定義変更なし。" },
    primaryLaw: { title: "Regulation (EU) 2017/745 — Medical Devices Regulation (MDR)", originalTitle: null, enacted: "2017（EU採択）/ 2021年5月26日適用", lastAmended: "2025（Regulation (EU) 2025/2457）", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32017R0745", description: "EU MDR がギリシャに直接適用。Law 4600/2019（改正版）が国内補完法。" },
    implementingRegulations: [
      { title: "Law 4600/2019（改正版）", date: "2019（原版）/ 2021改正", url: "https://www.eof.gr/", description: "MDR/IVDR 国内補完法。NCA権限・言語要件・登録義務・罰則を規定。", category: "国内補完法" },
      { title: "Ministerial Decision DY8d/Γ.Π.οικ.130648/2009（改正版）", date: "2009（原版）/ 随時改正", url: "https://www.eof.gr/", description: "医療機器の市場監視・ビジランス手続の詳細規定。", category: "省令" },
    ],
    relatedLaws: [
      { title: "GDPR (Regulation (EU) 2016/679)", category: "データ保護", enacted: "2018", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679", relevance: "健康データに適用。Law 4624/2019（GDPR国内実施法）も併存。" },
      { title: "AI Act — Regulation (EU) 2024/1689", category: "人工知能", enacted: "2024", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32024R1689", relevance: "AI搭載医療機器はHigh-Risk AI System。" },
    ],
    classification: {
      system: "EU MDR 4クラス制（Class I / IIa / IIb / III）",
      basis: "EU MDR Annex VIII の22分類規則がそのまま適用。",
      classes: [
        { name: "Class I", nameJa: "クラスI", riskLevel: "低", description: "低リスク。自己宣言（Im/Is/Ir除く）。", examples: ["弾性包帯", "聴診器", "車椅子"], approvalPath: "自己宣言" },
        { name: "Class IIa", nameJa: "クラスIIa", riskLevel: "中低", description: "中低リスク。NB関与。", examples: ["補聴器", "超音波装置", "コンタクトレンズ"], approvalPath: "Notified Body審査" },
        { name: "Class IIb", nameJa: "クラスIIb", riskLevel: "中高", description: "中高リスク。NB詳細審査。", examples: ["人工呼吸器", "血液透析装置", "輸液ポンプ"], approvalPath: "Notified Body審査" },
        { name: "Class III", nameJa: "クラスIII", riskLevel: "高", description: "最高リスク。", examples: ["人工心臓弁", "冠動脈ステント", "乳房インプラント"], approvalPath: "NB審査 + Expert Panel相談" },
      ],
      rules: ["EU MDR Annex VIII の22分類規則を直接適用"],
      totalProductCodes: "EU CND コード",
    },
    conformityAssessment: { overview: "EU MDR に基づく適合性評価がそのまま適用。国内追加の市販前審査なし。EOF への事業者・機器登録が必要。", routes: [{ name: "EU MDR Conformity Assessment", nameJa: "EU MDR 適合性評価", applicableClasses: ["全クラス"], description: "EU MDR Annex IX〜XI。詳細はEUプロファイル参照。", subtypes: [], avgReviewTime: "EUプロファイル参照", fee: "Notified Body により異なる", url: "https://www.eof.gr/" }] },
    electronicSubmission: { system: "EUDAMED + EOF 国内登録", url: "https://www.eof.gr/", description: "EUDAMED + EOF 国内登録システム。EUDAMED 4モジュール義務化: 2026年5月28日。", mandatory: true },
    udi: { required: true, system: "EU UDI System — EUDAMED", description: "EU MDR Article 27-29 UDI 要件がそのまま適用。", url: "https://ec.europa.eu/tools/eudamed/", timeline: "EUDAMED義務化: 2026年5月28日" },
    postMarket: { adverseEventReporting: { system: "EU Vigilance System — EOF", mandatory: true, url: "https://www.eof.gr/", description: "重篤有害事象をEOFに報告義務。MDR Article 87-92。" }, recalls: { authority: "EOF", description: "FSCA/FSNはEOFに通知。", url: "https://www.eof.gr/" }, surveillance: "EU MDR PMS/PSUR/PMCF要件がそのまま適用。" },
    certificateOfFreeSale: { available: true, issuingAuthority: "EOF", name: "Certificate of Free Sale (CFS)", description: "EOF がCFSを発行。", processingTime: "要確認", url: "https://www.eof.gr/" },
    reimbursement: { system: "EOPYY（国民健康保険）— 社会保険制度", authority: "EOPYY / MY", description: "ギリシャはEOPYY を中核とする社会保険型の公的医療制度。医療機器の償還はEOPYY が管理し、償還リスト（陽性リスト）に基づく。患者自己負担は機器カテゴリーにより異なる。病院用高額機器は別途公的調達。", codingSystems: ["EOPYY 償還コード", "KEN-DRG"], url: "https://www.eopyy.gov.gr/" },
    marketingRules: { authority: "EOF", description: "MDR Article 7 虚偽広告禁止。国内広告規制法が併存。", keyRules: ["ギリシャ語ラベリング・IFU必須", "MDR Article 7 虚偽広告禁止", "登録済み機器のみ販売可"] },
    mdsap: { status: "非参加", description: "EU加盟国としてMDSAP非参加。" },
    internationalStandards: { iso13485: { accepted: true, notes: "EU MDR QMS要件に基づき実質必須。EN ISO 13485:2016。" }, iso14971: { accepted: true, notes: "EN ISO 14971:2019 + A11:2021。" }, iec62304: { accepted: true, notes: "EN IEC 62304:2006 + A1:2015。" }, iec60601: { accepted: true, notes: "EN IEC 60601 シリーズ。" }, others: [] },
    recentDevelopments: [
      { date: "2021", title: "MDR 適用開始", description: "2021年5月26日よりEU MDRが適用開始。" },
      { date: "2024", title: "EUDAMED義務化準備", description: "EUDAMED 4モジュール2026年5月28日義務化に向けた準備。" },
    ],
    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- Ukraine (UKR) ---
  // =========================================================================
  {
    code: "UKR",
    country: "ウクライナ",
    countryEn: "Ukraine",
    region: "Europe",
    flag: "🇺🇦",

    legalSystemOverview: {
      type: "独自制度（EU MDR への段階的整合化を推進中）",
      description:
        "ウクライナは独自の医療機器規制制度を有するが、EU加盟を目指し、EU MDR/IVDR への整合化（approximation）を段階的に進めている。2024年の Technical Regulation on Medical Devices（Cabinet of Ministers Resolution No. 927）により、EU MDR に大幅に整合した新規制が導入された。保健省（MOH）が政策策定、Derzhliktehnoservis（国立医療技術サービス）等が技術評価を担う。",
      keyCharacteristics: [
        "EU MDR への段階的整合化（approximation）を推進",
        "Technical Regulation on Medical Devices (2024) で新枠組み導入",
        "保健省（MOH）が規制政策を管轄",
        "市販前の国家登録（State Registration）が必要",
        "ラベリング・使用説明書はウクライナ語必須",
        "戦時下の特別措置（輸入・登録の簡素化）が一部適用",
      ],
    },

    authorities: [
      { name: "MOH", fullName: "Ministry of Health of Ukraine", localName: "Міністерство охорони здоров'я України", role: "医療機器規制政策の策定・国家登録の承認", url: "https://moz.gov.ua/", isPrimary: true },
      { name: "Derzhliktehnoservis", fullName: "State Service on Medicines and Drug Control", localName: "Державна служба з лікарських засобів та контролю за наркотиками", role: "市場監視・品質管理・査察", url: "https://www.dls.gov.ua/", isPrimary: true },
      { name: "SEC", fullName: "State Expert Center of the MOH", localName: "Державний експертний центр МОЗ", role: "医療機器の技術評価・国家登録の専門評価", url: "https://www.dec.gov.ua/", isPrimary: false },
      { name: "NHSU", fullName: "National Health Service of Ukraine", localName: "Національна служба здоров'я України", role: "公的医療保険（PMG）の管理・医療機器の償還", url: "https://nszu.gov.ua/", isPrimary: false },
    ],

    notifiedBodies: { system: "国家登録制度（Notified Body制度はまだ導入途上）", description: "ウクライナでは現在、EU型のNotified Body制度は完全には導入されていない。Technical Regulation (2024) に基づき、適合性評価機関（CAB）の認定・指定の枠組みが整備中。現在は国家登録（State Registration）が主要な市場参入手続。", bodies: [] },
    deviceDefinition: { legalDefinition: "Technical Regulation on Medical Devices (2024) に基づく定義。EU MDR Article 2(1) に大幅に整合。人体への診断・治療・予防等を目的とする器具・装置・ソフトウェア等。", scope: "IVD は別途のTechnical Regulationで規定。SaMD も対象。", notes: "2024年の新Technical Regulationにより、EU MDR の定義に大幅に近づいた。" },
    primaryLaw: { title: "Law of Ukraine 'On Medical Devices' (No. 2042-VIII)", originalTitle: "Закон України «Про медичні вироби»", enacted: "2017", lastAmended: "2024", url: "https://zakon.rada.gov.ua/", description: "ウクライナの医療機器規制の基本法。Technical Regulations がこの法律に基づき制定される。" },
    implementingRegulations: [
      { title: "Technical Regulation on Medical Devices (CMU Resolution No. 927)", date: "2024", url: "https://www.kmu.gov.ua/", description: "EU MDR に整合した新しい技術規則。分類・適合性評価・ラベリング等を規定。", category: "技術規則" },
      { title: "Procedure for State Registration of Medical Devices (CMU Resolution No. 1370)", date: "2019（改正2024）", url: "https://www.kmu.gov.ua/", description: "医療機器の国家登録手続。", category: "登録手続" },
      { title: "Wartime Simplification Measures", date: "2022-", url: "https://moz.gov.ua/", description: "戦時下の医療機器輸入・登録簡素化措置。緊急時の迅速供給を可能にする。", category: "特別措置" },
    ],
    relatedLaws: [
      { title: "Law of Ukraine 'On Personal Data Protection' (No. 2297-VI)", category: "データ保護", enacted: "2010", url: "https://zakon.rada.gov.ua/", relevance: "健康データに適用。GDPR整合化も進行中。" },
      { title: "Ukraine-EU Association Agreement", category: "国際協定", enacted: "2014", url: "https://trade.ec.europa.eu/", relevance: "EU規制への整合化の法的基盤。Annex III に技術規則整合化スケジュール。" },
    ],
    classification: {
      system: "4クラス制（Class I / IIa / IIb / III）— EU MDR 整合",
      basis: "Technical Regulation (2024) に基づき、EU MDR Annex VIII に整合した分類規則を適用。",
      classes: [
        { name: "Class I", nameJa: "クラスI", riskLevel: "低", description: "低リスク。", examples: ["弾性包帯", "聴診器", "車椅子"], approvalPath: "自己適合宣言 + 国家登録" },
        { name: "Class IIa", nameJa: "クラスIIa", riskLevel: "中低", description: "中低リスク。", examples: ["補聴器", "超音波装置", "コンタクトレンズ"], approvalPath: "適合性評価 + 国家登録" },
        { name: "Class IIb", nameJa: "クラスIIb", riskLevel: "中高", description: "中高リスク。", examples: ["人工呼吸器", "血液透析装置", "輸液ポンプ"], approvalPath: "適合性評価 + 国家登録" },
        { name: "Class III", nameJa: "クラスIII", riskLevel: "高", description: "最高リスク。", examples: ["人工心臓弁", "冠動脈ステント", "乳房インプラント"], approvalPath: "適合性評価 + 国家登録" },
      ],
      rules: ["EU MDR Annex VIII に整合した分類規則（Technical Regulation 2024）"],
      totalProductCodes: "要確認",
    },
    conformityAssessment: { overview: "国家登録（State Registration）が市場参入の主要手続。Technical Regulation (2024) に基づき EU MDR 整合の適合性評価経路を段階的に導入中。CE マーキング製品に対する簡素化経路も存在。", routes: [{ name: "State Registration", nameJa: "国家登録", applicableClasses: ["全クラス"], description: "MOH/SEC による技術文書審査・国家登録。CE マーキング取得済み製品は書類審査の簡素化あり。", subtypes: [{ name: "簡素化登録（CE マーキング製品）", description: "EU で CE マーキングを取得した製品は、追加臨床データ無しの書類審査で登録可能。" }], avgReviewTime: "90〜180日（通常）/ 30〜60日（簡素化）", fee: "要確認", url: "https://moz.gov.ua/" }] },
    electronicSubmission: { system: "MOH/SEC オンライン提出", url: "https://www.dec.gov.ua/", description: "電子申請システムが整備中。一部書類は物理提出が必要な場合あり。", mandatory: false },
    udi: { required: false, system: "導入準備中（EU UDI に整合予定）", description: "Technical Regulation (2024) にUDI要件が含まれるが、完全義務化は段階的。", url: null, timeline: "EU MDR 整合化の進捗に連動" },
    postMarket: { adverseEventReporting: { system: "Derzhliktehnoservis ビジランスシステム", mandatory: true, url: "https://www.dls.gov.ua/", description: "医療機器関連の有害事象をDerzhliktehnoservisに報告義務。EU Vigilance に整合化を推進。" }, recalls: { authority: "Derzhliktehnoservis / MOH", description: "市場からの回収・是正措置はDerzhliktehnoservis/MOHが監督。", url: "https://www.dls.gov.ua/" }, surveillance: "市販後監視制度はEU PMS要件に整合化を推進中。戦時下で実施に制約あり。" },
    certificateOfFreeSale: { available: true, issuingAuthority: "MOH", name: "Certificate of Free Sale / State Registration Certificate", description: "MOH が国家登録証を発行。輸出用のCFSも申請可能。", processingTime: "要確認", url: "https://moz.gov.ua/" },
    reimbursement: { system: "PMG（Program of Medical Guarantees）— NHSU", authority: "NHSU / MOH", description: "ウクライナは2018年にNHSUを設立し、PMG（医療保証プログラム）による公的医療を提供。医療機器の償還はPMGパッケージに含まれる範囲内。病院への機器供給は公的調達（ProZorro）を通じて実施。戦時下で国際ドナー支援による機器供給も大きな役割。", codingSystems: ["NHSU サービスパッケージコード"], url: "https://nszu.gov.ua/" },
    marketingRules: { authority: "MOH / Derzhliktehnoservis", description: "登録済み機器のみ販売可。広告規制は Law on Advertising に基づく。", keyRules: ["ウクライナ語ラベリング・IFU必須", "国家登録済み機器のみ販売可", "虚偽広告の禁止"] },
    mdsap: { status: "非参加", description: "ウクライナはMDSAPプログラムに参加していない。" },
    internationalStandards: { iso13485: { accepted: true, notes: "ISO 13485 認証はQMS適合の証拠として認められる。DSTU EN ISO 13485（国家規格として採用）。" }, iso14971: { accepted: true, notes: "DSTU EN ISO 14971 として採用。" }, iec62304: { accepted: true, notes: "ソフトウェア医療機器に対して参照。" }, iec60601: { accepted: true, notes: "DSTU EN IEC 60601 シリーズとして採用。" }, others: [{ name: "DSTU（ウクライナ国家規格）", notes: "EN規格をDSTU EN として大量に採用（EU整合化の一環）。" }] },
    recentDevelopments: [
      { date: "2024", title: "Technical Regulation on Medical Devices 施行", description: "CMU Resolution No. 927 により EU MDR に大幅に整合した新技術規則を導入。分類・適合性評価・ラベリング等を刷新。" },
      { date: "2022-", title: "戦時下の特別措置", description: "ロシアの侵攻に伴い、医療機器の輸入・登録簡素化措置を実施。国際ドナー支援による機器供給体制も構築。" },
      { date: "2024", title: "EU加盟候補国としての整合化加速", description: "2022年6月にEU加盟候補国の地位を獲得。医療機器規制を含む技術規則のEU整合化を加速。" },
    ],
    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- Hong Kong (HKG) ---
  // =========================================================================
  {
    code: "HKG",
    country: "香港",
    countryEn: "Hong Kong SAR",
    region: "ASPAC",
    flag: "🇭🇰",

    legalSystemOverview: {
      type: "独自制度（自主的登録制度 → 法定制度への移行中）",
      description:
        "香港の医療機器規制は長年、自主的な医療機器行政管理制度（MDACS: Medical Device Administrative Control System）に基づいていたが、法定規制への移行を段階的に進めている。2025年3月に Medical Devices Bill が立法会（LegCo）に提出され、法定登録制度の導入を目指している。衛生署（DOH / Department of Health）の医療機器管理課（MDCO / Medical Device Control Office）が規制を担当。",
      keyCharacteristics: [
        "MDACS（自主的登録制度）から法定制度への移行中",
        "Medical Devices Bill (2025) で法定登録制度導入を目指す",
        "MDCO/DOH が規制を担当",
        "参照規制当局（Reference Regulators）からの承認に依拠",
        "ラベリングは中国語（繁体字）・英語",
        "香港は独自の規制体制を維持（中国NMPAとは別制度）",
      ],
    },

    authorities: [
      { name: "MDCO/DOH", fullName: "Medical Device Control Office, Department of Health", localName: "衞生署醫療儀器管制辦公室", role: "医療機器の登録・市場監視・ビジランス・リコール管理", url: "https://www.mdco.gov.hk/", isPrimary: true },
      { name: "HA", fullName: "Hospital Authority", localName: "醫院管理局", role: "公立病院での医療機器調達・使用管理", url: "https://www.ha.org.hk/", isPrimary: false },
      { name: "FHB", fullName: "Food and Health Bureau (now Health Bureau)", localName: "醫務衞生局", role: "医療政策・法制度策定", url: "https://www.healthbureau.gov.hk/", isPrimary: false },
    ],

    notifiedBodies: { system: "参照規制当局制度（Reference Regulators）", description: "香港はNotified Body制度を持たず、参照規制当局（USFDA, EU/NB, Health Canada, TGA, PMDA 等）の承認・認証に依拠する。MDACS Phase II リスティングでは参照規制当局からの承認証拠が必要。", bodies: [] },
    deviceDefinition: { legalDefinition: "MDACS における定義: 人体の疾病の診断・予防・監視・治療・緩和、負傷の診断・監視・治療・緩和・補償、解剖学的・生理学的過程の調査・置換・変更・支援を目的とする器具・装置・実装体・機械・用具・インプラント・試薬・材料（薬物的・免疫学的・代謝的手段を主たる作用機序としないもの）。", scope: "IVD を含む。SaMD も対象。", notes: "Medical Devices Bill (2025) で法的定義が正式に法定化される予定。GHTF/IMDRF の定義に整合。" },
    primaryLaw: { title: "Medical Device Administrative Control System (MDACS)", originalTitle: null, enacted: "2004（Phase I）/ 2015（Phase II リスティング開始）", lastAmended: "2025（Medical Devices Bill 提出）", url: "https://www.mdco.gov.hk/english/mdacs/mdacs.html", description: "現行は自主的な行政管理制度。Medical Devices Bill (2025) により法定制度への移行を目指す。" },
    implementingRegulations: [
      { title: "Medical Devices Bill (2025)", date: "2025-03（LegCo提出）", url: "https://www.mdco.gov.hk/", description: "法定の医療機器登録制度を導入するための法案。立法会で審議中。", category: "法案（審議中）" },
      { title: "MDACS Phase I — Adverse Event Reporting", date: "2004", url: "https://www.mdco.gov.hk/english/mdacs/mdacs_aer.html", description: "自主的な有害事象報告制度。", category: "自主的制度" },
      { title: "MDACS Phase II — Medical Device Listing", date: "2015", url: "https://www.mdco.gov.hk/english/mdacs/mdacs_mdl.html", description: "自主的な医療機器リスティング制度。Class II〜IV が対象。", category: "自主的制度" },
    ],
    relatedLaws: [
      { title: "Personal Data (Privacy) Ordinance (Cap. 486)", category: "データ保護", enacted: "1996", url: "https://www.pcpd.org.hk/", relevance: "健康データに適用。" },
      { title: "Consumer Goods Safety Ordinance (Cap. 456)", category: "消費者安全", enacted: "1994", url: "https://www.elegislation.gov.hk/", relevance: "医療機器が消費者製品に該当する場合の一般的安全要件。" },
    ],
    classification: {
      system: "4クラス制（Class I / II / III / IV）— GHTF/IMDRF 整合",
      basis: "GHTF（現IMDRF）の推奨分類体系に準拠。リスクベースの4クラス。",
      classes: [
        { name: "Class I", nameJa: "クラスI", riskLevel: "低", description: "低リスク。", examples: ["聴診器", "弾性包帯", "車椅子"], approvalPath: "リスティング不要（現行MDACS）" },
        { name: "Class II", nameJa: "クラスII", riskLevel: "中低", description: "中低リスク。", examples: ["補聴器", "超音波装置", "コンタクトレンズ"], approvalPath: "MDACS リスティング" },
        { name: "Class III", nameJa: "クラスIII", riskLevel: "中高", description: "中高リスク。", examples: ["人工呼吸器", "血液透析装置", "輸液ポンプ"], approvalPath: "MDACS リスティング" },
        { name: "Class IV", nameJa: "クラスIV", riskLevel: "高", description: "最高リスク。", examples: ["人工心臓弁", "冠動脈ステント", "乳房インプラント"], approvalPath: "MDACS リスティング" },
      ],
      rules: ["GHTF/IMDRF 分類規則に準拠"],
      totalProductCodes: "GMDN コード使用",
    },
    conformityAssessment: { overview: "現行のMDACSは自主的なリスティング制度。Class II〜IV の機器は参照規制当局からの承認/認証を証拠として提出しリスティングを取得。Medical Devices Bill 成立後は法定登録に移行予定。", routes: [{ name: "MDACS Phase II Listing", nameJa: "MDACS Phase II リスティング", applicableClasses: ["Class II / III / IV"], description: "参照規制当局（USFDA, EU/NB, Health Canada, TGA, PMDA）からの承認・認証に基づきリスティング。製造元のISO 13485認証、参照当局の承認証拠、ラベリング情報等を提出。", subtypes: [{ name: "参照規制当局ルート", description: "FDA 510(k)/PMA、CE マーキング、TGA registration 等の承認を基にリスティング。" }], avgReviewTime: "60〜120日", fee: "リスティング料: HKD 1,520〜4,560（クラスによる）", url: "https://www.mdco.gov.hk/english/mdacs/mdacs_mdl.html" }] },
    electronicSubmission: { system: "MDCO Online Listing System", url: "https://www.mdco.gov.hk/", description: "MDCO のオンラインシステムでリスティング申請。", mandatory: true },
    udi: { required: false, system: "IMDRF UDI に整合予定", description: "現行MDACSではUDI義務なし。Medical Devices Bill ではUDI要件導入予定。IMDRF UDI Guidance に整合。", url: "https://www.mdco.gov.hk/", timeline: "Medical Devices Bill 成立後に段階的導入予定" },
    postMarket: { adverseEventReporting: { system: "MDACS Phase I — Adverse Event Reporting", mandatory: false, url: "https://www.mdco.gov.hk/english/mdacs/mdacs_aer.html", description: "現行は自主的な有害事象報告制度（MDACS Phase I）。登録保有者・医療機関に報告を推奨。Medical Devices Bill で法定義務化予定。" }, recalls: { authority: "MDCO/DOH", description: "MDCOがリコール情報を収集・公開。Safety Alerts を発出。", url: "https://www.mdco.gov.hk/english/safety/safety.html" }, surveillance: "MDCO が市販後安全情報をモニタリング。Safety Alerts、Field Safety Corrective Actions 情報を公開。Medical Devices Bill で法定PMS制度を導入予定。" },
    certificateOfFreeSale: { available: false, issuingAuthority: "N/A", name: "N/A", description: "香港は現時点でCFSの発行制度を正式に運用していない。Medical Devices Bill 後に検討される可能性。", processingTime: "N/A", url: null },
    reimbursement: { system: "Hospital Authority（公立病院）+ 民間保険", authority: "HA / FHB", description: "香港の公的医療はHospital Authority（HA）が運営する公立病院・クリニックが中心。HA は一般税財源で運営され、医療機器は HA の集中調達（Central Tender）を通じて購入。民間病院・クリニックは独自に調達。民間医療保険の普及率も高い。薬物・機器の個別償還リストではなく、HA の診療サービスに包括。", codingSystems: ["HA 調達カテゴリーコード"], url: "https://www.ha.org.hk/" },
    marketingRules: { authority: "MDCO/DOH", description: "Undesirable Medical Advertisements Ordinance (Cap. 231) が医療関連広告を規制。一般消費者向け医療機器広告に制限あり。", keyRules: ["中国語（繁体字）・英語ラベリング", "リスティング済み機器の販売を推奨", "Undesirable Medical Advertisements Ordinance による広告規制", "Medical Devices Bill 成立後は法定表示要件導入予定"] },
    mdsap: { status: "非参加", description: "香港はMDSAPプログラムに参加していない。" },
    internationalStandards: { iso13485: { accepted: true, notes: "ISO 13485 認証はリスティングの要件。製造業者のQMS適合証拠として必須。" }, iso14971: { accepted: true, notes: "リスクマネジメントの国際規格として参照。" }, iec62304: { accepted: true, notes: "ソフトウェア医療機器に対して参照。" }, iec60601: { accepted: true, notes: "医用電気機器の安全規格として参照。IEC 60601 テストレポートの提出を求める場合あり。" }, others: [] },
    recentDevelopments: [
      { date: "2025-03", title: "Medical Devices Bill 立法会提出", description: "法定の医療機器登録制度を導入するための法案を立法会（LegCo）に提出。法定登録・ビジランス・罰則等を規定。成立すれば香港の医療機器規制の大転換点。" },
      { date: "2024", title: "MDACS リスティング対象拡大", description: "MDACS Phase II のリスティング対象機器カテゴリーの拡大を継続。" },
      { date: "2023", title: "IMDRF 参加", description: "香港は IMDRF の Associate Member として参加し、国際規制整合化に貢献。" },
    ],
    lastUpdated: "2026-04-02",
    verified: null,
  },

  // =========================================================================
  // --- VEN（ベネズエラ） ---
  // =========================================================================
  { code: "VEN", country: "ベネズエラ", countryEn: "Bolivarian Republic of Venezuela", region: "Latam", flag: "🇻🇪", legalSystemOverview: { type: "中央集権制（Centralized system）", description: "ベネズエラの医療機器規制は保健省（MPPS: Ministerio del Poder Popular para la Salud）が所管する。Registro Sanitario（衛生登録）制度を運用。経済危機・制裁等の影響で規制制度の実効的な運用に課題があり、登録手続きの遅延が報告されている。", keyCharacteristics: ["MPPS が医療機器規制を統括", "Registro Sanitario（衛生登録）制度", "リスクベース分類を採用（詳細は要確認）", "経済制裁・通貨規制等の影響で輸入・登録に困難が伴う", "ローカル代理人の指定が必須", "規制運用の実態には流動的な要素が多い"] }, authorities: [{ name: "MPPS", fullName: "Ministerio del Poder Popular para la Salud", localName: "Ministerio del Poder Popular para la Salud", role: "医療機器の衛生登録・輸入管理・市販後監視・医療政策全般を統括", url: "http://www.mpps.gob.ve/", isPrimary: true }], notifiedBodies: { system: "なし（MPPS が直接審査）", description: "Notified Body 制度は存在しない。MPPS が直接審査を行う。", bodies: [] }, deviceDefinition: { legalDefinition: "疾病の診断・治療・予防・監視等を目的とする器具・装置・機器等で、主たる作用が薬理学的手段によらないもの。詳細な法的定義は要確認。", scope: "IVDを含む。", notes: "SaMDに関する明確な規定は要確認。" }, primaryLaw: { title: "Ley de Medicamentos（医薬品法）および関連規則", originalTitle: "Ley de Medicamentos", enacted: "2000", lastAmended: "要確認", url: "http://www.mpps.gob.ve/", description: "医薬品・医療機器の衛生登録に関する法的根拠。" }, implementingRegulations: [{ title: "MPPS 医療機器登録手続き規則", date: "要確認", url: "http://www.mpps.gob.ve/", description: "医療機器の Registro Sanitario に必要な書類・手続きを規定。", category: "登録手続き" }], relatedLaws: [{ title: "Ley Orgánica de Salud（保健基本法）", category: "保健基本法", enacted: "1998", url: "http://www.mpps.gob.ve/", relevance: "公衆衛生の法的基盤。MPPS の権限を規定。" }], classification: { system: "リスクベース分類（要確認）", basis: "MPPSの規則に基づくリスクベース分類。詳細な分類規則の公開は限定的。", classes: [{ name: "Class I", nameJa: "クラスI", riskLevel: "低リスク", description: "低リスク医療機器。", examples: ["ガーゼ", "聴診器", "弾性包帯"], approvalPath: "Registro Sanitario（簡易）" }, { name: "Class II", nameJa: "クラスII", riskLevel: "中リスク", description: "中リスク医療機器。", examples: ["超音波診断装置", "注射器"], approvalPath: "Registro Sanitario（標準）" }, { name: "Class III", nameJa: "クラスIII", riskLevel: "高リスク", description: "高リスク医療機器。", examples: ["心臓ペースメーカー", "人工心臓弁"], approvalPath: "Registro Sanitario（詳細審査）" }], rules: ["MPPS規則に基づく分類", "分類体系の詳細は要確認"], totalProductCodes: null }, conformityAssessment: { overview: "MPPS に Registro Sanitario を申請。技術文書、CFS、GMP 証明等が必要。経済制裁・為替規制の影響で審査に遅延が生じる場合がある。", routes: [{ name: "Registro Sanitario", nameJa: "衛生登録", applicableClasses: ["Class I / II / III"], description: "MPPS に技術文書・CFS・GMP 証明等を提出して登録申請。審査期間は流動的。", subtypes: [], avgReviewTime: "要確認（数ヶ月〜1年以上の遅延報告あり）", fee: "要確認", url: "http://www.mpps.gob.ve/" }] }, electronicSubmission: { system: "要確認", url: null, description: "電子申請システムの運用状況は要確認。", mandatory: false }, udi: { required: false, system: "未導入", description: "独自のUDI制度は未導入。", url: null, timeline: "未定" }, postMarket: { adverseEventReporting: { system: "テクノビジランス制度（MPPS）", mandatory: true, url: "http://www.mpps.gob.ve/", description: "有害事象の報告義務がある。制度の実効性には課題あり。" }, recalls: { authority: "MPPS", description: "MPPSがリコールを管理。", url: "http://www.mpps.gob.ve/" }, surveillance: "MPPSによる市販後監視。実効的な運用には課題がある。" }, certificateOfFreeSale: { available: false, issuingAuthority: null, name: null, description: "登録申請時に原産国のCFS提出が求められる。ベネズエラからのCFS発行制度は要確認。", processingTime: null, url: null }, reimbursement: { system: "公的医療制度 + 民間保険", authority: "MPPS", description: "公的医療は無料を原則とするが、経済危機で医療物資が不足。", codingSystems: ["要確認"], url: "http://www.mpps.gob.ve/" }, marketingRules: { authority: "MPPS", description: "登録済み機器のみ販売可能。", keyRules: ["登録済み機器のみ販売可", "虚偽広告の禁止"] }, mdsap: { status: "非参加", description: "ベネズエラはMDSAPに参加していない。" }, internationalStandards: { iso13485: { accepted: true, notes: "ISO 13485認証はGMP証明として参照される。" }, iso14971: { accepted: true, notes: "リスクマネジメント規格として参照。" }, iec62304: { accepted: false, notes: "要確認。" }, iec60601: { accepted: true, notes: "医用電気機器の安全規格として参照。" }, others: [] }, recentDevelopments: [{ date: "2025-2026", title: "規制制度の現状", description: "経済制裁および経済危機の継続により、医療機器の規制・供給に引き続き課題。登録手続きの遅延が常態化。" }], lastUpdated: "2026-04-02", verified: null },

  // =========================================================================
  // --- BOL（ボリビア） ---
  // =========================================================================
  { code: "BOL", country: "ボリビア", countryEn: "Plurinational State of Bolivia", region: "Latam", flag: "🇧🇴", legalSystemOverview: { type: "中央集権制（Centralized system）", description: "保健スポーツ省傘下のUNIMED（Unidad de Medicamentos y Tecnología en Salud）が管轄。Registro Sanitario制度を運用。規制制度は発展途上であり、参照国認可（CE、FDA等）やCFSが審査で重要視される。", keyCharacteristics: ["UNIMED が医療機器規制を管轄", "Registro Sanitario（衛生登録）制度", "リスクベース分類を導入（詳細は要確認）", "参照国認可・CFS が審査で重視される", "ローカル代理人の指定が必要", "規制制度は発展途上"] }, authorities: [{ name: "UNIMED", fullName: "Unidad de Medicamentos y Tecnología en Salud", localName: "Unidad de Medicamentos y Tecnología en Salud", role: "医療機器の衛生登録・輸入管理・品質管理", url: "https://www.minsalud.gob.bo/", isPrimary: true }, { name: "AGEMED", fullName: "Agencia Estatal de Medicamentos y Tecnologías en Salud", localName: "Agencia Estatal de Medicamentos y Tecnologías en Salud", role: "医薬品・医療技術の規制（医療機器への関与は要確認）", url: "https://www.agemed.org.bo/", isPrimary: false }], notifiedBodies: { system: "なし（UNIMED が直接審査）", description: "Notified Body 制度は存在しない。UNIMED が直接審査を行う。", bodies: [] }, deviceDefinition: { legalDefinition: "疾病の診断・治療・予防・監視等を目的とする器具・装置・機器等。法的定義の詳細は要確認。", scope: "IVDを含む。", notes: "SaMDに関する明確な規定は要確認。" }, primaryLaw: { title: "Ley del Medicamento No. 1737 および関連規則", originalTitle: "Ley del Medicamento No. 1737", enacted: "1996", lastAmended: "要確認", url: "https://www.minsalud.gob.bo/", description: "医薬品・医療機器の規制に関する基本法。" }, implementingRegulations: [{ title: "医療機器登録手続き規則", date: "要確認", url: "https://www.minsalud.gob.bo/", description: "Registro Sanitario に必要な書類・手続きを規定。", category: "登録手続き" }], relatedLaws: [{ title: "Ley No. 475 - Ley de Prestaciones de Servicios de Salud Integral", category: "医療サービス法", enacted: "2013", url: "https://www.minsalud.gob.bo/", relevance: "包括的医療サービス法。" }], classification: { system: "リスクベース分類（要確認）", basis: "保健省規則に基づくリスクベース分類。", classes: [{ name: "Class I", nameJa: "クラスI", riskLevel: "低リスク", description: "低リスク医療機器。", examples: ["ガーゼ", "聴診器", "体温計"], approvalPath: "Registro Sanitario（簡易）" }, { name: "Class II", nameJa: "クラスII", riskLevel: "中リスク", description: "中リスク医療機器。", examples: ["超音波診断装置", "注射器"], approvalPath: "Registro Sanitario（標準）" }, { name: "Class III", nameJa: "クラスIII", riskLevel: "高リスク", description: "高リスク医療機器。", examples: ["心臓ペースメーカー", "人工関節"], approvalPath: "Registro Sanitario（詳細審査）" }], rules: ["保健省規則に基づく分類", "分類体系の詳細は要確認"], totalProductCodes: null }, conformityAssessment: { overview: "UNIMED に Registro Sanitario を申請。CFS、技術文書、GMP/ISO 13485 証明等が必要。", routes: [{ name: "Registro Sanitario", nameJa: "衛生登録", applicableClasses: ["Class I / II / III"], description: "UNIMED に申請書類一式を提出。CFS・技術文書・GMP証明・ラベリング等を審査。", subtypes: [], avgReviewTime: "要確認（数ヶ月〜）", fee: "要確認", url: "https://www.minsalud.gob.bo/" }] }, electronicSubmission: { system: "要確認", url: null, description: "電子申請システムの導入状況は要確認。", mandatory: false }, udi: { required: false, system: "未導入", description: "独自のUDI制度は未導入。", url: null, timeline: "未定" }, postMarket: { adverseEventReporting: { system: "ファーマコビジランス/テクノビジランス制度", mandatory: true, url: "https://www.minsalud.gob.bo/", description: "有害事象の報告義務がある。テクノビジランス体制は構築中。" }, recalls: { authority: "UNIMED", description: "UNIMEDがリコールを管理。", url: "https://www.minsalud.gob.bo/" }, surveillance: "UNIMEDによる市販後監視。制度は発展途上。" }, certificateOfFreeSale: { available: false, issuingAuthority: null, name: null, description: "登録申請時に原産国のCFS提出が求められる。ボリビアからのCFS発行制度は要確認。", processingTime: null, url: null }, reimbursement: { system: "公的医療制度（SUS: Sistema Único de Salud）", authority: "保健スポーツ省", description: "2019年に導入されたSUS（統一保健制度）により医療アクセスの拡大を推進。公的調達は入札制。", codingSystems: ["要確認"], url: "https://www.minsalud.gob.bo/" }, marketingRules: { authority: "UNIMED", description: "登録済み機器のみ販売可能。", keyRules: ["登録済み機器のみ販売可", "虚偽広告の禁止"] }, mdsap: { status: "非参加", description: "ボリビアはMDSAPに参加していない。" }, internationalStandards: { iso13485: { accepted: true, notes: "ISO 13485認証はGMP/QMS証明として参照される。" }, iso14971: { accepted: true, notes: "リスクマネジメント規格として参照。" }, iec62304: { accepted: false, notes: "要確認。" }, iec60601: { accepted: true, notes: "医用電気機器の安全規格として参照。" }, others: [] }, recentDevelopments: [{ date: "2025-2026", title: "医療機器規制の整備推進", description: "PAHO/WHO支援の下で医療機器規制の制度化・能力構築を推進中。AGEMEDの設立により規制体制の強化が期待される。" }], lastUpdated: "2026-04-02", verified: null },

  // =========================================================================
  // --- SLV（エルサルバドル） ---
  // =========================================================================
  { code: "SLV", country: "エルサルバドル", countryEn: "Republic of El Salvador", region: "Latam", flag: "🇸🇻", legalSystemOverview: { type: "中央集権制（Centralized system）", description: "国家医薬品局（DNM: Dirección Nacional de Medicamentos）が管轄。2012年Ley de MedicamentosによりDNM設立。Registro Sanitario制度で医療機器の市場投入を管理。中米統合機構（SICA）枠組みでの地域整合化も進行中。", keyCharacteristics: ["DNM が医療機器規制を統括", "Ley de Medicamentos（2012年）が法的根拠", "Registro Sanitario（衛生登録）制度", "リスクベース分類（4クラス: I / IIA / IIB / III）", "中米地域での規制整合化（RTCA）を推進", "ローカル代理人の指定が必要"] }, authorities: [{ name: "DNM", fullName: "Dirección Nacional de Medicamentos", localName: "Dirección Nacional de Medicamentos", role: "医療機器の衛生登録・輸入管理・市販後監視・品質管理", url: "https://www.medicamentos.gob.sv/", isPrimary: true }], notifiedBodies: { system: "なし（DNM が直接審査）", description: "Notified Body 制度は存在しない。DNM が直接審査を行う。", bodies: [] }, deviceDefinition: { legalDefinition: "疾病の診断・治療・予防・監視・軽減等を目的とする器具・装置・機器・ソフトウェア・材料等。GHTF/IMDRF定義に概ね準拠。", scope: "IVDを含む。", notes: "中米共通技術規則（RTCA）の定義にも準拠。" }, primaryLaw: { title: "Ley de Medicamentos（医薬品法）", originalTitle: "Ley de Medicamentos", enacted: "2012", lastAmended: "要確認", url: "https://www.medicamentos.gob.sv/", description: "医薬品・医療機器の規制に関する基本法。DNMの設立根拠を含む。" }, implementingRegulations: [{ title: "Reglamento de Dispositivos Médicos（医療機器規則）", date: "要確認", url: "https://www.medicamentos.gob.sv/", description: "医療機器の分類・登録・市販後監視に関する詳細規則。", category: "医療機器規則" }, { title: "RTCA（中米共通技術規則）医療機器関連", date: "各年", url: "https://www.sieca.int/", description: "中米共通市場での医療機器規制の整合化を目的とした技術規則。", category: "地域整合化" }], relatedLaws: [{ title: "Código de Salud（衛生法典）", category: "保健基本法", enacted: "1988", url: "https://www.salud.gob.sv/", relevance: "公衆衛生の法的基盤。" }], classification: { system: "4クラス分類（Class I / IIA / IIB / III）", basis: "リスクベース（GHTF/IMDRF の枠組みに準拠）", classes: [{ name: "Class I", nameJa: "クラスI", riskLevel: "低リスク", description: "低リスク医療機器。", examples: ["聴診器", "手動外科器具", "ガーゼ"], approvalPath: "Registro Sanitario（簡易）" }, { name: "Class IIA", nameJa: "クラスIIA", riskLevel: "中低リスク", description: "中低リスク医療機器。", examples: ["注射器", "超音波診断装置"], approvalPath: "Registro Sanitario（標準）" }, { name: "Class IIB", nameJa: "クラスIIB", riskLevel: "中高リスク", description: "中高リスク医療機器。", examples: ["人工呼吸器", "透析装置"], approvalPath: "Registro Sanitario（詳細審査）" }, { name: "Class III", nameJa: "クラスIII", riskLevel: "高リスク", description: "高リスク医療機器。", examples: ["心臓ペースメーカー", "冠動脈ステント"], approvalPath: "Registro Sanitario（詳細審査）" }], rules: ["GHTF/IMDRF枠組みに基づく分類規則", "RTCA に基づく中米共通分類も参照"], totalProductCodes: null }, conformityAssessment: { overview: "DNM に Registro Sanitario を申請。技術文書、CFS、GMP/ISO 13485 証明等が必要。", routes: [{ name: "Registro Sanitario", nameJa: "衛生登録", applicableClasses: ["Class I / IIA / IIB / III"], description: "DNM に申請書類を提出。技術文書・CFS・品質証明・ラベリング等を審査。", subtypes: [], avgReviewTime: "要確認（60〜180日程度）", fee: "要確認", url: "https://www.medicamentos.gob.sv/" }] }, electronicSubmission: { system: "要確認", url: "https://www.medicamentos.gob.sv/", description: "DNMの電子申請システムの導入状況は要確認。", mandatory: false }, udi: { required: false, system: "未導入", description: "独自のUDI制度は未導入。", url: null, timeline: "未定" }, postMarket: { adverseEventReporting: { system: "テクノビジランス制度（DNM）", mandatory: true, url: "https://www.medicamentos.gob.sv/", description: "登録保有者は有害事象をDNMに報告する義務がある。" }, recalls: { authority: "DNM", description: "DNMがリコール・FSCAを管理。", url: "https://www.medicamentos.gob.sv/" }, surveillance: "DNMによるテクノビジランス（市販後監視）。" }, certificateOfFreeSale: { available: false, issuingAuthority: null, name: null, description: "登録申請時に原産国のCFS提出が求められる。エルサルバドルからのCFS発行制度は要確認。", processingTime: null, url: null }, reimbursement: { system: "公的医療制度（ISSS + MINSAL）", authority: "保健省 / ISSS", description: "社会保険研究所（ISSS）が被用者向け、保健省（MINSAL）が一般国民向けの医療サービスを提供。調達は公的入札。", codingSystems: ["要確認"], url: "https://www.salud.gob.sv/" }, marketingRules: { authority: "DNM", description: "登録済み機器のみ販売可能。", keyRules: ["登録済み機器のみ販売可", "虚偽・誇大広告の禁止", "ラベリングはスペイン語で記載"] }, mdsap: { status: "非参加", description: "エルサルバドルはMDSAPに参加していない。" }, internationalStandards: { iso13485: { accepted: true, notes: "ISO 13485認証はGMP/QMS証明として参照される。" }, iso14971: { accepted: true, notes: "リスクマネジメント規格として参照。" }, iec62304: { accepted: false, notes: "要確認。" }, iec60601: { accepted: true, notes: "医用電気機器の安全規格として参照。" }, others: [] }, recentDevelopments: [{ date: "2025-2026", title: "中米規制整合化の推進", description: "SICA/COMIECO の枠組みで中米共通技術規則（RTCA）に基づく医療機器規制の整合化が進行中。" }], lastUpdated: "2026-04-02", verified: null },

  // =========================================================================
  // --- CUB（キューバ） ---
  // =========================================================================
  { code: "CUB", country: "キューバ", countryEn: "Republic of Cuba", region: "Latam", flag: "🇨🇺", legalSystemOverview: { type: "中央集権制（社会主義体制）", description: "CECMED（Centro para el Control Estatal de Medicamentos, Equipos y Dispositivos Médicos）が管轄。医薬品・医療機器の国家規制機関として登録・品質管理・市販後監視を一元管理。WHO指定レベル4規制機関（医薬品分野）として国際的評価を受けている。社会主義体制のため国家による医療制度の全面的管理が特徴。", keyCharacteristics: ["CECMED が医療機器規制を一元管理", "国家主導の医療機器調達・管理体制", "リスクベースの分類・登録制度", "WHO指定レベル4規制機関（医薬品分野）としての実績", "米国経済制裁の影響で輸入に制約あり", "国産医療機器の開発・製造を推進"] }, authorities: [{ name: "CECMED", fullName: "Centro para el Control Estatal de Medicamentos, Equipos y Dispositivos Médicos", localName: "Centro para el Control Estatal de Medicamentos, Equipos y Dispositivos Médicos", role: "医療機器の登録・品質管理・市販後監視・施設許可", url: "https://www.cecmed.cu/", isPrimary: true }, { name: "MINSAP", fullName: "Ministerio de Salud Pública", localName: "Ministerio de Salud Pública", role: "医療政策全般・公衆衛生", url: "https://salud.msp.gob.cu/", isPrimary: false }], notifiedBodies: { system: "なし（CECMED が直接審査）", description: "Notified Body 制度は存在しない。CECMED が直接審査を行う。", bodies: [] }, deviceDefinition: { legalDefinition: "疾病の診断・治療・予防・監視・軽減等を目的とする器具・装置・機器・ソフトウェア・材料等。GHTF/IMDRFに概ね準拠。", scope: "IVDを含む。", notes: "CECMEDの定義はGHTF/IMDRFに概ね準拠。" }, primaryLaw: { title: "Resolución CECMED — 医療機器規制に関する決議", originalTitle: "Resoluciones CECMED sobre dispositivos médicos", enacted: "要確認", lastAmended: "要確認", url: "https://www.cecmed.cu/", description: "CECMEDが発出する各種決議が医療機器の登録・分類・品質管理の法的根拠。" }, implementingRegulations: [{ title: "CECMED 医療機器登録手続きガイドライン", date: "要確認", url: "https://www.cecmed.cu/", description: "医療機器の登録に必要な書類・手続きの詳細を規定。", category: "登録手続き" }], relatedLaws: [{ title: "Ley de Salud Pública（公衆衛生法）", category: "保健基本法", enacted: "1983", url: "https://salud.msp.gob.cu/", relevance: "キューバの公衆衛生制度の法的基盤。" }], classification: { system: "リスクベース分類（4クラス: I / IIA / IIB / III）", basis: "CECMED規則に基づくリスクベース分類（GHTF/IMDRF枠組みに準拠）。", classes: [{ name: "Class I", nameJa: "クラスI", riskLevel: "低リスク", description: "低リスク医療機器。", examples: ["ガーゼ", "聴診器", "体温計"], approvalPath: "CECMED 登録（簡易）" }, { name: "Class IIA", nameJa: "クラスIIA", riskLevel: "中低リスク", description: "中低リスク医療機器。", examples: ["注射器", "超音波診断装置"], approvalPath: "CECMED 登録（標準）" }, { name: "Class IIB", nameJa: "クラスIIB", riskLevel: "中高リスク", description: "中高リスク医療機器。", examples: ["人工呼吸器", "透析装置"], approvalPath: "CECMED 登録（詳細審査）" }, { name: "Class III", nameJa: "クラスIII", riskLevel: "高リスク", description: "高リスク医療機器。", examples: ["心臓ペースメーカー", "埋込み型デバイス"], approvalPath: "CECMED 登録（詳細審査）" }], rules: ["CECMED規則に基づく分類", "GHTF/IMDRF分類枠組みに準拠"], totalProductCodes: null }, conformityAssessment: { overview: "CECMEDに登録申請。技術文書、品質証明（ISO 13485等）、臨床データ等が必要。国産品と輸入品で手続きが異なる場合がある。", routes: [{ name: "CECMED Device Registration", nameJa: "CECMED 医療機器登録", applicableClasses: ["Class I / IIA / IIB / III"], description: "CECMEDに申請書類を提出。技術文書・品質証明・臨床データ・ラベリング等を審査。", subtypes: ["新規登録", "変更登録", "更新"], avgReviewTime: "要確認（60〜180日程度）", fee: "要確認", url: "https://www.cecmed.cu/" }] }, electronicSubmission: { system: "要確認", url: "https://www.cecmed.cu/", description: "CECMEDの電子申請システムの導入状況は要確認。", mandatory: false }, udi: { required: false, system: "未導入", description: "独自のUDI制度は未導入。", url: null, timeline: "未定" }, postMarket: { adverseEventReporting: { system: "テクノビジランス制度（CECMED）", mandatory: true, url: "https://www.cecmed.cu/", description: "CECMEDが運用するテクノビジランス制度。有害事象・不具合の報告義務がある。WHOとの連携実績あり。" }, recalls: { authority: "CECMED", description: "CECMEDがリコール・市場撤去を管理。", url: "https://www.cecmed.cu/" }, surveillance: "CECMEDによるテクノビジランス（市販後監視）。比較的体系的な運用。" }, certificateOfFreeSale: { available: true, issuingAuthority: "CECMED", name: "Certificado de Libre Venta", description: "CECMEDが登録済み機器についてCFSを発行。キューバ国産医療機器の輸出に利用。", processingTime: "要確認", url: "https://www.cecmed.cu/" }, reimbursement: { system: "国営医療制度（全額国家負担）", authority: "MINSAP", description: "キューバの医療制度は国営で全額国家負担。医療機器の調達は国家機関を通じた一括購入。", codingSystems: ["なし（国営一括調達）"], url: "https://salud.msp.gob.cu/" }, marketingRules: { authority: "CECMED / MINSAP", description: "国家管理体制のため民間の医療機器マーケティングは極めて限定的。", keyRules: ["CECMED登録済み機器のみ使用可", "国家調達が基本", "民間マーケティングは極めて限定的"] }, mdsap: { status: "非参加", description: "キューバはMDSAPに参加していない。" }, internationalStandards: { iso13485: { accepted: true, notes: "ISO 13485認証はQMS証明として参照される。国内規格（NC規格）との対応も存在。" }, iso14971: { accepted: true, notes: "リスクマネジメント規格として参照。" }, iec62304: { accepted: true, notes: "ソフトウェア医療機器に対して参照。" }, iec60601: { accepted: true, notes: "医用電気機器の安全規格として参照。NC規格として採用。" }, others: [{ name: "NC（Norma Cubana）規格", notes: "キューバ国家規格。ISO/IEC規格のキューバ版を多数採用。" }] }, recentDevelopments: [{ date: "2025-2026", title: "規制制度の国際整合化", description: "CECMEDはPAHO/WHOとの連携を強化し、医療機器規制の国際整合化を推進中。" }, { date: "2025", title: "国産医療機器開発の推進", description: "BioCubaFarmaグループを中心とした国産医療機器の開発・輸出を推進。" }], lastUpdated: "2026-04-02", verified: null },

  // =========================================================================
  // --- BRN（ブルネイ） ---
  // =========================================================================
  { code: "BRN", country: "ブルネイ", countryEn: "Brunei Darussalam", region: "ASPAC", flag: "🇧🇳", legalSystemOverview: { type: "絶対君主制（Absolute Monarchy）", description: "保健省（MOH）傘下のDepartment of Pharmaceutical Services（DPS）が管轄。Medicines Order 2007が法的根拠。ASEAN Medical Device Directive（AMDD）の枠組みに沿った規制整合化を推進中。参照国認可（CE、FDA、HSA等）への依存度が高い。", keyCharacteristics: ["MOH/DPS が医療機器規制を管轄", "Medicines Order 2007 が法的根拠", "ASEAN AMDD 整合化を推進中", "参照国認可（CE、FDA、HSA等）への依存度が高い", "ローカル代理人の指定が必要", "規制制度は発展途上"] }, authorities: [{ name: "MOH/DPS", fullName: "Ministry of Health - Department of Pharmaceutical Services", localName: "Kementerian Kesihatan - Jabatan Perkhidmatan Farmasi", role: "医療機器の登録・輸入管理・品質管理・市販後監視", url: "https://www.moh.gov.bn/", isPrimary: true }], notifiedBodies: { system: "なし（MOH/DPS が直接審査）", description: "Notified Body 制度は存在しない。参照国での認可が審査で重要視される。", bodies: [] }, deviceDefinition: { legalDefinition: "Medicines Order 2007 に基づく定義。ASEAN AMDDの定義に準拠。", scope: "IVDを含む。", notes: "ASEAN AMDD整合化に伴い定義の統一を推進中。" }, primaryLaw: { title: "Medicines Order 2007", originalTitle: "Medicines Order 2007", enacted: "2007", lastAmended: "要確認", url: "https://www.moh.gov.bn/", description: "医薬品・医療機器の規制に関する基本法令。" }, implementingRegulations: [{ title: "医療機器登録ガイドライン", date: "要確認", url: "https://www.moh.gov.bn/", description: "医療機器の登録手続き・必要書類を規定。ASEAN CSDTの採用を検討中。", category: "登録手続き" }], relatedLaws: [], classification: { system: "4クラス分類（Class A / B / C / D）— ASEAN AMDD 準拠", basis: "ASEAN Medical Device Directiveに基づくリスクベース分類。", classes: [{ name: "Class A", nameJa: "クラスA", riskLevel: "低リスク", description: "低リスク医療機器。", examples: ["ガーゼ", "聴診器", "舌圧子"], approvalPath: "製品届出" }, { name: "Class B", nameJa: "クラスB", riskLevel: "中低リスク", description: "中低リスク医療機器。", examples: ["注射器", "超音波診断装置"], approvalPath: "登録（標準）" }, { name: "Class C", nameJa: "クラスC", riskLevel: "中高リスク", description: "中高リスク医療機器。", examples: ["人工呼吸器", "透析装置"], approvalPath: "登録（詳細審査）" }, { name: "Class D", nameJa: "クラスD", riskLevel: "高リスク", description: "高リスク医療機器。", examples: ["心臓ペースメーカー", "冠動脈ステント"], approvalPath: "登録（詳細審査）" }], rules: ["ASEAN AMDD 分類規則に準拠", "GHTF/IMDRF 枠組みに基づく"], totalProductCodes: null }, conformityAssessment: { overview: "MOH/DPSに登録申請。参照国認可（CE、FDA、HSA等）の保有が審査で大きく考慮される。", routes: [{ name: "Product Registration", nameJa: "医療機器登録", applicableClasses: ["Class A / B / C / D"], description: "MOH/DPSに申請書類を提出。技術文書・参照国認可証明・品質証明・ラベリング等を審査。", subtypes: [], avgReviewTime: "要確認（数ヶ月〜）", fee: "要確認", url: "https://www.moh.gov.bn/" }] }, electronicSubmission: { system: "要確認", url: null, description: "電子申請システムの導入状況は要確認。", mandatory: false }, udi: { required: false, system: "未導入", description: "独自のUDI制度は未導入。ASEANレベルでの議論は進行中。", url: null, timeline: "要確認" }, postMarket: { adverseEventReporting: { system: "有害事象報告制度（MOH）", mandatory: true, url: "https://www.moh.gov.bn/", description: "MOHへの有害事象報告義務がある。報告様式・期限の詳細は要確認。" }, recalls: { authority: "MOH/DPS", description: "MOH/DPSがリコールを管理。", url: "https://www.moh.gov.bn/" }, surveillance: "MOH/DPSによる市販後監視。ASEAN連携による情報共有も推進。" }, certificateOfFreeSale: { available: false, issuingAuthority: null, name: null, description: "登録申請時に原産国のCFS提出が求められる場合がある。ブルネイからのCFS発行制度は要確認。", processingTime: null, url: null }, reimbursement: { system: "国営医療制度（政府負担）", authority: "MOH", description: "ブルネイの医療は政府が全額または大部分を負担。公的医療機関での医療機器調達は政府調達プロセスによる。", codingSystems: ["要確認"], url: "https://www.moh.gov.bn/" }, marketingRules: { authority: "MOH/DPS", description: "登録済み機器のみ販売・使用可能。", keyRules: ["登録済み機器のみ販売可", "虚偽広告の禁止"] }, mdsap: { status: "非参加", description: "ブルネイはMDSAPに参加していない。" }, internationalStandards: { iso13485: { accepted: true, notes: "ISO 13485認証はQMS証明として参照される。" }, iso14971: { accepted: true, notes: "リスクマネジメント規格として参照。" }, iec62304: { accepted: false, notes: "要確認。" }, iec60601: { accepted: true, notes: "医用電気機器の安全規格として参照。" }, others: [] }, recentDevelopments: [{ date: "2025-2026", title: "ASEAN AMDD 整合化の推進", description: "ASEAN Medical Device Directiveに基づく規制整合化が進行中。CSDTの導入・分類整合化を推進。" }], lastUpdated: "2026-04-02", verified: null },

  // =========================================================================
  // --- FJI（フィジー） ---
  // =========================================================================
  { code: "FJI", country: "フィジー", countryEn: "Republic of Fiji", region: "ASPAC", flag: "🇫🇯", legalSystemOverview: { type: "議会制共和制（Parliamentary Republic）", description: "保健医療サービス省が管轄。Medicines and Cosmetics Act 2007 / Regulations 2012が法的根拠。FPBSC（Fiji Pharmaceutical and Biomedical Services Centre）が医療製品の規制を担当。参照国認可（TGA、FDA、CE等）への依存度が高い。太平洋島嶼国の中では比較的整備された規制体制。", keyCharacteristics: ["FPBSC が医療機器規制を管轄", "Medicines and Cosmetics Act 2007が法的根拠", "参照国認可（TGA、FDA、CE等）への依存度が高い", "太平洋島嶼国の中では比較的整備された規制体制", "WHO/PIC/S連携による規制能力構築", "ローカル代理人の指定が必要"] }, authorities: [{ name: "FPBSC", fullName: "Fiji Pharmaceutical and Biomedical Services Centre", localName: null, role: "医療機器の登録・輸入管理・品質管理", url: "https://www.health.gov.fj/", isPrimary: true }, { name: "MOH Fiji", fullName: "Ministry of Health and Medical Services", localName: null, role: "医療政策全般・公衆衛生", url: "https://www.health.gov.fj/", isPrimary: false }], notifiedBodies: { system: "なし（FPBSC が直接審査）", description: "Notified Body 制度は存在しない。参照国認可が審査で重要視される。", bodies: [] }, deviceDefinition: { legalDefinition: "Medicines and Cosmetics Act 2007に基づく定義。詳細な法的定義文書の公開は限定的。", scope: "IVDを含む（要確認）。", notes: "WHO定義との整合を推進中。" }, primaryLaw: { title: "Medicines and Cosmetics Act 2007", originalTitle: "Medicines and Cosmetics Act 2007", enacted: "2007", lastAmended: "2012（Regulations）", url: "https://www.health.gov.fj/", description: "医薬品・化粧品・医療機器の規制に関する基本法。" }, implementingRegulations: [{ title: "Medicines and Cosmetics Regulations 2012", date: "2012", url: "https://www.health.gov.fj/", description: "法の施行規則。登録手続き・品質要件等を規定。", category: "施行規則" }], relatedLaws: [], classification: { system: "リスクベース分類（要確認）", basis: "参照国の分類を参考。独自の詳細な分類規則の公開は限定的。", classes: [{ name: "Low Risk", nameJa: "低リスク", riskLevel: "低", description: "低リスク医療機器。", examples: ["ガーゼ", "聴診器", "体温計"], approvalPath: "登録/届出" }, { name: "Medium Risk", nameJa: "中リスク", riskLevel: "中", description: "中リスク医療機器。", examples: ["超音波診断装置", "注射器"], approvalPath: "登録" }, { name: "High Risk", nameJa: "高リスク", riskLevel: "高", description: "高リスク医療機器。", examples: ["心臓ペースメーカー", "人工関節"], approvalPath: "登録（詳細審査）" }], rules: ["参照国分類を活用", "分類体系の詳細は要確認"], totalProductCodes: null }, conformityAssessment: { overview: "FPBSCに登録申請。参照国認可（TGA、FDA、CE等）の保有が審査の主要根拠。", routes: [{ name: "Product Registration", nameJa: "医療機器登録", applicableClasses: ["全クラス"], description: "FPBSCに申請書類を提出。参照国認可証明・技術文書・品質証明等を審査。", subtypes: [], avgReviewTime: "要確認", fee: "要確認", url: "https://www.health.gov.fj/" }] }, electronicSubmission: { system: "要確認", url: null, description: "電子申請システムの導入状況は要確認。", mandatory: false }, udi: { required: false, system: "未導入", description: "独自のUDI制度は未導入。", url: null, timeline: "未定" }, postMarket: { adverseEventReporting: { system: "有害事象報告制度（FPBSC）", mandatory: true, url: "https://www.health.gov.fj/", description: "有害事象の報告義務がある。報告制度の詳細は要確認。" }, recalls: { authority: "FPBSC / MOH", description: "FPBSC/MOHがリコールを管理。参照国のリコール情報も監視。", url: "https://www.health.gov.fj/" }, surveillance: "FPBSC/MOHによる市販後監視。参照国のアラート情報を活用。" }, certificateOfFreeSale: { available: false, issuingAuthority: null, name: null, description: "登録申請時に原産国のCFS提出が求められる場合がある。フィジーからのCFS発行制度は要確認。", processingTime: null, url: null }, reimbursement: { system: "公的医療制度（政府負担）", authority: "MOH", description: "フィジーの公的医療は政府が大部分を負担。医療機器の調達は政府調達プロセスによる。", codingSystems: ["要確認"], url: "https://www.health.gov.fj/" }, marketingRules: { authority: "FPBSC", description: "登録済み機器のみ販売可能。", keyRules: ["登録済み機器のみ販売可", "虚偽広告の禁止"] }, mdsap: { status: "非参加", description: "フィジーはMDSAPに参加していない。" }, internationalStandards: { iso13485: { accepted: true, notes: "ISO 13485認証は品質証明として参照される。" }, iso14971: { accepted: true, notes: "リスクマネジメント規格として参照。" }, iec62304: { accepted: false, notes: "要確認。" }, iec60601: { accepted: true, notes: "医用電気機器の安全規格として参照。" }, others: [] }, recentDevelopments: [{ date: "2025-2026", title: "規制能力の強化", description: "WHO/WPRO支援の下で医療機器規制の能力構築を推進中。太平洋島嶼国間の規制協力も議論されている。" }], lastUpdated: "2026-04-02", verified: null },

  // =========================================================================
  // --- KAZ（カザフスタン） ---
  // =========================================================================
  { code: "KAZ", country: "カザフスタン", countryEn: "Republic of Kazakhstan", region: "ASPAC", flag: "🇰🇿", legalSystemOverview: { type: "大統領制共和制（Presidential Republic）— EAEU加盟国", description: "カザフスタンの医療機器規制はEAEU（ユーラシア経済連合）の統一規制枠組みの下で運用される。TR EAEU 038/2016に基づき、統一登録制度・統一分類・適合性評価が適用される。国内ではNCDM（National Center for Expertise of Medicines and Medical Devices）が規制当局。EAEU統一登録証明書により加盟5カ国（ロシア、ベラルーシ、カザフスタン、キルギス、アルメニア）での流通が可能。", keyCharacteristics: ["EAEU 統一規制（TR EAEU 038/2016）が主要な規制枠組み", "EAEU 統一登録証明書による加盟国間での流通", "NCDM が国内の登録・審査を担当", "リスクベースの4クラス分類（Class 1 / 2a / 2b / 3）— EAEU統一分類", "適合性評価はEAEU指定の適合性評価機関が実施", "国内法と EAEU 統一法の二重構造（移行期間あり）", "2022年以降、EAEU統一登録への完全移行を推進"] }, authorities: [{ name: "NCDM", fullName: "National Center for Expertise of Medicines and Medical Devices", localName: "\u0200лтты\u049b д\u04d9рі-д\u04d9рмек сараптамасы орталы\u0493ы", role: "医療機器の登録審査・適合性評価・市販後監視", url: "https://www.ndda.kz/", isPrimary: true }, { name: "MOH Kazakhstan", fullName: "Ministry of Health of the Republic of Kazakhstan", localName: "\u049a\u0430\u0437\u0430\u049b\u0441\u0442\u0430\u043d \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0441\u044b\u043d\u044b\u04a3 \u0414\u0435\u043d\u0441\u0430\u0443\u043b\u044b\u049b \u0441\u0430\u049b\u0442\u0430\u0443 \u043c\u0438\u043d\u0438\u0441\u0442\u0440\u043b\u0456\u0433\u0456", role: "医療政策全般・規制監督", url: "https://www.gov.kz/memleket/entities/dsm", isPrimary: false }, { name: "EEC", fullName: "Eurasian Economic Commission", localName: "\u0415\u0432\u0440\u0430\u0437\u0438\u0439\u0441\u043a\u0430\u044f \u044d\u043a\u043e\u043d\u043e\u043c\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043a\u043e\u043c\u0438\u0441\u0441\u0438\u044f", role: "EAEU統一規制の策定・管理（超国家機関）", url: "https://eec.eaeunion.org/", isPrimary: false }], notifiedBodies: { system: "EAEU適合性評価機関（認定制）", description: "EAEUの枠組みで認定された適合性評価機関が技術文書審査・試験・QMS監査を実施。", bodies: [{ name: "EAEU認定適合性評価機関（カザフスタン国内）", id: "要確認", url: "https://www.ndda.kz/" }] }, deviceDefinition: { legalDefinition: "TR EAEU 038/2016に基づく定義。疾病の診断・治療・予防・監視・軽減・代償等を目的とする器具・装置・機器・ソフトウェア・材料等。", scope: "IVDを含む（附属書で規定）。", notes: "GHTF/IMDRF定義に概ね準拠。" }, primaryLaw: { title: "TR EAEU 038/2016（EAEU医療機器安全性に関する技術規則）", originalTitle: "\u0422\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0440\u0435\u0433\u043b\u0430\u043c\u0435\u043d\u0442 \u0415\u0410\u042d\u0421 \u00ab\u041e \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438 \u043c\u0435\u0434\u0438\u0446\u0438\u043d\u0441\u043a\u0438\u0445 \u0438\u0437\u0434\u0435\u043b\u0438\u0439\u00bb", enacted: "2016\uff08\u63a1\u629e\uff09/ 2021\uff08\u767a\u52b9\uff09", lastAmended: "\u968f\u6642\u6539\u6b63", url: "https://eec.eaeunion.org/", description: "EAEU加盟国に共通の医療機器規制。分類・登録・適合性評価・表示・市販後監視を包括的に規定。" }, implementingRegulations: [{ title: "EAEU医療機器登録手続き規則", date: "2021", url: "https://eec.eaeunion.org/", description: "EAEU統一登録の手続き・必要書類・審査プロセスを規定。", category: "登録手続き" }, { title: "EAEU医療機器分類規則", date: "2021", url: "https://eec.eaeunion.org/", description: "EAEU統一分類規則。リスクベースの4クラス分類。", category: "分類" }, { title: "カザフスタン国内法（Code on People's Health）", date: "2020改正", url: "https://www.gov.kz/memleket/entities/dsm", description: "国内の医療機器規制基本法。EAEU統一法と並行適用。", category: "国内法" }], relatedLaws: [{ title: "EAEU条約（Treaty on the Eurasian Economic Union）", category: "国際条約", enacted: "2015", url: "https://eec.eaeunion.org/", relevance: "EAEU統一市場の法的基盤。" }], classification: { system: "4クラス分類（Class 1 / 2a / 2b / 3）— EAEU統一分類", basis: "TR EAEU 038/2016に基づくリスクベース分類。GHTF/IMDRF枠組みに準拠。", classes: [{ name: "Class 1", nameJa: "クラス1", riskLevel: "低リスク", description: "低リスク医療機器。", examples: ["ガーゼ", "聴診器", "手術用手袋", "車椅子"], approvalPath: "EAEU登録（簡易手続き/自己宣言）" }, { name: "Class 2a", nameJa: "クラス2a", riskLevel: "中低リスク", description: "中低リスク医療機器。", examples: ["注射器", "超音波診断装置", "歯科材料"], approvalPath: "EAEU登録（適合性評価機関審査）" }, { name: "Class 2b", nameJa: "クラス2b", riskLevel: "中高リスク", description: "中高リスク医療機器。", examples: ["人工呼吸器", "透析装置", "歯科インプラント"], approvalPath: "EAEU登録（適合性評価機関審査 + 臨床評価）" }, { name: "Class 3", nameJa: "クラス3", riskLevel: "高リスク", description: "高リスク医療機器。", examples: ["心臓ペースメーカー", "冠動脈ステント", "人工心臓弁"], approvalPath: "EAEU登録（詳細審査 + 臨床試験が必要な場合あり）" }], rules: [{ id: "TR EAEU 038/2016 分類規則", description: "EAEU統一分類規則。意図する用途・侵襲性・使用期間・能動/非能動の区分等に基づきクラスを決定。18の分類規則。", url: "https://eec.eaeunion.org/" }], totalProductCodes: null }, conformityAssessment: { overview: "EAEU統一登録制度に基づく。EAEU認定適合性評価機関による技術文書審査・QMS監査・試験が実施される。統一登録証明書はEAEU加盟5カ国で有効。", routes: [{ name: "EAEU Unified Registration", nameJa: "EAEU統一登録", applicableClasses: ["Class 1 / 2a / 2b / 3"], description: "参照国の規制当局に申請。適合性評価機関審査後、登録証明書を発行。加盟国全域で有効。", subtypes: ["新規登録", "変更登録", "更新"], avgReviewTime: "50〜210営業日（クラスによる）", fee: "要確認（参照国による）", url: "https://eec.eaeunion.org/" }, { name: "National Registration (Legacy)", nameJa: "国内登録（レガシー）", applicableClasses: ["全クラス"], description: "EAEU統一登録移行前の国内登録。既存登録は有効期限まで有効だが新規はEAEU統一が原則。", subtypes: [], avgReviewTime: "要確認", fee: "要確認", url: "https://www.ndda.kz/" }] }, electronicSubmission: { system: "EAEU統一情報システム（開発中）", url: "https://eec.eaeunion.org/", description: "EAEU統一電子登録システム開発・導入中。", mandatory: false }, udi: { required: false, system: "EAEU UDI制度（導入予定）", description: "EAEU統一UDI制度検討中。TR EAEU 038/2016にUDI要件枠組みあり。完全実施時期は要確認。", url: null, timeline: "EAEU統一スケジュールに準拠（要確認）" }, postMarket: { adverseEventReporting: { system: "EAEU統一ビジランス + 国内ビジランス", mandatory: true, url: "https://www.ndda.kz/", description: "EAEU統一ビジランスおよび国内NCDM/保健省への報告義務。有害事象・FSCAの報告義務あり。" }, recalls: { authority: "NCDM / MOH Kazakhstan / EEC", description: "NCDMおよび保健省が管理。EAEU加盟国間情報共有メカニズムあり。", url: "https://www.ndda.kz/" }, surveillance: "NCDM/保健省による市販後監視。EAEU統一ビジランスと連携。" }, certificateOfFreeSale: { available: true, issuingAuthority: "NCDM / MOH", name: "Certificate of Free Sale", description: "NCDM/保健省が登録済み機器についてCFSを発行。EAEU統一登録証明書もCFSとして機能する場合あり。", processingTime: "要確認", url: "https://www.ndda.kz/" }, reimbursement: { system: "社会健康保険（OSMS）+ 国家保証医療パッケージ（GOBMP）", authority: "保健省 / FSMS", description: "2020年導入のOSMSおよびGOBMPを通じて医療サービス提供。調達は公的入札制。SK-Pharmaciaが国家調達を管理。", codingSystems: ["要確認"], url: "https://www.gov.kz/memleket/entities/dsm" }, marketingRules: { authority: "NCDM / MOH", description: "EAEU統一規則および国内法に基づく。", keyRules: ["EAEU統一登録済み機器のみ販売可", "虚偽・誇大広告の禁止", "ラベリングはEAEU規則に準拠（ロシア語・カザフ語）"] }, mdsap: { status: "非参加", description: "カザフスタン（EAEU）はMDSAPに参加していない。" }, internationalStandards: { iso13485: { accepted: true, notes: "ISO 13485はEAEU統一規則でQMS要件として要求。GOST R ISO 13485も適用。" }, iso14971: { accepted: true, notes: "EAEU規則でリスクマネジメント要件として参照。GOST R ISO 14971。" }, iec62304: { accepted: true, notes: "ソフトウェア医療機器に参照。GOST R IEC 62304。" }, iec60601: { accepted: true, notes: "GOST R IEC 60601シリーズとして採用。" }, others: [{ name: "GOST（ГОСТ）規格", notes: "旧ソ連の規格体系。EAEU加盟国ではISO/IEC規格のGOST版が広く使用。" }] }, recentDevelopments: [{ date: "2024-2026", title: "EAEU統一登録への完全移行", description: "移行が進行中。移行期間延長が繰り返され、完全移行時期は流動的。" }, { date: "2025", title: "デジタルヘルス規制の整備", description: "SaMD・AI/ML医療機器の規制枠組み検討がEAEUレベルで進行中。" }, { date: "2025", title: "国産医療機器産業の振興", description: "国産開発・製造を政策的に推進。ローカリゼーション要件の導入も議論。" }], lastUpdated: "2026-04-02", verified: null },

  // =========================================================================
  // --- UZB（ウズベキスタン） ---
  // =========================================================================
  { code: "UZB", country: "ウズベキスタン", countryEn: "Republic of Uzbekistan", region: "ASPAC", flag: "🇺🇿", legalSystemOverview: { type: "大統領制共和制（Presidential Republic）", description: "保健省傘下のADPI（Agency for Development of Pharmaceutical Industry）が管轄。規制制度は近年の改革で近代化が進められ、国際基準との整合化を推進中。EAEUには非加盟だがオブザーバー国として参加し、EAEU規制との整合化を検討中。", keyCharacteristics: ["保健省/ADPI が医療機器規制を管轄", "医療機器登録制度を運用", "リスクベース分類を導入", "EAEU非加盟だがオブザーバー国として参加", "近年の改革で規制制度の近代化を推進", "参照国認可（CE、FDA等）が審査で参照される", "ローカル代理人の指定が必要"] }, authorities: [{ name: "ADPI", fullName: "Agency for Development of Pharmaceutical Industry under the Ministry of Health", localName: "Farmatsevtika sanoatini rivojlantirish agentligi", role: "医療機器の登録・品質管理・市場監視", url: "https://www.pharmagency.uz/", isPrimary: true }, { name: "MOH Uzbekistan", fullName: "Ministry of Health of the Republic of Uzbekistan", localName: "O\u2019zbekiston Respublikasi Sog\u2019liqni saqlash vazirligi", role: "医療政策全般・規制監督", url: "https://ssv.uz/", isPrimary: false }], notifiedBodies: { system: "なし（ADPI が直接審査）", description: "Notified Body 制度は存在しない。ADPI が直接、登録審査を行う。", bodies: [] }, deviceDefinition: { legalDefinition: "ウズベキスタンの医療機器関連法令に基づく定義。詳細な法的定義は要確認。", scope: "IVDを含む。", notes: "国際定義（GHTF/IMDRF）との整合化を推進中。" }, primaryLaw: { title: "医薬品・医療機器に関する法律および大統領令", originalTitle: "要確認", enacted: "要確認", lastAmended: "随時改正（大統領令による制度改革が頻繁）", url: "https://www.pharmagency.uz/", description: "医薬品・医療機器の規制に関する法的根拠。大統領令により制度改革が行われることが多い。" }, implementingRegulations: [{ title: "医療機器登録手続き規則", date: "要確認", url: "https://www.pharmagency.uz/", description: "医療機器の登録に必要な書類・手続きを規定。", category: "登録手続き" }, { title: "大統領令による医療改革関連規定", date: "各年", url: "https://www.lex.uz/", description: "大統領令による医療機器規制の近代化・改革措置。", category: "制度改革" }], relatedLaws: [{ title: "保健に関する法律（Law on the Protection of Citizens\u2019 Health）", category: "保健基本法", enacted: "要確認", url: "https://ssv.uz/", relevance: "国民の健康保護に関する基本法。" }], classification: { system: "リスクベース分類（要確認）", basis: "保健省/ADPI規則に基づく分類。国際基準との整合化を推進中。", classes: [{ name: "Low Risk", nameJa: "低リスク", riskLevel: "低", description: "低リスク医療機器。", examples: ["ガーゼ", "聴診器", "体温計"], approvalPath: "登録（簡易）" }, { name: "Medium Risk", nameJa: "中リスク", riskLevel: "中", description: "中リスク医療機器。", examples: ["超音波診断装置", "注射器"], approvalPath: "登録（標準）" }, { name: "High Risk", nameJa: "高リスク", riskLevel: "高", description: "高リスク医療機器。", examples: ["心臓ペースメーカー", "人工関節"], approvalPath: "登録（詳細審査）" }], rules: ["ADPI規則に基づく分類", "国際基準との整合化を推進中", "分類体系の詳細は要確認"], totalProductCodes: null }, conformityAssessment: { overview: "ADPIに登録申請。技術文書、品質証明（ISO 13485等）、CFS、参照国認可証明等が必要。近年の改革で手続きの簡素化・迅速化が図られている。", routes: [{ name: "Medical Device Registration", nameJa: "医療機器登録", applicableClasses: ["全クラス"], description: "ADPIに申請書類一式を提出。技術文書・CFS・品質証明・臨床データ・ラベリング等を審査。", subtypes: ["新規登録", "変更登録", "更新"], avgReviewTime: "要確認（90〜180日程度）", fee: "要確認", url: "https://www.pharmagency.uz/" }] }, electronicSubmission: { system: "開発中", url: "https://www.pharmagency.uz/", description: "電子申請システムの導入を推進中。デジタル政府化の一環として医療機器登録のオンライン化を計画。", mandatory: false }, udi: { required: false, system: "未導入", description: "独自のUDI制度は未導入。", url: null, timeline: "未定" }, postMarket: { adverseEventReporting: { system: "有害事象報告制度（ADPI/MOH）", mandatory: true, url: "https://www.pharmagency.uz/", description: "有害事象の報告義務がある。ファーマコビジランス/テクノビジランス制度の強化を推進中。" }, recalls: { authority: "ADPI / MOH", description: "ADPI/MOHがリコールを管理。", url: "https://www.pharmagency.uz/" }, surveillance: "ADPI/MOHによる市販後監視。制度の強化を推進中。" }, certificateOfFreeSale: { available: false, issuingAuthority: null, name: null, description: "登録申請時に原産国のCFS提出が求められる。ウズベキスタンからのCFS発行制度は要確認。", processingTime: null, url: null }, reimbursement: { system: "公的医療制度 + 民間保険（発展途上）", authority: "保健省 / SSIF", description: "公的医療は政府予算により運営。医療保険制度の導入・拡大を推進中。医療機器の調達は公的入札が中心。", codingSystems: ["要確認"], url: "https://ssv.uz/" }, marketingRules: { authority: "ADPI / MOH", description: "登録済み機器のみ販売可能。", keyRules: ["登録済み機器のみ販売可", "虚偽・誇大広告の禁止"] }, mdsap: { status: "非参加", description: "ウズベキスタンはMDSAPに参加していない。" }, internationalStandards: { iso13485: { accepted: true, notes: "ISO 13485認証はQMS証明として参照される。" }, iso14971: { accepted: true, notes: "リスクマネジメント規格として参照。" }, iec62304: { accepted: false, notes: "要確認。" }, iec60601: { accepted: true, notes: "医用電気機器の安全規格として参照。O\u2019zDSt（ウズベキスタン国家規格）としても採用。" }, others: [{ name: "O\u2019zDSt（ウズベキスタン国家規格）", notes: "ウズベキスタン独自の国家規格。ISO/IEC規格の国内版を順次採用中。" }] }, recentDevelopments: [{ date: "2024-2026", title: "医療機器規制の近代化", description: "大統領令に基づく医療制度改革の一環として、医療機器規制の近代化・国際整合化を推進。ADPIの機能強化。" }, { date: "2025", title: "EAEUとの整合化検討", description: "EAEUオブザーバー国として、EAEU医療機器規制（TR EAEU 038/2016）との整合化を検討中。加盟の可能性も議論。" }, { date: "2025", title: "医療産業の振興", description: "政府は医療機器の国産化・ローカル生産を政策的に推進。Free Economic Zoneでの医療機器製造投資を奨励。" }], lastUpdated: "2026-04-02", verified: null },

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
