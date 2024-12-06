// Header.jsx
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
            <Link to="/atividades">Atividades</Link>
          </NavItem>
          <NavItem>
            <NavLink href="listagemBicicleta.php">Bicicletas</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="rotas.php">Rotas</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="editarPerfil.php">Perfil</NavLink>
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
