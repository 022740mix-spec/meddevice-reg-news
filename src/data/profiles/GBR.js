// イギリス (United Kingdom)
export default {
  "code": "GBR",
  "country": "イギリス",
  "countryEn": "United Kingdom",
  "region": "Europe",
  "flag": "🇬🇧",
  "legalSystemOverview": {
    "type": "議会主権制（Parliamentary sovereignty）",
    "description": "2020年のEU離脱（Brexit）により、英国は独自の医療機器規制体制を構築中。MHRA（医薬品・医療機器規制庁）が医療機器の規制・承認・市販後監視を一元的に所管する。EU MDR/IVDR から UK MDR 2002（改正版）への移行を段階的に進めており、CEマーキングからUKCAマーキングへの転換が進行中。北アイルランドはウィンザー枠組みに基づきEU MDRが引き続き適用される特殊な状況にある。",
    "keyCharacteristics": [
      "MHRA による一元的な規制体制",
      "Brexit 移行期間中はCEマーク受入継続（期限延長あり）",
      "UKCA マーキングへの段階的移行",
      "EU MDR に基づく4クラス分類（I/IIa/IIb/III）を継続",
      "北アイルランド: ウィンザー枠組みに基づきEU MDR/CE マークが適用",
      "UK Approved Bodies（EU Notified Bodies に相当）制度の整備"
    ]
  },
  "authorities": [
    {
      "name": "MHRA",
      "fullName": "Medicines and Healthcare products Regulatory Agency",
      "localName": null,
      "role": "医療機器の規制・承認・市販後安全対策・臨床試験監督を一元的に実施。UKCAマーキング制度の運営。",
      "url": "https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency",
      "isPrimary": true
    },
    {
      "name": "NICE",
      "fullName": "National Institute for Health and Care Excellence",
      "localName": null,
      "role": "医療技術評価（HTA）に基づく医療機器の費用対効果評価と使用推奨ガイダンスの発行。NHS における償還推奨。",
      "url": "https://www.nice.org.uk/",
      "isPrimary": false
    },
    {
      "name": "ASA",
      "fullName": "Advertising Standards Authority",
      "localName": null,
      "role": "医療機器を含む広告の適正性に関する監視・規制。CAP Code に基づく広告基準の適用。",
      "url": "https://www.asa.org.uk/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "UK Approved Bodies",
    "description": "Brexit後、EU Notified Bodies に代わりMHRAが指定するUK Approved Bodies が英国市場向け医療機器の適合性評価を実施。クラスIIa以上の機器はApproved Body による第三者評価が必要。移行期間中はEU Notified Bodies の認証も一定期間有効。2026年現在、BSI UK を含む複数のApproved Bodies が指定済み。",
    "bodies": [
      {
        "name": "BSI (British Standards Institution)",
        "url": "https://www.bsigroup.com/en-GB/medical-devices/"
      },
      {
        "name": "SGS United Kingdom Ltd",
        "url": "https://www.sgs.co.uk/en-gb/health-science"
      }
    ]
  },
  "deviceDefinition": {
    "legalDefinition": "人の疾病の診断、予防、監視、予測、予後判定、治療若しくは緩和、負傷若しくは障害の診断・監視・治療・緩和・補償、解剖学的構造若しくは生理学的過程の検査・置換・修正、又は人体からの検体の体外検査による情報提供を意図する器具、装置、機器、ソフトウェア、インプラント、試薬、材料その他の物品（UK MDR 2002 改正版に基づく）",
    "scope": "体外診断用医療機器（IVD）、能動埋込み医療機器（AIMD）、ソフトウェア（SaMD）を含む。EU MDR の定義を基本的に踏襲しつつ、英国法に適合させた定義。",
    "notes": "北アイルランドではEU MDR 第2条の定義が直接適用される。グレートブリテン（イングランド・ウェールズ・スコットランド）とは法的根拠が異なる点に注意。"
  },
  "primaryLaw": {
    "title": "Medicines and Medical Devices Act 2021",
    "originalTitle": "Medicines and Medical Devices Act 2021",
    "enacted": "2021-02-11",
    "lastAmended": "2025-06-01",
    "url": "https://www.legislation.gov.uk/ukpga/2021/3/contents",
    "description": "Brexit後の英国における医薬品・医療機器の枠組み法・授権法。EU法に依存しない独自の規制権限をMHRAに付与。実務上GB市場で医療機器を直接規律する主法はThe Medical Devices Regulations 2002（SI 2002/618, as amended）。本法は規則制定権限の委任、患者安全制度の強化等を規定。"
  },
  "implementingRegulations": [
    {
      "title": "The Medical Devices Regulations 2002 (SI 2002/618, as amended)",
      "date": "2002-06-13",
      "url": "https://www.legislation.gov.uk/uksi/2002/618/contents",
      "description": "英国における医療機器の分類、適合性評価、市場投入の要件を規定。元はEU指令のトランスポジション。Brexit後もMHRAによる段階的改正が進行中で、UKCAマーキング要件等が追加。",
      "category": "基本規則"
    },
    {
      "title": "The Medical Devices (Amendment) (Great Britain) Regulations 2023",
      "date": "2023-07-01",
      "url": "https://www.legislation.gov.uk/uksi/2023/627/contents",
      "description": "CEマーク認識期間の延長、UKCA移行スケジュールの改訂、市販後監視要件の強化等を含む重要改正。",
      "category": "改正規則"
    },
    {
      "title": "UK Medical Device Information System (UKMDIS) Regulations",
      "date": "2025-01-01",
      "url": "https://www.gov.uk/government/publications/medical-devices-registration",
      "description": "UDI制度と連携した医療機器情報システムの構築・登録義務に関する規則。段階的に義務化が進行中。",
      "category": "情報システム"
    }
  ],
  "relatedLaws": [
    {
      "title": "UK General Data Protection Regulation (UK GDPR)",
      "category": "データ保護",
      "enacted": "2018-05-25",
      "url": "https://www.legislation.gov.uk/eur/2016/679/contents",
      "relevance": "医療機器から取得される健康データ・個人データの処理に適用。EU GDPRを英国法に組み込んだもので、ICOが監督。"
    },
    {
      "title": "Data Protection Act 2018",
      "category": "データ保護",
      "enacted": "2018-05-23",
      "url": "https://www.legislation.gov.uk/ukpga/2018/12/contents",
      "relevance": "UK GDPRを補完する国内法。医療機器関連の個人データ処理における特別カテゴリーデータの取扱いを規定。"
    },
    {
      "title": "Environment Act 2021",
      "category": "環境",
      "enacted": "2021-11-09",
      "url": "https://www.legislation.gov.uk/ukpga/2021/30/contents",
      "relevance": "医療機器に含まれる有害化学物質の管理、使い捨て医療機器の廃棄に関する環境配慮義務に関連。"
    },
    {
      "title": "Consumer Protection Act 1987",
      "category": "製造物責任",
      "enacted": "1987-05-15",
      "url": "https://www.legislation.gov.uk/ukpga/1987/43/contents",
      "relevance": "医療機器の欠陥による損害に対する製造物責任を規定。厳格責任原則（strict liability）が適用される。"
    }
  ],
  "classification": {
    "system": "UK MDR 2002（SI 2002/618）に基づく4クラス分類",
    "basis": "意図する使用目的、侵襲性、使用期間、能動/非能動等のリスク要因に基づく分類。EU MDR Annex VIII の分類ルールを英国法に移行中。",
    "classes": [
      {
        "name": "Class I",
        "nameJa": "クラスI",
        "riskLevel": "低",
        "description": "低リスクの非侵襲性医療機器。自己適合宣言で市場投入可能（ただし測定機能付き・滅菌品・再使用可能手術器具はApproved Body関与が必要）。",
        "examples": [
          "聴診器",
          "弾性包帯",
          "車椅子",
          "手術用手袋（非滅菌）",
          "歩行器"
        ],
        "approvalPath": "自己適合宣言（Declaration of Conformity）"
      },
      {
        "name": "Class IIa",
        "nameJa": "クラスIIa",
        "riskLevel": "中低",
        "description": "中低リスクの医療機器。短期侵襲性機器や診断用画像装置等。Approved Body による適合性評価が必要。",
        "examples": [
          "超音波画像診断装置",
          "補聴器",
          "尿道カテーテル",
          "手術用ドレープ",
          "歯科用充填材"
        ],
        "approvalPath": "Approved Body による適合性評価"
      },
      {
        "name": "Class IIb",
        "nameJa": "クラスIIb",
        "riskLevel": "中高",
        "description": "中高リスクの医療機器。長期侵襲性機器や生体に重要な影響を与える機器。Approved Body による厳格な適合性評価が必要。",
        "examples": [
          "人工呼吸器",
          "整形外科用インプラント（非永久）",
          "輸液ポンプ",
          "血液透析器",
          "放射線治療計画ソフトウェア"
        ],
        "approvalPath": "Approved Body による適合性評価（技術文書の詳細審査）"
      },
      {
        "name": "Class III",
        "nameJa": "クラスIII",
        "riskLevel": "高",
        "description": "最高リスクの医療機器。永久埋め込み機器や生命維持に直結する機器。Approved Body によるフルQA審査および設計審査が必要。",
        "examples": [
          "心臓ペースメーカー",
          "人工心臓弁",
          "薬剤溶出型ステント",
          "乳房インプラント",
          "脊椎固定用インプラント"
        ],
        "approvalPath": "Approved Body による適合性評価（フルQA + 設計審査）"
      }
    ],
    "rules": [
      "EU MDR Annex VIII に基づく22の分類ルールを英国法に移行",
      "SaMD（プログラム医療機器）はRule 11により分類",
      "北アイルランドではEU MDRの分類ルールがそのまま適用",
      "CEマーク認識期間中はEU指令ベースの分類も有効"
    ],
    "totalProductCodes": "GMDN（Global Medical Device Nomenclature）を使用"
  },
  "conformityAssessment": {
    "overview": "英国市場への医療機器上市にはUKCAマーキングの取得が必要（移行期間中はCEマークも認識）。クラスIは自己適合宣言、クラスIIa以上はUK Approved Bodyによる適合性評価を経てUKCA宣言を行う。全クラスでMHRAへの機器登録が義務付けられている。北アイルランド市場にはCEマークまたはUKNI マークが必要。",
    "routes": [
      {
        "name": "UKCA Self-Declaration",
        "nameJa": "UKCA自己適合宣言",
        "applicableClasses": [
          "Class I（一般）"
        ],
        "description": "低リスクのクラスI機器について、製造業者が技術文書を作成し自己適合宣言を行いUKCAマークを貼付。MHRAへの機器登録は必須。",
        "subtypes": [],
        "avgReviewTime": "登録処理: 約10営業日",
        "fee": "MHRAへの登録: 1申請あたり£240",
        "url": "https://www.gov.uk/guidance/regulating-medical-devices-in-the-uk"
      },
      {
        "name": "UKCA with Approved Body",
        "nameJa": "Approved Body による適合性評価",
        "applicableClasses": [
          "Class I（測定・滅菌）",
          "Class IIa",
          "Class IIb",
          "Class III"
        ],
        "description": "UK Approved Body が品質マネジメントシステム審査、技術文書審査、型式試験等を実施。適合証明書発行後にUKCAマークを貼付可能。複数の適合性評価経路（Annex ベース）から選択。",
        "subtypes": [
          "フルQA審査（Annex IX相当）",
          "型式審査 + 製品検証（Annex X + XI相当）",
          "技術文書審査"
        ],
        "avgReviewTime": "6〜18ヶ月（クラスにより異なる）",
        "fee": "Approved Body により異なる（数千〜数万ポンド）",
        "url": "https://www.gov.uk/guidance/register-as-a-manufacturer-to-place-a-medical-device-on-the-uk-market"
      },
      {
        "name": "CE Mark Recognition (Transitional)",
        "nameJa": "CEマーク認識（移行措置）",
        "applicableClasses": [
          "全クラス"
        ],
        "description": "移行期間中、EU Notified Body が発行した有効なCE認証に基づき英国（グレートブリテン）市場に上市可能。EU MDR適合機器は2030年6月30日まで、EU MDD適合機器は2028年6月30日まで。さらに2026年2月にMHRAがCEマークの無期限認識を提案するパブリックコンサルテーションを開始（2026年4月10日締切）。",
        "subtypes": [],
        "avgReviewTime": "MHRAへの登録のみ（CE認証は取得済み前提）",
        "fee": "MHRA登録: 1申請あたり£240",
        "url": "https://www.gov.uk/government/publications/ce-marking-and-ukca-marking-for-medical-devices"
      }
    ]
  },
  "electronicSubmission": {
    "system": "MHRA Device Registration Portal",
    "url": "https://www.gov.uk/guidance/register-medical-devices-to-place-on-the-market",
    "description": "MHRAのオンラインポータルを通じて医療機器の登録を電子的に実施。英国市場に上市する全ての医療機器の製造業者またはUK Responsible Personによる登録が義務。",
    "mandatory": true
  },
  "udi": {
    "required": false,
    "system": "UK UDI制度（導入予定・未施行）",
    "description": "英国独自のUDI制度は今後のpre-market SIで導入予定。2026年4月時点では現行義務ではない。IMDRF UDIガイダンスに整合する方向で検討中。",
    "url": "https://www.gov.uk/government/publications/unique-device-identification-udi-system-for-medical-devices",
    "timeline": "未施行。具体的なクラス別スケジュールは今後のpre-market規則で規定予定。"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "Yellow Card Scheme（医療機器有害事象報告制度）",
      "mandatory": true,
      "url": "https://yellowcard.mhra.gov.uk/",
      "description": "製造業者はMHRAへの有害事象報告が義務。報告期限は3区分: serious public health threat 2日以内、death/unanticipated serious deterioration 10日以内、other serious incidents 15日以内。医療従事者・患者もYellow Card Schemeを通じて自主的に報告可能。PSURはMHRAへは要求時3営業日以内に提出、UK Approved Bodyへ定期提出。"
    },
    "recalls": {
      "authority": "MHRA",
      "description": "MHRAがField Safety Corrective Action（FSCA）およびリコールを監督。製造業者はField Safety Notice（FSN）を発行し、MHRAに報告。National Patient Safety Alertsによる医療現場への緊急通知システムも運用。",
      "url": "https://www.gov.uk/drug-device-alerts"
    },
    "surveillance": "製造業者は市販後監視計画（PMS Plan）の策定・実施が義務。クラスIIa以上は定期安全性更新報告書（PSUR）をMHRAに提出。重大インシデントのトレンド報告も必要。MHRAによる能動的サーベイランスプログラムも実施。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "MHRA",
    "name": "Certificate of Free Sale (CFS)",
    "description": "英国で合法的に販売されている医療機器について、MHRAが自由販売証明書を発行。輸出先国の規制申請に使用。オンラインで申請可能。",
    "processingTime": "約20営業日",
    "url": "https://www.gov.uk/guidance/apply-for-a-certificate-of-free-sale-for-a-medical-device"
  },
  "reimbursement": {
    "system": "National Health Service (NHS)",
    "authority": "NICE / NHS England",
    "description": "NICEの医療技術評価（HTA）に基づき、NHS における医療機器の使用推奨が決定される。Medical Technologies Evaluation Programme（MTEP）やDiagnostics Assessment Programme（DAP）を通じて費用対効果を評価。Innovation and Technology Payment（ITP）により革新的機器の早期導入を支援。NHSサプライチェーンを通じた調達も重要。",
    "codingSystems": [
      "OPCS-4（手術・処置コード）",
      "NHS eClass（製品分類コード）",
      "GHX/PEPPOL（調達コード）"
    ],
    "url": "https://www.nice.org.uk/about/what-we-do/our-programmes/nice-guidance/nice-medical-technologies-evaluation-programme"
  },
  "marketingRules": {
    "authority": "MHRA / ASA / CAP",
    "description": "医療機器の広告はCAP Code（Committee of Advertising Practice）およびMHRA Blue Guideに基づき規制。ASA が広告基準の遵守を監視。処方機器の一般消費者向け広告は制限あり。",
    "keyRules": [
      "CAP Code: 医療機器広告の正確性・誤解を招かない表現の義務",
      "MHRA Blue Guide: 医療機器の広告・販売促進に関するガイダンス",
      "処方医療機器の一般消費者向け広告の制限",
      "比較広告には客観的エビデンスが必要",
      "ASA によるクレーム調査と是正措置"
    ]
  },
  "mdsap": {
    "status": "オブザーバー（Observer、2021年3月〜）",
    "description": "英国（MHRA）は2021年3月にMDSAPのオブザーバーステータスを取得。正式な参加国（Regulatory Authority）ではない。MDSAP監査報告書の受入れ可能性を検討中の段階。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "UK MDR においてISO 13485準拠のQMSが要求される。UK Approved Body の適合性評価においてISO 13485認証が確認対象。BS EN ISO 13485として英国規格化。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "リスクマネジメントの実施が必須要件。BS EN ISO 14971として英国規格化。技術文書にリスクマネジメントファイルの提出が必要。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "ソフトウェアを含む医療機器およびSaMDの開発に適用。BS EN IEC 62304として英国規格化。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "医用電気機器の安全規格。BS EN IEC 60601シリーズとして英国規格化。適合性評価で遵守が確認される。"
    },
    "others": [
      {
        "name": "ISO 10993シリーズ（生物学的安全性評価）",
        "notes": "生体接触医療機器の生物学的安全性評価に必須。BS EN ISO 10993として規格化。"
      },
      {
        "name": "IEC 62443（サイバーセキュリティ）",
        "notes": "MHRAのサイバーセキュリティガイダンスで参照。ネットワーク接続型医療機器に推奨。"
      }
    ]
  },
  "recentDevelopments": [
    {
      "date": "2026-02",
      "title": "CEマーク無期限認識のパブリックコンサルテーション開始",
      "description": "MHRAが医療機器・IVDのCEマーク無期限認識を提案するパブリックコンサルテーションを開始（2026年4月10日締切）。UKCA完全移行方針からの重大な政策転換。"
    },
    {
      "date": "2025-06",
      "title": "The Medical Devices (Post-market Surveillance Requirements) (Amendment) (Great Britain) Regulations 2024 施行",
      "description": "2024年制定の医療機器PMS改正規則が2025年6月16日に施行。市販後監視に関する詳細要件（PMS計画、PSUR、安全性報告等）を追加。"
    },
    {
      "date": "2025-02",
      "title": "SaMD分類ガイダンス更新",
      "description": "MHRAがソフトウェア医療機器（SaMD）の分類に関するガイダンスを2025年2月3日に更新。AI/ML搭載機器の分類基準を明確化。"
    },
    {
      "date": "2023-08",
      "title": "UK Approved Body 3機関追加指定",
      "description": "MHRAがTÜV SÜD、Intertek、TÜV Rheinland UK の3機関をUK Approved Bodiesとして追加指定。指定AB数は計7機関に拡充。"
    }
  ],
  "lastUpdated": "2026-04-01",
  "verified": null
};
