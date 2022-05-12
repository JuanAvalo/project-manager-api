const db = require('../models');
const { sequelize } = require('../models');
const ResourceNotFound = require('../errors/resourceNotFound');

const list = async (page, limit) => {
  let offset = page * limit;
  const projects = await db.Project.findAndCountAll({
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

const eliminate = async (id) => {
  const isProjectDeleted = await db.Project.destroy({
    where: { id: id },
    cascade: true,
  });
  return isProjectDeleted;
};

module.exports = {
  create,
  edit,
  eliminate,
  list,
};
