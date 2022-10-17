# Starter Kit for Vite, React, TypeScript, Tailwind and Node.js ESM

_Minimal, sensible defaults, fast._

Read [the blog post about this template](https://cpojer.net/posts/fastest-frontend-tooling-in-2022).

## Technologies

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind](https://tailwindcss.com/)
- [pnpm](https://pnpm.io/ja/) (_Optional_)

![screenshot of `App.tsx`](./screenshot.png)

## Setup

- Press the "Use this template" on the top of this repository's GitHub page.
- Run `pnpm install` (or `npm install` if you don't use `pnpm`).
- `pnpm dev` for development.
- Use `pnpm test` to run tests.
- `pnpm build` for production builds.

_Note: You can install `pnpm` via `homebrew` on macOS: `brew install pnpm`._

## Protips for the fastest Developer Experience

- Use [`npm-run-all`](https://github.com/mysticatea/npm-run-all) to parallelize local test runs.
- Prettier and eslint have `--cache` flags. Use them!
- Do not run prettier inside of `eslint`. It commonly takes 50% of the eslint runtime!
- Automatically sort imports when running prettier/saving the document via [`@trivago/prettier-plugin-sort-imports`](https://github.com/trivago/prettier-plugin-sort-imports).
- Use `swc` with `ts-node` for fast node scripts with [ESM](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/). See below ↓

## Run node scripts with ESM and TypeScript, fast.

Create a `script.ts` file, run `chmod x script.ts` and execute it via `./script.ts`.

```
#!/usr/bin/env node --no-warnings --experimental-specifier-resolution=node --loader ts-node/esm

console.log('Your code goes here.');
```

Use this to restart your scripts instantly when a file changes:

```
#!/usr/bin/env NODE_ENV=development node --watch --no-warnings --experimental-specifier-resolution=node --loader ts-node/esm

console.log('This processes instantly restarts when a file changes.');
```
