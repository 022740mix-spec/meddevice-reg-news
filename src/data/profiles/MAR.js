// モロッコ (Morocco)
export default {
  "code": "MAR",
  "country": "モロッコ",
  "countryEn": "Morocco",
  "region": "Middle East & Africa",
  "flag": "🇲🇦",
  "legalSystemOverview": {
    "type": "中央集権制（Centralized system）",
    "description": "モロッコの医療機器規制はDMP（Direction du Médicament et de la Pharmacie）が管轄してきたが、2024年にAMMPS（Agence Marocaine des Médicaments et des Produits de Santé）が設立・稼働を開始し、規制機能の移管が進行中。2025年6月にはSGG（政府事務総局）から産業施設許可権限もAMMPSに移管された。Loi 84-12（医療機器に関する法律、2013年公布）が根拠法。EU MDD/MDRに準拠した4クラス分類（Class I/IIa/IIb/III）を採用し、CE認証やFDA認証を広く認知・参照する規制アプローチ。",
    "keyCharacteristics": [
      "DMP → AMMPS への規制当局移行が進行中（AMMPSは2024年稼働開始）",
      "EU MDD準拠のリスクベース4クラス分類（Class I/IIa/IIb/III）",
      "Loi 84-12が医療機器の基本法",
      "CE認証・FDA認証を広く認知・参照",
      "フランス語圏の規制伝統を踏襲",
      "北アフリカ・フランコフォン圏における規制ハブを目指す"
    ]
  },
  "authorities": [
    {
      "name": "AMMPS",
      "fullName": "Agence Marocaine des Médicaments et des Produits de Santé",
      "localName": "الوكالة المغربية للأدوية والمنتجات الصحية",
      "role": "医療機器・医薬品の登録・市販後監視・査察。DMPの機能を継承した独立規制機関（Loi 10-22に基づき設立）。2024年稼働開始。",
      "url": "https://ammps.sante.gov.ma",
      "isPrimary": true
    },
    {
      "name": "DMP（旧）",
      "fullName": "Direction du Médicament et de la Pharmacie",
      "localName": "مديرية الأدوية والصيدلة",
      "role": "AMMPSの前身。機能はAMMPSに移管中。",
      "url": "https://www.sante.gov.ma/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "なし（DMP/AMMPS が直接審査。CE認証を広く認知）",
    "description": "モロッコではNotified Body制度は存在しないが、EU認定Notified BodyのCE証明書を広く認知・参照する。DMP/AMMPSが登録審査を実施。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "Loi 84-12に定義。疾病の診断・治療・予防・監視・軽減等を目的とする機器・装置・器具・材料・ソフトウェア等で、主たる意図する作用が薬理学的・免疫学的・代謝的手段によらないもの。EU MDDの定義に準拠。",
    "scope": "IVD（体外診断用医療機器）も適用対象。医療機器全般を規制。",
    "notes": "フランス語圏の規制伝統を踏まえ、EU MDDの定義を基盤としている。EU MDRへの移行は検討段階。"
  },
  "primaryLaw": {
    "title": "Loi 84-12 relative aux dispositifs médicaux",
    "originalTitle": "القانون رقم 84-12 المتعلق بالأجهزة الطبية",
    "enacted": "2013",
    "lastAmended": null,
    "url": "https://www.sante.gov.ma/",
    "description": "医療機器に関する基本法。Bulletin Officiel No. 6188（2013年9月19日発行）に掲載。医療機器の定義・分類・登録・市販後監視・広告規制等を規定。施行令（Décret n° 2-14-607、2014年9月公布、BO 6292 bis掲載）により詳細が補完される。"
  },
  "implementingRegulations": [
    {
      "title": "Décrets d'application de la Loi 84-12",
      "date": null,
      "url": "https://www.sante.gov.ma/",
      "description": "Loi 84-12の施行令。医療機器の分類・登録手続・品質管理・市販後監視等の詳細を規定。段階的に公布中。",
      "category": "医療機器"
    }
  ],
  "relatedLaws": [
    {
      "title": "Loi 09-08 relative à la protection des données personnelles",
      "category": "データ保護",
      "enacted": "2009",
      "url": "https://www.cndp.ma/",
      "relevance": "個人データ保護法。コネクテッドデバイス・SaMDが取り扱う個人医療情報のプライバシー要件に適用。"
    }
  ],
  "classification": {
    "system": "4クラス制（Class I/IIa/IIb/III）— EU MDD準拠",
    "basis": "リスクベース（EU MDD分類ルールに準拠）。意図する用途・侵襲性・使用期間・エネルギー源等に基づく。",
    "classes": [
      {
        "name": "Class I",
        "nameJa": "クラスI",
        "riskLevel": "低",
        "description": "低リスク機器。DMP/AMMPS登録が必要。",
        "examples": [
          "弾性包帯",
          "聴診器",
          "舌圧子",
          "車椅子",
          "歩行補助器具"
        ],
        "approvalPath": "DMP/AMMPS登録"
      },
      {
        "name": "Class IIa",
        "nameJa": "クラスIIa",
        "riskLevel": "中低",
        "description": "中低リスク機器。DMP/AMMPS登録が必要。CE認証があれば審査が円滑化。",
        "examples": [
          "血圧計",
          "補聴器",
          "超音波診断装置",
          "歯科用材料",
          "輸液セット"
        ],
        "approvalPath": "DMP/AMMPS登録（CE認証参照）"
      },
      {
        "name": "Class IIb",
        "nameJa": "クラスIIb",
        "riskLevel": "中高",
        "description": "中高リスク機器。DMP/AMMPS登録＋臨床評価が必要。CE/FDA認証を広く認知。",
        "examples": [
          "人工呼吸器",
          "透析装置",
          "外科用レーザー",
          "輸液ポンプ",
          "コンタクトレンズ"
        ],
        "approvalPath": "DMP/AMMPS登録＋臨床評価（CE/FDA認証参照）"
      },
      {
        "name": "Class III",
        "nameJa": "クラスIII",
        "riskLevel": "高",
        "description": "最高リスク機器。最も厳格な審査。CE/FDA認証を広く認知。",
        "examples": [
          "人工心臓弁",
          "冠動脈ステント",
          "埋込み型除細動器",
          "薬剤溶出ステント",
          "人工関節"
        ],
        "approvalPath": "DMP/AMMPS登録＋臨床データ（CE/FDA認証参照）"
      }
    ],
    "rules": [
      "EU MDD分類ルールに準拠",
      "Loi 84-12の施行令に詳細規定",
      "IVDは別途分類ルール適用",
      "EU MDRへの分類ルール移行は検討段階"
    ],
    "totalProductCodes": "GMDN（Global Medical Device Nomenclature）を参照"
  },
  "conformityAssessment": {
    "overview": "全クラスの医療機器にDMP/AMMPS登録が必要。CE認証やFDA認証を保有する製品は審査が円滑化される。EU認定Notified Bodyが発行したCE証明書やFDA 510(k)/PMAクリアランスを広く認知・参照。",
    "routes": [
      {
        "name": "DMP/AMMPS Standard Registration",
        "nameJa": "DMP/AMMPS標準登録",
        "applicableClasses": [
          "Class I",
          "Class IIa",
          "Class IIb",
          "Class III"
        ],
        "description": "標準的な登録審査。技術文書・臨床評価・品質管理文書・CFS等を提出。CE/FDA認証があれば審査が円滑化される。",
        "subtypes": [],
        "avgReviewTime": "要確認",
        "avgReviewTimeSource": null,
        "fee": "要確認",
        "feeSource": null,
        "url": "https://www.sante.gov.ma/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "DMP/AMMPS ポータル（整備中）",
    "url": "https://www.sante.gov.ma/",
    "description": "電子申請システムはAMMPS移行に伴い整備中。現行は紙ベースとオンラインの併用。",
    "mandatory": false
  },
  "udi": {
    "required": false,
    "system": "未導入（検討段階）",
    "description": "モロッコではUDI制度は現時点で未導入。EU MDRへの整合に伴い、将来的な導入が検討される可能性。",
    "url": null,
    "timeline": "未定"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "DMP/AMMPS有害事象報告制度（マテリオビジランス）",
      "mandatory": true,
      "url": "https://www.sante.gov.ma/",
      "description": "Loi 84-12に基づくマテリオビジランス制度。製造業者・輸入業者・医療従事者は有害事象をDMP/AMMPSに報告する義務がある。"
    },
    "recalls": {
      "authority": "DMP/AMMPS",
      "description": "DMP/AMMPSがリコールを監督。安全性に関する問題が発見された場合、市場からの回収を命令可能。",
      "url": "https://www.sante.gov.ma/"
    },
    "surveillance": "Loi 84-12に基づく市販後監視要件。マテリオビジランス報告の提出義務が規定。AMMPS移行に伴い体制強化を予定。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "輸出国の規制当局",
    "name": "Certificate of Free Sale (CFS)",
    "description": "DMP/AMMPS登録申請時に、原産国の規制当局が発行するCFSの提出が必要。CE認証書も重要な参照書類。",
    "processingTime": "輸出国側の手続きによる",
    "url": "https://www.sante.gov.ma/"
  },
  "reimbursement": {
    "system": "AMO（Assurance Maladie Obligatoire）+ RAMED + 民間保険",
    "authority": "ANAM（Agence Nationale de l'Assurance Maladie）",
    "description": "AMO（強制医療保険）が公的医療保険を提供。RAMED（低所得者向け医療扶助制度）も存在。医療機器に特化した体系的な償還制度は限定的。",
    "codingSystems": [],
    "url": null
  },
  "marketingRules": {
    "authority": "DMP/AMMPS",
    "description": "Loi 84-12に基づき、医療機器の広告・マーケティングに関する規制が存在。未登録機器の広告は禁止。",
    "keyRules": [
      "未登録医療機器の広告は禁止",
      "虚偽・誇大な効能表示の禁止",
      "広告にはDMP/AMMPSの事前承認が必要な場合がある"
    ]
  },
  "mdsap": {
    "status": "非参加（Non-participant）",
    "description": "モロッコはMDSAPに参加していない。MDSAP監査報告書はDMP/AMMPSの規制要件を代替しない。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "ISO 13485認証の取得が推奨される。CE認証の前提条件でもあり、登録審査で重視。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "リスクマネジメント。技術文書のリスク評価に適用。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "ソフトウェアライフサイクル。SaMD申請に参照。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "医用電気機器の安全・性能要求。"
    },
    "others": []
  },
  "recentDevelopments": [
    {
      "date": "2025-06",
      "title": "AMMPS が産業施設許可権限をSGGから移管",
      "description": "2025年6月16日より、AMMPSが産業製薬施設・卸売流通業者の許可権限をSGG（政府事務総局）から引き継ぎ。規制機能の一元化が進展。"
    },
    {
      "date": "2024",
      "title": "AMMPS（Agence Marocaine des Médicaments et des Produits de Santé）稼働開始",
      "description": "Loi 10-22に基づき設立されたAMMPSが稼働開始。DMPから機能を移管し、医薬品・医療機器の規制を独立した公的機関として一元的に担う。"
    },
    {
      "date": "2013",
      "title": "Loi 84-12の公布",
      "description": "医療機器に関する包括的な法律であるLoi 84-12が公布（BO 6188、2013年9月19日）。4クラス分類・登録制度・市販後監視等の法的枠組みを確立。"
    }
  ],
  "lastUpdated": "2026-04-06",
  "verified": "2026-04-06"
};
