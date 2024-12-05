import {
  Cabecalho,
  Logo,
  Navegacao,
  Lista,
  Item,
  LinkNav,
  BotaoSair,
  UserInfo
} from './HeaderAtividades.styles';
import logo from '../../Bicicletas/Header/novologo.png';
import { Link } from 'react-router-dom';

export default function HeaderAtividades() {
  return (
    <Cabecalho>
      <Logo>
        <img src={logo} alt="Logo da Aplicação" />
      </Logo>
      <Navegacao>
        <Lista>
          <Item>
            <a href="pag_inicial.php">Home</a>
          </Item>
          <Item>
            <LinkNav to="/bicicletas">Bicicletas</LinkNav>
          </Item>
          <Item>
            <a href="rotas.php">Rotas</a>
          </Item>
          <Item>
            <a href="editarPerfil.php">Perfil</a>
          </Item>
        </Lista>
        <form action="logica/logica_usuario.php" method="post">
          <BotaoSair type="submit" name="sair">
            Sair
          </BotaoSair>
        </form>

        <UserInfo>
          <span>Bem-vindo</span>
        </UserInfo>
      </Navegacao>
    </Cabecalho>
  );
}
