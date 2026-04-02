// インドネシア (Indonesia)
export default {
  "code": "IDN",
  "country": "インドネシア",
  "countryEn": "Indonesia",
  "region": "ASPAC",
  "flag": "🇮🇩",
  "legalSystemOverview": {
    "type": "共和制・大統領制（Presidential republic）",
    "description": "インドネシアの医療機器規制は保健省（Kementerian Kesehatan / Kemenkes）が一元的に管轄する。Dirjen Farmalkes（医薬品・医療機器総局）が登録審査の実務を担当。Permenkes No. 62/2017（保健大臣規則）が流通許可（Izin Edar）の主要規則であり、ASEAN AMDDに準拠した4クラス分類を採用。2025年のPermenkes No. 11/2025でリスクベース許認可のOSSシステム統合とCDAKB（適正流通基準）の義務化が進んだ。なお、BPOM（医薬品食品監督庁）は医薬品・食品・化粧品を管轄し、医療機器はBPOMの管轄外である。",
    "keyCharacteristics": [
      "保健省（Kemenkes）による一元的規制体制",
      "リスクベースの4クラス分類（Class A/B/C/D）",
      "ASEAN AMDD / CSDT への整合",
      "ローカルライセンスホルダー（LAR）の配置義務",
      "CDAKB（適正流通基準）認証の義務化",
      "ハラール認証の段階的義務化（2026年〜）"
    ]
  },
  "authorities": [
    {
      "name": "Kemenkes / Dirjen Farmalkes",
      "fullName": "Ministry of Health — Directorate General of Pharmaceutical and Medical Devices",
      "localName": "Kementerian Kesehatan — Direktorat Jenderal Kefarmasian dan Alat Kesehatan",
      "role": "医療機器の流通許可（Izin Edar）審査・GMP認証・市販後監視・法規策定。医療機器規制の中核機関。",
      "url": "https://farmalkes.kemkes.go.id/",
      "isPrimary": true
    },
    {
      "name": "BPJPH",
      "fullName": "Halal Product Assurance Organizing Agency",
      "localName": "Badan Penyelenggara Jaminan Produk Halal",
      "role": "医療機器を含むハラール認証の管理。2026年10月よりClass A医療機器のハラール認証義務化。",
      "url": "https://bpjph.halal.go.id/",
      "isPrimary": false
    },
    {
      "name": "BPJS Kesehatan",
      "fullName": "Social Security Administrator for Health",
      "localName": "Badan Penyelenggara Jaminan Sosial Kesehatan",
      "role": "国民健康保険（JKN）制度における医療機器の償還管理",
      "url": "https://bpjs-kesehatan.go.id/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "Kemenkes 直接審査",
    "description": "インドネシアでは保健省（Dirjen Farmalkes）が医療機器の流通許可審査を直接実施する。独自のNotified Body制度は存在しない。参照国（オーストラリア、カナダ、EU、日本、米国）からのFree Sales Certificateが登録申請の前提条件。",
    "bodies": [
      {
        "name": "Dirjen Farmalkes（直接審査）",
        "url": "https://farmalkes.kemkes.go.id/"
      }
    ]
  },
  "deviceDefinition": {
    "legalDefinition": "Permenkes No. 62/2017に基づく定義。疾病の診断、予防、監視、治療、緩和、障害の補償、解剖学的・生理学的過程の検査・置換・修正・支援を目的とする器具、装置、機器、材料、ソフトウェアその他の物品であって、主たる作用が薬理学的・免疫学的・代謝的手段によらないもの。",
    "scope": "製品は3カテゴリに分類：Alat Kesehatan（医療機器）、Diagnostik in Vitro（IVD）、PKRT（家庭用健康用品）。",
    "notes": "SaMD（Software as a Medical Device）・AI診断機器の分類・承認要件に関するフレームワークが策定中。"
  },
  "primaryLaw": {
    "title": "Permenkes No. 62/2017 (Regulation on Marketing Authorization of Medical Devices)",
    "originalTitle": "Peraturan Menteri Kesehatan No. 62 Tahun 2017 tentang Izin Edar Alat Kesehatan, Alat Kesehatan Diagnostik In Vitro dan PKRT",
    "enacted": "2017-12-29",
    "lastAmended": "2025",
    "url": "https://farmalkes.kemkes.go.id/en/unduh/permenkes-62-2017/",
    "description": "医療機器・IVD・家庭用健康用品の流通許可（Izin Edar）に関する主要規則。旧Permenkes No. 1190/2010を廃止。分類、登録手続、必要書類、品質管理要件等を規定。2025年のPermenkes No. 11/2025でOSSシステム統合とCDAKB義務化が追加。"
  },
  "implementingRegulations": [
    {
      "title": "Permenkes No. 11/2025 (Risk-Based Licensing Integration)",
      "date": "2025",
      "url": "https://peraturan.go.id/id/permenkes-no-11-tahun-2025",
      "description": "リスクベース許認可をOSS（Online Single Submission）システムに統合。CDAKB（医療機器適正流通基準）認証をNIB（事業者番号）の運用条件として義務化。",
      "category": "許認可"
    },
    {
      "title": "PP No. 42/2024 (Halal Certification for Products)",
      "date": "2024",
      "url": "https://halalmui.org/en/why-are-medical-devices-required-to-have-bpjph-halal-certification-starting-in-2026/",
      "description": "インドネシア国内流通製品のハラール認証義務。医療機器にも段階的に適用（Class A: 2026年10月、Class B: 2029年、Class C: 2034年、Class D: 2039年）。",
      "category": "ハラール認証"
    },
    {
      "title": "ASEAN CSDT (Common Submission Dossier Template)",
      "date": "2018",
      "url": "https://farmalkes.kemkes.go.id/en/unduh/petunjuk-penggunaan-aplikasi-e-regalkes/",
      "description": "ASEAN域内で統一された申請書類テンプレート。REGALKESポータルに統合済み。全クラスの登録申請で使用。",
      "category": "申請様式"
    }
  ],
  "relatedLaws": [
    {
      "title": "UU No. 27/2022 (Personal Data Protection Law / PDP Law)",
      "category": "データ保護",
      "enacted": "2022-10-17",
      "url": "https://www.dlapiperdataprotection.com/index.html?t=law&c=ID",
      "relevance": "インドネシア初の包括的個人データ保護法。健康データは機微情報に分類。2024年10月より完全施行。医療機器がデータ収集する場合に適用。"
    },
    {
      "title": "UU No. 17/2023 (Omnibus Health Law)",
      "category": "医療",
      "enacted": "2023-08-08",
      "url": "https://peraturan.bpk.go.id/Details/258028/uu-no-17-tahun-2023",
      "relevance": "2023年制定のオムニバス保健法。旧UU No. 36/2009を廃止・統合。医療機器を含む保健サービス全般の基盤を規定。"
    },
    {
      "title": "UU No. 8/1999 (Consumer Protection Law)",
      "category": "消費者保護",
      "enacted": "1999",
      "url": "https://iclg.com/practice-areas/digital-health-laws-and-regulations/indonesia",
      "relevance": "消費者の権利保護。医療機器の安全性・品質に関する一般規定。"
    }
  ],
  "classification": {
    "system": "4クラス分類（Class A/B/C/D）",
    "basis": "意図する使用目的、人体へのリスクの程度に基づく分類。ASEAN AMDD分類ルールに準拠。SIKLARA（分類支援ツール）がREGALKES上で利用可能。",
    "classes": [
      {
        "name": "Class A",
        "nameJa": "クラスA",
        "riskLevel": "低",
        "description": "低リスクの医療機器。人体への害が最小。流通許可（Izin Edar）の取得が必要だが、審査は簡略化。",
        "examples": [
          "絆創膏",
          "舌圧子",
          "検査用手袋",
          "車椅子",
          "ガーゼ"
        ],
        "approvalPath": "流通許可（Izin Edar）— 簡略審査"
      },
      {
        "name": "Class B",
        "nameJa": "クラスB",
        "riskLevel": "中低",
        "description": "中低リスクの医療機器。中程度のリスクを伴う。技術文書の審査が行われる。",
        "examples": [
          "血圧計",
          "体温計",
          "超音波診断装置",
          "歯科用材料",
          "注射器"
        ],
        "approvalPath": "流通許可（Izin Edar）— 技術文書審査"
      },
      {
        "name": "Class C",
        "nameJa": "クラスC",
        "riskLevel": "中高",
        "description": "中高リスクの医療機器。誤作動時に重大なリスク。詳細な技術審査と臨床データの提出が求められる。",
        "examples": [
          "手術器具",
          "カテーテル",
          "人工呼吸器",
          "透析装置",
          "一部のIVD機器"
        ],
        "approvalPath": "流通許可（Izin Edar）— 詳細技術審査"
      },
      {
        "name": "Class D",
        "nameJa": "クラスD",
        "riskLevel": "高",
        "description": "最高リスクの医療機器。故障時に生命への重大リスク。最も厳格な審査。包括的な臨床データと安全性エビデンスが必要。",
        "examples": [
          "心臓ペースメーカー",
          "人工関節",
          "人工心臓弁",
          "脊椎インプラント",
          "植込み型除細動器"
        ],
        "approvalPath": "流通許可（Izin Edar）— 包括的審査"
      }
    ],
    "rules": [
      "ASEAN AMDD分類ルールに準拠",
      "SIKLARA（分類支援ツール）による分類判定",
      "IVDは別途分類（Class A〜D）",
      "PKRT（家庭用健康用品）は医療機器とは別カテゴリ",
      "AMDD整合：31規格中26規格を整合化済み"
    ],
    "totalProductCodes": "Kemenkes独自の製品コード + GMDNを参照"
  },
  "conformityAssessment": {
    "overview": "インドネシアで医療機器を販売するには、保健省からの流通許可（Izin Edar / NIE番号）の取得が必要。全クラスで登録が義務。外国製造者はローカルライセンスホルダー（LAR）の指定が必須。参照国（AU/CA/EU/JP/US）からのFSC（Free Sales Certificate）が登録の前提条件。CDAKB（適正流通基準）認証が流通業者に義務化。ASEAN CSDTに基づく申請書類の準備が求められる。NIE（流通許可番号）の有効期間は5年間で、期限前に更新申請が必要。",
    "routes": [
      {
        "name": "Izin Edar — Class A",
        "nameJa": "流通許可 — クラスA（簡略審査）",
        "applicableClasses": [
          "Class A"
        ],
        "description": "低リスク機器の流通許可。簡略化された審査プロセス。基本的な製品情報・ラベル情報・ISO 13485証明書の提出。",
        "subtypes": [],
        "avgReviewTime": "公式21営業日（Permenkes 11/2025基準、実務上1.5〜2ヶ月）",
        "fee": "IDR 1,500,000（約125 USD）",
        "url": "https://asiaactual.com/indonesia/medical-device-registration/"
      },
      {
        "name": "Izin Edar — Class B",
        "nameJa": "流通許可 — クラスB（技術文書審査）",
        "applicableClasses": [
          "Class B"
        ],
        "description": "中低リスク機器の流通許可。CSDT形式の技術文書・QMS証明書・FSCの提出が必要。",
        "subtypes": [],
        "avgReviewTime": "公式36営業日（Permenkes 11/2025基準、実務上3〜6ヶ月）",
        "fee": "IDR 3,000,000（約230 USD）",
        "url": "https://insightof.id/indonesia-medical-device-registration-guide-2025/"
      },
      {
        "name": "Izin Edar — Class C",
        "nameJa": "流通許可 — クラスC（詳細技術審査）",
        "applicableClasses": [
          "Class C"
        ],
        "description": "中高リスク機器の流通許可。包括的な技術文書・臨床データ・安全性エビデンスの審査。",
        "subtypes": [],
        "avgReviewTime": "公式36営業日（Permenkes 11/2025基準、実務上6〜12ヶ月）",
        "fee": "IDR 3,000,000（約230 USD）",
        "url": "https://www.elendilabs.com/en/articles/idn-medical-device-registration-timelines-in-2025"
      },
      {
        "name": "Izin Edar — Class D",
        "nameJa": "流通許可 — クラスD（包括的審査）",
        "applicableClasses": [
          "Class D"
        ],
        "description": "最高リスク機器の流通許可。最も厳格な審査プロセス。Expert committeeによる包括的な臨床・安全性データの評価。",
        "subtypes": [],
        "avgReviewTime": "公式55営業日（Permenkes 11/2025基準、実務上5〜7ヶ月）",
        "fee": "IDR 5,000,000（約340 USD）",
        "url": "https://farmalkes.kemkes.go.id/en/unduh/permenkes-62-2017/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "REGALKES",
    "url": "https://regalkes.kemkes.go.id/informasi_alkes/Indonesia%20Guideline%20for%20Evaluation%20of%20Medical%20Device%20and%20IVD%202020.pdf",
    "description": "保健省の医療機器・PKRT オンライン登録ポータル「REGALKES」を通じて、流通許可の申請・更新・変更を電子的に実施。SIKLARA（分類支援ツール）を内蔵。OSS（Online Single Submission）システムとも連携し、NIB（事業者番号）の取得・CDAKB認証管理にも対応。E-Watch（有害事象報告）・E-Report（流通記録報告）機能も提供。",
    "mandatory": true
  },
  "udi": {
    "required": false,
    "system": "未導入",
    "description": "インドネシアは現時点で独自のUDI制度を正式に導入していない。ASEAN域内でのUDI整合化に向けた議論に参加しているが、具体的な実施タイムラインは公表されていない。製品追跡は登録番号（NIE）とロット番号・製造番号により管理。",
    "url": "https://asiaactual.com/indonesia/medical-device-registration/",
    "timeline": "導入時期未定（ASEAN域内整合を踏まえて検討中）"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "E-Watch (Adverse Event Reporting)",
      "mandatory": true,
      "url": "https://e-watch-alkes.kemkes.go.id/",
      "description": "医療機器の製造者・輸入業者・医療施設は、有害事象を保健省に報告する義務がある。公衆衛生への重大な脅威は48時間以内、死亡・重篤な健康悪化は10日以内、その他の重篤事象は30日以内に報告。ASEAN AMDD Annex 5（Post Market Vigilanceガイドライン）に準拠。"
    },
    "recalls": {
      "authority": "Kemenkes（保健省）",
      "description": "保健省がFSCA（Field Safety Corrective Action）およびリコールを監督。製造者・輸入業者は自主回収と保健省への報告義務を負う。E-Watchシステムを通じて報告。",
      "url": "https://farmalkes.kemkes.go.id/en/unduh/tata-cara-pelaporan-kejadian-tidak-diinginkan-ktd-alat-kesehatan/"
    },
    "surveillance": "流通許可保有者はKTD（不具合事象）の報告義務を負う。E-Reportシステムによる流通記録・トレーサビリティの維持管理が義務。保健省による定期的な施設査察とコンプライアンス確認。不適合製品に対する流通許可の停止・取消等の行政措置。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "Kemenkes（保健省）",
    "name": "Surat Keterangan Ekspor (SKE) / Certificate of Free Sale",
    "description": "インドネシアで流通許可を取得済みの医療機器について、保健省が輸出証明書を発行。輸出先国の規制申請に使用。",
    "processingTime": "約15〜30営業日",
    "url": "https://esuka.kemkes.go.id/"
  },
  "reimbursement": {
    "system": "JKN (Jaminan Kesehatan Nasional) — National Health Insurance",
    "authority": "BPJS Kesehatan",
    "description": "インドネシアの医療費償還はJKN（国民健康保障）制度が中心で、人口の約84%以上をカバー。BPJS Kesehatanが運営。INA-CBG（Indonesia Case Based Groups）による包括払い方式を採用。医療機器の償還は標準的な診断機器・モニタリング機器・消耗品が中心で、高度・先進的な医療機器は全額カバーされない場合がある。BPJS提携の公立病院が医療機器収益の約40%を占める。",
    "codingSystems": [
      "INA-CBG（Indonesia Case Based Groups）",
      "ICD-10",
      "BPJS Medical Device List"
    ],
    "url": "https://www.badankebijakan.kemkes.go.id/en/kemenkes-dan-bpjs-kesehatan-gelar-sosialisasi-penatalaksanaan-klaim-ina-cbg/"
  },
  "marketingRules": {
    "authority": "Kemenkes（保健省）",
    "description": "医療機器の広告はPermenkes No. 62/2017および関連規則に基づき規制。流通許可（Izin Edar）未取得機器の広告・販売は禁止。インドネシア語でのラベル表示が義務。",
    "keyRules": [
      "流通許可（Izin Edar）未取得機器の広告・販売禁止",
      "虚偽・誇大な効能表示の禁止",
      "インドネシア語でのラベル表示義務",
      "オンライン販売に関する規制",
      "CDAKB認証なしの流通禁止"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "インドネシアはMDSAPに正式参加していない。ただしISO 13485認証は製造施設の品質管理体制の証拠として登録要件に含まれる。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "流通許可の登録要件としてISO 13485認証の提出が必須。全クラスで求められる。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "リスクマネジメントの実施が要求され、ISO 14971に基づくリスク分析・管理報告書の提出が登録書類に含まれる。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "ソフトウェアを含む医療機器の開発に参照。デジタルヘルス規制の整備に伴い重要性が増加。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "医用電気機器の安全規格として受入済み。安全性試験の基準として適用。"
    },
    "others": [
      {
        "name": "ISO 10993シリーズ（生物学的安全性評価）",
        "notes": "生体接触医療機器の生物学的安全性評価に必須。"
      },
      {
        "name": "ISO 15223-1（医療機器表示記号）",
        "notes": "医療機器のラベル表示記号として受入済み。"
      },
      {
        "name": "ASEAN AMDD CSDT（Common Submission Dossier Template）",
        "notes": "ASEAN域内で統一された申請書類テンプレート。REGALKESに統合済み。"
      }
    ]
  },
  "recentDevelopments": [
    {
      "date": "2026-10",
      "title": "Class A医療機器のハラール認証義務化",
      "description": "PP No. 42/2024に基づき、Class A医療機器にBPJPHハラール認証が義務化。動物由来成分を含まない製品は対象外。以降Class B（2029年）、Class C（2034年）、Class D（2039年）に段階的拡大。"
    },
    {
      "date": "2025-12",
      "title": "許認可システムの一時凍結",
      "description": "Kemenkesの許認可システムが2025年12月15日〜2026年1月9日に完全停止。システム移行に伴う措置で、期間中の申請処理が影響を受けた。"
    },
    {
      "date": "2025-01",
      "title": "Permenkes No. 11/2025 — CDAKB・OSSシステム統合",
      "description": "CDAKB（適正流通基準）認証をOSS（Online Single Submission）に統合。CDAKB未取得の場合NIB（事業者番号）が運用不可に。リスクベース許認可の近代化。"
    },
    {
      "date": "2025-01",
      "title": "デジタルヘルス規制の検討",
      "description": "SaMD（Software as a Medical Device）、AI診断、ウェアラブル機器の分類・承認要件に関するフレームワーク策定を開始。サイバーセキュリティ基準も検討中。"
    }
  ],
  "lastUpdated": "2026-04-02",
  "verified": null
};
