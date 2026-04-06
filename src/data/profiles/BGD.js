// バングラデシュ (People's Republic of Bangladesh)
export default {
  "code": "BGD",
  "country": "バングラデシュ",
  "countryEn": "People's Republic of Bangladesh",
  "region": "ASPAC",
  "flag": "🇧🇩",
  "legalSystemOverview": {
    "type": "議会制共和制（Parliamentary Republic）",
    "description": "バングラデシュの医療機器規制は医薬品管理局（DGDA: Directorate General of Drug Administration）が所管する。従来は Drugs Act 1940 および Drugs (Control) Ordinance 1982 の下で医薬品と同様に規制されてきたが、2023年9月18日に Drug and Cosmetics Act 2023（Act No. 29 of 2023）が制定され、医療機器（ソフトウェアを含む）の定義・分類・登録が法的に明確化された。ASEAN MDD準拠の4クラス分類（Class A/B/C/D）を採用。Medical Device Registration Guideline 2015が登録手続きの実務ガイダンスとして機能。",
    "keyCharacteristics": [
      "DGDA が医療機器規制を統括",
      "Drug and Cosmetics Act 2023 により医療機器（ソフトウェア含む）の定義を明確化",
      "ASEAN MDD準拠のリスクベース4クラス分類（A / B / C / D）",
      "Class B/C/D は DGDA への登録が必須（Class A は届出不要）",
      "ISO 13485認証がClass B/C/D全てに必要",
      "参照国（EU/USA/CAN/JPN/AUS）認可の保有が審査で有利"
    ]
  },
  "authorities": [
    {
      "name": "DGDA",
      "fullName": "Directorate General of Drug Administration",
      "localName": "ওষুধ প্রশাসন অধিদপ্তর",
      "role": "医療機器の登録・輸入許可・市販後監視・品質管理を統括",
      "url": "https://www.dgda.gov.bd/",
      "isPrimary": true
    },
    {
      "name": "MOH&FW",
      "fullName": "Ministry of Health and Family Welfare",
      "localName": "স্বাস্থ্য ও পরিবার কল্যাণ মন্ত্রণালয়",
      "role": "医療政策全般、法令の策定・監督",
      "url": "https://mohfw.gov.bd/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "該当なし（DGDA 直接審査）",
    "description": "欧州型の Notified Body 制度は存在しない。DGDA が直接登録審査を行う。参照国認可（CE、FDA等）の保有が審査で有利に働く。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "Drug and Cosmetics Act 2023 に基づく定義。疾病の診断・治療・予防・監視等を目的とする器具・装置・機器・ソフトウェア等で、薬理学的・免疫学的・代謝的手段によらないもの。ソフトウェアが医療機器の定義に明示的に含まれた。",
    "scope": "IVD試薬を含む。SaMDも「Drug」カテゴリの一部として規制対象。",
    "notes": "従来は Drugs Act 1940 の「drug」定義に一部の機器が含まれていた。Drug and Cosmetics Act 2023 でソフトウェアを含む独立した定義を導入。"
  },
  "primaryLaw": {
    "title": "Drug and Cosmetics Act 2023 (Act No. 29 of 2023)",
    "originalTitle": "ওষুধ ও প্রসাধনী আইন, ২০২৩",
    "enacted": "2023-09-18",
    "lastAmended": null,
    "url": "https://asiaactual.com/wp-content/uploads/2023/10/Bangladesh-Drug-and-Cosmetics-Act-2023-English.pdf",
    "description": "医薬品・化粧品・医療機器を包括的に規制する法律。医療機器（ソフトウェアを含む）の定義、分類、登録制度、製造・輸入規制、市販後監視、罰則等を規定。Drugs Act 1940を置き換える新法。"
  },
  "implementingRegulations": [
    {
      "title": "Medical Device Registration Guideline 2015",
      "date": "2015",
      "url": "https://dgda.gov.bd/index.php/2013-03-31-05-16-29/guidance-documents/127-medical-device-registration-guideline-2015/file",
      "description": "医療機器登録手続きの実務ガイダンス。ASEAN MDD準拠の4クラス分類、申請書類要件、審査プロセスを規定。現行の登録実務の基盤。",
      "category": "登録手続き"
    },
    {
      "title": "Drugs (Control) Ordinance 1982",
      "date": "1982",
      "url": "https://dgda.gov.bd/",
      "description": "従来の医薬品・医療機器規制の法的根拠。Drug and Cosmetics Act 2023の完全施行まで部分的に適用。",
      "category": "従来規制"
    }
  ],
  "relatedLaws": [
    {
      "title": "Drugs Act 1940",
      "category": "医薬品規制",
      "enacted": "1940",
      "url": "https://dgda.gov.bd/",
      "relevance": "旧基本法。Drug and Cosmetics Act 2023により置き換え。医療機器の一部が「drug」として規制されてきた歴史的経緯。"
    }
  ],
  "classification": {
    "system": "ASEAN MDD準拠4クラス分類（Class A/B/C/D）",
    "basis": "Medical Device Registration Guideline 2015 に基づくASEAN MDD準拠の分類。リスクレベルにより4段階に分類。",
    "classes": [
      {
        "name": "Class A",
        "nameJa": "クラスA（低リスク）",
        "riskLevel": "低",
        "description": "低リスク医療機器。登録不要（届出のみ）。",
        "examples": [
          "手術用リトラクター",
          "舌圧子",
          "ガーゼ"
        ],
        "approvalPath": "届出のみ（登録不要）"
      },
      {
        "name": "Class B",
        "nameJa": "クラスB（中低リスク）",
        "riskLevel": "中低",
        "description": "中低リスク医療機器。DGDA登録必須。ISO 13485認証・原産国CFS必要。",
        "examples": [
          "皮下注射針",
          "吸引器",
          "超音波診断装置"
        ],
        "approvalPath": "DGDA登録（2段階審査: Primary Review + Final Registration）"
      },
      {
        "name": "Class C",
        "nameJa": "クラスC（中高リスク）",
        "riskLevel": "中高",
        "description": "中高リスク医療機器。DGDA登録必須。ISO 13485認証・参照国CFS/EC証明書必要。",
        "examples": [
          "人工呼吸器",
          "骨接合プレート",
          "透析器"
        ],
        "approvalPath": "DGDA登録（2段階審査: Primary Review + Final Registration）"
      },
      {
        "name": "Class D",
        "nameJa": "クラスD（高リスク）",
        "riskLevel": "高",
        "description": "高リスク医療機器。DGDA登録必須。ISO 13485認証・参照国CFS/EC証明書必要。最も厳格な審査。",
        "examples": [
          "心臓ペースメーカー",
          "人工心臓弁",
          "埋込み型除細動器"
        ],
        "approvalPath": "DGDA登録（2段階審査: Primary Review + Final Registration）"
      }
    ],
    "rules": [
      "ASEAN MDD分類ガイドラインに準拠",
      "Class A は登録不要、Class B/C/D は登録必須",
      "Class C/D は参照国（EU/USA/CAN/JPN/AUS）のCFS/EC証明書が必要"
    ],
    "totalProductCodes": null
  },
  "conformityAssessment": {
    "overview": "Class B/C/D の医療機器はDGDAへの登録が必要（Class Aは届出不要）。2段階審査制（Primary Review → Final Registration）。外国メーカーはローカル代理人（Authorized Representative）の指定が必須（1製品につき1社のみ）。参照国（EU/USA/CAN/JPN/AUS）認可の保有が審査で有利に働く。",
    "routes": [
      {
        "name": "DGDA Device Registration (Two-Step Approval)",
        "nameJa": "DGDA 医療機器登録（2段階承認）",
        "applicableClasses": [
          "Class B",
          "Class C",
          "Class D"
        ],
        "description": "Step 1: Primary Review（一次審査）で技術・行政書類の完全性を確認（3〜4ヶ月）。Step 2: Final Registration（最終登録）で原本FSC（バングラデシュ大使館認証済み）・製品ラベルを提出（30〜40日）。ISO 13485認証が全クラスで必要。Class C/Dは参照国のEC証明書が追加要件。",
        "subtypes": [
          "新規登録",
          "変更登録",
          "更新"
        ],
        "avgReviewTime": "4〜6ヶ月（Primary Review 3〜4ヶ月 + Final Registration 30〜40日）",
        "avgReviewTimeSource": "https://www.elendilabs.com/en/articles/bgd-md-registration",
        "fee": "要確認（DGDA規定による）",
        "feeSource": null,
        "url": "https://dgda.gov.bd/index.php/2013-03-31-05-16-29/guidance-documents/127-medical-device-registration-guideline-2015/file"
      }
    ]
  },
  "electronicSubmission": {
    "system": "DGDA Digital Product Registration",
    "url": "https://info.dgda.gov.bd/",
    "description": "DGDAはDigital Product Registrationシステムを段階的に導入中。一部の手続きは書面提出が必要。Registration Dashboardで登録状況の確認が可能。",
    "mandatory": false
  },
  "udi": {
    "required": false,
    "system": "未導入",
    "description": "独自のUDI制度は2026年時点で未導入。Medical Devices Act 2023 にUDI関連の条項があるが、実施時期は未定。",
    "url": null,
    "timeline": "未定"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "有害事象報告制度（DGDA）",
      "mandatory": true,
      "url": "https://dgda.gov.bd/sites/default/files/files/dgda.portal.gov.bd/page/f9fa97e3_3748_4fef_b101_7f1d98ac115b/2023-09-12-18-25-652150ca95898e652a62928ade2901d4.pdf",
      "description": "Drug and Cosmetics Act 2023 に基づき有害事象報告が義務化。GVP Guideline（2023年8月）に報告手順を規定。"
    },
    "recalls": {
      "authority": "DGDA",
      "description": "DGDAの命令または自主リコール。リコール手続きの詳細は実施規則で規定予定。",
      "url": "https://dgda.gov.bd/"
    },
    "surveillance": "DGDAによる市販後監視。制度は発展途上。WHO支援の下で市販後監視体制の強化を推進中。"
  },
  "certificateOfFreeSale": {
    "available": false,
    "issuingAuthority": null,
    "name": null,
    "description": "バングラデシュからのCFS発行に関する公式制度は要確認。輸入登録時に製造国のCFS提出が求められる。",
    "processingTime": null,
    "url": null
  },
  "reimbursement": {
    "system": "政府主導型医療制度（公的医療機関 + 民間セクター）",
    "authority": "保健家族福祉省（MOH&FW）",
    "description": "公的医療機関での基本的な医療は無料で提供される。医療機器の個別償還制度は未整備。公共調達を通じた供給が中心。",
    "codingSystems": [],
    "url": "https://mohfw.gov.bd/"
  },
  "marketingRules": {
    "authority": "DGDA",
    "description": "医療機器広告に関する詳細法規は要確認。虚偽・誇大広告は一般法により禁止。",
    "keyRules": [
      "虚偽・誇大広告の禁止",
      "未登録機器の広告禁止"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "バングラデシュはMDSAPに参加していない。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "Class B/C/D全てでISO 13485認証が必須。登録申請の前提条件。"
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
      "date": "2023-09",
      "title": "Drug and Cosmetics Act 2023 制定",
      "description": "2023年9月18日にAct No. 29として制定。医療機器（ソフトウェアを含む）の定義を明確化し、製造・輸入・流通・販売を包括的に規制する法的基盤を整備。"
    },
    {
      "date": "2024-2025",
      "title": "実施規則の策定作業",
      "description": "Drug and Cosmetics Act 2023 の実施規則をWHO支援の下で策定中。現行はMedical Device Registration Guideline 2015が実務ガイダンスとして機能。"
    }
  ],
  "lastUpdated": "2026-04-06",
  "verified": "2026-04-06"
};
