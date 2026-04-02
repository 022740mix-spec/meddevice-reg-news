// ニュージーランド (New Zealand)
export default {
  "code": "NZL",
  "country": "ニュージーランド",
  "countryEn": "New Zealand",
  "region": "ASPAC",
  "flag": "🇳🇿",
  "legalSystemOverview": {
    "type": "コモンロー（Common law）— 単一国家体制",
    "description": "ニュージーランドの医療機器規制は現行 Medicines Act 1981 および Medicines (Database of Medical Devices) Regulations 2003 を根拠とする。現行法制は医療機器の市販前承認制度を持たず、WAND（Web Assisted Notification of Devices）データベースへの届出制を採用している。Therapeutic Products Act 2023 が成立したが、政府は Medical Products Bill による置換を決定し、2026年後半に新規制体制への移行を計画中。TGA（オーストラリア）との Trans-Tasman 相互認証や早期警告システムが重要な特徴。",
    "keyCharacteristics": [
      "WAND データベースへの届出制（市販前承認ではない）",
      "リスクベースの5クラス分類（GHTF 準拠）",
      "TGA（オーストラリア）との Trans-Tasman 相互認証・早期警告システム",
      "Therapeutic Products Act 2023 から Medical Products Bill への移行中",
      "PHARMAC による公的部門の機器調達・償還管理"
    ]
  },
  "authorities": [
    {
      "name": "Medsafe",
      "fullName": "New Zealand Medicines and Medical Devices Safety Authority",
      "localName": null,
      "role": "医療機器のWAND届出管理・市販後安全性監視・有害事象対応",
      "url": "https://www.medsafe.govt.nz/",
      "isPrimary": true
    },
    {
      "name": "PHARMAC",
      "fullName": "Pharmaceutical Management Agency",
      "localName": null,
      "role": "公的医療制度における医療機器の調達・価格交渉・償還管理",
      "url": "https://www.pharmac.govt.nz/",
      "isPrimary": false
    },
    {
      "name": "Ministry of Health",
      "fullName": "Ministry of Health — Manatū Hauora",
      "localName": "Manatū Hauora",
      "role": "医療機器規制の政策立案・Medical Products Bill の策定",
      "url": "https://www.health.govt.nz/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "なし（WAND届出制、第三者適合性評価なし）",
    "description": "現行法制下ではNotified Body制度は存在しない。WAND への届出は安全性・有効性の評価を伴わない。TGAのオーストラリア登録があれば Trans-Tasman MRA により相互認証の対象となりうる。新法（Medical Products Bill）では適合性評価の導入が検討されている。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "Medicines Act 1981 に基づく定義。疾病の診断・予防・モニタリング・治療等を目的とする器具・装置・ソフトウェア等で、薬理学的・免疫学的・代謝的手段によらずその主たる目的を達成するもの。",
    "scope": "IVD を含む。Medicines (Database of Medical Devices) Regulations 2003 の Schedule 1 で対象範囲を規定。一部の機器（カスタムメイド、治験用等）は WAND 届出免除。",
    "notes": "SaMD は現行法では明確な規定がなく、新法で対応予定。Therapeutic Products Act 2023 / Medical Products Bill で SaMD の規制枠組みが整備される見込み。"
  },
  "primaryLaw": {
    "title": "Medicines Act 1981",
    "originalTitle": null,
    "enacted": "1981",
    "lastAmended": "2025（2025年11月改正）",
    "url": "https://www.legislation.govt.nz/act/public/1981/0118/latest/DLM53790.html",
    "description": "医療機器規制の現行根拠法。ただし本法は主に医薬品を対象としており、医療機器に関する規定は限定的。Medicines (Database of Medical Devices) Regulations 2003 により WAND データベースを設置。政府は Medical Products Bill による全面的な置換を計画中（2026年後半発効予定）。"
  },
  "implementingRegulations": [
    {
      "title": "Medicines (Database of Medical Devices) Regulations 2003",
      "date": "2003-11-03",
      "url": "https://www.legislation.govt.nz/regulation/public/2003/0325/latest/DLM224223.html",
      "description": "WAND データベースの設置根拠。スポンサーは NZ で供給する医療機器を30暦日以内に WAND に届出する義務。届出は無料。22の分類ルールを規定。",
      "category": "登録"
    },
    {
      "title": "Trans-Tasman Mutual Recognition Act 1997",
      "date": "1997",
      "url": "https://www.legislation.govt.nz/act/public/1997/0060/latest/DLM410793.html",
      "description": "オーストラリアとの相互認証。一方の国で合法的に供給される製品は、一定条件下で他方の国でも販売可能。医療機器への適用には条件・制限あり。",
      "category": "相互認証"
    }
  ],
  "relatedLaws": [
    {
      "title": "Therapeutic Products Act 2023",
      "category": "規制改革",
      "enacted": "2023",
      "url": "https://www.legislation.govt.nz/act/public/2023/0058/latest/whole.html",
      "relevance": "Medicines Act 1981 を置換する新法として成立。しかし政府は Medical Products Bill による再置換を決定。最終発効期限は2026年9月1日。"
    },
    {
      "title": "Health and Disability Commissioner Act 1994",
      "category": "患者権利",
      "enacted": "1994",
      "url": "https://www.legislation.govt.nz/act/public/1994/0088/latest/DLM333584.html",
      "relevance": "医療機器の使用に関連する患者の権利保護。消費者の苦情処理制度。"
    },
    {
      "title": "Privacy Act 2020",
      "category": "個人情報保護",
      "enacted": "2020",
      "url": "https://www.legislation.govt.nz/act/public/2020/0031/latest/LMS23223.html",
      "relevance": "コネクテッドデバイス・SaMD が取り扱う個人健康情報の保護要件。"
    }
  ],
  "classification": {
    "system": "5クラス制（Class I / IIa / IIb / III / AIMD）— GHTF準拠",
    "basis": "リスクベース（GHTF分類原則）",
    "classes": [
      {
        "name": "Class I",
        "nameJa": "クラスI",
        "riskLevel": "低リスク",
        "description": "最低リスク。非侵襲的機器の多くが該当。",
        "examples": [
          "包帯",
          "車椅子",
          "聴診器"
        ],
        "approvalPath": "WAND 届出（自己認証）"
      },
      {
        "name": "Class IIa",
        "nameJa": "クラスIIa",
        "riskLevel": "低〜中リスク",
        "description": "低〜中リスクの機器。",
        "examples": [
          "血圧計",
          "補聴器",
          "超音波プローブ"
        ],
        "approvalPath": "WAND 届出"
      },
      {
        "name": "Class IIb",
        "nameJa": "クラスIIb",
        "riskLevel": "中〜高リスク",
        "description": "中〜高リスクの機器。",
        "examples": [
          "人工呼吸器",
          "血液透析装置",
          "骨接合プレート"
        ],
        "approvalPath": "WAND 届出"
      },
      {
        "name": "Class III",
        "nameJa": "クラスIII",
        "riskLevel": "高リスク",
        "description": "高リスクの機器。長期埋込み型など。",
        "examples": [
          "人工股関節",
          "冠動脈ステント",
          "乳房インプラント"
        ],
        "approvalPath": "WAND 届出"
      },
      {
        "name": "AIMD",
        "nameJa": "能動埋込み医療機器",
        "riskLevel": "高リスク",
        "description": "体内に埋め込まれる能動型医療機器。",
        "examples": [
          "ペースメーカー",
          "埋込み型除細動器",
          "人工内耳"
        ],
        "approvalPath": "WAND 届出"
      }
    ],
    "rules": [
      {
        "id": "22分類ルール",
        "description": "Medicines (Database of Medical Devices) Regulations 2003 の Schedule 2 に規定される22の分類ルール。GHTF の分類原則に準拠。",
        "url": "https://www.medsafe.govt.nz/regulatory/devicesnew/2-1Classification.asp"
      }
    ],
    "totalProductCodes": "分類ルール22（Product Code 制度は採用していない）"
  },
  "conformityAssessment": {
    "overview": "現行法では市販前承認制度がなく、WAND への届出のみ。適合性評価はスポンサーの自己宣言に依拠。TGA登録がある場合は Trans-Tasman MRA により相互認証の根拠となりうる。新法で適合性評価制度の導入が予定されている。",
    "routes": [
      {
        "name": "WAND Notification",
        "nameJa": "WAND 届出",
        "applicableClasses": [
          "全クラス"
        ],
        "description": "スポンサーは NZ で医療機器を供給開始してから30暦日以内に WAND に届出。届出は機器の安全性・有効性を評価・承認するものではなく、市販後監視のための情報収集が目的。",
        "subtypes": [],
        "avgReviewTime": "即時（届出受理）",
        "fee": "無料",
        "url": "https://www.medsafe.govt.nz/regulatory/DevicesNew/3WAND.asp"
      },
      {
        "name": "Trans-Tasman MRA",
        "nameJa": "Trans-Tasman 相互認証",
        "applicableClasses": [
          "TGA登録機器"
        ],
        "description": "オーストラリア TGA に登録された医療機器は、Trans-Tasman Mutual Recognition Arrangement に基づき、一定条件下で NZ でも供給可能。ただしWAND届出は別途必要。",
        "subtypes": [],
        "avgReviewTime": "条件による",
        "fee": "WAND届出は無料",
        "url": "https://www.legislation.govt.nz/act/public/1997/0060/latest/DLM410793.html"
      }
    ]
  },
  "electronicSubmission": {
    "system": "WAND Online System",
    "url": "https://www.medsafe.govt.nz/regulatory/DevicesNew/3WAND.asp",
    "description": "WAND はオンラインデータベースで、スポンサーがウェブ上で直接機器情報を入力・届出する。",
    "mandatory": true
  },
  "udi": {
    "required": false,
    "system": "未導入（検討中）",
    "description": "現行法では UDI は義務化されていない。一部の機器についてはトレーサビリティ要件があるが、体系的な UDI 制度は未導入。新法で IMDRF UDI ガイダンスに沿った制度導入が検討されている。",
    "url": null,
    "timeline": "新法（Medical Products Bill）の施行に伴い導入予定"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "Medsafe 有害事象報告制度 — CARM（Centre for Adverse Reactions Monitoring）",
      "mandatory": true,
      "url": "https://www.medsafe.govt.nz/regulatory/devicesnew/9adverseevent.asp",
      "description": "スポンサーは有害事象を Medsafe に報告する義務がある。市場措置を伴うインシデントは10営業日以内に初回報告、最終報告は120暦日以内。医療専門家・患者も CARM 経由で報告可能。"
    },
    "recalls": {
      "authority": "Medsafe",
      "description": "スポンサー主導のリコール（Field Safety Corrective Action）。Medsafe はリコール公告を発行し、TGA との Trans-Tasman 早期警告システムで情報共有。",
      "url": "https://www.medsafe.govt.nz/hot/recalls/devicesrecalls.asp"
    },
    "surveillance": "Medsafe による市販後安全性監視。Trans-Tasman Early Warning System により TGA と安全性情報を共有。CARM データベースで有害事象を一元管理。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "Medsafe",
    "name": "Certificate of Free Sale",
    "description": "Medsafe が発行する自由販売証明書。NZ で合法的に供給されている医療機器について、輸出先国の当局が要求する場合に使用。",
    "processingTime": "約2〜4週間",
    "url": "https://www.medsafe.govt.nz/regulatory/reg.asp"
  },
  "reimbursement": {
    "system": "PHARMAC（公的部門の調達・償還）+ ACC（事故補償）",
    "authority": "PHARMAC (Pharmaceutical Management Agency)",
    "description": "PHARMAC は公的医療制度（Te Whatu Ora）で使用される医療機器の調達・価格交渉を管理。医療機器の償還リストを管理し、国家契約を通じて公的病院への供給を取り決める。民間部門は別途保険制度。ACC（Accident Compensation Corporation）は事故関連の医療機器費用をカバー。",
    "codingSystems": [
      "PHARMAC Devices Schedule",
      "National Contract（国家調達契約）"
    ],
    "url": "https://www.pharmac.govt.nz/"
  },
  "marketingRules": {
    "authority": "Medsafe + Commerce Commission",
    "description": "医療機器の広告は Fair Trading Act 1986 および消費者保護法に基づき規制。虚偽・誤解を招く表示は禁止。医療専門家向けと一般消費者向けで異なる基準が適用される場合がある。",
    "keyRules": [
      "Fair Trading Act 1986 による虚偽・誤解を招く表示の禁止",
      "WAND 届出情報との整合性が必要",
      "承認されていない効能・効果の広告禁止",
      "比較広告は事実に基づくことが必要"
    ]
  },
  "mdsap": {
    "status": "非参加（関連はあるが MDSAP 正式メンバーではない）",
    "description": "NZ は MDSAP の正式参加国ではない。ただし TGA（オーストラリア）が MDSAP 参加国であるため、Trans-Tasman MRA を通じた間接的な関連がある。新法の下で MDSAP 参加が検討される可能性がある。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "現行法では法的義務ではないが、TGA 登録やCE マーキングの前提として実質的に必要。新法で QMS 要件が正式に導入される見込み。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "リスクマネジメントの国際標準として広く参照。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "ソフトウェアライフサイクル要求として参照。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "医用電気機器の安全・性能要求として参照。NZ/AS 規格として採用。"
    },
    "others": [
      {
        "standard": "ISO 10993 シリーズ",
        "notes": "生体適合性評価の参照規格"
      },
      {
        "standard": "AS/NZS 規格群",
        "notes": "オーストラリアとの共通規格（Joint Standards）"
      }
    ]
  },
  "recentDevelopments": [
    {
      "date": "2026-Q2",
      "title": "Medical Products Bill 策定中",
      "description": "政府は Therapeutic Products Act 2023 を Medical Products Bill で置換する方針を2024年9月に決定。2026年後半に新規制体制への移行を計画。独立規制機関の設立を含む。"
    },
    {
      "date": "2023",
      "title": "Therapeutic Products Act 2023 成立",
      "description": "Medicines Act 1981 を置換する新法が成立。しかし新政権が方針転換し、Medical Products Bill による再置換を決定。最終発効期限は2026年9月1日。"
    },
    {
      "date": "2024",
      "title": "Trans-Tasman Early Warning System 更新",
      "description": "TGA との医療機器安全性に関する早期警告システムの運用を継続・強化。安全性シグナルの共有体制を改善。"
    }
  ],
  "lastUpdated": "2026-04-02",
  "verified": null
};
