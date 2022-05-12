const projecsRepository = require('../repositories/projects');
const ResourceNotFound = require('../errors/resourceNotFound');

const list = (page, limit) => {
  if (!page || !limit) {
    page = 0;
    limit = 5;
  }
  console.log(page, limit);
  return projecsRepository.list(page, limit);
};

const create = (name, description, users, status) => {
  return projecsRepository.create(name, description, users, status);
};

const edit = (id, name, description, users, status) => {
  return projecsRepository.edit(id, name, description, users, status);
};

const eliminate = async (id) => {
  const isProjectDeleted = await projecsRepository.eliminate(id);
  if (!isProjectDeleted) throw new ResourceNotFound('Project Not Found');
  return isProjectDeleted;
};

module.exports = {
  create,
  edit,
  eliminate,
  list,
};
