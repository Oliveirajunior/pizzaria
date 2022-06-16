import React from 'react'

const Navbar = () => {
  return (
<nav className="navbar navbar-expand-sm bg-primary navbar-dark">
  <ul className="navbar-nav">
    <li className="nav-item active">
      <a className="nav-link" href="/api/home">Home</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/api/clientes">Clientes</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/api/pizzas">Pizzas</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/api/pedidos">Pedidos</a>
    </li>
  </ul>
</nav>
  )
}

export default Navbar