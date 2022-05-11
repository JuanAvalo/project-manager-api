const db = require('../models');
const { sequelize } = require('../models');

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

module.exports = {
  create,
};
