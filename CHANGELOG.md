undefined

### [8.0.2](https://github.com/MorevM/eslint-config/compare/v8.0.1...v8.0.2) (2022-03-05)


### Bug fixes

* **base:** Drastically increase `no-secrets` tolerance ([8cb4766](https://github.com/MorevM/eslint-config/commit/8cb4766ee58e8a3ffd9c022323617f8788633d5a))undefined

### [8.0.1](https://github.com/MorevM/eslint-config/compare/v8.0.0...v8.0.1) (2022-02-27)


### Bug fixes

* Extension rules ([0ac6bb0](https://github.com/MorevM/eslint-config/commit/0ac6bb0a4cbc035c5385b055b62d928b7291cab1))undefined

## [8.0.0](https://github.com/MorevM/eslint-config/compare/v7.0.0...v8.0.0) (2022-02-26)


### ⚠ BREAKING CHANGES

* There was a many unused rules in `base`, `jest`, `json` and `vue` configurations.
All rules are covered, configurations become more strict

### Features

* Add mistakenly unused rules ([38145bb](https://github.com/MorevM/eslint-config/commit/38145bbe0684314bf7b62daf51b1420ee4991a8f))
* **base:** Add new option to `no-confusing-arrow` rule ([968a04b](https://github.com/MorevM/eslint-config/commit/968a04bfa1928c6f7b037697e5b8f47bb5699f99))
* **base:** Add new option to `no-shadow` rule ([6b83993](https://github.com/MorevM/eslint-config/commit/6b8399354ecc434c2f52a6b631b0cec37c08e292))


### Chores

* bump @release-it/conventional-changelog from 4.1.0 to 4.2.0 ([#25](https://github.com/MorevM/eslint-config/issues/25)) ([00405c2](https://github.com/MorevM/eslint-config/commit/00405c27afe11b2d8eb51647cc0eebed92649c23))
* bump @types/jest from 27.4.0 to 27.4.1 ([#24](https://github.com/MorevM/eslint-config/issues/24)) ([6848b5c](https://github.com/MorevM/eslint-config/commit/6848b5c4d5f984590eb962a7de04487a3ef3d077))
* bump @typescript-eslint/eslint-plugin from 5.12.0 to 5.12.1 ([#28](https://github.com/MorevM/eslint-config/issues/28)) ([090c745](https://github.com/MorevM/eslint-config/commit/090c745f28ad2c86853dfe9c1480553eb7fee694))
* bump @typescript-eslint/parser from 5.12.0 to 5.12.1 ([#26](https://github.com/MorevM/eslint-config/issues/26)) ([c78bec6](https://github.com/MorevM/eslint-config/commit/c78bec6aa873135182cd2927c6bf3a0b381bc968))
* bump eslint from 8.9.0 to 8.10.0 ([#31](https://github.com/MorevM/eslint-config/issues/31)) ([cc33be6](https://github.com/MorevM/eslint-config/commit/cc33be6bc86f1e1818ccff496ef64b73786efe93))
* bump eslint-plugin-vue from 8.4.1 to 8.5.0 ([#30](https://github.com/MorevM/eslint-config/issues/30)) ([c239cbc](https://github.com/MorevM/eslint-config/commit/c239cbc34a49edda7e9f06c7af6a6992bf60051d))
* bump release-it from 14.12.4 to 14.12.5 ([#29](https://github.com/MorevM/eslint-config/issues/29)) ([5e13a3e](https://github.com/MorevM/eslint-config/commit/5e13a3e467569a2261dcc07bc633c5de05873c2f))
* bump vue-eslint-parser from 8.2.0 to 8.3.0 ([#27](https://github.com/MorevM/eslint-config/issues/27)) ([78c6638](https://github.com/MorevM/eslint-config/commit/78c663861d29eb43d89f865dcdedf3cb63d8b344))


### Refactoring

* Better project structure ([d2e41ff](https://github.com/MorevM/eslint-config/commit/d2e41ff9c9097b7bcf2597994433f1e916520397))


### Tests

* Add test for unused and deprecated rules ([21fc9b5](https://github.com/MorevM/eslint-config/commit/21fc9b5ee0b9f24796ebc45db45885a911ef7828))


### Bug fixes

* **base:** Add `no-secrets` plugin ([fdae263](https://github.com/MorevM/eslint-config/commit/fdae26318fc655366cd471a5a5bea53d81829c23))
* **html:** Disable ESLint rules related to comments in `HTML` files ([6b19a59](https://github.com/MorevM/eslint-config/commit/6b19a59396de49dffdf4ca9505436251258f1e00))## [7.0.0](https://github.com/MorevM/eslint-config/compare/v6.0.2...v7.0.0) (2022-02-26)


### ⚠ BREAKING CHANGES

* It extends `common` config making it more strict

### Features

* Add `html` configuration ([f4f96fa](https://github.com/MorevM/eslint-config/commit/f4f96fa2f8be67aa33739467792fc19aaea86409))

### [6.0.2](https://github.com/MorevM/eslint-config/compare/v6.0.1...v6.0.2) (2022-02-19)


### Chores

* bump @babel/core from 7.17.2 to 7.17.5 ([#14](https://github.com/MorevM/eslint-config/issues/14)) ([9f82c0f](https://github.com/MorevM/eslint-config/commit/9f82c0ff47678c6b31ad230e9413c3ac233ef825))
* bump @typescript-eslint/eslint-plugin from 5.11.0 to 5.12.0 ([#15](https://github.com/MorevM/eslint-config/issues/15)) ([28d2512](https://github.com/MorevM/eslint-config/commit/28d2512c4f1ca3aaf487e7eb6f8ad8d0f5ec66c2))
* bump @typescript-eslint/parser from 5.11.0 to 5.12.0 ([#21](https://github.com/MorevM/eslint-config/issues/21)) ([db3ca71](https://github.com/MorevM/eslint-config/commit/db3ca71951a438f9550097f70f4dfea6be72faf0))
* bump eslint-plugin-jest from 26.1.0 to 26.1.1 ([#22](https://github.com/MorevM/eslint-config/issues/22)) ([cedc398](https://github.com/MorevM/eslint-config/commit/cedc398e805a84e0f0a2dcac22abb7bb5ce391d0))
* bump eslint-plugin-jsdoc from 37.9.0 to 37.9.4 ([#16](https://github.com/MorevM/eslint-config/issues/16)) ([e5f82ed](https://github.com/MorevM/eslint-config/commit/e5f82edec83ebbef6f77ab16e7ad8cefe500720e))
* bump eslint-plugin-jsonc from 2.1.0 to 2.2.1 ([#18](https://github.com/MorevM/eslint-config/issues/18)) ([6b4ded5](https://github.com/MorevM/eslint-config/commit/6b4ded56f2ed4ee15a0703923ec155f523d409ed))
* bump eslint-plugin-sonarjs from 0.11.0 to 0.12.0 ([#20](https://github.com/MorevM/eslint-config/issues/20)) ([b94fe32](https://github.com/MorevM/eslint-config/commit/b94fe3209f79d2143e81646d0275b39542cbc436))
* bump eslint-plugin-unicorn from 40.1.0 to 41.0.0 ([#19](https://github.com/MorevM/eslint-config/issues/19)) ([8a53941](https://github.com/MorevM/eslint-config/commit/8a53941b3c09a05fe87f36c6ee4fc51828a67a4d))
* bump eslint-plugin-yml from 0.13.0 to 0.14.0 ([#23](https://github.com/MorevM/eslint-config/issues/23)) ([ea334ca](https://github.com/MorevM/eslint-config/commit/ea334ca8ba9b462980c1786b01adc8df73dfc104))
* bump lint-staged from 12.3.3 to 12.3.4 ([#17](https://github.com/MorevM/eslint-config/issues/17)) ([6403fad](https://github.com/MorevM/eslint-config/commit/6403fadcb2f2aa69f6f420011d69633e38806668))


### Bug fixes

* Explicit number of lines in `sonars/no-identical-functions` ([f7b1622](https://github.com/MorevM/eslint-config/commit/f7b162214a569a1fbaf643247eabe368cc1cb282))

### [6.0.1](https://github.com/MorevM/eslint-config/compare/v6.0.0...v6.0.1) (2022-02-17)


### Bug fixes

* `typescript` config in preset `common` ([70ef0c9](https://github.com/MorevM/eslint-config/commit/70ef0c98c48907f5ae3629c1c5d56fa59756621d))
* Only `build` files in npm package ([7ce4acc](https://github.com/MorevM/eslint-config/commit/7ce4acce93d71a5f1582c2108115818bec82a499))

## [6.0.0](https://github.com/MorevM/eslint-config/compare/v5.2.0...v6.0.0) (2022-02-17)


### ⚠ BREAKING CHANGES

* Exclude `typescript` from `common` preset

### Bug fixes

* Exclude `typescript` from `common` preset ([dd10c08](https://github.com/MorevM/eslint-config/commit/dd10c0823dda6dbe489514dfcfa0024627319846))

## [5.2.0](https://github.com/MorevM/eslint-config/compare/v5.1.2...v5.2.0) (2022-02-15)


### Features

* **base:** Expicit file extensions for all except `ts` files ([5c47475](https://github.com/MorevM/eslint-config/commit/5c4747538c3b6b00dc8504d8c85b638e0dfbd6fe))


### Bug fixes

* Downgrade severity of `import/extensions` rule ([a37081a](https://github.com/MorevM/eslint-config/commit/a37081a0c1620f5da11e59dd4892385a008d2843))
* **typescript:** Smooth `naming-convention` rule ([1cff963](https://github.com/MorevM/eslint-config/commit/1cff9639f5683c7ae80ac463a398d2c0e00cb727))

### [5.1.2](https://github.com/MorevM/eslint-config/compare/v5.1.1...v5.1.2) (2022-02-14)


### Bug fixes

* **base:** Turn off `unicorn/prefer-at` rule ([d2dc345](https://github.com/MorevM/eslint-config/commit/d2dc345216d5c36b34f8eee9ca2c85cdfb3c6a71))

### [5.1.1](https://github.com/MorevM/eslint-config/compare/v5.1.0...v5.1.1) (2022-02-12)


### Bug fixes

* **typescript:** Allow to use `Function` type ([721bf90](https://github.com/MorevM/eslint-config/commit/721bf90676c7078c57f1c48f8199f1ad8cd781c9))

## [5.1.0](https://github.com/MorevM/eslint-config/compare/v5.0.1...v5.1.0) (2022-02-12)


### Features

* **jest:** Add new `jest/no-conditional-in-test` rule ([e60eb37](https://github.com/MorevM/eslint-config/commit/e60eb37736ddae62734784d17130f5dddd82838a))
* **jest:** Add new `jest/prefer-snapshot-hint` rule ([c193ce9](https://github.com/MorevM/eslint-config/commit/c193ce935e1c3593acc30ef32a1e2bf2c00a9f02))


### Bug fixes

* **jest:** Remove deprecated `no-if` in favor of using `no-conditional-in-test` ([6b6e618](https://github.com/MorevM/eslint-config/commit/6b6e618120dabc40e6c6bb68dc99a3f2f61abd53))
* **typescript:** Turn off all rules started with `no-unsafe` ([8eff032](https://github.com/MorevM/eslint-config/commit/8eff0321c70234a5036627a4ec78ba6edcb13beb))


### Chores

* bump @babel/core from 7.17.0 to 7.17.2 ([#10](https://github.com/MorevM/eslint-config/issues/10)) ([f8966c4](https://github.com/MorevM/eslint-config/commit/f8966c4118b2a75798f756d30d2f6ed039212500))
* bump @morev/commitlint-config from 0.0.7 to 0.1.0 ([#12](https://github.com/MorevM/eslint-config/issues/12)) ([ac18139](https://github.com/MorevM/eslint-config/commit/ac18139c5aff71ca9c5f446cc3375d0790013967))
* bump eslint from 8.8.0 to 8.9.0 ([#13](https://github.com/MorevM/eslint-config/issues/13)) ([dfc01f3](https://github.com/MorevM/eslint-config/commit/dfc01f3fad246eafe2fcc36941d451c8354f0dd4))
* bump eslint-plugin-jest from 26.0.0 to 26.1.0 ([#9](https://github.com/MorevM/eslint-config/issues/9)) ([91229dd](https://github.com/MorevM/eslint-config/commit/91229ddffab2ff4bd856b9c477b67abf39feac0d))
* bump eslint-plugin-jsdoc from 37.7.1 to 37.9.0 ([#8](https://github.com/MorevM/eslint-config/issues/8)) ([3f6dbd3](https://github.com/MorevM/eslint-config/commit/3f6dbd3157423e9752b64b75598f74009550c801))
* bump jest from 27.5.0 to 27.5.1 ([#11](https://github.com/MorevM/eslint-config/issues/11)) ([23f608f](https://github.com/MorevM/eslint-config/commit/23f608f363268e17394db145adbf70ffdb16a5ca))
* **release-it:** Upgrade `conventional-changelog` for better changelog ([a3bf69b](https://github.com/MorevM/eslint-config/commit/a3bf69b29b096c3331e84dc6d05b9a5c1341ef3e))


### Tests

* Fix false positives of new rule ([38eb64c](https://github.com/MorevM/eslint-config/commit/38eb64c3ff3cf2c5dcba6a76151494d03fb99789))

### [5.0.1](https://github.com/MorevM/eslint-config/compare/v5.0.0...v5.0.1) (2022-02-12)


### Bug Fixes

* **package-json:** Respect `types` field in `package.json` ([8f479d3](https://github.com/MorevM/eslint-config/commit/8f479d31d3be1c3e2815fdcd32d3452a2c8f9047))
* **typescript:** Soften the variables naming convention to `camelCase` (was `strictCamelCase`) ([fab1bda](https://github.com/MorevM/eslint-config/commit/fab1bda8e7c23acff6082e62d2bb0fc5325714fc))

## [5.0.0](https://github.com/MorevM/eslint-config/compare/v4.0.1...v5.0.0) (2022-02-11)


### ⚠ BREAKING CHANGES

* Change naming convention of `configurations` and `presets`

### Features

* Change naming convention of `configurations` and `presets` ([525c5bb](https://github.com/MorevM/eslint-config/commit/525c5bb878505eec06a3cf038220281b70446485))


### Bug Fixes

* Correct `.editorconfig` ([5ab7af2](https://github.com/MorevM/eslint-config/commit/5ab7af290e451e19db3f21e675fa6d79e3c2f1f7))
* Downgrade severity of multiple rules ([751253b](https://github.com/MorevM/eslint-config/commit/751253b6e3a3ca0bf4f56db79aad10842b6a6e5c))
* Upgade `README.md` ([87db1d5](https://github.com/MorevM/eslint-config/commit/87db1d5e94e3d13286f859c366b79451a0b41a53))

### [4.0.1](https://github.com/MorevM/eslint-config/compare/v4.0.0...v4.0.1) (2022-02-11)


### Bug Fixes

* Add `typescript` preset ([afb7068](https://github.com/MorevM/eslint-config/commit/afb70689ac34161c4413cd4b6001b840946b8714))

## [4.0.0](https://github.com/MorevM/eslint-config/compare/v3.1.7...v4.0.0) (2022-02-11)


### ⚠ BREAKING CHANGES

* Add `typescript` configuration

### Features

* Add `typescript` configuration ([9c37323](https://github.com/MorevM/eslint-config/commit/9c37323fa5028d7b18d7985f1fa2f36ad622255a))

## [3.1.7](https://github.com/MorevM/eslint-config/compare/v3.1.6...v3.1.7) (2022-02-05)

## [3.1.6](https://github.com/MorevM/eslint-config/compare/v3.1.5...v3.1.6) (2022-02-05)

## [3.1.5](https://github.com/MorevM/eslint-config/compare/v3.1.4...v3.1.5) (2022-02-03)


### Bug Fixes

* **base:** Downgrade severity of `unicorn/push-push` rule to `warn`, disable autofix for that rule ([fa0a902](https://github.com/MorevM/eslint-config/commit/fa0a90253504c6aa79c13e2e6fefdf01b857a098))

## [3.1.4](https://github.com/MorevM/eslint-config/compare/v3.1.3...v3.1.4) (2022-02-02)


### Bug Fixes

* Add `node 15` to package json `engines` field ([519a9e8](https://github.com/MorevM/eslint-config/commit/519a9e8469b238bf4b5cbe20e6703d0d9873a509))

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