import testSetup from '../testsetup';

const {
  requester, expect, resFormat, prefix,
} = testSetup;

/*
post
{
  mealTime: 3,
}

return updated resource with msg

{
  msg: 'success',
  order: {
    id: 1,
    mealId: 1,
    mealTime: 'dinner',
  },
  id: 1,
}

*/

suite('Modify an order', function () {
  test('Expect response to contain summary of updated resource with success message', function () {
    // first place an order
    return requester
      .put(`${prefix}/orders`)
      .type('form')
      .send({
        mealId: 1,
        mealTime: 2,
      })
      .then(res => res.body.id)
      .then((id) => {
        return requester
          .post(`${prefix}/orders/${id}`)
          .type('form')
          .send({
            mealTime: 3,
          })
          .then((res) => {
            resFormat(res, 200);
            expect(res.body.order).have.property('mealTime', 'dinner');
          });
      });
  });
});
