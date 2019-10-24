# egg-mssql-pool-party

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-mssql-pool-party.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-mssql-pool-party
[travis-image]: https://img.shields.io/travis/eggjs/egg-mssql-pool-party.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-mssql-pool-party
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-mssql-pool-party.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-mssql-pool-party?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-mssql-pool-party.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-mssql-pool-party
[snyk-image]: https://snyk.io/test/npm/egg-mssql-pool-party/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-mssql-pool-party
[download-image]: https://img.shields.io/npm/dm/egg-mssql-pool-party.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-mssql-pool-party

<!--
Description here.
-->

## Install

```bash
$ npm i egg-mssql-pool-party --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.mssqlPoolParty = {
  enable: true,
  package: 'egg-mssql-pool-party',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.mssqlPoolParty = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
