// アラブ首長国連邦 (United Arab Emirates)
export default {
  "code": "ARE",
  "country": "アラブ首長国連邦",
  "countryEn": "United Arab Emirates",
  "region": "Middle East & Africa",
  "flag": "🇦🇪",
  "legalSystemOverview": {
    "type": "連邦制（Federal system）— 連邦MOHAPと首長国規制当局の二重構造",
    "description": "UAEの医療機器規制は連邦レベルでMOHAP（Ministry of Health and Prevention）が管轄し、Federal Decree-Law No. 38 of 2024（2025年1月2日施行）が現行の基本法である。2023年9月に設立されたEmirates Drug Establishment（EDE）がMOHAPから規制機能を段階的に移管中。一方、アブダビ首長国はDOH（Department of Health）、ドバイ首長国はDHA（Dubai Health Authority）が独自の追加規制・施設監督を実施する二重規制構造が特徴。分類体系はGHTFに整合した4クラス制（Class I〜IV）を採用。",
    "keyCharacteristics": [
      "連邦MOHAP/EDEによる市販前登録と首長国当局（DOH/DHA）による追加規制の二重構造",
      "リスクベースの4クラス分類（Class I/II/III/IV）— GHTFに整合",
      "IVDは別途4クラス（Class A/B/C/D）",
      "海外製造業者はUAEライセンスを持つLocal Agent（現地代理人）の任命が必須",
      "登録有効期間5年（更新制）",
      "EDE（Emirates Drug Establishment）への規制機能移管が進行中"
    ]
  },
  "authorities": [
    {
      "name": "MOHAP / EDE",
      "fullName": "Ministry of Health and Prevention / Emirates Drug Establishment",
      "localName": "وزارة الصحة ووقاية المجتمع / مؤسسة الإمارات للدواء",
      "role": "医療機器の市販前登録（Marketing Authorization）・市販後監視・有害事象報告・広告規制。EDEが段階的にMOHAPの規制業務を承継中。",
      "url": "https://mohap.gov.ae/en/services",
      "isPrimary": true
    },
    {
      "name": "DOH",
      "fullName": "Department of Health – Abu Dhabi",
      "localName": "دائرة الصحة - أبوظبي",
      "role": "アブダビ首長国における医療施設の許認可・査察、医療機器の市販後安全監視、追加規制の策定。",
      "url": "https://www.doh.gov.ae/en/",
      "isPrimary": false
    },
    {
      "name": "DHA",
      "fullName": "Dubai Health Authority",
      "localName": "هيئة الصحة بدبي",
      "role": "ドバイ首長国における医療施設の許認可・査察、Sheryanポータルによる施設ライセンス管理。",
      "url": "https://www.dha.gov.ae/en",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "なし（MOHAP/EDE が直接審査）",
    "description": "UAEでは欧州型のNotified Body制度は存在しない。MOHAP（移管後はEDE）が直接、登録申請の技術文書を審査しMarketing Authorizationを交付する。ただしISO 13485認証を第三者認証機関から取得することが事前要件。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "Federal Decree-Law No. 38 of 2024に定義。疾病の診断・治療・予防・監視・軽減等を目的とする機器・装置・器具・材料・ソフトウェア等で、主たる意図する作用が薬理学的・免疫学的・代謝的手段によらないもの。",
    "scope": "IVD（体外診断用医療機器）も適用範囲に含まれる。医薬品・栄養補助食品・化粧品・生物学的製品・遺伝子組換え生物（医療用）も同法の規制対象。",
    "notes": "SaMD（Software as a Medical Device）は意図する用途に基づき医療機器として分類される場合がある。Federal Decree-Law No. 38/2024で規制範囲がバイオバンク・受託研究機関にも拡大。"
  },
  "primaryLaw": {
    "title": "Federal Decree-Law No. (38) of 2024 Concerning Medical Products, the Pharmacy Profession, and Pharmaceutical Establishments",
    "originalTitle": "مرسوم بقانون اتحادي رقم (38) لسنة 2024 في شأن المنتجات الطبية ومهنة الصيدلة والمنشآت الصيدلانية",
    "enacted": "2024",
    "lastAmended": "2024-10-14（官報No. 785に掲載）",
    "url": "https://uaelegislation.gov.ae/en/legislations/2751",
    "description": "2024年10月1日発令、2024年10月14日官報掲載、2025年1月2日施行。旧Federal Law No. 8 of 2019（およびその改正法Federal Decree-Law No. 11 of 2023）を置換する現行の基本法。EDEの設立根拠と医療機器を含む医療製品全般の規制枠組みを規定。1年間の経過措置期間あり（2026年1月2日まで）。"
  },
  "implementingRegulations": [
    {
      "title": "Cabinet Resolution No. 90 of 2021 — Executive Regulations of Federal Law No. 8 of 2019",
      "date": "2021",
      "url": "https://mohap.gov.ae/en/w/cabinet-resolution-no.-90-of-the-year-2021-on-the-executive-regulations-of-federal-law-no-.8-of-the-year-2019-regarding-medical-products-the-pharmacy-profession-and-pharmaceutical-establishments",
      "description": "旧法の施行規則。新法（FDL 38/2024）の施行規則が発出されるまで、矛盾しない範囲で継続適用。登録手続・分類・市販後監視・査察等の詳細を規定。",
      "category": "施行規則"
    },
    {
      "title": "Ministerial Decision No. 1412 of 2017 — Code of Practice for Marketing and Trading of Medical Products",
      "date": "2017",
      "url": "https://mohap.gov.ae/documents/20117/1212145/code+of+ethical+practices+for+the+promotion+and+distribution+of+medical+products+english-410.pdf/421e3579-bae1-7214-2878-d604d92e7af5",
      "description": "医療製品のマーケティング・取引に関する倫理規定。広告の事前承認要件、医療従事者とのインタラクション規則を規定。",
      "category": "広告・マーケティング"
    },
    {
      "title": "MOHAP Medical Device Registration Infographic (Service Code)",
      "date": "2025-02",
      "url": "https://mohap.gov.ae/documents/20117/1212145/Infographic+-+Registration+of+a+Medical+Equipment+-+420KB.pdf/224e9f30-0bed-fa9e-0686-efb7bba31a4a",
      "description": "医療機器登録のサービスフロー、必要書類、手数料を示す公式インフォグラフィック。",
      "category": "登録手続"
    }
  ],
  "relatedLaws": [
    {
      "title": "Federal Decree-Law on the Establishment of the UAE Drug Corporation (EDE)",
      "category": "組織法",
      "enacted": "2023",
      "url": "https://uaelegislation.gov.ae/en/legislations/2122",
      "relevance": "2023年9月29日設立のEDE（Emirates Drug Establishment）の設置根拠法。MOHAPの医薬品・医療機器規制機能を段階的に承継。"
    },
    {
      "title": "Federal Decree-Law No. 45 of 2021 — Personal Data Protection Law (PDPL)",
      "category": "データ保護",
      "enacted": "2021",
      "url": "https://u.ae/en/about-the-uae/digital-uae/data/data-protection-laws",
      "relevance": "コネクテッドデバイス・SaMDが取り扱う個人医療情報のプライバシー要件に適用。"
    }
  ],
  "classification": {
    "system": "4クラス制（Class I/II/III/IV）— GHTF整合",
    "basis": "リスクベース（GHTF分類ルールに整合）。意図する用途・侵襲性・使用期間・エネルギー源等に基づく。IVDは別途4クラス（Class A〜D）。",
    "classes": [
      {
        "name": "Class I",
        "nameJa": "クラスI",
        "riskLevel": "低",
        "description": "低リスクの非侵襲的機器。簡略審査。",
        "examples": [
          "弾性包帯",
          "聴診器",
          "病院用ベッド",
          "手術用はさみ",
          "舌圧子"
        ],
        "approvalPath": "登録申請（簡略審査）"
      },
      {
        "name": "Class II",
        "nameJa": "クラスII",
        "riskLevel": "中低",
        "description": "低〜中リスク機器。標準審査。",
        "examples": [
          "コンタクトレンズ",
          "輸液ポンプ",
          "超音波診断装置",
          "X線装置",
          "血圧計"
        ],
        "approvalPath": "登録申請（標準審査）"
      },
      {
        "name": "Class III",
        "nameJa": "クラスIII",
        "riskLevel": "中高",
        "description": "中〜高リスク機器。詳細審査＋臨床データが必要な場合あり。現地監査の対象となりうる。",
        "examples": [
          "人工関節",
          "冠動脈ステント",
          "人工呼吸器",
          "透析装置",
          "埋込み型整形外科インプラント"
        ],
        "approvalPath": "登録申請（詳細審査＋臨床評価）"
      },
      {
        "name": "Class IV",
        "nameJa": "クラスIV",
        "riskLevel": "高",
        "description": "最高リスク・生命維持機器。最も厳格な審査。現地監査の対象。",
        "examples": [
          "人工心臓弁",
          "埋込み型除細動器",
          "薬剤溶出ステント",
          "脳深部刺激装置",
          "人工内耳"
        ],
        "approvalPath": "登録申請（詳細審査＋臨床データ＋現地監査の可能性）"
      }
    ],
    "rules": [
      "GHTF分類ルールに基づく分類基準（EU MDDにも整合）",
      "IVDは別途4クラス（Class A〜D）に分類",
      "MOHAP/EDEが分類確認（Classification Application）を実施",
      "GMDN（Global Medical Device Nomenclature）を参照"
    ],
    "totalProductCodes": "GMDN（Global Medical Device Nomenclature）を使用"
  },
  "conformityAssessment": {
    "overview": "全クラスの医療機器にMOHAP（移管後はEDE）へのMarketing Authorization（登録）が必要。登録有効期間は5年（更新制）。海外製造業者はUAEライセンスを持つLocal Agent（現地代理人）を任命し、Local Agentが申請を提出する。Class III/IV機器は現地監査の対象となりうる。",
    "routes": [
      {
        "name": "Medical Device Registration",
        "nameJa": "医療機器登録",
        "applicableClasses": [
          "Class I",
          "Class II",
          "Class III",
          "Class IV"
        ],
        "description": "MOHAP/EDEへの登録申請。技術文書・ISO 13485認証・CFS（Certificate of Free Sale）・アラビア語ラベリング等を提出。Class III/IV機器は臨床データが求められる場合あり。",
        "subtypes": [
          {
            "name": "新規登録",
            "description": "初回の登録申請。全必要書類の提出が必要。"
          },
          {
            "name": "登録更新（5年ごと）",
            "description": "有効期限前に更新申請。"
          },
          {
            "name": "変更申請",
            "description": "製品仕様・製造所・ラベリング等の変更時。"
          }
        ],
        "avgReviewTime": "公式: 45営業日 / 実績: 6〜8週間（Class I/II）、3〜6ヶ月（Class III/IV）",
        "avgReviewTimeSource": "https://omcmedical.com/guide-to-uae-medical-device-registration-process/",
        "fee": "申請手数料: AED 100 / 登録手数料: AED 5,000（政府手数料 AED 5,000〜15,000はリスク分類により変動）",
        "feeSource": "https://mohap.gov.ae/documents/20117/1212145/Infographic+-+Registration+of+a+Medical+Equipment+-+420KB.pdf/224e9f30-0bed-fa9e-0686-efb7bba31a4a",
        "url": "https://mohap.gov.ae/en/services"
      }
    ]
  },
  "electronicSubmission": {
    "system": "MOHAP eサービス / EDE ポータル",
    "url": "https://www.ede.gov.ae/en/home",
    "description": "登録申請はMOHAP eサービス経由でオンライン提出。UAE PASSでログインし申請・支払を実施。2025年以降、段階的にEDEポータル（www.ede.gov.ae）に移行中。CFS発行サービスは2025年12月29日よりEDEに移管済み。",
    "mandatory": true
  },
  "udi": {
    "required": false,
    "system": "未導入（UAE独自のUDI制度は未確立）",
    "description": "2026年4月時点で、UAE独自の包括的UDI制度は正式に導入されていない。ただし登録申請時にGMDN情報の提出が求められる。Federal Decree-Law No. 38/2024はUDI関連の枠組み導入を可能にする法的基盤を含むが、具体的な実施規則は未発出。",
    "url": "https://mohap.gov.ae/en/services",
    "timeline": "未定（FDL 38/2024の施行規則で今後規定される可能性あり）"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "MOHAP / EDE 有害事象報告",
      "mandatory": true,
      "url": "https://mohap.gov.ae/en/services",
      "description": "製造業者・Local Agent・医療従事者が有害事象をMOHAPに報告する義務を負う。MOHAPウェブサイトまたはスマートアプリ経由で報告を提出可能。報告はWHO（世界保健機関）にも共有される。"
    },
    "recalls": {
      "authority": "MOHAP / EDE",
      "description": "MOHAP/EDEがリコール・FSCA（Field Safety Corrective Action）を監督。必要に応じてLocal Agentを通じた市場からの製品回収を命令。",
      "url": "https://mohap.gov.ae/en/services"
    },
    "surveillance": "Class III/IVおよび埋込み型機器は2年ごとの市販後監視報告の提出が求められる。MOHAPは市場監視・抜き打ち検査を実施し、安全性・品質の継続的適合を確認。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "MOHAP / EDE（UAE製品の輸出用）/ 輸出国の規制当局（UAE登録時に提出が必要）",
    "name": "Certificate of Free Sale (CFS)",
    "description": "UAE登録申請時に、原産国の規制当局が発行するCFSの提出が必要。MOHAP/EDEはUAE国内製造業者向けにCFSを発行するサービスも提供（有効期間1年）。CFS発行サービスは2025年12月29日よりEDEに移管。",
    "processingTime": "MOHAP/EDEによるCFS発行: 要確認",
    "url": "https://mohap.gov.ae/en/w/issue-of-a-certificate-of-free-sale-of-a-medical-product-for-export"
  },
  "reimbursement": {
    "system": "首長国別の健康保険制度（アブダビ: 強制医療保険 / ドバイ: DHA必須保険 / 他首長国: MOHAP）",
    "authority": "DOH（アブダビ）/ DHA（ドバイ）/ MOHAP（連邦）",
    "description": "アブダビはDOH管轄の強制健康保険（Daman等）、ドバイはDHA管轄の必須保険（Essential Benefits Plan）を運用。2010年以降、アブダビではDRG（Diagnosis Related Groups）ベースの償還制度への移行が進行中。医療機器の個別償還制度は医薬品ほど体系化されておらず、施設調達・保険契約に依存する部分が大きい。",
    "codingSystems": [
      "DRG（アブダビでの導入が進行中）",
      "要確認（UAE固有の医療機器償還コード体系は未確認）"
    ],
    "url": "https://www.doh.gov.ae/en/resources/policies"
  },
  "marketingRules": {
    "authority": "MOHAP / EDE",
    "description": "Federal Decree-Law No. 38/2024およびMinisterial Decision No. 1412 of 2017に基づき、医療製品の広告にはMOHAPの事前承認が必要。未登録医療機器の広告は厳禁。",
    "keyRules": [
      "全ての医療機器広告にMOHAPの事前承認が必要",
      "承認された適応症・目的以外の広告は禁止",
      "誇大・虚偽・誤解を招く表現の禁止",
      "自己診断や不適切な治療を誘発する表現の禁止",
      "Ministerial Decision No. 1412/2017による倫理規定の遵守"
    ]
  },
  "mdsap": {
    "status": "非参加（Not participating）",
    "description": "UAEはMDSAPの正式参加国・オブザーバー・アフィリエイトメンバーのいずれにも該当しない（2026年4月時点）。MDSAP監査報告書はUAEの規制要件を代替せず、MOHAP/EDEへの独立した登録申請が必要。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "登録申請の前提条件。製造施設のISO 13485:2016認証が必須。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "リスクマネジメント。技術文書のリスク評価に適用。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "ソフトウェアライフサイクル。SaMD申請に適用。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "医用電気機器の安全・性能要求。"
    },
    "others": [
      {
        "name": "ISO 10993シリーズ（生物学的安全性評価）",
        "notes": "生体接触医療機器の生物学的安全性評価に適用。"
      },
      {
        "name": "IEC 62366（ユーザビリティエンジニアリング）",
        "notes": "医療機器のユーザビリティ評価に参照。"
      }
    ]
  },
  "recentDevelopments": [
    {
      "date": "2025-01",
      "title": "Federal Decree-Law No. 38/2024 施行",
      "description": "2025年1月2日にFederal Decree-Law No. 38 of 2024が施行。旧Federal Law No. 8 of 2019を置換。EDEへの規制機能移管の法的基盤。1年間の経過措置期間（2026年1月2日まで）。"
    },
    {
      "date": "2025-12",
      "title": "EDE 44サービス移管（CFS含む）",
      "description": "2025年12月29日にMOHAPからEDEへ44の規制サービスが移管。マーケティング認可、輸出入許可、GMP認証、薬局施設ライセンス、ファーマコビジランス、CFS発行サービス等を含む。"
    },
    {
      "date": "2023-09",
      "title": "Emirates Drug Establishment（EDE）設立",
      "description": "EDEが連邦医薬品・医療機器規制の中核機関として設立。MOHAPの規制業務を段階的に承継。www.ede.gov.ae で電子サービスを提供開始。"
    },
    {
      "date": "2023",
      "title": "Federal Decree-Law No. 11/2023（旧法改正）",
      "description": "Federal Law No. 8 of 2019の一部条項を改正。EDEの設立に伴う経過的措置。その後FDL 38/2024で全面置換。"
    }
  ],
  "lastUpdated": "2026-04-06",
  "verified": "2026-04-06"
};
