import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import BicicletasIndex from "../pages/Dashboard/Bicicletas/BicicletasIndex.jsx";
import Cadastro from "../pages/Cadastro/Cadastro.jsx";
import Login from "../pages/Login/Login.jsx";
import Home from "../pages/Home/Home.jsx";
import Logout from "../pages/Logout/Logout.jsx";
import AtividadesIndex from "../pages/Dashboard/Atividades/AtividadesIndex.jsx";
import { useAuthContext } from "../contexts/AuthProvider"; // Para verificar o estado de autenticação

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Rota pública - login, cadastro */}
      <Route path="/" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />

      {/* Rota de logout */}
      <Route path="/logout" element={<Logout />} />
      <Route path="/home" element={<Home />} />
      <Route path="/atividades" element={<AtividadesIndex />} />
      <Route path="/bicicletas" element={<BicicletasIndex />} />
    </>
  )
);

export default router;
