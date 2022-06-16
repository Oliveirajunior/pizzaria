import axios from 'axios'
import React, { useState, useContext } from 'react'
import {ClientesContext} from '../context/ClientesContext'

const AddClientes = () => {

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const {addClientes} = useContext(ClientesContext)

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const response = await axios.post('/api/clientes', {name, phone})
      addClientes(response.data)
      setName('')
      setPhone('') 
    } catch(err) {
      console.error(err.message)
    }
  }

  return (
    <div className='d-flex justify-content-center'>
      <form className="form-inline mt-4 mb-4">
        <label htmlFor="name" className="mr-sm-2">Nome:</label>
        <input type="text" className="form-control mb-2 mr-sm-2" placeholder="Digite o nome" id="name" value={name} onChange={e => setName(e.target.value)} />
        <label htmlFor="phone" className="mr-sm-2">Telefone:</label>
        <input type="tel" className="form-control mb-2 mr-sm-2" placeholder="Digite o telefone" id="phone" value={phone} onChange={e => setPhone(e.target.value)}/>
        <button type="button" className="btn btn-outline-success btn mb-2" onClick={handleSubmit}>Adicionar</button>
      </form>
    </div>
  )
}

export default AddClientes