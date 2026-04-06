// チュニジア (Republic of Tunisia)
export default {
  "code": "TUN",
  "country": "チュニジア",
  "countryEn": "Republic of Tunisia",
  "region": "Middle East & Africa",
  "flag": "🇹🇳",
  "legalSystemOverview": {
    "type": "中央集権制（Centralized system）",
    "description": "チュニジアの医療機器規制はDPM（Direction de la Pharmacie et du Médicament）が管轄する。DPMは保健省傘下の機関であり、医薬品および医療機器の市場参入を規制する。Loi n° 2014-19（医療機器に関する法律）が医療機器規制の根幹法。公式な医療機器分類制度は存在せず、輸入品は商務省の技術検査によりカテゴリA/B/Cに分類される。CE マーク取得機器は登録が簡素化される。",
    "keyCharacteristics": [
      "DPM（Direction de la Pharmacie et du Médicament）による一元的な規制体制",
      "Loi n° 2014-19 に基づく医療機器固有の法規制",
      "公式な分類制度なし（商務省がA/B/Cカテゴリに分類）",
      "CE マーク取得機器は登録が簡素化される",
      "ローカル代理人（mandataire local）の指定が必須",
      "登録有効期間5年、輸入許可1年"
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
    "lastAmended": null,
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
    "system": "公式分類制度なし（商務省による技術検査カテゴリ A/B/C）",
    "basis": "商務省の技術検査基準による輸入カテゴリ分類。リスクベースの医療機器固有の分類制度は未整備。",
    "classes": [
      {
        "name": "Category A",
        "nameJa": "カテゴリA",
        "riskLevel": "低リスク",
        "description": "低リスクの輸入医療機器。商務省の技術検査で分類。",
        "examples": [
          "弾性包帯",
          "手動外科器具",
          "聴診器"
        ],
        "approvalPath": "DPM 登録"
      },
      {
        "name": "Category B",
        "nameJa": "カテゴリB",
        "riskLevel": "中リスク",
        "description": "中リスクの輸入医療機器。",
        "examples": [
          "超音波診断装置",
          "手術用手袋",
          "歯科用充填材"
        ],
        "approvalPath": "DPM 登録"
      },
      {
        "name": "Category C",
        "nameJa": "カテゴリC",
        "riskLevel": "高リスク",
        "description": "高リスクの輸入医療機器。より厳格な検査。",
        "examples": [
          "人工心臓弁",
          "冠動脈ステント",
          "埋込み型除細動器"
        ],
        "approvalPath": "DPM 登録（詳細審査）"
      }
    ],
    "rules": [
      {
        "id": "商務省技術検査基準",
        "description": "輸入医療機器は商務省の技術検査によりカテゴリA/B/Cに分類される。医療機器固有のリスクベース分類制度（EU MDD型等）は現時点で未整備。",
        "url": "http://www.santetunisie.rns.tn/"
      }
    ],
    "totalProductCodes": "要確認"
  },
  "conformityAssessment": {
    "overview": "DPM は全医療機器に対し登録（AMC: Autorisation de Mise sur le marché / Commercialisation）を要求。CE マークを持つ機器は審査が簡素化される。登録有効期間は5年、輸入許可は1年。",
    "routes": [
      {
        "name": "DPM Marketing Authorization (AMC)",
        "nameJa": "DPM 販売許可（AMC）",
        "applicableClasses": [
          "Category A",
          "Category B",
          "Category C"
        ],
        "description": "DPM のウェブサイト（dpm.tn）で予約後、登録申請書類一式を提出。専門医療委員会および国立医薬品管理研究所による評価を経て、技術委員会が審査。承認後、手数料を支払い許可証を取得。CE マーク取得機器は審査が円滑化。登録有効期間5年（更新可）。輸入許可は1年（更新可）。",
        "subtypes": [],
        "avgReviewTime": "約30日（書類完備の場合）",
        "avgReviewTimeSource": "https://www.wikiprocedure.com/index.php/Tunisia_-_Registration_of_Medical_Device_or_In_Vitro_Devices_(IVDs)",
        "fee": "要確認",
        "feeSource": null,
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
      "title": "DPM による医療機器登録制度の運用強化",
      "description": "DPM は医療機器登録制度の運用を継続。dpm.tn ポータル経由の予約制申請システムを運用中。リスクベース分類制度（EU MDD型）の正式導入は引き続き検討段階。"
    },
    {
      "date": "2014",
      "title": "Loi n° 2014-19 の制定",
      "description": "医療機器に関する包括的法律を制定。医療機器の定義・市場参入要件・市販後監視・違反時の罰則等を規定。"
    }
  ],
  "lastUpdated": "2026-04-06",
  "verified": "2026-04-06"
};
