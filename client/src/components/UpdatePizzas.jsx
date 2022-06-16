import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdatePizzas = () => {

  const {id} = useParams()
  const [flavor, setFlavor] = useState('')
  const [price, setPrice] = useState('')
  let navigate = useNavigate()

  const getData = async () => {
    try {
      const response = await axios.get(`/api/pizzas/${id}`)
      setFlavor(response.data.flavor)
      setPrice(response.data.price)
    } catch(err) {
        console.error(err.message)
    }
  }

  const handleSubmit = async e => {
    try {
      e.preventDefault()
      await axios.put(`/api/pizzas/${id}`, {flavor, price})
      navigate('/api/pizzas')
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
        <label htmlFor="flavor" className="mr-sm-2">Sabor:</label>
        <input type="text" className="form-control mb-2 mr-sm-2" placeholder="Sabor da Pizza" id="flavor" value={flavor} onChange={e => setFlavor(e.target.value)} />
        <label htmlFor="price" className="mr-sm-2">Preço:</label>
        <input type="number" className="form-control mb-2 mr-sm-2" placeholder="Preço da Pizza" id="price" value={price} onChange={e => setPrice(e.target.value)}/>
        <button type="button" className="btn btn-outline-primary btn mb-2" onClick={handleSubmit}>Atualizar</button>
      </form>
    </div>
  )
}

export default UpdatePizzas