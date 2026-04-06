// バルバドス (Barbados)
export default {
  "code": "BRB",
  "country": "バルバドス",
  "countryEn": "Barbados",
  "region": "Latam",
  "flag": "🇧🇧",
  "legalSystemOverview": {
    "type": "発展途上（Health Services Act ベース・簡易規制）",
    "description": "バルバドスでは保健省傘下のBarbados Drug Service（BDS）が医薬品・医療機器を管轄。Health Services Act (Cap. 44, 1969) が基本法で、Health Services (Control of Drugs) Regulations, 1970が「device」を定義。医療機器専用法・リスクベース分類制度は存在せず、製造国での合法販売を前提とした輸入許可制。CARICOM加盟国としてCARPHA/CRSに参加するが、CRSは医薬品のみ対象。2024年10月にPAHO支援でWHO GBTセルフベンチマーキングを実施し、規制近代化に着手。",
    "keyCharacteristics": [
      "Barbados Drug Service（BDS）がNCA",
      "Health Services Act (Cap. 44, 1969) が基本法",
      "Health Services (Control of Drugs) Regulations, 1970が「device」を定義",
      "医療機器専用法・リスクベース分類制度なし",
      "製造国での合法販売を前提とした輸入許可制",
      "Drug Inspectorateが輸入許可・薬局検査を実施",
      "CARICOM加盟・CARPHA/VigiCarib参加",
      "WHO PIDM正式メンバー",
      "英語ラベリング",
      "UDI・専用matériovigilance制度なし"
    ]
  },
  "authorities": [
    {
      "name": "BDS",
      "fullName": "Barbados Drug Service",
      "localName": null,
      "role": "NCA: 医薬品・医療機器の規制、Barbados National Drug Formulary（BNDF）の策定・管理、医薬品調達・配布。Drug Service Act (Cap. 40A) に基づき運営。Drug Inspectorateが薬局・製造施設の検査・許可を担当。",
      "url": "https://www.health.gov.bb/For-Public/Pharmaceutical-Services",
      "isPrimary": true
    },
    {
      "name": "BNSI",
      "fullName": "Barbados National Standards Institution",
      "localName": null,
      "role": "ISOフルメンバー（1999年〜）。国家規格の策定・認証・検査。医療機器の直接規制は行わないが、ラベリング・品質規格を管轄。",
      "url": "https://bnsibarbados.org/",
      "isPrimary": false
    },
    {
      "name": "CARPHA",
      "fullName": "Caribbean Public Health Agency",
      "localName": null,
      "role": "CARICOM地域の公衆衛生機関。CRS（Caribbean Regulatory System）で医薬品の地域共同評価を実施。VigiCaribで有害事象報告を集約。医療機器はCRS対象外。",
      "url": "https://carpha.org/What-We-Do/CRS/Caribbean-Regulatory-System",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "政府直接審査（NB制度なし）",
    "description": "BDS / Drug Inspectorateが直接審査。第三者適合性評価機関（Notified Body）制度は存在しない。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "Health Services (Control of Drugs) Regulations, 1970 第2条: 「人または動物の疾病・障害・異常な身体状態またはその症状の診断・治療・軽減・予防のために製造・販売・表示される器具・装置・器材（構成部品・部品・附属品を含む）」。",
    "scope": "IVDを含む。医薬品・化粧品・食品と同一の法的枠組みで規制。",
    "notes": "Health Services Act (Cap. 44) は1969年制定。Control of Drugs Regulationsは1970年制定。医療機器専用の詳細規制は未整備。"
  },
  "primaryLaw": {
    "title": "Health Services Act, Cap. 44",
    "originalTitle": "An Act to make provision for the health services of Barbados",
    "enacted": "1969",
    "lastAmended": null,
    "url": "https://www.health.gov.bb/attachments/Health%20Services%20Act%20Cap.%2044%20(1)%20(1)%20(1).pdf",
    "description": "1969年制定（Act No. 38 of 1969）。保健省の管轄範囲を規定し、疾病の予防・治療、食品・医薬品の管理、薬局・製造施設の検査・許可、医療施設の監視を含む公衆衛生規制の基本法。Medical Council、Nursing Council、Pharmacy Council等の専門職規制評議会を設置。"
  },
  "implementingRegulations": [
    {
      "title": "Health Services (Control of Drugs) Regulations, 1970",
      "date": "1970",
      "url": "https://faolex.fao.org/docs/pdf/bar20130.pdf",
      "description": "Health Services Actの施行規則。「device」の定義を含む。医薬品・医療機器の輸入・販売規制の具体的手続を規定。",
      "category": "施行規則"
    },
    {
      "title": "Drug Service Act, Cap. 40A",
      "date": "1980",
      "url": "https://www.barbadoslawcourts.gov.bb/assets/content/pdfs/statutes/DrugServiceCAP040A.pdf",
      "description": "Barbados Drug Serviceの設立・運営根拠法。医薬品の調達・配布・フォーミュラリ管理。Financial Administration and Audit (Drug Service) Rulesと併せて運用。",
      "category": "組織法"
    }
  ],
  "relatedLaws": [
    {
      "title": "CARPHA Caribbean Regulatory System (CRS)",
      "category": "地域規制協力",
      "enacted": "2014",
      "url": "https://carpha.org/What-We-Do/CRS/Caribbean-Regulatory-System",
      "relevance": "CARICOM地域の医薬品・ワクチン共同評価制度。バルバドスはCARPHA加盟国。医療機器はCRS対象外（将来的な拡大課題）。"
    }
  ],
  "classification": {
    "system": "分類制度なし（輸入許可ベース）",
    "basis": "リスクベース分類（Class I/II/III等）は未導入。製造国での合法販売実績に基づく輸入許可制。CARICOM統一分類も未策定。",
    "classes": [
      {
        "name": "All Devices",
        "nameJa": "全機器（分類なし）",
        "riskLevel": "未分類",
        "description": "リスク分類なし。全医療機器が同一の輸入許可プロセスに従う。製造国で合法的に販売されていることが前提。",
        "examples": ["弾性包帯", "聴診器", "血圧計", "人工呼吸器", "心臓ペースメーカー"],
        "approvalPath": "BDS / Drug Inspectorate 輸入許可"
      }
    ],
    "rules": ["リスクベース分類規則なし"],
    "totalProductCodes": null
  },
  "conformityAssessment": {
    "overview": "BDS / Drug Inspectorateに輸入許可を申請。製造国での合法販売実績が前提条件。Health Services (Control of Drugs) Regulations, 1970に基づき、製造国の法令に完全に準拠した製品の輸入を許可。専用の技術文書審査プロセスは未確認。",
    "routes": [
      {
        "name": "Import Permit",
        "nameJa": "輸入許可",
        "applicableClasses": ["All Devices"],
        "description": "Drug Inspectorateに輸入許可を申請。製造国での合法販売を証明するCFS等の文書を提出。税関でC-63フォーム・商業インボイス・輸入許可証を提示。BNSIが定めるラベリング規格への準拠が必要。",
        "subtypes": [],
        "avgReviewTime": "要確認（公式情報で裏付け未取得）",
        "avgReviewTimeSource": "https://www.gov.bb/Departments/drug-service",
        "fee": "要確認（公式情報で裏付け未取得）",
        "feeSource": "https://www.gov.bb/Departments/drug-service",
        "url": "https://www.health.gov.bb/Legislation"
      }
    ]
  },
  "electronicSubmission": {
    "system": "紙ベース申請（専用電子ポータルなし）",
    "url": null,
    "description": "医療機器専用の電子申請プラットフォームは未確認。Drug Inspectorateへの紙ベース申請が基本。BDSウェブサイト（drugservice.gov.bb）にBarbados National Drug Formulary（BNDF）のオンライン版あり。",
    "mandatory": false
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
      "system": "VigiCarib（CARPHA）+ BDS",
      "mandatory": true,
      "url": "https://carpha.org/What-We-Do/CRS/VigiCarib",
      "description": "バルバドスはWHO国際医薬品モニタリングプログラム（PIDM）正式メンバー。CARPHA VigiCaribを通じた有害事象報告に参加。HIV/AIDSプログラムでADRモニタリングを実施。医療機器に特化したmatériovigilance（医療機器安全監視）制度は未整備。"
    },
    "recalls": {
      "authority": "BDS / Drug Inspectorate",
      "description": "Drug Inspectorateが安全性問題の調査・是正措置を実施。専用のリコールデータベース・公開制度は未確認。",
      "url": "https://www.gov.bb/Departments/drug-service"
    },
    "surveillance": "医療機器に特化した市販後監視（PMS）制度は未整備。VigiCaribを通じた地域的な有害事象報告に依存。"
  },
  "certificateOfFreeSale": {
    "available": false,
    "issuingAuthority": null,
    "name": null,
    "description": "バルバドスは国内医療機器製造がほぼなく、輸出用CFSの発行制度は未確認。輸入時は製造国のCFS提出が実務上求められる。",
    "processingTime": null,
    "url": null
  },
  "reimbursement": {
    "system": "BDS（公的医薬品配布）+ QEH公的医療",
    "authority": "Barbados Drug Service / Ministry of Health and Wellness",
    "description": "Barbados Drug ServiceがBarbados National Drug Formulary（BNDF、1980年初版）に基づき医薬品を公的医療機関・参加薬局に配布。公立医療機関（Queen Elizabeth Hospital等）での診療は基本無料。Private Participating Pharmacies（PPP）では薬剤費をBDSが負担し患者は調剤料を自己負担。医療機器固有の償還制度は未確認。",
    "codingSystems": [
      "Barbados National Drug Formulary (BNDF)"
    ],
    "url": "https://www.health.gov.bb/About"
  },
  "marketingRules": {
    "authority": "BDS / BNSI",
    "description": "英語ラベリング。BNSIがラベリング・品質規格を策定。Health Services Actに基づき虚偽・誤解を招く表示の禁止。",
    "keyRules": [
      "英語ラベリング必須",
      "BNSIラベリング規格への準拠",
      "虚偽・誤解を招く表示の禁止"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "MDSAP非参加。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "BNSI（ISO正式メンバー）を通じてISO規格にアクセス可能。ISO 13485の国内義務化は未確認。"
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
      "BNSI — ISOフルメンバー（1999年〜）",
      "CROSQ（CARICOM Regional Organisation for Standards and Quality）加盟",
      "製造国の規制承認・合法販売を参照"
    ]
  },
  "recentDevelopments": [
    {
      "date": "2024-10",
      "title": "PAHO支援 WHO GBTセルフベンチマーキング実施",
      "description": "2024年10月8〜10日、ブリッジタウンでPAHO支援によるWHO Global Benchmarking Tool（GBT）セルフベンチマーキングを実施。National Regulatory System（NRS）とRegistration and Marketing Authorization（RMA）のMaturity Level 1-2を対象。規制近代化のロードマップ策定。"
    },
    {
      "date": "2025-11",
      "title": "QEH大規模医療機器更新（EIB/UNOPS支援）",
      "description": "欧州投資銀行（EIB）6,000万ユーロ融資・UNOPS実施による Queen Elizabeth Hospital の医療機器・ICT機器更新プロジェクト。450点超の医療機器・ICT機器を納入。"
    },
    {
      "date": "2025-03",
      "title": "PAHO-CARPHAカリブ海規制強化ワークショップ",
      "description": "国家・超国家規制システム強化に焦点。バルバドスを含むCARICOM加盟国が参加。主に医薬品・ワクチンだが保健技術全般も言及。"
    }
  ],
  "lastUpdated": "2026-04-06",
  "verified": null
};
