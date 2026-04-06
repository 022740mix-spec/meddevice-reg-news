// キルギス (Kyrgyzstan)
export default {
  "code": "KGZ",
  "country": "キルギス",
  "countryEn": "Kyrgyzstan",
  "region": "ASPAC",
  "flag": "🇰🇬",
  "legalSystemOverview": {
    "type": "政府審査型（EAEU統一規制移行中）",
    "description": "キルギスではDLSMI（医薬品・医療機器局）が医療機器の登録を管轄。2023年12月29日制定のLaw No. 216「医療機器の流通に関する法律」が基本法（旧Law 166/2017を置換）。EAEU（ユーラシア経済連合）整合の4クラス分類（1/2a/2b/3）。国内登録（2027年12月31日まで）とEAEU統一登録の二本立て。ЭБД（電子データベース）およびEAEU統一レジストリで管理。GS1シリアル化・トレーサビリティ計画あり。",
    "keyCharacteristics": [
      "DLSMI がNCA",
      "Law No. 216 (2023-12-29)「医療機器の流通に関する法律」が基本法",
      "EAEU整合の4クラス制（1/2a/2b/3）",
      "国内登録（〜2027-12-31）とEAEU統一登録の二本立て",
      "GD 513/2024（登録・監視・表示）、GD 626/2024（品質・安全性評価）",
      "ЭБД（電子データベース）+ EAEU統一レジストリ",
      "ロシア語・キルギス語ラベリング",
      "GS1シリアル化・トレーサビリティ計画中"
    ]
  },
  "authorities": [
    {
      "name": "DLSMI",
      "fullName": "Department of Medicines and Medical Devices",
      "localName": "Департамент лекарственных средств и медицинских изделий",
      "role": "NCA: 医療機器の国内登録・品質安全性評価・市販後監視・表示規制。保健省傘下。",
      "url": "https://dlsmi.kg/ru/register_mi/",
      "isPrimary": true
    },
    {
      "name": "FOMS",
      "fullName": "Mandatory Medical Insurance Fund",
      "localName": "Фонд обязательного медицинского страхования",
      "role": "強制医療保険基金。医療機器の償還・調達に関与。",
      "url": "https://foms.kg/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "政府直接審査 + EAEU認定試験機関",
    "description": "国内登録はDLSMIが直接審査。EAEU統一登録では、EAEU認定試験機関による技術試験・臨床評価を経て登録。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "Law No. 216 (2023): 人の疾病の診断・治療・予防、リハビリテーション、妊娠管理等に使用される器具・装置・機器・ソフトウェア。主要な作用が薬理学的・免疫学的・代謝的でないもの。",
    "scope": "医療機器・IVD・付属品・ソフトウェアが対象。",
    "notes": "EAEU Collegium Decision 173/2015の定義とも整合。"
  },
  "primaryLaw": {
    "title": "Law No. 216 of 29 December 2023 \"On Circulation of Medical Devices\"",
    "originalTitle": "Закон КР «Об обращении медицинских изделий»",
    "enacted": "2023-12-29",
    "lastAmended": "要確認",
    "url": "https://cbd.minjust.gov.kg/4-5241/edition/1244/ru",
    "description": "2023年12月29日制定。医療機器の流通（製造・輸入・販売・使用・廃棄）を規制。旧Law 166/2017を置換。EAEU規制との整合性を確保。"
  },
  "implementingRegulations": [
    {
      "title": "GD 513/2024 — 医療機器の登録・監視・表示手続",
      "date": "2024",
      "url": "https://cbd.minjust.gov.kg/4-5241/edition/1244/ru",
      "description": "政府決定513号（2024年）。医療機器の国内登録手続、市販後監視、表示要件を規定。",
      "category": "登録・監視・表示"
    },
    {
      "title": "GD 626/2024 — 品質・安全性評価手続",
      "date": "2024",
      "url": "https://dlsmi.kg/ru/about/",
      "description": "政府決定626号（2024年）。医療機器の品質・安全性評価手続を規定。",
      "category": "品質安全性評価"
    },
    {
      "title": "EAEU Collegium Decision No. 173/2015 — 医療機器統一規制",
      "date": "2015",
      "url": "https://med.eaeunion.org/registration/",
      "description": "EAEU域内の医療機器統一登録・分類・市販後監視の枠組み。",
      "category": "EAEU統一規制"
    }
  ],
  "relatedLaws": [
    {
      "title": "EAEU Treaty (2014) — ユーラシア経済連合条約",
      "category": "地域経済統合",
      "enacted": "2014",
      "url": "https://eec.eaeunion.org/comission/department/dtp/",
      "relevance": "キルギスは2015年よりEAEU加盟。医療機器の統一規制がEAEU域内で適用。"
    },
    {
      "title": "Traceability Decree (2024-10-07)",
      "category": "トレーサビリティ",
      "enacted": "2024-10-07",
      "url": "https://cbd.minjust.gov.kg/202310/edition/1139/ru",
      "relevance": "医療機器のトレーサビリティに関する政令。GS1シリアル化の法的根拠。"
    }
  ],
  "classification": {
    "system": "EAEU整合 4クラス制（1/2a/2b/3）",
    "basis": "EAEU Collegium Decision 173/2015に基づくリスクベース分類。使用目的・侵襲性・接触期間・技術に基づく。GHTF/IMDRFモデルとも整合。",
    "classes": [
      {
        "name": "Class 1",
        "nameJa": "クラス1",
        "riskLevel": "低",
        "description": "低リスク。非侵襲・短期接触。",
        "examples": ["弾性包帯", "聴診器", "舌圧子", "手動車椅子", "ピンセット"],
        "approvalPath": "国内登録 または EAEU統一登録"
      },
      {
        "name": "Class 2a",
        "nameJa": "クラス2a",
        "riskLevel": "中低",
        "description": "中低リスク。",
        "examples": ["皮下注射針", "血圧計", "補聴器", "手術用手袋", "体温計"],
        "approvalPath": "国内登録 または EAEU統一登録"
      },
      {
        "name": "Class 2b",
        "nameJa": "クラス2b",
        "riskLevel": "中高",
        "description": "中高リスク。",
        "examples": ["人工呼吸器", "骨固定プレート", "血液透析装置", "輸液ポンプ", "コンタクトレンズ"],
        "approvalPath": "国内登録 または EAEU統一登録"
      },
      {
        "name": "Class 3",
        "nameJa": "クラス3",
        "riskLevel": "高",
        "description": "最高リスク。",
        "examples": ["人工心臓弁", "植込み型除細動器", "ペースメーカー", "冠動脈ステント", "人工股関節"],
        "approvalPath": "国内登録 または EAEU統一登録"
      }
    ],
    "rules": [
      "EAEU Collegium Decision 173/2015に基づくリスクベース分類",
      "国内登録は2027-12-31まで受付、以降はEAEU統一登録に一本化予定"
    ],
    "totalProductCodes": null
  },
  "conformityAssessment": {
    "overview": "二本立ての登録制度: (A) 国内登録（DLSMI、有効期間5年、2027年12月31日まで受付）、(B) EAEU統一登録（無期限有効、EAEU全5カ国で有効）。国内登録は移行期間措置で、最終的にEAEU統一登録に一本化予定。",
    "routes": [
      {
        "name": "National Registration (DLSMI)",
        "nameJa": "国内登録",
        "applicableClasses": ["Class 1", "Class 2a", "Class 2b", "Class 3"],
        "description": "DLSMIによる国内登録。有効期間5年。2027年12月31日まで申請受付。技術文書・品質安全性評価・臨床データ・表示案を提出。国内のみ有効。",
        "subtypes": [],
        "avgReviewTime": "要確認（公式情報で裏付け未取得）",
        "avgReviewTimeSource": "https://dlsmi.kg/ru/about/",
        "fee": "要確認（公式情報で裏付け未取得）",
        "feeSource": "https://dlsmi.kg/ru/ndb_reestr/",
        "url": "https://dlsmi.kg/ru/ndb_reestr/"
      },
      {
        "name": "EAEU Unified Registration",
        "nameJa": "EAEU統一登録",
        "applicableClasses": ["Class 1", "Class 2a", "Class 2b", "Class 3"],
        "description": "EAEU統一登録制度。無期限有効。EAEU加盟5カ国（ロシア・ベラルーシ・カザフスタン・アルメニア・キルギス）全域で有効。EAEU認定試験機関による技術試験・臨床評価を経てDLSMIが登録。",
        "subtypes": [],
        "avgReviewTime": "要確認（公式情報で裏付け未取得）",
        "avgReviewTimeSource": "https://med.eaeunion.org/registration/",
        "fee": "要確認（公式情報で裏付け未取得）",
        "feeSource": "https://med.eaeunion.org/documents/",
        "url": "https://med.eaeunion.org/documents/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "ЭБД（電子データベース）+ EAEU統一レジストリ",
    "url": "https://ndb.med.kg/search",
    "description": "ЭБД（電子データベース）: 国内登録機器の管理。DLSMI国内レジストリ（https://dlsmi.kg/ru/ndb_reestr/）で登録状況を公開。EAEU統一レジストリ（https://med.eaeunion.org/）でEAEU登録機器を管理。",
    "mandatory": true
  },
  "udi": {
    "required": false,
    "system": "GS1シリアル化（計画中）",
    "description": "GS1シリアル化を計画中。2024年10月7日のトレーサビリティ政令が法的根拠。EAEU域内のトレーサビリティシステムとの統合を目指す。現時点ではUDI義務化は未実施。",
    "url": "https://ndb.med.kg/search",
    "timeline": "計画中（トレーサビリティ政令2024-10-07に基づく）"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "DLSMI 市販後監視",
      "mandatory": true,
      "url": "https://dlsmi.kg/ru/ndb_reestr/",
      "description": "DLSMIが市販後監視を管轄。GD 513/2024で監視手続を規定。有害事象・不具合の報告義務。EAEU統一登録機器はEAEU監視システムにも連携。"
    },
    "recalls": {
      "authority": "DLSMI",
      "description": "DLSMIが市場安全措置・リコールの権限を持つ。Law No. 216に基づく。",
      "url": "https://dlsmi.kg/ru/register_mi/"
    },
    "surveillance": "GD 513/2024に基づく市販後監視制度。EAEU域内の安全情報共有システムにも参加。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "DLSMI",
    "name": "Certificate of Free Sale",
    "description": "DLSMIが登録済み製品のCFSを発行。",
    "processingTime": "要確認（公式情報で裏付け未取得）",
    "url": "https://dlsmi.kg/ru/contacts/"
  },
  "reimbursement": {
    "system": "強制医療保険（OMS）+ 国家基本給付プログラム",
    "authority": "FOMS（強制医療保険基金）",
    "description": "FOMSが強制医療保険を運営。国家基本給付プログラム（PGBP）に基づき医療サービスをカバー。医療機器は手技・入院費に含まれる形で間接的にカバー。個別の医療機器償還リストは未確認。",
    "codingSystems": [],
    "url": "https://foms.kg/page/about"
  },
  "marketingRules": {
    "authority": "DLSMI",
    "description": "ロシア語・キルギス語ラベリング必須。GD 513/2024で表示要件を規定。EAEU統一登録機器はEAEU表示要件にも準拠。",
    "keyRules": [
      "ロシア語・キルギス語ラベリング必須",
      "GD 513/2024に基づく表示要件",
      "EAEU統一登録機器はEAEU表示要件準拠",
      "使用説明書のロシア語/キルギス語訳必須"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "MDSAP非参加。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "QMS証拠として参照。EAEU統一登録ではGOST ISO 13485として要求。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "リスクマネジメントとして参照。GOST ISO 14971。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "ソフトウェアライフサイクル。GOST IEC 62304。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "電気医療機器安全。GOST IEC 60601。"
    },
    "others": [
      "EAEU統一規格（GOST）として国際規格を採用",
      "EAEU Collegium Decision 173/2015に基づく技術要件"
    ]
  },
  "recentDevelopments": [
    {
      "date": "2023-12-29",
      "title": "Law No. 216「医療機器の流通に関する法律」制定",
      "description": "旧Law 166/2017を置換する新基本法が制定。EAEU規制との整合性を確保し、国内登録とEAEU統一登録の二本立て制度を法的に規定。"
    },
    {
      "date": "2024",
      "title": "GD 513/2024・GD 626/2024 制定",
      "description": "登録・監視・表示手続（GD 513/2024）および品質・安全性評価手続（GD 626/2024）の政府決定が制定。新法の実施規則が整備。"
    },
    {
      "date": "2024-10-07",
      "title": "トレーサビリティ政令制定",
      "description": "医療機器のトレーサビリティに関する政令が制定。GS1シリアル化の法的根拠を整備。"
    }
  ],
  "lastUpdated": "2026-04-03",
  "verified": null
};
