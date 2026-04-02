// チュニジア (Republic of Tunisia)
export default {
  "code": "TUN",
  "country": "チュニジア",
  "countryEn": "Republic of Tunisia",
  "region": "Middle East & Africa",
  "flag": "🇹🇳",
  "legalSystemOverview": {
    "type": "中央集権制（Centralized system）",
    "description": "チュニジアの医療機器規制は薬事・医療機器局（DPM: Direction de la Pharmacie et du Médicament）が管轄する。DPM は保健省傘下の機関であり、医薬品および医療機器の市場参入を規制する。2014年制定の Loi n° 2014-19（医療機器に関する法律）が医療機器規制の根幹法で、リスクベースの4クラス分類を採用。EU MDDの影響を強く受けた制度設計となっている。",
    "keyCharacteristics": [
      "DPM（薬事・医療機器局）による一元的な規制体制",
      "Loi n° 2014-19 に基づく医療機器固有の法規制",
      "EU MDD に準拠した4クラス分類（Class I / IIa / IIb / III）",
      "CE マーク取得機器は登録が簡素化される",
      "ローカル代理人（mandataire local）の指定が必須",
      "CFS（自由販売証明書）の提出が要求される"
    ]
  },
  "authorities": [
    {
      "name": "DPM",
      "fullName": "Direction de la Pharmacie et du Médicament",
      "localName": "الإدارة العامة للصيدلية والدواء",
      "role": "医療機器の登録・市販後監視・輸入許可・施設許可",
      "url": "http://www.santetunisie.rns.tn/",
      "isPrimary": true
    },
    {
      "name": "MOH Tunisia",
      "fullName": "Ministère de la Santé",
      "localName": "وزارة الصحة",
      "role": "保健政策全般・公立病院の管理",
      "url": "http://www.santetunisie.rns.tn/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "なし（DPM が直接審査。EU の NB 証明書を参照）",
    "description": "チュニジアには欧州型の Notified Body 制度は存在しない。DPM が申請書類を直接審査し、CE 証明書を主たるエビデンスとして登録判断を行う。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "Loi n° 2014-19 に基づき、人体に対して使用される器具・装置・機器・ソフトウェア・材料等で、疾病の診断・予防・監視・治療・軽減等を目的とし、主たる作用が薬理学的・免疫学的・代謝的手段によらないもの。",
    "scope": "体外診断用医薬品（IVD）も規制対象。",
    "notes": "定義は EU MDD/GHTF の定義に準拠。"
  },
  "primaryLaw": {
    "title": "Loi n° 2014-19 du 20 mars 2014 relative aux dispositifs médicaux",
    "originalTitle": "القانون عدد 19 لسنة 2014 المتعلق بالأجهزة الطبية",
    "enacted": "2014",
    "lastAmended": "随時改正",
    "url": "http://www.santetunisie.rns.tn/",
    "description": "チュニジアにおける医療機器規制の根幹法。医療機器の定義、分類、市場参入要件、市販後監視、違反時の罰則等を規定。"
  },
  "implementingRegulations": [
    {
      "title": "Décret gouvernemental relatif aux dispositifs médicaux（医療機器に関する政令）",
      "date": "2014以降",
      "url": "http://www.santetunisie.rns.tn/",
      "description": "Loi n° 2014-19 の施行細則。登録手続き、分類規則、技術文書要件等を規定。",
      "category": "包括規制"
    },
    {
      "title": "Arrêté du Ministre de la Santé（保健大臣令）",
      "date": "各種",
      "url": "http://www.santetunisie.rns.tn/",
      "description": "医療機器の輸入許可・施設許可・ラベリング要件等に関する省令。",
      "category": "輸入管理"
    }
  ],
  "relatedLaws": [
    {
      "title": "Loi n° 73-55 du 3 août 1973（薬事法）",
      "category": "薬事法",
      "enacted": "1973",
      "url": "http://www.santetunisie.rns.tn/",
      "relevance": "チュニジアの薬事制度の基本法。2014年法以前は医療機器もこの法律の枠組みで規制されていた。"
    }
  ],
  "classification": {
    "system": "EU MDD 準拠4クラス分類（Class I / IIa / IIb / III）",
    "basis": "リスクベース（EU MDD 分類規則を参照）",
    "classes": [
      {
        "name": "Class I",
        "nameJa": "クラスI",
        "riskLevel": "低リスク",
        "description": "低リスク医療機器。一般的制御で安全性を確保。",
        "examples": [
          "弾性包帯",
          "手動外科器具",
          "聴診器"
        ],
        "approvalPath": "自己宣言 + 登録届出"
      },
      {
        "name": "Class IIa",
        "nameJa": "クラスIIa",
        "riskLevel": "中低リスク",
        "description": "中低リスク医療機器。CE マークまたは同等の適合性証明が必要。",
        "examples": [
          "超音波診断装置",
          "手術用手袋",
          "歯科用充填材"
        ],
        "approvalPath": "DPM 登録（CE 証明書ベース）"
      },
      {
        "name": "Class IIb",
        "nameJa": "クラスIIb",
        "riskLevel": "中高リスク",
        "description": "中高リスク医療機器。より詳細な技術文書の提出が必要。",
        "examples": [
          "人工呼吸器",
          "血液透析装置",
          "放射線治療装置"
        ],
        "approvalPath": "DPM 登録（詳細審査）"
      },
      {
        "name": "Class III",
        "nameJa": "クラスIII",
        "riskLevel": "高リスク",
        "description": "高リスク医療機器。CE マーク（EC Full QA + Design Examination）等のフル適合性評価が必要。",
        "examples": [
          "人工心臓弁",
          "冠動脈ステント",
          "埋込み型除細動器"
        ],
        "approvalPath": "DPM 詳細審査"
      }
    ],
    "rules": [
      {
        "id": "EU MDD 分類規則参照",
        "description": "DPM は EU MDD（93/42/EEC）の分類規則を参照して機器のクラスを決定する。",
        "url": "http://www.santetunisie.rns.tn/"
      }
    ],
    "totalProductCodes": "要確認（DPM 独自のコード体系の公開情報なし）"
  },
  "conformityAssessment": {
    "overview": "DPM は CE マークを持つ機器に対し、書類審査ベースの登録を実施。CE マークのない機器については、同等の適合性証明を求める。",
    "routes": [
      {
        "name": "DPM Medical Device Registration",
        "nameJa": "DPM 医療機器登録",
        "applicableClasses": [
          "全クラス"
        ],
        "description": "CE 証明書、Free Sale Certificate、技術文書、ラベリング情報等を提出して登録。Class III はより詳細な審査。",
        "subtypes": [],
        "avgReviewTime": "3〜12ヶ月（クラスにより異なる）",
        "fee": "要確認（DPM 料金表は随時改定）",
        "url": "http://www.santetunisie.rns.tn/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "要確認（DPM の電子申請システムの整備状況は限定的情報）",
    "url": "http://www.santetunisie.rns.tn/",
    "description": "DPM への申請は紙ベースが主流だが、電子化の取り組みが進行中。最新の申請方法は DPM に直接確認が必要。",
    "mandatory": false
  },
  "udi": {
    "required": false,
    "system": "要確認（UDI 制度の導入状況は未確認）",
    "description": "チュニジアでは現時点で IMDRF 型の UDI 制度が法的に義務化されているとの確認情報はない。CE マーク機器は EU UDI 要件を満たしている場合がある。",
    "url": null,
    "timeline": "要確認"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "DPM マテリオビジランス（matériovigilance）制度",
      "mandatory": true,
      "url": "http://www.santetunisie.rns.tn/",
      "description": "医療機器に関連する有害事象は DPM に報告義務がある。Loi n° 2014-19 に基づくマテリオビジランス体制。"
    },
    "recalls": {
      "authority": "DPM",
      "description": "DPM はリコール・Field Safety Corrective Action（FSCA）を管理。製造業者・輸入業者はリコール実施時に DPM に通知義務。",
      "url": "http://www.santetunisie.rns.tn/"
    },
    "surveillance": "DPM による市販後監視。マテリオビジランスに基づく報告・調査体制。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "DPM",
    "name": "Certificat de Libre Vente",
    "description": "登録済み医療機器について DPM が発行する自由販売証明書。登録申請時には原産国の CFS 提出が必要。",
    "processingTime": "要確認",
    "url": "http://www.santetunisie.rns.tn/"
  },
  "reimbursement": {
    "system": "公的医療保険（CNAM）+ 民間保険",
    "authority": "CNAM / MOH Tunisia",
    "description": "チュニジアの医療保険は CNAM（Caisse Nationale d'Assurance Maladie）が管轄する公的保険制度が中心。医療機器の償還は主に公立病院の調達予算および CNAM の給付リストを通じて行われる。",
    "codingSystems": [
      "要確認"
    ],
    "url": "http://www.cnam.nat.tn/"
  },
  "marketingRules": {
    "authority": "DPM",
    "description": "医療機器の広告・販促は DPM の規制下にある。承認された適応のみの広告が原則。",
    "keyRules": [
      "登録済み機器のみ広告可",
      "ラベリングはフランス語で記載（アラビア語追加を推奨）",
      "虚偽・誇大広告の禁止"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "チュニジアは MDSAP プログラムに参加していない。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "ISO 13485 認証は CE マーク取得の前提として間接的に要求される。"
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
      "title": "Loi n° 2014-19 の施行細則の整備推進",
      "description": "DPM は2014年法の施行細則の整備を継続。分類規則の明確化と電子申請システムの導入に注力中。"
    }
  ],
  "lastUpdated": "2026-04-02",
  "verified": null
};
