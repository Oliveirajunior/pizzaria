import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { PizzasContext } from '../context/PizzasContext'

const ListaPizzas = () => {

  const {pizzas, setPizzas} = useContext(PizzasContext)
  
  let navigate = useNavigate()

  const getData = async () => {
    try {
      const response = await axios.get('/api/pizzas')
      setPizzas(response.data)
    } catch(err) {
        console.error(err.message)
    }
  }

  const handleDelete = async id => {
    try {
      await axios.delete(`/api/pizzas/${id}`)
      setPizzas(pizzas.filter(pizza => pizza.id !== id))
    } catch(err) {
        console.error(err.message)
    }
  }

  const handleUpdate = id => {
    navigate(`/api/pizzas/${id}/update`)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <div className='container'>
        <table className='table table-hover'>
          <thead className='bg-primary'>
            <tr className='text-center'>
              <th>Sabor</th>
              <th>Preco</th>
              <th>Excluir</th>
              <th>Atualizar</th>
            </tr>
          </thead>
          <tbody>
            {pizzas.map(pizza => {
              return (
                <tr className='text-center' key={pizza.id}>
                  <td>{pizza.flavor}</td>
                  <td>
                    {pizza.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                  </td>
                  <td><button className='btn btn-outline-danger btn' onClick={() => handleDelete(pizza.id)}>Excluir</button></td>
                  <td><button className='btn btn-outline-warning btn' onClick={() => handleUpdate(pizza.id)}>Atualizar</button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ListaPizzas