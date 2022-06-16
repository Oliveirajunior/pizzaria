import React, { createContext, useState } from 'react'

export const PedidosContext = createContext()

export const PedidosContextProvider = props => {
  const [pedidos, setPedidos] = useState([])
  const addPedidos = pedido => setPedidos([...pedidos, pedido])

  return (
    <PedidosContext.Provider value={{ pedidos, setPedidos, addPedidos }}>
      {props.children}
    </PedidosContext.Provider>
  )
}
