// アルジェリア (People's Democratic Republic of Algeria)
export default {
  "code": "DZA",
  "country": "アルジェリア",
  "countryEn": "People's Democratic Republic of Algeria",
  "region": "Middle East & Africa",
  "flag": "🇩🇿",
  "legalSystemOverview": {
    "type": "中央集権制（Centralized system）",
    "description": "アルジェリアの医療機器規制はANPP（Agence Nationale des Produits Pharmaceutiques / 国立医薬品局）が主管する。ANPPは産業・製薬生産省傘下の機関で、医療機器のhomologation（型式認証）・登録・品質管理を担当。Loi n° 18-11 du 2 juillet 2018（衛生法）およびExecutive Decree 23-101（2023年3月）が法的根拠。EU類似のClass I/IIa/IIb/III分類を採用。CE マークは審査で考慮されるが自動承認ではない。",
    "keyCharacteristics": [
      "ANPP（国立医薬品局）が主管当局（産業・製薬生産省傘下）",
      "Homologation（型式認証）制度",
      "EU 類似の4クラス分類（Class I / IIa / IIb / III）",
      "CE マーク取得機器は審査で考慮されるが、自動承認ではない",
      "ローカル代理人の指定が必須",
      "登録有効期間3年"
    ]
  },
  "authorities": [
    {
      "name": "ANPP",
      "fullName": "Agence Nationale des Produits Pharmaceutiques",
      "localName": "الوكالة الوطنية للمواد الصيدلانية",
      "role": "医療機器のhomologation（型式認証）・登録・品質管理・市販後監視。産業・製薬生産省傘下。",
      "url": "https://anpp.dz/",
      "isPrimary": true
    },
    {
      "name": "LNCPP",
      "fullName": "Laboratoire National de Contrôle des Produits Pharmaceutiques",
      "localName": "المخبر الوطني لمراقبة المنتجات الصيدلانية",
      "role": "医療機器の技術評価・試験・品質管理（ANPPと連携）",
      "url": "https://www.lncpp.dz/",
      "isPrimary": false
    },
    {
      "name": "Ministère de l'Industrie Pharmaceutique",
      "fullName": "Ministère de l'Industrie et de la Production Pharmaceutique",
      "localName": "وزارة الصناعة والإنتاج الصيدلاني",
      "role": "医薬品・医療機器の産業政策。ANPPの上位監督省庁。",
      "url": "https://www.sante.gov.dz/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "なし（ANPP/LNCPP が直接審査）",
    "description": "アルジェリアには Notified Body 制度は存在しない。ANPP がhomologation審査を行い、LNCPP が技術評価を担当する。",
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
    "lastAmended": null,
    "url": "https://www.sante.gov.dz/",
    "description": "アルジェリアの衛生法。JORADP No.46（2018年7月29日発行）に掲載。Article 212で医療機器を定義、Article 230でhomologation義務を規定。医薬品・医療機器を含む衛生製品の規制の法的根拠を提供。"
  },
  "implementingRegulations": [
    {
      "title": "Décret exécutif n° 23-101（Executive Decree 23-101 — 医療機器市場移行措置）",
      "date": "2023-03",
      "url": "https://www.trade.gov/market-intelligence/algeria-healthcare-new-medical-device-regulation",
      "description": "2023年3月公布。市場に流通中の医療機器について、ANPP登録なしでの販売を暫定的に許容。2024年11月までにANPPへの正式登録を義務化。",
      "category": "登録"
    },
    {
      "title": "Arrêté du 10 mai 2021 relatif au dossier d'homologation des dispositifs médicaux（2021年5月10日付homologation申請書類に関する省令）",
      "date": "2021-05-10",
      "url": "https://anpp.dz/en/regulatory-texts-relating-to-medical-devices/",
      "description": "医療機器のhomologation申請ファイルの構成を規定。行政データ、技術性能、化学・生物学的情報、製造手順、非臨床情報の5部構成。",
      "category": "登録"
    },
    {
      "title": "Arrêté relatif à l'importation des dispositifs médicaux（医療機器輸入に関する省令）",
      "date": null,
      "url": "https://anpp.dz/en/regulatory-texts-relating-to-medical-devices/",
      "description": "医療機器の輸入許可・要件を規定。輸入許可の発行は約30日。",
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
        "description": "ANPP は EU の分類規則を参照して機器のクラスを決定する。",
        "url": "https://anpp.dz/en/regulatory-texts-relating-to-medical-devices/"
      }
    ],
    "totalProductCodes": "要確認"
  },
  "conformityAssessment": {
    "overview": "ANPPがhomologation（型式認証）審査を実施し、LNCPPが技術評価を担当。CE マーク取得機器は審査で考慮されるが、別途アルジェリア固有のhomologation手続きが必要。輸入許可は約30日で発行、有効期間3年。",
    "routes": [
      {
        "name": "Homologation des dispositifs médicaux",
        "nameJa": "医療機器型式認証（ANPP）",
        "applicableClasses": [
          "全クラス"
        ],
        "description": "CE 証明書、ISO 13485 認証、CFS、技術文書、臨床データ等を提出。2021年5月10日付省令に基づき、行政データ・技術性能・化学生物学的情報・製造手順・非臨床情報の5部構成の申請ファイルを提出。ANPPが審査、LNCPPが技術評価。登録有効期間3年。予約はrdvdm.anpp.dzで受付。",
        "subtypes": [],
        "avgReviewTime": "要確認（輸入許可は約30日）",
        "avgReviewTimeSource": null,
        "fee": "要確認（クラスにより異なる。高リスクほど高額）",
        "feeSource": null,
        "url": "https://anpp.dz/en/medical-information/"
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
      "system": "ANPP / LNCPP マテリオビジランス制度",
      "mandatory": true,
      "url": "https://anpp.dz/",
      "description": "医療機器に関連する有害事象は ANPP に報告義務がある。LNCPP が技術評価を支援。"
    },
    "recalls": {
      "authority": "ANPP",
      "description": "ANPP がリコールを管理。製造業者・輸入業者はリコール実施時に通知義務。",
      "url": "https://anpp.dz/"
    },
    "surveillance": "ANPP/LNCPP による市販後監視。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "ANPP",
    "name": "Certificat de Libre Vente",
    "description": "登録済み医療機器について ANPP が発行する自由販売証明書。申請時には原産国の CFS 提出が要求される。",
    "processingTime": "要確認",
    "url": "https://www.sante.gov.dz/"
  },
  "reimbursement": {
    "system": "公的医療保険（CNAS / CASNOS）+ 公立病院",
    "authority": "CNAS / MOH Algeria",
    "description": "アルジェリアの医療保険は CNAS（社会保険基金）が管轄。医療機器の償還は主に公立病院の調達予算を通じて行われる。",
    "codingSystems": [
      "要確認"
    ],
    "url": "https://www.sante.gov.dz/"
  },
  "marketingRules": {
    "authority": "ANPP",
    "description": "医療機器の広告・販促は ANPP の規制下にある。",
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
      "notes": "ISO 13485 認証は ANPP への homologation 申請時に要求される。"
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
      "date": "2025-10",
      "title": "Arrêté N°25 — 医薬品・医療機器のシリアライゼーション義務化",
      "description": "2025年10月12日付の産業・製薬生産省令。輸入医薬品・医療機器のシリアライゼーション（トレーサビリティ）を義務化。国際基準との整合を図る。"
    },
    {
      "date": "2024-11",
      "title": "Executive Decree 23-101 に基づく登録期限到来",
      "description": "2023年3月公布のDecree 23-101で設定された移行期間が終了。市場流通中の全医療機器についてANPPへの正式登録が義務化。"
    },
    {
      "date": "2023-03",
      "title": "Executive Decree 23-101 公布",
      "description": "医療機器の市場移行措置を規定。既に市場に流通している医療機器について、ANPP登録なしでの暫定的な販売継続を許容（2024年11月まで）。"
    }
  ],
  "lastUpdated": "2026-04-06",
  "verified": "2026-04-06"
};
