import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  border: 0.2em solid #b2ff59;
  border-radius: 1em;
  padding: 2em;
  box-shadow: 0 0.5em 1em rgba(0, 0, 0, 0.5);
  width: 90%;
  max-width: 30em;
  text-align: center;
  position: relative;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  margin-bottom: 2em;
`;

export const Logo = styled.img`
  width: 10em;
`;

export const Title = styled.h1`
  color: #b2ff59;
  margin-bottom: 1em;
  font-size: 2em;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin: 0.5em 0 0.2em;
  color: #b2ff59;
  text-align: left;
`;

export const Input = styled.input`
  padding: 1em;
  border: 0.1em solid #b2ff59;
  border-radius: 0.5em;
  margin-bottom: 1em;
  background-color: transparent;
  color: #ffffff;
`;

export const SubmitButton = styled.button`
  background-color: #66bb6a;
  color: #ffffff;
  border: none;
  padding: 1em 2em;
  border-radius: 0.5em;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #43a047;
  }
`;

export const CadastroText = styled.p`
  margin-top: 1.5em;
  color: #a4d3a1;
`;

export const CadastroLink = styled.a`
  color: #b2ff59;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 1em;
`;
