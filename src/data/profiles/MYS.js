// マレーシア (Malaysia)
export default {
  "code": "MYS",
  "country": "マレーシア",
  "countryEn": "Malaysia",
  "region": "ASPAC",
  "flag": "🇲🇾",
  "legalSystemOverview": {
    "type": "立憲君主制・議院内閣制（Federal constitutional monarchy）",
    "description": "マレーシアの医療機器規制はMDA（Medical Device Authority / Pihak Berkuasa Peranti Perubatan Malaysia）が一元的に管轄する。Medical Device Act 2012（Act 737）を根拠法とし、ASEAN AMDDに準拠した4クラス分類（A/B/C/D）を採用。MDA認定のCAB（Conformity Assessment Body）による第三者審査制度が特徴。MeDC@St（Medical Device Centralized System）によるオンライン申請を実施。ASEAN域内で最も規制整備が進んだ国の一つ。",
    "keyCharacteristics": [
      "MDA による一元的規制体制",
      "リスクベースの4クラス分類（Class A/B/C/D）",
      "CAB（Conformity Assessment Body）による第三者審査",
      "MeDC@St オンライン登録システム",
      "ASEAN AMDD / CSDT への完全整合",
      "Verification Route（参照規制当局の承認活用による簡略審査）"
    ]
  },
  "authorities": [
    {
      "name": "MDA",
      "fullName": "Medical Device Authority",
      "localName": "Pihak Berkuasa Peranti Perubatan Malaysia",
      "role": "医療機器の登録審査・施設ライセンス・適合性評価・市販後監視・業界振興。保健省傘下の法定機関。",
      "url": "https://portal.mda.gov.my/",
      "isPrimary": true
    },
    {
      "name": "MOH",
      "fullName": "Ministry of Health Malaysia",
      "localName": "Kementerian Kesihatan Malaysia",
      "role": "医療機器規制の上位政策機関。MDAの監督省庁。",
      "url": "https://www.moh.gov.my/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "CAB（Conformity Assessment Body）制度",
    "description": "マレーシアではMDA認定のCAB（Conformity Assessment Body）がClass B/C/D機器の技術文書レビューとQMS監査を実施する第三者審査制度を採用。Class AはCAB審査不要。シンガポールHSA等の参照規制当局の承認を持つ機器はVerification Route（簡略審査、30営業日）が利用可能。",
    "bodies": [
      {
        "name": "MDA認定 CAB（複数の民間認証機関）",
        "url": "https://www.mda.gov.my/index.php/documents/guidance-documents/1800-conformity-assessment-for-medical-device/file"
      }
    ]
  },
  "deviceDefinition": {
    "legalDefinition": "Medical Device Act 2012（Act 737）に基づく定義。疾病の診断、予防、監視、治療、緩和、障害の補償、解剖学的・生理学的過程の検査・置換・修正・支援を目的とする器具、装置、機器、材料、ソフトウェアその他の物品であって、主たる作用が薬理学的・免疫学的・代謝的手段によらないもの。",
    "scope": "体外診断用医療機器（IVD）、Combination Device（複合機器）を含む。GHTF/IMDRFの定義に整合。",
    "notes": "AI駆動型医療技術向けのRegulatory Sandboxが2025年に開始。SaMD規制の整備が進行中。"
  },
  "primaryLaw": {
    "title": "Medical Device Act 2012 (Act 737)",
    "originalTitle": "Akta Peranti Perubatan 2012",
    "enacted": "2012",
    "lastAmended": "2012",
    "url": "https://portal.mda.gov.my/index.php/industry/medical-device-registration/medical-device-registration-information",
    "description": "マレーシアにおける医療機器規制の根拠法。2012年2月9日官報掲載、2013年6月30日施行。医療機器の登録・ライセンス・適合性評価・市販後監視を包括的に規定。Act本体の大きな改正は行われていないが、下位規則（Medical Device Regulations）が継続的に更新されている。"
  },
  "implementingRegulations": [
    {
      "title": "Medical Device Regulations 2012",
      "date": "2012",
      "url": "https://www.mda.gov.my/index.php/doc-list/legislation",
      "description": "Act 737の下位規則。分類、登録手続、手数料等を規定。",
      "category": "基本規則"
    },
    {
      "title": "Medical Device (Amendment) Regulations 2025 [P.U.(A) 330]",
      "date": "2025",
      "url": "https://www.mda.gov.my/index.php/doc-list/legislation",
      "description": "Class A機器の申請料をRM100からRM500に引き上げ、登録料RM750を新設。2026年1月1日施行。",
      "category": "手数料改定"
    },
    {
      "title": "MDA/GD/0062 — Harmonised Classification of Medical Devices in ASEAN (3rd Edition)",
      "date": "2025-06",
      "url": "https://portal.mda.gov.my/index.php/documents/ukk/3665-20250612-harmonised-classification-of-medical-devices-in-asean/file",
      "description": "ASEAN医療機器委員会（AMDC）によるハーモナイズド分類リスト第3版。年次更新。",
      "category": "分類ガイダンス"
    }
  ],
  "relatedLaws": [
    {
      "title": "Personal Data Protection Act 2010 (Act 709)",
      "category": "データ保護",
      "enacted": "2010",
      "url": "https://www.malaysia.gov.my/portal/content/654",
      "relevance": "個人データ保護法。2024年改正でDPO（データ保護責任者）任命義務が2025年6月施行。医療データは「Sensitive Personal Data」に該当。"
    },
    {
      "title": "Radiation Protection Act 2023",
      "category": "放射線",
      "enacted": "2023",
      "url": "https://www.moh.gov.my/index.php/database_stores/store_view/18",
      "relevance": "放射線機器に適用。医療用放射線機器の安全管理要件を規定。"
    },
    {
      "title": "Private Healthcare Facilities and Services Act 1998",
      "category": "医療施設",
      "enacted": "1998",
      "url": "https://www.moh.gov.my/index.php/database_stores/store_view/18",
      "relevance": "民間医療施設の規制。医療機器の使用環境に関する間接的な規制。"
    }
  ],
  "classification": {
    "system": "4クラス分類（Class A/B/C/D）",
    "basis": "意図する使用目的、人体へのリスクの程度に基づく分類。ASEAN AMDD分類ルールに完全準拠。Combination Device（複合機器）カテゴリも存在。MDA/GD/0062（ハーモナイズドリスト）で年次更新。",
    "classes": [
      {
        "name": "Class A",
        "nameJa": "クラスA",
        "riskLevel": "低",
        "description": "低リスクの医療機器。CAB審査不要。MDAへの直接登録申請のみ。2026年1月より手数料改定（申請料RM500 + 登録料RM750）。",
        "examples": [
          "外科用リトラクター",
          "舌圧子",
          "車椅子",
          "聴診器",
          "手術用手袋"
        ],
        "approvalPath": "MDA直接登録（CAB審査不要）"
      },
      {
        "name": "Class B",
        "nameJa": "クラスB",
        "riskLevel": "中低",
        "description": "中低リスクの医療機器。MDA認定CABによる技術文書レビューとQMS監査が必要。",
        "examples": [
          "皮下注射針",
          "吸引器",
          "血圧計",
          "超音波診断装置",
          "歯科用材料"
        ],
        "approvalPath": "CAB審査 → MDA登録"
      },
      {
        "name": "Class C",
        "nameJa": "クラスC",
        "riskLevel": "中高",
        "description": "中高リスクの医療機器。CABによるより詳細な審査。臨床データの評価を含む。",
        "examples": [
          "人工透析器",
          "整形外科インプラント",
          "人工呼吸器",
          "輸液ポンプ",
          "コンタクトレンズ"
        ],
        "approvalPath": "CAB審査 → MDA登録"
      },
      {
        "name": "Class D",
        "nameJa": "クラスD",
        "riskLevel": "高",
        "description": "最高リスクの医療機器。生命維持に直接関与、または重大な公衆衛生リスク。最も厳格なCAB審査。",
        "examples": [
          "HIV血液スクリーニング検査",
          "心臓弁",
          "薬剤溶出ステント",
          "心臓ペースメーカー",
          "脳深部刺激装置"
        ],
        "approvalPath": "CAB審査（最も厳格）→ MDA登録"
      }
    ],
    "rules": [
      "ASEAN AMDD分類ルールに完全準拠",
      "MDA/GD/0062（ハーモナイズドリスト第3版、2025年6月）で分類基準を公開",
      "Combination Device は別途カテゴリ（Class B/C/Dのいずれかに分類）",
      "IVDはリスクに応じてClass A〜Dに分類",
      "SaMDは使用目的に応じた一般分類ルールを適用"
    ],
    "totalProductCodes": "ASEAN AMDCハーモナイズドリストに準拠"
  },
  "conformityAssessment": {
    "overview": "マレーシアで医療機器を販売するには、MDAへの登録が必要。Class AはCAB審査不要でMDAに直接申請。Class B/C/DはMDA認定CABによる技術文書レビューとQMS監査（ISO 13485ベース）を経てMDAに登録申請。参照規制当局（シンガポールHSA等）の承認を持つ機器はVerification Route（30営業日に短縮）が利用可能。全ての申請はMeDC@Stオンラインポータルで実施。",
    "routes": [
      {
        "name": "Class A Direct Registration",
        "nameJa": "クラスA 直接登録（CAB審査不要）",
        "applicableClasses": [
          "Class A"
        ],
        "description": "低リスクのClass A機器はCAB審査なしでMDAに直接登録申請。MeDC@Stで製品情報・ラベル情報を提出。",
        "subtypes": [],
        "avgReviewTime": "6〜8週間",
        "avgReviewTimeSource": "https://cisema.com/en/medical-device-registration-malaysia-guide/",
        "fee": "申請料 RM 500 + 登録料 RM 750（2026年1月〜）",
        "feeSource": "https://www.pureglobal.com/news/malaysia-mda-2026-update-on-class-a-medical-device-fees",
        "url": "https://portal.mda.gov.my/index.php/industry/medical-device-registration/medical-device-registration-information"
      },
      {
        "name": "CAB Assessment + MDA Registration (Class B/C/D)",
        "nameJa": "CAB審査 + MDA登録（クラスB/C/D）",
        "applicableClasses": [
          "Class B",
          "Class C",
          "Class D"
        ],
        "description": "MDA認定CABが技術文書レビュー・QMS監査を実施し、適合証明を発行。その後MeDC@StでMDAに登録申請。CAB審査自体に約3〜4ヶ月、MDAレビューに別途3〜6ヶ月。",
        "subtypes": [
          "Standard Route（通常審査）",
          "Verification Route（参照規制当局の承認活用、30営業日に短縮）"
        ],
        "avgReviewTime": "合計6〜10ヶ月（CAB 3〜4ヶ月 + MDA 3〜6ヶ月）",
        "avgReviewTimeSource": "https://cisema.com/en/medical-device-registration-malaysia-guide/",
        "fee": "MDA申請料 B=RM250/C=RM500/D=RM750 + MDA登録料 B=RM1,000/C=RM2,000/D=RM3,000/Combination=RM5,000 + CAB費用（民間CABにより異なる）",
        "feeSource": "https://portal.mda.gov.my/index.php/industry/medical-device-registration/medical-device-registration-information",
        "url": "https://www.mda.gov.my/index.php/documents/guidance-documents/1800-conformity-assessment-for-medical-device/file"
      },
      {
        "name": "Innovative Medical Device Review Pathway",
        "nameJa": "革新的医療機器審査経路",
        "applicableClasses": [
          "Class B",
          "Class C",
          "Class D"
        ],
        "description": "2026年3月9日開始。革新的医療機器（AI/ML搭載機器等）に対する規制助言サービスを含む特別審査経路。MDAが開発段階から規制助言を提供し、承認プロセスを効率化。",
        "subtypes": [],
        "avgReviewTime": "要確認（新設制度のため実績なし）",
        "fee": "要確認（新設制度のため実績なし）",
        "url": "https://www.pureglobal.com/news/malaysia-mda-launches-first-regulatory-sandbox-for-medical-devices-2025"
      }
    ]
  },
  "electronicSubmission": {
    "system": "MeDC@St (Medical Device Centralized System)",
    "url": "https://portal.mda.gov.my/index.php/medc-st",
    "description": "MDAのワンストップオンラインポータル「MeDC@St」を通じて、施設ライセンス申請・医療機器登録申請を電子的に実施。8パートの申請フォームで機器分類・使用目的・適合性文書・海外市場認可状況等を提出。複数ユーザーアクセス対応。UDI対応のMeDC@St 3.0+を準備中。",
    "mandatory": true
  },
  "udi": {
    "required": false,
    "system": "パイロット調査段階",
    "description": "MDAはUDI制度の導入準備としてパイロット調査を実施。Phase 1（Class D施設対象、2024年6月〜8月15日に延長）、Phase 2（Class B施設対象、2024年9月1日〜10月30日）で施設のUDI情報提供準備状況を評価。調査結果を基にMeDC@St 3.0+のUDI対応機能を開発中。2026年2月のラベリングガイダンス第7版でUDI参照を電子ラベリングオプションに組み込み。本格義務化時期は未確定。",
    "url": "https://www.mda.gov.my/index.php/announcement/1432-announcement-pilot-survey-for-unique-device-identification-udi-in-malaysia",
    "timeline": "パイロット調査完了（2024年）。本格導入時期は調査結果に基づき決定予定"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "Mandatory Problem Reporting",
      "mandatory": true,
      "url": "https://portal.mda.gov.my/index.php/industry/vigilance-unit/mandatory-problem-reporting",
      "description": "マレーシアで登録された医療機器に関連するインシデントは、国内外を問わず報告義務がある。3区分制：死亡等の緊急事象は48時間以内、重大インシデント（Serious Incident）は10日以内、非重大インシデントは30日以内にMDA Vigilance Unitに報告（暦日ベース）。製造業者は根本原因調査とCAPAの実施が必要。"
    },
    "recalls": {
      "authority": "MDA",
      "description": "MDAがField Safety Corrective Action（FSCA）およびリコールを監督。MDA/GD/0014ガイダンスに基づき、製造業者・輸入業者が自主回収とMDAへの報告を実施。",
      "url": "https://portal.mda.gov.my/index.php/documents/guidance-documents/1815-mandatory-problem-reporting-1/file"
    },
    "surveillance": "登録保有者は市販後監視プログラムの運用が義務。MDAによる定期的な施設査察・コンプライアンス確認。不適合製品に対する登録停止・取消等の行政措置。ASEAN加盟国間のPMS情報交換ガイダンスに基づく域内連携。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "MDA",
    "name": "Certificate of Free Sale (CFS)",
    "description": "マレーシアで登録済みの医療機器について、MDAが自由販売証明書を発行。輸出先国の規制申請に使用。MeDC@Stを通じてオンライン申請。",
    "processingTime": "約15〜30営業日",
    "url": "https://portal.mda.gov.my/index.php/medc-st"
  },
  "reimbursement": {
    "system": "税財源ユニバーサルヘルスケア / MySalam / PeKa B40",
    "authority": "Ministry of Health Malaysia (MOH)",
    "description": "マレーシアは二層型医療制度を採用。公的医療は税財源で運営され、公立病院での医療費は極めて低額（外来RM1、入院RM5程度）。医療機器のコストは政府調達予算で吸収。MySalam（低所得層B40向け健康保護スキーム）およびPeKa B40（健康補助金）が補完。民間医療は民間保険またはout-of-pocketで賄う。医療機器の個別償還制度は存在せず、公立病院での使用は政府調達に依存。MaHTAS（Malaysia Health Technology Assessment Section）がHTA評価を実施。",
    "codingSystems": [
      "Malaysia DRG (MY-DRG)",
      "ICD-10",
      "MOH Procurement List"
    ],
    "url": "https://www.mysalam.com.my/b40/info/?url=main_EN"
  },
  "marketingRules": {
    "authority": "MDA",
    "description": "医療機器の広告はMedical Device Act 2012および関連規則に基づき規制。未登録機器の広告・販売は禁止。",
    "keyRules": [
      "未登録医療機器の広告・販売禁止",
      "虚偽・誇大な効能表示の禁止",
      "MDAによる広告監視と是正措置",
      "マレー語/英語でのラベル表示義務",
      "オンライン販売に関する規制"
    ]
  },
  "mdsap": {
    "status": "Affiliate Member（2025年9月〜）",
    "description": "マレーシア（MDA）は2025年9月16日よりMDSAPのAffiliate Memberとして参加。MDSAP監査報告書をQMS適合性の根拠として受入。CABによるQMS監査においてISO 13485認証・MDSAP報告書・FDA QSR・MHLW Ordinance 169等を受入可能。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "MDA登録の主要要件。CABによるQMS監査はISO 13485に基づく。MS ISO 13485としてマレーシア国内規格化。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "リスクマネジメントの技術文書要件として必須。リスクアセスメントサマリーの提出が登録申請で求められる。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "ソフトウェアライフサイクル規格。SaMD登録時に参照。Regulatory Sandboxの対象にも関連。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "電気医療機器の安全規格として受入。MS IEC 60601シリーズとしてマレーシア規格化。"
    },
    "others": [
      {
        "name": "ISO 10993シリーズ（生物学的安全性評価）",
        "notes": "生体接触医療機器の生物学的安全性評価に必須。"
      },
      {
        "name": "ASEAN AMDD CSDT（Common Submission Dossier Template）",
        "notes": "ASEAN域内統一申請書類テンプレート。MDA登録文書として完全統合。"
      }
    ]
  },
  "recentDevelopments": [
    {
      "date": "2026-03",
      "title": "MDA-HSA Regulatory Reliance 適用開始",
      "description": "マレーシアMDAが2026年3月1日よりシンガポールHSA承認をverification processに利用可能と告知。HSA登録機器はVerification Routeで30営業日に短縮。ASEAN域内の規制連携強化のモデルケース。"
    },
    {
      "date": "2026-02",
      "title": "ラベリングガイダンス第7版発行",
      "description": "電子ラベリング（e-labelling）を導入。UDI参照を電子ラベリングオプションの一部として組み込み。デジタル化推進。"
    },
    {
      "date": "2026-01",
      "title": "Class A 新手数料施行・調達規制強化",
      "description": "Medical Device (Amendment) Regulations 2025に基づきClass A手数料改定（申請料RM500 + 登録料RM750）。Circular Letter No. 1/2026で医療施設における医療機器調達の規制強化。"
    },
    {
      "date": "2026-03",
      "title": "Innovative Medical Device Review Pathway 開始",
      "description": "2026年3月9日より革新的医療機器（AI/ML搭載機器等）向けの特別審査経路を開始。MDAが開発段階から規制助言を提供し、承認プロセスを効率化するイノベーション支援策。"
    }
  ],
  "lastUpdated": "2026-04-02",
  "verified": null
};
