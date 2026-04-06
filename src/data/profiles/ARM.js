// アルメニア (Armenia)
export default {
  "code": "ARM",
  "country": "アルメニア",
  "countryEn": "Armenia",
  "region": "ASPAC",
  "flag": "🇦🇲",
  "legalSystemOverview": {
    "type": "輸入許可制（EAEU統一登録移行中）",
    "description": "アルメニアでは保健省傘下のSCDMTE（医薬品・医療技術専門センター）が医療機器の輸入審査・専門評価を管轄。基本法はLaw No. ZR-42（1996年）「住民への医療援助およびサービスに関する法律」第10章。EAEU（ユーラシア経済連合）加盟国として4クラス分類（1/2a/2b/3）に整合。アルメニアは独自の国内登録制度を持たず、輸入許可制（GD 429-N/2023）で運用中。2025年12月31日まで国内規則による申請受付が可能で、2026年1月1日以降はEAEU統一登録に一本化予定。",
    "keyCharacteristics": [
      "保健省 + SCDMTE がNCA",
      "Law No. ZR-42 (1996)「住民への医療援助およびサービスに関する法律」第10章が基本法",
      "EAEU整合の4クラス制（1/2a/2b/3）",
      "国内登録制度なし — 輸入許可制（GD 429-N/2023）で運用",
      "2025-12-31まで国内規則による申請可、2026-01-01以降EAEU統一登録に一本化予定",
      "GD 1795-N/2022でSCDMTEに医療機器の専門評価・監査を委任",
      "アルメニア語・ロシア語ラベリング",
      "Single Window電子申請システム"
    ]
  },
  "authorities": [
    {
      "name": "SCDMTE",
      "fullName": "Scientific Centre of Drug and Medical Technology Expertise",
      "localName": "Центр экспертизы лекарственных средств и медицинских технологий",
      "role": "NCA: 医療機器の輸入審査・専門評価・品質安全性評価・市販後監視。保健省傘下のSNPO（国家非営利組織）。GD 1795-N（2022年）により医療機器の規制権限を付与。",
      "url": "https://www.pharm.am/index.php/en/human-regulatory",
      "isPrimary": true
    },
    {
      "name": "MoH",
      "fullName": "Ministry of Health of the Republic of Armenia",
      "localName": "Министерство здравоохранения Республики Армения",
      "role": "医療機器の輸入許可証発行。医療機器規制の最上位監督機関。",
      "url": "https://www.moh.am/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "政府直接審査（輸入許可制） + EAEU認定試験機関",
    "description": "アルメニアは独自の国内登録制度を持たないため、輸入許可証はSCDMTEの専門評価に基づきMoHが発行。EAEU統一登録ではEAEU認定試験機関による技術試験・臨床評価を経て登録。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "Law No. ZR-42 第10章: 人の疾病の予防・診断・治療・医学的リハビリテーション・健康状態のモニタリングに使用される器具・装置・機器・材料・その他の製品。主要な機能が薬理学的・免疫学的・遺伝的・代謝的相互作用によって達成されないもの。",
    "scope": "医療機器・IVD・付属品・ソフトウェアが対象。",
    "notes": "EAEU Collegium Decision 173/2015の定義とも整合。IVDは「ヒト生体試料のin vitro試験に使用される製品」として別途定義。"
  },
  "primaryLaw": {
    "title": "Law of the Republic of Armenia No. ZR-42 \"On Medical Assistance and Healthcare Services to the Population\"",
    "originalTitle": "Закон РА «Об оказании медицинской помощи и обслуживании населения»",
    "enacted": "1996-04-04",
    "lastAmended": "2025-11（ZR-338）",
    "url": "https://cis-legislation.com/document.fwx?rgn=3059",
    "description": "1996年4月4日制定（国民議会1996年3月4日採択）。第10章が医療機器の流通を規定。医療機器の定義・輸入・販売・使用を規制。2025年11月（ZR-338）まで複数回改正。EAEU規制との整合性確保のための改正が進行中。"
  },
  "implementingRegulations": [
    {
      "title": "GD 429-N/2023 — 医療機器輸入手続および必要書類リスト",
      "date": "2023-03-30",
      "url": "https://www.arlis.am/DocumentView.aspx?docid=198554",
      "description": "2023年3月30日制定、2023年7月1日施行。アルメニア領土への医療機器輸入手続および輸入目的の専門評価に必要な書類リストを規定。Single Window電子申請。登録済み機器は5営業日、未登録機器は9営業日で処理。中古機器の輸入は原則禁止。",
      "category": "輸入手続"
    },
    {
      "title": "GD 1795-N/2022 — 医療機器流通の国家規制における専門評価・監査",
      "date": "2022-11-24",
      "url": "https://www.pharm.am/index.php/en/aboutus",
      "description": "2022年11月24日制定。SCDMTEに医療機器流通分野の専門評価・専門監査の権限を委任。2024年7月18日にGD 1096-N/2024で改正。",
      "category": "組織・権限"
    },
    {
      "title": "EEC Council Decision No. 46/2016 — EAEU医療機器登録・安全性有効性評価規則",
      "date": "2016-02-12",
      "url": "https://eec.eaeunion.org/comission/department/deptexreg/formirovanie-obshchikh-rynkov/akty-v-sfere-obrashcheniya-meditsinskikh-izdeliy.php",
      "description": "EAEU域内の医療機器統一登録手続・安全性有効性評価規則。2021年（Decision 144）、2022年（Decision 84）、2023年（Decision 50）、2025年（Decision 50）で改正。",
      "category": "EAEU統一登録"
    },
    {
      "title": "EEC Collegium Decision No. 173/2015 — 医療機器リスク分類規則",
      "date": "2015-12-22",
      "url": "https://eec.eaeunion.org/en/news/aktualizirovany-pravila-klassifikatsii-meditsinskikh-izdeliy-v-zavisimosti-ot-potentsialnogo-riska-p/",
      "description": "EAEU域内の医療機器リスクベース分類規則。4クラス制（1/2a/2b/3）。2023年（Decision 65）、2025年（Decision 18）で改正。",
      "category": "分類"
    }
  ],
  "relatedLaws": [
    {
      "title": "EAEU Treaty (2014) — ユーラシア経済連合条約",
      "category": "地域経済統合",
      "enacted": "2014",
      "url": "https://eec.eaeunion.org/comission/department/dtp/",
      "relevance": "アルメニアは2015年1月2日よりEAEU正式加盟。医療機器の統一規制がEAEU域内で適用。"
    },
    {
      "title": "EAEU Agreement on Unified Principles and Rules for Medical Devices Circulation",
      "category": "医療機器統一規制",
      "enacted": "2014-12-23",
      "url": "https://eec.eaeunion.org/en/news/prodlena-vozmozhnost-registratsii-meditsinskikh-izdeliy-po-natsionalnym-pravilam/",
      "relevance": "EAEU医療機器統一規制の枠組み協定。アルメニアは2015年12月に批准。2021年・2022年・2023年に改正議定書署名。"
    },
    {
      "title": "Law of the Republic of Armenia \"On Medicinal Products\" (2016)",
      "category": "医薬品法",
      "enacted": "2016-05-17",
      "url": "https://www.pharm.am/attachments/article/4871/Law%20on%20Medicines_ENG_%2027.06.2017.pdf",
      "relevance": "医薬品法。SCDMTEの組織基盤を規定。医療機器と医薬品の境界製品の規制に関連。"
    }
  ],
  "classification": {
    "system": "EAEU整合 4クラス制（1/2a/2b/3）",
    "basis": "EEC Collegium Decision 173/2015に基づくリスクベース分類。使用目的・侵襲性・接触期間・技術に基づく。IMDRF/GHTFモデルとも整合。2023年（Decision 65）・2025年（Decision 18）で改正済み。",
    "classes": [
      {
        "name": "Class 1",
        "nameJa": "クラス1",
        "riskLevel": "低",
        "description": "低リスク。非侵襲・短期接触。",
        "examples": ["顕微鏡", "体重計", "医療用被服", "弾性包帯", "聴診器"],
        "approvalPath": "輸入許可（国内） または EAEU統一登録"
      },
      {
        "name": "Class 2a",
        "nameJa": "クラス2a",
        "riskLevel": "中低",
        "description": "中低リスク。",
        "examples": ["コンタクトレンズ", "検査用機器", "血圧計", "補聴器", "体温計"],
        "approvalPath": "輸入許可（国内） または EAEU統一登録"
      },
      {
        "name": "Class 2b",
        "nameJa": "クラス2b",
        "riskLevel": "中高",
        "description": "中高リスク。",
        "examples": ["眼内レンズ", "X線装置", "除細動器", "人工呼吸器", "輸液ポンプ"],
        "approvalPath": "輸入許可（国内） または EAEU統一登録"
      },
      {
        "name": "Class 3",
        "nameJa": "クラス3",
        "riskLevel": "高",
        "description": "最高リスク。",
        "examples": ["人工股関節", "人工膝関節", "豊胸インプラント", "人工心臓弁", "ペースメーカー"],
        "approvalPath": "輸入許可（国内） または EAEU統一登録"
      }
    ],
    "rules": [
      "EEC Collegium Decision 173/2015に基づくリスクベース分類",
      "2025-12-31まで国内規則で運用可、2026-01-01以降EAEU統一登録に完全移行予定"
    ],
    "totalProductCodes": null
  },
  "conformityAssessment": {
    "overview": "二本立ての制度: (A) 国内輸入許可制（MoH/SCDMTE、GD 429-N/2023に基づく）、(B) EAEU統一登録（無期限有効、EAEU全5カ国で有効）。アルメニアは独自の国内登録制度を持たず、輸入許可制で運用中。2025年12月31日まで国内規則による申請が可能で、2026年1月1日以降はEAEU統一登録に一本化予定。",
    "routes": [
      {
        "name": "National Import Permit (MoH/SCDMTE)",
        "nameJa": "国内輸入許可",
        "applicableClasses": ["Class 1", "Class 2a", "Class 2b", "Class 3"],
        "description": "GD 429-N/2023に基づく輸入許可制。SCDMTEが専門評価を実施し、MoHが輸入許可証（適合証明書）を発行。Single Window電子申請。登録済み機器は最大5営業日、未登録機器は最大9営業日で処理。品質適合証明書・臨床試験承認・国際登録証拠等の書類提出が必要。",
        "subtypes": [],
        "avgReviewTime": "登録済み機器: 最大5営業日、未登録機器: 最大9営業日（GD 429-N/2023）",
        "avgReviewTimeSource": "https://www.arlis.am/DocumentView.aspx?docid=198554",
        "fee": "要確認（公式情報で裏付け未取得）",
        "feeSource": "https://www.pharm.am/index.php/en/decrees/7856-decree-of-the-government-of-the-republic-of-armenia-n-429-n-of-march-30-2023-n-adopting-the-rule-on-importation-into-the-territory-of-the-republic-of-armenia-of-the-medical-devices-and-the-list-of-necessary-documents-for-the-assessment-carried-out-for-the",
        "url": "https://www.pharm.am/index.php/en/decrees/7856-decree-of-the-government-of-the-republic-of-armenia-n-429-n-of-march-30-2023-n-adopting-the-rule-on-importation-into-the-territory-of-the-republic-of-armenia-of-the-medical-devices-and-the-list-of-necessary-documents-for-the-assessment-carried-out-for-the"
      },
      {
        "name": "EAEU Unified Registration",
        "nameJa": "EAEU統一登録",
        "applicableClasses": ["Class 1", "Class 2a", "Class 2b", "Class 3"],
        "description": "EAEU統一登録制度。無期限有効。EAEU加盟5カ国（ロシア・ベラルーシ・カザフスタン・アルメニア・キルギス）全域で有効。参照国を選定し、少なくとも1カ国を追加で関与させる。EAEU認定試験機関による技術試験・臨床評価を経て登録。GOST ISO 13485準拠のQMSが必要。Class 2a/2b/3は製造所査察が必要（最大90日追加）。",
        "subtypes": [],
        "avgReviewTime": "約12〜24ヶ月（クラスによる。製造所査察で最大90日追加）",
        "avgReviewTimeSource": "http://www.thema-med.com/en/34103-2/",
        "fee": "要確認（公式情報で裏付け未取得）",
        "feeSource": "https://eec.eaeunion.org/en/news/v-eaes-aktualizirovany-pravila-registratsii-meditsinskikh-izdeliy/",
        "url": "https://eec.eaeunion.org/en/news/prinyaty-rekomendatsii-po-registratsii-meditsinskikh-izdeliy-v-eaes-/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "Single Window（統合電子貿易システム）+ EAEU統一情報システム",
    "url": "https://www.arlis.am/DocumentView.aspx?docid=198554",
    "description": "国内輸入許可はSingle Window電子貿易システムで申請（GD 429-N/2023）。カラーPDFでの書類提出が必要。EAEU統一登録はEAEUプラットフォーム（EEC運営）で電子申請。",
    "mandatory": true
  },
  "udi": {
    "required": false,
    "system": "EAEU統一トレーサビリティシステム（計画中）",
    "description": "アルメニア独自のUDI制度は未導入。EAEU域内のトレーサビリティシステム整備に伴い、将来的にUDI要件が適用される見込み。現時点ではUDI義務化は未実施。",
    "url": "https://eec.eaeunion.org/en/news/v-eaes-vedetsya-aktualizatsiya-pravovoy-sistemy-regulirovaniya-obrashcheniya-meditsinskikh-izdeliy/",
    "timeline": "EAEU統一登録完全移行（2026年以降）に合わせて導入予定"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "SCDMTE 市販後安全監視",
      "mandatory": true,
      "url": "https://www.groveonline.com/country/pv-services-in-armenia.php",
      "description": "SCDMTEが市販後安全監視を管轄。有害事象・不具合の報告義務。EAEU統一登録機器はEEC Collegium Decision 174/2015に基づくEAEU安全性モニタリングシステムにも連携。オンライン副作用報告システムあり。"
    },
    "recalls": {
      "authority": "MoH / SCDMTE",
      "description": "MoHが市場安全措置・リコールの権限を持つ。EEC Council Decision 141/2016に基づき、危険な機器の適用停止・禁止措置が可能。",
      "url": "https://www.pharm.am/index.php/en/contacts"
    },
    "surveillance": "EEC Collegium Decision 174/2015に基づくEAEU域内の安全性モニタリング制度。SCDMTEが国内のファーマコビジランス・マテリオビジランスを担当。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "MoH / SCDMTE",
    "name": "Certificate of Free Sale",
    "description": "MoH/SCDMTEが輸入許可済み製品のCFSを発行。",
    "processingTime": "要確認（公式情報で裏付け未取得）",
    "url": "https://www.pharm.am/index.php/en/contacts"
  },
  "reimbursement": {
    "system": "国家基本給付プログラム（BBP） → 2026年1月より普遍的健康保険制度に移行",
    "authority": "保健省（State Health Agency）→ 2026年以降は健康保険基金",
    "description": "従来はState Health Agency（SHA）が国家基本給付プログラム（BBP）に基づき医療サービスを購入・提供。2025年12月に国民議会が普遍的健康保険法を採択し、2026年1月1日から段階的に普遍的健康保険制度が導入。医療機器は手技・入院費に含まれる形で間接的にカバー。個別の医療機器償還リストは未確認。",
    "codingSystems": [],
    "url": "https://www.primeminister.am/en/press-release/item/2025/12/25/Cabinet-meeting/"
  },
  "marketingRules": {
    "authority": "MoH / SCDMTE / 保健・労働監査機関",
    "description": "アルメニア語ラベリング必須（ロシア語併記が一般的）。広告はアルメニア語を主体とし、外国語は副次的・小さい文字でのみ使用可。医療機器の広告は正確・客観的・科学的根拠に基づくことが必要。保健・労働監査機関が広告規制の遵守を監視。",
    "keyRules": [
      "アルメニア語ラベリング必須（ロシア語併記が一般的）",
      "使用説明書のアルメニア語/ロシア語/英語での提出",
      "広告はアルメニア語を主体とすること",
      "未登録製品の広告は禁止",
      "虚偽広告には罰金（200,000〜400,000 AMD）または最大2ヶ月の拘禁",
      "EAEU統一登録機器はEAEU表示要件（EEC Council Decision 27/2016）にも準拠"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "MDSAP非参加。EAEU独自のQMS監査制度（EEC Council Decision 106/2017）を適用。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "QMS証拠として参照。EAEU統一登録ではGOST ISO 13485:2017として要求。"
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
      "EAEU Collegium Recommendation 16-17/2017に基づく自主安全性適合規格リスト",
      "非EAEU製造者はEAEU域内に認定代理人（Authorized Representative）の指定が必要"
    ]
  },
  "recentDevelopments": [
    {
      "date": "2022-11-24",
      "title": "GD 1795-N: SCDMTEに医療機器規制権限を委任",
      "description": "政府決定1795-Nにより、医療機器流通の国家規制における専門評価・専門監査の権限をSCDMTE（医薬品・医療技術専門センター）に正式委任。"
    },
    {
      "date": "2023-03-30",
      "title": "GD 429-N: 医療機器輸入手続の制定",
      "description": "アルメニア領土への医療機器輸入手続および必要書類リストを制定。2023年7月1日施行。Single Window電子申請を導入。"
    },
    {
      "date": "2023-02-13",
      "title": "EAEU国内規則による登録期限を2025年末まで延長",
      "description": "EAEU改正議定書署名。加盟国が国内規則に基づく医療機器申請を2025年12月31日まで継続可能に。当初の2022年末期限から延長。2026年1月1日以降はEAEU統一登録に完全移行予定。"
    },
    {
      "date": "2024-07-18",
      "title": "GD 1096-N: GD 1795-Nの改正",
      "description": "政府決定1096-Nにより、GD 1795-N（2022年）の内容を改正。SCDMTEの医療機器規制権限に関する規定を更新。"
    },
    {
      "date": "2025-12-25",
      "title": "普遍的健康保険制度の導入決定",
      "description": "アルメニア政府が2026年1月1日からの普遍的健康保険制度導入に関する複数の決定を採択。医療サービス・医薬品の償還手続を規定。医療機器の償還にも間接的に影響。"
    }
  ],
  "lastUpdated": "2026-04-06",
  "verified": null
};
