class Unauthorized extends Error {
  constructor(message = 'Unauthorized', ...args) {
    super(message, ...args);
    this.type = 'custom';
    this.code = 401;
  }
}

module.exports = Unauthorized;
