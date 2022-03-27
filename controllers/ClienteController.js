const { Cliente } = require('../models')

module.exports = {
  async index(req, res) {
    try {
      const clientes = await Cliente.findAll({
        order: [['id', 'ASC']],
        attributes: ['id', 'name', 'phone']
      })
      return res.json(clientes)
    } catch (err) {
      console.error(err.massage)
    }
  },
  async select(req, res) {
    try {
      const { id } = req.params
      const cliente = await Cliente.findByPk(id, {
        attributes: ['id', 'name', 'phone']
      })
      return res.json(cliente)
    } catch (err) {
      console.error(err.message)
    }
  },
  async create(req, res) {
    try {
      const { name, phone } = req.body
      const cliente = await Cliente.create({ name, phone })
      return res.json(cliente)
    } catch (err) {
      console.error(err.message)
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params
      const { name, phone } = req.body
      const cliente = await Cliente.update({ name, phone }, { where: { id } })
      return res.json(cliente)
    } catch (err) {
      console.error(err.message)
    }
  },
  async delete(req, res) {
    try {
      const { id } = req.params
      const cliente = await Cliente.destroy({ where: { id } })
      res.json(cliente)
    } catch (err) {
      console.error(err.message)
    }
  }
}
