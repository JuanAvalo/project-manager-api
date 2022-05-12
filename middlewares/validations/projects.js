const { check } = require('express-validator');
const errorWrapperFunction = require('.');

module.exports = {
  create: [
    check('name').notEmpty().withMessage('Project name is required'),
    check('description')
      .notEmpty()
      .withMessage('Project description is required'),
    check('status')
      .notEmpty()
      .isNumeric()
      .withMessage('Project status is required (number)'),
    check('managers')
      .notEmpty()
      .isArray()
      .withMessage('Project managers are required (Array)'),
    check('assignees')
      .notEmpty()
      .isArray()
      .withMessage('Project assignees are required (Array)'),
    errorWrapperFunction,
  ],
  edit: [
    check('name').optional().notEmpty().withMessage('Project name is required'),
    check('description')
      .optional()
      .notEmpty()
      .withMessage('Project description is required'),
    check('status')
      .optional()
      .notEmpty()
      .isNumeric()
      .withMessage('Project status is required (number)'),
    errorWrapperFunction,
  ],
  addMembers: [
    check('managers')
      .optional()
      .notEmpty()
      .isArray()
      .withMessage('Project managers are required (Array)'),
    check('assignees')
      .optional()
      .notEmpty()
      .isArray()
      .withMessage('Project assignees are required (Array)'),
    errorWrapperFunction,
  ],
  removeMembers: [
    check('members')
      .notEmpty()
      .isArray()
      .withMessage('Members to delete are mandatory (Array)'),
    errorWrapperFunction,
  ],
};
