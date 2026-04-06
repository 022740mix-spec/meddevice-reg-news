// パナマ (Republic of Panama)
export default {
  "code": "PAN",
  "country": "パナマ",
  "countryEn": "Republic of Panama",
  "region": "Latam",
  "flag": "🇵🇦",
  "legalSystemOverview": {
    "type": "中央集権制（Centralized system）",
    "description": "パナマの医療機器規制は保健省（MINSA: Ministerio de Salud）傘下の国家医療機器局（DNDM: Dirección Nacional de Dispositivos Médicos）が管轄する。Ley N° 90 de 2017（医療機器法）およびその改正法 Ley N° 92 de 2019、施行規則 Decreto Ejecutivo N° 490 de 2019 が主要な法的根拠。医療機器は衛生登録（Registro Sanitario）が必要。リスクベースの4クラス分類（Class A / B / C / D）を採用。登録有効期間は10年。",
    "keyCharacteristics": [
      "MINSA/DNDM による中央規制体制",
      "Ley 90 de 2017（Ley 92 de 2019 で改正）に基づく規制枠組み",
      "4クラス分類（Class A / B / C / D）",
      "ローカル登録保有者（Authorized Representative）の指定が必須",
      "CFS の提出が必要",
      "ISO 13485 認証または同等の QMS 証明が必要",
      "登録有効期間 10年"
    ]
  },
  "authorities": [
    {
      "name": "DNDM",
      "fullName": "Dirección Nacional de Dispositivos Médicos",
      "localName": "Dirección Nacional de Dispositivos Médicos",
      "role": "医療機器の登録・市販後監視・施設許可・輸入管理・分類判定",
      "url": "https://minsa.gob.pa/contenido/direccion-nacional-de-dispositivos-medicos",
      "isPrimary": true
    },
    {
      "name": "MINSA",
      "fullName": "Ministerio de Salud",
      "localName": "Ministerio de Salud",
      "role": "保健政策の策定・監督",
      "url": "https://www.minsa.gob.pa/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "なし（DNDM が直接審査）",
    "description": "パナマには Notified Body 制度は存在しない。DNDM が直接、登録申請書類を審査する。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "Ley 90 de 2017 に基づき、疾病の診断・治療・予防・監視・軽減等を目的とする器具・装置・機器・ソフトウェア・材料等で、主たる作用が薬理学的・免疫学的・代謝的手段によらないもの。体外診断用医療機器（DMDIV）も含む。",
    "scope": "体外診断用医療機器（DMDIV）も規制対象。SaMD（Software as a Medical Device）も対象。",
    "notes": "2025年の施行規則案で IMDRF/GHTF 整合の100以上の定義が導入予定。"
  },
  "primaryLaw": {
    "title": "Ley N° 90 de 26 de diciembre de 2017",
    "originalTitle": "Ley 90 de 26 de diciembre de 2017, Sobre Dispositivos Médicos y Productos Afines",
    "enacted": "2017",
    "lastAmended": "2019（Ley 92 de 2019 による改正）",
    "url": "https://www.minsa.gob.pa/normatividad/proyecto-de-decreto-que-reglamenta-la-ley-90-de-26-de-diciembre-de-2017-sobre",
    "description": "パナマにおける医療機器・関連製品の製造・輸出入・保管・販売・表示・最終処分を規制する基本法。DNDM の設置根拠。Ley 92 de 2019 により改正。"
  },
  "implementingRegulations": [
    {
      "title": "Decreto Ejecutivo N° 490 de 4 de octubre de 2019（施行規則）",
      "date": "2019",
      "url": "https://www.minsa.gob.pa/normatividad/decretos",
      "description": "Ley 90 de 2017（Ley 92 de 2019 改正後）の施行規則。医療機器の登録手続き・分類・必要書類・施設要件を規定。",
      "category": "包括規制"
    },
    {
      "title": "Decreto Ejecutivo（2025年施行規則案）",
      "date": "2025",
      "url": "https://www.panacamara.com/boletininformativocciap/wp-content/uploads/sites/10/2025/10/decreto_final_3.pdf",
      "description": "Ley 90/92 の新たな施行規則案。IMDRF/GHTF 整合の定義導入、Class A〜D 分類の詳細化、段階的移行スケジュール（Class D: 3ヶ月、C: 6ヶ月、B: 9ヶ月）を規定。2025年10月に公開諮問開始。",
      "category": "施行規則案"
    }
  ],
  "relatedLaws": [
    {
      "title": "Ley N° 92 de 12 de septiembre de 2019（Ley 90 改正法）",
      "category": "改正法",
      "enacted": "2019",
      "url": "https://vlex.com.pa/vid/ley-n-92-reforma-811411641",
      "relevance": "Ley 90 de 2017 を改正し、医療機器規制の枠組みを強化。"
    }
  ],
  "classification": {
    "system": "4クラス分類（Class A / B / C / D）",
    "basis": "リスクベース",
    "classes": [
      {
        "name": "Class A",
        "nameJa": "クラスA",
        "riskLevel": "低リスク",
        "description": "低リスク医療機器。簡易な登録手続き（Inscripción）。",
        "examples": [
          "聴診器",
          "弾性包帯",
          "手動外科器具"
        ],
        "approvalPath": "Inscripción（簡易登録）"
      },
      {
        "name": "Class B",
        "nameJa": "クラスB",
        "riskLevel": "中低リスク",
        "description": "中低リスク医療機器。標準的な登録手続き。",
        "examples": [
          "血圧計",
          "注射器",
          "超音波診断装置"
        ],
        "approvalPath": "Registro Sanitario（標準登録）"
      },
      {
        "name": "Class C",
        "nameJa": "クラスC",
        "riskLevel": "中高リスク",
        "description": "中高リスク医療機器。詳細な技術文書・臨床データが必要。",
        "examples": [
          "人工呼吸器",
          "透析器",
          "整形外科用インプラント"
        ],
        "approvalPath": "Registro Sanitario（詳細審査）"
      },
      {
        "name": "Class D",
        "nameJa": "クラスD",
        "riskLevel": "高リスク",
        "description": "最高リスク医療機器（埋込み型機器を含む）。最も厳格な審査。臨床試験データ・ISO 14971 リスクマネジメント報告が必要。",
        "examples": [
          "人工心臓弁",
          "冠動脈ステント",
          "埋込み型デバイス"
        ],
        "approvalPath": "Registro Sanitario（最詳細審査）"
      }
    ],
    "rules": [
      {
        "id": "DNDM 分類規則",
        "description": "リスクベースの分類規則。意図する用途・侵襲性・使用期間等に基づきクラスを決定。IMDRF/GHTF 分類原則に整合。",
        "url": "https://minsa.gob.pa/contenido/direccion-nacional-de-dispositivos-medicos"
      }
    ],
    "totalProductCodes": "要確認"
  },
  "conformityAssessment": {
    "overview": "DNDM が登録申請書類を審査。CFS、技術文書、ISO 13485 等 QMS 証明、ラベリング等を評価。クラスに応じて臨床データ・リスクマネジメント報告が必要。審査期間は約60営業日。",
    "routes": [
      {
        "name": "Registro Sanitario de Dispositivos Médicos",
        "nameJa": "医療機器衛生登録",
        "applicableClasses": [
          "Class A / B / C / D"
        ],
        "description": "DNDM に登録申請書類を提出。技術文書、CFS、ISO 13485 認証、ラベリング（スペイン語）、製造プロセス情報等を審査。Class A は Inscripción（簡易登録）、Class B〜D は詳細度の異なる審査。有効期間10年。",
        "subtypes": [],
        "avgReviewTime": "約60営業日（約2ヶ月）。追加情報要求時はさらに60日延長の可能性あり",
        "avgReviewTimeSource": "https://omcmedical.com/panama-medical-device-registration",
        "fee": "要確認（2025年施行規則案では Class A: B/.150〜250、Class B: B/.400〜850、Class C: B/.550〜950、Class D: B/.550〜1,000）",
        "feeSource": "https://www.aarsa.com/proyecto-de-decreto-ejecutivo-de-dispositivos-medicos-de-panama-2025/",
        "url": "https://minsa.gob.pa/contenido/direccion-nacional-de-dispositivos-medicos"
      }
    ]
  },
  "electronicSubmission": {
    "system": "要確認（DNDM を通じた申請）",
    "url": "https://minsa.gob.pa/contenido/direccion-nacional-de-dispositivos-medicos",
    "description": "DNDM は手続きのデジタル化を進めているが、完全な電子申請システムの運用状況は要確認。",
    "mandatory": false
  },
  "udi": {
    "required": false,
    "system": "要確認（2025年施行規則案でトレーサビリティ要件を強化予定）",
    "description": "パナマでは現時点で独自の UDI 制度が法的に義務化されているとの確認情報はない。2025年施行規則案で National Surveillance Program を通じたトレーサビリティ強化が予定されている。",
    "url": null,
    "timeline": "要確認"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "DNDM テクノビジランス制度",
      "mandatory": true,
      "url": "https://minsa.gob.pa/contenido/direccion-nacional-de-dispositivos-medicos",
      "description": "登録保有者は医療機器に関連する有害事象を DNDM に報告する義務がある。テクノビジランス制度により市販後安全性を監視。2025年施行規則案では公立・民間病院にテクノビジランスユニット設置を義務化予定。"
    },
    "recalls": {
      "authority": "DNDM",
      "description": "DNDM がリコール・FSCA を管理。",
      "url": "https://minsa.gob.pa/contenido/direccion-nacional-de-dispositivos-medicos"
    },
    "surveillance": "DNDM によるテクノビジランス（市販後監視）。2025年施行規則案で National Surveillance Program の創設を規定。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "DNDM",
    "name": "Certificado de Libre Venta",
    "description": "登録申請時に原産国の規制当局からの CFS 提出が必要。DNDM も登録済み機器について CFS を発行可能。",
    "processingTime": "要確認",
    "url": "https://minsa.gob.pa/contenido/direccion-nacional-de-dispositivos-medicos"
  },
  "reimbursement": {
    "system": "CSS（Caja de Seguro Social）+ 公的医療機関 + 民間保険",
    "authority": "MINSA / CSS",
    "description": "パナマの公的医療は MINSA 傘下の公立病院と CSS（社会保険公社）が中心。医療機器の調達は公的入札プロセス（Panamá Compra en Línea）を通じて行われる。",
    "codingSystems": [
      "要確認"
    ],
    "url": "http://www.css.gob.pa/"
  },
  "marketingRules": {
    "authority": "DNDM",
    "description": "医療機器の広告・販促は DNDM の規制下にある。登録済み機器のみの販売・広告が原則。",
    "keyRules": [
      "登録済み機器のみ販売・広告可",
      "虚偽・誇大広告の禁止",
      "ラベリングはスペイン語で記載"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "パナマは MDSAP プログラムに参加していない。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "ISO 13485 認証または同等の QMS 証明が登録申請の必須書類。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "リスクマネジメントの国際規格として参照。Class C/D では ISO 14971 準拠のリスクマネジメント報告が必要。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "ソフトウェア医療機器に対して参照。2025年施行規則案で SaMD の定義を導入。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "医用電気機器の安全規格として参照。"
    },
    "others": []
  },
  "recentDevelopments": [
    {
      "date": "2025-10",
      "title": "新施行規則案（Ley 90/92 の包括的施行規則）の公開諮問開始",
      "description": "MINSA は Ley 90 de 2017 / Ley 92 de 2019 の包括的な施行規則案を公表。IMDRF/GHTF 整合の100以上の定義導入、Class A〜D 分類の詳細化、段階的移行スケジュール、National Surveillance Program の創設等を規定。公開諮問期間は2025年10月15日〜12月19日。"
    },
    {
      "date": "2019",
      "title": "Decreto Ejecutivo N° 490 — Ley 90/92 施行規則の制定",
      "description": "Ley 90 de 2017（Ley 92 de 2019 改正後）の施行規則を制定。医療機器の登録手続き・分類・施設要件等を規定。"
    }
  ],
  "lastUpdated": "2026-04-06",
  "verified": "2026-04-06"
};
