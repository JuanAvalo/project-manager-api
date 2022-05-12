class Forbidden extends Error {
  constructor(message = 'Forbidden', ...args) {
    super(message, ...args);
    this.type = 'custom';
    this.code = 403;
  }
}

module.exports = Forbidden;
