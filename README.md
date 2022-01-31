# @morev/eslint-config

![Stability of "master" branch](https://img.shields.io/github/workflow/status/MorevM/eslint-config-more/Build/master)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![Last commit](https://img.shields.io/github/last-commit/morevm/eslint-config-more)
![Release version](https://img.shields.io/github/v/release/morevm/eslint-config-more?include_prereleases)
![GitHub Release Date](https://img.shields.io/github/release-date/morevm/eslint-config-more)
![Keywords](https://img.shields.io/github/package-json/keywords/morevm/eslint-config-more)

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

* `@morev/eslint-config/base` - base ESLint configuration
* `@morev/eslint-config/browser` - for projects that use DOM and other browser APIs
* `@morev/eslint-config/node` - for projects that use [Node.js](https://nodejs.org/)
* `@morev/eslint-config/jest` - for projects that use [Jest](https://jestjs.io/)
* For projects that use [VueJS](https://vuejs.org/)
  * `@morev/eslint-config/vue2` - rules for `Vue 2.*`
  * `@morev/eslint-config/vue3` - rules for `Vue 3.*`
* `@morev/eslint-config/json` - for projects that use [JSON files](https://en.wikipedia.org/wiki/JSON)
  * `@morev/eslint-config/jsonc` - superset of `json` for `.jsonc` and `.json5` files
  * `@morev/eslint-config/package-json` - superset of `json` for `package.json` file to keep consistent order of fields
* `@morev/eslint-config/yaml` - for projects that use [YAML files](https://en.wikipedia.org/wiki/YAML)

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

All presets comes with `/warn-autofixable` and `/off-autofixable` variants exactly the same as individual configurations.

* `common` \
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
        files: ['*.jsonc', '*.json5'],
        extends: ['@morev/eslint-config/jsonc'],
      },
      {
        files: ['package.json'],
        extends: ['@morev/eslint-config/package-json'],
      },
    ],
  };
  ```
  
* `assistive` \
  `Assistive` preset works the same as `common`, but includes only assistive files (`.json` and `.yaml`) overrides.
  Configurations inside:
  * `yaml`
  * `json`
  * `jsonc`
  * `package-json`
  
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
        files: ['*.jsonc', '*.json5'],
        extends: ['@morev/eslint-config/jsonc'],
      },
      {
        files: ['package.json'],
        extends: ['@morev/eslint-config/package-json'],
      },
    ],
  };
  ```
  
* `jest` \
  `jest` preset works the same as `common`, but includes only `jest` configuration. \
  Files glob pattern is the same as [`Jest testMatch` default option](https://jestjs.io/ru/docs/configuration#testmatch-arraystring)
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
  
* `vue2` \
  `vue2` preset includes `vue2` rules for Vue files.
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
  
* `vue3` \
  `vue3` preset includes `vue3` rules for Vue files.
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

## Autofixable mechanics

Let's take a look on [`no-trailing-spaces`](https://eslint.org/docs/rules/no-trailing-spaces) rule. \
In my opinion, this rule should definitely have a maximum level of severity (`error`) because if at some point these spaces will be removed, then the git diff becomes completely unreadable. 
It makes review harder or forces to have commits only for linting that feels like unpleasant behavior.

But, at the same time, do you need constant red underlines during development for a rule that can be easily fixed automatically? \
Thats why all configurations and presets have a three variants:

* `Default` \
  This is the most strict option which remains all warning levels "as is" based on personal feelings about the severity of the error. \
  Configurations and presets that use this option are available without any suffix, just name:
  ```bash
  # Configurations
  '@morev/eslint-config/base'
  '@morev/eslint-config/browser'
  '@morev/eslint-config/node'
  '@morev/eslint-config/jest'
  '@morev/eslint-config/vue2'
  '@morev/eslint-config/vue3'
  '@morev/eslint-config/yaml'
  '@morev/eslint-config/json'
  '@morev/eslint-config/jsonc'
  '@morev/eslint-config/package-json'
  
  # Presets
  '@morev/eslint-config/preset/common' # Also available as '@morev' - default export
  '@morev/eslint-config/preset/jest'
  '@morev/eslint-config/preset/assistive'
  '@morev/eslint-config/preset/vue2'
  '@morev/eslint-config/preset/vue3'
  ```
* `Warn autofixable` \
  The recommended option to use. \
  All errors that can be fixed automatically are given a "warning" level.
  Thus, the developer can clearly see which codestyle is considered good, but at the same time not overloaded with an abundance of "red underlines". \
  It's also recommended to use the "formatOnSave" editor feature (below) along with this option.
  
  Configurations and presets that use this option are available with suffix `/warn-autofixable`:
  
  ```bash
  # Configurations
  '@morev/eslint-config/base/warn-autofixable'
  '@morev/eslint-config/browser/warn-autofixable'
  '@morev/eslint-config/node/warn-autofixable'
  '@morev/eslint-config/jest/warn-autofixable'
  '@morev/eslint-config/vue2/warn-autofixable'
  '@morev/eslint-config/vue3/warn-autofixable'
  '@morev/eslint-config/yaml/warn-autofixable'
  '@morev/eslint-config/json/warn-autofixable'
  '@morev/eslint-config/jsonc/warn-autofixable'
  '@morev/eslint-config/package-json/warn-autofixable'
  
  # Presets
  '@morev/eslint-config/preset/common/warn-autofixable'
  '@morev/eslint-config/preset/jest/warn-autofixable'
  '@morev/eslint-config/preset/assistive/warn-autofixable'
  '@morev/eslint-config/preset/vue2/warn-autofixable'
  '@morev/eslint-config/preset/vue3/warn-autofixable'
  ```
  
* Off autofixable \
  Use this option if you think that all errors that can be fixed automatically shouldn't be highlighted at all. \
  With this option, it's recommended to create another configuration file (for example, `.eslintrc-format.js`) and put the most strict config in it, and run linting on the pre-commit hook.
  
  Configurations and presets that use this option are available with suffix `/off-autofixable`:
  
  ```bash
  # Configurations
  '@morev/eslint-config/base/off-autofixable'
  '@morev/eslint-config/browser/off-autofixable'
  '@morev/eslint-config/node/off-autofixable'
  '@morev/eslint-config/jest/off-autofixable'
  '@morev/eslint-config/vue2/off-autofixable'
  '@morev/eslint-config/vue3/off-autofixable'
  '@morev/eslint-config/yaml/off-autofixable'
  '@morev/eslint-config/json/off-autofixable'
  '@morev/eslint-config/jsonc/off-autofixable'
  '@morev/eslint-config/package-json/off-autofixable'
  
  # Presets
  '@morev/eslint-config/preset/common/off-autofixable'
  '@morev/eslint-config/preset/jest/off-autofixable'
  '@morev/eslint-config/preset/assistive/off-autofixable'
  '@morev/eslint-config/preset/vue2/off-autofixable'
  '@morev/eslint-config/preset/vue3/off-autofixable'
  ```
  
## Usage

Create [ESLint configuration file or write `eslintConfig` key in your `package.json`](https://eslint.org/docs/user-guide/configuring/configuration-files#configuration-file-formats)
and put the needed rules or presets in `extends / overrides` sections:

```js
module.exports = {
  root: true,
  extends: [
    '@morev/eslint-config/base/warn-autofixable',
  ],
  overrides: [
    {
      files: ['./client/**/*.js'],
      extends: ['@morev/eslint-config/browser/warn-autofixable',]
    },
    {
      files: ['./server/**/*.js'],
      extends: ['@morev/eslint-config/node/warn-autofixable',]
    },
    {
      files: ['./server/**/*.js'],
      extends: ['@morev/eslint-config/node/warn-autofixable',]
    },
    {
      files: ['*.yml', '*.yaml'],
      extends: ['@morev/eslint-config/yaml/warn-autofixable'],
    },
    {
      files: ['*.json'],
      extends: ['@morev/eslint-config/json/warn-autofixable'],
    },
    {
      files: ['package.json'],
      extends: ['@morev/eslint-config/package-json/warn-autofixable'],
    },
  ]
}
```

I personally use `@morev/eslint-config/presets/all/warn-autofixable` and usually it's enough.
  
## Configure VSCode to auto-format on save (like `prettier`):

Create `.vscode/settings.json`:
```json
{
  "prettier.enable": false,
  "eslint.validate": [
    "yaml",
    "json", 
    "jsonc",
    "json5"
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```
