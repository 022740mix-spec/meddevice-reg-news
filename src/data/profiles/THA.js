// タイ (Thailand)
export default {
  "code": "THA",
  "country": "タイ",
  "countryEn": "Thailand",
  "region": "ASPAC",
  "flag": "🇹🇭",
  "legalSystemOverview": {
    "type": "立憲君主制（Constitutional monarchy）",
    "description": "タイの医療機器規制は Thai FDA（Food and Drug Administration, Ministry of Public Health）が一元的に管轄する。Medical Device Act B.E. 2551（2008年）を根拠法とし、2019年の大幅改正で現行のリスクベース分類制度が導入された。ASEAN医療機器指令（AMDD）への整合を積極的に推進しており、CSDT（Common Submission Dossier Template）を採用。東南アジア最大の医療機器市場の一つとして、規制の近代化と国際整合を進めている。",
    "keyCharacteristics": [
      "Thai FDA による一元的規制体制",
      "リスクベースの4クラス分類（Class 1〜4）",
      "ASEAN AMDD / CSDT への整合",
      "現地代理人（Local Agent）の配置義務",
      "製造・輸入施設のライセンス制度",
      "タイ語ラベル表示義務"
    ]
  },
  "authorities": [
    {
      "name": "Thai FDA",
      "fullName": "Food and Drug Administration, Ministry of Public Health",
      "localName": "สำนักงานคณะกรรมการอาหารและยา",
      "role": "医療機器の登録審査・製造輸入ライセンス・市販後監視・リコール管理。Medical Device Control Division が医療機器部門を担当。",
      "url": "https://medical.fda.moph.go.th/",
      "isPrimary": true
    },
    {
      "name": "NHSO",
      "fullName": "National Health Security Office",
      "localName": "สำนักงานหลักประกันสุขภาพแห่งชาติ",
      "role": "Universal Coverage Scheme（UCS）における医療機器の償還管理",
      "url": "https://www.nhso.go.th/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "Thai FDA 直接審査",
    "description": "タイではThai FDAが医療機器の審査を直接実施する。独自のNotified Body制度は存在しない。高リスク機器（Class 3・4）はThai FDAのMedical Device Control Divisionが技術審査を実施。ASEAN域内の相互認証に向けた取り組みが進行中。",
    "bodies": [
      {
        "name": "Thai FDA Medical Device Control Division（直接審査）",
        "url": "https://en.fda.moph.go.th/contact-us-fda/cu-medical-devices-control-division"
      }
    ]
  },
  "deviceDefinition": {
    "legalDefinition": "Medical Device Act B.E. 2551（2008年）に定義。疾病の診断、予防、監視、治療、緩和、障害の補償、解剖学的・生理学的過程の検査・置換・修正・支援を目的とする機器、装置、器具、材料、ソフトウェアその他の物品であって、主たる作用が薬理学的・免疫学的・代謝的手段によらないもの。",
    "scope": "体外診断用医療機器（IVD）を含む。コンビネーション製品は主たる作用により規制区分を判断。",
    "notes": "SaMD（Software as a Medical Device）の規制明確化が進行中。Thai FDAがガイダンス策定を検討。"
  },
  "primaryLaw": {
    "title": "Medical Device Act B.E. 2551 (2008)",
    "originalTitle": "พระราชบัญญัติเครื่องมือแพทย์ พ.ศ. 2551",
    "enacted": "2008",
    "lastAmended": "2019",
    "url": "https://en.fda.moph.go.th/cat2-health-products/category/health-products-medical-devices",
    "description": "タイにおける医療機器規制の根拠法。医療機器の定義、分類、製造・輸入・販売の許可要件、品質管理、広告規制、市販後監視、罰則等を規定。2019年の改正（No. 2, B.E. 2562）でリスクベース4クラス分類への移行を規定し、2021年2月に新分類制度が施行。"
  },
  "implementingRegulations": [
    {
      "title": "Ministerial Regulation on Medical Device Classification B.E. 2562 (2019)",
      "date": "2019",
      "url": "https://en.fda.moph.go.th/entrepreneurs-medical-devices/manufacture-import-commercialpurposes/",
      "description": "医療機器のリスクベース4クラス分類（Class 1〜4）を規定。ASEAN AMDDの分類基準に整合し、従来の3カテゴリ制（General/Notified/Licensed）から移行。2021年2月15日より施行。",
      "category": "分類"
    },
    {
      "title": "Notification on Application for Medical Device Registration",
      "date": "2020-01-01",
      "url": "https://en.fda.moph.go.th/cat2-health-products/category/health-products-medical-devices",
      "description": "医療機器の登録申請手続、必要書類、CSDT（Common Submission Dossier Template）に基づく技術文書要件を規定。",
      "category": "登録手続"
    },
    {
      "title": "Notification on Quality Management System Requirements",
      "date": "2019-07-01",
      "url": "https://medical.fda.moph.go.th/media.php?id=482419711569698816&name=MEDICAL+DEVICES+ACT%2C++B.E.+2551+%282008%29.pdf",
      "description": "医療機器の製造・輸入事業者に対するISO 13485準拠の品質管理システム要件を規定。",
      "category": "QMS"
    }
  ],
  "relatedLaws": [
    {
      "title": "Personal Data Protection Act B.E. 2562 (PDPA) (2019)",
      "category": "データ保護",
      "enacted": "2019-05-27",
      "url": "https://www.pdpc.or.th/en/10455/",
      "relevance": "医療機器から収集される個人データ（健康データを含む）の処理に適用。2022年6月より完全施行。健康データは機微情報として厳格な同意要件が適用。"
    },
    {
      "title": "National Health Act B.E. 2550 (2007)",
      "category": "医療",
      "enacted": "2007-03-19",
      "url": "https://en.nationalhealth.or.th/national-health-act/",
      "relevance": "国民の健康権と医療サービスへのアクセスを規定。医療機器の安全性・有効性確保の政策的根拠。"
    },
    {
      "title": "Consumer Protection Act B.E. 2522 (1979)",
      "category": "消費者保護",
      "enacted": "1979-04-30",
      "url": "https://www.ocpb.go.th/main.php?filename=law_CPA",
      "relevance": "医療機器の消費者向け広告・表示に関する補完的規制。不当表示の禁止。"
    }
  ],
  "classification": {
    "system": "4クラス分類（Class 1〜4）",
    "basis": "意図する使用目的、人体へのリスクの程度に基づく分類。ASEAN AMDD分類ルールに整合。2019年の法改正（B.E. 2562）により従来の3カテゴリ制からリスクベース4クラス分類に移行し、2021年2月15日に施行。",
    "classes": [
      {
        "name": "Class 1",
        "nameJa": "クラス1",
        "riskLevel": "低",
        "description": "低リスクの医療機器。Listing（届出）のみで市場投入可能。Thai FDAへの届出と施設ライセンスが必要。",
        "examples": [
          "手術用手袋",
          "聴診器",
          "弾性包帯",
          "舌圧子",
          "ガーゼ"
        ],
        "approvalPath": "Listing（届出 / e-Listing）"
      },
      {
        "name": "Class 2",
        "nameJa": "クラス2",
        "riskLevel": "中低",
        "description": "中低リスクの医療機器。Thai FDAへのNotification（届出）が必要。技術文書の提出が求められる。",
        "examples": [
          "補聴器",
          "電子血圧計",
          "超音波診断装置",
          "歯科用材料",
          "注射器"
        ],
        "approvalPath": "Notification（届出）"
      },
      {
        "name": "Class 3",
        "nameJa": "クラス3",
        "riskLevel": "中高",
        "description": "中高リスクの医療機器。Thai FDAへのNotification（届出）が必要。CSDTに基づく技術文書と臨床データの提出が求められ、Class 2より詳細な審査が行われる。",
        "examples": [
          "人工呼吸器",
          "血液透析器",
          "整形外科用インプラント",
          "輸液ポンプ",
          "コンタクトレンズ"
        ],
        "approvalPath": "Notification（届出）— Thai FDA技術審査"
      },
      {
        "name": "Class 4",
        "nameJa": "クラス4",
        "riskLevel": "高",
        "description": "最高リスクの医療機器。Thai FDAによるLicensing（ライセンス）審査。包括的な臨床データと安全性・有効性のエビデンスが必要。最も厳格な審査プロセス。",
        "examples": [
          "心臓ペースメーカー",
          "人工心臓弁",
          "薬剤溶出型ステント",
          "人工関節",
          "植込み型除細動器"
        ],
        "approvalPath": "Licensing（ライセンス）— Thai FDA 包括的審査"
      }
    ],
    "rules": [
      "ASEAN AMDD分類ルールに基づく分類基準",
      "Thai FDA Notification に基づく分類ガイダンス",
      "IVDは別途分類（Class 1〜4）",
      "SaMDはその意図する使用目的に応じて分類",
      "不明確な場合はThai FDAに分類照会が可能"
    ],
    "totalProductCodes": "Thai FDA独自の製品コード + GMDNを参照"
  },
  "conformityAssessment": {
    "overview": "タイで医療機器を販売するには、クラスに応じてListing・Notification・Licensingのいずれかの手続が必要。Class 1はListing（届出）、Class 2・3はNotification（届出）、Class 4はLicensing（ライセンス）。全クラスで製造・輸入施設のEstablishment License取得が前提条件。外国製造者はタイの現地代理人（Local Agent）の指定が必要。CSDTに基づく申請書類の準備が求められる。",
    "routes": [
      {
        "name": "Establishment License",
        "nameJa": "施設ライセンス（製造・輸入許可）",
        "applicableClasses": [
          "Class 1",
          "Class 2",
          "Class 3",
          "Class 4"
        ],
        "description": "全ての医療機器の製造・輸入に先立ち、事業所（製造所・輸入業者）のライセンス取得が必要。GMP/ISO 13485準拠の品質管理体制が審査される。",
        "subtypes": [
          "Manufacturing License（製造許可）",
          "Import License（輸入許可）",
          "Sales License（販売許可）"
        ],
        "avgReviewTime": "約30〜60営業日",
        "fee": "要確認（Thai FDA公式サイト参照）",
        "url": "https://medical.fda.moph.go.th/"
      },
      {
        "name": "Listing",
        "nameJa": "届出（Listing / e-Listing）",
        "applicableClasses": [
          "Class 1"
        ],
        "description": "最低リスクのClass 1機器はThai FDAへのListing（届出）により市場投入が可能。e-Submissionシステムでオンライン届出。基本的な製品情報・ラベル情報の提出。",
        "subtypes": [],
        "avgReviewTime": "Positive List該当品: 数日（自動承認、2025年1月〜）/ その他: 約15営業日",
        "fee": "要確認（Thai FDA公式サイト参照）",
        "url": "https://en.fda.moph.go.th/entrepreneurs-medical-devices/manufacture-import-commercialpurposes/"
      },
      {
        "name": "Notification",
        "nameJa": "届出（Notification）",
        "applicableClasses": [
          "Class 2",
          "Class 3"
        ],
        "description": "中リスクのClass 2・3機器はThai FDAへのNotification（届出）が必要。CSDTに基づく技術文書の提出が求められ、Class 3ではより詳細な臨床データ・安全性データの審査が行われる。",
        "subtypes": [
          "Class 2 Notification（基本的技術文書）",
          "Class 3 Notification（詳細な技術審査を伴う届出）"
        ],
        "avgReviewTime": "Class 2: 約30〜45営業日 / Class 3: 約250営業日（約8ヶ月）",
        "fee": "要確認（Thai FDA公式サイト参照）",
        "url": "https://en.fda.moph.go.th/entrepreneurs-medical-devices/manufacture-import-commercialpurposes/"
      },
      {
        "name": "Licensing",
        "nameJa": "ライセンス（Licensing）",
        "applicableClasses": [
          "Class 4"
        ],
        "description": "最高リスクのClass 4機器はThai FDAによるLicensing審査が必要。CSDTに基づく包括的な技術文書・臨床データ・QMS適合証拠の提出が必要。Expert committeeによる厳格な審査プロセス。",
        "subtypes": [
          "Standard Licensing（通常審査）",
          "Expedited Licensing（優先審査 — 革新的機器等）"
        ],
        "avgReviewTime": "約300営業日（約10ヶ月）",
        "fee": "要確認（Thai FDA公式サイト参照）",
        "url": "https://medical.fda.moph.go.th/media.php?id=482419711569698816&name=MEDICAL+DEVICES+ACT%2C++B.E.+2551+%282008%29.pdf"
      }
    ]
  },
  "electronicSubmission": {
    "system": "SKYNET e-Submission",
    "url": "https://medical.fda.moph.go.th/open-system-license/",
    "description": "Thai FDAのオンライン申請システム「SKYNET」を通じて、医療機器の届出・登録申請、施設ライセンス申請、変更届・更新等の規制手続を電子的に実施。Open IDによるアカウント作成が必要。段階的にペーパーレス化を推進中。",
    "mandatory": true
  },
  "udi": {
    "required": false,
    "system": "ドラフト規制段階（2025年3月公表）",
    "description": "Thai FDAは2025年3月にUDI要件を含む新ラベリング規制のドラフトを公表。Class 2〜4の医療機器にUDI表示を義務化する方針。EU MDR・US FDA・TGAの制度に整合。正式公布後、Royal Gazette掲載の翌日から施行予定。2020年ラベリング規則に準拠済みの機器には2年間の移行期間が設けられる見込み。",
    "url": "https://asiaactual.com/blog/thai-fda-drafts-new-labeling-requirements-for-medical-devices/",
    "timeline": "ドラフト規制公表済み（2025年3月）。正式施行日は未確定"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "Adverse Event Reporting System",
      "mandatory": true,
      "url": "https://en.fda.moph.go.th/health-products-vigilance-center/health-product-safety-reports-01",
      "description": "医療機器の製造者・輸入業者・医療施設は、重篤な有害事象をThai FDAに報告する義務がある。死亡・生命の危機に関わる事象は15日以内、その他の重篤事象は30日以内に報告。Thai FDAはFSCA（Field Safety Corrective Action）の監督も実施。"
    },
    "recalls": {
      "authority": "Thai FDA",
      "description": "Thai FDAがリコール・是正措置を監督。製造者・輸入業者は自主回収とThai FDAへの報告義務を負う。Thai FDAは必要に応じて強制リコールを命令可能。",
      "url": "https://en.fda.moph.go.th/health-products-vigilance-center/health-product-safety-reports-01"
    },
    "surveillance": "製造者・輸入業者は市販後監視計画の策定・実施が義務。Thai FDAによる定期的な施設査察とコンプライアンス確認。市場サンプリング検査の実施。不適合製品に対する販売停止・登録取消等の行政措置。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "Thai FDA",
    "name": "Certificate of Free Sale (CFS)",
    "description": "タイで登録済みの医療機器について、Thai FDAが自由販売証明書を発行。輸出先国の規制申請に使用。",
    "processingTime": "約15〜30営業日",
    "url": "https://en.fda.moph.go.th/entrepreneurs-medical-devices"
  },
  "reimbursement": {
    "system": "Universal Coverage Scheme (UCS) / Social Security Scheme (SSS) / Civil Servant Medical Benefit Scheme (CSMBS)",
    "authority": "National Health Security Office (NHSO) / Social Security Office (SSO)",
    "description": "タイの医療費償還は3つの公的保険制度で構成：(1) UCS（国民皆保険 — 人口の約75%をカバー、NHSOが管理）、(2) SSS（社会保険 — 被雇用者対象、SSOが管理）、(3) CSMBS（公務員医療給付 — 公務員・家族対象）。医療機器の償還はDRG（Diagnosis Related Groups）ベースの包括支払に含まれることが多い。高額医療機器は個別の償還リストで管理。HITAP（Health Intervention and Technology Assessment Program）がHTA評価を実施。",
    "codingSystems": [
      "Thai DRG",
      "ICD-10-TM（Thai Modification）",
      "NHSO Medical Device List"
    ],
    "url": "https://eng.nhso.go.th/view/1/Description_En/EN-US"
  },
  "marketingRules": {
    "authority": "Thai FDA",
    "description": "医療機器の広告はMedical Device Act B.E. 2551および関連告示に基づき規制。Thai FDAの事前承認なしの医療機器広告は原則禁止。虚偽・誇大な効能表示は厳格に取り締まり。",
    "keyRules": [
      "医療機器広告のThai FDA事前承認義務",
      "虚偽・誇大な効能表示の禁止",
      "未届出・未登録機器の広告禁止",
      "タイ語での表示・広告義務",
      "オンライン販売に関する規制強化"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "タイはMDSAPに正式参加していない。ただしISO 13485認証は製造施設の品質管理体制の証拠として受け入れられる。ASEAN域内でのQMS相互認証に向けた議論に参加中。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "Thai FDAの施設ライセンスおよび製品登録要件としてISO 13485準拠のQMSが求められる。TIS（Thai Industrial Standard）としても採用。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "リスクマネジメントの実施が要求され、ISO 14971への適合が推奨。登録申請時のリスク分析文書に反映。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "ソフトウェアを含む医療機器の開発にIEC 62304の適用が推奨。Thai FDAガイダンスで参照。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "医用電気機器の安全規格。TIS IEC 60601シリーズとしてタイ工業規格化。安全性試験の基準として適用。"
    },
    "others": [
      {
        "name": "ISO 10993シリーズ（生物学的安全性評価）",
        "notes": "生体接触医療機器の生物学的安全性評価に必須。"
      },
      {
        "name": "ASEAN AMDD CSDT（Common Submission Dossier Template）",
        "notes": "ASEAN域内で統一された申請書類テンプレート。タイの登録申請で採用。"
      }
    ]
  },
  "recentDevelopments": [
    {
      "date": "2026-01",
      "title": "医療機器オンライン販売規制の強化",
      "description": "Thai FDAがeコマースプラットフォームにおける医療機器販売の規制を強化。未届出・未登録機器のオンライン販売に対する取り締まり強化と、プラットフォーム事業者の責任を明確化。"
    },
    {
      "date": "2025-06",
      "title": "新ラベリング規則 B.E. 2568の施行予定",
      "description": "保健省告示「Principles, Methods, and Conditions for Displaying Labels and Medical Device Package Inserts, B.E. 2568（2025年）」が公布。2020年告示を置換し、Class 2〜4へのUDI表示義務、ラベリング完了期限の180日→30日への短縮、電子IFU規定の明確化等を規定。2026年6月20日施行予定、2028年6月20日までの移行期間あり。"
    },
    {
      "date": "2025-03",
      "title": "UDIドラフト規制の公表",
      "description": "Thai FDAがClass 2〜4医療機器に対するUDI（固有機器識別）要件を含む新ラベリング規制のドラフトを公表。EU MDR・US FDA・豪州TGAのUDI制度に整合する方針。"
    },
    {
      "date": "2025-01",
      "title": "Class 1医療機器の自動承認プロセス導入",
      "description": "2025年1月15日より、Thai FDAがClass 1医療機器の自動承認（Auto-Approval）プロセスを開始。Positive List（531品目、定期更新）に該当する低リスク機器は、必要書類・手数料の受領後に自動的に登録番号が発行され、数日で承認完了。"
    }
  ],
  "lastUpdated": "2026-04-06",
  "verified": "2026-04-06"
};
