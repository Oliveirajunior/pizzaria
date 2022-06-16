import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import AddPizzasPedido from '../components/AddPizzasPedido'
import ListaPizzasPedido from '../components/ListaPizzasPedido'

const SelectPage = () => {
  return (
    <div>
      <Navbar/>
      <Header title={"Página de Seleção (pizzasPedido)"}/>
      <AddPizzasPedido/>
      <ListaPizzasPedido/>
    </div>
  )
}

export default SelectPage