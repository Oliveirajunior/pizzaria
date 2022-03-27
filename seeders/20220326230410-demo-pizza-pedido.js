'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'PizzaPedidos',
      [
        {
          id_pedido: 1,
          id_pizza: 2,
          amount: 1
        },
        {
          id_pedido: 2,
          id_pizza: 3,
          amount: 2
        },
        {
          id_pedido: 3,
          id_pizza: 1,
          amount: 1
        },
        {
          id_pedido: 3,
          id_pizza: 2,
          amount: 2
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('PizzaPedidos', null, {})
  }
}
