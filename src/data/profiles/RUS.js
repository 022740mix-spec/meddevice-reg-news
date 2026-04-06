// ロシア (Russian Federation)
export default {
  "code": "RUS",
  "country": "ロシア",
  "countryEn": "Russian Federation",
  "region": "Europe",
  "flag": "🇷🇺",
  "legalSystemOverview": {
    "type": "連邦制・大統領制（Presidential federal republic）",
    "description": "ロシアの医療機器規制は連邦保健省（Ministry of Health）とRoszdravnadzor（連邦保健監督局）が中心となり運営される。2016年以降、ユーラシア経済連合（EAEU）の統一規制枠組みへの移行が進行中であり、2027年末までに国家登録からEAEU登録への完全移行が予定されている。GOST ISO 13485に基づくQMS適合が高リスク機器で義務化されており、Honest Sign（Data Matrixコード）による単品トレーサビリティが特定カテゴリの医療機器に義務化されている。",
    "keyCharacteristics": [
      "Roszdravnadzor が市販前登録・市販後監視を統括",
      "EAEU統一登録制度への段階的移行（国家登録は2027年末まで）",
      "4クラスリスク分類（Class I / IIa / IIb / III）",
      "GOST ISO 13485 に基づくQMS要求",
      "Honest Sign（Data Matrixコード）による特定カテゴリの単品トレーサビリティ",
      "ロシア国内臨床試験が原則必要（Class IIa以上）"
    ]
  },
  "authorities": [
    {
      "name": "Roszdravnadzor",
      "fullName": "Federal Service for Surveillance in Healthcare",
      "localName": "Росздравнадзор",
      "role": "医療機器の登録審査、市販後監視、安全性情報収集、リコール管理、GMP査察を統括",
      "url": "https://roszdravnadzor.gov.ru/",
      "isPrimary": true
    },
    {
      "name": "FGBU",
      "fullName": "Federal State Budgetary Institution (VNIIMT / Roszdravnadzor Expert Organizations)",
      "localName": "ФГБУ",
      "role": "技術審査・臨床試験評価等のエキスパート機関。Roszdravnadzorの委託により技術文書の専門評価を実施",
      "url": "https://roszdravnadzor.gov.ru/",
      "isPrimary": false
    },
    {
      "name": "Ministry of Health",
      "fullName": "Ministry of Health of the Russian Federation",
      "localName": "Министерство здравоохранения РФ",
      "role": "医療機器規制に関する法令・省令の策定。臨床試験許可の発行",
      "url": "https://minzdrav.gov.ru/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "該当なし（Roszdravnadzor直接審査 + EAEU検査機関）",
    "description": "欧州型のNotified Body制度は存在しない。Roszdravnadzorが直接登録審査を実施し、技術試験は認定試験機関が行う。EAEU制度ではConformity Assessment Body（CAB）が技術文書審査を実施するが、最終登録判断はRoszdravnadzorが行う。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "疾病の予防、診断、治療、リハビリテーションの目的で使用される器具・装置・機器・材料等であって、薬理学的・免疫学的・代謝的手段によらず主たる目的作用を発揮するもの（連邦法No.323-FZ第38条）",
    "scope": "体外診断用医療機器（IVD）、ソフトウェア医療機器（SaMD）、AI搭載医療ソフトウェアを含む。コンビネーション製品は主要な作用機序に基づき分類。",
    "notes": "2025年9月1日から、従来型機器・ソフトウェア・AI搭載ソフトウェアに区分した技術文書要件が導入。サイバーセキュリティ要件がソフトウェア医療機器に義務化。"
  },
  "primaryLaw": {
    "title": "連邦法 No.323-FZ「ロシア連邦における国民の健康保護の基本に関する法律」",
    "originalTitle": "Федеральный закон № 323-ФЗ",
    "enacted": "2011-11-21",
    "lastAmended": "2025",
    "url": "http://www.consultant.ru/document/cons_doc_LAW_121895/",
    "description": "ロシアにおける医療機器規制の根幹法。医療機器の定義、登録義務、市販後監視の基本原則を規定。政府決定（Постановление）および保健省令（Приказ）により詳細を実施。"
  },
  "implementingRegulations": [
    {
      "title": "政府決定 No.1684「医療機器の国家登録手続きに関する規則」",
      "date": "2024-11-30",
      "url": "http://government.ru/docs/all/81568/",
      "description": "2025年3月1日施行。旧政府決定No.1416（2012年）を置換。EAEU基準に整合した書類要件の改訂、製造所査察手続きの更新、制裁影響機器の迅速登録規定を導入。",
      "category": "登録手続き"
    },
    {
      "title": "保健省令 No.181n（2025年4月11日）",
      "date": "2025-04-11",
      "url": "https://minzdrav.gov.ru/",
      "description": "2025年9月1日施行。技術文書要件を大幅改訂。従来型機器・ソフトウェア・AI搭載ソフトウェアへの区分別要件、カラーモックアップ義務、リスクマネジメント強化、サイバーセキュリティ義務を導入。",
      "category": "技術文書"
    },
    {
      "title": "EAEU理事会決定 No.46「医療機器の登録及び専門家審査に関する規則」",
      "date": "2016-02-12",
      "url": "https://docs.eaeunion.org/",
      "description": "EAEU統一医療機器登録制度の基本規則。EAEU登録証は加盟5カ国（ロシア、ベラルーシ、カザフスタン、アルメニア、キルギス）で有効。",
      "category": "EAEU規制"
    },
    {
      "title": "EAEU理事会決定 No.173「リスクベース分類規則」",
      "date": "2018",
      "url": "https://docs.eaeunion.org/",
      "description": "EAEU統一の医療機器リスク分類規則。Class I / IIa / IIb / III の4クラス分類をIMDRFルールに整合して規定。",
      "category": "分類"
    },
    {
      "title": "GOST ISO 13485-2017「医療機器 — 品質マネジメントシステム」",
      "date": "2017",
      "url": "https://www.gost.ru/",
      "description": "ISO 13485:2016のロシア国家標準（GOST）採用版。Class IIa（滅菌）/ IIb / III機器の登録前QMS査察で適合が必要。",
      "category": "QMS"
    }
  ],
  "relatedLaws": [
    {
      "title": "連邦法 No.152-FZ「個人データに関する法律」",
      "category": "データ保護",
      "enacted": "2006-07-27",
      "url": "http://www.consultant.ru/document/cons_doc_LAW_61801/",
      "relevance": "医療機器から取得される患者データの処理に適用。データのロシア国内保存義務（データローカリゼーション）がある。"
    },
    {
      "title": "連邦法 No.488-FZ「工業政策に関する法律」",
      "category": "国産化政策",
      "enacted": "2014-12-31",
      "url": "http://www.consultant.ru/document/cons_doc_LAW_173119/",
      "relevance": "医療機器の国産化推進政策。政府調達における国産品優遇措置（第三国制限を含む）の法的根拠。"
    }
  ],
  "classification": {
    "system": "リスクベース4クラス分類（EAEU整合）",
    "basis": "EAEU理事会決定No.173に基づくリスクベース分類。IMDRFルールに整合。",
    "classes": [
      {
        "name": "Class I",
        "nameJa": "クラス1（低リスク）",
        "riskLevel": "低",
        "description": "人体への潜在的リスクが最小限の医療機器。",
        "examples": [
          "手術用メス",
          "聴診器",
          "ガーゼ",
          "松葉杖"
        ],
        "approvalPath": "登録（簡易審査）— Roszdravnadzor"
      },
      {
        "name": "Class IIa",
        "nameJa": "クラス2a（中低リスク）",
        "riskLevel": "中低",
        "description": "中程度のリスクを有する医療機器。",
        "examples": [
          "超音波診断装置",
          "歯科用材料",
          "補聴器",
          "シリンジポンプ"
        ],
        "approvalPath": "登録（技術審査 + 滅菌品はQMS査察）— Roszdravnadzor"
      },
      {
        "name": "Class IIb",
        "nameJa": "クラス2b（中高リスク）",
        "riskLevel": "中高",
        "description": "中〜高程度のリスクを有する医療機器。臨床試験が原則必要。QMS査察必須。",
        "examples": [
          "人工呼吸器",
          "透析器",
          "骨接合プレート",
          "放射線治療装置"
        ],
        "approvalPath": "登録（技術審査 + 臨床試験 + QMS査察）— Roszdravnadzor"
      },
      {
        "name": "Class III",
        "nameJa": "クラス3（高リスク）",
        "riskLevel": "高",
        "description": "人体に重大なリスクを与える高リスク医療機器。厳格な臨床試験とQMS査察が必須。",
        "examples": [
          "心臓ペースメーカー",
          "人工心臓弁",
          "冠動脈ステント",
          "人工関節"
        ],
        "approvalPath": "登録（技術審査 + 臨床試験 + QMS査察 + 市販後モニタリング計画）— Roszdravnadzor"
      }
    ],
    "rules": [
      "EAEU理事会決定No.173の分類ルールに基づく判定",
      "IVDは別途分類体系あり",
      "SaMDは機能・リスクに応じてClass I〜IIIに分類",
      "分類は製造業者が判断し、Roszdravnadzorが登録時に確認"
    ],
    "totalProductCodes": null
  },
  "conformityAssessment": {
    "overview": "全クラスの医療機器はRoszdravnadzorへの国家登録が必要。Class IIa（滅菌）/ IIb / IIIは登録前のQMS査察（GOST ISO 13485適合）が2024年1月1日から義務化。Class IIa以上は原則としてロシア国内臨床試験が必要（一部免除あり）。外国メーカーはロシア国内のAuthorized Representative（権限受任者）の設置が必須。EAEU登録制度への段階的移行中。",
    "routes": [
      {
        "name": "National Registration (国家登録)",
        "nameJa": "ロシア国家登録（RZN証明書）",
        "applicableClasses": [
          "Class I",
          "Class IIa",
          "Class IIb",
          "Class III"
        ],
        "description": "Roszdravnadzorに申請し、技術審査、臨床試験評価（該当する場合）、QMS査察（該当する場合）を経て登録証（RZN）を取得。登録証の有効期限なし。国家登録の新規申請は2027年末まで可能。",
        "subtypes": [
          "新規登録",
          "変更登録",
          "更新"
        ],
        "avgReviewTime": "6〜12ヶ月（Class III）/ 4〜6ヶ月（Class I/IIa）",
        "fee": "申請区分により異なる（国家手数料規定に基づく）",
        "url": "https://roszdravnadzor.gov.ru/"
      },
      {
        "name": "EAEU Registration (EAEU統一登録)",
        "nameJa": "EAEU統一登録証",
        "applicableClasses": [
          "Class I",
          "Class IIa",
          "Class IIb",
          "Class III"
        ],
        "description": "EAEU加盟国共通の登録制度。EAEU登録証は加盟5カ国で有効。2028年1月1日以降は原則としてEAEU登録のみが有効（国家登録の新規申請は2027年末まで、既存証書の変更は2028年末まで可能）。",
        "subtypes": [
          "新規登録",
          "変更登録"
        ],
        "avgReviewTime": "12〜18ヶ月",
        "fee": "加盟国ごとの手数料規定による",
        "url": "https://docs.eaeunion.org/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "Gosuslugi / Roszdravnadzor電子申請ポータル",
    "url": "https://roszdravnadzor.gov.ru/",
    "description": "2025年9月1日以降、全申請はGosuslugiポータルまたはRoszdravnadzorウェブサイトの電子アカウントを通じた電子提出が必須。書類は電子文書または署名付きスキャンコピーで提出。",
    "mandatory": true
  },
  "udi": {
    "required": true,
    "system": "Honest Sign（Честный знак）/ Data Matrixコード",
    "description": "Honest Sign（Честный знак）システムによるData Matrixコードでの単品トレーサビリティが特定カテゴリの医療機器（リハビリ用品、補聴器、冠動脈ステント、医療用手袋、整形外科用品等）に義務化。対象カテゴリは段階的に拡大中。",
    "url": "https://chestnyznak.ru/",
    "timeline": "特定カテゴリから段階的に義務化。対象品目は政府決定により順次追加。"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "有害事象報告制度（Roszdravnadzor）",
      "mandatory": true,
      "url": "https://roszdravnadzor.gov.ru/",
      "description": "製造業者・流通業者・医療機関は、医療機器に関連する有害事象を発見から15日以内にRoszdravnadzorに報告する義務がある。Class III / Class IIb植込み型機器は年次安全性報告が必要（2021年1月以降の登録分）。"
    },
    "recalls": {
      "authority": "Roszdravnadzor",
      "description": "Roszdravnadzorの命令または製造業者の自主判断によるリコール。安全性情報に基づく登録の一時停止・取消権限あり。2025年11月からリスクベース型監督モデルに移行。",
      "url": "https://roszdravnadzor.gov.ru/"
    },
    "surveillance": "Roszdravnadzorによる定期的GMP査察、市販後臨床モニタリング（Class III / Class IIb植込み型）、安全性情報の収集・分析。2025年11月からリスクベース型監督に移行。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "Roszdravnadzor",
    "name": "自由販売証明書（Certificate of Free Sale）",
    "description": "ロシアで登録済みの医療機器について、Roszdravnadzorが自由販売証明書を発行。ロシアへの登録申請時に外国CFS提出は任意。",
    "processingTime": "2〜4週間",
    "url": "https://roszdravnadzor.gov.ru/"
  },
  "reimbursement": {
    "system": "強制医療保険制度（OMS: Обязательное медицинское страхование）",
    "authority": "連邦強制医療保険基金（FFOMS）/ 保健省",
    "description": "医療機器の償還は主にOMS（強制医療保険）のDRG類似包括払い（KSG）および高度医療（VMP）予算を通じて行われる。医療機器の個別償還制度は限定的で、主に高度医療技術（ВМП）枠で実施。",
    "codingSystems": [
      "KSG（臨床統計群）コード",
      "VMP（高度医療技術）コード"
    ],
    "url": "https://www.ffoms.gov.ru/"
  },
  "marketingRules": {
    "authority": "Roszdravnadzor / FAS（連邦独占禁止局）",
    "description": "医療機器の広告はロシア連邦広告法（No.38-FZ）により規制。虚偽・誤解を招く広告は禁止。FAS（連邦独占禁止局）が広告規制の主要な執行機関。",
    "keyRules": [
      "虚偽・誇大広告の禁止",
      "未登録医療機器の広告禁止",
      "登録番号の広告への記載義務",
      "消費者向け広告に関する制限",
      "FASによる行政処分権限"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "ロシアはMDSAPに参加していない。ロシア独自のGOST ISO 13485査察が必要。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "GOST ISO 13485-2017としてロシア国家標準化。Class IIa（滅菌）/ IIb / III機器の登録前QMS査察で適合が必須。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "GOST R ISO 14971としてロシア国家標準化。リスクマネジメント文書の技術審査時の提出が必要。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "ソフトウェア医療機器の登録でGOST R IEC 62304適合が要求される。2025年9月からSaMD・AI-SaMDで強化。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "GOST R IEC 60601シリーズとしてロシア国家標準化。医用電気機器の安全性試験で適合が必要。"
    },
    "others": [
      {
        "name": "GOST R ISO 15223-1-2023",
        "notes": "医療機器ラベリング記号の標準。2025年からカラーモックアップ義務化。"
      },
      {
        "name": "GOST R ISO 10993シリーズ",
        "notes": "生物学的安全性評価。EAEU決定No.38でも要求。"
      }
    ]
  },
  "recentDevelopments": [
    {
      "date": "2025-09",
      "title": "保健省令No.181n施行（技術文書要件の大幅改訂）",
      "description": "機器種別ごとの区分別要件、カラーモックアップ義務、サイバーセキュリティ要件を導入。"
    },
    {
      "date": "2025-03",
      "title": "政府決定No.1684施行（登録手続き刷新）",
      "description": "旧政府決定No.1416を置換。EAEU整合の書類要件、製造所査察手続き更新、迅速登録規定を導入。"
    },
    {
      "date": "2025-11",
      "title": "リスクベース型監督モデル導入",
      "description": "Roszdravnadzorが予防的訪問制度と遠隔監督を導入。"
    },
    {
      "date": "2024-01",
      "title": "QMS査察の義務化拡大",
      "description": "Class IIa（滅菌）/ IIb / III機器の登録前QMS査察が義務化。"
    }
  ],
  "lastUpdated": "2026-04-06",
  "verified": "2026-04-06"
};
