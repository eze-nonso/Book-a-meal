import testSetup from '../testsetup';

const {
  requester, expect, prefix, resFormat,
} = testSetup;

/* return resources with msg

{
  msg: 'success',
  orders: [
    {
      meal: {...},
      mealTime: 'morning',
    }, {
      meal: {...},
      mealTime: 'afternoon'
    }
  ]
}

*/

suite('Get all the orders', function () {
  test('Expect response body to contain array of meal orders made', function () {
    return requester
      .get(`${prefix}/orders`)
      .then((res) => {
        resFormat(res, 200);
        expect(res.body).to.have.property('orders').an('array');
        expect(res.body.msg).to.equal
      });

  });
});
