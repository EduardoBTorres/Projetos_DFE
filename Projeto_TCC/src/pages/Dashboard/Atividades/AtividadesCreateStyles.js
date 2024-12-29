import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  padding: 1em;
`;

export const Logo = styled.img`
  height: 6.25em;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin-right: 2em;
`;

export const NavItem = styled.li`
  margin: 0 1em;
`;

export const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

export const LogoutButton = styled.input`
  background-color: #b2ff59;
  color: #000;
  padding: 0.5em 1em;
  border: none;
  border-radius: 0.5em;
  cursor: pointer;
  &:hover {
    background-color: #9dff57;
  }
`;

export const UserInfo = styled.span`
  color: #fff;
  margin-left: 1em;
`;

export const Content = styled.section`
  display: flex;
  justify-content: center;
  padding: 2em;
  background-color: #121212;
`;

export const FormContainer = styled.div`
  background-color: #1e1e1e;
  padding: 2em;
  border: 0.2em solid #b2ff59;
  border-radius: 1em;
  box-shadow: 0 0.5em 1em rgba(0, 0, 0, 0.5);
`;

export const Title = styled.h3`
  color: #b2ff59;
  margin-bottom: 1em;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 0.5em;
  color: #b2ff59;
`;

export const Input = styled.input`
  padding: 0.8em;
  margin-bottom: 1em;
  border: 0.1em solid #ccc;
  border-radius: 0.5em;
  background-color: #333;
  color: #fff;
`;

export const Select = styled.select`
  padding: 0.8em;
  border: 0.1em solid #ccc;
  border-radius: 0.5em;
  background-color: #333;
  color: #fff;
`;

export const Option = styled.option`
  color: #000;
  background-color: #b2ff59;
`;

export const SubmitButton = styled.button`
  background-color: #b2ff59;
  color: #000;
  padding: 0.8em 1.5em;
  border: none;
  border-radius: 0.5em;
  cursor: pointer;
  &:hover {
    background-color: #9dff57;
  }
`;

export const Footer = styled.footer`
  background-color: #1f2914;
  padding: 1em;
  text-align: center;
  color: #fff;
`;

export const FooterLinks = styled.div`
  margin-bottom: 0.5em;
`;

export const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin: 0 0.5em;
  &:hover {
    text-decoration: underline;
  }
`;

export const StoreIcons = styled.div`
  margin-bottom: 0.5em;
`;

export const StoreIcon = styled.img`
  height: 2em;
  margin: 0 0.5em;
`;

export const Copyright = styled.p`
  font-size: 0.875em;
`;
