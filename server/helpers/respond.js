export default ({
  res, msg, status, ...extra
}) => {
  let resBody = {
    msg,
  };

  for (let obj of extra) {
    resBody = { ...resBody, obj
    }
  }

  res.status(status).send(resBody);
}
