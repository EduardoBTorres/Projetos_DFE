import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Bicicletas from './Bicicletas.jsx'

const router = createBrowserRouter([
  {
    path: '/atividades',
    element: <App />
  },
  {
    path: '/bicicletas',
    element: <Bicicletas />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
