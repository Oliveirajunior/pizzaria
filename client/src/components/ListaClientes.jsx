import axios from 'axios'
import React, {useEffect, useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import {ClientesContext} from '../context/ClientesContext'

const ListaClientes = () => {

  const {clientes, setClientes} = useContext(ClientesContext)

  let navigate = useNavigate()

  const getData = async () => {
    try {
      const response = await axios.get('/api/clientes')
      setClientes(response.data)
    } catch(err) {
      console.error(err.message)
    }
  }

  const handleDelete = async id => {
    try {
      await axios.delete(`/api/clientes/${id}`)
      setClientes(clientes.filter(cliente => cliente.id !== id))
    } catch(err) {
      console.error(err.message)
    }
  }

  const handleUpdate = id => {
    navigate(`/api/clientes/${id}/update`)
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
          <th>Nome</th>
          <th>Telefone</th>
          <th>Excluir</th>
          <th>Atualizar</th>
        </tr>
      </thead>
      <tbody>
        {clientes.map(cliente => {
          return (
            <tr className='text-center' key={cliente.id}>
              <td>{cliente.name}</td>
              <td>{cliente.phone}</td>
              <td><button className='btn btn-outline-danger btn' onClick={() => handleDelete(cliente.id)}>Excluir</button></td>
              <td><button className='btn btn-outline-warning btn' onClick={() => handleUpdate(cliente.id)}>Atualizar</button></td>
        </tr>
          )
        })}
      </tbody>
    </table>
      </div>
    </>
  )
}

export default ListaClientes