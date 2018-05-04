import { validationResult } from 'express-validator/check';
import { respond } from '../helpers';

/**
 * @description function to trap validation errors
 *
 * @returns {null} sends errors to response 
 */
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
