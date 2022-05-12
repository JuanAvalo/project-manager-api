const projecsRepository = require('../repositories/projects');
const usersRepository = require('../repositories/users');
const ResourceNotFound = require('../errors/resourceNotFound');
const Forbidden = require('../errors/forbidden');
const BadRequest = require('../errors/badRequest');

const list = async (page, limit, filters) => {
  if (page === undefined || limit === undefined) {
    page = 0;
    limit = 5;
  }
  const projects = await projecsRepository.list(page, limit, filters);
  if (!projects.rows.length) throw new ResourceNotFound('Projects Not Found');
  return projects;
};

const search = async (id) => {
  const project = await projecsRepository.search(id);
  if (!project) throw new ResourceNotFound('Project Not Found');
  return project;
};

const create = async (name, description, managers, assignees, status) => {
  if (!name || !description || !status) throw new BadRequest('Missing fields');
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
  list,
  search,
  create,
  edit,
  eliminate,
  addMember,
  removeMember,
};
