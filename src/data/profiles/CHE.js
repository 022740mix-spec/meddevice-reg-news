// スイス (Switzerland)
export default {
  "code": "CHE",
  "country": "スイス",
  "countryEn": "Switzerland",
  "region": "Europe",
  "flag": "🇨🇭",
  "legalSystemOverview": {
    "type": "連邦制（Federal system）",
    "description": "スイスの医療機器規制は連邦法 Heilmittelgesetz（HMG, SR 812.21）を根幹とし、Swissmedic（スイス医薬品庁）が主管当局として市販後監視・ビジランスを担う。2021年5月26日に新医療機器条例（MedDO, SR 812.213）が施行され、EU MDRに大幅に整合した規制枠組みへ移行。スイスはEU加盟国ではないが、MRA（相互承認協定）の医療機器章が凍結中のため、独自の規制制度を運用。EU認定Notified BodyのCE証明書を一方的に承認するが、スイスの承認はEU域内では効力を持たない。",
    "keyCharacteristics": [
      "Swissmedic による市販後監視・ビジランス（市販前の型式審査はなし）",
      "EU MDR Annex VIIIに準用したリスクベース4クラス分類（Class I/IIa/IIb/III）",
      "EU認定Notified BodyのCE証明書を一方的承認",
      "CH-REP（スイス国内代理人）制度の義務化",
      "swissdamedデータベースによる機器登録（2026年7月義務化）・UDI管理",
      "Bilaterals III交渉によるMRA医療機器章の復活が進行中"
    ]
  },
  "authorities": [
    {
      "name": "Swissmedic",
      "fullName": "Swiss Agency for Therapeutic Products",
      "localName": "Schweizerisches Heilmittelinstitut",
      "role": "医療機器の市販後監視・ビジランス・FSCA管理・施設査察。主管当局。",
      "url": "https://www.swissmedic.ch/swissmedic/en/home/medical-devices.html",
      "isPrimary": true
    },
    {
      "name": "BAG/FOPH",
      "fullName": "Federal Office of Public Health",
      "localName": "Bundesamt für Gesundheit",
      "role": "医療機器の法規制策定・MiGeL（医療機器・補助機器リスト）による償還管理",
      "url": "https://www.bag.admin.ch/bag/en/home.html",
      "isPrimary": false
    },
    {
      "name": "SECO",
      "fullName": "State Secretariat for Economic Affairs",
      "localName": "Staatssekretariat für Wirtschaft",
      "role": "適合性評価・Designated Bodyの認定（現在該当なし）・MRA管理",
      "url": "https://www.seco.admin.ch/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "Designated Body制度（現在スイス国内に認定機関なし）",
    "description": "MedDOに基づきスイス国内にDesignated Body（適合性評価機関）を設置可能だが、現時点で認定された機関はない。実運用ではEU認定Notified Bodyが発行したCE証明書をスイスが一方的に承認している。Bilaterals IIIの署名（2026年3月）によりMRA医療機器章の復活が見込まれる。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "MedDO（SR 812.213）Art. 3に定義。EU MDR Article 2(1)に整合。疾病の診断・治療・予防・監視・軽減等を目的とする機器・装置・器具・材料・ソフトウェア等で、主たる意図する作用が薬理学的・免疫学的・代謝的手段によらないもの。",
    "scope": "IVD（体外診断用医療機器）はIvDO（SR 812.219）で別途規定。SaMD・AI/ML機器も適用対象。",
    "notes": "EU MDRの定義と実質的に同一。美容目的機器等もMedDO Annex XVIで対象拡大。"
  },
  "primaryLaw": {
    "title": "Heilmittelgesetz (HMG) — Federal Act on Medicinal Products and Medical Devices",
    "originalTitle": "Bundesgesetz über Arzneimittel und Medizinprodukte (Heilmittelgesetz, HMG)",
    "enacted": "2000-12-15",
    "lastAmended": "2020（MedDO/IvDO導入に伴う改正）",
    "url": "https://www.fedlex.admin.ch/eli/cc/2001/422/en",
    "description": "医薬品・医療機器の両方を規律する連邦法。SR 812.21。医療機器に関しては第4章（Medizinprodukte）が規定。実施法令としてMedDO（SR 812.213）およびIvDO（SR 812.219）が制定されている。"
  },
  "implementingRegulations": [
    {
      "title": "Medical Devices Ordinance (MedDO, SR 812.213)",
      "date": "2021-05-26",
      "url": "https://www.fedlex.admin.ch/eli/cc/2020/552/en",
      "description": "EU MDRに整合した医療機器の基本実施法令。分類・適合性評価・CH-REP・ラベリング・UDI・ビジランス等を規定。2025年1月改正で移行期限の調整等。",
      "category": "医療機器"
    },
    {
      "title": "Ordinance on In Vitro Diagnostic Medical Devices (IvDO, SR 812.219)",
      "date": "2021-05-26",
      "url": "https://www.fedlex.admin.ch/eli/cc/2022/294/en",
      "description": "EU IVDRに整合した体外診断用医療機器の実施法令。",
      "category": "体外診断"
    }
  ],
  "relatedLaws": [
    {
      "title": "Federal Act on Data Protection (nFADP / DSG)",
      "category": "データ保護",
      "enacted": "2020 (revised)",
      "url": "https://www.fedlex.admin.ch/eli/cc/2022/491/en",
      "relevance": "2023年9月1日施行の改正データ保護法。コネクテッドデバイス・SaMDが取り扱う個人医療情報のプライバシー要件に適用。"
    },
    {
      "title": "Federal Act on Technical Barriers to Trade (THG, SR 946.51)",
      "category": "貿易・適合性評価",
      "enacted": "1995",
      "url": "https://www.fedlex.admin.ch/eli/cc/1996/1725_1725_1725/en",
      "relevance": "適合性評価の相互承認・国際整合性の法的基盤。MRA（相互承認協定）の国内法根拠。"
    }
  ],
  "classification": {
    "system": "4クラス制（Class I/IIa/IIb/III）— EU MDR Annex VIII準用",
    "basis": "リスクベース。EU MDR Annex VIIIの分類ルールを準用。意図する用途・侵襲性・使用期間・エネルギー源等に基づく。IVDはIvDOで別途分類（EU IVDR整合）。",
    "classes": [
      {
        "name": "Class I",
        "nameJa": "クラスI",
        "riskLevel": "低",
        "description": "低リスク機器。適合宣言のみ（計測・滅菌・再利用外科用はNB証明書必要）。",
        "examples": [
          "弾性包帯",
          "歩行補助器具",
          "聴診器",
          "車椅子",
          "舌圧子"
        ],
        "approvalPath": "自己適合宣言（一部はNB証明書必要）"
      },
      {
        "name": "Class IIa",
        "nameJa": "クラスIIa",
        "riskLevel": "中低",
        "description": "中低リスク機器。Notified Body（EU認定）のCE証明書が必要。",
        "examples": [
          "補聴器",
          "超音波診断装置",
          "歯科用材料",
          "輸液セット",
          "血圧計"
        ],
        "approvalPath": "EU認定Notified BodyのCE証明書"
      },
      {
        "name": "Class IIb",
        "nameJa": "クラスIIb",
        "riskLevel": "中高",
        "description": "中高リスク機器。Notified Body（EU認定）のCE証明書が必要。",
        "examples": [
          "人工呼吸器",
          "透析装置",
          "外科用レーザー",
          "輸液ポンプ",
          "コンタクトレンズ"
        ],
        "approvalPath": "EU認定Notified BodyのCE証明書"
      },
      {
        "name": "Class III",
        "nameJa": "クラスIII",
        "riskLevel": "高",
        "description": "最高リスク機器。Notified Body（EU認定）のCE証明書が必要。最も厳格な適合性評価。",
        "examples": [
          "人工心臓弁",
          "冠動脈ステント",
          "埋込み型除細動器",
          "人工関節（セメント固定）",
          "薬剤溶出ステント"
        ],
        "approvalPath": "EU認定Notified BodyのCE証明書（臨床データ含む）"
      }
    ],
    "rules": [
      "EU MDR Annex VIII分類ルールを準用（MedDO Annex IX）",
      "IVDはIvDOで別途分類（EU IVDRのClass A/B/C/Dに整合）",
      "SaMDはRule 11（EU MDR）に基づき分類",
      "美容目的機器等もMedDO Annex XVIで適用対象に追加"
    ],
    "totalProductCodes": "GMDN（Global Medical Device Nomenclature）を使用"
  },
  "conformityAssessment": {
    "overview": "スイスではSwissmedic による市販前の型式審査は行われない。製造業者はEU MDRに準拠した適合性評価を実施し、Class I（計測・滅菌・再利用外科用以外）は自己適合宣言、Class IIa以上はEU認定Notified Bodyが発行したCE証明書で適合性を証明する。スイスはEU認定NBのCE証明書を一方的に承認するが、この承認は一方通行であり、スイスでの市販許可はEU域内では効力を持たない。CH-REP（スイス国内代理人）の指定が必要。",
    "routes": [
      {
        "name": "Self-Declaration of Conformity (Class I)",
        "nameJa": "自己適合宣言（クラスI）",
        "applicableClasses": [
          "Class I"
        ],
        "description": "低リスクClass I機器（計測・滅菌・再利用外科用を除く）は製造業者の自己適合宣言のみで上市可能。swissdamedへの機器登録が必要。",
        "subtypes": [],
        "avgReviewTime": null,
        "avgReviewTimeSource": null,
        "fee": "swissdamed登録手数料（詳細はSwissmedic手数料規則参照）",
        "feeSource": "https://www.swissmedic.ch/swissmedic/en/home/medical-devices/swissdamed.html",
        "url": "https://www.swissmedic.ch/swissmedic/en/home/medical-devices/market-access.html"
      },
      {
        "name": "CE Certificate Route (Class IIa/IIb/III)",
        "nameJa": "CE証明書ルート（クラスIIa/IIb/III）",
        "applicableClasses": [
          "Class IIa",
          "Class IIb",
          "Class III"
        ],
        "description": "EU認定Notified Bodyが発行したCE証明書をSwissmedic/スイスが一方的に承認。別途Swissmedicへの市販前申請は不要。CH-REP指定・swissdamed登録・CHRNラベリングが必要。",
        "subtypes": [],
        "avgReviewTime": null,
        "avgReviewTimeSource": null,
        "fee": "swissdamed登録手数料",
        "feeSource": "https://www.swissmedic.ch/swissmedic/en/home/medical-devices/swissdamed.html",
        "url": "https://www.swissmedic.ch/swissmedic/en/home/medical-devices/market-access.html"
      }
    ]
  },
  "electronicSubmission": {
    "system": "swissdamed（Swiss Database for Medical Devices）",
    "url": "https://www.swissmedic.ch/swissmedic/en/home/medical-devices/swissdamed.html",
    "description": "swissdamedはスイスの医療機器登録データベース。2026年7月1日より機器登録が義務化（経過措置: 2026年12月31日まで）。UDI/Devicesモジュールは2025年8月より任意利用開始済み。Economic operators（製造業者・CH-REP・輸入業者）の登録およびビジランス報告にも使用。",
    "mandatory": true
  },
  "udi": {
    "required": true,
    "system": "EU UDI準拠 — swissdamed UDI/Devicesモジュール",
    "description": "MedDO Art. 31–36に基づくUDI要件。EU MDRのUDI制度に準拠。UDI-DI（機器識別子）とUDI-PI（製造識別子）で構成。発行機関はGS1/HIBCC/ICCBBA。swissdamed UDI/Devicesモジュール（2025年8月より任意利用開始済み）にUDI-DIデータを登録。",
    "url": "https://www.swissmedic.ch/swissmedic/en/home/medical-devices/swissdamed.html",
    "timeline": "swissdamed UDI/Devicesモジュール: 2025年8月稼働済み（任意）。2026年7月1日機器登録義務化（経過措置: 2026年12月31日まで）。Class III: 移行期限2025年5月。Class IIb: 2025年5月。Class IIa: 2027年5月。Class I: 2027年5月。"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "Swissmedic Materiovigilance",
      "mandatory": true,
      "url": "https://www.swissmedic.ch/swissmedic/en/home/medical-devices/vigilance-of-medical-devices.html",
      "description": "製造業者・CH-REP・医療機関はSwissmedicに有害事象（重篤事象）を報告する義務がある。FSCA（Field Safety Corrective Action）もSwissmedicに通知が必要。報告はswissdamed経由で電子提出。"
    },
    "recalls": {
      "authority": "Swissmedic",
      "description": "SwissmedicがFSCA・リコールを監督。FSCA情報はSwissmedic公式サイトで公開。",
      "url": "https://www.swissmedic.ch/swissmedic/en/home/medical-devices/fsca.html"
    },
    "surveillance": "EU MDRに準じたPMS要件。Class IIa以上: PSUR（定期安全性更新報告書）。Class IIb/III: PMCF（市販後臨床フォローアップ）が特に重要。PMS計画・PMS報告書の維持が義務。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "Swissmedic",
    "name": "Certificate of Free Sale (CFS)",
    "description": "Swissmedicがスイスで合法的に流通している医療機器のCFSを発行。輸出目的で利用。",
    "processingTime": "30日（必要書類が全て揃った日から起算）。手数料: CHF 200/証明書",
    "url": "https://www.swissmedic.ch/swissmedic/en/home/medical-devices/md-export-certificates-fsc/exportzertifikate_fsc.html"
  },
  "reimbursement": {
    "system": "MiGeL（Mittel- und Gegenständeliste）— 医療機器・補助機器リスト",
    "authority": "BAG/FOPH（Federal Office of Public Health）",
    "description": "社会医療保険（KVG/LAMal）における医療機器の償還はMiGeL（SR 832.112.31）に基づく。MiGeLに収載された機器カテゴリが保険償還対象。最大償還額が設定され、超過分は自己負担。入院時に使用される高額医療機器はDRG（SwissDRG）に包括。",
    "codingSystems": [
      "MiGeL Position番号",
      "SwissDRG（入院医療）"
    ],
    "url": "https://www.bag.admin.ch/bag/de/home/versicherungen/krankenversicherung/krankenversicherung-leistungen-tarife/Mittel-und-Gegenstaendeliste.html"
  },
  "marketingRules": {
    "authority": "Swissmedic / BAG",
    "description": "HMG Art. 21に基づき、医療機器の広告は法令に適合する必要がある。虚偽・誤解を招く広告は禁止。処方箋対象機器の一般向け広告は制限。",
    "keyRules": [
      "適合宣言・CE証明書のない機器の広告は禁止",
      "虚偽・誤解を招く表示の禁止",
      "処方箋対象機器の一般消費者向け広告は制限あり"
    ]
  },
  "mdsap": {
    "status": "非参加（Non-participant）",
    "description": "スイスはMDSAPに参加していない。MDSAP監査報告書はスイスの規制要件を代替しない。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "Class IIa以上の適合性評価にISO 13485認証が実質的に必要（Notified Body審査の前提）。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "リスクマネジメント。技術文書のリスク評価に適用。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "ソフトウェアライフサイクル。SaMD・ソフトウェア組込み機器に適用。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "医用電気機器の安全・性能要求。"
    },
    "others": [
      {
        "name": "ISO 10993シリーズ（生物学的安全性評価）",
        "notes": "生体接触医療機器の生物学的安全性評価に必須。"
      },
      {
        "name": "EN規格（EU Harmonised Standards）",
        "notes": "EU MDR整合規格をスイスでも適合性推定の根拠として利用。"
      }
    ]
  },
  "recentDevelopments": [
    {
      "date": "2026-03",
      "title": "Bilaterals III パッケージ署名",
      "description": "2026年3月、スイスとEUがBilaterals IIIパッケージに署名。MRA（相互承認協定）の医療機器章の復活が含まれ、今後の批准プロセスでスイス・EU間の医療機器の相互承認が再開される見込み。"
    },
    {
      "date": "2026-07",
      "title": "swissdamed 機器登録義務化",
      "description": "2026年7月1日よりswissdamedでの医療機器登録が義務化。経過措置として2026年12月31日までに既存機器の登録が必要。重篤事象・FSCAの報告対象機器は経過措置なく即時登録が必要。"
    },
    {
      "date": "2025-08",
      "title": "swissdamed UDI/Devicesモジュール稼働開始",
      "description": "swissdamedのUDI/Devicesモジュールが2025年8月に任意利用として稼働開始。機器・システム・処置パックの登録が可能に。"
    },
    {
      "date": "2025-01",
      "title": "MedDO/IvDO改正",
      "description": "2025年1月にMedDO（SR 812.213）およびIvDO（SR 812.219）の改正が施行。移行期限の調整、CH-REP要件の明確化等。"
    }
  ],
  "lastUpdated": "2026-04-06",
  "verified": "2026-04-06"
};
