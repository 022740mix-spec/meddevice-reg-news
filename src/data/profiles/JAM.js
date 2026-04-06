// ジャマイカ (Jamaica)
export default {
  "code": "JAM",
  "country": "ジャマイカ",
  "countryEn": "Jamaica",
  "region": "Latam",
  "flag": "🇯🇲",
  "legalSystemOverview": {
    "type": "政府審査型（Food and Drugs Act ベース）",
    "description": "ジャマイカでは保健省のSRD/PRA部門が医療機器の登録・輸入許可を管轄。Food and Drugs Act (1964) が基本法で、医療機器専用法はない。正式なリスクベース分類制度はなく、米国/カナダ/EU等の承認実績に基づく二段階（Registered/Approved）審査。NHFが糖尿病・呼吸器用品等の限定的な償還を実施。2025年6月に規制近代化（参照国承認品の迅速審査）を発表。",
    "keyCharacteristics": [
      "SRD/PRA（保健省）がNCA",
      "Food and Drugs Act (1964/1975) が基本法（医療機器専用法なし）",
      "正式なリスクベース分類制度なし（二段階審査）",
      "製造国での1年以上の販売実績が登録前提",
      "USA/CAN/EU承認品の迅速審査を2025年発表",
      "MOH Trade System（JSWIFT）で電子申請",
      "NHFが限定的な医療機器償還（糖尿病・呼吸器用品）",
      "英語ラベリング必須",
      "UDI・専用matériovigilance制度なし"
    ]
  },
  "authorities": [
    {
      "name": "SRD/PRA",
      "fullName": "Standards and Regulation Division / Pharmaceutical and Regulatory Affairs Department",
      "localName": null,
      "role": "NCA: 医療機器の登録審査・輸入許可・市場監視。Ministry of Health & Wellness内。PRA部門がISO 9001認証取得（2023年）。",
      "url": "https://www.moh.gov.jm/standards-and-regulation-division/pharmaceutical-and-regulatory-affairs-department/",
      "isPrimary": true
    },
    {
      "name": "NHF",
      "fullName": "National Health Fund",
      "localName": null,
      "role": "医薬品・一部医療機器（糖尿病・呼吸器用品等）の費用補助。NHFCardプログラム運営。",
      "url": "https://www.nhf.org.jm/",
      "isPrimary": false
    },
    {
      "name": "BSJ",
      "fullName": "Bureau of Standards Jamaica",
      "localName": null,
      "role": "ISOメンバー機関。JS ISO 13485:2021を採用。医療機器の直接規制は行わない。",
      "url": "https://www.bsj.org.jm/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "政府直接審査（NB制度なし）",
    "description": "PRA部門が直接審査。第三者適合性評価機関（Notified Body）制度は存在しない。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "Food and Drugs Act第2条: 「人または動物の疾病・障害・異常な身体状態の診断・治療・軽減・予防のために使用されるものとして製造・販売・表示される器具・装置・器材（構成部品・部品・附属品を含む）」。",
    "scope": "IVDを含む。「therapeutic devices」として食品・医薬品・化粧品と同じ法律で規制。",
    "notes": "1964年制定、1975年施行、1996年最終改正。医療機器専用法はない。"
  },
  "primaryLaw": {
    "title": "The Food and Drugs Act (Law 46 of 1964)",
    "originalTitle": "An Act relating to foods, drugs, cosmetics and therapeutic devices",
    "enacted": "1964",
    "lastAmended": "1996",
    "url": "https://laws.moj.gov.jm/library/statute/the-food-and-drugs-act",
    "description": "1964年制定、1975年8月4日施行。医療機器（therapeutic devices）を食品・医薬品・化粧品と同じ法律で規制。第15条: 使用指示に従った使用で傷害を引き起こす機器の販売禁止。第16条: 虚偽・誤解を招くラベリング・広告の禁止。"
  },
  "implementingRegulations": [
    {
      "title": "The Food and Drug Regulations, 1975",
      "date": "1975-03",
      "url": "https://jamaicatradeportal.gov.jm/en-gb/site/display/968",
      "description": "1975年3月3日制定、8月4日施行。Food and Drugs Actの施行規則。",
      "category": "施行規則"
    }
  ],
  "relatedLaws": [
    {
      "title": "National Health Fund Act, 2003",
      "category": "医療基金",
      "enacted": "2003",
      "url": "https://www.nhf.org.jm/",
      "relevance": "NHF設立根拠法。慢性疾患24疾病の処方薬・医療用品の費用補助。"
    }
  ],
  "classification": {
    "system": "二段階審査（正式なリスクベース分類なし）",
    "basis": "正式なClass I/II/III/IV分類制度はない。製造国での承認実績・リスク履歴に基づく二段階評価。CARICOM統一分類も未策定。",
    "classes": [
      {
        "name": "Registered",
        "nameJa": "登録（高リスク相当）",
        "riskLevel": "中高〜高",
        "description": "技術文書の実質的審査を経て登録される機器。",
        "examples": ["人工呼吸器", "輸液ポンプ", "整形外科インプラント", "心臓ペースメーカー", "血液透析装置"],
        "approvalPath": "PRA実質審査（Registered）"
      },
      {
        "name": "Approved",
        "nameJa": "承認（低リスク相当）",
        "riskLevel": "低〜中低",
        "description": "USA/CAN/EUで1年以上の販売実績があり、リコール・患者問題の履歴がなく、特別規制対象でない機器。簡易基準で承認。",
        "examples": ["弾性包帯", "聴診器", "血圧計", "車椅子", "非滅菌手袋"],
        "approvalPath": "PRA簡易審査（Approved）"
      }
    ],
    "rules": [
      "正式なリスクベース分類規則なし",
      "製造国での承認実績・リスク履歴に基づく二段階評価"
    ],
    "totalProductCodes": null
  },
  "conformityAssessment": {
    "overview": "PRA部門が直接審査。製造国で1年以上の販売実績が前提。CFS・GMP証明書・原産国の承認証明が必要。USA/UK/EU基準準拠品は迅速審査（2025年発表）。",
    "routes": [
      {
        "name": "Product Registration",
        "nameJa": "製品登録",
        "applicableClasses": ["Registered", "Approved"],
        "description": "PRAに製品ドシエ提出→科学的評価→登録/承認→輸入許可申請。CFS（製造国CA発行、ジャマイカ大使館/領事館/公証認証）・GMP証明書・使用目的/性能データ・ラベル案・完成品サンプル3個等を提出。製造国で1年以上の販売実績が前提。",
        "subtypes": [
          "Registered（実質審査）",
          "Approved（簡易審査）"
        ],
        "avgReviewTime": "要確認（公式情報で裏付け未取得）",
        "avgReviewTimeSource": "https://www.moh.gov.jm/standards-and-regulation-division/pharmaceutical-and-regulatory-affairs-department/",
        "fee": "要確認（公式情報で裏付け未取得）",
        "feeSource": "https://www.moh.gov.jm/standards-and-regulation-division/pharmaceutical-and-regulatory-affairs-department/",
        "url": "https://www.moh.gov.jm/standards-and-regulation-division/pharmaceutical-and-regulatory-affairs-department/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "MOH Trade System (JSWIFT)",
    "url": "https://www.mohpermit.gov.jm/",
    "description": "輸入許可のオンライン申請・手数料支払い。アカウント登録24〜48時間。2025年にリアルタイム不備チェック機能追加を発表（提出遅延の80%が書類不備に起因）。",
    "mandatory": true
  },
  "udi": {
    "required": false,
    "system": "未導入",
    "description": "UDI制度は未導入。関連法令・規則・データベースなし。",
    "url": null,
    "timeline": "未定"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "PharmWatch Programme — SRD",
      "mandatory": true,
      "url": "https://www.moh.gov.jm/standards-and-regulation-division/pharmacovigilance/",
      "description": "2006年開始のPharmWatchプログラム。主に医薬品向けだが医療機器も対象。2012年にWHO国際医薬品モニタリングプログラムに加盟。重篤報告: 15暦日、非重篤: 90暦日。専用のmatériovigilance（医療機器監視）制度はない。pharmacovigilance@moh.gov.jm。"
    },
    "recalls": {
      "authority": "SRD/PRA",
      "description": "SRDが安全性問題の調査・是正措置を実施。専用のリコールデータベースは未確認。",
      "url": "https://www.moh.gov.jm/standards-and-regulation-division/"
    },
    "surveillance": "PharmWatchプログラムによる市販後監視。医療機器専用のPMS制度は未整備。"
  },
  "certificateOfFreeSale": {
    "available": false,
    "issuingAuthority": null,
    "name": null,
    "description": "ジャマイカは国内医療機器製造がほぼなく、輸出用CFSの発行制度は未確認。登録要件として製造国のCFS提出が必須（ジャマイカ大使館/領事館/公証認証）。",
    "processingTime": null,
    "url": null
  },
  "reimbursement": {
    "system": "NHF（国民健康基金）— 限定的カバー",
    "authority": "NHF (National Health Fund)",
    "description": "NHFCardプログラムで24慢性疾病の処方薬・一部医療用品を補助。医療機器は糖尿病用品（テストストリップ・ランセット・インスリンペン・シリンジ）、呼吸器デバイス等の限定的カバー。コスト分担型（NHF定額負担+自己負担）。参加薬局・研究所・医院で利用。",
    "codingSystems": [
      "NHF Benefits List"
    ],
    "url": "https://www.nhf.org.jm/benefits-search/"
  },
  "marketingRules": {
    "authority": "SRD/PRA",
    "description": "英語ラベリング必須（英語以外の場合は認証翻訳付き）。Food and Drugs Act第16条: 虚偽・誤解を招くラベリング・広告の禁止。",
    "keyRules": [
      "英語ラベリング必須",
      "虚偽・誤解を招く広告の禁止（Food and Drugs Act第16条）",
      "英語以外の場合は認証翻訳付き"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "MDSAP非参加。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "BSJがJS ISO 13485:2021を採用。GMP証明書の提出が登録要件。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "個別要件の明示的言及は未確認。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "個別要件の明示的言及は未確認。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "個別要件の明示的言及は未確認。"
    },
    "others": [
      "FDA承認品・CE/MDR認証品・MHRA承認品を参照",
      "WHO GMP基準に基づくGMP証明書を要求"
    ]
  },
  "recentDevelopments": [
    {
      "date": "2025-06",
      "title": "規制近代化発表 — 参照国承認品の迅速審査",
      "description": "保健大臣がUS/UK/EU基準準拠品の迅速承認、MOH Trade Systemのリアルタイム不備チェック機能追加、国内製造業者向けエクスプレス窓口の3つの政策変更を発表。"
    },
    {
      "date": "2025-03",
      "title": "PAHO-CARPHAカリブ海規制強化ワークショップ",
      "description": "ジャマイカが参加。国家・超国家規制システム強化に焦点。主に医薬品・ワクチンだが医療技術全般も言及。"
    },
    {
      "date": "2023",
      "title": "PRA部門 ISO 9001認証取得",
      "description": "PRA（医薬品・規制事務）部門がISO 9001認証を取得。規制業務の品質管理体制を強化。"
    }
  ],
  "lastUpdated": "2026-04-03",
  "verified": null
};
