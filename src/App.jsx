/* 
import './css/App.css'
 */

import OldApp from './pages/OldApp'

//4. Importar las configuraciones de ruteo de react-router
import { Routes, Route } from 'react-router-dom'
import Navegacion from './componente/Navegacion';
import Login from './pages/Login'
import Home from './pages/Home'
import Footer from './componente/Footer'
import Productos from './pages/Formulario'
import Registro from './pages/Registro'
import PropsVarios from './pages/PropsVarios'
import ApiStore from './pages/ApiStore'
import NuestrosProductos from './pages/NuestrosProductos'
import Carrito from './pages/Carrito'
import { CarritoProvider } from './context/CarritoContext'


function App() {
  return (
    <CarritoProvider>
      <Navegacion />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/productos' element={<Productos />} />
        <Route path='/registro' element={<Registro />} />
        <Route path='/props' element={<PropsVarios />} />
        <Route path='/apiStore' element={<ApiStore />} />
        <Route path='/nuestros-productos' element={<NuestrosProductos />} />
        <Route path='/carrito' element={<Carrito />} />
        <Route path='/old' element={<OldApp />} />
      </Routes>
      
      <Footer />
    </CarritoProvider>
  )
}

export default App
