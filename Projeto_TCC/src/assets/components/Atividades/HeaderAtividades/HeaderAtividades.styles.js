import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Cabecalho = styled.header`
  background-color: #000;
  color: #fff;
  padding: 1em 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 8em;
`;

export const Logo = styled.div`
  img {
    height: 7em;
  }
`;

export const Navegacao = styled.nav`
  display: flex;
  align-items: center;
`;

export const Lista = styled.ul`
  list-style: none;
  display: flex;
  margin-right: 40em;
`;

export const Item = styled.li`
  margin: 0 1em;
  font-size: 1em;
`;

export const LinkNav = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #b2ff59;
  }
`;

export const BotaoSair = styled.button`
  background-color: #b2ff59;
  color: #1a1a1a;
  font-weight: bold;
  border: none;
  border-radius: 25px;
  padding: 0.5em 1.5em;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #9dff57;
  }
`;


export const UserInfo = styled.div`
  margin-left: 1em;
  font-weight: 500;
  color: #fff;
`;
