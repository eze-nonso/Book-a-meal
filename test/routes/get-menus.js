import {
  testSetup: {
    requester, expect, prefix, resFormat,
  },
} from '../../server/helpers';

/* return resources with msg

{
  msg: 'success',
  date: 'T...',
  menu: [
    {
      id: 2,
      name: 'blah',
      description: 'blah',
      image: 'blah',
    },
  ]
}
*/

suite('Get the menu for the day', function () {
  test('Expect response message to be JSON containing array of menus for the day', function () {
    requester
      .get(`${prefix}/menu`)
      then((res) => {
        resFormat(res, 200);
        expect(res.body).to.have.property('menu').that.is.an('array');
        expect(res.body.msg).equal('success');
        expect(res.body).to.have.property('date').that.is.a('string');
      });
  });
});
