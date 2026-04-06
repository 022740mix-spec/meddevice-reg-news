// 欧州連合 (European Union)
export default {
  "code": "EU",
  "country": "欧州連合",
  "countryEn": "European Union",
  "region": "Europe",
  "flag": "🇪🇺",
  "legalSystemOverview": {
    "type": "超国家的規制体制（Supranational regulatory framework）",
    "description": "EU の医療機器規制は Regulation (EU) 2017/745（MDR: Medical Devices Regulation）および Regulation (EU) 2017/746（IVDR: In Vitro Diagnostic Medical Devices Regulation）を根幹とする。これらは EU 加盟27カ国に直接適用される Regulation（規則）であり、各国の国内法への転換は不要。欧州委員会（DG SANTE）が政策立案を行い、各国の Competent Authority（NCA: National Competent Authority）が実施・監視を担当する。適合性評価は Notified Body（認証機関）が実施する分散型システム。",
    "keyCharacteristics": [
      "EU Regulation として全加盟国に直接適用",
      "リスクベースの分類（22の分類規則 — Annex VIII）",
      "Notified Body による適合性評価と CE マーキング",
      "EUDAMED（欧州医療機器データベース）による情報管理",
      "各国 NCA による市場監視と市販後監視の分担",
      "MDR / IVDR の並行運用体制"
    ]
  },
  "authorities": [
    {
      "name": "European Commission — DG SANTE",
      "fullName": "European Commission — Directorate-General for Health and Food Safety",
      "localName": null,
      "role": "EU レベルの医療機器政策立案・規制枠組みの管理・Notified Body の監督調整",
      "url": "https://health.ec.europa.eu/medical-devices-sector_en",
      "isPrimary": true
    },
    {
      "name": "MDCG",
      "fullName": "Medical Device Coordination Group",
      "localName": null,
      "role": "MDR/IVDR の統一的実施に関するガイダンス策定・加盟国間の調整",
      "url": "https://health.ec.europa.eu/medical-devices-sector/new-regulations/guidance-mdcg-endorsed-documents-and-other-guidance_en",
      "isPrimary": false
    },
    {
      "name": "各国 NCA（例: BfArM, ANSM, IGJ 等）",
      "fullName": "National Competent Authorities of EU Member States",
      "localName": null,
      "role": "自国領域内の市場監視・ビジランス・Notified Body の指定と監督",
      "url": "https://health.ec.europa.eu/medical-devices-sector/new-regulations/contacts_en",
      "isPrimary": false
    },
    {
      "name": "EMA（一部の領域）",
      "fullName": "European Medicines Agency",
      "localName": null,
      "role": "コンビネーション製品の薬事部分、コンパニオン診断薬との連携における相談窓口",
      "url": "https://www.ema.europa.eu/",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "Notified Body 制度（MDR Article 36-44 に基づき加盟国が指定）",
    "description": "Notified Body（NB）は EU 加盟国の NCA（National Competent Authority）が指定し、欧州委員会が NANDO データベースに登録する。MDR と IVDR は別々の規則であり、NB の指定も規則ごとに独立して行われる。MDR 指定を受けた NB が自動的に IVDR の指定を受けるわけではない。旧 MDD 下では約80機関が存在したが、MDR/IVDR 移行に伴い指定基準が大幅に厳格化。2025年12月時点で MDR 指定52機関、IVDR 指定は依然として少数。IVDR 側の NB 不足は深刻な課題であり、IVD 製品の認証遅延の主因となっている。2025年12月には NB の統一的な品質管理・手続き要件を定める施行規則案が公表。2026年5月からは EUDAMED の NB・証明書モジュールが義務化。",
    "nandoUrl": "https://webgate.ec.europa.eu/single-market-compliance-space/notified-bodies",
    "sourceUrl": "https://webgate.ec.europa.eu/single-market-compliance-space/notified-bodies",
    "totalDesignated": {
      "mdr": "52機関（Regulation (EU) 2017/745 — 医療機器）",
      "ivdr": "12機関+（Regulation (EU) 2017/746 — 体外診断用医療機器）",
      "both": "一部機関が MDR・IVDR 両方指定",
      "asOf": "2025年12月時点"
    },
    "mdrBodies": [
      {
        "nb": "0044",
        "name": "TÜV NORD CERT GmbH",
        "country": "ドイツ",
        "url": "https://www.tuev-nord-cert.de/",
        "alsoIvdr": false
      },
      {
        "nb": "0123",
        "name": "TÜV SÜD Product Service GmbH",
        "country": "ドイツ",
        "url": "https://www.tuvsud.com/",
        "alsoIvdr": true
      },
      {
        "nb": "0124",
        "name": "DEKRA Certification GmbH",
        "country": "ドイツ",
        "url": "https://www.dekra-certification.de/",
        "alsoIvdr": true
      },
      {
        "nb": "0197",
        "name": "TÜV Rheinland LGA Products GmbH",
        "country": "ドイツ",
        "url": "https://www.tuv.com/",
        "alsoIvdr": true
      },
      {
        "nb": "0297",
        "name": "DQS Medizinprodukte GmbH",
        "country": "ドイツ",
        "url": "https://www.dqs-med.de/",
        "alsoIvdr": false
      },
      {
        "nb": "0482",
        "name": "DNV MEDCERT GmbH",
        "country": "ドイツ",
        "url": "https://www.medcert.de/",
        "alsoIvdr": false
      },
      {
        "nb": "0483",
        "name": "MDC Medical Device Certification GmbH",
        "country": "ドイツ",
        "url": "https://www.mdc-ce.de/",
        "alsoIvdr": true
      },
      {
        "nb": "0494",
        "name": "SLG Prüf- und Zertifizierungs GmbH",
        "country": "ドイツ",
        "url": "https://www.slg.de/",
        "alsoIvdr": false
      },
      {
        "nb": "0633",
        "name": "Berlin Cert Prüf- und Zertifizierstelle für Medizinprodukte GmbH",
        "country": "ドイツ",
        "url": "https://www.berlin-cert.de/",
        "alsoIvdr": false
      },
      {
        "nb": "2975",
        "name": "SZUTEST Konformitätsbewertungsstelle GmbH",
        "country": "ドイツ",
        "url": "https://www.szutest.com.tr/",
        "alsoIvdr": false
      },
      {
        "nb": "0051",
        "name": "IMQ Istituto Italiano del Marchio di Qualità S.P.A.",
        "country": "イタリア",
        "url": "https://www.imq.it/",
        "alsoIvdr": false
      },
      {
        "nb": "0068",
        "name": "MTIC InterCert S.r.l.",
        "country": "イタリア",
        "url": "https://www.mfrg.it/",
        "alsoIvdr": false
      },
      {
        "nb": "0373",
        "name": "Istituto Superiore di Sanità (ISS)",
        "country": "イタリア",
        "url": "https://www.iss.it/",
        "alsoIvdr": false
      },
      {
        "nb": "0425",
        "name": "ICIM S.P.A.",
        "country": "イタリア",
        "url": "https://www.icim.it/",
        "alsoIvdr": false
      },
      {
        "nb": "0426",
        "name": "ITALCERT SRL",
        "country": "イタリア",
        "url": "https://www.italcert.it/",
        "alsoIvdr": false
      },
      {
        "nb": "0476",
        "name": "Kiwa Cermet Italia S.p.A.",
        "country": "イタリア",
        "url": "https://www.kiwacermet.it/",
        "alsoIvdr": false
      },
      {
        "nb": "0477",
        "name": "Eurofins Product Testing Italy S.r.l.",
        "country": "イタリア",
        "url": "https://tech.eurofins.it/",
        "alsoIvdr": false
      },
      {
        "nb": "0546",
        "name": "CERTIQUALITY S.r.l.",
        "country": "イタリア",
        "url": "https://www.certiquality.it/",
        "alsoIvdr": false
      },
      {
        "nb": "1282",
        "name": "ENTE CERTIFICAZIONE MACCHINE SRL (ECM)",
        "country": "イタリア",
        "url": "https://www.entecerma.it/",
        "alsoIvdr": false
      },
      {
        "nb": "1370",
        "name": "BUREAU VERITAS ITALIA S.P.A.",
        "country": "イタリア",
        "url": "https://www.bureauveritas.it/",
        "alsoIvdr": false
      },
      {
        "nb": "1936",
        "name": "TÜV Rheinland Italia SRL",
        "country": "イタリア",
        "url": "https://www.tuvitalia.com/",
        "alsoIvdr": false
      },
      {
        "nb": "0344",
        "name": "DEKRA Certification B.V.",
        "country": "オランダ",
        "url": "https://www.dekra-product-safety.com/",
        "alsoIvdr": true
      },
      {
        "nb": "1912",
        "name": "Kiwa Dare B.V.",
        "country": "オランダ",
        "url": "https://www.dare.nl/",
        "alsoIvdr": false
      },
      {
        "nb": "2797",
        "name": "BSI Group The Netherlands B.V.",
        "country": "オランダ",
        "url": "https://www.bsigroup.com/",
        "alsoIvdr": true
      },
      {
        "nb": "3022",
        "name": "Scarlet NB B.V.",
        "country": "オランダ",
        "url": "https://www.scarletnb.com/",
        "alsoIvdr": false
      },
      {
        "nb": "0333",
        "name": "AFNOR Certification",
        "country": "フランス",
        "url": "https://www.afnor.org/",
        "alsoIvdr": false
      },
      {
        "nb": "0459",
        "name": "GMED SAS",
        "country": "フランス",
        "url": "https://www.gmed.fr/",
        "alsoIvdr": true
      },
      {
        "nb": "0537",
        "name": "Eurofins Electric & Electronics Finland Oy",
        "country": "フィンランド",
        "url": "https://www.eurofins.fi/",
        "alsoIvdr": true
      },
      {
        "nb": "0598",
        "name": "SGS FIMKO OY",
        "country": "フィンランド",
        "url": "https://www.sgs.fi/",
        "alsoIvdr": false
      },
      {
        "nb": "2862",
        "name": "Intertek Medical Notified Body AB",
        "country": "スウェーデン",
        "url": "https://www.intertek.se/",
        "alsoIvdr": false
      },
      {
        "nb": "3033",
        "name": "RISE Medical Notified Body AB",
        "country": "スウェーデン",
        "url": "https://www.ri.se/",
        "alsoIvdr": false
      },
      {
        "nb": "1639",
        "name": "SGS Belgium NV",
        "country": "ベルギー",
        "url": "https://www.sgs.com/",
        "alsoIvdr": false
      },
      {
        "nb": "0050",
        "name": "National Standards Authority of Ireland (NSAI)",
        "country": "アイルランド",
        "url": "https://www.nsai.ie/",
        "alsoIvdr": true
      },
      {
        "nb": "2460",
        "name": "DNV Product Assurance AS",
        "country": "ノルウェー",
        "url": "https://www.dnv.com/",
        "alsoIvdr": false
      },
      {
        "nb": "2443",
        "name": "TÜV SÜD Danmark",
        "country": "デンマーク",
        "url": "https://www.tuvsud.com/",
        "alsoIvdr": false
      },
      {
        "nb": "0318",
        "name": "Centro Nacional de Certificación de Productos Sanitarios (CCPS)",
        "country": "スペイン",
        "url": "https://www.certificaps.gob.es/",
        "alsoIvdr": false
      },
      {
        "nb": "1434",
        "name": "Polskie Centrum Badań i Certyfikacji S.A. (PCBC)",
        "country": "ポーランド",
        "url": "https://www.pcbc.gov.pl/",
        "alsoIvdr": false
      },
      {
        "nb": "2274",
        "name": "TÜV NORD Polska Sp. z o.o.",
        "country": "ポーランド",
        "url": "https://www.tuv-nord.pl/",
        "alsoIvdr": false
      },
      {
        "nb": "1304",
        "name": "Slovenian Institute of Quality and Metrology (SIQ)",
        "country": "スロベニア",
        "url": "https://www.siq.si/",
        "alsoIvdr": false
      },
      {
        "nb": "3121",
        "name": "NOTICE, storitve ugotavljanja skladnosti, d.o.o.",
        "country": "スロベニア",
        "url": "https://www.noticenb.com/",
        "alsoIvdr": false
      },
      {
        "nb": "1023",
        "name": "Institut pro Testování a Certifikaci (ITC)",
        "country": "チェコ",
        "url": "https://www.itczlin.cz/",
        "alsoIvdr": false
      },
      {
        "nb": "1383",
        "name": "Český Metrologický Institut (CMI)",
        "country": "チェコ",
        "url": "https://www.cmi.cz/",
        "alsoIvdr": false
      },
      {
        "nb": "1011",
        "name": "NEOEMKI Kft.",
        "country": "ハンガリー",
        "url": "https://www.neoemki.hu/",
        "alsoIvdr": false
      },
      {
        "nb": "2409",
        "name": "CE Certiso Kft.",
        "country": "ハンガリー",
        "url": "https://www.cecertiso.hu/",
        "alsoIvdr": false
      },
      {
        "nb": "2265",
        "name": "3EC International a.s.",
        "country": "スロバキア",
        "url": "https://www.3ec.sk/",
        "alsoIvdr": true
      },
      {
        "nb": "2962",
        "name": "QMD Services GmbH",
        "country": "オーストリア",
        "url": "https://www.qmd-services.com/",
        "alsoIvdr": true
      },
      {
        "nb": "2696",
        "name": "UDEM Adriatic d.o.o.",
        "country": "クロアチア",
        "url": "https://www.udemadriatic.com/",
        "alsoIvdr": false
      },
      {
        "nb": "2803",
        "name": "HTCert (Health Technology Certification Ltd)",
        "country": "キプロス",
        "url": "https://www.htcert.com/",
        "alsoIvdr": false
      },
      {
        "nb": "3132",
        "name": "Malta Conformity Assessment Ltd.",
        "country": "マルタ",
        "url": "https://www.mca.org.mt/",
        "alsoIvdr": false
      },
      {
        "nb": "1984",
        "name": "Kiwa Belgelendirme Hizmetleri A.Ş.",
        "country": "トルコ",
        "url": "https://www.kiwa.com/tr/",
        "alsoIvdr": false
      },
      {
        "nb": "2292",
        "name": "UDEM Uluslararası Belgelendirme A.Ş.",
        "country": "トルコ",
        "url": "https://www.udem.com.tr/",
        "alsoIvdr": false
      },
      {
        "nb": "2764",
        "name": "Notice Belgelendirme A.Ş.",
        "country": "トルコ",
        "url": "https://www.noticenb.com/",
        "alsoIvdr": false
      }
    ],
    "ivdrOnlyBodies": [
      {
        "nb": "3018",
        "name": "Sertio Oy",
        "country": "フィンランド",
        "url": "https://www.sertio.fi/"
      }
    ]
  },
  "deviceDefinition": {
    "legalDefinition": "MDR Article 2(1) に定義。人に対する医療目的（疾病の診断・予防・モニタリング・予測・予後・治療・軽減、傷害・障害の診断・モニタリング・治療・軽減・補償、解剖・生理学的プロセスの検査・置換・修正、体外受精を含む受胎制御）を有する器具・装置・ソフトウェア・インプラント・試薬・材料等で、薬理学的・免疫学的・代謝的手段によらないもの。",
    "scope": "IVD は IVDR (2017/746) で別途規定。美容目的の製品（Annex XVI）も MDR の適用範囲に含まれる。コンビネーション製品は医薬品と機器の主たる作用機序により規制枠組みが決定。",
    "notes": "MDR は旧 Medical Devices Directive (MDD 93/42/EEC) および Active Implantable Medical Devices Directive (AIMDD 90/385/EEC) を置き換え。2021年5月26日に完全適用開始。"
  },
  "primaryLaw": {
    "title": "Regulation (EU) 2017/745 — Medical Devices Regulation (MDR)",
    "originalTitle": null,
    "enacted": "2017",
    "lastAmended": "2025（Regulation (EU) 2025/2457）",
    "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32017R0745",
    "description": "EU における医療機器規制の根幹法。旧 MDD/AIMDD を置換し、2021年5月26日から適用。分類規則・適合性評価・市販後監視・ビジランス・UDI・臨床評価・Notified Body 要件等を包括的に規定。移行期間は2027年末まで延長（2024年改正 Regulation (EU) 2024/1860）。"
  },
  "implementingRegulations": [
    {
      "title": "Regulation (EU) 2017/746 — IVDR (In Vitro Diagnostic Medical Devices Regulation)",
      "date": "2022年5月26日適用開始",
      "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32017R0746",
      "description": "体外診断用医療機器（IVD）の規制。旧 IVDD (98/79/EC) を置換。リスクベースの4クラス分類（Class A/B/C/D）を導入。移行期間は2029年まで延長。",
      "category": "IVD 規制"
    },
    {
      "title": "Regulation (EU) 2024/1860 — MDR/IVDR 移行期間延長",
      "date": "2024年",
      "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32024R1860",
      "description": "旧指令下の認証から MDR/IVDR への移行期間を延長。MDR 対象機器は2027年末まで、IVDR 対象機器は2029年末までの段階的移行。",
      "category": "移行措置"
    },
    {
      "title": "Commission Implementing Regulation (EU) 2021/2226 — Common Specifications for IVD Class D",
      "date": "2021年",
      "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32021R2226",
      "description": "IVDR Class D 機器（HIV、肝炎ウイルス等の検査）に対する共通仕様。整合規格が存在しない場合の技術要件。",
      "category": "共通仕様"
    },
    {
      "title": "MDCG ガイダンス文書群",
      "date": "随時発行",
      "url": "https://health.ec.europa.eu/medical-devices-sector/new-regulations/guidance-mdcg-endorsed-documents-and-other-guidance_en",
      "description": "MDCG が策定する MDR/IVDR の統一的解釈に関するガイダンス文書。臨床評価、適合性評価、ビジランス、UDI 等の各分野をカバー。法的拘束力はないが実務上必須。",
      "category": "ガイダンス"
    },
    {
      "title": "EU Harmonised Standards（整合規格）",
      "date": "随時更新",
      "url": "https://single-market-economy.ec.europa.eu/single-market/european-standards/harmonised-standards/medical-devices_en",
      "description": "MDR/IVDR の Essential Requirements（基本要件）への適合を推定させる整合規格。CEN/CENELEC が策定。整合規格への適合は任意だが、適合推定（Presumption of Conformity）が得られる。",
      "category": "規格"
    },
    {
      "title": "Commission Implementing Decision on EUDAMED",
      "date": "段階的運用開始",
      "url": "https://ec.europa.eu/tools/eudamed/",
      "description": "EUDAMED（European Database on Medical Devices）の運用に関する実施決定。6モジュールで構成。2025年11月のCommission Implementing Decision (EU) 2025/2371（2025年11月27日付）により、最初の4モジュール（Actor Registration、UDI/Device Registration、NB & Certificates、Market Surveillance）が2026年5月28日から義務化。残り2モジュール（Vigilance、Clinical Investigation）は段階的に追加予定。",
      "category": "データベース"
    }
  ],
  "relatedLaws": [
    {
      "title": "GDPR (General Data Protection Regulation) — Regulation (EU) 2016/679",
      "category": "個人情報保護",
      "enacted": "2016（2018年適用）",
      "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679",
      "relevance": "医療機器が処理する個人データ（健康データ）は GDPR で特別カテゴリーとして厳格に保護。SaMD・コネクテッドデバイス・臨床試験データに直接影響。データ保護影響評価（DPIA）が必要となる場合が多い。"
    },
    {
      "title": "AI Act — Regulation (EU) 2024/1689",
      "category": "人工知能",
      "enacted": "2024",
      "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32024R1689",
      "relevance": "AI を組み込んだ医療機器は High-Risk AI System に分類。MDR/IVDR の適合性評価を通じて AI Act の要件も充足する統合的アプローチ。透明性・ロバスト性・人間による監督等の追加要件。2025年〜段階的適用。"
    },
    {
      "title": "REACH Regulation — Regulation (EC) No 1907/2006",
      "category": "化学物質",
      "enacted": "2006",
      "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32006R1907",
      "relevance": "医療機器に使用される化学物質（特に CMR 物質、フタル酸エステル、内分泌攪乱物質）の規制。MDR Annex I Section 10.4 で CMR/ED 物質の使用制限を規定。REACH の Candidate List 物質を含む場合は代替評価が必要。"
    },
    {
      "title": "RoHS Directive — Directive 2011/65/EU",
      "category": "有害物質制限",
      "enacted": "2011",
      "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32011L0065",
      "relevance": "電気・電子機器中の特定有害物質の使用制限。医療機器は当初適用除外だったが、2014年から段階的に適用対象に。鉛・水銀・カドミウム・六価クロム等の使用制限。"
    },
    {
      "title": "Clinical Trials Regulation — Regulation (EU) No 536/2014",
      "category": "臨床試験",
      "enacted": "2014（2022年適用）",
      "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32014R0536",
      "relevance": "医薬品の臨床試験規制だが、コンビネーション製品の医薬品部分や併用療法の臨床試験に関連。CTIS（Clinical Trials Information System）による一元管理。"
    },
    {
      "title": "NIS2 Directive — Directive (EU) 2022/2555",
      "category": "サイバーセキュリティ",
      "enacted": "2022",
      "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32022L2555",
      "relevance": "ネットワーク・情報システムのセキュリティに関する指令。医療機器製造業者は Essential Entity または Important Entity として対象となり得る。インシデント報告義務やリスク管理措置の要件。"
    }
  ],
  "classification": {
    "system": "リスクベース分類（Annex VIII の22規則）— Class I / IIa / IIb / III",
    "basis": "ルールベース（意図する用途、侵襲性、持続期間、エネルギー源等）",
    "classes": [
      {
        "name": "Class I",
        "nameJa": "クラスI",
        "riskLevel": "低リスク",
        "description": "最もリスクが低い医療機器。製造者の自己宣言で CE マーキングが可能（測定機能付き・滅菌状態で供給・手術用再使用可能器具を除く）。Notified Body の関与は原則不要。",
        "examples": [
          "弾性包帯",
          "聴診器",
          "手動外科器具",
          "車椅子（非電動）"
        ],
        "approvalPath": "自己宣言（Class Im/Is/Ir は Notified Body 関与必要）"
      },
      {
        "name": "Class IIa",
        "nameJa": "クラスIIa",
        "riskLevel": "中低リスク",
        "description": "中程度に低いリスクの医療機器。Notified Body による適合性評価が必要。QMS 審査または型式審査等の評価経路あり。",
        "examples": [
          "補聴器",
          "輸液セット",
          "コンタクトレンズ",
          "超音波診断装置"
        ],
        "approvalPath": "Notified Body による適合性評価（Annex IX / XI）"
      },
      {
        "name": "Class IIb",
        "nameJa": "クラスIIb",
        "riskLevel": "中高リスク",
        "description": "中程度に高いリスクの医療機器。Notified Body による詳細な技術文書審査と QMS 審査が必要。",
        "examples": [
          "人工呼吸器",
          "血液透析装置",
          "骨固定プレート",
          "輸液ポンプ"
        ],
        "approvalPath": "Notified Body による適合性評価（Annex IX / X + XI）"
      },
      {
        "name": "Class III",
        "nameJa": "クラスIII",
        "riskLevel": "高リスク",
        "description": "最もリスクの高い医療機器。最も厳格な適合性評価。技術文書の詳細審査、QMS の完全監査、臨床評価報告書の審査が必要。高リスク機器は Expert Panel への臨床評価相談が義務。",
        "examples": [
          "人工心臓弁",
          "冠動脈ステント",
          "乳房インプラント",
          "全人工関節"
        ],
        "approvalPath": "Notified Body による適合性評価（Annex IX + 臨床評価相談）"
      }
    ],
    "rules": [
      {
        "id": "Annex VIII — 22の分類規則",
        "description": "MDR Annex VIII に22の分類規則が規定。Rule 1-4: 非侵襲性機器、Rule 5-8: 侵襲性機器、Rule 9-13: 能動機器、Rule 14-22: 特殊規則（ソフトウェア、ナノ材料、CMR物質等含む）。",
        "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32017R0745#d1e32-1-1"
      },
      {
        "id": "MDCG 2021-24: Classification of Medical Devices",
        "description": "MDCG が発行する分類に関するガイダンス文書。境界事例や特定の製品群に関する分類の解釈指針を提供。",
        "url": "https://health.ec.europa.eu/medical-devices-sector/new-regulations/guidance-mdcg-endorsed-documents-and-other-guidance_en"
      }
    ],
    "totalProductCodes": "ルールベース分類のため Product Code 体系はなし（CND コードを使用）"
  },
  "conformityAssessment": {
    "overview": "MDR に基づく適合性評価は Notified Body が実施。クラスに応じた評価経路（Annex IX〜XI）を選択。評価完了後に EU 適合証明書が発行され、製造者が EU 適合宣言書を作成し CE マーキングを付与。Class I（一般）は製造者の自己宣言のみ。",
    "routes": [
      {
        "name": "Self-Declaration (Class I)",
        "nameJa": "自己宣言（クラスI 一般）",
        "applicableClasses": [
          "Class I（一般）"
        ],
        "description": "製造者が技術文書を作成し、MDR の一般安全性能要件（Annex I）への適合を自己宣言。EU 適合宣言書（Declaration of Conformity）を作成し CE マーキングを付与。Notified Body の関与不要。ただし Class Im（測定機能付き）/ Is（滅菌供給）/ Ir（再使用可能手術器具）は Notified Body 関与必要。",
        "subtypes": [
          {
            "name": "Class Im（測定機能付き）",
            "description": "計量機能に関してのみ Notified Body が Annex IX Chapter I または Annex XI Part A で評価。"
          },
          {
            "name": "Class Is（滅菌供給）",
            "description": "滅菌プロセスに関してのみ Notified Body が Annex IX Chapter I または Annex XI Part A で評価。"
          },
          {
            "name": "Class Ir（再使用可能手術器具）",
            "description": "再処理に関してのみ Notified Body が Annex IX Chapter I または Annex XI Part A で評価。"
          }
        ],
        "avgReviewTime": "製造者内部プロセス（Notified Body なし）",
        "fee": "Notified Body 費用不要（Class Im/Is/Ir は除く）",
        "url": "https://health.ec.europa.eu/medical-devices-sector/new-regulations/guidance-mdcg-endorsed-documents-and-other-guidance_en"
      },
      {
        "name": "Annex IX — Quality Management System + Technical Documentation Assessment",
        "nameJa": "附属書IX — 品質管理システム + 技術文書評価",
        "applicableClasses": [
          "Class IIa",
          "Class IIb",
          "Class III"
        ],
        "description": "最も一般的な適合性評価経路。Notified Body が製造者の QMS（ISO 13485 ベース）を審査し、技術文書（設計、製造、性能データ、臨床評価等）を評価。Class IIa は抽出審査、Class IIb/III は個別製品の技術文書審査。Class III は臨床評価報告書の Expert Panel 相談が必要。",
        "subtypes": [
          {
            "name": "Annex IX Chapter I + III（QMS + 全技術文書）",
            "description": "QMS 審査と全技術文書の個別審査。Class III の標準経路。"
          },
          {
            "name": "Annex IX Chapter I + II（QMS + 代表的技術文書の抽出審査）",
            "description": "QMS 審査と代表的技術文書の抽出審査。Class IIa / IIb の効率的経路。"
          }
        ],
        "avgReviewTime": "Class IIa: 約3〜6ヶ月。Class IIb: 約6〜12ヶ月。Class III: 約12〜18ヶ月。",
        "fee": "機関・製品群による（一般的に €20,000〜€200,000+）",
        "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32017R0745#d1e32-1-1"
      },
      {
        "name": "Annex X + XI — Type Examination + Production Quality Assurance / Product Verification",
        "nameJa": "附属書X + XI — 型式審査 + 製造品質保証 / 製品検証",
        "applicableClasses": [
          "Class IIa",
          "Class IIb",
          "Class III"
        ],
        "description": "型式審査（Annex X）で代表的サンプルを審査し、Annex XI Part A（製造品質保証）または Part B（製品検証）で量産品の適合を確認。Annex IX の代替経路として利用可能。",
        "subtypes": [
          {
            "name": "Annex X + Annex XI Part A",
            "description": "型式審査 + 製造品質保証システムの審査。"
          },
          {
            "name": "Annex X + Annex XI Part B",
            "description": "型式審査 + 各製品またはバッチの製品検証。"
          }
        ],
        "avgReviewTime": "Annex IX と同程度。",
        "fee": "機関・製品群による",
        "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32017R0745#d1e32-1-1"
      },
      {
        "name": "Clinical Investigation (Article 62-82)",
        "nameJa": "臨床試験（MDR Article 62-82）",
        "applicableClasses": [
          "全クラス（臨床データが必要な場合）"
        ],
        "description": "EU 域内で臨床試験を実施するための規定。加盟国の NCA と Ethics Committee の承認が必要。MDR では Clinical Investigation Application のプロセスが厳格化。EUDAMED の Clinical Investigation Module で管理予定。",
        "subtypes": [],
        "avgReviewTime": "NCA 審査: 各国により異なる（通常45〜60日）。Ethics Committee: 並行審査。",
        "fee": "各国により異なる",
        "url": "https://health.ec.europa.eu/medical-devices-sector/new-regulations/guidance-mdcg-endorsed-documents-and-other-guidance_en"
      }
    ]
  },
  "electronicSubmission": {
    "system": "EUDAMED (European Database on Medical Devices)",
    "url": "https://ec.europa.eu/tools/eudamed/",
    "description": "EUDAMED は6モジュールで構成。2026年5月28日から4モジュール（Actor Registration、UDI/Device Registration、NB & Certificates、Market Surveillance）が義務化（Commission Implementing Decision (EU) 2025/2371）。残りのVigilance・Clinical Investigationモジュールは段階的に追加予定。適合性評価申請自体は各 Notified Body の独自システムで実施。",
    "mandatory": true
  },
  "udi": {
    "required": true,
    "system": "EU UDI System — EUDAMED UDI/Device Registration Module",
    "description": "MDR Article 27-29 に基づく UDI 要件。Basic UDI-DI（モデルレベル）と UDI-DI（パッケージレベル）の2層構造。EUDAMED の UDI データベースに登録。発行機関: GS1, HIBCC, ICCBBA, IFA。",
    "url": "https://health.ec.europa.eu/medical-devices-sector/new-regulations/eudamed_en",
    "timeline": "UDI/Device Registration ModuleはEUDAMEDの4モジュール義務化（2026年5月28日）に含まれる。Class III・植込み型機器から段階的に義務化済み。EUDAMED義務化によりUDIデータベース登録が全面的に必須化。"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "Vigilance System（MDR Article 87-92）",
      "mandatory": true,
      "url": "https://health.ec.europa.eu/medical-devices-sector/new-regulations/guidance-mdcg-endorsed-documents-and-other-guidance_en",
      "description": "製造者は重篤な有害事象（Serious Incident）を NCA に報告義務。報告期限: 死亡・公衆衛生上の脅威は即時だが遅くとも2日以内、その他の重篤な有害事象は15日以内。Field Safety Corrective Action（FSCA）と Field Safety Notice（FSN）の実施・通知義務。EUDAMED Vigilance Module で EU レベルの情報共有予定。"
    },
    "recalls": {
      "authority": "各国 NCA + 製造者",
      "description": "Field Safety Corrective Action（FSCA）として製造者が自主的に是正措置を実施。各国 NCA が市場監視を行い、必要に応じ強制措置。RAPEX/Safety Gate システムで加盟国間の情報共有。",
      "url": "https://ec.europa.eu/safety-gate/"
    },
    "surveillance": "Post-Market Surveillance Plan（MDR Article 83-84）、Periodic Safety Update Report（PSUR — Class IIa以上）、Post-Market Clinical Follow-up（PMCF）、Trend Reporting"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "各加盟国の NCA",
    "name": "Certificate of Free Sale (CFS)",
    "description": "CE マーキングされた医療機器について、各加盟国の NCA が Free Sale Certificate を発行。EU 域外への輸出時に輸入国の規制当局が要求する場合に使用。発行は製造者の登録国の NCA が行うのが一般的。",
    "processingTime": "各国により異なる（通常2〜6週間）",
    "url": "https://health.ec.europa.eu/medical-devices-sector/new-regulations/contacts_en"
  },
  "reimbursement": {
    "system": "各加盟国の国民保健制度（EU レベルの統一保険制度なし）",
    "authority": "EUnetHTA（EU レベル HTA 協力）+ 各国 HTA 機関",
    "description": "医療機器の保険償還は各加盟国が独自に決定。EU レベルでは Regulation (EU) 2021/2282 により EU HTA（Health Technology Assessment）の共同臨床評価が2025年から段階的に導入。医療機器は2028年から対象予定。各国の主要 HTA 機関: G-BA/IQWiG（ドイツ）、HAS（フランス）、NICE（英国 — EU離脱後も参照）、AIFA（イタリア）等。",
    "codingSystems": [
      "各国固有のコーディングシステム",
      "GMDN (Global Medical Device Nomenclature)",
      "CND (Classificazione Nazionale dei Dispositivi medici — イタリア等)",
      "NUB (Neue Untersuchungs- und Behandlungsmethoden — ドイツ)"
    ],
    "url": "https://health.ec.europa.eu/health-technology-assessment_en"
  },
  "marketingRules": {
    "authority": "各国 NCA + EU レベルの一般原則",
    "description": "医療機器の広告は各加盟国の国内法で規制。MDR Article 7 で虚偽的・誤解を招くラベリング・広告を禁止。CE マーキングの不正使用は罰則対象。各国にはそれぞれ独自の広告規制（例: ドイツ HWG（医薬品広告法）、フランス Code de la santé publique）が存在。",
    "keyRules": [
      "MDR Article 7: 虚偽的・誤解を招く機能・性能の表示禁止",
      "CE マーキングの要件を満たさない機器への CE マーキング付与禁止",
      "各加盟国の広告法を遵守（ドイツ HWG、フランス CSP 等）",
      "Intended Purpose（意図する用途）の範囲内でのみ広告可",
      "Unfair Commercial Practices Directive (2005/29/EC) による欺瞞的商行為の禁止"
    ]
  },
  "mdsap": {
    "status": "非参加",
    "description": "EUはMDSAPに参加していない（IMDRF membershipとMDSAP participantは別）。MDRに基づくNotified Body独自のQMS審査が必要であり、MDSAP監査報告書はNB審査を代替しない。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "MDR の QMS 要件は ISO 13485:2016 をベースとするが、MDR 固有の追加要件（市販後監視、ビジランス等）がある。EN ISO 13485:2016 が整合規格として引用。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "EN ISO 14971:2019 + A11:2021 が整合規格。MDR のリスクマネジメント要件（Annex I Section 3）に対応。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "EN IEC 62304:2006 + A1:2015 が整合規格。ソフトウェアライフサイクル管理に適用。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "EN IEC 60601 シリーズが整合規格。医用電気機器の安全・性能要件。各 Particular Standard も含む。"
    },
    "others": [
      {
        "standard": "ISO 10993 シリーズ",
        "notes": "EN ISO 10993 として整合規格。生体適合性評価に適用。"
      },
      {
        "standard": "ISO 14155:2020",
        "notes": "臨床試験の GCP（Good Clinical Practice）。MDR 臨床試験要件に対応。"
      },
      {
        "standard": "IEC 62443 シリーズ",
        "notes": "サイバーセキュリティの参照規格。MDCG ガイダンスで推奨。"
      }
    ]
  },
  "recentDevelopments": [
    {
      "date": "2024",
      "title": "MDR/IVDR 移行期間の再延長",
      "description": "Regulation (EU) 2024/1860 により、旧指令下の認証から MDR への移行期限を2027年末まで、IVDR は2029年末まで延長。Notified Body のキャパシティ不足に対応。"
    },
    {
      "date": "2024",
      "title": "AI Act 成立と医療機器への影響",
      "description": "Regulation (EU) 2024/1689（AI Act）が成立。AI 搭載医療機器は High-Risk AI System に該当し、MDR/IVDR の適合性評価と統合的に対応。2025年から段階的適用。"
    },
    {
      "date": "2024",
      "title": "EU HTA Regulation の適用開始準備",
      "description": "Regulation (EU) 2021/2282 に基づく EU レベルの共同臨床評価が2025年1月から開始（まず抗がん剤・ATMP から）。選定された高リスク医療機器は2026年以降段階的に対象。"
    },
    {
      "date": "2025-11",
      "title": "EUDAMED 4モジュール義務化決定",
      "description": "Commission Implementing Decision (EU) 2025/2371（2025年11月26日採択、11月27日官報掲載）により、EUDAMEDの最初の4モジュール（Actor Registration、UDI/Device Registration、NB & Certificates、Market Surveillance）が2026年5月28日から義務化。これまでの自主利用から法的義務へ移行。"
    },
    {
      "date": "2025-12",
      "title": "MDR/IVDR 簡素化提案の公表",
      "description": "欧州委員会が2025年12月16日にMDR/IVDR簡素化の立法提案を公表。NB証明書の有効期間上限撤廃、PRRC要件の緩和、Breakthrough Device・Orphan Device制度の導入、臨床評価要件の合理化等を提案。欧州議会・理事会での審議を経て採択予定。"
    },
    {
      "date": "2024-10",
      "title": "NIS2 Directive の国内法化期限",
      "description": "NIS2 指令（Directive (EU) 2022/2555）の加盟国国内法化期限（2024年10月）。医療機器製造業者のサイバーセキュリティ義務に影響。"
    }
  ],
  "lastUpdated": "2026-04-06",
  "verified": "2026-04-06"
};
