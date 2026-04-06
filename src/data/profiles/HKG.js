// 香港 (Hong Kong SAR)
export default {
  "code": "HKG",
  "country": "香港",
  "countryEn": "Hong Kong SAR",
  "region": "ASPAC",
  "flag": "🇭🇰",
  "legalSystemOverview": {
    "type": "独自制度（自主的登録制度 → 法定制度への移行中）",
    "description": "香港の医療機器規制は長年、自主的な医療機器行政管理制度（MDACS: Medical Device Administrative Control System）に基づいていたが、法定規制への移行を段階的に進めている。2025年7月に衛生署が Centre for Medical Products Regulation（CMPR）の2026年末設立を発表し、法定登録制度の導入に向けた法案を立法会（LegCo）に提出予定。衛生署（DOH / Department of Health）の医療機器科（MDD / Medical Device Division）が規制を担当。",
    "keyCharacteristics": [
      "MDACS（自主的登録制度）から法定制度への移行中",
      "CMPR 設立（2026年末予定）と法定登録制度導入を目指す",
      "MDD/DOH が規制を担当（旧称 MDCO、2019年10月改称）",
      "参照規制当局（Reference Regulators）からの承認に依拠",
      "ラベリングは中国語（繁体字）・英語",
      "香港は独自の規制体制を維持（中国NMPAとは別制度）"
    ]
  },
  "authorities": [
    {
      "name": "MDD/DOH",
      "fullName": "Medical Device Division, Department of Health",
      "localName": "衞生署醫療儀器科",
      "role": "医療機器の登録・市場監視・ビジランス・リコール管理",
      "url": "https://www.mdd.gov.hk/",
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
      "name": "HHB",
      "fullName": "Health Bureau",
      "localName": "醫務衞生局",
      "role": "医療政策・法制度策定",
      "url": "https://www.healthbureau.gov.hk/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "参照規制当局制度（Reference Regulators）",
    "description": "香港はNotified Body制度を持たず、参照規制当局（USFDA, EU/NB, Health Canada, TGA, PMDA 等）の承認・認証に依拠する。MDACS リスティングでは参照規制当局からの承認証拠が必要。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "MDACS における定義: 人体の疾病の診断・予防・監視・治療・緩和、負傷の診断・監視・治療・緩和・補償、解剖学的・生理学的過程の調査・置換・変更・支援を目的とする器具・装置・実装体・機械・用具・インプラント・試薬・材料（薬物的・免疫学的・代謝的手段を主たる作用機序としないもの）。",
    "scope": "IVD を含む。SaMD も対象。",
    "notes": "CMPR設立と法案成立により法的定義が正式に法定化される予定。GHTF/IMDRF の定義に整合。"
  },
  "primaryLaw": {
    "title": "Medical Device Administrative Control System (MDACS)",
    "originalTitle": null,
    "enacted": "2004（Phase I）/ 2015（Phase II リスティング開始）",
    "lastAmended": "2024（MDIS導入）",
    "url": "https://www.mdd.gov.hk/en/mdacs/index.html",
    "description": "現行は自主的な行政管理制度。CMPR設立（2026年末予定）に伴い法定制度への移行を目指す。"
  },
  "implementingRegulations": [
    {
      "title": "CMPR 設立・法定登録制度導入（予定）",
      "date": "2026（法案提出予定）",
      "url": "https://www.mdd.gov.hk/en/home/index.html",
      "description": "Centre for Medical Products Regulation（CMPR）の2026年末設立を目指し、法定登録制度の導入法案を立法会に提出予定。",
      "category": "法案（準備中）"
    },
    {
      "title": "MDACS — Adverse Event Reporting & Medical Device Listing",
      "date": "2004 / 2015",
      "url": "https://www.mdd.gov.hk/en/mdacs/index.html",
      "description": "自主的な有害事象報告制度（Phase I, 2004年）および医療機器リスティング制度（Phase II, 2015年）。Class II〜IV GMD / Class B〜D IVD が対象。",
      "category": "自主的制度"
    },
    {
      "title": "TR-007 MDACS Technical Reference",
      "date": "2026",
      "url": "https://www.mdd.gov.hk/filemanager/common/mdacs/TR007E.pdf",
      "description": "MDACS の技術参照文書。分類・リスティング要件・適合性評価等を規定。",
      "category": "技術参照文書"
    }
  ],
  "relatedLaws": [
    {
      "title": "Personal Data (Privacy) Ordinance (Cap. 486)",
      "category": "データ保護",
      "enacted": "1996",
      "url": "https://www.elegislation.gov.hk/hk/cap486",
      "relevance": "健康データに適用。"
    },
    {
      "title": "Consumer Goods Safety Ordinance (Cap. 456)",
      "category": "消費者安全",
      "enacted": "1994",
      "url": "https://www.elegislation.gov.hk/hk/cap456",
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
        "avgReviewTimeSource": "要確認（業界推定値。MDD公式には明示されていない）",
        "fee": "リスティング料: HKD 1,520〜4,560（クラスによる）",
        "feeSource": "要確認（MDD公式料金表で要確認）",
        "url": "https://www.mdd.gov.hk/en/mdacs/index.html"
      }
    ]
  },
  "electronicSubmission": {
    "system": "Medical Device Information System (MDIS)",
    "url": "https://www.mdd.gov.hk/en/mdacs/mdis/index.html",
    "description": "2024年4月導入のMDIS（Medical Device Information System）でオンラインリスティング申請。一元的な電子サービスを提供。",
    "mandatory": true
  },
  "udi": {
    "required": false,
    "system": "IMDRF UDI に整合予定",
    "description": "現行MDACSではUDI義務なし。法定制度移行後にUDI要件導入予定。IMDRF UDI Guidance に整合。",
    "url": "https://www.mdd.gov.hk/",
    "timeline": "法定制度移行後に段階的導入予定"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "MDACS Phase I — Adverse Event Reporting",
      "mandatory": false,
      "url": "https://www.mdd.gov.hk/en/mdacs/index.html",
      "description": "現行は自主的な有害事象報告制度（MDACS Phase I）。登録保有者・医療機関に報告を推奨。法定制度移行後に義務化予定。"
    },
    "recalls": {
      "authority": "MDD/DOH",
      "description": "MDD がリコール情報を収集・公開。Safety Alerts を発出。",
      "url": "https://www.mdd.gov.hk/en/home/index.html"
    },
    "surveillance": "MDD が市販後安全情報をモニタリング。Safety Alerts、Field Safety Corrective Actions 情報を公開。法定制度移行後に法定PMS制度を導入予定。"
  },
  "certificateOfFreeSale": {
    "available": false,
    "issuingAuthority": "N/A",
    "name": "N/A",
    "description": "香港は現時点でCFSの発行制度を正式に運用していない。法定制度移行後に検討される可能性。",
    "processingTime": "N/A",
    "url": null
  },
  "reimbursement": {
    "system": "Hospital Authority（公立病院）+ 民間保険",
    "authority": "HA / Health Bureau",
    "description": "香港の公的医療はHospital Authority（HA）が運営する公立病院・クリニックが中心。HA は一般税財源で運営され、医療機器は HA の集中調達（Central Tender）を通じて購入。民間病院・クリニックは独自に調達。民間医療保険の普及率も高い。薬物・機器の個別償還リストではなく、HA の診療サービスに包括。",
    "codingSystems": [
      "HA 調達カテゴリーコード"
    ],
    "url": "https://www.ha.org.hk/"
  },
  "marketingRules": {
    "authority": "MDD/DOH",
    "description": "Undesirable Medical Advertisements Ordinance (Cap. 231) が医療関連広告を規制。一般消費者向け医療機器広告に制限あり。",
    "keyRules": [
      "中国語（繁体字）・英語ラベリング",
      "リスティング済み機器の販売を推奨",
      "Undesirable Medical Advertisements Ordinance による広告規制",
      "法定制度移行後は法定表示要件導入予定"
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
      "date": "2025-07",
      "title": "CMPR 設立を発表（2026年末予定）",
      "description": "衛生署が Centre for Medical Products Regulation（CMPR）の2026年末設立を発表。医薬品・漢方薬・医療機器を統合的に規制する法定機関。法案は今後1年以内に立法会に提出予定。"
    },
    {
      "date": "2024-04",
      "title": "MDIS（Medical Device Information System）導入",
      "description": "MDD が新しい Medical Device Information System（MDIS）を導入。MDACS のリスティング申請をオンラインで一元管理する電子サービス。"
    },
    {
      "date": "2023",
      "title": "IMDRF 参加",
      "description": "香港は IMDRF の Associate Member として参加し、国際規制整合化に貢献。"
    }
  ],
  "lastUpdated": "2026-04-06",
  "verified": "2026-04-06"
};
