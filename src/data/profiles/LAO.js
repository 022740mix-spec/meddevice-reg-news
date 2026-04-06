// ラオス (Lao People's Democratic Republic)
export default {
  "code": "LAO",
  "country": "ラオス",
  "countryEn": "Lao People's Democratic Republic",
  "region": "ASPAC",
  "flag": "🇱🇦",
  "legalSystemOverview": {
    "type": "人民民主共和制（People's Democratic Republic）",
    "description": "ラオスの医療機器規制は保健省（MOH）傘下の食品薬品局（FDD: Food and Drug Department）が所管する。Law on Drug and Medical Products No. 07/NA（2011年改正）を法的根拠とし、2023年10月に Decision No. 1470/MOH により医療機器登録・届出制度を正式導入。Class C/D は2024年1月、Class A/B は2025年1月から登録/届出が必須化された。ASEAN AMDD整合を推進中。",
    "keyCharacteristics": [
      "FDD/MOH が医療機器規制を統括",
      "Law on Drug and Medical Products No. 07/NA（2011年）が法的根拠",
      "Decision No. 1470/MOH（2023年）で医療機器登録制度を正式導入",
      "リスクベース4クラス分類（A / B / C / D）を採用",
      "Class C/D: 2024年1月〜登録必須、Class A: 2025年1月〜届出必須、Class B: 2025年1月〜登録必須",
      "ASEAN CSDT に基づく申請書類を要求"
    ]
  },
  "authorities": [
    {
      "name": "FDD",
      "fullName": "Food and Drug Department, Ministry of Health",
      "localName": "ກົมອາຫານ ແລະ ຢາ",
      "role": "医療機器の登録・輸入許可・市販後監視を統括",
      "url": "https://www.fdd.gov.la/",
      "isPrimary": true
    },
    {
      "name": "MOH Lao",
      "fullName": "Ministry of Health — Lao PDR",
      "localName": "ກະຊວງສາທາລະນະສຸກ",
      "role": "医療政策全般・法令の策定・監督",
      "url": "https://www.moh.gov.la/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "該当なし（FDD 直接審査）",
    "description": "Notified Body 制度は存在しない。FDD が直接登録審査を行う。参照国認可が審査で重要視される。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "Drug and Medical Products Law に基づく定義。ASEAN AMDD / IMDRF定義との整合を推進中。詳細な法的定義文書の公開は限定的。",
    "scope": "IVDを含む。SaMDに関する詳細規定は要確認。",
    "notes": "ASEAN AMDDの定義に整合する方向で制度整備中。"
  },
  "primaryLaw": {
    "title": "Law on Drug and Medical Products No. 07/NA",
    "originalTitle": "ກົດໝາຍວ່າດ້ວຍຢາ ແລະ ຜະລິດຕະພັນການແພດ",
    "enacted": "2000-04-08",
    "lastAmended": "2011-12-21",
    "url": "https://www.laotradeportal.gov.la/en-gb/site/display/41",
    "description": "医薬品・医療機器を含む医療製品の規制に関する基本法。初版は Law No. 01/NA（2000年4月8日制定）、2011年12月21日に No. 07/NA として改正。FDDの権限・登録制度の法的根拠を規定。"
  },
  "implementingRegulations": [
    {
      "title": "Decision No. 1470/MOH on Registration and Notification of Medical Devices",
      "date": "2023-10",
      "url": "https://www.tilleke.com/insights/laos-implements-medical-device-registration-and-notification-requirements/",
      "description": "医療機器の登録・届出制度を正式に規定。Class C/D は2024年1月から登録必須、Class A は2025年1月から届出必須、Class B は2025年1月から登録必須。ASEAN CSDT に基づく申請書類を要求。",
      "category": "登録手続き"
    },
    {
      "title": "Notification No. 9606（医療機器登録に関する通知）",
      "date": "2023-10-25",
      "url": "http://fdd.gov.la/fullnews_en.php?newsID=102",
      "description": "Decision No. 1470 の実施に関する詳細通知。輸入業者への予備的機器リストの提出期限等を規定。",
      "category": "通知"
    },
    {
      "title": "Regulation Governing Drug Registration 1441/MOH",
      "date": "2003-08-13",
      "url": "https://www.laotradeportal.gov.la/en-gb/site/display/41",
      "description": "医薬品登録に関する規則。医療機器にも一部適用される登録手続きの基盤。",
      "category": "登録手続き"
    }
  ],
  "relatedLaws": [
    {
      "title": "Decision on Business Establishment on Medicines and Medical Equipment No. 1820/MOH",
      "category": "事業者登録",
      "enacted": "2017-08-25",
      "url": "https://www.laotradeportal.gov.la/en-gb/site/display/1283",
      "relevance": "医薬品・医療機器の事業所設立に関する決定。輸入業者・販売業者の許認可要件を規定。"
    },
    {
      "title": "Hygiene, Disease Prevention and Health Promotion Law",
      "category": "公衆衛生",
      "enacted": "要確認",
      "url": null,
      "relevance": "公衆衛生全般に関する法律。医療機器の安全性にも関連。"
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
        "approvalPath": "登録（簡易審査）— FDD"
      },
      {
        "name": "Class B",
        "nameJa": "クラスB（中低リスク）",
        "riskLevel": "中低",
        "description": "中低リスク医療機器。",
        "examples": [
          "超音波診断装置",
          "注射針"
        ],
        "approvalPath": "登録 — FDD"
      },
      {
        "name": "Class C",
        "nameJa": "クラスC（中高リスク）",
        "riskLevel": "中高",
        "description": "中高リスク医療機器。",
        "examples": [
          "人工呼吸器",
          "透析器"
        ],
        "approvalPath": "登録（技術審査）— FDD"
      },
      {
        "name": "Class D",
        "nameJa": "クラスD（高リスク）",
        "riskLevel": "高",
        "description": "高リスク医療機器。",
        "examples": [
          "心臓ペースメーカー",
          "人工心臓弁"
        ],
        "approvalPath": "登録（詳細審査）— FDD"
      }
    ],
    "rules": [
      "ASEAN AMDD分類ルールに準拠",
      "IVDの分類基準は要確認",
      "参照国での分類を参考"
    ],
    "totalProductCodes": null
  },
  "conformityAssessment": {
    "overview": "医療機器はFDDへの登録が必要。参照国認可（CE、FDA、ASEAN認可等）の保有が審査を円滑化する。外国メーカーはローカル代理人（輸入業者）の指定が必要。",
    "routes": [
      {
        "name": "FDD Device Registration (Class B/C/D)",
        "nameJa": "FDD 医療機器登録（Class B/C/D）",
        "applicableClasses": [
          "Class B",
          "Class C",
          "Class D"
        ],
        "description": "Decision No. 1470/MOH に基づきFDDに登録申請。ASEAN CSDT に準拠した技術文書、参照国認可証明、品質管理証明書等が必要。Class C/D は2024年1月から、Class B は2025年1月から登録必須。",
        "subtypes": [
          "新規登録",
          "変更登録",
          "更新"
        ],
        "avgReviewTime": "要確認（公式情報で裏付け未取得）",
        "avgReviewTimeSource": null,
        "fee": "要確認（公式情報で裏付け未取得）",
        "feeSource": null,
        "url": "https://www.tilleke.com/insights/laos-implements-medical-device-registration-and-notification-requirements/"
      },
      {
        "name": "FDD Device Notification (Class A)",
        "nameJa": "FDD 医療機器届出（Class A）",
        "applicableClasses": [
          "Class A"
        ],
        "description": "低リスク機器（Class A）は2025年1月から届出（Notification）が必須。登録に比べ簡易な手続き。",
        "subtypes": [
          "新規届出"
        ],
        "avgReviewTime": "要確認（公式情報で裏付け未取得）",
        "avgReviewTimeSource": null,
        "fee": "要確認（公式情報で裏付け未取得）",
        "feeSource": null,
        "url": "https://www.pacificbridgemedical.com/news-brief/laos-further-clarifies-medical-device-registration/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "要確認",
    "url": null,
    "description": "電子申請システムの導入状況は要確認。書面提出が主。",
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
      "system": "有害事象報告制度（FDD/MOH）",
      "mandatory": true,
      "url": "http://fdd.gov.la/content_en.php?contID=26",
      "description": "FDDへの有害事象報告が義務付けられている。報告様式・期限の詳細は要確認。"
    },
    "recalls": {
      "authority": "FDD / MOH",
      "description": "MOHの命令または自主リコール。",
      "url": null
    },
    "surveillance": "FDD/MOHによる市販後監視。制度は発展途上。WHO/ASEAN支援を活用して体制構築中。"
  },
  "certificateOfFreeSale": {
    "available": false,
    "issuingAuthority": null,
    "name": null,
    "description": "ラオスからのCFS発行に関する公式制度は要確認。輸入登録時に製造国のCFS提出が求められる場合がある。",
    "processingTime": null,
    "url": null
  },
  "reimbursement": {
    "system": "政府主導型医療制度（公的医療 + 民間セクター + 国際支援）",
    "authority": "保健省（MOH）",
    "description": "National Health Insurance制度を段階的に拡大中。医療機器の個別償還制度は未整備。公共調達・国際機関支援が中心。",
    "codingSystems": [],
    "url": null
  },
  "marketingRules": {
    "authority": "FDD / MOH",
    "description": "医療機器広告に関する詳細法規は要確認。虚偽広告は一般法により禁止。",
    "keyRules": [
      "虚偽・誇大広告の禁止",
      "未登録機器の広告禁止"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "ラオスはMDSAPに参加していない。"
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
      "date": "2023-10",
      "title": "Decision No. 1470/MOH 発出 — 医療機器登録・届出制度の正式導入",
      "description": "FDDが Decision No. 1470/MOH および Notification No. 9606 を発出。医療機器の登録・届出制度を正式に導入。"
    },
    {
      "date": "2024-01",
      "title": "Class C/D 医療機器の登録必須化",
      "description": "中高リスク（Class C）・高リスク（Class D）医療機器の FDD 登録が必須化。"
    },
    {
      "date": "2025-01",
      "title": "Class A/B 医療機器の届出・登録必須化",
      "description": "低リスク（Class A）機器は届出（Notification）、中低リスク（Class B）機器は登録が必須化。"
    }
  ],
  "lastUpdated": "2026-04-06",
  "verified": "2026-04-06"
};
