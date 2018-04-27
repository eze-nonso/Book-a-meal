export default ({
  res, msg, status, ...extra
}) => {
  let resBody = {
    msg,
  };

  Object.keys(extra).forEach((key) => {
    resBody = { ...resBody, [key]: extra[key]
    }
  });

  res.status(status).send(resBody);
}
