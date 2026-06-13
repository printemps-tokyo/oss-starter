# Contributing

ありがとうございます。printemps-tokyo の OSS への貢献を歓迎します。

## 開発の流れ

1. リポジトリを fork / clone
2. `npm install`
3. ブランチを切る: `git switch -c feat/your-change`
4. 変更を加え、ローカルで検証:
   ```bash
   npm run lint
   npm run typecheck
   npm test
   ```
5. コミットして PR を作成

## コミットメッセージ

[Conventional Commits](https://www.conventionalcommits.org/) を推奨します
(`feat:`, `fix:`, `docs:`, `chore:`, `refactor:`, `test:`)。

## Pull Request

- 1 PR は 1 つの目的に絞る
- CI(lint / typecheck / test / build)が緑であること
- 挙動が変わる場合は README とテストを更新する

## バグ報告・要望

[Issues](../../issues) からテンプレートに沿って投稿してください。
