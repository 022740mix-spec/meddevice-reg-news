// トリニダード・トバゴ (Trinidad and Tobago)
export default {
  "code": "TTO",
  "country": "トリニダード・トバゴ",
  "countryEn": "Trinidad and Tobago",
  "region": "Latam",
  "flag": "🇹🇹",
  "legalSystemOverview": {
    "type": "発展途上（Food and Drugs Act ベース・簡易承認）",
    "description": "トリニダード・トバゴではCFDD（化学・食品・薬品部門）が医療機器を管轄。Food and Drugs Act (1960) が基本法。リスクベース分類制度はなく、CFS + サンプル + ラベル検査による簡易的な「No Objection」レター取得が市場参入の主要プロセス。CARICOM/CARPHA本部所在国だがCRSは医薬品のみ対象。国内医療機器製造なし（100%輸入依存）。",
    "keyCharacteristics": [
      "CFDD（保健省内）がNCA",
      "Food and Drugs Act (1960, Ch. 30:01) が基本法",
      "リスクベース分類制度なし",
      "「No Objection」レター取得が市場参入プロセス",
      "CFS + サンプル + ラベル検査（TT$30）の簡易手続",
      "CARPHA/CRS本部所在国（CRSは医薬品のみ対象）",
      "英語ラベリング",
      "国内医療機器製造なし（100%輸入依存）",
      "UDI・PMS・電子申請は未導入"
    ]
  },
  "authorities": [
    {
      "name": "CFDD",
      "fullName": "Chemistry, Food and Drugs Division",
      "localName": null,
      "role": "NCA: 食品・医薬品・化粧品・医療機器の規制。ラベル検査・輸入管理・No Objectionレター発行。保健省内。",
      "url": "https://health.gov.tt/services/chemistry-food-and-drugs-division",
      "isPrimary": true
    },
    {
      "name": "NIPDEC",
      "fullName": "National Insurance Property Development Company",
      "localName": null,
      "role": "公的医療機関向け医薬品・医療資材のサプライチェーン管理（調達・保管・配送）。1993年〜。",
      "url": "https://nipdec.com/pharmaceutical/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "政府直接審査（NB制度なし）",
    "description": "CFDDが直接審査。第三者認証機関制度なし。Drug Advisory Committee審査は医薬品のみ、医療機器は対象外。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "Food and Drugs Act Section 2: 「人または動物の疾病の診断・治療・緩和・予防のために製造・販売・表示される器具・装置・器材（構成部品・部品・附属品を含む）」。",
    "scope": "IVDを含む。食品・医薬品・化粧品と同一法で規制。",
    "notes": "Act 7 of 1960制定。2005年最終改正（Act 6 of 2005）。医療機器専用の詳細規制は未整備。"
  },
  "primaryLaw": {
    "title": "Food and Drugs Act, Chapter 30:01",
    "originalTitle": "An Act respecting food and drugs",
    "enacted": "1960",
    "lastAmended": "2005",
    "url": "https://rgd.legalaffairs.gov.tt/laws2/alphabetical_list/lawspdfs/30.01.pdf",
    "description": "1960年制定（Act 7 of 1960）、1965年1月1日施行。食品・医薬品・化粧品・医療機器の製造・販売・輸入・ラベリングを規制。有害機器の販売禁止、誤解を招く行為の禁止条項あり。"
  },
  "implementingRegulations": [
    {
      "title": "Food and Drugs Regulations (Cap. 30:01)",
      "date": "1964",
      "url": "https://faolex.fao.org/docs/pdf/tri126346.pdf",
      "description": "Food and Drugs Actの実施規則。Division 3でDrug Registration Unitの手続を規定。",
      "category": "施行規則"
    }
  ],
  "relatedLaws": [
    {
      "title": "CARPHA Caribbean Regulatory System (CRS)",
      "category": "地域規制協力",
      "enacted": "2014",
      "url": "https://carpha.org/What-We-Do/CRS/Caribbean-Regulatory-System",
      "relevance": "CARICOM地域の規制協力。現時点で医薬品・ワクチンのみ対象。医療機器は将来的な拡大課題。CARPHA本部はトリニダード・トバゴ。"
    }
  ],
  "classification": {
    "system": "分類制度なし（簡易ラベル検査ベース）",
    "basis": "リスクベース分類（Class I/II/III等）は未導入。CFS + ラベル検査による簡易承認。",
    "classes": [
      {
        "name": "All Devices",
        "nameJa": "全機器（分類なし）",
        "riskLevel": "未分類",
        "description": "リスク分類なし。全機器が同一の「No Objection」レター取得プロセス。",
        "examples": ["弾性包帯", "聴診器", "血圧計", "人工呼吸器", "心臓ペースメーカー"],
        "approvalPath": "CFDD「No Objection」レター"
      }
    ],
    "rules": ["リスクベース分類規則なし"],
    "totalProductCodes": null
  },
  "conformityAssessment": {
    "overview": "CFDDに「No Objection」レターを申請。CFS（原本・英語）・製品サンプル1点・COA・製品モノグラフ・ラベル検査料TT$30を提出。Drug Advisory Committee審査は不要（医薬品とは異なる簡易プロセス）。",
    "routes": [
      {
        "name": "No Objection Letter",
        "nameJa": "No Objectionレター取得",
        "applicableClasses": ["All Devices"],
        "description": "CFS（製造国規制当局発行・原本・英語）・製品サンプル・COA・製品モノグラフを提出。CFDDがFood and Drugs Act準拠を確認しNo Objectionレターを発行。ラベル検査料TT$30。",
        "subtypes": [],
        "avgReviewTime": "要確認（公式情報で裏付け未取得）",
        "avgReviewTimeSource": "https://health.gov.tt/services/chemistry-food-and-drugs-division",
        "fee": "ラベル検査料 TT$30",
        "feeSource": "https://www.trade.gov/country-commercial-guides/trinidad-and-tobago-medical-equipment",
        "url": "https://health.gov.tt/cfdd/portal"
      }
    ]
  },
  "electronicSubmission": {
    "system": "紙ベース申請（専用電子ポータルなし）",
    "url": "https://health.gov.tt/cfdd/portal",
    "description": "医療機器専用の電子申請プラットフォームは未確認。CFDDポータルから申請フォームにアクセス可能。Regulated Medicines and Substances Portalは医薬品データベースのみ。",
    "mandatory": false
  },
  "udi": {
    "required": false,
    "system": "未導入",
    "description": "UDI制度は未導入。",
    "url": null,
    "timeline": "未定"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "Adverse Events Policy — Ministry of Health",
      "mandatory": true,
      "url": "https://health.gov.tt/services/chemistry-food-and-drugs-division",
      "description": "2011年にAdverse Events Policyを策定（WHO確認）。全有害事象はNational databaseへの報告義務。医療機器に特化したPMS制度は未確認。No Objection statusは安全性データに基づき変更可能。"
    },
    "recalls": {
      "authority": "CFDD",
      "description": "No Objection statusの変更により実質的なリコール機能。専用リコール制度の公開情報は未確認。",
      "url": "https://health.gov.tt/cfdd/portal"
    },
    "surveillance": "医療機器に特化した市販後監視制度は未整備。"
  },
  "certificateOfFreeSale": {
    "available": false,
    "issuingAuthority": null,
    "name": null,
    "description": "国内医療機器製造がないため輸出用CFS発行需要なし。輸入時はCFS提出必須（原本・英語）。",
    "processingTime": null,
    "url": null
  },
  "reimbursement": {
    "system": "公的医療（中央政府予算）+ NIPDEC調達",
    "authority": "Ministry of Health / NIPDEC",
    "description": "公的医療は中央政府予算で賄われ、5つのRegional Health Authoritiesが管理。公立医療機関での診療・医療機器使用は基本無料。NIPDECが公的医療機関向け医薬品・医療資材の調達を一元管理。Health Surcharge（健康負担金）を全納税者から徴収。医療機器固有の償還コード体系は未確認。",
    "codingSystems": [],
    "url": "https://nipdec.com/pharmaceutical/"
  },
  "marketingRules": {
    "authority": "CFDD",
    "description": "英語ラベリング。二言語表記（英語+他言語）も許容。製造者名・住所（国名含む）の記載が必要。",
    "keyRules": [
      "英語ラベリング必須",
      "製造者名・住所（国名含む）記載",
      "二言語表記も許容"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "MDSAP非参加。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "TTBS（Trinidad and Tobago Bureau of Standards）がISO会員。ISO 13485の国内義務化は未確認。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "明示的言及は未確認。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "明示的言及は未確認。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "明示的言及は未確認。"
    },
    "others": ["CARPHA CRS本部所在国（医薬品のみ対象）"]
  },
  "recentDevelopments": [
    {
      "date": "2025-11",
      "title": "NEML更新ワークショップ（PAHO/WHO支援）",
      "description": "National Essential Medicines List更新のためGRADE EtDフレームワーク等を適用。"
    },
    {
      "date": "2025-06",
      "title": "CARPHA CRS Gateway/DHIS2ローンチ",
      "description": "CRSデジタルプラットフォーム導入。製品申請管理・安全性報告のデジタル化。対象は医薬品・ワクチン（医療機器は対象外）。"
    },
    {
      "date": "2025-02",
      "title": "PAHO地域規制協力促進",
      "description": "規制システム強化のための省庁間交流。医薬品と保健技術の規制調和を目的。"
    }
  ],
  "lastUpdated": "2026-04-03",
  "verified": null
};
