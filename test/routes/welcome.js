import testSetup from '../testsetup';

const {
  requester, expect, V, resFormat,
} = testSetup;

suite('Welcome endpoint', function () {
  test('Expect response to be of correct body format and content', function () {
    return requester
      .get(`/api/${V}`)
      .then((res) => {
        resFormat(res, 200);
        expect(res.body.msg).to.equal('Welcome to our revolutionary booking api');
      })
      .catch((e) => {
        throw e;
      });
  });
});
