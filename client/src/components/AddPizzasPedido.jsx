import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { PizzasContext } from '../context/PizzasContext'
import { PizzasPedidoContext } from '../context/PizzasPedidoContext'
import { useParams } from 'react-router-dom'

const AddPedidos = () => {

  const {pizzas, setPizzas} = useContext(PizzasContext)
  
  const {addPizzasPedido} = useContext(PizzasPedidoContext)

  const [pizzaSelected, setPizzaSelected] = useState('')
  
  const [amount, setAmount] = useState(1)
  const {id} = useParams()

    const getPizzas = async () => {
    try {
      const response = await axios.get('/api/pizzas')
      setPizzas(response.data)
    } catch(err) {
      console.error(err.messaage)
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const id_pedido = id
      const id_pizza = pizzaSelected
      const response_one = await axios.post('/api/pizzapedidos', {id_pedido, id_pizza, amount})
      const id_pizzaPedido = response_one.data.id
      console.log(id_pizzaPedido)
      const response_two = await axios.get(`/api/pizzapedidos/${id_pizzaPedido}`)
      console.log(response_two.data)
      addPizzasPedido(response_two.data)
      setPizzaSelected('')
      setAmount(1)
    } catch(err) {
      console.error(err.messaage)
    }
  }

  console.log(`ID. PEDIDO: ${id}`)
  console.log(pizzaSelected)
  console.log(amount)

  useEffect(() => {
    getPizzas()
  },[])
  
  return (
    <div className='d-flex justify-content-center'>
      <form action="">
        
        <div className="form-group text-center">
          <label htmlFor="text">Pizza:</label>
          
          <select className="form-control" value={pizzaSelected} onChange={e => setPizzaSelected(e.target.value)}>

            {pizzas.map(pizza => {
              return <option key={pizza.id} value={pizza.id}>{pizza.flavor} +{pizza.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</option>  
            })}

          </select>
        </div>

        <div className="form-group text-center">
          <label htmlFor="amount">Quantidade:</label>
          <input type="number" className="form-control" placeholder="" id="amount" value={amount} onChange={e => setAmount(e.target.value)}/>
        </div>
        
        <div className="form-group text-center">
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Selecionar</button>
        </div>
      </form>
    </div>
  )
}

export default AddPedidos