import React from 'react'
import UpdateClientes from '../components/UpdateClientes'
import Navbar from '../components/Navbar'
import Header from '../components/Header'

const ClientesUpdatePage = () => {
  return (
    <div>
      <Navbar/>
      <Header title={"Página de Atualização do Cliente"}/>
      <UpdateClientes/>
    </div>
  )
}

export default ClientesUpdatePage