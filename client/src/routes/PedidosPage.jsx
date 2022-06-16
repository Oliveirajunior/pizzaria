import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
//import FormPedidos from '../components/FormPedidos'
import AddPedidos from '../components/AddPedidos'

const PedidosPage = () => {
  return (
    <div>
      <Navbar/>
      <Header title={"Página de Pedidos"}/>
      <AddPedidos/>
    </div>
  )
}

export default PedidosPage