// ウガンダ (Uganda)
export default {
  "code": "UGA",
  "country": "ウガンダ",
  "countryEn": "Uganda",
  "region": "Middle East & Africa",
  "flag": "🇺🇬",
  "legalSystemOverview": {
    "type": "中央集権制（Centralized system）",
    "description": "ウガンダの医療機器規制はNDA（National Drug Authority）が管轄する。National Drug Policy and Authority Act (Cap 206)を根拠法とし、Statutory Instrument No. 77 of 2019（Regulation of Surgical Instruments and Appliances）に基づき医療機器の登録を実施。2020年の保健大臣指令（ADM.140/323/01）によりNDAの規制対象が公衆衛生化学品・医療機器全般に拡大。EAC規制調和にも参加。",
    "keyCharacteristics": [
      "NDAによる一元的な規制体制",
      "National Drug Policy and Authority Act (Cap 206)が根拠法",
      "SI No. 77 of 2019に基づく登録制度",
      "3トラック制（IMDRF国/WHO-SRA/一般）による審査",
      "19分類ルールによるClass A～Dのリスクベース分類",
      "EAC規制調和ガイドラインとの整合を推進"
    ]
  },
  "authorities": [
    {
      "name": "NDA",
      "fullName": "National Drug Authority",
      "localName": null,
      "role": "医療機器の登録・市販後監視・査察・輸入管理。主管当局。",
      "url": "https://www.nda.or.ug/",
      "isPrimary": true
    }
  ],
  "notifiedBodies": {
    "system": "なし（NDA が直接審査）",
    "description": "ウガンダではNotified Body制度は存在しない。NDAが直接、医療機器の登録審査を実施する。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "National Drug Policy and Authority Actおよび関連規則に基づく定義。疾病の診断・治療・予防・監視・軽減等を目的とする機器。詳細はNDAガイドラインに規定。",
    "scope": "IVD（体外診断用医療機器）も適用対象。",
    "notes": "EACの医療機器調和ガイドラインとの整合を推進中。"
  },
  "primaryLaw": {
    "title": "National Drug Policy and Authority Act (Cap 206)",
    "originalTitle": null,
    "enacted": "1993",
    "lastAmended": null,
    "url": "https://ugandatrades.go.ug/media/National-Drug-Policy-Authority-Act-Cap-206.pdf",
    "description": "NDAの設立根拠法。医薬品・医療機器（外科用器具・器械）の規制権限をNDAに付与。保健大臣にSurgical Instruments and Appliancesの輸入・販売・広告の規制を行う法定規則の制定権限を付与。"
  },
  "implementingRegulations": [
    {
      "title": "Statutory Instrument No. 77 — Regulation of Surgical Instruments and Appliances, 2019",
      "date": "2019",
      "url": "https://www.nda.or.ug/medical-devices/",
      "description": "外科用器具・器械の規制に関する法定規則。登録義務・分類・ラベリング等を規定。",
      "category": "医療機器"
    },
    {
      "title": "Guidelines on Registration of Surgical Instruments and Appliances",
      "date": "2020",
      "url": "https://www.nda.or.ug/wp-content/uploads/2022/02/Guidelines-on-Registration-of-Surgical-Instruments_R0_2020_Final.pdf",
      "description": "医療機器の登録手続・必要書類・3トラック制（IMDRF国/WHO-SRA/一般）の詳細を規定するNDAガイドライン。",
      "category": "医療機器"
    },
    {
      "title": "Guidelines on Good Manufacturing Practice for Surgical Instruments and Appliances",
      "date": "2023",
      "url": "https://www.nda.or.ug/wp-content/uploads/2023/09/INS-GDL-047_Guidelines-on-GMP-for-Surgical-Instruments-and-Appliances_R0.pdf",
      "description": "外科用器具・器械のGMP要件を規定するガイドライン。",
      "category": "GMP"
    }
  ],
  "relatedLaws": [
    {
      "title": "Ministerial Directive ADM.140/323/01 (2020)",
      "url": "https://www.nda.or.ug/medical-devices/",
      "description": "2020年7月20日付の保健大臣指令。NDAの規制対象を公衆衛生化学品・医療機器全般に拡大。"
    }
  ],
  "classification": {
    "system": "4クラス制（Class A/B/C/D）",
    "basis": "リスクベース。19分類ルールに基づき、意図する用途・使用期間・侵襲性・危害の確率と重大性・能動エネルギー源の有無等によりClass A～Dに分類。",
    "classes": [
      {
        "name": "Class A",
        "nameJa": "クラスA",
        "riskLevel": "低",
        "description": "低リスク機器。NDA登録が必要。",
        "examples": [
          "弾性包帯",
          "聴診器",
          "舌圧子"
        ],
        "approvalPath": "NDA登録"
      },
      {
        "name": "Class B",
        "nameJa": "クラスB",
        "riskLevel": "中低",
        "description": "中程度の低リスク機器。NDA登録が必要。",
        "examples": [
          "血圧計",
          "補聴器"
        ],
        "approvalPath": "NDA登録"
      },
      {
        "name": "Class C",
        "nameJa": "クラスC",
        "riskLevel": "中高",
        "description": "中高リスク機器。NDA登録＋臨床評価が必要。",
        "examples": [
          "人工関節",
          "人工呼吸器"
        ],
        "approvalPath": "NDA登録＋臨床評価"
      },
      {
        "name": "Class D",
        "nameJa": "クラスD",
        "riskLevel": "高",
        "description": "最高リスク機器。",
        "examples": [
          "人工心臓弁",
          "埋込み型除細動器"
        ],
        "approvalPath": "NDA登録＋臨床データ"
      }
    ],
    "rules": [
      "19分類ルールによるリスクベース分類",
      "Guidelines on Registration of Surgical Instruments and Appliancesに詳細規定"
    ],
    "totalProductCodes": "要確認"
  },
  "conformityAssessment": {
    "overview": "全クラスの医療機器にNDA登録が必要。3トラック制による審査: Track 1（IMDRF国承認品）、Track 2（WHO PQ/SRA承認品）、Track 3（未承認品）。外国製造業者はLocal Authorized Representativeの指名が必要。登録は無期限有効（ただし停止・取消される場合あり）。",
    "routes": [
      {
        "name": "Track 1 — IMDRF Country Approved",
        "nameJa": "Track 1（IMDRF国承認品）",
        "applicableClasses": [
          "Class A",
          "Class B",
          "Class C",
          "Class D"
        ],
        "description": "IMDRF参加国（AU/CA/EU/JP/US）で既に登録・承認済みの製品向け迅速審査トラック。既存の承認書類・技術文書を活用。",
        "subtypes": [],
        "avgReviewTime": "要確認（公式タイムラインは非公表。照会未回答6カ月で申請却下の可能性）",
        "avgReviewTimeSource": "https://arazygroup.com/ivd-medical-device-registration-uganda/",
        "fee": "新規登録: USD 1,500 / Major Amendment: USD 500 / Minor Amendment: USD 200",
        "feeSource": "https://arazygroup.com/ivd-medical-device-registration-uganda/",
        "url": "https://www.nda.or.ug/wp-content/uploads/2022/02/Guidelines-on-Registration-of-Surgical-Instruments_R0_2020_Final.pdf"
      },
      {
        "name": "Track 2 — WHO PQ / SRA Approved",
        "nameJa": "Track 2（WHO PQ/SRA承認品）",
        "applicableClasses": [
          "Class A",
          "Class B",
          "Class C",
          "Class D"
        ],
        "description": "WHO事前認定品またはStringent Regulatory Authority承認品向けトラック。",
        "subtypes": [],
        "avgReviewTime": "要確認",
        "avgReviewTimeSource": "https://arazygroup.com/ivd-medical-device-registration-uganda/",
        "fee": "新規登録: USD 1,500 / Major Amendment: USD 500 / Minor Amendment: USD 200",
        "feeSource": "https://arazygroup.com/ivd-medical-device-registration-uganda/",
        "url": "https://www.nda.or.ug/wp-content/uploads/2022/02/Guidelines-on-Registration-of-Surgical-Instruments_R0_2020_Final.pdf"
      },
      {
        "name": "Track 3 — No Prior Approval",
        "nameJa": "Track 3（参照規制当局未承認品）",
        "applicableClasses": [
          "Class A",
          "Class B",
          "Class C",
          "Class D"
        ],
        "description": "IMDRF国・WHO PQ・SRAいずれの承認もない製品向けトラック。最も詳細な審査が必要。GMP査察が求められる場合がある。",
        "subtypes": [],
        "avgReviewTime": "要確認",
        "avgReviewTimeSource": "https://arazygroup.com/ivd-medical-device-registration-uganda/",
        "fee": "新規登録: USD 1,500 / Major Amendment: USD 500 / Minor Amendment: USD 200",
        "feeSource": "https://arazygroup.com/ivd-medical-device-registration-uganda/",
        "url": "https://www.nda.or.ug/wp-content/uploads/2022/02/Guidelines-on-Registration-of-Surgical-Instruments_R0_2020_Final.pdf"
      }
    ]
  },
  "electronicSubmission": {
    "system": "NDA Online Portal",
    "url": "https://portal.nda.or.ug/",
    "description": "NDAオンラインポータルを通じて申請を行う。製造ライセンス・卸売/供給ライセンス・輸入許可の各種申請に対応。",
    "mandatory": true
  },
  "udi": {
    "required": false,
    "system": "未導入",
    "description": "ウガンダでは現時点でUDI制度は未導入。",
    "url": null,
    "timeline": "要確認"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "WHO-UMC経由の有害事象報告",
      "mandatory": true,
      "url": "https://primaryreporting.who-umc.org/Reporting/Reporter?OrganizationID=UG",
      "description": "製造業者・輸入業者・医療従事者は有害事象をNDAに報告する義務がある。WHO-UMCの報告システムを利用。"
    },
    "recalls": {
      "authority": "NDA",
      "description": "NDAがリコールを監督。登録は停止・取消される場合がある。",
      "url": "https://www.nda.or.ug/medical-devices/"
    },
    "surveillance": "NDAによる市販後監視。登録評価過程でのGMP査察・品質監査を実施。EAC地域での情報共有も推進中。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "輸出国の規制当局",
    "name": "Certificate of Free Sale (CFS)",
    "description": "登録申請時に原産国の規制当局からのCFS提出が求められる。",
    "processingTime": "要確認",
    "url": "https://www.nda.or.ug/medical-devices/"
  },
  "reimbursement": {
    "system": "公的医療機関 + 民間保険",
    "authority": "Ministry of Health",
    "description": "公的医療機関での調達が中心。国民健康保険制度の整備を推進中。医療機器に特化した償還制度は限定的。",
    "codingSystems": [],
    "url": null
  },
  "marketingRules": {
    "authority": "NDA",
    "description": "NDAが医療機器の広告・マーケティングを規制。未登録機器の広告は禁止。",
    "keyRules": [
      "未登録医療機器の広告は禁止",
      "虚偽・誇大広告の禁止"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "ウガンダはMDSAPプログラムに参加していない。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "ISO 13485認証はQMS証明として参照。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "リスクマネジメントの国際規格として参照。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "ソフトウェア医療機器に対して参照。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "医用電気機器の安全規格として参照。"
    },
    "others": []
  },
  "recentDevelopments": [
    {
      "date": "2023",
      "title": "GMP査察ガイドラインの公表",
      "description": "NDAが「Guidelines on Good Manufacturing Practice for Surgical Instruments and Appliances」を公表。外科用器具・器械のGMP要件を体系化。"
    },
    {
      "date": "2020",
      "title": "保健大臣指令による規制対象拡大",
      "description": "保健大臣指令（ADM.140/323/01）により、NDAの規制対象が公衆衛生化学品・医療機器全般に拡大。従来のSurgical Instruments and Appliancesに加え、より広範な医療機器の製造・輸入・輸出・供給を規制。"
    },
    {
      "date": "2019",
      "title": "SI No. 77 — 外科用器具・器械規制の制定",
      "description": "Statutory Instrument No. 77 of 2019（Regulation of Surgical Instruments and Appliances）が制定。Class A～Dの分類に基づく登録制度を導入。"
    }
  ],
  "lastUpdated": "2026-04-06",
  "verified": "2026-04-06"
};
