const projectsService = require('../services/projects');

const list = async (page, limit) => {
  const projects = await projectsService.list(page, limit);
  return { message: 'List of projects', data: projects.rows };
};

const create = async (name, description, users, status) => {
  const newProject = await projectsService.create(
    name,
    description,
    users,
    status
  );
  return { message: 'Project created', data: newProject };
};

const edit = async (id, name, description, users, status) => {
  const updatedProject = await projectsService.edit(
    id,
    name,
    description,
    users,
    status
  );
  return { message: 'Project updated', data: { wasUpdated: updatedProject } };
};

const eliminate = async (id) => {
  const isProjectDeleted = await projectsService.eliminate(id);
  return { message: 'Project deleted', data: { wasDeleted: isProjectDeleted } };
};

module.exports = {
  create,
  edit,
  eliminate,
  list,
};
