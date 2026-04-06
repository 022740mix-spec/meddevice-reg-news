// アンゴラ (Angola)
export default {
  "code": "AGO",
  "country": "アンゴラ",
  "countryEn": "Angola",
  "region": "Middle East & Africa",
  "flag": "🇦🇴",
  "legalSystemOverview": {
    "type": "発展途上（ARMED設立2021年・医療機器専用規則は未整備）",
    "description": "アンゴラではARMED（医薬品・医療技術規制庁、2021年設立）が医療機器を管轄。医薬品登録規則（DP 315/20）は制定済みだが、医療機器固有の登録規則は発展途上。CE証明書・FDA承認があれば審査促進。SIREMA（電子登録システム）が2024年にローンチ。2027年までにWHO ML3達成を目標。",
    "keyCharacteristics": [
      "ARMED（2021年設立）がNCA",
      "DP 136/21（ARMED設立令）が組織法",
      "医療機器固有の登録規則は未整備（医薬品規則が参照）",
      "CE証明書・FDA承認で審査促進",
      "SIREMA電子登録システム（2024年ローンチ、主に医薬品）",
      "ポルトガル語ラベリング必須",
      "現地代理人（Local Authorized Representative）必須",
      "2027年 WHO ML3達成目標"
    ]
  },
  "authorities": [
    {
      "name": "ARMED",
      "fullName": "Regulatory Agency for Medicines and Health Technologies",
      "localName": "Agência Reguladora de Medicamentos e Tecnologias de Saúde",
      "role": "NCA: 医薬品・医療技術の規制・基準策定・ライセンス・監視・品質管理。旧DNME（国家医薬品・機器局）を廃止・吸収。",
      "url": "https://lex.ao/docs/presidente-da-republica/2021/decreto-presidencial-n-o-136-21-de-01-de-junho/",
      "isPrimary": true
    }
  ],
  "notifiedBodies": {
    "system": "政府直接審査（NB制度なし）",
    "description": "ARMEDが直接審査。CE証明書・FDA承認があれば審査促進。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "ARMEDの管轄範囲に「tecnologias de saúde」（医療技術）として含まれる。医療機器の独立した法的定義は限定的。",
    "scope": "医療機器・IVDが対象。",
    "notes": "DP 315/20（医薬品登録規則）は医薬品専用。医療機器向けの包括的登録規則は発展途上。"
  },
  "primaryLaw": {
    "title": "Decreto Presidencial n.º 136/21 de 01 de junho",
    "originalTitle": "Estatuto Orgânico da Agência Reguladora de Medicamentos e Tecnologias de Saúde",
    "enacted": "2021",
    "lastAmended": "2021",
    "url": "https://lex.ao/docs/presidente-da-republica/2021/decreto-presidencial-n-o-136-21-de-01-de-junho/",
    "description": "ARMED設立・組織規程。医薬品・医療技術の規制権限をARMEDに付与。旧DNMEを廃止。"
  },
  "implementingRegulations": [
    {
      "title": "Decreto Presidencial n.º 315/20 de 17 de dezembro",
      "date": "2020-12",
      "url": "https://lex.ao/docs/presidente-da-republica/2020/decreto-presidencial-n-o-315-20-de-17-de-dezembro/",
      "description": "医薬品登録規則。医療機器は明示的対象外だが、実務上参照される。",
      "category": "医薬品登録規則"
    },
    {
      "title": "Decreto Presidencial n.º 253/21 de 14 de outubro",
      "date": "2021-10",
      "url": "https://lex.ao/docs/presidente-da-republica/2021/decreto-presidencial-n-o-253-21-de-14-de-outubro/",
      "description": "ファーマコビジランス規則。国家ファーマコビジランスシステムを規定。",
      "category": "ファーマコビジランス"
    },
    {
      "title": "Decreto Executivo Conjunto n.º 1/25 de 14 de janeiro",
      "date": "2025-01",
      "url": "https://lex.ao/docs/ministerios-das-financas-e-da-saude/2025/decreto-executivo-conjunto-n-o-1-25-de-14-de-janeiro/",
      "description": "ARMED手数料・報酬の法的枠組み。",
      "category": "手数料"
    }
  ],
  "relatedLaws": [],
  "classification": {
    "system": "4クラス制（Class I/IIa/IIb/III）— 公式法令での裏付け未確認",
    "basis": "AMDF（African Medical Devices Forum）ガイドラインおよび国際モデルに準拠（業界情報）。公式法令での分類規則は未確認。",
    "classes": [
      {
        "name": "Class I",
        "nameJa": "クラスI（参考）",
        "riskLevel": "低",
        "description": "低リスク。",
        "examples": ["弾性包帯", "聴診器", "車椅子", "舌圧子", "非滅菌手袋"],
        "approvalPath": "ARMED登録"
      },
      {
        "name": "Class IIa",
        "nameJa": "クラスIIa（参考）",
        "riskLevel": "中低",
        "description": "中低リスク。",
        "examples": ["補聴器", "血圧計", "手術用手袋", "注射器", "カテーテル"],
        "approvalPath": "ARMED登録"
      },
      {
        "name": "Class IIb",
        "nameJa": "クラスIIb（参考）",
        "riskLevel": "中高",
        "description": "中高リスク。",
        "examples": ["人工呼吸器", "輸液ポンプ", "血液透析装置", "X線装置", "骨接合プレート"],
        "approvalPath": "ARMED登録"
      },
      {
        "name": "Class III",
        "nameJa": "クラスIII（参考）",
        "riskLevel": "高",
        "description": "最高リスク。",
        "examples": ["人工心臓弁", "冠動脈ステント", "人工股関節", "植込み型除細動器", "吸収性縫合糸"],
        "approvalPath": "ARMED登録"
      }
    ],
    "rules": ["AMDF/国際モデルに準拠（公式法令での裏付け未確認）"],
    "totalProductCodes": null
  },
  "conformityAssessment": {
    "overview": "ARMEDによる登録制度。現地代理人必須。CFS（アンゴラ領事認証付き）・ISO 13485証明書・ポルトガル語IFU・リスクマネジメントファイルを提出。CE証明書/FDA承認があれば審査促進。医療機器固有の詳細手続は発展途上。",
    "routes": [
      {
        "name": "ARMED Registration",
        "nameJa": "ARMED登録",
        "applicableClasses": ["Class I", "Class IIa", "Class IIb", "Class III"],
        "description": "現地代理人指定→製品分類→技術文書（ポルトガル語）作成→ARMED提出→審査→Medical Device License発行→輸入許可取得。CFS（アンゴラ領事認証）・ISO 13485・CE/FDA証明書（あれば促進）を提出。",
        "subtypes": [],
        "avgReviewTime": "要確認（公式情報で裏付け未取得）",
        "avgReviewTimeSource": "https://www.trade.gov/country-commercial-guides/angola-healthcare",
        "fee": "要確認（DEC 1/25で枠組み制定、具体額未確認）",
        "feeSource": "https://lex.ao/docs/ministerios-das-financas-e-da-saude/2025/decreto-executivo-conjunto-n-o-1-25-de-14-de-janeiro/",
        "url": "https://www.trade.gov/country-commercial-guides/angola-healthcare"
      }
    ]
  },
  "electronicSubmission": {
    "system": "SIREMA (Sistema de Registo de Medicamentos de Angola)",
    "url": "https://www.armed.gov.ao/",
    "description": "2024年6月28日公式ローンチ。医薬品登録プロセスのデジタル化・自動化。現時点では医薬品が主対象、医療機器への適用範囲は未確認。",
    "mandatory": false
  },
  "udi": {
    "required": false,
    "system": "未導入",
    "description": "UDI制度は未導入。",
    "url": null,
    "timeline": "未定"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "ファーマコビジランス — ARMED",
      "mandatory": true,
      "url": "https://lex.ao/docs/presidente-da-republica/2021/decreto-presidencial-n-o-253-21-de-14-de-outubro/",
      "description": "DP 253/21に基づく国家ファーマコビジランスシステム。有害事象報告が義務。ARMEDがサプライチェーン全体のトレーサビリティも監督。"
    },
    "recalls": {
      "authority": "ARMED",
      "description": "ARMEDが安全性問題の調査・是正措置を実施。",
      "url": "https://www.armed.gov.ao/"
    },
    "surveillance": "DP 253/21に基づくファーマコビジランス制度。医療機器特有のPMS制度は発展途上。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "ARMED（推定）",
    "name": "Certificado de Livre Venda",
    "description": "輸入登録時にアンゴラ領事認証済みの原産国CFSが必須。アンゴラからのCFS発行はARMEDが担当と推定。",
    "processingTime": "要確認（公式情報で裏付け未取得）",
    "url": "https://www.armed.gov.ao/"
  },
  "reimbursement": {
    "system": "公的医療保険制度なし",
    "authority": "Ministério da Saúde",
    "description": "体系的な公的医療保険制度は未整備。プライマリケアは全市民に無料。医療機器固有の償還スキームは確認できず。Central de Compras de Medicamentos（中央医薬品購入機関）が公的調達を実施。",
    "codingSystems": [],
    "url": "https://www.trade.gov/country-commercial-guides/angola-healthcare"
  },
  "marketingRules": {
    "authority": "ARMED",
    "description": "ポルトガル語ラベリング・IFU必須。消費者向け情報リーフレットもポルトガル語。全技術文書はポルトガル語で作成。",
    "keyRules": [
      "ポルトガル語ラベリング・IFU必須",
      "全技術文書: ポルトガル語",
      "現地代理人（Local Authorized Representative）必須",
      "CFS: アンゴラ領事認証必須"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "MDSAP非参加。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "登録要件としてISO 13485証明書またはQMS証拠を要求。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "リスクマネジメントファイルが登録要件。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "明示的言及は未確認。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "明示的言及は未確認。"
    },
    "others": [
      "CE証明書・FDA承認で審査促進",
      "ISO 9001準拠証明書も輸入時に受入"
    ]
  },
  "recentDevelopments": [
    {
      "date": "2025-06",
      "title": "ARMED戦略会議・IDP更新（WHO/EU支援）",
      "description": "WHO/EU支援のもとARMED戦略会議開催。Institutional Development Plan (IDP) を2027年まで更新。WHO ML3達成を目標。"
    },
    {
      "date": "2025-01",
      "title": "ARMED手数料制度の法的枠組み制定",
      "description": "DEC 1/25。財務省・保健省の共同令でARMED手数料・報酬の法的枠組みを制定。"
    },
    {
      "date": "2024-06",
      "title": "SIREMA電子登録システムローンチ",
      "description": "医薬品登録プロセスのデジタル化・自動化。医療機器への拡大見込み。"
    }
  ],
  "lastUpdated": "2026-04-03",
  "verified": null
};
