const express = require('express')
const router = express.Router()
const ClienteController = require('../controllers/ClienteController')
const PedidoController = require('../controllers/PedidoController')
const PizzaController = require('../controllers/PizzaController')
const PizzaPedidoController = require('../controllers/PizzaPedidoController')

//Rotas Cliente
router
  .get('/api/clientes', ClienteController.index)
  .get('/api/clientes/:id', ClienteController.select)
  .post('/api/clientes', ClienteController.create)
  .put('/api/clientes/:id', ClienteController.update)
  .delete('/api/clientes/:id', ClienteController.delete)

//Rotas Pedido
router.get('/api/pedidos', PedidoController.index)

//Rotas Pizza
router.get('/api/pizzas', PizzaController.index)

//Rotas PizzaPedido
router.get('/api/pizzapedidos', PizzaPedidoController.index)

module.exports = router
