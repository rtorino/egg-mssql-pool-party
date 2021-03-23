'use strict';

const mssql = require('mssql-pool-party');

let count = 0;

module.exports = app => {
  app.addSingleton('mssqlPoolParty', createClient);
};

async function createClient(config, app) {
  const connection = new mssql.ConnectionPoolParty(config);

  connection.on('error', err => {
    app.coreLogger.error('[egg-mssql-pool-party]', err);
  });

  // this attempts to connect each ConnectionPool before any requests are made.
  // returns a promise, so you can use it during an API's warmup phase before
  // starting any listeners
  await connection.warmup();

  app.beforeStart(async () => {
    const { recordset } = await connection
      .request()
      .query('select getdate() as [current_time];');

    const index = count++;

    app.coreLogger.info(`[egg-mssql-pool-party] instance[${index}] status OK, rds currentTime: ${recordset[0].current_time}`);
  });

  return { connection, mssql };
}

