class ForbiBadRequest extends Error {
  constructor(message = 'Bad Request', ...args) {
    super(message, ...args);
    this.type = 'custom';
    this.code = 400;
  }
}

module.exports = ForbiBadRequest;
