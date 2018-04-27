import { matchedData } from 'express-validator/filter';
import { validationResult } from 'express-validator/check';
import { respond } from '../helpers';

export default (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return respond({
      status: 422, error: errors.mapped(), msg: 'Validation Error',
      res,
    });
  }
  const user = matchedData(req);
  req.body.valid = user;
  next();
}
