class ResourceNotFound extends Error {
  constructor(message = 'Resource Not Found', ...args) {
    super(message, ...args);
    this.type = 'custom';
    this.code = 404;
  }
}

module.exports = ResourceNotFound;
