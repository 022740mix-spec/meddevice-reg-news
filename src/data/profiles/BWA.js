// ボツワナ (Botswana)
export default {
  "code": "BWA",
  "country": "ボツワナ",
  "countryEn": "Botswana",
  "region": "Middle East & Africa",
  "flag": "🇧🇼",
  "legalSystemOverview": {
    "type": "政府審査型（GHTF/IMDRF整合）",
    "description": "ボツワナではBoMRA（ボツワナ医薬品規制庁）が医療機器の登録を管轄。Medicines and Related Substances Act (Act No. 8 of 2013) が基本法。GHTF/IMDRF整合の4クラス分類（A/B/C/D）。段階的登録を実施中（優先機器2024年4月開始、Class C/D 2026年6月末、Class B 2026年4月、Class A 2026年10月）。ZaZiBoNa創設メンバー。IMDRF affiliate member（2024年9月）。GHWP member（2024年12月）。",
    "keyCharacteristics": [
      "BoMRA がNCA（2013年法で設立）",
      "Medicines and Related Substances Act No. 8 of 2013 が基本法",
      "GHTF/IMDRF整合の4クラス制（Class A/B/C/D）",
      "段階的登録義務化（2024〜2026）",
      "ZaZiBoNa（SADC共同登録）創設メンバー",
      "IMDRF affiliate member（2024-09）",
      "GHWP member（2024-12）",
      "英語ラベリング必須",
      "Medicines and Related Substances Bill 2025が議会審議中（2025年11月）"
    ]
  },
  "authorities": [
    {
      "name": "BoMRA",
      "fullName": "Botswana Medicines Regulatory Authority",
      "localName": null,
      "role": "NCA: 医療機器の登録・市販後監視・査察・輸入許可・有害事象報告受理。",
      "url": "https://www.bomra.co.bw/about-us/",
      "isPrimary": true
    }
  ],
  "notifiedBodies": {
    "system": "政府直接審査（NB制度なし）",
    "description": "BoMRAが直接審査。第三者認証機関制度は存在しない。参照当局（reference authority）承認に基づくAbridged Assessment路線あり。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "Medicines and Related Substances Act (Act No. 8 of 2013): 人の疾病・障害の診断・治療・予防等に使用される器具・装置・構成部品。IVDを含む。",
    "scope": "医療機器・IVD・体外診断試薬が対象。",
    "notes": "2025年の新法案（Medicines and Related Substances Bill 2025）で定義の更新が予定されている。"
  },
  "primaryLaw": {
    "title": "Medicines and Related Substances Act, 2013 (Act No. 8 of 2013)",
    "originalTitle": "Medicines and Related Substances Act",
    "enacted": "2013",
    "lastAmended": "要確認",
    "url": "https://faolex.fao.org/docs/pdf/bot195236.pdf",
    "description": "2013年制定、2016〜2017年施行。BoMRAを設立し、医薬品・医療機器・IVD・関連物質の規制を規定。"
  },
  "implementingRegulations": [
    {
      "title": "Medical Devices Registration Guidelines",
      "date": "2024",
      "url": "https://www.bomra.co.bw/medical-devices/",
      "description": "医療機器登録ガイドライン。段階的登録スケジュール・提出要件を規定。",
      "category": "登録ガイドライン"
    },
    {
      "title": "Medicines and Related Substances Bill, 2025",
      "date": "2025-11",
      "url": "https://www.parliament.gov.bw/index.php/parliamentary-business/bills",
      "description": "2025年11月議会提出の新法案。現行Act No. 8 of 2013の改正・置換を目指す。",
      "category": "法改正（審議中）"
    }
  ],
  "relatedLaws": [
    {
      "title": "ZaZiBoNa Collaborative Registration Procedure",
      "category": "地域協力",
      "enacted": "2013",
      "url": "https://www.zazibona.org/about",
      "relevance": "SADC域内の共同審査手続。ボツワナ・ザンビア・ジンバブエ・ナミビアが創設メンバー。医療機器は今後拡大予定。"
    }
  ],
  "classification": {
    "system": "GHTF/IMDRF整合 4クラス制（Class A/B/C/D）",
    "basis": "GHTF SG1/N77モデルに基づくリスクベース分類。使用目的・侵襲性・接触期間・技術に基づく。BoMRAが分類ガイドラインを適用。",
    "classes": [
      {
        "name": "Class A",
        "nameJa": "クラスA",
        "riskLevel": "低",
        "description": "低リスク。非侵襲・短期接触。登録期限: 2026年10月。",
        "examples": ["弾性包帯", "聴診器", "舌圧子", "手動車椅子", "再使用可能手術器具"],
        "approvalPath": "Screening/Notification"
      },
      {
        "name": "Class B",
        "nameJa": "クラスB",
        "riskLevel": "中低",
        "description": "中低リスク。登録期限: 2026年4月。",
        "examples": ["皮下注射針", "吸引器具", "電動車椅子", "補聴器", "血圧計"],
        "approvalPath": "Abridged Assessment または Full Assessment"
      },
      {
        "name": "Class C",
        "nameJa": "クラスC",
        "riskLevel": "中高",
        "description": "中高リスク。登録期限: 2026年6月30日。",
        "examples": ["人工呼吸器", "骨固定プレート", "血液透析装置", "輸液ポンプ", "コンタクトレンズ"],
        "approvalPath": "Abridged Assessment または Full Assessment"
      },
      {
        "name": "Class D",
        "nameJa": "クラスD",
        "riskLevel": "高",
        "description": "最高リスク。登録期限: 2026年6月30日。",
        "examples": ["人工心臓弁", "植込み型除細動器", "ペースメーカー", "冠動脈ステント", "人工股関節"],
        "approvalPath": "Full Assessment"
      }
    ],
    "rules": [
      "GHTF SG1/N77モデルに基づくリスクベース分類ルール",
      "段階的登録: 優先機器（2024-04）→ Class C/D（2026-06-30）→ Class B（2026-04）→ Class A（2026-10）"
    ],
    "totalProductCodes": null
  },
  "conformityAssessment": {
    "overview": "BoMRAによる登録制度。3つの審査路線: Screening/Notification（Class A）、Abridged Assessment（参照当局承認済み）、Full Assessment。GMDN採用。GS1 UDIを登録要件として採用。CFS（WHO型）が申請要件。",
    "routes": [
      {
        "name": "Screening / Notification",
        "nameJa": "スクリーニング/届出",
        "applicableClasses": ["Class A"],
        "description": "低リスク機器（Class A）向けの簡易登録路線。基本的な書類審査。",
        "subtypes": [],
        "avgReviewTime": "要確認（公式情報で裏付け未取得）",
        "avgReviewTimeSource": "https://www.bomra.co.bw/medical-devices/",
        "fee": "要確認（公式情報で裏付け未取得）",
        "feeSource": "https://www.bomra.co.bw/registration/",
        "url": "https://www.bomra.co.bw/registration/"
      },
      {
        "name": "Abridged Assessment",
        "nameJa": "簡略審査",
        "applicableClasses": ["Class B", "Class C", "Class D"],
        "description": "参照当局（reference authority: FDA、CE NB、TGA、PMDA等）で承認済みの機器に適用。審査書類の一部省略が可能。",
        "subtypes": [],
        "avgReviewTime": "要確認（公式情報で裏付け未取得）",
        "avgReviewTimeSource": "https://www.bomra.co.bw/guidelines/",
        "fee": "要確認（公式情報で裏付け未取得）",
        "feeSource": "https://www.bomra.co.bw/forms/",
        "url": "https://www.bomra.co.bw/guidelines/"
      },
      {
        "name": "Full Assessment",
        "nameJa": "完全審査",
        "applicableClasses": ["Class B", "Class C", "Class D"],
        "description": "参照当局承認なしの機器に適用。全書類の完全審査。ISO 13485 QMS証拠・臨床評価・リスク分析等を含む。",
        "subtypes": [],
        "avgReviewTime": "要確認（公式情報で裏付け未取得）",
        "avgReviewTimeSource": "https://faolex.fao.org/docs/pdf/bot195236.pdf",
        "fee": "要確認（公式情報で裏付け未取得）",
        "feeSource": "https://www.bomra.co.bw/news/",
        "url": "https://www.bomra.co.bw/contact-us/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "BoMRA電子申請ポータル",
    "url": "https://www.bomra.co.bw/forms/",
    "description": "BoMRAのオンライン登録ポータルで申請受付。医療機器登録申請をオンラインで提出。",
    "mandatory": true
  },
  "udi": {
    "required": true,
    "system": "GMDN / GS1 UDI",
    "description": "GMDN（Global Medical Device Nomenclature）およびGS1 UDIを登録要件として採用。申請時にGMDNコードおよびUDI情報の提出が求められる。",
    "url": "https://www.bomra.co.bw/news/",
    "timeline": "登録要件として導入済み"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "BoMRA PMS",
      "mandatory": true,
      "url": "https://bomra.co.bw/postmarketing-surveillance/",
      "description": "BoMRAが市販後監視を管轄。有害事象・不具合の報告義務。製造業者・輸入業者は報告義務あり。"
    },
    "recalls": {
      "authority": "BoMRA",
      "description": "BoMRAがリコール指示権限を持つ。市場安全措置を実施。",
      "url": "https://www.bomra.co.bw/safety-alerts/"
    },
    "surveillance": "能動・受動両方の監視手法。市販後監視ガイドラインに基づく。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "BoMRA",
    "name": "Certificate of Free Sale",
    "description": "BoMRAが登録済み製品のCFSを発行。輸入時はWHO型の品質/自由販売証明が申請要件。",
    "processingTime": "要確認（公式情報で裏付け未取得）",
    "url": "https://www.bomra.co.bw/contact-us/"
  },
  "reimbursement": {
    "system": "公的医療サービス",
    "authority": "Ministry of Health（保健省）",
    "description": "ボツワナは公的医療施設での医療サービスを政府予算で提供。独立した医療機器償還リストは未確認。公的調達は中央医薬品調達（CMS）を通じて実施。",
    "codingSystems": [],
    "url": "https://www.gov.bw/health"
  },
  "marketingRules": {
    "authority": "BoMRA",
    "description": "英語ラベリング必須。BoMRAが表示・使用説明書の要件を規定。",
    "keyRules": [
      "英語ラベリング・IFU必須",
      "BoMRA登録番号の表示",
      "広告・販促資料の規制"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "MDSAP非参加。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "登録申請でQMS証拠として要求。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "リスクマネジメントとして参照。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "ソフトウェアライフサイクル。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "電気医療機器安全。"
    },
    "others": [
      "ZaZiBoNa（SADC共同登録手続）創設メンバー",
      "IMDRF affiliate member（2024-09）",
      "GHWP member（2024-12）",
      "GHTF/IMDRF Essential Principlesに基づく安全性・性能要件"
    ]
  },
  "recentDevelopments": [
    {
      "date": "2024-04",
      "title": "医療機器段階的登録開始（優先機器）",
      "description": "BoMRAが医療機器の段階的登録を開始。優先機器（Priority devices）から登録受付を開始。"
    },
    {
      "date": "2024-09",
      "title": "IMDRF affiliate member加盟",
      "description": "BoMRAがIMDRF（International Medical Device Regulators Forum）のaffiliate memberとして加盟。国際規制協調への参画を強化。"
    },
    {
      "date": "2024-12",
      "title": "GHWP member加盟",
      "description": "BoMRAがGHWP（Global Harmonization Working Party）のメンバーとして加盟。"
    },
    {
      "date": "2025-11",
      "title": "Medicines and Related Substances Bill 2025 議会提出",
      "description": "現行Act No. 8 of 2013の改正・置換を目指す新法案が議会に提出。医療機器規制の法的基盤強化が期待される。"
    }
  ],
  "lastUpdated": "2026-04-03",
  "verified": null
};
