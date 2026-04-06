// シンガポール (Singapore)
export default {
  "code": "SGP",
  "country": "シンガポール",
  "countryEn": "Singapore",
  "region": "ASPAC",
  "flag": "🇸🇬",
  "legalSystemOverview": {
    "type": "議院内閣制・一院制（Parliamentary republic）",
    "description": "HSA（Health Sciences Authority）が医療機器の規制・審査・市販後監視を一元的に所管する。Health Products Act 2007およびHealth Products (Medical Devices) Regulations 2010に基づき、4クラス分類（A/B/C/D）のリスクベース規制を実施。FDA・EU・Health Canada・TGA・PMDAを参照規制機関（Reference Regulators）として認め、これらの承認を活用した簡略審査経路（Abridged Route）が特徴。SHAREオンラインポータルによる効率的な電子申請システムを運用。",
    "keyCharacteristics": [
      "HSA による一元的規制体制",
      "4クラス分類（A/B/C/D）のリスクベース規制",
      "参照規制機関（Reference Regulators）制度による簡略審査",
      "SHAREオンラインポータルによる電子申請",
      "Dealer's License（クラスA）vs Product Registration（クラスB/C/D）",
      "ASEAN医療機器指令（AMDD）への整合"
    ]
  },
  "authorities": [
    {
      "name": "HSA",
      "fullName": "Health Sciences Authority",
      "localName": null,
      "role": "医療機器の規制・登録審査・市販後監視・リコール管理・広告規制。シンガポールにおける医療機器規制の中核機関。Health Products Regulation Group (HPRG) が医療機器部門を担当。",
      "url": "https://www.hsa.gov.sg/medical-devices",
      "isPrimary": true
    }
  ],
  "notifiedBodies": {
    "system": "HSA直接審査（参照規制機関制度活用）",
    "description": "シンガポールではHSAが医療機器の登録審査を直接実施する。独自のNotified Body制度は存在しないが、FDA・EU・Health Canada・TGA・PMDAの5つの参照規制機関による承認を活用した簡略審査経路が設けられている。これにより審査の効率化と国際整合を実現。",
    "bodies": [
      {
        "name": "HSA Health Products Regulation Group（直接審査）",
        "url": "https://www.hsa.gov.sg/medical-devices/registration"
      }
    ]
  },
  "deviceDefinition": {
    "legalDefinition": "疾病の診断、予防、監視、治療若しくは緩和、負傷若しくは障害の診断・監視・治療・緩和・補償、解剖学的構造若しくは生理学的過程の検査・置換・修正・支援、生命の維持・受胎の制御、又は人体からの検体の体外検査による情報提供を目的とする器具、装置、機器、材料、ソフトウェアその他の物品であって、主たる作用が薬理学的・免疫学的・代謝的手段ではないもの（Health Products Act 2007に基づく）",
    "scope": "体外診断用医療機器（IVD）、ソフトウェア医療機器（SaMD）を含む。GHTF/IMDRFの定義に整合。",
    "notes": "コンビネーション製品は主たる作用により規制区分を判断。HSAガイダンスで詳細な判断基準を提示。"
  },
  "primaryLaw": {
    "title": "Health Products Act 2007",
    "originalTitle": "Health Products Act 2007 (Act 15 of 2007)",
    "enacted": "2007-09-17",
    "lastAmended": "2025-12-05",
    "url": "https://sso.agc.gov.sg/Act/HPA2007",
    "description": "シンガポールにおける健康製品（医薬品・医療機器・化粧品等）の規制根拠法。医療機器の登録義務、製造・輸入・販売の許可要件、広告規制、市販後監視、罰則等を規定。2010年に医療機器への適用が開始。"
  },
  "implementingRegulations": [
    {
      "title": "Health Products (Medical Devices) Regulations 2010",
      "date": "2010-08-01",
      "url": "https://sso.agc.gov.sg/SL/HPA2007-S436-2010",
      "description": "医療機器の分類、登録手続、Essential Principles、Dealer's License、市販後監視要件等を詳細に規定。シンガポールの医療機器規制の主要実施規則。",
      "category": "基本規則"
    },
    {
      "title": "GN-13: Guidance on Medical Device Product Registration",
      "date": "2023-11-01",
      "url": "https://www.hsa.gov.sg/medical-devices/registration/guidance-documents",
      "description": "医療機器の製品登録に関する包括的ガイダンス。登録経路（Full/Abridged/Immediate）の選択基準、申請要件、技術文書の内容を詳述。",
      "category": "登録ガイダンス"
    },
    {
      "title": "GN-15: Guidance on Medical Device Product Registration",
      "date": "2026-03-01",
      "url": "https://www.hsa.gov.sg/medical-devices/registration/guidance-documents",
      "description": "医療機器の製品登録申請書類の作成に関する包括的ガイダンス（Revision 13）。Essential Principles適合チェックリスト、技術文書構成、登録経路別要件を詳述。SHAREプラットフォームによる電子申請に対応。",
      "category": "登録ガイダンス"
    }
  ],
  "relatedLaws": [
    {
      "title": "Personal Data Protection Act 2012 (PDPA)",
      "category": "データ保護",
      "enacted": "2012-10-15",
      "url": "https://sso.agc.gov.sg/Act/PDPA2012",
      "relevance": "医療機器から収集される個人データの処理に適用。PDPC（Personal Data Protection Commission）が監督。2021年改正でデータ侵害通知義務を導入。"
    },
    {
      "title": "Cybersecurity Act 2018",
      "category": "サイバーセキュリティ",
      "enacted": "2018-02-05",
      "url": "https://sso.agc.gov.sg/Act/CA2018",
      "relevance": "医療機関の情報システムがCritical Information Infrastructure（CII）に指定される場合、接続する医療機器にもサイバーセキュリティ義務が及ぶ。CSA（Cyber Security Agency）が監督。"
    },
    {
      "title": "Medicines Act (Cap. 176)",
      "category": "医薬品",
      "enacted": "1977-01-01",
      "url": "https://sso.agc.gov.sg/Act/MA1975",
      "relevance": "コンビネーション製品（医療機器と医薬品の組合せ）の規制区分判断に関連。主たる作用が薬理学的な場合はMedicines Actの適用。"
    },
    {
      "title": "Medicines (Advertisement and Sale) Act (Cap. 177)",
      "category": "広告",
      "enacted": "1977-01-01",
      "url": "https://sso.agc.gov.sg/Act/MASA1955",
      "relevance": "医療機器の広告に関する補完的規制。虚偽の治療効果の広告禁止。Health Products Actと併せて適用。"
    }
  ],
  "classification": {
    "system": "4クラス分類（A/B/C/D）",
    "basis": "意図する使用目的、人体へのリスクの程度に基づく分類。GHTF/IMDRFの分類ルールに整合。ASEAN医療機器指令（AMDD）の分類基準にも対応。",
    "classes": [
      {
        "name": "Class A",
        "nameJa": "クラスA",
        "riskLevel": "低",
        "description": "低リスクの医療機器。製品登録は不要だが、Dealer's License（販売業ライセンス）の取得が必要。",
        "examples": [
          "聴診器",
          "舌圧子",
          "弾性包帯",
          "手術用手袋（非滅菌）",
          "歩行器"
        ],
        "approvalPath": "Dealer's License（販売業ライセンス — 製品登録不要）"
      },
      {
        "name": "Class B",
        "nameJa": "クラスB",
        "riskLevel": "中低",
        "description": "中低リスクの医療機器。HSAへの製品登録が必要。参照規制機関の承認がある場合はAbridged Routeが利用可能。",
        "examples": [
          "補聴器",
          "超音波画像診断装置",
          "歯科用充填材",
          "電子血圧計",
          "注射針"
        ],
        "approvalPath": "HSA製品登録（Full / Abridged / Immediate Route）"
      },
      {
        "name": "Class C",
        "nameJa": "クラスC",
        "riskLevel": "中高",
        "description": "中高リスクの医療機器。HSAへの製品登録が必要。より詳細な技術文書と臨床データの提出が求められる。",
        "examples": [
          "人工呼吸器",
          "血液透析器",
          "整形外科用インプラント",
          "輸液ポンプ",
          "コンタクトレンズ"
        ],
        "approvalPath": "HSA製品登録（Full / Abridged / Expedited / Immediate Route）"
      },
      {
        "name": "Class D",
        "nameJa": "クラスD",
        "riskLevel": "高",
        "description": "最高リスクの医療機器。HSAによる最も厳格な審査。包括的な臨床データの提出が通常必要。",
        "examples": [
          "心臓ペースメーカー",
          "人工心臓弁",
          "薬剤溶出型ステント",
          "乳房インプラント",
          "脳深部刺激装置"
        ],
        "approvalPath": "HSA製品登録（Full Route / Abridged Route）"
      }
    ],
    "rules": [
      "GHTF/IMDRF分類ルールに整合した分類基準",
      "HSA Risk Classification Rules（GN-13に記載）",
      "IVDは別途4リスクレベル（1〜4）に分類",
      "SaMDはその意図する使用目的に応じて分類",
      "ASEAN AMDD分類との互換性を確保"
    ],
    "totalProductCodes": "GMDN（Global Medical Device Nomenclature）を使用"
  },
  "conformityAssessment": {
    "overview": "シンガポールで医療機器を販売するには、クラスに応じた規制要件の遵守が必要。クラスAはDealer's License取得のみ、クラスB/C/DはHSAへの製品登録が必要。登録経路はFull Route（独自審査）、Abridged Route（参照規制機関の承認活用）、Expedited Route（迅速審査）、Immediate Route（即時登録）の4種。SHAREポータルで電子申請を実施。",
    "routes": [
      {
        "name": "Dealer's License",
        "nameJa": "販売業ライセンス（Dealer's License）",
        "applicableClasses": [
          "Class A"
        ],
        "description": "低リスクのクラスA機器は個別の製品登録が不要。医療機器の輸入・販売・供給を行う事業者がDealer's Licenseを取得すれば市場投入可能。ライセンスは毎年更新。",
        "subtypes": [
          "Importer's License",
          "Wholesaler's License",
          "Manufacturer's License"
        ],
        "avgReviewTime": "約10営業日",
        "fee": "SGD 1,110（新規・年次更新）",
        "feeSource": "https://www.hsa.gov.sg/medical-devices/fees",
        "url": "https://www.hsa.gov.sg/medical-devices/dealers-licence"
      },
      {
        "name": "Full Evaluation Route",
        "nameJa": "フル審査経路（Full Route）",
        "applicableClasses": [
          "Class B",
          "Class C",
          "Class D"
        ],
        "description": "参照規制機関の承認がない場合、HSAが独自に包括的な審査を実施。技術文書、臨床データ、QMS適合証拠等の完全な提出が必要。最も審査期間が長いが、先行承認がない革新的機器に適用。",
        "subtypes": [
          "新規登録申請",
          "変更申請（Major/Minor Change Notification）"
        ],
        "avgReviewTime": "クラスB: 160営業日 / クラスC: 220営業日 / クラスD: 310営業日",
        "avgReviewTimeSource": "https://www.hsa.gov.sg/medical-devices/fees",
        "fee": "申請料SGD 560 + 評価料: クラスB SGD 3,900 / クラスC SGD 6,250 / クラスD SGD 12,000",
        "feeSource": "https://www.hsa.gov.sg/medical-devices/fees",
        "url": "https://www.hsa.gov.sg/medical-devices/registration/overview"
      },
      {
        "name": "Abridged Evaluation Route",
        "nameJa": "簡略審査経路（Abridged Route）",
        "applicableClasses": [
          "Class B",
          "Class C",
          "Class D"
        ],
        "description": "1つ以上の参照規制機関（FDA、EU、Health Canada、TGA、PMDA）からの承認がある場合に利用可能。参照規制機関の審査結果を活用してHSAの審査を簡略化。最も一般的に利用される経路。",
        "subtypes": [
          "Abridged with single reference",
          "Abridged with multiple references"
        ],
        "avgReviewTime": "クラスB: 100営業日 / クラスC: 160営業日 / クラスD: 220営業日",
        "avgReviewTimeSource": "https://www.hsa.gov.sg/medical-devices/fees",
        "fee": "申請料SGD 560 + 評価料: クラスB SGD 2,010 / クラスC SGD 3,900 / クラスD SGD 6,250",
        "feeSource": "https://www.hsa.gov.sg/medical-devices/fees",
        "url": "https://www.hsa.gov.sg/medical-devices/fees"
      },
      {
        "name": "Immediate Route",
        "nameJa": "即時登録経路（Immediate Route）",
        "applicableClasses": [
          "Class B",
          "Class C"
        ],
        "description": "参照規制機関からの承認があり、かつ特定の条件（市販後安全性実績・安全性問題なし等）を満たす場合に利用可能。提出時に即時登録が完了。クラスCは独立型医療モバイルアプリケーションに限定。",
        "subtypes": [],
        "avgReviewTime": "即時（提出時に登録完了）",
        "avgReviewTimeSource": "https://www.hsa.gov.sg/medical-devices/fees",
        "fee": "申請料SGD 560 + 評価料: クラスB SGD 1,000 / クラスC SGD 3,340",
        "feeSource": "https://www.hsa.gov.sg/medical-devices/fees",
        "url": "https://www.hsa.gov.sg/medical-devices/registration/guides/class-c-immediate-registration"
      },
      {
        "name": "Expedited Route",
        "nameJa": "迅速審査経路（Expedited Route）",
        "applicableClasses": [
          "Class C",
          "Class D"
        ],
        "description": "参照規制機関1機関以上の承認かつ3年以上の市販実績がある場合（ECR-1）、または参照規制機関2機関以上の承認がある場合（ECR-2）に利用可能。Abridged Routeより短い審査期間。",
        "subtypes": [
          "ECR-1（1機関承認+3年市販実績）",
          "ECR-2（2機関以上承認）"
        ],
        "avgReviewTime": "クラスC: 120営業日 / クラスD: 180営業日",
        "avgReviewTimeSource": "https://www.hsa.gov.sg/medical-devices/fees",
        "fee": "申請料SGD 560 + 評価料: クラスC SGD 3,340 / クラスD SGD 5,930",
        "feeSource": "https://www.hsa.gov.sg/medical-devices/fees",
        "url": "https://www.hsa.gov.sg/medical-devices/registration/guides/class-c-expedited-registration"
      }
    ]
  },
  "electronicSubmission": {
    "system": "SHARE (Singapore Health Product Access and Regulatory E-System)",
    "url": "https://www.hsa.gov.sg/e-services/share",
    "description": "HSAのオンライン統合規制情報システム「SHARE」を通じて、医療機器の製品登録申請、Dealer's License申請、有害事象報告、変更通知等の全ての規制手続を電子的に実施。効率的なオンライン審査プロセスを提供。",
    "mandatory": true
  },
  "udi": {
    "required": true,
    "system": "シンガポールUDI制度（段階的導入中）",
    "description": "HSAはIMDRF UDIガイダンスに基づくUDI制度を段階的に導入中。GS1/HIBCC/ICCBBA の発行機関コードを使用。製品登録時のUDI情報提出と製品ラベルへのUDI表示を段階的に義務化。",
    "url": "https://www.hsa.gov.sg/medical-devices/udi",
    "timeline": "クラスD: 2025年実施済み / クラスC: 2026年 / クラスB: 2027年 / クラスA: 対象外（製品登録不要のため）"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "Mandatory Adverse Event Reporting",
      "mandatory": true,
      "url": "https://www.hsa.gov.sg/medical-devices/safety-reporting",
      "description": "医療機器のDealer/Registrantは、重篤な有害事象をHSAに報告する義務がある。死亡・重篤な健康被害は10営業日以内、その他のイベントは30営業日以内にSHAREを通じて報告。医療従事者からの自主報告制度も運用。"
    },
    "recalls": {
      "authority": "HSA",
      "description": "HSAがField Safety Corrective Action（FSCA）およびリコールを監督。Registrant/Dealerは自主回収とHSAへの報告義務を負う。HSAウェブサイトでリコール・安全情報を公開。",
      "url": "https://www.hsa.gov.sg/medical-devices/safety"
    },
    "surveillance": "Registrant/DealerはPost-market Surveillance計画の策定・実施が義務。HSAによる定期的な市販後安全性評価。Dealer's Licenseの更新時にコンプライアンス確認。HSAは必要に応じて市場措置（販売停止・登録取消）を実施。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "HSA",
    "name": "Certificate of Free Sale (CFS)",
    "description": "シンガポールで登録済みの医療機器について、HSAが自由販売証明書を発行。輸出先国の規制申請に使用。SHAREを通じてオンライン申請が可能。",
    "processingTime": "約10〜15営業日",
    "url": "https://www.hsa.gov.sg/medical-devices"
  },
  "reimbursement": {
    "system": "MediShield Life / MediFund / Private Insurance",
    "authority": "Ministry of Health (MOH)",
    "description": "シンガポールの医療費償還は複層的制度：(1) MediShield Life（全国民加入の基本保険）、(2) MediSave（個人医療貯蓄口座）、(3) MediFund（低所得者向け支援）、(4) 民間保険（Integrated Shield Plans等）。医療機器の償還は治療・手術パッケージに包含される形が主流。MOHがStandard Drug List/Medical Device Listを管理。Agency for Care Effectiveness (ACE) がHTA評価を実施。",
    "codingSystems": [
      "MOH Medical Device List",
      "Surgical Procedure Codes",
      "TOSP（Table of Surgical Procedures）"
    ],
    "url": "https://www.moh.gov.sg/"
  },
  "marketingRules": {
    "authority": "HSA / Health Promotion Board (HPB)",
    "description": "医療機器の広告はHealth Products Act 2007およびMedicines (Advertisement and Sale) Actに基づき規制。HSAが広告の適正性を監督。未登録機器の広告は禁止。",
    "keyRules": [
      "未登録医療機器の広告禁止",
      "虚偽・誤解を招く効能表示の禁止",
      "HSAによる広告監視と是正措置",
      "Medicines (Advertisement and Sale) Act に基づく広告制限",
      "オンライン販売・広告に関するHSAガイダンス"
    ]
  },
  "mdsap": {
    "status": "Affiliate Member",
    "description": "シンガポール（HSA）はMDSAPのAffiliate Memberとして参加。MDSAP監査報告書およびMDSAP証明書をQMS適合性の評価に活用。参照規制機関制度との相乗効果により、国際的な規制負担の軽減を実現。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "HSAの製品登録要件としてISO 13485準拠のQMS適合が求められる。登録申請時にISO 13485認証書の提出が必要。SS ISO 13485としてシンガポール規格化。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "Essential Principlesにおいてリスクマネジメントの実施が要求され、ISO 14971への適合が事実上の標準。SS ISO 14971として規格化。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "ソフトウェアを含む医療機器およびSaMDの開発にIEC 62304適合が求められる。HSAガイダンスで参照。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "医用電気機器の安全規格。SS IEC 60601シリーズとしてシンガポール規格化。安全性試験の基準として適用。"
    },
    "others": [
      {
        "name": "ISO 10993シリーズ（生物学的安全性評価）",
        "notes": "生体接触医療機器の生物学的安全性評価に必須。"
      },
      {
        "name": "IEC 62443（サイバーセキュリティ）",
        "notes": "Cybersecurity Act 2018との関連で、医療機器のサイバーセキュリティ対策に推奨。HSAガイダンスで参照。"
      },
      {
        "name": "IEC 62366（ユーザビリティ）",
        "notes": "医療機器のユーザビリティ評価に推奨。HSAの審査で考慮。"
      }
    ]
  },
  "recentDevelopments": [
    {
      "date": "2026-03",
      "title": "GN-15 Revision 13 公表・マレーシアとの相互依拠制度恒久化",
      "description": "HSAがGN-15（製品登録ガイダンス）のRevision 13を公表し登録要件を明確化。同月、シンガポール-マレーシア医療機器規制相互依拠プログラム（2025年9月パイロット開始）が恒久制度として正式確認。"
    },
    {
      "date": "2025-11",
      "title": "ASEAN AMDD相互認証の進展",
      "description": "ASEAN医療機器指令（AMDD）に基づくASEAN域内の医療機器相互認証が進展。シンガポールがリーダーとしてパイロットプログラムを推進。"
    },
    {
      "date": "2025-08",
      "title": "サイバーセキュリティ要件の強化",
      "description": "HSAがネットワーク接続型医療機器のサイバーセキュリティ要件を強化。SBOM（Software Bill of Materials）の提出推奨とCSA（Cyber Security Agency）との連携。"
    },
    {
      "date": "2025-04",
      "title": "参照規制機関リストの更新検討",
      "description": "HSAが参照規制機関（Reference Regulators）のリスト更新を検討。新たな規制機関の追加候補について業界コンサルテーションを実施。"
    }
  ],
  "lastUpdated": "2026-04-06",
  "verified": "2026-04-06"
};
