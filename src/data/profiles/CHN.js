// 中国 (China)
export default {
  "code": "CHN",
  "country": "中国",
  "countryEn": "China",
  "region": "ASPAC",
  "flag": "🇨🇳",
  "legalSystemOverview": {
    "type": "一党制・国務院行政法規体系",
    "description": "国家薬品監督管理局（NMPA）が医療機器の登録・監督を所管。国務院令に基づく行政法規体系で運用され、技術審査は医療機器技術審査センター（CMDE）が担当。省級薬品監督管理局がクラスII機器の登録と日常監督を実施する地方分権体制。",
    "keyCharacteristics": [
      "NMPAが中央で監督、CMDE が技術審査を担当",
      "省級薬監局がクラスII登録・日常監督を実施",
      "3クラス分類（リスクベース）",
      "輸入機器は中国代理人（China Agent）の設置が必須",
      "臨床試験は原則として中国国内データが要求される"
    ]
  },
  "authorities": [
    {
      "name": "NMPA",
      "fullName": "National Medical Products Administration",
      "localName": "国家药品监督管理局",
      "role": "医療機器の登録審査（クラスIII）、GMP査察、市販後監視、法令策定を統括",
      "url": "https://www.nmpa.gov.cn/",
      "isPrimary": true
    },
    {
      "name": "CMDE",
      "fullName": "Center for Medical Device Evaluation",
      "localName": "国家药品监督管理局医疗器械技术审评中心",
      "role": "クラスII/III医療機器の技術審査（安全性・有効性評価）を実施。NMPAの直属機関。",
      "url": "https://www.cmde.org.cn/",
      "isPrimary": false
    },
    {
      "name": "省級薬品監督管理局",
      "fullName": "Provincial Medical Products Administrations",
      "localName": "省级药品监督管理局",
      "role": "クラスI医療機器の備案（届出）受理、クラスII医療機器の登録審査、管轄区域内の日常監督",
      "url": "https://www.nmpa.gov.cn/directory/web/nmpa/xxgk/fgsslj/qsgcx/index.html",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "該当なし（政府直接審査制度）",
    "description": "中国には欧州型のNotified Body制度は存在しない。技術審査はCMDE（クラスII/III）または省級薬監局（クラスI）が直接実施。GMP査察も政府機関が実施。第三者認証機関による認証制度はない。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "人体に対して直接的又は間接的に使用され、以下の一つ又は複数の目的を持つ器具、設備、器材、体外診断試薬及びキャリブレータ、材料並びにその他類似又は関連する物品：(1)疾病の予防、診断、治療、監視、軽減 (2)損傷の診断、治療、監視、軽減、補償 (3)解剖学的又は生理学的過程の検査、置換、調節又は支持 (4)生命の支持又は維持 (5)妊娠の制御 (6)医療機器の消毒 (7)体液標本の体外検査による医学情報の提供（医疗器械监督管理条例第103条）",
    "scope": "機器、設備、器材、体外診断試薬、材料。ソフトウェア単体（SaMD）も2021年条例改正で明確に対象。動物用機器は別途規制。",
    "notes": "2021年の条例改正（国務院令739号）でリスクベース規制の明確化、臨床評価要件の整理、UDI制度の法的根拠を整備。"
  },
  "primaryLaw": {
    "title": "医療機器監督管理条例（医疗器械监督管理条例）",
    "originalTitle": "医疗器械监督管理条例（国务院令第739号）",
    "enacted": "2000-01-04",
    "lastAmended": "2024-12-06",
    "url": "https://xzfg.moj.gov.cn/front/law/detail?LawID=1412",
    "description": "中国の医療機器規制の最上位法規（国務院行政法規）。2021年の全面改正（国務院令739号）でリスクベース規制の強化、登録人制度（MAH類似）の導入、臨床評価制度の整理、UDI制度の法的根拠整備、罰則強化などを実施。2024年12月6日付「国務院関于修改和廃止部分行政法規的決定」（国務院令797号、2025年1月7日施行）で一部条文を修正。クラスI備案・クラスII/III登録の枠組みを規定。"
  },
  "implementingRegulations": [
    {
      "title": "医療機器登録及び届出管理弁法（医疗器械注册与备案管理办法）",
      "date": "2021-10-01",
      "url": "https://www.nmpa.gov.cn/xxgk/fgwj/bmgzh/20210826165621176.html",
      "description": "NMPA令第47号。医療機器の登録（注册）・届出（备案）の手続き、申請資料要件、審査プロセスを詳細に規定。輸入機器の申請手続きも規定。",
      "category": "登録管理"
    },
    {
      "title": "医療機器生産監督管理弁法（医疗器械生产监督管理办法）",
      "date": "2022-05-01",
      "url": "https://www.nmpa.gov.cn/xxgk/fgwj/bmgzh/20220330162956177.html",
      "description": "医療機器の製造に係る品質管理体系（GMP相当）の要件、製造許可・届出手続き、査察制度を規定。",
      "category": "GMP"
    },
    {
      "title": "医療機器臨床試験品質管理規範（医疗器械临床试验质量管理规范）",
      "date": "2022-05-01",
      "url": "https://www.nmpa.gov.cn/xxgk/fgwj/bmgzh/20220324174736106.html",
      "description": "GCP相当。医療機器臨床試験の計画・実施・報告に関する品質管理規範。倫理審査、インフォームドコンセント、データ管理等を規定。",
      "category": "GCP"
    },
    {
      "title": "医療機器分類規則（医疗器械分类规则）",
      "date": "2015-07-14",
      "url": "https://www.nmpa.gov.cn/xxgk/fgwj/bmgzh/20150714120001899.html",
      "description": "リスクベースの3クラス分類規則。使用目的、構造特性、対象部位等に基づく分類判定ルールを規定。",
      "category": "分類"
    },
    {
      "title": "医療機器分類目録（医疗器械分类目录）",
      "date": "2017-08-31",
      "url": "https://www.nmpa.gov.cn/ylqx/ylqxggtg/20170831151901573.html",
      "description": "医療機器の具体的な分類目録。22大類、206小類に分類。各品目のクラス分類を規定。",
      "category": "分類"
    }
  ],
  "relatedLaws": [
    {
      "title": "個人情報保護法（个人信息保护法 / PIPL）",
      "category": "データ保護",
      "enacted": "2021-11-01",
      "url": "http://www.npc.gov.cn/npc/c30834/202108/a8c4e3672c74491a80b53a172bb753fe.shtml",
      "relevance": "医療機器から取得される健康情報は「敏感個人信息」に該当し、厳格な取扱い要件が適用。データの越境移転制限あり。"
    },
    {
      "title": "データ安全法（数据安全法）",
      "category": "データ安全",
      "enacted": "2021-09-01",
      "url": "http://www.npc.gov.cn/npc/c30834/202106/7c9af12f51334a73b56d7938f99a788a.shtml",
      "relevance": "医療健康データは「重要データ」に分類される可能性があり、データ分類・等級保護の要件が適用。"
    },
    {
      "title": "ネットワーク安全法（网络安全法）",
      "category": "サイバーセキュリティ",
      "enacted": "2017-06-01",
      "url": "http://www.npc.gov.cn/npc/c30834/201611/270bcb7b7ae14aff95af57b0423db127.shtml",
      "relevance": "ネットワーク接続型医療機器に適用。等級保護制度への適合、脆弱性報告義務、ネットワーク製品安全認証が関連。"
    },
    {
      "title": "人工知能関連規制（生成式人工智能服务管理暂行办法等）",
      "category": "AI規制",
      "enacted": "2023-08-15",
      "url": "https://www.cac.gov.cn/2023-07/13/c_1690898327029107.htm",
      "relevance": "AI搭載医療機器に対し、アルゴリズム登録制度、AI倫理要件、説明可能性要件が追加で適用される可能性。"
    }
  ],
  "classification": {
    "system": "リスクベース3クラス分類",
    "basis": "医療機器の使用目的、構造特性、使用方法に基づくリスク程度に応じた分類。",
    "classes": [
      {
        "name": "Class I",
        "nameJa": "第一類医療機器",
        "riskLevel": "低",
        "description": "日常的な管理で安全性・有効性を確保できるリスクの低い医療機器。",
        "examples": [
          "手術用メス",
          "聴診器",
          "医療用ガーゼ",
          "手動式血圧計"
        ],
        "approvalPath": "備案（届出）— 市級薬監局"
      },
      {
        "name": "Class II",
        "nameJa": "第二類医療機器",
        "riskLevel": "中",
        "description": "安全性・有効性の管理を強化する必要があるリスクが中程度の医療機器。",
        "examples": [
          "血圧監視装置",
          "体温計",
          "心電計",
          "超音波診断装置",
          "手術用手袋",
          "注射器"
        ],
        "approvalPath": "登録（注册）— 省級薬監局審査"
      },
      {
        "name": "Class III",
        "nameJa": "第三類医療機器",
        "riskLevel": "高",
        "description": "体内に植え込まれる、生命維持に使用される等、安全性確保に特別な管理が必要な高リスク医療機器。",
        "examples": [
          "心臓ペースメーカー",
          "人工関節",
          "血管内ステント",
          "人工心肺装置",
          "体外診断試薬（高リスク）"
        ],
        "approvalPath": "登録（注册）— NMPA/CMDE審査"
      }
    ],
    "rules": [
      "分類規則に基づく判定フロー（使用目的→構造特性→リスク程度）",
      "分類目録で品目ごとにクラスを指定",
      "新製品は分類界定（分類判定）を申請可能",
      "体外診断試薬は別途分類目録が存在"
    ],
    "totalProductCodes": "約6,800（分類目録の品目数）"
  },
  "conformityAssessment": {
    "overview": "中国の医療機器は、クラスIは備案（届出）、クラスII/IIIは登録（注册）が必要。輸入機器は全クラスでNMPAまたはその委託先に申請。国内データ要件が厳しく、臨床試験は原則として中国国内での実施が求められるが、国際多施設共同治験の受入れも拡大中。中国代理人（Agent）の設置は輸入機器に必須。",
    "routes": [
      {
        "name": "Filing (備案 / 备案)",
        "nameJa": "第一類医療機器備案",
        "applicableClasses": [
          "Class I"
        ],
        "description": "第一類医療機器は備案（届出）のみで市場投入可能。国産品は市級薬監局、輸入品はNMPAに備案。審査は形式確認のみ。",
        "subtypes": [],
        "avgReviewTime": "5営業日（形式確認）",
        "fee": "なし",
        "url": "https://www.nmpa.gov.cn/ylqx/"
      },
      {
        "name": "Registration (登録 / 注册)",
        "nameJa": "第二類・第三類医療機器登録",
        "applicableClasses": [
          "Class II",
          "Class III"
        ],
        "description": "クラスII国産品は省級薬監局、クラスIII国産品および全輸入品はNMPA/CMDEが技術審査を実施。登録証の有効期限は5年（更新可能）。申請資料にはGMP適合証明、臨床評価資料（臨床試験または同等品比較）、技術文書が必要。",
        "subtypes": [
          "初回登録（首次注册）",
          "延續登録（延续注册 / 5年更新）",
          "変更登録（变更注册）",
          "特別審査手続き（創新医療機器）",
          "優先審査手続き"
        ],
        "avgReviewTime": "クラスII: 技術審評60工作日 + 登録決定20工作日 / クラスIII: 技術審評90工作日 + 登録決定20工作日（創新医療機器: 優先処理）",
        "fee": "進口第三類首次注册: 30.88万元 / 延続注册: 4.08万元（NMPA手数料規定に基づく）",
        "url": "https://www.cmde.org.cn/"
      },
      {
        "name": "Clinical Trial",
        "nameJa": "臨床試験（医療機器臨床試験）",
        "applicableClasses": [
          "Class II",
          "Class III"
        ],
        "description": "臨床評価で臨床試験データが必要と判断された場合に実施。一般の臨床試験は備案制（届出制）。高リスク第三類医療機器の臨床試験はNMPA承認が必要（法定審批時限60工作日）。倫理審査委員会の承認が必要。国際多施設共同治験の受入れ枠組みも整備中だが、中国人被験者データが原則必要。",
        "subtypes": [
          "臨床試験備案（届出制 — 一般の臨床試験）",
          "高リスク第三類臨床試験審批（承認制 — NMPA審査）",
          "国際多施設共同臨床試験"
        ],
        "avgReviewTime": "備案制: 即時開始可 / 高リスク第三類審批: 60工作日",
        "fee": "高リスク第三類臨床試験申請: 4.32万元",
        "url": "https://www.cmde.org.cn/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "eRPS（医療機器登録電子申請システム）",
    "url": "https://zwfw.nmpa.gov.cn/",
    "description": "NMPAの電子申請プラットフォームを通じてオンライン提出が可能。登録申請、備案、変更申請等の電子化を段階的に推進中。紙媒体の提出も一部残存。",
    "mandatory": false
  },
  "udi": {
    "required": true,
    "system": "中国UDI制度（医療機器唯一標識 / 医疗器械唯一标识）",
    "description": "NMPAが推進する医療機器固有識別子制度。GS1、HIBC、ISBT128等の発行機関コードに対応。UDIデータベース（NMPA運営）への登録が必要。2019年から段階的に導入開始。",
    "url": "https://udi.nmpa.gov.cn/",
    "timeline": "クラスIII: 2022年より義務化（第1〜2批） / クラスII: 2024年6月第3批義務化、全面義務化は2027年6月目標（公式公告で要確認） / クラスI: 2029年6月目標（公式公告で要確認）"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "医療機器不良事件報告制度",
      "mandatory": true,
      "url": "https://www.nmpa.gov.cn/ylqx/",
      "description": "製造業者・経営業者・医療機関は医療機器の不良事件（有害事象）を報告する義務がある。重大事件は即時報告、一般事件は定期報告。省級・国家級の監測機構がデータ分析を実施。"
    },
    "recalls": {
      "authority": "NMPA / 省級薬品監督管理局",
      "description": "医療機器リコール管理弁法に基づき、製造業者が自主リコールを実施。クラスI〜IIIの緊急度に応じた対応。NMPAは命令リコールの権限も保有。",
      "url": "https://www.nmpa.gov.cn/ylqx/ylqxzhcx/index.html"
    },
    "surveillance": "登録証の有効期限は5年で更新審査あり。NMPAによる年次報告制度、GMP定期査察、抜き打ち検査。リスク監測データに基づく安全性再評価。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "NMPA",
    "name": "自由販売証明書（医疗器械出口销售证明）",
    "description": "中国で登録済みの医療機器について、NMPAが輸出販売証明を発行。輸出先国の登録申請に使用。",
    "processingTime": "約20営業日",
    "url": "https://www.nmpa.gov.cn/ylqx/"
  },
  "reimbursement": {
    "system": "基本医療保険制度（城镇职工・城乡居民基本医疗保険）",
    "authority": "国家医療保障局（National Healthcare Security Administration / NHSA）",
    "description": "医療機器の保険償還は診療項目（技術料）への包括が主。高額医療機器は省級の償還リストに基づく。DRG/DIP改革の推進により包括払い化が進行中。革新的医療機器は一部地域で追加償還の仕組みあり。",
    "codingSystems": [
      "医療サービス項目コード",
      "医用耗材分類・コード",
      "DRG/DIP 分組コード"
    ],
    "url": "http://www.nhsa.gov.cn/"
  },
  "marketingRules": {
    "authority": "NMPA / 国家市場監督管理総局（SAMR）",
    "description": "医療機器の広告は広告法および医療機器広告審査弁法に基づき、省級薬監局の事前審査が必要。虚偽・誇大広告は厳罰。未登録機器の広告は禁止。",
    "keyRules": [
      "広告法に基づく虚偽広告・誇大広告の禁止",
      "医療機器広告の事前審査制度（省級薬監局）",
      "未登録医療機器の広告禁止",
      "医療機器広告審査番号の表示義務",
      "インターネット広告への規制強化"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "中国はMDSAPに参加していない。GMP査察はNMPAおよび省級薬監局が独自の基準（医療機器生産品質管理規範）で実施。MDSAP報告書は受入れない。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "中国の医療機器GMP規範はISO 13485を参考にしているが、独自の要件も多い。ISO 13485認証は直接的な代替とはならず、中国GMP適合が別途必要。GB/T 42061としてISO 13485を国家標準化。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "リスクマネジメントの実施が登録申請で要求される。YY/T 0316としてISO 14971を業界標準化。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "ソフトウェア医療機器の登録申請でIEC 62304への適合が求められる。YY/T 0664として標準化。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "医用電気機器の安全規格。GB 9706シリーズとしてIEC 60601を国家強制標準化。強制認証（CCC）の対象品目あり。"
    },
    "others": [
      {
        "name": "GB規格（国家標準）",
        "notes": "中国独自の国家標準。GB（強制）とGB/T（推奨）がある。多くの国際規格を翻訳採用しているが、中国固有要件が追加される場合あり。"
      },
      {
        "name": "YY規格（医療機器業界標準）",
        "notes": "NMPAが策定する医療機器業界標準。国際規格の翻訳採用が多いが、中国独自の技術要件も含む。"
      }
    ]
  },
  "recentDevelopments": [
    {
      "date": "2026-03",
      "title": "NMPAソフトウェア関連規格更新（YY/T 1406-2026）",
      "description": "NMPAが2026年3月17日にソフトウェア関連の医療機器規格（YY/T 1406-2026）を公布（2027年3月1日施行）。GB/T 42062のリスクマネジメント原則をソフトウェアライフサイクルに適用する指針を更新。旧YY/T 1406.1-2016を廃止。"
    },
    {
      "date": "2025-01",
      "title": "医療機器監督管理条例の一部改正施行（国務院令797号）",
      "description": "「国務院関于修改和廃止部分行政法規的決定」（国務院令797号、2024年12月6日公布）に基づき、条例第19条・第103条の一部条文を修正。2025年1月7日施行。"
    },
    {
      "date": "2024-06",
      "title": "クラスII UDI第3弾義務化（103品目）",
      "description": "第二類医療機器のUDI（唯一標識）実施の第3弾として103品目が義務化。クラスII全面義務化は2027年6月1日、クラスI全面義務化は2029年6月1日が期限。"
    },
    {
      "date": "2025-11",
      "title": "NMPA新版GMP公布（2026年11月1日施行）",
      "description": "NMPAが医療機器生産品質管理規範（新版GMP、2025年第107号）を公布。2026年11月1日施行。ISO 13485との整合強化、リスクベースのアプローチを導入。"
    },
    {
      "date": "2021-06",
      "title": "医療機器監督管理条例改正施行",
      "description": "国務院令第739号として全面改正された医療機器監督管理条例が施行。登録人制度、緊急使用許可、市販後監視の強化等を導入。"
    }
  ],
  "lastUpdated": "2026-04-06",
  "verified": "2026-04-06"
};
