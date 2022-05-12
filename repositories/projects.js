const db = require('../models');
const { sequelize } = require('../models');
const { Op } = require('sequelize');
const ResourceNotFound = require('../errors/resourceNotFound');

const list = async (page, limit, filters) => {
  let formattedFilter = {};
  if (filters.name) {
    formattedFilter.name = {
      [Op.like]: `%${filters.name}%`,
    };
  }

  let offset = page * limit;
  const projects = await db.Project.findAndCountAll({
    where: formattedFilter,
    attributes: ['id', 'name', 'description', 'createdAt'],
    include: [
      {
        model: db.User,
        attributes: ['id', 'name', 'email'],
        through: {
          attributes: ['roleId'],
        },
      },
    ],
    limit: limit,
    offset: offset,
  });

  return projects;
};

const search = async (id) => {
  const project = await db.Project.findByPk(id, {
    attributes: { exclude: ['deletedAt'] },
    include: [
      {
        model: db.User,
        attributes: ['id', 'name', 'email'],
        through: {
          attributes: ['roleId'],
        },
      },
    ],
  });
  return project;
};

const create = async (name, description, managers, assignees, status) => {
  const newProject = await db.Project.create({
    name,
    description,
    status,
  });

  await newProject.addUsers(managers, { through: { roleId: 1 } });
  await newProject.addUsers(assignees, { through: { roleId: 2 } });

  return newProject;
};

const edit = async (id, name, description, status) => {
  const updatedProject = await db.Project.update(
    { name: name, description: description, status: status },
    { where: { id: id } }
  );
  return updatedProject;
};

const addMember = async (id, managers, assignees) => {
  const project = await db.Project.findByPk(id);
  if (managers) await project.addUsers(managers, { through: { roleId: 1 } });
  if (assignees) await project.addUsers(assignees, { through: { roleId: 2 } });
  return project;
};

const removeMember = async (id, memberId) => {
  const project = await db.Project.findByPk(id);
  if (!project) throw new ResourceNotFound('Project Not Found');
  const wasRemoved = await project.removeUsers(memberId);
  return wasRemoved;
};

const eliminate = async (id) => {
  const isProjectDeleted = await db.Project.destroy({
    where: { id: id },
    cascade: true,
  });
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
