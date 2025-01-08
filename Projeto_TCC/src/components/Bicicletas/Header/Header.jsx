import React from "react";
import { Link } from "react-router-dom";
import logo from "./novologo.png";
import {
  HeaderContainer,
  Logo,
  Navigation,
  NavList,
  NavItem,
  NavLink,
  UserInfo,
  LogoutButton,
} from "./HeaderStyles";

export default function Header() {

  
  return (
    <HeaderContainer>
      <Logo>
        <img src={logo} alt="Logo da Aplicação" />
      </Logo>
      <Navigation>
        <NavList>
          <NavItem>
            <Link to="/home">Home</Link>
          </NavItem>
          <NavItem>
            <Link to="/atividades">Atividades</Link>
          </NavItem>
          <NavItem>
            <Link to="/home">Home</Link>
          </NavItem>
          <NavItem>
            <Link to="/editar-perfil">Perfil</Link>
          </NavItem>
        </NavList>
        <form action="logica/logica_usuario.php" method="post">
          <LogoutButton type="submit" name="sair" value="Sair" />
        </form>
        <UserInfo>
          <span>Bem-vindo</span>
        </UserInfo>
      </Navigation>
    </HeaderContainer>
  );
}
