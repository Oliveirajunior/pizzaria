'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Clientes',
      [
        {
          name: 'Manoel J.',
          phone: '555-111'
        },
        {
          name: 'Andressa B.',
          phone: '555-222'
        },
        {
          name: 'Henry C.',
          phone: '555-333'
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Clientes', null, {})
  }
}
