// フィリピン (Republic of the Philippines)
export default {
  "code": "PHL",
  "country": "フィリピン",
  "countryEn": "Republic of the Philippines",
  "region": "ASPAC",
  "flag": "🇵🇭",
  "legalSystemOverview": {
    "type": "大統領制共和国（混合法体系 — シビルロー＋コモンロー）",
    "description": "フィリピンの医療機器規制は Republic Act No. 9711（FDA Act of 2009）を根拠とし、FDA Philippines（食品医薬品庁）が一元的に管轄する。ASEAN Medical Device Directive（AMDD）に整合した4クラス分類制度を採用。低リスク機器は Certificate of Medical Device Notification（CMDN）、高リスク機器は Certificate of Medical Device Registration（CMDR）で市場参入する。",
    "keyCharacteristics": [
      "FDA Philippines による一元的な規制体制",
      "ASEAN AMDD 整合の4クラス分類（Class A / B / C / D）",
      "CMDN（届出）と CMDR（登録）の二層構造",
      "ASEAN 加盟国間の Abridged Pathway（簡略化経路）",
      "eServices Portal による電子申請の拡大（2025年〜）"
    ]
  },
  "authorities": [
    {
      "name": "FDA Philippines",
      "fullName": "Food and Drug Administration Philippines",
      "localName": "Pangasiwaan sa Pagkain at Gamot",
      "role": "医療機器の登録・届出・市販後監視・施設認可",
      "url": "https://www.fda.gov.ph/",
      "isPrimary": true
    },
    {
      "name": "DOH",
      "fullName": "Department of Health",
      "localName": "Kagawaran ng Kalusugan",
      "role": "医療機器規制の政策立案・行政命令の発行",
      "url": "https://www.doh.gov.ph/",
      "isPrimary": false
    },
    {
      "name": "PhilHealth",
      "fullName": "Philippine Health Insurance Corporation",
      "localName": null,
      "role": "国民健康保険による医療機器関連給付の管理",
      "url": "https://www.philhealth.gov.ph/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "なし（FDA Philippines が直接審査）",
    "description": "フィリピンではNotified Body制度は存在しない。FDA Philippines（CDRRHR: Center for Device Regulation, Radiation Health and Research）が直接、医療機器の登録審査を実施する。ASEAN加盟国のNRAによる承認がある場合は Abridged Pathway（簡略化経路）を利用可能。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "Republic Act No. 9711 および ASEAN AMDD に基づく定義。疾病の診断・予防・モニタリング・治療・緩和等を目的とする器具・装置・ソフトウェア・材料等で、薬理学的・免疫学的・代謝的手段によらずその主たる目的を達成するもの。",
    "scope": "IVD を含む。医療機器ソフトウェア（MDSW）に関するドラフトガイドラインを2025年5月に公開。ASEAN AMDD の定義に整合。",
    "notes": "2025年にドラフト FDA Circular で SaMD/MDSW の分類・評価ガイドラインを策定中。ASEAN および国際規制慣行に整合した枠組みを目指している。"
  },
  "primaryLaw": {
    "title": "Republic Act No. 9711 — FDA Act of 2009",
    "originalTitle": null,
    "enacted": "2009",
    "lastAmended": null,
    "url": "https://www.fda.gov.ph/republic-act-no-9711/",
    "description": "FDA Philippines の設立根拠法。医薬品・医療機器・食品・化粧品等の規制を包括的に規定。FDA に医療機器の登録・監視・取締り権限を付与。"
  },
  "implementingRegulations": [
    {
      "title": "Administrative Order No. 2018-0002 — Rules and Regulations on the Regulation of Medical Devices",
      "date": "2018",
      "url": "https://www.fda.gov.ph/",
      "description": "医療機器規制の包括的な実施規則。ASEAN AMDD に整合したクラス分類・登録手続き・市販後監視を規定。",
      "category": "登録"
    },
    {
      "title": "Administrative Order No. 2025-0030 — PMAS Requirements (AMDD Annex 5)",
      "date": "2025-03",
      "url": "https://www.fda.gov.ph/",
      "description": "ASEAN AMDD Annex 5 に基づく Post-Marketing Alert System（PMAS）の実施ガイドライン。市販後安全性監視の義務的枠組みを確立。",
      "category": "市販後"
    },
    {
      "title": "FDA Circular No. 2025-007 — eServices Portal for CMDN",
      "date": "2025-03",
      "url": "https://www.fda.gov.ph/fda-circular-no-2025-007-guidelines-on-the-use-of-the-food-and-drug-administration-eservices-portal-system-for-the-initial-application-of-a-certificate-of-medical-device-notification-cmdn/",
      "description": "Class A 医療機器の CMDN 初回申請に eServices Portal の使用を義務化。2025年3月10日から全面実施。",
      "category": "電子申請"
    }
  ],
  "relatedLaws": [
    {
      "title": "Republic Act No. 3720 — Food, Drug and Cosmetic Act",
      "category": "基本法",
      "enacted": "1963",
      "url": null,
      "relevance": "FDA Philippines の前身法。RA 9711 により大幅改正・強化。"
    },
    {
      "title": "Data Privacy Act of 2012 (RA 10173)",
      "category": "個人情報保護",
      "enacted": "2012",
      "url": null,
      "relevance": "コネクテッドデバイス・SaMD が取り扱う個人健康情報の保護要件。"
    }
  ],
  "classification": {
    "system": "4クラス制（Class A / B / C / D）— ASEAN AMDD 整合",
    "basis": "リスクベース（GHTF/ASEAN AMDD 分類原則）",
    "classes": [
      {
        "name": "Class A",
        "nameJa": "クラスA",
        "riskLevel": "低リスク",
        "description": "最低リスクの機器。CMDN（届出）で市場参入。",
        "examples": [
          "舌圧子",
          "再使用可能手術器具",
          "非滅菌包帯"
        ],
        "approvalPath": "CMDN（Certificate of Medical Device Notification）"
      },
      {
        "name": "Class B",
        "nameJa": "クラスB",
        "riskLevel": "低〜中リスク",
        "description": "低〜中リスクの機器。CMDR（登録）が必要。",
        "examples": [
          "血圧計",
          "補聴器",
          "超音波診断装置"
        ],
        "approvalPath": "CMDR（Certificate of Medical Device Registration）"
      },
      {
        "name": "Class C",
        "nameJa": "クラスC",
        "riskLevel": "中〜高リスク",
        "description": "中〜高リスクの機器。CMDR（登録）が必要。",
        "examples": [
          "人工呼吸器",
          "血液透析装置",
          "整形外科インプラント"
        ],
        "approvalPath": "CMDR（Certificate of Medical Device Registration）"
      },
      {
        "name": "Class D",
        "nameJa": "クラスD",
        "riskLevel": "高リスク",
        "description": "最高リスクの機器。CMDR（登録）が必要。最も厳格な審査。",
        "examples": [
          "心臓弁",
          "冠動脈ステント",
          "埋込み型除細動器"
        ],
        "approvalPath": "CMDR（Certificate of Medical Device Registration）"
      }
    ],
    "rules": [
      {
        "id": "ASEAN AMDD 分類ルール",
        "description": "ASEAN Medical Device Directive に基づくリスク分類ルール。侵襲性・持続時間・能動/非能動等の基準で分類。",
        "url": "https://www.fda.gov.ph/"
      }
    ],
    "totalProductCodes": "ASEAN AMDD 分類ルール（GHTF 準拠）"
  },
  "conformityAssessment": {
    "overview": "FDA Philippines が直接審査。Class A は CMDN（届出）、Class B/C/D は CMDR（登録）。ASEAN 加盟国の NRA 承認がある場合は Abridged Pathway を利用可能。",
    "routes": [
      {
        "name": "CMDN (Certificate of Medical Device Notification)",
        "nameJa": "CMDN 医療機器届出証明書",
        "applicableClasses": [
          "Class A"
        ],
        "description": "低リスク機器の届出制度。eServices Portal 経由でオンライン申請（2025年3月〜必須）。",
        "subtypes": [],
        "avgReviewTime": "約30営業日",
        "fee": "登録手数料あり（2025年は一時的に旧料金に戻し中）",
        "url": "https://www.fda.gov.ph/"
      },
      {
        "name": "CMDR (Certificate of Medical Device Registration)",
        "nameJa": "CMDR 医療機器登録証明書",
        "applicableClasses": [
          "Class B",
          "Class C",
          "Class D"
        ],
        "description": "中〜高リスク機器の登録制度。技術文書・安全性データ・品質管理システムの審査を伴う。",
        "subtypes": [
          {
            "name": "Full Evaluation",
            "description": "フルの技術審査。初回登録に適用。"
          },
          {
            "name": "Abridged Pathway",
            "description": "ASEAN 加盟国の NRA 承認がある場合の簡略化経路。Class B/C/D に適用可能。審査期間短縮。"
          }
        ],
        "avgReviewTime": "Full: 約90〜120営業日、Abridged: 約60営業日",
        "fee": "US$736〜US$1,773（クラス・有効期間による。2025年は一時的に旧料金適用中）",
        "url": "https://www.fda.gov.ph/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "FDA eServices Portal",
    "url": "https://eservices.fda.gov.ph/",
    "description": "2025年3月10日から Class A 機器の CMDN 初回申請は eServices Portal 経由が必須。Class B/C/D の CMDR はメール（cdrrhr-productregistration@fda.gov.ph）による提出が継続中。",
    "mandatory": true
  },
  "udi": {
    "required": false,
    "system": "未導入（ASEAN AMDD での検討中）",
    "description": "フィリピンでは現時点で UDI は義務化されていない。ASEAN レベルでの UDI 導入議論が進行中。",
    "url": null,
    "timeline": "ASEAN AMDD の進展に連動して導入予定"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "FDA Philippines 有害事象報告制度 — CDRRHR",
      "mandatory": true,
      "url": "https://www.fda.gov.ph/",
      "description": "製造業者・流通業者は重篤な有害事象を FDA Philippines（CDRRHR）に報告義務。AO 2025-0030 により ASEAN AMDD Annex 5 に基づく Post-Marketing Alert System（PMAS）を正式導入。報告は CDRRHR-PRSDD-Form 0.20 を使用。"
    },
    "recalls": {
      "authority": "FDA Philippines",
      "description": "製造業者・流通業者主導のリコール（Field Safety Corrective Action）。FDA Philippines は安全性アラートを発行し、回収を監督。",
      "url": "https://www.fda.gov.ph/"
    },
    "surveillance": "AO 2025-0030 に基づく PMAS の運用。スポンサーは Post-Market Surveillance 計画の策定・実施が義務。ASEAN AMDD Annex 5 に整合した市販後監視体制。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "FDA Philippines",
    "name": "Certificate of Free Sale (CFS) / Certificate of Product Registration (CPR)",
    "description": "FDA Philippines が登録済み医療機器について発行する自由販売証明書。輸出先国の当局が要求する場合に使用。",
    "processingTime": "約2〜4週間",
    "url": "https://www.fda.gov.ph/"
  },
  "reimbursement": {
    "system": "PhilHealth（国民健康保険）",
    "authority": "PhilHealth (Philippine Health Insurance Corporation)",
    "description": "PhilHealth は Universal Health Care Act（RA 11223, 2019年）に基づく国民健康保険制度を運営。医療機器関連の給付は主に手技・入院パッケージに含まれる形で償還。個別機器の直接償還リストは限定的。",
    "codingSystems": [
      "PhilHealth Case Rates（包括支払い）",
      "ICD-10"
    ],
    "url": "https://www.philhealth.gov.ph/"
  },
  "marketingRules": {
    "authority": "FDA Philippines",
    "description": "医療機器の広告は FDA Philippines の規制に基づく。Consumer Act of the Philippines（RA 7394）による虚偽・誤解を招く広告の禁止。登録/届出済みの適応のみ広告可。",
    "keyRules": [
      "FDA 登録/届出されていない機器の広告禁止",
      "虚偽・誤解を招く効能表示の禁止（RA 7394）",
      "医療機器広告は FDA の事前承認が必要な場合あり",
      "オンライン販売・広告に関するガイドラインの強化"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "フィリピンは MDSAP の参加国ではない。ただし ISO 13485 認証は登録時に有利に作用する。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "CMDR 申請時に ISO 13485 認証の提出が推奨・考慮される。ASEAN AMDD の QMS 要件に整合。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "リスクマネジメントの参照規格として認知。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "SaMD/MDSW ガイドライン（ドラフト）で参照。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "医用電気機器の安全・性能要求として参照。"
    },
    "others": [
      {
        "standard": "ISO 10993 シリーズ",
        "notes": "生体適合性評価の参照規格"
      },
      {
        "standard": "ASEAN AMDD Essential Principles",
        "notes": "ASEAN 共通の安全性・性能の基本原則"
      }
    ]
  },
  "recentDevelopments": [
    {
      "date": "2025-03",
      "title": "AO 2025-0030: PMAS 実施ガイドライン発行",
      "description": "ASEAN AMDD Annex 5 に基づく Post-Marketing Alert System（PMAS）の実施ガイドラインを発行。市販後安全性監視の義務的枠組みを確立。"
    },
    {
      "date": "2025-05",
      "title": "医療機器ソフトウェア（MDSW）ガイドライン ドラフト公開",
      "description": "FDA Philippines が SaMD/MDSW の分類・評価に関するドラフト FDA Circular を公開。パブリックコメント期限は2025年7月20日。"
    },
    {
      "date": "2025-03",
      "title": "eServices Portal による CMDN 電子申請の全面実施",
      "description": "Class A 医療機器の CMDN 初回申請が eServices Portal 経由で全面実施。デジタル化の推進。"
    },
    {
      "date": "2025",
      "title": "医療機器登録手数料の一時停止",
      "description": "2025年の大幅な手数料引き上げに対し、一時的に旧料金への差し戻し措置を実施（60営業日間）。さらに延長措置あり。"
    }
  ],
  "lastUpdated": "2026-04-02",
  "verified": null
};
