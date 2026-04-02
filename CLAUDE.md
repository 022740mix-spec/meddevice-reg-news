# 医療機器規制ニュースサイト — プロジェクトルール

## 国別プロファイル（countryProfiles.js）作成ルール

### URL品質ルール（最重要）

1. **トップページURLの禁止**: primaryLaw.url、implementingRegulations[].url、relatedLaws[].url、electronicSubmission.url、postMarket の url 等に当局トップページだけを貼らない。法令テキスト・ガイダンス文書・申請ポータルの**具体的なページURL**を記載すること
2. **URL生存確認の義務**: 記載する全URLに実際にアクセスして、ページが存在し意図した内容であることを確認すること
3. **同一URLの使い回し禁止**: 同じURLを3箇所以上で使わない。各フィールドに適切な個別URLを設定すること
4. **法令URLは公式ソース優先**: primaryLaw.url、implementingRegulations[].url、relatedLaws[].url には政府・規制当局の公式法令データベースを使用。業界コンサルタント（asiaactual.com、emergobyul.com等）は補足情報用のフィールド（conformityAssessment.routes[].url 等）に限定
5. **`npm run validate:profiles` の通過必須**: 新規プロファイル追加後は必ず実行し、error 0件であることを確認してからコミット。`build` / `deploy` にも自動接続済み

### データ正確性ルール

6. **裏付けのない具体値の禁止**: 審査期間（avgReviewTime）、手数料（fee）に公式ソースで確認できない数値を記載しない。確認できない場合は「要確認（公式情報で裏付け未取得）」と明記
7. **高リスク値の出典必須**: avgReviewTime / fee に具体値を記載する場合、`avgReviewTimeSource` / `feeSource` フィールドに出典URLを併記すること
8. **廃止済み法令の引用禁止**: 法令の改廃履歴を確認し、最新の法令を引用する
9. **裏付けのない略語展開の禁止**: システム名やポータル名のフルネームは公式サイトで確認できるもののみ記載。推測で展開名を創作しない
10. **分類名称の正確性**: 現行制度の正式名称を使用し、旧制度名と混同しない。同一国内で Class/Group を混在させない

### スキーマルール

11. **必須25キー**: code, country, countryEn, region, flag, legalSystemOverview, authorities, notifiedBodies, deviceDefinition, primaryLaw, implementingRegulations, relatedLaws, classification, conformityAssessment, electronicSubmission, udi, postMarket, certificateOfFreeSale, reimbursement, marketingRules, mdsap, internationalStandards, recentDevelopments, lastUpdated, verified
12. **スキーマ外キーの禁止**: 上記25キーおよびネスト構造の定義済みフィールド以外のキーを追加しない。新しいフィールドが必要な場合はスキーマ定義（validate-profiles.mjs）とテンプレート（country-research-prompt.md）を先に更新すること
13. **region の値**: `North America` / `Europe` / `ASPAC` / `Latam` / `Middle East & Africa` のいずれか（REGION_ORDER と一致させること）
14. **ネスト必須項目**: authorities[].name/fullName/role, classification.classes[].name/nameJa/riskLevel/description/approvalPath, conformityAssessment.routes[].name/nameJa/description/url/avgReviewTimeSource/feeSource, recentDevelopments[].date/title/description, primaryLaw.title/enacted/url/description

### verified フィールドの管理

15. **新規追加時**: `verified: null`（未検証）で作成
16. **2次チェック完了後**: レビュー日・レビュー者情報を設定（例: `verified: "2026-04-02"`）
17. **verified の意味**: null = 未検証、日付文字列 = その日に2次チェック済み

### ベースライン管理

18. **ベースラインファイル**: `scripts/validate-baseline.json` に既知の警告を記録。ベースラインに含まれる違反はwarn、含まれない新規違反はerror
19. **ベースライン更新**: 既知の問題を修正した場合、または新たに既知問題として受け入れる場合に `npm run validate:profiles:update-baseline` を実行
20. **ベースラインの肥大化禁止**: 新規プロファイルの問題を安易にベースラインに追加しない。まず修正を試みること

### ワークフロー

- **1次調査**: `scripts/templates/country-research-prompt.md` テンプレートを使用
- **プロファイル作成後**: `npm run validate:profiles` でエラー0件を確認
- **2次チェック**: `scripts/templates/country-review-checklist.md` に基づきレビュー（Codex推奨）
- **修正適用後**: 再度 `npm run build`（validate:profiles が自動実行される）で確認
- **検証完了後**: `verified` フィールドをレビュー日に更新

## バリデーション

```bash
npm run validate:profiles                    # 構造・URL品質チェック（build/deploy に自動接続済み）
npm run validate:profiles:update-baseline    # 既知警告のベースライン更新
npm run build                                # validate → feed生成 → vite build（全自動）
```
