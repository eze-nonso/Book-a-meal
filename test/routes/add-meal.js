import testSetup from '../testsetup';

const {
  requester, expect, V, resFormat,
} = testSetup;

/* return id of created resource with summary of resource

{
  id: 2,
  msg: 'success',
  meal: {
    name: 'blah',
    description: 'blah',
    image: 'blah',
  }
}

*/

suite('Add a meal option', function() {
  test('Expect response to contain success message with newly created meal', function() {
    const name = 'Jollof rice',
    description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
    image = './somemeal.jpg';

    const meal = {
      name, image, description,
    };

    return requester
      .post(`/api/${V}/meals`)
      .type('form')
      .send(meal)
      .then((res) => {
        resFormat(res, 201);
        // id of the updated resource
        expect(res.body).to.have.property('id').that.is.a('number');
        expect(res.body.msg).to.equal('success');
        expect(res.body.meal).to.be.an('object');
        expect(res.body.meal).to.include(meal);
      });
  });
});
