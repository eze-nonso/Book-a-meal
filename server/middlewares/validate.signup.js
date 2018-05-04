import { body } from 'express-validator/check';

/**
 * @description function to validate signup route
 *
 * @returns {array} array of middleware validation functions
 */
export default () => ([
  body('email')
    .isEmail()
    .withMessage('Not an email address')
    .trim()
    .normalizeEmail(),

  body('password')
    .isLength({ min: 6 })
    .custom((password, { req /* , loc, path, */ }) => {
      if (password !== req.body.confirmPassword) {
        throw Error('Passwords don\'t match');
      }
      return password;
    }),

  body('username').exists(),
]);
