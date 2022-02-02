## [3.1.3](https://github.com/MorevM/eslint-config/compare/v3.1.2...v3.1.3) (2022-02-02)


### Bug Fixes

* **comments:** Disable autofix for rule `eslint-comments/no-unused-disable` ([ffcbfc7](https://github.com/MorevM/eslint-config/commit/ffcbfc772f5d12927758f879d566bc73c60906fb))

## [3.1.2](https://github.com/MorevM/eslint-config/compare/v3.1.1...v3.1.2) (2022-02-02)


### Bug Fixes

* **base:** Turn off rule `unicorn/no-nested-ternary` ([fafd820](https://github.com/MorevM/eslint-config/commit/fafd8208529f830daeb2bd00820aa1ec8597b735))
* **comments:** Disable autofix for rule `eslint-comments/no-unused-disable` ([899af24](https://github.com/MorevM/eslint-config/commit/899af2409130e34c2716e3c8c4e5b0cc78fb0f62))
* **vue:** Disable `vue/preder-template` (blocking `vue-template-babel-compiler`) ([0e5ced0](https://github.com/MorevM/eslint-config/commit/0e5ced06ef524dcce160445e9c87cffc0394ddf8))
* **vue:** Turn off `no-undef-properties` due lack of Vuex support ([275f98f](https://github.com/MorevM/eslint-config/commit/275f98fd916b03f7f1cbc38ea360c311d1673b1c))
* **yaml:** Disable `yml/plain-scalar` for date-like strings ([3d2fcfc](https://github.com/MorevM/eslint-config/commit/3d2fcfcf6a8dc8e3f0b67f93474f3c4cd0a2cbae))
* **yaml:** Disable `yml/plain-scalar` rule for keys starts with `/` ([6aaa4f2](https://github.com/MorevM/eslint-config/commit/6aaa4f2563bb74d43b0c815050cadfa811ebceca))
* **yaml:** Disable `yml/plain-scalar` rule for string which can be interpeted as numbers with `_` ([7c9d85b](https://github.com/MorevM/eslint-config/commit/7c9d85b226980ad9169f01218c2f5bb9965cc1e6))
* **yaml:** Increase limit for `max-len` rule and downgrade severity to `warn` for yaml files ([0f98c16](https://github.com/MorevM/eslint-config/commit/0f98c16149dc469521f9b63b565495321d5b477a))

## [3.1.1](https://github.com/MorevM/eslint-config/compare/v3.1.0...v3.1.1) (2022-01-31)


### Bug Fixes

* **base:** Allow variables which starts with `_` be unused ([ffd01db](https://github.com/MorevM/eslint-config/commit/ffd01db2c32cd072073d6cd9bd92d0a6e6413b0d))

# [3.1.0](https://github.com/MorevM/eslint-config/compare/v3.0.0...v3.1.0) (2022-01-31)


### Bug Fixes

* **base:** `avoidQuotes` option in `object-shorthand` rule should be `false` ([1af2f49](https://github.com/MorevM/eslint-config/commit/1af2f493b81e7dc8d85ef492c52c755db1f55a7d))
* **base:** Add `pathGroups` option to `import/order` rule ([6d18a8c](https://github.com/MorevM/eslint-config/commit/6d18a8cbb2d230b0a9259defaf6fb4a2bf717bd6))
* **base:** Rule `import/no-unassigned-import` turned off ([d76ca31](https://github.com/MorevM/eslint-config/commit/d76ca31759d9eb8d41f3dee5f8c8f1d478866fe8))
* **base:** Rule `jsdoc/require-description-complete-sentence` turned off ([26c7d1a](https://github.com/MorevM/eslint-config/commit/26c7d1a0dd0c04cb0bde0199859fd6dae0b758e9))
* **base:** Rule `unicorn/prefer-string-replace-all` turned off for a while ([aed36c3](https://github.com/MorevM/eslint-config/commit/aed36c324e412d373146f6838da949b15b682f12))
* **node:** Reverse rule `node/file-extension-in-import` ([1b41b4e](https://github.com/MorevM/eslint-config/commit/1b41b4e1cb59a16799b81352aa56e2dc0ceea071))


### Features

* **vue:** Add babel plugin to transform JSX syntax ([4a07eaa](https://github.com/MorevM/eslint-config/commit/4a07eaa0bb95b680d54ff79433a96d662fce2ec9))

# [3.0.0](https://github.com/MorevM/eslint-config/compare/v2.1.0...v3.0.0) (2022-01-31)


### Code Refactoring

* Change `all` preset name to `common` excluding `vue` configuration from it ([8e01cd3](https://github.com/MorevM/eslint-config/commit/8e01cd39f8c46061abeba8e09ec8b52fb92e851f))


### Features

* **package-json:** Add all fields from current NPM release ([60f1b15](https://github.com/MorevM/eslint-config/commit/60f1b15e1845688ca1478907468bf0371ddd44d7))
* **vue:** Review `vue2` rules and implement `vue3` rules ([b6074ff](https://github.com/MorevM/eslint-config/commit/b6074ff0783c773d46e8706befe1ff1f604072fb))


### BREAKING CHANGES

* Preset `all` no longer exists

# [2.1.0](https://github.com/MorevM/eslint-config/compare/v2.0.0...v2.1.0) (2022-01-30)


### Bug Fixes

* **base:** Downgrade severity 'unicorn/no-unused-properties' to warn ([5b3e4aa](https://github.com/MorevM/eslint-config/commit/5b3e4aa5e2dbc6fc73804090ced0505cbec343b7))
* **node:** Turn off rules under category `no-unsupported-features` ([28407c0](https://github.com/MorevM/eslint-config/commit/28407c06107ce7e553de7be1dd93077314e0f2a9))


### Features

* **preset/all:** Add `vue2` config to preset `all` ([4f435ed](https://github.com/MorevM/eslint-config/commit/4f435ed53e645b7bdd55c8e1f5cf394ddde1a54e))

# [2.0.0](https://github.com/MorevM/eslint-config/compare/v1.1.1...v2.0.0) (2022-01-30)


### Bug Fixes

* **base:** Downgrade `prefer-destructuring` severity to `warn` ([8f9a9ee](https://github.com/MorevM/eslint-config/commit/8f9a9ee9712379d78243210c4ae6412da72cd663))
* **node:** Force `.json` to be in `import` statements ([e09b8b3](https://github.com/MorevM/eslint-config/commit/e09b8b35bc4286152b3b151e72198a84a7d04c1c))
* Update `README.md` ([d0e069a](https://github.com/MorevM/eslint-config/commit/d0e069acb5c3b0744e4412b5f91c82f31a707843))


### Features

* Add `/preset/all` in `exports` to make things consistent ([8be5b7f](https://github.com/MorevM/eslint-config/commit/8be5b7f373ca8c6857235932cb1002abef2b05f5))
* **base:** Add rules from `eslint-plugin-eslint-comments` ([02028dd](https://github.com/MorevM/eslint-config/commit/02028ddf74e6b73c50a1bf894a4f35a8887442cb))
* **base:** Add rules from `eslint-plugin-import` ([4e70092](https://github.com/MorevM/eslint-config/commit/4e70092c9426c422f156bdbc93af9a00cc6087de))
* **base:** Add rules from `eslint-plugin-jsdoc` ([ccb4622](https://github.com/MorevM/eslint-config/commit/ccb4622bb281479206e321f96c3bb18837149bd3))


### BREAKING CHANGES

* **base:** Configuration `base` and preset `all` becomes more strict due newly added plugins

## [1.1.1](https://github.com/MorevM/eslint-config/compare/v1.1.0...v1.1.1) (2022-01-29)


### Bug Fixes

* Correct build path ([94428e4](https://github.com/MorevM/eslint-config/commit/94428e4c0e90dba5e6bfefe853904b376ff23e26))

# [1.1.0](https://github.com/MorevM/eslint-config/compare/v1.0.0...v1.1.0) (2022-01-29)


### Bug Fixes

* Configurations path on `build` step ([e6fef9a](https://github.com/MorevM/eslint-config/commit/e6fef9a0a6b079174b393ed4f34e6d28c0e787bc))
* **node:** Add `node` configs in `build` step ([8e3091c](https://github.com/MorevM/eslint-config/commit/8e3091ce4fd126a8f67a9b81d1f40bbb80496cf4))
* Wrong URIs after package renaming ([f8a0cc2](https://github.com/MorevM/eslint-config/commit/f8a0cc2e1949ff0fdb1346252017befb18d3350e))


### Features

* Add `presets` of rules with predefined `overrides` ([0b959ed](https://github.com/MorevM/eslint-config/commit/0b959ed99271490d60beda00a4436b321545483a))
* Move browser-related rules to separate config ([d531b56](https://github.com/MorevM/eslint-config/commit/d531b56cb2bf274bb473efb3c9c016b02a8fc667))

# [1.0.0](https://github.com/MorevM/eslint-config-more/compare/v0.2.4...v1.0.0) (2022-01-29)


### Bug Fixes

* Add `build` directory to `package.json > files` ([e3494d3](https://github.com/MorevM/eslint-config-more/commit/e3494d3f0d1074f1f2e8ce8b0711dacb2c677adb))
* Add forgotten main file in `exports` section ([38a8f69](https://github.com/MorevM/eslint-config-more/commit/38a8f693343dc949911372bdcde85e4dc3743d08))
* **js:** Downgrade severity of `prefer-const` rule and disable autofix ([016a795](https://github.com/MorevM/eslint-config-more/commit/016a795955be6bb42da71357addbc5c34d1248f0))
* **json:** Disable inheritance from base config for `sort-keys` rule ([a2926eb](https://github.com/MorevM/eslint-config-more/commit/a2926ebc927d703c1fd68fea88a58148ce22e936))
* Rename `languages` to `configurations` ([366c225](https://github.com/MorevM/eslint-config-more/commit/366c2257f74d69c46013648b69395b1243a840d1))
* Simplify `JSON` glob patterns ([2de8fa7](https://github.com/MorevM/eslint-config-more/commit/2de8fa76c7f39fe8ef05032989bec73da3634e73))


### Features

* Add `build` step ([0ff6d86](https://github.com/MorevM/eslint-config-more/commit/0ff6d86204a8680e43a420e2bc2f7aaf89365e5f))
* **node:** Add `node` configuration ([0d26a44](https://github.com/MorevM/eslint-config-more/commit/0d26a448dfc43ed1f27ee583322defa6a916b65e))


### BREAKING CHANGES

* Changed `overrides` mechanics and `exports` field in `package.json`

## [0.2.4](https://github.com/MorevM/eslint-config-more/compare/v0.2.3...v0.2.4) (2022-01-25)


### Bug Fixes

* **js:** Disable autofix and rule `implicit-arrow-linebreak` at all ([07c6104](https://github.com/MorevM/eslint-config-more/commit/07c6104e51064cd8f45516ba472364661489699c))
* **unicorn:** Disable autofix for `prefer-string-slice` rule ([e5f667e](https://github.com/MorevM/eslint-config-more/commit/e5f667e52417d672b24585c130f2f60f6974057d))
* **vue2:** Downgrade severity of `vue/comment-directive` to `warn` ([48c9139](https://github.com/MorevM/eslint-config-more/commit/48c9139f0d80ffc6b50dfd6d9ea42e10d2431a8a))

## [0.2.3](https://github.com/MorevM/eslint-config-more/compare/v0.2.2...v0.2.3) (2022-01-25)


### Bug Fixes

* Add `jest` configs in `package.json` `exports` field ([21a68bf](https://github.com/MorevM/eslint-config-more/commit/21a68bfe490a2543518c86588cb9ba634ff58780))

## [0.2.2](https://github.com/MorevM/eslint-config-more/compare/v0.2.1...v0.2.2) (2022-01-25)

## [0.2.1](https://github.com/MorevM/eslint-config-more/compare/v0.2.0...v0.2.1) (2022-01-25)


### Bug Fixes

* Explicit ignore `node_modules` in `.eslintignore` ([8ed08af](https://github.com/MorevM/eslint-config-more/commit/8ed08af4207282145e7ff5f691ec57a86549aa5f))

# [0.2.0](https://github.com/MorevM/eslint-config-more/compare/v0.1.1...v0.2.0) (2022-01-25)


### Bug Fixes

* Prevent duplication of array values in `plugins` section ([68e46c4](https://github.com/MorevM/eslint-config-more/commit/68e46c4cec795f827e145ae3df43edd1c43cef5b))


### Features

* **jest:** Add `jest` configuration ([f1f694d](https://github.com/MorevM/eslint-config-more/commit/f1f694ddf45fb11f6870b72ad3558367523f158a))

## [0.1.1](https://github.com/MorevM/eslint-config-more/compare/v0.1.0...v0.1.1) (2022-01-25)


### Bug Fixes

* Increased `max` property `2 -> 3` in `max-statements-per-line` ([f43cde4](https://github.com/MorevM/eslint-config-more/commit/f43cde449bd91eca87a8dde634584b5908fa07ad))
* **sonarjs:** Downgrade severity of `sonarjs/no-duplicate-string` to `warn` ([8497699](https://github.com/MorevM/eslint-config-more/commit/8497699878f8d9e68c89e1dde4d12857a0c61fa0))

# [0.1.0](https://github.com/MorevM/eslint-config-more/compare/v0.0.1...v0.1.0) (2022-01-24)


### Bug Fixes

* Typo in README.md ([a9811c9](https://github.com/MorevM/eslint-config-more/commit/a9811c93a913c9a57d8be7f5f466815cf4a6d8c1))
* **vue2:** Typo in extension rules ([e4429fc](https://github.com/MorevM/eslint-config-more/commit/e4429fc20c23479ddfa52a0df7bc2ee83dbf4815))


### Features

* Add `no-autofix` plugin for rules with (partially) incorrect behavior ([8131560](https://github.com/MorevM/eslint-config-more/commit/8131560f4197f4981e04b0ee9d64736fdc25ebe0))
* **vue2:** Add `@babel/eslint-parser` as part of this repo ([913037b](https://github.com/MorevM/eslint-config-more/commit/913037bf95e56bfb5045e3b1ba85051a75302600))

## 0.0.1 (2022-01-24)

Initial commit
