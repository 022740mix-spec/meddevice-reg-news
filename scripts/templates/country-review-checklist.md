# プロファイルレビューチェックリスト: {{COUNTRY_NAME}} ({{COUNTRY_CODE}})

レビュー日: {{DATE}}

---

## 前提: 自動バリデーション

`node scripts/validate-profiles.mjs` を実行し、エラー0件であることを確認済みの前提で以下のレビューを行う。

---

## A. 法令の正確性

- [ ] primaryLaw.title が現行の正式名称か（原語表記との照合）
- [ ] primaryLaw.originalTitle が正確か（原語で確認）
- [ ] primaryLaw.enacted が制定年として正しいか（施行年と混同していないか）
- [ ] primaryLaw.lastAmended が直近の改正を反映しているか
- [ ] primaryLaw.url が公式法令データベースにリンクしているか（アクセス確認）
- [ ] implementingRegulations の各項目が現行有効か（廃止済みでないか）
- [ ] relatedLaws に廃止・失効した法律が含まれていないか

## B. 規制当局

- [ ] 各 authority の fullName / localName（現地語名）が正確か
- [ ] 各 authority.url にアクセスして応答を確認
- [ ] 組織改編・名称変更が反映されているか（旧名称でないか）
- [ ] isPrimary: true の当局が実際の主管機関と一致しているか

## C. 分類体系

- [ ] classification.system の記述が現行制度を反映しているか
- [ ] classes の name が公式名称と一致しているか（旧制度名でないか）
- [ ] classes 内で命名規則が統一されているか（Class/Group 混在なし）
- [ ] 各クラスの examples が適切な機器例か
- [ ] 各クラスの approvalPath が現行のパスウェイ名と一致しているか

## D. 適合性評価

- [ ] conformityAssessment.routes の名称が現行パスウェイと一致しているか
- [ ] applicableClasses が classification.classes の name と整合しているか
- [ ] avgReviewTime に公式出典があるか（推定値・根拠不明の具体値でないか）
- [ ] fee に公式出典があるか（当局の手数料表・法定文書で確認可能か）
- [ ] 登録/許可の有効期間（無期限 or N年更新）が正確か

## E. URL有効性

- [ ] primaryLaw.url がアクセス可能か
- [ ] electronicSubmission.url がアクセス可能か
- [ ] 各 authority.url がアクセス可能か
- [ ] implementingRegulations の url がアクセス可能か
- [ ] リダイレクトされていないか（旧サイトから新サイトへの転送）

## F. 日付・数値の整合性

- [ ] lastUpdated が YYYY-MM-DD 形式か
- [ ] recentDevelopments の date が時系列順（新しい順）か
- [ ] enacted / lastAmended が合理的な年代か
- [ ] 手数料の通貨が正しいか（現地通貨で記載されているか）

## G. 国際規格・MDSAP

- [ ] internationalStandards の受容状況が公式情報と一致しているか
- [ ] mdsap.status が IMDRF の最新参加国リストと一致しているか

## H. 最新動向

- [ ] recentDevelopments に直近2年以内の動向が含まれているか
- [ ] 重要な規制変更の見落としがないか（Web検索で確認）

---

## レビュー結果

### 修正が必要な箇所

| # | 重要度 | 箇所 | 現在の記載 | 正しい内容 | 根拠URL |
|---|--------|------|-----------|-----------|---------|
| 1 | 高/中/低 | | | | |

### 検証OKの項目

（問題がなかった項目を列挙）

### 総合判定

- [ ] 承認（修正不要）
- [ ] 条件付き承認（軽微な修正のみ）
- [ ] 差し戻し（重大な誤りあり）
