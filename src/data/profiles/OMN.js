// オマーン (Sultanate of Oman)
export default {
  "code": "OMN",
  "country": "オマーン",
  "countryEn": "Sultanate of Oman",
  "region": "Middle East & Africa",
  "flag": "🇴🇲",
  "legalSystemOverview": {
    "type": "中央集権制（Centralized system）",
    "description": "オマーンの医療機器規制は保健省（MOH）傘下の医薬品安全センター（Drug Safety Center / DGPADC: Directorate General of Pharmaceutical Affairs and Drug Control）が管轄する。2020年の大臣令第113号（Ministerial Decree 113/2020）が主たる規制根拠。GHTF/IMDRF の分類原則に準拠した Class A / B / C / D の4クラス分類を採用し、EU MDR のフレームワークとも整合性を持つ。",
    "keyCharacteristics": [
      "MOH / DGPADC による中央規制体制",
      "GHTF ベースの4クラス分類（Class A / B / C / D）",
      "大臣令 113/2020 が主たる規制根拠",
      "ローカル代理人（Authorized Representative）の指定が必須",
      "登録有効期限5年"
    ]
  },
  "authorities": [
    {
      "name": "DGPADC / Drug Safety Center",
      "fullName": "Directorate General of Pharmaceutical Affairs and Drug Control — Drug Safety Center",
      "localName": "المديرية العامة للشؤون الصيدلانية والرقابة الدوائية",
      "role": "医療機器の登録・市販後監視・輸入管理・施設許可",
      "url": "https://www.moh.gov.om/en/hospitals-directorates/directorates-and-centers-at-hq/drug-safety-center/",
      "isPrimary": true
    },
    {
      "name": "MOH Oman",
      "fullName": "Ministry of Health — Oman",
      "localName": "وزارة الصحة",
      "role": "医療政策全般・上位監督",
      "url": "https://www.moh.gov.om/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "なし（MOH/DGPADC が直接審査）",
    "description": "オマーンには Notified Body 制度は存在しない。DGPADC が直接申請書類を審査し、登録判断を行う。CE 証明書、FDA 認可等の国際的認証文書を参照。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "大臣令 113/2020 に基づき、疾病の診断・治療・予防・監視等を目的とする器具・装置・機器・ソフトウェア・材料等で、主たる作用が薬理学的・免疫学的・代謝的手段によらないもの。GHTF/IMDRF 定義に準拠。",
    "scope": "体外診断用医薬品（IVD）も規制対象。IVD は独自の分類規則に従う。",
    "notes": "MOH はガイダンス文書（GD シリーズ）で詳細な定義・適用範囲を規定。GD-22（製造業者登録）、GD-3（Class C/D 登録）、GD-9（低リスク機器登録）等。"
  },
  "primaryLaw": {
    "title": "Ministerial Decree 113/2020 Issuing the Executive Regulation of the Law on the Practice of the Pharmacy Profession and Governing Pharmaceutical Enterprises",
    "originalTitle": "القرار الوزاري رقم 113/2020",
    "enacted": "2020",
    "lastAmended": null,
    "url": "https://decree.om/2020/moh20200113/",
    "description": "薬局業務・医薬品企業規制の執行令。医療機器の規制根拠を含む。DGPADC の権限を規定。Official Gazette 1353（2020年8月19日発行）に掲載。"
  },
  "implementingRegulations": [
    {
      "title": "GD-3: Guideline on Requirements of Class C & D Medical Devices Registration",
      "date": null,
      "url": "https://www.moh.gov.om/media/ov3mnntj/guidance-document-gd3-guideline-on-requirements-of-class-c-d-medical-devices-registration.pdf",
      "description": "高リスク（Class C / D）医療機器の登録要件を詳細に規定。技術文書・臨床データ要件を含む。",
      "category": "登録（高リスク）"
    },
    {
      "title": "GD-9: Requirements of Low Risk Medical Devices Registration",
      "date": null,
      "url": "https://moh.gov.om/media/peqd3ouo/gd9-requirements-of-low-risk-medical-devices-registration.pdf",
      "description": "低リスク（Class A / B）医療機器の登録要件を規定。",
      "category": "登録（低リスク）"
    },
    {
      "title": "GD-22: Guideline on Requirements of Medical Device Manufacturer Registration",
      "date": null,
      "url": "https://www.moh.gov.om/media/ubmn0pgh/guidance-document-gd-22-guideline-on-requirements-of-medical-device-manufacturer-registration-in-sultanate-of-oman.pdf",
      "description": "医療機器製造業者のオマーンでの登録要件。GHTF 2010 ガイダンスを参照。",
      "category": "製造業者登録"
    },
    {
      "title": "GD-14: Guideline on Medical Devices Bundling/Grouping Criteria",
      "date": null,
      "url": "https://www.moh.gov.om/media/4vbkgbw2/guidance-document-gd14-guideline-on-medical-devices-bundling-grouping-criteria-1.pdf",
      "description": "医療機器のバンドリング・グルーピング基準を規定。",
      "category": "申請手続き"
    },
    {
      "title": "GD-1: Medical Device Listing Guidance",
      "date": null,
      "url": "https://moh.gov.om/media/edhjumre/11plus5-listing-guidance.pdf",
      "description": "医療機器のリスティング（データベース登録）要件を規定。",
      "category": "リスティング"
    }
  ],
  "relatedLaws": [],
  "classification": {
    "system": "GHTF ベースの4クラス分類（Class A / B / C / D）",
    "basis": "リスクベース（GHTF/IMDRF 分類原則に準拠）",
    "classes": [
      {
        "name": "Class A",
        "nameJa": "クラスA",
        "riskLevel": "低リスク",
        "description": "低リスク医療機器。患者への直接的リスクが最小限。",
        "examples": [
          "弾性包帯",
          "手動外科器具",
          "聴診器"
        ],
        "approvalPath": "簡易登録（GD-9）"
      },
      {
        "name": "Class B",
        "nameJa": "クラスB",
        "riskLevel": "低〜中リスク",
        "description": "低中リスク医療機器。",
        "examples": [
          "血圧計",
          "超音波プローブ",
          "歯科用充填材"
        ],
        "approvalPath": "標準登録（GD-9）"
      },
      {
        "name": "Class C",
        "nameJa": "クラスC",
        "riskLevel": "中〜高リスク",
        "description": "中高リスク医療機器。詳細な技術文書が必要。",
        "examples": [
          "人工呼吸器",
          "透析器",
          "整形外科用インプラント"
        ],
        "approvalPath": "詳細登録（GD-3）"
      },
      {
        "name": "Class D",
        "nameJa": "クラスD",
        "riskLevel": "高リスク",
        "description": "最高リスク医療機器。最も厳格な審査。",
        "examples": [
          "人工心臓弁",
          "冠動脈ステント",
          "埋込み型除細動器"
        ],
        "approvalPath": "詳細登録（GD-3 — 臨床データ要求あり）"
      }
    ],
    "rules": [
      {
        "id": "GHTF/IMDRF 分類規則",
        "description": "GHTF SG1 N015:2006 の分類原則を採用。意図する用途・侵襲性・使用期間・エネルギー源等に基づく規則ベースの分類。",
        "url": "https://www.imdrf.org/"
      }
    ],
    "totalProductCodes": "要確認（オマーン独自のコード体系は未公開）"
  },
  "conformityAssessment": {
    "overview": "DGPADC がオンラインポータル経由で申請書類を審査。Free Sale Certificate と CE/FDA 認証文書が主たる証拠書類。高リスク機器は到着2ヶ月前に技術ファイル提出が要請される。",
    "routes": [
      {
        "name": "MOH Medical Device Registration",
        "nameJa": "MOH 医療機器登録",
        "applicableClasses": [
          "全クラス"
        ],
        "description": "技術ファイル、CE 証明書/FDA 認可文書、ISO 13485 証明書、適合宣言書、Free Sale Certificate、取扱説明書、ラベリング等を提出。クラスに応じて GD-3 または GD-9 の要件に従う。",
        "subtypes": [],
        "avgReviewTime": "60 working days",
        "avgReviewTimeSource": "https://moh.gov.om/en/services/businesses/drug-safety-center/request-for-registration-of-medical-device/",
        "fee": "Class A/B: 100 OMR、Class C/D: 200 OMR",
        "feeSource": "https://moh.gov.om/en/services/businesses/drug-safety-center/request-for-registration-of-medical-device/",
        "url": "https://moh.gov.om/en/services/businesses/drug-safety-center/request-for-registration-of-medical-device/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "MOH オンラインポータル",
    "url": "https://moh.gov.om/en/services/businesses/drug-safety-center/request-for-registration-of-medical-device/",
    "description": "MOH はオンラインポータル経由での申請を実施。高リスク機器は出荷到着2ヶ月前にポータル経由で技術ファイルを提出する必要がある。",
    "mandatory": true
  },
  "udi": {
    "required": false,
    "system": "要確認（UDI 制度の独自導入は未確認）",
    "description": "オマーンでは現時点で IMDRF 型の UDI 制度が法的に義務化されているとの確認情報はない。国際的な UDI 要件（EU MDR、FDA）への対応は製造業者の責任。",
    "url": null,
    "timeline": "要確認"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "Drug Safety Center — 市販後監視制度",
      "mandatory": true,
      "url": "https://www.moh.gov.om/en/hospitals-directorates/directorates-and-centers-at-hq/drug-safety-center/",
      "description": "Drug Safety Center が市販後監視を実施。有害事象の報告義務あり。能動的かつ体系的な情報収集プロセスを運用。"
    },
    "recalls": {
      "authority": "MOH / DGPADC",
      "description": "DGPADC がリコール・FSCA を管理。MOH データベースに未登録の機器は輸入・販売・使用禁止。",
      "url": "https://www.moh.gov.om/"
    },
    "surveillance": "Drug Safety Center による能動的市販後監視。PMS 計画の提出が高リスク機器に要求される。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "MOH Oman",
    "name": "Free Sale Certificate / Certificate of Foreign Government",
    "description": "登録申請時に原産国の規制当局からの CFS/CFG 提出が必要。米国製品は Certificate for Medical Device Not Exporting (CDNE) も受容。",
    "processingTime": "要確認",
    "url": "https://www.moh.gov.om/"
  },
  "reimbursement": {
    "system": "公的医療制度（国民に対する無料または低額の医療サービス）",
    "authority": "MOH Oman",
    "description": "オマーン国民は公立病院で無料または低額の医療サービスを受けられる。医療機器の調達は公立病院の入札・調達プロセスを通じて行われる。独立した医療機器償還制度に関する公開情報は限定的。",
    "codingSystems": [
      "要確認"
    ],
    "url": "https://www.moh.gov.om/"
  },
  "marketingRules": {
    "authority": "MOH / DGPADC",
    "description": "医療機器の広告・販促は MOH の規制下にある。",
    "keyRules": [
      "MOH データベースに登録済みの機器のみ販売・広告可",
      "虚偽・誇大広告の禁止"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "オマーンは MDSAP プログラムに参加していない。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "ISO 13485 認証は医療機器製造業者の登録要件として必須。GD-22 で明示的に要求。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "リスクマネジメントの国際規格として参照。技術文書に含める必要あり。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "ソフトウェア医療機器に対して参照。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "医用電気機器の安全規格として参照。"
    },
    "others": []
  },
  "recentDevelopments": [
    {
      "date": "2025-07-06",
      "title": "MOH Circular No. 161/2025: 高リスク医療機器の登録開始",
      "description": "高リスク医療機器・医療用品の製造業者およびその製品の登録開始に関する通達（2025年7月6日公布）。全医療機器事業所に対し、高リスク製品の技術ファイルを出荷到着2ヶ月前までにMOHオンラインポータル経由で提出するよう要請。"
    },
    {
      "date": "2020",
      "title": "大臣令 113/2020 発出",
      "description": "薬局業務・医薬品企業規制の執行令。医療機器の規制枠組みの法的根拠を確立。DGPADC の権限を明確化。"
    }
  ],
  "lastUpdated": "2026-04-06",
  "verified": "2026-04-06"
};
