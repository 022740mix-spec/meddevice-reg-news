// ベトナム (Vietnam)
export default {
  "code": "VNM",
  "country": "ベトナム",
  "countryEn": "Vietnam",
  "region": "ASPAC",
  "flag": "🇻🇳",
  "legalSystemOverview": {
    "type": "社会主義共和制（Socialist republic）",
    "description": "ベトナムの医療機器規制は保健省（Ministry of Health / Bộ Y tế）が管轄し、その下部機関であるIMDA（Infrastructure and Medical Device Administration / Cục Hạ tầng và Thiết bị Y tế）が登録審査の実務を担当する。IMDAは2025年1月に旧DMEC（Department of Medical Equipment and Construction）から改組された。Decree 98/2021/ND-CPが医療機器管理の基本政令であり、ASEAN AMDDに準拠した4クラス分類（A/B/C/D）を採用。Class A/Bは地方保健局への届出制、Class C/Dは IMDA による登録審査制。2024年1月以降、Class C/D機器のドシエはASEAN CSDT形式での提出が義務化されている。",
    "keyCharacteristics": [
      "保健省（MOH）/ IMDA（旧DMEC）による規制体制",
      "リスクベースの4クラス分類（Class A/B/C/D）",
      "Class A/Bは地方保健局への届出、Class C/DはIMDAへの登録",
      "ASEAN AMDD / CSDT への整合（2024年1月よりCSDT義務化）",
      "国内代理人（In-country Representative）の配置義務",
      "流通番号（Circulation Number）は無期限有効"
    ]
  },
  "authorities": [
    {
      "name": "IMDA (旧DMEC)",
      "fullName": "Infrastructure and Medical Device Administration, Ministry of Health",
      "localName": "Cục Hạ tầng và Thiết bị Y tế, Bộ Y tế",
      "role": "Class C/D機器の登録審査・輸入許可・FSC発行・市販後検査。2025年1月に旧DMEC（Vụ Trang thiết bị và Công trình y tế）から改組。",
      "url": "https://imda.moh.gov.vn",
      "isPrimary": true
    },
    {
      "name": "MOH",
      "fullName": "Ministry of Health",
      "localName": "Bộ Y tế",
      "role": "医療機器規制の最上位機関。政令・通達の制定、政策立案。",
      "url": "https://moh.gov.vn",
      "isPrimary": false
    },
    {
      "name": "地方保健局（DoH）",
      "fullName": "Provincial Department of Health",
      "localName": "Sở Y tế",
      "role": "Class A/B機器の届出（Declaration / Notification）受理を担当。",
      "url": null,
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "IMDA直接審査 / 地方保健局届出制",
    "description": "ベトナムでは独自のNotified Body制度は存在しない。Class C/D機器はIMDA（旧DMEC）が直接登録審査を実施。Class A/B機器は地方保健局（Provincial Department of Health）への届出により市場投入が可能。",
    "bodies": [
      {
        "name": "IMDA（Class C/D 直接審査）",
        "url": "https://imda.moh.gov.vn"
      }
    ]
  },
  "deviceDefinition": {
    "legalDefinition": "Decree 98/2021/ND-CPに基づく定義。疾病の診断、予防、監視、治療、緩和、障害の補償、解剖学的・生理学的過程の検査・置換・修正・支援を目的とする器具、装置、機器、材料、ソフトウェアその他の物品であって、主たる作用が薬理学的・免疫学的・代謝的手段によらないもの。",
    "scope": "体外診断用医療機器（IVD）を含む。GHTF/IMDRFの定義に整合。",
    "notes": "SaMD（Software as a Medical Device）はDecree 98/2021の医療機器定義に含まれるが、SaMD固有の分類ルールは明示的に規定されておらず、一般的な分類ルールに従って分類される。"
  },
  "primaryLaw": {
    "title": "Decree 98/2021/ND-CP (Management of Medical Devices)",
    "originalTitle": "Nghị định 98/2021/NĐ-CP về quản lý trang thiết bị y tế",
    "enacted": "2022-01-01",
    "lastAmended": "2025-01-01",
    "url": "https://english.luatvietnam.vn/decree-no-98-2021-nd-cp-dated-november-08-2021-of-the-government-on-the-management-of-medical-devices-212320-doc1.html",
    "description": "医療機器管理に関する基本政令。2021年11月8日公布、2022年1月1日施行。旧Decree 36/2016、Decree 169/2018、Decree 03/2020を置換。分類、登録手続、流通許可、市販後監視等を包括的に規定。Decree 07/2023（第1次改正）、Decree 04/2025（第2次改正）で順次改正。"
  },
  "implementingRegulations": [
    {
      "title": "Decree 07/2023/ND-CP (First Amendment to Decree 98)",
      "date": "2023-03-03",
      "url": "https://english.luatvietnam.vn/decree-no-07-2023-nd-cp-amending-and-supplementing-a-number-of-articles-of-the-governments-decree-no-98-2021-244958-doc1.html",
      "description": "Decree 98の第1次改正。既存輸入許可の延長措置等を規定。",
      "category": "改正政令"
    },
    {
      "title": "Decree 04/2025/ND-CP (Second Amendment to Decree 98)",
      "date": "2025-01-01",
      "url": "https://english.luatvietnam.vn/y-te/decree-04-2025-nd-cp-management-of-medical-equipment-385264-d1.html",
      "description": "Decree 98の第2次改正。輸入手続き・経過措置の更新。輸入許可を2025年6月30日まで延長。2025年7月1日以降はDecree 98の完全施行に移行。",
      "category": "改正政令"
    },
    {
      "title": "Circular 05/2022/TT-BYT (Medical Device Classification)",
      "date": "2022-08-01",
      "url": "https://asiaactual.com/vietnam/medical-device-classification/",
      "description": "医療機器分類に関する通達。旧Circular 39/2016を置換。GHTF/ASEAN AMDDに基づくClass A/B/C/D分類の詳細基準を規定。",
      "category": "分類"
    },
    {
      "title": "Circular 44/2025 (Administrative Procedures Update)",
      "date": "2025-11-22",
      "url": "https://andamanmed.com/vietnam-moh-releases-new-circular-on-medical-device-management-and-regulatory-documentation-requirements/",
      "description": "医療機器管理に関する行政手続き・文書様式の全面更新。IMDAへの権限委譲の明確化。8つの附属書による標準テンプレート導入。",
      "category": "行政手続"
    }
  ],
  "relatedLaws": [
    {
      "title": "Decree 13/2023/ND-CP (Personal Data Protection)",
      "category": "データ保護",
      "enacted": "2023-07-01",
      "url": "https://kpmg.com/vn/en/home/insights/2023/04/legal-alert-on-decree-13.html",
      "relevance": "ベトナム初の包括的個人データ保護法令。健康情報は「敏感個人データ」に分類。データ侵害発生から72時間以内にサイバーセキュリティ部門へ通知義務。PDPIA（個人データ処理影響評価）の策定・保管が必要。"
    },
    {
      "title": "Law 116/2025/QH15 (Cybersecurity Law 2025)",
      "category": "サイバーセキュリティ",
      "enacted": "2026-07-01",
      "url": "https://www.allenandgledhill.com/perspectives/articles/32082/vnkh-vietnam-s-new-cybersecurity-law-to-come-into-effect-1-july-2026",
      "relevance": "2025年12月10日国会通過、2026年7月1日施行予定の新サイバーセキュリティ法。旧Law 24/2018/QH14（サイバーセキュリティ法）およびLaw 86/2015/QH13（ネットワーク情報セキュリティ法）の両方を統合・置換。データローカライゼーション要件の更新を含み、医療機器（SaMD、IoT機器）への影響が注目される。"
    },
    {
      "title": "Decree 96/2023/ND-CP (Implementation of Law on Medical Examination and Treatment)",
      "category": "医療診療法実施",
      "enacted": "2023",
      "url": "https://asiaactual.com/vietnam/post-market-surveillance/",
      "relevance": "医療診療法（Law on Medical Examination and Treatment）の実施細則。一部の条項でDecree 98/2021を改正・補充する形で医療機器の使用・管理に関連する規定を含む。"
    }
  ],
  "classification": {
    "system": "4クラス分類（Class A/B/C/D）",
    "basis": "意図する使用目的、人体へのリスクの程度、侵襲性、人体接触期間に基づく分類。GHTF/ASEAN AMDDの分類ルールに準拠。Circular 05/2022/TT-BYTに規定。",
    "classes": [
      {
        "name": "Class A",
        "nameJa": "クラスA",
        "riskLevel": "低",
        "description": "低リスクの医療機器。人体への潜在的リスクが最小。地方保健局への届出（Declaration）により市場投入可能。",
        "examples": [
          "包帯",
          "検査用手袋",
          "聴診器",
          "車椅子",
          "舌圧子"
        ],
        "approvalPath": "届出（Declaration）— 地方保健局（DoH）"
      },
      {
        "name": "Class B",
        "nameJa": "クラスB",
        "riskLevel": "中低",
        "description": "中低リスクの医療機器。限定的な侵襲性または一時的な人体接触。地方保健局への届出が必要。",
        "examples": [
          "皮下注射針",
          "輸液セット",
          "吸引器",
          "超音波診断装置",
          "血圧計"
        ],
        "approvalPath": "届出（Declaration）— 地方保健局（DoH）"
      },
      {
        "name": "Class C",
        "nameJa": "クラスC",
        "riskLevel": "中高",
        "description": "中高リスクの医療機器。生命維持・支持機能を持つ、長時間の侵襲性、故障時のリスクが顕著。IMDAへの登録申請が必要。CSDT形式のドシエ提出が義務。",
        "examples": [
          "人工呼吸器",
          "骨固定システム",
          "透析装置",
          "一部の画像診断装置",
          "コンタクトレンズ"
        ],
        "approvalPath": "登録（Marketing Authorization）— IMDA"
      },
      {
        "name": "Class D",
        "nameJa": "クラスD",
        "riskLevel": "高",
        "description": "最高リスクの医療機器。体内留置（インプラント）、中枢神経系・心臓に直接作用。IMDAによる最も厳格な審査。",
        "examples": [
          "心臓弁",
          "心臓ペースメーカー",
          "人工関節",
          "脊椎インプラント",
          "植込み型除細動器"
        ],
        "approvalPath": "登録（Marketing Authorization）— IMDA"
      }
    ],
    "rules": [
      "GHTF/ASEAN AMDDの分類ルールに準拠",
      "Circular 05/2022/TT-BYTに詳細基準を規定",
      "IVDは別途分類（Class A〜D）",
      "SaMDは一般的な分類ルールに従い分類（固有ルールは未整備）",
      "不明確な場合はIMDA/MOHに照会可能"
    ],
    "totalProductCodes": "GMDNを参照"
  },
  "conformityAssessment": {
    "overview": "ベトナムで医療機器を販売するには、クラスに応じた手続が必要。Class A/Bは地方保健局（DoH）への届出（Declaration）、Class C/DはIMDA（旧DMEC）への登録（Marketing Authorization）が必要。外国製造者は国内代理人（In-country Representative）の配置が必須。ISO 13485証明書の提出が全クラスで要求される。Class C/Dは2024年1月以降ASEAN CSDT形式でのドシエ提出が義務化。流通番号（Circulation Number）は無期限有効。",
    "routes": [
      {
        "name": "Declaration (Class A/B)",
        "nameJa": "届出（Declaration / Notification）",
        "applicableClasses": [
          "Class A",
          "Class B"
        ],
        "description": "低〜中低リスク機器は地方保健局（Provincial Department of Health）への届出により市場投入が可能。適用基準への適合宣言（Declaration of Applied Standards）と基本的な技術情報の提出。",
        "subtypes": [
          "Class A Declaration（簡易届出）",
          "Class B Declaration（技術文書付き届出）"
        ],
        "avgReviewTime": "Class A/B: 7〜10営業日",
        "fee": "Class A: VND 1,000,000（約43 USD）/ Class B: VND 3,000,000（約130 USD）※2025年7月〜2026年12月は50%割引",
        "url": "https://cisema.com/en/vietnam-medical-device-registration-guide/"
      },
      {
        "name": "Marketing Authorization (Class C/D)",
        "nameJa": "登録（Marketing Authorization）",
        "applicableClasses": [
          "Class C",
          "Class D"
        ],
        "description": "中高〜高リスク機器はIMDAによる登録審査。ASEAN CSDT形式の包括的ドシエ（技術文書・臨床データ・QMS適合証拠）の提出が必要。",
        "subtypes": [
          "Standard Registration（通常登録）",
          "Expedited Registration（緊急時等の優先審査）"
        ],
        "avgReviewTime": "法定30営業日（実務上60日〜6ヶ月）",
        "fee": "VND 6,000,000（約260 USD）※2025年7月〜2026年12月は50%割引",
        "url": "https://asiaactual.com/vietnam/medical-device-registration/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "IMDA Medical Device Registration Portal（旧DMEC Portal）",
    "url": "https://andamanmed.com/vietnam-notice-of-domain-change-for-the-online-public-service-system-for-medical-device-management/",
    "description": "IMDAのオンライン登録ポータルを通じて、Class A/Bの届出、Class C/Dの登録申請、輸入許可申請を電子的に実施。2025年のDMEC→IMDA改組に伴い旧URL（dmec.moh.gov.vn）からimda.moh.gov.vnへ移行済み。全ての医療機器登録はオンラインポータル経由での提出が義務。",
    "mandatory": true
  },
  "udi": {
    "required": false,
    "system": "未導入",
    "description": "ベトナムは現時点で独自のUDI制度を導入していない。ASEAN域内でのUDI整合化の議論に参加しているが、具体的な実施スケジュールは公表されていない。製品追跡は流通番号（Circulation Number）とロット番号・製造番号で管理。",
    "url": "https://asiaactual.com/vietnam/medical-device-registration/",
    "timeline": "導入時期未定（ASEAN域内整合を踏まえて検討中）"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "Adverse Event Reporting (Decree 98/2021, Decree 96/2023)",
      "mandatory": true,
      "url": "https://asiaactual.com/vietnam/post-market-surveillance/",
      "description": "医療機器の製造者・輸入業者・医療施設は有害事象をMOH/IMDAに報告する義務がある。死亡・重篤な健康悪化のリスクがある事象は即時報告し、流通を即時停止。死亡・重篤な健康悪化・重大な公衆衛生上の脅威は30日以内に詳細報告。原因調査・是正措置の実施・最終報告書の提出が義務。"
    },
    "recalls": {
      "authority": "MOH / IMDA",
      "description": "MOH/IMDAがFSCA（Field Safety Corrective Action）およびリコールを監督。不良バッチの是正計画策定・リコール実施・完了報告の提出が義務。",
      "url": "https://andamanmed.com/regulatory-services/post-market-surveillance-medical-devices/vietnam/"
    },
    "surveillance": "製造者・輸入業者はPMS（市販後監視）プログラムの構築・運用が義務。性能データの継続収集、ユーザーフィードバック調査、不適合品の是正予防措置。流通ドシエ・ロット別証明書・有害事象ログ・苦情記録・是正措置記録・廃棄記録の保管が必要。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "IMDA（旧DMEC）",
    "name": "Certificate of Free Sale (CFS)",
    "description": "ベトナムで登録済みの医療機器について、IMDAが自由販売証明書を発行。輸出先国の規制申請に使用。",
    "processingTime": "約15〜30営業日",
    "url": "https://medgate.vn/en/certificate-of-free-sale-cfs-for-class-c-and-d-medical-devices/"
  },
  "reimbursement": {
    "system": "SHI (Social Health Insurance) — Bảo Hiểm Xã Hội Việt Nam (BHXH)",
    "authority": "BHXH (Vietnam Social Security)",
    "description": "ベトナムは社会健康保険（SHI）による国民皆保険を推進しており、人口の約90%をカバー。医療消耗品・人工代替品・インプラント・専用機器のうち安全性・有効性・需要の基準を満たすものが償還対象（Circular 04/2017/TT-BYT）。国産医療機器・消耗品が優先的に償還対象となる傾向。全ての医療機器が対象ではなく、リスト外は民間保険または患者自己負担。",
    "codingSystems": [
      "ICD-10",
      "MOH Medical Device Reimbursement List",
      "BHXH Procedure Codes"
    ],
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8050760/"
  },
  "marketingRules": {
    "authority": "MOH / IMDA",
    "description": "医療機器の広告はDecree 98/2021および関連通達に基づき規制。未登録・未届出機器の広告・販売は禁止。",
    "keyRules": [
      "未登録・未届出機器の広告・販売禁止",
      "虚偽・誇大な効能表示の禁止",
      "ベトナム語でのラベル表示義務",
      "輸入品のベトナム語ラベル貼付義務",
      "オンライン販売に関する規制"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "ベトナムはMDSAPに正式参加していない。ただしISO 13485認証は製造施設の品質管理体制の証拠として全クラスの登録要件に含まれる。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "全クラスの登録ドシエにおいてISO 13485証明書の提出が必須。製造施設の品質管理体制の前提条件。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "リスクマネジメントの実施が要求され、ISO 14971に基づくハザード特定・リスク軽減の記載がドシエに必要。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "医療機器ソフトウェアのライフサイクル規格として参照。SaMDの登録申請時に適用。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "電気医療機器の安全規格として受入・認知。安全性試験の基準として適用。"
    },
    "others": [
      {
        "name": "ISO 10993シリーズ（生物学的安全性評価）",
        "notes": "生体接触医療機器の生物学的安全性評価に必須。"
      },
      {
        "name": "ASEAN AMDD CSDT（Common Submission Dossier Template）",
        "notes": "ASEAN域内統一申請書類テンプレート。2024年1月よりClass C/Dで義務化。"
      }
    ]
  },
  "recentDevelopments": [
    {
      "date": "2026-07",
      "title": "新サイバーセキュリティ法の施行予定",
      "description": "現行Law 24/2018を置換する新サイバーセキュリティ法が2026年7月1日に施行予定。医療機器（特にSaMD、IoT機器）への影響が注目される。データローカライゼーション要件の更新。"
    },
    {
      "date": "2025-11",
      "title": "Circular 44 — 行政手続き・文書様式の全面更新",
      "description": "医療機器管理に関する行政手続きと文書様式を全面更新。IMDAへの権限委譲を明確化し、8つの附属書による標準テンプレートを導入。"
    },
    {
      "date": "2025-07",
      "title": "輸入許可経過措置の終了・手数料割引開始",
      "description": "2018〜2021年に発行された輸入許可の経過措置が2025年7月1日で終了し、Decree 98の完全施行へ移行。同時にMoH Notification No. 645に基づく全クラス対象の登録手数料50%割引を2026年12月31日まで実施。"
    },
    {
      "date": "2025-01",
      "title": "DMEC → IMDA 改組",
      "description": "医療機器規制機関がDMEC（Department of Medical Equipment and Construction）からIMDA（Infrastructure and Medical Device Administration）へ改名・再編。医療インフラ管理も統合。"
    }
  ],
  "lastUpdated": "2026-04-02",
  "verified": null
};
