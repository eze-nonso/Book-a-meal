import { respond } from '../helpers';

export default (req, res, next) => {
  req.check('email', 'Invalid email address').isEmail();

  req.check('pasword', 'Password is invalid').isLength({ min: 4 }).equals(req.body.confirmPassword);

  const errors = req.validationErrors();

  if (errors) {
    return respond({
      status: 422, error: errors, msg: 'Validation Error',
    });
  }

  next();
}
