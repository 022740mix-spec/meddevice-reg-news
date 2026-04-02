# 国別規制プロファイル調査: {{COUNTRY_NAME}} ({{COUNTRY_CODE}})

## 調査目的

countryProfiles.js に追加する {{COUNTRY_NAME}} の医療機器規制プロファイルデータの1次調査。

## 出力形式

以下25フィールドのすべてについてデータを収集し、構造化された形式で報告すること。

### 必須トップレベルキー（25個）

| # | キー | 説明 |
|---|------|------|
| 1 | code | ISO 3166-1 alpha-3 国コード |
| 2 | country | 日本語国名 |
| 3 | countryEn | 英語国名 |
| 4 | region | 地域（North America / Europe / ASPAC / Latam / Middle East & Africa） |
| 5 | flag | 国旗絵文字 |
| 6 | legalSystemOverview | 法体系概要（type, description, keyCharacteristics[]） |
| 7 | authorities[] | 規制当局（name, fullName, localName, role, url, isPrimary）※isPrimary: trueが1つ以上必須 |
| 8 | notifiedBodies | 認証機関制度（system, description, bodies[]） |
| 9 | deviceDefinition | 医療機器の法的定義（legalDefinition, scope, notes） |
| 10 | primaryLaw | 主要法令（title, originalTitle, enacted, lastAmended, url, description） |
| 11 | implementingRegulations[] | 実施規則（title, date, url, description, category） |
| 12 | relatedLaws[] | 関連法（title, category, enacted, url, relevance） |
| 13 | classification | 分類体系（system, basis, classes[], rules[], totalProductCodes） |
| 14 | conformityAssessment | 適合性評価（overview, routes[]）※routes内のavgReviewTime/feeには出典URLを`avgReviewTimeSource`/`feeSource`として併記 |
| 15 | electronicSubmission | 電子申請（system, url, description, mandatory） |
| 16 | udi | UDI制度（required, system, description, url, timeline） |
| 17 | postMarket | 市販後監視（adverseEventReporting{}, recalls{}, surveillance） |
| 18 | certificateOfFreeSale | 自由販売証明（available, issuingAuthority, name, description, processingTime, url） |
| 19 | reimbursement | 償還制度（system, authority, description, codingSystems[], url） |
| 20 | marketingRules | 広告規制（authority, description, keyRules[]） |
| 21 | mdsap | MDSAP参加状況（status, description） |
| 22 | internationalStandards | 国際規格受入（iso13485, iso14971, iec62304, iec60601, others[]） |
| 23 | recentDevelopments[] | 最近の動向（date, title, description）※直近2年以内を4件程度 |
| 24 | lastUpdated | 最終更新日（YYYY-MM-DD形式） |
| 25 | verified | 検証済みフラグ（null で出力） |

### ネスト構造の必須項目（バリデータがチェック）

**authorities[] の各要素:**
- `name` (略称), `fullName` (英語正式名), `localName` (現地語名, nullも可), `role` (役割), `url` (公式サイト, isPrimary=trueの場合は必須), `isPrimary` (true/false)

**classification.classes[] の各要素:**
- `name` (英語クラス名: "Class A"等), `nameJa` (日本語: "クラスA"等), `riskLevel` (低/中低/中高/高), `description` (説明), `examples[]` (機器例5つ程度), `approvalPath` (承認経路の名称)

**conformityAssessment.routes[] の各要素:**
- `name` (英語経路名), `nameJa` (日本語), `applicableClasses[]` (対象クラス名 — classification.classes[].nameと一致させること), `description`, `subtypes[]`, `avgReviewTime` (出典付き), `avgReviewTimeSource` (出典URL), `fee` (出典付き), `feeSource` (出典URL), `url`

**recentDevelopments[] の各要素:**
- `date` (YYYY-MM形式), `title`, `description`

**primaryLaw の必須項目:**
- `title`, `originalTitle` (原語名), `enacted` (制定年YYYY), `lastAmended`, `url` (法令テキストの具体ページ), `description`

---

## エラーパターン注意事項（必読）

以下は過去の調査で頻発したエラーです。同じ間違いを繰り返さないこと。

### 1. 審査期間・手数料に裏付けのない具体値を記載しない

- avgReviewTime, fee フィールドには、**当局の公式サイトまたは法定文書で確認できる数値のみ**を記載
- 確認できない場合は「要確認（公式情報で裏付け未取得）」と明記
- USD換算を含む場合は時点を明記
- **過去の失敗例**: インドネシアで旧基準（Permenkes 62/2017）の審査期間を記載し、新基準（Permenkes 11/2025）への更新を見落とした

### 2. 廃止済み法令を現行として引用しない

- 法令の有効性を必ず確認。改廃履歴がある場合は**最新の法令**を引用
- **過去の失敗例**: インドネシアの UU No. 36/2009（保健法）が UU No. 17/2023（オムニバス保健法）で廃止済みだった。ベトナムのサイバーセキュリティ法が新法 Law 116/2025 に置換済みだった

