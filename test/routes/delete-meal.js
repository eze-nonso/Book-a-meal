import testSetup from '../testsetup';

const {
  requester, expect, prefix, resFormat,
} = testSetup;

/* return id of deleted resource with summary of deleted resource
{
  id: 2,
  msg: 'success',
  deleted: {
    name: 'blah',
    description: 'blah',
    image: 'blah',
  }
}

*/

suite('Remove a meal option', function() {
  test('Expect meal to be deleted with success message and summary of deleted resource', function () {
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
        return requester
          .delete(`${prefix}/meals/${id}`)
          .then((res) => {
            resFormat(res, 200);
            expect(res.body).to.have.property('deleted').that.is.an('object');
            expect(res.body.deleted).to.include(meal);
            expect(res.body.msg).to.equal('success');
          })
          .then(() => {
            // confirm resource no longer exists
            return requester
              .get(`${prefix}/meals`)
              .then((res) => {
                expect(res.body.meals).to.not.deep.nested.include(meal);
              });
          });
      });
  });
});
