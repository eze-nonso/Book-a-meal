/* eslint-disable no-unused-expressions */

/**
 * @description export for reused tests
 * @param {function} expect chai expect
 * @param {object} res response object
 * @param {number} status response status code
 */
export default function (expect, res, status) {
  expect(res).to.have.status(status);
  // test content type
  expect(res).to.be.json;
  // test body format
  expect(res.body).own.property('msg').a('string');
  expect(res.body).to.be.an('object');
}
