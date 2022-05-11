const projecsRepository = require('../repositories/projects');

const create = (name, description, users, status) => {
  return projecsRepository.create(name, description, users, status);
};

const edit = (id, name, description, users, status) => {
  return projecsRepository.edit(id, name, description, users, status);
};

module.exports = {
  create,
  edit,
};
