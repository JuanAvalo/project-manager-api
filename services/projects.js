const projecsRepository = require('../repositories/projects');

const create = (name, description, users, status) => {
  return projecsRepository.create(name, description, users, status);
};

module.exports = {
  create,
};
