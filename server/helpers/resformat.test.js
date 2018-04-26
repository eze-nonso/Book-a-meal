/* eslint-disable no-unused-expressions */

export default function (expect, res, status) {
  expect(res).to.have.status(status);
  // test content type
  expect(res).to.be.json;
  // test body format
  expect(res.body).own.property('msg').a('string');
  expect(res.body).to.be.an('object');
}
