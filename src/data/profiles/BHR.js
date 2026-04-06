// バーレーン (Kingdom of Bahrain)
export default {
  "code": "BHR",
  "country": "バーレーン",
  "countryEn": "Kingdom of Bahrain",
  "region": "Middle East & Africa",
  "flag": "🇧🇭",
  "legalSystemOverview": {
    "type": "中央集権制（Centralized system）",
    "description": "バーレーンの医療機器規制は国家保健規制庁（NHRA）が管轄する。2009年の法律第38号に基づき設立された NHRA は、医薬品・医療機器・医療施設の規制を一元的に担う。分類体系は EU MDR に準拠した Class I / IIa / IIb / III および IVD A-D を採用。米国 FDA、英国 MHRA、豪州 TGA 等の国際的規制機関のガイドラインを参照し、バーレーン市場に合わせてカスタマイズしている。",
    "keyCharacteristics": [
      "NHRA による一元的な規制体制",
      "EU MDR ベースの5クラス分類（Class I / IIa / IIb / III / IVD A-D）",
      "FDA・MHRA・TGA・SFDA 等の承認を参照",
      "ローカル代理人（Authorized Representative）の指定が必須",
      "登録有効期限は QAC（品質保証証明書）の有効期限に連動（1〜5年）",
      "2026年2月1日より医療機器登録が義務化"
    ]
  },
  "authorities": [
    {
      "name": "NHRA",
      "fullName": "National Health Regulatory Authority",
      "localName": "الهيئة الوطنية لتنظيم المهن والخدمات الصحية",
      "role": "医療機器の登録・市販後監視・施設許可",
      "url": "https://www.nhra.bh/",
      "isPrimary": true
    },
    {
      "name": "MOH Bahrain",
      "fullName": "Ministry of Health — Bahrain",
      "localName": "وزارة الصحة",
      "role": "医療政策全般・公立病院管理",
      "url": "https://www.moh.gov.bh/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "なし（NHRA が直接登録を審査。国際的承認文書に依拠）",
    "description": "バーレーンには Notified Body 制度は存在しない。NHRA が直接申請書類を審査する。CE マーク、FDA 認可、SFDA 承認等の国際的承認文書を主たるエビデンスとして使用。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "NHRA ガイドラインに基づき、疾病の診断・治療・予防・監視・軽減等を目的とする器具・装置・機器・ソフトウェア・材料等で、主たる作用が薬理学的・免疫学的・代謝的手段によらないもの。GHTF/IMDRF 定義に準拠。",
    "scope": "体外診断用医薬品（IVD）も規制対象。IVD は Class A〜D の独自分類。",
    "notes": "NHRA Medical Devices Registration Guideline Ver 7.0 が現行の主要ガイドライン文書。"
  },
  "primaryLaw": {
    "title": "Law No. 38 of 2009（NHRA 設立法）",
    "originalTitle": "قانون رقم 38 لسنة 2009",
    "enacted": "2009",
    "lastAmended": "随時改正",
    "url": "https://www.nhra.bh/",
    "description": "NHRA の設立、権限、組織構成を規定する基本法。医療機器を含む保健関連製品・サービスの規制権限を NHRA に付与。"
  },
  "implementingRegulations": [
    {
      "title": "NHRA Medical Devices Registration Guideline (Ver 7.0)",
      "date": null,
      "url": "https://www.nhra.bh/Departments/MDR/MediaHandler/GenericHandler/documents/departments/MDR/guidelines/MDR_Guideline_Medical%20Device%20Registration_Ver%207.0.pdf",
      "description": "医療機器の分類・登録手続き・必要書類・審査基準を包括的に規定する NHRA の主要ガイドライン。",
      "category": "登録"
    },
    {
      "title": "NHRA Medical Devices Regulation Guidelines",
      "date": null,
      "url": "https://www.nhra.bh/departments/mdr/",
      "description": "医療機器の市販後監視、ビジランス報告、施設許可等に関するガイドライン群。",
      "category": "市販後・施設"
    }
  ],
  "relatedLaws": [],
  "classification": {
    "system": "EU MDR ベースの分類（Class I / IIa / IIb / III / IVD A-D）",
    "basis": "リスクベース（EU MDR 分類規則を参照）",
    "classes": [
      {
        "name": "Class I",
        "nameJa": "クラスI",
        "riskLevel": "低リスク",
        "description": "低リスク医療機器。",
        "examples": [
          "弾性包帯",
          "聴診器",
          "手動外科器具"
        ],
        "approvalPath": "NHRA 登録（簡易書類）"
      },
      {
        "name": "Class IIa",
        "nameJa": "クラスIIa",
        "riskLevel": "低〜中リスク",
        "description": "低中リスク医療機器。",
        "examples": [
          "超音波診断装置",
          "歯科用充填材"
        ],
        "approvalPath": "NHRA 登録（標準書類 + QAC）"
      },
      {
        "name": "Class IIb",
        "nameJa": "クラスIIb",
        "riskLevel": "中〜高リスク",
        "description": "中高リスク医療機器。",
        "examples": [
          "輸液ポンプ",
          "人工呼吸器",
          "X線装置"
        ],
        "approvalPath": "NHRA 登録（詳細書類 + QAC）"
      },
      {
        "name": "Class III",
        "nameJa": "クラスIII",
        "riskLevel": "高リスク",
        "description": "高リスク医療機器。最も厳格な審査。",
        "examples": [
          "人工心臓弁",
          "冠動脈ステント",
          "埋込み型デバイス"
        ],
        "approvalPath": "NHRA 登録（詳細技術文書 + QAC + 臨床データ）"
      },
      {
        "name": "IVD A-D",
        "nameJa": "IVD クラスA〜D",
        "riskLevel": "低〜高リスク（IVD専用分類）",
        "description": "体外診断用医療機器。リスクに応じた A〜D のクラス。",
        "examples": [
          "一般臨床化学検査キット（A）",
          "血液型検査（D）"
        ],
        "approvalPath": "NHRA IVD 登録"
      }
    ],
    "rules": [
      {
        "id": "NHRA 分類ガイドライン",
        "description": "NHRA は EU MDR の分類規則を参照しつつ、独自のガイドラインで分類手順を規定。",
        "url": "https://www.nhra.bh/departments/mdr/"
      }
    ],
    "totalProductCodes": "要確認（NHRA 独自のコード体系は未公開）"
  },
  "conformityAssessment": {
    "overview": "NHRA は申請書類の審査により登録を行う。CE マーク、FDA 認可、SFDA 承認等の国際的認証を主たるエビデンスとして利用。",
    "routes": [
      {
        "name": "NHRA Medical Device Registration",
        "nameJa": "NHRA 医療機器登録",
        "applicableClasses": [
          "全クラス"
        ],
        "description": "登録フォーム、技術文書（取扱説明書・サービスマニュアル・カタログ）、ラベリング、QAC（ISO 13485 証明書、CE 証明書等）を提出。NHRA が6〜8週間で審査。",
        "subtypes": [],
        "avgReviewTime": "6〜8週間",
        "avgReviewTimeSource": "NHRA Medical Devices Registration Guideline Ver 7.0",
        "fee": "要確認（NHRA 料金表を参照）",
        "url": "https://www.nhra.bh/departments/mdr/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "NHRA オンラインポータル",
    "url": "https://www.nhra.bh/",
    "description": "NHRA はオンラインでの申請受付を実施。詳細な電子申請システムの仕様は NHRA に直接確認が必要。",
    "mandatory": false
  },
  "udi": {
    "required": false,
    "system": "要確認（UDI 制度の独自導入は未確認）",
    "description": "バーレーンでは現時点で IMDRF 型の UDI 制度が法的に義務化されているとの確認情報はない。CE マーク機器は EU UDI 要件を満たしている場合がある。",
    "url": null,
    "timeline": "要確認"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "NHRA ビジランス報告制度",
      "mandatory": true,
      "url": "https://www.nhra.bh/departments/mdr/",
      "description": "有害事象およびフィールドセーフティに関する事項は NHRA に報告義務。過去5年分のフィールドセーフティノーティス記録の提出が登録時に必要。"
    },
    "recalls": {
      "authority": "NHRA",
      "description": "NHRA がリコール・FSCA を管理。製造業者・代理人はリコール実施時に NHRA に通知義務。",
      "url": "https://www.nhra.bh/"
    },
    "surveillance": "NHRA による市販後監視。登録済み機器の詳細は2025年末までに NHRA ウェブサイトで公開予定。"
  },
  "certificateOfFreeSale": {
    "available": false,
    "issuingAuthority": "NHRA",
    "name": "要確認",
    "description": "NHRA が Free Sale Certificate を発行するかは確認が必要。登録時に申請元国の CFS 提出は必要。",
    "processingTime": "要確認",
    "url": "https://www.nhra.bh/"
  },
  "reimbursement": {
    "system": "公的医療制度（国民に対する無料医療サービス）+ 民間保険",
    "authority": "MOH Bahrain",
    "description": "バーレーン国民は公立病院で無料の医療サービスを受けられる。医療機器の調達は公立病院の調達予算を通じて行われる。独立した医療機器償還制度の公開情報は限定的。",
    "codingSystems": [
      "要確認"
    ],
    "url": "https://www.moh.gov.bh/"
  },
  "marketingRules": {
    "authority": "NHRA",
    "description": "医療機器の広告・販促は NHRA の規制下にある。登録済み機器のみの広告が原則。",
    "keyRules": [
      "NHRA 登録済み機器のみ広告・販促可",
      "虚偽・誇大広告の禁止",
      "ラベリングは英語（アラビア語の追加を推奨）"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "バーレーンは MDSAP プログラムに参加していない。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "ISO 13485 認証は QAC（品質保証証明書）として登録申請時に必要。SFDA 発行の QMS 証明書も受容。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "リスクマネジメントの国際規格として参照。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "ソフトウェア医療機器に対して間接的に参照。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "医用電気機器の安全規格として参照。"
    },
    "others": []
  },
  "recentDevelopments": [
    {
      "date": "2026-02",
      "title": "医療機器登録の義務化（2026年2月1日施行）",
      "description": "2026年2月1日より医療機器の登録が法的に義務化。これまでの自主的・段階的な登録から、全ての医療機器に登録を必須とする制度へ移行。"
    },
    {
      "date": "2025",
      "title": "登録済み医療機器データの NHRA ウェブサイト公開",
      "description": "2025年末までに、全ての承認・許可済み医療機器の登録詳細が NHRA ウェブサイトで公開。"
    },
    {
      "date": "2018",
      "title": "NHRA 医療機器規制フレームワーク設立",
      "description": "2018年に医療機器規制フレームワークを正式に確立。国際的な規制機関（FDA、MHRA、TGA）のガイドラインをバーレーン市場に適合させた。"
    }
  ],
  "lastUpdated": "2026-04-06",
  "verified": "2026-04-06"
};
