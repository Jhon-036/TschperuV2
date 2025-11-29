import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Menu from './components/Menu'
import Home from './pages/Home'
import Nosotros from './pages/Nosotros'
import Productos from './pages/Productos'
import Publicaciones from './pages/Publicaciones'
import SrvMantIntegral from './pages/SrvMantIntegral'
import SrvVentRepuestosOem from './pages/SrvVentRepuestosOem'
import SrvInnovTecnologia from './pages/SrvInnovTecnologia'
import ProductDetail from './components/ProductDetail'

function App() {

  return (
    <BrowserRouter>
      <Menu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/publicaciones' element={<Publicaciones />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/productos' element={<Productos />} />
          <Route path='/productos/:id' element={<ProductDetail />} />
          <Route path='/mantenimiento-integral-maquinaria' element={<SrvMantIntegral />} />
          <Route path='/venta-de-repuestos-oem' element={<SrvVentRepuestosOem />} />
          <Route path='/innovacion-y-tecnologia' element={<SrvInnovTecnologia />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
