// カンボジア (Kingdom of Cambodia)
export default {
  "code": "KHM",
  "country": "カンボジア",
  "countryEn": "Kingdom of Cambodia",
  "region": "ASPAC",
  "flag": "🇰🇭",
  "legalSystemOverview": {
    "type": "立憲君主制（Constitutional Monarchy）",
    "description": "カンボジアの医療機器規制は保健省（MOH）傘下の薬事食品局（DDF: Department of Drugs and Food）が所管する。Prakas No. 1258（2012年）により医療機器の登録手続きが規定されている。ASEAN Medical Device Directive（AMDD）との整合を目指しており、ASEAN CSDT（Common Submission Dossier Template）の採用を段階的に進めている。2019年にはオンライン登録システム CamPORS を導入。",
    "keyCharacteristics": [
      "DDF/MOH が医療機器規制を統括",
      "Prakas No. 1258（2012年）に基づく登録制度",
      "ASEAN AMDD との整合を推進中",
      "リスクベース4クラス分類（A / B / C / D）を採用",
      "輸入品は DDF への登録・輸入許可が必要",
      "参照国認可（CE、FDA、ASEAN認可等）を審査で考慮"
    ]
  },
  "authorities": [
    {
      "name": "DDF",
      "fullName": "Department of Drugs and Food, Ministry of Health",
      "localName": "នាយកដ្ឋានឱសថ និងចំណីអាហារ",
      "role": "医療機器の登録・輸入許可・市販後監視を統括",
      "url": "https://ddf.moh.gov.kh/",
      "isPrimary": true
    },
    {
      "name": "MOH Cambodia",
      "fullName": "Ministry of Health — Cambodia",
      "localName": "ក្រសួងសុខាភិបាល",
      "role": "医療政策全般・法令の策定・監督",
      "url": "https://www.moh.gov.kh/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "該当なし（DDF 直接審査）",
    "description": "欧州型の Notified Body 制度は存在しない。DDF が直接登録審査を行う。参照国認可が審査で重要視される。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "医療機器に関するSub-decreeに基づく定義（ASEAN AMDD / IMDRF定義に準拠）。疾病の診断・治療・予防・監視等を目的とする器具・装置・機器・ソフトウェア等。",
    "scope": "IVDを含む。SaMDに関する詳細規定は要確認。",
    "notes": "ASEAN AMDDの定義に整合する方向で制度整備中。"
  },
  "primaryLaw": {
    "title": "Law on the Management of Pharmaceuticals",
    "originalTitle": "ច្បាប់ស្តីពីការគ្រប់គ្រងឱសថ",
    "enacted": "1996",
    "lastAmended": "要確認",
    "url": "https://ddf.moh.gov.kh/about-us",
    "description": "医薬品・医療機器規制の基本法（医薬品管理法）。DDF の権限および医療製品の規制枠組みの法的根拠を規定。医療機器登録の具体的手続きは Prakas No. 1258（2012年）で詳細化。"
  },
  "implementingRegulations": [
    {
      "title": "Prakas No. 1258 on the Procedures for the Registration of Medical Devices",
      "date": "2012-11-08",
      "url": "https://cambodiantr.gov.kh/index.php?r=searchProcedure/view1&id=24",
      "description": "医療機器登録の手続き、必要書類、4クラス分類基準等の詳細を規定する保健省令（Prakas）。",
      "category": "登録手続き"
    },
    {
      "title": "ASEAN CSDT（Common Submission Dossier Template）ガイダンス",
      "date": "要確認",
      "url": "https://asean.org/our-communities/economic-community/asean-medical-device-directive/",
      "description": "ASEAN共通の申請書類テンプレート。カンボジアでの採用を段階的に推進中。USB経由でCSDT技術文書を提出。",
      "category": "ASEAN整合"
    }
  ],
  "relatedLaws": [
    {
      "title": "ASEAN Medical Device Directive (AMDD)",
      "category": "ASEAN整合",
      "enacted": "要確認",
      "url": "https://asean.org/our-communities/economic-community/asean-medical-device-directive/",
      "relevance": "ASEAN域内の医療機器規制整合の枠組み。カンボジアの分類・登録制度の基盤。"
    }
  ],
  "classification": {
    "system": "リスクベース4クラス分類（ASEAN AMDD / IMDRF整合）",
    "basis": "ASEAN AMDDの分類ルールに基づくリスクベース分類。",
    "classes": [
      {
        "name": "Class A",
        "nameJa": "クラスA（低リスク）",
        "riskLevel": "低",
        "description": "低リスク医療機器。",
        "examples": [
          "ガーゼ",
          "聴診器",
          "手術用手袋"
        ],
        "approvalPath": "登録（簡易審査）— DDF"
      },
      {
        "name": "Class B",
        "nameJa": "クラスB（中低リスク）",
        "riskLevel": "中低",
        "description": "中低リスク医療機器。",
        "examples": [
          "超音波診断装置",
          "注射針",
          "歯科用材料"
        ],
        "approvalPath": "登録 — DDF"
      },
      {
        "name": "Class C",
        "nameJa": "クラスC（中高リスク）",
        "riskLevel": "中高",
        "description": "中高リスク医療機器。",
        "examples": [
          "人工呼吸器",
          "透析器",
          "骨接合プレート"
        ],
        "approvalPath": "登録（技術審査）— DDF"
      },
      {
        "name": "Class D",
        "nameJa": "クラスD（高リスク）",
        "riskLevel": "高",
        "description": "高リスク医療機器。",
        "examples": [
          "心臓ペースメーカー",
          "人工心臓弁",
          "冠動脈ステント"
        ],
        "approvalPath": "登録（詳細審査）— DDF"
      }
    ],
    "rules": [
      "ASEAN AMDDの分類ルールに準拠",
      "IVDの分類基準は要確認",
      "参照国での分類を参考"
    ],
    "totalProductCodes": null
  },
  "conformityAssessment": {
    "overview": "全医療機器はDDFへの登録が必要。参照国認可（CE、FDA、ASEAN認可等）の保有が審査を円滑化する。外国メーカーはローカル代理人（輸入業者）の指定が必要。",
    "routes": [
      {
        "name": "DDF Device Registration (Prakas No. 1258)",
        "nameJa": "DDF 医療機器登録（Prakas No. 1258）",
        "applicableClasses": [
          "Class A",
          "Class B",
          "Class C",
          "Class D"
        ],
        "description": "DDFに申請書類一式を提出。管理文書（申請書・LoA・DoC・ISO/GMP証明書）はハードコピー、技術文書（CSDT）はUSB経由で提出。審査委員会は3-4ヶ月ごとに開催。登録証は3年間有効。",
        "subtypes": [
          "新規登録",
          "変更登録",
          "更新（3年ごと）"
        ],
        "avgReviewTime": "12〜18ヶ月",
        "avgReviewTimeSource": "https://omcmedical.com/cambodia-medical-device-registration/",
        "fee": "KHR 400,000（約USD 100）",
        "feeSource": "https://omcmedical.com/cambodia-medical-device-registration/",
        "url": "https://ddf.moh.gov.kh/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "CamPORS（Cambodia Pharmaceutical Online Registration System）",
    "url": "https://ddf.moh.gov.kh/about-us",
    "description": "2019年8月に保健省が WHO 支援の下で CamPORS を導入。医療機器を含む医療製品の登録をオンラインで受付。書類・申請書をデジタル形式で提出・評価するペーパーレス化を推進。",
    "mandatory": false
  },
  "udi": {
    "required": false,
    "system": "未導入",
    "description": "独自のUDI制度は2026年時点で未導入。",
    "url": null,
    "timeline": "未定"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "有害事象報告制度（DDF/MOH）",
      "mandatory": true,
      "url": "https://www.moh.gov.kh/",
      "description": "DDFへの有害事象報告が義務付けられている。報告様式・期限の詳細は要確認。"
    },
    "recalls": {
      "authority": "DDF / MOH",
      "description": "MOHの命令または自主リコール。",
      "url": null
    },
    "surveillance": "DDF/MOHによる市販後監視。制度は発展途上。"
  },
  "certificateOfFreeSale": {
    "available": false,
    "issuingAuthority": null,
    "name": null,
    "description": "カンボジアからのCFS発行に関する公式制度は要確認。輸入登録時に製造国のCFS提出が求められる。",
    "processingTime": null,
    "url": null
  },
  "reimbursement": {
    "system": "政府主導型医療制度（公的医療 + 民間セクター + NGO支援）",
    "authority": "保健省（MOH）",
    "description": "Health Equity Fund等により貧困層への医療アクセスを確保。医療機器の個別償還制度は未整備。公共調達・ドナー支援が中心。",
    "codingSystems": [],
    "url": null
  },
  "marketingRules": {
    "authority": "DDF / MOH",
    "description": "医療機器広告に関する詳細法規は要確認。虚偽広告は一般法により禁止。",
    "keyRules": [
      "虚偽・誇大広告の禁止",
      "未登録機器の広告禁止"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "カンボジアはMDSAPに参加していない。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "ISO 13485認証は登録時にQMS証明として参照される。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "リスクマネジメントの国際規格として参照。"
    },
    "iec62304": {
      "accepted": false,
      "notes": "独自の要求は要確認。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "医用電気機器の安全規格として参照。"
    },
    "others": []
  },
  "recentDevelopments": [
    {
      "date": "2012-11",
      "title": "Prakas No. 1258 制定",
      "description": "医療機器登録手続きを規定する保健省令（Prakas No. 1258）を制定。4クラスリスクベース分類を導入。"
    },
    {
      "date": "2019-08",
      "title": "CamPORS（オンライン登録システム）導入",
      "description": "保健省がWHO支援の下でCamPORS（Cambodia Pharmaceutical Online Registration System）を導入。医療機器を含む医療製品のオンライン登録を開始。"
    }
  ],
  "lastUpdated": "2026-04-06",
  "verified": "2026-04-06"
};
