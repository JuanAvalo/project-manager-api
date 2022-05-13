'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('user_projects', [
      {
        userId: 1,
        projectId: 1,
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        projectId: 1,
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 4,
        projectId: 1,
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        projectId: 2,
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        projectId: 2,
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        projectId: 5,
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        projectId: 3,
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        projectId: 4,
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 4,
        projectId: 1,
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Projects', null, {});
  },
};
