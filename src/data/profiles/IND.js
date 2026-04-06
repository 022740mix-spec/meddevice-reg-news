// インド (India)
export default {
  "code": "IND",
  "country": "インド",
  "countryEn": "India",
  "region": "ASPAC",
  "flag": "🇮🇳",
  "legalSystemOverview": {
    "type": "連邦制・議院内閣制（Federal parliamentary system）",
    "description": "CDSCO（中央医薬品基準管理機構）が医療機器の規制を中央レベルで所管する。Medical Devices Rules 2017 により医療機器に特化した規制枠組みが整備され、Drugs and Cosmetics Act 1940 の下位規則として運用。4クラス分類（A/B/C/D）を段階的に導入中で、クラスA/Bは州レベル、クラスC/Dは中央レベルでの承認が必要。急速な規制近代化が進行中だが、運用面では課題も残る。",
    "keyCharacteristics": [
      "CDSCO が中央レベルで医療機器規制を所管",
      "州薬事管理者（State Drug Controllers）が一部クラスの監督を担当",
      "4クラス分類（A/B/C/D）の段階的導入",
      "Medical Devices Rules 2017 による近代的規制枠組み",
      "Indian Authorized Representative の設置義務（海外製造業者）",
      "段階的な規制対象品目の拡大（Phased implementation）"
    ]
  },
  "authorities": [
    {
      "name": "CDSCO",
      "fullName": "Central Drugs Standard Control Organisation",
      "localName": null,
      "role": "医療機器の規制・クラスC/D機器の承認審査・臨床試験承認・輸入ライセンス発行・市販後監視。中央レベルの医療機器規制の中核機関。",
      "url": "https://cdsco.gov.in/opencms/opencms/en/Medical-Device-Diagnostics/Medical-Device-Diagnostics/",
      "isPrimary": true
    },
    {
      "name": "State Drug Controllers",
      "fullName": "State Drugs Control Administration",
      "localName": null,
      "role": "クラスA/B医療機器の製造ライセンス発行、州レベルでの品質監視・査察。各州にDrugs Controllerが設置。",
      "url": "https://cdsco.gov.in/opencms/opencms/en/state-drug-controller/",
      "isPrimary": false
    },
    {
      "name": "BIS",
      "fullName": "Bureau of Indian Standards",
      "localName": null,
      "role": "インド国家標準の策定・認証。医療機器に関するインド規格（IS規格）の策定。特定製品への強制BIS認証の適用。",
      "url": "https://www.bis.gov.in/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "CDSCO直接審査 + Notified Body（導入中）",
    "description": "インドではCDSCOが医療機器の登録・承認審査を直接実施する。Medical Devices Rules 2017に基づくNotified Body制度（第三者適合性評価機関）の整備が進行中だが、2026年現在はCDSCOによる直接審査が主流。品質管理審査（QMS audit）は認定された第三者機関が一部実施。",
    "bodies": [
      {
        "name": "CDSCO（直接審査）",
        "url": "https://cdsco.gov.in/opencms/opencms/en/Medical-Device-Diagnostics/Medical-Device-Diagnostics/"
      }
    ]
  },
  "deviceDefinition": {
    "legalDefinition": "疾病の診断、予防、監視、治療若しくは緩和、負傷若しくは障害の診断・監視・治療・緩和・補償、解剖学的構造若しくは生理学的過程の検査・置換・修正・支援、又は生命の維持・受胎の制御に使用される器具、装置、機器、インプラント、体外試薬、ソフトウェアその他の物品であって、主たる作用が薬理学的・免疫学的・代謝的手段ではないもの（Medical Devices Rules 2017, Rule 2(b)に基づく）",
    "scope": "体外診断用医療機器（IVD）を含む。SaMD（ソフトウェア医療機器）も対象。Drugs and Cosmetics Act 1940の下で医療機器として通知された品目が規制対象。",
    "notes": "インドでは段階的に規制対象品目を通知（Gazette notification）により拡大中。2026年現在、全ての医療機器が規制対象となるよう移行が進行中。"
  },
  "primaryLaw": {
    "title": "Drugs and Cosmetics Act 1940",
    "originalTitle": "The Drugs and Cosmetics Act, 1940 (Act No. 23 of 1940)",
    "enacted": "1940-04-10",
    "lastAmended": "2024-12-31",
    "url": "https://cdsco.gov.in/opencms/opencms/en/Acts-Rules/",
    "description": "インドにおける医薬品・化粧品・医療機器の規制根拠法。医療機器は2017年までは「医薬品」の一部として規制されていたが、Medical Devices Rules 2017の制定により独立した規制枠組みが整備された。製造・販売・輸入の許可制度、品質基準、罰則等を規定。"
  },
  "implementingRegulations": [
    {
      "title": "Medical Devices Rules 2017",
      "date": "2017-01-31",
      "url": "https://cdsco.gov.in/opencms/opencms/en/Medical-Device-Diagnostics/Medical-Device-Diagnostics/",
      "description": "医療機器に特化した規制規則。4クラス分類（A/B/C/D）、登録・承認手続、品質管理要件、臨床試験要件、市販後監視要件を規定。段階的に施行範囲を拡大中。",
      "category": "基本規則"
    },
    {
      "title": "Medical Devices (Amendment) Rules 2020",
      "date": "2020-02-11",
      "url": "https://cdsco.gov.in/opencms/opencms/en/Medical-Device-Diagnostics/Medical-Device-Diagnostics/",
      "description": "MDR 2017の改正。全ての医療機器を段階的に規制対象とするスケジュールの設定、輸入・製造ライセンス要件の明確化。",
      "category": "改正規則"
    },
    {
      "title": "Medical Device (Quality Management System) Guidelines",
      "date": "2021-06-01",
      "url": "https://cdsco.gov.in/opencms/opencms/en/Medical-Device-Diagnostics/Medical-Device-Diagnostics/",
      "description": "医療機器のQMS要件ガイダンス。ISO 13485に整合した品質管理システムの構築と遵守を要求。Schedule V（第5附則）に基づく要件。",
      "category": "QMS"
    }
  ],
  "relatedLaws": [
    {
      "title": "Digital Personal Data Protection Act 2023",
      "category": "データ保護",
      "enacted": "2023-08-11",
      "url": "https://www.meity.gov.in/data-protection-framework",
      "relevance": "医療機器から収集されるデジタル個人データの処理に適用。健康データはセンシティブデータとして追加的保護が必要。2025年から段階的施行。"
    },
    {
      "title": "Bureau of Indian Standards Act 2016",
      "category": "標準",
      "enacted": "2016-03-22",
      "url": "https://www.bis.gov.in/index.php/the-bureau-of-indian-standards-act-2016/",
      "relevance": "BISによるインド国家標準の策定権限。特定の医療機器に対するBIS強制認証の法的根拠。"
    },
    {
      "title": "Environment Protection Act 1986",
      "category": "環境",
      "enacted": "1986-05-23",
      "url": "https://www.indiacode.nic.in/handle/123456789/1860",
      "relevance": "医療機器の製造に伴う環境汚染防止、医療廃棄物（Biomedical Waste Management Rules 2016）の処理に関連。"
    },
    {
      "title": "Clinical Establishments (Registration and Regulation) Act 2010",
      "category": "医療施設",
      "enacted": "2010-08-19",
      "url": "https://www.indiacode.nic.in/handle/123456789/2058",
      "relevance": "医療機器を使用する臨床施設の登録・規制に関連。機器の適正使用環境の確保。"
    }
  ],
  "classification": {
    "system": "4クラス分類（A/B/C/D）",
    "basis": "意図する使用目的、人体へのリスクの程度に基づく分類。IMDRFの分類ルールを参考にしつつ、インド独自の分類基準を策定。段階的に規制対象品目を拡大中。",
    "classes": [
      {
        "name": "Class A",
        "nameJa": "クラスA",
        "riskLevel": "低",
        "description": "低リスクの医療機器。州レベルのDrugs Controllerによる登録。比較的簡素な手続き。",
        "examples": [
          "聴診器",
          "舌圧子",
          "手術用ガーゼ",
          "氷嚢",
          "歩行器"
        ],
        "approvalPath": "州登録（State Licensing Authority）"
      },
      {
        "name": "Class B",
        "nameJa": "クラスB",
        "riskLevel": "中低",
        "description": "中低リスクの医療機器。州レベルのDrugs Controllerによる登録。クラスAより詳細な技術文書が必要。",
        "examples": [
          "補聴器",
          "血圧計",
          "歯科用充填材",
          "コンドーム",
          "手術用手袋"
        ],
        "approvalPath": "州登録（State Licensing Authority）"
      },
      {
        "name": "Class C",
        "nameJa": "クラスC",
        "riskLevel": "中高",
        "description": "中高リスクの医療機器。CDSCO（中央レベル）による承認審査が必要。技術審査委員会による評価。",
        "examples": [
          "人工呼吸器",
          "血液透析器",
          "整形外科用インプラント（非永久）",
          "輸液ポンプ",
          "CT装置"
        ],
        "approvalPath": "CDSCO承認（中央レベル審査）"
      },
      {
        "name": "Class D",
        "nameJa": "クラスD",
        "riskLevel": "高",
        "description": "最高リスクの医療機器。CDSCOによる最も厳格な審査。臨床試験データの提出が通常必要。",
        "examples": [
          "心臓ペースメーカー",
          "人工心臓弁",
          "薬剤溶出型ステント",
          "乳房インプラント",
          "脳深部刺激装置"
        ],
        "approvalPath": "CDSCO承認（中央レベル審査 / 臨床試験データ要求）"
      }
    ],
    "rules": [
      "Medical Devices Rules 2017 Schedule I に基づく分類",
      "リスクベースの分類基準（侵襲性、使用期間、能動性等）",
      "Gazette notification により規制対象品目を段階的に追加",
      "IVDは別途分類（Class A-IVD〜D-IVD）"
    ],
    "totalProductCodes": "CDSCO Gazette Notification で通知された品目リスト"
  },
  "conformityAssessment": {
    "overview": "インドで医療機器を製造・販売・輸入するには、Medical Devices Rules 2017に基づく登録・承認が必要。クラスA/Bは州レベル、クラスC/DはCDSCO（中央レベル）で審査。海外製造業者はIndian Authorized Representativeの設置が義務。全クラスでQMS（ISO 13485準拠）の遵守が要求される。段階的に規制対象品目を拡大中。",
    "routes": [
      {
        "name": "State Registration",
        "nameJa": "州レベル登録",
        "applicableClasses": [
          "Class A",
          "Class B"
        ],
        "description": "低・中低リスクの医療機器について、州Drugs Controllerに製造ライセンス・販売ライセンスを申請。比較的簡素な手続きだが、QMS遵守とGMP適合が前提。",
        "subtypes": [
          "製造ライセンス（Manufacturing License）",
          "販売ライセンス（Sale License）",
          "輸入登録（Import Registration）"
        ],
        "avgReviewTime": "約1〜3ヶ月",
        "fee": "INR 5,000〜50,000程度",
        "url": "https://cdsco.gov.in/opencms/opencms/en/Medical-Device-Diagnostics/Medical-Device-Diagnostics/"
      },
      {
        "name": "CDSCO Registration/Approval",
        "nameJa": "CDSCO登録・承認",
        "applicableClasses": [
          "Class C",
          "Class D"
        ],
        "description": "中高・高リスクの医療機器について、CDSCOに登録・承認申請。技術審査委員会（MDAC: Medical Device Advisory Committee）による審査。クラスDは臨床試験データの提出が通常要求される。輸入品はImport License（Form 40）の取得が必要。",
        "subtypes": [
          "製造承認（Manufacturing License + Marketing Authorization）",
          "輸入ライセンス（Import License — Form 40）",
          "臨床試験承認（Clinical Trial Permission）"
        ],
        "avgReviewTime": "クラスC: 6〜12ヶ月 / クラスD: 12〜18ヶ月",
        "fee": "INR 50,000〜500,000程度（製品により異なる）",
        "url": "https://cdsco.gov.in/opencms/opencms/en/Medical-Device-Diagnostics/Medical-Device-Diagnostics/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "SUGAM (CDSCOオンラインポータル) / MDR Portal",
    "url": "https://sugam.cdsco.gov.in/",
    "description": "CDSCOのオンラインポータル「SUGAM」を通じて医療機器の申請を電子的に提出可能。ただし、運用面では紙ベースの提出が併存する場合があり、完全電子化は発展途上。2024年にMedical Device専用ポータルの改善が進行中。",
    "mandatory": false
  },
  "udi": {
    "required": false,
    "system": "UDI制度（検討・導入準備中）",
    "description": "インドではIMDRF UDIガイダンスに基づくUDI制度の導入を検討中。CDSCOがUDI実装のロードマップを策定中だが、2026年現在は法的義務化には至っていない。GS1 Indiaとの連携によるパイロットプログラムが進行。",
    "url": "https://cdsco.gov.in/opencms/opencms/en/Medical-Device-Diagnostics/Medical-Device-Diagnostics/",
    "timeline": "ロードマップ策定中。段階的導入を計画（具体的日程は未確定）"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "Materiovigilance Programme of India (MvPI)",
      "mandatory": true,
      "url": "https://cdsco.gov.in/opencms/opencms/en/Medical-Device-Diagnostics/MvPI/",
      "description": "製造業者・輸入業者は医療機器に関連する有害事象をCDSCO/MvPIに報告する義務がある。死亡・重篤な健康被害は10日以内、その他は30日以内に報告。IPC（Indian Pharmacopoeia Commission）がMvPIの運営を支援。医療機関からの報告はAMC（Adverse Event Monitoring Centers）を通じて収集。"
    },
    "recalls": {
      "authority": "CDSCO",
      "description": "CDSCOがリコール・是正措置を監督。製造業者・輸入業者は自主回収とCDSCOへの報告義務を負う。Medical Devices Rules 2017にリコール手続きを規定。",
      "url": "https://cdsco.gov.in/opencms/opencms/en/Medical-Device-Diagnostics/Medical-Device-Diagnostics/"
    },
    "surveillance": "Materiovigilance Programme of India (MvPI) に基づく有害事象モニタリング。全国のAMC（Adverse Event Monitoring Centers）ネットワークを通じた報告収集。CDSCOによる市販後安全性評価と必要に応じた市場措置。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "CDSCO",
    "name": "Certificate of Free Sale (CFS) / Non-Objection Certificate (NOC)",
    "description": "インドで製造・登録済みの医療機器について、CDSCOが自由販売証明書を発行。輸出先国の規制申請に使用。オンライン申請が一部可能。",
    "processingTime": "約4〜8週間",
    "url": "https://cdsco.gov.in/opencms/opencms/en/Medical-Device-Diagnostics/Medical-Device-Diagnostics/"
  },
  "reimbursement": {
    "system": "National Health Authority (NHA) / Ayushman Bharat",
    "authority": "National Health Authority / Ministry of Health and Family Welfare",
    "description": "公的医療保険Ayushman Bharat Pradhan Mantri Jan Arogya Yojana（AB-PMJAY）による医療機器を含む治療パッケージの償還。対象は経済的弱者層。中央政府医療制度（CGHS）による政府職員向け償還もある。民間保険ではIRDAIが規制。医療機器の価格はNPPA（National Pharmaceutical Pricing Authority）が一部管理。",
    "codingSystems": [
      "AB-PMJAY Health Benefit Packages（HBP）コード",
      "CGHS料金表",
      "NPPA価格管理リスト"
    ],
    "url": "https://nha.gov.in/"
  },
  "marketingRules": {
    "authority": "CDSCO / Advertising Standards Council of India (ASCI)",
    "description": "医療機器の広告はDrugs and Cosmetics Act 1940およびDrugs and Magic Remedies (Objectionable Advertisements) Act 1954に基づき規制。ASCIが広告の自主規制を監督。",
    "keyRules": [
      "未登録医療機器の広告禁止",
      "虚偽・誇大な効能表示の禁止",
      "Drugs and Magic Remedies Act に基づく「魔法的治療」の広告禁止",
      "ASCI Code に基づく広告の正確性と倫理基準",
      "オンライン広告・ソーシャルメディアプロモーションへの適用拡大"
    ]
  },
  "mdsap": {
    "status": "非参加（受入れ検討中）",
    "description": "インド（CDSCO）はMDSAP公式参加国ではない。ただし、MDSAP監査報告書をQMS適合性の参考資料として受入れる方向で検討が進んでいる。将来的な正式参加に向けた関与を強化中。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "Medical Devices Rules 2017のQMS要件はISO 13485に整合。製造ライセンス取得時にISO 13485認証の提示が求められる。IS 13485として国内規格化。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "リスクマネジメントの実施が推奨・要求される。IS/ISO 14971として国内採用。登録申請の技術文書にリスク分析の提出が必要。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "ソフトウェアを含む医療機器の開発にIEC 62304適合が推奨。CDSCOガイダンスで参照。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "医用電気機器の安全規格。IS/IEC 60601シリーズとして国内規格化。BIS強制認証の基準として一部適用。"
    },
    "others": [
      {
        "name": "ISO 10993シリーズ（生物学的安全性評価）",
        "notes": "生体接触医療機器の生物学的安全性評価に必須。IS/ISO 10993として採用。"
      },
      {
        "name": "BIS強制認証対象規格",
        "notes": "特定の医療機器（コンドーム、心臓ステント等）にBIS認証が義務付けられている。"
      }
    ]
  },
  "recentDevelopments": [
    {
      "date": "2026-01",
      "title": "全医療機器の規制対象化完了に向けた最終フェーズ",
      "description": "Gazette notificationにより、残りの未通知品目を含む全ての医療機器を規制対象とする最終フェーズのスケジュールを公表。"
    },
    {
      "date": "2025-10",
      "title": "Digital Personal Data Protection Act 施行細則公表",
      "description": "医療機器に関連する健康データの処理要件を含む施行細則が公表。機器メーカーのデータ保護義務を明確化。"
    },
    {
      "date": "2025-07",
      "title": "医療機器臨床試験ガイダンス改訂",
      "description": "CDSCOが医療機器の臨床試験要件に関するガイダンスを改訂。Global Clinical Trial データの受入れ基準を明確化し、インド固有の臨床データ要件を緩和。"
    },
    {
      "date": "2025-04",
      "title": "Make in India — 医療機器製造推進策",
      "description": "政府がMake in India政策の一環として医療機器の国内製造を推進。PLI（Production Linked Incentive）スキームの対象品目拡大と規制手続の簡素化。"
    }
  ],
  "lastUpdated": "2026-04-06",
  "verified": "2026-04-06"
};
