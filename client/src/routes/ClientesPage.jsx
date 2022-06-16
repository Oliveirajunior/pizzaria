import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import ListaClientes from '../components/ListaClientes'
import AddClientes from '../components/AddClientes'

const ClientesPage = () => {
  return (
    <div>
      <Navbar/>
      <Header title={"Página de Clientes"}/>
      <AddClientes/>
      <ListaClientes/>
    </div>
  )
}

export default ClientesPage