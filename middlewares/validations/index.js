const { validationResult } = require('express-validator');

const errorWrapperFunction = (req, res, next) => {
  const result = validationResult(req);
  const hasErrors = !result.isEmpty();
  if (hasErrors) {
    return res.status(422).json({ response: { message: result.array() } });
  }
  next();
};
module.exports = errorWrapperFunction;
