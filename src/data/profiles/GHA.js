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
      "リスクベースの4クラス分類（Class A/B/C/D）",
      "ECOWAS / OOAS（WAHO）地域規制調和に参加",
      "先行認可国（CE/FDA等）の承認を参考にした審査"
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
    "url": "https://www.fdaghana.gov.gh/",
    "description": "ガーナの公衆衛生に関する基本法。FDA Ghanaの設立根拠法。食品・医薬品・医療機器・化粧品の規制権限を付与。"
  },
  "implementingRegulations": [
    {
      "title": "FDA Ghana Medical Device Registration Guidelines",
      "date": "要確認",
      "url": "https://www.fdaghana.gov.gh/",
      "description": "医療機器の登録手続・分類・ラベリング等の詳細を規定するガイドライン。",
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
        "description": "低リスク機器。FDA Ghana登録が必要。",
        "examples": [
          "弾性包帯",
          "聴診器",
          "舌圧子"
        ],
        "approvalPath": "FDA Ghana登録"
      },
      {
        "name": "Class B",
        "nameJa": "クラスB",
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
        "name": "Class C",
        "nameJa": "クラスC",
        "riskLevel": "中高",
        "description": "中高リスク機器。FDA Ghana登録＋臨床評価が必要。",
        "examples": [
          "人工関節",
          "人工呼吸器",
          "透析装置"
        ],
        "approvalPath": "FDA Ghana登録＋臨床評価"
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
        "approvalPath": "FDA Ghana登録＋臨床データ"
      }
    ],
    "rules": [
      "GHTF/IMDRFの分類ルールに準拠",
      "FDA Ghanaガイドラインに詳細規定"
    ],
    "totalProductCodes": "要確認"
  },
  "conformityAssessment": {
    "overview": "全クラスの医療機器にFDA Ghana登録が必要。先行認可国（CE/FDA等）の承認書類を参考にした審査を実施。",
    "routes": [
      {
        "name": "FDA Ghana Registration",
        "nameJa": "FDA Ghana登録",
        "applicableClasses": [
          "Class A",
          "Class B",
          "Class C",
          "Class D"
        ],
        "description": "FDA Ghanaに登録申請書類を提出。技術文書・CFS・QMS証明・ラベリング等を審査。",
        "subtypes": [],
        "avgReviewTime": "要確認",
        "avgReviewTimeSource": null,
        "fee": "要確認",
        "feeSource": null,
        "url": "https://www.fdaghana.gov.gh/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "FDA Ghana オンラインポータル",
    "url": "https://www.fdaghana.gov.gh/",
    "description": "FDA Ghanaはオンラインでの申請受付を推進中。",
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
      "url": "https://www.fdaghana.gov.gh/",
      "description": "製造業者・輸入業者・医療従事者は有害事象をFDA Ghanaに報告する義務がある。"
    },
    "recalls": {
      "authority": "FDA Ghana",
      "description": "FDA Ghanaがリコールを監督。安全性問題発見時に市場回収を命令可能。",
      "url": "https://www.fdaghana.gov.gh/"
    },
    "surveillance": "FDA Ghanaによる市販後監視。ECOWAS / OOAS地域での情報共有にも参加。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "輸出国の規制当局",
    "name": "Certificate of Free Sale (CFS)",
    "description": "登録申請時に原産国の規制当局からのCFS提出が求められる。",
    "processingTime": "要確認",
    "url": "https://www.fdaghana.gov.gh/"
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
      "title": "FDA Ghanaの規制能力強化",
      "description": "FDA Ghanaは医療機器規制の能力強化を継続。ECOWAS / OOAS地域での規制調和の推進にも注力。"
    }
  ],
  "lastUpdated": "2026-04-02",
  "verified": null
};
