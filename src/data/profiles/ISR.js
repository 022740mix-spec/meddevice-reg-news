// イスラエル (Israel)
export default {
  "code": "ISR",
  "country": "イスラエル",
  "countryEn": "Israel",
  "region": "Middle East & Africa",
  "flag": "🇮🇱",
  "legalSystemOverview": {
    "type": "中央集権制（Centralized system）",
    "description": "イスラエルの医療機器規制は保健省（MOH）医療機器部門（AMAR）が一元的に管轄する。2012年制定の Medical Equipment Law（חוק ציוד רפואי, 5772-2012）が現行の基本法であり、医療機器の製造・輸入・販売・使用に関する登録義務を規定。イスラエルは独自のリスク分類制度を持たず、参照市場（米国FDA、EU、カナダ、オーストラリア、英国、ニュージーランド等）の分類を採用する。2024年に低・中リスク機器向けの Declaration Route と Fast-Track Route を新設し、2025年1月から運用開始。",
    "keyCharacteristics": [
      "AMAR（MOH Medical Device Division）による一元的規制",
      "独自分類制度を持たず、参照市場（FDA/EU/TGA等）の分類を採用",
      "Declaration Route（Class I）・Fast-Track Route（Class II）・Standard Route（Class III）の3経路",
      "Israel Registration Holder（IRH）の任命が海外製造業者に義務",
      "参照市場の承認を活用した迅速登録が可能",
      "2025年1月より新手続ガイダンス（REG-2024/03）が発効"
    ]
  },
  "authorities": [
    {
      "name": "AMAR",
      "fullName": "Medical Device Division, Ministry of Health",
      "localName": "אגף ציוד רפואי, משרד הבריאות",
      "role": "医療機器の市販前登録・市販後監視・ビジランス・施設査察・輸入管理。主管当局。",
      "url": "https://www.gov.il/en/departments/amar",
      "isPrimary": true
    },
    {
      "name": "MOH",
      "fullName": "Ministry of Health",
      "localName": "משרד הבריאות",
      "role": "保健政策の策定・医療制度の監督・臨床試験の承認",
      "url": "https://www.gov.il/en/departments/ministry_of_health",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "なし（AMAR が直接審査、または参照市場の認可を活用）",
    "description": "イスラエルでは欧州型のNotified Body制度は存在しない。AMARが直接、登録申請を審査する。ただし参照市場（FDA、EU Notified Body等）の承認を活用した迅速登録が主流であり、実質的に海外の認証機関の評価を受容するシステムとなっている。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "Medical Equipment Law 5772-2012 に定義。医療処置に使用される器具（化学的・生物学的・バイオテクノロジー的・ソフトウェア等）であり、医薬品を除くもの。包帯・手術器具・注射器から超音波装置・MRI装置まで広範に対象。",
    "scope": "IVD（体外診断用医療機器）も適用範囲に含まれる。SaMD（Software as a Medical Device）も規制対象。",
    "notes": "定義は非常に広範で、EU MDRやFDAの定義と概ね整合。コンビネーション製品の扱いはケースバイケースでAMARが判断。"
  },
  "primaryLaw": {
    "title": "Medical Equipment Law, 5772-2012",
    "originalTitle": "חוק ציוד רפואי, התשע״ב-2012",
    "enacted": "2012",
    "lastAmended": "2024（Registration and Renewal of Medical Devices Regulations改正）",
    "url": "https://www.gov.il/en/departments/amar",
    "description": "2012年制定の基本法。医療機器の製造・輸入・販売・使用に関する登録義務を規定。AMARへの登録なしに医療機器を市場に投入することを刑事罰付きで禁止。参照市場の承認活用を法的に認める枠組みを含む。"
  },
  "implementingRegulations": [
    {
      "title": "Registration and Renewal of Medical Devices Regulations, 2013",
      "date": "2013",
      "url": "https://www.gov.il/en/departments/amar",
      "description": "Medical Equipment Law の施行規則。登録手続・必要書類・更新要件・参照市場リストを規定。",
      "category": "登録手続"
    },
    {
      "title": "REG-2024/03 — Updated Procedural Guidance for Submission Content and Format",
      "date": "2025-01",
      "url": "https://www.gov.il/en/departments/amar",
      "description": "2025年1月発効。Declaration Route・Fast-Track Route・Standard Route の申請内容・書式に関する更新ガイダンス。",
      "category": "申請手続"
    }
  ],
  "relatedLaws": [
    {
      "title": "Public Health Ordinance, 1940",
      "category": "公衆衛生",
      "enacted": "1940",
      "url": "https://www.gov.il/en/departments/ministry_of_health",
      "relevance": "臨床試験・感染症・公衆衛生に関する基本法。医療機器の臨床試験の法的根拠の一つ。"
    },
    {
      "title": "Protection of Privacy Law, 5741-1981",
      "category": "データ保護",
      "enacted": "1981",
      "url": "https://www.gov.il/en/departments/ministry_of_justice",
      "relevance": "コネクテッドデバイス・SaMDが取り扱う個人医療情報のプライバシー要件に適用。"
    }
  ],
  "classification": {
    "system": "参照市場依存（独自分類制度なし）",
    "basis": "イスラエルは独自のリスク分類制度を持たない。参照市場（米国FDA、EU MDR/IVDR、カナダ、オーストラリアTGA、英国MHRA、ニュージーランド等）が付与した分類をそのまま採用。登録経路は参照市場の分類に基づき決定される。",
    "classes": [
      {
        "name": "Class I（参照市場準拠）",
        "nameJa": "クラスI（低リスク）",
        "riskLevel": "低",
        "description": "低リスク機器。Declaration Route で登録可能（2024年1月〜）。Class I / Is / Im / Ir / Class A を含む。",
        "examples": [
          "弾性包帯",
          "舌圧子",
          "歩行補助具",
          "聴診器",
          "手術用手袋"
        ],
        "approvalPath": "Declaration Route（宣言登録）"
      },
      {
        "name": "Class II（参照市場準拠）",
        "nameJa": "クラスII（中リスク）",
        "riskLevel": "中",
        "description": "中リスク機器。Fast-Track Route で登録可能。Fast 1（FDA Class II / EU IIa相当、45営業日）とFast 2（EU IIb相当、60営業日）に細分化。",
        "examples": [
          "超音波診断装置",
          "輸液ポンプ",
          "血圧計",
          "補聴器",
          "コンタクトレンズ"
        ],
        "approvalPath": "Fast-Track Route（Fast 1: 45営業日 / Fast 2: 60営業日）"
      },
      {
        "name": "Class III（参照市場準拠）",
        "nameJa": "クラスIII（高リスク）",
        "riskLevel": "高",
        "description": "高リスク機器・参照市場認可のない機器。Standard Route（Normal Route）で登録。120暦日。",
        "examples": [
          "人工心臓弁",
          "埋込み型除細動器",
          "薬剤溶出ステント",
          "人工関節",
          "人工内耳"
        ],
        "approvalPath": "Standard Route（120暦日）"
      }
    ],
    "rules": [
      "独自分類制度なし — 参照市場の分類をそのまま採用",
      "参照市場: 米国FDA、EU（MDR/IVDR）、カナダ、オーストラリアTGA、英国MHRA、ニュージーランド",
      "登録経路はリスクレベルに応じて自動決定（Declaration / Fast-Track / Standard）",
      "IVDも同様に参照市場の分類を採用"
    ],
    "totalProductCodes": "参照市場の製品コード体系を使用（GMDN等）"
  },
  "conformityAssessment": {
    "overview": "全ての医療機器はAMARへの登録が必要。2024-2025年の改革により3つの登録経路が整備された。Declaration Route（Class I）は最も簡略で宣言ベース。Fast-Track Route（Class II）は参照市場の承認を前提とした迅速審査。Standard Route（Class III等）は詳細審査。参照市場の認可（FDA 510(k)/PMA、CE証明書等）が事実上の前提条件。IRH（Israel Registration Holder）の任命が必須。",
    "routes": [
      {
        "name": "Declaration Route",
        "nameJa": "宣言登録（Declaration Route）",
        "applicableClasses": [
          "Class I",
          "Class Is",
          "Class Im",
          "Class Ir"
        ],
        "description": "2024年1月から運用開始。低リスク機器（Class I / Is / Im / Ir）が対象。IRHが適合宣言を提出。AMARへの費用は無料。",
        "subtypes": [
          {
            "name": "新規宣言",
            "description": "Class I機器の初回登録。適合宣言書を提出。"
          },
          {
            "name": "更新",
            "description": "登録の更新。"
          }
        ],
        "avgReviewTime": "短期間（宣言ベースのため迅速）",
        "avgReviewTimeSource": "https://www.emergobyul.com/news/details-declaration-route-class-i-medical-devices-israel",
        "fee": "無料（Class I は手数料なし）",
        "feeSource": "https://medenvoyglobal.com/blog/medical-device-and-ivd-registration-in-israel/",
        "url": "https://www.gov.il/en/departments/amar"
      },
      {
        "name": "Fast-Track Route",
        "nameJa": "迅速登録（Fast-Track Route）",
        "applicableClasses": [
          "Class IIa",
          "Class IIb",
          "Class II"
        ],
        "description": "中リスク機器向け。参照市場（FDA/EU等）の承認を前提。Fast 1（FDA Class II / EU IIa: 45営業日）と Fast 2（EU IIb: 60営業日）に細分化。",
        "subtypes": [
          {
            "name": "Fast 1",
            "description": "FDA Class II または EU Class IIa 相当。45営業日。"
          },
          {
            "name": "Fast 2",
            "description": "EU Class IIb 相当。60営業日。"
          }
        ],
        "avgReviewTime": "Fast 1: 45営業日 / Fast 2: 60営業日",
        "avgReviewTimeSource": "https://www.emergobyul.com/news/updates-israels-declaration-and-fast-track-routes-medical-devices",
        "fee": "要確認（公式手数料スケジュール未公開）",
        "feeSource": "https://www.gov.il/en/departments/amar",
        "url": "https://www.gov.il/en/departments/amar"
      },
      {
        "name": "Standard Route (Normal Route)",
        "nameJa": "標準登録（Standard Route）",
        "applicableClasses": [
          "Class III",
          "IVDR Class D",
          "参照市場認可なし"
        ],
        "description": "高リスク機器および参照市場認可のない機器向け。詳細な技術文書審査。臨床データが求められる場合あり。",
        "subtypes": [
          {
            "name": "新規登録",
            "description": "初回の登録申請。全必要書類の提出が必要。"
          },
          {
            "name": "更新",
            "description": "登録の更新申請。"
          },
          {
            "name": "変更申請",
            "description": "製品仕様・製造所等の変更時。"
          }
        ],
        "avgReviewTime": "公式: 120暦日",
        "avgReviewTimeSource": "https://bioregservices.com/regulatory-consulting-israel-amar/",
        "fee": "要確認（公式手数料スケジュール未公開）",
        "feeSource": "https://www.gov.il/en/departments/amar",
        "url": "https://www.gov.il/en/departments/amar"
      }
    ]
  },
  "electronicSubmission": {
    "system": "AMAR 電子申請システム",
    "url": "https://www.gov.il/en/departments/amar",
    "description": "登録申請はAMARの電子システム経由で提出。IRH（Israel Registration Holder）が申請手続きを代行する。",
    "mandatory": true
  },
  "udi": {
    "required": false,
    "system": "未導入（イスラエル独自のUDI制度は未確立）",
    "description": "2026年4月時点で、イスラエル独自の包括的UDI制度は正式に導入されていない。ただし参照市場（FDA/EU）のUDI要件に準拠した機器は増加しており、ラベリングにUDI情報を含めることが推奨されている。",
    "url": "https://www.gov.il/en/departments/amar",
    "timeline": "未定（独自制度の導入計画は公表されていない）"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "AMAR ビジランス報告",
      "mandatory": true,
      "url": "https://www.gov.il/en/departments/amar",
      "description": "IRH（Israel Registration Holder）が市販後ビジランスの責任を負う。報告対象は、患者の健康に害を及ぼした機器関連事象、およびユーザーにリスクをもたらしうる重大な欠陥。IRHは「state of control」を維持し、リアルタイムの市販後ビジランス管理が求められる。"
    },
    "recalls": {
      "authority": "AMAR / MOH",
      "description": "AMARがFSCA（Field Safety Corrective Action）およびリコールを監督。グローバルリコール・FSN（Field Safety Notice）はIRHを通じてAMARに報告義務。",
      "url": "https://www.gov.il/en/departments/amar"
    },
    "surveillance": "IRHは包括的な「state of control」を維持し、市販後監視を実施する義務を負う。Declaration Route・Fast-Track Route で登録された機器はIRHの市販後監視義務が強化されている。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "輸出国の規制当局（AMAR登録申請時に提出が必要）",
    "name": "Certificate of Free Sale (CFS) / Certificate to Foreign Government (CFG)",
    "description": "AMAR登録申請時に、参照市場の規制当局が発行するCFS/CFGまたは市場承認証明（FDA 510(k) Clearance Letter、CE Certificate等）の提出が求められる。",
    "processingTime": "輸出国側の手続きによる",
    "url": "https://www.gov.il/en/departments/amar"
  },
  "reimbursement": {
    "system": "国民健康保険制度（National Health Insurance Law, 1995）",
    "authority": "MOH / Health Funds（Kupot Holim）",
    "description": "1995年の国民健康保険法に基づき、全市民が4つの Health Fund（Clalit / Maccabi / Meuhedet / Leumit）のいずれかに加入。基本給付パッケージ（Health Basket）に収載された医療技術が保険償還対象。医療機器の個別償還は Health Basket の年次更新プロセスで決定されるが、医薬品ほど体系化されていない。",
    "codingSystems": [
      "要確認（イスラエル固有の医療機器償還コード体系は未確認）"
    ],
    "url": "https://www.gov.il/en/departments/ministry_of_health"
  },
  "marketingRules": {
    "authority": "AMAR / MOH",
    "description": "Medical Equipment Law 5772-2012 に基づき、AMAR未登録機器の広告・販売は禁止。ラベリングは家庭用機器の場合ヘブライ語・アラビア語・英語の3言語が必須。医療専門家向け機器は英語のみ可。",
    "keyRules": [
      "AMAR登録なしの医療機器の広告・販売は刑事罰付きで禁止",
      "家庭用機器のラベリング: ヘブライ語・アラビア語・英語の3言語必須",
      "医療専門家向け機器: 英語のみ可",
      "AMAR Marking Guidelines（2014年12月）に基づくラベリング要件"
    ]
  },
  "mdsap": {
    "status": "アフィリエイトメンバー（Affiliate Member）",
    "description": "イスラエルは2025年時点でMDSAPのアフィリエイトメンバー。MDSAP監査報告書を活用してQMS適合性を評価するが、AMAR登録は別途必要。正式参加国（Regulatory Authority）ではない。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "参照市場の認可に伴い事実上必須。ISO 13485認証がQMS適合の証拠として受容。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "リスクマネジメント。技術文書のリスク評価に適用。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "ソフトウェアライフサイクル。SaMD申請に適用。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "医用電気機器の安全・性能要求。"
    },
    "others": [
      {
        "name": "ISO 10993シリーズ（生物学的安全性評価）",
        "notes": "生体接触医療機器の生物学的安全性評価に適用。"
      },
      {
        "name": "IEC 62366（ユーザビリティエンジニアリング）",
        "notes": "医療機器のユーザビリティ評価に参照。"
      }
    ]
  },
  "recentDevelopments": [
    {
      "date": "2025-01",
      "title": "新手続ガイダンス REG-2024/03 発効",
      "description": "Declaration Route・Fast-Track Route・Standard Route の申請内容・書式に関する更新ガイダンスが2025年1月に発効。低・中リスク機器の市場アクセスが大幅に改善。"
    },
    {
      "date": "2024-01",
      "title": "Declaration Route 運用開始",
      "description": "Class I（Is/Im/Ir含む）の低リスク機器向けに Declaration Route（宣言登録）が導入。IRHによる適合宣言で登録可能に。"
    },
    {
      "date": "2024",
      "title": "Fast-Track Route の拡充",
      "description": "Class II機器向けの Fast-Track Route を Fast 1（45営業日）と Fast 2（60営業日）に細分化。EU MDR CE証明書の受入れを明確化。"
    },
    {
      "date": "2012",
      "title": "Medical Equipment Law 制定",
      "description": "イスラエル初の包括的医療機器規制法が制定。AMARへの登録義務を法定化。"
    }
  ],
  "lastUpdated": "2026-04-02",
  "verified": null
};
