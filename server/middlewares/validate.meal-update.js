import { body, param } from 'express-validator/check';
import { sanitize } from 'express-validator/filter';

/**
 *
 * @description function to validate meal-update route
 *
 * @returns {array} array of middleware validation functions
 */
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
