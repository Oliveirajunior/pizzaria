const { Pizza } = require('../models')

module.exports = {
  async index(req, res) {
    try {
      const pizzas = await Pizza.findAll({
        order: [['id', 'ASC']],
        attributes: ['id', 'flavor', 'price']
      })
      return res.json(pizzas)
    } catch (err) {
      console.error(err.massage)
    }
  },
  async select(req, res) {
    try {
      const { id } = req.params
      const pizza = await Pizza.findByPk(id, {
        attributes: ['id', 'flavor', 'price']
      })
      return res.json(pizza)
    } catch (err) {
      console.error(err.massage)
    }
  },
  async create(req, res) {
    try {
      const { flavor, price } = req.body
      const pizza = await Pizza.create({ flavor, price })
      return res.json(pizza)
    } catch (err) {
      console.error(err.massage)
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params
      const { flavor, price } = req.body
      const pizza = await Pizza.update({ flavor, price }, { where: { id } })
      return res.json(pizza)
    } catch (err) {
      console.error(err.massage)
    }
  },
  async delete(req, res) {
    try {
      const { id } = req.params
      const pizza = await Pizza.destroy({ where: { id } })
      return res.json(pizza)
    } catch (err) {
      console.error(err.massage)
    }
  }
}
