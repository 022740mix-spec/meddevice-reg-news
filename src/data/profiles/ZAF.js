// 南アフリカ (South Africa)
export default {
  "code": "ZAF",
  "country": "南アフリカ",
  "countryEn": "South Africa",
  "region": "Middle East & Africa",
  "flag": "🇿🇦",
  "legalSystemOverview": {
    "type": "混合法体系（ローマ・オランダ法 + コモンロー）の中央集権制",
    "description": "南アフリカの医療機器規制は Medicines and Related Substances Act（Act 101 of 1965、2015年改正）を根幹とし、SAHPRA（South African Health Products Regulatory Authority）が一元的に管轄する。SAHPRAは2018年2月に旧MCC（Medicines Control Council）から移行して設立された。医療機器規制は2016年12月に Government Gazette No. 40480（R.1515）として規則が公布され、段階的に施行中。GHTF/IMDRFに整合した4クラス分類制度（Class A/B/C/D）を採用。2025年現在、施設ライセンス（Establishment Licence）制度は運用中だが、機器登録（Registration）の Call-Up はまだ発行されておらず、段階的導入が進行中。",
    "keyCharacteristics": [
      "SAHPRA による一元的な中央規制体制（2018年にMCCから移行）",
      "リスクベースの4クラス分類（Class A/B/C/D）— GHTF/IMDRF整合",
      "施設ライセンス制度（Manufacturer / Distributor / Wholesaler）が先行運用",
      "機器登録（Registration）は段階的 Call-Up 方式で導入予定",
      "参照国（FDA/EU/Health Canada/TGA等）の認可を活用する Reliance Pathway",
      "ISO 13485:2016 認証が施設ライセンスの必須要件（2025年6月〜）"
    ]
  },
  "authorities": [
    {
      "name": "SAHPRA",
      "fullName": "South African Health Products Regulatory Authority",
      "localName": null,
      "role": "医療機器の施設ライセンス・機器登録・市販後監視・リコール管理・臨床試験承認・広告規制。医療機器規制の中核機関。",
      "url": "https://www.sahpra.org.za/medical-devices/",
      "isPrimary": true
    },
    {
      "name": "NDoH",
      "fullName": "National Department of Health",
      "localName": null,
      "role": "保健政策全般の策定。NHI（National Health Insurance）の推進。SAHPRAの上位監督機関。",
      "url": "https://www.health.gov.za/",
      "isPrimary": false
    },
    {
      "name": "CMS",
      "fullName": "Council for Medical Schemes",
      "localName": null,
      "role": "民間医療保険（Medical Aid Schemes）の規制・監督",
      "url": "https://www.medicalschemes.co.za/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "SAHPRA 認定適合性評価機関（Conformity Assessment Bodies: CABs）",
    "description": "SAHPRAは直接的な技術文書審査に加え、ISO 13485:2016認証のためにSAHPRA認定CABを指定。2025年6月1日から施設ライセンスの更新にはSAHPRA認定CABによるISO 13485認証が必須。機器登録時の適合性評価はSAHPRAが直接実施するが、参照国の認可を活用するReliance Pathwayも導入予定。",
    "bodies": [
      {
        "name": "SGS",
        "country": "スイス",
        "url": "https://www.sgs.com/"
      },
      {
        "name": "BSI",
        "country": "英国",
        "url": "https://www.bsigroup.com/"
      },
      {
        "name": "TÜV SÜD",
        "country": "ドイツ",
        "url": "https://www.tuvsud.com/"
      },
      {
        "name": "Intertek",
        "country": "英国",
        "url": "https://www.intertek.com/"
      }
    ]
  },
  "deviceDefinition": {
    "legalDefinition": "Medicines and Related Substances Act (Act 101 of 1965) 及び R.1515 規則に定義。疾病の診断・治療・軽減・予防、又は身体の構造・機能の回復・矯正・修正を目的とする器具・装置・機械・インプラント・体外試薬・ソフトウェア・材料等で、その主たる作用が薬理学的・免疫学的・代謝的手段によらないもの。",
    "scope": "IVD（体外診断用医療機器）も同一規制枠組みの適用範囲に含まれる。IVDは独自のClass A〜Dの分類規則が適用される。",
    "notes": "SaMD（Software as a Medical Device）は2025年9月にSAHPRAがAI/ML医療機器に関するガイダンスを発行し、規制対象の明確化が進行。コンビネーション製品は主たる作用機序に基づき規制区分を判断。"
  },
  "primaryLaw": {
    "title": "Medicines and Related Substances Act (Act 101 of 1965, as amended)",
    "originalTitle": null,
    "enacted": "1965",
    "lastAmended": "2015（Amendment Act No. 14 of 2015 — 2017年5月施行）",
    "url": "https://www.sahpra.org.za/document/medicines-and-related-substances-act-1965-act-no-101-of-1965-as-amended/",
    "description": "南アフリカにおける医薬品・医療機器規制の根幹法。2015年改正（Act 14 of 2015）により医療機器の規制権限が明確化され、SAHPRAの設立根拠が規定された。2017年5月に施行。"
  },
  "implementingRegulations": [
    {
      "title": "Regulations Relating to Medical Devices and IVDs (R.1515, GG 40480)",
      "date": "2016-12-09",
      "url": "https://sahpra.org.za/wp-content/uploads/2019/09/20161209_Medical-Device-Regulations_Gov-Gazette-40480.pdf",
      "description": "医療機器及びIVDの分類・施設ライセンス・登録・ラベリング・市販後監視・臨床試験等を包括的に規定する中核規則。2016年12月9日公布。",
      "category": "包括規制"
    },
    {
      "title": "SAHPGL-MD-04 Guideline for Classification of Medical Devices and IVDs",
      "date": "2024-08（v4）",
      "url": "https://www.sahpra.org.za/wp-content/uploads/2024/08/SAHPGL-MD-04_v4-Guideline-for-Classification-of-MD-and-IVDs1.pdf",
      "description": "医療機器及びIVDの4クラス分類（Class A/B/C/D）に関するガイドライン。GHTF/IMDRFの分類規則に整合。",
      "category": "分類"
    },
    {
      "title": "SAHPGL-MD-07 Guideline on Licensing of Medical Device Establishments",
      "date": "2023-02（v4）",
      "url": "https://www.sahpra.org.za/wp-content/uploads/2023/02/SAHPGL-MD-07_v4-Guideline-on-Questions-and-Answers-Licensing-of-Medical-Device-Establishments.pdf",
      "description": "医療機器施設ライセンス（Manufacturer / Distributor / Wholesaler）の取得・更新・変更に関するQ&Aガイドライン。",
      "category": "施設許可"
    },
    {
      "title": "SAHPGL-MD-03 Guideline for Medical Device Vigilance (Adverse Event Reporting)",
      "date": "2024-12（v4）",
      "url": "https://www.sahpra.org.za/wp-content/uploads/2024/12/SAHPGL-MD-03_v4-Guideline-for-Medical-Device-Adverse-Event-Reporting.pdf",
      "description": "医療機器の有害事象報告及びField Safety Corrective Action（FSCA）に関するガイドライン。GHTF SG2ガイダンスに整合。",
      "category": "市販後"
    },
    {
      "title": "SAHPGL-MD-16 Guideline on Clinical Evaluation of Medical Devices",
      "date": "2025-09（v1）",
      "url": "https://www.sahpra.org.za/wp-content/uploads/2025/09/SAHPGL-MD-16_v1-Guideline-on-Clinical-Evaluation-of-Medical-Devices.pdf",
      "description": "医療機器の臨床評価に関するガイドライン。臨床データの収集・分析・評価の要件を規定。",
      "category": "臨床評価"
    },
    {
      "title": "SAHPGL-MD-17 Guideline on Clinical Investigation of Medical Devices",
      "date": "2025-09（v1）",
      "url": "https://www.sahpra.org.za/wp-content/uploads/2025/09/SAHPGL-MD-17_v1-Guideline-on-Clinical-Investigation-of-Medical-Devices.pdf",
      "description": "南アフリカ国内で実施する医療機器の臨床試験要件。ISO 14155:2020に整合。SAHPRAの事前承認と倫理委員会の承認が必要。",
      "category": "臨床試験"
    },
    {
      "title": "MD08 Regulatory Requirements for AI/ML-enabled Medical Devices",
      "date": "2025-09",
      "url": "https://www.sahpra.org.za/wp-content/uploads/2025/09/MD08-20252026_-SAHPRA-Communication-to-Industry-AI-Medical-devices_Acknowledgements.pdf",
      "description": "AI/ML搭載医療機器の規制要件に関するガイダンス。SAHPRA 2025-2030戦略計画に基づく。",
      "category": "AI/ML"
    }
  ],
  "relatedLaws": [
    {
      "title": "National Health Act (Act 61 of 2003)",
      "category": "保健法",
      "enacted": "2003",
      "url": "https://www.gov.za/documents/national-health-act",
      "relevance": "南アフリカの国民保健制度の枠組み法。医療機器が使用される医療施設の基準や臨床試験の倫理的枠組みに関連。"
    },
    {
      "title": "National Health Insurance Act (Act 20 of 2023)",
      "category": "医療保険",
      "enacted": "2024-05-15（署名）",
      "url": "https://www.health.gov.za/nhi/",
      "relevance": "国民皆保険制度（NHI）の設立根拠法。2024年5月15日に大統領が署名。段階的実施（2024〜2028年予定）。医療機器の償還制度に大きな影響を与える可能性。"
    },
    {
      "title": "Protection of Personal Information Act (POPIA, Act 4 of 2013)",
      "category": "個人情報保護",
      "enacted": "2013（2021年7月完全施行）",
      "url": "https://popia.co.za/",
      "relevance": "医療機器が取り扱う個人健康情報の保護要件。コネクテッドデバイスやSaMDに直接影響。"
    },
    {
      "title": "Consumer Protection Act (Act 68 of 2008)",
      "category": "消費者保護",
      "enacted": "2008",
      "url": "https://www.gov.za/documents/consumer-protection-act",
      "relevance": "医療機器を含む消費者製品の安全性・品質・表示に関する一般的な消費者保護規定。"
    }
  ],
  "classification": {
    "system": "4クラス制（Class A / B / C / D）",
    "basis": "リスクベース（GHTF/IMDRF整合）",
    "classes": [
      {
        "name": "Class A",
        "nameJa": "クラスA",
        "riskLevel": "低リスク",
        "description": "最も低いリスクの医療機器。非侵襲的で一般的な用途のものが該当。",
        "examples": [
          "非滅菌の外科器具",
          "聴診器",
          "車椅子",
          "弾性包帯"
        ],
        "approvalPath": "施設ライセンス + 登録（Call-Up後。自己宣言ベースの予定）"
      },
      {
        "name": "Class B",
        "nameJa": "クラスB",
        "riskLevel": "低〜中リスク",
        "description": "低〜中リスクの医療機器。短期侵襲的デバイスや一部のエネルギー使用デバイスが該当。",
        "examples": [
          "吸引器",
          "シリンジポンプ",
          "超音波診断装置",
          "歯科充填材"
        ],
        "approvalPath": "施設ライセンス + 登録（技術文書審査）"
      },
      {
        "name": "Class C",
        "nameJa": "クラスC",
        "riskLevel": "中〜高リスク",
        "description": "中〜高リスクの医療機器。長期侵襲的デバイスや一部のインプラントが該当。",
        "examples": [
          "人工呼吸器",
          "骨固定プレート",
          "透析装置",
          "冠動脈カテーテル"
        ],
        "approvalPath": "施設ライセンス + 登録（詳細な技術文書審査・臨床データ要求）"
      },
      {
        "name": "Class D",
        "nameJa": "クラスD",
        "riskLevel": "高リスク",
        "description": "最高リスクの医療機器。生命維持・心臓血管系インプラント等が該当。",
        "examples": [
          "埋込み型心臓ペースメーカー",
          "薬剤溶出ステント",
          "人工心臓弁",
          "人工内耳"
        ],
        "approvalPath": "施設ライセンス + 登録（最も厳格な審査・臨床データ必須）"
      }
    ],
    "rules": [
      {
        "id": "SAHPGL-MD-04 分類規則",
        "description": "GHTF/IMDRFの分類原則に基づく分類規則。意図する用途、侵襲性の程度、使用期間、エネルギー源の有無等により分類。IVDは独自の分類規則（Class A〜D）が適用。",
        "url": "https://www.sahpra.org.za/wp-content/uploads/2024/08/SAHPGL-MD-04_v4-Guideline-for-Classification-of-MD-and-IVDs1.pdf"
      }
    ],
    "totalProductCodes": "GHTF/IMDRFの分類規則に基づく（南アフリカ独自のProduct Code体系は未整備）"
  },
  "conformityAssessment": {
    "overview": "SAHPRAが直接審査を実施する。現在は施設ライセンス制度が先行運用中で、機器登録（Registration）は段階的Call-Up方式で導入予定。参照国（FDA/EU/Health Canada/TGA/PMDA/ANVISA等）の認可を活用するReliance Pathwayが計画されている。",
    "routes": [
      {
        "name": "Medical Device Establishment Licence (MDEL)",
        "nameJa": "医療機器施設ライセンス",
        "applicableClasses": [
          "全クラス"
        ],
        "description": "南アフリカで医療機器を製造・輸入・流通する全ての事業者に必要。Manufacturer（製造）、Distributor（輸入・流通）、Wholesaler（保管・輸送）の3種。2025年6月からISO 13485:2016認証が更新要件。",
        "subtypes": [
          {
            "name": "Manufacturer Licence",
            "description": "医療機器の製造・梱包・ラベリング・保守・輸入・輸出を行う施設用。手数料: R25,200。"
          },
          {
            "name": "Distributor Licence",
            "description": "医療機器の輸入・輸出・流通を行う施設用。手数料: R15,000。"
          },
          {
            "name": "Wholesaler Licence",
            "description": "医療機器の保管・輸送・配送を行う施設用。手数料: R15,000。"
          }
        ],
        "avgReviewTime": "通常数ヶ月（SAHPRAの処理能力に依存）",
        "avgReviewTimeSource": "https://omcmedical.com/south-africa-medical-device-registration",
        "fee": "Manufacturer: R25,200 / Distributor: R15,000 / Wholesaler: R15,000 + 年次維持費",
        "feeSource": "https://www.sahpra.org.za/wp-content/uploads/2023/02/SAHPGL-MD-07_v4-Guideline-on-Questions-and-Answers-Licensing-of-Medical-Device-Establishments.pdf",
        "url": "https://www.sahpra.org.za/medical-devices/"
      },
      {
        "name": "Medical Device Registration（段階的導入予定）",
        "nameJa": "医療機器登録",
        "applicableClasses": [
          "全クラス（Call-Up順）"
        ],
        "description": "機器個別の登録制度。SAHPRAが Call-Up Notice を発行し、リスクの高いクラスから順次登録を求める方式。2026年4月時点で Call-Up Notice は未発行。Medical Device Registration Feasibility Study が15社の参加で進行中（Class C/D IVD・非IVD製品対象）。SAHPRAは2025/26年度中に予備報告書を公表予定。参照国の認可を活用する Reliance Pathway を導入予定。登録証の有効期間は5年。",
        "subtypes": [
          {
            "name": "Full Assessment（完全審査）",
            "description": "技術文書の完全な審査。安全性・性能・品質に関する包括的なエビデンスが必要。"
          },
          {
            "name": "Reliance Pathway（参照経路）",
            "description": "参照国（FDA/EU/Health Canada/TGA/PMDA/ANVISA/WHO PQ）の認可を活用した簡略化審査。"
          }
        ],
        "avgReviewTime": "未確定（Call-Up未開始のため実績なし）",
        "avgReviewTimeSource": "https://www.sahpra.org.za/medical-devices/",
        "fee": "未確定（登録開始時にGovernment Gazetteで公示予定）",
        "feeSource": "https://www.sahpra.org.za/medical-devices/",
        "url": "https://www.sahpra.org.za/medical-devices/"
      },
      {
        "name": "Clinical Investigation Approval",
        "nameJa": "臨床試験承認",
        "applicableClasses": [
          "全クラス（治験機器）"
        ],
        "description": "南アフリカ国内で医療機器の臨床試験を実施するにはSAHPRAの事前承認が必要。SAHPRA RIMS（Regulatory Information Management System）経由で申請。倫理委員会（REC）の承認も別途必要。ISO 14155:2020に整合。",
        "subtypes": [],
        "avgReviewTime": "SAHPRAに確認が必要（明確な目標期間は未公表）",
        "avgReviewTimeSource": "https://www.sahpra.org.za/clinical-trials/",
        "fee": "Government Gazetteの手数料規則に準拠",
        "feeSource": "https://www.sahpra.org.za/clinical-trials/",
        "url": "https://www.sahpra.org.za/clinical-trials/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "SAHPRA Medical Device Submissions Portal (MDSP) / SAHPRA Engagement Portal",
    "url": "https://www.sahpra.org.za/medical-devices/",
    "description": "施設ライセンス申請はSAHPRA MDSP経由で電子提出。2025年4月にSAHPRA Engagement Portalが導入され、申請管理・文書アップロード・リアルタイム通知等のデジタル化が進行。臨床試験申請はSAHPRA RIMS経由。医薬品はeCTDポータルも運用中。",
    "mandatory": true
  },
  "udi": {
    "required": false,
    "system": "未導入（IMDRF UDIガイダンスに準拠した導入を検討中）",
    "description": "2026年4月時点で南アフリカ独自のUDI制度は未導入。SAHPRAはIMDRFメンバーとしてUDIガイダンスの策定に参加しており、将来的なUDI制度の導入が見込まれるが、具体的な導入時期は未定。機器登録制度の本格稼働後に段階的に導入される可能性が高い。",
    "url": "https://www.imdrf.org/documents/udi-guidance-unique-device-identification-udi-medical-devices",
    "timeline": "未定（機器登録制度の本格稼働後に導入予定）"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "SAHPRA Medical Device Vigilance System（SAHPGL-MD-03に基づく）",
      "mandatory": true,
      "url": "https://www.sahpra.org.za/wp-content/uploads/2024/12/SAHPGL-MD-03_v4-Guideline-for-Medical-Device-Adverse-Event-Reporting.pdf",
      "description": "製造業者・輸入業者・Local Responsible Person（LRP）は重篤な有害事象及びField Safety Corrective Action（FSCA）をSAHPRAに報告する義務がある。GHTF SG2ガイダンスに整合した報告要件。"
    },
    "recalls": {
      "authority": "SAHPRA",
      "description": "SAHPRAは医療機器のリコール及びField Safety Corrective Action（FSCA）を監督。製造業者・輸入業者はリコール発生時にSAHPRAへ通知義務。リコール分類はリスクレベルに基づく。",
      "url": "https://www.sahpra.org.za/wp-content/uploads/2020/01/Recalls_Vigilance_Medical_Devices_IVDs_Nov19_v3.pdf"
    },
    "surveillance": "SAHPRA Health Products Vigilance — 市販後安全性監視、FSCA監視、医療機器有害事象データベース"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "SAHPRA",
    "name": "Certificate of Free Sale (CFS)",
    "description": "SAHPRAにライセンスされた製造業者について、当該医療機器の製造元であることを確認する証明書。ただし、SAHPRAが安全性・性能を評価したことを証明するものではない点に注意。輸出先国の当局が要求する場合に使用。",
    "processingTime": "15営業日（完全な申請書類の提出を条件）",
    "url": "https://www.sahpra.org.za/document/md020-certificate-of-free-sale/"
  },
  "reimbursement": {
    "system": "二重構造：公的医療（公立病院）+ 民間Medical Aid Schemes / NHI（段階的導入中）",
    "authority": "National Department of Health / Council for Medical Schemes",
    "description": "南アフリカの医療制度は公的セクター（人口の約84%が依存）と民間セクター（Medical Aid Schemes、約16%がカバー）の二重構造。公的セクターでは政府予算による調達が中心で、State Tender Board を通じた入札制度。2024年5月にNational Health Insurance Act（NHI法）が署名され、国民皆保険制度の段階的導入（2024〜2028年）が進行中。NHI完全実施後は医療機器の償還制度が大きく変わる可能性があるが、具体的な償還メカニズムは未確定。",
    "codingSystems": [
      "ICD-10（診断コード）",
      "NAPPI コード（National Pharmaceutical Product Interface — 医薬品・医療機器のコーディング）"
    ],
    "url": "https://www.health.gov.za/nhi/"
  },
  "marketingRules": {
    "authority": "SAHPRA",
    "description": "Medicines and Related Substances Act Section 18 に基づき、医療機器の広告は所定の要件に準拠しなければならない。広告は正確・完全・明瞭で、一般公衆及び医療従事者の信頼を促進するものでなければならない。虚偽又は誤解を招く表示は Section 29 により犯罪（最大10年の禁固刑）。",
    "keyRules": [
      "Section 18: 医療機器の広告は所定要件への準拠が必要",
      "広告は正確・完全・明瞭で、誤解を招く表示の禁止",
      "登録された安全性・品質・有効性のエビデンスから逸脱する広告の禁止",
      "Section 29: 虚偽表示は犯罪（罰金又は最大10年の禁固）",
      "Marketing Code of Authority (MCA) — 業界自主規制コード",
      "Medical Device Code of Ethical Marketing and Business Practice"
    ]
  },
  "mdsap": {
    "status": "Affiliate Member",
    "description": "SAHPRAは2025年4月4日にMDSAP（Medical Device Single Audit Program）にアフィリエイトメンバーとして加盟。MDSAP Forumの一部セッションへの参加権、MDSAP参加施設リスト・監査情報へのアクセス権を取得。製造業者のグローバルな品質管理体制の監視能力が強化された。ただし、現時点ではMDSAP監査報告書の正式な受入れ（施設ライセンスの代替）は未確定。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "2025年6月1日からSAHPRA認定CABによるISO 13485:2016認証が施設ライセンス（更新）の必須要件。2028年4月1日までに全ライセンス保有者が認証を取得する必要がある。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "リスクマネジメントの参照規格として使用。機器登録時の技術文書に含める必要がある。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "ソフトウェアライフサイクル要求の参照規格。AI/MLガイダンスでも参照。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "医用電気機器の安全・性能要求の参照規格。SANS（South African National Standards）としても採用。"
    },
    "others": [
      {
        "name": "ISO 10993 シリーズ",
        "notes": "生体適合性評価の参照規格"
      },
      {
        "name": "ISO 14155:2020",
        "notes": "医療機器の臨床試験に関するGCP要求。SAHPGL-MD-17で参照。"
      },
      {
        "name": "SANS規格",
        "notes": "SABSが発行する南アフリカ国家規格。IEC/ISO規格を多数採用。"
      }
    ]
  },
  "recentDevelopments": [
    {
      "date": "2025-09",
      "title": "AI/ML医療機器ガイダンス発行",
      "description": "SAHPRAが「Regulatory Requirements for AI/ML-enabled Medical Devices」を2025年9月26日に発行。AI/ML搭載医療機器の規制枠組みを初めて明確化。SAHPRA 2025-2030戦略計画に基づく。"
    },
    {
      "date": "2025-09",
      "title": "臨床評価・臨床試験ガイダンス発行",
      "description": "SAHPGL-MD-16（臨床評価）及びSAHPGL-MD-17（臨床試験）のv1を2025年9月に発行。医療機器の臨床エビデンス要件を体系化。"
    },
    {
      "date": "2025-06",
      "title": "ISO 13485認証の必須化開始",
      "description": "2025年6月1日からSAHPRA認定CABによるISO 13485:2016認証が施設ライセンス更新の必須要件に。2028年4月1日までの移行期間。"
    },
    {
      "date": "2025-04",
      "title": "MDSAP アフィリエイトメンバー加盟",
      "description": "SAHPRAが2025年4月4日にMDSAPにアフィリエイトメンバーとして加盟。グローバルな品質管理体制の監視能力を強化。"
    },
    {
      "date": "2025-04",
      "title": "SAHPRA Engagement Portal 導入",
      "description": "2025年4月1日にSAHPRA Engagement Portalを導入。申請管理・文書処理・リアルタイム通知等のデジタル化を推進。"
    },
    {
      "date": "2024-05",
      "title": "National Health Insurance Act 署名",
      "description": "2024年5月15日にNHI法が大統領署名。国民皆保険制度の段階的導入が開始。医療機器の償還制度に将来的な大きな影響。"
    }
  ],
  "lastUpdated": "2026-04-06",
  "verified": "2026-04-06"
};
