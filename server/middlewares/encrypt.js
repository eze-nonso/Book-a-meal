import bcrypt from 'bcrypt';

export default (req, res, next) => {
  return bcrypt
    .hash(req.body.valid.password, 10)
    .then((hash) => {
      req.body.valid.password = hash;
      next();
    })
    .catch((e) => {
      next(e);
    });
}
