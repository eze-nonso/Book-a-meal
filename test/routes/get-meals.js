import testSetup from '../testsetup';

const {
  requester, expect, prefix, resFormat,
} = testSetup;

suite('Logged in user can get all the meals in the application', function () {
  test('Expect response to contain all the meals in the application', function () {
    request
    .get(`${prefix}meals`)
    .then((res) => ({
      resFormat(res, 200);
      expect(res.body).to.have.property('meals').that.is.an('array');
      expect(res.body.meals[0]).to.have.all.keys('id', 'description', 'image', 'name');
    });
  });
});
