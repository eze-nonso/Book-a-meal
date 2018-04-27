import { body } from 'express-validator/check';;


export default () => ([
  body('email')
  .isEmail()
  .withMessage('Not an email address')
  .trim()
  .normalizeEmail(),

  body('password')
  .isLength({ min: 6, })
  .custom((password, { req, loc, path }) => {
    if (password !== req.body.confirmPassword) {
      throw Error('Passwords don\'t match');
    }
    return password;
  }),

  body('username').exists(),
]);
