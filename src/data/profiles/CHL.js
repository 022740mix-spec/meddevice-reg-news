// チリ (Chile)
export default {
  "code": "CHL",
  "country": "チリ",
  "countryEn": "Chile",
  "region": "Latam",
  "flag": "🇨🇱",
  "legalSystemOverview": {
    "type": "中央集権制（Centralized system）— 段階的規制導入型",
    "description": "チリの医療機器規制はISP（Instituto de Salud Pública de Chile）のANDID（Agencia Nacional de Dispositivos Médicos, Innovación y Desarrollo）が管轄する。Código Sanitario（衛生法典）および Decreto 825/98 が法的基盤だが、規制は段階的に導入されており、全医療機器が強制登録の対象ではない点が特徴。保健省（Ministerio de Salud）が個別のDecreto Supremo（最高政令）で対象製品カテゴリを順次指定し、ISPが適合性検証・認証を実施。4クラス分類（Class I / II / III / IV）を採用。IVDはリスクClass A〜Dに分類。",
    "keyCharacteristics": [
      "ISP / ANDID による一元的規制",
      "段階的規制導入: 保健省のDecreto Supremoで対象カテゴリを順次指定",
      "リスクベースの4クラス分類（Class I / II / III / IV）",
      "IVDは別途4クラス（Class A / B / C / D）",
      "現時点で全医療機器の強制登録義務はなく、指定カテゴリのみ適合性検証が必要",
      "Código Sanitario（衛生法典）改正（Ley de Fármacos II）が議会審議中で、全面的規制強化が予想される"
    ]
  },
  "authorities": [
    {
      "name": "ISP / ANDID",
      "fullName": "Instituto de Salud Pública de Chile — Agencia Nacional de Dispositivos Médicos, Innovación y Desarrollo",
      "localName": "Instituto de Salud Pública de Chile — Agencia Nacional de Dispositivos Médicos, Innovación y Desarrollo",
      "role": "医療機器の適合性検証・認証・登録・市販後監視・ビジランス。主管当局。",
      "url": "https://www.ispch.gob.cl/andid/",
      "isPrimary": true
    },
    {
      "name": "MinSalud",
      "fullName": "Ministerio de Salud de Chile",
      "localName": "Ministerio de Salud",
      "role": "保健政策の策定・Decreto Supremo（規制対象カテゴリ指定）の発出",
      "url": "https://www.minsal.cl/",
      "isPrimary": false
    },
    {
      "name": "FONASA",
      "fullName": "Fondo Nacional de Salud",
      "localName": "Fondo Nacional de Salud",
      "role": "公的健康保険制度の管理・償還管理",
      "url": "https://www.fonasa.cl/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "なし（ISP/ANDID が直接適合性検証・認証を実施）",
    "description": "チリでは欧州型のNotified Body制度は存在しない。ISP/ANDIDが直接、適合性検証（Verificación de Conformidad）および認証を実施する。国際品質認証（CE/FDA等）は参考資料として評価されるが、自動的な承認にはならない。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "Código Sanitario（Libro VII）および Decreto 825/98 に定義。疾病の診断・治療・予防・監視・軽減等を目的とする機器・装置・器具・材料・ソフトウェア等。",
    "scope": "IVD（体外診断用医療機器）も適用範囲に含まれる。",
    "notes": "段階的規制のため、全製品カテゴリが同時に規制対象とはならない。保健省のDecreto Supremoで対象指定されたカテゴリのみ強制適合性検証の対象。"
  },
  "primaryLaw": {
    "title": "Código Sanitario — Libro VII: De los productos farmacéuticos y dispositivos médicos",
    "originalTitle": "Código Sanitario (DFL N° 725/1967)",
    "enacted": "1967",
    "lastAmended": "2014（Ley 20.724 による改正）",
    "url": "https://www.bcn.cl/leychile/navegar?idNorma=1058373",
    "description": "チリの衛生法典。医薬品・医療機器の規制の法的基盤。Libro VII が医療機器を規定。Ley 20.724（2014年）による改正で医療機器規制の強化が図られた。Ley de Fármacos II（衛生法典の更なる改正）が議会で審議中。"
  },
  "implementingRegulations": [
    {
      "title": "Decreto Supremo 825/98 — Reglamento del control de productos y elementos de uso médico",
      "date": "1998",
      "url": "https://www.ispch.gob.cl/regulaciones/",
      "description": "医療用製品・機器の管理に関する施行規則。分類体系・適合性検証手続・製造施設要件を規定。",
      "category": "施行規則"
    },
    {
      "title": "Decreto Exento 5/2025 — 免疫血液学的試薬の衛生管理体制への編入",
      "date": "2025-02-21",
      "url": "https://www.ispch.gob.cl/andid/",
      "description": "免疫血液学的試薬をCódigo Sanitario Art. 111の衛生管理体制に編入。NCh-ISO 16142/2:2021準拠の適合性検証・認証を義務化。2026年2月22日施行。",
      "category": "IVD規制"
    },
    {
      "title": "Decreto Exento 25/2026 — 高リスク医療機器・IVDの衛生管理体制への追加編入",
      "date": "2026-03-19",
      "url": "https://www.ispch.gob.cl/andid/",
      "description": "追加の高リスク医療機器・IVDカテゴリを衛生管理体制に編入。規制対象の段階的拡大。",
      "category": "規制対象拡大"
    }
  ],
  "relatedLaws": [
    {
      "title": "Ley 20.724 de 2014 — Modificación del Código Sanitario",
      "category": "法改正",
      "enacted": "2014",
      "url": "https://www.bcn.cl/leychile/navegar?idNorma=1058373",
      "relevance": "衛生法典の改正法。医療機器規制の強化・ISPの権限明確化。"
    },
    {
      "title": "Ley 19.628 — Ley sobre Protección de la Vida Privada",
      "category": "データ保護",
      "enacted": "1999",
      "url": "https://www.bcn.cl/leychile/navegar?idNorma=141599",
      "relevance": "個人情報保護法。コネクテッドデバイス・SaMDが取り扱う個人医療情報に適用。"
    }
  ],
  "classification": {
    "system": "4クラス制（Class I / II / III / IV）",
    "basis": "リスクベース分類。意図する用途・侵襲性・使用期間・エネルギー源等に基づく。IVDは別途リスクClass A〜Dに分類。Decreto 825/98 に規定。",
    "classes": [
      {
        "name": "Class I",
        "nameJa": "クラスI",
        "riskLevel": "極低",
        "description": "極低リスクの非侵襲的機器。",
        "examples": [
          "弾性包帯",
          "聴診器",
          "車椅子",
          "舌圧子",
          "松葉杖"
        ],
        "approvalPath": "適合性検証（指定カテゴリのみ）"
      },
      {
        "name": "Class II",
        "nameJa": "クラスII",
        "riskLevel": "中",
        "description": "中リスク機器。",
        "examples": [
          "超音波診断装置",
          "補聴器",
          "歯科用材料",
          "血圧計",
          "注射針"
        ],
        "approvalPath": "適合性検証（指定カテゴリのみ）"
      },
      {
        "name": "Class III",
        "nameJa": "クラスIII",
        "riskLevel": "高",
        "description": "高リスク機器。",
        "examples": [
          "人工呼吸器",
          "輸液ポンプ",
          "透析装置",
          "冠動脈ステント",
          "コンタクトレンズ"
        ],
        "approvalPath": "適合性検証・認証（指定カテゴリ）"
      },
      {
        "name": "Class IV",
        "nameJa": "クラスIV",
        "riskLevel": "最高",
        "description": "最高リスク機器。最も厳格な適合性検証・認証。",
        "examples": [
          "人工心臓弁",
          "埋込み型除細動器",
          "薬剤溶出ステント",
          "脳深部刺激装置",
          "人工内耳"
        ],
        "approvalPath": "適合性検証・認証（指定カテゴリ）"
      }
    ],
    "rules": [
      "リスクベース分類（Class I〜IV）",
      "IVDは別途リスクClass A〜Dに分類",
      "保健省のDecreto Supremoで対象カテゴリが順次指定される段階的規制",
      "現時点で強制認証対象は限定的（避妊具・手袋・注射針・注射器等）"
    ],
    "totalProductCodes": "GMDN（Global Medical Device Nomenclature）を参照"
  },
  "conformityAssessment": {
    "overview": "チリの医療機器規制は段階的導入型であり、保健省のDecreto Supremoで指定されたカテゴリの製品のみISP/ANDIDへの適合性検証（Verificación de Conformidad）・認証が強制される。指定カテゴリ外の医療機器は規制上のフリーマーケットとなっている。登録フォームはANDID-001。審査期間は約75営業日。NCh-ISO 16142に準拠した安全性・性能の Essential Principles 評価が中心。",
    "routes": [
      {
        "name": "Verificación de Conformidad y Certificación",
        "nameJa": "適合性検証・認証",
        "applicableClasses": [
          "指定カテゴリのClass I〜IV"
        ],
        "description": "保健省が指定した製品カテゴリに対し、ISP/ANDIDが適合性検証を実施。ANDID-001フォームおよび技術文書・法的文書を提出。NCh-ISO 16142準拠の安全性・性能評価。初回ロット性能評価を含む場合あり。",
        "subtypes": [
          {
            "name": "新規認証",
            "description": "初回の適合性検証・認証申請。"
          },
          {
            "name": "変更報告",
            "description": "設計・製造工程・原材料・ラベリング等の変更時にISPに報告。"
          }
        ],
        "avgReviewTime": "約75営業日",
        "avgReviewTimeSource": "https://omcmedical.com/chile-medical-device-registration/",
        "fee": "約 USD 350（公式申請手数料）",
        "feeSource": "https://omcmedical.com/chile-medical-device-registration/",
        "url": "https://www.ispch.gob.cl/andid/registro-y-autorizacion/registro/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "ISP/ANDID オンライン申請",
    "url": "https://www.ispch.gob.cl/andid/registro-y-autorizacion/registro/",
    "description": "適合性検証申請はISP/ANDIDの窓口および電子システム経由で提出。ANDID-001フォームに技術文書・法的文書を添付。",
    "mandatory": true
  },
  "udi": {
    "required": false,
    "system": "未導入（チリ独自のUDI制度は未確立）",
    "description": "2026年4月時点で、チリ独自の包括的UDI制度は正式に導入されていない。ただしISPはIMDRF（国際医療機器規制当局フォーラム）のUDI作業グループに参加しており、将来的な導入が見込まれる。",
    "url": "https://www.ispch.gob.cl/andid/",
    "timeline": "未定（IMDRF参加を通じた検討段階）"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "ISP/ANDID ビジランス報告",
      "mandatory": true,
      "url": "https://www.ispch.gob.cl/andid/",
      "description": "製造業者・輸入業者・医療従事者が有害事象をISP/ANDIDに報告する義務を負う。設計・製造工程・意図する用途・原材料・ラベリング・性能の変更もISPへの報告が必要。"
    },
    "recalls": {
      "authority": "ISP / ANDID",
      "description": "ISP/ANDIDがリコール・FSCA（Field Safety Corrective Action）を監督。市場からの製品回収を命令する権限を有する。",
      "url": "https://www.ispch.gob.cl/andid/"
    },
    "surveillance": "ISP/ANDIDが市販後監視を実施。有害事象報告の監視・安全性情報の評価・是正措置の監督を担う。企業は製品発売後の性能モニタリングと有害事象報告が義務。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "輸出国の規制当局（ISP/ANDID申請時に提出が推奨）",
    "name": "Certificate of Free Sale (CFS)",
    "description": "ISP/ANDID への適合性検証申請時に、原産国の規制当局が発行するCFSの提出が推奨される。必須要件かは製品カテゴリにより異なる。",
    "processingTime": "輸出国側の手続きによる",
    "url": "https://www.ispch.gob.cl/andid/"
  },
  "reimbursement": {
    "system": "公的保険（FONASA）と民間保険（ISAPRE）の混合制度",
    "authority": "FONASA / ISAPRE / MinSalud",
    "description": "チリの医療保険は公的FONASA（Fondo Nacional de Salud）と民間ISAPRE（Instituciones de Salud Previsional）の二本立て。FONASA加入者は公的・民間医療施設の両方にアクセス可能（FONASA提携施設の場合は3段階の料金体系）。ISAPREは各社が独自の償還率・自己負担率を設定。医療機器の個別償還制度は医薬品ほど体系化されておらず、施設調達・保険契約に依存する部分が大きい。",
    "codingSystems": [
      "要確認（チリ固有の医療機器償還コード体系は未確認）"
    ],
    "url": "https://www.fonasa.cl/"
  },
  "marketingRules": {
    "authority": "ISP / ANDID",
    "description": "指定カテゴリの医療機器はISP/ANDIDの認証なしに販売・流通することは禁止。ラベリングはスペイン語が必須。",
    "keyRules": [
      "指定カテゴリの医療機器はISP/ANDID認証なしの販売・流通禁止",
      "ラベリング・使用説明書はスペイン語必須",
      "ISPへの適合性検証なしの市場投入は衛生法典違反",
      "製品変更時はISPへの報告・再評価が必要"
    ]
  },
  "mdsap": {
    "status": "非参加（Not participating）",
    "description": "チリはMDSAPの正式参加国・オブザーバー・アフィリエイトメンバーのいずれにも該当しない（2026年4月時点）。ただしISPはIMDRF（国際医療機器規制当局フォーラム）のメンバーであり、国際規制調和に積極的に参加。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "ISO 13485認証はQMS適合の証拠として受容。適合性検証申請時の提出が推奨。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "リスクマネジメント。技術文書のリスク評価に適用。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "ソフトウェアライフサイクル。SaMD申請に適用。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "医用電気機器の安全・性能要求。"
    },
    "others": [
      {
        "name": "NCh-ISO 16142/2:2021（Essential Principles of Safety and Performance — IVD）",
        "notes": "IVD医療機器の安全性・性能に関する Essential Principles。チリ国家規格として採用。"
      },
      {
        "name": "ISO 10993シリーズ（生物学的安全性評価）",
        "notes": "生体接触医療機器の生物学的安全性評価に適用。"
      }
    ]
  },
  "recentDevelopments": [
    {
      "date": "2026-03",
      "title": "Decreto Exento 25/2026 — 高リスク医療機器・IVDの追加編入",
      "description": "2026年3月19日に官報公布。追加の高リスク医療機器・IVDカテゴリを衛生管理体制に編入。規制対象の段階的拡大が加速。"
    },
    {
      "date": "2025-02",
      "title": "Decreto Exento 5/2025 — 免疫血液学的試薬の規制対象化",
      "description": "2025年2月21日に官報公布。免疫血液学的試薬を衛生管理体制に編入。2026年2月22日施行。NCh-ISO 16142/2:2021準拠の適合性検証・認証を義務化。"
    },
    {
      "date": "2025",
      "title": "Ley de Fármacos II（衛生法典改正案）審議中",
      "description": "衛生法典（Código Sanitario）の大規模改正案が議会で審議中。全医療機器の登録義務化・規制強化が予想される。成立すればチリの医療機器規制が根本的に変革される見込み。"
    },
    {
      "date": "2023",
      "title": "ANDID設立",
      "description": "ISP内にANDID（Agencia Nacional de Dispositivos Médicos, Innovación y Desarrollo）を設立。医療機器規制の専門機関として体制強化。"
    }
  ],
  "lastUpdated": "2026-04-02",
  "verified": null
};
