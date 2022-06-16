import axios from 'axios'
import React, { useEffect, useState } from 'react'

const FormPedidos = () => {

  const [clientes, setClientes] = useState([])
  const [clienteSelected, setClienteSelected] = useState('')

  const [pizzas, setPizzas] = useState([])
  const [pizzaSelected, setPizzaSelected] = useState('')

  //const [subtotal, setSubtotal] = useState(100)

  const [amount, setAmount] = useState(1)

  //const [price, setPrice] = useState('')

  const getClientes = async () => {
    try {
      const response = await axios.get('/api/clientes')
      setClientes(response.data)
    }
    catch(err) {
      console.error(err.message)
    }
  }

  const getPizzas = async () => {
    try {
      const response = await axios.get('/api/pizzas')
      setPizzas(response.data)

    }
    catch(err) {
      console.error(err.message)
    }
  }

/*   const getPrice = async id => {
    try {
      const response = await axios.get(`/api/pizzas/${id}`)
      setPrice(response.data.price)
    }
    catch(err) {
      console.error(err.message)
    }
  } */

  const handleSubmit = async () => {

    try {
      await axios.post('/api/pedidos', {clienteSelected})
    } 
    catch(err) {
      console.error(err.message)
    }

  } 

  useEffect(() => {
    getClientes()
    getPizzas()
  }, [])

  return (
    <div className='d-flex justify-content-center'>
      <form className="form-group mt-4 mb-4">
        <label htmlFor="cliente" className="mr-sm-2">Cliente:</label>
        <select value={clienteSelected} onChange={e => setClienteSelected(e.target.value)} className='form-control mb-2 mr-sm-2'>

              {clientes.map(cliente => {
                return <option key={cliente.id} value={cliente.name}>{cliente.name}</option>
              })}
              
        </select>

        <label htmlFor="pizza" className="mr-sm-2">Pizza:</label>
        <select value={pizzaSelected} onChange={e => {
          setPizzaSelected(e.target.value)
        }} className='form-control mb-2 mr-sm-2'>

              {pizzas.map(pizza => {
                return <option key={pizza.id} value={pizza.id}>{pizza.flavor}, {pizza.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</option>
              })}
              
        </select>

        <label htmlFor="amount" className="mr-sm-2">Quantidade:</label>
        <input type="number" min={1} className="form-control mb-2 mr-sm-2" id="amount" value={amount} onChange={e => setAmount(e.target.value)} />

        <button type="button" className="btn btn-outline-success btn mb-2" onClick={handleSubmit}>Adicionar</button>
      </form>
    </div>
)
}

export default FormPedidos