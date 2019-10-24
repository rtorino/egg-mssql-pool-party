
'use strict';

const mssql = require('./lib/mssql');

module.exports = agent => {
  if (agent.config.mssqlPoolParty.agent) mssql(agent);
};
