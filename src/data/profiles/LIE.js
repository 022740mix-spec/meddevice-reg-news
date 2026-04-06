// リヒテンシュタイン (Liechtenstein)
export default {
  "code": "LIE",
  "country": "リヒテンシュタイン",
  "countryEn": "Liechtenstein",
  "region": "Europe",
  "flag": "🇱🇮",
  "legalSystemOverview": {
    "type": "EEA加盟国（MDR/IVDR がEEA協定経由で適用）+ スイス関税同盟による二重制度",
    "description": "リヒテンシュタインはEU非加盟だがEEA加盟国であり、EU MDR (2017/745) およびIVDR (2017/746) がEEA協定経由で直接適用される。同時に、1923年のスイス・リヒテンシュタイン関税同盟条約により、スイスのMedDO/IvDOに基づく上市も可能な二重法制度を運用。Amt für Gesundheit（保健局）がEEA側のNCA。スイス関税同盟ルートではSwissmedicが管轄。国内にNotified Bodyは存在せず、EU/EEA域内NBを利用。EUDAMEDへの登録義務あり（2026年5月28日〜）。swissdamedへの登録も関税同盟ルートで必要。",
    "keyCharacteristics": [
      "EEA協定経由でEU MDR/IVDR直接適用",
      "スイス関税同盟によりMedDO/IvDOルートも利用可（二重制度）",
      "Amt für Gesundheit（保健局）がEEA側NCA",
      "Swissmedicが関税同盟側の監督当局",
      "EWR-MepV（LGBl 2021.161）がEEA側の国内実施令",
      "国内NBなし — EU/EEA域内NBを利用",
      "ドイツ語ラベリング・IFU必須",
      "EUDAMED登録義務（2026年5月28日〜）"
    ]
  },
  "authorities": [
    {
      "name": "Amt für Gesundheit",
      "fullName": "Office of Public Health",
      "localName": "Amt für Gesundheit",
      "role": "EEA側NCA: 医療機器の市場監視・ビジランス（EEAルート）・流通業者監督・臨床試験監督。EEA協定に基づくEU MDR/IVDRの国内実施を管轄。",
      "url": "https://www.llv.li/en/business/industry-professional-associations/health-professions-and-remedies/medical-devices-in-vitro-diagnostics",
      "isPrimary": true
    },
    {
      "name": "Swissmedic",
      "fullName": "Swiss Agency for Therapeutic Products",
      "localName": "Schweizerisches Heilmittelinstitut",
      "role": "関税同盟側の監督当局: スイスMedDO/IvDOルートで上市された機器のビジランス・市場監視。swissdamed登録管理。リヒテンシュタインは関税同盟により「スイス国内」と同等の扱い。",
      "url": "https://www.swissmedic.ch/swissmedic/en/home/medical-devices.html",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "EU MDR Notified Body（リヒテンシュタイン国内なし）",
    "description": "リヒテンシュタイン国内にNotified Bodyは存在しない。製造業者はEU/EEA域内のNBを利用する。EEA協定によりEU域内で発行されたCE証明書はリヒテンシュタインで有効。スイス関税同盟ルートでもEU認定NBのCE証明書がスイス側で一方的に承認される。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "EU MDR Article 2(1) がEEA協定経由で直接適用。Heilmittelgesetz（HMG, LGBl 2015.023）が医薬品・医療機器の上位法。",
    "scope": "IVDはIVDR、SaMD・AI/ML医療機器も対象。関税同盟ルートではスイスMedDOの定義も適用。",
    "notes": "二重制度のため、EEAルート（EU MDR/IVDR）とスイス関税同盟ルート（MedDO/IvDO）のいずれかに基づき上市可能。"
  },
  "primaryLaw": {
    "title": "Gesetz über Arzneimittel und Medizinprodukte (Heilmittelgesetz; HMG)",
    "originalTitle": "Gesetz vom 4. Dezember 2014 über Arzneimittel und Medizinprodukte (Heilmittelgesetz; HMG)",
    "enacted": "2015-01-28",
    "lastAmended": "2018-10-04",
    "url": "https://www.gesetze.li/konso/2015023000",
    "description": "医薬品・医療機器を包括的に規律するリヒテンシュタインの上位法（LGBl 2015.023, LR 812.102）。2015年4月1日施行。医療機器についてはEEA協定を通じたEU MDR/IVDR、およびスイス関税同盟を通じたMedDO/IvDOの二重制度の法的基盤を提供。2018年改正（LGBl 2018.341）が最新。"
  },
  "implementingRegulations": [
    {
      "title": "EWR-Medizinprodukteverordnung (EWR-MepV, LGBl 2021.161)",
      "date": "2021-04-27",
      "url": "https://www.gesetze.li/konso/2021161000",
      "description": "EEA協定に基づくEU MDRの国内実施令。EEA協定に明示的に規定されていないMDR関連事項（言語要件等）を補完。ドイツ語ラベリング・IFU義務等を規定。2021年5月26日施行。",
      "category": "医療機器（EEAルート）"
    },
    {
      "title": "EWR-In-vitro-Diagnostika-Verordnung (EWR-IvDV, LGBl 2022.143)",
      "date": "2022-05-03",
      "url": "https://www.gesetze.li/konso/2022143000",
      "description": "EEA協定に基づくEU IVDRの国内実施令。IVDに関する言語要件・通知義務等を規定。",
      "category": "体外診断（EEAルート）"
    },
    {
      "title": "Heilmittelverordnung (LGBl 2015.131)",
      "date": "2015-04-28",
      "url": "https://www.gesetze.li/konso/pdf/2015131000?version=1",
      "description": "HMG（Heilmittelgesetz）の実施令。医薬品・医療機器全般に関する施行規則。",
      "category": "全般"
    }
  ],
  "relatedLaws": [
    {
      "title": "Regulation (EU) 2017/745 — MDR",
      "category": "EU規則",
      "enacted": "2017",
      "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32017R0745",
      "relevance": "EEA協定経由でリヒテンシュタインに直接適用されるEU医療機器規則。"
    },
    {
      "title": "Regulation (EU) 2017/746 — IVDR",
      "category": "EU規則",
      "enacted": "2017",
      "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32017R0746",
      "relevance": "EEA協定経由でリヒテンシュタインに直接適用されるIVD規則。"
    },
    {
      "title": "Swiss Medical Devices Ordinance (MedDO, SR 812.213)",
      "category": "スイス関税同盟法令",
      "enacted": "2021-05-26",
      "url": "https://www.fedlex.admin.ch/eli/cc/2020/552/en",
      "relevance": "スイス関税同盟により、リヒテンシュタインでもMedDOに基づく上市が可能。「スイス国内」にはリヒテンシュタインを含む。"
    },
    {
      "title": "Datenschutzgesetz (DSG)",
      "category": "データ保護",
      "enacted": "2018",
      "url": "https://www.datenschutzstelle.li/application/files/4515/8641/2923/DSG_English_final.pdf",
      "relevance": "2018年制定のリヒテンシュタインデータ保護法。EEA経由でGDPRを国内法化。コネクテッドデバイス・SaMDの個人医療情報処理に適用。Datenschutzstelle（データ保護局）が監督。"
    }
  ],
  "classification": {
    "system": "EU MDR 4クラス制",
    "basis": "EU MDR Annex VIII（22のルールに基づくリスクベース分類）。EEA協定経由で直接適用。スイス関税同盟ルートでも同等の4クラス制（MedDO Annex IX）。",
    "classes": [
      {
        "name": "Class I",
        "nameJa": "クラスI",
        "riskLevel": "低",
        "description": "低リスク機器。自己宣言（Is/Im/IrはNB関与）。",
        "examples": ["弾性包帯", "聴診器", "車椅子", "非滅菌手袋", "冷却パック"],
        "approvalPath": "自己宣言（DoC）"
      },
      {
        "name": "Class IIa",
        "nameJa": "クラスIIa",
        "riskLevel": "中低",
        "description": "中低リスク。NB関与必須。",
        "examples": ["補聴器", "超音波診断装置", "吸引カテーテル", "血圧計", "歯科用充填材"],
        "approvalPath": "NB適合性評価"
      },
      {
        "name": "Class IIb",
        "nameJa": "クラスIIb",
        "riskLevel": "中高",
        "description": "中高リスク。NB詳細審査。",
        "examples": ["人工呼吸器", "輸液ポンプ", "X線装置", "血液透析装置", "骨接合プレート"],
        "approvalPath": "NB適合性評価"
      },
      {
        "name": "Class III",
        "nameJa": "クラスIII",
        "riskLevel": "高",
        "description": "最高リスク。NB最も厳格な審査。",
        "examples": ["人工心臓弁", "冠動脈ステント", "人工股関節", "植込み型除細動器", "吸収性縫合糸"],
        "approvalPath": "NB適合性評価"
      }
    ],
    "rules": ["EU MDR Annex VIII（22ルール）がEEA経由で適用", "スイス関税同盟ルートではMedDO Annex IXの分類ルール適用"],
    "totalProductCodes": "EU CND"
  },
  "conformityAssessment": {
    "overview": "二重制度により2つのルートが存在する。(1) EEAルート: EU MDR適合性評価がEEA協定経由で直接適用。CE証明書はEU/EEA域内NBが発行。EU認定代理人が必要。(2) スイス関税同盟ルート: MedDO/IvDOに基づきSwissmedicが管轄。CH-REP（スイス国内代理人）指定・swissdamed登録・CHRNラベリングが必要。リヒテンシュタインに拠点を置く事業者はスイス側でCH-REP指定免除。",
    "routes": [
      {
        "name": "EEA Route — EU MDR Conformity Assessment",
        "nameJa": "EEAルート — EU MDR 適合性評価",
        "applicableClasses": ["Class I", "Class IIa", "Class IIb", "Class III"],
        "description": "EU MDR Annex IX〜XI。EU/EEA域内NBによる適合性評価。Class Iは自己宣言。Amt für Gesundheitが市場監視を管轄。リパッケージ・リラベリングされた製品はAmt für Gesundheitへの28日前事前通知が必要。カスタムメイド機器も事前通知義務あり。EUDAMED登録が2026年5月28日から義務化。",
        "subtypes": [],
        "avgReviewTime": "要確認（公式情報で裏付け未取得）— NCA事前審査なし、NBの審査期間に依存。Class I/Class A IVDは4〜6週間程度とされる",
        "avgReviewTimeSource": "https://arazygroup.com/medical-device-registration-liechtenstein/",
        "fee": "要確認（公式情報で裏付け未取得）— EU/EEA域内NBとの契約に基づく費用",
        "feeSource": "https://arazygroup.com/medical-device-registration-liechtenstein/",
        "url": "https://www.llv.li/en/business/industry-professional-associations/health-professions-and-remedies/medical-devices-in-vitro-diagnostics/market-access"
      },
      {
        "name": "Swiss Customs Union Route — MedDO/IvDO",
        "nameJa": "スイス関税同盟ルート — MedDO/IvDO",
        "applicableClasses": ["Class I", "Class IIa", "Class IIb", "Class III"],
        "description": "1923年関税同盟条約に基づき、スイスMedDO/IvDOに基づく上市が可能。EU認定NBのCE証明書をスイスが一方的に承認。swissdamed登録・CHRN取得が必要。リヒテンシュタイン拠点の事業者はCH-REP指定免除。この承認は一方通行であり、EU域内では効力を持たない。",
        "subtypes": [],
        "avgReviewTime": "要確認（公式情報で裏付け未取得）— NBの審査期間に依存",
        "avgReviewTimeSource": "https://www.swissmedic.ch/swissmedic/en/home/medical-devices/market-access.html",
        "fee": "swissdamed登録手数料（詳細はSwissmedic手数料規則参照）",
        "feeSource": "https://www.swissmedic.ch/swissmedic/en/home/medical-devices/swissdamed.html",
        "url": "https://www.swissmedic.ch/swissmedic/en/home/medical-devices/market-access.html"
      }
    ]
  },
  "electronicSubmission": {
    "system": "EUDAMED（EEAルート）+ swissdamed（スイス関税同盟ルート）",
    "url": "https://ec.europa.eu/tools/eudamed/",
    "description": "EEAルート: 製造業者・輸入業者・認定代理人はEUDAMEDに登録。2026年5月28日よりEUDAMED 4モジュール義務化。スイス関税同盟ルート: swissdamedへの事業者・機器登録が必要（2026年7月機器登録義務化）。リヒテンシュタインに拠点を置く事業者はswissdamedのActorsモジュール（2024年8月稼働開始）に登録。",
    "mandatory": true
  },
  "udi": {
    "required": true,
    "system": "EU UDI — EUDAMED / swissdamed",
    "description": "EEAルート: EU MDR Article 27に基づくUDI要件がEEA協定経由で適用。EUDAMED UDI/Deviceデータベースに登録。スイス関税同盟ルート: MedDO Art. 31–36のUDI要件が適用。swissdamed UDI/Devicesモジュール（2025年8月稼働予定）にUDI-DIデータを登録。",
    "url": "https://ec.europa.eu/tools/eudamed/",
    "timeline": "EUDAMED UDI義務化: 2026年5月28日。swissdamed機器登録義務化: 2026年7月。"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "EU Vigilance — Amt für Gesundheit（EEAルート）/ Swissmedic（関税同盟ルート）",
      "mandatory": true,
      "url": "https://www.llv.li/en/business/industry-professional-associations/health-professions-remedies/medical-devices-in-vitro-diagnostic-medical-devices/incidents-fsca",
      "description": "二重制度に応じた報告先: EEAルートで上市された機器の重篤インシデントはAmt für Gesundheit（保健局）に報告。スイス関税同盟ルート（MedDO/IvDO）で上市された機器はSwissmedicに報告。EUDAMED vigilanceモジュールに移行予定（EEAルート）。"
    },
    "recalls": {
      "authority": "Amt für Gesundheit / Swissmedic",
      "description": "FSCA（Field Safety Corrective Action）・FSN（Field Safety Notice）は上市ルートに応じた当局に通知。Amt für GesundheitがEEAルート、SwissmedicがMedDO/IvDOルートの安全措置を管轄。",
      "url": "https://www.llv.li/en/business/industry-professional-associations/health-professions-remedies/medical-devices-in-vitro-diagnostic-medical-devices/safety-information-recalls"
    },
    "surveillance": "EU MDR PMS/PSUR/PMCF要件がEEA経由で適用。スイス関税同盟ルートでもMedDOに基づく同等のPMS要件。Amt für Gesundheitが市場監視を実施。外国査察についてはオーストリアBASGとの協力協定あり。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "Amt für Gesundheit",
    "name": "Certificate of Free Sale",
    "description": "要確認（具体的な手続き・手数料は公式情報で裏付け未取得）。リヒテンシュタインで合法的に流通している医療機器のCFSをAmt für Gesundheitが発行するものと推定。",
    "processingTime": "要確認（公式情報で裏付け未取得）",
    "url": "https://www.llv.li/en/business/industry-professional-associations/health-professions-and-remedies/medical-devices-in-vitro-diagnostics/free-sale-certificates-fsc-"
  },
  "reimbursement": {
    "system": "義務的健康保険（OKP — Obligatorische Krankenpflegeversicherung）",
    "authority": "Amt für Gesundheit / 認可保険者（Concordia、FKB、SWICA等）",
    "description": "リヒテンシュタインはKVG（Gesetz über die Krankenversicherung, LGBl 1971.50）に基づく義務的健康保険を運用。スイスとの密接な関係により、スイスのMiGeL（Mittel- und Gegenständeliste）を参照した医療機器償還が行われている。具体的な医療機器償還リストの詳細は要確認。",
    "codingSystems": [],
    "url": "https://www.gesetze.li/konso/1971.50"
  },
  "marketingRules": {
    "authority": "Amt für Gesundheit",
    "description": "EWR-MepV Part IV, Article 10(1) に基づき、ラベルおよび使用説明書はドイツ語で記載する義務がある。これはEU MDRの言語要件をリヒテンシュタイン国内で具体化したもの。専門家向け機器のIFU言語要件は要確認。リパッケージ・リラベリング品はAmt für Gesundheitへ28日前に事前通知必要。",
    "keyRules": [
      "ラベル・IFU: ドイツ語必須（EWR-MepV Art. 10(1)）",
      "CE証明書のない機器の広告・販売は禁止",
      "リパッケージ・リラベリング品: 上市28日前にAmt für Gesundheitへ事前通知",
      "カスタムメイド機器: Amt für Gesundheitへ事前通知義務"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "EEA-EFTA国としてMDSAP非参加。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "EN ISO 13485:2016。NB審査で実質必須。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "EN ISO 14971:2019+A11:2021。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "EN IEC 62304:2006+A1:2015。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "EN IEC 60601シリーズ。"
    },
    "others": []
  },
  "recentDevelopments": [
    {
      "date": "2026-05",
      "title": "EUDAMED 4モジュール義務化（2026年5月28日）",
      "description": "Actor・UDI/Device・NB/Certificate・市場監視の4モジュールがEEA-EFTA国を含め義務化。リヒテンシュタインの製造業者・輸入業者もEUDAMED登録必須に。"
    },
    {
      "date": "2026-07",
      "title": "swissdamed 機器登録義務化（2026年7月）",
      "description": "スイス関税同盟ルートでの機器登録がswissdamedで義務化。リヒテンシュタインに拠点を置く事業者も対象。"
    },
    {
      "date": "2024-08",
      "title": "swissdamed Actorsモジュール稼働開始",
      "description": "swissdamedのActorsモジュールが2024年8月6日に稼働開始。スイス・リヒテンシュタインに拠点を置く経済活動者の登録が可能に。"
    },
    {
      "date": "2022",
      "title": "EWR-IvDV（LGBl 2022.143）施行",
      "description": "EU IVDR（2017/746）のEEA経由での国内実施令。IVDに関する言語要件・通知義務等を規定。"
    },
    {
      "date": "2021",
      "title": "EWR-MepV（LGBl 2021.161）施行",
      "description": "EU MDR（2017/745）のEEA経由での国内実施令。ドイツ語ラベリング義務等を規定。2021年5月26日施行。"
    }
  ],
  "lastUpdated": "2026-04-06",
  "verified": "2026-04-06"
};
