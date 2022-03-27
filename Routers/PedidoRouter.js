const express = require('express')
const PedidoRouter = express.Router()
const PedidoController = require('../controllers/PedidoController')

PedidoRouter.get('/api/pedidos', PedidoController.index)
PedidoRouter.get('/api/pedidos/:id', PedidoController.select)
PedidoRouter.post('/api/pedidos', PedidoController.create)
PedidoRouter.put('/api/pedidos/:id', PedidoController.update)
PedidoRouter.delete('/api/pedidos/:id', PedidoController.delete)

module.exports = PedidoRouter
