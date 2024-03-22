# @morev/eslint-config

![Stability of "master" branch](https://img.shields.io/github/actions/workflow/status/MorevM/eslint-config/build.yaml?branch=master)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![Last commit](https://img.shields.io/github/last-commit/morevm/eslint-config)
![Release version](https://img.shields.io/github/v/release/morevm/eslint-config?include_prereleases)
![GitHub Release Date](https://img.shields.io/github/release-date/morevm/eslint-config)
![Keywords](https://img.shields.io/github/package-json/keywords/morevm/eslint-config)

Strict shareable ESLint configuration with reasonable defaults.

## Installation

### Using `yarn`

```bash
yarn add eslint @morev/eslint-config --dev
```

### Using `npm`

```bash
npm install -D eslint @morev/eslint-config
```

### Using `pnpm`

```bash
pnpm add -D eslint @morev/eslint-config
```

## Package contents

The package provides [many configurations](#configurations) and [pre-configured presets](#presets) described below.

The rules don't intersect, so if you are working with `Vue2`, you need to include `vue2` and `base` configurations both.

### Configurations

* `@morev/eslint-config/base` - base ESLint configuration with plugins related to `js` files
* `@morev/eslint-config/browser` - for projects that use DOM and other browser APIs
* `@morev/eslint-config/cypress` - for projects that use [Cypress](https://www.cypress.io/)
* `@morev/eslint-config/html` - for projects that use pure HTML files
* `@morev/eslint-config/jest` - for projects that use [Jest](https://jestjs.io/)
* `@morev/eslint-config/vitest` - for projects that use [Vitest](https://vitest.dev/)
* `@morev/eslint-config/json` - for projects that use [JSON files](https://en.wikipedia.org/wiki/JSON)
  * `@morev/eslint-config/jsonc` - superset of `json` for `.jsonc` and `.json5` files (also suitable for `[jt]sconfig.json` files)
  * `@morev/eslint-config/package-json` - superset of `json` for `package.json` file to keep consistent order of fields
* `@morev/eslint-config/markdown` - for projects that use [Markdown](https://en.wikipedia.org/wiki/Markdown)
* `@morev/eslint-config/node` - for projects that use [Node.js](https://nodejs.org/)
* `@morev/eslint-config/typescript` - for projects that use [Typescript](https://www.typescriptlang.org/)
* For projects that use [VueJS](https://vuejs.org/)
  * `@morev/eslint-config/vue2` - rules for `Vue 2.*`
  * `@morev/eslint-config/vue3` - rules for `Vue 3.*`
* `@morev/eslint-config/yaml` - for projects that use [YAML files](https://en.wikipedia.org/wiki/YAML)

> Don't be surprised that these files aren't in the root of repository - look at the `exports` sections of [`package.json`](./package.json).

### Presets

For proper work, performance and false positives prevention you need to apply configurations **only** to needed parts of your application with
[`overrides` ESLint setting](https://eslint.org/docs/user-guide/configuring/configuration-files#configuration-based-on-glob-patterns), like:

```js
module.exports = {
  root: true,
  extends: ['@morev/eslint-config/base'],
  overrides: [
    {
      files: ['*.json'],
      extends: ['@morev/eslint-config/json']
    },
    {
      files: ['*.yml', '*.yaml'],
      extends: ['@morev/eslint-config/yaml']
    },
    // ...more overrides
  ]
}
```

It can be annoying and verbose to write it all the time (although it has advantages, explicit is better than implicit).

Usually you want to lint all `json` and `yaml` files based on its extension, all `vue` files have `.vue` extension,
tests placed in `__tests__` folder or named with pattern `*.test.js`, etc. \
So, presets are just configurations with pre-defined `overrides`.

* <details>
    <summary><code>common</code></summary>

    Default preset which includes frequently used rules with default `overrides`. \
    It includes configurations:

    * `base`
    * `html`
    * `json`
    * `jsonc`
    * `package-json`
    * `markdown`
    * `typescript`
    * `yaml`

    <br />

    ```js
    module.exports = {
      root: true,
      extends: ['@morev/eslint-config/preset/common'], // or just '@morev' - it is default export
    };

    // It's the same as:
    module.exports = {
      root: true,
      extends: [
        '@morev/eslint-config/base',
      ],
      overrides: [
        {
          files: ['*.html*'],
          extends: ['@morev/eslint-config/html'],
        },
        {
          files: ['*.json', '*.json5', '*.jsonc'],
          extends: ['@morev/eslint-config/json'],
        },
        {
          files: ['*.jsonc', '*.json5', 'tsconfig.json', 'jsconfig.json'],
          extends: ['@morev/eslint-config/jsonc'],
        },
        {
          files: ['package.json'],
          extends: ['@morev/eslint-config/package-json'],
        },
        {
          files: ['*.md'],
          extends: ['@morev/eslint-config/markdown'],
        },
        {
          files: ['*.ts', '*.cts', '*.mts'],
          extends: ['@morev/eslint-config/typescript'],
        },
        {
          files: ['*.yml', '*.yaml'],
          extends: ['@morev/eslint-config/yaml'],
        },
      ],
    };
    ```

  </details>

* <details>
    <summary><code>assistive</code></summary>

    This preset includes only assistive files (`.json`, `.md` and `.yaml`) overrides. \
    Configurations inside:

    * `json`
    * `jsonc`
    * `package-json`
    * `markdown`
    * `yaml`

    <br />

    ```js
    module.exports = {
      root: true,
      extends: ['@morev/eslint-config/preset/assistive'],
    };

    // It's the same as:
    module.exports = {
      root: true,
      overrides: [
        {
          files: ['*.json', '*.json5', '*.jsonc'],
          extends: ['@morev/eslint-config/json'],
        },
        {
          files: ['*.jsonc', '*.json5', 'tsconfig.json', 'jsconfig.json'],
          extends: ['@morev/eslint-config/jsonc'],
        },
        {
          files: ['package.json'],
          extends: ['@morev/eslint-config/package-json'],
        },
        {
          files: ['*.md'],
          extends: ['@morev/eslint-config/markdown'],
        },
        {
          files: ['*.yml', '*.yaml'],
          extends: ['@morev/eslint-config/yaml'],
        },
      ],
    };
    ```

  </details>

* <details>
    <summary><code>jest</code></summary>

    This preset includes only `jest` configuration. \
    Files glob pattern is the same as [`Jest testMatch` default option](https://jestjs.io/ru/docs/configuration#testmatch-arraystring). \
    It ignores the `cypress` directory to prevent conflicts.

    <br />

    ```js
    module.exports = {
      root: true,
      extends: ['@morev/eslint-config/preset/jest'],
    };

    // It's the same as:
    module.exports = {
      root: true,
      overrides: [
        {
          files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
          ignorePatterns: ['**/cypress/**/*'],
          extends: ['@morev/eslint-config/jest'],
        },
      ],
    };
    ```

  </details>

* <details>
    <summary><code>vitest</code></summary>

    This preset includes only `vitest` configuration. \
    Files glob pattern is the same as [Vitest `include` default option](https://vitest.dev/config/#include). \
    It ignores the `cypress` directory to prevent conflicts.

    <br />

    ```js
    module.exports = {
      root: true,
      extends: ['@morev/eslint-config/preset/vitest'],
    };

    // It's the same as:
    module.exports = {
      root: true,
      overrides: [
        {
          files: ['**/*.{test,spec}.?(c|m)[jt]s?(x)'],
          ignorePatterns: ['**/cypress/**/*'],
          extends: ['@morev/eslint-config/vitest'],
        },
      ],
    };
    ```

  </details>

* <details>
    <summary><code>cypress</code></summary>

    This preset includes only `cypress` configuration.

    <br />

    ```js
    module.exports = {
      root: true,
      extends: ['@morev/eslint-config/preset/cypress'],
    };

    // It's the same as:
    module.exports = {
      root: true,
      overrides: [
        {
          files: ['**/cypress/integration/**/*.*'],
          ignorePatterns: ['*.hot-update.js'],
          extends: ['@morev/eslint-config/cypress'],
        },
      ],
    };
    ```

  </details>

* <details>
    <summary><code>vue2</code></summary>

    Preset includes `vue2` rules for Vue files.

    <br />

    ```js
    module.exports = {
      root: true,
      extends: ['@morev/eslint-config/preset/vue2'],
    };

    // It's the same as:
    module.exports = {
      root: true,
      overrides: [
        {
          files: ['*.vue'],
          extends: ['@morev/eslint-config/vue2'],
        },
      ],
    };
    ```

  </details>

* <details>
    <summary><code>vue3</code></summary>

    Includes `vue3` rules for Vue files.

    > Note: `vue2` and `vue3` are separated configurations not referring to each other.

    ```js
    module.exports = {
      root: true,
      extends: ['@morev/eslint-config/preset/vue3'],
    };

    // It's the same as:
    module.exports = {
      root: true,
      overrides: [
        {
          files: ['*.vue'],
          extends: ['@morev/eslint-config/vue3'],
        },
      ],
    };
    ```

  </details>

* <details>
   <summary><code>typescript</code></summary>

   Includes `typescript` rules for TS files.

   <br />

    ```js
    module.exports = {
      root: true,
      extends: ['@morev/eslint-config/preset/typescript'],
    };

    // It's the same as:
    module.exports = {
      root: true,
      overrides: [
        {
          files: ['*.ts', '*.cts', '*.mts'],
          extends: ['@morev/eslint-config/typescript'],
        },
      ],
    };
    ```

  </details>

* <details>
    <summary><code>html</code></summary>

    Includes `html` rules for HTML files.

    <br />

    ```js
    module.exports = {
      root: true,
      extends: ['@morev/eslint-config/preset/html'],
    };

    // It's the same as:
    module.exports = {
      root: true,
      overrides: [
        {
          files: ['*.html*'],
          extends: ['@morev/eslint-config/html'],
        },
      ],
    };
    ```

  </details>

## Autofixable mechanics

All rules that can be (safely) fixed automatically given a `warning` severity level.

<details>
  <summary>Show an explanation of this decision</summary>

  ---

  Let's take a look on [`no-trailing-spaces`](https://eslint.org/docs/rules/no-trailing-spaces) rule. \
  In my opinion, this rule should definitely have a maximum level of severity (`error`) because if at some point these spaces will be removed,
  then the git diff becomes completely unreadable.
  It makes review harder or forces to have commits only for linting that feels like unpleasant behavior.

  But, at the same time, do you need constant red underlines during development for a rule that can be easily fixed automatically? \
  I believe not.

  But at the same time, errors are still highlighted, but not as "loudly". \
  Thus, the every developer can clearly see which codestyle is considered good,
  but at the same time not overloaded with an abundance of "red underlines".

  ---

</details>

It's also recommended to use ["formatOnSave" editor feature described below](#configure-vscode-to-auto-format-on-save-like-prettier)
along with this configuration.

> Keep in mind that many autofixable rules are actually "partially autofixable",
> meaning running the command `eslint --fix` will not reduce the number of warnings to zero in most cases.
>
> Also keep in mind that some rules marked as `autofixable` in the `ESLint` / `ESLint plugin` documentation
> will not be fixed when run with the `--fix` flag. \
> For example, the [eqeqeq](https://eslint.org/docs/rules/eqeqeq) rule can be fixed automatically,
> but this is dangerous because it can change the application logic. \
> Such rules marked with `!` sign in the source.

## Usage

Create [ESLint configuration file](https://eslint.org/docs/user-guide/configuring/configuration-files#configuration-file-formats)
or write `eslintConfig` key in your `package.json`, and put the needed rules or presets in `extends / overrides` sections:

```js
module.exports = {
  root: true,
  extends: [
    '@morev/eslint-config/base',
  ],
  overrides: [
    {
      files: ['./client/**/*.js'],
      extends: ['@morev/eslint-config/browser']
    },
    {
      files: ['*.html'],
      extends: ['@morev/eslint-config/html'],
    },
    {
      files: ['*.json'],
      extends: ['@morev/eslint-config/json'],
    },
    {
      files: ['*.jsonc', '*.json5', 'tsconfig.json', 'jsconfig.json'],
      extends: ['@morev/eslint-config/jsonc'],
    },
    {
      files: ['package.json'],
      extends: ['@morev/eslint-config/package-json'],
    },
    {
      files: ['*.md'],
      extends: ['@morev/eslint-config/markdown'],
    },
    {
      files: ['./server/**/*.js'],
      extends: ['@morev/eslint-config/node']
    },
    {
      files: ['*.ts'],
      extends: ['@morev/eslint-config/typescript'],
      parserOptions: {
        project: './tsconfig.json',
      }
    },
    {
      files: ['*.yml', '*.yaml'],
      extends: ['@morev/eslint-config/yaml'],
    },
  ]
}
```

## Configure VSCode to auto-format on save (like `prettier`):

Create `.vscode/settings.json`:

```json
{
  "prettier.enable": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "json",
    "html",
    "vue",
    "markdown",
    "yaml"
  ]
}
```
