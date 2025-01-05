import styled from 'styled-components';

export const ImagemFundo = styled.div`
  background-image: url('../../../public/img/fundo_cadastro.jpg');
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

export const Logo = styled.img`
  width: 10em;
`;

export const Container = styled.div`
  font-family: 'Poppins', sans-serif;
  background-color: rgba(0, 0, 0, 0.7);
  border: 0.2em solid #b2ff59;
  border-radius: 1em;
  padding: 2em;
  box-shadow: 0 0.4em 0.8em rgba(0, 0, 0, 0.5);
  max-width: 30em;
  width: 100%;
  text-align: center;
  margin-left: auto;
  margin-right: auto;   
  margin-top: 4em;
  
`;

export const Titulo = styled.h1`
  color: #b2ff59;
  margin-bottom: 1.5em;
  font-size: 2em;
`;

export const FormCadastro = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 2em;
`;

export const Label = styled.label`
  margin-bottom: 0.5em;
  color: #b2ff59;
  text-align: left;
`;

export const Input = styled.input`
  padding: 0.8em;
  border: 0.1em solid #b2ff59;
  border-radius: 0.5em;
  margin-bottom: 1em;
  font-size: 1em;
  background: transparent;
  color: #fff;

  &.file {
    background-color: transparent;
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

export const BotaoSubmit = styled.button`
  background-color: #66bb6a;
  color: #ffffff;
  border: none;
  padding: 1em;
  border-radius: 0.5em;
  cursor: pointer;
  font-size: 1em;
  margin-top: 1em;

  &:hover {
    background-color: #43a047;
  }
`;
