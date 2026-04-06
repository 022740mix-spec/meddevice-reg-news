// ウクライナ (Ukraine)
export default {
  "code": "UKR",
  "country": "ウクライナ",
  "countryEn": "Ukraine",
  "region": "Europe",
  "flag": "🇺🇦",
  "legalSystemOverview": {
    "type": "独自制度（EU MDR への段階的整合化を推進中）",
    "description": "ウクライナは独自の医療機器規制制度を有するが、EU加盟を目指し、EU MDR/IVDR への整合化（approximation）を段階的に進めている。現行は2013年の技術規則（閣議決定第753/754/755号、EU指令93/42/EEC等に基づく）が適用されるが、EU MDR に整合した新技術規則が策定中。保健省（MOH）が政策策定、Держлікслужба（国家医薬品管理局/SMDC）が市場監視を担う。",
    "keyCharacteristics": [
      "EU MDR/IVDR への段階的整合化（approximation）を推進",
      "現行は技術規則（2013年、EU指令ベース）。MDR整合の新規則を策定中",
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
      "name": "SMDC",
      "fullName": "State Service of Ukraine on Medicines and Drugs Control",
      "localName": "Державна служба України з лікарських засобів та контролю за наркотиками (Держлікслужба)",
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
    "description": "ウクライナでは現在、EU型のNotified Body制度は完全には導入されていない。技術規則（CMU No. 753）に基づき適合性評価機関（CAB）の認定・指定の枠組みが整備されている。国家登録（State Registration）が主要な市場参入手続。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "技術規則（CMU No. 753, 2013年）に基づく定義。EU指令93/42/EECに整合。人体への診断・治療・予防等を目的とする器具・装置・ソフトウェア等で、主たる作用が薬理学的・免疫学的・代謝的手段によらないもの。",
    "scope": "IVD は別途の技術規則（CMU No. 754）で規定。SaMD も対象。",
    "notes": "EU MDR 整合の新技術規則が策定中であり、定義も更新される予定。"
  },
  "primaryLaw": {
    "title": "Technical Regulation on Medical Devices (CMU Resolution No. 753)",
    "originalTitle": "Технічний регламент щодо медичних виробів",
    "enacted": "2013",
    "lastAmended": "2024",
    "url": "https://zakon.rada.gov.ua/laws/show/753-2013-%D0%BF",
    "description": "2013年閣議決定第753号で承認された医療機器の技術規則。EU指令93/42/EECに基づく分類・適合性評価・ラベリング等を規定。EU MDR 整合の新技術規則が策定中だが、現行は本規則が適用。関連規則として IVD（第754号）、能動埋込み型機器（第755号）がある。"
  },
  "implementingRegulations": [
    {
      "title": "Technical Regulation on IVD Medical Devices (CMU Resolution No. 754)",
      "date": "2013",
      "url": "https://zakon.rada.gov.ua/laws/show/754-2013-%D0%BF",
      "description": "体外診断用医療機器の技術規則。EU指令98/79/ECに基づく。",
      "category": "技術規則"
    },
    {
      "title": "Technical Regulation on Active Implantable Medical Devices (CMU Resolution No. 755)",
      "date": "2013",
      "url": "https://zakon.rada.gov.ua/laws/show/755-2013-%D0%BF",
      "description": "能動埋込み型医療機器の技術規則。EU指令90/385/EECに基づく。",
      "category": "技術規則"
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
    "basis": "技術規則（CMU No. 753, 2013年）に基づき、EU指令93/42/EEC Annex IX の分類規則を適用。MDR Annex VIII 整合の新規則を策定中。",
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
      "技術規則（CMU No. 753）による分類規則（EU指令93/42/EEC Annex IX ベース）"
    ],
    "totalProductCodes": "要確認"
  },
  "conformityAssessment": {
    "overview": "国家登録（State Registration）が市場参入の主要手続。技術規則（CMU No. 753/754/755, 2013年）に基づく適合性評価を実施。CE マーキング製品に対する簡素化経路も存在。EU MDR 整合の新制度を策定中。",
    "routes": [
      {
        "name": "State Registration",
        "nameJa": "国家登録",
        "applicableClasses": [
          "全クラス"
        ],
        "description": "MOH/SEC による技術文書審査・国家登録。技術規則（CMU No. 753）に基づく適合性評価。CE マーキング取得済み製品は書類審査の簡素化あり。",
        "subtypes": [
          {
            "name": "簡素化登録（CE マーキング製品）",
            "description": "EU で CE マーキングを取得した製品は、追加臨床データ無しの書類審査で登録可能。"
          }
        ],
        "avgReviewTime": "要確認（公式情報で裏付け未取得）",
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
    "description": "現行の技術規則にはUDI要件は含まれていない。EU MDR 整合の新規則でUDI導入予定。",
    "url": null,
    "timeline": "EU MDR 整合化の進捗に連動"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "SMDC（Держлікслужба） ビジランスシステム",
      "mandatory": true,
      "url": "https://www.dls.gov.ua/",
      "description": "医療機器関連の有害事象をSMDC（Держлікслужба）に報告義務。EU Vigilance に整合化を推進。"
    },
    "recalls": {
      "authority": "SMDC（Держлікслужба） / MOH",
      "description": "市場からの回収・是正措置はSMDC（Держлікслужба）/MOHが監督。",
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
    "authority": "MOH / SMDC（Держлікслужба）",
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
      "title": "EU MDR 整合の新技術規則を策定中",
      "description": "現行の技術規則（CMU No. 753/754/755, 2013年）を EU MDR/IVDR に整合させる新規則を策定中。長い経過措置期間を含む見込み。"
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
  "lastUpdated": "2026-04-06",
  "verified": "2026-04-06"
};
