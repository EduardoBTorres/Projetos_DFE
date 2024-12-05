import styled from 'styled-components';

export const ContainerPrincipal = styled.div`
    background-image: url('../../../public/img/fundo_cadastro.jpg');
    font-family: 'Poppins', sans-serif;
`;
export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  border: 0.2em solid #b2ff59;
  border-radius: 1em;
  padding: 2em;
  box-shadow: 0 0.4em 0.8em rgba(0, 0, 0, 0.1);
  max-width: 40em;
  width: 100%;
  text-align: center;
  margin-left: auto;
  margin-right: auto;   
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
  color: #a4d3a1;
  text-align: left;
`;

export const Input = styled.input`
  padding: 0.8em;
  border: 0.1em solid #6fa96d;
  border-radius: 0.5em;
  margin-bottom: 1em;
  font-size: 1em;
  background: transparent;
  color: #fff;

  &.file {
    background-color: transparent;
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
