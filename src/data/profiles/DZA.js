// アルジェリア (People's Democratic Republic of Algeria)
export default {
  "code": "DZA",
  "country": "アルジェリア",
  "countryEn": "People's Democratic Republic of Algeria",
  "region": "Middle East & Africa",
  "flag": "🇩🇿",
  "legalSystemOverview": {
    "type": "中央集権制（Centralized system）",
    "description": "アルジェリアの医療機器規制は保健省（MOH）および国立医薬品管理研究所（LNCPP: Laboratoire National de Contrôle des Produits Pharmaceutiques）が管轄する。Loi n° 18-11 du 2 juillet 2018（衛生法）および関連規則が法的根拠。医療機器は homologation（型式認証）手続きが必要で、LNCPP が技術評価を担当する。EU CE マークの影響を受けた制度だが、独自の登録プロセスを有する。",
    "keyCharacteristics": [
      "LNCPP と MOH による二元的な規制体制",
      "Homologation（型式認証）制度",
      "EU の分類モデルを参照した4クラス分類",
      "CE マーク取得機器は審査で考慮されるが、自動承認ではない",
      "ローカル代理人の指定が必須",
      "CFS および品質認証書（ISO 13485）の提出が要求される"
    ]
  },
  "authorities": [
    {
      "name": "LNCPP",
      "fullName": "Laboratoire National de Contrôle des Produits Pharmaceutiques",
      "localName": "المخبر الوطني لمراقبة المنتجات الصيدلانية",
      "role": "医療機器の技術評価・試験・品質管理",
      "url": "https://www.lncpp.dz/",
      "isPrimary": true
    },
    {
      "name": "MOH Algeria",
      "fullName": "Ministère de la Santé",
      "localName": "وزارة الصحة",
      "role": "医療機器の登録許可・保健政策・市販後監視",
      "url": "https://www.sante.gov.dz/",
      "isPrimary": true
    }
  ],
  "notifiedBodies": {
    "system": "なし（LNCPP/MOH が直接審査）",
    "description": "アルジェリアには Notified Body 制度は存在しない。LNCPP が技術評価を行い、MOH が最終的な登録許可を付与する。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "衛生法および関連規則に基づき、人体に対して使用される器具・装置・機器・ソフトウェア・材料等で、疾病の診断・予防・監視・治療・軽減等を目的とし、主たる作用が薬理学的・免疫学的・代謝的手段によらないもの。",
    "scope": "体外診断用医薬品（IVD）も規制対象。",
    "notes": "定義は GHTF/IMDRF の定義に概ね準拠。"
  },
  "primaryLaw": {
    "title": "Loi n° 18-11 du 2 juillet 2018 relative à la santé",
    "originalTitle": "القانون رقم 18-11 المتعلق بالصحة",
    "enacted": "2018",
    "lastAmended": "随時改正",
    "url": "https://www.sante.gov.dz/",
    "description": "アルジェリアの衛生法。医薬品・医療機器を含む衛生製品の規制の法的根拠を提供。医療機器の homologation 要件を規定。"
  },
  "implementingRegulations": [
    {
      "title": "Décret exécutif relatif à l'homologation des dispositifs médicaux（医療機器型式認証に関する施行令）",
      "date": "各種",
      "url": "https://www.sante.gov.dz/",
      "description": "医療機器の homologation 手続き、必要書類、技術要件等を規定。",
      "category": "登録"
    },
    {
      "title": "Arrêté relatif à l'importation des dispositifs médicaux（医療機器輸入に関する省令）",
      "date": "各種",
      "url": "https://www.sante.gov.dz/",
      "description": "医療機器の輸入許可・要件を規定。",
      "category": "輸入管理"
    }
  ],
  "relatedLaws": [
    {
      "title": "Loi n° 85-05 du 16 février 1985（旧衛生法）",
      "category": "衛生法",
      "enacted": "1985",
      "url": "https://www.sante.gov.dz/",
      "relevance": "2018年法以前のアルジェリアの衛生法。"
    }
  ],
  "classification": {
    "system": "EU 参照4クラス分類（Class I / IIa / IIb / III）",
    "basis": "リスクベース（EU 分類モデルを参照）",
    "classes": [
      {
        "name": "Class I",
        "nameJa": "クラスI",
        "riskLevel": "低リスク",
        "description": "低リスク医療機器。",
        "examples": [
          "弾性包帯",
          "手動外科器具",
          "聴診器"
        ],
        "approvalPath": "簡易 homologation"
      },
      {
        "name": "Class IIa",
        "nameJa": "クラスIIa",
        "riskLevel": "中低リスク",
        "description": "中低リスク医療機器。",
        "examples": [
          "超音波診断装置",
          "手術用手袋",
          "歯科用充填材"
        ],
        "approvalPath": "標準 homologation"
      },
      {
        "name": "Class IIb",
        "nameJa": "クラスIIb",
        "riskLevel": "中高リスク",
        "description": "中高リスク医療機器。",
        "examples": [
          "人工呼吸器",
          "血液透析装置",
          "放射線治療装置"
        ],
        "approvalPath": "詳細 homologation"
      },
      {
        "name": "Class III",
        "nameJa": "クラスIII",
        "riskLevel": "高リスク",
        "description": "高リスク医療機器。最も厳格な審査が適用される。",
        "examples": [
          "人工心臓弁",
          "冠動脈ステント",
          "埋込み型除細動器"
        ],
        "approvalPath": "フル homologation（技術文書 + 臨床データ）"
      }
    ],
    "rules": [
      {
        "id": "EU 参照分類規則",
        "description": "LNCPP/MOH は EU の分類規則を参照して機器のクラスを決定する。",
        "url": "https://www.sante.gov.dz/"
      }
    ],
    "totalProductCodes": "要確認"
  },
  "conformityAssessment": {
    "overview": "LNCPP が技術評価を行い、MOH が homologation（型式認証）を付与する。CE マーク取得機器は審査で考慮されるが、別途アルジェリア固有の手続きが必要。",
    "routes": [
      {
        "name": "Homologation des dispositifs médicaux",
        "nameJa": "医療機器型式認証",
        "applicableClasses": [
          "全クラス"
        ],
        "description": "CE 証明書、ISO 13485 認証、CFS、技術文書、臨床データ等を提出。LNCPP が技術評価を実施し、MOH が最終認可。",
        "subtypes": [],
        "avgReviewTime": "6〜18ヶ月（クラス・製品による）",
        "fee": "要確認",
        "url": "https://www.sante.gov.dz/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "要確認",
    "url": "https://www.sante.gov.dz/",
    "description": "アルジェリアの医療機器登録申請は紙ベースが主流。電子化の進捗は限定的情報。",
    "mandatory": false
  },
  "udi": {
    "required": false,
    "system": "要確認",
    "description": "アルジェリアでは UDI 制度の法的義務化は確認されていない。",
    "url": null,
    "timeline": "要確認"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "MOH / LNCPP マテリオビジランス制度",
      "mandatory": true,
      "url": "https://www.sante.gov.dz/",
      "description": "医療機器に関連する有害事象は MOH/LNCPP に報告義務がある。"
    },
    "recalls": {
      "authority": "MOH / LNCPP",
      "description": "MOH/LNCPP がリコールを管理。製造業者・輸入業者はリコール実施時に通知義務。",
      "url": "https://www.sante.gov.dz/"
    },
    "surveillance": "MOH/LNCPP による市販後監視。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "MOH Algeria",
    "name": "Certificat de Libre Vente",
    "description": "登録済み医療機器について MOH が発行する自由販売証明書。申請時には原産国の CFS 提出が要求される。",
    "processingTime": "要確認",
    "url": "https://www.sante.gov.dz/"
  },
  "reimbursement": {
    "system": "公的医療保険（CNAS / CASNOS）+ 公立病院",
    "authority": "MOH Algeria / CNAS",
    "description": "アルジェリアの医療保険は CNAS（社会保険基金）が管轄。医療機器の償還は主に公立病院の調達予算を通じて行われる。",
    "codingSystems": [
      "要確認"
    ],
    "url": "https://www.sante.gov.dz/"
  },
  "marketingRules": {
    "authority": "MOH Algeria",
    "description": "医療機器の広告・販促は MOH の規制下にある。",
    "keyRules": [
      "登録済み機器のみ広告可",
      "ラベリングはフランス語またはアラビア語で記載",
      "虚偽・誇大広告の禁止"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "アルジェリアは MDSAP プログラムに参加していない。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "ISO 13485 認証は homologation 申請時に要求される。"
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
      "title": "医療機器規制の近代化推進",
      "description": "MOH/LNCPP は Loi n° 18-11 に基づく医療機器規制の施行細則の整備を継続。現地製造の促進と輸入依存の軽減が政策課題。"
    }
  ],
  "lastUpdated": "2026-04-02",
  "verified": null
};
