// ケニア (Kenya)
export default {
  "code": "KEN",
  "country": "ケニア",
  "countryEn": "Kenya",
  "region": "Middle East & Africa",
  "flag": "🇰🇪",
  "legalSystemOverview": {
    "type": "中央集権制（Centralized system）",
    "description": "ケニアの医療機器規制はPPB（Pharmacy and Poisons Board）が管轄する。Cap 244（Pharmacy and Poisons Act）を根拠法とし、医薬品・医療機器の両方を規制。4クラス分類（Class A/B/C/D）を採用し、リスクベースの市販前審査を実施。2024年3月にMDSAPアフィリエイトメンバーとなり、国際的な規制整合を推進。",
    "keyCharacteristics": [
      "PPBによる一元的な規制体制",
      "リスクベースの4クラス分類（Class A/B/C/D）",
      "Cap 244（Pharmacy and Poisons Act）が根拠法",
      "FIFO/Fast Track/Expedited の3つの審査経路",
      "MDSAPアフィリエイトメンバー（2024年3月加入）",
      "東アフリカ共同体（EAC）との規制調和を推進"
    ]
  },
  "authorities": [
    {
      "name": "PPB",
      "fullName": "Pharmacy and Poisons Board",
      "localName": null,
      "role": "医療機器の登録・市販後監視・査察・リコール管理。主管当局。製品評価登録部門（DPER）が実務を担当。",
      "url": "https://web.pharmacyboardkenya.org/",
      "isPrimary": true
    }
  ],
  "notifiedBodies": {
    "system": "なし（PPB が直接審査）",
    "description": "ケニアではNotified Body制度は存在しない。PPBが直接、医療機器の登録審査を実施する。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "Cap 244およびPPBガイダンスに定義。疾病の診断・治療・予防・監視・軽減等を目的とする機器・装置・器具・材料・ソフトウェア等で、主たる意図する作用が薬理学的・免疫学的・代謝的手段によらないもの。GHTF/IMDRF定義に準拠。",
    "scope": "IVD（体外診断用医療機器）も適用対象。医療機器全般を包括的に規制。",
    "notes": "東アフリカ共同体（EAC）の医療機器調和ガイドラインとの整合を推進中。"
  },
  "primaryLaw": {
    "title": "Pharmacy and Poisons Act (Cap 244)",
    "originalTitle": null,
    "enacted": "1957（複数回改正）",
    "lastAmended": null,
    "url": "https://web.pharmacyboardkenya.org/legal-provisions-guidelines-procedures/",
    "description": "薬局・医薬品・毒物の規制に関する基本法。医療機器の規制根拠もこの法律に含まれる。PPBの設立・権限の根拠法。"
  },
  "implementingRegulations": [
    {
      "title": "Guidelines for Registration of Medical Devices Including In-Vitro Diagnostics",
      "date": "2022",
      "url": "https://web.pharmacyboardkenya.org/download/guidelines-for-registration-of-medical-devices-including-in-vitro-diagnostics/",
      "description": "医療機器・IVDの登録手続・分類・評価経路・必要書類を規定するPPBガイドライン。2022年4月公開。WHO Resolution 67.29/60.27に準拠。",
      "category": "医療機器"
    },
    {
      "title": "Registration of Medical Devices Establishments",
      "date": null,
      "url": "https://web.pharmacyboardkenya.org/download/registration-of-medical-devices-establishments/",
      "description": "医療機器施設（製造・輸入・流通施設）の登録要件を規定するガイドライン。",
      "category": "施設登録"
    }
  ],
  "relatedLaws": [],
  "classification": {
    "system": "4クラス制（Class A/B/C/D）",
    "basis": "リスクベース（GHTF/IMDRF分類ルールに準拠）。意図する用途・侵襲性・使用期間・エネルギー源等に基づく。",
    "classes": [
      {
        "name": "Class A",
        "nameJa": "クラスA",
        "riskLevel": "低",
        "description": "一般的な低リスク機器。PPB登録が必要。",
        "examples": [
          "弾性包帯",
          "聴診器",
          "舌圧子",
          "車椅子"
        ],
        "approvalPath": "PPB登録"
      },
      {
        "name": "Class B",
        "nameJa": "クラスB",
        "riskLevel": "中低",
        "description": "中程度の低リスク機器。PPB登録が必要。",
        "examples": [
          "血圧計",
          "補聴器",
          "超音波診断装置",
          "歯科用材料"
        ],
        "approvalPath": "PPB登録"
      },
      {
        "name": "Class C",
        "nameJa": "クラスC",
        "riskLevel": "中高",
        "description": "中高リスク機器。PPB登録＋臨床評価が必要。",
        "examples": [
          "人工関節",
          "冠動脈ステント",
          "人工呼吸器",
          "透析装置"
        ],
        "approvalPath": "PPB登録＋臨床評価"
      },
      {
        "name": "Class D",
        "nameJa": "クラスD",
        "riskLevel": "高",
        "description": "最高リスク機器。最も厳格な審査。臨床データが必要。",
        "examples": [
          "人工心臓弁",
          "埋込み型除細動器",
          "薬剤溶出ステント"
        ],
        "approvalPath": "PPB登録＋臨床データ"
      }
    ],
    "rules": [
      "GHTF/IMDRFの分類ルールに準拠",
      "PPBガイドラインに詳細規定",
      "IVDは別途分類ルール適用"
    ],
    "totalProductCodes": "GMDN（Global Medical Device Nomenclature）を参照"
  },
  "conformityAssessment": {
    "overview": "全クラスの医療機器にPPB登録が必要。GMP査察承認が申請の前提条件。審査経路はFIFO（先着順通常審査）、Fast Track（全面審査またはReliance方式）、Expedited（緊急使用承認）の3つ。PRIMSオンラインポータル経由で申請。登録有効期間は5年、毎年の保持費用（Retention Fee）が必要。",
    "routes": [
      {
        "name": "FIFO (First In, First Out)",
        "nameJa": "FIFO（先着順通常審査）",
        "applicableClasses": [
          "Class A",
          "Class B",
          "Class C",
          "Class D"
        ],
        "description": "標準的な審査経路。申請順に審査が行われる。技術文書・臨床評価・品質管理文書を提出。",
        "subtypes": [],
        "avgReviewTime": "最大12ヶ月",
        "avgReviewTimeSource": "https://web.pharmacyboardkenya.org/medical-devices-evaluation-and-registration-procedure/",
        "fee": "Class D: USD 1,000（新規登録）",
        "feeSource": "https://web.pharmacyboardkenya.org/medical-devices-evaluation-and-registration-procedure/",
        "url": "https://web.pharmacyboardkenya.org/medical-devices-evaluation-and-registration-procedure/"
      },
      {
        "name": "Fast Track (Full Assessment / Reliance)",
        "nameJa": "Fast Track（全面審査 / Reliance方式）",
        "applicableClasses": [
          "Class A",
          "Class B",
          "Class C",
          "Class D"
        ],
        "description": "全面審査（Full Assessment）またはReliance方式（他国当局の審査結果を参照）による優先審査経路。公衆衛生上の必要性が高い機器等が対象。",
        "subtypes": [
          "Full Assessment",
          "Reliance（他国審査結果参照）"
        ],
        "avgReviewTime": "要確認（FIFOより短縮）",
        "avgReviewTimeSource": null,
        "fee": "要確認",
        "feeSource": null,
        "url": "https://web.pharmacyboardkenya.org/download/guidelines-for-registration-of-medical-devices-including-in-vitro-diagnostics/"
      },
      {
        "name": "Expedited (Emergency Use Authorization)",
        "nameJa": "Expedited（緊急使用承認）",
        "applicableClasses": [
          "Class A",
          "Class B",
          "Class C",
          "Class D"
        ],
        "description": "緊急性の高い医療機器に対する迅速審査経路。パンデミック対応機器や代替品がない機器等が対象。",
        "subtypes": [],
        "avgReviewTime": "要確認（最短）",
        "avgReviewTimeSource": null,
        "fee": "要確認",
        "feeSource": null,
        "url": "https://web.pharmacyboardkenya.org/download/guideline-for-emergency-compassionate-use-application/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "PRIMS（PPB Regulatory Information Management System）",
    "url": "https://prims.pharmacyboardkenya.org/",
    "description": "PRIMSオンラインポータル経由で医療機器登録申請を提出。申請フォーム入力後にインボイスが生成され、支払い完了で申請確定。GMP査察承認が申請の前提条件。",
    "mandatory": true
  },
  "udi": {
    "required": false,
    "system": "未導入（検討段階）",
    "description": "ケニアではUDI制度は現時点で未導入。MDSAP参加に伴い、将来的な導入が検討される可能性。",
    "url": null,
    "timeline": "未定"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "PPB有害事象報告制度",
      "mandatory": true,
      "url": "https://web.pharmacyboardkenya.org/",
      "description": "製造業者・輸入業者・医療従事者は有害事象をPPBに報告する義務がある。"
    },
    "recalls": {
      "authority": "PPB",
      "description": "PPBがリコールを監督。安全性に関する問題が発見された場合、市場からの回収を命令可能。",
      "url": "https://web.pharmacyboardkenya.org/"
    },
    "surveillance": "市販後監視の要件はPPBガイドラインに規定。MDSAPアフィリエイト参加により体制強化を推進中。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "輸出国の規制当局",
    "name": "Certificate of Free Sale (CFS)",
    "description": "PPB登録申請時に、原産国の規制当局が発行するCFSの提出が求められる場合がある。",
    "processingTime": "輸出国側の手続きによる",
    "url": "https://web.pharmacyboardkenya.org/registrationretentionvariations/"
  },
  "reimbursement": {
    "system": "社会健康保険基金（SHIF / SHA）+ 民間保険",
    "authority": "SHA（Social Health Authority）/ Ministry of Health",
    "description": "2024年10月にNHIFがSHA（Social Health Authority）に移行。SHIF（Social Health Insurance Fund）が公的医療保険を提供。医療機器に特化した体系的な償還制度は限定的。公立病院での調達は政府予算・ドナー資金に基づく。",
    "codingSystems": [],
    "url": "https://www.health.go.ke/"
  },
  "marketingRules": {
    "authority": "PPB",
    "description": "PPBガイドラインに基づき、医療機器の広告・マーケティングに関する規制が存在。未登録機器の広告は禁止。",
    "keyRules": [
      "未登録医療機器の広告は禁止",
      "虚偽・誇大な効能表示の禁止"
    ]
  },
  "mdsap": {
    "status": "アフィリエイトメンバー（Affiliate Member, 2024年3月加入）",
    "description": "ケニアは2024年3月のIMDRF第25回会合（ワシントンD.C.）でMDSAPアフィリエイトメンバーとして正式承認。同月、米国FDAとConfidentiality Commitmentを締結（アフリカ初）。MDSAP監査報告書の活用を検討中。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "ISO 13485認証の取得が推奨される。登録審査で参照。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "リスクマネジメント。技術文書のリスク評価に適用。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "ソフトウェアライフサイクル。SaMD申請に参照。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "医用電気機器の安全・性能要求。"
    },
    "others": []
  },
  "recentDevelopments": [
    {
      "date": "2022-04",
      "title": "医療機器登録ガイドライン改訂",
      "description": "PPBが「Guidelines for Registration of Medical Devices Including In-Vitro Diagnostics」を公開。4クラス分類、評価経路（FIFO/Fast Track/Expedited）、必要書類を包括的に規定。"
    },
    {
      "date": "2024-03",
      "title": "MDSAPアフィリエイトメンバーとして加入・US FDA連携",
      "description": "IMDRF第25回会合（ワシントンD.C.）でMDSAPアフィリエイトメンバーとして正式承認。同月15日、米国FDAとConfidentiality Commitmentを締結（アフリカの規制当局として初）。"
    },
    {
      "date": "2024-10",
      "title": "NHIFからSHA（Social Health Authority）への移行",
      "description": "2024年10月1日、NHIFがSHAに移行。SHIF（Social Health Insurance Fund）が公的医療保険の中核に。"
    }
  ],
  "lastUpdated": "2026-04-06",
  "verified": "2026-04-06"
};
