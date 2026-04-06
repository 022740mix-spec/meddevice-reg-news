// タンザニア (United Republic of Tanzania)
export default {
  "code": "TZA",
  "country": "タンザニア",
  "countryEn": "United Republic of Tanzania",
  "region": "Middle East & Africa",
  "flag": "🇹🇿",
  "legalSystemOverview": {
    "type": "中央集権制（Centralized system）",
    "description": "タンザニアの医療機器規制はTMDA（Tanzania Medicines and Medical Devices Authority）が管轄する。原法はTanzania Food, Drugs and Cosmetics Act, 2003 (Cap 219)であり、2019年のFinance Act No.8により改正されTanzania Medicines and Medical Devices Act, Cap 219となった。TMDAは2019年7月1日から運用開始。食品・化粧品の規制はTBSに移管され、TMDAは医薬品・医療機器・診断薬に特化。東アフリカ共同体（EAC）の規制調和ガイドラインとの整合も推進中。",
    "keyCharacteristics": [
      "TMDAによる一元的な規制体制（2019年7月1日発足）",
      "リスクベースの4クラス分類（Class A/B/C/D）",
      "Tanzania Medicines and Medical Devices Act, Cap 219が根拠法",
      "EAC規制調和ガイドラインとの整合を推進",
      "登録・通知の2ルート（Class Aの一部は通知のみ）",
      "IMIS2オンラインポータルによる電子申請",
      "登録有効期間5年"
    ]
  },
  "authorities": [
    {
      "name": "TMDA",
      "fullName": "Tanzania Medicines and Medical Devices Authority",
      "localName": null,
      "role": "医療機器の登録・市販後監視・査察・リコール管理。主管当局。",
      "url": "https://www.tmda.go.tz/",
      "isPrimary": true
    }
  ],
  "notifiedBodies": {
    "system": "なし（TMDA が直接審査）",
    "description": "タンザニアではNotified Body制度は存在しない。TMDAが直接、医療機器の登録審査を実施する。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "Tanzania Medicines and Medical Devices Act, Cap 219に定義。instrument, apparatus, implement, medical equipment, machine, contrivance, implant, in vitro reagent等、疾病の診断・治療・予防・監視・軽減等を目的とする機器で、主たる意図する作用が薬理学的・免疫学的・代謝的手段によらないもの。",
    "scope": "IVD（体外診断用医療機器）・医療用酸素も適用対象。医療機器全般を包括的に規制。",
    "notes": "GHTF/IMDRF定義との整合を推進中。"
  },
  "primaryLaw": {
    "title": "Tanzania Medicines and Medical Devices Act, Cap 219",
    "originalTitle": "Tanzania Food, Drugs and Cosmetics Act, 2003 (Cap 219)",
    "enacted": "2003",
    "lastAmended": "2019",
    "url": "https://www.tmda.go.tz/uploads/1630838474-CHAPTER%20219%20THE%20TANZANIA%20FOOD,%20DRUGS%20AND%20COSMETICS%20ACT.pdf",
    "description": "TMDAの設立根拠法。2003年にTanzania Food, Drugs and Cosmetics Actとして制定。Finance Act No.8 of 2019により改正され、名称がTanzania Medicines and Medical Devices Actに変更。食品・化粧品規制はTBSに移管。"
  },
  "implementingRegulations": [
    {
      "title": "Tanzania Medicines and Medical Devices (Control of Medical Devices) Regulations, 2015",
      "date": "2015",
      "url": "https://www.tmda.go.tz/publications/24",
      "description": "医療機器の登録手続・分類（Class A/B/C/D）・ラベリング・通知制度等の詳細を規定する施行規則。GHTF分類ルールに基づく。",
      "category": "医療機器"
    },
    {
      "title": "Tanzania Medicines and Medical Devices (Fees and Charges) Regulations, 2022",
      "date": "2022",
      "url": "https://www.tmda.go.tz/uploads/publications/en1651218601-GN%20NO.%20686%20FEES%20REG%20(1).pdf",
      "description": "医療機器の登録・通知・変更・更新等に関する手数料を規定。",
      "category": "手数料"
    }
  ],
  "relatedLaws": [],
  "classification": {
    "system": "4クラス制（Class A/B/C/D）＋IVD分類",
    "basis": "リスクベース（GHTF分類ルールに準拠）。意図する用途・侵襲性・使用期間・エネルギー源等に基づく。Class A（非能動・非滅菌・計測機能なし）は登録免除だが通知が必要。",
    "classes": [
      {
        "name": "Class A",
        "nameJa": "クラスA",
        "riskLevel": "低",
        "description": "低リスク機器。TMDA登録が必要。非能動・非滅菌・計測機能なしのClass A機器は登録免除だが通知（Notification）が必要。",
        "examples": [
          "外科用リトラクター",
          "舌圧子",
          "聴診器"
        ],
        "approvalPath": "TMDA登録（一部は通知のみ）"
      },
      {
        "name": "Class B",
        "nameJa": "クラスB",
        "riskLevel": "中低",
        "description": "中程度の低リスク機器。TMDA登録が必要。",
        "examples": [
          "皮下注射針",
          "吸引器",
          "超音波診断装置"
        ],
        "approvalPath": "TMDA登録"
      },
      {
        "name": "Class C",
        "nameJa": "クラスC",
        "riskLevel": "中高",
        "description": "中高リスク機器。TMDA登録＋臨床評価が必要。",
        "examples": [
          "人工呼吸器",
          "骨固定プレート",
          "透析装置"
        ],
        "approvalPath": "TMDA登録＋臨床評価"
      },
      {
        "name": "Class D",
        "nameJa": "クラスD",
        "riskLevel": "高",
        "description": "最高リスク機器。最も厳格な審査。",
        "examples": [
          "人工心臓弁",
          "埋込み型除細動器"
        ],
        "approvalPath": "TMDA登録＋臨床データ"
      }
    ],
    "rules": [
      "GHTF分類ルールに準拠",
      "Control of Medical Devices Regulations, 2015に詳細規定",
      "Class A（非能動・非滅菌・計測機能なし）は登録免除・通知のみ"
    ],
    "totalProductCodes": "要確認"
  },
  "conformityAssessment": {
    "overview": "Class A/B/C/Dの全医療機器にTMDA登録が必要（一部Class Aは通知のみ）。IMIS2オンラインポータルで申請。登録有効期間5年。外国製造業者はAuthorized Representativeの指名が必要。",
    "routes": [
      {
        "name": "TMDA Registration",
        "nameJa": "TMDA登録",
        "applicableClasses": [
          "Class A",
          "Class B",
          "Class C",
          "Class D"
        ],
        "description": "TMDAにIMIS2ポータル経由で登録申請書類を提出。技術文書・CFS・QMS証明（ISO 13485）・ラベリング・性能データ等を審査。Class Aの非能動・非滅菌・計測機能なし機器は登録免除だが通知（Notification）が必要。",
        "subtypes": [],
        "avgReviewTime": "最大270日（申請受理・評価手数料支払後）",
        "avgReviewTimeSource": "https://arazygroup.com/ivd-medical-device-registration-tanzania/",
        "fee": "輸入品: Class A USD 500 / Class B USD 2,500 / Class C・D USD 2,500。国内製造品: Class A TZS 100,000 / Class B TZS 200,000 / Class C・D TZS 500,000",
        "feeSource": "https://www.tmda.go.tz/pages/medical-devices-assessment-fees-and-charges",
        "url": "https://www.tmda.go.tz/pages/procedures-for-market-authorization-1"
      }
    ]
  },
  "electronicSubmission": {
    "system": "IMIS2 Trader Portal",
    "url": "https://imis2.tmda.go.tz/portal/",
    "description": "TMDAのIMIS2オンラインポータルを通じて電子申請を行う。トレーダーアカウント作成が必要。登録済み医療機器のデータベースも公開。",
    "mandatory": true
  },
  "udi": {
    "required": false,
    "system": "未導入",
    "description": "タンザニアでは現時点でUDI制度は未導入。",
    "url": null,
    "timeline": "要確認"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "TMDA Vigilance制度",
      "mandatory": true,
      "url": "https://www.tmda.go.tz/pages/medical-devices-and-diagnostics-control-section-profile",
      "description": "製造業者・輸入業者・医療従事者は有害事象をTMDAに報告する義務がある。登録保持者は製品のライフサイクル全体を通じて品質・安全性・性能を維持する責任を負う。"
    },
    "recalls": {
      "authority": "TMDA",
      "description": "TMDAがリコールを監督。安全性問題発見時に市場回収を命令可能。製品の変更（Variation）はTrader Portalを通じて申請が必要。",
      "url": "https://www.tmda.go.tz/pages/medical-devices-and-diagnostics-control-section-profile"
    },
    "surveillance": "TMDAによる市販後監視・査察。EAC地域での情報共有も推進中。登録済み医療機器はIMIS2データベースで公開。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "輸出国の規制当局",
    "name": "Certificate of Free Sale (CFS)",
    "description": "登録申請時に原産国の規制当局からのCFS提出が求められる。",
    "processingTime": "要確認",
    "url": "https://www.tmda.go.tz/pages/procedures-for-market-authorization-1"
  },
  "reimbursement": {
    "system": "NHIF（National Health Insurance Fund）+ 民間保険",
    "authority": "NHIF / Ministry of Health",
    "description": "NHIFが公的医療保険を提供。医療機器に特化した体系的な償還制度は限定的。公立病院での調達は政府予算・ドナー資金に基づく。",
    "codingSystems": [],
    "url": null
  },
  "marketingRules": {
    "authority": "TMDA",
    "description": "TMDAガイドラインに基づき、医療機器の広告・マーケティングを規制。未登録機器の広告は禁止。",
    "keyRules": [
      "未登録医療機器の広告は禁止",
      "虚偽・誇大広告の禁止"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "タンザニアはMDSAPプログラムに参加していない。"
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
      "date": "2022",
      "title": "手数料規則の改定",
      "description": "Tanzania Medicines and Medical Devices (Fees and Charges) Regulations, 2022が施行。医療機器の登録・通知・変更等の手数料体系を更新。"
    },
    {
      "date": "2019",
      "title": "TFDAからTMDAへの改組",
      "description": "Finance Act No.8 of 2019によりTanzania Food, Drugs and Cosmetics Act (Cap 219)が改正。2019年7月1日付でTFDAがTMDAに改組。食品・化粧品規制はTBSに移管され、TMDAは医薬品・医療機器・診断薬に特化。"
    }
  ],
  "lastUpdated": "2026-04-06",
  "verified": "2026-04-06"
};
