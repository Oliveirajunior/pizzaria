import axios from 'axios'
import React, { useContext, useState } from 'react'
import {PizzasContext} from '../context/PizzasContext'

const AddPizzas = () => {

  const [flavor, setFlavor] = useState('')
  const [price, setPrice] = useState('')
  const {addPizzas} = useContext(PizzasContext)
  
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const response = await axios.post('/api/pizzas', {flavor, price})
      addPizzas(response.data)
      setFlavor('')
      setPrice('')    
    } catch(err) {
      console.error(err.message)
    }
  }

  return (
    <div className='d-flex justify-content-center'>
      <form className="form-inline mt-4 mb-4">
        <label htmlFor="flavor" className="mr-sm-2">Sabor:</label>
        <input type="text" className="form-control mb-2 mr-sm-2" placeholder="Digite o sabor" id="flavor" value={flavor} onChange={e => setFlavor(e.target.value)} />
        <label htmlFor="price" className="mr-sm-2">Preço:</label>
        <input type="number" className="form-control mb-2 mr-sm-2" placeholder="Digite o preço" id="price" value={price} onChange={e => setPrice(e.target.value)}/>
        <button type="button" className="btn btn-outline-success btn mb-2" onClick={handleSubmit}>Adicionar</button>
      </form>
    </div>
  )
}

export default AddPizzas