import { body } from 'express-validator/check';
import { sanitize } from 'express-validator/filter';

export default () => ([
  sanitize('price').toInt(),
  
  body('price')
    .isNumeric()
    .withMessage('price must be a number'),

  body('name')
    .exists()
    .withMessage('name cannot be empty'),

  body('description')
    .optional()
    .isAscii(),

  body('image')
    .optional()
    .isAscii(),
]);
