// ジンバブエ (Zimbabwe)
export default {
  "code": "ZWE",
  "country": "ジンバブエ",
  "countryEn": "Zimbabwe",
  "region": "Middle East & Africa",
  "flag": "🇿🇼",
  "legalSystemOverview": {
    "type": "発展途上（包括的医療機器規制は未施行）",
    "description": "ジンバブエではMCAZ（ジンバブエ医薬品管理庁）が医療機器規制を管轄するが、包括的な法的枠組みは未整備。現行法（MASCA）は元来医薬品向けで、正式に規制対象となっているのはコンドーム・手袋のみ。2018年に医療機器規則ドラフトが策定されたが未施行。2024年に医薬品分野でWHO ML3を達成（アフリカ6番目）。ZaZiBoNa（SADC共同登録）創設メンバー。",
    "keyCharacteristics": [
      "MCAZ がNCA",
      "MASCA [Chapter 15:03] が基本法（元来医薬品向け）",
      "正式規制対象: コンドーム・手袋のみ",
      "2018年医療機器規則ドラフトは未施行",
      "GHTF/IMDRF 4クラス制（Class A/B/C/D）を採用予定",
      "ZaZiBoNa（SADC共同登録）創設メンバー",
      "2024年 医薬品分野でWHO ML3達成（医療機器はML1）",
      "英語ラベリング"
    ]
  },
  "authorities": [
    {
      "name": "MCAZ",
      "fullName": "Medicines Control Authority of Zimbabwe",
      "localName": null,
      "role": "NCA: 医薬品・医療機器の品質・安全性・有効性確保。製造・流通・保管・販売の規制。現状は医薬品が主、医療機器はコンドーム・手袋のみ正式規制。",
      "url": "https://www.mcaz.co.zw/documents/medical-devices-docs",
      "isPrimary": true
    }
  ],
  "notifiedBodies": {
    "system": "政府直接審査（NB制度なし）",
    "description": "MCAZが直接審査。第三者認証機関制度は存在しない。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "MASCA [Chapter 15:03] に基づく。ただし本法は元来医薬品向けで、医療機器の明示的定義は不十分。ドラフト規則ではGHTF/IMDRF定義を採用予定。",
    "scope": "現行: コンドーム・手袋のみ正式規制。ドラフト規則: 全医療機器・IVDを対象予定。",
    "notes": "IVDはMCAZ規制対象外。MLCScCZ（医療検査科学者評議会）が優先疾患向けIVD（HIV/TB/Malaria/COVID-19）を一部担当。"
  },
  "primaryLaw": {
    "title": "Medicines and Allied Substances Control Act [Chapter 15:03]",
    "originalTitle": "Medicines and Allied Substances Control Act",
    "enacted": "1969",
    "lastAmended": "2015",
    "url": "https://zimlii.org/akn/zw/act/1969/14/eng@2016-12-31",
    "description": "1969年制定（Act 14/1969）。Act 1/1996でMCAZを設立。元来医薬品向けで、医療機器の包括的規定は不十分。コンドーム規則（SI 183/2005）・手袋規則（SI 1/2006）のみ医療機器に適用。"
  },
  "implementingRegulations": [
    {
      "title": "Medicines and Allied Substances Control (Condom) Regulations, 2005 (SI 183/2005)",
      "date": "2005",
      "url": "https://www.mcaz.co.zw/documents/medical-devices-docs",
      "description": "コンドームの品質・安全性規制。現行で施行済みの数少ない医療機器規則。",
      "category": "医療機器規則（コンドーム）"
    },
    {
      "title": "Medicines and Allied Substances Control (Gloves) Regulations, 2006 (SI 1/2006)",
      "date": "2006",
      "url": "https://www.mcaz.co.zw/documents/medical-devices-docs",
      "description": "手袋の品質・安全性規制。",
      "category": "医療機器規則（手袋）"
    }
  ],
  "relatedLaws": [
    {
      "title": "Draft Medical Devices Regulations, 2018",
      "category": "ドラフト（未施行）",
      "enacted": "未施行",
      "url": "https://www.mcaz.co.zw/documents/medical-devices-docs",
      "relevance": "GHTF/IMDRF準拠の包括的医療機器規則ドラフト。4クラス分類・登録義務・輸入輸出許可等を規定。策定済みだが未承認・法的効力なし。"
    }
  ],
  "classification": {
    "system": "GHTF/IMDRF 4クラス制（ドラフト段階）",
    "basis": "ドラフト規則でGHTF/IMDRFに基づくリスクベース4分類を採用予定。現行では正式な分類制度は未適用（コンドーム・手袋のみ規制）。",
    "classes": [
      {
        "name": "Class A",
        "nameJa": "クラスA（ドラフト）",
        "riskLevel": "低",
        "description": "低リスク。ドラフト規則で規定。",
        "examples": ["弾性包帯", "聴診器", "舌圧子", "車椅子", "非滅菌手袋"],
        "approvalPath": "MCAZ登録（ドラフト）"
      },
      {
        "name": "Class B",
        "nameJa": "クラスB（ドラフト）",
        "riskLevel": "中低",
        "description": "中低リスク。",
        "examples": ["皮下注射針", "吸引器具", "補聴器", "血圧計", "手術用手袋"],
        "approvalPath": "MCAZ登録（ドラフト）"
      },
      {
        "name": "Class C",
        "nameJa": "クラスC（ドラフト）",
        "riskLevel": "中高",
        "description": "中高リスク。固有識別子（UDI的要素）が必要。",
        "examples": ["人工呼吸器", "骨固定プレート", "血液透析装置", "輸液ポンプ", "コンタクトレンズ"],
        "approvalPath": "MCAZ登録（ドラフト）"
      },
      {
        "name": "Class D",
        "nameJa": "クラスD（ドラフト）",
        "riskLevel": "高",
        "description": "最高リスク。固有識別子（UDI的要素）が必要。",
        "examples": ["人工心臓弁", "植込み型除細動器", "ペースメーカー", "冠動脈ステント", "人工股関節"],
        "approvalPath": "MCAZ登録（ドラフト）"
      }
    ],
    "rules": [
      "GHTF/IMDRFに基づくリスクベース分類（ドラフト段階）",
      "現行: コンドーム・手袋のみ正式規制"
    ],
    "totalProductCodes": null
  },
  "conformityAssessment": {
    "overview": "包括的な医療機器登録制度は未施行。ドラフト規則では全デバイスのデータベース登録・輸入許可（US$20/製品）・荷物確認（CIF 0.5%）を規定。現行はコンドーム・手袋のみ規制対象。",
    "routes": [
      {
        "name": "Import/Export Permit (Current)",
        "nameJa": "輸入輸出許可（現行）",
        "applicableClasses": ["Class A", "Class B", "Class C", "Class D"],
        "description": "ドラフト規則ベース: Form M.D.I.E. 2（輸入）/Form M.D.I.E. 3（輸出）。手数料US$20/製品。荷物確認: CIF 0.5%。Class A/B許可有効期間: 12ヶ月（6ヶ月延長可）、Class C以上: 6ヶ月（6ヶ月延長可）。",
        "subtypes": [],
        "avgReviewTime": "要確認（公式情報で裏付け未取得）",
        "avgReviewTimeSource": "https://www.mcaz.co.zw/documents/medical-devices-docs",
        "fee": "US$20/製品（輸入/輸出許可）+ CIF 0.5%（荷物確認）— ドラフト規則ベース",
        "feeSource": "https://globalregulatorypress.com/issue_articles/an-overview-of-the-medical-device-regulatory-requirements-in-zimbabwe/",
        "url": "https://www.mcaz.co.zw/licensing-and-enforcement/import-export/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "MCAZオンラインサービスポータル",
    "url": "https://www.mcaz.co.zw/online-services",
    "description": "MCAZはオンラインサービスポータルを運用。主に医薬品登録向け。医療機器専用の電子申請システムは未確認。ドラフト規則段階では紙ベース申請が想定される。",
    "mandatory": false
  },
  "udi": {
    "required": false,
    "system": "未導入（ドラフト規則で言及）",
    "description": "ドラフト規則ではClass C/Dに固有識別子（UDI的要素）を要求。正式なUDI制度は未導入。",
    "url": null,
    "timeline": "ドラフト規則の施行時期未定"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "Pharmacovigilance — MCAZ（医薬品向け、医療機器は極めて限定的）",
      "mandatory": true,
      "url": "https://www.mcaz.co.zw/",
      "description": "MCAZは医薬品向けPharmacovigilanceを運用（National Pharmacovigilance Policy Handbook, 2016年第2版）。医療機器のビジランスはWHO GBTスコア27%で極めて限定的。コンドーム・手袋以外の有害事象報告体制は未整備。"
    },
    "recalls": {
      "authority": "MCAZ",
      "description": "医療機器のリコール・市販後再評価の法的枠組みは未整備。MCAZは医薬品リコール権限を持つ。",
      "url": "https://www.mcaz.co.zw/how-to-register/"
    },
    "surveillance": "WHO GBTスコア（医療機器）: ML1。ビジランス27%、市場監視40%。医薬品分野はML3だが医療機器PMS制度は未整備。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "MCAZ",
    "name": "Export Permit / Certificate of Free Sale",
    "description": "MCAZが輸出許可（Form M.D.I.E. 3、US$20/製品）を発行。正式なCFS制度としては未確認だが、輸出許可が実質的にCFS機能を果たす。",
    "processingTime": "要確認（公式情報で裏付け未取得）",
    "url": "https://www.mcaz.co.zw/licensing-and-enforcement/import-export/"
  },
  "reimbursement": {
    "system": "公的医療保険制度なし（民間Medical Aid Societiesが主要）",
    "authority": "Ministry of Health and Child Care",
    "description": "公的医療保険制度は未整備。NSSAが社会保障を提供するが医療機器の償還制度は確認できず。民間Medical Aid Societies（医療保険組合）が主要カバレッジ手段。医療機器固有のコーディングシステム・償還リストなし。",
    "codingSystems": [],
    "url": "https://www.mcaz.co.zw/"
  },
  "marketingRules": {
    "authority": "MCAZ",
    "description": "英語が公用語。規制文書・申請は英語。包括的な医療機器ラベリング規則は未施行（ドラフト段階）。",
    "keyRules": [
      "英語ラベリング",
      "包括的ラベリング規則はドラフト段階",
      "コンドーム・手袋は個別規則で表示要件あり"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "MDSAP非参加。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "ドラフト規則で参照。正式採用は未確認。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "ドラフト規則で参照。"
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
      "ZaZiBoNa（SADC共同登録）創設メンバー",
      "WHO GBT医療機器スコア: ML1"
    ]
  },
  "recentDevelopments": [
    {
      "date": "2024-06",
      "title": "MCAZ 医薬品分野でWHO ML3達成（アフリカ6番目）",
      "description": "医薬品・ワクチン分野でWHO Maturity Level 3を達成。医療機器はML1のまま。医薬品規制能力の向上が医療機器規制強化の基盤に。"
    },
    {
      "date": "2026-02",
      "title": "SAHPRA医療機器リライアンスガイドライン発行",
      "description": "SAHPRA（南アフリカ）がZaZiBoNa集中手続きに基づく医療機器リライアンスガイドラインを発行。SADC域内での医療機器規制調和がジンバブエにも波及見込み。"
    },
    {
      "date": "2025-07",
      "title": "MCAZトレーサビリティガイドライン施行",
      "description": "MCAZ/LED/GL-22。医療製品のトレーサビリティガイドライン施行。製造者・輸入者・卸売・薬局・医療従事者に遵守義務。"
    },
    {
      "date": "2025-02",
      "title": "ZaZiBoNa集中手続きオンライン化",
      "description": "ZaZiBoNaが集中審査プロセスへ移行・オンラインポータル開始。現在は医薬品主対象だが医療機器への拡大を議論中。"
    }
  ],
  "lastUpdated": "2026-04-03",
  "verified": null
};
