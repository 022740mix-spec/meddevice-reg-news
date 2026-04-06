// スリナム (Suriname)
export default {
  "code": "SUR",
  "country": "スリナム",
  "countryEn": "Suriname",
  "region": "Latam",
  "flag": "🇸🇷",
  "legalSystemOverview": {
    "type": "発展途上（薬事法ベース・輸入許可制）",
    "description": "保健省（Ministerie van Volksgezondheid）が医薬品・医療機器を管轄。1896年制定の薬事法（Wet op de Uitoefening der Artsenijbereidkunde, G.B. 1896 no. 26）および1973年の包装医薬品令（Besluit Verpakte Geneesmiddelen, G.B. 1973 no. 155）が法的基盤。医療機器に特化した法律・登録制度は存在せず、医薬品と同様に保健省の輸入許可で規制。2021年に医薬品登録委員会（Geneesmiddelen Registratie Commissie）が設置されたが、対象は包装医薬品のみで医療機器は対象外。CARICOM加盟国、CARPHA/CRS参加（医薬品のみ対象）。オランダ語が公用語。",
    "keyCharacteristics": [
      "保健省が医療機器の輸入許可を管轄",
      "医療機器専用の登録制度・分類制度なし",
      "薬事法（1896年）+ 包装医薬品令（1973年）が法的基盤",
      "輸入許可制（H-99フォーム + 保健省の許可証）",
      "CARICOM加盟・CARPHA/CRS参加（医薬品のみ）",
      "オランダ語が公用語（英語も許容）",
      "国内医療機器製造なし（100%輸入依存）",
      "UDI・PMS・電子申請は未導入"
    ]
  },
  "authorities": [
    {
      "name": "Ministerie van Volksgezondheid",
      "fullName": "Ministerie van Volksgezondheid",
      "localName": "保健省",
      "role": "医薬品・医療機器の輸入許可、保健政策全般。Registratie Commissie（医薬品登録委員会）を設置。",
      "url": "https://gov.sr/ministeries/ministerie-van-volksgezondheid/de-registratie-commissie/",
      "isPrimary": true
    },
    {
      "name": "BOG",
      "fullName": "Bureau voor Openbare Gezondheidszorg",
      "localName": "公衆衛生局",
      "role": "予防医療・公衆衛生監視・疫学調査・予防接種プログラム。保健省傘下の実施機関。",
      "url": "https://gov.sr/thema/bog-suriname/",
      "isPrimary": false
    },
    {
      "name": "SSB",
      "fullName": "Suriname Standards Bureau",
      "localName": "スリナム規格局",
      "role": "国家規格の策定・技術規則・適合性評価・試験所認定。ISO/IEC会員。医療機器規格の直接的な規制権限はない。",
      "url": "https://www.trade.gov/country-commercial-guides/suriname-trade-standards",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "政府直接許可（NB制度なし）",
    "description": "第三者認証機関（Notified Body）制度は存在しない。保健省が輸入許可を直接発行する。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "医療機器に特化した法的定義は確立されていない。薬事関連法令（Wet op de Uitoefening der Artsenijbereidkunde, 1896年）の広義の規制対象として扱われる。",
    "scope": "IVDを含む（明示的区分なし）。医療機器は医薬品と同様の輸入許可プロセスで規制。",
    "notes": "医療機器専用の定義・分類は法令上未整備。保健省の輸入許可審査において個別に対象範囲が判断される。"
  },
  "primaryLaw": {
    "title": "Wet op de Uitoefening der Artsenijbereidkunde (G.B. 1896 no. 26)",
    "originalTitle": "Wet van 8 Mei 1896, houdende regeling van de uitoefening der artsenijbereidkunde in Suriname",
    "enacted": "1896",
    "lastAmended": "1981",
    "url": "https://www.dna.sr/wetgeving/surinaamse-wetten/",
    "description": "1896年制定の薬事法。スリナムにおける薬局業務・医薬品の製造・販売・輸入を規制する基本法。1981年の政令（S.B. 1981 no. 78）で最終改正。医療機器は明示的に規定されていないが、保健省の規制権限の根拠として機能。"
  },
  "implementingRegulations": [
    {
      "title": "Besluit Verpakte Geneesmiddelen (G.B. 1973 no. 155)",
      "date": "1973",
      "url": "https://gov.sr/geneesmiddelen-registratie-commissie-geinstalleerd/",
      "description": "包装医薬品の登録義務を規定する政令。安全性・有効性・品質の審査基準を定める。1986年（G.B. 1986 no. 56）および2017年（S.B. 2017 no. 15）に改正。医薬品登録の法的根拠だが、医療機器は対象外。",
      "category": "政令"
    },
    {
      "title": "Wet Verdovende Middelen (Hoofdwet 1998 no. 14)",
      "date": "1998",
      "url": "https://www.dna.sr/wetgeving/surinaamse-wetten/geldende-teksten-tm-2005/wet-verdovende-middelen/",
      "description": "麻薬・向精神薬の規制に関する法律。規制対象物質を含む医療機器（麻酔装置等）に間接的に関連。",
      "category": "法律"
    }
  ],
  "relatedLaws": [
    {
      "title": "CARPHA Caribbean Regulatory System (CRS)",
      "category": "地域規制協力",
      "enacted": "2014",
      "url": "https://carpha.org/What-We-Do/CRS/Caribbean-Regulatory-System",
      "relevance": "CARICOM地域の医薬品規制協力システム。スリナムはCRS MOU締結済み。現時点で医薬品・ワクチンのみ対象、医療機器は対象外。"
    },
    {
      "title": "Wet Nationale Basiszorgverzekering (S.B. 2014 no. 114)",
      "category": "医療保険",
      "enacted": "2014",
      "url": "https://oig.cepal.org/sites/default/files/2014_nationalbasichealthinsurancelaw_sur.pdf",
      "relevance": "国民基礎医療保険法。全国民に基礎的医療サービスへのアクセスを保障。医療機器の償還に間接的に関連。"
    }
  ],
  "classification": {
    "system": "分類制度なし（輸入許可ベース）",
    "basis": "リスクベース分類体系は未導入。すべての医療機器は保健省の輸入許可を取得して市場参入する統一プロセス。",
    "classes": [
      {
        "name": "All Devices",
        "nameJa": "全機器（分類なし）",
        "riskLevel": "未分類",
        "description": "リスク分類なし。すべての医療機器が同一の輸入許可プロセスを経る。保健省が個別に輸入許可を発行。",
        "examples": [
          "手術器具",
          "画像診断装置",
          "体外診断用医薬品",
          "注射器・カテーテル",
          "血圧計"
        ],
        "approvalPath": "保健省 輸入許可（Import License）"
      }
    ],
    "rules": [
      "リスクベース分類規則なし",
      "全医療機器にH-99フォーム + 保健省許可証を要求"
    ],
    "totalProductCodes": null
  },
  "conformityAssessment": {
    "overview": "医療機器の市場参入には保健省の輸入許可が必要。経済省にH-99フォーム（輸入許可申請）を提出し、保健省が許可証を発行する。独自の適合性評価（型式試験・技術審査等）は実施されない。製造国での合法販売を前提とした簡易許可制。",
    "routes": [
      {
        "name": "Import License",
        "nameJa": "輸入許可",
        "applicableClasses": [
          "All Devices"
        ],
        "description": "経済省にH-99フォームを提出。保健省が許可証（健康証明書）を発行。原産国での合法販売証明、製品仕様書、ラベリング情報等を提出。紙ベースの申請プロセス。",
        "subtypes": [],
        "avgReviewTime": "要確認（公式情報で裏付け未取得）",
        "avgReviewTimeSource": null,
        "fee": "要確認（公式情報で裏付け未取得）",
        "feeSource": null,
        "url": "https://www.trade.gov/country-commercial-guides/suriname-import-requirements-and-documentation"
      }
    ]
  },
  "electronicSubmission": {
    "system": "紙ベース申請（専用電子ポータルなし）",
    "url": null,
    "description": "医療機器専用の電子申請プラットフォームは存在しない。すべての申請は紙ベースで保健省および経済省窓口に提出。",
    "mandatory": false
  },
  "udi": {
    "required": false,
    "system": "未導入",
    "description": "独自のUDI（機器固有識別）制度は導入されていない。",
    "url": null,
    "timeline": "未定"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "専用制度なし",
      "mandatory": false,
      "url": null,
      "description": "医療機器に特化した有害事象報告制度は確立されていない。CARPHA/CRS加盟によりVigiCaribネットワークへの参加が見込まれるが、現時点では医薬品のファーマコビジランスが主対象。"
    },
    "recalls": {
      "authority": "Ministerie van Volksgezondheid",
      "description": "保健省がリコール権限を有するが、体系的な医療機器リコール制度は未整備。",
      "url": "https://gov.sr/thema/bog-suriname/"
    },
    "surveillance": "体系的な市販後調査制度は未整備。保健省およびBOGが公衆衛生上の問題が発生した場合に対応。"
  },
  "certificateOfFreeSale": {
    "available": false,
    "issuingAuthority": null,
    "name": null,
    "description": "国内医療機器製造がないため輸出用CFS発行需要なし。輸入時は原産国のCFS提出が求められる場合がある。",
    "processingTime": null,
    "url": null
  },
  "reimbursement": {
    "system": "SZF（国家医療保険基金）+ 政府予算",
    "authority": "SZF / Ministerie van Volksgezondheid",
    "description": "Stichting Staatsziekenfonds（SZF、1981年設立）が人口の約70%をカバーする最大の医療保険者。公務員向け強制保険・任意保険・補足保険を提供。国民基礎医療保険法（2014年）により全国民に基礎医療を保障。医療機器に特化した償還コード体系は未確認。BGVSが公的医療機関向け医薬品・医療消耗品の調達を実施。",
    "codingSystems": [],
    "url": "https://www.szf.sr/over-ons/"
  },
  "marketingRules": {
    "authority": "Ministerie van Volksgezondheid",
    "description": "輸入許可を取得した機器のみ販売・流通可能。オランダ語または英語でのラベリング。",
    "keyRules": [
      "保健省の輸入許可取得済み機器のみ販売可",
      "オランダ語または英語でのラベリング",
      "製品名・成分・製造日・有効期限・製造者住所の記載",
      "虚偽・誇大広告の禁止"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "スリナムはMDSAPの参加国・Affiliate Member・Observerのいずれでもない。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "SSBがISO会員。ISO 13485の国内義務化は未確認だが、輸入品の品質根拠として参照される。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "明示的な要求は未確認。"
    },
    "iec62304": {
      "accepted": false,
      "notes": "明示的な要求は確認されていない。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "SSBがIEC Affiliate Member。医用電気機器の安全規格として参照される。"
    },
    "others": [
      {
        "standard": "CROSQ",
        "notes": "CARICOM地域規格機関（CROSQ）加盟。地域規格の策定・調和に参加。"
      }
    ]
  },
  "recentDevelopments": [
    {
      "date": "2021-01",
      "title": "医薬品登録委員会（Geneesmiddelen Registratie Commissie）設置",
      "description": "保健省により医薬品登録委員会が正式に設置。包装医薬品の安全性・有効性・品質を審査する独立委員会。医療機器は対象外だが、規制能力構築の重要なステップ。"
    },
    {
      "date": "2024-12",
      "title": "PAHO 米州規制当局会合への参加",
      "description": "PAHOが開催した米州の国家規制当局（NRA）会合にスリナムも参加。規制能力強化と地域協調の議論が行われた。"
    },
    {
      "date": "2026-02",
      "title": "EU/PAHO カリブ海地域医薬品規制ワークショップ",
      "description": "EU・PAHO・ガイアナ保健省共催のカリブ海地域医薬品規制強化ワークショップ（ジョージタウン）にカリブ海諸国の規制専門家が参加。スリナムを含む地域の規制システム強化が議題。"
    }
  ],
  "lastUpdated": "2026-04-06",
  "verified": null
};
