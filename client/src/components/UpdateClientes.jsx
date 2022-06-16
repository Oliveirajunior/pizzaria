import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const UpdateClientes = () => {

  const {id} = useParams()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  let navigate = useNavigate()

  const getData = async () => {
    try {
      const response = await axios.get(`/api/clientes/${id}`)
      setName(response.data.name)
      setPhone(response.data.phone) 
    } catch(err) {
      console.error(err.message)
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await axios.put(`/api/clientes/${id}`, {name, phone})
      navigate('/api/clientes')
    } catch(err) {
      console.error(err.message)
    }

  }

  useEffect(() => {
    getData()
  },[])

  return (
    <div className='d-flex justify-content-center'>
      <form className="form-inline mt-4">
        <label htmlFor="name" className="mr-sm-2">Nome:</label>
        <input type="text" className="form-control mb-2 mr-sm-2" placeholder="Nome do Cliente" id="name" value={name} onChange={e => setName(e.target.value)} />
        <label htmlFor="phone" className="mr-sm-2">Telefone:</label>
        <input type="tel" className="form-control mb-2 mr-sm-2" placeholder="Telefone do Cliente" id="phone" value={phone} onChange={e => setPhone(e.target.value)}/>
        <button type="button" className="btn btn-outline-primary btn mb-2" onClick={handleSubmit}>Atualizar</button>
      </form>
    </div>  
  )
}

export default UpdateClientes