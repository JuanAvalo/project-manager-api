const projectsService = require('../services/projects');

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

module.exports = {
  create,
  edit,
};
