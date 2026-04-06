// カナダ (Canada)
export default {
  "code": "CAN",
  "country": "カナダ",
  "countryEn": "Canada",
  "region": "North America",
  "flag": "🇨🇦",
  "legalSystemOverview": {
    "type": "連邦制（Federal system）",
    "description": "カナダの医療機器規制は連邦法である Food and Drugs Act および Medical Devices Regulations (SOR/98-282) を根幹とし、Health Canada（カナダ保健省）が管轄する。4クラス分類制度を採用しており、クラスII〜IVの機器は市販前に Medical Device Licence（MDEL ではなく MDL）の取得が必要。MDSAP（Medical Device Single Audit Program）はカナダが主導的に推進し、クラスII〜IVの製造業者に MDSAP 認証を義務化している。",
    "keyCharacteristics": [
      "Health Canada による連邦規制体制",
      "リスクベースの4クラス分類（Class I / II / III / IV）",
      "MDSAP 認証がクラスII〜IVで義務",
      "Medical Device Licence (MDL) による市販前認可",
      "Vanessa's Law による市販後権限の強化"
    ]
  },
  "authorities": [
    {
      "name": "Health Canada — MDD",
      "fullName": "Health Canada — Medical Devices Directorate (within Health Products and Food Branch)",
      "localName": "Direction des instruments médicaux, Santé Canada",
      "role": "医療機器の市販前審査・認可（Medical Device Licence）・市販後監視・リコール",
      "url": "https://www.canada.ca/en/health-canada/services/drugs-health-products/medical-devices.html",
      "isPrimary": true
    },
    {
      "name": "CADTH",
      "fullName": "Canada's Drug and Health Technology Agency",
      "localName": null,
      "role": "医療技術評価（HTA）と保険償還に関する推奨",
      "url": "https://www.cadth.ca/",
      "isPrimary": false
    },
    {
      "name": "INESSS",
      "fullName": "Institut national d'excellence en santé et en services sociaux",
      "localName": null,
      "role": "ケベック州における医療技術評価（HTA）",
      "url": "https://www.inesss.qc.ca/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "MDSAP 認定監査機関（Recognized Auditing Organizations）",
    "description": "カナダでは欧州型の Notified Body 制度ではなく、MDSAP 認定監査機関が品質管理システム（QMS）の監査を実施する。クラスII〜IVの製造業者は MDSAP 認証を取得しなければならない。MDSAP 監査機関は Health Canada が認定する。",
    "bodies": [
      {
        "name": "BSI",
        "country": "英国/オランダ",
        "url": "https://www.bsigroup.com/"
      },
      {
        "name": "SGS",
        "country": "スイス",
        "url": "https://www.sgs.com/"
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
      },
      {
        "name": "DEKRA",
        "country": "ドイツ",
        "url": "https://www.dekra.com/"
      }
    ]
  },
  "deviceDefinition": {
    "legalDefinition": "Food and Drugs Act Section 2 に定義。疾病の診断・治療・軽減・予防に使用される器具・装置・機器等。体の構造・機能を回復・矯正・修正する目的のものも含む。薬理学的・免疫学的・代謝的手段によらないもの。",
    "scope": "IVD（体外診断用医療機器）も Medical Devices Regulations の適用範囲に含まれる。コンビネーション製品は主たる作用機序に基づき医療機器または医薬品として規制。",
    "notes": "SaMD（Software as a Medical Device）は2019年のデジタルヘルステクノロジーに関するガイダンスにより規制対象の明確化が進行。"
  },
  "primaryLaw": {
    "title": "Food and Drugs Act",
    "originalTitle": "Loi sur les aliments et drogues",
    "enacted": "1920",
    "lastAmended": "随時改正",
    "url": "https://laws-lois.justice.gc.ca/eng/acts/f-27/",
    "description": "カナダにおける食品・医薬品・医療機器規制の根幹法。医療機器に関する具体的な要件は下位規則である Medical Devices Regulations (SOR/98-282) に規定。"
  },
  "implementingRegulations": [
    {
      "title": "Medical Devices Regulations (SOR/98-282)",
      "date": "1998年制定、随時改正",
      "url": "https://laws-lois.justice.gc.ca/eng/regulations/SOR-98-282/",
      "description": "医療機器の分類・認可（ライセンス）・ラベリング・品質管理・臨床試験・有害事象報告等を包括的に規定。カナダ医療機器規制の中核規則。",
      "category": "包括規制"
    },
    {
      "title": "Medical Device Establishment Licence (MDEL) Regulations",
      "date": null,
      "url": "https://www.canada.ca/en/health-canada/services/drugs-health-products/medical-devices/activities/device-establishment-licensing.html",
      "description": "カナダ国内で医療機器の輸入・販売・流通を行う施設は MDEL（施設ライセンス）の取得が必要。製造業者は MDSAP 認証で代替可能な場合がある。",
      "category": "施設許可"
    },
    {
      "title": "Medical Devices Regulations — Part 1: Classification Rules",
      "date": null,
      "url": "https://laws-lois.justice.gc.ca/eng/regulations/SOR-98-282/page-2.html",
      "description": "4クラス分類規則。意図する用途・侵襲性・使用期間・エネルギー源等に基づくルールベースの分類。",
      "category": "分類"
    },
    {
      "title": "Medical Device Single Audit Program (MDSAP) Requirements",
      "date": "2019年1月より義務化",
      "url": "https://www.canada.ca/en/health-canada/services/drugs-health-products/medical-devices/quality-requirements/quality-management-system-medical-devices-requirements/medical-device-single-audit-program.html",
      "description": "クラスII〜IVの医療機器製造業者に対する MDSAP 認証義務。ISO 13485 に基づく QMS 監査を MDSAP 認定監査機関が実施。",
      "category": "QMS"
    },
    {
      "title": "Mandatory Problem Reporting for Medical Devices Regulations",
      "date": null,
      "url": "https://laws-lois.justice.gc.ca/eng/regulations/SOR-98-282/page-13.html",
      "description": "医療施設（病院等）に対する有害事象の強制報告義務。製造業者・輸入業者の報告義務とは別枠。",
      "category": "市販後"
    }
  ],
  "relatedLaws": [
    {
      "title": "Vanessa's Law (Protecting Canadians from Unsafe Drugs Act)",
      "category": "市販後安全性",
      "enacted": "2014",
      "url": "https://www.canada.ca/en/health-canada/services/drugs-health-products/legislation-guidelines/questions-answers-vanessa-s-law-protecting-canadians-unsafe-drugs-act.html",
      "relevance": "Health Canada の市販後権限を大幅に強化。強制リコール権限の付与、重篤な有害事象の義務的報告、臨床試験の登録・結果公開義務、行政制裁金（最大500万ドル/日）の導入。"
    },
    {
      "title": "PIPEDA (Personal Information Protection and Electronic Documents Act)",
      "category": "個人情報保護",
      "enacted": "2000",
      "url": "https://laws-lois.justice.gc.ca/eng/acts/P-8.6/",
      "relevance": "連邦レベルの個人情報保護法。医療機器が扱う個人健康情報の収集・使用・開示に関する要件を規定。各州にも個別のプライバシー法が存在。"
    },
    {
      "title": "Consumer Product Safety Act (CCPSA)",
      "category": "製品安全",
      "enacted": "2010",
      "url": "https://laws-lois.justice.gc.ca/eng/acts/C-1.68/",
      "relevance": "医療機器の境界領域にある一般消費者製品の安全規制。医療機器として規制されない健康関連製品に適用される可能性。"
    },
    {
      "title": "Patent Act — Certificate of Supplementary Protection",
      "category": "知的財産",
      "enacted": "1869（随時改正）",
      "url": "https://laws-lois.justice.gc.ca/eng/acts/P-4/",
      "relevance": "医療機器に関連する特許保護。審査期間に起因するパテント期間の補償制度。"
    }
  ],
  "classification": {
    "system": "4クラス制（Class I / II / III / IV）",
    "basis": "リスクベース（ルールベース分類）",
    "classes": [
      {
        "name": "Class I",
        "nameJa": "クラスI",
        "riskLevel": "最低リスク",
        "description": "最もリスクが低い医療機器。Medical Device Licence（MDL）は不要。MDEL（施設ライセンス）と MDSAP 認証も不要。ラベリング要件と安全性・有効性の一般要件を満たすこと。",
        "examples": [
          "舌圧子",
          "弾性包帯",
          "外科用メス",
          "聴診器"
        ],
        "approvalPath": "MDL 不要（MDEL のみ、自己宣言）"
      },
      {
        "name": "Class II",
        "nameJa": "クラスII",
        "riskLevel": "低リスク",
        "description": "低リスクの医療機器。MDL の取得が必要。製造業者は MDSAP 認証を取得しなければならない。Declaration of Conformity による適合宣言。",
        "examples": [
          "コンタクトレンズ",
          "妊娠検査キット",
          "電動車椅子",
          "超音波診断装置"
        ],
        "approvalPath": "MDL（Declaration of Conformity ベース）+ MDSAP 認証"
      },
      {
        "name": "Class III",
        "nameJa": "クラスIII",
        "riskLevel": "中リスク",
        "description": "中リスクの医療機器。MDL 申請時により詳細な技術文書（安全性・有効性データ）が必要。MDSAP 認証必須。",
        "examples": [
          "整形外科用インプラント",
          "血液透析装置",
          "人工呼吸器",
          "グルコースモニター"
        ],
        "approvalPath": "MDL（技術審査あり）+ MDSAP 認証"
      },
      {
        "name": "Class IV",
        "nameJa": "クラスIV",
        "riskLevel": "高リスク",
        "description": "最もリスクの高い医療機器。最も厳格な審査。臨床試験データが通常必要。MDL 取得に最も長い審査期間。MDSAP 認証必須。",
        "examples": [
          "心臓ペースメーカー",
          "冠動脈ステント",
          "人工心臓弁",
          "埋込み型除細動器"
        ],
        "approvalPath": "MDL（最も詳細な技術審査 + 通常臨床データ）+ MDSAP 認証"
      }
    ],
    "rules": [
      {
        "id": "SOR/98-282 Schedule 1 分類規則",
        "description": "医療機器の意図する用途、侵襲性、使用期間、エネルギー源等に基づく分類規則。16の分類ルールで構成。",
        "url": "https://laws-lois.justice.gc.ca/eng/regulations/SOR-98-282/page-2.html"
      },
      {
        "id": "Classification Tool",
        "description": "Health Canada が提供するオンライン分類ツールで、質問に答えることで適切なクラスを判定可能。",
        "url": "https://www.canada.ca/en/health-canada/services/drugs-health-products/medical-devices/application-information/guidance-documents/guidance-document-medical-device-classification-rules.html"
      }
    ],
    "totalProductCodes": "分類規則ベース（米国のような Product Code 体系はなし）"
  },
  "conformityAssessment": {
    "overview": "Health Canada が Medical Device Licence (MDL) を発行。クラスII は Declaration of Conformity ベース、クラスIII/IV は技術審査を伴う。全てのクラスII〜IV製造業者に MDSAP 認証が必要。",
    "routes": [
      {
        "name": "Medical Device Licence (MDL) — Class II",
        "nameJa": "医療機器ライセンス — クラスII",
        "applicableClasses": [
          "Class II"
        ],
        "description": "Declaration of Conformity（適合宣言）に基づく認可。安全性・有効性データの詳細審査は通常不要だが、ラベリング・MDSAP 認証・適合宣言書等の提出が必要。",
        "subtypes": [],
        "avgReviewTime": "目標: 15営業日（書類不備がない場合）。実績: 約30〜60日。",
        "fee": "CAD $632（FY2025-26）。年間ライセンス維持費: CAD $452",
        "url": "https://www.canada.ca/en/health-canada/services/drugs-health-products/medical-devices/application-information/guidance-documents/guidance-medical-device-licence-application.html"
      },
      {
        "name": "Medical Device Licence (MDL) — Class III",
        "nameJa": "医療機器ライセンス — クラスIII",
        "applicableClasses": [
          "Class III"
        ],
        "description": "技術文書（安全性・有効性データ、リスクマネジメント、ベンチテスト結果等）の審査を伴う認可。臨床データが求められる場合もある。",
        "subtypes": [],
        "avgReviewTime": "目標: 60営業日。実績: 約4〜8ヶ月。",
        "fee": "CAD $13,926（FY2025-26）。年間ライセンス維持費: CAD $452",
        "url": "https://www.canada.ca/en/health-canada/services/drugs-health-products/medical-devices/application-information/guidance-documents/guidance-medical-device-licence-application.html"
      },
      {
        "name": "Medical Device Licence (MDL) — Class IV",
        "nameJa": "医療機器ライセンス — クラスIV",
        "applicableClasses": [
          "Class IV"
        ],
        "description": "最も詳細な技術審査。臨床試験データが通常必要。安全性・有効性の包括的な科学的証拠の提出。Health Canada 審査官による詳細レビュー。",
        "subtypes": [],
        "avgReviewTime": "目標: 75営業日。実績: 約6〜12ヶ月。",
        "fee": "CAD $30,199（FY2025-26）。年間ライセンス維持費: CAD $452",
        "url": "https://www.canada.ca/en/health-canada/services/drugs-health-products/medical-devices/application-information/guidance-documents/guidance-medical-device-licence-application.html"
      },
      {
        "name": "Investigational Testing Authorization (ITA)",
        "nameJa": "治験機器許可",
        "applicableClasses": [
          "Class II / III / IV（治験用）"
        ],
        "description": "カナダ国内で医療機器の臨床試験を実施するための許可。Medical Devices Regulations Part 3 に基づく。Research Ethics Board（REB）の承認も必要。",
        "subtypes": [],
        "avgReviewTime": "約30営業日",
        "fee": "免除",
        "url": "https://www.canada.ca/en/health-canada/services/drugs-health-products/medical-devices/application-information/guidance-documents/investigational-testing-medical-devices.html"
      },
      {
        "name": "Special Access Programme (SAP)",
        "nameJa": "特別アクセスプログラム",
        "applicableClasses": [
          "未認可機器"
        ],
        "description": "緊急時または通常の治療法がない場合に、未認可の医療機器へのアクセスを許可するプログラム。医療従事者が個別患者のために申請。",
        "subtypes": [],
        "avgReviewTime": "緊急: 24時間以内。通常: 数日。",
        "fee": "免除",
        "url": "https://www.canada.ca/en/health-canada/services/drugs-health-products/special-access/medical-devices.html"
      },
      {
        "name": "Interim Order Pathway",
        "nameJa": "暫定命令経路",
        "applicableClasses": [
          "全クラス（緊急時）"
        ],
        "description": "公衆衛生上の緊急事態時に大臣が発する Interim Order に基づく迅速認可経路。COVID-19 パンデミック時に導入。通常の認可要件を簡略化。",
        "subtypes": [],
        "avgReviewTime": "ケースバイケース（数日〜数週間）",
        "fee": "免除",
        "url": "https://www.canada.ca/en/health-canada/services/drugs-health-products/covid19-industry/medical-devices/interim-order.html"
      }
    ]
  },
  "electronicSubmission": {
    "system": "MDEL Online System / Health Canada Online Submissions",
    "url": "https://www.canada.ca/en/health-canada/services/drugs-health-products/medical-devices/application-information.html",
    "description": "MDL 申請はオンラインシステム経由での電子申請が推奨されている。MDEL も電子申請が利用可能。eSubmission 形式は eCTD 等のフォーマット。",
    "mandatory": false
  },
  "udi": {
    "required": false,
    "system": "検討段階（コンサルテーション完了済み）",
    "description": "Health Canadaは UDI制度のコンサルテーションを完了しているが、正式な施行規則は2026年4月時点で未公布。導入時期は未確定。",
    "url": "https://www.canada.ca/en/health-canada/programs/consultation-unique-device-identification-system-medical-devices-canada.html",
    "timeline": "コンサルテーション完了済み。正式な施行規則は未公布（2026年4月時点）。段階的導入の方針だが具体的スケジュールは未確定。"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "Mandatory Problem Reporting — Medical Devices Regulations Part 4",
      "mandatory": true,
      "url": "https://www.canada.ca/en/health-canada/services/drugs-health-products/medeffect-canada/adverse-reaction-reporting/mandatory-hospital-reporting.html",
      "description": "製造業者・輸入業者は事故（死亡・重篤な健康悪化等）を10日以内（死亡は72時間以内）に Health Canada に報告義務。医療施設も Mandatory Problem Reporting の対象。Vanessa's Law により報告義務が強化。"
    },
    "recalls": {
      "authority": "Health Canada",
      "description": "Type I（重篤な健康被害リスク）/ Type II（一時的な健康被害）/ Type III（低リスク）の3段階。Vanessa's Law により強制リコール権限を保有。リコール情報は Recalls and Safety Alerts Database で公開。",
      "url": "https://recalls-rappels.canada.ca/en/search/site?f%5B0%5D=recall_type%3A867"
    },
    "surveillance": "Canada Vigilance Program、CMDR（Canadian Medical Devices Registry）データベース、市販後調査命令権限（Vanessa's Law）"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "Health Canada",
    "name": "Certificate of Free Sale (CFS)",
    "description": "カナダで認可された医療機器について、自由に販売可能であることを証明する文書。輸出先国の規制当局が要求する場合に使用。MDL 保持者が申請可能。",
    "processingTime": "約10〜20営業日",
    "url": "https://www.canada.ca/en/health-canada/services/drugs-health-products/medical-devices/application-information/guidance-documents/certificate-free-sale.html"
  },
  "reimbursement": {
    "system": "州・準州の公的保険 + 民間保険",
    "authority": "CADTH（連邦レベル HTA）+ 各州保健省",
    "description": "カナダは単一支払者制度（Medicare）だが、医療サービスの提供は州・準州が管轄。CADTH が連邦レベルで HTA を実施し推奨を出すが、最終的なカバレッジ決定は各州が独自に行う。入院機器は病院グローバル予算に含まれる場合が多い。高額機器は Provincial Health Technology Assessment で評価。",
    "codingSystems": [
      "CCI (Canadian Classification of Health Interventions)",
      "ICD-10-CA",
      "CMG (Case Mix Groups)"
    ],
    "url": "https://www.cadth.ca/health-technology-assessment"
  },
  "marketingRules": {
    "authority": "Health Canada + Competition Bureau",
    "description": "医療機器の広告はクラスI機器に限り一般公衆向けが可能。クラスII〜IV は医療従事者向けのみ。Food and Drugs Act Section 3 による虚偽・誤解を招く広告の禁止。",
    "keyRules": [
      "クラスII〜IV の医療機器は一般消費者向け広告が原則禁止",
      "クラスI のみ一般公衆向け広告可（虚偽・誤解を招かない範囲で）",
      "認可された適応（Intended Use）の範囲内でのみ広告可",
      "Competition Act による虚偽表示・欺瞞的マーケティングの禁止"
    ]
  },
  "mdsap": {
    "status": "参加国",
    "description": "カナダは MDSAP の主要推進国。2019年1月よりクラスII〜IVの全製造業者に MDSAP 認証を義務化。MDSAP 監査報告書が QMS 適合の唯一の証拠として使用される。ISO 13485 認証だけでは不十分。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "MDSAP を通じて ISO 13485:2016 適合性を確認。カナダ固有の追加要件は MDSAP カナダ章で対応。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "リスクマネジメントの参照規格として認知。MDL 申請で引用。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "ソフトウェア含有医療機器に対する参照規格。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "医用電気機器の安全性能規格。CSA C22.2 No. 60601 としてカナダ国家規格にも採用。"
    },
    "others": [
      {
        "standard": "ISO 10993 シリーズ",
        "notes": "生体適合性評価に適用"
      },
      {
        "standard": "CAN/CSA-C22.2 No. 60601 シリーズ",
        "notes": "IEC 60601 のカナダ国家規格版。電気安全要件。"
      }
    ]
  },
  "recentDevelopments": [
    {
      "date": "2024-11",
      "title": "Agile Licensing 規則改正の公布",
      "description": "2024年11月29日、Regulations Amending Certain Regulations Made under the Food and Drugs Act (Agile Licensing) が Canada Gazette Part 2 に公布。MDR改正により Terms and Conditions（T&Cs）の適用拡大、リスクベースの規制近代化、COVID-19パンデミック時の規制柔軟策の恒久化等を導入。一部は即日発効、残りは2025〜2027年にかけて段階施行。"
    },
    {
      "date": "2024-01",
      "title": "Urgent Public Health Need 経路の恒久化",
      "description": "Regulations Amending the Medical Devices Regulations (Medical Devices for an Urgent Public Health Need) が2024年1月発効。COVID-19に限定されていた暫定命令経路を恒久化し、公衆衛生上の緊急事態全般に対応する迅速認可経路を整備。"
    },
    {
      "date": "2024",
      "title": "SaMD 規制枠組みの更新",
      "description": "Software as a Medical Device に関するガイダンス文書を更新。AI/ML 機器の規制アプローチを明確化。"
    },
    {
      "date": "2023",
      "title": "サイバーセキュリティガイダンス改訂",
      "description": "医療機器のサイバーセキュリティに関する市販前ガイダンスを改訂。SBOM（ソフトウェア部品表）要件を強化。"
    }
  ],
  "lastUpdated": "2026-04-06",
  "verified": "2026-04-06"
};
