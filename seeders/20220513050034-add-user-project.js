'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface
      .removeConstraint('user_projects', 'user_projects_ibfk_1', {})
      .then(() => {
        return queryInterface.removeConstraint(
          'user_projects',
          'user_projects_ibfk_2',
          {}
        );
      })
      .then(() => {
        return queryInterface
          .bulkInsert(
            'user_projects',
            [
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
            ],
            {}
          )
          .then(() => {
            return queryInterface.addConstraint('user_projects', {
              fields: ['userId'],
              type: 'FOREIGN KEY',
              name: 'user_projects_ibfk_1',
              references: {
                table: 'Users',
                field: 'id',
              },
              onDelete: 'CASCADE',
              onUpdate: 'CASCADE',
            });
          })
          .then(() => {
            return queryInterface.addConstraint('user_projects', {
              fields: ['projectId'],
              type: 'FOREIGN KEY',
              name: 'user_projects_ibfk_2',
              references: {
                table: 'Projects',
                field: 'id',
              },
              onDelete: 'CASCADE',
              onUpdate: 'CASCADE',
            });
          });
      });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Projects', null, {});
  },
};
