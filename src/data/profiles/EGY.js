// エジプト (Egypt)
export default {
  "code": "EGY",
  "country": "エジプト",
  "countryEn": "Egypt",
  "region": "Middle East & Africa",
  "flag": "🇪🇬",
  "legalSystemOverview": {
    "type": "中央集権制（Centralized system）",
    "description": "エジプトの医療機器規制はEDA（Egyptian Drug Authority）の医療機器中央管理局（Central Administration of Medical Devices）が管轄する。2019年制定の Law No. 151 of 2019 が EDA の設立根拠法であり、その施行規則である Decree 777/2020 が登録手続・分類・市販後監視等の詳細を規定。EU MDR に整合した4クラス分類（Class I / IIa / IIb / III）を採用。2025年以降、CE マークまたは FDA クリアランスを持つ機器向けの Fast-Track 経路を導入。",
    "keyCharacteristics": [
      "EDA（Egyptian Drug Authority）医療機器中央管理局による一元的規制",
      "EU MDR に整合したリスクベースの4クラス分類（Class I / IIa / IIb / III）",
      "Egyptian Registration Holder（ERH）の任命が海外製造業者に義務",
      "MeDevice オンラインポータルによる電子申請",
      "登録有効期間: 医療機器10年 / IVD 5年",
      "Fast-Track 経路の導入（CE/FDA承認機器向け）"
    ]
  },
  "authorities": [
    {
      "name": "EDA",
      "fullName": "Egyptian Drug Authority — Central Administration of Medical Devices",
      "localName": "هيئة الدواء المصرية — الإدارة المركزية للأجهزة والمستلزمات الطبية",
      "role": "医療機器の登録・分類・市販後監視・ビジランス・施設査察・広告規制。主管当局。",
      "url": "https://www.edaegypt.gov.eg/en/",
      "isPrimary": true
    },
    {
      "name": "UHIA",
      "fullName": "Universal Health Insurance Authority",
      "localName": "الهيئة العامة للتأمين الصحي الشامل",
      "role": "国民皆保険制度の管理・医療サービスの償還管理",
      "url": "https://www.uhia.gov.eg/",
      "isPrimary": false
    },
    {
      "name": "UPA",
      "fullName": "Egyptian Authority for Unified Procurement, Medical Supply and the Management of Medical Technology",
      "localName": null,
      "role": "医療技術の統一調達・HTA（医療技術評価）の実施",
      "url": "https://www.upa.gov.eg/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "なし（EDA が直接審査）",
    "description": "エジプトでは欧州型のNotified Body制度は存在しない。EDA医療機器中央管理局が直接、技術文書を審査し登録を交付する。ただし参照市場（EU/FDA/TGA等）の認可を簡略審査の条件として活用可能。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "Law No. 151 of 2019 および Decree 777/2020 に定義。疾病の診断・治療・予防・監視・軽減等を目的とする機器・装置・器具・材料・ソフトウェア等で、主たる意図する作用が薬理学的・免疫学的・代謝的手段によらないもの。",
    "scope": "IVD（体外診断用医療機器）も適用範囲に含まれる。SaMDも対象。",
    "notes": "定義はEU MDRの定義に概ね整合。EDAはAI分類ツールを導入し、機器分類の効率化を推進。"
  },
  "primaryLaw": {
    "title": "Law No. 151 of 2019 — Establishing the Egyptian Drug Authority",
    "originalTitle": "قانون رقم 151 لسنة 2019 بإصدار قانون إنشاء هيئة الدواء المصرية",
    "enacted": "2019",
    "lastAmended": "要確認",
    "url": "https://www.trade.gov/market-intelligence/egypt-registration-medical-devices",
    "description": "EDA（Egyptian Drug Authority）の設立根拠法。医薬品・医療機器・化粧品の規制・監督・品質管理に関するEDAの権限を規定。登録・ライセンス・査察・監督の権限をEDAに一元化。"
  },
  "implementingRegulations": [
    {
      "title": "Decree 777/2020 — Executive Regulations of Law No. 151/2019",
      "date": "2020",
      "url": "https://resource.ddregpharma.com/blogs/how-to-register-a-medical-device-in-egypt-regulatory-pathways-with-the-eda/",
      "description": "Law 151/2019の施行規則。医療機器の分類・登録手続・必要書類・市販後監視・査察等の詳細を規定。",
      "category": "施行規則"
    },
    {
      "title": "Regulatory Guideline for Procedures of Registering Imported and Local Medical Devices Holding International Quality Certificates",
      "date": "2023",
      "url": "https://www.edaegypt.gov.eg/media/i3wb2tdn/5_regulatory-guideline-for-procedures-of-registraing-imported-and-local-medical-devices-holding-international-quality-certificates.pdf",
      "description": "国際品質認証（CE/FDA等）を保有する輸入・国産医療機器の登録手続ガイドライン。",
      "category": "登録手続"
    },
    {
      "title": "Guidelines on the Vigilance System for Medical Devices",
      "date": "要確認",
      "url": "https://medenvoyglobal.com/blog/navigating-egypts-medical-device-market-a-guide-to-registration/",
      "description": "医療機器のビジランスシステムに関するガイドライン。有害事象報告・リコール・FSCA等の手続きを規定。",
      "category": "ビジランス"
    }
  ],
  "relatedLaws": [
    {
      "title": "Universal Health Insurance Law No. 2 of 2018",
      "category": "医療保険",
      "enacted": "2018",
      "url": "https://sis.gov.eg/en/egypt/society/health-care/universal-health-insurance-law-no-2-of-2018/",
      "relevance": "国民皆保険制度の法的基盤。UHIA・UPA・GAHCの設立根拠。医療技術の償還決定に影響。"
    },
    {
      "title": "Personal Data Protection Law No. 151 of 2020",
      "category": "データ保護",
      "enacted": "2020",
      "url": "https://www.dlapiperdataprotection.com/index.html?t=law&c=EG",
      "relevance": "個人情報保護法。コネクテッドデバイス・SaMDが取り扱う個人医療情報に適用。"
    }
  ],
  "classification": {
    "system": "4クラス制（Class I / IIa / IIb / III）— EU MDR整合",
    "basis": "EU MDRの分類ルールに概ね整合したリスクベース分類。参照市場の分類も考慮し、いずれかの参照市場で上位クラスに分類されている場合はその分類を採用する傾向。",
    "classes": [
      {
        "name": "Class I",
        "nameJa": "クラスI",
        "riskLevel": "低",
        "description": "低リスクの非侵襲的機器。",
        "examples": [
          "弾性包帯",
          "聴診器",
          "車椅子",
          "手術用手袋",
          "舌圧子"
        ],
        "approvalPath": "登録申請"
      },
      {
        "name": "Class IIa",
        "nameJa": "クラスIIa",
        "riskLevel": "中低",
        "description": "中低リスク機器。",
        "examples": [
          "超音波診断装置",
          "補聴器",
          "歯科用材料",
          "血圧計",
          "注射針"
        ],
        "approvalPath": "登録申請"
      },
      {
        "name": "Class IIb",
        "nameJa": "クラスIIb",
        "riskLevel": "中高",
        "description": "中高リスク機器。ビジランス部門の審査が関与する場合あり。",
        "examples": [
          "人工呼吸器",
          "輸液ポンプ",
          "透析装置",
          "X線装置",
          "コンタクトレンズ"
        ],
        "approvalPath": "登録申請（ビジランス審査あり）"
      },
      {
        "name": "Class III",
        "nameJa": "クラスIII",
        "riskLevel": "高",
        "description": "最高リスク機器。詳細審査＋臨床データが必要な場合あり。",
        "examples": [
          "人工心臓弁",
          "埋込み型除細動器",
          "薬剤溶出ステント",
          "人工関節",
          "人工内耳"
        ],
        "approvalPath": "登録申請（詳細審査＋臨床評価）"
      }
    ],
    "rules": [
      "EU MDRの分類ルールに概ね整合",
      "参照市場の分類を考慮し、最も高いクラスを適用する傾向",
      "EDAのAI分類ツールが分類補助に利用可能",
      "IVDも適用（別途分類ルール）"
    ],
    "totalProductCodes": "GMDN（Global Medical Device Nomenclature）を参照"
  },
  "conformityAssessment": {
    "overview": "全クラスの医療機器はEDAへの登録が必要。登録有効期間は医療機器10年、IVD 5年。海外製造業者はERH（Egyptian Registration Holder）の任命が必須。ERHがMeDeviceポータル経由で申請を提出。国際品質認証（CE/FDA/TGA等）を持つ機器は簡略手続が可能。2025年以降、Fast-Track経路を導入。",
    "routes": [
      {
        "name": "Standard Registration",
        "nameJa": "標準登録（Regular Track）",
        "applicableClasses": [
          "Class I",
          "Class IIa",
          "Class IIb",
          "Class III"
        ],
        "description": "全クラスの医療機器に適用。技術文書・品質認証（ISO 13485等）・CFS・アラビア語/英語ラベリングを提出。国際品質認証保有機器は簡略審査。",
        "subtypes": [
          {
            "name": "新規登録",
            "description": "初回の登録申請。全必要書類の提出が必要。"
          },
          {
            "name": "登録更新（医療機器10年/IVD 5年）",
            "description": "有効期限前に更新申請。"
          },
          {
            "name": "変更申請",
            "description": "製品仕様・製造所・ラベリング等の変更時。"
          }
        ],
        "avgReviewTime": "公式: 4〜9ヶ月（クラス・書類の完全性による） / 実績: 6〜12ヶ月",
        "avgReviewTimeSource": "https://omcmedical.com/egypt-medical-device-registration",
        "fee": "Regular Track: USD 450/機器 / Fast Track: USD 1,280/機器",
        "feeSource": "https://omcmedical.com/egypt-medical-device-registration",
        "url": "http://medevice.edaegypt.gov.eg"
      },
      {
        "name": "Fast-Track Registration",
        "nameJa": "迅速登録（Fast Track）",
        "applicableClasses": [
          "Class I",
          "Class IIa",
          "Class IIb",
          "Class III"
        ],
        "description": "CE マークまたは FDA クリアランスを持つ機器向けの迅速審査経路。2025年以降に導入。クリティカルユース機器が優先。",
        "subtypes": [],
        "avgReviewTime": "3〜4ヶ月",
        "avgReviewTimeSource": "https://medenvoyglobal.com/blog/navigating-egypts-medical-device-market-a-guide-to-registration/",
        "fee": "USD 1,280/機器",
        "feeSource": "https://omcmedical.com/egypt-medical-device-registration",
        "url": "http://medevice.edaegypt.gov.eg"
      }
    ]
  },
  "electronicSubmission": {
    "system": "MeDevice ポータル",
    "url": "http://medevice.edaegypt.gov.eg",
    "description": "全ての登録申請はEDAのオンラインポータル「MeDevice」経由でERHが提出。技術文書・品質認証・CFS等のアップロードが必要。紙ベースの申請は不可。",
    "mandatory": true
  },
  "udi": {
    "required": false,
    "system": "部分的導入（UDI ラベリング推奨）",
    "description": "2026年4月時点で、エジプト独自の包括的UDI制度は正式に導入されていないが、ラベリングにUDI情報を含めることが推奨されている。アラビア語・英語の二言語ラベリングが必須。",
    "url": "https://arazygroup.com/ivd-medical-device-registration-egypt/",
    "timeline": "未定（包括的UDI制度の正式導入スケジュールは未公表）"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "EDA 医療機器安全ユニット / エジプトファーマコビジランスセンター",
      "mandatory": true,
      "url": "https://medenvoyglobal.com/blog/navigating-egypts-medical-device-market-a-guide-to-registration/",
      "description": "製造業者・ERH・医療従事者が有害事象をEDAに報告する義務を負う。グローバルリコール・FSN・FSCAもEDAへの報告が必須。Law 151/2019のビジランスガイドラインに基づき、所定の期間内に報告を提出。"
    },
    "recalls": {
      "authority": "EDA",
      "description": "EDAがリコール・FSCA（Field Safety Corrective Action）を監督。必要に応じてERHを通じた市場からの製品回収を命令。",
      "url": "https://resource.ddregpharma.com/blogs/how-to-register-a-medical-device-in-egypt-regulatory-pathways-with-the-eda/"
    },
    "surveillance": "ERHは市販後ビジランス義務を負い、登録時にビジランス規制遵守の宣言書を提出。Class IIb/III機器はビジランス部門の特別審査対象。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "輸出国の規制当局（EDA登録申請時に提出が必要）",
    "name": "Certificate of Free Sale (CFS)",
    "description": "EDA登録申請時に、原産国または参照市場の規制当局が発行するCFSの提出が求められる。CE証明書やFDA承認書がCFSの代替として受容される場合あり。",
    "processingTime": "輸出国側の手続きによる",
    "url": "https://operonstrategist.com/en-eg/services/regulatory-approvals/eda-registration/"
  },
  "reimbursement": {
    "system": "国民皆保険制度（Universal Health Insurance, UHI）— 段階的導入中",
    "authority": "UHIA（Universal Health Insurance Authority）/ UPA",
    "description": "2018年の Universal Health Insurance Law No. 2 に基づき、国民皆保険制度を段階的に導入中（2032年完全実施予定）。UPA（統一調達・医療技術管理庁）がHTA（医療技術評価）を実施し、UHIA が償還決定。UHI の給付パッケージは3,000以上の医療サービスを網羅し、補綴具・手術・画像診断等を含む。医療機器の個別償還は発展途上。",
    "codingSystems": [
      "要確認（エジプト固有の医療機器償還コード体系は発展途上）"
    ],
    "url": "https://www.uhia.gov.eg/"
  },
  "marketingRules": {
    "authority": "EDA",
    "description": "Law 151/2019 および関連規制に基づき、EDA未登録機器の広告・販売は禁止。ラベリングはアラビア語・英語の二言語が必須。",
    "keyRules": [
      "EDA登録なしの医療機器の広告・販売は禁止",
      "ラベリング: アラビア語・英語の二言語必須",
      "使用説明書（IFU）はアラビア語訳が必要",
      "誇大・虚偽・誤解を招く広告の禁止"
    ]
  },
  "mdsap": {
    "status": "非参加（Not participating）",
    "description": "エジプトはMDSAPの正式参加国・オブザーバー・アフィリエイトメンバーのいずれにも該当しない（2026年4月時点）。MDSAP監査報告書はEDAの規制要件を代替せず、独立した登録申請が必要。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "登録申請の前提条件。ISO 13485認証または同等の国際品質認証が必須。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "リスクマネジメント。技術文書のリスク評価に適用。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "ソフトウェアライフサイクル。SaMD申請に適用。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "医用電気機器の安全・性能要求。"
    },
    "others": [
      {
        "name": "ISO 10993シリーズ（生物学的安全性評価）",
        "notes": "生体接触医療機器の生物学的安全性評価に適用。"
      },
      {
        "name": "IEC 62366（ユーザビリティエンジニアリング）",
        "notes": "医療機器のユーザビリティ評価に参照。"
      }
    ]
  },
  "recentDevelopments": [
    {
      "date": "2025",
      "title": "Fast-Track 登録経路の導入",
      "description": "CE マークまたは FDA クリアランスを持つ機器向けの迅速登録経路を導入。クリティカルユース機器が優先。"
    },
    {
      "date": "2025",
      "title": "AI分類ツールの導入",
      "description": "EDAがMeDeviceポータル上にAI搭載の分類ツールを導入。医療機器の分類判定を自動化・効率化。"
    },
    {
      "date": "2020",
      "title": "Decree 777/2020（施行規則）発出",
      "description": "Law 151/2019の施行規則が発出。分類・登録手続・市販後監視の詳細を規定。"
    },
    {
      "date": "2019",
      "title": "Law No. 151 of 2019 制定 — EDA設立",
      "description": "Egyptian Drug Authority（EDA）の設立根拠法。旧規制体制からEDAへの移行。医療機器・医薬品・化粧品の規制を一元化。"
    }
  ],
  "lastUpdated": "2026-04-06",
  "verified": "2026-04-06"
};
