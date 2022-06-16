import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { PizzasPedidoContext } from '../context/PizzasPedidoContext'
import { useParams } from 'react-router-dom'

const ListaPizzasPedido = () => {

  const {pizzasPedido, setPizzasPedido} = useContext(PizzasPedidoContext)
  const {id} = useParams()
  const [total, setTotal] = useState(0)

  const getPizzaPedidos = async () => {
    try {
      const response = await axios.get(`/api/pizzapedidos/bypedido/${id}`)
      setPizzasPedido(response.data)

    } catch(err) {
      console.error(err.message)
    }
  }

  const handleDelete = async (pizzaPedidoId) => {
    try {
      const id = pizzaPedidoId
      await axios.delete(`/api/pizzapedidos/${id}`)
      setPizzasPedido(pizzasPedido.filter(pizzaPedido => pizzaPedido.id !== id))

    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    getPizzaPedidos()
 
  }, [])

  console.log(pizzasPedido)
  console.log(total)
  
  return (
    <>
      <div className='container'>
          <table className='table table-hover'>
      <thead className='bg-primary'>
        <tr className='text-center'>
          <th>Ordem</th>
          <th>Cliente</th>
          <th>Pizza</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>Subtotal</th>
          <th>Excluir</th>
        </tr>
      </thead>
      <tbody>
        {pizzasPedido.map(pizzaPedido => {
         
          return (
            <tr className='text-center' key={pizzaPedido.id}>
              <td>{pizzaPedido.id}</td>

              <td>{pizzaPedido.pedido.cliente.name}</td>

              <td>{pizzaPedido.pizza.flavor}</td>
              
              <td>{pizzaPedido.pizza.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
              
              <td>{pizzaPedido.amount}</td>
              
              <td>{(pizzaPedido.pizza.price * pizzaPedido.amount).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>

              <td><button className='btn btn-outline-danger btn' onClick={() => handleDelete(pizzaPedido.id)}>Excluir</button></td>
              {/*<td><button className='btn btn-outline-warning btn' onClick={() => handleUpdate(cliente.id)}>Atualizar</button></td> */}
             
        </tr>
          )
             
        })
      }
      </tbody>
    </table>
      <label>TOTAL: {total} </label>
      </div>
    </>
  )
}

export default ListaPizzasPedido