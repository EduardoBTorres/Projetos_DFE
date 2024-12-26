import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Bicicletas from './Bicicletas.jsx'
import CadastroPrincipal from './components/Cadastro/CadastroPrincipal.jsx'


const router = createBrowserRouter([
  {
    path: '/atividades',
    element: <App />
  },
  {
    path: '/bicicletas',
    element: <Bicicletas />
  },
  {
    path: '/',
    element: <CadastroPrincipal />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
