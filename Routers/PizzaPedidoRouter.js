const express = require('express')
const PizzaPedidoRouter = express.Router()
const PizzaPedidoController = require('../controllers/PizzaPedidoController')

PizzaPedidoRouter.get('/api/pizzapedidos', PizzaPedidoController.index)
  .get('/api/pizzapedidos/:id', PizzaPedidoController.select)
  .post('/api/pizzapedidos', PizzaPedidoController.create)
  .put('/api/pizzapedidos/:id', PizzaPedidoController.update)
  .delete('/api/pizzapedidos/:id', PizzaPedidoController.delete)
  //rotas especiais
  .get(
    `/api/pizzapedidos/bypedido/:id_pedido`,
    PizzaPedidoController.selectByPedido
  )
  .get(
    '/api/pizzapedidos/bypizza/:id_pizza',
    PizzaPedidoController.selectByPizza
  )
module.exports = PizzaPedidoRouter
