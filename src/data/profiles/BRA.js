// ブラジル (Brazil)
export default {
  "code": "BRA",
  "country": "ブラジル",
  "countryEn": "Brazil",
  "region": "Latam",
  "flag": "🇧🇷",
  "legalSystemOverview": {
    "type": "連邦制・大統領制（Federal presidential system）",
    "description": "ANVISA（国家衛生監督庁）が医療機器の登録・監督を一元的に所管する。2022年施行のRDC 751/2022により規制フレームワークが大幅に刷新され、IMDRF整合の4クラス分類制度へ移行。ブラジル国内の登録保持者（BRH: Brazilian Registration Holder）の設置が義務付けられている。MDSAP参加国として国際調和を推進。",
    "keyCharacteristics": [
      "ANVISA による連邦レベルの一元的規制体制",
      "RDC 751/2022 による新規制フレームワーク（IMDRF整合）",
      "4クラス分類（I/II/III/IV）— IMDRF分類ルールに整合",
      "Notificação（クラスI/II届出）vs Registro（クラスIII/IV登録）の二元構造",
      "BRH（Brazilian Registration Holder）の設置義務",
      "CBPF（GMP適合証明）の取得義務"
    ]
  },
  "authorities": [
    {
      "name": "ANVISA",
      "fullName": "Agência Nacional de Vigilância Sanitária",
      "localName": "Agência Nacional de Vigilância Sanitária",
      "role": "医療機器の登録・適合性評価・GMP査察・市販後監視・リコール管理。ブラジルにおける医療機器規制の中核機関。",
      "url": "https://www.gov.br/anvisa/pt-br",
      "isPrimary": true
    },
    {
      "name": "INMETRO",
      "fullName": "Instituto Nacional de Metrologia, Qualidade e Tecnologia",
      "localName": "Instituto Nacional de Metrologia, Qualidade e Tecnologia",
      "role": "計量・品質・技術標準の認定機関。医療機器の適合性評価機関の認定、特定製品の強制認証を所管。",
      "url": "https://www.gov.br/inmetro/pt-br",
      "isPrimary": false
    }
  ],
  "notifiedBodies": {
    "system": "ANVISA直接審査 + INMETRO認定機関",
    "description": "ブラジルではANVISAが医療機器の登録審査を直接実施する。GMP査察はANVISAまたはMDSAP認定監査機関が実施し、CBPF（Certificado de Boas Práticas de Fabricação）を発行。INMETRO認定の試験機関が特定の技術試験を実施する場合がある。",
    "bodies": [
      {
        "name": "ANVISA（直接審査）",
        "url": "https://www.gov.br/anvisa/pt-br/assuntos/produtossaude/produtos-para-a-saude"
      }
    ]
  },
  "deviceDefinition": {
    "legalDefinition": "健康の目的で、疾病の診断、予防、監視、治療若しくは緩和、負傷の診断・監視・治療・緩和・補償、解剖学的構造若しくは生理学的過程の検査・置換・修正・支援、又は生命の維持に使用される器具、装置、機器、材料、体外診断用製品その他類似の物品であって、主たる作用が薬理学的・免疫学的・代謝的手段ではないもの（RDC 751/2022に基づく）",
    "scope": "体外診断用医療機器（IVD）を含む。SaMD（ソフトウェア医療機器）も対象。コンビネーション製品は主たる作用により分類。",
    "notes": "RDC 751/2022はIMDRFの医療機器定義に整合しており、旧規制（RDC 185/2001等）から大幅に近代化された。"
  },
  "primaryLaw": {
    "title": "Lei nº 6.360, de 23 de setembro de 1976",
    "originalTitle": "Lei nº 6.360, de 23 de setembro de 1976",
    "enacted": "1976-09-23",
    "lastAmended": "2024-06-01",
    "url": "https://www.planalto.gov.br/ccivil_03/leis/l6360.htm",
    "description": "ブラジルにおける医薬品・医療機器を含む衛生製品の規制根拠法。製品の登録義務、製造・輸入・販売の許可要件、広告規制、罰則等を包括的に規定。ANVISAの規制権限の法的基盤。"
  },
  "implementingRegulations": [
    {
      "title": "RDC 751/2022（医療機器登録・届出に関する決議）",
      "date": "2022-09-15",
      "url": "https://www.gov.br/anvisa/pt-br/assuntos/noticias-anvisa/2022/publicada-a-rdc-751-2022",
      "description": "医療機器の分類、登録（Registro）・届出（Notificação）手続、技術文書要件を包括的に規定する主要規則。IMDRF分類ルールに整合した4クラス分類を導入。旧RDC 185/2001等を統合・刷新。",
      "category": "基本規則"
    },
    {
      "title": "RDC 665/2022（GMP要件）",
      "date": "2022-03-30",
      "url": "https://www.gov.br/anvisa/pt-br/assuntos/noticias-anvisa/2022/anvisa-atualiza-requisitos-de-boas-praticas-de-fabricacao-de-dispositivos-medicos",
      "description": "医療機器の製造品質管理基準（GMP/Boas Práticas de Fabricação）を規定。ISO 13485に整合。CBPF認証の取得要件。",
      "category": "GMP"
    },
    {
      "title": "RDC 546/2021（臨床試験要件）",
      "date": "2021-08-30",
      "url": "https://www.gov.br/anvisa/pt-br/assuntos/produtossaude/produtos-para-a-saude",
      "description": "医療機器の臨床試験（臨床評価）の計画・実施・報告に関する要件。GCP遵守義務。",
      "category": "臨床試験"
    },
    {
      "title": "IN 261/2023（技術文書ガイダンス）",
      "date": "2023-04-15",
      "url": "https://www.gov.br/anvisa/pt-br/assuntos/produtossaude/produtos-para-a-saude",
      "description": "RDC 751/2022に基づく登録申請の技術文書作成に関する詳細ガイダンス。STED形式を参考にした文書構成。",
      "category": "申請様式"
    }
  ],
  "relatedLaws": [
    {
      "title": "Lei Geral de Proteção de Dados (LGPD) — Lei 13.709/2018",
      "category": "データ保護",
      "enacted": "2018-08-14",
      "url": "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm",
      "relevance": "医療機器から収集される個人健康データの処理に適用。センシティブデータ（健康情報）の処理には明示的同意等の法的根拠が必要。ANPD（国家データ保護庁）が監督。"
    },
    {
      "title": "CONAMA Resolution 358/2005（医療廃棄物処理）",
      "category": "環境",
      "enacted": "2005-04-29",
      "url": "https://www.ibama.gov.br/",
      "relevance": "使用済み医療機器・単回使用機器の廃棄処理に関する環境規制。感染性廃棄物の分別・処理要件を規定。"
    },
    {
      "title": "Lei 9.782/1999（ANVISA設立法）",
      "category": "組織法",
      "enacted": "1999-01-26",
      "url": "https://www.planalto.gov.br/ccivil_03/leis/l9782.htm",
      "relevance": "ANVISAの設立・権限・組織構成を規定。医療機器を含む衛生製品の規制権限の法的根拠。"
    }
  ],
  "classification": {
    "system": "IMDRF整合4クラス分類（RDC 751/2022）",
    "basis": "意図する使用目的、侵襲性、使用期間、能動/非能動等のリスク要因に基づく分類。IMDRF分類ルールに整合。2022年にRDC 751/2022で刷新。",
    "classes": [
      {
        "name": "Class I",
        "nameJa": "クラスI",
        "riskLevel": "低",
        "description": "低リスクの医療機器。Notificação（届出）で市場投入が可能。ANVISAによる事前審査は不要。",
        "examples": [
          "聴診器",
          "圧迫包帯",
          "手術用手袋",
          "歩行補助器",
          "舌圧子"
        ],
        "approvalPath": "Notificação（届出）"
      },
      {
        "name": "Class II",
        "nameJa": "クラスII",
        "riskLevel": "中低",
        "description": "中低リスクの医療機器。Notificação（届出）で市場投入が可能だが、クラスIより詳細な技術文書が必要。",
        "examples": [
          "補聴器",
          "超音波画像診断装置",
          "歯科用充填材",
          "電子体温計",
          "注射針"
        ],
        "approvalPath": "Notificação（届出）"
      },
      {
        "name": "Class III",
        "nameJa": "クラスIII",
        "riskLevel": "中高",
        "description": "中高リスクの医療機器。Registro（登録）が必要で、ANVISAによる技術審査を経て承認。",
        "examples": [
          "人工呼吸器",
          "血液透析器",
          "整形外科用インプラント",
          "輸液ポンプ",
          "コンタクトレンズ"
        ],
        "approvalPath": "Registro（登録 — ANVISA審査）"
      },
      {
        "name": "Class IV",
        "nameJa": "クラスIV",
        "riskLevel": "高",
        "description": "最高リスクの医療機器。Registro（登録）が必要で、ANVISAによる最も厳格な審査。臨床データの提出が通常必要。",
        "examples": [
          "心臓ペースメーカー",
          "人工心臓弁",
          "薬剤溶出型ステント",
          "乳房インプラント",
          "脳深部刺激装置"
        ],
        "approvalPath": "Registro（登録 — ANVISA審査 / 臨床データ要求）"
      }
    ],
    "rules": [
      "IMDRF分類ルール（SG1/N77:2012）に整合した18の分類ルール",
      "RDC 751/2022 Annex に基づく分類基準",
      "IVDは別途RDC 36/2015（改正中）で分類",
      "SaMDはその意図する使用目的に応じて分類"
    ],
    "totalProductCodes": "ANVISA独自の製品分類コード体系"
  },
  "conformityAssessment": {
    "overview": "ブラジルで医療機器を販売するにはANVISAへの登録または届出が必要。BRH（Brazilian Registration Holder）が申請主体となる。クラスI/IIはNotificação（届出）、クラスIII/IVはRegistro（登録）が必要。全クラスでCBPF（GMP適合証明書）の取得が前提条件。MDSAP監査報告書はCBPF取得の代替として活用可能。",
    "routes": [
      {
        "name": "Notificação",
        "nameJa": "届出（Notificação）",
        "applicableClasses": [
          "Class I",
          "Class II"
        ],
        "description": "低・中低リスクの医療機器についてBRHがANVISAに届出。基本的な技術文書の提出が必要だが、ANVISAによる事前の実質的審査は行われない。CBPF取得済みが前提。有効期限なし（取消事由に該当しない限り有効）。",
        "subtypes": [
          "新規届出",
          "変更届出（Alteração）"
        ],
        "avgReviewTime": "約30〜60日",
        "fee": "BRL 500〜2,000程度（製品分類により異なる）",
        "url": "https://www.gov.br/anvisa/pt-br/assuntos/produtossaude/produtos-para-a-saude"
      },
      {
        "name": "Registro",
        "nameJa": "登録（Registro）",
        "applicableClasses": [
          "Class III",
          "Class IV"
        ],
        "description": "中高・高リスクの医療機器についてBRHがANVISAに登録申請。ANVISAが技術文書・臨床データ等を審査。クラスIVは最も厳格な審査が適用され、臨床試験データの提出が通常必要。有効期間10年（更新可能）。",
        "subtypes": [
          "新規登録申請",
          "変更申請（Alteração）",
          "更新申請（Revalidação）",
          "ファミリー登録"
        ],
        "avgReviewTime": "クラスIII: 6〜12ヶ月 / クラスIV: 12〜24ヶ月",
        "fee": "BRL 5,000〜30,000程度（製品分類により異なる）",
        "url": "https://www.gov.br/anvisa/pt-br/assuntos/produtossaude/produtos-para-a-saude"
      }
    ]
  },
  "electronicSubmission": {
    "system": "SOLICITA (ANVISAオンライン申請システム)",
    "url": "https://www.gov.br/anvisa/pt-br/sistemas/solicita",
    "description": "ANVISAのオンラインシステム「SOLICITA」を通じて医療機器の登録・届出申請を電子的に実施。技術文書のアップロード、審査状況の追跡が可能。2023年から段階的に新システムへ移行中。",
    "mandatory": true
  },
  "udi": {
    "required": true,
    "system": "ANVISA UDI制度（導入中）",
    "description": "ANVISAはIMDRF UDIガイダンスに基づくUDI制度を段階的に導入中。GS1ブラジルとの連携により、GS1標準のUDI-DIを使用。RDC 751/2022にUDI要件が含まれ、ラベル表示と登録データベースへの情報提供を義務化予定。",
    "url": "https://www.gov.br/anvisa/pt-br/assuntos/produtossaude/produtos-para-a-saude",
    "timeline": "クラスIV: 2025年から段階的導入 / クラスIII: 2026年 / クラスII: 2027年 / クラスI: 2028年（予定）"
  },
  "postMarket": {
    "adverseEventReporting": {
      "system": "NOTIVISA / VIGIMED",
      "mandatory": true,
      "url": "https://www.gov.br/anvisa/pt-br/assuntos/fiscalizacao-e-monitoramento/notificacoes/tecnovigilancia",
      "description": "BRHはANVISAに医療機器関連の有害事象を報告する義務がある。NOTIVISAシステム（新システムVIGIMEDへ移行中）を通じて電子報告。死亡・重篤な健康被害は10営業日以内、その他は30営業日以内。医療機関からの報告も義務。"
    },
    "recalls": {
      "authority": "ANVISA",
      "description": "ANVISAがリコール・是正措置を監督。BRHは自主的な回収とANVISAへの報告義務を負う。ANVISAウェブサイトでリコール情報を公開。Tecnovigilânciaプログラムの一環として実施。",
      "url": "https://www.gov.br/anvisa/pt-br/assuntos/fiscalizacao-e-monitoramento/alertas-e-recalls"
    },
    "surveillance": "BRHは市販後監視（Tecnovigilância）プログラムに基づくモニタリング義務を負う。ANVISAはシグナル検出・リスク評価を実施し、必要に応じて市場措置（販売停止・回収命令）を発出。定期安全性報告の提出義務も順次導入。"
  },
  "certificateOfFreeSale": {
    "available": true,
    "issuingAuthority": "ANVISA",
    "name": "Certificado de Livre Comércio (CLC)",
    "description": "ANVISAに登録・届出済みの医療機器について、自由販売証明書（Certificado de Livre Comércio）を発行。輸出先国の規制申請に使用。",
    "processingTime": "約30〜60日",
    "url": "https://www.gov.br/anvisa/pt-br/assuntos/produtossaude/produtos-para-a-saude"
  },
  "reimbursement": {
    "system": "SUS (Sistema Único de Saúde) / CONITEC",
    "authority": "Ministério da Saúde / CONITEC",
    "description": "公的医療制度SUS（統一医療制度）における医療機器の償還はCONITEC（国家保健技術統合委員会）が評価・推奨。医療技術評価（HTA）に基づき、費用対効果・予算影響分析を実施。民間保険（ANS監督）でも医療機器カバレッジの規定あり。",
    "codingSystems": [
      "SIGTAP（SUS手技・手術コード表）",
      "CNES（医療施設コード）",
      "TUSS（民間保険統一用語システム）"
    ],
    "url": "https://www.gov.br/conitec/pt-br"
  },
  "marketingRules": {
    "authority": "ANVISA / CMED",
    "description": "医療機器の広告はANVISAの広告規制（RDC 96/2008等）に基づき規制。処方機器の一般消費者向け広告は禁止。虚偽・誇大広告に対する罰則あり。",
    "keyRules": [
      "処方機器の一般消費者向け広告の禁止",
      "広告内容の正確性・エビデンスに基づく表現の義務",
      "未登録機器の広告禁止",
      "ANVISAによる広告監視と是正命令権限",
      "医療従事者向けプロモーションの倫理基準"
    ]
  },
  "mdsap": {
    "status": "参加国（Regulatory Authority）",
    "description": "ブラジル（ANVISA）はMDSAP参加国。MDSAP監査報告書をCBPF（GMP適合証明書）取得の根拠として受入れ。MDSAP導入以前はANVISAによる海外工場査察が必須であったが、MDSAP報告書の活用により国際企業のGMP認証プロセスが大幅に効率化。"
  },
  "internationalStandards": {
    "iso13485": {
      "accepted": true,
      "notes": "RDC 665/2022のGMP要件はISO 13485に整合。CBPF認証においてISO 13485適合が確認される。MDSAP監査でもISO 13485が基準。"
    },
    "iso14971": {
      "accepted": true,
      "notes": "リスクマネジメントの実施が登録・届出要件。ISO 14971への適合が事実上の標準。ABNT NBR ISO 14971として国内規格化。"
    },
    "iec62304": {
      "accepted": true,
      "notes": "ソフトウェアを含む医療機器の開発にIEC 62304適合が推奨。ANVISAガイダンスで参照。"
    },
    "iec60601": {
      "accepted": true,
      "notes": "医用電気機器の安全規格。ABNT NBR IEC 60601シリーズとして国内規格化。INMETRO強制認証の基準として適用される場合がある。"
    },
    "others": [
      {
        "name": "ISO 10993シリーズ（生物学的安全性評価）",
        "notes": "生体接触医療機器の生物学的安全性評価に必須。ABNT NBR ISO 10993として規格化。"
      },
      {
        "name": "ABNT NBR IEC 62366（ユーザビリティ）",
        "notes": "医療機器のユーザビリティ評価に関するブラジル国内規格。"
      }
    ]
  },
  "recentDevelopments": [
    {
      "date": "2026-01",
      "title": "RDC 751/2022 完全施行フェーズ開始",
      "description": "RDC 751/2022の全条項が完全施行。旧規制からの移行期間が終了し、新分類体系・登録要件が全面適用。"
    },
    {
      "date": "2025-09",
      "title": "IVD規制改革案公表",
      "description": "ANVISAが体外診断用医療機器（IVD）の規制改革案を公表。IMDRF IVD分類に整合した新規則を策定中。"
    },
    {
      "date": "2025-06",
      "title": "SaMD分類ガイダンス公表",
      "description": "ANVISAがAI/ML搭載SaMDの分類と登録に関するガイダンスを公表。IMDRF SaMDフレームワークに基づく分類基準を提示。"
    },
    {
      "date": "2025-03",
      "title": "MDSAP Version 2.0 対応",
      "description": "ANVISAがMDSAP Version 2.0の要件に対応するガイダンスを公表。CBPF認証プロセスとMDSAP報告書の連携を強化。"
    }
  ],
  "lastUpdated": "2026-04-06",
  "verified": "2026-04-06"
};
