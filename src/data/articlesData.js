/**
 * 医療機器規制ニュース 記事データ
 *
 * ── 週刊まとめ（heroScope: "week"）の編集ルール ──
 * - 公開日: 毎週月曜 09:00（Asia/Tokyo）
 * - 対象期間: 月曜 0:00 〜 日曜 23:59（東京日付）
 * - weekRoundupPeriod: { start, end } に対象週の両端を入れる
 *
 * 任意フィールド:
 *   coverImage: { src: "articles/…" | "https://…", alt, caption? }
 *   figures: [{ src, alt, caption?, afterParagraph }]
 *   tables: [{ afterParagraph, caption?, headers: string[], rows: string[][] }]
 *   primarySources: [{ title, url, site?, note? }]
 *   date: YYYY-MM-DD — ニュースが世に出た基準日
 *   newsDate?: — 省略可。指定時は getArticleNewsYmd がこちらを優先
 *   pinned?: boolean — ヒーロー候補の優先
 *   heroScope?: "day" | "week" | "none"
 *   weekRoundupPeriod?: { start, end }
 *   lastReviewed: YYYY-MM-DD — 比較記事の最終確認日
 */

export const ARTICLES = [
  {
    "id": "fda-ai-samd-guidance-final-2026",
    "type": "news",
    "category": "guidance",
    "title": "FDA、AI/ML 搭載 SaMD の市販前審査に関する最終ガイダンスを公開 — PCCP の正式要件が確定",
    "excerpt": "FDA が AI/ML ベースの SaMD（Software as a Medical Device）に対する市販前審査の最終ガイダンスを発行。事前変更管理計画（PCCP）の正式要件が明確化され、継続学習型 AI の510(k)申請の道筋が整った。",
    "body": [
      "FDA は2026年3月28日、AI/ML（人工知能・機械学習）を搭載した SaMD（Software as a Medical Device）の市販前審査に関する最終ガイダンスを発行した。2023年のドラフトから約3年を経て、事前変更管理計画（Predetermined Change Control Plan: PCCP）の正式な要件が確定した。",
      "PCCP は、AI/ML モデルの継続的な学習・更新を FDA への再申請なしに行うための枠組みだ。最終ガイダンスでは、変更の種別（アルゴリズム変更・学習データ追加・性能閾値の調整）ごとに必要な検証項目が明示された。これにより、メーカーは製品ライフサイクル全体を通じた AI 更新計画を事前に承認してもらえる。",
      "対象となるのは De Novo、510(k)、PMA のいずれの申請経路でも同様で、PCCP を含む申請には「リアルワールドパフォーマンスモニタリング計画」の添付が義務化された。FDA はまた、PCCP の審査に特化したレビューチームを CDRH 内に新設すると発表している。",
      "日本の PMDA や欧州の MDR/IVDR における AI 医療機器の規制枠組みとの整合性も注目される。FDA の PCCP アプローチは IMDRF の SaMD ガイダンスと方向性を共有しており、国際的な規制調和の基盤となる可能性がある。"
    ],
    "date": "2026-03-31",
    "newsDate": "2026-03-28",
    "author": "MedDevice Reg News 編集部",
    "readTime": "5分",
    "tags": ["FDA", "AI/ML", "SaMD", "PCCP", "ガイダンス", "510(k)"],
    "primarySources": [
      { "title": "FDA Guidance: Marketing Submission Recommendations for AI/ML-Enabled Device Software Functions", "site": "FDA", "url": "https://www.fda.gov/regulatory-information/search-fda-guidance-documents" }
    ]
  },
  {
    "id": "iec-62304-amd2-2026",
    "type": "news",
    "category": "standard",
    "title": "IEC 62304 Amendment 2 が発行 — AI/ML ソフトウェアのライフサイクル管理と継続的検証が追加",
    "excerpt": "医療機器ソフトウェアのライフサイクル規格 IEC 62304 に Amendment 2 が追加。AI/ML を用いたソフトウェアの開発・保守プロセスと、市販後の継続的な性能検証要件が新たに規定された。",
    "body": [
      "IEC は2026年3月25日、医療機器ソフトウェアのライフサイクル規格 IEC 62304 の Amendment 2 を正式発行した。2006年の初版、2015年の Amendment 1 に続く改訂で、AI/ML を活用した医療機器ソフトウェアへの対応が主な変更点となる。",
      "Amendment 2 では、新たに「適応型アルゴリズム（Adaptive Algorithm）」のカテゴリが追加され、継続学習型 AI の開発プロセスに必要な追加要件が規定された。具体的には、学習データの管理、モデル検証の反復プロセス、デプロイ後の性能モニタリングが新規条項として加わっている。",
      "ソフトウェア安全クラス（Class A / B / C）の分類基準にも微修正があり、AI/ML の出力が臨床判断に与える影響度に応じた分類ガイダンスが Annex として追加された。これにより、診断支援 AI と治療制御 AI で求められる検証レベルが明確に区別される。",
      "IEC 62304 は ISO 13485 と並んで医療機器ソフトウェア開発の基盤規格であり、FDA の認識する合意規格（Recognized Consensus Standard）にも含まれる。Amendment 2 の発行により、グローバルでの AI 医療機器開発の規格基盤が整備されたと言える。"
    ],
    "date": "2026-03-31",
    "newsDate": "2026-03-25",
    "author": "MedDevice Reg News 編集部",
    "readTime": "5分",
    "tags": ["IEC 62304", "AI/ML", "ソフトウェアライフサイクル", "規格", "ISO"],
    "primarySources": [
      { "title": "IEC 62304:2006+AMD1:2015+AMD2:2026", "site": "IEC", "url": "https://webstore.iec.ch/en/publication/62304" }
    ]
  },
  {
    "id": "pmda-cybersecurity-guidance-2026",
    "type": "news",
    "category": "cybersecurity",
    "title": "PMDA、医療機器サイバーセキュリティガイダンス改訂版を公開 — SBOM 提出が実質義務化",
    "excerpt": "PMDA が医療機器のサイバーセキュリティに関するガイダンス改訂版を公開。SBOM（ソフトウェア部品表）の承認申請時の提出が実質義務化され、市販後のセキュリティ監視計画も要求事項に追加された。",
    "body": [
      "独立行政法人 医薬品医療機器総合機構（PMDA）は2026年3月27日、「医療機器のサイバーセキュリティに関するガイダンス」の改訂版を公開した。2023年版からの主な変更点は、SBOM（Software Bill of Materials）の提出要件の強化と、市販後セキュリティ監視の具体的な要求事項の追加だ。",
      "改訂ガイダンスでは、ネットワーク接続機能を持つ医療機器の承認申請時に SBOM の提出が「強く推奨」から「原則必要」に格上げされた。SBOM のフォーマットは SPDX または CycloneDX を推奨し、オープンソースコンポーネントの脆弱性管理プロセスの文書化も求められる。",
      "また、市販後のセキュリティ対応として、脆弱性情報の定期的な収集・評価プロセス、セキュリティパッチの適用方針、インシデント発生時の報告手順を承認申請時に提出するよう求めている。これは FDA の市販前サイバーセキュリティガイダンス（2023年）と方向性を合わせたものだ。",
      "適用時期は2026年10月1日以降の新規申請から。既承認品については、次回の一部変更承認申請時に SBOM を追加提出することが望ましいとされている。IMDRFのサイバーセキュリティガイダンスとの整合性も確保されている。"
    ],
    "date": "2026-03-31",
    "newsDate": "2026-03-27",
    "author": "MedDevice Reg News 編集部",
    "readTime": "5分",
    "tags": ["PMDA", "サイバーセキュリティ", "SBOM", "ガイダンス", "脆弱性管理"],
    "primarySources": [
      { "title": "医療機器のサイバーセキュリティに関するガイダンス", "site": "PMDA", "url": "https://www.pmda.go.jp/review-services/drug-reviews/about-reviews/devices/0029.html" }
    ]
  },

  // ─── 国別規制プロファイル（Phase 2） ───

  {
    "id": "country-profile-usa",
    "type": "feature",
    "category": "medtech",
    "heroScope": "none",
    "title": "【国別プロファイル】米国 — FDA CDRH の医療機器規制体系",
    "excerpt": "米国の医療機器規制の全体像。FDA CDRH による Class I〜III の分類体系、510(k)・De Novo・PMA の3つの申請経路、21 CFR に基づく品質システム規制（QMSR）を解説。",
    "body": [
      "米国の医療機器規制は、FDA（Food and Drug Administration）の CDRH（Center for Devices and Radiological Health）が所管する。根拠法は Federal Food, Drug, and Cosmetic Act（FD&C Act）で、具体的な規制要件は Code of Federal Regulations（CFR）Title 21 に規定されている。",
      "**クラス分類**: 米国は3クラス制を採用。Class I（一般的管理）、Class II（特別管理）、Class III（市販前承認）。約1,700の製品コードで分類され、FDA の Product Classification Database で確認できる。Class I の約47%は510(k)免除、Class II の大半は510(k)が必要、Class III は PMA が必要。",
      "**申請経路は3つ**: (1) **510(k)** — 既存の承認済み機器（Predicate Device）との実質的同等性を示す最も一般的な経路。審査期間は通常90日。(2) **De Novo** — 前例のない低〜中リスク機器向け。新規分類の作成を伴い、AI/ML 搭載の SaMD でよく利用される。(3) **PMA（Premarket Approval）** — Class III 機器に必要な最も厳格な経路。臨床試験データが求められ、審査期間は180日以上。",
      "**品質システム規制（QMSR）**: 2024年2月、FDA は従来の 21 CFR Part 820（Quality System Regulation）を大幅改訂し、ISO 13485:2016 との整合を図った。新規制は Quality Management System Regulation（QMSR）と呼ばれ、2026年2月に完全施行された。これにより、ISO 13485 認証を取得している企業は FDA の QMS 要件への対応が大幅に簡素化された。",
      "**UDI（固有機器識別）**: FDA は UDI システムの導入を段階的に進め、2025年までに Class I を含む全クラスでの UDI 表示が義務化された。GUDID（Global UDI Database）への登録も必要。",
      "**市販後監視**: MDR（Medical Device Reporting）による有害事象の報告義務（21 CFR Part 803）、リコール制度（21 CFR Part 7）、市販後調査（522 Postmarket Surveillance Studies）が主な制度。FDA の MAUDE データベースで報告内容を検索できる。"
    ],
    "tables": [
      {
        "afterParagraph": 2,
        "caption": "米国 FDA の申請経路比較",
        "headers": ["経路", "対象クラス", "審査期間", "臨床データ", "費用目安"],
        "rows": [
          ["510(k)", "主に Class II", "約90日", "通常不要", "約$22,000"],
          ["De Novo", "新規 Class I/II", "約150日", "場合による", "約$135,000"],
          ["PMA", "Class III", "180日+", "必要", "約$442,000"]
        ]
      }
    ],
    "date": "2026-04-01",
    "lastReviewed": "2026-04-01",
    "author": "MedDevice Reg News 編集部",
    "readTime": "8分",
    "tags": ["USA", "FDA", "CDRH", "510(k)", "De Novo", "PMA", "QMSR", "UDI"],
    "primarySources": [
      { "title": "FDA Medical Devices", "site": "FDA", "url": "https://www.fda.gov/medical-devices" },
      { "title": "21 CFR Part 820 - QMSR", "site": "eCFR", "url": "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-820" },
      { "title": "Premarket Notification 510(k)", "site": "FDA", "url": "https://www.fda.gov/medical-devices/premarket-submissions-selecting-and-preparing-correct-submission/premarket-notification-510k" }
    ]
  },

  {
    "id": "country-profile-eu",
    "type": "feature",
    "category": "medtech",
    "heroScope": "none",
    "title": "【国別プロファイル】EU — MDR/IVDR による医療機器規制体系",
    "excerpt": "EU の医療機器規制の全体像。MDR 2017/745 と IVDR 2017/746 の枠組み、Notified Body による適合性評価、CE マーキング、EUDAMED データベースを解説。",
    "body": [
      "EU の医療機器規制は、2021年5月に完全適用された MDR（Medical Device Regulation, (EU) 2017/745）が中核。体外診断用医療機器は IVDR（(EU) 2017/746, 2022年5月適用）が適用される。旧 MDD（93/42/EEC）からの移行は Regulation (EU) 2024/1860 により猶予期間が延長されている。",
      "**クラス分類**: EU は Class I（Is, Im, Ir を含む）、IIa、IIb、III の4クラス制。MDR Annex VIII の分類規則（Rule 1〜22）に基づく。AI/ML ソフトウェアの分類は MDCG 2019-11 rev.1 で詳細なガイダンスが提供されている。",
      "**適合性評価**: Class I（非滅菌・非計測）以外はすべて Notified Body（認証機関）による適合性評価が必要。メーカーは技術文書（Technical Documentation）を作成し、CE マーキングを付与して EU 市場に上市する。EU 域外メーカーは EU 域内に Authorised Representative を置く必要がある。",
      "**MDCG ガイダンス**: 欧州委員会の MDCG（Medical Device Coordination Group）が実務的なガイダンスを多数発行。クラス分類（MDCG 2021-24）、臨床評価の同等性（MDCG 2020-5）、サイバーセキュリティ（MDCG 2019-16 rev.1）、SaMD の分類（MDCG 2019-11 rev.1）などが重要文書。",
      "**EUDAMED**: EU の医療機器データベース。UDI/機器登録、Notified Body・認証情報、臨床試験、市販後監視、市場監視の6モジュールで構成。段階的に稼働中。",
      "**市販後監視**: PMS（Post-Market Surveillance）計画、PSUR（Periodic Safety Update Report）、重大インシデント報告（Serious Incident Report）が MDR で義務化。Vigilance 報告は各国 Competent Authority を通じて行う。"
    ],
    "tables": [
      {
        "afterParagraph": 2,
        "caption": "EU MDR のクラス分類と適合性評価",
        "headers": ["クラス", "リスク", "適合性評価", "Notified Body", "技術文書審査"],
        "rows": [
          ["Class I", "低", "自己宣言", "不要（原則）", "不要"],
          ["Class IIa", "中低", "Annex IX/XI", "必要", "サンプリング"],
          ["Class IIb", "中高", "Annex IX/X", "必要", "全件"],
          ["Class III", "高", "Annex IX + X", "必要", "全件 + 臨床評価"]
        ]
      }
    ],
    "date": "2026-04-01",
    "lastReviewed": "2026-04-01",
    "author": "MedDevice Reg News 編集部",
    "readTime": "8分",
    "tags": ["EU", "MDR", "IVDR", "CE マーキング", "Notified Body", "EUDAMED", "MDCG"],
    "primarySources": [
      { "title": "Regulation (EU) 2017/745 (MDR)", "site": "EUR-Lex", "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32017R0745" },
      { "title": "MDCG Guidance Documents", "site": "European Commission", "url": "https://health.ec.europa.eu/medical-devices-sector/new-regulations/guidance-mdcg-endorsed-guidance-and-other-guidance_en" }
    ]
  },

  {
    "id": "country-profile-japan",
    "type": "feature",
    "category": "medtech",
    "heroScope": "none",
    "title": "【国別プロファイル】日本 — 薬機法・PMDA による医療機器規制体系",
    "excerpt": "日本の医療機器規制の全体像。薬機法に基づく4クラス分類、PMDA による承認審査、QMS 省令（ISO 13485 整合）、プログラム医療機器（SaMD）の規制を解説。",
    "body": [
      "日本の医療機器規制は、薬機法（医薬品、医療機器等の品質、有効性及び安全性の確保等に関する法律）が根拠法。厚生労働省（MHLW）が政策・法令を所管し、PMDA（医薬品医療機器総合機構）が承認審査と安全対策を実施する二元体制。",
      "**クラス分類**: 日本は4クラス制。一般医療機器（クラスI）、管理医療機器（クラスII）、高度管理医療機器（クラスIII）、高度管理医療機器（クラスIV）。国際整合を重視し、GHTF/IMDRF の分類枠組みをベースとしている。",
      "**申請経路**: (1) **届出**（クラスI）— 都道府県に届出。(2) **認証**（クラスII の一部）— 第三者認証機関（登録認証機関）が認証。基準適合性が確認されれば承認不要。(3) **承認**（クラスIII・IV、一部のクラスII）— PMDA が審査し、厚生労働大臣が承認。後発医療機器（510(k)相当）、改良医療機器、新医療機器の3区分がある。",
      "**QMS 省令**: ISO 13485 と整合した品質管理基準。QMS 適合性調査は PMDA または登録認証機関が実施。QMS 省令は2021年に改訂され、ISO 13485:2016 との差異が縮小された。",
      "**プログラム医療機器（SaMD）**: 2014年の薬機法改正でプログラム単体を医療機器として規制する枠組みが整備された。2023年にはプログラム医療機器の該当性に関するガイダンスが改訂され、AI/ML を活用した診断支援ソフトウェアの審査事例が増加している。PMDA は SaMD の審査相談（対面助言）も提供。",
      "**IMDRF・国際整合**: 日本は IMDRF の創設メンバー。STED（Summary Technical Documentation）形式での申請、MDSAP への参加検討など、国際的な規制調和を推進している。外国製造業者は日本での選任製造販売業者（MAH: Marketing Authorization Holder）を置く必要がある。"
    ],
    "tables": [
      {
        "afterParagraph": 2,
        "caption": "日本の医療機器クラス分類と申請経路",
        "headers": ["クラス", "リスク", "申請経路", "審査機関", "期間目安"],
        "rows": [
          ["クラスI", "低", "届出", "都道府県", "即日"],
          ["クラスII", "中低", "認証 or 承認", "登録認証機関 or PMDA", "3〜6ヶ月"],
          ["クラスIII", "中高", "承認", "PMDA", "6〜12ヶ月"],
          ["クラスIV", "高", "承認", "PMDA", "12ヶ月+"]
        ]
      }
    ],
    "date": "2026-04-01",
    "lastReviewed": "2026-04-01",
    "author": "MedDevice Reg News 編集部",
    "readTime": "8分",
    "tags": ["日本", "PMDA", "MHLW", "薬機法", "QMS省令", "SaMD", "プログラム医療機器"],
    "primarySources": [
      { "title": "薬機法（e-Gov法令検索）", "site": "e-Gov", "url": "https://elaws.e-gov.go.jp/document?lawid=335AC0000000145" },
      { "title": "PMDA 医療機器審査", "site": "PMDA", "url": "https://www.pmda.go.jp/english/" }
    ]
  },

  {
    "id": "country-profile-china",
    "type": "feature",
    "category": "medtech",
    "heroScope": "none",
    "title": "【国別プロファイル】中国 — NMPA の医療機器規制体系",
    "excerpt": "中国の医療機器規制の全体像。NMPA（国家薬品監督管理局）による3クラス分類、登録・届出制度、CMDE による技術審査、中国代理人制度を解説。",
    "body": [
      "中国の医療機器規制は、NMPA（国家药品监督管理局 / National Medical Products Administration）が所管する。2021年6月施行の「医疗器械监督管理条例」（国務院令第739号）が現行の基本法規。NMPA は市場監督管理総局（SAMR）の下に位置する。",
      "**クラス分類**: 中国は3クラス制（I / II / III）。2017年に制定された「医疗器械分类目录」に基づき分類される。2023年の改正で AI/ML 関連の分類が追加された。",
      "**申請制度**: (1) **備案（Filing/届出）**（クラスI）— 設区的市级 の薬品監督管理部門に届出。(2) **登録（Registration）**（クラスII）— 省级 の薬品監督管理部門が審査。(3) **登録（Registration）**（クラスIII）— NMPA が直接審査。技術審査は CMDE（中国医疗器械技术审评中心 / Center for Medical Device Evaluation）が実施。",
      "**輸入医療機器**: 外国メーカーは中国国内に代理人（中国代理人）を置く必要がある。輸入機器はクラスII・III ともに NMPA に直接申請。臨床試験データは原則として中国国内での実施が求められるが、国際多施設試験のデータ受入れも拡大中。",
      "**GMP（生産品質管理規範）**: NMPA Order No. 53（2022年施行）に基づく。ISO 13485 と方向性は近いが、中国独自の要件も残る。海外工場への実地査察が行われることがある。",
      "**UDI**: 2019年より段階的に導入開始。クラスIII から適用が始まり、2025年までにクラスI を含む全クラスへの拡大が進行中。"
    ],
    "tables": [
      {
        "afterParagraph": 2,
        "caption": "中国 NMPA の申請制度",
        "headers": ["クラス", "手続き", "審査機関", "期間目安", "臨床データ"],
        "rows": [
          ["クラスI", "備案（届出）", "市级監督管理部門", "約5営業日", "不要"],
          ["クラスII", "登録", "省级監督管理部門", "60営業日", "場合による"],
          ["クラスIII", "登録", "NMPA / CMDE", "90営業日+", "原則必要"]
        ]
      }
    ],
    "date": "2026-04-01",
    "lastReviewed": "2026-04-01",
    "author": "MedDevice Reg News 編集部",
    "readTime": "7分",
    "tags": ["中国", "NMPA", "CMDE", "医疗器械", "UDI", "中国代理人"],
    "primarySources": [
      { "title": "NMPA 医療機器", "site": "NMPA", "url": "https://www.nmpa.gov.cn/" },
      { "title": "医疗器械监督管理条例（国務院令739号）", "site": "NMPA", "url": "https://www.nmpa.gov.cn/xxgk/fgwj/xzfg/20210326170104684.html" }
    ]
  },

  {
    "id": "country-profile-korea",
    "type": "feature",
    "category": "medtech",
    "heroScope": "none",
    "title": "【国別プロファイル】韓国 — MFDS の医療機器規制体系",
    "excerpt": "韓国の医療機器規制の全体像。MFDS（食品医薬品安全処）による4クラス分類、KGMP（ISO 13485 整合）、デジタル医療製品法、MDSAP 参加を解説。",
    "body": [
      "韓国の医療機器規制は、MFDS（식품의약품안전처 / Ministry of Food and Drug Safety）が所管する。2003年制定の「의료기기법」（Medical Devices Act）が根拠法で、2024年に最新改正が行われた。2019年には体外診断用医療機器に特化した別法（체외진단의료기기법）も制定されている。",
      "**クラス分類**: 韓国は4クラス制（I / II / III / IV）。品目別にクラスが指定されており、MFDS の「의료기기 품목 및 품목별 등급에 관한 규정」で確認できる。",
      "**申請制度**: (1) **届出（Notification）**（クラスI）— オンラインで届出。(2) **認証（Certification）**（クラスII）— MFDS 指定の認証機関が審査。(3) **許可（Approval）**（クラスIII・IV）— MFDS が直接審査。審査期間はクラスIII で約80日、クラスIV で約120日。",
      "**KGMP**: 韓国の GMP 基準は ISO 13485 と整合しており、KGMP と呼ばれる。2021年以降、MDSAP 監査報告書の受入れを開始し、国際的な監査の相互認証を推進。",
      "**デジタル医療製品法**: 2025年にはデジタル医療製品（디지털의료제품）に特化した新法が施行され、AI/ML ベースの SaMD に対する迅速審査制度が導入された。",
      "**輸入機器**: 外国メーカーは韓国国内の代理人（한국 대리인）を置く必要がある。韓国語でのラベリング・添付文書が必須。"
    ],
    "tables": [
      {
        "afterParagraph": 2,
        "caption": "韓国 MFDS の申請制度",
        "headers": ["クラス", "手続き", "審査機関", "期間目安", "GMP 査察"],
        "rows": [
          ["クラスI", "届出", "オンライン", "即日", "不要"],
          ["クラスII", "認証", "登録認証機関", "約60日", "必要"],
          ["クラスIII", "許可", "MFDS", "約80日", "必要"],
          ["クラスIV", "許可", "MFDS", "約120日", "必要"]
        ]
      }
    ],
    "date": "2026-04-01",
    "lastReviewed": "2026-04-01",
    "author": "MedDevice Reg News 編集部",
    "readTime": "6分",
    "tags": ["韓国", "MFDS", "의료기기법", "KGMP", "MDSAP", "デジタル医療製品"],
    "primarySources": [
      { "title": "MFDS", "site": "MFDS", "url": "https://www.mfds.go.kr/" },
      { "title": "Medical Devices Act (English)", "site": "law.go.kr", "url": "https://law.go.kr/LSW/lsInfoP.do?lsiSeq=202708&viewCls=engLsInfoR&urlMode=engLsInfoR" }
    ]
  },

  {
    "id": "country-profile-australia",
    "type": "feature",
    "category": "medtech",
    "heroScope": "none",
    "title": "【国別プロファイル】オーストラリア — TGA の医療機器規制体系",
    "excerpt": "オーストラリアの医療機器規制の全体像。TGA による EU 類似の分類体系、ARTG 登録、Essential Principles、MDSAP 参加を解説。",
    "body": [
      "オーストラリアの医療機器規制は、TGA（Therapeutic Goods Administration）が所管する。Therapeutic Goods Act 1989 が根拠法で、具体的な要件は Therapeutic Goods (Medical Devices) Regulations 2002 に規定されている。",
      "**クラス分類**: EU の分類体系を踏襲し、Class I、IIa、IIb、III、AIMD（能動型埋込み医療機器）、IVD の分類を採用。分類規則も EU MDR Annex VIII に類似している。",
      "**ARTG 登録**: すべての医療機器は ARTG（Australian Register of Therapeutic Goods）への登録が必要。Class I は「Include」（登録のみ）、Class IIa 以上は「Register」（評価+登録）。Australian Sponsor（オーストラリア国内のスポンサー）の設置が必須。",
      "**Essential Principles**: EU の General Safety and Performance Requirements（GSPR）に相当する「Essential Principles for Safety and Performance」への適合が求められる。TGA が Essential Principles Checklist を提供。",
      "**MDSAP**: TGA は MDSAP の創設メンバー。MDSAP 監査報告書を QMS 適合性の証拠として受入れており、個別の TGA 監査が不要になるケースが多い。",
      "**SaMD**: TGA は2021年に SaMD 規制フレームワークを公開し、2023年に更新。IMDRF の SaMD 分類枠組みに基づき、AI/ML を含むソフトウェア医療機器の規制ガイダンスを整備している。"
    ],
    "date": "2026-04-01",
    "lastReviewed": "2026-04-01",
    "author": "MedDevice Reg News 編集部",
    "readTime": "6分",
    "tags": ["オーストラリア", "TGA", "ARTG", "MDSAP", "Essential Principles", "SaMD"],
    "primarySources": [
      { "title": "TGA Medical Devices", "site": "TGA", "url": "https://www.tga.gov.au/" },
      { "title": "Therapeutic Goods Act 1989", "site": "legislation.gov.au", "url": "https://www.legislation.gov.au/C2004A03952/latest/text" },
      { "title": "ARGMD", "site": "TGA", "url": "https://www.tga.gov.au/resources/resource/guidance/australian-regulatory-guidelines-medical-devices-argmd" }
    ]
  }
];

