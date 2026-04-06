// エチオピア (Ethiopia)
export default {
  "code": "ETH",
  "country": "エチオピア",
  "countryEn": "Ethiopia",
  "region": "Middle East & Africa",
  "flag": "🇪🇹",
  "legalSystemOverview": {
    "type": "中央集権制（Centralized system）",
    "description": "エチオピアの医療機器規制はEFDA（Ethiopian Food and Drug Authority）が管轄する。Food and Medicine Administration Proclamation No. 1112/2019を根拠法とし、食品・医薬品・医療機器の規制を一元的に担う。規制枠組みは発展途上であり、国際的な規制整合を推進中。",
    "keyCharacteristics": [
      "EFDAによる一元的な規制体制",
      "Proclamation No. 1112/2019が根拠法",
      "非IVD医療機器: Class I/II/III/IV、IVD: Class A/B/C/Dの4クラス分類",
      "WHO事前認定（PQ）製品・SRA承認品は審査簡略化の対象",
      "登録有効期間5年",
      "ISO 13485適合証明が必要"
    ]
  },
  "authorities": [
    {
      "name": "EFDA",
      "fullName": "Ethiopian Food and Drug Authority",
      "localName": null,
      "role": "医療機器の登録・市販後監視・査察・輸入管理。主管当局。",
      "url": "https://www.efda.gov.et/",
      "isPrimary": true
    }
  ],
  "notifiedBodies": {
    "system": "なし（EFDA が直接審査）",
    "description": "エチオピアではNotified Body制度は存在しない。EFDAが直接、医療機器の登録審査を実施する。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "Proclamation No. 1112/2019および関連ガイドラインに定義。疾病の診断・治療・予防・監視・軽減等を目的とする機器・装置・器具・材料・ソフトウェア等で、主たる意図する作用が薬理学的・免疫学的・代謝的手段によらないもの。",
    "scope": "IVD（体外診断用医療機器）も適用対象。非IVD医療機器とIVDで別の分類体系を採用。",
    "notes": "GHTF/IMDRF定義との整合を推進中。"
  },
  "primaryLaw": {
    "title": "Food and Medicine Administration Proclamation No. 1112/2019",
    "originalTitle": null,
    "enacted": "2019",
    "lastAmended": null,
    "url": "https://www.efda.gov.et/wp-content/uploads/2020/06/Food-and-Medicine-Administration-Proclamation-1112.pdf",
    "description": "EFDAの設立根拠法。食品・医薬品・医療機器・化粧品の規制権限をEFDAに付与。医療機器は登録・市販認可を取得してからでなければ供給・販売できないことを規定。"
  },
  "implementingRegulations": [
    {
      "title": "Guideline for Registration of Medical Devices (2014)",
      "date": "2014",
      "url": "http://www.efda.gov.et/publication/guideline-for-registration-of-medical-devices-2014/",
      "description": "医療機器の登録手続・分類・技術文書要件等の詳細を規定するEFDAガイドライン。非IVD医療機器のClass I～IV分類を規定。",
      "category": "医療機器"
    },
    {
      "title": "General Guidelines for Medical Devices Marketing Authorization",
      "date": "要確認",
      "url": "https://www.efda.gov.et/wp-content/uploads/2022/01/General-Guidelines-for-Medical-devices-Marketing-Authorization.pdf",
      "description": "医療機器の市販認可に関する一般ガイドライン。QMS要件・適合性評価・ラベリング等を規定。",
      "category": "医療機器"
    },
    {
      "title": "Guideline for Classification of Medical Devices other than IVD Medical Devices",
      "date": "要確認",
      "url": "http://www.efda.gov.et/wp-content/uploads/2021/07/Guideline-for-Classification-of-Medical-devices-other-than-IVD-Medical-devices_EFDA.pdf",
      "description": "非IVD医療機器のClass I/II/III/IV分類ルールを規定する分類ガイドライン。",
      "category": "医療機器"
    }
  ],
  "relatedLaws": [],
  "classification": {
    "system": "非IVD: 4クラス制（Class I/II/III/IV）、IVD: 4クラス制（Class A/B/C/D）",
    "basis": "リスクベース。意図する用途・侵襲性・使用期間・局所/全身影響等に基づく。非IVD医療機器はローマ数字（I～IV）、IVDはアルファベット（A～D）で分類。",
    "classes": [
      {
        "name": "Class I",
        "nameJa": "クラスI",
        "riskLevel": "低",
        "description": "低リスク機器。EFDA登録が必要。",
        "examples": [
          "弾性包帯",
          "聴診器",
          "舌圧子"
        ],
        "approvalPath": "EFDA登録"
      },
      {
        "name": "Class II",
        "nameJa": "クラスII",
        "riskLevel": "中低",
        "description": "中程度の低リスク機器。EFDA登録が必要。",
        "examples": [
          "血圧計",
          "補聴器",
          "超音波診断装置"
        ],
        "approvalPath": "EFDA登録"
      },
      {
        "name": "Class III",
        "nameJa": "クラスIII",
        "riskLevel": "中高",
        "description": "中高リスク機器。EFDA登録＋臨床評価が必要。",
        "examples": [
          "人工呼吸器",
          "透析装置",
          "骨固定プレート"
        ],
        "approvalPath": "EFDA登録＋臨床評価"
      },
      {
        "name": "Class IV",
        "nameJa": "クラスIV",
        "riskLevel": "高",
        "description": "最高リスク機器。最も厳格な審査。施設査察が必要となる場合がある。",
        "examples": [
          "人工心臓弁",
          "埋込み型除細動器"
        ],
        "approvalPath": "EFDA登録＋臨床データ＋施設査察"
      }
    ],
    "rules": [
      "非IVD: Class I/II/III/IVのローマ数字分類",
      "IVD: Class A/B/C/Dのアルファベット分類",
      "GHTF/IMDRF分類ルールに準拠"
    ],
    "totalProductCodes": "要確認"
  },
  "conformityAssessment": {
    "overview": "全クラスの医療機器にEFDA登録・市販認可が必要。WHO PQ品・SRA承認品はデスクトップ審査による簡略化あり。登録有効期間5年。外国製造業者はLocal Authorized Representativeの指名が必要。",
    "routes": [
      {
        "name": "EFDA Registration",
        "nameJa": "EFDA登録",
        "applicableClasses": [
          "Class I",
          "Class II",
          "Class III",
          "Class IV"
        ],
        "description": "EFDAに登録申請書類を提出。技術文書・CFS・QMS証明（ISO 13485）・ラベリング・適合宣言書等を審査。WHO PQ品・SRA承認品はデスクトップ審査が適用される場合がある。高リスク機器には施設査察（オンサイト）が必要となる場合がある。",
        "subtypes": [],
        "avgReviewTime": "低リスク: 約1カ月、中～高リスク: 最大6カ月",
        "avgReviewTimeSource": "https://arazygroup.com/ivd-medical-device-registration-ethiopia/",
        "fee": "新規登録: USD 65 / Minor Variation: USD 15 / Major Variation: USD 20 / 年次更新: USD 20。施設査察: デスクトップ USD 3,500 / オンサイト USD 7,500",
        "feeSource": "https://arazygroup.com/ivd-medical-device-registration-ethiopia/",
        "url": "http://www.efda.gov.et/publication/guideline-for-registration-of-medical-devices-2014/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "要確認",
    "url": "https://www.efda.gov.et/",
    "description": "電子申請システムの整備状況は要確認。現時点では紙ベースの申請が主流とみられる。",
    "mandatory": false
  },
  "udi": {
    "required": false,
    "system": "未導入",
    "description": "エチオピアでは現時点でUDI制度は未導入。",
    "url": null,
    "timeline": "要確認"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "EFDA有害事象報告制度",
      "mandatory": true,
      "url": "https://www.efda.gov.et/",
      "description": "有害事象のEFDAへの報告義務が規定されている。体制は整備中。"
    },
    "recalls": {
      "authority": "EFDA",
      "description": "EFDAがリコールを監督。",
      "url": "https://www.efda.gov.et/"
    },
    "surveillance": "市販後監視体制は整備中。国際支援のもと能力強化を推進。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "輸出国の規制当局",
    "name": "Certificate of Free Sale (CFS)",
    "description": "登録申請時に原産国の規制当局からのCFS提出が求められる。",
    "processingTime": "要確認",
    "url": "https://www.efda.gov.et/"
  },
  "reimbursement": {
    "system": "CBHI（Community Based Health Insurance）+ 公的医療機関",
    "authority": "Ministry of Health",
    "description": "公的医療機関での調達が中心。CBHIの拡大を推進中。医療機器に特化した償還制度は限定的。",
    "codingSystems": [],
    "url": null
  },
  "marketingRules": {
    "authority": "EFDA",
    "description": "EFDAが医療機器の広告・マーケティングを規制。未登録機器の販売・広告は禁止。",
    "keyRules": [
      "未登録医療機器の販売・広告は禁止",
      "虚偽・誇大広告の禁止"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "エチオピアはMDSAPプログラムに参加していない。"
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
      "date": "2019",
      "title": "Proclamation No. 1112/2019の制定",
      "description": "EFDAの設立根拠法であるProclamation No. 1112/2019が制定。医療機器を含む包括的な規制枠組みを整備。"
    },
    {
      "date": "2022",
      "title": "医療機器市販認可ガイドラインの公表",
      "description": "EFDAが「General Guidelines for Medical Devices Marketing Authorization」を公表し、非IVD医療機器のClass I～IV分類に基づく登録制度を体系化。"
    }
  ],
  "lastUpdated": "2026-04-06",
  "verified": "2026-04-06"
};
