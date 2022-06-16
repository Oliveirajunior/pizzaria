import React, { createContext, useState } from 'react'

export const PizzasPedidoContext = createContext()

export const PizzasPedidoContextProvider = props => {
  const [pizzasPedido, setPizzasPedido] = useState([])
  const addPizzasPedido = pizzaPedido =>
    setPizzasPedido([...pizzasPedido, pizzaPedido])

  return (
    <PizzasPedidoContext.Provider
      value={{ pizzasPedido, setPizzasPedido, addPizzasPedido }}
    >
      {props.children}
    </PizzasPedidoContext.Provider>
  )
}
