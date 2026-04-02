// ウクライナ (Ukraine)
export default {
  "code": "UKR",
  "country": "ウクライナ",
  "countryEn": "Ukraine",
  "region": "Europe",
  "flag": "🇺🇦",
  "legalSystemOverview": {
    "type": "独自制度（EU MDR への段階的整合化を推進中）",
    "description": "ウクライナは独自の医療機器規制制度を有するが、EU加盟を目指し、EU MDR/IVDR への整合化（approximation）を段階的に進めている。2024年の Technical Regulation on Medical Devices（Cabinet of Ministers Resolution No. 927）により、EU MDR に大幅に整合した新規制が導入された。保健省（MOH）が政策策定、Derzhliktehnoservis（国立医療技術サービス）等が技術評価を担う。",
    "keyCharacteristics": [
      "EU MDR への段階的整合化（approximation）を推進",
      "Technical Regulation on Medical Devices (2024) で新枠組み導入",
      "保健省（MOH）が規制政策を管轄",
      "市販前の国家登録（State Registration）が必要",
      "ラベリング・使用説明書はウクライナ語必須",
      "戦時下の特別措置（輸入・登録の簡素化）が一部適用"
    ]
  },
  "authorities": [
    {
      "name": "MOH",
      "fullName": "Ministry of Health of Ukraine",
      "localName": "Міністерство охорони здоров'я України",
      "role": "医療機器規制政策の策定・国家登録の承認",
      "url": "https://moz.gov.ua/",
      "isPrimary": true
    },
    {
      "name": "Derzhliktehnoservis",
      "fullName": "State Service on Medicines and Drug Control",
      "localName": "Державна служба з лікарських засобів та контролю за наркотиками",
      "role": "市場監視・品質管理・査察",
      "url": "https://www.dls.gov.ua/",
      "isPrimary": true
    },
    {
      "name": "SEC",
      "fullName": "State Expert Center of the MOH",
      "localName": "Державний експертний центр МОЗ",
      "role": "医療機器の技術評価・国家登録の専門評価",
      "url": "https://www.dec.gov.ua/",
      "isPrimary": false
    },
    {
      "name": "NHSU",
      "fullName": "National Health Service of Ukraine",
      "localName": "Національна служба здоров'я України",
      "role": "公的医療保険（PMG）の管理・医療機器の償還",
      "url": "https://nszu.gov.ua/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "国家登録制度（Notified Body制度はまだ導入途上）",
    "description": "ウクライナでは現在、EU型のNotified Body制度は完全には導入されていない。Technical Regulation (2024) に基づき、適合性評価機関（CAB）の認定・指定の枠組みが整備中。現在は国家登録（State Registration）が主要な市場参入手続。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "Technical Regulation on Medical Devices (2024) に基づく定義。EU MDR Article 2(1) に大幅に整合。人体への診断・治療・予防等を目的とする器具・装置・ソフトウェア等。",
    "scope": "IVD は別途のTechnical Regulationで規定。SaMD も対象。",
    "notes": "2024年の新Technical Regulationにより、EU MDR の定義に大幅に近づいた。"
  },
  "primaryLaw": {
    "title": "Law of Ukraine 'On Medical Devices' (No. 2042-VIII)",
    "originalTitle": "Закон України «Про медичні вироби»",
    "enacted": "2017",
    "lastAmended": "2024",
    "url": "https://zakon.rada.gov.ua/",
    "description": "ウクライナの医療機器規制の基本法。Technical Regulations がこの法律に基づき制定される。"
  },
  "implementingRegulations": [
    {
      "title": "Technical Regulation on Medical Devices (CMU Resolution No. 927)",
      "date": "2024",
      "url": "https://www.kmu.gov.ua/",
      "description": "EU MDR に整合した新しい技術規則。分類・適合性評価・ラベリング等を規定。",
      "category": "技術規則"
    },
    {
      "title": "Procedure for State Registration of Medical Devices (CMU Resolution No. 1370)",
      "date": "2019（改正2024）",
      "url": "https://www.kmu.gov.ua/",
      "description": "医療機器の国家登録手続。",
      "category": "登録手続"
    },
    {
      "title": "Wartime Simplification Measures",
      "date": "2022-",
      "url": "https://moz.gov.ua/",
      "description": "戦時下の医療機器輸入・登録簡素化措置。緊急時の迅速供給を可能にする。",
      "category": "特別措置"
    }
  ],
  "relatedLaws": [
    {
      "title": "Law of Ukraine 'On Personal Data Protection' (No. 2297-VI)",
      "category": "データ保護",
      "enacted": "2010",
      "url": "https://zakon.rada.gov.ua/",
      "relevance": "健康データに適用。GDPR整合化も進行中。"
    },
    {
      "title": "Ukraine-EU Association Agreement",
      "category": "国際協定",
      "enacted": "2014",
      "url": "https://trade.ec.europa.eu/",
      "relevance": "EU規制への整合化の法的基盤。Annex III に技術規則整合化スケジュール。"
    }
  ],
  "classification": {
    "system": "4クラス制（Class I / IIa / IIb / III）— EU MDR 整合",
    "basis": "Technical Regulation (2024) に基づき、EU MDR Annex VIII に整合した分類規則を適用。",
    "classes": [
      {
        "name": "Class I",
        "nameJa": "クラスI",
        "riskLevel": "低",
        "description": "低リスク。",
        "examples": [
          "弾性包帯",
          "聴診器",
          "車椅子"
        ],
        "approvalPath": "自己適合宣言 + 国家登録"
      },
      {
        "name": "Class IIa",
        "nameJa": "クラスIIa",
        "riskLevel": "中低",
        "description": "中低リスク。",
        "examples": [
          "補聴器",
          "超音波装置",
          "コンタクトレンズ"
        ],
        "approvalPath": "適合性評価 + 国家登録"
      },
      {
        "name": "Class IIb",
        "nameJa": "クラスIIb",
        "riskLevel": "中高",
        "description": "中高リスク。",
        "examples": [
          "人工呼吸器",
          "血液透析装置",
          "輸液ポンプ"
        ],
        "approvalPath": "適合性評価 + 国家登録"
      },
      {
        "name": "Class III",
        "nameJa": "クラスIII",
        "riskLevel": "高",
        "description": "最高リスク。",
        "examples": [
          "人工心臓弁",
          "冠動脈ステント",
          "乳房インプラント"
        ],
        "approvalPath": "適合性評価 + 国家登録"
      }
    ],
    "rules": [
      "EU MDR Annex VIII に整合した分類規則（Technical Regulation 2024）"
    ],
    "totalProductCodes": "要確認"
  },
  "conformityAssessment": {
    "overview": "国家登録（State Registration）が市場参入の主要手続。Technical Regulation (2024) に基づき EU MDR 整合の適合性評価経路を段階的に導入中。CE マーキング製品に対する簡素化経路も存在。",
    "routes": [
      {
        "name": "State Registration",
        "nameJa": "国家登録",
        "applicableClasses": [
          "全クラス"
        ],
        "description": "MOH/SEC による技術文書審査・国家登録。CE マーキング取得済み製品は書類審査の簡素化あり。",
        "subtypes": [
          {
            "name": "簡素化登録（CE マーキング製品）",
            "description": "EU で CE マーキングを取得した製品は、追加臨床データ無しの書類審査で登録可能。"
          }
        ],
        "avgReviewTime": "90〜180日（通常）/ 30〜60日（簡素化）",
        "fee": "要確認",
        "url": "https://moz.gov.ua/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "MOH/SEC オンライン提出",
    "url": "https://www.dec.gov.ua/",
    "description": "電子申請システムが整備中。一部書類は物理提出が必要な場合あり。",
    "mandatory": false
  },
  "udi": {
    "required": false,
    "system": "導入準備中（EU UDI に整合予定）",
    "description": "Technical Regulation (2024) にUDI要件が含まれるが、完全義務化は段階的。",
    "url": null,
    "timeline": "EU MDR 整合化の進捗に連動"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "Derzhliktehnoservis ビジランスシステム",
      "mandatory": true,
      "url": "https://www.dls.gov.ua/",
      "description": "医療機器関連の有害事象をDerzhliktehnoservisに報告義務。EU Vigilance に整合化を推進。"
    },
    "recalls": {
      "authority": "Derzhliktehnoservis / MOH",
      "description": "市場からの回収・是正措置はDerzhliktehnoservis/MOHが監督。",
      "url": "https://www.dls.gov.ua/"
    },
    "surveillance": "市販後監視制度はEU PMS要件に整合化を推進中。戦時下で実施に制約あり。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "MOH",
    "name": "Certificate of Free Sale / State Registration Certificate",
    "description": "MOH が国家登録証を発行。輸出用のCFSも申請可能。",
    "processingTime": "要確認",
    "url": "https://moz.gov.ua/"
  },
  "reimbursement": {
    "system": "PMG（Program of Medical Guarantees）— NHSU",
    "authority": "NHSU / MOH",
    "description": "ウクライナは2018年にNHSUを設立し、PMG（医療保証プログラム）による公的医療を提供。医療機器の償還はPMGパッケージに含まれる範囲内。病院への機器供給は公的調達（ProZorro）を通じて実施。戦時下で国際ドナー支援による機器供給も大きな役割。",
    "codingSystems": [
      "NHSU サービスパッケージコード"
    ],
    "url": "https://nszu.gov.ua/"
  },
  "marketingRules": {
    "authority": "MOH / Derzhliktehnoservis",
    "description": "登録済み機器のみ販売可。広告規制は Law on Advertising に基づく。",
    "keyRules": [
      "ウクライナ語ラベリング・IFU必須",
      "国家登録済み機器のみ販売可",
      "虚偽広告の禁止"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "ウクライナはMDSAPプログラムに参加していない。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "ISO 13485 認証はQMS適合の証拠として認められる。DSTU EN ISO 13485（国家規格として採用）。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "DSTU EN ISO 14971 として採用。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "ソフトウェア医療機器に対して参照。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "DSTU EN IEC 60601 シリーズとして採用。"
    },
    "others": [
      {
        "name": "DSTU（ウクライナ国家規格）",
        "notes": "EN規格をDSTU EN として大量に採用（EU整合化の一環）。"
      }
    ]
  },
  "recentDevelopments": [
    {
      "date": "2024",
      "title": "Technical Regulation on Medical Devices 施行",
      "description": "CMU Resolution No. 927 により EU MDR に大幅に整合した新技術規則を導入。分類・適合性評価・ラベリング等を刷新。"
    },
    {
      "date": "2022-",
      "title": "戦時下の特別措置",
      "description": "ロシアの侵攻に伴い、医療機器の輸入・登録簡素化措置を実施。国際ドナー支援による機器供給体制も構築。"
    },
    {
      "date": "2024",
      "title": "EU加盟候補国としての整合化加速",
      "description": "2022年6月にEU加盟候補国の地位を獲得。医療機器規制を含む技術規則のEU整合化を加速。"
    }
  ],
  "lastUpdated": "2026-04-02",
  "verified": null
};
