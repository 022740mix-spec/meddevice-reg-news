// ヨルダン (Hashemite Kingdom of Jordan)
export default {
  "code": "JOR",
  "country": "ヨルダン",
  "countryEn": "Hashemite Kingdom of Jordan",
  "region": "Middle East & Africa",
  "flag": "🇯🇴",
  "legalSystemOverview": {
    "type": "中央集権制（Centralized system）",
    "description": "ヨルダンの医療機器規制はヨルダン食品医薬品庁（JFDA）が管轄する。2003年に設立されたJFDAは、薬事法（Drug & Pharmacy Law No. 88）に基づき医薬品・食品・医療機器を一元的に規制する。EU および FDA の分類モデルを受容しており、CE マークまたは FDA 認可を持つ機器に対する相互認証的なアプローチを採用。登録は比較的シンプルだが、Class III 機器にはより詳細な技術文書が要求される。",
    "keyCharacteristics": [
      "JFDA による一元的な規制体制",
      "EU/FDA 分類モデルの受容",
      "CE マークまたは FDA 認可の機器は登録が簡素化",
      "ローカルライセンス保有者（輸入業者）の指定が必須",
      "登録有効期限5年（登録証書に記載）"
    ]
  },
  "authorities": [
    {
      "name": "JFDA",
      "fullName": "Jordan Food and Drug Administration",
      "localName": "المؤسسة العامة للغذاء والدواء",
      "role": "医療機器の登録・市販後監視・輸入管理",
      "url": "https://www.jfda.jo/",
      "isPrimary": true
    },
    {
      "name": "MOH Jordan",
      "fullName": "Ministry of Health — Jordan",
      "localName": "وزارة الصحة الأردنية",
      "role": "医療政策全般・公立病院の調達管理",
      "url": "https://www.moh.gov.jo/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "なし（JFDA が直接登録を審査。EU/FDA の承認文書に依拠）",
    "description": "ヨルダンには欧州型の Notified Body 制度は存在しない。JFDA が申請書類を直接審査し、CE証明書またはFDA認可文書を主たるエビデンスとして登録判断を行う。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "JFDA の医療機器規制に基づき、疾病の診断・治療・予防・監視等を目的とする器具・装置・機器・ソフトウェア等で、薬理学的・免疫学的・代謝的手段によらないもの。",
    "scope": "体外診断用医薬品（IVD）も規制対象。JFDA の医療機器部門が管轄。",
    "notes": "定義は GHTF/IMDRF の定義に概ね準拠しているが、ヨルダン固有の法的定義文書の公開は限定的。"
  },
  "primaryLaw": {
    "title": "Drug & Pharmacy Law No. 88 of 1964（改正あり）",
    "originalTitle": "قانون الصيدلة والأدوية رقم 88",
    "enacted": "1964",
    "lastAmended": "随時改正（JFDA 設立法含む）",
    "url": "https://www.jfda.jo/",
    "description": "ヨルダンにおける医薬品・医療機器規制の根幹法。JFDA の設立根拠を含む。医療機器に関する具体的要件は JFDA が発出する規則・ガイドラインで規定。"
  },
  "implementingRegulations": [
    {
      "title": "JFDA Medical Device Registration Instructions",
      "date": null,
      "url": "https://www.jfda.jo/",
      "description": "医療機器の登録手続き、必要書類、審査基準を規定する JFDA 発出の指示文書。",
      "category": "登録"
    },
    {
      "title": "JFDA Medical Device Import & Distribution Instructions",
      "date": null,
      "url": "https://www.jfda.jo/",
      "description": "医療機器の輸入・流通に関する要件。ローカルライセンス保有者の要件を含む。",
      "category": "輸入管理"
    }
  ],
  "relatedLaws": [
    {
      "title": "JFDA Law（JFDA 設立法）",
      "category": "組織法",
      "enacted": "2003",
      "url": "https://www.jfda.jo/",
      "relevance": "JFDA の設立、権限、組織構成を規定。医療機器を含む規制対象の管轄範囲を定義。"
    }
  ],
  "classification": {
    "system": "EU/FDA 分類モデルの受容（Class I / II / III）",
    "basis": "リスクベース。CE マーク機器はEU分類、FDA認可機器はFDA分類をそのまま受容。",
    "classes": [
      {
        "name": "Class I",
        "nameJa": "クラスI",
        "riskLevel": "低リスク",
        "description": "低リスク医療機器。一般的制御で安全性を確保。",
        "examples": [
          "弾性包帯",
          "手動外科器具",
          "聴診器"
        ],
        "approvalPath": "簡易登録"
      },
      {
        "name": "Class II",
        "nameJa": "クラスII",
        "riskLevel": "中リスク",
        "description": "中リスク医療機器。CE マークまたは FDA 認可文書が必要。",
        "examples": [
          "超音波診断装置",
          "輸液ポンプ",
          "電動車椅子"
        ],
        "approvalPath": "標準登録（CE/FDA 証明書ベース）"
      },
      {
        "name": "Class III",
        "nameJa": "クラスIII",
        "riskLevel": "高リスク",
        "description": "高リスク医療機器。CE マーク（EC Full QA + Design Examination）または FDA PMA 承認が必要。より詳細な技術文書の提出が求められる。",
        "examples": [
          "人工心臓弁",
          "冠動脈ステント",
          "埋込み型デバイス"
        ],
        "approvalPath": "詳細審査（技術文書 + CE/FDA 証明書）"
      }
    ],
    "rules": [
      {
        "id": "EU/FDA 参照分類",
        "description": "JFDA は EU MDD/MDR または FDA の分類を参照して機器のクラスを決定する。ヨルダン独自の分類規則データベースは公開されていない。",
        "url": "https://www.jfda.jo/"
      }
    ],
    "totalProductCodes": "要確認（JFDA 独自のコード体系の公開情報なし）"
  },
  "conformityAssessment": {
    "overview": "JFDA は CE マークまたは FDA 認可を持つ機器に対し、書類審査ベースの登録を実施。独自の臨床データ要求は基本的にない。",
    "routes": [
      {
        "name": "JFDA Medical Device Registration",
        "nameJa": "JFDA 医療機器登録",
        "applicableClasses": [
          "全クラス"
        ],
        "description": "CE 証明書または FDA 認可文書と、Free Sale Certificate、技術文書、ラベリング情報等を提出して登録。Class III はより詳細な文書が要求される。ラボ試験が必要な場合は追加期間。",
        "subtypes": [],
        "avgReviewTime": "4〜8ヶ月（ラボ試験不要の場合は短縮の可能性あり）",
        "avgReviewTimeSource": "業界情報（OMC Medical, RegDesk 等複数ソースで一致）",
        "fee": "要確認（JFDA 料金表は随時改定）",
        "url": "https://www.jfda.jo/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "JFDA オンラインポータル（Cosmo）",
    "url": "http://application.jfda.jo/Cosmo",
    "description": "JFDA の電子アポイントメントシステム（Cosmo）を通じて申請予約・書類提出を実施。医薬品はeCTD（JO M1形式）での電子提出にも対応。",
    "mandatory": false
  },
  "udi": {
    "required": false,
    "system": "要確認（UDI 制度の導入状況は未確認）",
    "description": "ヨルダンでは現時点で IMDRF/FDA 型の UDI 制度が法的に義務化されているとの確認情報はない。CE マーク機器は EU UDI（EUDAMED）の要件を満たしている場合がある。",
    "url": null,
    "timeline": "要確認"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "JFDA 有害事象報告制度",
      "mandatory": true,
      "url": "https://www.jfda.jo/",
      "description": "医療機器に関連する有害事象は JFDA に報告義務がある。詳細な報告手順・期限は JFDA のガイドラインに依拠。"
    },
    "recalls": {
      "authority": "JFDA",
      "description": "JFDA はリコール・Field Safety Corrective Action（FSCA）を管理。製造業者・輸入業者はリコール実施時に JFDA に通知義務。",
      "url": "https://www.jfda.jo/"
    },
    "surveillance": "JFDA による市販後監視。詳細な PMS 制度の公開情報は限定的。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "JFDA",
    "name": "Free Sale Certificate",
    "description": "登録済み医療機器について JFDA が発行する自由販売証明書。登録申請時には原産国または参照国（スイス・豪州・カナダ・ノルウェー・英国）の CFS 提出が必要。",
    "processingTime": "要確認",
    "url": "https://www.jfda.jo/"
  },
  "reimbursement": {
    "system": "公的医療保険 + 軍保険 + 民間保険",
    "authority": "MOH Jordan / Royal Medical Services",
    "description": "ヨルダンの医療保険制度は MOH 管轄の公的保険、軍（Royal Medical Services）、UNRWA（難民支援）、民間保険の複合体制。医療機器の償還は主に公立病院の調達予算を通じて行われる。独立した医療機器償還制度の公開情報は限定的。",
    "codingSystems": [
      "要確認"
    ],
    "url": "https://www.moh.gov.jo/"
  },
  "marketingRules": {
    "authority": "JFDA",
    "description": "医療機器の広告・販促は JFDA の規制下にある。承認された適応のみの広告が原則。",
    "keyRules": [
      "登録済み機器のみ広告可",
      "ラベリングは英語で記載（アラビア語追加を推奨）",
      "虚偽・誇大広告の禁止"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "ヨルダンは MDSAP プログラムに参加していない。ただし MDSAP 認証を保有する製造業者の ISO 13485 適合は間接的に考慮される可能性がある。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "ISO 13485 認証は CE マーク取得の前提として間接的に要求される。JFDA がISO 13485 を独自に法的義務として明示しているかは要確認。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "CE マーク機器の技術文書にリスクマネジメント（ISO 14971）準拠が含まれる。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "ソフトウェア医療機器に対し、CE/FDA 経由で間接的に参照。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "医用電気機器の安全規格として、CE マーク機器の適合要件に含まれる。"
    },
    "others": []
  },
  "recentDevelopments": [
    {
      "date": "2026",
      "title": "医薬品シリアライゼーション義務化（DataMatrix）",
      "description": "JFDA は2026年を期限として医薬品の DataMatrix シリアライゼーションを義務化。医療機器への拡大可能性は要確認。"
    }
  ],
  "lastUpdated": "2026-04-06",
  "verified": "2026-04-06"
};
