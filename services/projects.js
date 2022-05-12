const projecsRepository = require('../repositories/projects');
const usersRepository = require('../repositories/users');
const ResourceNotFound = require('../errors/resourceNotFound');
const Forbidden = require('../errors/forbidden');

const list = (page, limit) => {
  if (!page || !limit) {
    page = 0;
    limit = 5;
  }
  return projecsRepository.list(page, limit);
};

const create = async (name, description, managers, assignees, status) => {
  managers.forEach((manager) => {
    if (assignees.indexOf(manager) > -1)
      throw new Forbidden('Duplicated user role');
  });

  const idList = managers.concat(assignees);
  const foundUsers = await usersRepository.searchMany(idList);
  if (foundUsers.length === 0 || foundUsers.length < idList.length)
    throw new ResourceNotFound('Manager or Assignee Not Found');

  const newProject = await projecsRepository.create(
    name,
    description,
    managers,
    assignees,
    status
  );
  return newProject;
};

const edit = (id, name, description, status) => {
  return projecsRepository.edit(id, name, description, status);
};

const addMember = async (id, managers, assignees) => {
  if (managers && assignees) {
    managers.forEach((manager) => {
      if (assignees.indexOf(manager) > -1)
        throw new Forbidden('Duplicated user role');
    });
  }

  const idList = [...(managers || []), ...(assignees || [])];
  const foundUsers = await usersRepository.searchMany(idList);
  if (foundUsers.length === 0 || foundUsers.length < idList.length)
    throw new ResourceNotFound('Manager or Assignee Not Found');

  const newMembers = await projecsRepository.addMember(id, managers, assignees);
  return newMembers;
};

const removeMember = async (id, memberId) => {
  const wasRemoved = await projecsRepository.removeMember(id, memberId);
  if (!wasRemoved) throw new ResourceNotFound('Member Not Found');
  return wasRemoved;
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
  addMember,
  removeMember,
};
