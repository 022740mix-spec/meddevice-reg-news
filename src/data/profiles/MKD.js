// 北マケドニア (North Macedonia)
export default {
  "code": "MKD",
  "country": "北マケドニア",
  "countryEn": "North Macedonia",
  "region": "Europe",
  "flag": "🇲🇰",
  "legalSystemOverview": {
    "type": "EU候補国（EU MDD整合・MDR移行未完了）",
    "description": "北マケドニアはEU候補国（2022年交渉開始段階）。MALMEDがNCA。薬事・医療機器法（2007年）がEU MDD 93/42/EECに整合。CEマーキングを法定義務化し、EU NB発行のCE証明書を認識。EU MDR 2017/745への完全移行は未完了。EU Twinningプロジェクトで新・医療機器法（MDR整合）を策定中。",
    "keyCharacteristics": [
      "MALMED がNCA（2014年設立）",
      "薬事・医療機器法（2007年、21回改正）が基本法",
      "EU MDD整合の4クラス制（Class I/IIa/IIb/III）",
      "CEマーキング必須（EU NB証明書を認識）",
      "2018年より統合情報システムで電子申請",
      "マケドニア語ラベリング必須",
      "新・医療機器法（MDR整合）を策定中",
      "EU加盟交渉: 憲法改正問題で進展停滞"
    ]
  },
  "authorities": [
    {
      "name": "MALMED",
      "fullName": "Agency for Medicines and Medical Devices of the Republic of North Macedonia",
      "localName": "Агенција за лекови и медицински средства на Република Северна Македонија",
      "role": "NCA: 医療機器の登録簿管理・製造販売承認・臨床試験承認・マテリオビジランス・広告規制",
      "url": "https://malmed.gov.mk/",
      "isPrimary": true
    },
    {
      "name": "FZO",
      "fullName": "Health Insurance Fund of the Republic of North Macedonia",
      "localName": "Фонд за здравствено осигурување на Република Северна Македонија",
      "role": "健康保険基金。整形外科用医療機器等の償還管理。",
      "url": "https://fzo.org.mk/en",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "EU NB証明書を認識（国内NB体制は限定的）",
    "description": "CEマーキングが法定義務。EU公認Notified Bodyが発行したCE証明書を認識。適合性評価機関の国内要件は官報No. 143/10で規定。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "薬事・医療機器法（2007年）に基づく。EU MDD定義と整合。",
    "scope": "IVD・AIMD（能動植込み型）も対象。",
    "notes": "EU Twinningプロジェクトで薬事法と医療機器法の分離を策定中。"
  },
  "primaryLaw": {
    "title": "Zakon za lekovite i medicinskite sredstva",
    "originalTitle": "Закон за лековите и медицинските средства",
    "enacted": "2007",
    "lastAmended": "2025",
    "url": "https://malmed.gov.mk/%D0%B7%D0%B0%D0%BA%D0%BE%D0%BD%D0%B8/",
    "description": "2007年制定（官報No. 106/07）。2025年に最新改正（官報No. 267/25）。合計21回改正。医薬品と医療機器を単一法で規制。EU MDD 93/42/EECに整合。"
  },
  "implementingRegulations": [
    {
      "title": "Правилник за класифицирање на медицинските помагала（医療機器分類規則）",
      "date": "2008",
      "url": "https://malmed.gov.mk/%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D0%BD%D0%B8%D1%86%D0%B8-%D0%B7%D0%B0-%D0%BC%D0%B5%D0%B4%D0%B8%D1%86%D0%B8%D0%BD%D1%81%D0%BA%D0%B8-%D1%81%D1%80%D0%B5%D0%B4%D1%81%D1%82%D0%B2%D0%B0/",
      "description": "官報No. 125/08。医療機器の分類条件・方法を規定。EU MDDベース。",
      "category": "分類規則"
    },
    {
      "title": "Правилник за известување на несаканите ефекти（有害事象報告規則）",
      "date": "2016",
      "url": "https://malmed.gov.mk/%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D0%BD%D0%B8%D1%86%D0%B8-%D0%B7%D0%B0-%D0%BC%D0%B5%D0%B4%D0%B8%D1%86%D0%B8%D0%BD%D1%81%D0%BA%D0%B8-%D1%81%D1%80%D0%B5%D0%B4%D1%81%D1%82%D0%B2%D0%B0/",
      "description": "官報No. 100/16。マテリオビジランス報告手続を規定。",
      "category": "ビジランス"
    }
  ],
  "relatedLaws": [
    {
      "title": "GDPR整合 — 個人データ保護法",
      "category": "データ保護",
      "enacted": "2020",
      "url": "https://malmed.gov.mk/",
      "relevance": "EU GDPR整合。健康データ処理に適用。"
    }
  ],
  "classification": {
    "system": "EU MDD整合 4クラス制",
    "basis": "EU MDD 93/42/EEC Annex IXベースの分類規則（官報No. 125/08）。EU MDR 2017/745への移行は未完了。",
    "classes": [
      {
        "name": "Class I",
        "nameJa": "クラスI",
        "riskLevel": "低",
        "description": "低リスク。自己宣言（Is/Im/IrはNB関与）。",
        "examples": ["弾性包帯", "聴診器", "車椅子", "非滅菌手袋", "冷却パック"],
        "approvalPath": "MALMED登録（Form No. 1）"
      },
      {
        "name": "Class IIa",
        "nameJa": "クラスIIa",
        "riskLevel": "中低",
        "description": "中低リスク。NB関与（CE証明書）。",
        "examples": ["補聴器", "超音波診断装置", "吸引カテーテル", "血圧計", "歯科用充填材"],
        "approvalPath": "MALMED登録（Form No. 2）"
      },
      {
        "name": "Class IIb",
        "nameJa": "クラスIIb",
        "riskLevel": "中高",
        "description": "中高リスク。NB詳細審査。",
        "examples": ["人工呼吸器", "輸液ポンプ", "X線装置", "血液透析装置", "骨接合プレート"],
        "approvalPath": "MALMED登録（Form No. 2）"
      },
      {
        "name": "Class III",
        "nameJa": "クラスIII",
        "riskLevel": "高",
        "description": "最高リスク。NB最も厳格な審査。",
        "examples": ["人工心臓弁", "冠動脈ステント", "人工股関節", "植込み型除細動器", "吸収性縫合糸"],
        "approvalPath": "MALMED登録（Form No. 2）"
      }
    ],
    "rules": ["EU MDD Annex IXベースの分類規則（官報No. 125/08）"],
    "totalProductCodes": null
  },
  "conformityAssessment": {
    "overview": "CEマーキングが法定義務。EU NB発行のCE証明書に基づきMALMEDが登録。クラス別申請フォーム（Form 1〜4）。現地代理人必須。",
    "routes": [
      {
        "name": "MALMED Registration",
        "nameJa": "MALMED登録",
        "applicableClasses": ["Class I", "Class IIa", "Class IIb", "Class III"],
        "description": "CE証明書・ISO 13485証明書・現地代理人委任状を添えてMALMEDに申請。クラス別フォーム（Form 1: Class I、Form 2: Class IIa/IIb/III、Form 3: IVD、Form 4: AIMD）。",
        "subtypes": [],
        "avgReviewTime": "要確認（公式情報で裏付け未取得）",
        "avgReviewTimeSource": "https://malmed.gov.mk/%D0%BE%D0%B1%D1%80%D0%B0%D1%81%D1%86%D0%B8-%D0%B7%D0%B0-%D0%BC%D0%B5%D0%B4%D0%B8%D1%86%D0%B8%D0%BD%D1%81%D0%BA%D0%B8-%D1%81%D1%80%D0%B5%D0%B4%D1%81%D1%82%D0%B2%D0%B0/",
        "fee": "要確認（官報No. 166/11で規定）",
        "feeSource": "https://malmed.gov.mk/%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D0%BD%D0%B8%D1%86%D0%B8-%D0%B7%D0%B0-%D0%BC%D0%B5%D0%B4%D0%B8%D1%86%D0%B8%D0%BD%D1%81%D0%BA%D0%B8-%D1%81%D1%80%D0%B5%D0%B4%D1%81%D1%82%D0%B2%D0%B0/",
        "url": "https://malmed.gov.mk/%D0%BE%D0%B1%D1%80%D0%B0%D1%81%D1%86%D0%B8-%D0%B7%D0%B0-%D0%BC%D0%B5%D0%B4%D0%B8%D1%86%D0%B8%D0%BD%D1%81%D0%BA%D0%B8-%D1%81%D1%80%D0%B5%D0%B4%D1%81%D1%82%D0%B2%D0%B0/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "MALMED統合情報システム",
    "url": "https://malmed.gov.mk/%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D0%B8-%D0%B7%D0%B0-%D0%BC%D0%B5%D0%B4%D0%B8%D1%86%D0%B8%D0%BD%D1%81%D0%BA%D0%B8-%D1%81%D1%80%D0%B5%D0%B4%D1%81%D1%82%D0%B2%D0%B0/",
    "description": "2018年3月より統合情報システム稼働。医療機器モジュールを含む。",
    "mandatory": true
  },
  "udi": {
    "required": false,
    "system": "未導入",
    "description": "現行法にUDI規定なし。EU MDR整合後に導入見込み。",
    "url": null,
    "timeline": "新・医療機器法制定に連動（時期未定）"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "マテリオビジランス — MALMED",
      "mandatory": true,
      "url": "https://malmed.gov.mk/",
      "description": "官報No. 100/16に基づく有害事象報告。MALMEDのマテリオビジランスセクションが安全情報を管理。"
    },
    "recalls": {
      "authority": "MALMED",
      "description": "MALMEDが是正措置・リコールを管理。",
      "url": "https://malmed.gov.mk/"
    },
    "surveillance": "マテリオビジランス制度運用中。EU MDR整合でPMS/PSUR要件の導入見込み。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "MALMED（推定）",
    "name": "Certificate of Free Sale",
    "description": "MALMEDが登録済み機器のCFS発行権限を持つと推定。具体的手続きは公式サイトのフォーム一覧で要確認。",
    "processingTime": "要確認（公式情報で裏付け未取得）",
    "url": "https://malmed.gov.mk/%D0%BE%D0%B1%D1%80%D0%B0%D1%81%D1%86%D0%B8-%D0%B7%D0%B0-%D0%BC%D0%B5%D0%B4%D0%B8%D1%86%D0%B8%D0%BD%D1%81%D0%BA%D0%B8-%D1%81%D1%80%D0%B5%D0%B4%D1%81%D1%82%D0%B2%D0%B0/"
  },
  "reimbursement": {
    "system": "健康保険基金（FZO）",
    "authority": "FZO",
    "description": "FZOが整形外科用医療機器等406種類・1,210製品を償還対象。332薬局+31企業（111専門店）との契約で供給。",
    "codingSystems": ["FZO医療機器償還リスト"],
    "url": "https://fzo.org.mk/en"
  },
  "marketingRules": {
    "authority": "MALMED",
    "description": "マケドニア語ラベリング・添付文書必須（官報No. 24/09）。広告は官報No. 40/2010で規制。",
    "keyRules": [
      "マケドニア語ラベリング・添付文書必須",
      "現地代理人（Authorized Representative）必須",
      "広告: 科学的裏付けのある情報のみ"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "MDSAP非参加。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "登録要件。ISRSMがMKS EN ISO 13485として採択。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "ISRSMがMKS EN ISO 14971として採択。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "EN規格として採択。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "EN規格として採択。"
    },
    "others": ["ISRSMがISO/CEN正式メンバー。EN規格をMKS ENとして国内採択。"]
  },
  "recentDevelopments": [
    {
      "date": "2025",
      "title": "薬事・医療機器法 最新改正（官報No. 267/25）",
      "description": "EU法整合の一環。合計21回目の改正。"
    },
    {
      "date": "2024-05",
      "title": "EU加盟交渉 — Cluster 2スクリーニング報告書提出",
      "description": "内部市場（Cluster 2）のスクリーニング報告書が理事会に提出。ただし憲法改正問題で進展停滞。"
    },
    {
      "date": "2025-02",
      "title": "MALMED — 革新的治療アクセス迅速化ワークショップ",
      "description": "規制上の課題と機会を議論。EU MDR/IVDR対応が主要議題。"
    },
    {
      "date": "2024",
      "title": "新・医療機器法策定中（EU Twinning）",
      "description": "EU出資Twinningプロジェクトで現行法を薬事法と医療機器法に分離。EU MDR/IVDRへの整合を目指す。制定時期未定。"
    }
  ],
  "lastUpdated": "2026-04-03",
  "verified": null
};
