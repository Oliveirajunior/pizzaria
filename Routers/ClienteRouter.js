const express = require('express')
const ClienteRouter = express.Router()
const ClienteController = require('../controllers/ClienteController')

ClienteRouter.get('/api/clientes', ClienteController.index)
  .get('/api/clientes/:id', ClienteController.select)
  .post('/api/clientes', ClienteController.create)
  .put('/api/clientes/:id', ClienteController.update)
  .delete('/api/clientes/:id', ClienteController.delete)

module.exports = ClienteRouter
