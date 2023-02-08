'use strict';

const mssql = require('rbt_mssql-pool-party');

let count = 0;

module.exports = app => {
  app.addSingleton('mssqlPoolParty', createClient);
};

async function createClient(config, app) {
  const connection = new mssql.ConnectionPoolParty(config);

  connection.on('error', err => {
    app.coreLogger.error('[egg-mssql-pool-party]', err);
  });

  app.beforeStart(async () => {
    // this attempts to connect each ConnectionPool before any requests are made.
    // returns a promise, so you can use it during an API's warmup phase before
    // starting any listeners
    await connection.warmup();

    const { recordset } = await connection
      .request()
      .query('select getdate() as [current_time];');

    const index = count++;

    app.coreLogger.info(`[egg-mssql-pool-party] instance[${index}] status OK, rds currentTime: ${recordset[0].current_time}`);
  });

  app.beforeClose(async () => {
    await connection.close();

    app.coreLogger.info('[egg-mssql-pool-party] DB connection pool closed.');
  });

  return { connection, mssql };
}

