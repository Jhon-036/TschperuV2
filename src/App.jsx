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
      <a
        href="https://wa.me/51951758040?text=Hola%20TSCH%2C%20requiero%20informaci%C3%B3n%20sobre%20sus%20productos."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50"
      >
        <img
          src="/images/whatsapp.png"
          alt="WhatsApp"
          className="w-14 h-14 cursor-pointer"
        />
      </a>
    </BrowserRouter>
  )
}

export default App
