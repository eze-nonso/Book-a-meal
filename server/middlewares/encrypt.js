import bcrypt from 'bcrypt';

export default (req, res, next) => {
  return bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      req.body.password = hash;
      next();
    })
    .catch((e) => {
      next(e);
    });
}
