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

export default function HeaderAtividades() {
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
            <LinkNav to="/bicicletas">Bicicletas</LinkNav>
          </Item>
          <Item>
            <LinkNav to="/rotas">Rotas</LinkNav>
          </Item>
          <Item>
            <LinkNav to="/perfil">Perfil</LinkNav>
          </Item>
        </Lista>
        <UserInfo>
          <span>Bem-vindo</span>
        </UserInfo>
        <form method="post">
          <LinkNav to="/">
            <BotaoSair type="submit" name="sair">
              Sair
            </BotaoSair>
          </LinkNav>
        </form>
      </Navegacao>
    </Cabecalho>
  );
}
