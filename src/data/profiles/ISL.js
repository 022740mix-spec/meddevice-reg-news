// アイスランド (Iceland)
export default {
  "code": "ISL",
  "country": "アイスランド",
  "countryEn": "Iceland",
  "region": "Europe",
  "flag": "🇮🇸",
  "legalSystemOverview": {
    "type": "EEA加盟国（MDR/IVDR がEEA協定経由で適用）",
    "description": "アイスランドはEU非加盟だが、EEA協定を通じてEU MDR (2017/745) およびIVDR (2017/746) が国内法に組み込まれている。Act on Medical Devices No. 132/2020（Lög um lækningatæki）が国内実施法。Icelandic Medicines Agency（IMA / Lyfjastofnun）がNCA。国内にNotified Bodyは存在せず、EU/EEA域内NBを利用。EUDAMEDへの登録義務あり（2026年5月28日〜）。",
    "keyCharacteristics": [
      "EEA協定経由でEU MDR/IVDR適用",
      "IMA（Lyfjastofnun）がNCA",
      "Act on Medical Devices No. 132/2020が国内実施法",
      "国内NBなし — EU/EEA域内NBを利用",
      "アイスランド語ラベリング必須（Class I/IIaは英語・北欧語可）",
      "EUDAMED登録義務（2026年5月28日〜）",
      "Sjúkratryggingar Íslandsが医療機器償還管理"
    ]
  },
  "authorities": [
    {
      "name": "IMA",
      "fullName": "Icelandic Medicines Agency",
      "localName": "Lyfjastofnun",
      "role": "NCA: 医療機器の市場監視・ビジランス・流通業者登録・法令遵守監視。EUDAMEDへの登録は製造業者が直接実施。",
      "url": "https://www.ima.is/medical-devices/",
      "isPrimary": true
    },
    {
      "name": "Sjúkratryggingar Íslands",
      "fullName": "Icelandic Health Insurance",
      "localName": "Sjúkratryggingar Íslands",
      "role": "医療機器・補助具の償還管理。国民健康保険に基づく医療費負担軽減。",
      "url": "https://www.sjukra.is/english/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "EU MDR Notified Body（アイスランド国内なし）",
    "description": "アイスランド国内にNotified Bodyは存在しない。製造業者はEU/EEA域内のNBを利用する。EEA協定によりEU域内で発行されたCE証明書はアイスランドで有効。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "EU MDR Article 2(1) がEEA協定経由で適用。Act on Medical Devices No. 132/2020により国内法化。",
    "scope": "IVDはIVDR、SaMD・AI/ML医療機器も対象。",
    "notes": "流通業者はIMAへの登録義務あり。製造業者・輸入業者・認定代理人はEUDAMEDに登録。"
  },
  "primaryLaw": {
    "title": "Act on Medical Devices No. 132/2020",
    "originalTitle": "Lög um lækningatæki nr. 132/2020",
    "enacted": "2020",
    "lastAmended": "要確認",
    "url": "https://www.government.is/library/04-Legislation/Act_on_Medical_Devices%20No132_2020.pdf",
    "description": "EU MDR/IVDRのアイスランド国内実施法。EEA協定に基づきMDR/IVDRを国内法に組み込み。IMAの権限・流通業者登録義務・ビジランス制度等を規定。"
  },
  "implementingRegulations": [
    {
      "title": "Regulation on Medical Devices No. 934/2010",
      "date": "2010",
      "url": "https://www.government.is/media/velferdarraduneyti-media/media/Reglugerdir-enska/Regulation-on-Medical-Devices-No-934-2010.pdf",
      "description": "医療機器に関する規則。分類・適合性評価・流通要件を規定。MDR移行に伴い順次更新。",
      "category": "実施規則"
    },
    {
      "title": "Regulation on Instructions for Use No. 630/2022",
      "date": "2022",
      "url": "https://www.ima.is/instructions-for-use/",
      "description": "医療機器の使用説明書に関する規則。一般消費者向けはアイスランド語必須。Class I/IIaは英語・北欧語（フィンランド語除く）で可。",
      "category": "言語・ラベリング"
    }
  ],
  "relatedLaws": [
    {
      "title": "Regulation (EU) 2017/745 — MDR",
      "category": "EU規則",
      "enacted": "2017",
      "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32017R0745",
      "relevance": "EEA協定経由でアイスランドに適用されるEU医療機器規則。"
    },
    {
      "title": "Regulation (EU) 2017/746 — IVDR",
      "category": "EU規則",
      "enacted": "2017",
      "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32017R0746",
      "relevance": "EEA協定経由でアイスランドに適用されるIVD規則。"
    },
    {
      "title": "GDPR (via EEA)",
      "category": "データ保護",
      "enacted": "2018",
      "url": "https://www.personuvernd.is/information-in-english/",
      "relevance": "健康データ処理に適用。アイスランドデータ保護局（Persónuvernd）が監督。"
    }
  ],
  "classification": {
    "system": "EU MDR 4クラス制",
    "basis": "EU MDR Annex VIII（22のルールに基づくリスクベース分類）。EEA協定経由で直接適用。",
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
    "rules": ["EU MDR Annex VIII（22ルール）がEEA経由で適用"],
    "totalProductCodes": "EU CND"
  },
  "conformityAssessment": {
    "overview": "EU MDR適合性評価がEEA経由で適用。CE証明書はEU/EEA域内NBが発行。アイスランド国内ではIMAへの流通業者登録が必要。製造業者・輸入業者・認定代理人はEUDAMEDに登録。",
    "routes": [
      {
        "name": "EU MDR Conformity Assessment (via EEA)",
        "nameJa": "EU MDR 適合性評価（EEA経由）",
        "applicableClasses": ["Class I", "Class IIa", "Class IIb", "Class III"],
        "description": "EU MDR Annex IX〜XI。EU/EEA域内NBによる適合性評価。Class Iは自己宣言+IMAへの流通業者届出。IMAは機器登録を管理せず、EUDAMEDが登録データベース。流通業者登録フォームはIMAウェブサイトからダウンロード。",
        "subtypes": [],
        "avgReviewTime": "要確認（公式情報で裏付け未取得）— IMAは機器登録を直接管理しないため、NBの審査期間に依存",
        "avgReviewTimeSource": "https://www.ima.is/medical-device-registration/",
        "fee": "IMA料金表（Gjaldskrá lækningatækja）に基づく流通業者登録手数料",
        "feeSource": "https://www.lyfjastofnun.is/wp-content/uploads/2023/01/gjaldskra-laekningataekja-birt-i-stjornartidindum-2023-201222-2.pdf",
        "url": "https://www.ima.is/medical-devices/medical-device-registration-2/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "EUDAMED + IMA流通業者登録",
    "url": "https://www.ima.is/medical-device-registration/",
    "description": "製造業者・輸入業者・認定代理人はEUDAMED（ec.europa.eu/tools/eudamed）に登録。アイスランド国内の流通業者はIMAウェブサイトからフォームをダウンロードし、medical.devices@lyfjastofnun.isに提出。2026年5月28日よりEUDAMED 4モジュール義務化。",
    "mandatory": true
  },
  "udi": {
    "required": true,
    "system": "EU UDI — EUDAMED",
    "description": "EU MDR Article 27に基づくUDI要件がEEA経由で適用。アイスランド固有の追加要件なし。EUDAMED UDI/Deviceデータベースに登録。",
    "url": "https://ec.europa.eu/tools/eudamed/",
    "timeline": "EUDAMED UDI義務化: 2026年5月28日"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "EU Vigilance — IMA",
      "mandatory": true,
      "url": "https://www.ima.is/medical-devices/use-and-vigilance-of-medical-devices/",
      "description": "IMAがビジランスを管轄。製造業者は重篤インシデントをIMAに報告。EUDAMED vigilanceモジュールに移行予定。medical.devices@lyfjastofnun.isで報告受付。"
    },
    "recalls": {
      "authority": "IMA",
      "description": "IMAがFSCA/FSNの通知・市場安全措置を管轄。Act on Medical Devices No. 132/2020に基づく。",
      "url": "https://www.ima.is/medical-devices/about-medical-devices/"
    },
    "surveillance": "EU MDR PMS/PSUR/PMCF要件がEEA経由で適用。IMAが市場監視を実施。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "IMA",
    "name": "Certificate of Free Sale",
    "description": "IMAが登録済み製品のCFSを発行。要確認（具体的な手続き・手数料は公式情報で裏付け未取得）。",
    "processingTime": "要確認（公式情報で裏付け未取得）",
    "url": "https://www.ima.is/published_material/forms/"
  },
  "reimbursement": {
    "system": "国民健康保険（Sjúkratryggingar Íslands）",
    "authority": "Sjúkratryggingar Íslands（Icelandic Health Insurance）",
    "description": "Sjúkratryggingar Íslandsが国民健康保険を運営。医療機器・補助具は処方に基づき一部償還。補助具（hjálpartæki）は別途給付制度あり。具体的な医療機器償還リストの詳細は要確認。",
    "codingSystems": [],
    "url": "https://www.sjukra.is/english/"
  },
  "marketingRules": {
    "authority": "IMA",
    "description": "Regulation No. 630/2022に基づく言語要件。一般消費者向け医療機器はアイスランド語IFU必須。Class I/IIa機器は英語または北欧語（フィンランド語除く）のIFUで可。専門家使用機器は英語で可。ラベリングはEU MDR要件に準拠。",
    "keyRules": [
      "一般消費者向け: アイスランド語IFU必須",
      "Class I/IIa: 英語・北欧語（フィンランド語除く）のIFU可",
      "専門家使用: 英語IFU可",
      "ラベリング: EU MDR要件に準拠",
      "FSN: アイスランド語推奨"
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
      "description": "Actor・UDI/Device・NB/Certificate・市場監視の4モジュールがEEA-EFTA国を含め義務化。アイスランドの製造業者・流通業者もEUDAMED登録必須に。"
    },
    {
      "date": "2022",
      "title": "Regulation No. 630/2022（IFU言語要件）施行",
      "description": "医療機器の使用説明書に関する新規則。Class I/IIaは英語・北欧語可とする緩和措置を含む。"
    },
    {
      "date": "2020",
      "title": "Act on Medical Devices No. 132/2020 制定",
      "description": "EU MDR/IVDRのEEA経由での国内実施法として制定。IMAの医療機器分野の権限を明確化。"
    }
  ],
  "lastUpdated": "2026-04-03",
  "verified": null
};
