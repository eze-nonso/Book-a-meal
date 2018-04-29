import testSetup from '../testsetup';

const {
  requester, expect, prefix, resFormat,
} = testSetup;

/* request a JSON array containing ids of menus to set

return success message with summary of meals that have been setup

{
  msg: 'success',
  menu: [
      {
        id: 2,...
      }, {
        id: ....
      }
  ]
}

*/

suite('Setup the menu for the day', function() {
  test('Expect response to contain success message with setup menu', function() {
    return requester
      .post(`${prefix}/menu`)
      .type('form')
      .send([
        1, 2,
      ])
      .then((res) => {
        resFormat(res, 201);
        expect(res.body).to.have.property('menu').that.is.an('array');
        expect(res.body.msg).to.equal('success');
        expect(res.body.menu[0]).to.deep.include({ id: 1 });
      });
  });
});
