import { validationResult } from 'express-validator/check';
import { respond } from '../helpers';

// function to set valid data to req.body
export default (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return respond({
      status: 422,
      error: errors.mapped(),
      msg: 'Validation Error',
      res,
    });
  }
  return next();
};
