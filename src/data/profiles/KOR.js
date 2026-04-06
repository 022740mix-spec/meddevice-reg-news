// 韓国 (South Korea)
export default {
  "code": "KOR",
  "country": "韓国",
  "countryEn": "South Korea",
  "region": "ASPAC",
  "flag": "🇰🇷",
  "legalSystemOverview": {
    "type": "大統領制・食品医薬品安全処（MFDS）所管",
    "description": "食品医薬品安全処（MFDS）が医療機器の許認可・監督を統括。国立医療機器情報院（NIDS）が情報管理・UDI・データベース運営を担当。医療機器法（의료기기법）に基づく4クラス分類制を採用し、リスクに応じた届出（신고）・認証（인증）・許可（허가）の3段階体制。",
    "keyCharacteristics": [
      "MFDSが許認可・安全監視を一元管理",
      "NIDSが医療機器情報・UDI・データベースを運営",
      "4クラス分類（IMDRF整合）",
      "KGMP（韓国GMP）の遵守が必須",
      "MDSAP参加国（2021年〜）"
    ]
  },
  "authorities": [
    {
      "name": "MFDS",
      "fullName": "Ministry of Food and Drug Safety",
      "localName": "식품의약품안전처",
      "role": "医療機器の許可・認証審査、GMP査察、市販後安全管理、法令策定を統括",
      "url": "https://www.mfds.go.kr/",
      "isPrimary": true
    },
    {
      "name": "NIDS",
      "fullName": "National Institute of Medical Device Safety Information",
      "localName": "국립의료기기정보원",
      "role": "医療機器情報管理、UDIデータベース運営、安全性情報の収集・分析、医療機器統計",
      "url": "https://www.nids.or.kr/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "該当なし（MFDS直接審査 + 指定認証機関）",
    "description": "クラスII医療機器の認証（인증）は、MFDSが指定する認証機関（한국산업기술시험원 KTL、한국화학융합시험연구원 KTR等）が実施。クラスIII/IVの許可はMFDSが直接審査。欧州型のNotified Body制度とは異なるが、認証機関による第三者評価の枠組みが存在。",
    "bodies": [
      {
        "name": "韓国産業技術試験院（KTL）",
        "url": "https://www.ktl.re.kr/"
      },
      {
        "name": "韓国化学融合試験研究院（KTR）",
        "url": "https://www.ktr.or.kr/"
      }
    ]
  },
  "deviceDefinition": {
    "legalDefinition": "人または動物の疾病の診断・治療・軽減・処置または予防の目的で使用される製品、人または動物の構造・機能に影響を及ぼす目的で使用される製品であって、薬理学的・免疫学的・代謝的手段による主要な目的作用を持たないもの（의료기기법第2条）",
    "scope": "機器・器具・材料・ソフトウェア。体外診断用医療機器は2019年に別途法律（체외진단의료기기법）で規定。プログラム医療機器（SaMD）も対象。",
    "notes": "2019年に体外診断用医療機器法（IVD法）を別途制定。2025年にデジタルヘルス関連法を施行し、AI/ML SaMDの規制枠組みを整備。"
  },
  "primaryLaw": {
    "title": "医療機器法（의료기기법）",
    "originalTitle": "의료기기법",
    "enacted": "2003-05-29",
    "lastAmended": "2025-01-31",
    "url": "https://www.law.go.kr/LSW/lsInfoP.do?lsiSeq=268885",
    "description": "韓国の医療機器規制の根拠法（法律第20753号）。製造・輸入・販売業の許可制度、4クラス分類に応じた届出・認証・許可制度、KGMP、市販後安全管理、広告規制等を包括的に規定。デジタル医療製品への対応を含む複数回の改正を経て現在に至る。2025年1月31日の一部改正は2025年8月1日施行。"
  },
  "implementingRegulations": [
    {
      "title": "医療機器法施行規則",
      "date": "2003-09-03",
      "url": "https://www.law.go.kr/LSW/lsInfoP.do?lsiSeq=259130",
      "description": "医療機器法の施行に必要な詳細手続き（申請書様式、審査基準、手数料等）を規定する総理令。",
      "category": "施行規則"
    },
    {
      "title": "医療機器製造及び品質管理基準（KGMP）",
      "date": "2009-05-14",
      "url": "https://www.mfds.go.kr/",
      "description": "ISO 13485に整合した韓国版GMP。医療機器の製造業者はKGMP適合が許可・認証の前提要件。MFDS告示。MDSAP監査報告書での代替が可能。",
      "category": "GMP"
    },
    {
      "title": "医療機器の基準規格（Essential Principles）",
      "date": "2015-01-01",
      "url": "https://www.mfds.go.kr/",
      "description": "医療機器の安全性・性能に関する基本要件。IMDRF Essential Principlesに整合。許可・認証申請時に適合性を示す必要がある。",
      "category": "基準規格"
    },
    {
      "title": "体外診断用医療機器法（체외진단의료기기법）",
      "date": "2019-04-30",
      "url": "https://www.law.go.kr/LSW/lsInfoP.do?lsiSeq=210791",
      "description": "体外診断用医療機器（IVD）に特化した法律。医療機器法から独立して規定。IVDの分類・許認可・品質管理を個別に規定。",
      "category": "IVD"
    },
    {
      "title": "デジタル医療製品法（디지털의료제품법）",
      "date": "2025-01-24",
      "url": "https://www.law.go.kr/LSW/lsInfoP.do?lsiSeq=259299",
      "description": "2025年1月24日施行（法律第20139号、2024年1月23日制定）。AI/ML SaMD、デジタル治療機器（DTx）等のデジタル医療製品に特化した規制枠組み。迅速審査制度、変更管理計画、リアルワールドデータ活用を規定。",
      "category": "デジタルヘルス"
    }
  ],
  "relatedLaws": [
    {
      "title": "個人情報保護法（개인정보보호법 / PIPA）",
      "category": "データ保護",
      "enacted": "2011-09-30",
      "url": "https://www.law.go.kr/LSW/lsInfoP.do?lsiSeq=256542",
      "relevance": "医療機器から取得される健康データの取扱いに適用。2023年改正で仮名処理情報の研究目的利用を拡大。個人情報保護委員会（PIPC）が所管。"
    },
    {
      "title": "体外診断用医療機器法（체외진단의료기기법）",
      "category": "IVD",
      "enacted": "2019-04-30",
      "url": "https://www.law.go.kr/LSW/lsInfoP.do?lsiSeq=210791",
      "relevance": "IVDを医療機器法から独立して規制。IVDの分類体系、許認可手続き、性能評価要件を個別に規定。"
    },
    {
      "title": "デジタル医療製品法（디지털의료제품법）",
      "category": "デジタルヘルス",
      "enacted": "2025-01-24",
      "url": "https://www.law.go.kr/LSW/lsInfoP.do?lsiSeq=259299",
      "relevance": "2025年1月24日施行（法律第20139号、2024年1月23日制定）。AI/ML SaMD、デジタル治療機器（DTx）の迅速審査・変更管理・リアルワールドエビデンス活用を規定する新法。"
    },
    {
      "title": "生命倫理及び安全に関する法律（생명윤리및안전에관한법률）",
      "category": "臨床研究倫理",
      "enacted": "2004-01-29",
      "url": "https://www.law.go.kr/LSW/lsInfoP.do?lsiSeq=243031",
      "relevance": "医療機器の臨床試験における倫理審査委員会（IRB）の設置・運営、インフォームドコンセント要件に関連。"
    }
  ],
  "classification": {
    "system": "リスクベース4クラス分類",
    "basis": "人体への潜在的リスクに基づく4段階分類。IMDRF分類ルールに整合。",
    "classes": [
      {
        "name": "Class I",
        "nameJa": "1等級（저위험）",
        "riskLevel": "低",
        "description": "人体への潜在的リスクがほとんどない医療機器。",
        "examples": [
          "外科用メス",
          "手動式血圧計",
          "X線フィルム",
          "医療用ピンセット"
        ],
        "approvalPath": "届出（신고）— MFDS"
      },
      {
        "name": "Class II",
        "nameJa": "2等級（중저위험）",
        "riskLevel": "中低",
        "description": "人体への潜在的リスクが低〜中程度の医療機器。認証機関による認証。",
        "examples": [
          "超音波画像診断装置",
          "心電計",
          "歯科用合金",
          "電動式車椅子",
          "補聴器"
        ],
        "approvalPath": "認証（인증）— MFDS指定認証機関"
      },
      {
        "name": "Class III",
        "nameJa": "3等級（중고위험）",
        "riskLevel": "中高",
        "description": "人体への潜在的リスクが中〜高程度の医療機器。MFDS直接審査による許可。",
        "examples": [
          "人工呼吸器",
          "骨接合用プレート",
          "放射線治療装置",
          "透析器",
          "コンタクトレンズ"
        ],
        "approvalPath": "許可（허가）— MFDS直接審査"
      },
      {
        "name": "Class IV",
        "nameJa": "4等級（고위험）",
        "riskLevel": "高",
        "description": "人体に直接的かつ重大な影響を与える高リスク医療機器。最も厳格な審査が適用。",
        "examples": [
          "心臓ペースメーカー",
          "人工心臓弁",
          "冠動脈ステント",
          "脳深部刺激装置",
          "植込み型除細動器"
        ],
        "approvalPath": "許可（허가）— MFDS直接審査（臨床試験データ必須）"
      }
    ],
    "rules": [
      "IMDRF分類ルールに基づく判定",
      "品目別分類リスト（품목류）で品目コードとクラスを指定",
      "SaMDは機能・リスクに応じてクラスII〜IVに分類",
      "IVDは체외진단의료기기법で別途分類"
    ],
    "totalProductCodes": "約3,600（品目分類数）"
  },
  "conformityAssessment": {
    "overview": "韓国の医療機器は、クラスIは届出（신고）、クラスIIは指定認証機関による認証（인증）、クラスIII/IVはMFDS直接審査による許可（허가）が必要。全クラスでKGMP適合が前提条件（クラスIは自己宣言）。輸入機器は韓国代理人（Authorized Representative）の設置が必要。",
    "routes": [
      {
        "name": "Notification (届出 / 신고)",
        "nameJa": "医療機器届出",
        "applicableClasses": [
          "Class I"
        ],
        "description": "クラスI医療機器はMFDSへの届出のみで市場投入可能。技術文書の提出は必要だが、実質的な審査は行われない。KGMP適合は自己宣言。",
        "subtypes": [],
        "avgReviewTime": "即日〜数日",
        "fee": "少額",
        "url": "https://www.mfds.go.kr/"
      },
      {
        "name": "Certification (認証 / 인증)",
        "nameJa": "医療機器認証",
        "applicableClasses": [
          "Class II"
        ],
        "description": "MFDSが指定する認証機関（KTL、KTR等）が技術文書審査とKGMP適合性評価を実施して認証を付与。認証基準が定められた品目が対象。有効期限なし（継続的なKGMP適合が条件）。",
        "subtypes": [
          "新規認証",
          "変更認証"
        ],
        "avgReviewTime": "2〜4ヶ月",
        "fee": "認証機関ごとに設定",
        "url": "https://www.mfds.go.kr/"
      },
      {
        "name": "Approval (許可 / 허가)",
        "nameJa": "医療機器許可",
        "applicableClasses": [
          "Class III",
          "Class IV"
        ],
        "description": "MFDSが直接審査を実施。技術文書、臨床評価資料（クラスIVは臨床試験データが原則必要）、KGMP適合証明を提出。許可証の有効期限なし（条件変更なき限り有効）。革新的医療機器（혁신의료기기）の迅速審査制度あり。",
        "subtypes": [
          "新規許可",
          "変更許可",
          "革新的医療機器（迅速審査）",
          "条件付き許可"
        ],
        "avgReviewTime": "6〜12ヶ月（革新的医療機器: 4〜6ヶ月）",
        "fee": "品目により異なる（MFDS手数料規定に基づく）",
        "url": "https://www.mfds.go.kr/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "의료기기전자민원시스템（医療機器電子申請システム）",
    "url": "https://emed.mfds.go.kr/",
    "description": "MFDSの電子申請ポータル（eMED）を通じて、許可・認証・届出の申請をオンラインで提出可能。技術文書の電子提出が標準化されている。",
    "mandatory": true
  },
  "udi": {
    "required": true,
    "system": "韓国UDI制度（의료기기 고유식별코드）",
    "description": "NIDSが運営するUDIシステム。GS1、HIBC等の国際標準に対応。医療機器固有識別コード（UDI-DI）のデータベース登録と製品への表示を義務化。",
    "url": "https://www.nids.or.kr/",
    "timeline": "クラスIV: 義務化済み / クラスIII: 義務化済み / クラスII: 2024年〜義務化 / クラスI: 2025年〜義務化"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "의료기기 이상사례 보고제도（医療機器有害事象報告制度）",
      "mandatory": true,
      "url": "https://www.mfds.go.kr/",
      "description": "製造業者・輸入業者・医療機関は医療機器の有害事象をMFDSに報告する義務がある。重大事象は15日以内、その他は定期報告。NIDSが報告データの収集・分析を担当。"
    },
    "recalls": {
      "authority": "MFDS",
      "description": "MFDSの命令または製造業者の自主判断によるリコール。危害等級（1〜3級）に応じた対応。MFDSウェブサイトでリコール情報を公開。",
      "url": "https://www.mfds.go.kr/"
    },
    "surveillance": "MFDS による定期的なGMP査察（3年周期）、市販後安全性情報の収集・分析（NIDS）、品質再評価制度。安全性情報に基づく許可条件の変更・取消権限あり。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "MFDS",
    "name": "수출용 의료기기 제조・수출 증명서（輸出用医療機器証明書）",
    "description": "韓国で許可・認証・届出済みの医療機器について、MFDSが自由販売証明書を発行。輸出先国の登録申請に使用。",
    "processingTime": "約1〜2週間",
    "url": "https://www.mfds.go.kr/"
  },
  "reimbursement": {
    "system": "国民健康保険制度（국민건강보험）",
    "authority": "保健福祉部 / 健康保険審査評価院（HIRA）/ 国民健康保険公団（NHIS）",
    "description": "医療機器の保険償還は、診療報酬の「行為料」への包括または「治療材料」としての個別償還。新規医療技術の保険適用には新医療技術評価（NECA）と健康保険審査評価院（HIRA）の評価が必要。革新的医療技術の暫定的保険適用制度あり。",
    "codingSystems": [
      "治療材料コード",
      "行為料コード（診療報酬）",
      "DRG コード（包括払い対象品目）"
    ],
    "url": "https://www.hira.or.kr/"
  },
  "marketingRules": {
    "authority": "MFDS / 公正取引委員会",
    "description": "医療機器の広告は医療機器法に基づきMFDSが規制。事前審査制度は廃止されたが、虚偽・誇大広告は禁止。消費者向け広告には制限あり。",
    "keyRules": [
      "虚偽・誇大広告の禁止",
      "未許可医療機器の広告禁止",
      "効能・効果に関する根拠のない表現の制限",
      "オンライン広告を含む全媒体への適用",
      "医療機関向け不当利益提供の禁止"
    ]
  },
  "mdsap": {
    "status": "協力会員（Affiliate Member、2019年10月〜）",
    "description": "韓国（MFDS）は2019年10月からMDSAPの協力会員（Affiliate Member）として参加。正会員（Regulatory Authority）への移行を推進中。MDSAP監査報告書をKGMP査察の参考情報として活用。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "KGMPはISO 13485に完全整合。MDSAP監査報告書（ISO 13485ベース）でKGMP適合を代替可能。KS Q ISO 13485として韓国産業標準化。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "リスクマネジメントの実施が許可・認証の要件。KS C IEC/ISO 14971として標準化。技術文書にリスク分析結果の記載が必要。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "ソフトウェア医療機器の許可・認証でIEC 62304適合が要求される。KS C IEC 62304として標準化。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "医用電気機器の安全規格。KS C IEC 60601シリーズとして韓国産業標準化。許可・認証申請での適合が必須。"
    },
    "others": [
      {
        "name": "KS規格（韓国産業標準）",
        "notes": "国際規格をKSとして翻訳採用するケースが多い。KSへの適合が許可・認証の基準として活用。"
      },
      {
        "name": "IEC 62443（サイバーセキュリティ）",
        "notes": "ネットワーク接続型医療機器のサイバーセキュリティ要件として参照。MFDSガイダンスで推奨。"
      }
    ]
  },
  "recentDevelopments": [
    {
      "date": "2025-04",
      "title": "KGMP改正告示（MFDS告示第2025-22号）",
      "description": "MFDSが医療機器製造及び品質管理基準（KGMP）を改正。クラスIII機器の第三者検査機関による監査簡素化、MDSAP監査との併合監査の法的根拠整備、デジタル医療製品法施行に伴うSaMD関連条項の分離・削除を実施。"
    },
    {
      "date": "2025-01",
      "title": "デジタル医療製品法（디지털의료제품법）施行",
      "description": "2025年1月24日施行。AI/ML SaMD、デジタル治療機器（DTx）を含むデジタル医療製品の規制枠組みを定める新法。迅速審査制度とリアルワールドデータ活用を法制化。"
    },
    {
      "date": "2024-01",
      "title": "MDSAP監査報告書の活用拡大",
      "description": "MDSAP監査報告書によるKGMP代替活用の運用が定着。輸入医療機器メーカーの負担軽減に寄与。"
    },
    {
      "date": "2023-07",
      "title": "SaMD許可審査ガイダンス更新",
      "description": "MFDSがSaMD（ソフトウェア医療機器）の許可・認証審査に関するガイダンスを更新。AI/ML医療機器の変更管理に関する要件を明確化。"
    },
    {
      "date": "2020-05",
      "title": "医療機器産業育成法施行",
      "description": "医療機器産業の競争力強化と規制環境の整備を目的とする医療機器産業育成法が施行。革新的医療機器の開発支援と規制合理化を推進。"
    }
  ],
  "lastUpdated": "2026-04-06",
  "verified": "2026-04-06"
};
