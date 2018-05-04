import { body, oneOf } from 'express-validator/check';

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
