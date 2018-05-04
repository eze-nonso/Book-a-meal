import { body, oneOf } from 'express-validator/check';

/**
 * @description express validation for login route
 *
 *
 * @returns {array} array of validation functions
 */
export default () => ([
  body('password')
    .exists(),

  oneOf([
    body('email')
      .isEmail(),
    body('username')
      .exists(),
  ], 'Must provide either username or email'),

]);
