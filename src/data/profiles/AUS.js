// オーストラリア (Australia)
export default {
  "code": "AUS",
  "country": "オーストラリア",
  "countryEn": "Australia",
  "region": "ASPAC",
  "flag": "🇦🇺",
  "legalSystemOverview": {
    "type": "連邦制（Federal Commonwealth system）",
    "description": "TGA（治療用品管理局）が医療機器の規制・審査・市販後監視を一元的に所管する。Therapeutic Goods Act 1989 に基づき、オーストラリアで供給される全ての医療機器はARTG（オーストラリア治療用品登録簿）への登録が必要。EUに整合した分類体系を採用しつつ、MDSAP創設メンバーとして国際的な規制調和を推進する先進国。オーストラリアの規制承認は多くの国で参照規制として認められている。",
    "keyCharacteristics": [
      "TGA による連邦レベルの一元的規制体制",
      "ARTG（Australian Register of Therapeutic Goods）への登録義務",
      "EU MDR に整合した分類体系（Class I〜III, AIMD, IVD）",
      "Australian Sponsor（現地責任者）の設置義務",
      "MDSAP 創設メンバーとしての国際調和推進",
      "Essential Principles（基本原則）への適合要求"
    ]
  },
  "authorities": [
    {
      "name": "TGA",
      "fullName": "Therapeutic Goods Administration",
      "localName": null,
      "role": "医療機器の審査・登録（ARTG）・市販後監視・リコール管理・臨床試験監督。オーストラリアにおける医療機器規制の中核機関。",
      "url": "https://www.tga.gov.au/",
      "isPrimary": true
    },
    {
      "name": "PBAC",
      "fullName": "Pharmaceutical Benefits Advisory Committee",
      "localName": null,
      "role": "医療機器を含む治療用品の費用対効果評価と公的給付推奨（主に医薬品だが、一部の医療機器関連技術にも関与）。",
      "url": "https://www.pbs.gov.au/info/industry/listing/participants/pbac",
      "isPrimary": false
    },
    {
      "name": "ACCC",
      "fullName": "Australian Competition and Consumer Commission",
      "localName": null,
      "role": "消費者保護法に基づく医療機器の広告・マーケティングに関する監視。虚偽・誤解を招く表現の規制。",
      "url": "https://www.accc.gov.au/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "EU Notified Body 認証の受入れ + TGA適合性評価",
    "description": "TGAはEU Notified Body が発行した適合性評価認証を一定範囲で受入れる。クラスI機器は製造業者の自己宣言で登録可能。クラスIIa以上はTGAによる審査またはEU/MDSAP認証の活用が可能。TGA自体が適合性評価を行う点がEU制度と異なる。",
    "bodies": [
      {
        "name": "TGA（直接審査）",
        "url": "https://www.tga.gov.au/how-we-regulate/manufacturing-and-quality/conformity-assessment"
      }
    ]
  },
  "deviceDefinition": {
    "legalDefinition": "人の疾病の診断、予防、監視、治療若しくは緩和、負傷若しくは障害の診断・監視・治療・緩和・補償、解剖学的構造若しくは生理学的過程の検査・置換・修正、又は人体からの検体の体外検査による情報提供を目的として、主たる作用が薬理学的・免疫学的・代謝的手段ではない器具、装置、機器、材料その他の物品（Therapeutic Goods Act 1989 に基づく）",
    "scope": "能動機器・非能動機器・体外診断用医療機器（IVD）・能動埋込み医療機器（AIMD）・ソフトウェア（SaMD）を含む。",
    "notes": "コンビネーション製品（医療機器と医薬品の組合せ）はTGAが主たる作用に基づき規制区分を判断。"
  },
  "primaryLaw": {
    "title": "Therapeutic Goods Act 1989",
    "originalTitle": "Therapeutic Goods Act 1989",
    "enacted": "1989-11-07",
    "lastAmended": "2025-09-04",
    "url": "https://www.legislation.gov.au/Details/C2023C00242",
    "description": "オーストラリアにおける治療用品（医薬品・医療機器・生物製剤）規制の根拠法。ARTG登録制度、適合性評価、市販後監視、リコール権限、広告規制を包括的に規定。2002年改正で医療機器に関する章を大幅整備。"
  },
  "implementingRegulations": [
    {
      "title": "Therapeutic Goods (Medical Devices) Regulations 2002",
      "date": "2002-10-04",
      "url": "https://www.legislation.gov.au/Details/F2023C00670",
      "description": "医療機器の分類、Essential Principles（基本原則）への適合要件、適合性評価手続、ARTG登録要件等を詳細に規定。EU MDD/MDRの枠組みをオーストラリア法に適合させた規則。",
      "category": "基本規則"
    },
    {
      "title": "Therapeutic Goods Order No. 110 — Essential Principles",
      "date": "2022-07-01",
      "url": "https://www.legislation.gov.au/Details/F2022L00996",
      "description": "医療機器が満たすべき安全性・性能に関する基本原則（Essential Principles）を規定。EU MDRのGSPR（General Safety and Performance Requirements）に整合。",
      "category": "基本要件"
    },
    {
      "title": "Therapeutic Goods (Manufacturing Principles) Determination 2020",
      "date": "2020-08-01",
      "url": "https://www.tga.gov.au/manufacturing-principles",
      "description": "医療機器のGMP（製造品質管理基準）を規定。ISO 13485に整合した製造管理要件。",
      "category": "GMP"
    }
  ],
  "relatedLaws": [
    {
      "title": "Privacy Act 1988",
      "category": "データ保護",
      "enacted": "1988-12-14",
      "url": "https://www.legislation.gov.au/Details/C2023C00130",
      "relevance": "医療機器から収集される健康情報の取扱いに適用。Australian Privacy Principles（APPs）の遵守が必要。2024年改正で保護強化。"
    },
    {
      "title": "Therapeutic Goods Advertising Code",
      "category": "広告",
      "enacted": "2021-01-01",
      "url": "https://www.tga.gov.au/resources/resource/guidance/therapeutic-goods-advertising-code-2021",
      "relevance": "医療機器を含む治療用品の広告に関する基準。消費者向け広告の内容要件と禁止表現を規定。TGAが監督。"
    },
    {
      "title": "Australian Industrial Chemicals Introduction Scheme (AICIS) Act 2019",
      "category": "化学物質",
      "enacted": "2019-07-01",
      "url": "https://www.industrialchemicals.gov.au/",
      "relevance": "医療機器に含まれる化学物質（旧NICNAS所管）の安全性評価に関連。2020年にNICNASからAICISに移行。"
    },
    {
      "title": "Competition and Consumer Act 2010",
      "category": "消費者保護",
      "enacted": "2010-01-01",
      "url": "https://www.legislation.gov.au/Details/C2023C00368",
      "relevance": "医療機器の安全基準、リコール権限、虚偽・誤解を招く広告の禁止に関する消費者保護規定。ACCCが監督。"
    }
  ],
  "classification": {
    "system": "EU整合型分類体系",
    "basis": "意図する使用目的、侵襲性、使用期間、能動/非能動等のリスク要因に基づく分類。EU MDD/MDR の分類ルールに整合。",
    "classes": [
      {
        "name": "Class I",
        "nameJa": "クラスI",
        "riskLevel": "低",
        "description": "低リスクの医療機器。自己宣言に基づきARTGに登録（Include）。測定機能付き・滅菌品は追加要件あり。",
        "examples": [
          "聴診器",
          "ウォーキングフレーム",
          "非滅菌手術器具",
          "舌圧子",
          "コールドパック"
        ],
        "approvalPath": "ARTG Include（届出登録）"
      },
      {
        "name": "Class IIa",
        "nameJa": "クラスIIa",
        "riskLevel": "中低",
        "description": "中低リスクの医療機器。TGA審査またはEU認証に基づきARTGに登録。",
        "examples": [
          "補聴器",
          "超音波画像診断装置",
          "歯科用レジン",
          "コンタクトレンズ洗浄液",
          "手術用吸引器"
        ],
        "approvalPath": "ARTG Register（TGA審査登録）"
      },
      {
        "name": "Class IIb",
        "nameJa": "クラスIIb",
        "riskLevel": "中高",
        "description": "中高リスクの医療機器。TGAによる詳細な審査を経てARTGに登録。",
        "examples": [
          "人工呼吸器",
          "血液透析器",
          "整形外科用ボーンプレート",
          "輸液ポンプ",
          "コンタクトレンズ（長期）"
        ],
        "approvalPath": "ARTG Register（TGA審査登録）"
      },
      {
        "name": "Class III",
        "nameJa": "クラスIII",
        "riskLevel": "高",
        "description": "最高リスクの医療機器。TGAによる最も厳格な審査。臨床エビデンスの提出が通常必要。",
        "examples": [
          "心臓ペースメーカー",
          "人工心臓弁",
          "薬剤溶出型ステント",
          "乳房インプラント",
          "脊椎インプラント"
        ],
        "approvalPath": "ARTG Register（TGA審査登録 / Application audit）"
      },
      {
        "name": "AIMD",
        "nameJa": "能動埋込み医療機器",
        "riskLevel": "高",
        "description": "体内に外科的に埋め込まれ、電気エネルギー等で動作する医療機器。クラスIII相当の審査。",
        "examples": [
          "植込み型除細動器（ICD）",
          "人工内耳",
          "脳深部刺激装置",
          "植込み型インスリンポンプ"
        ],
        "approvalPath": "ARTG Register（TGA審査登録）"
      }
    ],
    "rules": [
      "EU MDD/MDR 分類ルールに整合した分類基準",
      "TGA Classification Rules（Schedule 2 of Medical Devices Regulations）",
      "IVDは別途4クラス（1〜4）に分類",
      "SaMDはその意図する使用目的に応じて分類"
    ],
    "totalProductCodes": "GMDN（Global Medical Device Nomenclature）を使用"
  },
  "conformityAssessment": {
    "overview": "オーストラリアで医療機器を供給するにはARTG登録が必要。Australian Sponsor（現地責任者）がTGAに申請を行う。クラスIはInclude（届出登録）、クラスIIa以上はRegister（審査登録）が必要。EU Notified Body認証やMDSAP報告書を活用して審査を効率化する経路が存在する。全クラスでEssential Principlesへの適合が要求される。",
    "routes": [
      {
        "name": "ARTG Include",
        "nameJa": "ARTG届出登録（Include）",
        "applicableClasses": [
          "Class I"
        ],
        "description": "低リスクのクラスI機器について、Australian Sponsorが自己適合宣言に基づきARTGへの登録を届出。TGAによる事前審査は実施されないが、Essential Principlesへの適合が前提。",
        "subtypes": [],
        "avgReviewTime": "約20営業日",
        "fee": "AUD 1,290（2025/26年度）",
        "url": "https://www.tga.gov.au/resources/resource/guidance/medical-devices-how-include-devices-artg"
      },
      {
        "name": "ARTG Register — Standard",
        "nameJa": "ARTG審査登録（Standard）",
        "applicableClasses": [
          "Class IIa",
          "Class IIb",
          "Class III",
          "AIMD"
        ],
        "description": "TGAがEssential Principlesへの適合性、技術文書、臨床エビデンス等を審査。有効なEU認証またはMDSAP報告書の提出により審査が効率化される場合がある。",
        "subtypes": [
          "新規登録申請",
          "変更申請（Variation）",
          "更新申請（Renewal）"
        ],
        "avgReviewTime": "クラスIIa: 4〜6ヶ月 / クラスIIb: 6〜9ヶ月 / クラスIII・AIMD: 9〜12ヶ月",
        "fee": "AUD 4,040〜36,700（クラスにより異なる、2025/26年度）",
        "url": "https://www.tga.gov.au/resources/resource/guidance/medical-devices-how-register-devices-artg"
      },
      {
        "name": "ARTG Register — Priority Review",
        "nameJa": "優先審査",
        "applicableClasses": [
          "Class IIb",
          "Class III",
          "AIMD"
        ],
        "description": "重大な医療ニーズに対応する革新的機器に対する優先審査経路。TGAが審査を迅速に実施。",
        "subtypes": [],
        "avgReviewTime": "通常の半分程度の期間",
        "fee": "追加手数料あり",
        "url": "https://www.tga.gov.au/resources/resource/guidance/priority-review-pathway-medical-devices"
      }
    ]
  },
  "electronicSubmission": {
    "system": "TGA Business Services (TBS) / eBusiness Portal",
    "url": "https://www.tga.gov.au/tga-business-services",
    "description": "TGA Business Servicesポータルを通じて医療機器のARTG登録申請、変更申請、有害事象報告等を電子的に提出。2024年に新プラットフォームへ移行が進行中。",
    "mandatory": true
  },
  "udi": {
    "required": true,
    "system": "TGA UDI制度（段階的導入中）",
    "description": "TGAはIMDRF UDIガイダンスに基づく独自のUDI制度を導入中。GS1/HIBCC/ICCBBA の発行機関コードを使用。医療機器へのUDI表示とTGAデータベースへの情報登録を段階的に義務化。",
    "url": "https://www.tga.gov.au/how-we-regulate/supply-therapeutic-good/supply-medical-device/unique-device-identification",
    "timeline": "UDI規制枠組み: 2025年3月24日発効。クラスIII・IIb: ラベル表示・データ提出は2026年7月1日まで、ダイレクトマーキングはクラスIII 2028年1月1日・クラスIIb 2029年1月1日 / クラスIIa: ラベル表示・データ提出は2027年7月1日まで / クラスI: 2028年7月1日まで / 既存品の全面ラベル対応: 2030年1月1日"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "Mandatory Problem Reporting",
      "mandatory": true,
      "url": "https://www.tga.gov.au/reporting-problems",
      "description": "Australian Sponsorは医療機器に関連する重篤有害事象・不具合をTGAに報告する義務がある。死亡・重篤な健康被害は10営業日以内、その他は30営業日以内に報告。医療従事者・消費者からの自主報告制度も運用。"
    },
    "recalls": {
      "authority": "TGA",
      "description": "TGAがUniform Recall Procedure for Therapeutic Goodsに基づきリコールを監督。スポンサーが自主的に回収を実施し、TGAに報告。リコール分類はClass I（重篤）〜Class III（軽微）。TGAウェブサイトでリコール情報を公開。",
      "url": "https://www.tga.gov.au/safety/recalls-and-alerts/medical-device-recalls"
    },
    "surveillance": "スポンサーは市販後監視計画の策定・実施が義務。TGAによるPost-market Review Program（特定機器カテゴリの体系的評価）も実施。ARTGの年次更新（Annual Charge）と併せて安全性情報を更新。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "TGA",
    "name": "Certificate of Free Sale (CFS)",
    "description": "ARTGに登録済みの医療機器について、TGAが自由販売証明書を発行。輸出先国の規制申請に使用。オンライン申請が可能。",
    "processingTime": "約20営業日",
    "url": "https://www.tga.gov.au/resources/resource/guidance/certificates-pharmaceutical-products-and-certificates-free-sale"
  },
  "reimbursement": {
    "system": "Medicare Benefits Schedule (MBS) / Prostheses List",
    "authority": "Department of Health and Aged Care / MSAC / PLAC",
    "description": "医療機器の公的償還は主に2経路：(1) MBS（メディケア給付スケジュール）の技術料に包含される経路、(2) Prostheses List（人工器官等リスト）に個別収載される経路。MSAC（Medical Services Advisory Committee）が新規医療技術の費用対効果を評価。PLAC（Prostheses List Advisory Committee）がインプラント等の価格・収載を審議。",
    "codingSystems": [
      "MBS Item Number（手術・検査コード）",
      "Prostheses List Billing Code",
      "AR-DRG（入院包括評価）"
    ],
    "url": "https://www.health.gov.au/topics/private-health-insurance/the-prostheses-list"
  },
  "marketingRules": {
    "authority": "TGA / ACCC",
    "description": "医療機器の広告はTherapeutic Goods Advertising Code 2021 に基づき規制。一般消費者向け広告はTGAの事前承認が一部必要。ACCC が消費者保護法に基づく虚偽広告を監視。",
    "keyRules": [
      "Therapeutic Goods Advertising Code 2021 の遵守",
      "処方機器（Prescription Device）の消費者向け広告の制限",
      "広告における効能・効果の表現にはエビデンスが必要",
      "TGA Complaints Resolution Panel による苦情処理",
      "Australian Consumer Law に基づく虚偽・誤解を招く表現の禁止"
    ]
  },
  "mdsap": {
    "status": "創設メンバー（Founding Regulatory Authority）",
    "description": "オーストラリア（TGA）はMDSAP（Medical Device Single Audit Program）の創設メンバー5カ国の一つ。MDSAP監査報告書をQMS適合性の根拠として受入れ。TGA自身のGMP監査の代替としてMDSAP報告書を活用可能で、国際企業の規制負担軽減に貢献。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "TGAの製造品質管理要件はISO 13485に整合。ARTG登録申請時にISO 13485適合の証拠提出が求められる。MDSAP監査でもISO 13485が基準。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "Essential Principlesにおいてリスクマネジメントの実施が要求され、ISO 14971への適合が事実上の標準。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "ソフトウェアを含む医療機器およびSaMDの開発にIEC 62304適合が求められる。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "医用電気機器の安全規格。AS/NZS IEC 60601シリーズとしてオーストラリア・ニュージーランド共同規格化。"
    },
    "others": [
      {
        "name": "ISO 10993シリーズ（生物学的安全性評価）",
        "notes": "生体接触医療機器の生物学的安全性評価に必須。"
      },
      {
        "name": "IEC 62366（ユーザビリティエンジニアリング）",
        "notes": "医療機器のユーザビリティ評価に推奨。TGAガイダンスで参照。"
      }
    ]
  },
  "recentDevelopments": [
    {
      "date": "2026-02",
      "title": "SaMD規制フレームワーク最終化",
      "description": "TGAがAI/ML搭載SaMDの分類・審査に関する規制フレームワークを最終化。変更管理計画（Predetermined Change Control Plan）の運用開始。"
    },
    {
      "date": "2025-10",
      "title": "EU MDR整合の規制改革進行",
      "description": "TGAがEU MDRのGSPRとの整合に向けたEssential Principles改訂案を公表。パブリックコメントを実施。"
    },
    {
      "date": "2025-07",
      "title": "MDSAP Version 2.0 への対応",
      "description": "MDSAP Version 2.0 の要件に対応するTGAガイダンスを公表。監査基準の強化と効率化を推進。"
    },
    {
      "date": "2025-04",
      "title": "サイバーセキュリティガイダンス改訂",
      "description": "ネットワーク接続型医療機器のサイバーセキュリティに関するTGAガイダンスを改訂。IEC 62443を参照し、SBOM（Software Bill of Materials）の提出を推奨。"
    }
  ],
  "lastUpdated": "2026-04-06",
  "verified": "2026-04-06"
};
