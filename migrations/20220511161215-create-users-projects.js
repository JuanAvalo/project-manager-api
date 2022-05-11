'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users_projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        references: { model: 'User', key: 'id' },
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      projectId: {
        references: { model: 'Project', key: 'id' },
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      roleId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users_projects');
  },
};
