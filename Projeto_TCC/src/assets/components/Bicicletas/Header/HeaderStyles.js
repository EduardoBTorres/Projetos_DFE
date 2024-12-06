// HeaderStyles.js
import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #000;
  color: #fff;
  padding: 0.625em 1.25em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  height: 8em;
`;

export const Logo = styled.div`
  img {
    height: 7em;
    max-width: 100%;
    object-fit: contain;
  }
`;

export const Navigation = styled.nav`
  margin-left: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1em;
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  gap: 1em;
  margin-right: 40em;
`;

export const NavItem = styled.li``;

export const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease, text-decoration 0.3s ease;

  &:hover {
    text-decoration: underline;
    color: #b2ff59;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  flex-wrap: wrap;
  margin-top: 0.625em;
`;

export const LogoutButton = styled.input`
  background-color: #b2ff59;
  color: #000;
  font-weight: bold;
  border: none;
  border-radius: 0.625em;
  padding: 0.625em 1.25em;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #9dff57;
    transform: scale(1.05);
  }
`;

// Responsividade
export const GlobalStyle = styled.div`
  @media (max-width: 1024px) {
    ${HeaderContainer} {
      justify-content: center;
      gap: 1.25em;
    }

    ${NavList} {
      flex-direction: row;
      justify-content: center;
      gap: 0.5em;
    }

    ${UserInfo} {
      margin-top: 0.5em;
      justify-content: center;
    }
  }

  @media (max-width: 768px) {
    ${HeaderContainer} {
      flex-direction: column;
      align-items: center;
    }

    ${NavList} {
      flex-direction: column;
      align-items: center;
      gap: 0.75em;
    }

    ${UserInfo} {
      margin-top: 1em;
      flex-direction: column;
      gap: 0.5em;
    }
  }

  @media (max-width: 480px) {
    ${Logo} img {
      height: 4em;
    }

    ${LogoutButton} {
      padding: 0.5em 1em;
      font-size: 0.9em;
    }
  }
`;
