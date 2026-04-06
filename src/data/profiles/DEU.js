// ドイツ (Germany)
export default {
  "code": "DEU",
  "country": "ドイツ",
  "countryEn": "Germany",
  "region": "Europe",
  "flag": "🇩🇪",
  "legalSystemOverview": {
    "type": "EU加盟国（MDR/IVDR 直接適用）+ MPDG 国内補完法",
    "description": "ドイツはEU最大の医療機器市場。EU MDR/IVDRが直接適用され、MPDG（Medizinprodukterecht-Durchführungsgesetz）が国内補完法として臨床試験・市場監視・罰則等を規定。BfARMがNCA、ZLGがNB指定機関。DiGA制度（デジタル治療アプリの法定給付）は世界初の枠組み。NB数は欧州最多級（TÜV SÜD、TÜV Rheinland、DEKRA等）。",
    "keyCharacteristics": [
      "EU MDR/IVDR 直接適用",
      "MPDG（2020年制定・2021年5月施行）が国内補完法",
      "BfArM がNCA（市場監視・臨床試験・ビジランス）",
      "ZLG がNB指定・監督機関",
      "ドイツ語ラベリング・IFU必須",
      "DiGA制度（デジタル治療アプリ法定給付）— 世界初",
      "DMIDS（国内電子申請）→ 2026年5月EUDAMED義務化",
      "NB数 欧州最多級（TÜV SÜD、TÜV Rheinland、DEKRA等）"
    ]
  },
  "authorities": [
    {
      "name": "BfArM",
      "fullName": "Federal Institute for Drugs and Medical Devices",
      "localName": "Bundesinstitut für Arzneimittel und Medizinprodukte",
      "role": "NCA: 市場監視・ビジランス・臨床試験審査・分類判定・DiGA審査・OPS/ICD維持管理",
      "url": "https://www.bfarm.de/EN/Medical-devices/_node.html",
      "isPrimary": true
    },
    {
      "name": "ZLG",
      "fullName": "Central Authority of the Länder for Health Protection with regard to Medicinal Products and Medical Devices",
      "localName": "Zentralstelle der Länder für Gesundheitsschutz bei Arzneimitteln und Medizinprodukten",
      "role": "NB指定・監督機関（MDR Article 42に基づく指定手続）",
      "url": "https://www.zlg.de/en/medical-devices/documents/bodies/notified-bodies/",
      "isPrimary": false
    },
    {
      "name": "BMG",
      "fullName": "Federal Ministry of Health",
      "localName": "Bundesministerium für Gesundheit",
      "role": "医療機器政策の最上位監督省庁。BfArM所管。",
      "url": "https://www.bundesgesundheitsministerium.de/en/en/ministry/authorities-within-the-remit/federal-institute-for-drugs-and-medical-devices-b.html",
      "isPrimary": false
    },
    {
      "name": "G-BA",
      "fullName": "Federal Joint Committee",
      "localName": "Gemeinsamer Bundesausschuss",
      "role": "医療技術評価（HTA）・高リスク機器の給付評価・NUB評価",
      "url": "https://www.g-ba.de/english/",
      "isPrimary": false
    },
    {
      "name": "Länder当局",
      "fullName": "State Competent Authorities",
      "localName": "Landesbehörden",
      "role": "MPDG §77に基づく市場監視の実施主体（16州各当局）",
      "url": null,
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "EU MDR/IVDR Notified Body（ドイツ国内複数機関 — 欧州最多級）",
    "description": "ZLGが指定機関。TÜV SÜD、TÜV Rheinland、DEKRA、DQS、MDC、DNV MedCert等がMDR/IVDR指定を取得。NANDOデータベースで最新リスト確認可。",
    "bodies": [
      {
        "nb": "0123",
        "name": "TÜV SÜD Product Service GmbH",
        "url": "https://www.tuvsud.com/en/services/product-certification/ps-cert",
        "mdr": true,
        "ivdr": true
      },
      {
        "nb": "0197",
        "name": "TÜV Rheinland LGA Products GmbH",
        "url": "https://www.tuv.com/world/en/medical-devices.html",
        "mdr": true,
        "ivdr": true
      },
      {
        "nb": "0124",
        "name": "DEKRA Certification GmbH",
        "url": "https://www.dekra.com/en/notified-bodies/",
        "mdr": true,
        "ivdr": true
      },
      {
        "nb": "0297",
        "name": "DQS Medizinprodukte GmbH",
        "url": "https://www.dqsglobal.com/en/explore/dqs-knowledge-center/conformity-assessment-procedures-for-medical-devices",
        "mdr": true,
        "ivdr": false
      },
      {
        "nb": "0483",
        "name": "MDC Medical Device Certification GmbH",
        "url": "https://www.mdc-ce.de/",
        "mdr": true,
        "ivdr": false
      },
      {
        "nb": "0482",
        "name": "DNV MedCert GmbH",
        "url": "https://www.dnv.com/services/dnv-medcert-certification-services/",
        "mdr": true,
        "ivdr": true
      }
    ]
  },
  "deviceDefinition": {
    "legalDefinition": "EU MDR Article 2(1) がそのまま適用。「人の身体に対する主たる意図された作用が薬理学的・免疫学的・代謝的手段によって得られないもの」。",
    "scope": "IVD は IVDR (EU) 2017/746。SaMD・AI/ML医療機器も対象。DiGA（デジタル治療アプリ）はClass I/IIa医療機器として規制。",
    "notes": "MPDG §2がMDR/IVDRの適用範囲を国内法に統合。BfArMがMPDG §85に基づき分類判定を行う。"
  },
  "primaryLaw": {
    "title": "Regulation (EU) 2017/745 — MDR",
    "originalTitle": "Verordnung (EU) 2017/745 über Medizinprodukte",
    "enacted": "2017",
    "lastAmended": "2024",
    "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32017R0745",
    "description": "EU MDR直接適用（2021年5月26日全面適用）。移行期間: Class III/インプラントは2027年末、その他は2028年末まで（Regulation (EU) 2023/607による延長）。"
  },
  "implementingRegulations": [
    {
      "title": "Medizinprodukterecht-Durchführungsgesetz (MPDG)",
      "date": "2020-04",
      "url": "https://www.gesetze-im-internet.de/mpdg/BJNR096010020.html",
      "description": "MDR/IVDR国内補完法。臨床試験手続・市場監視・NB監督・罰則・言語要件等を規定。2021年5月26日施行。最終改正: 2024年10月23日。",
      "category": "国内補完法"
    },
    {
      "title": "Medizinprodukte-Anwendermelde- und Informationsverordnung (MPAMIV)",
      "date": "2021",
      "url": "https://www.gesetze-im-internet.de/mpamiv/",
      "description": "医療機関による有害事象報告義務・安全情報伝達を規定。",
      "category": "ビジランス"
    },
    {
      "title": "Medizinprodukte-Betreiberverordnung (MPBetreibV)",
      "date": "2025-02",
      "url": "https://www.gesetze-im-internet.de/mpbetreibv_2025/",
      "description": "医療機器の運用・保守・安全点検義務。操作者・医療機関向け。2025年2月全面改正（ソフトウェアテスト要件追加等）。",
      "category": "事業者規制"
    },
    {
      "title": "Digitale-Gesundheitsanwendungen-Verordnung (DiGAV)",
      "date": "2020-04",
      "url": "https://www.bfarm.de/EN/Medical-devices/Tasks/DiGA-and-DiPA/Digital-Health-Applications/_node.html",
      "description": "DiGA（デジタル治療アプリ）のBfArM審査手続・償還基準・エビデンス要件を規定。2026年からClass IIb低リスクにも拡大。",
      "category": "DiGA"
    }
  ],
  "relatedLaws": [
    {
      "title": "Sozialgesetzbuch V (SGB V)",
      "category": "社会保険",
      "enacted": "1988",
      "url": "https://www.gesetze-im-internet.de/sgb_5/",
      "relevance": "法定医療保険制度。医療機器の給付・償還・NUB・DiGA給付の根拠法。"
    },
    {
      "title": "GDPR / Datenschutz-Grundverordnung",
      "category": "データ保護",
      "enacted": "2018",
      "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679",
      "relevance": "健康データ処理に適用。DiGA・SaMDのデータ保護要件。"
    },
    {
      "title": "Heilmittelwerbegesetz (HWG)",
      "category": "広告規制",
      "enacted": "1965",
      "url": "https://www.gesetze-im-internet.de/heilmwerbg/",
      "relevance": "医療機器・医薬品の広告規制。患者向け広告の制限。"
    }
  ],
  "classification": {
    "system": "EU MDR 4クラス制",
    "basis": "EU MDR Annex VIII（22のルールに基づくリスクベース分類）。MPDG §85によりBfArMが分類争議の判定権限を持つ。",
    "classes": [
      {
        "name": "Class I",
        "nameJa": "クラスI",
        "riskLevel": "低",
        "description": "低リスク機器。自己宣言（Is: 滅菌、Im: 計測、Ir: 再使用手術器具はNB関与）。",
        "examples": [
          "弾性包帯",
          "聴診器",
          "車椅子",
          "非滅菌手袋",
          "冷却パック"
        ],
        "approvalPath": "自己宣言（DoC）"
      },
      {
        "name": "Class IIa",
        "nameJa": "クラスIIa",
        "riskLevel": "中低",
        "description": "中低リスク。NB関与必須（Annex IX Chapter I + III、またはAnnex XI Part A）。",
        "examples": [
          "補聴器",
          "超音波診断装置",
          "歯科用充填材",
          "吸引カテーテル",
          "血圧計"
        ],
        "approvalPath": "NB適合性評価"
      },
      {
        "name": "Class IIb",
        "nameJa": "クラスIIb",
        "riskLevel": "中高",
        "description": "中高リスク。NB詳細審査。技術文書全体のサンプリングまたは完全審査。",
        "examples": [
          "人工呼吸器",
          "輸液ポンプ",
          "血液透析装置",
          "X線装置",
          "骨接合プレート"
        ],
        "approvalPath": "NB適合性評価"
      },
      {
        "name": "Class III",
        "nameJa": "クラスIII",
        "riskLevel": "高",
        "description": "最高リスク。NB最も厳格な審査 + EU Expert Panel意見（インプラント・Class III）。",
        "examples": [
          "人工心臓弁",
          "冠動脈ステント",
          "人工股関節",
          "植込み型除細動器",
          "吸収性縫合糸"
        ],
        "approvalPath": "NB適合性評価 + Expert Panel"
      }
    ],
    "rules": [
      "EU MDR Annex VIII（22ルール）直接適用",
      "BfArMがMPDG §85に基づき分類争議を判定"
    ],
    "totalProductCodes": "EU CND（European Nomenclature of Medical Devices）"
  },
  "conformityAssessment": {
    "overview": "EU MDR Annex IX〜XIに基づく適合性評価がそのまま適用。加えてDMIDSでの国内登録が必要。DiGA制度はBfArM独自の迅速審査パスウェイ。",
    "routes": [
      {
        "name": "EU MDR Conformity Assessment",
        "nameJa": "EU MDR 適合性評価",
        "applicableClasses": ["Class I", "Class IIa", "Class IIb", "Class III"],
        "description": "Annex IX（QMS + 技術文書審査）、Annex X（型式検査）、Annex XI（製品検査）の組合せ。Class IはDoC（Is/Im/Irを除く）。詳細はEUプロファイル参照。",
        "subtypes": [
          "Annex IX: QMS + 技術文書審査",
          "Annex X: 型式検査",
          "Annex XI: 製造適合性審査"
        ],
        "avgReviewTime": "NB審査: 6〜18か月（クラス・NBにより異なる。NB不足により長期化傾向）",
        "avgReviewTimeSource": "https://www.emergobyul.com/resources/market-european-union",
        "fee": "NB審査料（NB・クラス・機器数により異なる）+ DMIDS登録無料",
        "feeSource": "https://www.emergobyul.com/resources/market-european-union",
        "url": "https://www.bfarm.de/EN/Medical-devices/Overview/_node.html"
      },
      {
        "name": "DiGA Fast-Track",
        "nameJa": "DiGA迅速審査（デジタル治療アプリ）",
        "applicableClasses": ["Class I", "Class IIa"],
        "description": "DVG/DiGAVに基づくBfArM独自パスウェイ。CE適合+正のケア効果のエビデンスでBfArM DiGAディレクトリに登録→GKV法定給付。2026年からClass IIb低リスクにも拡大予定。暫定登録（12か月試用）も可。",
        "subtypes": [
          "本登録（正のケア効果エビデンスあり）",
          "暫定登録（12か月試用期間）"
        ],
        "avgReviewTime": "BfArM審査: 約3か月",
        "avgReviewTimeSource": "https://www.bfarm.de/EN/Medical-devices/Tasks/DiGA-and-DiPA/Digital-Health-Applications/Interesting-facts/_artikel.html",
        "fee": "BfArM DiGA審査: 無料（申請手数料なし）",
        "feeSource": "https://www.bfarm.de/EN/Medical-devices/Tasks/DiGA-and-DiPA/Digital-Health-Applications/_node.html",
        "url": "https://www.bfarm.de/EN/Medical-devices/Tasks/DiGA-and-DiPA/Digital-Health-Applications/_node.html"
      }
    ]
  },
  "electronicSubmission": {
    "system": "DMIDS (Deutsches Medizinprodukte-Informations- und Datenbanksystem)",
    "url": "https://www.bfarm.de/EN/Medical-devices/Tasks/DMIDS/_node.html",
    "description": "BfArM運用の国内電子申請システム。機器登録・臨床試験申請・有害事象報告・分類照会に使用。ドイツ語のみ対応。2026年5月28日にEUDAMED義務化により段階的にEUDAMEDへ移行（ただし自動データ移行なし）。",
    "mandatory": true
  },
  "udi": {
    "required": true,
    "system": "EU UDI — EUDAMED",
    "description": "EU MDR Article 27に基づくUDI要件適用。EU発行機関: GS1、HIBCC、ICCBBA、IFA。EUDAMEDのUDIデータベースに登録義務。",
    "url": "https://ec.europa.eu/tools/eudamed/",
    "timeline": "EUDAMED UDI義務化: 2026年5月28日。全クラスUDI: 2027年5月"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "EU Vigilance — BfArM / DMIDS",
      "mandatory": true,
      "url": "https://www.bfarm.de/EN/Medical-devices/Applications-and-reports/SAE-report/Clinical-investigation/_node.html",
      "description": "製造業者: 重篤事象はEUDAMED/DMIDSで報告（即時リスク: 2日以内、その他: 7日以内）。医療機関: MPAMIV に基づきBfArMに報告義務。FSN（安全性情報通知）はドイツ語必須。"
    },
    "recalls": {
      "authority": "BfArM + Länder当局",
      "description": "FSCA（是正措置）/FSNはBfArMに通知。Länder当局が市場監視・立入検査を実施。BfArM Maßnahmen（措置情報）データベースで公開。",
      "url": "https://www.bfarm.de/EN/Medical-devices/_node.html"
    },
    "surveillance": "EU MDR PMS/PSUR/PMCF要件適用。MPDG Chapter 5がビジランスの国内実施を規定。Länder当局が市場監視の実務主体。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "Länder当局（州の監督官庁）",
    "name": "Freiverkaufszertifikat / Certificate of Free Sale",
    "description": "BfArMではなく各州の所管当局が発行。製造業者・EC-REPの所在州に申請。非活動機器・能動機器で窓口が異なる場合あり。費用: EUR 130〜600（医療機器費用令に基づく）。",
    "processingTime": "要確認（州により異なる）",
    "url": "https://verwaltung.bund.de/leistungsverzeichnis/EN/leistung/99050178012000/herausgeber/BY-55047/region/090000000000"
  },
  "reimbursement": {
    "system": "GKV法定医療保険（DRG + EBM + DiGA）",
    "authority": "G-BA / InEK / GKV-Spitzenverband / BfArM（DiGA）",
    "description": "入院: G-DRG（ICD-10-GM + OPS）。高リスク新技術はNUB（InEK承認→個別交渉）。外来: EBM点数表。DiGA: BfArMディレクトリ登録→GKV給付（2026年から成果連動型報酬20%以上義務化）。G-BAがClass IIb/IIIの高リスク機器について給付評価（§137h SGB V）を実施。",
    "codingSystems": [
      "ICD-10-GM",
      "OPS (Operationen- und Prozedurenschlüssel)",
      "G-DRG",
      "EBM (Einheitlicher Bewertungsmaßstab)",
      "DiGA（BfArMディレクトリ）"
    ],
    "url": "https://www.g-ba.de/english/"
  },
  "marketingRules": {
    "authority": "BfArM / Länder当局 / HWG所管当局",
    "description": "ドイツ語ラベリング・IFU必須（MPDG/MDR）。広告はHeilmittelwerbegesetz (HWG) で規制。患者向け広告は特に厳格（効果誇張禁止・副作用表示義務等）。FSNはドイツ語必須。",
    "keyRules": [
      "ドイツ語ラベリング・IFU必須",
      "HWG: 医療機器広告規制（患者向けは特に厳格）",
      "FSN: ドイツ語必須",
      "インプラントカード: ドイツ語",
      "DiGA: 広告にBfArMディレクトリ登録番号記載推奨"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "EU加盟国としてMDSAP非参加。MDSAPの正式参加国は5カ国のみ（USA/CAN/AUS/BRA/JPN）。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "EN ISO 13485:2016。NB審査で実質必須。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "EN ISO 14971:2019+A11:2021。リスクマネジメント。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "EN IEC 62304:2006+A1:2015。ソフトウェアライフサイクル。DiGAにも適用。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "EN IEC 60601シリーズ。電気医療機器安全。"
    },
    "others": [
      "ISO 10993（生体適合性）",
      "IEC 62366-1（ユーザビリティ）",
      "EN ISO 15223-1（医療機器記号）"
    ]
  },
  "recentDevelopments": [
    {
      "date": "2026-02",
      "title": "DiGA制度改革 — 成果連動型報酬・報告義務強化",
      "description": "2026年Q3より、DiGA報酬の20%以上を成果指標に連動。製造業者は四半期ごとのデータ測定・半年ごとのBfArM報告が義務化。Class IIb低リスクにも対象拡大。"
    },
    {
      "date": "2026-05",
      "title": "EUDAMED義務化（2026年5月28日）",
      "description": "医療機器・IVDの登録、証明書、UDIデータがEUDAMEDで義務化。DMIDSからの段階的移行。"
    },
    {
      "date": "2025-12",
      "title": "EU MDR/IVDR大幅簡素化提案（欧州委員会）",
      "description": "ECがMDR/IVDRの大幅簡素化提案を公表。認証手続き効率化・管理負担軽減・レガシーデバイスの軽量化パスウェイ等。サイバーセキュリティ強化条項も含む。"
    },
    {
      "date": "2025-02",
      "title": "MPBetreibV全面改正（2025年2月20日施行）",
      "description": "医療機器事業者規制の全面改正。医療機器ソフトウェアのテスト要件追加等、重要な変更。"
    },
    {
      "date": "2024-10",
      "title": "MPDG改正（2024年10月23日公布）",
      "description": "BGBl. 2024 I Nr. 324によるMPDG改正。最新の国内補完法更新。"
    }
  ],
  "lastUpdated": "2026-04-03",
  "verified": "2026-04-03"
};
