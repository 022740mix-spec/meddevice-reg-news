// ペルー (Republic of Peru)
export default {
  "code": "PER",
  "country": "ペルー",
  "countryEn": "Republic of Peru",
  "region": "Latam",
  "flag": "🇵🇪",
  "legalSystemOverview": {
    "type": "中央集権制（Centralized system）",
    "description": "ペルーの医療機器規制は保健省（MINSA）傘下の DIGEMID（Dirección General de Medicamentos, Insumos y Drogas）が管轄する。2009年の法律第29459号（Ley de los Productos Farmacéuticos, Dispositivos Médicos y Productos Sanitarios）が主たる規制根拠。EU/GHTF の分類原則を参照した4クラス分類（Class I〜IV）を採用。全ての医療機器は Registro Sanitario（衛生登録）の取得が必要。",
    "keyCharacteristics": [
      "DIGEMID による一元的な規制体制",
      "リスクベースの4クラス分類（Class I / II / III / IV）",
      "Registro Sanitario（衛生登録）が市販の前提条件",
      "ローカル登録保有者（Titular de Registro Sanitario）の指定が必須",
      "参照国（18カ国）の CFS/CFG が重要な審査資料",
      "テクノビジランス（Tecnovigilancia）による市販後監視"
    ]
  },
  "authorities": [
    {
      "name": "DIGEMID",
      "fullName": "Dirección General de Medicamentos, Insumos y Drogas",
      "localName": "Dirección General de Medicamentos, Insumos y Drogas",
      "role": "医療機器の衛生登録・市販後監視・テクノビジランス",
      "url": "https://www.digemid.minsa.gob.pe/",
      "isPrimary": true
    },
    {
      "name": "MINSA",
      "fullName": "Ministerio de Salud del Perú",
      "localName": "Ministerio de Salud",
      "role": "医療政策全般・上位監督",
      "url": "https://www.minsa.gob.pe/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "なし（DIGEMID が直接審査）",
    "description": "ペルーには欧州型の Notified Body 制度は存在しない。DIGEMID が直接、衛生登録の申請書類を審査する。参照国の規制当局承認・CFS が重要な審査資料。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "法律第29459号に基づき、疾病の診断・治療・予防・監視・軽減等を目的とする器具・装置・機器・ソフトウェア・材料等で、主たる作用が薬理学的・免疫学的・代謝的手段によらないもの。",
    "scope": "体外診断用医薬品（IVD）も規制対象。IVD は同一の分類体系（Class I〜IV）に従う。",
    "notes": "GMDN/UMDN コードによる国際命名法（スペイン語表記）の適用が必要。"
  },
  "primaryLaw": {
    "title": "Ley N° 29459 — Ley de los Productos Farmacéuticos, Dispositivos Médicos y Productos Sanitarios",
    "originalTitle": "Ley N° 29459",
    "enacted": "2009",
    "lastAmended": "2024（DS N° 020-2024-SA による施行規則改正）",
    "url": "https://www.digemid.minsa.gob.pe/normas-legales/2009/11/ID=3640/ley-n-29459",
    "description": "ペルーにおける医薬品・医療機器・衛生製品規制の根幹法。DIGEMID の権限、衛生登録制度、分類、市販後監視等を規定。衛生登録の有効期間は5年間。"
  },
  "implementingRegulations": [
    {
      "title": "Decreto Supremo N° 016-2011-SA（衛生登録・管理・監視規則）",
      "date": "2011",
      "url": "https://www.digemid.minsa.gob.pe/webDigemid/normas-legales/2011/decreto-supremo-no-016-2011-sa/",
      "description": "医薬品・医療機器・衛生製品の登録・管理・衛生監視に関する規則。分類規則・登録手続き・必要書類を詳細に規定。DS N° 016-2013-SA で一部改正。",
      "category": "包括規制"
    },
    {
      "title": "Decreto Supremo N° 020-2024-SA（Ley 29459施行規則の適合化・更新）",
      "date": "2024",
      "url": "https://www.digemid.minsa.gob.pe/webDigemid/normas-legales/2024/decreto-supremo-n-020-2024-sa/",
      "description": "Ley N° 29459の施行規則を適合化・更新。登録要件・手続きの現代化。",
      "category": "施行規則改正"
    },
    {
      "title": "Decreto Supremo N° 014-2011-SA（医薬品施設規則）",
      "date": "2011",
      "url": "https://www.gob.pe/institucion/minsa/normas-legales/243289-014-2011-sa",
      "description": "医薬品施設に関する規則。医療機器の流通・保管に関する施設要件を含む。",
      "category": "施設規制"
    }
  ],
  "relatedLaws": [
    {
      "title": "Ley N° 26842 — Ley General de Salud",
      "category": "一般保健法",
      "enacted": "1997",
      "url": "https://www.gob.pe/institucion/congreso-de-la-republica/normas-legales/2813393-26842",
      "relevance": "ペルーの保健制度全般を規定する基本法。医療機器を含む保健製品の規制の上位法的根拠。"
    }
  ],
  "classification": {
    "system": "4クラス分類（Class I / II / III / IV）",
    "basis": "リスクベース（EU/GHTF 分類規則を参照）",
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
        "approvalPath": "衛生登録（審査目標: 60暦日）"
      },
      {
        "name": "Class II",
        "nameJa": "クラスII",
        "riskLevel": "中リスク",
        "description": "中リスク医療機器。製造段階での特別制御が必要。",
        "examples": [
          "超音波診断装置",
          "輸液ポンプ",
          "歯科用充填材"
        ],
        "approvalPath": "衛生登録（審査目標: 90暦日）"
      },
      {
        "name": "Class III",
        "nameJa": "クラスIII",
        "riskLevel": "高リスク",
        "description": "高リスク医療機器。詳細な技術文書・臨床データが必要。",
        "examples": [
          "人工呼吸器",
          "透析器",
          "整形外科用インプラント"
        ],
        "approvalPath": "衛生登録（審査目標: 120暦日）"
      },
      {
        "name": "Class IV",
        "nameJa": "クラスIV",
        "riskLevel": "最高リスク（クリティカル）",
        "description": "最高リスク医療機器。最も厳格な審査。生命維持・生命支持機器等。",
        "examples": [
          "人工心臓弁",
          "冠動脈ステント",
          "埋込み型除細動器"
        ],
        "approvalPath": "衛生登録（審査目標: 120暦日）"
      }
    ],
    "rules": [
      {
        "id": "EU/GHTF 参照分類規則",
        "description": "EU MDR および GHTF の分類規則を参照。意図する用途・侵襲性・使用期間・エネルギー源等に基づくルールベースの分類。",
        "url": "https://www.digemid.minsa.gob.pe/"
      }
    ],
    "totalProductCodes": "GMDN/UMDN コードを使用（スペイン語表記で登録）"
  },
  "conformityAssessment": {
    "overview": "DIGEMID が申請書類を直接審査。高度衛生監視国（20カ国: 独・豪・墺・白・加・韓・丹・西・米・仏・洪・愛・伊・日・諾・葡・英・瑞典・瑞西・蘭）の CFS/CFG、技術文書、臨床データ、製造情報等を評価。クラスに応じて審査期間・要求事項が異なる。衛生登録の有効期間は5年間。",
    "routes": [
      {
        "name": "Inscripción de Registro Sanitario",
        "nameJa": "衛生登録（新規登録）",
        "applicableClasses": [
          "全クラス"
        ],
        "description": "技術文書、製品説明書、製造情報、臨床・安全性データ、QMS 文書、参照国の CFS/CFG を提出。DIGEMID が書類審査を実施。",
        "subtypes": [],
        "avgReviewTime": "Class I: 60暦日 / Class II: 90暦日 / Class III-IV: 120暦日（法定目標値。実績は6〜12ヶ月の場合あり）",
        "avgReviewTimeSource": "https://omcmedical.com/peru-medical-device-registration/",
        "fee": "要確認（DIGEMID 料金表による。TUPA に記載）",
        "feeSource": "https://www.digemid.minsa.gob.pe/",
        "url": "https://www.digemid.minsa.gob.pe/webDigemid/registro-sanitario/dispositivos-medicos/"
      },
      {
        "name": "Reinscripción de Registro Sanitario",
        "nameJa": "衛生登録（更新）",
        "applicableClasses": [
          "全クラス"
        ],
        "description": "登録有効期限満了前に更新申請。更新時の要件は新規登録に準じるが、市販後データの提出も求められる。",
        "subtypes": [],
        "avgReviewTime": "要確認",
        "avgReviewTimeSource": "https://www.digemid.minsa.gob.pe/",
        "fee": "要確認",
        "feeSource": "https://www.digemid.minsa.gob.pe/",
        "url": "https://www.digemid.minsa.gob.pe/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "VUCE（Ventanilla Única de Comercio Exterior）",
    "url": "https://www.vuce.gob.pe/vuce-2-0",
    "description": "DIGEMID の衛生登録申請は VUCE（外国貿易単一窓口）電子システムを通じて提出。DIGEMID と申請者間の通信を効率化。",
    "mandatory": true
  },
  "udi": {
    "required": false,
    "system": "GMDN/UMDN コードの使用が必要（UDI 制度としては未導入）",
    "description": "ペルーでは IMDRF 型の UDI 制度は法的に義務化されていない。ただし、登録申請時に GMDN/UMDN コード（国際命名法、スペイン語表記）の記載が必要。",
    "url": null,
    "timeline": "要確認"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "Sistema Peruano de Farmacovigilancia y Tecnovigilancia",
      "mandatory": true,
      "url": "https://www.digemid.minsa.gob.pe/",
      "description": "法律第29459号および DS 016-2011-SA に基づくテクノビジランス制度。登録保有者は重篤な有害事象を DIGEMID に報告する義務がある。"
    },
    "recalls": {
      "authority": "DIGEMID",
      "description": "DIGEMID がリコール・FSCA を管理。登録保有者はリコール実施時に DIGEMID に通知義務。",
      "url": "https://www.digemid.minsa.gob.pe/"
    },
    "surveillance": "Sistema Peruano de Tecnovigilancia によるテクノビジランス（市販後監視）。能動的・受動的監視を組み合わせたシステム。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "DIGEMID",
    "name": "Certificado de Libre Venta / Free Sale Certificate",
    "description": "登録申請時に高度衛生監視国（20カ国: ドイツ、オーストラリア、オーストリア、ベルギー、カナダ、韓国、デンマーク、スペイン、米国、フランス、ハンガリー、アイルランド、イタリア、日本、ノルウェー、ポルトガル、英国、スウェーデン、スイス、オランダ）からの CFS/CFG 提出が必要。",
    "processingTime": "要確認",
    "url": "https://www.digemid.minsa.gob.pe/"
  },
  "reimbursement": {
    "system": "SIS（Seguro Integral de Salud）+ EsSalud + 民間保険",
    "authority": "MINSA / EsSalud",
    "description": "ペルーの公的医療保険は SIS（総合健康保険）と EsSalud（社会保険）の二層構造。医療機器の調達は公立病院の入札プロセスを通じて行われる。",
    "codingSystems": [
      "要確認"
    ],
    "url": "https://www.minsa.gob.pe/"
  },
  "marketingRules": {
    "authority": "DIGEMID",
    "description": "医療機器の広告・販促は DIGEMID の規制下にある。衛生登録済み機器のみの広告が原則。",
    "keyRules": [
      "Registro Sanitario 取得済み機器のみ広告・販促可",
      "虚偽・誇大広告の禁止",
      "ラベリングはスペイン語で記載"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "ペルーは MDSAP プログラムに参加していない。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "ISO 13485 認証は QMS 証明として登録申請時に参照される。法的義務として明示されているかは要確認。"
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
      "date": "2025-01",
      "title": "RM N° 049-2025/MINSA — 医薬品安全性監視マニュアル改訂",
      "description": "Resolución Ministerial N° 049-2025/MINSA により「Manual de Buenas Prácticas de Farmacovigilancia」を改訂。有害事象モニタリング体制を強化。"
    },
    {
      "date": "2024",
      "title": "DS N° 020-2024-SA — Ley 29459施行規則の適合化・更新",
      "description": "Decreto Supremo N° 020-2024-SA により Ley N° 29459 の施行規則を適合化・更新。登録要件・手続きの現代化を図る。"
    }
  ],
  "lastUpdated": "2026-04-06",
  "verified": "2026-04-06"
};
