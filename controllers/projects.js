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

module.exports = {
  create,
};
