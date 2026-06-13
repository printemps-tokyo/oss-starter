# oss-starter

> TypeScript CLI starter template for printemps-tokyo open source projects.

[![CI](https://github.com/printemps-tokyo/oss-starter/actions/workflows/ci.yml/badge.svg)](https://github.com/printemps-tokyo/oss-starter/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

Click "Use this template" to spin up a new repository and ship a small daily
tool in minutes.

## What's included

- TypeScript + ESM: built with `tsup`, exposes both a library (`src/index.ts`) and a CLI (`src/cli.ts`)
- Tests: `vitest`
- Lint / typecheck: `eslint` (flat config, typescript-eslint v8) + `tsc --noEmit`
- CI: lint / typecheck / test / build on Node 20 and 22 (`.github/workflows/ci.yml`)
- Release automation: pushing a `v*` tag creates a GitHub Release. Set an `NPM_TOKEN` secret to also publish to npm (`.github/workflows/release.yml`)
- Community files: issue / PR templates, CONTRIBUTING, CODE_OF_CONDUCT, SECURITY, MIT LICENSE

## Usage

```bash
npm install
npm run dev        # watch build
npm test           # run tests
npm run lint       # lint
npm run typecheck  # type check
npm run build      # emit to dist/

node dist/cli.js printemps   # => Hello, printemps!
```

## Starting a project from this template

1. On GitHub, click "Use this template" -> create a new repository
2. Update `name` / `description` / `bin` / repository URL in `package.json`
3. Replace this README with your tool's documentation
4. Implement `src/index.ts` / `src/cli.ts` and update `test/`
5. To release, run `git tag v0.1.0 && git push --tags`

## License

[MIT](./LICENSE) (c) printemps.tokyo
