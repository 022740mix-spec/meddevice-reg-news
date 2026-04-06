// ベナン (Benin)
export default {
  "code": "BEN",
  "country": "ベナン",
  "countryEn": "Benin",
  "region": "Middle East & Africa",
  "flag": "🇧🇯",
  "legalSystemOverview": {
    "type": "政府審査型（医薬品規制の一部として運用）",
    "description": "ベナンではABMed（ベナン医薬品・健康製品庁、旧DPMED→ABRP→ABMed、2023年現名称）が医療機器の規制を管轄。Loi n° 2021-03（医薬活動組織法）が基本法で、Décret n° 2024-1298（医療機器承認手続）が医療機器固有の政令。独立した医療機器分類制度は未整備で、国際認証（CE/FDA/WHO PQ）への依存度が高い。UEMOA加盟国として域内規制調和（Règlement 06/2010/CM/UEMOA）の枠組みに参加。2021年AMA条約批准。2024年にAMA初代理事会議長国に選出。",
    "keyCharacteristics": [
      "ABMed（2023年Décret 2023-422で現名称）がNCA",
      "Loi 2021-03（医薬活動組織法）が基本法",
      "Décret 2024-1298が医療機器承認手続を規定",
      "独立した医療機器分類制度は未整備（国際認証に依存）",
      "UEMOA加盟国（域内規制調和枠組み）",
      "Homologation/AMM制度で登録",
      "フランス語ラベリング必須",
      "非滅菌機器は非薬局商業者にも開放（Décret 2025-785）",
      "AMA条約批准済み（2021年）、AMA初代理事会議長国（2024年）",
      "WHO GBT成熟度レベル1（2023年時点、レベル3を2024年目標）"
    ]
  },
  "authorities": [
    {
      "name": "ABMed",
      "fullName": "Beninese Agency for Medicines and Other Health Products",
      "localName": "Agence Béninoise du Médicament et des autres produits de santé",
      "role": "NCA: 医薬品・医療機器の登録（Homologation/AMM）・品質管理・製造施設査察・輸入監視・薬事監視・臨床試験監督。法人格を持つ独立行政法人（保健省所管）。旧DPMED→ABRP→ABMed（2023年改組）。",
      "url": "https://abmed.bj/presentation",
      "isPrimary": true
    },
    {
      "name": "DHE",
      "fullName": "Directorate of Approvals and Establishments",
      "localName": "Direction des Homologations et des Établissements",
      "role": "ABMed内の承認・事業所管理部門。医療機器・医薬品のHomologation/AMM審査を実施。",
      "url": "https://abmed.bj/declaration-demande",
      "isPrimary": false
    },
    {
      "name": "DIVEC",
      "fullName": "Directorate of Inspections, Vigilance and Clinical Trials",
      "localName": "Direction des Inspections, de la Vigilance et des Essais Cliniques",
      "role": "査察・pharmacovigilance・臨床試験管理を担当。",
      "url": "https://abmed.bj/textes-legislatifs",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "政府直接審査（NB制度なし）",
    "description": "ABMedが直接審査。第三者認証機関制度は存在しない。FDA承認・CEマーキング・WHO事前認定が事実上認容される。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "Loi n° 2021-03（医薬活動組織法）に医療機器（dispositifs médicaux）の定義が含まれる。Décret n° 2024-1298で承認手続対象としての医療機器を規定。",
    "scope": "医療機器・IVD・試薬が対象。滅菌医療機器と非滅菌医療機器で流通規制が異なる（Décret 2025-785）。",
    "notes": "非滅菌医療機器は非薬局商業者にも流通が開放（保健省認可要）。滅菌医療機器・IVD試薬は薬局専門家に限定。"
  },
  "primaryLaw": {
    "title": "Loi n° 2021-03 du 01 février 2021 portant organisation des activités pharmaceutiques en République du Bénin",
    "originalTitle": "Loi portant organisation des activités pharmaceutiques",
    "enacted": "2021",
    "lastAmended": "要確認",
    "url": "https://sgg.gouv.bj/doc/loi-2021-03/",
    "description": "2021年2月1日制定。医薬活動の組織に関する法律（全100条）。医薬品・医療機器・健康製品の定義、薬局業務条件、規制枠組み、罰則を規定。ABMed（旧ABRP）の法的根拠。Medicrime条約への対応も含む。"
  },
  "implementingRegulations": [
    {
      "title": "Décret n° 2024-1298 du 06 novembre 2024 portant procédures d'homologation des dispositifs médicaux",
      "date": "2024-11",
      "url": "https://sgg.gouv.bj/doc/decret-2024-1298/download",
      "description": "医療機器の承認（Homologation）手続を規定する政令。申請書類・審査手順・分類等を規定。",
      "category": "医療機器承認手続"
    },
    {
      "title": "Décret n° 2023-422 du 26 juillet 2023 portant approbation des statuts de l'ABMed",
      "date": "2023-07",
      "url": "https://sgg.gouv.bj/doc/decret-2023-422/",
      "description": "ABMed（ベナン医薬品・健康製品庁）の組織規程を承認する政令。旧ABRP→ABMedへの改組。",
      "category": "機関設立"
    },
    {
      "title": "Décret n° 2024-1295 du 06 novembre 2024 portant conditions d'importation, d'exportation et de distribution des produits de santé autres que le médicament",
      "date": "2024-11",
      "url": "https://sgg.gouv.bj/doc/decret-2024-1295/download",
      "description": "医薬品以外の健康製品（医療機器含む）の輸入・輸出・流通条件を規定。",
      "category": "輸入・流通規制"
    },
    {
      "title": "Décret n° 2025-785 du 17 décembre 2025 modifiant le décret 2024-1295",
      "date": "2025-12",
      "url": "https://sgg.gouv.bj/cm/2025-12-17/",
      "description": "Décret 2024-1295の改正令。非滅菌医療機器の非薬局商業者への流通開放、滅菌機器・IVD試薬の薬局専門家限定を規定。非適合事業者に1年間の移行期間（2025年12月中旬〜）。",
      "category": "輸入・流通規制改正"
    }
  ],
  "relatedLaws": [
    {
      "title": "Loi n° 2020-20 du 02 septembre 2020 portant création de l'ABRP",
      "category": "機関設立法",
      "enacted": "2020",
      "url": "https://www.leemafrique.org/fr/agence-beninoise-de-regulation-pharmaceutique.asp",
      "relevance": "ABRP（後のABMed）を公的法人として設立する法律。Loi 2021-03と合わせてABMedの法的基盤を構成。"
    },
    {
      "title": "Règlement n° 06/2010/CM/UEMOA relatif aux procédures d'homologation des produits pharmaceutiques",
      "category": "UEMOA域内規則",
      "enacted": "2010",
      "url": "https://www.juriafrica.com/lex/reglement-06-2010-1er-octobre-2010-15838.htm",
      "relevance": "UEMOA加盟国における医薬品承認手続の域内共通規則。ベナンの承認制度の域内調和根拠。"
    },
    {
      "title": "Règlement n° 02/2005/CM/UEMOA relatif à l'harmonisation de la réglementation pharmaceutique",
      "category": "UEMOA域内規則",
      "enacted": "2005",
      "url": "https://www.ijdra.com/index.php/journal/article/download/121/42",
      "relevance": "UEMOA域内の医薬品規制調和に関する基本規則。生産・登録・品質保証・査察・供給等の共通枠組み。"
    },
    {
      "title": "African Medicines Agency (AMA) Treaty",
      "category": "アフリカ連合条約",
      "enacted": "2019",
      "url": "https://au.int/en/pressreleases/20210812/republic-benin-deposits-instrument-ratification-african-medicines-agency-ama",
      "relevance": "ベナンは2021年8月に批准書を寄託。2024年にAMA初代理事会議長にベナンのYossounon Chabi氏が選出。"
    }
  ],
  "classification": {
    "system": "未整備（国際認証に依存、Décret 2024-1298で制度化進行中）",
    "basis": "公式な国内分類規則は発展途上。GHTF/IMDRFの4クラス体系（Class I/II/III/IV）を参照する可能性。実務的にはFDA承認・CEマーキング・WHO事前認定品が追加審査なしで受入。Décret 2024-1298が医療機器固有の承認手続を新たに規定。",
    "classes": [
      {
        "name": "Class I",
        "nameJa": "クラスI（参考）",
        "riskLevel": "低",
        "description": "低リスク。国際認証に基づく評価。非滅菌品は非薬局事業者にも流通可。",
        "examples": ["弾性包帯", "聴診器", "車椅子", "舌圧子", "非滅菌手袋"],
        "approvalPath": "ABMed登録（Homologation）"
      },
      {
        "name": "Class II",
        "nameJa": "クラスII（参考）",
        "riskLevel": "中低",
        "description": "中リスク。国際認証に基づく評価。",
        "examples": ["補聴器", "血圧計", "手術用手袋", "注射器", "カテーテル"],
        "approvalPath": "ABMed登録（Homologation）"
      },
      {
        "name": "Class III",
        "nameJa": "クラスIII（参考）",
        "riskLevel": "中高",
        "description": "高リスク。国際認証に基づく評価。",
        "examples": ["人工呼吸器", "輸液ポン���", "血液透析装置", "X線装置", "骨接合プレート"],
        "approvalPath": "ABMed登録（Homologation）"
      },
      {
        "name": "Class IV",
        "nameJa": "クラスIV（参考）",
        "riskLevel": "高",
        "description": "最高リスク。国際認証に基づく評価。",
        "examples": ["人工心臓弁", "冠動脈ステント", "人工股関節", "植込み型除細動器", "吸収性縫合糸"],
        "approvalPath": "ABMed登録（Homologation）"
      }
    ],
    "rules": [
      "国内分類規則は発展途上（Décret 2024-1298で制度化進行中）",
      "FDA承認・CEマーキング・WHO PQを事実上認容",
      "滅菌/非滅菌の区分が流通規制に影響（Décret 2025-785）"
    ],
    "totalProductCodes": null
  },
  "conformityAssessment": {
    "overview": "ABMedによるHomologation/AMM制度。Décret 2024-1298に基づく医療機器承認手続。フランス語で申請。輸入者はABMedの事業認可（Agrément）を事前取得。UEMOA共通承認手続（Règlement 06/2010/CM/UEMOA）の枠組みに準拠。",
    "routes": [
      {
        "name": "Homologation (AMM)",
        "nameJa": "登録（市販承認）",
        "applicableClasses": ["Class I", "Class II", "Class III", "Class IV"],
        "description": "ABMedのDHE（承認・事業所管理部門）が審査。フランス語で申請書類を提出。輸入事前許可（API）が必要。国際認証（CE/FDA/WHO PQ）保有品は簡略審査が期待される。",
        "subtypes": [],
        "avgReviewTime": "要確認（公式情報で裏付け未取得）",
        "avgReviewTimeSource": "https://abmed.bj/textes-legislatifs",
        "fee": "要確認（公式情報で裏付け未取得。2016年省令でHomologation手数料を規定）",
        "feeSource": "https://www.leemafrique.org/fr/reglementation-pharmaceutique-au-benin.asp",
        "url": "https://service-public.bj/public/services/service/PS00045"
      }
    ]
  },
  "electronicSubmission": {
    "system": "GUFE（輸入事前許可のデジタル化）+ 紙ベース申請",
    "url": "https://douanes.gouv.bj/en/circulars/generalisation-de-la-dematerialisation-des-autorisations-prelables-dimportation-de-la-dpmed-a-tous-les-importateurs/",
    "description": "2019年より輸入事前許可（API）のデジタル化を税関と連携して実施（Circular Note No. 0869/DGDDI/DBP）。Homologation申請自体はオンライン化を推進中（ABMedデジタル化戦略）だが、紙ベースが主。",
    "mandatory": false
  },
  "udi": {
    "required": false,
    "system": "GS1トレーサビリティ（導入推進中）",
    "description": "独立したUDI制度は未導入。ABMedがGS1標準に基づく健康製品トレーサビリティシステムの導入を推進（2023年末目標、現状未確認）。",
    "url": "https://www.leemafrique.org/fr/agence-beninoise-de-regulation-pharmaceutique.asp",
    "timeline": "GS1トレーサビリティ導入推進中"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "Pharmacovigilance — ABMed/DIVEC",
      "mandatory": true,
      "url": "https://abmed.bj/lirePDF/2a2c730b-c64a-4de2-a880-c46201d6189a",
      "description": "ABMedのDIVEC（査察・監視・臨床試験部門）がpharmacovigilanceを管轄。医療機器特有のmatériovigilance制度は発展途上。WHO国際医薬品モニタリングプログラムに参加。"
    },
    "recalls": {
      "authority": "ABMed",
      "description": "ABMedが市場安全措置・リコール指示権限を持つ。偽造品対策を重点的に推進。",
      "url": "https://abmed.bj/lirePDF/708759fe-07af-43e2-9413-ba490672dbbb"
    },
    "surveillance": "Pharmacovigilance制度は存在するが、医療機器に特化した市販後監視制度は発展途上。DIVEC（査察・監視部門）が担当。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "ABMed（推定）",
    "name": "Certificat de Libre Vente",
    "description": "CFS発行制度の公式詳細は未確認。輸入登録時に原産国のCFSが求められる慣行。",
    "processingTime": "要確認（公式情報で裏付け未取得）",
    "url": "https://abmed.bj/assets/img/pages/Fiches_Modeles_ABMed.pdf"
  },
  "reimbursement": {
    "system": "公的医療サービス + ARCH（保険制度）",
    "authority": "Ministère de la Santé（保健省）",
    "description": "ベナンではARCH（Assurance pour le Renforcement du Capital Humain）プログラムにより、最貧困層への医療保険を提供。公立医療施設への医療機器調達はCAME-Bénin（ベナン必須医薬品調達センター）が管理。医療機器特有の償還リストは未確認。",
    "codingSystems": [],
    "url": "https://sgg.gouv.bj/doc/loi-2021-03/"
  },
  "marketingRules": {
    "authority": "ABMed",
    "description": "フランス語ラベリング必須。申請書類はフランス語で提出。輸入者はABMedの事業認可（Agrément）を事前取得。Décret 2018-262で医療職・医薬品広告を規制。",
    "keyRules": [
      "フランス語ラベリング必須",
      "申請書類: フランス語で提出",
      "輸入者: ABMed事業認可（Agrément）必須",
      "輸入事前許可（API）必要",
      "医療機器広告の規制（Décret 2018-262）"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "MDSAP非参加。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "参照されるが、国内法で明示的に義務化されているかは未確認。"
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
      "UEMOA加盟国（域内規制調和枠組み）",
      "AMA条約批准済み（2021年）、AMA初代理事会議長国（2024年）",
      "WHO GBT成熟度レベル1（2023年時点）",
      "WHO Collaborative Registration Pathways（CRP）3種に参加（2024年）",
      "FDA承認・CEマーキング・WHO PQを事実上認容",
      "PIC/S基準に基づく査察ガイドライン採用（2025年11月更新）"
    ]
  },
  "recentDevelopments": [
    {
      "date": "2024-11",
      "title": "医療機器承認手続政令（Décret 2024-1298）制定",
      "description": "2024年11月6日、医療機器の承認（Homologation）手続を規定するDécret n° 2024-1298が制定。ベナン初の医療機器固有の承認手続政令。"
    },
    {
      "date": "2024-11",
      "title": "健康製品輸入・流通条件政令（Décret 2024-1295）制定",
      "description": "医薬品以外の健康製品（医療機器含む）の輸入・輸出・卸売・小売流通条件を規定するDécret n° 2024-1295が制定。"
    },
    {
      "date": "2024-04",
      "title": "AMA初代理事会議長にベナン代表選出",
      "description": "African Medicines Agency（AMA）の初代理事会（Governing Board）議長にベナンのYossounon Chabi氏が選出。"
    },
    {
      "date": "2025-12",
      "title": "Décret 2025-785: 健康製品流通規制改正",
      "description": "非滅菌医療機器の非薬局商業者への流通開放を規定。滅菌機器・IVD試薬は薬局専門家に限定。非適合事業者に1年間の移行期間。"
    }
  ],
  "lastUpdated": "2026-04-06",
  "verified": null
};
