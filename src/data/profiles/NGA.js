// ナイジェリア (Nigeria)
export default {
  "code": "NGA",
  "country": "ナイジェリア",
  "countryEn": "Nigeria",
  "region": "Middle East & Africa",
  "flag": "🇳🇬",
  "legalSystemOverview": {
    "type": "連邦制（Federal system）",
    "description": "ナイジェリアの医療機器規制はNAFDAC（National Agency for Food and Drug Administration and Control）が管轄する。2024年に新たなMedical Device and Related Products Regulations 2024が制定され、規制枠組みが大幅に刷新された。GHTF/IMDRFの4クラス分類（Class A/B/C/D）を採用し、NAPAMS電子申請システムによるオンライン申請を導入。",
    "keyCharacteristics": [
      "NAFDACによる一元的な連邦規制体制",
      "リスクベースの4クラス分類（Class A/B/C/D）",
      "Medical Device and Related Products Regulations 2024による刷新された規制枠組み",
      "NAPAMS（NAFDAC Automated Product Administration and Monitoring System）電子申請",
      "審査期間: 120営業日（標準）"
    ]
  },
  "authorities": [
    {
      "name": "NAFDAC",
      "fullName": "National Agency for Food and Drug Administration and Control",
      "localName": null,
      "role": "医療機器の登録・市販後監視・査察・リコール管理・広告規制。主管当局。Food and Drug Registration Committee (FDRC) が最終承認を決定。",
      "url": "https://www.nafdac.gov.ng/",
      "isPrimary": true
    }
  ],
  "notifiedBodies": {
    "system": "なし（NAFDAC が直接審査）",
    "description": "ナイジェリアではNotified Body制度は存在しない。NAFDACが直接、医療機器の登録審査を実施する。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "Medical Device and Related Products Regulations 2024に定義。疾病の診断・治療・予防・監視・軽減等を目的とする機器・装置・器具・材料・ソフトウェア等で、主たる意図する作用が薬理学的・免疫学的・代謝的手段によらないもの。GHTF/IMDRF定義に準拠。",
    "scope": "IVD（体外診断用医療機器）も適用対象。医療機器全般を包括的に規制。",
    "notes": "2024年の新規制により、定義と適用範囲が国際基準に整合。"
  },
  "primaryLaw": {
    "title": "NAFDAC Act (CAP N1 LFN 2004)",
    "originalTitle": null,
    "enacted": "1993（2004年改正）",
    "lastAmended": "2004",
    "url": "https://www.nafdac.gov.ng/about-nafdac/nafdac-act/",
    "description": "NAFDACの設立根拠法。食品・医薬品・化粧品・医療機器・化学物質の規制権限をNAFDACに付与。"
  },
  "implementingRegulations": [
    {
      "title": "Medical Device and Related Products Regulations 2024",
      "date": "2024-10-16",
      "url": "https://nafdac.gov.ng/wp-content/uploads/Files/Resources/Regulations/Medical_Devices/NAFDAC-11-Medical-Device-and-Related-Products-Regulations-2024.pdf",
      "description": "2024年10月16日制定。医療機器・IVD・関連製品の登録・分類・広告・ラベリング・市販後監視を包括的に規定。Federal Republic of Nigeria Official Gazette No. 176に掲載。",
      "category": "医療機器"
    },
    {
      "title": "Guidelines for Registration of Medical Devices in Nigeria",
      "date": null,
      "url": "https://nafdac.gov.ng/wp-content/uploads/Files/Resources/Guidelines/DR_And_R_Guidelines/Guidelines-for-Registration-of-Medical-Devices-in-Nigeria.pdf",
      "description": "医療機器の登録手続き、必要書類、分類基準、NAPAMS申請方法等を詳述する実務ガイドライン。",
      "category": "登録手続き"
    }
  ],
  "relatedLaws": [
    {
      "title": "NAFDAC Good Manufacturing Practice for Medical Devices and Related Products Regulations 2024",
      "category": "GMP",
      "enacted": "2024",
      "url": "https://www.nafdac.gov.ng/wp-content/uploads/Files/Resources/Regulations/Draft_Regulations_2024/NAFDAC-Good-Manufacturing-Practice-for-Medical-Devices-and-Related-Products-Regulations-2024.pdf",
      "relevance": "医療機器のGMP要件を規定。2024年制定。"
    }
  ],
  "classification": {
    "system": "4クラス制（Class A/B/C/D）",
    "basis": "リスクベース（GHTF/IMDRF分類ルールに準拠）。意図する用途・侵襲性・使用期間・エネルギー源等に基づく。",
    "classes": [
      {
        "name": "Class A",
        "nameJa": "クラスA",
        "riskLevel": "低",
        "description": "一般的な低リスク機器。NAFDAC登録が必要。",
        "examples": [
          "弾性包帯",
          "聴診器",
          "舌圧子",
          "車椅子"
        ],
        "approvalPath": "NAFDAC登録（NAPAMS経由）"
      },
      {
        "name": "Class B",
        "nameJa": "クラスB",
        "riskLevel": "中低",
        "description": "中程度の低リスク機器。NAFDAC登録が必要。",
        "examples": [
          "血圧計",
          "補聴器",
          "超音波診断装置",
          "歯科用材料"
        ],
        "approvalPath": "NAFDAC登録（NAPAMS経由）"
      },
      {
        "name": "Class C",
        "nameJa": "クラスC",
        "riskLevel": "中高",
        "description": "中高リスク機器。NAFDAC登録＋臨床評価が必要。",
        "examples": [
          "人工関節",
          "冠動脈ステント",
          "人工呼吸器",
          "透析装置"
        ],
        "approvalPath": "NAFDAC登録（NAPAMS経由）＋臨床評価"
      },
      {
        "name": "Class D",
        "nameJa": "クラスD",
        "riskLevel": "高",
        "description": "最高リスク機器。最も厳格な審査。臨床データが必要。",
        "examples": [
          "人工心臓弁",
          "埋込み型除細動器",
          "薬剤溶出ステント"
        ],
        "approvalPath": "NAFDAC登録（NAPAMS経由）＋臨床データ"
      }
    ],
    "rules": [
      "GHTF/IMDRFの分類ルールに準拠",
      "Medical Device and Related Products Regulations 2024に詳細規定",
      "IVDは別途分類ルール適用"
    ],
    "totalProductCodes": "GMDN（Global Medical Device Nomenclature）を参照"
  },
  "conformityAssessment": {
    "overview": "全クラスの医療機器にNAFDAC登録が必要。NAPAMS電子申請システム経由でオンライン申請。標準審査期間は120営業日（書類完備・90日以内の指摘対応が前提）。審査完了後、FDRC（Food and Drug Registration Committee）承認会議を経て登録証発行。登録有効期間は5年。",
    "routes": [
      {
        "name": "NAFDAC Standard Registration",
        "nameJa": "NAFDAC標準登録",
        "applicableClasses": [
          "Class A",
          "Class B",
          "Class C",
          "Class D"
        ],
        "description": "NAPAMS経由の標準的な登録審査。書類スクリーニング→技術文書審査→GMP査察（該当時）→試験分析（該当時）→FDRC承認会議→登録証発行の流れ。Permit to Importは書類審査通過後に電子発行。",
        "subtypes": [],
        "avgReviewTime": "120営業日（書類完備・指摘への90日以内対応が前提）",
        "avgReviewTimeSource": "https://nafdac.gov.ng/wp-content/uploads/Files/Resources/Guidelines/DR_And_R_Guidelines/Guidelines-for-Registration-of-Medical-Devices-in-Nigeria.pdf",
        "fee": "要確認（NAFDACタリフ表による）",
        "feeSource": null,
        "url": "https://nafdac.gov.ng/wp-content/uploads/Files/Resources/Guidelines/DR_And_R_Guidelines/Guidelines-for-Registration-of-Medical-Devices-in-Nigeria.pdf"
      }
    ]
  },
  "electronicSubmission": {
    "system": "NAPAMS（NAFDAC Automated Product Administration and Monitoring System）",
    "url": "https://www.nafdac.gov.ng/our-services/nafdac-e-services/",
    "description": "NAPAMSはNAFDACの統合電子申請システム。全ての医療機器登録申請はNAPAMS経由でオンライン提出が必須。アカウント作成→申請書入力→書類アップロード→支払い→追跡の一連をオンラインで実施。",
    "mandatory": true
  },
  "udi": {
    "required": false,
    "system": "未導入（検討段階）",
    "description": "ナイジェリアではUDI制度は現時点で未導入。Medical Device and Related Products Regulations 2024で将来的な導入の基盤が整備された。",
    "url": null,
    "timeline": "未定"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "NAFDAC有害事象報告制度",
      "mandatory": true,
      "url": "https://www.nafdac.gov.ng/safety/safety-information/",
      "description": "製造業者・輸入業者・医療従事者は有害事象をNAFDACに報告する義務がある。Medical Device and Related Products Regulations 2024で報告要件が強化。"
    },
    "recalls": {
      "authority": "NAFDAC",
      "description": "NAFDACがリコールを監督。安全性に関する問題が発見された場合、市場からの回収を命令可能。",
      "url": "https://www.nafdac.gov.ng/"
    },
    "surveillance": "Medical Device and Related Products Regulations 2024に基づく市販後監視要件。PMS報告書の提出義務が規定。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "輸出国の規制当局",
    "name": "Certificate of Free Sale (CFS)",
    "description": "NAFDAC登録申請時に、原産国の規制当局が発行するCFSの提出が必要。",
    "processingTime": "輸出国側の手続きによる",
    "url": "https://www.nafdac.gov.ng/our-services/registered-products/"
  },
  "reimbursement": {
    "system": "国民健康保険制度（NHIS）+ 民間保険",
    "authority": "NHIA（National Health Insurance Authority）",
    "description": "NHIAが公的医療保険を管轄。医療機器に特化した体系的な償還制度は限定的。公立病院での調達は政府予算に基づく。",
    "codingSystems": [],
    "url": null
  },
  "marketingRules": {
    "authority": "NAFDAC",
    "description": "NAFDACのガイドラインに基づき、医療機器の広告・マーケティングに関する規制が存在。未登録機器の広告は禁止。",
    "keyRules": [
      "未登録医療機器の広告は禁止",
      "虚偽・誇大な効能表示の禁止",
      "広告にはNAFDAC登録番号の記載が必要"
    ]
  },
  "mdsap": {
    "status": "非参加（Non-participant）",
    "description": "ナイジェリアはMDSAPに参加していない。MDSAP監査報告書はNAFDACの規制要件を代替しない。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "ISO 13485認証の取得が推奨される。登録審査で参照。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "リスクマネジメント。技術文書のリスク評価に適用。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "ソフトウェアライフサイクル。SaMD申請に参照。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "医用電気機器の安全・性能要求。"
    },
    "others": []
  },
  "recentDevelopments": [
    {
      "date": "2024-10",
      "title": "Medical Device and Related Products Regulations 2024の制定",
      "description": "2024年10月16日付でNAFDACが新たなMedical Device and Related Products Regulations 2024を制定。Federal Republic of Nigeria Official Gazette No. 176に掲載。4クラス分類・NAPAMS電子申請・市販後監視の強化・ラベリング要件等を包括的に規定し、規制枠組みを国際基準に整合。"
    }
  ],
  "lastUpdated": "2026-04-06",
  "verified": "2026-04-06"
};
