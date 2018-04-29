import testSetup from '../testsetup';

const {
  requester, expect, prefix, resFormat,
} = testSetup;

/*
post
{
  mealId: 2,
  mealTime: 1,
}

return resources with msg
status: 201,
{
  msg: 'success',
  id: 2,
  order: {
    id: 2,
    meal: {
      ....
    },
    mealTime: 'breakfast',
  },
}

*/

suite('Select the meal options from the menu', function () {
  test('Expect response body to contain placed order and order id', function () {
    const name = 'Lorem',
    description = 'Ipsum',
    image = 'Deut';
    const meal = {
      name, image, description,
    };
    return requester
      .post(`${prefix}/meals`)
      .type('form')
      .send(meal)
      .then(res => res.body.id)
      .then((id) => {
        return requester
          .post(`${prefix}/orders`)
          .type('form')
          .send({
            mealId: id, mealTime: 1,
          })
          .then((res) => {
            resFormat(res, 201);
            expect(res.body).to.have.property('id').that.is.a('number');
            expect(res.body.msg).to.equal('success');
            expect(res.body).to.have.property('order').an('object');
            expect(res.body.order).to.have.all.keys('mealTime', 'meal');
          });
      });

  });
});
