// タジキスタン (Tajikistan)
export default {
  "code": "TJK",
  "country": "タジキスタン",
  "countryEn": "Tajikistan",
  "region": "ASPAC",
  "flag": "🇹🇯",
  "legalSystemOverview": {
    "type": "政府審査型（発展途上の規制制度）",
    "description": "タジキスタンでは保健社会保護省（Ministry of Health and Social Protection of the Population）が医療機器規制を管轄。「医薬品・医療用品及び製薬活動に関する法律」が基本法。医薬品・製薬管理部門（Department of Medical and Pharmaceutical Control）が登録を実施。EAEU非加盟（独自の規制枠組み）。登録証は5年有効。審査期間は2〜6ヶ月。規制制度は発展途上で、詳細なガイダンスは限定的。",
    "keyCharacteristics": [
      "保健社会保護省が規制を管轄",
      "医薬品・製薬管理部門が登録実施",
      "「医薬品・医療用品及び製薬活動に関する法律」が基本法",
      "Order No. 736 (2015) が登録手続を規定",
      "EAEU非加盟（独自の規制枠組み）",
      "登録証有効期間5年",
      "タジク語・ロシア語ラベリング",
      "CIS諸国製造業者には関税優遇あり"
    ]
  },
  "authorities": [
    {
      "name": "保健社会保護省",
      "fullName": "Ministry of Health and Social Protection of the Population of the Republic of Tajikistan",
      "localName": "Вазорати тандурустӣ ва ҳифзи иҷтимоии аҳолии Ҷумҳурии Тоҷикистон",
      "role": "医療機器の規制・政策立案。医薬品・製薬管理部門を通じた登録・品質管理。",
      "url": "https://moh.tj/",
      "isPrimary": true
    },
    {
      "name": "SSSHSPP",
      "fullName": "State Supervision Service for Health Care and Social Protection of the Population",
      "localName": "Хадамоти назорати давлатии тандурустӣ ва ҳифзи иҷтимоии аҳолӣ",
      "role": "医療機器の市販後監視・品質監督。",
      "url": "https://qreg.co.uk/tajikistan-regulatory-requirements/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "政府直接審査",
    "description": "保健社会保護省の医薬品・製薬管理部門が直接審査・登録を実施。第三者認証機関制度は未整備。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "「医薬品・医療用品及び製薬活動に関する法律」に基づく定義。疾病の予防・診断・治療に使用される器具・装置・機器等。",
    "scope": "医療機器・IVD・医療用品が対象。",
    "notes": "医療機器と医薬品が同一の法律で規制されている点が特徴。詳細な機器定義のスコープは要確認。"
  },
  "primaryLaw": {
    "title": "Law of the Republic of Tajikistan \"On Medicines, Medical Goods and Pharmaceutical Activities\"",
    "originalTitle": "Қонуни Ҷумҳурии Тоҷикистон «Дар бораи доруворӣ, маҳсулоти тиббӣ ва фаъолияти фармасевтӣ»",
    "enacted": "要確認",
    "lastAmended": "要確認",
    "url": "https://cis-legislation.com/document.fwx?rgn=142296",
    "description": "医薬品・医療用品・製薬活動の公的管理、品質管理、供給に関する法律。医療機器の国家登録義務を規定。"
  },
  "implementingRegulations": [
    {
      "title": "Order No. 736 of 21 August 2015 — 医療機器の国家登録手続",
      "date": "2015",
      "url": "https://cis-legislation.com/document.fwx?rgn=86526",
      "description": "保健社会保護省令。医療機器・医療用品の国家登録手続を規定。申請要件・審査プロセス・登録証発行手続を定める。",
      "category": "登録手続"
    }
  ],
  "relatedLaws": [
    {
      "title": "国家保健戦略2030 行動計画2024-2026",
      "category": "保健政策",
      "enacted": "2024",
      "url": "https://www.globalfinancingfacility.org/resource/brochure-action-plan-2024-2026-strategy-health-care-population-republic-tajikistan-period",
      "relevance": "2030年までの国家保健戦略。医療機器規制の近代化も含む包括的保健計画。"
    }
  ],
  "classification": {
    "system": "要確認（明確な分類制度の公式情報なし）",
    "basis": "Order No. 736 (2015) に基づく登録制度。リスクベースの分類体系の詳細は要確認。",
    "classes": [
      {
        "name": "医療機器（一般）",
        "nameJa": "医療機器",
        "riskLevel": "要確認",
        "description": "タジキスタンでは現時点で国際的なリスクベースの多段階分類制度の公式文書が確認できない。全ての医療機器が国家登録の対象。",
        "examples": ["診断機器", "治療機器", "医療用品", "IVD"],
        "approvalPath": "国家登録"
      }
    ],
    "rules": [
      "Order No. 736 (2015) に基づく登録制度",
      "詳細な分類ルールは要確認"
    ],
    "totalProductCodes": null
  },
  "conformityAssessment": {
    "overview": "保健社会保護省の医薬品・製薬管理部門による国家登録制度。登録証は5年有効。審査期間は2〜6ヶ月。申請者（Marketing Authorization Holder）はタジキスタンの居住者・非居住者いずれも可。",
    "routes": [
      {
        "name": "State Registration",
        "nameJa": "国家登録",
        "applicableClasses": ["医療機器（一般）"],
        "description": "Order No. 736 (2015) に基づく国家登録。技術文書・品質証明書・臨床データ・ラベリング案等を提出。CIS諸国の製造業者には関税優遇あり。",
        "subtypes": [],
        "avgReviewTime": "2〜6ヶ月",
        "avgReviewTimeSource": "https://omcmedical.com/tajikistanmedical-device-registration/",
        "fee": "要確認（公式情報で裏付け未取得）",
        "feeSource": "https://qreg.co.uk/tajikistan-regulatory-requirements/",
        "url": "https://cratia.com/en/countries/tadzhikistan/registracziya-mediczinskih-izdelij/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "要確認（電子申請システムの存在は未確認）",
    "url": "https://omcmedical.com/tajikistanmedical-device-registration/",
    "description": "電子申請システムの有無は要確認。現時点では紙ベースの申請が主要と推定される。",
    "mandatory": false
  },
  "udi": {
    "required": false,
    "system": "未実施",
    "description": "UDI制度は未実施。国際的なUDI要件への対応計画は未確認。",
    "url": "https://cratia.ua/en/country/tajikistan/",
    "timeline": "未定"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "SSSHSPP 市販後監視",
      "mandatory": true,
      "url": "https://qreg.co.uk/tajikistan-regulatory-requirements/",
      "description": "SSSSHSPPが市販後監視を管轄。有害事象報告制度は発展途上。具体的な報告期限・様式等は要確認。"
    },
    "recalls": {
      "authority": "保健社会保護省 / SSSHSPP",
      "description": "品質不適合・安全性問題が判明した場合の回収措置。具体的な手続きは要確認。",
      "url": "https://omcmedical.com/tajikistanmedical-device-registration/"
    },
    "surveillance": "市販後監視制度は発展途上。SSSSHSPPが品質監督を担当。WHO等の国際機関の技術支援を受けて制度整備中。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "保健社会保護省",
    "name": "Certificate of Free Sale",
    "description": "要確認（CFS発行の具体的手続き・手数料は公式情報で裏付け未取得）。",
    "processingTime": "要確認（公式情報で裏付け未取得）",
    "url": "https://cratia.ua/en/country/tajikistan/"
  },
  "reimbursement": {
    "system": "国家保健制度（発展途上）",
    "authority": "保健社会保護省",
    "description": "タジキスタンの医療費負担は自己負担率が高い。医療機器の個別償還制度は限定的。国家保健戦略2030に基づく制度改善が進行中。World Bank・GFF等の国際機関が技術支援。",
    "codingSystems": [],
    "url": "https://thedocs.worldbank.org/en/doc/0273f33ab6ee48c5d842108b9b55c789-0140022025/related/National-Health-Compact-Tajikistan.pdf"
  },
  "marketingRules": {
    "authority": "保健社会保護省",
    "description": "タジク語・ロシア語でのラベリング・IFU提供が必要。具体的な広告規制の詳細は要確認。",
    "keyRules": [
      "タジク語・ロシア語ラベリング",
      "使用説明書のタジク語/ロシア語翻訳",
      "国家登録証取得済み製品のみ流通可",
      "広告規制の詳細は要確認"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "MDSAP非参加。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "品質マネジメントシステムとして参照。登録時にISO 13485証明書の提出が有利。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "リスクマネジメントとして参照。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "ソフトウェアライフサイクル。要確認（具体的な要求水準は不明）。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "電気医療機器安全。GOST規格としても参照。"
    },
    "others": [
      "旧ソ連のGOST規格が一部残存",
      "CIS諸国間の規格相互認証"
    ]
  },
  "recentDevelopments": [
    {
      "date": "2024",
      "title": "国家保健戦略2030 行動計画2024-2026策定",
      "description": "WHO・World Bank・GFF等の支援のもと、2030年までの包括的保健戦略の行動計画を策定。医療機器規制の近代化も含む。"
    },
    {
      "date": "2015",
      "title": "Order No. 736 — 医療機器国家登録手続制定",
      "description": "保健社会保護省令736号により、医療機器の国家登録手続を正式に規定。"
    }
  ],
  "lastUpdated": "2026-04-03",
  "verified": null
};
