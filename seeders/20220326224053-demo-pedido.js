'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Pedidos',
      [
        {
          id_cliente: 2
        },
        {
          id_cliente: 3
        },
        {
          id_cliente: 1
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pedidos', null, {})
  }
}
