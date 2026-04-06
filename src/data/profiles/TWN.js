// 台湾 (Taiwan)
export default {
  "code": "TWN",
  "country": "台湾",
  "countryEn": "Taiwan",
  "region": "ASPAC",
  "flag": "🇹🇼",
  "legalSystemOverview": {
    "type": "半大統領制（Semi-presidential system）",
    "description": "TFDA（食品藥物管理署）が医療機器の規制・審査・市販後監視を所管する。2021年5月に施行された「醫療器材管理法」により、従来の薬事法（藥事法）から医療機器に特化した独立法体系へ移行。3クラス分類（I/II/III）に基づく規制を実施。台湾はIMDRFの正式メンバーではないがオブザーバーとして参加し、国際規制調和を推進。",
    "keyCharacteristics": [
      "TFDA が医療機器規制を一元的に所管",
      "醫療器材管理法（2021年施行）による独立法体系",
      "3クラス分類（I/II/III）",
      "備查（クラスI届出）vs 查驗登記（クラスII/III登録）",
      "台湾ライセンスホルダー（台灣許可證持有者）の設置義務",
      "MDSAP監査報告書の受入れ"
    ]
  },
  "authorities": [
    {
      "name": "TFDA",
      "fullName": "Taiwan Food and Drug Administration",
      "localName": "衛生福利部食品藥物管理署",
      "role": "医療機器の審査・登録・市販後監視・GMP査察・臨床試験監督。台湾における医療機器規制の中核機関。",
      "url": "https://www.fda.gov.tw/",
      "isPrimary": true
    },
    {
      "name": "MOHW",
      "fullName": "Ministry of Health and Welfare",
      "localName": "衛生福利部",
      "role": "医療機器を含む保健衛生政策の策定。TFDAの上位機関として法令・政策を所管。",
      "url": "https://www.mohw.gov.tw/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "TFDA直接審査 + 指定試験機関",
    "description": "台湾ではTFDAが医療機器の登録審査を直接実施する。技術試験・安全性試験は認定された試験機関（TAF認定ラボ等）が実施。電気安全試験はBSMI（経済部標準検験局）認定機関で実施する場合がある。",
    "bodies": [
      {
        "name": "TFDA（直接審査）",
        "url": "https://www.fda.gov.tw/TC/site.aspx?sid=38"
      },
      {
        "name": "台灣認證基金會（TAF）認定試験機関",
        "url": "https://www.taftw.org.tw/"
      }
    ]
  },
  "deviceDefinition": {
    "legalDefinition": "疾病の診断、治療、緩和若しくは直接予防、又は人体の構造若しくは機能に影響を及ぼすことを目的とする器具、器械、用具、物質、軟體（ソフトウェア）、体外診断試薬及びその付属品であって、主たる作用が薬理学的・免疫学的・代謝的手段ではないもの（醫療器材管理法第3条に基づく）",
    "scope": "体外診断用医療機器（IVD）、ソフトウェア医療機器（SaMD）を含む。醫療器材管理法で包括的に定義。",
    "notes": "2021年の醫療器材管理法施行により、従来の藥事法（Pharmaceutical Affairs Act）から医療機器部分が独立。医療機器に特化した定義と規制体系が整備された。"
  },
  "primaryLaw": {
    "title": "醫療器材管理法（Medical Devices Act）",
    "originalTitle": "醫療器材管理法",
    "enacted": "2020-01-15",
    "lastAmended": "2020-01-15",
    "url": "https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=L0030106",
    "description": "台湾における医療機器規制の専用法。2021年5月1日施行。従来の藥事法から医療機器関連条項を独立させた法律で、製造・輸入・販売の許可制度、3クラス分類、登録（查驗登記）・届出（備查）制度、GMP要件、広告規制、市販後監視、罰則等を包括的に規定。"
  },
  "implementingRegulations": [
    {
      "title": "醫療器材分類分級管理辦法",
      "date": "2021-04-29",
      "url": "https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=L0030107",
      "description": "医療機器の分類・等級（リスクレベル）に関する規則。3クラス分類の基準と品目ごとの分類コードを規定。",
      "category": "分類"
    },
    {
      "title": "醫療器材查驗登記審查準則",
      "date": "2021-04-29",
      "url": "https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=L0030108",
      "description": "医療機器の登録（查驗登記）審査に関する規則。申請書類、審査基準、技術文書要件を規定。",
      "category": "登録審査"
    },
    {
      "title": "醫療器材優良製造規範（GMP）",
      "date": "2021-05-01",
      "url": "https://www.fda.gov.tw/TC/site.aspx?sid=38",
      "description": "医療機器の製造品質管理基準（GMP）。ISO 13485に整合した品質マネジメントシステム要件を規定。",
      "category": "GMP"
    },
    {
      "title": "醫療器材臨床試驗管理辦法",
      "date": "2021-04-29",
      "url": "https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=L0030109",
      "description": "医療機器の臨床試験の計画・実施・報告に関する規則。GCP遵守義務。TFDA倫理審査委員会の承認が必要。",
      "category": "臨床試験"
    }
  ],
  "relatedLaws": [
    {
      "title": "個人資料保護法（Personal Data Protection Act）",
      "category": "データ保護",
      "enacted": "2010-05-26",
      "url": "https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=I0050021",
      "relevance": "医療機器から収集される個人データ（健康情報を含む）の処理に適用。センシティブデータの処理には特別な法的根拠が必要。2023年改正で保護強化。"
    },
    {
      "title": "藥事法（Pharmaceutical Affairs Act）",
      "category": "旧法",
      "enacted": "1970-08-17",
      "url": "https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=L0030001",
      "relevance": "醫療器材管理法の施行前に医療機器を規制していた旧法。2021年5月以降は医療機器部分が醫療器材管理法に移行。医薬品の規制は引き続き藥事法に基づく。"
    },
    {
      "title": "醫療法（Medical Care Act）",
      "category": "医療制度",
      "enacted": "1986-11-24",
      "url": "https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=L0020021",
      "relevance": "医療機関における医療機器の使用・管理に関する規定。医療広告規制にも関連。"
    }
  ],
  "classification": {
    "system": "3クラス分類（I/II/III）",
    "basis": "意図する使用目的、人体へのリスクの程度に基づく分類。醫療器材分類分級管理辦法に基づき、品目ごとにクラスを指定。国際的な分類基準を参考にしつつ、台湾独自の分類コード体系を運用。",
    "classes": [
      {
        "name": "Class I（第一等級）",
        "nameJa": "第一等級（低リスク）",
        "riskLevel": "低",
        "description": "低リスクの医療機器。備查（届出）で市場投入が可能。TFDAによる事前審査は不要。",
        "examples": [
          "聴診器",
          "手術用手袋",
          "弾性包帯",
          "歩行器",
          "舌圧子"
        ],
        "approvalPath": "備查（届出 / Listing）"
      },
      {
        "name": "Class II（第二等級）",
        "nameJa": "第二等級（中リスク）",
        "riskLevel": "中",
        "description": "中リスクの医療機器。查驗登記（登録）が必要で、TFDAによる審査を経て許可証（醫療器材許可證）を取得。",
        "examples": [
          "超音波画像診断装置",
          "補聴器",
          "コンタクトレンズ",
          "電子血圧計",
          "歯科用充填材"
        ],
        "approvalPath": "查驗登記（登録 / Registration — TFDA審査）"
      },
      {
        "name": "Class III（第三等級）",
        "nameJa": "第三等級（高リスク）",
        "riskLevel": "高",
        "description": "最高リスクの医療機器。查驗登記（登録）が必要で、TFDAによる最も厳格な審査。臨床試験データの提出が通常必要。",
        "examples": [
          "心臓ペースメーカー",
          "人工心臓弁",
          "薬剤溶出型ステント",
          "人工関節",
          "脳深部刺激装置"
        ],
        "approvalPath": "查驗登記（登録 / Registration — TFDA審査 / 臨床データ要求）"
      }
    ],
    "rules": [
      "醫療器材分類分級管理辦法に基づく品目別分類",
      "約3,500の品目コード（鑑別碼）に基づく管理",
      "IVDは同法で別途分類",
      "SaMDの分類はTFDAガイダンスで指針を提示"
    ],
    "totalProductCodes": "約3,500（鑑別碼）"
  },
  "conformityAssessment": {
    "overview": "台湾で医療機器を製造・輸入・販売するには、醫療器材管理法に基づく登録または届出が必要。クラスIは備查（届出）、クラスII/IIIは查驗登記（登録）が必要。台湾ライセンスホルダーが申請主体。GMP（ISO 13485整合）適合が全クラスで前提。MDSAP監査報告書の活用も可能。",
    "routes": [
      {
        "name": "備查 (Listing)",
        "nameJa": "備查（届出）",
        "applicableClasses": [
          "Class I"
        ],
        "description": "低リスクのクラスI機器について、台湾ライセンスホルダーがTFDAに届出。基本的な技術文書の提出が必要だが、TFDAによる実質的審査は行われない。GMP適合が前提。",
        "subtypes": [],
        "avgReviewTime": "約15〜30営業日",
        "fee": "NTD 2,000〜5,000程度",
        "url": "https://www.fda.gov.tw/TC/site.aspx?sid=38"
      },
      {
        "name": "查驗登記 (Registration)",
        "nameJa": "查驗登記（登録）",
        "applicableClasses": [
          "Class II",
          "Class III"
        ],
        "description": "中・高リスクの医療機器について、台湾ライセンスホルダーがTFDAに登録申請。TFDAが技術文書・臨床データ・品質管理体制を審査し、醫療器材許可證を発行。クラスIIIは臨床試験データの提出が通常必要。FDA（米国）やCEマーク承認の参照が可能な場合がある。",
        "subtypes": [
          "新規登録申請",
          "変更登録申請",
          "許可証更新",
          "ファミリー登録"
        ],
        "avgReviewTime": "クラスII: 3〜6ヶ月 / クラスIII: 6〜12ヶ月",
        "fee": "NTD 10,000〜50,000程度（製品分類により異なる）",
        "url": "https://www.fda.gov.tw/TC/site.aspx?sid=38"
      }
    ]
  },
  "electronicSubmission": {
    "system": "TFDA醫療器材線上申請系統",
    "url": "https://mdregistry.fda.gov.tw/",
    "description": "TFDAのオンライン申請システムを通じて医療機器の登録・届出を電子的に実施。技術文書のアップロード、審査状況の追跡が可能。段階的に電子化を推進中。",
    "mandatory": true
  },
  "udi": {
    "required": true,
    "system": "台湾UDI制度（段階的導入中）",
    "description": "TFDAはIMDRF UDIガイダンスに基づくUDI制度を段階的に導入中。GS1標準のUDI-DIを使用。高リスク機器から順次ラベル表示とTFDAデータベースへの登録を義務化。",
    "url": "https://www.fda.gov.tw/TC/site.aspx?sid=38",
    "timeline": "クラスIII: 2024年実施済み / クラスII: 2025年〜段階的導入 / クラスI: 2027年予定"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "醫療器材不良品通報系統（Medical Device Adverse Event Reporting System）",
      "mandatory": true,
      "url": "https://qms.fda.gov.tw/tcbw/",
      "description": "製造業者・輸入業者はTFDAに医療機器の不良・有害事象を報告する義務がある。死亡・重篤な健康被害は15日以内、その他は30日以内に報告。医療機関からの報告制度も運用。"
    },
    "recalls": {
      "authority": "TFDA",
      "description": "TFDAがリコール・是正措置を監督。製造業者・輸入業者は自主回収とTFDAへの報告義務を負う。リコール分類は第一級（重篤）〜第三級（軽微）。TFDAウェブサイトで回収情報を公開。",
      "url": "https://www.fda.gov.tw/TC/site.aspx?sid=46"
    },
    "surveillance": "製造業者は市販後監視計画の策定・実施が義務。TFDAによるPost-market Surveillance Programの運用。定期安全性報告の提出義務（クラスIII機器）。GMP査察による製造品質の継続的監視。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "TFDA",
    "name": "自由銷售證明書（Certificate of Free Sale）",
    "description": "台湾で許可証を取得済みの医療機器について、TFDAが自由販売証明書を発行。輸出先国の規制申請に使用。",
    "processingTime": "約2〜4週間",
    "url": "https://www.fda.gov.tw/TC/site.aspx?sid=38"
  },
  "reimbursement": {
    "system": "全民健康保險（National Health Insurance）",
    "authority": "衛生福利部中央健康保險署（NHIA）",
    "description": "台湾の全民健康保險（NHI）は全国民をカバーする単一保険者制度。医療機器の償還はNHIAが管理する支付基準（Payment Standards）に基づく。高額な特殊材料（特材）は個別の収載・価格交渉が必要。HTA（医療技術評価）機能はCDE（醫藥品查驗中心）が支援。",
    "codingSystems": [
      "NHI支付基準コード（特材コード）",
      "ICD-10-PCS（手術コード）",
      "TW-DRG（入院包括評価）"
    ],
    "url": "https://www.nhi.gov.tw/"
  },
  "marketingRules": {
    "authority": "TFDA / NCC（國家通訊傳播委員會）",
    "description": "医療機器の広告は醫療器材管理法に基づき規制。広告内容はTFDAの事前審査が必要な場合がある。虚偽・誇大広告は禁止。放送・インターネット広告はNCCも監督。",
    "keyRules": [
      "醫療器材管理法に基づく広告規制",
      "TFDAによる広告内容の事前審査（必要な場合）",
      "未許可医療機器の広告禁止",
      "虚偽・誇大な効能表示の禁止と罰則",
      "医療機器の適正使用に関する情報提供義務"
    ]
  },
  "mdsap": {
    "status": "Affiliate Member",
    "description": "台湾（TFDA）はMDSAPのAffiliate Memberとして参加。MDSAP監査報告書をGMP適合の参考資料として受入れ、GMP審査プロセスの効率化に活用。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "台湾のGMP要件はISO 13485に整合。醫療器材許可證取得時にISO 13485認証の提示が求められる。CNS 13485として国内規格化。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "リスクマネジメントの実施が必須要件。CNS 14971として国内規格化。技術文書にリスクマネジメントファイルの提出が必要。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "ソフトウェアを含む医療機器の開発にIEC 62304適合が求められる。TFDAガイダンスで参照。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "医用電気機器の安全規格。CNS 60601シリーズとして国内規格化。電気安全試験はBSMI認定機関で実施。"
    },
    "others": [
      {
        "name": "ISO 10993シリーズ（生物学的安全性評価）",
        "notes": "生体接触医療機器の生物学的安全性評価に必須。CNS 10993として規格化。"
      },
      {
        "name": "IEC 62366（ユーザビリティ）",
        "notes": "医療機器のユーザビリティ評価に推奨。TFDAガイダンスで参照。"
      }
    ]
  },
  "recentDevelopments": [
    {
      "date": "2026-02",
      "title": "SaMD審査ガイダンス公表",
      "description": "TFDAがAI/ML搭載SaMDの分類・審査に関するガイダンスを公表。国際的な規制動向を踏まえた台湾独自の審査基準を提示。"
    },
    {
      "date": "2025-11",
      "title": "醫療器材管理法施行細則改正",
      "description": "醫療器材管理法の施行細則が改正。UDI制度の詳細要件、市販後監視報告の強化等を含む。"
    },
    {
      "date": "2025-07",
      "title": "サイバーセキュリティガイダンス策定",
      "description": "TFDAがネットワーク接続型医療機器のサイバーセキュリティに関するガイダンスを策定。IMDRF Cybersecurity Guidanceに整合。"
    },
    {
      "date": "2025-03",
      "title": "GMP査察の国際連携強化",
      "description": "TFDAがMDSAP参加国との相互協力を強化。GMP査察結果の相互活用に向けた協議を推進。"
    }
  ],
  "lastUpdated": "2026-04-06",
  "verified": "2026-04-06"
};
