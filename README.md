# eslint-config-more

Strict shareable ESLint configuration that I personally use.

## Install

```bash
# yarn
yarn add eslint @morev/eslint-config-more --dev
# npm
npm install -D eslint @morev/eslint-config-more
# pnpm
pnpm add -D eslint @morev/eslint-config-more
```

## Usage

Create [ESLint configuration file](https://eslint.org/docs/user-guide/configuring/configuration-files#configuration-file-formats) and put the needed rules in `extends` section:

```js
// .eslintrc.js
module.exports = {
  root: true,
  extends: [
    '@morev/eslint-config-more/js/warn-autofixable',
    '@morev/eslint-config-more/vue2/warn-autofixable',
    '@morev/eslint-config-more/yaml/warn-autofixable',
    '@morev/eslint-config-more/json/warn-autofixable',
  ],
};
```

The rules are separated by language, now it is `js`, `yaml`, `json` and `vue2`. \
The rules don't intersect, so, if you working with `Vue2`, you need to include `vue2` and `js` configs both.

Each ruleset can be used in three ways, depending on how you feel about errors that can be fixed automatically:

* Default \
  This is the most strict option which remains all warning levels "as is" based on personal feelings about the severity of the error.
  ```js
  // .eslintrc.js
  module.exports = {
    root: true,
    extends: [
      '@morev/eslint-config-more/js',
      '@morev/eslint-config-more/vue2',
      '@morev/eslint-config-more/yaml',
      '@morev/eslint-config-more/json',
    ],
  };
  ```
* Warn autofixable \
  The recommended option to use. \
  All errors that can be fixed automatically are given a "warning" level.
  Thus, the developer can clearly see which codestyle is considered good, but at the same time not overloaded with an abundance of "red underlines". \
  It's also recommended to use the "formatOnSave" editor feature (below) along with this option.
  ```js
  // .eslintrc.js
  module.exports = {
    root: true,
    extends: [
      '@morev/eslint-config-more/js/warn-autofixable',
      '@morev/eslint-config-more/vue2/warn-autofixable',
      '@morev/eslint-config-more/yaml/warn-autofixable',
      '@morev/eslint-config-more/json/warn-autofixable',
    ],
  };
  ```
* Off autofixable \
  Use this option if you think that all errors that can be fixed automatically shouldn't be highlighted at all. \
  With this option, it's recommended to create another configuration file (for example, `.eslintrc-format.js`) and put the most strict config in it, and run linting on the pre-commit hook.
  ```js
  // .eslintrc.js
  module.exports = {
    root: true,
    extends: [
      '@morev/eslint-config-more/js/off-autofixable',
      '@morev/eslint-config-more/vue2/off-autofixable',
      '@morev/eslint-config-more/yaml/off-autofixable',
      '@morev/eslint-config-more/json/off-autofixable',
    ],
  };
  ```
  
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
