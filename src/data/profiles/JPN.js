// 日本 (Japan)
export default {
  "code": "JPN",
  "country": "日本",
  "countryEn": "Japan",
  "region": "ASPAC",
  "flag": "🇯🇵",
  "legalSystemOverview": {
    "type": "議院内閣制",
    "description": "厚生労働省（MHLW）が医療機器の安全政策を所管し、独立行政法人 PMDA が審査・安全対策を実施する二元体制。薬機法に基づく許認可制度を運用し、リスク分類に応じた届出・認証・承認の3段階の申請経路が存在する。",
    "keyCharacteristics": [
      "MHLW が法令・政策策定、PMDA が審査・安全対策実務を担当",
      "リスクベースの4クラス分類（一般〜高度管理医療機器）",
      "登録認証機関制度によるクラスII・III（認証基準あり）機器の第三者認証",
      "JMDN（日本医療機器名称データベース）による製品コード管理",
      "プログラム医療機器（SaMD）の段階的規制整備"
    ]
  },
  "authorities": [
    {
      "name": "PMDA",
      "fullName": "独立行政法人 医薬品医療機器総合機構",
      "localName": "医薬品医療機器総合機構",
      "role": "医療機器の承認審査、安全対策（不具合報告の収集・分析）、健康被害救済の3業務を一元的に実施",
      "url": "https://www.pmda.go.jp/",
      "isPrimary": true
    },
    {
      "name": "MHLW",
      "fullName": "Ministry of Health, Labour and Welfare",
      "localName": "厚生労働省",
      "role": "医療機器規制の法令・政策策定、薬機法の所管、製造販売承認の最終決定（大臣承認）",
      "url": "https://www.mhlw.go.jp/",
      "isPrimary": true
    },
    {
      "name": "登録認証機関",
      "fullName": "Registered Certification Bodies",
      "localName": "登録認証機関（第三者認証機関）",
      "role": "クラスII管理医療機器のうち認証基準が定められた品目について、QMS適合性調査と基準適合性審査を実施して認証を付与",
      "url": "https://www.pmda.go.jp/review-services/drug-reviews/about-reviews/devices/0015.html",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "登録認証機関制度",
    "description": "厚生労働大臣が登録する第三者認証機関。クラスII管理医療機器のうち、認証基準（JIS規格等）が定められた品目について、製品の基準適合性審査およびQMS適合性調査を行い認証を付与する。2026年現在、約15機関が登録。",
    "bodies": [
      {
        "name": "一般財団法人 日本品質保証機構（JQA）",
        "url": "https://www.jqa.jp/service_list/medical/"
      },
      {
        "name": "テュフ ラインランド ジャパン株式会社",
        "url": "https://www.tuv.com/japan/jp/"
      },
      {
        "name": "SGS ジャパン株式会社",
        "url": "https://www.sgs.co.jp/"
      },
      {
        "name": "一般財団法人 電気安全環境研究所（JET）",
        "url": "https://www.jet.or.jp/"
      },
      {
        "name": "BSI グループジャパン株式会社",
        "url": "https://www.bsigroup.com/ja-JP/"
      }
    ]
  },
  "deviceDefinition": {
    "legalDefinition": "人若しくは動物の疾病の診断、治療若しくは予防に使用されること、又は人若しくは動物の身体の構造若しくは機能に影響を及ぼすことが目的とされている機械器具等であって、政令で定めるもの（薬機法第2条第4項）",
    "scope": "機械器具、医療用品、歯科材料、衛生用品、プログラムおよびこれを記録した記録媒体。体外診断用医薬品は別途定義。プログラム医療機器（SaMD）も2014年改正で明確に対象化。",
    "notes": "「プログラム」を医療機器の定義に含めた2014年施行の薬機法改正は世界に先駆けた取組み。コンビネーション製品（医療機器と医薬品の組合せ）は薬機法上の主たる要素で規制区分を判断。"
  },
  "primaryLaw": {
    "title": "薬機法（医薬品、医療機器等の品質、有効性及び安全性の確保等に関する法律）",
    "originalTitle": "医薬品、医療機器等の品質、有効性及び安全性の確保等に関する法律（昭和35年法律第145号）",
    "enacted": "1960-08-10",
    "lastAmended": "2025（令和7年法律第37号）",
    "url": "https://laws.e-gov.go.jp/document?lawid=335AC0000000145",
    "description": "日本の医療機器規制の根拠法。旧薬事法を2013年に改正し、医療機器・再生医療等製品に関する規定を大幅整備。製造販売業の許可制度、クラス分類に応じた届出・認証・承認制度、QMS適合性調査、市販後安全対策、プログラム医療機器の取扱いなどを包括的に規定。2025年改正（法律第37号）で追加の制度整備を実施。"
  },
  "implementingRegulations": [
    {
      "title": "医薬品、医療機器等の品質、有効性及び安全性の確保等に関する法律施行令",
      "date": "1961-01-26",
      "url": "https://elaws.e-gov.go.jp/document?lawid=336CO0000000011",
      "description": "薬機法の施行に必要な事項（クラス分類の別表、手数料等）を定める政令。",
      "category": "施行令"
    },
    {
      "title": "医薬品、医療機器等の品質、有効性及び安全性の確保等に関する法律施行規則",
      "date": "1961-02-01",
      "url": "https://elaws.e-gov.go.jp/document?lawid=336M50000100001",
      "description": "薬機法の施行に必要な詳細手続き（申請書様式、届出要件、製造販売業許可基準等）を定める省令。",
      "category": "施行規則"
    },
    {
      "title": "医療機器及び体外診断用医薬品の製造管理及び品質管理の基準に関する省令（QMS省令）",
      "date": "2004-12-17",
      "url": "https://elaws.e-gov.go.jp/document?lawid=416M60000100169",
      "description": "ISO 13485 を基礎としたQMS（品質マネジメントシステム）基準。製造販売承認・認証の要件としてQMS適合性調査で遵守を確認。2021年改正で国際整合を強化。",
      "category": "QMS"
    },
    {
      "title": "医療機器の基本要件基準（Essential Principles）",
      "date": "2005-03-23",
      "url": "https://www.mhlw.go.jp/web/t_doc?dataId=81aa5201&dataType=0&pageNo=1",
      "description": "医療機器の安全性・性能に関する基本的要件。EU Essential Requirements / IMDRF Essential Principles に整合。承認・認証申請時に適合性を示す必要がある。",
      "category": "基本要件"
    },
    {
      "title": "承認申請書の記載要領・STED",
      "date": "2014-11-21",
      "url": "https://www.pmda.go.jp/review-services/drug-reviews/about-reviews/devices/0001.html",
      "description": "承認申請書のSTED（Summary Technical Documentation）形式による記載要領。IMDRF/GHTF のSTED様式に準拠し、国際的な申請資料の共通化を促進。",
      "category": "申請様式"
    },
    {
      "title": "医療機器の臨床試験の実施の基準に関する省令（医療機器GCP省令）",
      "date": "2005-03-23",
      "url": "https://elaws.e-gov.go.jp/document?lawid=417M60000100036",
      "description": "医療機器の治験の計画・実施・報告に関する基準。ICH-GCP を基礎としつつ医療機器の特性を反映。",
      "category": "GCP"
    },
    {
      "title": "医療機器の製造販売後の調査及び試験の実施の基準に関する省令（GPSP省令）",
      "date": "2005-03-23",
      "url": "https://elaws.e-gov.go.jp/document?lawid=417M60000100038",
      "description": "製造販売後調査・試験（使用成績調査、特定使用成績調査、製造販売後臨床試験）の実施基準。再審査制度の実施に必要。",
      "category": "GPSP"
    }
  ],
  "relatedLaws": [
    {
      "title": "個人情報の保護に関する法律（個人情報保護法）",
      "category": "データ保護",
      "enacted": "2003-05-30",
      "url": "https://elaws.e-gov.go.jp/document?lawid=415AC0000000057",
      "relevance": "医療機器から取得される健康データ・個人情報の取扱いに適用。2022年改正で仮名加工情報制度を導入。"
    },
    {
      "title": "次世代医療基盤法（医療分野の研究開発に資するための匿名加工医療情報に関する法律）",
      "category": "医療データ",
      "enacted": "2017-05-12",
      "url": "https://elaws.e-gov.go.jp/document?lawid=429AC0000000028",
      "relevance": "匿名加工医療情報の利活用を促進。医療機器の市販後データ分析・リアルワールドデータ活用に関連。"
    },
    {
      "title": "電気用品安全法",
      "category": "電気安全",
      "enacted": "1961-11-16",
      "url": "https://elaws.e-gov.go.jp/document?lawid=336AC0000000234",
      "relevance": "医療用電気機器のうち電気用品に該当するものはPSE マーク取得が必要。薬機法との二重規制に注意。"
    },
    {
      "title": "臨床研究法",
      "category": "臨床研究",
      "enacted": "2017-04-14",
      "url": "https://elaws.e-gov.go.jp/document?lawid=429AC0000000016",
      "relevance": "医療機器を用いた臨床研究のうち特定臨床研究に該当するものは本法の遵守が必要。治験はGCP省令が適用。"
    },
    {
      "title": "再生医療等の安全性の確保等に関する法律（再生医療等安全性確保法）",
      "category": "再生医療",
      "enacted": "2013-11-27",
      "url": "https://elaws.e-gov.go.jp/document?lawid=425AC0000000085",
      "relevance": "再生医療等製品と組み合わせて使用される医療機器、細胞加工に使用される機器に関連。"
    },
    {
      "title": "化学物質の審査及び製造等の規制に関する法律（化審法）",
      "category": "化学物質",
      "enacted": "1973-10-16",
      "url": "https://elaws.e-gov.go.jp/document?lawid=348AC0000000117",
      "relevance": "医療機器に含有される化学物質（フタル酸エステル等）の規制に関連。生物学的安全性試験の評価にも影響。"
    },
    {
      "title": "廃棄物の処理及び清掃に関する法律（廃掃法）",
      "category": "廃棄物",
      "enacted": "1970-12-25",
      "url": "https://elaws.e-gov.go.jp/document?lawid=345AC0000000137",
      "relevance": "使用済み医療機器・単回使用機器の廃棄処理に関する規制。感染性廃棄物の特別管理が必要。"
    }
  ],
  "classification": {
    "system": "薬機法に基づく4クラス分類",
    "basis": "人体へのリスクの程度に基づく分類。GHTF（現 IMDRF）の国際分類ルールを参考に策定。",
    "classes": [
      {
        "name": "Class I",
        "nameJa": "一般医療機器",
        "riskLevel": "低",
        "description": "不具合が生じた場合でも人体へのリスクが極めて低い医療機器。",
        "examples": [
          "体外診断用機器（一部）",
          "X線フィルム",
          "歯科用ワックス",
          "メス・ピンセット",
          "聴診器"
        ],
        "approvalPath": "届出（製造販売届）"
      },
      {
        "name": "Class II",
        "nameJa": "管理医療機器",
        "riskLevel": "中低",
        "description": "不具合が生じた場合でも人体へのリスクが比較的低い医療機器。認証基準が設定されているものは登録認証機関による認証、それ以外は大臣承認。",
        "examples": [
          "MRI 装置",
          "超音波画像診断装置",
          "電子内視鏡",
          "消化器用カテーテル",
          "歯科用合金",
          "補聴器",
          "家庭用電気治療器"
        ],
        "approvalPath": "認証（登録認証機関）/ 承認（認証基準なしの場合）"
      },
      {
        "name": "Class III",
        "nameJa": "高度管理医療機器",
        "riskLevel": "中高",
        "description": "不具合が生じた場合に人体へのリスクが比較的高い医療機器。PMDA による審査を経て厚生労働大臣が承認。",
        "examples": [
          "人工透析器",
          "人工骨",
          "人工呼吸器",
          "冠動脈ステント（薬剤溶出型以外）",
          "放射線治療システム"
        ],
        "approvalPath": "承認（PMDA 審査 → 厚労大臣承認）"
      },
      {
        "name": "Class IV",
        "nameJa": "高度管理医療機器（クラスIV）",
        "riskLevel": "高",
        "description": "患者への侵襲性が高く、不具合が生じた場合に生命の危険に直結する医療機器。最も厳格な審査が適用される。",
        "examples": [
          "ペースメーカー",
          "人工心臓弁",
          "ステントグラフト",
          "薬剤溶出型冠動脈ステント",
          "植込み型除細動器（ICD）"
        ],
        "approvalPath": "承認（PMDA 審査 → 厚労大臣承認 / 優先審査の適用あり）"
      }
    ],
    "rules": [
      "GHTF/IMDRF 分類ルールを参考にした別表による分類",
      "一般的名称ごとにクラスが指定（JMDN コードに紐付け）",
      "認証基準の有無でクラスII機器の審査経路が分岐",
      "プログラム医療機器はその意図する使用に応じてクラスII〜IVに分類"
    ],
    "totalProductCodes": "約4,000（JMDN一般的名称数）"
  },
  "conformityAssessment": {
    "overview": "日本の医療機器の適合性評価は、リスク分類に応じて届出・認証・承認の3つの経路に分かれる。クラスIは届出のみ、クラスII・III（認証基準あり）は登録認証機関による第三者認証、クラスII（認証基準なし）・III（認証基準なし）・IVはPMDA審査を経て厚生労働大臣による承認が必要。2014年11月よりクラスIII高度管理医療機器の一部に認証基準が設定され第三者認証が可能に。全経路でQMS適合性調査が求められる（届出を除く）。",
    "routes": [
      {
        "name": "Notification (届出)",
        "nameJa": "製造販売届出",
        "applicableClasses": [
          "Class I"
        ],
        "description": "一般医療機器の製造販売を行う場合、都道府県知事に届出を行う。審査は実施されないが、製造販売業の許可（第三種）とQMS体制整備は必要。",
        "subtypes": [],
        "avgReviewTime": "即日〜数日（届出受理）",
        "fee": "なし",
        "url": "https://www.pmda.go.jp/review-services/drug-reviews/about-reviews/devices/0001.html"
      },
      {
        "name": "Certification (認証)",
        "nameJa": "第三者認証（登録認証機関による認証）",
        "applicableClasses": [
          "Class II（認証基準あり）",
          "Class III（認証基準あり）"
        ],
        "description": "厚生労働大臣が定める認証基準（JIS規格等に基づく）が存在するクラスII管理医療機器、およびクラスIII高度管理医療機器の一部（2014年11月より認証基準設定品目）について、登録認証機関（全10機関）が基準適合性の審査とQMS適合性調査を実施して認証を付与。PMDAを経由しないため、承認と比較して迅速な市場投入が可能。",
        "subtypes": [
          {
            "name": "新規認証申請",
            "description": "初回の認証取得。認証基準への適合性審査とQMS適合性調査を実施。"
          },
          {
            "name": "一部変更認証申請",
            "description": "認証取得済み品目の仕様変更。軽微変更届で対応可能な範囲を超える変更。"
          },
          {
            "name": "軽微変更届",
            "description": "認証事項の軽微な変更。届出のみで変更可能。"
          }
        ],
        "avgReviewTime": "約2〜3ヶ月（登録認証機関により異なる）",
        "fee": "約40万〜90万円（登録認証機関・品目により異なる）",
        "url": "https://www.pmda.go.jp/review-services/drug-reviews/about-reviews/devices/0025.html",
        "registeredCertificationBodies": [
          "テュフズードジャパン (AA)",
          "テュフ・ラインランド・ジャパン (AB)",
          "ドイツ品質システム認証 (AC)",
          "BSIグループジャパン (AD)",
          "SGSジャパン (AF)",
          "コスモス・コーポレイション (AG)",
          "日本品質保証機構 JQA (AH)",
          "ナノテックシュピンドラー (AI)",
          "電気安全環境研究所 JET (AK)",
          "医療機器センター JAAME (AL)"
        ]
      },
      {
        "name": "Approval (承認)",
        "nameJa": "製造販売承認（大臣承認）",
        "applicableClasses": [
          "Class II（認証基準なし）",
          "Class III（認証基準なし）",
          "Class IV"
        ],
        "description": "PMDAが承認申請資料の信頼性調査・審査を実施し、薬事・食品衛生審議会の意見を聴取した上で、厚生労働大臣が承認。申請資料はSTED（Summary Technical Documentation）形式。申請区分（新医療機器/改良/後発）により審査期間・手数料・必要データが異なる。",
        "subtypes": [
          {
            "name": "新規承認申請",
            "description": "初回の承認取得。"
          },
          {
            "name": "一部変更承認申請（一変申請）",
            "description": "承認事項の変更。品質・有効性・安全性に影響する変更。"
          },
          {
            "name": "軽微変更届",
            "description": "承認事項の軽微な変更。届出のみで変更可能。"
          }
        ],
        "categories": [
          {
            "name": "新医療機器",
            "nameEn": "New Medical Device",
            "description": "既存の承認品目と構造・使用方法・効能効果等が明らかに異なる医療機器。臨床試験データが原則必要。",
            "reviewTime": "12ヶ月（PMDA目標）/ 実績11.7ヶ月（令和6年度）",
            "reviewTimeSource": "https://www.pmda.go.jp/review-services/drug-reviews/about-reviews/devices/0022.html",
            "fee": {
              "classIV": "17,721,200円",
              "classIV_noClinical": "16,520,700円",
              "classII_III": "13,016,900円",
              "classII_III_noClinical": "11,816,400円"
            },
            "feeSource": "https://www.pmda.go.jp/review-services/drug-reviews/user-fees/0001.html",
            "requiredDocuments": [
              "起源又は発見の経緯及び外国での使用状況（イ）",
              "仕様の設定に関する資料（ロ）",
              "安定性及び耐久性に関する資料（ハ）",
              "法的規制への適合性（性能規格等）（ニ）",
              "リスク分析に関する資料（ホ）",
              "製造方法に関する資料（ヘ）",
              "臨床試験の試験成績 又は 臨床評価報告書（ト）",
              "添付文書案（チ）"
            ],
            "priorityReview": "優先審査指定: 9ヶ月（PMDA目標）/ 実績8.5ヶ月。先駆け指定: 実績5.8ヶ月"
          },
          {
            "name": "改良医療機器（臨床あり）",
            "nameEn": "Improved Medical Device (with clinical data)",
            "description": "既承認品目の改良で、臨床試験データを添付するもの。",
            "reviewTime": "10ヶ月（PMDA目標）/ 実績8.9ヶ月（令和6年度）",
            "reviewTimeSource": "https://www.pmda.go.jp/review-services/drug-reviews/about-reviews/devices/0033.html",
            "fee": {
              "classIV": "10,413,400円",
              "classIV_noClinical": "9,470,800円",
              "classII_III": "6,650,800円",
              "classII_III_noClinical": "5,708,200円"
            },
            "feeSource": "https://www.pmda.go.jp/review-services/drug-reviews/user-fees/0001.html",
            "requiredDocuments": [
              "新医療機器と同様（一部省略可能）",
              "臨床試験の試験成績（ト）が必須"
            ]
          },
          {
            "name": "改良医療機器（臨床なし）",
            "nameEn": "Improved Medical Device (without clinical data)",
            "description": "既承認品目の改良で、非臨床データのみで対応するもの。既存臨床データの引用・臨床評価報告書で代替。",
            "reviewTime": "6ヶ月（PMDA目標）/ 実績6.0ヶ月（令和6年度）",
            "reviewTimeSource": "https://www.pmda.go.jp/review-services/drug-reviews/about-reviews/devices/0034.html",
            "fee": {
              "classIV": "3,080,600円",
              "classII_III": "1,879,900円"
            },
            "feeSource": "https://www.pmda.go.jp/review-services/drug-reviews/user-fees/0001.html",
            "requiredDocuments": [
              "臨床評価報告書（既存臨床データの引用）",
              "非臨床試験データ",
              "リスク分析資料"
            ]
          },
          {
            "name": "後発医療機器",
            "nameEn": "Generic Medical Device",
            "description": "既承認品目と構造・使用方法・効能効果等が同一性を有する医療機器。実質的同等性の立証が中心。",
            "reviewTime": "4ヶ月（PMDA目標）/ 実績3.8ヶ月（令和6年度）",
            "reviewTimeSource": "https://www.pmda.go.jp/review-services/drug-reviews/about-reviews/devices/0034.html",
            "fee": {
              "classIV_noStandard": "2,334,300円",
              "classII_III_noStandard": "1,879,900円",
              "classIV_withStandard": "634,400円",
              "classII_III_withStandard": "526,400円"
            },
            "feeSource": "https://www.pmda.go.jp/review-services/drug-reviews/user-fees/0001.html",
            "requiredDocuments": [
              "既承認品目との対比表",
              "同等性を示す非臨床試験データ",
              "STED簡略化可（改良・後発用）"
            ]
          }
        ],
        "avgReviewTime": "申請区分により異なる（上記categories参照）",
        "fee": "申請区分・クラスにより異なる（上記categories参照）",
        "url": "https://www.pmda.go.jp/review-services/drug-reviews/about-reviews/devices/0001.html"
      },
      {
        "name": "Clinical Trial (治験)",
        "nameJa": "治験（治験計画届）",
        "applicableClasses": [
          "Class II",
          "Class III",
          "Class IV"
        ],
        "description": "承認申請に臨床試験データが必要な場合、治験計画届を厚生労働大臣（PMDA経由）に提出。届出制（届出後30日の安全性調査期間経過後に開始可能）。米国IDE（許可制）とは異なり、Significant Risk/Non-Significant Riskの区分はない。医療機器GCP省令を遵守。治験届の前に治験相談（対面助言）を実施することが推奨される。",
        "subtypes": [
          {
            "name": "治験計画届",
            "description": "初回の治験開始前に提出。30日ルール適用。"
          },
          {
            "name": "治験計画変更届",
            "description": "治験実施中の計画変更時に提出。"
          },
          {
            "name": "治験中止届・治験終了届",
            "description": "治験の中止・終了時に提出。"
          }
        ],
        "avgReviewTime": "治験計画届から30日（安全性調査期間）",
        "fee": "治験届：なし / 治験相談（対面助言）：約15万〜26万円",
        "url": "https://www.pmda.go.jp/review-services/trials/0003.html"
      }
    ],
    "consultations": [
      {
        "name": "対面助言（治験相談）",
        "description": "治験の科学性・倫理性について助言。治験計画届の前に実施推奨。",
        "fee": "約150,900〜261,500円",
        "url": "https://www.pmda.go.jp/review-services/f2f-pre/consultations/0012.html"
      },
      {
        "name": "対面助言（申請前相談）",
        "description": "承認申請の準備に関する助言。申請資料の構成・データ要件について確認。",
        "fee": "治験相談と同等水準",
        "url": "https://www.pmda.go.jp/review-services/f2f-pre/consultations/0019.html"
      },
      {
        "name": "簡易相談",
        "description": "短時間の簡易的な助言。一般的な規制質問に対応。",
        "fee": "比較的低額",
        "url": "https://www.pmda.go.jp/review-services/f2f-pre/consultations/0005.html"
      },
      {
        "name": "事前面談",
        "description": "対面助言前の論点整理。無料。",
        "fee": "無料",
        "url": "https://www.pmda.go.jp/review-services/f2f-pre/consultations/0003.html"
      },
      {
        "name": "RS戦略相談",
        "description": "規制科学（Regulatory Science）に基づく戦略相談。開発早期段階から評価方針について助言。",
        "fee": "別途設定",
        "url": "https://www.pmda.go.jp/review-services/f2f-pre/consultations/0019.html"
      }
    ],
    "qmsInspection": {
      "overview": "承認・認証取得時のQMS適合性調査が必須（届出を除く）。QMS省令はISO 13485:2003を基に制定。基準適合証の有効期間は5年間。",
      "types": [
        {
          "name": "新規調査",
          "description": "承認・認証取得時の初回QMS適合性確認。製造所の実地調査を含む。"
        },
        {
          "name": "定期調査",
          "description": "承認取得後5年ごと。基準適合証の更新。有効期限の6ヶ月前までに申請。"
        },
        {
          "name": "追加的調査",
          "description": "一部変更承認時等、変更内容に応じたQMS適合性の再確認。"
        }
      ],
      "feeCalculator": "https://web.fd-shinsei.mhlw.go.jp/download/qmscalc/index.html",
      "url": "https://www.pmda.go.jp/review-services/gmp-qms-gctp/qms/0003.html"
    }
  },
  "electronicSubmission": {
    "system": "FD申請 / DWAP / ゲートウェイシステム",
    "url": "https://www.pmda.go.jp/review-services/electronic-submission/0001.html",
    "description": "PMDAへの承認申請はFD申請ソフトを用いたeCTD/STED形式の電子申請が標準。DWAP（Drug and Medical Device Web Application Portal）やPMDAゲートウェイシステムで各種届出・報告を電子提出。オンライン提出の推進により段階的に電子化を拡大中。",
    "mandatory": true
  },
  "udi": {
    "required": true,
    "system": "医療機器を特定するための符号（バーコード）表示 + 医療機器データベース",
    "description": "日本のUDI制度は厚生労働省通知に基づく「医療機器を特定するための符号」の表示義務と「医療機器データベース」への登録で構成。GS1標準のバーコード（GTIN + 有効期限・ロット番号等）を使用。特定保険医療材料を中心に実装が進行。IMDRF UDIガイダンスとの整合を図りつつ制度整備中。",
    "url": "https://www.mhlw.go.jp/web/t_doc?dataId=00tc7117&dataType=1&pageNo=1",
    "timeline": "厚労省通知に基づき段階的に導入。特定保険医療材料（クラスIV/III相当）は表示義務化済み。全クラスへの拡大を推進中。"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "不具合報告制度（医療機器不具合等報告）",
      "mandatory": true,
      "url": "https://www.pmda.go.jp/safety/reports/mah/0006.html",
      "description": "製造販売業者は薬機法に基づきPMDAに報告義務がある。報告方法はIKWシステム（電子報告）または紙報告。",
      "reportingCategories": [
        {
          "category": "15日報告",
          "deadline": "知得から15日以内",
          "scope": "死亡・重篤な健康被害（既知・未知問わず）、未知の不具合で重篤なもの"
        },
        {
          "category": "30日報告",
          "deadline": "知得から30日以内",
          "scope": "添付文書の使用上の注意から予測可能な非重篤な不具合"
        },
        {
          "category": "定期報告",
          "deadline": "定められた期日",
          "scope": "品目指定定期報告（未知非重篤等）"
        },
        {
          "category": "研究報告",
          "deadline": "知得から30日以内",
          "scope": "論文等で安全性上の懸念が示されたもの"
        },
        {
          "category": "外国措置報告",
          "deadline": "知得から15日以内",
          "scope": "海外で製造中止・回収・廃棄等の措置がとられた場合"
        }
      ]
    },
    "recalls": {
      "authority": "PMDA / 厚生労働省",
      "description": "製造販売業者が自主的に回収を実施し、PMDAに回収報告書を提出。PMDAウェブサイトで回収情報を一般公開。",
      "url": "https://www.pmda.go.jp/safety/recalls/0001.html",
      "recallClasses": [
        {
          "class": "クラスI",
          "description": "重篤な健康被害又は死亡の原因となりうる。即時報告（FAX等で厚労省に第一報）。使用中止指示等を直ちに実施。"
        },
        {
          "class": "クラスII",
          "description": "一時的な又は医学的に治癒可能な健康被害の原因となりうる。速やかな報告と回収措置。"
        },
        {
          "class": "クラスIII",
          "description": "健康被害の原因となるとはまず考えられない。報告と適切な回収措置。"
        }
      ]
    },
    "surveillance": "使用成績評価制度（旧再審査に相当、2014年薬機法改正で導入）：厚労大臣指定品目（主に新医療機器）について、承認後3〜7年程度の実臨床データを収集・評価。GPSP省令に基づく製造販売後調査・試験の実施。PMDAによるシグナル検出とリスクコミュニケーション。",
    "useResultsEvaluation": {
      "description": "新医療機器を中心に厚生労働大臣が指定。承認後の実臨床での有効性・安全性を再確認。信頼性調査（GPSP調査）を実施。",
      "evaluationPeriod": "通常3〜7年（品目特性に応じて個別設定）",
      "url": "https://www.pmda.go.jp/review-services/reexamine-reevaluate/use-results-eval/0005.html"
    }
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "厚生労働省",
    "name": "自由販売証明書（Certificate of Free Sale）",
    "description": "日本で製造販売承認・認証を取得済みの医療機器について、厚生労働省が自由販売証明書を発行。輸出先国の登録・承認申請時に使用。",
    "processingTime": "約2〜4週間",
    "url": "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iyakuhin/shoumei/index.html"
  },
  "reimbursement": {
    "system": "公的医療保険制度（国民皆保険）",
    "authority": "厚生労働省 / 中央社会保険医療協議会（中医協）",
    "description": "医療機器の保険適用は「技術料への包括評価」と「特定保険医療材料としての個別評価」に大別される。保険適用区分（A1/A2/B1/B2/C1/C2等）に応じて申請手続き・審議スケジュールが異なる。先進医療制度（先進医療A/B）を活用して保険収載前に評価療養として使用する経路もある。",
    "categories": [
      {
        "code": "A1",
        "name": "包括",
        "description": "いずれかの診療報酬項目で包括的に評価（例：縫合糸、注射針）。希望書提出後20日経過で適用。"
      },
      {
        "code": "A2",
        "name": "特定包括",
        "description": "特定の診療報酬項目で包括的に評価。毎月10日受理→翌月1日適用。"
      },
      {
        "code": "B1",
        "name": "既存機能区分",
        "description": "既存の特定保険医療材料の機能区分に該当。毎月10日受理→翌月1日適用。"
      },
      {
        "code": "B2",
        "name": "既存機能区分・変更あり",
        "description": "既存機能区分に該当するが仕様変更あり。毎月10日区分決定→翌月1日適用。"
      },
      {
        "code": "B3",
        "name": "期限付改良加算",
        "description": "暫定的に改良加算が認められるもの。年4回（3月/6月/9月/12月）中医協審議。"
      },
      {
        "code": "C1",
        "name": "新機能",
        "description": "既存機能区分に該当せず、新たな機能区分の設定が必要。年4回中医協審議。類似機能区分比較方式で価格算定。"
      },
      {
        "code": "C2",
        "name": "新機能・新技術",
        "description": "C1と同様かつ技術料自体が未収載。年4回中医協審議。技術料の新設も含む。"
      }
    ],
    "pricingRules": {
      "method": "類似機能区分比較方式（基本）",
      "premiums": [
        {
          "name": "画期性加算",
          "range": "50〜100%"
        },
        {
          "name": "有用性加算",
          "range": "5〜30%"
        },
        {
          "name": "改良加算",
          "range": "1〜20%"
        }
      ]
    },
    "timeline": "A/B区分: 随時申請（毎月10日締め→翌月1日適用）。C1/C2/B3: 年4回（1月/4月/7月/10月頃受付→3月/6月/9月/12月中医協審議）",
    "codingSystems": [
      "特定保険医療材料コード（機能区分番号）",
      "診療報酬点数表（技術料）",
      "DPC/PDPS コード（包括評価）"
    ],
    "url": "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000176120.html"
  },
  "marketingRules": {
    "authority": "厚生労働省 / 消費者庁",
    "description": "医療機器の広告は薬機法第66条〜第68条および「医薬品等適正広告基準」に基づき規制。未承認機器の広告、虚偽・誇大広告は禁止。景品表示法（消費者庁所管）による不当表示規制も適用。",
    "keyRules": [
      "薬機法第66条: 虚偽・誇大広告の禁止",
      "薬機法第68条: 未承認医療機器の広告禁止",
      "医薬品等適正広告基準（厚労省通知）の遵守",
      "景品表示法に基づく優良誤認・有利誤認表示の禁止",
      "医療機器の添付文書・取扱説明書の記載要件"
    ]
  },
  "mdsap": {
    "status": "参加国（Regulatory Authority）",
    "description": "日本（PMDA/MHLW）はMDSAPの正式参加国（Regulatory Authority）の一つ。MDSAP創設5カ国（米・加・豪・伯・日）に含まれる。MDSAP監査報告書をQMS適合性調査の参考情報として活用可能。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "QMS省令はISO 13485を基礎として策定。QMS適合性調査においてISO 13485認証が参考とされるが、QMS省令への適合が直接の要件。2021年改正で国際整合をさらに強化。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "基本要件基準（Essential Principles）においてリスクマネジメントの実施が要求され、ISO 14971への適合が事実上の標準。JIS T 14971 として国内規格化。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "プログラム医療機器（SaMD）およびソフトウェアを含む医療機器の開発にIEC 62304への適合が求められる。JIS T 62304 として国内規格化。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "医用電気機器の安全規格。JIS T 0601シリーズとして国内規格化。認証基準・承認審査で適合が要求される。"
    },
    "others": [
      {
        "name": "IEC 62443（産業用サイバーセキュリティ）",
        "notes": "医療機器サイバーセキュリティガイダンス（2023年）でIEC 62443を参照。対応が推奨。"
      },
      {
        "name": "ISO 10993シリーズ（生物学的安全性評価）",
        "notes": "JIS T 0993として国内規格化。体内接触する医療機器の生物学的安全性評価に必須。"
      },
      {
        "name": "IEC 60601-1-2（EMC）",
        "notes": "医用電気機器の電磁両立性要求事項。JIS T 0601-1-2 として規格化。"
      }
    ]
  },
  "recentDevelopments": [
    {
      "date": "2024-04",
      "title": "改正薬機法の段階施行完了",
      "description": "2022年改正薬機法（令和4年改正）の段階施行が2024年4月までに完了。緊急承認制度、電子化推進等の措置が全面施行。"
    },
    {
      "date": "2023-04",
      "title": "医療機器サイバーセキュリティガイダンス発出",
      "description": "PMDAが医療機器のサイバーセキュリティに関するガイダンスを発出。IEC 62443を参照し、ネットワーク接続型医療機器の安全対策を明確化。"
    },
    {
      "date": "2023-03",
      "title": "プログラム医療機器（SaMD）実務ガイダンス更新",
      "description": "プログラム医療機器の該当性判断に関する実務通知が更新。AI/ML搭載ソフトウェアの医療機器該当性の判断基準を明確化。"
    },
    {
      "date": "2022-05",
      "title": "改正薬機法成立（緊急承認制度等）",
      "description": "緊急承認制度の創設、電子添文の法定化、GMP/QMS関連整備等を含む薬機法改正が成立。段階的に施行。"
    }
  ],
  "lastUpdated": "2026-04-01",
  "verified": null
};
