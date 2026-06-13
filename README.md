# oss-starter

> printemps-tokyo の OSS プロジェクト用 TypeScript CLI スターターテンプレート。

[![CI](https://github.com/printemps-tokyo/oss-starter/actions/workflows/ci.yml/badge.svg)](https://github.com/printemps-tokyo/oss-starter/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

「Use this template」で新しいリポジトリを作り、毎日の小さなツールを最短で公開するための雛形です。

## 同梱されているもの

- **TypeScript + ESM**: `tsup` でビルド、ライブラリ(`src/index.ts`)とCLI(`src/cli.ts`)の両対応
- **テスト**: `vitest`
- **Lint / 型チェック**: `eslint`(flat config, typescript-eslint v8) + `tsc --noEmit`
- **CI**: Node 20 / 22 で lint・typecheck・test・build (`.github/workflows/ci.yml`)
- **リリース自動化**: `v*` タグ push で GitHub Release を自動生成。`NPM_TOKEN` を設定すれば npm 公開も有効化 (`.github/workflows/release.yml`)
- **コミュニティファイル**: Issue / PR テンプレート、CONTRIBUTING、CODE_OF_CONDUCT、SECURITY、MIT LICENSE

## 使い方

```bash
npm install
npm run dev        # ウォッチビルド
npm test           # テスト
npm run lint       # Lint
npm run typecheck  # 型チェック
npm run build      # dist/ へ出力

node dist/cli.js printemps   # => Hello, printemps!
```

## このテンプレートから始めるとき

1. GitHub で **Use this template** -> 新規リポジトリ作成
2. `package.json` の `name` / `description` / `bin` / リポジトリURL を書き換える
3. このREADMEをツールの内容に置き換える
4. `src/index.ts` / `src/cli.ts` を実装、`test/` を更新
5. 公開時は `git tag v0.1.0 && git push --tags` で Release を発行

## ライセンス

[MIT](./LICENSE) (c) Yosuke Sakata / printemps.tokyo