### 3. URLは具体的なページを指定する（トップページURLの禁止）

- **当局トップページのURLだけを貼らない**。法令・ガイダンス・分類規則等の**具体的なページURL**を調べて記載
- 各当局のウェブサイトが組織改編で移転していないか確認
- **URLには実際にアクセスして生存確認すること**
- **過去の失敗例**: タイのプロファイルで primaryLaw.url、implementingRegulations[].url、postMarket の url 等が全て `https://www.fda.moph.go.th/`（トップページ）になっており、ユーザーが具体的な法令・ガイダンスに辿り着けなかった
- **過去の失敗例**: ベトナムの旧DMEC（dmec.moh.gov.vn）が IMDA（imda.moh.gov.vn）に移行済みだった

### 4. 分類名称・パスウェイ名を正確に

- **現行制度の正式名称**を使用（旧制度名と混同しない）
- classification.classes の name は同一国内で命名規則を統一（Class/Group を混在させない）
- **過去の失敗例**: タイで旧制度の「Group 1〜4」を使用したが、現行は「Class 1〜4」。パスウェイも Registration ではなく Listing/Notification/Licensing が正式

### 5. 制定日と施行日を区別する

- enacted: 法律の制定（公布）年。裏付けが取れない具体日付は「年のみ」で記載
- lastAmended: 直近の改正年
- 施行日が制定日と異なる場合は description で補足

### 6. 有効期間を正確に

- 登録・許可の有効期間（無期限 vs 5年更新 等）を正確に確認
- **過去の失敗例**: インドネシアのNIE（流通許可）を「無期限有効」と記載したが、実際は5年更新

### 7. 裏付けのない略語展開・固有名詞を創作しない

- システム名やポータル名の正式展開（フルネーム）は、公式サイトで確認できるもののみ記載
- 確認できない場合は略称のみで記載し、展開名を推測で作らない
- **過去の失敗例**: タイの電子申請システム「PRIVUS」に対し、裏付けのない正式名称を創作した

### 8. MDSAP参加形態を正確に区別する

- MDSAPの参加形態は5段階あり混同しやすい：**参加国（Regulatory Authority）**、**Affiliate Member**、**Observer**、**非参加**
- 正式参加国（Regulatory Authority）は5カ国のみ: USA, CAN, AUS, BRA, JPN
- **過去の失敗例**: SGPを「Affiliate Member」と記載したが実際は「Observer」。GBRを「参加国」と記載したが実際は「Observer」。EUを「オブザーバー」と記載したが実際は「非参加」。KORを「2021年正式参加」と記載したが実際は「2019年協力会員」

### 9. 電子申請システムの移行を確認する

- 各国の電子申請ポータルは組織改編やシステム更新で移行されることがある
- 調査時点での最新システム名・URLを確認すること
- **過去の失敗例**: SGPのPRISMが2025年7月にSHARE（Singapore Health Product Access and Regulatory E-System）に移行済みだった

### 10. 他国の規制枠組みを別の国に適用しない

- 国が独自法制を持つ場合、参照元の規制（EU MDR等）をそのまま適用して記述しない
- **過去の失敗例**: GBRの分類体系を「EU MDRベース」と記載したが、GBの現行制度はUK MDR 2002（SI 2002/618）に基づく旧EU指令由来の枠組み。MHRAも「EU MDRはGBには適用されない」と明示

### 11. primaryLaw.title に説明的注記を混入しない

- `title` フィールドは法令の正式名称のみ。和文説明や略称の注記は `description` に記載
- **過去の失敗例**: CANの「Food and Drugs Act (FDA — カナダ)」、BRAの「Lei 6.360/1976（医薬品・医療機器等衛生監視法）」

### 12. lastAmended には改正公布日を記載する（施行日ではない）

- `lastAmended` は法律の改正が公布された日付。施行日とは異なる場合がある
- 施行日は `description` で補足
- **過去の失敗例**: CHNの条例を lastAmended: 2021-06-01（施行日）と記載したが、公布日は2021-02-09
- **過去の失敗例**: タイの電子申請システム「PRIVUS」に対し、裏付けのない正式名称「Product Review and Information Versatile Utility System」を創作した

---

## 調査ソースの優先順位

1. 当該国の規制当局公式サイト
2. 法令データベース（官報、法令検索サイト）
3. 業界コンサルタント（Emergo by UL、Asia Actual、Pacific Bridge Medical 等）の公開レポート — クロスチェック用
4. WHO / IMDRF / ASEAN AMDD の公開文書

---

## 出力の末尾に必ず記載すること

1. **使用した主要ソースのURL一覧**（実際にアクセスして確認したもの）
2. **確認できなかった項目の一覧**（裏付けが取れなかった数値・情報）
3. **データの確認日**
