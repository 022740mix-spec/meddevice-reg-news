// メキシコ (Mexico)
export default {
  "code": "MEX",
  "country": "メキシコ",
  "countryEn": "Mexico",
  "region": "Latam",
  "flag": "🇲🇽",
  "legalSystemOverview": {
    "type": "連邦制（Federal system）",
    "description": "メキシコの医療機器規制はLey General de Salud（一般保健法）を根幹とし、COFEPRIS（連邦衛生リスク対策委員会）が主管当局として市販前登録・市販後監視を担う。2026年1月の大規模法改正により規制枠組みが刷新。3クラス制（Class I/II/III）を採用し、メキシコ薬局方（FEUM）の23分類ルールに基づく。2025年9月に簡略化経路（Abbreviated pathway）が導入され、参照国認可を活用した迅速な登録が可能に。",
    "keyCharacteristics": [
      "COFEPRIS による一元的な連邦規制体制",
      "リスクベースの3クラス分類（Class I/II/III）",
      "標準経路と簡略化経路（Abbreviated pathway, 2025年9月導入）",
      "DIGIPRIS電子申請システムの義務化",
      "MDSAP Affiliate Member — MDSAP監査報告書をGMP代替として受入",
      "NOM-241-SSA1-2025によるGMP要件の改訂"
    ]
  },
  "authorities": [
    {
      "name": "COFEPRIS",
      "fullName": "Federal Commission for the Protection against Sanitary Risks",
      "localName": "Comisión Federal para la Protección contra Riesgos Sanitarios",
      "role": "医療機器の市販前登録（Registro Sanitario）・市販後監視・GMP査察・リコール管理。主管当局。",
      "url": "https://www.gob.mx/cofepris",
      "isPrimary": true
    }
  ],
  "notifiedBodies": {
    "system": "第三者試験機関（Terceros Autorizados）",
    "description": "COFEPRISが認定する第三者試験機関（Terceros Autorizados）が安全性・性能試験を実施。ただし最終的な登録判断はCOFEPRISが行う。EU型のNotified Body制度とは異なる。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "Ley General de Salud Art. 262に定義。疾病の診断・治療・リハビリ・予防等を目的とする機器・装置・器具・材料等。",
    "scope": "IVD（体外診断用医療機器）も適用範囲に含む。Class II/IIIに分類されるIVDが多い。",
    "notes": "2026年1月のLey General de Salud改正で定義の明確化が行われた。SaMD・AI医療機器の取扱いは今後のガイダンスで明確化予定。"
  },
  "primaryLaw": {
    "title": "Ley General de Salud (General Health Law)",
    "originalTitle": "Ley General de Salud",
    "enacted": "1984-02-07",
    "lastAmended": "2026-01-15",
    "url": "https://www.diputados.gob.mx/LeyesBiblio/pdf/LGS.pdf",
    "description": "メキシコの保健・医療全般を規律する基本法。医療機器はTitle XII（Sanitary Control of Products and Services）で規定。2026年1月15日の大規模改正で医療機器規制の近代化が図られた。"
  },
  "implementingRegulations": [
    {
      "title": "NOM-241-SSA1-2025 — Good Manufacturing Practices for Medical Devices",
      "date": "2025-04-04",
      "url": "https://dof.gob.mx/nota_detalle.php?codigo=NOM-241-SSA1-2025",
      "description": "医療機器のGMP要件を規定するメキシコ公式規格。2025年4月4日DOF公布、2025年11月30日施行。MDSAP監査報告書をGMP代替として受入可能。旧NOM-241-SSA1-2021を置換。分類規定を削除し薬局方（FEUM）に一本化。UDI条項は削除（一時停止）。",
      "category": "GMP"
    },
    {
      "title": "Reglamento de Insumos para la Salud (Health Supplies Regulation)",
      "date": "要確認",
      "url": "https://www.diputados.gob.mx/LeyesBiblio/regley/Reg_LGS_MIS.pdf",
      "description": "Ley General de Saludの施行規則。医療機器の分類・登録手続き・表示要件等の詳細を規定。",
      "category": "施行規則"
    }
  ],
  "relatedLaws": [
    {
      "title": "Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)",
      "category": "データ保護",
      "enacted": "2010",
      "url": "https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf",
      "relevance": "民間部門における個人データ保護法。コネクテッドデバイス・SaMDが取り扱う個人医療情報のプライバシー要件に適用。"
    }
  ],
  "classification": {
    "system": "3クラス制（Class I/II/III）",
    "basis": "リスクベース。メキシコ薬局方（FEUM: Farmacopea de los Estados Unidos Mexicanos）の23分類ルールに基づく。意図する用途・侵襲性・使用期間等に基づきクラスを決定。",
    "classes": [
      {
        "name": "Class I",
        "nameJa": "クラスI",
        "riskLevel": "低",
        "description": "低リスク機器。登録手続きが最も簡略。",
        "examples": [
          "弾性包帯",
          "舌圧子",
          "聴診器",
          "歩行補助器具",
          "外科用手袋"
        ],
        "approvalPath": "Registro Sanitario（標準 or 簡略化経路）"
      },
      {
        "name": "Class II",
        "nameJa": "クラスII",
        "riskLevel": "中",
        "description": "中リスク機器。臨床データ・性能試験データの提出が必要な場合あり。",
        "examples": [
          "超音波診断装置",
          "血圧計",
          "輸液ポンプ",
          "補聴器",
          "歯科用材料"
        ],
        "approvalPath": "Registro Sanitario（標準 or 簡略化経路）"
      },
      {
        "name": "Class III",
        "nameJa": "クラスIII",
        "riskLevel": "高",
        "description": "高リスク機器。最も厳格な審査。臨床データの提出が必要。",
        "examples": [
          "冠動脈ステント",
          "人工関節",
          "埋込み型ペースメーカー",
          "人工心臓弁",
          "薬剤溶出ステント"
        ],
        "approvalPath": "Registro Sanitario（標準経路、臨床データ必須）"
      }
    ],
    "rules": [
      "メキシコ薬局方（FEUM）の23分類ルールに基づく",
      "IVDもClass I〜IIIに分類",
      "分類に疑義がある場合はCOFEPRISに事前相談可"
    ],
    "totalProductCodes": "GMDN準拠（メキシコ薬局方の分類コードも併用）"
  },
  "conformityAssessment": {
    "overview": "全クラスの医療機器にRegistro Sanitario（衛生登録）が必要。2025年9月に簡略化経路（Abbreviated pathway）が導入され、参照国（FDA/EU/Health Canada等）の認可を活用した迅速登録が可能に。初回登録有効期間は5年、更新は最大10年（2026年1月改正）。手数料はClass I MXN 12,374〜Class III MXN 23,098。GMP適合（NOM-241-SSA1-2025またはMDSAP監査報告書）が前提条件。2025年8月の簡素化協定により審査期間が大幅短縮（Class I: 20営業日、Class II: 25営業日、Class III: 35営業日）。",
    "routes": [
      {
        "name": "Standard Pathway (Registro Sanitario)",
        "nameJa": "標準経路（Registro Sanitario）",
        "applicableClasses": [
          "Class I",
          "Class II",
          "Class III"
        ],
        "description": "全クラスに適用可能な標準的な登録経路。技術文書・安全性/性能データ・GMP証明・ラベリング等を提出。Class IIIは臨床データが必須。",
        "subtypes": [
          {
            "name": "新規登録",
            "description": "初回のRegistro Sanitario取得。"
          },
          {
            "name": "更新（初回5年、以降最大10年）",
            "description": "有効期限前に更新申請。2026年1月改正により、2回目以降の更新は最大10年に延長。"
          },
          {
            "name": "変更届",
            "description": "製品仕様・製造所・ラベリング等の変更時。"
          }
        ],
        "avgReviewTime": "Class I: 20営業日 / Class II: 25営業日 / Class III: 35営業日（2025年8月簡素化協定後）",
        "avgReviewTimeSource": "https://www.gob.mx/tramites/ficha/registro-sanitario-de-dispositivos-medicos/COFEPRIS",
        "fee": "Class I: MXN 12,374 / Class II: MXN 18,149 / Class III: MXN 23,098",
        "feeSource": "https://www.gob.mx/tramites/ficha/registro-sanitario-de-dispositivos-medicos/COFEPRIS",
        "url": "https://www.gob.mx/tramites/ficha/registro-sanitario-de-dispositivos-medicos/COFEPRIS"
      },
      {
        "name": "Abbreviated Pathway (Simplified Registration)",
        "nameJa": "簡略化経路（2025年9月導入）",
        "applicableClasses": [
          "Class I",
          "Class II",
          "Class III"
        ],
        "description": "2025年9月に導入された新経路。FDA・EU（CE）・Health Canada等の参照国認可を有する機器について、一部の技術文書評価を省略し迅速にRegistro Sanitarioを交付。",
        "subtypes": [],
        "avgReviewTime": null,
        "avgReviewTimeSource": null,
        "fee": "標準経路と同額",
        "feeSource": "https://www.gob.mx/tramites/ficha/registro-sanitario-de-dispositivos-medicos/COFEPRIS",
        "url": "https://www.gob.mx/tramites/ficha/registro-sanitario-de-dispositivos-medicos/COFEPRIS"
      }
    ]
  },
  "electronicSubmission": {
    "system": "DIGIPRIS",
    "url": "https://digipris.cofepris.gob.mx/login",
    "description": "COFEPRISの電子申請プラットフォーム。Registro Sanitario申請・変更届・更新等をオンラインで提出。",
    "mandatory": true
  },
  "udi": {
    "required": false,
    "system": "未導入（一時停止中）",
    "description": "NOM-241-SSA1-2025の改訂でUDI条項が削除され、UDI制度は一時停止中。将来的な導入の方向性は維持されているが、具体的な再開時期は未定。",
    "url": null,
    "timeline": "未定（NOM-241-SSA1-2025でUDI条項削除、一時停止）"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "COFEPRIS Tecnovigilancia",
      "mandatory": true,
      "url": "https://www.gob.mx/cofepris/acciones-y-programas/tecnovigilancia",
      "description": "製造業者・輸入業者・医療機関はCOFEPRISにテクノビジランス（有害事象）報告を行う義務がある。重篤事象は発生認知後10日以内に報告。"
    },
    "recalls": {
      "authority": "COFEPRIS",
      "description": "COFEPRISがリコール・FSCA（Field Safety Corrective Action）を監督。",
      "url": "https://www.gob.mx/cofepris/acciones-y-programas/tecnovigilancia"
    },
    "surveillance": "テクノビジランスプログラムに基づく市販後監視。製造業者は定期安全性報告書の提出が求められる場合あり。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "COFEPRIS",
    "name": "Certificado de Libre Venta",
    "description": "COFEPRISがメキシコで合法的に流通している医療機器のCFSを発行。輸出目的で利用。",
    "processingTime": "要確認",
    "url": "https://www.gob.mx/cofepris/acciones-y-programas/dispositivos-medicos"
  },
  "reimbursement": {
    "system": "公的医療保険（IMSS/ISSSTE/INSABI後継）+ 民間保険",
    "authority": "IMSS / ISSSTE / COFEPRIS",
    "description": "メキシコの公的医療はIMSS（社会保険庁）・ISSSTE（公務員保険）等が運営。医療機器の公的調達はCompraNet等の電子調達システムを通じて実施。保険償還はCuadro Básico y Catálogo de Insumos del Sector Salud（基本医薬品・医療材料カタログ）に収載されていることが条件。",
    "codingSystems": [
      "Cuadro Básico y Catálogo de Insumos del Sector Salud"
    ],
    "url": "https://www.gob.mx/insabi"
  },
  "marketingRules": {
    "authority": "COFEPRIS",
    "description": "Registro Sanitario未取得の医療機器の広告・販売は禁止。広告はCOFEPRISの広告規制に適合する必要がある。",
    "keyRules": [
      "Registro Sanitario未取得機器の広告・販売禁止",
      "虚偽・誤解を招く広告の禁止",
      "医療機器のラベリングはスペイン語必須"
    ]
  },
  "mdsap": {
    "status": "Affiliate Member",
    "description": "メキシコはMDSAPのAffiliate Memberとして参加。2025年11月にMDSAP監査報告書の同等性を確認し、NOM-241-SSA1-2025に基づきMDSAP監査報告書をGMP証明の代替として受入可能。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "NOM-241-SSA1-2025のGMP要件はISO 13485に整合。MDSAP監査報告書もGMP代替として受入。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "リスクマネジメント。技術文書のリスク評価に適用。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "ソフトウェアライフサイクル。SaMD含むソフトウェア機器に適用。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "医用電気機器の安全・性能要求。NOM規格でも参照。"
    },
    "others": [
      {
        "name": "ISO 10993シリーズ（生物学的安全性評価）",
        "notes": "生体接触医療機器の生物学的安全性評価に必須。"
      },
      {
        "name": "NOM規格（Normas Oficiales Mexicanas）",
        "notes": "メキシコ固有の公式規格。NOM-241-SSA1-2025（GMP）等。国際規格と併用。"
      }
    ]
  },
  "recentDevelopments": [
    {
      "date": "2026-01",
      "title": "Ley General de Salud 大規模改正",
      "description": "2026年1月15日にLey General de Salud（一般保健法）の大規模改正が公布。医療機器規制の近代化、Registro Sanitario更新の有効期間を最大10年に延長（Art. 376改正）、ポストマーケット監視（テクノビジランス）の強化等。"
    },
    {
      "date": "2025-11",
      "title": "MDSAP同等性確認",
      "description": "COFEPRISがMDSAP監査報告書の同等性を正式確認。NOM-241-SSA1-2025に基づきGMP証明の代替として受入開始。"
    },
    {
      "date": "2025-09",
      "title": "簡略化経路（Abbreviated pathway）導入",
      "description": "参照国（FDA/EU/Health Canada/Swissmedic/ANVISA/TGA/MFDS/NMPA等）の認可を活用した簡略化登録経路が導入。市場アクセスの迅速化を図る。"
    },
    {
      "date": "2025-08",
      "title": "COFEPRIS手続簡素化協定",
      "description": "2025年8月22日にDOF公布の簡素化協定により、審査期間が大幅短縮: Class I 30→20営業日、Class II 35→25営業日、Class III 60→35営業日。複数の申請区分を統一手続に統合。更新の審査期間も120暦日→45暦日に短縮。"
    },
    {
      "date": "2025-04",
      "title": "NOM-241-SSA1-2025 公布",
      "description": "2025年4月4日にDOF公布、2025年11月30日施行。医療機器GMP規格の改訂版。MDSAP監査報告書のGMP代替受入規定を含む。分類規定を薬局方に一本化。UDI条項は削除（一時停止）。"
    }
  ],
  "lastUpdated": "2026-04-06",
  "verified": "2026-04-06"
};
