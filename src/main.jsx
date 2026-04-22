import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
/* import './css/index.css' */
import App from './App.jsx'

//1. importamos el admin de las rutas de react-router-dom
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* 2. Envolvemos el componente principal para el manejo de rutas */}
      <App />
    </BrowserRouter>
  </StrictMode>,
)
