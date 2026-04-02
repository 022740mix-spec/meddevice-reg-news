// パラグアイ (Republic of Paraguay)
export default {
  "code": "PRY",
  "country": "パラグアイ",
  "countryEn": "Republic of Paraguay",
  "region": "Latam",
  "flag": "🇵🇾",
  "legalSystemOverview": {
    "type": "中央集権制（Centralized system）",
    "description": "パラグアイの医療機器規制は保健福祉省（MSPBS）傘下の国家衛生監視局（DNVS: Dirección Nacional de Vigilancia Sanitaria）が管轄する。Ley 1119/97（医薬品・医療機器法）および関連する規則が主要な規制根拠。MERCOSUR の共通規則を国内法に取り込んでおり、地域整合化が進行中。4クラス分類（Class I / II / III / IV）を採用。",
    "keyCharacteristics": [
      "MSPBS/DNVS による中央規制体制",
      "Ley 1119/97 に基づく4クラス分類（Class I / II / III / IV）",
      "MERCOSUR GMC 決議の国内法化による地域整合化",
      "ローカル登録保有者の指定が必須",
      "CFS（Certificate of Free Sale）の提出が必要",
      "DNVS による直接審査"
    ]
  },
  "authorities": [
    {
      "name": "DNVS",
      "fullName": "Dirección Nacional de Vigilancia Sanitaria",
      "localName": "Dirección Nacional de Vigilancia Sanitaria",
      "role": "医療機器の登録・市販後監視・施設許可・輸入管理",
      "url": "https://www.dnvs.gov.py/",
      "isPrimary": true
    },
    {
      "name": "MSPBS",
      "fullName": "Ministerio de Salud Pública y Bienestar Social",
      "localName": "Ministerio de Salud Pública y Bienestar Social",
      "role": "保健政策の策定・監督",
      "url": "https://www.mspbs.gov.py/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "なし（DNVS が直接審査）",
    "description": "パラグアイには Notified Body 制度は存在しない。DNVS が直接、登録申請書類を審査する。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "Ley 1119/97 および関連規則に基づき、疾病の診断・治療・予防・監視・軽減等を目的とする器具・装置・機器・ソフトウェア・材料等で、主たる作用が薬理学的・免疫学的・代謝的手段によらないもの。MERCOSUR の定義に準拠。",
    "scope": "体外診断用医薬品（IVD）も規制対象。",
    "notes": "定義は MERCOSUR GMC 決議に基づく。"
  },
  "primaryLaw": {
    "title": "Ley N° 1119/97（医薬品等に関する法律）",
    "originalTitle": "Ley N° 1119/97 - De Productos para la Salud y Otros",
    "enacted": "1997",
    "lastAmended": "随時改正",
    "url": "https://www.dnvs.gov.py/",
    "description": "パラグアイにおける医薬品・医療機器・体外診断薬等の保健製品を規制する基本法。DNVS の権限と規制枠組みを規定。"
  },
  "implementingRegulations": [
    {
      "title": "Decreto 7.442/2006（医療機器の登録に関する規則）",
      "date": "2006",
      "url": "https://www.dnvs.gov.py/",
      "description": "医療機器の分類・登録手続き・必要書類を規定する主要な施行規則。",
      "category": "包括規制"
    },
    {
      "title": "MERCOSUR GMC 決議（各種）",
      "date": "各年",
      "url": "https://www.mercosur.int/",
      "description": "MERCOSUR 加盟国間で整合化された医療機器規制。",
      "category": "地域整合化"
    }
  ],
  "relatedLaws": [
    {
      "title": "Código Sanitario (Ley 836/80)",
      "category": "衛生法",
      "enacted": "1980",
      "url": "https://www.mspbs.gov.py/",
      "relevance": "保健衛生制度の基本法。"
    }
  ],
  "classification": {
    "system": "4クラス分類（Class I / II / III / IV）",
    "basis": "リスクベース（MERCOSUR 整合化規則に準拠）",
    "classes": [
      {
        "name": "Class I",
        "nameJa": "クラスI",
        "riskLevel": "低リスク",
        "description": "低リスク医療機器。",
        "examples": [
          "聴診器",
          "弾性包帯",
          "手動外科器具"
        ],
        "approvalPath": "登録（簡易手続き）"
      },
      {
        "name": "Class II",
        "nameJa": "クラスII",
        "riskLevel": "中低リスク",
        "description": "中低リスク医療機器。",
        "examples": [
          "注射器",
          "血圧計",
          "歯科用充填材"
        ],
        "approvalPath": "登録（標準手続き）"
      },
      {
        "name": "Class III",
        "nameJa": "クラスIII",
        "riskLevel": "中高リスク",
        "description": "中高リスク医療機器。",
        "examples": [
          "人工呼吸器",
          "透析器",
          "整形外科用インプラント"
        ],
        "approvalPath": "登録（詳細審査）"
      },
      {
        "name": "Class IV",
        "nameJa": "クラスIV",
        "riskLevel": "高リスク",
        "description": "最高リスク医療機器。最も厳格な審査。",
        "examples": [
          "人工心臓弁",
          "冠動脈ステント",
          "埋込み型除細動器"
        ],
        "approvalPath": "登録（最も詳細な審査）"
      }
    ],
    "rules": [
      {
        "id": "MERCOSUR GMC 分類規則",
        "description": "MERCOSUR で整合化されたリスクベースの分類規則。",
        "url": "https://www.mercosur.int/"
      }
    ],
    "totalProductCodes": "要確認"
  },
  "conformityAssessment": {
    "overview": "DNVS が登録申請書類を審査。CFS、技術文書、GMP 証明、ラベリング等を評価。",
    "routes": [
      {
        "name": "Registro Sanitario de Productos Médicos",
        "nameJa": "医療機器衛生登録",
        "applicableClasses": [
          "Class I / II / III / IV"
        ],
        "description": "DNVS に登録申請書類を提出。技術文書、CFS、GMP 適合証明、ラベリング等を審査。",
        "subtypes": [],
        "avgReviewTime": "60〜180日（クラス・書類の完全性による）",
        "fee": "要確認",
        "url": "https://www.dnvs.gov.py/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "DNVS オンラインシステム",
    "url": "https://www.dnvs.gov.py/",
    "description": "DNVS は電子申請システムの整備を進めている。一部手続きはオンラインで対応可能。",
    "mandatory": false
  },
  "udi": {
    "required": false,
    "system": "要確認",
    "description": "パラグアイでは現時点で独自の UDI 制度が法的に義務化されているとの確認情報はない。",
    "url": null,
    "timeline": "要確認"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "DNVS テクノビジランス制度",
      "mandatory": true,
      "url": "https://www.dnvs.gov.py/",
      "description": "登録保有者は医療機器に関連する有害事象を DNVS に報告する義務がある。テクノビジランス制度により市販後安全性を監視。"
    },
    "recalls": {
      "authority": "DNVS",
      "description": "DNVS がリコール・FSCA を管理。",
      "url": "https://www.dnvs.gov.py/"
    },
    "surveillance": "DNVS によるテクノビジランス（市販後監視）。MERCOSUR レベルでの情報共有も行われる。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "DNVS",
    "name": "Certificado de Libre Venta",
    "description": "登録申請時に原産国の規制当局からの CFS 提出が必要。DNVS も登録済み機器について CFS を発行可能。",
    "processingTime": "要確認",
    "url": "https://www.dnvs.gov.py/"
  },
  "reimbursement": {
    "system": "IPS（Instituto de Previsión Social）+ 公的医療機関 + 民間保険",
    "authority": "MSPBS / IPS",
    "description": "パラグアイの公的医療は MSPBS 傘下の公立病院と IPS（社会保険機関）が中心。医療機器の調達は公的入札プロセスを通じて行われる。",
    "codingSystems": [
      "要確認"
    ],
    "url": "https://www.mspbs.gov.py/"
  },
  "marketingRules": {
    "authority": "DNVS",
    "description": "医療機器の広告・販促は DNVS の規制下にある。登録済み機器のみの販売・広告が原則。",
    "keyRules": [
      "登録済み機器のみ販売・広告可",
      "虚偽・誇大広告の禁止",
      "ラベリングはスペイン語で記載"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "パラグアイは MDSAP プログラムに参加していない。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "ISO 13485 認証は GMP/QMS 証明として参照される。"
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
    "others": []
  },
  "recentDevelopments": [
    {
      "date": "2025",
      "title": "DNVS の組織強化と MERCOSUR 整合化",
      "description": "DNVS は医療機器規制の体制強化と MERCOSUR 加盟国間での規制整合化を継続的に推進中。"
    }
  ],
  "lastUpdated": "2026-04-02",
  "verified": null
};
