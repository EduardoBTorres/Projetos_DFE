import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthProvider";
import axiosClient from "../../utils/axios_client";
import logo from "../../../public/img/novologo.png";
import {
  ImagemFundo,
  Container,
  Header,
  Logo,
  Title,
  Form,
  Label,
  Input,
  SubmitButton,
  CadastroText,
  CadastroLink,
  ErrorMessage,
} from "./LoginStyle";

export default function Login() {
  // Contextos e navegação
  const { setToken, setUser } = useAuthContext();
  const emailRef = useRef(); // Referência para o campo de email
  const passwordRef = useRef(); // Referência para o campo de senha
  const navigate = useNavigate();

  // Função de envio do formulário
  const onSubmit = async (event) => {
    event.preventDefault(); // Evita o comportamento padrão do formulário

    // Captura os valores dos campos
    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      // Envia os dados para a API
      const response = await axiosClient.post("/login", payload);

      // Verifica a resposta
      if (response?.status !== 200) throw new Error(response.data);

      // Extrai os dados retornados
      const { data } = response;

      // Atualiza o contexto e o localStorage
      setToken(data.token);
      setUser(data.user);
      localStorage.setItem("CURRENT_USER", JSON.stringify(data.user));

      // Alerta de sucesso
      alert("Usuário logado!");

      // Redireciona para a página home
      navigate("/home");
    } catch (error) {
      console.error("Erro ao fazer login:", error);

      const errorMessage = document.getElementById("mensagemErro");
      errorMessage.textContent = "Credenciais inválidas. Tente novamente!";
      errorMessage.style.display = "block"; 
    }
  };

  return (
    <ImagemFundo>
      <Container>
        <Header>
          <Logo src={logo} alt="Logo da Aplicação" />
        </Header>
        <Title>ENTRAR</Title>
        <ErrorMessage id="mensagemErro" style={{ display: "none" }} />
        <Form method="post" onSubmit={onSubmit}>
          <Label htmlFor="email">Email:</Label>
          <Input type="email" id="email" ref={emailRef} required />

          <Label htmlFor="senha">Senha:</Label>
          <Input type="password" id="senha" ref={passwordRef} required />

          <SubmitButton type="submit">Entrar</SubmitButton>
        </Form>
        <CadastroText>
          Não tem uma conta?{" "}
          <CadastroLink href="/cadastro">Cadastre-se aqui</CadastroLink>
        </CadastroText>
      </Container>
    </ImagemFundo>
  );
}
