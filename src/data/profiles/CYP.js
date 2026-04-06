// キプロス (Cyprus)
export default {
  "code": "CYP",
  "country": "キプロス",
  "countryEn": "Cyprus",
  "region": "Europe",
  "flag": "🇨🇾",
  "legalSystemOverview": {
    "type": "EU加盟国（MDR/IVDR 直接適用）",
    "description": "キプロスはEU加盟国。MDR/IVDRが直接適用。CYMDAがNCA。HTCert (NB 2803) がキプロス唯一のMDR指定NB（2023年7月指定）。GESY（一般医療制度）が償還。国内医療機器製造産業はなく約75%がEU諸国からの輸入。",
    "keyCharacteristics": [
      "EU MDR/IVDR 直接適用",
      "CYMDA がNCA（Department of Medical and Public Health Services内）",
      "HTCert (NB 2803) がキプロス唯一のMDR NB",
      "GESY/GHS 一般医療制度（2019年開始）",
      "医療従事者向け: 英語またはギリシャ語、一般使用者向け: ギリシャ語必須",
      "全医療機器にCYMDAへの市場通知義務",
      "国内医療機器製造産業なし（輸入依存）",
      "メール通知方式（専用電子ポータルなし）+ EUDAMED"
    ]
  },
  "authorities": [
    {
      "name": "CYMDA",
      "fullName": "Cyprus Medical Devices Competent Authority",
      "localName": null,
      "role": "NCA: 医療機器の市場通知受付・市販後監視・ビジランス・CFS発行・EU MDR/IVDR国内執行",
      "url": "https://www.moh.gov.cy/moh/mphs/mphs.nsf/All/A82FE3D75F4BF2CAC225850A0036075A",
      "isPrimary": true
    },
    {
      "name": "HIO",
      "fullName": "Health Insurance Organisation",
      "localName": "Οργανισμός Ασφάλισης Υγείας",
      "role": "GESY（一般医療制度）運営。医療機器の償還・カタログ管理。",
      "url": "https://www.gesy.org.cy",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "EU MDR Notified Body（キプロス国内1機関）",
    "description": "HTCert (NB 2803) がキプロス唯一のMDR指定NB（2023年7月、NANDO上39番目のMDR NB）。IVDR指定は未確認。",
    "bodies": [
      {
        "nb": "2803",
        "name": "HTCert (Health Technology Certification Ltd)",
        "url": "https://htcert.com/",
        "mdr": true,
        "ivdr": false
      }
    ]
  },
  "deviceDefinition": {
    "legalDefinition": "EU MDR Article 2(1) がそのまま適用。",
    "scope": "IVD は IVDR。SaMD・AI/ML医療機器も対象。",
    "notes": "CE適合済みでも、キプロス市場投入にはCYMDAへの通知が必須。"
  },
  "primaryLaw": {
    "title": "Regulation (EU) 2017/745 — MDR",
    "originalTitle": "Κανονισμός (ΕΕ) 2017/745 για τα ιατροτεχνολογικά προϊόντα",
    "enacted": "2017",
    "lastAmended": "2024",
    "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32017R0745",
    "description": "EU MDR直接適用（2021年5月26日全面適用）。移行期間: Class III/インプラントは2027年末、その他は2028年末。Class IIIカスタムメイドインプラントは2026年5月26日まで。"
  },
  "implementingRegulations": [
    {
      "title": "Law 30(I)/2002 — Basic Requirements of Certain Categories of Products",
      "date": "2002",
      "url": "https://www.moh.gov.cy/moh/mphs/mphs.nsf/All/A82FE3D75F4BF2CAC225850A0036075A",
      "description": "旧EU指令（93/42/EEC, 90/385/EEC, 98/79/EC）のトランスポジション。EU MDR/IVDR施行後も言語要件等で参照。",
      "category": "旧国内法"
    },
    {
      "title": "R.A.A. 598/2003 — Basic Requirements (Medical Devices) Regulations",
      "date": "2003",
      "url": "https://www.moh.gov.cy/moh/mphs/mphs.nsf/All/A82FE3D75F4BF2CAC225850A0036075A",
      "description": "旧指令の技術的要件実施規則。",
      "category": "旧実施規則"
    }
  ],
  "relatedLaws": [
    {
      "title": "Law No. 89(I)/2001 — General Healthcare System Law",
      "category": "医療保険",
      "enacted": "2001",
      "url": "https://patientjourneycy.org/en/farmaka-farmakeia-kai-ta-analosima/",
      "relevance": "GESY（一般医療制度）の根拠法。医療機器償還の法的基盤。2017年改正。"
    },
    {
      "title": "GDPR / Γενικός Κανονισμός Προστασίας Δεδομένων",
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
    "overview": "EU MDR適合性評価がそのまま適用。HTCert (NB 2803) が国内NB。全医療機器にCYMDAへのNotification（通知）が必要。",
    "routes": [
      {
        "name": "EU MDR Conformity Assessment",
        "nameJa": "EU MDR 適合性評価",
        "applicableClasses": ["Class I", "Class IIa", "Class IIb", "Class III"],
        "description": "Annex IX〜XI。HTCert (NB 2803) またはEU域内他国NB。Class IはDoC + CYMDA通知。Class I登録目安: 4〜6週間。",
        "subtypes": [],
        "avgReviewTime": "Class I通知: 4〜6週間。NB審査: EUプロファイル参照",
        "avgReviewTimeSource": "https://www.emergobyul.com/resources/market-european-union",
        "fee": "NB審査料（NB・クラスにより異なる）",
        "feeSource": "https://health.ec.europa.eu/document/download/ff5716d5-fe77-4f45-b883-fcf3da4acd15_en?filename=md_nbs_fees_en.pdf",
        "url": "https://www.moh.gov.cy/moh/mphs/mphs.nsf/All/A82FE3D75F4BF2CAC225850A0036075A"
      }
    ]
  },
  "electronicSubmission": {
    "system": "メール通知 + EUDAMED",
    "url": "https://www.moh.gov.cy/moh/mphs/mphs.nsf/All/A82FE3D75F4BF2CAC225850A0036075A",
    "description": "専用電子ポータルなし。Notification-of-Medical-Devices.xlsxフォームをダウンロード・記入し、cymda@mphs.moh.gov.cyにメール送信。CYMDAが確認を返信。2026年5月28日よりEUDAMED 4モジュール義務化。",
    "mandatory": true
  },
  "udi": {
    "required": true,
    "system": "EU UDI — EUDAMED",
    "description": "EU MDR Article 27に基づくUDI要件適用。",
    "url": "https://ec.europa.eu/tools/eudamed/",
    "timeline": "EUDAMED UDI義務化: 2026年5月28日"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "EU Vigilance — CYMDA",
      "mandatory": true,
      "url": "https://www.moh.gov.cy/moh/mphs/mphs.nsf/All/3B6D3D540D2C606CC225850A0035DA3E",
      "description": "EU MDR Article 87準拠。重大な公衆衛生脅威: 2日以内、死亡/予期しない重篤悪化: 10日以内、その他重大インシデント: 15日以内。CYMDAにメール報告（cymda@mphs.moh.gov.cy）。EUDAMED Vigilanceモジュールは2026年Q3に機能宣言予定。"
    },
    "recalls": {
      "authority": "CYMDA",
      "description": "FSCA/FSNをCYMDAに通知。",
      "url": "https://htcert.com/"
    },
    "surveillance": "EU MDR PMS/PSUR/PMCF要件適用。CYMDAが市場監視を実施。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "CYMDA",
    "name": "Certificate of Free Sale",
    "description": "EU MDR第60条に基づきCYMDAが発行。キプロスに事業所を登録している製造業者またはARが対象。",
    "processingTime": "要確認（公式情報で裏付け未取得）",
    "url": "https://www.moh.gov.cy/moh/mphs/mphs.nsf/All/3B6D3D540D2C606CC225850A0035DA3E"
  },
  "reimbursement": {
    "system": "GESY（一般医療制度）",
    "authority": "HIO (Health Insurance Organisation)",
    "description": "2019年6月開始（外来）、2020年6月（入院）。医療機器・消耗品をカバー。自己負担: 1アイテムEUR 1.00。特定機器はHIOの事前承認が必要。「Catalogue of covered medical devices and health supplies」に収載。",
    "codingSystems": [
      "HIO医療機器カタログ"
    ],
    "url": "https://patientjourneycy.org/en/farmaka-farmakeia-kai-ta-analosima/"
  },
  "marketingRules": {
    "authority": "CYMDA",
    "description": "医療従事者専用機器: 英語またはギリシャ語。一般使用者向け機器: ギリシャ語必須。事前承認不要（英語使用に当局の事前許可は不要）。",
    "keyRules": [
      "医療従事者向け: 英語またはギリシャ語（ラベル・IFU）",
      "一般使用者向け: ギリシャ語必須（ラベル・IFU）",
      "英語使用に事前承認不要",
      "全医療機器にCYMDAへの市場通知義務"
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
      "date": "2026-05",
      "title": "EUDAMED義務化（2026年5月28日）",
      "description": "Actor・UDI/Device・NB/Certificate・市場監視の4モジュール義務化。"
    },
    {
      "date": "2024-06",
      "title": "EU AI Act採択 — 医療機器SaMDへの影響",
      "description": "Regulation (EU) 2024/1689。医療目的のAI/MLソフトウェアがMDRとの二重規制対象に。"
    },
    {
      "date": "2023-07",
      "title": "HTCert (NB 2803) MDR指定",
      "description": "キプロス初のMDR通知機関として正式指定。NANDO上39番目のMDR NB。"
    }
  ],
  "lastUpdated": "2026-04-03",
  "verified": null
};
