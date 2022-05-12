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
          attributes: ['userId', 'roleId'],
        },
      },
    ],
    limit: limit,
    offset: offset,
  });

  return projects;
};

const create = async (name, description, users, status) => {
  const trans = await sequelize.transaction();

  try {
    const newProject = await db.Project.create(
      {
        name,
        description,
        status,
      },
      { transaction: trans }
    );

    //Add newProject id to users array of objects
    users.forEach((userObject) => {
      userObject.projectId = newProject.id;
    });

    await db.users_projects.bulkCreate(users, { transaction: trans });
    await trans.commit();

    return newProject;
  } catch (err) {
    await trans.rollback();
    throw new Error(err);
  }
};

const edit = async (id, name, description, users, status) => {
  const trans = await sequelize.transaction();

  try {
    const updatedProject = await db.Project.update(
      { name: name, description: description, status: status },
      { where: { id: id } },
      { transaction: trans }
    );

    if (!updatedProject) throw new ResourceNotFound('Project Not Found');

    await db.users_projects.destroy(
      { where: { projectId: id } },
      { transaction: trans }
    );

    //Add newProject id to users array of objects
    users.forEach((userObject) => {
      userObject.projectId = id;
    });
    await db.users_projects.bulkCreate(users, { transaction: trans });
    await trans.commit();
    return updatedProject;
  } catch (err) {
    await trans.rollback();
    throw new Error(err);
  }
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
