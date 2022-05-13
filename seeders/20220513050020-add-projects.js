'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Projects', [
      {
        id: 1,
        name: 'Setup Amazon SDK',
        description: 'Authentication methods',
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: 2,
        name: 'Slides Endpoints',
        description: 'Validate inputs for slides requests',
        status: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: 3,
        name: 'Desing Main Web',
        description: 'Decide where to place the pictures',
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: 4,
        name: 'Shop items',
        description: 'Add the pagination option to the cart',
        status: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: 5,
        name: 'Public endpoint',
        description: 'Modify the access to different users',
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: 6,
        name: 'Documentation',
        description: 'Describe the user endpoints',
        status: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Projects', null, {});
  },
};