const NEWS_YMD = /^\d{4}-\d{2}-\d{2}$/;

/**
 * ニュースの「世に出た日」（東京カレンダーで比較）。newsDate があれば優先、なければ date。
 */
export function getArticleNewsYmd(a) {
  if (a?.newsDate && NEWS_YMD.test(String(a.newsDate))) return String(a.newsDate);
  if (a?.date && NEWS_YMD.test(String(a.date))) return String(a.date);
  return "";
}

/**
 * サイト表示・フィード生成の「本日」YYYY-MM-DD（Asia/Tokyo）。
 */
export function getSiteTodayYmd() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Tokyo",
  }).format(new Date());
}

export const SITE_NAME = "MedDevice Reg News";
export const SITE_DESCRIPTION = "医療機器の法規制・ガイダンス・規格の最新ニュースを日本語で";

/** 記事の category キー → 一覧・詳細のバッジ用 */
export const CATEGORIES = {
  special: { label: "特集", color: "#d97706" },
  medtech: { label: "医療機器法", color: "#b91c1c" },
  guidance: { label: "ガイダンス", color: "#2563eb" },
  standard: { label: "規格", color: "#7c3aed" },
  ai: { label: "AI・SaMD", color: "#059669" },
  cybersecurity: { label: "サイバーセキュリティ", color: "#0891b2" },
  environment: { label: "環境・廃棄物", color: "#16a34a" },
  privacy: { label: "データプライバシー", color: "#7c3aed" },
  chemical: { label: "化学物質・材料", color: "#ea580c" },
  packaging: { label: "包装", color: "#0ea5e9" },
};

/** レビュー記事の星表示（プレーンテキスト） */
export function renderStars(rating) {
  if (rating == null || Number.isNaN(Number(rating))) return "";
  const n = Math.round(Number(rating));
  const filled = Math.min(5, Math.max(0, n));
  return `${"★".repeat(filled)}${"☆".repeat(5 - filled)}`;
}
