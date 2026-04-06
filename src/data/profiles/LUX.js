// ルクセンブルク (Luxembourg)
export default {
  "code": "LUX",
  "country": "ルクセンブルク",
  "countryEn": "Luxembourg",
  "region": "Europe",
  "flag": "🇱🇺",
  "legalSystemOverview": {
    "type": "EU加盟国（MDR/IVDR 直接適用）+ Loi du 16 janvier 1990 国内補完",
    "description": "ルクセンブルクはEU加盟国。MDR/IVDRが直接適用。Direction de la Santé（衛生局）がNCA。国内NBは存在せず、EU域内他国NBを利用。償還はCNS（国民健康保険基金）のBファイルリスト。ALMPS（医薬品・健康製品庁）設立法案が議会審議中。",
    "keyCharacteristics": [
      "EU MDR/IVDR 直接適用",
      "Direction de la Santé がNCA",
      "国内ノーティファイドボディなし（EU域内他国NBを利用）",
      "Loi du 16 janvier 1990（改正済み）が国内基本法",
      "CNS Bファイル方式で償還管理",
      "フランス語・ドイツ語ラベリング必須（専門家向けは英語可）",
      "ALMPS（独立規制機関）設立法案審議中",
      "メール申請方式（専用電子ポータルなし）+ EUDAMED"
    ]
  },
  "authorities": [
    {
      "name": "Direction de la Santé",
      "fullName": "Ministry of Health and Social Security - Health Directorate, Division of Pharmacy and Medicines",
      "localName": "Ministère de la Santé et de la Sécurité sociale - Direction de la santé, Division de la pharmacie et des médicaments",
      "role": "NCA: 市場監視・ビジランス・登録管理・臨床試験監督・CFS発行",
      "url": "https://guichet.public.lu/en/entreprises/import-export/intra-ue/produits-eee/dispositifs-medicaux.html",
      "isPrimary": true
    },
    {
      "name": "CNS",
      "fullName": "National Health Insurance Fund",
      "localName": "Caisse nationale de santé",
      "role": "医療機器償還（Bファイルリスト）管理。処方箋に基づく償還。",
      "url": "https://cns.public.lu/en/assure/remboursements/prestations-remboursees/medicaments-dispositifs-medicaux.html",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "国内NB不在 — EU域内他国NBを利用",
    "description": "ルクセンブルク国内にMDR/IVDR指定のノーティファイドボディは存在しない。製造者はドイツ、フランス等EU域内他国のNBを利用する。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "EU MDR Article 2(1) がそのまま適用。",
    "scope": "IVD は IVDR。SaMD・AI/ML医療機器も対象。",
    "notes": "流通業者（輸入含む）はDirection de la Santéへの届出義務あり。"
  },
  "primaryLaw": {
    "title": "Regulation (EU) 2017/745 — MDR",
    "originalTitle": "Règlement (UE) 2017/745 relatif aux dispositifs médicaux",
    "enacted": "2017",
    "lastAmended": "2024",
    "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32017R0745",
    "description": "EU MDR直接適用（2021年5月26日全面適用）。移行期間: Class III/インプラントは2027年末、その他は2028年末。"
  },
  "implementingRegulations": [
    {
      "title": "Loi modifiée du 16 janvier 1990 relative aux dispositifs médicaux",
      "date": "1990-01",
      "url": "https://legilux.public.lu/eli/etat/leg/loi/2019/05/28/a372/jo",
      "description": "ルクセンブルク医療機器基本法。複数回改正（2019年5月28日改正を含む）。MDR/IVDRの国内補完規定。",
      "category": "国内基本法"
    }
  ],
  "relatedLaws": [
    {
      "title": "GDPR / Règlement général sur la protection des données",
      "category": "データ保護",
      "enacted": "2018",
      "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679",
      "relevance": "健康データ処理に適用。CNPD（国家データ保護委員会）が監督。"
    }
  ],
  "classification": {
    "system": "EU MDR 4クラス制",
    "basis": "EU MDR Annex VIII（22のルールに基づくリスクベース分類）。",
    "classes": [
      {
        "name": "Class I",
        "nameJa": "クラスI",
        "riskLevel": "低",
        "description": "低リスク機器。自己宣言（Is/Im/IrはNB関与）。",
        "examples": [
          "弾性包帯",
          "聴診器",
          "車椅子",
          "非滅菌手袋",
          "冷却パック"
        ],
        "approvalPath": "自己宣言（DoC）"
      },
      {
        "name": "Class IIa",
        "nameJa": "クラスIIa",
        "riskLevel": "中低",
        "description": "中低リスク。NB関与必須。",
        "examples": [
          "補聴器",
          "超音波診断装置",
          "吸引カテーテル",
          "血圧計",
          "歯科用充填材"
        ],
        "approvalPath": "NB適合性評価"
      },
      {
        "name": "Class IIb",
        "nameJa": "クラスIIb",
        "riskLevel": "中高",
        "description": "中高リスク。NB詳細審査。",
        "examples": [
          "人工呼吸器",
          "輸液ポンプ",
          "X線装置",
          "血液透析装置",
          "骨接合プレート"
        ],
        "approvalPath": "NB適合性評価"
      },
      {
        "name": "Class III",
        "nameJa": "クラスIII",
        "riskLevel": "高",
        "description": "最高リスク。NB最も厳格な審査 + EU Expert Panel意見。",
        "examples": [
          "人工心臓弁",
          "冠動脈ステント",
          "人工股関節",
          "植込み型除細動器",
          "吸収性縫合糸"
        ],
        "approvalPath": "NB適合性評価 + Expert Panel"
      }
    ],
    "rules": [
      "EU MDR Annex VIII（22ルール）直接適用"
    ],
    "totalProductCodes": "EU CND"
  },
  "conformityAssessment": {
    "overview": "EU MDR適合性評価がそのまま適用。国内NBがないため、EU域内他国NBでCE適合性評価を実施。Class I機器はDirection de la Santéにメールで登録届出。",
    "routes": [
      {
        "name": "EU MDR Conformity Assessment",
        "nameJa": "EU MDR 適合性評価",
        "applicableClasses": ["Class I", "Class IIa", "Class IIb", "Class III"],
        "description": "Annex IX〜XI。EU域内他国NBを利用。Class IはDoC + Direction de la Santéに届出。詳細はEUプロファイル参照。",
        "subtypes": [],
        "avgReviewTime": "EUプロファイル参照（NB依存）",
        "avgReviewTimeSource": "https://www.emergobyul.com/resources/market-european-union",
        "fee": "NB審査料（NB・クラスにより異なる）",
        "feeSource": "https://health.ec.europa.eu/document/download/ff5716d5-fe77-4f45-b883-fcf3da4acd15_en?filename=md_nbs_fees_en.pdf",
        "url": "https://santesecu.public.lu/dam-assets/fr/politique-sante/ministere-sante/direction-sante/div-pharmacie-medicaments/medical-devices-en.pdf"
      }
    ]
  },
  "electronicSubmission": {
    "system": "メール申請 + EUDAMED",
    "url": "https://santesecu.public.lu/fr/espace-professionnel/departement-sante/pharmacies-et-medicaments/dispositifs-medicaux.html",
    "description": "専用電子ポータルなし。Class I/IVD登録はDirection de la Santéにメール（meddevices@ms.etat.lu）。10MB超ファイルはOTXアプリ経由。高リスクデバイスはEUDAMEDに直接登録。2026年5月28日よりEUDAMED 4モジュール義務化。",
    "mandatory": true
  },
  "udi": {
    "required": true,
    "system": "EU UDI — EUDAMED",
    "description": "EU MDR Article 27に基づくUDI要件適用。EUDAMEDのUDI/Deviceモジュールに登録義務。",
    "url": "https://ec.europa.eu/tools/eudamed/",
    "timeline": "EUDAMED UDI義務化: 2026年5月28日。既存国内登録→EUDAMED移行: 2026年11月28日まで"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "EU Vigilance — Direction de la Santé",
      "mandatory": true,
      "url": "https://santesecu.public.lu/fr/espace-professionnel/departement-sante/pharmacies-et-medicaments/dispositifs-medicaux.html",
      "description": "重篤事象報告: meddevices.vigilance@ms.etat.lu。公衆衛生脅威: 2日以内、死亡/予期しない重篤悪化: 10日以内、その他重篤事象: 15日以内。MIR（PDF/XML形式）で報告。FSNはフランス語・ドイツ語版が必要。"
    },
    "recalls": {
      "authority": "Direction de la Santé",
      "description": "FSCA/FSNをDirection de la Santéに通知。ルクセンブルク国内ユーザーリスト添付。",
      "url": "https://santesecu.public.lu/fr/espace-professionnel/departement-sante/pharmacies-et-medicaments/dispositifs-medicaux.html"
    },
    "surveillance": "EU MDR PMS/PSUR/PMCF要件適用。Direction de la Santéが市場監視を実施。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "Direction de la Santé",
    "name": "Certificat de libre vente / Certificate of Free Sale",
    "description": "Direction de la Santé, Division de la pharmacie et des médicamentsが発行。EU域外輸出用。RCS抄本（3ヶ月以内）、適合宣言書、QMS証明書、IFU、ラベル写し等が必要。印刷・署名・2部提出。",
    "processingTime": "要確認（公式情報で裏付け未取得）",
    "url": "https://santesecu.public.lu/fr/espace-professionnel/departement-sante/pharmacies-et-medicaments/dispositifs-medicaux/certificats-libre-vente.html"
  },
  "reimbursement": {
    "system": "CNS Bファイル償還制度",
    "authority": "CNS (Caisse nationale de santé)",
    "description": "処方箋に基づき償還。6つのBファイル（リスト）: B1（小型医療製品: 包帯・シリンジ・血糖測定器等）、B2（大型製品: 車椅子・酸素療法機器等 — 通常100%償還・レンタル方式）、B3（補聴器）、B4（呼吸器デバイス）、B5（医療食品）、B7（病院処方デバイス）。",
    "codingSystems": [
      "CNS Bファイル（B1〜B7）"
    ],
    "url": "https://cns.public.lu/en/assure/remboursements/prestations-remboursees/medicaments-dispositifs-medicaux.html"
  },
  "marketingRules": {
    "authority": "Direction de la Santé",
    "description": "能動埋込デバイス: フランス語またはドイツ語。一般医療機器・IVD: フランス語、ドイツ語、またはルクセンブルク語。専門家使用デバイスは英語も許可。FSNはフランス語・ドイツ語。",
    "keyRules": [
      "ラベリング: フランス語・ドイツ語・ルクセンブルク語のいずれか",
      "能動埋込デバイス: フランス語またはドイツ語",
      "専門家使用デバイス: 英語も許可",
      "FSN: フランス語・ドイツ語"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "EU加盟国としてMDSAP非参加。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "EN ISO 13485:2016。NB審査で実質必須。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "EN ISO 14971:2019+A11:2021。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "EN IEC 62304:2006+A1:2015。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "EN IEC 60601シリーズ。"
    },
    "others": []
  },
  "recentDevelopments": [
    {
      "date": "2026-05",
      "title": "EUDAMED義務化（2026年5月28日）",
      "description": "Actor・UDI/Device・NB/Certificate・市場監視の4モジュール義務化。既存国内登録は2026年11月28日までにEUDAMEDへ移行。"
    },
    {
      "date": "2025-01",
      "title": "ALMPS設立法案（No. 8491）議会提出",
      "description": "医薬品・医療機器・化粧品等の規制を一元化する独立機関ALMPS（Agence luxembourgeoise des médicaments et produits de santé）の設立法案。2025年3月12日に議会委員会で審議開始。"
    },
    {
      "date": "2025-12",
      "title": "欧州委員会 MDR/IVDR簡素化提案",
      "description": "COM(2025) 1023。認証手続きの効率化・管理負担軽減・レガシーデバイスの軽量化パスウェイ。ルクセンブルクにも適用予定。"
    },
    {
      "date": "2024-06",
      "title": "Regulation (EU) 2024/1860 — IVDR移行期間延長",
      "description": "IVDR移行期間を延長。MDR/IVDR両規則の改正。"
    }
  ],
  "lastUpdated": "2026-04-03",
  "verified": null
};
