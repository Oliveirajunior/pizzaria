const { Pedido } = require('../models')

module.exports = {
  async index(req, res) {
    try {
      const pedidos = await Pedido.findAll({
        order: [['id', 'ASC']],
        attributes: ['id', 'id_cliente', 'total'],
        include: { association: 'cliente', attributes: ['name'] }
      })
      return res.json(pedidos)
    } catch (err) {
      console.error(err.massage)
    }
  },
  async select(req, res) {
    try {
      const { id } = req.params
      const pedido = await Pedido.findByPk(id, {
        attributes: ['id', 'id_cliente', 'total'],
        include: { association: 'cliente', attributes: ['name'] }
      })
      return res.json(pedido)
    } catch (err) {
      console.error(err.massage)
    }
  },
  async create(req, res) {
    try {
      const { id_cliente, total } = req.body
      const pedido = await Pedido.create({ id_cliente, total })
      return res.json(pedido)
    } catch (err) {
      console.error(err.massage)
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params
      const { id_cliente, total } = req.body
      const pedido = await Pedido.update(
        { id_cliente, total },
        { where: { id } }
      )
      return res.json(pedido)
    } catch (err) {
      console.error(err.massage)
    }
  },
  async delete(req, res) {
    try {
      const { id } = req.params
      const pedido = await Pedido.destroy({ where: { id } })
      return res.json(pedido)
    } catch (err) {
      console.error(err.massage)
    }
  }
}
