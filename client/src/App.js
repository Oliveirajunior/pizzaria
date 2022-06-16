import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import ClientesPage from './routes/ClientesPage'
import PizzasPage from './routes/PizzasPage'
import PedidosPage from './routes/PedidosPage'
import SelectPage from './routes/SelectPage'
import { ClientesContextProvider } from './context/ClientesContext'
import ClientesUpdatePage from './routes/ClientesUpdatePage'
import PizzasUpdatePage from './routes/PizzasUpdatePage'
import { PizzasContextProvider } from './context/PizzasContext'
import { PedidosContextProvider } from './context/PedidosContext'
import { PizzasPedidoContextProvider } from './context/PizzasPedidoContext'

function App() {
  return (
    <ClientesContextProvider>
      <PizzasContextProvider>
        <PedidosContextProvider>
          <PizzasPedidoContextProvider>
            <div>
              <Router>
                <Routes>
                  <Route path="/api/home" element={<Home />} />
                  <Route path="/api/clientes" element={<ClientesPage />} />
                  <Route
                    path="/api/clientes/:id/update"
                    element={<ClientesUpdatePage />}
                  />
                  <Route path="/api/pizzas" element={<PizzasPage />} />
                  <Route
                    path="/api/pizzas/:id/update"
                    element={<PizzasUpdatePage />}
                  />
                  <Route path="/api/pedidos" element={<PedidosPage />} />
                  <Route
                    path="/api/pedidos/:id/select"
                    element={<SelectPage />}
                  />
                </Routes>
              </Router>
            </div>
          </PizzasPedidoContextProvider>
        </PedidosContextProvider>
      </PizzasContextProvider>
    </ClientesContextProvider>
  )
}

export default App
