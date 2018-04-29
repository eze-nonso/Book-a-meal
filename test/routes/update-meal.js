import testSetup from '../testsetup';

const {
  requester, expect, prefix, resFormat,
} = testSetup;

/* return id of updated resource with summary of same

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


suite('Update the information of a meal option', function () {
  test('Expect response to contain updated meal option together with other options', function () {
    const name = 'Jollof rice',
    description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
    image = './somemeal.jpg';

    const meal = {
      name, image, description,
    }
    return requester
      .post(`${prefix}/meals`)
      .type('form')
      .send(meal)
      .then(res => res.body.id)
      .then((id) => {
        const updateMeal = {
          name: 'Lorem',
          description: 'Lorem Ipsum',
          image: './lorem.png',
        };
        return requester
          .put(`${prefix}/meals/${id}`)
          .type('form')
          .send(updateMeal)
          .then((res) => {
            resFormat(res, 200);
            expect(res.body.msg).to.equal('success');
            expect(res.body.meal).to.include(updateMeal);
          });
      });

  });
});
