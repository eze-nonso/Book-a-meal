import { body } from 'express-validator/check';
import { sanitize } from 'express-validator/filter';

/**
 * @description function to validate add-meal route
 *
 * @returns {array} array of middleware validation functions
 */
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
