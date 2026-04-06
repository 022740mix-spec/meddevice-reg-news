// ガーナ (Ghana)
export default {
  "code": "GHA",
  "country": "ガーナ",
  "countryEn": "Ghana",
  "region": "Middle East & Africa",
  "flag": "🇬🇭",
  "legalSystemOverview": {
    "type": "中央集権制（Centralized system）",
    "description": "ガーナの医療機器規制はFDA Ghana（Food and Drugs Authority）が管轄する。Public Health Act, 2012 (Act 851)を根拠法とし、食品・医薬品・医療機器・化粧品の規制を一元的に担う。4クラス分類を採用し、リスクベースの審査を実施。ECOWAS / OOAS（WAHO）による地域規制調和にも参加。",
    "keyCharacteristics": [
      "FDA Ghanaによる一元的な規制体制",
      "Public Health Act, 2012 (Act 851)が根拠法",
      "リスクベースの4クラス分類（Class I/II/III/IV）",
      "ECOWAS / OOAS（WAHO）地域規制調和に参加",
      "先行認可国（CE/FDA等）の承認を参考にした審査",
      "登録有効期間は1年（毎年更新）"
    ]
  },
  "authorities": [
    {
      "name": "FDA Ghana",
      "fullName": "Food and Drugs Authority",
      "localName": null,
      "role": "医療機器の登録・市販後監視・査察・輸入管理・広告規制。主管当局。",
      "url": "https://www.fdaghana.gov.gh/",
      "isPrimary": true
    }
  ],
  "notifiedBodies": {
    "system": "なし（FDA Ghana が直接審査）",
    "description": "ガーナではNotified Body制度は存在しない。FDA Ghanaが直接、医療機器の登録審査を実施する。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "Public Health Act, 2012 (Act 851)に定義。疾病の診断・治療・予防・監視・軽減等を目的とする機器・装置・器具・材料・ソフトウェア等で、主たる意図する作用が薬理学的・免疫学的・代謝的手段によらないもの。",
    "scope": "IVD（体外診断用医療機器）も適用対象。医療機器全般を包括的に規制。",
    "notes": "GHTF/IMDRF定義との整合を推進中。"
  },
  "primaryLaw": {
    "title": "Public Health Act, 2012 (Act 851)",
    "originalTitle": null,
    "enacted": "2012",
    "lastAmended": null,
    "url": "https://www.moh.gov.gh/wp-content/uploads/2016/02/Public-Health-Act-851.pdf",
    "description": "ガーナの公衆衛生に関する基本法。FDA Ghanaの設立根拠法。食品・医薬品・医療機器・化粧品の規制権限を付与。"
  },
  "implementingRegulations": [
    {
      "title": "Guideline for Registration of Medical Devices",
      "date": "要確認",
      "url": "https://fdaghana.gov.gh/guidelines-for-the-registration-of-medical-devices/",
      "description": "医療機器の登録手続・分類・ラベリング・技術文書要件等の詳細を規定するFDA Ghanaガイドライン。",
      "category": "医療機器"
    }
  ],
  "relatedLaws": [],
  "classification": {
    "system": "4クラス制（Class I/II/III/IV）",
    "basis": "リスクベース（GHTF/IMDRF分類ルールに準拠）。意図する用途・侵襲性・使用期間・エネルギー源等に基づく。SaMD・IVDにも個別の分類カテゴリあり。",
    "classes": [
      {
        "name": "Class I",
        "nameJa": "クラスI",
        "riskLevel": "低",
        "description": "低リスク機器。FDA Ghana登録が必要。",
        "examples": [
          "弾性包帯",
          "聴診器",
          "舌圧子"
        ],
        "approvalPath": "FDA Ghana登録"
      },
      {
        "name": "Class II",
        "nameJa": "クラスII",
        "riskLevel": "中低",
        "description": "中程度の低リスク機器。FDA Ghana登録が必要。",
        "examples": [
          "血圧計",
          "補聴器",
          "超音波診断装置"
        ],
        "approvalPath": "FDA Ghana登録"
      },
      {
        "name": "Class III",
        "nameJa": "クラスIII",
        "riskLevel": "中高",
        "description": "中高リスク機器。FDA Ghana登録＋臨床評価が必要。高リスク機器にはGMP査察が求められる場合がある。",
        "examples": [
          "人工関節",
          "人工呼吸器",
          "透析装置"
        ],
        "approvalPath": "FDA Ghana登録＋臨床評価"
      },
      {
        "name": "Class IV",
        "nameJa": "クラスIV",
        "riskLevel": "高",
        "description": "最高リスク機器。最も厳格な審査。GMP査察（海外施設含む）が必要。",
        "examples": [
          "人工心臓弁",
          "埋込み型除細動器"
        ],
        "approvalPath": "FDA Ghana登録＋臨床データ＋GMP査察"
      }
    ],
    "rules": [
      "GHTF/IMDRFの分類ルールに準拠",
      "FDA Ghanaガイドラインに詳細規定",
      "SaMD・IVDに個別の分類カテゴリあり"
    ],
    "totalProductCodes": "要確認"
  },
  "conformityAssessment": {
    "overview": "全クラスの医療機器にFDA Ghana登録が必要。先行認可国（CE/FDA等）の承認書類を参考にした審査を実施。登録有効期間は1年（毎年更新）。高リスク機器にはGMP査察が必要。",
    "routes": [
      {
        "name": "FDA Ghana Registration",
        "nameJa": "FDA Ghana登録",
        "applicableClasses": [
          "Class I",
          "Class II",
          "Class III",
          "Class IV"
        ],
        "description": "FDA Ghanaに登録申請書類を提出。技術文書・CFS・QMS証明（ISO 13485）・ラベリング等を審査。外国製造業者はガーナ国内のLocal Authorized Representativeの指名が必要。登録証発行後は製造施設GMP検証完了前でも販売可能。",
        "subtypes": [],
        "avgReviewTime": "約6カ月",
        "avgReviewTimeSource": "https://fdaghana.gov.gh/guidelines-for-the-registration-of-medical-devices/",
        "fee": "Class I: USD 60 / Class II: USD 100 / Class III: USD 160 / Class IV: USD 200（新規登録）。GMP査察費用: アフリカ内 USD 4,000 / アフリカ外 USD 7,500",
        "feeSource": "https://arazygroup.com/ivd-medical-device-registration-ghana/",
        "url": "https://fdaghana.gov.gh/services-2/product-registration/medical-devices-registration/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "FDA Ghana 窓口申請",
    "url": "https://fdaghana.gov.gh/services-2/product-registration/medical-devices-registration/",
    "description": "申請書類はFDA Ghana事務所に直接提出、またはLocal Authorized Representativeを通じて提出。オンライン申請システムは整備中。",
    "mandatory": false
  },
  "udi": {
    "required": false,
    "system": "未導入",
    "description": "ガーナでは現時点でUDI制度は未導入。",
    "url": null,
    "timeline": "要確認"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "FDA Ghana有害事象報告制度",
      "mandatory": true,
      "url": "https://fdaghana.gov.gh/safety-monitoring/",
      "description": "製造業者・輸入業者・医療従事者は有害事象をFDA Ghanaに報告する義務がある。"
    },
    "recalls": {
      "authority": "FDA Ghana",
      "description": "FDA Ghanaがリコールを監督。安全性問題発見時に市場回収を命令可能。",
      "url": "https://fdaghana.gov.gh/safety-monitoring/"
    },
    "surveillance": "FDA Ghanaによる市販後監視。ECOWAS / OOAS地域での情報共有にも参加。登録有効期間は1年で、毎年更新が必要。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "輸出国の規制当局",
    "name": "Certificate of Free Sale (CFS)",
    "description": "登録申請時に原産国の規制当局からのCFS提出が求められる。",
    "processingTime": "要確認",
    "url": "https://fdaghana.gov.gh/services-2/product-registration/medical-devices-registration/"
  },
  "reimbursement": {
    "system": "NHIS（National Health Insurance Scheme）+ 民間保険",
    "authority": "NHIA / Ministry of Health",
    "description": "NHIS（国民健康保険制度）が公的医療保険を提供。医療機器に特化した体系的な償還制度は限定的。公立病院での調達は政府予算に基づく。",
    "codingSystems": [],
    "url": null
  },
  "marketingRules": {
    "authority": "FDA Ghana",
    "description": "FDA Ghanaが医療機器の広告・マーケティングを規制。未登録機器の広告は禁止。",
    "keyRules": [
      "未登録医療機器の広告は禁止",
      "虚偽・誇大広告の禁止"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "ガーナはMDSAPプログラムに参加していない。"
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
      "date": "2025",
      "title": "FDA Ghanaの医療機器規制ガイドライン運用",
      "description": "FDA Ghanaは医療機器登録ガイドラインに基づき、Class I～IVの4クラス分類による登録制度を運用。ECOWAS / OOAS地域での規制調和の推進にも注力。"
    }
  ],
  "lastUpdated": "2026-04-06",
  "verified": "2026-04-06"
};
