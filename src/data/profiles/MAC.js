// マカオ (Macao SAR)
export default {
  "code": "MAC",
  "country": "マカオ",
  "countryEn": "Macao SAR",
  "region": "ASPAC",
  "flag": "🇲🇴",
  "legalSystemOverview": {
    "type": "中国特別行政区（独自制度）",
    "description": "マカオ（澳門）は中華人民共和国の特別行政区であり、「一国二制度」の下で独自の法体系・規制制度を有する。医療機器の規制は ISAF/SSM（Instituto para os Assuntos Farmacêuticos / Serviços de Saúde de Macau / 薬物事務局 / 衛生局）が管轄する。Decreto-Lei n.º 53/94/M（医療機器規制に関する法令）を基盤とし、ポルトガル法の影響を強く受けた法体系を維持。中国本土のNMPAとは別の独立した規制制度を運用する。",
    "keyCharacteristics": [
      "一国二制度の下での独自規制",
      "ISAF（薬物事務局）/ SSM（衛生局）が規制当局",
      "ポルトガル法の影響を受けた法体系",
      "中国本土（NMPA）とは独立した制度",
      "ラベリングはポルトガル語・中国語（繁体字）必須",
      "CE マーキング・FDA 承認等の外国認証を参照・受入れ",
      "市場規模が小さく、規制体制は比較的簡素"
    ]
  },
  "authorities": [
    {
      "name": "ISAF",
      "fullName": "Pharmaceutical Administration Bureau",
      "localName": "Instituto para os Assuntos Farmacêuticos / 藥物事務局",
      "role": "医療機器の登録・輸入許可・市場監視",
      "url": "https://www.isaf.gov.mo/",
      "isPrimary": true
    },
    {
      "name": "SSM",
      "fullName": "Health Bureau",
      "localName": "Serviços de Saúde de Macau / 衛生局",
      "role": "公衆衛生政策・医療サービス管理・医療機器の使用監督",
      "url": "https://www.ssm.gov.mo/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "なし（独自制度）",
    "description": "マカオにはNotified Body制度は存在しない。ISAFが直接審査を行う。CE マーキング、FDA 510(k)/PMA、中国NMPA承認等の外国認証を参照・受入れることがある。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "Decreto-Lei n.º 53/94/M に基づく医療機器の定義。疾病の診断・治療・予防・監視等を目的とする器具・装置・機器・材料等。",
    "scope": "IVD を含む。ソフトウェア医療機器の分類は発展途上。",
    "notes": "定義はEU旧MDD やポルトガル法の影響を受ける。近年、国際基準への整合化を推進中。"
  },
  "primaryLaw": {
    "title": "Decreto-Lei n.º 53/94/M — 医療機器規制法令",
    "originalTitle": "Decreto-Lei n.º 53/94/M",
    "enacted": "1994",
    "lastAmended": "随時改正",
    "url": "https://www.isaf.gov.mo/",
    "description": "マカオにおける医療機器規制の基本法令。ポルトガル統治時代の法体系を基盤とする。"
  },
  "implementingRegulations": [
    {
      "title": "Regulamento Administrativo（行政法規）— 医療機器登録・輸入規則",
      "date": "各年",
      "url": "https://www.isaf.gov.mo/",
      "description": "医療機器の登録・輸入許可手続・品質管理要件。",
      "category": "行政法規"
    },
    {
      "title": "ISAF 通達・ガイドライン",
      "date": "各年",
      "url": "https://www.isaf.gov.mo/",
      "description": "ISAFが発行する実務ガイドライン・通達。",
      "category": "ガイドライン"
    }
  ],
  "relatedLaws": [
    {
      "title": "Lei n.º 8/2005 — 個人データ保護法",
      "category": "データ保護",
      "enacted": "2005",
      "url": "https://www.gpdp.gov.mo/",
      "relevance": "健康データを含む個人データの保護。"
    }
  ],
  "classification": {
    "system": "リスクベース分類（国際基準参照）",
    "basis": "ISAF の分類基準。EU MDR / GHTF 分類を参照。",
    "classes": [
      {
        "name": "Class I",
        "nameJa": "クラスI",
        "riskLevel": "低",
        "description": "低リスク医療機器。",
        "examples": [
          "包帯",
          "聴診器"
        ],
        "approvalPath": "届出・登録"
      },
      {
        "name": "Class II",
        "nameJa": "クラスII",
        "riskLevel": "中",
        "description": "中リスク医療機器。",
        "examples": [
          "血圧計",
          "超音波装置"
        ],
        "approvalPath": "登録審査"
      },
      {
        "name": "Class III",
        "nameJa": "クラスIII",
        "riskLevel": "高",
        "description": "高リスク医療機器。",
        "examples": [
          "心臓ペースメーカー",
          "人工関節"
        ],
        "approvalPath": "詳細審査"
      }
    ],
    "rules": [
      "GHTF/IMDRF 分類ガイダンスを参照",
      "EU MDR 分類規則も参考"
    ],
    "totalProductCodes": "ISAF 製品コード"
  },
  "conformityAssessment": {
    "overview": "ISAFへの登録申請が必要。外国規制当局（CE、FDA、NMPA等）の承認・認証を参照し、審査を簡素化する場合がある。品質管理システム（ISO 13485等）の証明が求められる。",
    "routes": [
      {
        "name": "ISAF 登録",
        "nameJa": "ISAF 医療機器登録",
        "applicableClasses": [
          "全クラス"
        ],
        "description": "ISAFへの登録申請。外国認証（CE、FDA等）の提出により審査が簡素化される場合がある。",
        "subtypes": [],
        "avgReviewTime": "3〜6ヶ月（製品による）",
        "fee": "ISAF手数料表に基づく",
        "url": "https://www.isaf.gov.mo/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "ISAF 申請システム",
    "url": "https://www.isaf.gov.mo/",
    "description": "ISAFの申請窓口を通じた登録。電子化は段階的に推進中。",
    "mandatory": false
  },
  "udi": {
    "required": false,
    "system": "未導入",
    "description": "マカオではUDI制度は未導入。国際動向を注視中。",
    "url": null,
    "timeline": "未定"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "ISAF / SSM 有害事象報告",
      "mandatory": true,
      "url": "https://www.isaf.gov.mo/",
      "description": "医療機器の有害事象はISAF/SSMに報告義務。報告制度は整備中。"
    },
    "recalls": {
      "authority": "ISAF / SSM",
      "description": "安全性問題が判明した場合、ISAFが回収命令・市場撤去を指示。国際的なリコール情報も監視。",
      "url": "https://www.isaf.gov.mo/"
    },
    "surveillance": "市販後監視制度は基本的な枠組みを有する。国際基準への整合化を推進中。"
  },
  "certificateOfFreeSale": {
    "available": false,
    "issuingAuthority": null,
    "name": null,
    "description": "マカオでのCFS発行制度は確認されていない。",
    "processingTime": null,
    "url": null
  },
  "reimbursement": {
    "system": "公的医療サービス（SSM）+ 民間保険",
    "authority": "SSM（衛生局）",
    "description": "マカオの公的医療はSSMが運営する公立病院・診療所を通じて提供される。マカオ居民は公立医療サービスを低負担で利用可能。医療機器は政府調達を通じて公立病院に供給される。民間病院利用は自費または民間保険。DRGシステムは未導入。",
    "codingSystems": [
      "政府調達リスト"
    ],
    "url": "https://www.ssm.gov.mo/"
  },
  "marketingRules": {
    "authority": "ISAF",
    "description": "ISAFの規制に基づく医療機器の広告・マーケティング規制。虚偽・誇大広告の禁止。",
    "keyRules": [
      "ポルトガル語・中国語（繁体字）ラベリング必須",
      "虚偽・誇大広告の禁止",
      "ISAF登録番号の表示"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "マカオはMDSAP非参加。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "品質管理システムの証明として参照。ISO 13485 認証の提出が推奨。"
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
      "notes": "医用電気機器の安全規格として参照。"
    },
    "others": [
      {
        "standard": "CE マーキング（EU MDR）",
        "notes": "EU CEマーキング取得済み製品は審査が簡素化される場合がある。"
      },
      {
        "standard": "FDA 510(k)/PMA",
        "notes": "米国FDA承認済み製品も参照。"
      }
    ]
  },
  "recentDevelopments": [
    {
      "date": "2025",
      "title": "医療機器規制の近代化推進",
      "description": "ISAFは国際基準（IMDRF等）への整合化を推進中。電子申請の拡充、品質管理要件の強化、市販後監視制度の充実に注力。粤港澳大湾区（GBA）構想の下、香港・広東省との規制協調も模索。"
    }
  ],
  "lastUpdated": "2026-04-02",
  "verified": null
};
