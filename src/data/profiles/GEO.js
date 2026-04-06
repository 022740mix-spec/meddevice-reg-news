// ジョージア (Georgia)
export default {
  "code": "GEO",
  "country": "ジョージア",
  "countryEn": "Georgia",
  "region": "Europe",
  "flag": "🇬🇪",
  "legalSystemOverview": {
    "type": "EU候補国（軽量規制 — 大半の医療機器は登録不要）",
    "description": "ジョージアの医療機器規制は非常に軽量。2012年に旧登録制度（Order 318/ნ）が廃止され、大半の医療機器は正式登録なしで輸入・販売可能。RAMAがNCA。FDA承認/CE/MDR認証を持つ製品は市場参入障壁が低い。歯科材料・試薬等の一部カテゴリは医薬品に準じた登録が必要。2023年12月にEU候補国地位を取得したが、2024年6月にEU加盟プロセスが事実上停止。",
    "keyCharacteristics": [
      "大半の医療機器は正式登録不要（2012年旧制度廃止）",
      "RAMA がNCA",
      "FDA承認・CE/MDR認証を受入",
      "歯科材料・試薬等は医薬品準じた登録が必要",
      "EU候補国（2023年12月〜）— 加盟プロセスは2024年6月停止",
      "DCFTA（EU深化包括的自由貿易協定）でEU規制整合を約束",
      "UDI制度は未導入",
      "グルジア語ラベリング必須"
    ]
  },
  "authorities": [
    {
      "name": "RAMA",
      "fullName": "Regulation Agency for Medical and Pharmaceutical Activities",
      "localName": "სამედიცინო და ფარმაცევტული საქმიანობის სახელმწიფო რეგულირების სააგენტო",
      "role": "NCA: 医薬品・医療機器の規制全般、医療施設の監査・検査、有害事象報告の収集・WHOへのデータ提出",
      "url": "https://www.moh.gov.ge/en/news/7260/Regulation-Agency-for-Medical-and-Pharmaceutical-Activities-Presents-2022-Activity-Report",
      "isPrimary": true
    },
    {
      "name": "MoLHSA",
      "fullName": "Ministry of Internally Displaced Persons from Occupied Territories, Labour, Health and Social Affairs",
      "localName": null,
      "role": "保健政策の最上位監督省庁。RAMA所管。製品分類レター発行。",
      "url": "https://www.moh.gov.ge/",
      "isPrimary": false
    },
    {
      "name": "NHA",
      "fullName": "National Health Agency",
      "localName": null,
      "role": "UHCP（ユニバーサルヘルスケアプログラム）の単一公的購買者。2021年にSSAから業務移管。",
      "url": null,
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "国内NB制度なし",
    "description": "ジョージアにはEU型のNotified Body制度は存在しない。FDA承認またはEU CE/MDR認証を受入。適合性評価はジョージアで認定された試験所・認証機関が実施可能。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "Law on Health Care (1997) Chapter VIII, Articles 65-67が「医療技術製品」(სამედიცინო ტექნიკური ნაკეთობა) を定義。",
    "scope": "大半の医療機器は登録不要。歯科材料・検査システム・アレルゲン・試薬は医薬品法に準じた登録が必要。",
    "notes": "Law on Medicines and Pharmaceutical Activities (1997) は医療機器を明示的に規制対象から除外。"
  },
  "primaryLaw": {
    "title": "Law of Georgia on Health Care",
    "originalTitle": "ჯანმრთელობის დაცვის შესახებ საქართველოს კანონი",
    "enacted": "1997",
    "lastAmended": "要確認",
    "url": "https://matsne.gov.ge/en/document/view/29980",
    "description": "1997年制定。Chapter VIII (Articles 65-67) が医療技術製品を規定。ジョージアの医療機器規制の基本法。ただし詳細な登録制度は2012年に廃止済み。"
  },
  "implementingRegulations": [
    {
      "title": "Law of Georgia on Medicines and Pharmaceutical Activities",
      "date": "1997-04",
      "url": "https://matsne.gov.ge/en/document/view/29836",
      "description": "医薬品の規制法。医療機器は規制対象外だが、歯科材料・試薬等は本法に準じて登録。2023年12月改正（Law No. 3807）。",
      "category": "医薬品法（一部医療機器に適用）"
    }
  ],
  "relatedLaws": [
    {
      "title": "EU-Georgia DCFTA (Deep and Comprehensive Free Trade Area)",
      "category": "貿易協定",
      "enacted": "2016",
      "url": "https://trade.ec.europa.eu/access-to-markets/en/content/eu-georgia-deep-and-comprehensive-free-trade-area",
      "relevance": "Annex III-Aで医療機器を含む21の規制分野のEU規制への段階的整合を約束。"
    }
  ],
  "classification": {
    "system": "独自の体系的分類制度なし",
    "basis": "FDA/EU MDRの分類を準用。法令上の体系的分類規則は未確認。",
    "classes": [
      {
        "name": "Class I",
        "nameJa": "クラスI（準用）",
        "riskLevel": "低",
        "description": "国際認証（FDA/CE）に基づく分類を準用。登録不要。",
        "examples": ["弾性包帯", "聴診器", "車椅子", "非滅菌手袋", "体温計"],
        "approvalPath": "登録不要（FDA承認/CE適合）"
      },
      {
        "name": "Class IIa",
        "nameJa": "クラスIIa（準用）",
        "riskLevel": "中低",
        "description": "国際認証に基づく分類を準用。登録不要。",
        "examples": ["補聴器", "超音波診断装置", "血圧計", "歯科用充填材", "手術用手袋"],
        "approvalPath": "登録不要（FDA承認/CE適合）"
      },
      {
        "name": "Class IIb",
        "nameJa": "クラスIIb（準用）",
        "riskLevel": "中高",
        "description": "国際認証に基づく分類を準用。登録不要。",
        "examples": ["人工呼吸器", "輸液ポンプ", "X線装置", "血液透析装置", "骨接合プレート"],
        "approvalPath": "登録不要（FDA承認/CE適合）"
      },
      {
        "name": "Class III",
        "nameJa": "クラスIII（準用）",
        "riskLevel": "高",
        "description": "国際認証に基づく分類を準用。登録不要。",
        "examples": ["人工心臓弁", "冠動脈ステント", "人工股関節", "植込み型除細動器", "吸収性縫合糸"],
        "approvalPath": "登録不要（FDA承認/CE適合）"
      }
    ],
    "rules": [
      "体系的な国内分類規則なし",
      "FDA/EU MDR分類を準用"
    ],
    "totalProductCodes": null
  },
  "conformityAssessment": {
    "overview": "大半の医療機器は正式登録不要。FDA承認またはEU CE/MDR認証を受入。輸入前にMoLHSAから「製品が医薬品に該当しない」旨のレター取得を推奨。歯科材料・試薬等は別途登録。",
    "routes": [
      {
        "name": "Import with International Certification",
        "nameJa": "国際認証による輸入（登録不要）",
        "applicableClasses": ["Class I", "Class IIa", "Class IIb", "Class III"],
        "description": "FDA承認、EU CE/MDR認証のいずれかを持つ製品は正式登録なしで輸入・販売可能。MoLHSAの製品分類レター取得推奨。医療機器・医薬品は関税免除・VAT免除。",
        "subtypes": [],
        "avgReviewTime": "正式登録不要（分類レター取得は任意）",
        "avgReviewTimeSource": "https://www.trade.gov/healthcare-resource-guide-georgia",
        "fee": "要確認（公式情報で裏付け未取得）",
        "feeSource": "https://www.trade.gov/healthcare-resource-guide-georgia",
        "url": "https://www.trade.gov/healthcare-resource-guide-georgia"
      },
      {
        "name": "Registration (Pharmaceutical-like)",
        "nameJa": "登録（医薬品準拠 — 一部カテゴリ）",
        "applicableClasses": ["Class I", "Class IIa", "Class IIb", "Class III"],
        "description": "歯科材料・検査システム・アレルゲン・試薬が対象。National procedure: 2か月。Recognition procedure: 15暦日。有効期間: 5年。",
        "subtypes": [
          "National procedure（2か月）",
          "Recognition procedure（15暦日）"
        ],
        "avgReviewTime": "National: 2か月、Recognition: 15暦日",
        "avgReviewTimeSource": "https://matsne.gov.ge/en/document/view/29836",
        "fee": "要確認（公式情報で裏付け未取得）",
        "feeSource": "https://matsne.gov.ge/en/document/view/29836",
        "url": "https://matsne.gov.ge/en/document/view/29836"
      }
    ]
  },
  "electronicSubmission": {
    "system": "専用電子ポータルなし",
    "url": null,
    "description": "統合的な医療機器電子申請システムは未確認。技術・臨床文書は電子形式（英語/ロシア語）で提出。一部カテゴリの登録申請はRAMAに直接提出。",
    "mandatory": false
  },
  "udi": {
    "required": false,
    "system": "未導入",
    "description": "UDI制度は未導入。EU候補国としてDCFTAに基づくEU規制整合が進行中だが、UDI導入の具体的タイムラインは未定。",
    "url": null,
    "timeline": "未定（EU加盟プロセスに連動）"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "RAMA ファーマコヴィジランス",
      "mandatory": true,
      "url": "https://www.moh.gov.ge/en/news/7260/Regulation-Agency-for-Medical-and-Pharmaceutical-Activities-Presents-2022-Activity-Report",
      "description": "RAMAが有害事象報告の受付当局。医療機関の主治医が副作用情報を収集し10日以内に通知フォーム提出。紙面（署名・印鑑付き）または電子形式。データはWHO国際医薬品モニタリングセンターに毎週転送。医療機器特有のvigilance制度は未整備。"
    },
    "recalls": {
      "authority": "RAMA / MoLHSA",
      "description": "明確なリコール制度の公式情報は限定的。RAMAが安全性問題の調査を実施。",
      "url": null
    },
    "surveillance": "体系的な医療機器PMS制度は未整備。ファーマコヴィジランス（主に医薬品向け）がRAMAの主要機能。QPPV任命義務なし。"
  },
  "certificateOfFreeSale": {
    "available": false,
    "issuingAuthority": null,
    "name": null,
    "description": "ジョージアにおけるCFS発行制度の具体的情報は確認されなかった。",
    "processingTime": null,
    "url": null
  },
  "reimbursement": {
    "system": "Universal Health Care Programme (UHCP)",
    "authority": "NHA (National Health Agency)",
    "description": "2013年開始のUHCP。プライマリケア・診断サービス（20-30%自己負担）・緊急医療（GEL 15,000上限）をカバー。23の垂直プログラム（精神保健・糖尿病等）。NHAが単一公的購買者。医療機器の具体的な償還リスト制度は未確認。自己負担が公的資金を上回る状況。医療機器・医薬品は関税免除・VAT免除。",
    "codingSystems": [],
    "url": "https://www.trade.gov/healthcare-resource-guide-georgia"
  },
  "marketingRules": {
    "authority": "RAMA / MoLHSA",
    "description": "販売時点でグルジア語ラベルが必須。通関書類はグルジア語（アブハジア自治共和国ではアブハジア語も可）。技術文書は英語またはロシア語で受付可。",
    "keyRules": [
      "グルジア語ラベリング必須",
      "通関書類: グルジア語",
      "技術文書: 英語またはロシア語で受付可",
      "医療機器・医薬品は関税免除・VAT免除"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "MDSAP非参加。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "認知されている。SGS Georgia等が認証サービスを提供。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "ISO 14971 受入。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "IEC 62304 受入。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "IEC 60601シリーズ受入。"
    },
    "others": [
      "登録規格の98%が国際・欧州規格（2%がジョージア固有）"
    ]
  },
  "recentDevelopments": [
    {
      "date": "2024-06",
      "title": "EU加盟プロセス事実上停止",
      "description": "民主主義の後退を理由に欧州理事会がジョージアのEU加盟プロセスの事実上の停止を発表。EU規制整合の進捗に影響。"
    },
    {
      "date": "2023-12",
      "title": "EU候補国地位付与",
      "description": "9つの改革ステップの実施を条件にEU候補国地位を付与。医療機器を含む規制整合が期待されたが、加盟プロセス停止で不透明に。"
    },
    {
      "date": "2023-12",
      "title": "医薬品法改正（Law No. 3807）",
      "description": "Law on Medicines and Pharmaceutical Activities の改正。歯科材料・試薬等の医療機器に準じた登録カテゴリにも影響。"
    }
  ],
  "lastUpdated": "2026-04-03",
  "verified": null
};
