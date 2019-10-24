'use strict';

const mssql = require('./lib/mssql');

module.exports = app => {
  if (app.config.mssqlPoolParty.app) mssql(app);
};
