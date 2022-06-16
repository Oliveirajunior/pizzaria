import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { PedidosContext } from '../context/PedidosContext'
import { PizzasPedidoContext } from '../context/PizzasPedidoContext'

const ListaPedidos = () => {

  const {pedidos, setPedidos} = useContext(PedidosContext)
  const {pizzasPedido, setPizzasPedido} = useContext(PizzasPedidoContext)

  const getPedidos = async () => {
    try {
      const response = await axios.get('/api/pedidos')
      setPedidos(response.data)
    } catch(err) {
      console.error(err.message)
    }
  }

  const getPizzaPedidos = async () => {
    try {
      const response = await axios.get('/api/pizzapedidos')
      setPizzasPedido(response.data)
    } catch(err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    getPedidos()
    getPizzaPedidos()
  }, [])

  console.log(pedidos)
  console.log(pizzasPedido)

  return (
    <>
      <div className='container'>
          <table className='table table-hover'>
      <thead className='bg-primary'>
        <tr className='text-center'>
          <th>Pedido</th>
          <th>Cliente</th>
          <th>Pizza</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>Subtotal?</th>
        </tr>
      </thead>
      <tbody>
        {pizzasPedido.map(pizzaPedido => {
          return (
            <tr className='text-center' key={pizzaPedido.id}>
              <td>{pizzaPedido.id_pedido}</td>
              {pedidos.map(pedido => {
                if (pedido.id === pizzaPedido.pedido.id_cliente) {
                  return ( <td key={pedido.id}>{pedido.cliente.name}</td>
                  )
                }
               })}
              <td>{pizzaPedido.pizza.flavor}</td>
              <td>{pizzaPedido.pizza.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
              <td>{pizzaPedido.amount}</td>
              <td>{(pizzaPedido.pizza.price * pizzaPedido.amount).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
              {/* <td><button className='btn btn-outline-danger btn' onClick={() => handleDelete(cliente.id)}>Excluir</button></td>
              <td><button className='btn btn-outline-warning btn' onClick={() => handleUpdate(cliente.id)}>Atualizar</button></td> */}
        </tr>
          )
        })}
      </tbody>
    </table>
      </div>
    </>
  )
}

export default ListaPedidos