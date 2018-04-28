import {
  testSetup: {
    requester, expect, V, resFormat,
  },
} from '../../server/helpers';

suite('Add a meal option', function() {
  test('Expect response to contain success message with newly created meal', function() {
    const name = 'Jollof rice',
    description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.'
    image = './somemeal.jpg';

    const meal = {
      name, image, description,
    }
    requester
      .post(`/api/${V}/meals`)
      .type('form')
      .send(meal)
      .then((res) => {
        resFormat(res, 200);
        expect(res.body.msg).to.equal('success');
        expect(res.body.meals).to.be.an('array');
        expect(res.body.meals).to.deep.nested.include(meal);
      })
  });
});
