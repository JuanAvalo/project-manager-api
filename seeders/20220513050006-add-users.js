'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        id: 1,
        name: 'Luis',
        email: 'luis@test.com',
        password:
          '$2b$10$n/WnJ5jF1TjAEEDFsO0Ho.qc18HHaEbTEQT3/3FX87WCiuZm20gQy',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: 2,
        name: 'Martin',
        email: 'martin@test.com',
        password:
          '$2b$10$n/WnJ5jF1TjAEEDFsO0Ho.qc18HHaEbTEQT3/3FX87WCiuZm20gQy',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: 3,
        name: 'Juan',
        email: 'juan@test.com',
        password:
          '$2b$10$n/WnJ5jF1TjAEEDFsO0Ho.qc18HHaEbTEQT3/3FX87WCiuZm20gQy',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: 4,
        name: 'Jose',
        email: 'jose@test.com',
        password:
          '$2b$10$n/WnJ5jF1TjAEEDFsO0Ho.qc18HHaEbTEQT3/3FX87WCiuZm20gQy',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
