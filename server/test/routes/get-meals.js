import chaiHttp from 'chai-http';
import { expect } from 'chai';

const request = chaiHttp.request(app);

suite('Logged in user can get all the meals in the application', function() {
  test('Expect response to contain all the meals in the application', function() {
    request
    .get('/meals')
    .then((res) => (
      expect(res).to.be.an('object');
      // content-type
      expect(res.body).to.be.json;
      expect(res.body).to.have.keys('meals');
      expect(res.body).to.have.property('meals').that.is.an('array');
    ));
  })
})
