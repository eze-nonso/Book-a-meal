import testSetup from '../testSetup';

const {
  requester, expect, prefix, resFormat,
} = testSetup;

suite('Signin', function () {
  test('Signin should be successful', function() {
    return requester
      .post(`${prefix}/auth/signin`)
      .type('form')
      .send({
        username: 'vixen',
        email: 'vixen@gmail.com',
      })
      .then((res) => {
        resFormat(res, 201);
        expect(res.body).to.have.property('msg').equal('success');
        expect(res.headers).to.have.property('x-access-token');
      });
  });

  test('Expect signin to fail for invalid details', function() {
    return requester
      .post(`${prefix}/auth/signin`)
      .type('form')
      .send({
        username: 'user',
        password: 'pass',
      })
      .then((res) => {
        expect.fail('Expected an error response code on invalid signin');
      })
      .catch(e => e.response)
      .then((res) => {
        resFormat(res, 400);
        expect(res.headers).to.not.have.property('x-access-token');
      });
  });

  test('Expect signin to fail for incomplete parameters', function() {
    return requester
      .post(`${prefix}/auth/signin`)
      .type('form')
      .send({
        username: 'vixen',
      })
      .then((res) => {
        expect.fail('Expected error code on signin with incomplete parameters');
      })
      .catch((e) => {
        if (e.response) {
          return e.response;
        }
        throw e;
      })
      .then((res) => {
        resFormat(res, 422);
        expect(res.headers).to.not.have.property('x-access-token');
      });
  });

  test('Expect validation error for invalid input type', function() {
    return requester
      .post(`${prefix}/auth/signin`)
      .type('form')
      .send({
        username: {},
        password: [],
      })
      .then((res) => {
        expect.fail('Expected an error message on invalid data type');
      })
      .catch((e) => {
        if (e.response) {
          return e.response
        }
        throw e;
      })
      .then((res) => {
        resFormat(res, 422);
        expect(res.headers).to.not.have.property('x-access-token');
        expect(res.body).to.have.property('error');
      });
  });

  test('Expect successful login for valid details and type format', function () {
    return requester
      .post(`${prefix}/auth/signin`)
      .type('form')
      .send({
        username: 'vixen',
        password: 'helloVix',
      })
      .then((res) => {
        resFormat(res, 200);
        expect(res.headers).to.have.property('x-access-token');
        expect(res.body).to.have.property('msg').equal('success');
      });
  });

  test('Expect user to be able to login with password and either of username and email', function () {
    return requester
      .post(`${prefix}/auth/signin`)
      .type('form')
      .send({
        email: 'vixen@gmail.com',
        password: 'helloVix',
      })
      .then((res) => {
        resFormat(res, 200);
        expect(res.headers).to.have.property('x-access-token');
        expect(res.body).to.property('msg').that.is.equal('success');
      });
  });
});
