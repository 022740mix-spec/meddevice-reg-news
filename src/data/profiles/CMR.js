// カメルーン (Cameroon)
export default {
  "code": "CMR",
  "country": "カメルーン",
  "countryEn": "Cameroon",
  "region": "Middle East & Africa",
  "flag": "🇨🇲",
  "legalSystemOverview": {
    "type": "政府審査型（医薬品規制の一部として運用・発展途上）",
    "description": "カメルーンではDPML（医薬品・研究所局）が医療機器の承認（Homologation/AMM）を管轄。Loi 90/035（薬剤師法）とDécret 98/405が法的根拠。4クラス分類を採用するが詳細基準は未公表（ガイド作成中）。審査期間90営業日。CEMAC圏の医薬品規制調和（OCEAC主導）が進行中。フランス語・英語のバイリンガル国家。",
    "keyCharacteristics": [
      "DPML/MDD（保健省内）がNCA",
      "Loi 90/035（1990年）+ Décret 98/405（1998年）が法的根拠",
      "4クラス制（Class I〜IV）だが詳細基準は未公表",
      "承認（AMM）有効期間5年",
      "審査期間90営業日",
      "現地Authorized Representative必須",
      "フランス語が行政主言語（英語も公用語）",
      "医療機器向け詳細ガイドラインは作成中",
      "CEMAC圏規制調和（OCEAC主導）に参加"
    ]
  },
  "authorities": [
    {
      "name": "DPML",
      "fullName": "Directorate of Pharmacy, Medicines, and Laboratories",
      "localName": "Direction de la Pharmacie, du Médicament et des Laboratoires",
      "role": "NCA: 医薬品・医療機器・IVDの承認（AMM）、薬事規制の策定・実施。保健省内。MDD（Medical Devices Department）が医療機器を直接担当。",
      "url": "https://dpml.cm/index.php/fr/procedure/homologation/dispositifs-medicaux",
      "isPrimary": true
    },
    {
      "name": "LANACOME",
      "fullName": "National Laboratory for Quality Control of Medicines and Expertise",
      "localName": "Laboratoire National de Contrôle de Qualité des Médicaments et d'Expertise",
      "role": "医薬品・医療機器の品質管理試験。",
      "url": null,
      "isPrimary": false
    },
    {
      "name": "CENAME",
      "fullName": "National Essential Medicines and Medical Supplies Procurement Centre",
      "localName": "Centrale Nationale d'Approvisionnement en Médicaments et Consommables Médicaux Essentiels",
      "role": "必須医薬品・医療機器の公的調達・流通。2024年4月にDécret 2024/135で再組織。",
      "url": null,
      "isPrimary": false
    },
    {
      "name": "ANOR",
      "fullName": "Agency for Standards and Quality",
      "localName": "Agence des Normes et de la Qualité",
      "role": "工業省管轄の標準化・適合性評価機関。輸入品のPECAE（出荷前適合性評価）。",
      "url": null,
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "政府直接審査（NB制度なし）",
    "description": "DPML/MDDが直接審査。品質管理試験はLANACOME。輸入品適合性評価ではANORがTÜV Rheinland・SGS・Intertek等を認定。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "Loi 90/035（薬剤師法）の「produits pharmaceutiques（医薬品）」に医療機器が含まれる。独立した医療機器定義は限定的。",
    "scope": "医療機器・IVD・体外診断薬が対象。",
    "notes": "MDD（Medical Devices Department）は2013年3月にDPML内に設立。Unit 1: Class I、Unit 2: Class II/III/IV。"
  },
  "primaryLaw": {
    "title": "Loi N° 90/035 du 10 août 1990 portant exercice et organisation de la profession de pharmacien",
    "originalTitle": "Loi portant exercice et organisation de la profession de pharmacien",
    "enacted": "1990",
    "lastAmended": "要確認",
    "url": "https://dpml.cm/images/Publications/Decrets/EP/Loi90-035du10Aout1990_Exercice_Organisation_Profession_Pharmacien.pdf",
    "description": "薬剤師法。医薬品・医療機器を含む「produits pharmaceutiques」の販売承認の基盤。"
  },
  "implementingRegulations": [
    {
      "title": "Décret N° 98/405/PM du 22 octobre 1998",
      "date": "1998-10",
      "url": "https://dpml.cm/images/Publications/Decrets/Produits%20pharmaceutiques/Decret%20Homologation%20Medicaments.pdf",
      "description": "医薬品・医療機器・体外診断薬の承認（AMM）制度。申請書類構成を規定。",
      "category": "承認手続"
    },
    {
      "title": "Décret N° 2013/093 du 03 avril 2013 — 保健省組織令",
      "date": "2013-04",
      "url": "https://dpml.cm/",
      "description": "保健省の組織令。DPMLの任務・権限を定義。",
      "category": "組織令"
    },
    {
      "title": "Circulaire N° D36-65 LC du 4 juin 2020 — 輸入技術ビザ義務化",
      "date": "2020-06",
      "url": "https://dpml.cm/",
      "description": "医薬品・医療機器の輸入に際し保健大臣の「Visa Technique d'importation」を義務化。",
      "category": "輸入規制"
    }
  ],
  "relatedLaws": [
    {
      "title": "Loi N° 96/03 du 4 janvier 1996 — Loi-cadre dans le Domaine de la Santé",
      "category": "保健枠組法",
      "enacted": "1996",
      "url": "https://www.medcamer.org/wp-content/uploads/2014/11/Loi-cadre-sant%C3%A9-1996.pdf",
      "relevance": "国家保健政策の一般的枠組み。"
    }
  ],
  "classification": {
    "system": "4クラス制（詳細基準は未公表・作成中）",
    "basis": "Class I/II/III/IVのリスクベース分類。侵襲性・影響臓器・機器構成部品由来・含有物質に基づく。ただし詳細な分類ガイドラインは「作成中」とDPMLが明記。",
    "classes": [
      {
        "name": "Class I",
        "nameJa": "クラスI",
        "riskLevel": "低",
        "description": "低リスク。MDD Unit 1が担当。",
        "examples": ["弾性包帯", "聴診器", "車椅子", "舌圧子", "非滅菌手袋"],
        "approvalPath": "DPML承認（AMM）"
      },
      {
        "name": "Class II",
        "nameJa": "クラスII",
        "riskLevel": "中低",
        "description": "中リスク。MDD Unit 2が担当。",
        "examples": ["補聴器", "血圧計", "手術用手袋", "注射器", "カテーテル"],
        "approvalPath": "DPML承認（AMM）"
      },
      {
        "name": "Class III",
        "nameJa": "クラスIII",
        "riskLevel": "中高",
        "description": "高リスク。MDD Unit 2が担当。",
        "examples": ["人工呼吸器", "輸液ポンプ", "血液透析装置", "X線装置", "骨接合プレート"],
        "approvalPath": "DPML承認（AMM）"
      },
      {
        "name": "Class IV",
        "nameJa": "クラスIV",
        "riskLevel": "高",
        "description": "最高リスク。MDD Unit 2が担当。",
        "examples": ["人工心臓弁", "冠動脈ステント", "人工股関節", "植込み型除細動器", "吸収性縫合糸"],
        "approvalPath": "DPML承認（AMM）"
      }
    ],
    "rules": [
      "4クラスのリスクベース分類",
      "詳細な分類ガイドラインはDPMLが作成中"
    ],
    "totalProductCodes": null
  },
  "conformityAssessment": {
    "overview": "DPML/MDDによる承認（Homologation/AMM）制度。申請フォームはDPMLサイトからダウンロード。現地Authorized Representative必須。初回は製造施設査察義務（明示はないが実務上）。",
    "routes": [
      {
        "name": "Homologation (AMM)",
        "nameJa": "承認（市販承認）",
        "applicableClasses": ["Class I", "Class II", "Class III", "Class IV"],
        "description": "DPML申請フォーム + 技術文書/ドシエ + 銀行振込証明 + 製品サンプル（該当時）。技術文書: ブランド名・機器説明・使用目的・対象診療科・禁忌/警告/有害事象・保管条件等。現地AR必須。",
        "subtypes": [],
        "avgReviewTime": "90営業日",
        "avgReviewTimeSource": "https://dpml.cm/index.php/fr/procedure/homologation/dispositifs-medicaux",
        "fee": "要確認（公式情報で裏付け未取得）",
        "feeSource": "https://dpml.cm/index.php/fr/procedure/homologation/dispositifs-medicaux",
        "url": "https://dpml.cm/index.php/fr/procedure/homologation/dispositifs-medicaux"
      }
    ]
  },
  "electronicSubmission": {
    "system": "紙ベース申請（専用電子ポータルなし）",
    "url": "https://dpml.cm/index.php/fr/procedure/homologation/dispositifs-medicaux",
    "description": "DPMLサイトから申請フォームをダウンロード。オンライン提出の仕組みは未確認。基本的に紙ベース・直接提出。",
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
      "system": "Pharmacovigilance — DPML",
      "mandatory": true,
      "url": "https://dpml.cm/",
      "description": "国家ファーマコビジランス委員会・ファーマコビジランスセンター・技術委員会の3層構造。DPMLサイトから報告フォームをダウンロードまたはオンライン報告。MDD業務範囲に医療機器の市販後監視を含むが、詳細手順は未公開。WHO 2024ファクトシート: カメルーンは「PMS/vigilanceの全要素を持つ11カ国」に含まれる。"
    },
    "recalls": {
      "authority": "DPML / IGSPL",
      "description": "IGSPL（査察総局）が遵守監視・査察。リコール手続の詳細は未公開。",
      "url": "https://dpml.cm/"
    },
    "surveillance": "Pharmacovigilance制度は存在。医療機器特有の市販後監視規則は未公開だがMDD業務範囲に含む。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "DPML（推定）",
    "name": "Certificat de Libre Vente",
    "description": "CFS発行制度の公式詳細は未確認。",
    "processingTime": "要確認（公式情報で裏付け未取得）",
    "url": "https://dpml.cm/"
  },
  "reimbursement": {
    "system": "公的調達（CENAME）+ CSU（ユニバーサル医療保障、パイロット段階）",
    "authority": "CENAME / CNPS",
    "description": "CENAMEが公立医療施設への必須医療機器・消耗品の一元調達。CSU（Couverture Santé Universelle）は2023年4月にパイロット開始だが医療機器の償還カバレッジは未確認。CNPSは労働者向け社会保険。医療機器償還は体系化されておらず、多くが患者自己負担。",
    "codingSystems": [],
    "url": "https://dpml.cm/"
  },
  "marketingRules": {
    "authority": "DPML",
    "description": "フランス語が行政主言語（英語も公用語）。申請書類は一部フランス語必須。輸入にはVisa Technique d'importation（輸入技術ビザ、2020年義務化）が必要。",
    "keyRules": [
      "フランス語が行政主言語",
      "申請書類: 一部フランス語必須",
      "輸入技術ビザ（Visa Technique d'importation）必須",
      "現地Authorized Representative必須"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "MDSAP非参加。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "実質的に認知。法的義務化の明文規定は未確認。"
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
      "ANORがISO加盟機関",
      "FDA承認・CEマーキングが実務上参照される"
    ]
  },
  "recentDevelopments": [
    {
      "date": "2024-04",
      "title": "CENAME再組織令",
      "description": "Décret 2024/135。2017年公的機関法に基づくガバナンス改革。必須医薬品・医療機器の公的調達体制を強化。"
    },
    {
      "date": "2024-02",
      "title": "CEMAC共同医薬品購入メカニズム",
      "description": "OCEAC/WHO主催ワークショップで政策・技術文書を検討・承認。中部アフリカ域内の規制調和が進行。"
    },
    {
      "date": "2025-01",
      "title": "LANACOME — 医薬品トレーサビリティ強化",
      "description": "Bloom Public Health/Origin Technologiesと提携。医薬品トレーサビリティ強化（医療機器への拡大可能性）。"
    },
    {
      "date": "2023-06",
      "title": "医薬品承認実務ガイド公表",
      "description": "Guide d'homologation des produits pharmaceutiques（2023年6月29日）。医療機器向けガイドは「作成中」と明記。"
    }
  ],
  "lastUpdated": "2026-04-03",
  "verified": null
};
