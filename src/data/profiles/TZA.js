// タンザニア (United Republic of Tanzania)
export default {
  "code": "TZA",
  "country": "タンザニア",
  "countryEn": "United Republic of Tanzania",
  "region": "Middle East & Africa",
  "flag": "🇹🇿",
  "legalSystemOverview": {
    "type": "中央集権制（Centralized system）",
    "description": "タンザニアの医療機器規制はTMDA（Tanzania Medicines and Medical Devices Authority）が管轄する。Tanzania Medicines and Medical Devices Act, 2003（Act No.1 of 2003）を根拠法とし、医薬品・医療機器の規制を一元管理。東アフリカ共同体（EAC）の規制調和ガイドラインとの整合も推進中。",
    "keyCharacteristics": [
      "TMDAによる一元的な規制体制",
      "リスクベースの4クラス分類（Class A/B/C/D）",
      "Tanzania Medicines and Medical Devices Act, 2003が根拠法",
      "EAC規制調和ガイドラインとの整合を推進",
      "先行認可国（CE/FDA等）の承認書類を参考にした審査"
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
    "legalDefinition": "Tanzania Medicines and Medical Devices Act, 2003に定義。疾病の診断・治療・予防・監視・軽減等を目的とする機器・装置・器具・材料・ソフトウェア等で、主たる意図する作用が薬理学的・免疫学的・代謝的手段によらないもの。",
    "scope": "IVD（体外診断用医療機器）も適用対象。医療機器全般を包括的に規制。",
    "notes": "GHTF/IMDRF定義との整合を推進中。"
  },
  "primaryLaw": {
    "title": "Tanzania Medicines and Medical Devices Act, 2003 (Act No.1 of 2003)",
    "originalTitle": null,
    "enacted": "2003",
    "lastAmended": "要確認",
    "url": "https://www.tmda.go.tz/",
    "description": "TMDAの設立根拠法。医薬品・医療機器の規制権限をTMDAに付与。登録・市販後監視・査察等の権限を規定。"
  },
  "implementingRegulations": [
    {
      "title": "Tanzania Medicines and Medical Devices (Registration of Medical Devices) Regulations",
      "date": "要確認",
      "url": "https://www.tmda.go.tz/",
      "description": "医療機器の登録手続・分類・ラベリング等の詳細を規定する施行規則。",
      "category": "医療機器"
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
        "description": "低リスク機器。TMDA登録が必要。",
        "examples": [
          "弾性包帯",
          "聴診器",
          "舌圧子"
        ],
        "approvalPath": "TMDA登録"
      },
      {
        "name": "Class B",
        "nameJa": "クラスB",
        "riskLevel": "中低",
        "description": "中程度の低リスク機器。TMDA登録が必要。",
        "examples": [
          "血圧計",
          "補聴器",
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
          "人工関節",
          "人工呼吸器",
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
      "GHTF/IMDRFの分類ルールに準拠",
      "TMDAガイドラインに詳細規定"
    ],
    "totalProductCodes": "要確認"
  },
  "conformityAssessment": {
    "overview": "全クラスの医療機器にTMDA登録が必要。先行認可国（CE/FDA等）の承認書類を参考にした審査を実施。",
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
        "description": "TMDAに登録申請書類を提出。技術文書・CFS・QMS証明・ラベリング等を審査。",
        "subtypes": [],
        "avgReviewTime": "要確認",
        "avgReviewTimeSource": null,
        "fee": "要確認",
        "feeSource": null,
        "url": "https://www.tmda.go.tz/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "TMDA オンラインポータル",
    "url": "https://www.tmda.go.tz/",
    "description": "TMDAはオンラインでの申請受付を推進中。",
    "mandatory": false
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
      "system": "TMDA有害事象報告制度",
      "mandatory": true,
      "url": "https://www.tmda.go.tz/",
      "description": "製造業者・輸入業者・医療従事者は有害事象をTMDAに報告する義務がある。"
    },
    "recalls": {
      "authority": "TMDA",
      "description": "TMDAがリコールを監督。安全性問題発見時に市場回収を命令可能。",
      "url": "https://www.tmda.go.tz/"
    },
    "surveillance": "TMDAによる市販後監視。EAC地域での情報共有も推進中。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "輸出国の規制当局",
    "name": "Certificate of Free Sale (CFS)",
    "description": "登録申請時に原産国の規制当局からのCFS提出が求められる。",
    "processingTime": "要確認",
    "url": "https://www.tmda.go.tz/"
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
      "date": "2025",
      "title": "EAC規制調和の推進",
      "description": "東アフリカ共同体（EAC）の医療機器規制調和ガイドラインとの整合を継続的に推進。"
    }
  ],
  "lastUpdated": "2026-04-02",
  "verified": null
};
