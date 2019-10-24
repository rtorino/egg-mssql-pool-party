'use strict';

/**
 * egg-mssql-pool-party default config
 * @member Config#mssqlPoolParty
 * @property {String} SOME_KEY - some description
 */
exports.mssqlPoolParty = {
  default: {
    connectionPoolConfig: {
      connectTimeout: 5000,
      requestTimeout: 30000,
      options: {
        encrypt: true,
      },
    },
    retries: 2,
    reconnects: 1,
  },
  app: true,
  agent: false,

  // Single Database
  //   client: {
  //     dsns: [{
  //       user: 'user',
  //       password: 'password',
  //       server: 'server',
  //       database: 'database',
  //     }],
  //   },

  // Multi Databases
  //   clients: {
  //     db1: {
  //       dsns: [{
  //         user: 'user',
  //         password: 'password',
  //         server: 'server',
  //         database: 'database',
  //       }],
  //     },
  //     db2: {
  //       dsns: [{
  //         user: 'user',
  //         password: 'password',
  //         server: 'server',
  //         database: 'database',
  //       }],
  //     },
  //   },
};
