import React, { useState, createContext } from 'react'

export const ClientesContext = createContext()

export const ClientesContextProvider = props => {
  const [clientes, setClientes] = useState([])

  const addClientes = cliente => setClientes([...clientes, cliente])

  return (
    <ClientesContext.Provider
      value={{
        clientes,
        setClientes,
        addClientes
      }}
    >
      {props.children}
    </ClientesContext.Provider>
  )
}

export default ClientesContext
