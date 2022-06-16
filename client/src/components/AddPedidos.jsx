import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { ClientesContext } from '../context/ClientesContext'
import { PedidosContext } from '../context/PedidosContext'
import { useNavigate } from 'react-router-dom'

const AddPedidos = () => {

  const {clientes, setClientes} = useContext(ClientesContext)
  const [clienteSelected, setClienteSelected] = useState('')
  const {addPedidos} = useContext(PedidosContext)
  const total = 0 //const [total, setTotal] = useState(0)
  const navigate = useNavigate() 

  const getClientes = async () => {
    try {
      const response = await axios.get('/api/clientes')
      setClientes(response.data)
    } catch(err) {
      console.error(err.message)
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const id_cliente = clienteSelected
      const response = await axios.post('/api/pedidos', {id_cliente, total})
      addPedidos(response.data)
      navigate(`/api/pedidos/${response.data.id}/select`)
    } catch(err) {
      console.error(err.message)
    }

  }

  useEffect(() => {
    getClientes()
  },[])

  console.log(clienteSelected)
  
  return (
    <div className='d-flex justify-content-center'>
      <form>
        <div className="form-group text-center">
          <label htmlFor="cliente">Cliente:</label>
          <select className="form-control" value={clienteSelected} onChange={e => setClienteSelected(e.target.value)}>

            {clientes.map(cliente => {
              return <option key={cliente.id} value={cliente.id}>{cliente.name}</option>  
            })}

          </select>
        </div>
        
        <div className="form-group text-center">
          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Selecionar</button>
        </div>

      </form>
    </div>
  )
}

export default AddPedidos