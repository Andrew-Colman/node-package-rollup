# node-package-rollup

node package starter template
with sweet developer experience

```
npx gh-gen npr -n your-package-name
```

> **npr** is an alias for: `gh-gen andrew-colman/node-package-rollup --name your-package-name`

### options:

`--name` wil set your folder name and package.json name

`--berry` use yarn berry as package manager

<!--
todo - add options like:
- --cli
- --version '0.9.4'
-
 -->

## Features:

-   rollup (bundles yor source code)

-   typescript powered

-   jest (ts with rust compiler `swc`)

-   prettier/eslint (ts) & husky/lint-staged

-   nodemon/sucrase for faster development testing

-   automatic build/test/publish in CI/CD - (Github Actions)

-   automatic type declaration bundled `index.d.ts`

-   automatic code minify (with terser)

-   yarn/berry support

## Commands:

> package scripts

### Installing dependencies:

```sh
yarn
```

> or `npm i`

### production

`build`: bundles library/package (optimized with rollup)

### development

`dev` start development mode (watch for changes)

`dev:compiled` runs library once in compiled js ( will build quickly first / not bundled)

### tests

`test`: runs tests

`test:watch`: runs tests in watch mode

## Configuration

Bundling: [rollup.config.js](/rollup.config.js)

## CI/CD - Github Actions

### Build and test (check)

[build-and-test.yml](/.github/workflows/build-and-test.yml)

will verify your package on new pull requests:

-   if the tests passes `test`
-   if the library can be built successfully `build`

### Publish

[npm-publish.yml](/.github/workflows/npm-publish.yml)

automatic npm publish your package when creating a new repository release

requires: `${{secrets.npm_token}}`

-   create `npm_token` (npm auth token) from your repository settings
