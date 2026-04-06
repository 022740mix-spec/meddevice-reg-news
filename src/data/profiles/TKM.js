// トルクメニスタン (Turkmenistan)
export default {
  "code": "TKM",
  "country": "トルクメニスタン",
  "countryEn": "Turkmenistan",
  "region": "ASPAC",
  "flag": "🇹🇲",
  "legalSystemOverview": {
    "type": "政府審査型（国家登録制度）",
    "description": "トルクメニスタンでは保健・医療産業省（Ministry of Health and Medical Industry）が医療機器規制を管轄。2016年1月12日制定の「医薬品供給に関する法律」（Law on Drug Provision, No. 319-V）が医療機器・医薬品双方の登録・流通を規定する基本法。医療機器は国家登録後にのみ市場投入・使用が可能。Türkmenstandartlary（国家標準局）が適合性証明書を発行。輸入が市場の90%以上を占め、外国メーカーはローカル代理人の指定が必須。EAEU非加盟・CIS加盟国。",
    "keyCharacteristics": [
      "保健・医療産業省が規制当局",
      "医薬品供給法（2016年1月12日、No. 319-V）が基本法",
      "国家登録制度（登録証有効期間5年）",
      "Türkmenstandartlary（TDS）が適合性証明書を発行",
      "外国メーカーはローカル代理人が必須",
      "ロシア語・トルクメン語・英語でドシエ提出可",
      "EAEU非加盟、CIS加盟国",
      "医療機器市場の90%以上が輸入"
    ]
  },
  "authorities": [
    {
      "name": "保健・医療産業省",
      "fullName": "Ministry of Health and Medical Industry of Turkmenistan",
      "localName": "Türkmenistanyň Saglygy goraýyş we derman senagaty ministrligi",
      "role": "医療機器規制の統括・政策立案。傘下の国家登録センターが登録審査を実施。",
      "url": "https://www.saglykhm.gov.tm/en",
      "isPrimary": true
    },
    {
      "name": "国家医薬品登録・品質管理センター",
      "fullName": "Center for Registration and State Quality Control of Medicinal Products",
      "localName": "Derman serişdelerini döwlet taýdan hasaba almak we döwlet hil gözegçiligi merkezi",
      "role": "医療機器・医薬品の国家登録審査、品質管理を実施。保健・医療産業省傘下。",
      "url": "https://saglykhm.gov.tm/en/umumy-maglumat",
      "isPrimary": false
    },
    {
      "name": "Türkmenstandartlary",
      "fullName": "Main State Service \"Turkmenstandartlary\"",
      "localName": "\"Türkmenstandartlary\" baş döwlet gullugy",
      "role": "適合性評価・製品認証・技術規格の策定。医療機器の適合性証明書（Certificate of Conformity）を発行。",
      "url": "https://tds.gov.tm/en/21-certification",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "政府直接審査（Notified Body制度なし）",
    "description": "Notified Body制度は存在しない。保健・医療産業省傘下の国家登録センターが直接審査を行い、Türkmenstandartlaryが適合性証明書を発行する。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "医薬品供給法（2016年）に基づく定義。人の疾病の診断・治療・予防・リハビリテーション等に使用される器具・装置・機器・材料。主要な作用が薬理学的・免疫学的・代謝的でないもの。",
    "scope": "医療機器・医療器具・医療装置が対象。IVDの取扱いは要確認。",
    "notes": "CISモデル法を参照した定義。具体的な適用範囲の詳細は施行規則で規定。"
  },
  "primaryLaw": {
    "title": "Law of Turkmenistan \"On Drug Provision\" (No. 319-V)",
    "originalTitle": "Türkmenistanyň Kanuny «Derman üpjünçiligi hakynda»",
    "enacted": "2016-01-12",
    "lastAmended": "2022-08-04",
    "url": "https://cis-legislation.com/document.fwx?rgn=84123",
    "description": "2016年1月12日制定、2022年8月4日最終改正。医薬品・医療機器の国家登録・製造・輸入・販売・品質管理を規定する基本法。医療機器は国家登録後にのみ使用・販売が可能。"
  },
  "implementingRegulations": [
    {
      "title": "医療機器国家登録手続規則",
      "date": "要確認",
      "url": "https://www.saglykhm.gov.tm/ru/docs/turkmenistanyn-kanunlary",
      "description": "医療機器の国家登録に必要な書類・手続きを規定。保健・医療産業省令に基づく。",
      "category": "登録手続き"
    },
    {
      "title": "Law of Turkmenistan \"On Certification\"",
      "date": "要確認",
      "url": "https://tds.gov.tm/en/17-about-certification",
      "description": "製品・サービスの適合性評価・認証に関する法律。Türkmenstandartlaryによる適合性証明書発行の法的根拠。",
      "category": "適合性評価"
    }
  ],
  "relatedLaws": [
    {
      "title": "Law of Turkmenistan \"On Protection of Citizens' Health\"",
      "category": "保健基本法",
      "enacted": "要確認",
      "url": "https://faolex.fao.org/docs/pdf/tuk158537.pdf",
      "relevance": "国民の健康保護に関する基本法。医療サービス・医療機器の安全使用に関する上位規定。"
    }
  ],
  "classification": {
    "system": "国家登録制（リスクベース分類の詳細は要確認）",
    "basis": "医薬品供給法に基づく国家登録制度。正式なリスクベース分類体系（クラス分け）の公開情報は限定的。登録審査の過程で製品のリスクレベルに応じた審査深度が適用されると推定されるが、公式な分類規則の詳細は要確認。",
    "classes": [
      {
        "name": "登録対象医療機器",
        "nameJa": "登録対象医療機器",
        "riskLevel": "全リスクレベル",
        "description": "全ての医療機器が国家登録の対象。正式なクラス分類体系の公開情報は限定的。",
        "examples": ["診断機器", "治療機器", "手術器具", "医療材料"],
        "approvalPath": "国家登録（保健・医療産業省）"
      }
    ],
    "rules": [
      "全医療機器が国家登録の対象",
      "正式なリスクベース分類体系の公開情報は限定的",
      "登録審査の過程でリスクに応じた審査が行われると推定"
    ],
    "totalProductCodes": null
  },
  "conformityAssessment": {
    "overview": "保健・医療産業省傘下の国家登録センターに登録申請。技術文書・品質証明（ISO 13485等）・適合性証明書・CFS・使用説明書等を提出。Türkmenstandartlaryが適合性証明書を発行。登録証の有効期間は5年で、更新が必要。外国メーカーはローカル代理人を通じて申請。",
    "routes": [
      {
        "name": "State Registration of Medical Devices",
        "nameJa": "医療機器国家登録",
        "applicableClasses": ["登録対象医療機器"],
        "description": "国家登録センターに申請書類一式を提出。技術文書・製造者の法的地位証明・品質管理システム証明（ISO 13485等）・適合性証明書・原産国のCFS・製品仕様・安定性データ・使用説明書を審査。登録証の有効期間は5年。更新手続きの所要期間は3〜4カ月。",
        "subtypes": ["新規登録", "更新（5年ごと）", "変更登録"],
        "avgReviewTime": "要確認（公式情報で裏付け未取得）",
        "avgReviewTimeSource": "https://deltaswiss.eu/delta-medical-turkmenistan/medical-device-registration-turkmenistan/",
        "fee": "要確認（公式情報で裏付け未取得）",
        "feeSource": "https://deltaswiss.eu/delta-medical-turkmenistan/medical-device-registration-turkmenistan/",
        "url": "https://deltaswiss.eu/delta-medical-turkmenistan/medical-device-registration-turkmenistan/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "紙媒体提出（電子申請システムは未確認）",
    "url": "https://cratia.com/en/countries/turkmenistan/registracziya-mediczinskih-izdelij/",
    "description": "登録ドシエは紙媒体（原本と写し各1部）で提出。電子申請システムの導入状況は未確認。",
    "mandatory": false
  },
  "udi": {
    "required": false,
    "system": "未導入",
    "description": "独自のUDI制度は未導入。国際的なUDI要件への対応は未確認。",
    "url": null,
    "timeline": "未定"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "保健・医療産業省による市販後監視",
      "mandatory": true,
      "url": "https://www.saglykhm.gov.tm/ru/docs/turkmenistanyn-kanunlary",
      "description": "医薬品供給法に基づき、医療機器の有害事象・不具合の報告義務がある。保健・医療産業省が市販後監視を管轄。具体的な報告手続き・期限の詳細は要確認。"
    },
    "recalls": {
      "authority": "保健・医療産業省",
      "description": "保健・医療産業省が市場安全措置・リコールの権限を持つ。",
      "url": "https://cis-legislation.com/document.fwx?rgn=84123"
    },
    "surveillance": "保健・医療産業省による市販後監視制度。Türkmenstandartlaryが品質管理面で関与。"
  },
  "certificateOfFreeSale": {
    "available": false,
    "issuingAuthority": null,
    "name": null,
    "description": "登録申請時に原産国のCFS提出が求められる。トルクメニスタンからのCFS発行制度は要確認。",
    "processingTime": null,
    "url": null
  },
  "reimbursement": {
    "system": "国家医療制度（公的医療は無料原則）",
    "authority": "保健・医療産業省",
    "description": "トルクメニスタンは憲法で国民の医療を受ける権利を保障。公的医療機関での医療は原則無料。医療機器は公的調達（国家入札）を通じて医療機関に供給される。個別の医療機器償還リストは未確認。",
    "codingSystems": [],
    "url": "https://www.mfa.gov.tm/en/articles/7"
  },
  "marketingRules": {
    "authority": "保健・医療産業省 / Türkmenstandartlary",
    "description": "国家登録済み機器のみ販売・使用が可能。適合性証明書（Türkmenstandartlary発行、有効期間12カ月）も必要。ラベリングはトルクメン語・ロシア語での記載が求められる。",
    "keyRules": [
      "国家登録済み機器のみ販売・使用可",
      "Türkmenstandartlary発行の適合性証明書が必要（有効期間12カ月）",
      "トルクメン語・ロシア語でのラベリング",
      "使用説明書のトルクメン語/ロシア語訳が必要",
      "虚偽・誇大広告の禁止"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "トルクメニスタンはMDSAPに参加していない。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "ISO 13485認証は品質管理システムの証明として登録審査で参照される。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "リスクマネジメント規格として参照。"
    },
    "iec62304": {
      "accepted": false,
      "notes": "要確認。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "医用電気機器の安全規格として参照。TDS（トルクメニスタン国家規格）としても採用。"
    },
    "others": [
      {
        "name": "TDS（トルクメニスタン国家規格）",
        "notes": "旧ソ連GOST規格を基礎とした国家規格体系。国際規格（ISO/IEC）の国内採用を順次推進中。"
      }
    ]
  },
  "recentDevelopments": [
    {
      "date": "2016-01-12",
      "title": "医薬品供給法（No. 319-V）制定",
      "description": "医薬品・医療機器の国家登録・流通を規定する基本法が制定。従来の規制を体系化し、国家登録制度の法的根拠を確立。"
    },
    {
      "date": "2024-2025",
      "title": "Türkmenstandartlary国際認定の更新",
      "description": "国家標準局が国際認定を更新。適合性評価・製品認証の国際整合性を維持。医療機器の品質管理にも影響。"
    }
  ],
  "lastUpdated": "2026-04-06",
  "verified": "2026-04-06"
};
