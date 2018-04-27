import {
  testSetup: {
    requester, expect, V, resFormat,
  },
} from '../../server/helpers';

suite('Logged in user can get all the meals in the application', function() {
  test('Expect response to contain all the meals in the application', function() {
    request
    .get(`/api/${V}meals`)
    .then((res) => ({
      resFormat(res, 200);
      expect(res.body).to.include.keys('meals');
      expect(res.body).to.have.property('meals').that.is.an('array');
    });
  });
});
