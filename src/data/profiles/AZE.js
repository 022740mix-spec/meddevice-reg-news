// アゼルバイジャン (Azerbaijan)
export default {
  "code": "AZE",
  "country": "アゼルバイジャン",
  "countryEn": "Azerbaijan",
  "region": "ASPAC",
  "flag": "🇦🇿",
  "legalSystemOverview": {
    "type": "政府審査型（2024年7月より医療機器登録義務化）",
    "description": "アゼルバイジャンの医療機器規制は2024年7月に大きく転換。従来は登録不要で確認レター取得による輸入が主流だったが、2023年7月のLaw No. 979-VIQD（医薬品法改正）により医療機器の国家登録が義務化。2024年7月のCabinet Decision No. 345で登録規則が施行。リスクグループI以外の全医療機器は国家登録が必要。AEM（Analitik Ekspertiza Mərkəzi）が登録当局。リスク分類は保健省Decision No. 8/No. 9（2024年5月）で規定。登録証有効期間5年。",
    "keyCharacteristics": [
      "AEM（分析専門センター）がNCA",
      "2024年7月より医療機器の国家登録義務化",
      "リスクグループI以外は登録必須",
      "Cabinet Decision No. 345（2024-07-18）が登録規則",
      "保健省Decision No. 8/No. 9（2024-05-21）でリスク分類",
      "登録証有効期間5年",
      "QMS検査は2026年導入予定",
      "アゼルバイジャン語ラベリング必須"
    ]
  },
  "authorities": [
    {
      "name": "AEM",
      "fullName": "Analytical Expertise Center",
      "localName": "Analitik Ekspertiza Mərkəzi",
      "role": "NCA: 医薬品・医療機器の国家登録、品質・安全性・有効性の評価、ファーマコヴィジランス、トラック&トレース（DVTIS）。保健省傘下の公法人（2019年10月より）。",
      "url": "https://pharma.az/en/about-us/about-us/",
      "isPrimary": true
    },
    {
      "name": "保健省",
      "fullName": "Ministry of Health of the Republic of Azerbaijan",
      "localName": "Azərbaycan Respublikasının Səhiyyə Nazirliyi",
      "role": "保健政策の最上位監督省庁。医療機器分類規則の策定（Decision No. 8/No. 9）。AEM所管。",
      "url": "https://sehiyye.gov.az/en/huquqi-senedler/qanunlar/",
      "isPrimary": false
    },
    {
      "name": "TABIB",
      "fullName": "Azerbaijani Management Union of Medical Territorial Units",
      "localName": null,
      "role": "公的医療サービス提供・強制医療保険の管理。医療機器の調達に関与。",
      "url": "https://azerbaijan.az/en/related-information/211",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "政府直接審査",
    "description": "EU型のNotified Body制度は存在しない。AEMが直接登録審査を実施。ISO 13485のQMS文書は求められるが、現時点ではQMS現地査察は実施されていない（2026年Q1より導入予定）。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "Law on Medicinal Products（2006年、2023年改正）に基づく。医療機器は人の疾病の診断・治療・予防等に使用される器具・装置・機器であり、主要な作用が薬理学的・免疫学的・代謝的でないもの。",
    "scope": "医療機器・IVD・付属品が対象。リスクグループIを除き国家登録必須。",
    "notes": "医薬品成分を含む医療機器はサンプル提出（各品目3検体）が必要。"
  },
  "primaryLaw": {
    "title": "Law of the Republic of Azerbaijan \"On Medicinal Products\"",
    "originalTitle": "\"Dərman vasitələri haqqında\" Azərbaycan Respublikasının Qanunu",
    "enacted": "2006-12-22",
    "lastAmended": "2024-04-23",
    "url": "https://e-qanun.az/framework/50079",
    "description": "2006年12月22日制定（Law No. 208-IIIQ）。医薬品・医療機器の流通に関する法的・組織的基盤を規定。2023年7月14日にLaw No. 979-VIQDで医療機器の国家登録義務を導入。2024年4月23日にLaw No. 1142-VIQDで保健省の権限拡大（医療機器の登録・レジスター管理を明示化）。"
  },
  "implementingRegulations": [
    {
      "title": "Cabinet Decision No. 345 — 医薬品・医療機器の国家登録・レジスター管理規則",
      "date": "2024-07-18",
      "url": "https://cratia.com/en/news/registration-of-medical-devices-in-azerbaijan-starting-july-2024/",
      "description": "2024年7月18日承認。医療機器の国家登録手続、申請書類（登録ドシエ）、登録証発行、変更手続、レジスター管理を規定。2024年7月19日より施行。",
      "category": "登録規則"
    },
    {
      "title": "MoH Decision No. 8 — 医療機器のリスク度に応じた分類",
      "date": "2024-05-21",
      "url": "https://e-qanun.az/framework/56982",
      "description": "保健省決定第8号（2024年5月21日）。医療機器の国内リスク分類体系を規定。",
      "category": "分類規則"
    },
    {
      "title": "MoH Decision No. 9 — 高・中リスク医療機器リスト",
      "date": "2024-05-21",
      "url": "https://pharma.az/en/category/medical-devices/",
      "description": "保健省決定第9号（2024年5月21日）。高リスク・中リスク医療機器の製品リスト（925ページ）を公布。",
      "category": "製品リスト"
    },
    {
      "title": "Cabinet Resolution No. 503 — ファーマコヴィジランス規則",
      "date": "2019-12-25",
      "url": "https://pharma.az/en/category/pharmacovigilance/",
      "description": "2019年12月25日採択。医薬品のファーマコヴィジランスに関する規則。2020年7月1日施行。有害事象の収集・評価・予防の枠組みを規定。",
      "category": "ファーマコヴィジランス"
    }
  ],
  "relatedLaws": [
    {
      "title": "Law No. 979-VIQD — 医薬品法改正（医療機器登録義務化）",
      "category": "法改正",
      "enacted": "2023-07-14",
      "url": "https://makromed.in/en/news/article/information-related-to-state-registration-of-medical-devices",
      "relevance": "リスクグループI以外の医療機器について国家登録を義務化。2023年8月15日施行。"
    },
    {
      "title": "Law No. 1142-VIQD — 医薬品法追加改正",
      "category": "法改正",
      "enacted": "2024-04-23",
      "url": "https://en.trend.az/azerbaijan/politics/3907452.html",
      "relevance": "保健省の権限を拡大し、医療機器の国家登録およびレジスター管理を明示的に所管事項に追加。"
    },
    {
      "title": "Presidential Decree No. 528 — 医薬品法の適用に関する大統領令",
      "category": "大統領令",
      "enacted": "2007-02-06",
      "url": "https://e-qanun.az/framework/50079",
      "relevance": "医薬品法の適用に関する施行令。2023年改正で医療機器登録関連の規定を追加。"
    }
  ],
  "classification": {
    "system": "リスクグループ制（I / 中リスク / 高リスク / 最高リスク）",
    "basis": "保健省Decision No. 8（2024-05-21）に基づくリスクベース分類。使用目的・侵襲性・リスク度に応じて分類。EU/US分類とは異なる独自体系だが、参照元としてClass I/IIa/IIb/IIIの概念を使用。",
    "classes": [
      {
        "name": "Risk Group I",
        "nameJa": "リスクグループI（低リスク）",
        "riskLevel": "低",
        "description": "低リスク医療機器。国家登録は不要。バッチ単位の輸入許可で対応。",
        "examples": ["弾性包帯", "聴診器", "車椅子", "体温計", "舌圧子"],
        "approvalPath": "登録不要（バッチ単位輸入許可）"
      },
      {
        "name": "Medium Risk",
        "nameJa": "中リスク",
        "riskLevel": "中",
        "description": "中リスク医療機器。国家登録必須。",
        "examples": ["血圧計", "補聴器", "手術用手袋", "皮下注射針", "超音波診断装置"],
        "approvalPath": "国家登録（AEM）"
      },
      {
        "name": "High Risk",
        "nameJa": "高リスク",
        "riskLevel": "高",
        "description": "高リスク医療機器。国家登録必須。",
        "examples": ["人工呼吸器", "血液透析装置", "輸液ポンプ", "X線装置", "骨接合プレート"],
        "approvalPath": "国家登録（AEM）"
      },
      {
        "name": "Highest Risk",
        "nameJa": "最高リスク",
        "riskLevel": "最高",
        "description": "最高リスク医療機器。国家登録必須。医薬品成分を含む機器はサンプル提出要。",
        "examples": ["人工心臓弁", "冠動脈ステント", "ペースメーカー", "植込み型除細動器", "人工股関節"],
        "approvalPath": "国家登録（AEM）"
      }
    ],
    "rules": [
      "保健省Decision No. 8（2024-05-21）に基づくリスク分類",
      "Decision No. 9で高・中リスク製品リスト（925ページ）を公布",
      "リスクグループI以外は国家登録が義務"
    ],
    "totalProductCodes": null
  },
  "conformityAssessment": {
    "overview": "2024年7月よりリスクグループI以外の医療機器は国家登録が義務。AEMが登録審査を実施。登録証有効期間5年。ISO 13485のQMS文書提出は求められるが、QMS現地査察は現時点では未実施（2026年Q1導入予定）。医薬品成分を含む機器はサンプル3検体の提出が必要。",
    "routes": [
      {
        "name": "State Registration (General)",
        "nameJa": "国家登録（一般手続）",
        "applicableClasses": ["Medium Risk", "High Risk", "Highest Risk"],
        "description": "AEMによる国家登録。申請書・登録ドシエ（技術文書、ISO 13485 QMS文書、アゼルバイジャン語IFU、包装レイアウト）を提出。書類審査・専門家評価を経て登録証を発行。有効期間5年。現地代理人（Authorized Representative）が必要。",
        "subtypes": [],
        "avgReviewTime": "最大5か月（書類選定・公証・翻訳・審査を含む）",
        "avgReviewTimeSource": "https://red-med.ru/en/aze",
        "fee": "150 AZN（約90 USD）",
        "feeSource": "https://red-med.ru/en/aze",
        "url": "https://pharma.az/en/registration/department-of-registration/department-of-registration/"
      },
      {
        "name": "Batch Import Permit (Risk Group I)",
        "nameJa": "バッチ単位輸入許可（リスクグループI）",
        "applicableClasses": ["Risk Group I"],
        "description": "リスクグループIの低リスク医療機器は国家登録不要。バッチ単位の一回限り輸入許可で対応。",
        "subtypes": [],
        "avgReviewTime": "要確認（公式情報で裏付け未取得）",
        "avgReviewTimeSource": "https://pharma.az/en/category/medical-devices/",
        "fee": "要確認（公式情報で裏付け未取得）",
        "feeSource": "https://pharma.az/en/category/medical-devices/",
        "url": "https://pharma.az/en/category/medical-devices/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "AEM申請窓口（紙面/電子併用）",
    "url": "https://pharma.az/en/registration/department-of-registration/department-of-registration/",
    "description": "AEMの登録部門に申請書・ドシエを提出。統合的な電子申請ポータルは未確認。申請フォームはpharma.azで公開。DVTIS（医薬品トラック&トレースシステム）は医薬品向けに2024年稼働開始済みだが、医療機器への適用範囲は限定的。",
    "mandatory": false
  },
  "udi": {
    "required": false,
    "system": "未導入",
    "description": "医療機器向けのUDI制度は未導入。医薬品向けにはDVTIS（Drug Tracking and Monitoring System）がGS1 2Dデータマトリクス形式で2024年1月から段階的に稼働しているが、医療機器は対象外。",
    "url": null,
    "timeline": "未定"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "AEM ファーマコヴィジランス",
      "mandatory": true,
      "url": "https://pharma.az/en/category/pharmacovigilance/",
      "description": "Cabinet Resolution No. 503（2019年）に基づくファーマコヴィジランス制度。重篤な有害事象は3日以内に報告義務。登録後5年間は全有害事象の報告が必要。WHO国際医薬品モニタリングプログラム加盟（2018年1月〜）。ただし現時点ではPMS報告・電子システムへの入力・有害事象情報収集は義務化されていない（2025年8月時点）。"
    },
    "recalls": {
      "authority": "AEM / 保健省",
      "description": "品質・有効性・安全性に問題がある場合、保健省がレジスターからの除外・使用禁止を命令可能。Law No. 1142-VIQD（2024年）で権限が明確化。",
      "url": "https://pharma.az/en/news/in-may-scheduled-and-unscheduled-inspections-were-carried-out-in-46-pharmacies/"
    },
    "surveillance": "体系的な医療機器PMS制度は発展途上。ファーマコヴィジランス（主に医薬品向け）がAEMの主要機能。今後QMS検査制度の導入とともに市販後監視の強化が予定されている。"
  },
  "certificateOfFreeSale": {
    "available": false,
    "issuingAuthority": null,
    "name": null,
    "description": "アゼルバイジャンにおける医療機器CFS発行制度の具体的情報は確認されなかった。登録済み製品の輸出に関する証明書制度は未整備と推定。",
    "processingTime": null,
    "url": null
  },
  "reimbursement": {
    "system": "強制医療保険（İcbari Tibbi Sığorta）",
    "authority": "TABIB / 国家強制医療保険庁",
    "description": "2021年に全国展開された強制医療保険制度。TABIBが公的医療サービスを管理。プライマリケア・入院・救急・専門外来・検査・リハビリ等を包括的にカバー（3,315の医療サービス）。医療機器は手技・入院費に含まれる形で間接的にカバー。個別の医療機器償還リストは未確認。2025年予算はAZN 20.9億（約12億USD）。",
    "codingSystems": [],
    "url": "https://sehiyye.gov.az/en/vetendaslar-ucun/icbari-tibbi-sigorta/"
  },
  "marketingRules": {
    "authority": "AEM / 保健省",
    "description": "アゼルバイジャン語ラベリング必須。包装レイアウト・カラーラベルもアゼルバイジャン語で提出。使用説明書（IFU）はアゼルバイジャン語訳必須。登録ドシエの一部書類は公証付きアゼルバイジャン語翻訳が必要。現地代理人（Authorized Representative）の設置が必要。",
    "keyRules": [
      "アゼルバイジャン語ラベリング必須",
      "使用説明書（IFU）アゼルバイジャン語訳必須",
      "一部書類は公証付き翻訳が必要",
      "包装レイアウト・カラーラベルのアゼルバイジャン語版提出",
      "現地代理人（Authorized Representative）設置義務"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "MDSAP非参加。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "登録時にISO 13485 QMS文書の提出が求められる。ただし現時点ではQMS現地査察は未実施（2026年導入予定）。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "リスクマネジメントとして認知。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "ソフトウェアライフサイクルとして認知。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "電気医療機器安全として認知。"
    },
    "others": [
      "国際規格を広く受入",
      "WHO国際医薬品モニタリングプログラム加盟（2018年〜）"
    ]
  },
  "recentDevelopments": [
    {
      "date": "2024-07-19",
      "title": "Cabinet Decision No. 345 — 医療機器国家登録規則施行",
      "description": "Cabinet Decision No. 345が承認され、医療機器の国家登録手続が正式に施行。リスクグループI以外の全医療機器の輸入に国家登録が必須に。移行期間なしの即時適用。"
    },
    {
      "date": "2024-06-05",
      "title": "医療機器輸入書類の受付一時停止",
      "description": "AEMが新登録制度の施行準備としてリスクグループI以外の医療機器の輸入書類受付・専門家評価を一時停止。"
    },
    {
      "date": "2024-05-21",
      "title": "保健省Decision No. 8・No. 9 — リスク分類規則・製品リスト公布",
      "description": "保健省が医療機器のリスク分類規則（Decision No. 8）および高・中リスク製品リスト（Decision No. 9、925ページ）を公布。"
    },
    {
      "date": "2024-04-23",
      "title": "Law No. 1142-VIQD — 医薬品法追加改正",
      "description": "保健省の権限を拡大し、医療機器の国家登録およびレジスター管理を明示的に所管事項に追加。"
    },
    {
      "date": "2024-01-01",
      "title": "DVTIS（医薬品トラック&トレースシステム）第1フェーズ開始",
      "description": "GS1 2Dデータマトリクス形式による医薬品シリアル化の第1フェーズ（向精神薬・強力薬）開始。医療機器は対象外だが、将来的な拡張が視野。"
    },
    {
      "date": "2023-07-14",
      "title": "Law No. 979-VIQD — 医薬品法改正（医療機器登録義務化）",
      "description": "医薬品法を改正し、リスクグループI以外の医療機器について国家登録を義務化。2023年8月15日施行。アゼルバイジャンの医療機器規制の転換点。"
    }
  ],
  "lastUpdated": "2026-04-06",
  "verified": null
};
