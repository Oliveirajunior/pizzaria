import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import UpdatePizzas from '../components/UpdatePizzas'

const PizzasUpdatePage = () => {
  return (
    <div>
      <Navbar/>
      <Header title={"Página de Atualização da Pizza"}/>
      <UpdatePizzas/>
    </div>
  )
}

export default PizzasUpdatePage