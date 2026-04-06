// セルビア (Serbia)
export default {
  "code": "SRB",
  "country": "セルビア",
  "countryEn": "Serbia",
  "region": "Europe",
  "flag": "🇷🇸",
  "legalSystemOverview": {
    "type": "EU候補国（独自法制 + EU MDD整合）",
    "description": "セルビアはEU候補国（2012年〜）。2017年医療機器法（Zakon o medicinskim sredstvima）がEU旧指令（MDD 93/42/EEC等）に整合。ALIMSがNCA。CE適合性証明書（EC Certificate）に基づく登録が主要ルート。EU MDR 2017/745への完全移行はEU加盟プロセスの一環で進行中。Class I機器は既にMDR準拠を要求。",
    "keyCharacteristics": [
      "EU候補国（2012年〜）— EU MDR完全移行は未完了",
      "Zakon o medicinskim sredstvima (2017) が基本法",
      "ALIMS がNCA（登録・ビジランス・市場監視）",
      "EC Certificate（EU NB発行）に基づく登録が主要ルート",
      "国内Designated Body制度あり（ATS認定）",
      "ePortal による電子申請義務化（2018年12月〜）",
      "セルビア語ラベリング必須（専門家向けは英語可）",
      "登録有効期間: EC証明書有効期限+60日（Class I等は5年）"
    ]
  },
  "authorities": [
    {
      "name": "ALIMS",
      "fullName": "Medicines and Medical Devices Agency of Serbia",
      "localName": "Agencija za lekove i medicinska sredstva Srbije",
      "role": "NCA: 医療機器登録簿管理・適合性評価監督・ビジランス・市場監視・臨床試験承認",
      "url": "https://www.alims.gov.rs/english/medical-devices/registration-in-the-register-of-medical-devices/",
      "isPrimary": true
    },
    {
      "name": "ATS",
      "fullName": "Accreditation Body of Serbia",
      "localName": "Akreditaciono telo Srbije",
      "role": "国内Designated Body（指定機関）・Authorized Body（認定機関）の認定",
      "url": "https://www.ats.rs/en/",
      "isPrimary": false
    },
    {
      "name": "RFZO",
      "fullName": "Republic Fund for Health Insurance",
      "localName": "Republički fond za zdravstveno osiguranje",
      "role": "公的健康保険・医療機器調達・償還管理",
      "url": "https://eng.rfzo.rs/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "国内Designated Body制度（ATS認定）+ EU NB EC証明書認容",
    "description": "セルビアはEU非加盟のためEU Notified Bodyは存在しない。ATS認定の国内Designated Bodyが適合性評価を実施可能。実務上はEU NBのEC証明書に基づく登録が主流。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "2017年医療機器法第2条に定義。EU MDD 93/42/EECの定義と整合。器具・装置・機器・ソフトウェア・材料等で、人体への主たる作用が薬理学的・免疫学的・代謝的手段によらないもの。",
    "scope": "IVDはList A/List B/Self-Testing/Othersに区分。AIMDも対象。",
    "notes": "2017年法で医薬品・医療機器法から医療機器部分を分離独立。"
  },
  "primaryLaw": {
    "title": "Zakon o medicinskim sredstvima",
    "originalTitle": "Закон о медицинским средствима",
    "enacted": "2017",
    "lastAmended": "2017",
    "url": "https://pravno-informacioni-sistem.rs/SlGlasnikPortal/eli/rep/sgrs/skupstina/zakon/2017/105/1/reg",
    "description": "2017年11月22日国会採択、12月1日施行（2018年12月1日全面適用）。医療機器の製造・市場投入・適合性評価・臨床試験・ビジランス・市場監視を規定。EU MDD/AIMDD/IVDDに整合。"
  },
  "implementingRegulations": [
    {
      "title": "Rulebook on Market Surveillance of Medical Devices",
      "date": "2018",
      "url": "https://www.alims.gov.rs/english/medical-devices/registration-in-the-register-of-medical-devices/",
      "description": "医療機器の市場監視手続を規定。",
      "category": "市場監視"
    },
    {
      "title": "Rulebook on Vigilance (Official Gazette No. 3/2019)",
      "date": "2019-01",
      "url": "https://www.alims.gov.rs/english/medical-devices/medical-devices-vigilance/",
      "description": "ビジランス報告義務・手続を規定。",
      "category": "ビジランス"
    },
    {
      "title": "Rulebook on Labelling and Contents of IFU (Official Gazette No. 4/2019)",
      "date": "2019-01",
      "url": "https://www.alims.gov.rs/english/",
      "description": "ラベリング・添付文書の内容要件。セルビア語必須。",
      "category": "ラベリング"
    }
  ],
  "relatedLaws": [
    {
      "title": "Zakon o zdravstvenoj zaštiti（医療保護法）",
      "category": "医療制度",
      "enacted": "2019",
      "url": "https://pravno-informacioni-sistem.rs/SlGlasnikPortal/eli/rep/sgrs/skupstina/zakon/2017/105/1/reg",
      "relevance": "公的医療制度・RFZO の法的基盤。"
    }
  ],
  "classification": {
    "system": "EU MDD整合 4クラス制 + IVDカテゴリ",
    "basis": "EU MDD 93/42/EEC Annex IXに整合した分類規則。Class I機器はEU MDR 2017/745準拠を既に要求。",
    "classes": [
      {
        "name": "Class I",
        "nameJa": "クラスI",
        "riskLevel": "低",
        "description": "低リスク。非滅菌・非計測のClass Iは製造者自己宣言。EU MDR 2017/745準拠が必要。",
        "examples": ["弾性包帯", "聴診器", "車椅子", "手動手術器具", "病院用ベッド"],
        "approvalPath": "自己宣言（DoC）"
      },
      {
        "name": "Class IIa",
        "nameJa": "クラスIIa",
        "riskLevel": "中低",
        "description": "中低リスク。NB/Designated Body関与。",
        "examples": ["補聴器", "超音波診断装置", "吸引カテーテル", "血圧計", "歯科用充填材"],
        "approvalPath": "NB/Designated Body適合性評価"
      },
      {
        "name": "Class IIb",
        "nameJa": "クラスIIb",
        "riskLevel": "中高",
        "description": "中高リスク。NB/Designated Body詳細審査。",
        "examples": ["人工呼吸器", "輸液ポンプ", "X線装置", "血液透析装置", "骨接合プレート"],
        "approvalPath": "NB/Designated Body適合性評価"
      },
      {
        "name": "Class III",
        "nameJa": "クラスIII",
        "riskLevel": "高",
        "description": "最高リスク。NB/Designated Body最も厳格な審査。",
        "examples": ["人工心臓弁", "冠動脈ステント", "人工股関節", "植込み型除細動器", "吸収性縫合糸"],
        "approvalPath": "NB/Designated Body適合性評価"
      }
    ],
    "rules": [
      "EU MDD Annex IX整合の分類規則",
      "Class I機器はEU MDR 2017/745準拠を要求"
    ],
    "totalProductCodes": null
  },
  "conformityAssessment": {
    "overview": "2つのルート: (1) EU NBのEC証明書に基づく登録（主要ルート）、(2) 国内Designated Bodyによる適合性評価。登録処理期間は82営業日（適合性評価期間除く）。登録有効期間はEC証明書有効期限+60日（Class I等は5年）。",
    "routes": [
      {
        "name": "EU EC Certificate Route",
        "nameJa": "EU EC証明書ルート",
        "applicableClasses": ["Class I", "Class IIa", "Class IIb", "Class III"],
        "description": "EU NBが発行したEC Certificate of Conformityを提出しALIMSに登録。主要ルート。旧指令証明書: Class III/植込みIIbは2027年末、その他は2028年末まで有効。",
        "subtypes": [],
        "avgReviewTime": "ALIMS登録処理: 82営業日",
        "avgReviewTimeSource": "https://www.alims.gov.rs/english/medical-devices/registration-in-the-register-of-medical-devices/",
        "fee": "要確認（公式情報で裏付け未取得）",
        "feeSource": "https://www.alims.gov.rs/english/wp-content/uploads/2022/01/Zakon-o-medicinskim-sredstvima_ENG_-22-05-18.pdf",
        "url": "https://www.alims.gov.rs/english/medical-devices/registration-in-the-register-of-medical-devices/"
      },
      {
        "name": "National Designated Body Route",
        "nameJa": "国内指定機関ルート",
        "applicableClasses": ["Class I", "Class IIa", "Class IIb", "Class III"],
        "description": "ATS認定のDesignated Bodyによる国内適合性評価。実務上は限定的。",
        "subtypes": [],
        "avgReviewTime": "要確認（公式情報で裏付け未取得）",
        "avgReviewTimeSource": "https://www.ats.rs/en/",
        "fee": "要確認（公式情報で裏付け未取得）",
        "feeSource": "https://www.ats.rs/en/",
        "url": "https://www.alims.gov.rs/english/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "ALIMS ePortal",
    "url": "https://www.alims.gov.rs/english/medical-devices/registration-in-the-register-of-medical-devices/",
    "description": "2018年12月2日より医療機器登録申請はePortalによる電子提出が義務化。Form 1 + 添付書類 + 手数料支払い証明で提出。ビジランス用にePortal MS（2022年6月〜）も稼働。",
    "mandatory": true
  },
  "udi": {
    "required": false,
    "system": "未実装",
    "description": "現行2017年法にはUDIに関する具体的規定なし。EU非加盟のためEU MDR UDI制度は直接適用されない。EU加盟交渉の進展に伴い将来的に導入見込み。",
    "url": null,
    "timeline": "EU加盟プロセスに連動（時期未定）"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "ALIMS ビジランスシステム",
      "mandatory": true,
      "url": "https://www.alims.gov.rs/english/medical-devices/medical-devices-vigilance/",
      "description": "Rulebook on Vigilance (2019) に基づく。医療機関（ビジランスコーディネーター経由）・医療従事者・製造者が報告義務。ePortal MSまたはフォーム/メール（hygia@alims.gov.rs）で報告。FSCAは直ちにALIMSに報告。"
    },
    "recalls": {
      "authority": "ALIMS",
      "description": "FSCA/FSNをALIMSに通知。製造者はビジランス・市場監視の責任者を配置し継続監視義務。",
      "url": "https://www.alims.gov.rs/english/medical-devices/medical-devices-vigilance/"
    },
    "surveillance": "Rulebook on Market Surveillance (2018) に基づく。製造者はPMSR/PSUR提出義務。ALIMSが市場監視を実施。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "ALIMS（セルビア製造機器の場合）",
    "name": "Certificate of Free Sale",
    "description": "セルビア国内で登録済みの機器についてALIMSがCFSを発行。セルビアへの輸入時はEU加盟国のCAが発行するFSCの提出が求められる。",
    "processingTime": "要確認（公式情報で裏付け未取得）",
    "url": "https://www.alims.gov.rs/english/"
  },
  "reimbursement": {
    "system": "公的健康保険（RFZO）+ 公的調達",
    "authority": "RFZO (Republički fond za zdravstveno osiguranje)",
    "description": "医薬品はPositive List制度。医療機器は公的医療機関の調達予算を通じた間接的な償還が主。高額医療機器は公的入札。医療機器専用のポジティブリストの公式情報は限定的。",
    "codingSystems": [],
    "url": "https://eng.rfzo.rs/"
  },
  "marketingRules": {
    "authority": "ALIMS",
    "description": "患者独立使用機器: セルビア語ラベリング必須。外国語パッケージにはセルビア語ステッカー貼付。専門家使用機器: セルビア語または英語。IFU: セルビア語で記載。",
    "keyRules": [
      "患者使用機器: セルビア語ラベリング必須",
      "専門家使用機器: セルビア語または英語",
      "IFU: セルビア語必須",
      "外国語パッケージ: セルビア語ステッカー貼付"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "MDSAP非参加。EU候補国。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "ISO 13485 受入。適合性評価で使用。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "ISO 14971 受入。リスクマネジメント。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "IEC 62304 受入。ソフトウェアライフサイクル。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "IEC 60601シリーズ受入。電気医療機器安全。"
    },
    "others": []
  },
  "recentDevelopments": [
    {
      "date": "2025-01",
      "title": "EC証明書移行措置更新",
      "description": "旧指令（MDD/AIMDD）に基づくEC証明書の有効期限延長: Class III/植込みIIbは2027年末、その他は2028年末まで。Class I機器はEU MDR準拠を要求。"
    },
    {
      "date": "2024-12",
      "title": "臨床試験規則改正",
      "description": "主任研究者の事前経験要件を撤廃。民間医療機関での全相臨床試験実施を許可（従前はPhase II-IIIのみ）。"
    },
    {
      "date": "2024-12",
      "title": "EU加盟交渉 — Cluster 3ベンチマーク達成",
      "description": "Chapter 10/16/19のベンチマーク達成。ただしコソボ問題・法の支配が障害となりチャプター開設は延期。"
    },
    {
      "date": "2023-03",
      "title": "EU MDR 2017/745ベースのEC証明書承認開始",
      "description": "ALIMSがEU MDR 2017/745に基づく外国EC証明書の承認に関する新要件を実施。"
    }
  ],
  "lastUpdated": "2026-04-03",
  "verified": null
};
