// スロベニア (Slovenia)
export default {
  "code": "SVN",
  "country": "スロベニア",
  "countryEn": "Slovenia",
  "region": "Europe",
  "flag": "🇸🇮",
  "legalSystemOverview": {
    "type": "EU加盟国（MDR/IVDR 直接適用）+ ZMedPri-1 国内補完法",
    "description": "スロベニアはEU加盟国。MDR/IVDRが直接適用。2025年6月施行のZMedPri-1（新医療機器法）が国内補完法。JAZMPがNCA。SIQ Ljubljana (NB 1304) がMDR指定NB。ZZZSが償還管理。",
    "keyCharacteristics": [
      "EU MDR/IVDR 直接適用",
      "ZMedPri-1（2025年6月施行）が国内補完法",
      "JAZMP がNCA",
      "SIQ Ljubljana (NB 1304) がMDR NB",
      "ZZZS が医療機器償還管理",
      "スロベニア語ラベリング・IFU必須",
      "単回使用機器の再処理は不許可",
      "JAMS 2.0 EU共同アクション WP4リーダー"
    ]
  },
  "authorities": [
    {
      "name": "JAZMP",
      "fullName": "Agency for Medicinal Products and Medical Devices of the Republic of Slovenia",
      "localName": "Javna agencija Republike Slovenije za zdravila in medicinske pripomočke",
      "role": "NCA: 市場監視・ビジランス・登録・臨床試験審査・NB監督・CFS発行",
      "url": "https://www.jazmp.si/en/medical-devices/registration-of-medical-devices/",
      "isPrimary": true
    },
    {
      "name": "ZZZS",
      "fullName": "Health Insurance Institute of Slovenia",
      "localName": "Zavod za zdravstveno zavarovanje Slovenije",
      "role": "強制健康保険による医療機器償還管理。供給業者リスト・価格基準管理。",
      "url": "https://www.zzzs.si/en/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "EU MDR Notified Body（スロベニア国内1機関）",
    "description": "SIQ Ljubljana (NB 1304) がMDR指定（2022年3月31日）。Class Is/Im/Ir/IIa/IIb/III対応。Annex IX、Annex XI Part A。",
    "bodies": [
      {
        "nb": "1304",
        "name": "SIQ Ljubljana",
        "url": "https://www.siq.si/en/our-services/organization-certification/about-us/medical-devices/mdr/",
        "mdr": true,
        "ivdr": false
      }
    ]
  },
  "deviceDefinition": {
    "legalDefinition": "EU MDR Article 2(1) がそのまま適用。",
    "scope": "IVD は IVDR。SaMD・AI/ML医療機器も対象。",
    "notes": "ZMedPri-1により経済事業者のJAZMP登録義務を明確化（2025年9月19日期限）。"
  },
  "primaryLaw": {
    "title": "Regulation (EU) 2017/745 — MDR",
    "originalTitle": "Uredba (EU) 2017/745 o medicinskih pripomočkih",
    "enacted": "2017",
    "lastAmended": "2024",
    "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32017R0745",
    "description": "EU MDR直接適用（2021年5月26日全面適用）。移行期間: Class III/インプラントは2027年末、その他は2028年末。"
  },
  "implementingRegulations": [
    {
      "title": "Zakon o medicinskih pripomočkih (ZMedPri-1)",
      "date": "2025-06",
      "url": "https://pisrs.si/pregledPredpisa?id=ZAKO8864",
      "description": "新医療機器法。2025年5月23日国会採択、6月19日施行。MDR/IVDR/EU 2022/123の国内実施。JAZMP権限強化・経済事業者登録・臨床試験・ビジランス・広告規制・罰則を規定。旧法ZMedPriを置換。",
      "category": "国内補完法"
    },
    {
      "title": "Pravilnik o medicinskih pripomočkih（医療機器規則）",
      "date": "2009",
      "url": "https://pisrs.si/Pis.web/pregledPredpisa?id=PRAV9508",
      "description": "医療機器の技術的要件・登録手続等の実施規則。",
      "category": "実施規則"
    }
  ],
  "relatedLaws": [
    {
      "title": "Zakon o zdravstvenem varstvu in zdravstvenem zavarovanju (ZZVZZ)",
      "category": "健康保険",
      "enacted": "1992",
      "url": "https://pisrs.si/pregledPredpisa?id=ZAKO213",
      "relevance": "強制健康保険の根拠法。医療機器償還の法的基盤。"
    },
    {
      "title": "GDPR / Splošna uredba o varstvu podatkov",
      "category": "データ保護",
      "enacted": "2018",
      "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679",
      "relevance": "健康データ処理に適用。"
    }
  ],
  "classification": {
    "system": "EU MDR 4クラス制",
    "basis": "EU MDR Annex VIII（22のルールに基づくリスクベース分類）。",
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
        "description": "最高リスク。NB最も厳格な審査 + EU Expert Panel意見。",
        "examples": ["人工心臓弁", "冠動脈ステント", "人工股関節", "植込み型除細動器", "吸収性縫合糸"],
        "approvalPath": "NB適合性評価 + Expert Panel"
      }
    ],
    "rules": ["EU MDR Annex VIII（22ルール）直接適用"],
    "totalProductCodes": "EU CND"
  },
  "conformityAssessment": {
    "overview": "EU MDR適合性評価がそのまま適用。SIQ Ljubljana (NB 1304) が国内NB。JAZMPへの機器登録（5年有効）が必要。Class I登録は4〜6週間。",
    "routes": [
      {
        "name": "EU MDR Conformity Assessment",
        "nameJa": "EU MDR 適合性評価",
        "applicableClasses": ["Class I", "Class IIa", "Class IIb", "Class III"],
        "description": "Annex IX〜XI。SIQ Ljubljana (NB 1304) または他EU域内NB。Class IはDoC + JAZMP届出。登録有効期間5年。市場参入から15日以内に届出義務。",
        "subtypes": [],
        "avgReviewTime": "Class I登録: 4〜6週間。NB審査: EUプロファイル参照",
        "avgReviewTimeSource": "https://www.jazmp.si/en/medical-devices/registration-of-medical-devices/",
        "fee": "要確認（JAZMP料金表 Uradni list RS No. 6/26で規定）",
        "feeSource": "https://www.jazmp.si/en/medical-devices/general-information-on-medical-devices/legislation/",
        "url": "https://www.jazmp.si/en/medical-devices/economic-operators-and-their-registration/"
      }
    ]
  },
  "electronicSubmission": {
    "system": "SPOT ポータル + EUDAMED",
    "url": "https://www.jazmp.si/en/medical-devices/registration-of-medical-devices/",
    "description": "SPOT（Slovenian Business Point）経由で電子申請可能。紙の申請もJAZMPに直接送付可。SI-CeVで文書の電子配信。2026年5月28日よりEUDAMED 4モジュール義務化。",
    "mandatory": true
  },
  "udi": {
    "required": true,
    "system": "EU UDI — EUDAMED",
    "description": "EU MDR Article 27に基づくUDI要件適用。スロベニア固有の追加要件なし。",
    "url": "https://ec.europa.eu/tools/eudamed/",
    "timeline": "EUDAMED UDI義務化: 2026年5月28日。既存登録移行: 2026年11月28日まで"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "EU Vigilance — JAZMP",
      "mandatory": true,
      "url": "https://www.jazmp.si/en/medical-devices/medical-device-vigilance/",
      "description": "ZMedPri-1第30条に基づくビジランス制度。製造業者は重篤インシデントをJAZMPに報告。FSN（安全性情報通知）はスロベニア語必須。JAMS 2.0共同検査キャンペーンに参加。"
    },
    "recalls": {
      "authority": "JAZMP",
      "description": "FSCA/FSNをJAZMPに通知。JAZMPが市場監視・是正措置を実施。",
      "url": "https://www.jazmp.si/en/medical-devices/medical-device-vigilance/"
    },
    "surveillance": "EU MDR PMS/PSUR/PMCF要件適用。JAZMPが市場監視を実施。JAMS 2.0 WP4リーダー。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "JAZMP",
    "name": "Certificate of Free Sale",
    "description": "JAZMPが発行。登録簿に有効な登録があること・EUDAMED登録が必要。Class I/Class A: 発行から1年有効。高リスククラス: NB証明書有効期限に連動。手数料: EUR 150（税別）。",
    "processingTime": "要確認（公式情報で裏付け未取得）",
    "url": "https://www.jazmp.si/en/medical-devices/certificate-of-free-sale/"
  },
  "reimbursement": {
    "system": "強制健康保険（ZZZS）",
    "authority": "ZZZS (Zavod za zdravstveno zavarovanje Slovenije)",
    "description": "強制健康保険に基づく医療機器償還。ZZZS供給業者リストに登録された機器が対象。処方箋に基づき薬局・専門店で支給。複雑な医療機器はZZZS指定医師の承認が必要。",
    "codingSystems": [
      "ZZZS供給業者・医療機器リスト"
    ],
    "url": "https://www.zzzs.si/zzzs-api/seznam-dobaviteljev-medicinskih-pripomockov/iskanje-po-medicinskih-pripomockih/"
  },
  "marketingRules": {
    "authority": "JAZMP",
    "description": "スロベニア語ラベリング・IFU必須。翻訳はオリジナルと同一内容。広告規制: 一般向け医療機器広告に科学用語の使用制限。罰則: 法人EUR 800〜4,000。",
    "keyRules": [
      "スロベニア語ラベリング・IFU必須",
      "FSN: スロベニア語必須",
      "広告: 一般に知られていない科学用語の使用制限",
      "広告違反罰則: 法人EUR 800〜4,000"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "EU加盟国としてMDSAP非参加。"
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
      "date": "2025-06",
      "title": "ZMedPri-1（新医療機器法）施行",
      "description": "2025年5月23日国会採択、6月19日施行。MDR/IVDR/EU 2022/123の国内実施。JAZMP権限強化・経済事業者登録義務化。旧法ZMedPriを置換。"
    },
    {
      "date": "2026-05",
      "title": "EUDAMED義務化（2026年5月28日）",
      "description": "Actor・UDI/Device・NB/Certificate・市場監視の4モジュール義務化。"
    },
    {
      "date": "2026-01",
      "title": "JAZMP医療機器料金表公布",
      "description": "Uradni list RS No. 6/26で新料金表を公布。年次手数料等を規定。"
    },
    {
      "date": "2026-01",
      "title": "JAMS 2.0共同検査キャンペーン報告書公開",
      "description": "EU4Health共同アクション。2024年3月〜2025年7月に6件のスロベニア製造業者を共同検査。JAZMPがWP4リーダー。"
    }
  ],
  "lastUpdated": "2026-04-03",
  "verified": null
};
