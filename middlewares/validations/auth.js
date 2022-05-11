const { check } = require('express-validator');
const errorWrapperFunction = require('.');

module.exports = {
  validateUserRegistration: [
    check('name').notEmpty().withMessage('User name is required'),
    check('email')
      .notEmpty()
      .withMessage('Email is required')
      .normalizeEmail()
      .isEmail()
      .withMessage('Email must be valid'),
    check('password')
      .notEmpty()
      .withMessage('Password is required')
      .bail()
      .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
      .withMessage(
        'Password requirements:(At least 8 characters long, 1 number, 1 uppercase, 1 lowercase)'
      ),
    errorWrapperFunction,
  ],
};
