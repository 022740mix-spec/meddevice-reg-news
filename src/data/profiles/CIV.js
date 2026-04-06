// コートジボワール (Côte d'Ivoire)
export default {
  "code": "CIV",
  "country": "コートジボワール",
  "countryEn": "Côte d'Ivoire",
  "region": "Middle East & Africa",
  "flag": "🇨🇮",
  "legalSystemOverview": {
    "type": "政府審査型（医薬品規制の一部として運用）",
    "description": "コートジボワールではAIRP（コートジボワール医薬品規制庁、2017年設立）が医療機器の規制を管轄。独立した医療機器法はなく、Loi 2015-533（薬局法）とLoi 2017-541（AIRP設立法）が法的根拠。分類制度は未整備で、国際認証（CE/FDA/WHO PQ）への依存度が高い。審査期間12か月〜2年。2024年にAMA条約を批准。",
    "keyCharacteristics": [
      "AIRP（2017年設立）がNCA",
      "独立した医療機器法なし（薬局法の一部として規制）",
      "分類制度は未整備（国際認証に依存）",
      "CTDフォーマット・フランス語で登録申請",
      "現地Authorized Representativeが必要",
      "審査期間12か月〜2年",
      "CMU（ユニバーサル医療保障、2014年〜）",
      "フランス語ラベリング必須",
      "2024年AMA条約批准"
    ]
  },
  "authorities": [
    {
      "name": "AIRP",
      "fullName": "Ivorian Pharmaceutical Regulatory Authority",
      "localName": "Autorité Ivoirienne de Régulation Pharmaceutique",
      "role": "NCA: 医薬品・医療機器の登録（市販承認）・品質管理・製造施設査察・輸入監視・薬事監視。独立行政機関。",
      "url": "https://airp.ci/",
      "isPrimary": true
    },
    {
      "name": "DAP",
      "fullName": "Directorate of Pharmaceutical Activities",
      "localName": "Direction de l'Activité Pharmaceutique",
      "role": "医薬政策立案・サプライチェーン管理。",
      "url": "https://dap.ci/",
      "isPrimary": false
    },
    {
      "name": "NPSP-CI",
      "fullName": "New Public Health Pharmacy of Côte d'Ivoire",
      "localName": "Nouvelle Pharmacie de la Santé Publique de Côte d'Ivoire",
      "role": "公的医療施設への医薬品・医療機器の一元調達・供給。",
      "url": "http://www.npsp.ci/",
      "isPrimary": false
    },
    {
      "name": "CNAM",
      "fullName": "National Health Insurance Fund",
      "localName": "Caisse Nationale d'Assurance Maladie",
      "role": "CMU（ユニバーサル医療保障）の保険運営。",
      "url": "https://ipscnam.ci/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "政府直接審査（NB制度なし）",
    "description": "AIRPが直接審査。第三者認証機関制度は存在しない。FDA承認・CEマーキング・WHO事前認定が事実上認められる。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "Loi 2015-533（薬局法）に医療機器・IVDの定義が含まれる。独立した医療機器の法的定義は限定的。",
    "scope": "医療外科機器・IVD・試薬が対象。",
    "notes": "旧DPML（医薬品・研究所局）の機能がAIRPとDAPに分割（2017年）。"
  },
  "primaryLaw": {
    "title": "Loi n° 2015-533 du 20 juillet 2015 relative à l'exercice de la pharmacie",
    "originalTitle": "Loi relative à l'exercice de la pharmacie",
    "enacted": "2015",
    "lastAmended": "2017",
    "url": "https://pwic.gouv.ci/wp-content/uploads/documents/lois/LOI%20%202015-533%20du%2020%20juillet%202015%20Exercice%20de%20la%20pharmacie-1.pdf",
    "description": "薬局法。医薬品・IVD医療機器の定義、販売・調剤規定。Loi 2017-541でAIRP関連条項（第64〜70条）を廃止・置換。"
  },
  "implementingRegulations": [
    {
      "title": "Loi n° 2017-541 du 3 août 2017 relative à la régulation du secteur pharmaceutique",
      "date": "2017-08",
      "url": "https://juriafrica.com/lex/loi-2017-541-3-aout-2017-30525.htm",
      "description": "AIRP設立法。医薬品セクター全体の規制枠組み。",
      "category": "AIRP設立法"
    },
    {
      "title": "Décret n° 98/405/PM du 22 octobre 1998",
      "date": "1998-10",
      "url": "https://dpml.cm/images/Publications/Decrets/Produits%20pharmaceutiques/Decret%20Homologation%20Medicaments.pdf",
      "description": "医薬品・医療機器・体外診断薬の承認申請書類構成・AMM（市場承認）制度。",
      "category": "承認手続"
    },
    {
      "title": "Arrêté n° 2001-284/MSP/PPM du 21 août 2001 relatif au commerce de matériel médical",
      "date": "2001-08",
      "url": "https://pwic.gouv.ci/wp-content/uploads/documents/lois/A2001.284%20MSP%20-%20PPM%20Arr%C3%AAt%C3%A9%20relatif%20au%20commerce%20de%20mat%C3%A9riel%20m%C3%A9dical.pdf",
      "description": "医療機器の商取引に関する省令。",
      "category": "商取引規制"
    }
  ],
  "relatedLaws": [
    {
      "title": "Loi n° 2014-131 — Couverture Maladie Universelle (CMU)",
      "category": "ユニバーサル医療保障",
      "enacted": "2014",
      "url": "https://dg-cmu.ci/",
      "relevance": "CMU設立法。CNAMが保険運営。月額1,000 FCFA/人、医療費の70%をカバー。"
    }
  ],
  "classification": {
    "system": "未整備（国際認証に依存）",
    "basis": "公式な国内分類規則は未確認。GHTF/IMDRFの4クラス体系（Class A/B/C/D）を参照する可能性。実務的にはFDA承認・CEマーキング・WHO事前認定品が追加審査なしで受入。",
    "classes": [
      {
        "name": "Class I",
        "nameJa": "クラスI（参考）",
        "riskLevel": "低",
        "description": "低リスク。国際認証に基づく評価。",
        "examples": ["弾性包帯", "聴診器", "車椅子", "舌圧子", "非滅菌手袋"],
        "approvalPath": "AIRP登録（Homologation）"
      },
      {
        "name": "Class II",
        "nameJa": "クラスII（参考）",
        "riskLevel": "中低",
        "description": "中リスク。国際認証に基づく評価。",
        "examples": ["補聴器", "血圧計", "手術用手袋", "注射器", "カテーテル"],
        "approvalPath": "AIRP登録（Homologation）"
      },
      {
        "name": "Class III",
        "nameJa": "クラスIII（参考）",
        "riskLevel": "中高",
        "description": "高リスク。国際認証に基づく評価。",
        "examples": ["人工呼吸器", "輸液ポンプ", "血液透析装置", "X線装置", "骨接合プレート"],
        "approvalPath": "AIRP登録（Homologation）"
      },
      {
        "name": "Class IV",
        "nameJa": "クラスIV（参考）",
        "riskLevel": "高",
        "description": "最高リスク。国際認証に基づく評価。",
        "examples": ["人工心臓弁", "冠動脈ステント", "人工股関節", "植込み型除細動器", "吸収性縫合糸"],
        "approvalPath": "AIRP登録（Homologation）"
      }
    ],
    "rules": [
      "公式な国内分類規則は未整備",
      "FDA承認・CEマーキング・WHO PQを事実上認容"
    ],
    "totalProductCodes": null
  },
  "conformityAssessment": {
    "overview": "AIRPによる登録（Homologation/AMM）制度。CTDフォーマットでフランス語にて提出。現地Authorized Representativeが必要。輸入者はAIRPから事業認可（Agrément）を事前取得。初回登録時は製造施設査察が義務。",
    "routes": [
      {
        "name": "Homologation (AMM)",
        "nameJa": "登録（市販承認）",
        "applicableClasses": ["Class I", "Class II", "Class III", "Class IV"],
        "description": "CTDフォーマット・フランス語で申請。輸入者はAIRP事業認可（Agrément）を事前取得。輸入事前許可（API）: 5,000 FCFA。初回登録時は製造施設査察義務。",
        "subtypes": [],
        "avgReviewTime": "12か月〜2年（ファイル適合度と審査委員会スケジュールに依存）",
        "avgReviewTimeSource": "https://www.leemafrique.org/fr/reglementation-pharmaceutique-en-cote-d-ivoire.asp",
        "fee": "要確認（公式情報で裏付け未取得。API: 5,000 FCFA）",
        "feeSource": "https://pwic.gouv.ci/en/procedures-importations-2/medicines-and-medical-devices/",
        "url": "https://airp.ci/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "GUCE（輸入申告）+ 紙ベース申請",
    "url": "https://www.gucecotedivoire.ci/",
    "description": "GUCE（外国貿易単一窓口）で輸入申告書（IDF）をオンライン提出。登録申請自体は基本的に紙ベース・直接提出。専用の医療機器電子申請ポータルは未確認。",
    "mandatory": false
  },
  "udi": {
    "required": false,
    "system": "未導入",
    "description": "UDI制度は未導入。導入計画は確認できず。",
    "url": null,
    "timeline": "未定"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "Pharmacovigilance — AIRP",
      "mandatory": true,
      "url": "https://airp.ci/",
      "description": "AIRPのVigilance Unitが管轄。2010年にWHO国際医薬品モニタリングプログラムに加盟。報告手段: Eメール・SMS・郵送・直接提出・Med Safetyアプリ（2020年〜）。医療機器特有のmatériovigilance制度は未確認。著しいunder-reporting（0.28件/百万人年）。2026年2月にAIRP Decision 0011: 事業者のpharmacovigilance義務を規定。"
    },
    "recalls": {
      "authority": "AIRP",
      "description": "AIRPが市場安全措置を実施。2024年4月にCircular No. 00824でリコール措置。",
      "url": "https://airp.ci/"
    },
    "surveillance": "Pharmacovigilance制度は存在するが、医療機器に特化した市販後監視制度は未整備。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "AIRP（推定）",
    "name": "Certificat de Libre Vente",
    "description": "CFS発行制度の公式詳細は未確認。輸入登録時に原産国のCFSが求められる慣行。",
    "processingTime": "要確認（公式情報で裏付け未取得）",
    "url": "https://airp.ci/"
  },
  "reimbursement": {
    "system": "CMU（ユニバーサル医療保障）+ NPSP-CI公的調達",
    "authority": "CNAM / NPSP-CI",
    "description": "CMU（2014年〜）: 月額1,000 FCFA/人、医療費の70%をCNAMが負担。医師診察・6,000種以上の医薬品・検査・入院・手術をカバー。医療機器特有の償還体系は未確認。公立医療施設への医療機器調達はNPSP-CIが一元管理。",
    "codingSystems": [],
    "url": "https://ipscnam.ci/"
  },
  "marketingRules": {
    "authority": "AIRP",
    "description": "フランス語ラベリング必須。申請書類はCTDフォーマット・フランス語。輸入者はAIRP事業認可（Agrément）を事前取得。",
    "keyRules": [
      "フランス語ラベリング必須",
      "申請書類: CTDフォーマット・フランス語",
      "輸入者: AIRP事業認可（Agrément）必須",
      "輸入事前許可（API）必要"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "MDSAP非参加。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "参照されるが、国内法で明示的に義務化されているかは未確認。CODINORM（コートジボワール標準化機関）がISO加盟。"
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
    "others": [
      "FDA承認・CEマーキング・WHO事前認定を事実上認容"
    ]
  },
  "recentDevelopments": [
    {
      "date": "2026-02",
      "title": "AIRP規制活動強化（Decision 5件発出）",
      "description": "緊急時未承認医薬品使用条件、事業所変更届義務、臨床試験認可手続、事業者pharmacovigilance義務、製造施設条件の各Decisionを発出。規制能力強化が進行。"
    },
    {
      "date": "2024-05",
      "title": "AMA条約批准",
      "description": "コートジボワールがAfrican Medicines Agency（AMA）条約の批准書を寄託。アフリカ域内の医薬品規制harmonizationに参加。"
    },
    {
      "date": "2025",
      "title": "国内医薬品生産目標",
      "description": "2026年までに公立病院向け医薬品の20%を国内生産する目標を公表。"
    }
  ],
  "lastUpdated": "2026-04-03",
  "verified": null
};
