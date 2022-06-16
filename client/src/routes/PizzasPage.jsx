import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import ListaPizzas from '../components/ListaPizzas'
import AddPizzas from '../components/AddPizzas'

const PizzasPage = () => {
  return (
    <div>
      <Navbar/>
      <Header title={"Página de Pizzas"}/>
      <AddPizzas/>
      <ListaPizzas/>
    </div>
  )
}

export default PizzasPage