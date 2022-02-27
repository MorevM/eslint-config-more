# @morev/eslint-config

![Stability of "master" branch](https://img.shields.io/github/workflow/status/MorevM/eslint-config/Build/master)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![Last commit](https://img.shields.io/github/last-commit/morevm/eslint-config)
![Release version](https://img.shields.io/github/v/release/morevm/eslint-config?include_prereleases)
![GitHub Release Date](https://img.shields.io/github/release-date/morevm/eslint-config)
![Keywords](https://img.shields.io/github/package-json/keywords/morevm/eslint-config)

Strict shareable ESLint configuration that I personally use.

## Install

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

The package provides many configurations, each can be used in three variations depending on how you feel about errors that can be fixed automatically ([details about autofixable mechanics](#autofixable-mechanics)).

The rules don't intersect, so if you are working with `Vue2`, you need to include `vue2` and `base` configurations both.

### Configurations

* `@morev/eslint-config/base` - base ESLint configuration with plugins related to `js` files
* `@morev/eslint-config/browser` - for projects that use DOM and other browser APIs
* `@morev/eslint-config/node` - for projects that use [Node.js](https://nodejs.org/)
* `@morev/eslint-config/typescript` - for projects that use [Typescript](https://www.typescriptlang.org/)
* `@morev/eslint-config/jest` - for projects that use [Jest](https://jestjs.io/)
* For projects that use [VueJS](https://vuejs.org/)
  * `@morev/eslint-config/vue2` - rules for `Vue 2.*`
  * `@morev/eslint-config/vue3` - rules for `Vue 3.*`
* `@morev/eslint-config/json` - for projects that use [JSON files](https://en.wikipedia.org/wiki/JSON)
  * `@morev/eslint-config/jsonc` - superset of `json` for `.jsonc` and `.json5` files (also suitable for `[jt]sconfig.json` files)
  * `@morev/eslint-config/package-json` - superset of `json` for `package.json` file to keep consistent order of fields
* `@morev/eslint-config/yaml` - for projects that use [YAML files](https://en.wikipedia.org/wiki/YAML)
* `@morev/eslint-config/html` - for projects that use pure HTML files

> Don't be surprised that these files aren't in the root of repository - look at the `exports` sections of [`package.json`](./package.json).

### Presets

For proper work, performance and false positives prevention you need to apply configurations **only** to needed parts of your application with [`overrides` ESLint setting](https://eslint.org/docs/user-guide/configuring/configuration-files#configuration-based-on-glob-patterns), like:
```js
module.exports = {
  root: true,
  extends: ['@morev/eslint-config/base'],
  overrides: [
    {
      files: ['*.yml', '*.yaml'],
      extends: ['@morev/eslint-config/yaml']
    },
    {
      files: ['*.json'],
      extends: ['@morev/eslint-config/json']
    },
    // ...more overrides
  ]
}
```

It can be annoying and verbose to write it all the time (although it has advantages, explicit is better than implicit).

Usually you want to lint all `json` and `yaml` files based on its extension, all `vue` files have `.vue` extension, tests placed in `__tests__` folder or named with pattern `*.test.js`, etc. \
So, presets just configurations with pre-defined `overrides`.

All presets comes with `/strict` and `/quiet` variants exactly the same as individual configurations.

* <details>
    <summary><code>common</code></summary>

    Default preset which includes frequently used rules with default `overrides`. \
    It includes configurations:

    * `base`
    * `node`
    * `browser`
    * `jest`
    * `yaml`
    * `json`
    * `jsonc`
    * `package-json`
    * `html`

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
        '@morev/base',
        '@morev/node',
        '@morev/browser',
      ],
      overrides: [
        {
          files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
          extends: ['@morev/eslint-config/jest'],
        },
        {
          files: ['*.yml', '*.yaml'],
          extends: ['@morev/eslint-config/yaml'],
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
          files: ['*.html*'],
          extends: ['@morev/eslint-config/html'],
        },
      ],
    };
    ```
  </details>

* <details>
    <summary><code>assistive</code></summary>

    This preset includes only assistive files (`.json` and `.yaml`) overrides. \
    Configurations inside:

    * `yaml`
    * `json`
    * `jsonc`
    * `package-json`

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
          files: ['*.yml', '*.yaml'],
          extends: ['@morev/eslint-config/yaml'],
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
      ],
    };
    ```
  </details>

* <details>
    <summary><code>jest</code></summary>

    This preset includes only `jest` configuration. \
    Files glob pattern is the same as [`Jest testMatch` default option](https://jestjs.io/ru/docs/configuration#testmatch-arraystring)

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
          extends: ['@morev/eslint-config/jest'],
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
          files: ['*.ts'],
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
          files: ['*.html'],
          extends: ['@morev/eslint-config/html'],
        },
      ],
    };
    ```

  </details>

## Autofixable mechanics

Let's take a look on [`no-trailing-spaces`](https://eslint.org/docs/rules/no-trailing-spaces) rule. \
In my opinion, this rule should definitely have a maximum level of severity (`error`) because if at some point these spaces will be removed, then the git diff becomes completely unreadable.
It makes review harder or forces to have commits only for linting that feels like unpleasant behavior.

But, at the same time, do you need constant red underlines during development for a rule that can be easily fixed automatically? \
Thats why all configurations and presets have a three variants:

* `Default` \
  The recommended option to use. \
  All errors that can be fixed automatically are given a "warning" level.
  Thus, the every developer can clearly see which codestyle is considered good, but at the same time not overloaded with an abundance of "red underlines". \
  It's also recommended to use the "formatOnSave" editor feature (below) along with this option.

  > Keep in mind that many autofixable rules are actually "partially autofixable",
  > meaning running the command `eslint --fix` will not reduce the number of warnings to zero in most cases.

  > Also keep in mind that some rules marked as `autofixable` in the `ESLint` / `ESLint plugin` documentation will not be fixed when run with the `--fix` flag.
  > For example, the [eqeqeq](https://eslint.org/docs/rules/eqeqeq) rule can be fixed automatically, but this is dangerous because it can change the application logic. \
  > Such rules marked with `!` sign in source.

  Configurations and presets that use this option are available without any suffix, just name.

  <details>
    <summary>Show configurations / presets names</summary>

    ```bash
    # Configurations
    '@morev/eslint-config/base'
    '@morev/eslint-config/browser'
    '@morev/eslint-config/node'
    '@morev/eslint-config/jest'
    '@morev/eslint-config/typescript'
    '@morev/eslint-config/vue2'
    '@morev/eslint-config/vue3'
    '@morev/eslint-config/yaml'
    '@morev/eslint-config/json'
    '@morev/eslint-config/jsonc'
    '@morev/eslint-config/package-json'
    '@morev/eslint-config/html'

    # Presets
    '@morev/eslint-config/preset/common' # Also available as '@morev' - default export
    '@morev/eslint-config/preset/jest'
    '@morev/eslint-config/preset/typescript'
    '@morev/eslint-config/preset/assistive'
    '@morev/eslint-config/preset/vue2'
    '@morev/eslint-config/preset/vue3'
    '@morev/eslint-config/preset/html'
    ```
  </details>

* `Strict` \
  This is the most strict option which remains all warning levels "as is" based on personal feelings about the severity of the error. \
  Configurations and presets that use this option are available with suffix `/strict`.

  <details>
    <summary>Show configurations / presets names</summary>

    ```bash
    # Configurations
    '@morev/eslint-config/base/strict'
    '@morev/eslint-config/browser/strict'
    '@morev/eslint-config/node/strict'
    '@morev/eslint-config/jest/strict'
    '@morev/eslint-config/typescript/strict'
    '@morev/eslint-config/vue2/strict'
    '@morev/eslint-config/vue3/strict'
    '@morev/eslint-config/yaml/strict'
    '@morev/eslint-config/json/strict'
    '@morev/eslint-config/jsonc/strict'
    '@morev/eslint-config/package-json/strict'
    '@morev/eslint-config/html/strict'

    # Presets
    '@morev/eslint-config/preset/common/strict'
    '@morev/eslint-config/preset/jest/strict'
    '@morev/eslint-config/preset/typescript/strict'
    '@morev/eslint-config/preset/assistive/strict'
    '@morev/eslint-config/preset/vue2/strict'
    '@morev/eslint-config/preset/vue3/strict'
    '@morev/eslint-config/preset/html/strict'
    ```
  </details>

* `Quiet` \
  Use this option if you think that all errors that can be fixed automatically shouldn't be highlighted at all. \
  With this option, it's recommended to create another configuration file (for example, `.eslintrc-format.js`) and
  put the most strict config in it, and run linting with `--fix` and `--config .eslintrc-format.js` flags on the pre-commit hook.

  > Keep in mind that many autofixable rules are actually "partially autofixable",
  > meaning running the command `eslint --fix` will not reduce the number of warnings to zero in most cases.

  Configurations and presets that use this option are available with suffix `/quiet`:

  <details>
    <summary>Show configurations / presets names</summary>

    ```bash
    # Configurations
    '@morev/eslint-config/base/quiet'
    '@morev/eslint-config/browser/quiet'
    '@morev/eslint-config/node/quiet'
    '@morev/eslint-config/jest/quiet'
    '@morev/eslint-config/typescript/quiet'
    '@morev/eslint-config/vue2/quiet'
    '@morev/eslint-config/vue3/quiet'
    '@morev/eslint-config/yaml/quiet'
    '@morev/eslint-config/json/quiet'
    '@morev/eslint-config/jsonc/quiet'
    '@morev/eslint-config/package-json/quiet'
    '@morev/eslint-config/html/quiet'

    # Presets
    '@morev/eslint-config/preset/common/quiet'
    '@morev/eslint-config/preset/jest/quiet'
    '@morev/eslint-config/preset/typescript/quiet'
    '@morev/eslint-config/preset/assistive/quiet'
    '@morev/eslint-config/preset/vue2/quiet'
    '@morev/eslint-config/preset/vue3/quiet'
    '@morev/eslint-config/preset/html/quiet'
    ```
  </details>

## Usage

Create [ESLint configuration file or write `eslintConfig` key in your `package.json`](https://eslint.org/docs/user-guide/configuring/configuration-files#configuration-file-formats)
and put the needed rules or presets in `extends / overrides` sections:

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
      files: ['*.html'],
      extends: ['@morev/eslint-config/html'],
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
		"source.fixAll.eslint": true,
	},
	"eslint.format.enable": true,
	"eslint.validate": [
		"json",
		"jsonc",
		"json5",
		"yaml",
		"vue",
	]
}
```
