'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbComments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      MaDocGia: {
        type: Sequelize.INTEGER,
        references:{
          model: 'tbdocgia',
          key: 'id'
        }
      },
      MaSach: {
        type: Sequelize.INTEGER,
        references:{
          model: 'tbsaches',
          key: 'id'
        }
      },
      NoiDung: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tbComments');
  }
};