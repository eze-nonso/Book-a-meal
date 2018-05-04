/**
 * @description export for responding to requests
 * @param {object} res express response object
 * @param {string} msg response message
 * @param {array} extra any extra arguments
 */
export default ({
  res, msg, status, ...extra
}) => {
  let resBody = {
    msg,
  };

  Object.keys(extra).forEach((key) => {
    resBody = { ...resBody, [key]: extra[key] };
  });

  res.status(status).send(resBody);
};
