// トルコ (Republic of Türkiye)
export default {
  "code": "TUR",
  "country": "トルコ",
  "countryEn": "Republic of Türkiye",
  "region": "Europe",
  "flag": "🇹🇷",
  "legalSystemOverview": {
    "type": "単一国家（シビルロー体系）— EU MDR 整合",
    "description": "トルコの医療機器規制は TITCK（Türkiye İlaç ve Tıbbi Cihaz Kurumu / Turkish Medicines and Medical Devices Agency）が管轄する。2021年に EU Regulation 2017/745（MDR）および EU Regulation 2017/746（IVDR）をほぼ逐語的にトルコ法に移植（transposition）。CE マーキング・Notified Body 制度・UDI・市販後監視等、EU の規制枠組みと高度に整合。「動的整合（Dynamic Alignment）」政策により、EU の規制変更に迅速に追随。",
    "keyCharacteristics": [
      "EU MDR 2017/745 のほぼ逐語的移植（2021年発効）",
      "CE マーキング必須（EU NB証明書を受入れ）",
      "ÜTS（Product Tracking System）への登録義務",
      "TITCK による Notified Body の指定権限",
      "「動的整合」政策による EU 規制変更への迅速追随"
    ]
  },
  "authorities": [
    {
      "name": "TİTCK",
      "fullName": "Türkiye İlaç ve Tıbbi Cihaz Kurumu",
      "localName": "Türkiye İlaç ve Tıbbi Cihaz Kurumu",
      "role": "医療機器の規制・市場監視・Notified Body 指定・ÜTS 管理",
      "url": "https://www.titck.gov.tr/",
      "isPrimary": true
    },
    {
      "name": "SGK",
      "fullName": "Sosyal Güvenlik Kurumu (Social Security Institution)",
      "localName": "Sosyal Güvenlik Kurumu",
      "role": "医療機器の保険償還・価格管理",
      "url": "https://www.sgk.gov.tr/",
      "isPrimary": false
    },
    {
      "name": "Ministry of Health",
      "fullName": "T.C. Sağlık Bakanlığı (Ministry of Health)",
      "localName": "T.C. Sağlık Bakanlığı",
      "role": "医療機器規制の政策立案・TITCK の上位機関",
      "url": "https://www.saglik.gov.tr/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "Notified Body 制度（EU MDR 整合）",
    "description": "トルコは EU MDR/IVDR に整合した Notified Body 制度を運用。TITCK が国内の Notified Body を指定する権限を有する。現在7つの Notified Body が認定済み。さらに、EU の Notified Body が MDR/IVDR に基づき発行した CE 証明書もトルコで受入れられる。",
    "bodies": [
      {
        "name": "トルコ国内認定 NB（7機関）",
        "id": "TITCK指定",
        "scope": "EU MDR/IVDR 整合"
      }
    ]
  },
  "deviceDefinition": {
    "legalDefinition": "トルコ医療機器規制（EU MDR 2017/745 の移植）Article 2 に基づく定義。EU MDR と同一。疾病の診断・予防・モニタリング・予測・治療等を目的とする器具・装置・ソフトウェア・材料等。",
    "scope": "IVD（IVDR 2017/746 の移植で別途規制）、付属品、SaMD を含む。EU MDR Article 1(2) の範囲に整合。",
    "notes": "EU MDR と同様、特定の美容製品、清浄・消毒製品、遺伝子治療製品等の取扱いに関する規定あり。"
  },
  "primaryLaw": {
    "title": "Tıbbi Cihaz Yönetmeliği (Medical Device Regulation)",
    "originalTitle": "Tıbbi Cihaz Yönetmeliği",
    "enacted": "2021-06-02",
    "lastAmended": "2024-08-17（Official Gazette No. 32635）",
    "url": "https://www.titck.gov.tr/",
    "description": "EU Regulation 2017/745（MDR）のほぼ逐語的トルコ法移植。2021年6月2日発効。2024年8月にEU Regulation 2024/1860 の改正に追随して更新。医療機器のライフサイクル全体（設計・製造・適合性評価・市場投入・市販後監視）を規制。"
  },
  "implementingRegulations": [
    {
      "title": "In Vitro Tanı Amaçlı Tıbbi Cihaz Yönetmeliği (IVDR)",
      "date": "2022-05-26",
      "url": "https://www.titck.gov.tr/",
      "description": "EU Regulation 2017/746（IVDR）のトルコ法移植。IVD医療機器の規制。",
      "category": "IVD"
    },
    {
      "title": "ÜTS（Ürün Takip Sistemi）関連規則",
      "date": null,
      "url": "https://uts.saglik.gov.tr/",
      "description": "Product Tracking System への医療機器登録義務。EU の EUDAMED に相当するトルコの電子登録システム。",
      "category": "登録"
    },
    {
      "title": "2024年8月改正（Official Gazette No. 32635）",
      "date": "2024-08-17",
      "url": "https://www.titck.gov.tr/",
      "description": "EU Regulation 2024/1860 に追随した改正。EUDAMED モジュールの段階的義務化（2025年Q4〜）、供給途絶通知制度の導入、経過措置の延長等。",
      "category": "改正"
    }
  ],
  "relatedLaws": [
    {
      "title": "Kişisel Verilerin Korunması Kanunu (KVKK) — Law No. 6698",
      "category": "個人情報保護",
      "enacted": "2016",
      "url": null,
      "relevance": "トルコの個人データ保護法。コネクテッドデバイス・SaMD が取り扱う個人健康情報の保護。EU GDPR に類似。"
    },
    {
      "title": "Sosyal Sigortalar ve Genel Sağlık Sigortası Kanunu — Law No. 5510",
      "category": "社会保険",
      "enacted": "2006",
      "url": null,
      "relevance": "社会保険・一般健康保険法。SGK による医療機器の償還制度の法的根拠。"
    }
  ],
  "classification": {
    "system": "4クラス制（Class I / IIa / IIb / III）— EU MDR 整合",
    "basis": "リスクベース（EU MDR Annex VIII 分類ルール）",
    "classes": [
      {
        "name": "Class I",
        "nameJa": "クラスI",
        "riskLevel": "低リスク",
        "description": "最低リスク。自己適合性宣言（NB不要、ただし滅菌/計測/再使用外科器具はNB必要）。",
        "examples": [
          "非滅菌包帯",
          "車椅子",
          "聴診器"
        ],
        "approvalPath": "自己適合性宣言 + CE マーキング + ÜTS登録"
      },
      {
        "name": "Class IIa",
        "nameJa": "クラスIIa",
        "riskLevel": "低〜中リスク",
        "description": "低〜中リスク。Notified Body の適合性評価が必要。",
        "examples": [
          "血圧計",
          "補聴器",
          "超音波プローブ"
        ],
        "approvalPath": "NB適合性評価 + CE マーキング + ÜTS登録"
      },
      {
        "name": "Class IIb",
        "nameJa": "クラスIIb",
        "riskLevel": "中〜高リスク",
        "description": "中〜高リスク。Notified Body の詳細な適合性評価が必要。",
        "examples": [
          "人工呼吸器",
          "血液透析装置",
          "骨接合プレート"
        ],
        "approvalPath": "NB適合性評価 + CE マーキング + ÜTS登録"
      },
      {
        "name": "Class III",
        "nameJa": "クラスIII",
        "riskLevel": "高リスク",
        "description": "最高リスク。Notified Body の最も厳格な適合性評価。臨床評価が必須。",
        "examples": [
          "心臓弁",
          "冠動脈ステント",
          "埋込み型除細動器",
          "乳房インプラント"
        ],
        "approvalPath": "NB適合性評価（技術文書 + 設計審査）+ CE マーキング + ÜTS登録"
      }
    ],
    "rules": [
      {
        "id": "EU MDR Annex VIII 分類ルール（22ルール）",
        "description": "EU MDR Annex VIII に準拠した22の分類ルール。侵襲性・持続時間・能動/非能動・SaMD等の基準で分類。EU MDR と同一。",
        "url": "https://www.titck.gov.tr/"
      }
    ],
    "totalProductCodes": "EU MDR Annex VIII 準拠の22分類ルール（EU GMDN/EMDN に整合）"
  },
  "conformityAssessment": {
    "overview": "EU MDR に整合した適合性評価制度。Notified Body による適合性評価後、CE マーキングを取得し、ÜTS に登録。EU NB 証明書もトルコで受入れ可能。",
    "routes": [
      {
        "name": "Self-Declaration (Class I)",
        "nameJa": "自己適合性宣言（クラスI）",
        "applicableClasses": [
          "Class I（非滅菌・非計測・非再使用外科器具）"
        ],
        "description": "低リスク機器は製造業者の自己適合性宣言で CE マーキング取得。NB は不要（ただし滅菌/計測/再使用外科器具は NB 必要）。",
        "subtypes": [],
        "avgReviewTime": "自己宣言のため審査不要。ÜTS登録は約1週間。",
        "fee": "ÜTS登録手数料",
        "url": "https://www.titck.gov.tr/"
      },
      {
        "name": "Notified Body Conformity Assessment (Class IIa / IIb / III)",
        "nameJa": "Notified Body 適合性評価（クラスIIa/IIb/III）",
        "applicableClasses": [
          "Class IIa",
          "Class IIb",
          "Class III"
        ],
        "description": "EU MDR に基づく適合性評価手続き。Notified Body が技術文書審査・QMS監査・必要に応じて設計審査を実施。EU NB 証明書もトルコ市場で有効。",
        "subtypes": [
          {
            "name": "EU NB Certificate",
            "description": "EU の Notified Body が MDR/IVDR に基づき発行した CE 証明書はトルコでも受入れ可能。追加のトルコ固有審査は不要。"
          },
          {
            "name": "Turkish NB Certificate",
            "description": "TITCK が指定したトルコ国内の Notified Body による適合性評価。"
          }
        ],
        "avgReviewTime": "NB審査: 6〜18ヶ月（機器クラスによる）。ÜTS登録: 約1週間。",
        "fee": "NB手数料（NB毎に異なる）+ ÜTS登録手数料",
        "url": "https://www.titck.gov.tr/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "ÜTS (Ürün Takip Sistemi / Product Tracking System)",
    "url": "https://uts.saglik.gov.tr/",
    "description": "ÜTS はトルコの医療機器電子登録・追跡システム。EU の EUDAMED に相当。全ての医療機器は市場投入前に ÜTS への登録が義務。製造業者情報・機器情報・CE証明書・適合性宣言等を電子的に登録。MERSIS（Central Registration System）への事前登録も必要。",
    "mandatory": true
  },
  "udi": {
    "required": true,
    "system": "UDI System（EU MDR 整合）— ÜTS 連携",
    "description": "EU MDR に整合した UDI 制度。製造業者は市場投入前に UDI コードを機器・包装に付与。ÜTS データベースに UDI 情報を登録。EUDAMED モジュールの段階的導入（2025年Q4〜）に連動。",
    "url": "https://uts.saglik.gov.tr/",
    "timeline": "2021年発効。EUDAMED 連携モジュールは2025年Q4〜段階的義務化。"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "Materiovigilance — EU MDR 整合",
      "mandatory": true,
      "url": "https://www.titck.gov.tr/",
      "description": "EU MDR の Vigilance 制度に整合。製造業者は重篤なインシデントを ÜTS 経由で TITCK に報告義務。報告期限: 重大な公衆衛生リスク（即時）、死亡・重篤な健康悪化（10日以内）、その他の重篤インシデント（15日以内）。年次安全性報告書の提出義務。"
    },
    "recalls": {
      "authority": "TİTCK",
      "description": "EU MDR の FSCA（Field Safety Corrective Action）制度に整合。製造業者は安全性是正措置を TITCK に通知し、Field Safety Notice を発行。TITCK は市場監視・取締りを実施。",
      "url": "https://www.titck.gov.tr/"
    },
    "surveillance": "EU MDR に整合した Post-Market Surveillance（PMS）制度。製造業者は PMS 計画の策定・実施が義務。Class IIa/IIb/III は PSUR（Periodic Safety Update Report）の作成・提出が必要。TITCK による市場監視査察。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "TİTCK",
    "name": "Certificate of Free Sale (CFS)",
    "description": "TITCK が ÜTS 登録済み医療機器について発行する自由販売証明書。輸出先国の当局が要求する場合に使用。",
    "processingTime": "約1〜2週間",
    "url": "https://www.titck.gov.tr/"
  },
  "reimbursement": {
    "system": "SGK（社会保障機構）— 一般健康保険",
    "authority": "SGK (Sosyal Güvenlik Kurumu / Social Security Institution)",
    "description": "SGK がトルコの一般健康保険制度の下で医療機器の償還を管理。SUT（Sağlık Uygulama Tebliği / Health Implementation Communiqué）に基づく償還リスト・参照価格制度。テンダー（入札）制度も重要。",
    "codingSystems": [
      "SUT (Sağlık Uygulama Tebliği)",
      "GMDN / EMDN（機器命名）",
      "ÜTS Product Code"
    ],
    "url": "https://www.sgk.gov.tr/"
  },
  "marketingRules": {
    "authority": "TİTCK",
    "description": "医療機器の広告は TITCK の規制に基づく。EU MDR に整合したラベリング要件。一般消費者向け広告は制限的。医療専門家向けの情報提供は別途規制。",
    "keyRules": [
      "CE マーキング・ÜTS 登録されていない機器の販売・広告禁止",
      "EU MDR に整合したラベリング・IFU 要件",
      "一般消費者向け医療機器広告の制限",
      "トルコ語でのラベリング・IFU 義務"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "トルコは MDSAP の参加国ではない。EU MDR に整合した独自の QMS/GMP 査察制度を運用。ISO 13485 認証が CE マーキングの前提。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "CE マーキングの前提として ISO 13485:2016 認証が必須。EU MDR の QMS 要件に整合。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "EU MDR の一般安全性能要件（GSPR）に整合。リスクマネジメントの必須規格。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "SaMD を含むソフトウェア搭載機器に必須。EU MDR 整合規格。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "医用電気機器の安全・性能要求。EU MDR 整合規格。"
    },
    "others": [
      {
        "standard": "ISO 10993 シリーズ",
        "notes": "生体適合性評価。EU MDR 整合規格。"
      },
      {
        "standard": "EU MDR Harmonised Standards",
        "notes": "EU 官報公示の整合規格がトルコでも参照される"
      }
    ]
  },
  "recentDevelopments": [
    {
      "date": "2024-08",
      "title": "EU Regulation 2024/1860 への追随改正",
      "description": "EU が2024年3月に採択した MDR/IVDR 改正（Regulation 2024/1860）に5ヶ月で追随。Official Gazette No. 32635（2024年8月17日）で公布。EUDAMED モジュールの段階的義務化、供給途絶通知制度の導入。"
    },
    {
      "date": "2025-Q4",
      "title": "EUDAMED モジュール段階的導入開始予定",
      "description": "EU に連動してトルコでも EUDAMED モジュールの段階的義務化が2025年Q4から開始予定。ÜTS との連携方法の詳細は TITCK ガイドラインで公表予定。"
    },
    {
      "date": "2025-12",
      "title": "供給途絶通知制度の経過措置期限",
      "description": "医療機器の供給途絶・中止の事前通知制度について、2025年12月31日までの経過措置期間を設定。企業のサプライチェーン監視システム構築を促進。"
    },
    {
      "date": "2025-H2",
      "title": "供給途絶ガイドライン公表予定",
      "description": "TITCK が2025年下半期に包括的ガイドラインを公表予定。「重大な被害」の定量的閾値、不可抗力の立証基準、Excel添付の電子データ形式等を明確化。"
    }
  ],
  "lastUpdated": "2026-04-02",
  "verified": null
};
