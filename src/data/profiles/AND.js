// アンドラ (Andorra)
export default {
  "code": "AND",
  "country": "アンドラ",
  "countryEn": "Andorra",
  "region": "Europe",
  "flag": "🇦🇩",
  "legalSystemOverview": {
    "type": "EU非加盟・非EEA — EU関税同盟（工業製品）+ 国内法による医療機器規制",
    "description": "アンドラはEU・EEAいずれにも加盟していないが、1990年のEU-アンドラ関税同盟協定によりHS第25〜97類の工業製品（医療機器を含む）は関税・数量制限なしで流通可能。CE マーキング付き機器はアンドラ市場で受け入れられる。国内法としてはLlei general de sanitat（1989年、改正あり）が保健制度の基本法であり、医薬品・医療機器はMinisteri de Salut（保健省）が所管。2024年に署名されたEU-アンドラ連合協定（Association Agreement）が批准されれば、将来的にEU acquis のさらなる国内法化が予定されている。国内にNotified Bodyは存在せず、EU/EEA域内NBを利用。",
    "keyCharacteristics": [
      "EU非加盟・非EEA（関税同盟のみ）",
      "1990年EU-アンドラ関税同盟で工業製品が自由流通",
      "CE マーキング付き医療機器が市場で受入可",
      "Ministeri de Salut（保健省）が医療機器・医薬品を所管",
      "Llei general de sanitat（1989年）が基本保健法",
      "国内NBなし — EU/EEA域内NBのCE証明書を承認",
      "EU-アンドラ連合協定（2024年署名）批准後にEU acquis 国内法化を予定",
      "カタルーニャ語ラベリング推奨（フランス語・スペイン語も通用）"
    ]
  },
  "authorities": [
    {
      "name": "Ministeri de Salut",
      "fullName": "Ministry of Health",
      "localName": "Ministeri de Salut",
      "role": "保健政策全般の所管。医療機器・医薬品の輸入許可・市場監視・健康製品規制を担当。医薬品及び医療機器の輸入承認を管轄。",
      "url": "https://www.govern.ad/ca/ministeris-i-secretaries-d-estat/ministeri-de-salut",
      "isPrimary": true
    },
    {
      "name": "CASS",
      "fullName": "Andorran Social Security Fund",
      "localName": "Caixa Andorrana de Seguretat Social",
      "role": "社会保障制度の運営。医療費・医療機器の償還を管理。Cartera de serveis i productes de salut（CSPS）に基づく公的給付。",
      "url": "https://www.cass.ad/",
      "isPrimary": false
    },
    {
      "name": "SAAS",
      "fullName": "Andorran Health Care Service",
      "localName": "Servei Andorrà d'Atenció Sanitària",
      "role": "公的医療サービスの提供機関。Hospital Nostra Senyora de Meritxellを運営。医療機器の最終利用者として調達・使用。",
      "url": "https://saas.ad/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "国内NBなし（EU/EEA域内NBのCE証明書を承認）",
    "description": "アンドラ国内にNotified Bodyは存在しない。CE マーキングに必要な適合性評価はEU/EEA域内のNBを利用する。関税同盟により、EU域内で発行されたCE証明書を付した工業製品はアンドラで自由に流通可能。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "アンドラ国内法に医療機器（dispositiu mèdic / producte sanitari）の明示的な包括定義を定めた単独法令は確認されていない。実務上、EU関税同盟の枠組みによりEU MDR (2017/745) の定義に準拠したCEマーキング付き機器が流通。",
    "scope": "Llei general de sanitat（1989年、改正）が保健製品全般を対象とする上位法。医薬品・医療機器の輸入にはMinisteri de Salutの承認が必要。",
    "notes": "EU-アンドラ連合協定の批准後、EU MDR/IVDRの定義がアンドラ国内法に正式導入される見込み。"
  },
  "primaryLaw": {
    "title": "Llei general de sanitat, del 20 de març de 1989",
    "originalTitle": "Llei general de sanitat, del 20 de març de 1989",
    "enacted": "1989",
    "lastAmended": "2020",
    "url": "https://leslleis.com/L19890320B",
    "description": "アンドラの保健制度の基本法。公衆衛生・医療体制・医療機関規制・医薬品及び医療製品の監督枠組みを規定。Llei 1/2009およびLlei 19/2020で改正。"
  },
  "implementingRegulations": [
    {
      "title": "Decret 132/2022, del 30-3-2022 — Reglament de la Cartera de serveis i productes de salut",
      "date": "2022-03",
      "url": "https://www.cass.ad/sites/default/files/documents/Decret%20132-2022,%20del%2030-3-2022,%20pel%20qual%20s%E2%80%99aprova%20el%20Reglament%20que%20estableix%20la%20Cartera%20de%20serveis%20i%20productes%20de%20salut..pdf",
      "description": "CASS及び政府が公的に財政支援する医療サービス・製品のポートフォリオ（CSPS）を規定。医療機器・医療製品の償還対象範囲を定める。",
      "category": "償還・給付"
    },
    {
      "title": "Acord de la unió duanera CE-Andorra (Decisió 90/680/CEE)",
      "date": "1990-12",
      "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:21990A1231(02)",
      "description": "EU-アンドラ関税同盟協定。HS第25〜97類の工業製品（医療機器を含む）について関税・数量制限を撤廃。CEマーキング付き製品の自由流通の法的根拠。",
      "category": "関税同盟"
    },
    {
      "title": "Llei 1/2009, del 23 de gener, de modificació de la Llei general de sanitat",
      "date": "2009-01",
      "url": "https://www.global-regulation.com/translation/andorra/9923486/law-1-2009-of-23-january,-amending-the-general-law-of-health.html",
      "description": "Llei general de sanitat（1989年）の主要改正。保健制度の近代化、医療専門職の規制強化。",
      "category": "保健法改正"
    }
  ],
  "relatedLaws": [
    {
      "title": "Llei 29/2021, del 28 d'octubre, qualificada de protecció de dades personals (LQPD)",
      "category": "データ保護",
      "enacted": "2021",
      "url": "https://securiti.ai/andorra-personal-data-protection-law/",
      "relevance": "EU GDPR相当のアンドラ個人データ保護法。医療機器の健康データ処理に適用。Agència Andorrana de Protecció de Dades（APDA）が監督。2022年5月17日施行。"
    },
    {
      "title": "Llei 20/2017, del 27 d'octubre, de drets i deures dels usuaris i dels professionals del sistema sanitari i sobre la història clínica",
      "category": "患者権利・診療記録",
      "enacted": "2017",
      "url": "https://leslleis.com/L2017020",
      "relevance": "医療利用者・医療専門家の権利義務、および診療記録に関する法律。医療機器の臨床使用・トレーサビリティに関連。"
    },
    {
      "title": "Llei 3/2023, del 19 de gener, de recerca i innovació biomèdica",
      "category": "生物医学研究",
      "enacted": "2023",
      "url": "https://leslleis.com/L2023003",
      "relevance": "生物医学研究・イノベーションに関する法律。臨床試験・臨床研究の枠組みに関連。"
    }
  ],
  "classification": {
    "system": "EU MDR準拠（関税同盟による事実上の採用）",
    "basis": "アンドラ独自の医療機器分類体系は確認されていない。関税同盟によりCEマーキング付き機器が流通するため、実務上EU MDR Annex VIIIの4クラス制に準拠。",
    "classes": [
      {
        "name": "Class I",
        "nameJa": "クラスI",
        "riskLevel": "低",
        "description": "低リスク機器。EU MDR準拠のCEマーキング。自己宣言（Is/Im/IrはNB関与）。",
        "examples": [
          "弾性包帯",
          "聴診器",
          "歩行補助器"
        ],
        "approvalPath": "EU MDR DoC（自己宣言）+ CEマーキング"
      },
      {
        "name": "Class IIa",
        "nameJa": "クラスIIa",
        "riskLevel": "中低",
        "description": "中低リスク機器。EU域内NBによる適合性評価・CEマーキング。",
        "examples": [
          "補聴器",
          "超音波診断装置",
          "血圧計"
        ],
        "approvalPath": "EU MDR NB適合性評価 + CEマーキング"
      },
      {
        "name": "Class IIb",
        "nameJa": "クラスIIb",
        "riskLevel": "中高",
        "description": "中高リスク機器。EU域内NBによる詳細審査・CEマーキング。",
        "examples": [
          "人工呼吸器",
          "輸液ポンプ",
          "血液透析装置"
        ],
        "approvalPath": "EU MDR NB適合性評価 + CEマーキング"
      },
      {
        "name": "Class III",
        "nameJa": "クラスIII",
        "riskLevel": "高",
        "description": "最高リスク機器。EU域内NBの最も厳格な審査 + CEマーキング。",
        "examples": [
          "人工心臓弁",
          "冠動脈ステント",
          "植込み型除細動器"
        ],
        "approvalPath": "EU MDR NB適合性評価 + CEマーキング"
      }
    ],
    "rules": [
      "EU MDR Annex VIII（22ルール）に事実上準拠（関税同盟によるCEマーキング機器流通）",
      "アンドラ独自の分類規則は未確認"
    ],
    "totalProductCodes": "EU CND（European Nomenclature of Medical Devices）に準拠"
  },
  "conformityAssessment": {
    "overview": "アンドラ独自の医療機器承認プロセスは存在しない。EU-アンドラ関税同盟によりCEマーキング付き医療機器が自由に流通可能。製造業者はEU MDRに基づくCE適合性評価をEU/EEA域内のNBで実施し、CEマーキングを取得した上でアンドラ市場に上市する。特定の医療機器・医薬品の輸入にはMinisteri de Salutの承認が必要となる場合がある。",
    "routes": [
      {
        "name": "CE Marking via EU MDR (Customs Union Route)",
        "nameJa": "CEマーキング（EU MDR・関税同盟ルート）",
        "applicableClasses": ["Class I", "Class IIa", "Class IIb", "Class III"],
        "description": "EU MDR Annex IX〜XIに基づく適合性評価をEU/EEA域内NBで実施しCEマーキングを取得。関税同盟によりアンドラ市場で自由流通。アンドラ固有の追加登録は一般的に不要だが、医薬品・特定製品の輸入にはMinisteri de Salutの承認が必要な場合がある。",
        "subtypes": [
          "Annex IX: QMS + 技術文書審査",
          "Annex X: 型式検査",
          "Annex XI: 製造適合性審査"
        ],
        "avgReviewTime": "要確認（公式情報で裏付け未取得）— アンドラ固有の審査期間は確認されていない。CEマーキング取得後は関税同盟により即時流通可能。",
        "avgReviewTimeSource": "https://trade.ec.europa.eu/access-to-markets/en/content/eu-andorra-customs-union",
        "fee": "要確認（公式情報で裏付け未取得）— アンドラ固有の登録手数料は確認されていない",
        "feeSource": "https://www.govern.ad/ca/ministeris-i-secretaries-d-estat/ministeri-de-salut",
        "url": "https://trade.ec.europa.eu/access-to-markets/en/content/eu-andorra-customs-union"
      }
    ]
  },
  "electronicSubmission": {
    "system": "確認されていない",
    "url": "https://www.govern.ad/ca/tematiques/salut/tramits-i-sollicituds",
    "description": "アンドラ独自の医療機器電子登録システムは確認されていない。EUDAMEDへの登録義務はEU/EEA加盟国に限定されるため、アンドラには直接適用されない。輸入許可等の手続きはMinisteri de Salutの窓口で対応。Govern d'Andorraの電子手続きポータル（Seu Electrònica）で一部行政手続きが電子化されている。",
    "mandatory": false
  },
  "udi": {
    "required": false,
    "system": "EU UDI（事実上の準拠）",
    "description": "アンドラ独自のUDI義務は確認されていない。ただし、EU MDR準拠のCEマーキング機器にはUDI表示が付されているため、事実上UDI付き機器が流通。EU-アンドラ連合協定の批准後、EUDAMEDへの登録義務が正式に課される可能性がある。",
    "url": "https://ec.europa.eu/tools/eudamed/",
    "timeline": "連合協定批准後にEU UDI/EUDAMED義務の正式導入が見込まれる"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "Ministeri de Salut（保健省）",
      "mandatory": true,
      "url": "https://www.govern.ad/ca/tematiques/salut/tramits-i-sollicituds",
      "description": "アンドラでの医療機器に関する有害事象はMinisteri de Salutに報告。公式な医療機器ビジランスシステムの詳細は公開情報で確認されていないが、Llei general de sanitatに基づき保健当局への報告義務がある。"
    },
    "recalls": {
      "authority": "Ministeri de Salut",
      "description": "CEマーキング機器のリコール・安全是正措置（FSCA/FSN）はEU域内のシステムに準拠。アンドラ市場で問題が発生した場合はMinisteri de Salutが対応。",
      "url": "https://www.govern.ad/salut"
    },
    "surveillance": "市場監視はMinisteri de Salutが所管。EU関税同盟の枠組みにより、EU域内のリコール・安全性情報がアンドラにも波及。"
  },
  "certificateOfFreeSale": {
    "available": false,
    "issuingAuthority": "該当なし",
    "name": "該当なし",
    "description": "アンドラは医療機器の製造国ではなく、アンドラ当局が発行する医療機器のCertificate of Free Sale（CFS）は確認されていない。",
    "processingTime": "該当なし",
    "url": "https://www.govern.ad/ca/ministeris-i-secretaries-d-estat/ministeri-de-salut/convenis-i-normativa"
  },
  "reimbursement": {
    "system": "CASS（Caixa Andorrana de Seguretat Social）共同負担制度",
    "authority": "CASS / Ministeri de Salut",
    "description": "アンドラの社会保障制度はCASSが運営。外来医療費の75%、入院費の90%をCASSが償還。労働災害・出産は100%カバー。Decret 132/2022でCartera de serveis i productes de salut（CSPS）が規定され、公的に財政支援される医療サービス・製品の範囲が定められている。医療機器の償還は使用場面（外来・入院）により償還率が異なる。",
    "codingSystems": [
      "CSPS（Cartera de serveis i productes de salut）"
    ],
    "url": "https://www.cass.ad/sites/default/files/documents/Decret%20132-2022,%20del%2030-3-2022,%20pel%20qual%20s%E2%80%99aprova%20el%20Reglament%20que%20estableix%20la%20Cartera%20de%20serveis%20i%20productes%20de%20salut..pdf"
  },
  "marketingRules": {
    "authority": "Ministeri de Salut",
    "description": "アンドラの公用語はカタルーニャ語。ラベリング・IFUはカタルーニャ語が推奨されるが、フランス語・スペイン語も広く通用する。CEマーキング付き機器はEU域内のラベリング要件（該当言語）を満たしていれば流通可能。医療機器広告は保健法規に基づき規制。",
    "keyRules": [
      "公用語はカタルーニャ語（フランス語・スペイン語も通用）",
      "CEマーキング付き機器のEU準拠ラベリングで流通可能",
      "医療機器広告はMinisteri de Salutの監督下"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "アンドラはMDSAPに参加していない。MDSAPの正式参加国は5カ国のみ（USA/CAN/AUS/BRA/JPN）。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "CEマーキング機器の流通により事実上受入。EN ISO 13485:2016。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "CEマーキング機器の流通により事実上受入。EN ISO 14971:2019+A11:2021。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "CEマーキング機器の流通により事実上受入。EN IEC 62304:2006+A1:2015。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "CEマーキング機器の流通により事実上受入。EN IEC 60601シリーズ。"
    },
    "others": [
      "ISO 10993（生体適合性）",
      "IEC 62366-1（ユーザビリティ）"
    ]
  },
  "recentDevelopments": [
    {
      "date": "2024-05",
      "title": "EU-アンドラ連合協定の法的テキスト最終化",
      "description": "2024年5月7日、ブリュッセルでEU-アンドラ連合協定（Association Agreement）の法的テキスト案が最終化されたことが共同記者会見で発表。批准後はEU acquis（医療機器規制を含む）のアンドラ国内法化が進む見込み。"
    },
    {
      "date": "2022-03",
      "title": "Decret 132/2022 — Cartera de serveis i productes de salut 承認",
      "description": "2022年3月30日、Cartera de serveis i productes de salut（CSPS）の規則が承認。CASSおよび政府が公的に財政支援する医療サービス・製品のポートフォリオを規定。"
    },
    {
      "date": "2021-10",
      "title": "Llei 29/2021 — 個人データ保護法（LQPD）制定",
      "description": "EU GDPR相当のデータ保護法（LQPD）が2021年10月28日に制定。2022年5月17日施行。健康データを含む個人データの処理規制。"
    }
  ],
  "lastUpdated": "2026-04-06",
  "verified": null
};
