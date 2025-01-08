import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import BicicletasIndex from "../pages/Dashboard/Bicicletas/BicicletasIndex.jsx";
import Cadastro from "../pages/Cadastro/Cadastro.jsx";
import Login from "../pages/Login/Login.jsx";
import Home from "../pages/Home/Home.jsx";
import AtividadesIndex from "../pages/Dashboard/Atividades/AtividadesIndex.jsx";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute.jsx";
import EditUser from "../pages/Dashboard/Users/EditUser.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Rotas públicas */}
      <Route path="/" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />

      {/* Rotas protegidas */}
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/atividades"
        element={
          <ProtectedRoute>
            <AtividadesIndex />
          </ProtectedRoute>
        }
      />
      <Route
        path="/bicicletas"
        element={
          <ProtectedRoute>
            <BicicletasIndex />
          </ProtectedRoute>
        }
      />
      <Route
        path="/editar-perfil"
        element={
          <ProtectedRoute>
            <EditUser />
          </ProtectedRoute>
        }
      />
    </>
  )
);

export default router;
