import testSetup from '../testsetup';

const {
  requester, expect, V, resFormat,
} = testSetup;

/* return resources with msg

{
  msg: 'success',
  meals: [
    {
      id: 2,
      name: 'blah',
      description: 'blah',
      image: 'blah',
    },
  ]
}

*/

suite('Get all the meal options', function () {
  test('Expect response to contain all the meals in the application', function () {
    return requester
    .get(`/api/${V}/meals`)
    .then((res) => {
      resFormat(res, 200);
      expect(res.body).to.have.property('meals').that.is.an('array');
      expect(res.body.meals[0]).to.have.all.keys('id', 'description', 'image', 'name');
    });
  });
});
