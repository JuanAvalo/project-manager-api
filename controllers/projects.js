const projectsService = require('../services/projects');

const list = async (page, limit) => {
  const projects = await projectsService.list(page, limit);
  return { message: 'List of projects', data: projects.rows };
};

const search = async (id) => {
  const project = await projectsService.search(id);
  return { message: 'Project Found', data: project };
};

const create = async (name, description, managers, assignees, status) => {
  const newProject = await projectsService.create(
    name,
    description,
    managers,
    assignees,
    status
  );
  return { message: 'Project created', data: newProject };
};

const edit = async (id, name, description, status) => {
  const updatedProject = await projectsService.edit(
    id,
    name,
    description,
    status
  );
  return { message: 'Project updated', data: { wasUpdated: updatedProject } };
};

const addMember = async (id, managers, assignees) => {
  const newMembers = await projectsService.addMember(id, managers, assignees);
  return {
    message: `Added members ${managers || ''} ${assignees || ''}`,
    data: { project: newMembers },
  };
};

const removeMember = async (id, memberId) => {
  const removed = await projectsService.removeMember(id, memberId);
  return { message: 'Members Removed', data: { wasRemoved: removed } };
};

const eliminate = async (id) => {
  const isProjectDeleted = await projectsService.eliminate(id);
  return { message: 'Project deleted', data: { wasDeleted: isProjectDeleted } };
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
