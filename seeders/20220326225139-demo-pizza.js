'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Pizzas',
      [
        {
          flavor: 'Calabresa',
          price: 60.0
        },
        {
          flavor: 'Portuguesa',
          price: 70.0
        },
        {
          flavor: 'Palmito',
          price: 80.0
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pizzas', null, {})
  }
}
