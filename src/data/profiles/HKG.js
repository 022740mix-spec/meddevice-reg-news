// 香港 (Hong Kong SAR)
export default {
  "code": "HKG",
  "country": "香港",
  "countryEn": "Hong Kong SAR",
  "region": "ASPAC",
  "flag": "🇭🇰",
  "legalSystemOverview": {
    "type": "独自制度（自主的登録制度 → 法定制度への移行中）",
    "description": "香港の医療機器規制は長年、自主的な医療機器行政管理制度（MDACS: Medical Device Administrative Control System）に基づいていたが、法定規制への移行を段階的に進めている。2025年3月に Medical Devices Bill が立法会（LegCo）に提出され、法定登録制度の導入を目指している。衛生署（DOH / Department of Health）の医療機器管理課（MDCO / Medical Device Control Office）が規制を担当。",
    "keyCharacteristics": [
      "MDACS（自主的登録制度）から法定制度への移行中",
      "Medical Devices Bill (2025) で法定登録制度導入を目指す",
      "MDCO/DOH が規制を担当",
      "参照規制当局（Reference Regulators）からの承認に依拠",
      "ラベリングは中国語（繁体字）・英語",
      "香港は独自の規制体制を維持（中国NMPAとは別制度）"
    ]
  },
  "authorities": [
    {
      "name": "MDCO/DOH",
      "fullName": "Medical Device Control Office, Department of Health",
      "localName": "衞生署醫療儀器管制辦公室",
      "role": "医療機器の登録・市場監視・ビジランス・リコール管理",
      "url": "https://www.mdco.gov.hk/",
      "isPrimary": true
    },
    {
      "name": "HA",
      "fullName": "Hospital Authority",
      "localName": "醫院管理局",
      "role": "公立病院での医療機器調達・使用管理",
      "url": "https://www.ha.org.hk/",
      "isPrimary": false
    },
    {
      "name": "FHB",
      "fullName": "Food and Health Bureau (now Health Bureau)",
      "localName": "醫務衞生局",
      "role": "医療政策・法制度策定",
      "url": "https://www.healthbureau.gov.hk/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "参照規制当局制度（Reference Regulators）",
    "description": "香港はNotified Body制度を持たず、参照規制当局（USFDA, EU/NB, Health Canada, TGA, PMDA 等）の承認・認証に依拠する。MDACS Phase II リスティングでは参照規制当局からの承認証拠が必要。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "MDACS における定義: 人体の疾病の診断・予防・監視・治療・緩和、負傷の診断・監視・治療・緩和・補償、解剖学的・生理学的過程の調査・置換・変更・支援を目的とする器具・装置・実装体・機械・用具・インプラント・試薬・材料（薬物的・免疫学的・代謝的手段を主たる作用機序としないもの）。",
    "scope": "IVD を含む。SaMD も対象。",
    "notes": "Medical Devices Bill (2025) で法的定義が正式に法定化される予定。GHTF/IMDRF の定義に整合。"
  },
  "primaryLaw": {
    "title": "Medical Device Administrative Control System (MDACS)",
    "originalTitle": null,
    "enacted": "2004（Phase I）/ 2015（Phase II リスティング開始）",
    "lastAmended": "2025（Medical Devices Bill 提出）",
    "url": "https://www.mdco.gov.hk/english/mdacs/mdacs.html",
    "description": "現行は自主的な行政管理制度。Medical Devices Bill (2025) により法定制度への移行を目指す。"
  },
  "implementingRegulations": [
    {
      "title": "Medical Devices Bill (2025)",
      "date": "2025-03（LegCo提出）",
      "url": "https://www.mdco.gov.hk/",
      "description": "法定の医療機器登録制度を導入するための法案。立法会で審議中。",
      "category": "法案（審議中）"
    },
    {
      "title": "MDACS Phase I — Adverse Event Reporting",
      "date": "2004",
      "url": "https://www.mdco.gov.hk/english/mdacs/mdacs_aer.html",
      "description": "自主的な有害事象報告制度。",
      "category": "自主的制度"
    },
    {
      "title": "MDACS Phase II — Medical Device Listing",
      "date": "2015",
      "url": "https://www.mdco.gov.hk/english/mdacs/mdacs_mdl.html",
      "description": "自主的な医療機器リスティング制度。Class II〜IV が対象。",
      "category": "自主的制度"
    }
  ],
  "relatedLaws": [
    {
      "title": "Personal Data (Privacy) Ordinance (Cap. 486)",
      "category": "データ保護",
      "enacted": "1996",
      "url": "https://www.pcpd.org.hk/",
      "relevance": "健康データに適用。"
    },
    {
      "title": "Consumer Goods Safety Ordinance (Cap. 456)",
      "category": "消費者安全",
      "enacted": "1994",
      "url": "https://www.elegislation.gov.hk/",
      "relevance": "医療機器が消費者製品に該当する場合の一般的安全要件。"
    }
  ],
  "classification": {
    "system": "4クラス制（Class I / II / III / IV）— GHTF/IMDRF 整合",
    "basis": "GHTF（現IMDRF）の推奨分類体系に準拠。リスクベースの4クラス。",
    "classes": [
      {
        "name": "Class I",
        "nameJa": "クラスI",
        "riskLevel": "低",
        "description": "低リスク。",
        "examples": [
          "聴診器",
          "弾性包帯",
          "車椅子"
        ],
        "approvalPath": "リスティング不要（現行MDACS）"
      },
      {
        "name": "Class II",
        "nameJa": "クラスII",
        "riskLevel": "中低",
        "description": "中低リスク。",
        "examples": [
          "補聴器",
          "超音波装置",
          "コンタクトレンズ"
        ],
        "approvalPath": "MDACS リスティング"
      },
      {
        "name": "Class III",
        "nameJa": "クラスIII",
        "riskLevel": "中高",
        "description": "中高リスク。",
        "examples": [
          "人工呼吸器",
          "血液透析装置",
          "輸液ポンプ"
        ],
        "approvalPath": "MDACS リスティング"
      },
      {
        "name": "Class IV",
        "nameJa": "クラスIV",
        "riskLevel": "高",
        "description": "最高リスク。",
        "examples": [
          "人工心臓弁",
          "冠動脈ステント",
          "乳房インプラント"
        ],
        "approvalPath": "MDACS リスティング"
      }
    ],
    "rules": [
      "GHTF/IMDRF 分類規則に準拠"
    ],
    "totalProductCodes": "GMDN コード使用"
  },
  "conformityAssessment": {
    "overview": "現行のMDACSは自主的なリスティング制度。Class II〜IV の機器は参照規制当局からの承認/認証を証拠として提出しリスティングを取得。Medical Devices Bill 成立後は法定登録に移行予定。",
    "routes": [
      {
        "name": "MDACS Phase II Listing",
        "nameJa": "MDACS Phase II リスティング",
        "applicableClasses": [
          "Class II / III / IV"
        ],
        "description": "参照規制当局（USFDA, EU/NB, Health Canada, TGA, PMDA）からの承認・認証に基づきリスティング。製造元のISO 13485認証、参照当局の承認証拠、ラベリング情報等を提出。",
        "subtypes": [
          {
            "name": "参照規制当局ルート",
            "description": "FDA 510(k)/PMA、CE マーキング、TGA registration 等の承認を基にリスティング。"
          }
        ],
        "avgReviewTime": "60〜120日",
        "fee": "リスティング料: HKD 1,520〜4,560（クラスによる）",
        "url": "https://www.mdco.gov.hk/english/mdacs/mdacs_mdl.html"
      }
    ]
  },
  "electronicSubmission": {
    "system": "MDCO Online Listing System",
    "url": "https://www.mdco.gov.hk/",
    "description": "MDCO のオンラインシステムでリスティング申請。",
    "mandatory": true
  },
  "udi": {
    "required": false,
    "system": "IMDRF UDI に整合予定",
    "description": "現行MDACSではUDI義務なし。Medical Devices Bill ではUDI要件導入予定。IMDRF UDI Guidance に整合。",
    "url": "https://www.mdco.gov.hk/",
    "timeline": "Medical Devices Bill 成立後に段階的導入予定"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "MDACS Phase I — Adverse Event Reporting",
      "mandatory": false,
      "url": "https://www.mdco.gov.hk/english/mdacs/mdacs_aer.html",
      "description": "現行は自主的な有害事象報告制度（MDACS Phase I）。登録保有者・医療機関に報告を推奨。Medical Devices Bill で法定義務化予定。"
    },
    "recalls": {
      "authority": "MDCO/DOH",
      "description": "MDCOがリコール情報を収集・公開。Safety Alerts を発出。",
      "url": "https://www.mdco.gov.hk/english/safety/safety.html"
    },
    "surveillance": "MDCO が市販後安全情報をモニタリング。Safety Alerts、Field Safety Corrective Actions 情報を公開。Medical Devices Bill で法定PMS制度を導入予定。"
  },
  "certificateOfFreeSale": {
    "available": false,
    "issuingAuthority": "N/A",
    "name": "N/A",
    "description": "香港は現時点でCFSの発行制度を正式に運用していない。Medical Devices Bill 後に検討される可能性。",
    "processingTime": "N/A",
    "url": null
  },
  "reimbursement": {
    "system": "Hospital Authority（公立病院）+ 民間保険",
    "authority": "HA / FHB",
    "description": "香港の公的医療はHospital Authority（HA）が運営する公立病院・クリニックが中心。HA は一般税財源で運営され、医療機器は HA の集中調達（Central Tender）を通じて購入。民間病院・クリニックは独自に調達。民間医療保険の普及率も高い。薬物・機器の個別償還リストではなく、HA の診療サービスに包括。",
    "codingSystems": [
      "HA 調達カテゴリーコード"
    ],
    "url": "https://www.ha.org.hk/"
  },
  "marketingRules": {
    "authority": "MDCO/DOH",
    "description": "Undesirable Medical Advertisements Ordinance (Cap. 231) が医療関連広告を規制。一般消費者向け医療機器広告に制限あり。",
    "keyRules": [
      "中国語（繁体字）・英語ラベリング",
      "リスティング済み機器の販売を推奨",
      "Undesirable Medical Advertisements Ordinance による広告規制",
      "Medical Devices Bill 成立後は法定表示要件導入予定"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "香港はMDSAPプログラムに参加していない。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "ISO 13485 認証はリスティングの要件。製造業者のQMS適合証拠として必須。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "リスクマネジメントの国際規格として参照。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "ソフトウェア医療機器に対して参照。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "医用電気機器の安全規格として参照。IEC 60601 テストレポートの提出を求める場合あり。"
    },
    "others": []
  },
  "recentDevelopments": [
    {
      "date": "2025-03",
      "title": "Medical Devices Bill 立法会提出",
      "description": "法定の医療機器登録制度を導入するための法案を立法会（LegCo）に提出。法定登録・ビジランス・罰則等を規定。成立すれば香港の医療機器規制の大転換点。"
    },
    {
      "date": "2024",
      "title": "MDACS リスティング対象拡大",
      "description": "MDACS Phase II のリスティング対象機器カテゴリーの拡大を継続。"
    },
    {
      "date": "2023",
      "title": "IMDRF 参加",
      "description": "香港は IMDRF の Associate Member として参加し、国際規制整合化に貢献。"
    }
  ],
  "lastUpdated": "2026-04-02",
  "verified": null
};
