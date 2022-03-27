'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pedidos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_cliente: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Clientes', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      date_time: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      total: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Pedidos')
  }
}
