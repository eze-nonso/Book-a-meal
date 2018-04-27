/* eslint-disable no-unused-expressions */

import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../server/app';
import { resFormat as responseFormat } from '../../server/helpers';

chai.use(chaiHttp);

const requester = chai.request(app);

const { expect } = chai;

const resFormat = responseFormat.bind(null, expect);

suite('Welcome endpoint', function () {
  test('Expect response to be of correct body format and content', function () {
    return requester
      .get('/api/v1')
      .then((res) => {
        resFormat(res, 200);
        expect(res.body.msg).to.equal('Welcome to our revolutionary booking api');
      })
      .catch((e) => {
        throw e;
      });
  });
});
