import testSetup from '../testsetup';

const {
  requester, expect, prefix, resFormat,
} = testSetup;

/* return id of created user with summary of user

{
  id: 2,
  msg: 'success',
  user: {
    id: 2,
    email: 'newuser@co.com',
    username: 'somebody'
  }
}

*/

suite('Signup', function() {
  test('Expect error on invalid signup email', function() {
    return requester
      .post('/auth/signup')
      .type('form')
      .send({
        username: 'Helloworld',
        password: 'hello',
        confirmPassword: 'hello',
        email: 'Helloworld',
      })
      .then((res) => {
        resFormat(res, 422);
        expect(res.body).to.have.property('msg').equal('invalid email');
      });
  });

  test('Expect error on non-matching passwords', function() {
    return requester
      .post('/auth/signup')
      .type('form')
      .send({
        username: 'helloworld',
        email: 'hello@gmail.com',
        password: 'hello',
        confirmPassword: 'hello2',
      })
      .then(res => {
        resFormat(res, 400);
        expect(res.body).to.have.property('msg').equal('passwords do not match');
      });
  });

  test('Expect error on already existing username', function() {
    return requester
      .post('/auth/signup')
      .type('form')
      .send({
        username: 'helloworld',
        email: 'hello@gmail.com',
        password: 'hello2',
        confirmPassword: 'hello2',
      })
      .then(() => {
        return requester
          .post('/auth/signup')
          .type('form')
          .send({
            username: 'helloworld',
            email: 'hello@gmail.com',
            password: 'hello2',
            confirmPassword: 'hello2',
          })
          .then(res => {
            resFormat(res, 400);
            expect(res.body).to.have.property('msg').equal('username or email is in use');
          });
      });
  });
});
