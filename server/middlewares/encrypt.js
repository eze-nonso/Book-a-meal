import bcrypt from 'bcrypt';

/**
 * @description function to encrypt password with bcrypt
 * @param {object} req express request object
 * @param {object} res express response object
 * @param {object} res express next function
 * @returns {promise} promise that sets hashed password to req.body.password
 */
export default (req, res, next) => (
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      req.body.password = hash;
      next();
    })
    .catch((e) => {
      next(e);
    })
);
