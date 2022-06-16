import React, { createContext, useState } from 'react'

export const PizzasContext = createContext()

export const PizzasContextProvider = props => {
  const [pizzas, setPizzas] = useState([])
  const addPizzas = pizza => setPizzas([...pizzas, pizza])

  return (
    <PizzasContext.Provider value={{ pizzas, setPizzas, addPizzas }}>
      {props.children}
    </PizzasContext.Provider>
  )
}
