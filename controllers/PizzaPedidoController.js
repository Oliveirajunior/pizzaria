const { PizzaPedido } = require('../models')

module.exports = {
  async index(req, res) {
    try {
      const pizzaPedidos = await PizzaPedido.findAll({
        order: [['id', 'ASC']],
        attributes: ['id', 'id_pedido', 'id_pizza', 'amount'],
        include: { association: 'pizza', attributes: ['flavor', 'price'] }
      })
      return res.json(pizzaPedidos)
    } catch (err) {
      console.error(err.massage)
    }
  },
  async select(req, res) {
    try {
      const { id } = req.params
      const pizzaPedido = await PizzaPedido.findByPk(id, {
        attributes: ['id', 'id_pedido', 'id_pizza', 'amount'],
        include: { association: 'pizza', attributes: ['flavor', 'price'] }
      })
      return res.json(pizzaPedido)
    } catch (err) {
      console.error(err.massage)
    }
  },
  async selectByPedido(req, res) {
    try {
      const { id_pedido } = req.params
      const pizzaPedido = await PizzaPedido.findAll({
        where: { id_pedido },
        attributes: ['id', 'id_pedido', 'id_pizza', 'amount'],
        include: {
          association: 'pedido',
          attributes: ['id_cliente', 'total']
        }
      })
      return res.json(pizzaPedido)
    } catch (err) {
      console.error(err.massage)
    }
  },
  async selectByPizza(req, res) {
    try {
      const { id_pizza } = req.params
      const pizzaPedido = await PizzaPedido.findAll({
        where: { id_pizza },
        attributes: ['id', 'id_pedido', 'id_pizza', 'amount'],
        include: { association: 'pizza', attributes: ['flavor', 'price'] }
      })
      return res.json(pizzaPedido)
    } catch (err) {
      console.error(err.massage)
    }
  },
  async create(req, res) {
    try {
      const { id_pedido, id_pizza, amount } = req.body
      const pizzaPedido = await PizzaPedido.create({
        id_pedido,
        id_pizza,
        amount
      })
      return res.json(pizzaPedido)
    } catch (err) {
      console.error(err.massage)
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params
      const { id_pedido, id_pizza, amount } = req.body
      const pizzaPedido = await PizzaPedido.update(
        {
          id_pedido,
          id_pizza,
          amount
        },
        { where: { id } }
      )
      return res.json(pizzaPedido)
    } catch (err) {
      console.error(err.massage)
    }
  },
  async delete(req, res) {
    try {
      const { id } = req.params
      const pizzaPedido = await PizzaPedido.destroy({ where: { id } })
      return res.json(pizzaPedido)
    } catch (err) {
      console.error(err.massage)
    }
  }
}
