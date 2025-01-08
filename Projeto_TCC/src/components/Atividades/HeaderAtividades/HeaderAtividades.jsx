import {
  Cabecalho,
  Logo,
  Navegacao,
  Lista,
  Item,
  LinkNav,
  BotaoSair,
  UserInfo,
} from "./HeaderAtividades.styles";
import logo from "../../Bicicletas/Header/novologo.png";
import { useAuthContext } from "../../../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function HeaderAtividades() {
  const { setToken, setUser } = useAuthContext(); // Usa o contexto de autenticação
  const navigate = useNavigate(); // Usa navegação para redirecionar após logout

  // Função para logout
  const handleLogout = () => {
    setToken(null); // Remove o token do contexto
    setUser(null); // Remove o usuário do contexto
    localStorage.removeItem("ACCESS_TOKEN"); // Remove o token do localStorage
    navigate("/"); // Redireciona para a página de login
  };

  return (
    <Cabecalho>
      <Logo>
        <img src={logo} alt="Logo da Aplicação" />
      </Logo>
      <Navegacao>
        <Lista>
          <Item>
            <LinkNav to="/home">Home</LinkNav>
          </Item>
          <Item>
            <LinkNav to="/atividades">Atividades</LinkNav>
          </Item>
          <Item>
            <LinkNav to="/bicicletas">Bicicletas</LinkNav>
          </Item>
          <Item>
            <LinkNav to="/rotas">Rotas</LinkNav>
          </Item>
          <Item>
            <LinkNav to="/editar-perfil">Perfil</LinkNav>
          </Item>
        </Lista>
        <UserInfo>
          <span>Bem-vindo</span>
        </UserInfo>

        <BotaoSair onClick={handleLogout}>Sair</BotaoSair>
      </Navegacao>
    </Cabecalho>
  );
}
