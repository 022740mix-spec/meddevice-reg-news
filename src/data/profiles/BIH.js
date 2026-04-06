// ボスニア・ヘルツェゴビナ (Bosnia and Herzegovina)
export default {
  "code": "BIH",
  "country": "ボスニア・ヘルツェゴビナ",
  "countryEn": "Bosnia and Herzegovina",
  "region": "Europe",
  "flag": "🇧🇦",
  "legalSystemOverview": {
    "type": "EU候補国（EU MDD/MDR整合・eMedDev電子申請）",
    "description": "ボスニア・ヘルツェゴビナ（BiH）ではALMBiH（国家医薬品・医療機器庁）が統一規制機関。2008年法に基づき2009年設立。CEマーキングを認識しつつALMBiH登録が必須。EU MDR/IVDRまたは旧指令のいずれに基づくかを選択可能。eMedDevシステムで2017年から電子申請義務化（地域初）。2024年にEU加盟交渉開始承認。",
    "keyCharacteristics": [
      "ALMBiH がNCA（2009年設立、国家レベル統一機関）",
      "医薬品及び医療機器に関する法律（2008年）が基本法",
      "EU MDD/MDR整合の4クラス制（Class I/IIa/IIb/III）",
      "CEマーキング認識 + ALMBiH登録必須",
      "eMedDev電子申請システム（2017年義務化、地域初）",
      "EU MDR 2017/745 または旧MDD 93/42/EEC を選択可能",
      "3公用語（ボスニア語/クロアチア語/セルビア語）でIFU",
      "2024年EU加盟交渉開始承認"
    ]
  },
  "authorities": [
    {
      "name": "ALMBiH",
      "fullName": "Agency for Medicinal Products and Medical Devices of Bosnia and Herzegovina",
      "localName": "Agencija za lijekove i medicinska sredstva Bosne i Hercegovine",
      "role": "NCA: 医療機器登録簿管理・品質/安全性/有効性確保・製造業者/卸売業者登録・マテリオビジランス・国際協力（EMAオブザーバー）",
      "url": "https://almbih.gov.ba/en/",
      "isPrimary": true
    }
  ],
  "notifiedBodies": {
    "system": "EU NB証明書を認識（国内NB体制なし）",
    "description": "CEマーキングが必須。EU公認Notified Bodyが発行したCE証明書を認識。Class I以外は全てEC適合証明書が必要。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "医薬品及び医療機器に関する法律（2008年、Official Gazette BiH No. 58/08）に基づく。EU定義と整合。",
    "scope": "IVD・AIMD（能動植込み型）も対象。",
    "notes": "BiHは2エンティティ（連邦+スルプスカ共和国）+ブルチコ地区で構成。ALMBiHが国家レベルで統一規制。"
  },
  "primaryLaw": {
    "title": "Zakon o lijekovima i medicinskim sredstvima",
    "originalTitle": "Закон о лијековима и медицинским средствима",
    "enacted": "2008",
    "lastAmended": "要確認",
    "url": "https://www.paragraf.ba/propisi/bih/zakon-o-lijekovima-i-medicinskim-sredstvima.html",
    "description": "2008年制定（Official Gazette BiH No. 58/08）。ALMBiH設立根拠。医薬品と医療機器を単一法で規制。"
  },
  "implementingRegulations": [
    {
      "title": "Pravilnik o medicinskim sredstvima（医療機器規則）",
      "date": "2012",
      "url": "https://kdzifbih.ba/wp-content/uploads/2018/02/pravilnik_o_medicinskim_sredstvima.pdf",
      "description": "医療機器の分類・基本要件を規定。",
      "category": "医療機器規則"
    },
    {
      "title": "Pravilnik o nadzoru nad medicinskim sredstvima（医療機器監視規則）",
      "date": "2023",
      "url": "https://almbih.gov.ba/wp-content/uploads/2023/09/PravilnikNDMS-bo.pdf",
      "description": "マテリオビジランス・市場監視の手続を規定。",
      "category": "監視規則"
    }
  ],
  "relatedLaws": [
    {
      "title": "Pravilnik o oglašavanju lijekova i medicinskih sredstava（広告規則）",
      "category": "広告規制",
      "enacted": "2010",
      "url": "https://almbih.gov.ba/en/",
      "relevance": "Official Gazette BiH No. 40/2010。医薬品・医療機器の広告を規制。違反: 法人EUR 10,000〜25,000。"
    }
  ],
  "classification": {
    "system": "EU整合 4クラス制",
    "basis": "EU MDD/MDRベースのリスク分類。申請時にEU MDR 2017/745または旧MDD 93/42/EECのいずれに基づくか選択。",
    "classes": [
      {
        "name": "Class I",
        "nameJa": "クラスI",
        "riskLevel": "低",
        "description": "低リスク。適合宣言書で申請可。",
        "examples": ["弾性包帯", "聴診器", "車椅子", "非滅菌手袋", "冷却パック"],
        "approvalPath": "ALMBiH登録（eMedDev）"
      },
      {
        "name": "Class IIa",
        "nameJa": "クラスIIa",
        "riskLevel": "中低",
        "description": "中低リスク。CE証明書必須。",
        "examples": ["補聴器", "超音波診断装置", "吸引カテーテル", "血圧計", "歯科用充填材"],
        "approvalPath": "ALMBiH登録（eMedDev）"
      },
      {
        "name": "Class IIb",
        "nameJa": "クラスIIb",
        "riskLevel": "中高",
        "description": "中高リスク。CE証明書必須。",
        "examples": ["人工呼吸器", "輸液ポンプ", "X線装置", "血液透析装置", "骨接合プレート"],
        "approvalPath": "ALMBiH登録（eMedDev）"
      },
      {
        "name": "Class III",
        "nameJa": "クラスIII",
        "riskLevel": "高",
        "description": "最高リスク。CE証明書必須。",
        "examples": ["人工心臓弁", "冠動脈ステント", "人工股関節", "植込み型除細動器", "吸収性縫合糸"],
        "approvalPath": "ALMBiH登録（eMedDev）"
      }
    ],
    "rules": ["EU MDD/MDRベースの分類規則"],
    "totalProductCodes": null
  },
  "conformityAssessment": {
    "overview": "eMedDevシステムで電子申請（2017年義務化）。CE証明書/適合宣言書・FSC・ISO 13485証明書・IFU（現地語版）・リスク分類宣言を提出。EU MDRまたは旧MDDの規制パスを選択。現地代理人必須。",
    "routes": [
      {
        "name": "ALMBiH Registration (eMedDev)",
        "nameJa": "ALMBiH登録（eMedDev電子申請）",
        "applicableClasses": ["Class I", "Class IIa", "Class IIb", "Class III"],
        "description": "eMedDevでオンライン登録。製造者データ・ISO証明書・製品情報（分類/CE/FSC/IFU/ラベリング）を提出。ALMBiHが段階的審査後、登録証明書発行。EU FSCは全クラス必須。",
        "subtypes": [],
        "avgReviewTime": "要確認（公式情報で裏付け未取得）",
        "avgReviewTimeSource": "https://ms.almbih.gov.ba/pages/home",
        "fee": "要確認（公式情報で裏付け未取得）",
        "feeSource": "https://almbih.gov.ba/en/",
        "url": "https://ms.almbih.gov.ba/pages/home"
      }
    ]
  },
  "electronicSubmission": {
    "system": "eMedDev（ALMBiH医療機器情報システム）",
    "url": "https://ms.almbih.gov.ba/pages/home",
    "description": "2017年1月より電子申請義務化（西バルカン地域初）。証明書アップロード・バリデーション、リアルタイムステータス追跡、変更・更新申請に対応。多言語対応（英語/ボスニア語/セルビア語/クロアチア語）。",
    "mandatory": true
  },
  "udi": {
    "required": false,
    "system": "未導入",
    "description": "BiH独自のUDI制度なし。EU MDRに基づくCE証明書を認識する範囲で間接的にUDI要件が反映。",
    "url": null,
    "timeline": "EU加盟プロセスに連動（時期未定）"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "Materiovigilance — ALMBiH",
      "mandatory": true,
      "url": "https://almbih.gov.ba/wp-content/uploads/2023/09/PravilnikNDMS-bo.pdf",
      "description": "製造者・輸入者・医療従事者は機器の不具合・ラベリングエラー・重大傷害リスクを報告義務。郵送/メール/FAXで報告。ALMBiHが調査後、安全性通知・是正措置・リコールを命じる権限。"
    },
    "recalls": {
      "authority": "ALMBiH",
      "description": "ALMBiHがリコール・是正措置を命じる権限。",
      "url": "https://almbih.gov.ba/en/"
    },
    "surveillance": "Materiovigilance制度は発展途上（2017年に専任薬剤師2名を雇用）。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "ALMBiH",
    "name": "Certificate of Free Sale",
    "description": "ALMBiHが登録済み医療機器のCFSを発行。",
    "processingTime": "要確認（公式情報で裏付け未取得）",
    "url": "https://www.almbih.gov.ba/wp-content/uploads/2025/12/ms-u_slobodnoj_prodaji17122025.pdf"
  },
  "reimbursement": {
    "system": "エンティティ/カントン別健康保険制度",
    "authority": "Zavod zdravstvenog osiguranja（各エンティティ/カントンの健康保険機関）",
    "description": "国家レベルの統一償還リストは未整備。2エンティティ（連邦: さらに10カントンに分割、スルプスカ共和国）がそれぞれ独自の健康保険を運営。雇用者・被用者の強制給与控除で資金調達。",
    "codingSystems": [],
    "url": "https://almbih.gov.ba/en/"
  },
  "marketingRules": {
    "authority": "ALMBiH",
    "description": "IFU: 原語版 + BiH公用語（ボスニア語/クロアチア語/セルビア語）翻訳が必要。広告は登録証明書保有者のみ。BiH領域内のAuthorized Representative必須。広告違反: 法人EUR 10,000〜25,000。",
    "keyRules": [
      "IFU: BiH公用語（ボスニア語/クロアチア語/セルビア語）翻訳必須",
      "現地Authorized Representative必須",
      "広告: 登録証明書保有者のみ、科学的裏付け必須",
      "広告違反: 法人EUR 10,000〜25,000"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "MDSAP非参加。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "登録要件。ISO 13485またはISO 9001証明書が必要。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "リスクマネジメント。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "明示的言及は未確認。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "明示的言及は未確認。"
    },
    "others": ["EMAオブザーバー参加、EDQM・WHO連携"]
  },
  "recentDevelopments": [
    {
      "date": "2024-07",
      "title": "EU4Health プログラム参加協定締結",
      "description": "欧州委員会とBiHがEU4Healthプログラムへの参加協定に署名。保健分野のEU資金にアクセス可能に。"
    },
    {
      "date": "2024-05",
      "title": "ALMBiH 15周年記念カンファレンス",
      "description": "EU MDR/IVDR対応・新法草案の議会提出構想を議論。"
    },
    {
      "date": "2024-03",
      "title": "EU加盟交渉開始承認",
      "description": "欧州理事会がBiHとのEU加盟交渉開始を決定。交渉枠組みは策定中。"
    },
    {
      "date": "2025-09",
      "title": "EU改革アジェンダ提出",
      "description": "BiHが欧州委員会にReform Agendaを提出。EU加盟プロセス進展の一環。"
    }
  ],
  "lastUpdated": "2026-04-03",
  "verified": null
};
