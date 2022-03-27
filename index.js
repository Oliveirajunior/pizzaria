const express = require('express')
const app = express()

//DB
require('./config/config.json')

//routers
const ClienteRouter = require('./Routers/ClienteRouter')
const PedidoRouter = require('./Routers/PedidoRouter')
const PizzaRouter = require('./Routers/PizzaRouter')
const PizzaPedidoRouter = require('./Routers/PizzaPedidoRouter')

//middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(ClienteRouter)
app.use(PedidoRouter)
app.use(PizzaRouter)
app.use(PizzaPedidoRouter)

app.listen(8000, () => {
  console.log('SERVER ON-LINE')
})
