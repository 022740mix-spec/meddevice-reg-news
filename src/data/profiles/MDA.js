// モルドバ (Moldova)
export default {
  "code": "MDA",
  "country": "モルドバ",
  "countryEn": "Moldova",
  "region": "Europe",
  "flag": "🇲🇩",
  "legalSystemOverview": {
    "type": "EU加盟候補国（EU MDD指令転換済み・MDR整合法案策定中）",
    "description": "モルドバはEU加盟候補国（2024年6月交渉開始）。Legea nr. 102/2017がEU指令93/42, 90/385, 98/79を国内法に転換。AMDMがNCA。CE認証機器は簡易届出、非CE機器はフルアセスメント+SMマーク。2025年にEU MDR/IVDR整合の新法草案を策定中。",
    "keyCharacteristics": [
      "EU加盟候補国（2024年6月交渉開始）",
      "Legea nr. 102/2017（EU MDD指令転換）が基本法",
      "AMDM がNCA",
      "CE認証: 簡易届出 / 非CE: フルアセスメント+SMマーク",
      "登録有効期間5年",
      "ルーマニア語ラベリング必須",
      "国家医療機器登録簿（56万件超）",
      "2025年 EU MDR/IVDR整合新法草案策定中"
    ]
  },
  "authorities": [
    {
      "name": "AMDM",
      "fullName": "Medicines and Medical Devices Agency",
      "localName": "Agenția Medicamentului și Dispozitivelor Medicale",
      "role": "NCA: 医療機器登録・市場監視・ビジランス・分類・認証",
      "url": "https://amdm.gov.md/en/page/medical-devices",
      "isPrimary": true
    },
    {
      "name": "CNAM",
      "fullName": "National Health Insurance Company",
      "localName": "Compania Națională de Asigurări în Medicină",
      "role": "強制健康保険による医療機器償還管理。6種類・49モデルが補償対象。",
      "url": "https://cnam.md/servicii/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "CE認証承認 + 非CE機器用国内評価",
    "description": "CE認証機器はEU NBの証明書を承認。非CE機器はAMDMがフルアセスメントを実施しSMマークを付与。国内NB指定制度はない。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "Legea nr. 102/2017 に基づく定義。EU MDD (93/42/EEC) の定義を転換。",
    "scope": "IVD含む（EU IVDD 98/79/EC転換）。SaMD規定は明確な個別規定なし。",
    "notes": "GD 705/2018が市場流通条件を詳細に規定。"
  },
  "primaryLaw": {
    "title": "Legea nr. 102/2017 cu privire la dispozitivele medicale",
    "originalTitle": "Legea nr. 102 din 09.06.2017 cu privire la dispozitivele medicale",
    "enacted": "2017",
    "lastAmended": null,
    "url": "https://amdm.gov.md/en/page/legislation",
    "description": "医療機器に関する基本法。EU指令93/42/EEC, 90/385/EEC, 98/79/ECを国内法に転換。登録・市場監視・ビジランスの法的基盤。"
  },
  "implementingRegulations": [
    {
      "title": "Hotărârea Guvernului nr. 705/2018 (Market Placement Conditions)",
      "date": "2018",
      "url": "https://amdm.gov.md/en/page/normative-acts",
      "description": "医療機器の市場流通条件を規定。必須要件・適合性評価手続き。",
      "category": "市場流通"
    },
    {
      "title": "Hotărârea Guvernului nr. 694/2017 (Registration Procedures)",
      "date": "2017",
      "url": "https://amdm.gov.md/en/page/registration-procedures",
      "description": "AMDM登録手続きを規定。CE認証/非CE認証の申請フロー。",
      "category": "登録手続"
    },
    {
      "title": "Hotărârea Guvernului nr. 348/2014 (Fees)",
      "date": "2014",
      "url": "https://amdm.gov.md/en/page/tariffs",
      "description": "医療機器登録手数料を規定。",
      "category": "手数料"
    }
  ],
  "relatedLaws": [
    {
      "title": "Legea nr. 1585/1998 (Compulsory Health Insurance)",
      "category": "健康保険",
      "enacted": "1998",
      "url": "https://cnam.md/despre-cnam/",
      "relevance": "強制健康保険の根拠法。医療機器償還の法的基盤。"
    }
  ],
  "classification": {
    "system": "EU MDD式4クラス制",
    "basis": "Legea nr. 102/2017に基づく分類。EU MDD Annex IX準拠。",
    "classes": [
      {
        "name": "Class I",
        "nameJa": "クラスI",
        "riskLevel": "低",
        "description": "低リスク機器。自己宣言。",
        "examples": ["弾性包帯", "聴診器", "車椅子"],
        "approvalPath": "自己宣言 + AMDM届出"
      },
      {
        "name": "Class IIa",
        "nameJa": "クラスIIa",
        "riskLevel": "中低",
        "description": "中低リスク。NB証明書必要。",
        "examples": ["補聴器", "超音波装置", "血圧計"],
        "approvalPath": "CE証明書 or AMDMフルアセスメント"
      },
      {
        "name": "Class IIb",
        "nameJa": "クラスIIb",
        "riskLevel": "中高",
        "description": "中高リスク。NB詳細審査。",
        "examples": ["人工呼吸器", "輸液ポンプ", "X線装置"],
        "approvalPath": "CE証明書 or AMDMフルアセスメント"
      },
      {
        "name": "Class III",
        "nameJa": "クラスIII",
        "riskLevel": "高",
        "description": "最高リスク。最も厳格な審査。",
        "examples": ["人工心臓弁", "冠動脈ステント", "植込み型除細動器"],
        "approvalPath": "CE証明書 or AMDMフルアセスメント"
      }
    ],
    "rules": ["EU MDD Annex IX準拠分類規則"],
    "totalProductCodes": "なし（EU分類に準拠）"
  },
  "conformityAssessment": {
    "overview": "2ルート: (1) CE認証済み機器はAMDMへの簡易届出、(2) 非CE機器はフルアセスメント+SMマーク。登録有効期間5年。",
    "routes": [
      {
        "name": "CE-marked Device Notification",
        "nameJa": "CE認証済み機器の簡易届出",
        "applicableClasses": ["Class I", "Class IIa", "Class IIb", "Class III"],
        "description": "EU NB発行のCE証明書をベースにAMDM届出。適合宣言・CE証明書・ラベリングサンプル等を提出。",
        "subtypes": [],
        "avgReviewTime": "Class I: 45日、Class IIa〜III: 90日",
        "avgReviewTimeSource": "https://amdm.gov.md/en/page/registration-of-medical-devices",
        "fee": "登録料 1,794 MDL（約EUR 92）。国内製造者は免除。",
        "feeSource": "https://amdm.gov.md/en/page/fees-and-charges",
        "url": "https://amdm.gov.md/en/page/medical-devices"
      },
      {
        "name": "Non-CE Full Assessment + SM Mark",
        "nameJa": "非CE機器フルアセスメント + SMマーク",
        "applicableClasses": ["Class I", "Class IIa", "Class IIb", "Class III"],
        "description": "CE証明書のない機器はAMDMがフルアセスメントを実施。合格でSM（国内適合）マークを付与。技術文書・試験報告書等の完全な提出が必要。",
        "subtypes": [],
        "avgReviewTime": "Class I: 45日、Class IIa〜III: 90日",
        "avgReviewTimeSource": "https://amdm.gov.md/en/page/registration-of-medical-devices",
        "fee": "登録料 1,794 MDL（約EUR 92）。国内製造者は免除。",
        "feeSource": "https://amdm.gov.md/en/page/fees-and-charges",
        "url": "https://amdm.gov.md/en/page/sm-mark-assessment"
      }
    ]
  },
  "electronicSubmission": {
    "system": "国家医療機器登録簿（National Register）",
    "url": "https://registru.dispozitive.amdm.gov.md/search",
    "description": "国家医療機器登録簿（56万件超のエントリー）がオンラインで公開。申請手続き自体は紙ベース。2024年4月よりeRețeta（電子処方箋）稼働。",
    "mandatory": false
  },
  "udi": {
    "required": false,
    "system": "未導入",
    "description": "UDI制度は未導入。EU MDR整合の新法でUDI導入が検討されている。",
    "url": "https://amdm.gov.md/en/page/regulatory-framework",
    "timeline": "未定（EU MDR整合新法の制定に連動）"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "AMDM ビジランス",
      "mandatory": true,
      "url": "https://amdm.gov.md/en/page/vigilance",
      "description": "有害事象をAMDMに報告。EU Vigilanceの枠組みを部分的に採用。"
    },
    "recalls": {
      "authority": "AMDM",
      "description": "FSCA/FSNをAMDMに通知。市場からの撤去措置。",
      "url": "https://amdm.gov.md/en/page/safety-alerts"
    },
    "surveillance": "市販後監視はAMDMが管轄。国家医療機器登録簿で登録機器をトラッキング。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "AMDM",
    "name": "Certificate of Free Sale",
    "description": "AMDMが発行。有効な機器登録が前提。",
    "processingTime": "要確認（公式情報で裏付け未取得）",
    "url": "https://amdm.gov.md/en/page/certificates"
  },
  "reimbursement": {
    "system": "強制健康保険（CNAM）",
    "authority": "CNAM (Compania Națională de Asigurări în Medicină)",
    "description": "強制健康保険に基づく医療機器償還。6種類・49モデルが補償対象。CNAMが償還対象リストを管理。",
    "codingSystems": ["CNAM医療機器補償リスト"],
    "url": "https://cnam.md/asigurati/"
  },
  "marketingRules": {
    "authority": "AMDM",
    "description": "ルーマニア語ラベリング必須。IFUはルーマニア語で提供。",
    "keyRules": [
      "ルーマニア語ラベリング必須",
      "IFU: ルーマニア語必須",
      "CE/SMマーキング表示義務"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "MDSAP非参加。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "ISO 13485受容。CE/SM認証の前提。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "ISO 14971受容。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "IEC 62304受容。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "IEC 60601シリーズ受容。"
    },
    "others": []
  },
  "recentDevelopments": [
    {
      "date": "2025",
      "title": "EU MDR/IVDR整合新法草案策定",
      "description": "EU MDR (2017/745) およびIVDR (2017/746) に整合する新医療機器法の草案を策定中。現行のMDD転換法を置換予定。"
    },
    {
      "date": "2024-06",
      "title": "EU加盟交渉開始",
      "description": "2024年6月、モルドバのEU加盟交渉が正式に開始。医療機器規制を含むアキ・コミュノテール（EU法体系）への整合が加速。"
    },
    {
      "date": "2024-04",
      "title": "eRețeta（電子処方箋）稼働開始",
      "description": "電子処方箋システムeRețetaが稼働開始。医療機器を含む処方管理のデジタル化。"
    }
  ],
  "lastUpdated": "2026-04-03",
  "verified": null
};
