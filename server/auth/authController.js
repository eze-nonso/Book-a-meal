import jwt from 'jsonwebtoken';

/**
 * @description function to validate meal-update route
 * @param {object} req express request object
 * @returns {ar} array of middleware validation functions
 */
export default (req, res, next) => {
  const token = jwt.sign({
    user: req.body.username || req.body.email,
  }, process.env.SECRET, {
    expiresIn: 86400,
  });

  res.set('x-access-token', token);
  next();
};
