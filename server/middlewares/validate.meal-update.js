import { body, param } from 'express-validator/check';
import { sanitize } from 'express-validator/filter';

export default () => ([
  sanitize('price')
    .toInt(),

  body('price', 'price must be a number')
    .optional()
    .isNumeric(),

  body('description')
    .optional()
    .isAscii(),

  body('image')
    .optional()
    .isAscii(),

  sanitize('id')
    .toInt(),

  param('id', 'id should be an integer')
    .isInt(),
]);
