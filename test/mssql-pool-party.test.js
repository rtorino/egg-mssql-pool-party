'use strict';

const mock = require('egg-mock');

describe('test/mssql-pool-party.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/mssql-pool-party-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, mssqlPoolParty')
      .expect(200);
  });
});
