// スロバキア (Slovakia)
export default {
  "code": "SVK",
  "country": "スロバキア",
  "countryEn": "Slovakia",
  "region": "Europe",
  "flag": "🇸🇰",
  "legalSystemOverview": {
    "type": "EU加盟国（MDR/IVDR 直接適用）",
    "description": "スロバキアはEU加盟国（2004年加盟）であり、Regulation (EU) 2017/745（MDR）および Regulation (EU) 2017/746（IVDR）が直接適用される。国内補完法として Zákon č. 56/2018 Z.z. o posudzovaní zhody výrobku（適合性評価法）および関連法令が施行されている。ŠÚKL（Štátny ústav pre kontrolu liečiv / 国家医薬品管理局）がNCAとして医療機器の市場監視・ビジランスを管轄する。",
    "keyCharacteristics": [
      "EU MDR/IVDR が直接適用",
      "ŠÚKL がNCAとして市場監視・ビジランスを担当",
      "Zákon č. 56/2018 Z.z. による国内補完",
      "ラベリング・IFU はスロバキア語必須",
      "国内にNotified Body なし（EU域内他国のNBを利用）",
      "2004年EU加盟後、規制体制をEU基準に完全移行"
    ]
  },
  "authorities": [
    {
      "name": "ŠÚKL",
      "fullName": "State Institute for Drug Control",
      "localName": "Štátny ústav pre kontrolu liečiv",
      "role": "NCA: 医療機器の市場監視・ビジランス・臨床試験監督・登録管理",
      "url": "https://www.sukl.sk/",
      "isPrimary": true
    },
    {
      "name": "MZ SR",
      "fullName": "Ministry of Health of the Slovak Republic",
      "localName": "Ministerstvo zdravotníctva Slovenskej republiky",
      "role": "医療機器政策立案・法整備",
      "url": "https://www.health.gov.sk/",
      "isPrimary": false
    },
    {
      "name": "VšZP",
      "fullName": "General Health Insurance Company",
      "localName": "Všeobecná zdravotná poisťovňa",
      "role": "公的医療保険（最大の保険者）",
      "url": "https://www.vszp.sk/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "EU MDR Notified Body 制度（スロバキア国内に指定機関なし）",
    "description": "スロバキア国内にMDR指定Notified Bodyは存在しない。製造業者はEU域内他国の指定NBを利用する。",
    "bodies": []
  },
  "deviceDefinition": {
    "legalDefinition": "EU MDR Article 2(1) の定義がそのまま適用。",
    "scope": "IVD は IVDR で別途規定。SaMD・AI/ML 搭載機器も対象。美容目的製品（Annex XVI）も適用。",
    "notes": "MDR の定義がそのまま国内法に適用。追加的な定義変更なし。"
  },
  "primaryLaw": {
    "title": "Regulation (EU) 2017/745 — Medical Devices Regulation (MDR)",
    "originalTitle": null,
    "enacted": "2017（EU採択）/ 2021年5月26日適用",
    "lastAmended": "2025（Regulation (EU) 2025/2457）",
    "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32017R0745",
    "description": "EU MDR がスロバキアに直接適用。Zákon č. 56/2018 Z.z. が国内補完法。"
  },
  "implementingRegulations": [
    {
      "title": "Zákon č. 56/2018 Z.z. o posudzovaní zhody výrobku（適合性評価法）",
      "date": "2018",
      "url": "https://www.slov-lex.sk/pravne-predpisy/SK/ZZ/2018/56/",
      "description": "MDR/IVDR 国内補完法。NCA権限・罰則・登録義務・適合性評価。",
      "category": "国内補完法"
    },
    {
      "title": "Zákon č. 362/2011 Z.z. o liekoch a zdravotníckych pomôckach（医薬品・医療機器法）",
      "date": "2011（随時改正）",
      "url": "https://www.slov-lex.sk/pravne-predpisy/SK/ZZ/2011/362/",
      "description": "医薬品・医療機器の包括的法律。ŠÚKL の権限・組織。",
      "category": "包括法"
    }
  ],
  "relatedLaws": [
    {
      "title": "GDPR (Regulation (EU) 2016/679)",
      "category": "データ保護",
      "enacted": "2018",
      "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679",
      "relevance": "健康データに適用。Zákon č. 18/2018 Z.z. o ochrane osobných údajov も併存。"
    },
    {
      "title": "AI Act — Regulation (EU) 2024/1689",
      "category": "人工知能",
      "enacted": "2024",
      "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32024R1689",
      "relevance": "AI搭載医療機器はHigh-Risk AI System。"
    }
  ],
  "classification": {
    "system": "EU MDR 4クラス制（Class I / IIa / IIb / III）",
    "basis": "EU MDR Annex VIII の22分類規則がそのまま適用。",
    "classes": [
      {
        "name": "Class I",
        "nameJa": "クラスI",
        "riskLevel": "低",
        "description": "低リスク。自己宣言（Im/Is/Ir除く）。",
        "examples": [
          "弾性包帯",
          "聴診器",
          "車椅子"
        ],
        "approvalPath": "自己宣言"
      },
      {
        "name": "Class IIa",
        "nameJa": "クラスIIa",
        "riskLevel": "中低",
        "description": "中低リスク。NB関与。",
        "examples": [
          "補聴器",
          "超音波装置",
          "コンタクトレンズ"
        ],
        "approvalPath": "Notified Body審査"
      },
      {
        "name": "Class IIb",
        "nameJa": "クラスIIb",
        "riskLevel": "中高",
        "description": "中高リスク。NB詳細審査。",
        "examples": [
          "人工呼吸器",
          "血液透析装置",
          "輸液ポンプ"
        ],
        "approvalPath": "Notified Body審査"
      },
      {
        "name": "Class III",
        "nameJa": "クラスIII",
        "riskLevel": "高",
        "description": "最高リスク。",
        "examples": [
          "人工心臓弁",
          "冠動脈ステント",
          "乳房インプラント"
        ],
        "approvalPath": "NB審査 + Expert Panel相談"
      }
    ],
    "rules": [
      "EU MDR Annex VIII の22分類規則を直接適用"
    ],
    "totalProductCodes": "EU CND コード"
  },
  "conformityAssessment": {
    "overview": "EU MDR に基づく適合性評価がそのまま適用。国内追加の市販前審査なし。ŠÚKL への事業者登録が必要。",
    "routes": [
      {
        "name": "EU MDR Conformity Assessment",
        "nameJa": "EU MDR 適合性評価",
        "applicableClasses": [
          "全クラス"
        ],
        "description": "EU MDR Annex IX〜XI。詳細はEUプロファイル参照。",
        "subtypes": [],
        "avgReviewTime": "EUプロファイル参照",
        "fee": "Notified Body により異なる（EU域内他国のNBを利用）",
        "url": "https://www.sukl.sk/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "EUDAMED + ŠÚKL 国内登録",
    "url": "https://www.sukl.sk/",
    "description": "EUDAMED + ŠÚKL 事業者登録。EUDAMED 4モジュール義務化: 2026年5月28日。",
    "mandatory": true
  },
  "udi": {
    "required": true,
    "system": "EU UDI System — EUDAMED",
    "description": "EU MDR Article 27-29 UDI 要件がそのまま適用。",
    "url": "https://ec.europa.eu/tools/eudamed/",
    "timeline": "EUDAMED義務化: 2026年5月28日"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "EU Vigilance System — ŠÚKL",
      "mandatory": true,
      "url": "https://www.sukl.sk/",
      "description": "重篤有害事象をŠÚKLに報告義務。MDR Article 87-92。"
    },
    "recalls": {
      "authority": "ŠÚKL",
      "description": "FSCA/FSNはŠÚKLに通知。ŠÚKLが市場からの回収命令権限を有する。",
      "url": "https://www.sukl.sk/"
    },
    "surveillance": "EU MDR PMS/PSUR/PMCF要件がそのまま適用。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "ŠÚKL",
    "name": "Certificate of Free Sale (CFS)",
    "description": "ŠÚKL がCFSを発行。",
    "processingTime": "要確認",
    "url": "https://www.sukl.sk/"
  },
  "reimbursement": {
    "system": "社会健康保険制度（複数保険者制）",
    "authority": "MZ SR / VšZP 他3保険者",
    "description": "スロバキアは3つの健康保険会社（VšZP、Dôvera、Union）による社会健康保険制度。医療機器の償還はMZ SR が策定する「カテゴリー化リスト」に基づく。インプラント・補装具はリスト掲載が必要。DRG制度を導入済み。",
    "codingSystems": [
      "SK-DRG",
      "カテゴリー化リスト"
    ],
    "url": "https://www.health.gov.sk/"
  },
  "marketingRules": {
    "authority": "ŠÚKL",
    "description": "MDR Article 7 虚偽広告禁止。スロバキア国内法に基づく広告規制。",
    "keyRules": [
      "スロバキア語ラベリング・IFU必須",
      "MDR Article 7 虚偽広告禁止"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "EU加盟国としてMDSAP非参加。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "EU MDR QMS要件に基づき実質必須。EN ISO 13485:2016。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "EN ISO 14971:2019 + A11:2021。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "EN IEC 62304:2006 + A1:2015。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "EN IEC 60601 シリーズ。"
    },
    "others": []
  },
  "recentDevelopments": [
    {
      "date": "2025",
      "title": "MDR延長規則適用",
      "description": "Regulation (EU) 2025/2457 による移行期間延長。MDD証書の段階的失効スケジュール適用。"
    },
    {
      "date": "2024",
      "title": "EUDAMED義務化準備",
      "description": "EUDAMED 4モジュール2026年5月28日義務化に向けた準備。"
    }
  ],
  "lastUpdated": "2026-04-02",
  "verified": null
};
