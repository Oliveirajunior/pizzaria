const express = require('express')
const PizzaRouter = express.Router()
const PizzaController = require('../controllers/PizzaController')

PizzaRouter.get('/api/pizzas', PizzaController.index)
  .get('/api/pizzas/:id', PizzaController.select)
  .post('/api/pizzas', PizzaController.create)
  .put('/api/pizzas/:id', PizzaController.update)
  .delete('/api/pizzas/:id', PizzaController.delete)

module.exports = PizzaRouter
