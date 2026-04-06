// モルディブ (Maldives)
export default {
  "code": "MDV",
  "country": "モルディブ",
  "countryEn": "Republic of Maldives",
  "region": "ASPAC",
  "flag": "🇲🇻",
  "legalSystemOverview": {
    "type": "大統領制共和制（Presidential Republic）",
    "description": "モルディブの医療機器規制はモルディブ食品医薬品庁（MFDA: Maldives Food and Drug Authority）が所管する。保健サービス法（Health Services Act, Law No. 29/2015）第65条(3)項により、国内で製造・輸入・販売される全医療製品のMFDA登録が義務付けられている。医療機器専用の法律は未制定であり、医薬品規制の枠組みの中で医療機器登録が運用されている。独立した医療機器法（Medical Device Act）の議会提出が検討されているが、2026年4月時点で未成立。WHO SEARO（南東アジア地域事務局）の支援を受け、GBT+MD（医療機器グローバルベンチマーキングツール）による自己評価を実施し、規制体制の強化を推進中。",
    "keyCharacteristics": [
      "MFDA（保健省管下）が医療機器規制を統括",
      "Health Services Act (Law No. 29/2015) 第65条が法的根拠",
      "医療機器専用法は未制定（医薬品規制の枠組みで運用）",
      "輸入品はMFDAへの登録が必要",
      "医療機器輸入者のMFDA事前登録が必須",
      "参照国認可（CE マーク等）の提出を要求",
      "WHO SEARO / SEARN との連携による規制強化を推進"
    ]
  },
  "authorities": [
    {
      "name": "MFDA",
      "fullName": "Maldives Food and Drug Authority",
      "localName": "މޯލްޑިވްސް ފުޑް އެންޑް ޑްރަގް އޮތޯރިޓީ",
      "role": "医療機器・医薬品・食品の登録・輸入許可・品質管理・市販後監視を統括。Medicine and Therapeutic Goods Division（MTG）が医療機器登録を担当。",
      "url": "https://mfda.gov.mv/en",
      "isPrimary": true
    },
    {
      "name": "MOH Maldives",
      "fullName": "Ministry of Health — Republic of Maldives",
      "localName": "މިނިސްޓްރީ އޮފް ހެލްތު",
      "role": "保健政策全般・法令の策定・監督。MFDAの上位機関。",
      "url": "https://health.gov.mv/en",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "該当なし（MFDA 直接審査）",
    "description": "欧州型の Notified Body 制度は存在しない。MFDAが直接登録審査を行う。申請時に参照国認可（CEマーク、製造国登録証明等）の提出が求められ、リライアンスアプローチ（WHO Good Reliance Practices に準拠）を採用している。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "Health Services Act (Law No. 29/2015) に基づき、MFDAが規制する医療製品の一部として位置付けられる。医療機器専用の法定義は未整備であり、MFDAの医療機器・医療消耗品登録フォーム上の運用定義に従う。",
    "scope": "医療機器および医療消耗品（medical devices and medical consumables）が登録対象。IVDの取扱いの詳細は要確認。",
    "notes": "独立した医療機器法が未制定のため、法的定義は限定的。医療機器法案の議会提出が検討されている。"
  },
  "primaryLaw": {
    "title": "Health Services Act (Law No. 29/2015)",
    "originalTitle": "ޞިއްޙީ ޚިދުމަތް ދިނުމުގެ ޤާނޫނު",
    "enacted": "2015",
    "lastAmended": "要確認",
    "url": "https://health.gov.mv/en/departments/maldives-food-and-drug-authority",
    "description": "保健サービスの提供に関する包括的法律。第65条(3)項により、国内で製造・輸入・販売される全医療製品のMFDA登録を義務付ける。MFDAの法的根拠を規定。医療機器専用法は未制定であり、本法がMFDAによる医療機器規制の法的基盤となっている。"
  },
  "implementingRegulations": [
    {
      "title": "Guideline for Product Registration Including Emergency Use Authorization (MTG/RE-RP/GLN-TE 001)",
      "date": "2025-10-26（Version 08）",
      "url": "https://mfda.gov.mv/en/downloads",
      "description": "MFDAの医療製品登録に関する包括ガイドライン。Version 03（2024年6月）でリライアンスパスウェイを導入し、参照規制当局（Reference Regulatory Authority）やWHO事前認証の評価結果を考慮する手続きを規定。",
      "category": "ガイダンス"
    },
    {
      "title": "Medical Device and Medical Consumable Registration Form（MFDA）",
      "date": "要確認",
      "url": "https://health.gov.mv/en/downloads/medical-device-registration-form",
      "description": "医療機器・医療消耗品の登録申請に必要な書類を規定するフォーム。機器クラス、適合性評価証明書、製品説明、製造国登録証明、CEマーク証明等の提出を要求。",
      "category": "登録手続き"
    },
    {
      "title": "Medical Device Importers Registration Form（MFDA）",
      "date": "2022-07-19",
      "url": "https://health.gov.mv/en/downloads/medical-device-importers-registration-form",
      "description": "医療機器輸入者のMFDA事前登録に必要な書類を規定。医療機器の登録前に輸入者登録が必須。",
      "category": "登録手続き"
    }
  ],
  "relatedLaws": [
    {
      "title": "Regulation on Import（MFDA発出）",
      "category": "輸入規制",
      "enacted": "要確認",
      "url": "https://one.gov.mv/entities/FDA",
      "relevance": "医療製品の輸入手続きに関する規則。国境での衛生検査（Border Health Clearance）を含む。"
    },
    {
      "title": "Food Safety Act",
      "category": "食品安全",
      "enacted": "要確認",
      "url": "https://health.gov.mv/en",
      "relevance": "2024年8月施行。MFDAの食品安全規制の法的根拠。医療機器との直接関連は限定的だが、MFDAの規制能力基盤を構成。"
    }
  ],
  "classification": {
    "system": "クラス分類あり（詳細は要確認）",
    "basis": "MFDAの医療機器登録フォームにおいてクラス情報の記載が求められるが、独自の分類規則の詳細は公開情報から確認困難。参照国（EU等）の分類を参考にする運用と推定。",
    "classes": [
      {
        "name": "医療機器（クラス情報要記載）",
        "nameJa": "医療機器（分類制度の詳細は要確認）",
        "riskLevel": "要確認",
        "description": "MFDAの登録フォームでは医療機器のクラス情報の記載が求められるが、独自の分類規則の公開文書は確認できていない。",
        "examples": [],
        "approvalPath": "MFDA登録"
      }
    ],
    "rules": [
      "登録申請時にクラス情報の記載が必要",
      "参照国（EU等）での分類・認可を参考",
      "独自分類規則の詳細は公開情報から確認困難"
    ],
    "totalProductCodes": null
  },
  "conformityAssessment": {
    "overview": "全医療機器はMFDAへの登録が必要。輸入者はMFDAへの事前登録が必須。申請時には参照国認可（CEマーク、製造国登録証明等）、適合性評価証明書、製品説明・画像、会社概要等の提出が求められる。MFDAはWHO Good Reliance Practicesに基づくリライアンスアプローチを採用し、参照規制当局の評価結果を考慮する。",
    "routes": [
      {
        "name": "MFDA Medical Device Registration",
        "nameJa": "MFDA 医療機器登録",
        "applicableClasses": [
          "全クラス"
        ],
        "description": "MFDAに登録申請書類一式を提出。必要書類：(1) 機器クラス情報、(2) 適合性評価証明書（Notified Body等）、(3) 製品説明・画像、(4) 会社概要、(5) 製造国登録証明、(6) CEマーク証明、(7) 使用制限の詳細。リライアンスパスウェイにより参照規制当局の評価結果を活用。",
        "subtypes": [
          "新規登録",
          "更新"
        ],
        "avgReviewTime": "要確認（公式情報で裏付け未取得）",
        "avgReviewTimeSource": null,
        "fee": "要確認（公式情報で裏付け未取得）",
        "feeSource": null,
        "url": "https://health.gov.mv/en/downloads/medical-device-registration-form"
      }
    ]
  },
  "electronicSubmission": {
    "system": "Dhirithi ポータル（MFDA オンラインシステム）",
    "url": "https://mfda.gov.mv/en/downloads/dhirithi-portal-user-registration",
    "description": "2019年11月に開始されたMFDAのオンラインポータル。食品・医薬品の登録・許可・国境衛生検査等のサービスを提供。医療機器登録の電子申請対応状況の詳細は要確認。国家シングルウィンドウネットワークへの接続を計画中。",
    "mandatory": false
  },
  "udi": {
    "required": false,
    "system": "未導入",
    "description": "独自のUDI制度は2026年4月時点で未導入。",
    "url": null,
    "timeline": "未定"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "有害事象報告制度（MFDA）",
      "mandatory": true,
      "url": "https://mfda.gov.mv/en/downloads/adr-form",
      "description": "MFDAへの有害事象報告が義務付けられている。MFDAは医薬品・医療機器の安全性アラートを発出（例: 2024年11月メフェナム酸懸濁液に関するアラート）。報告様式・期限の詳細は要確認。"
    },
    "recalls": {
      "authority": "MFDA",
      "description": "MFDAの命令または自主リコール。MFDAは安全性に関するアラート・禁止措置を発出する権限を有する。",
      "url": "https://mfda.gov.mv/en/downloads/pms-2025"
    },
    "surveillance": "MFDAによる市販後監視。国境管理部門（Velana国際空港・マレ商業港に配置）が輸入品の物理検査を実施。WHO SEARO支援の下で体制強化を推進中。"
  },
  "certificateOfFreeSale": {
    "available": false,
    "issuingAuthority": null,
    "name": null,
    "description": "モルディブからのCFS発行に関する公式制度は要確認。輸入登録時に製造国の登録証明・CEマーク証明の提出が求められる。",
    "processingTime": null,
    "url": null
  },
  "reimbursement": {
    "system": "国営医療保険制度（Aasandha）＋民間セクター",
    "authority": "National Social Protection Agency (NSPA) / 保健省",
    "description": "Aasandha（国民医療保険スキーム）により国民に基本的な医療サービスが提供される。医療機器の個別償還制度は未整備。公共調達が中心。",
    "codingSystems": [],
    "url": "https://health.gov.mv/en/ministry-of-health"
  },
  "marketingRules": {
    "authority": "MFDA",
    "description": "医療機器広告に関する詳細法規は要確認。未登録機器の販売・広告は禁止。MFDAの一般的な医療製品規制の枠組み内で運用。",
    "keyRules": [
      "未登録医療機器の販売・広告の禁止",
      "虚偽・誇大広告の禁止"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "モルディブはMDSAPに参加していない。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "登録時に適合性評価証明書としてISO 13485認証の提出が考慮される。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "リスクマネジメントの国際規格として参照。"
    },
    "iec62304": {
      "accepted": false,
      "notes": "独自の要求は要確認。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "医用電気機器の安全規格として参照。"
    },
    "others": []
  },
  "recentDevelopments": [
    {
      "date": "2015",
      "title": "Health Services Act (Law No. 29/2015) 制定",
      "description": "保健サービスに関する包括的法律を制定。第65条(3)項で全医療製品のMFDA登録を義務付け、医療機器規制の法的基盤を確立。"
    },
    {
      "date": "2019-11",
      "title": "Dhirithi ポータル開始",
      "description": "MFDAのオンラインサービスポータル「Dhirithi」を開始。食品・医薬品の登録・許可等の電子化を推進。"
    },
    {
      "date": "2024-06",
      "title": "リライアンスパスウェイの導入",
      "description": "Guideline for Product Registration のVersion 03でリライアンスパスウェイを導入。参照規制当局やWHO事前認証の評価結果を活用し、登録効率の向上を図る。WHO Good Reliance Practices に準拠。"
    },
    {
      "date": "2025-12",
      "title": "WHO SEARN GSDP検査官パイロットワークショップ（マレ開催）",
      "description": "2025年12月14〜16日、マレにてSEARN主催のGood Supply and Distribution Practices（GSDP）検査官向けパイロットワークショップを開催。規制能力の強化を推進。"
    }
  ],
  "lastUpdated": "2026-04-06",
  "verified": null
};
