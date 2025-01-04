import {
  ImagemFundo,
  Container,
  Titulo,
  FormCadastro,
  Label,
  Input,
  BotaoSubmit,
  Logo,
  CadastroLink,
  CadastroText,
} from "./CadastroPrincipal";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../../utils/axios_client";
import logo from "../../components/Bicicletas/Header/novologo.png";

export default function CadastroPrincipal() {
  const [disableButton, setDisableButton] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [password, setPassword] = useState("");
  const [cpf, setCpf] = useState("");
  const navigate = useNavigate();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const cpfPattern = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

  const handleName = (event) => {
    setName(event.target.value);
    handleEnableButton();
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
    setEmailInvalid(!emailPattern.test(event.target.value));
    handleEnableButton();
  };

  const handleCpf = (event) => {
    setCpf(event.target.value);
    handleEnableButton();
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
    handleEnableButton();
  };

  const handleEnableButton = () => {
    const isValidCpf = cpfPattern.test(cpf);
    setDisableButton(
      !(name && email && !emailInvalid && password && isValidCpf)
    );
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const payload = {
        name,
        email,
        password,
        cpf,
      };

      const response = await axiosClient.post("/users", payload);
      if (response?.status !== 201) throw new Error(response.data);

      alert("Usuário criado com sucesso!");
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("Erro ao criar usuário. Tente novamente.");
    }
  };

  return (
    <ImagemFundo>
      <Container>
        <Logo src={logo} alt="Logo" />
        <Titulo>FAZER CADASTRO</Titulo>
        <FormCadastro method="post" onSubmit={onSubmit}>
          <Label htmlFor="nome">Nome:</Label>
          <Input
            type="text"
            id="nome"
            name="nome"
            value={name}
            onChange={handleName}
            required
          />

          <Label htmlFor="email">Email:</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmail}
            required
          />
          {emailInvalid && <span style={{ color: "red" }}>Email inválido</span>}

          <Label htmlFor="cpf">CPF:</Label>
          <Input
            type="text"
            id="cpf"
            name="cpf"
            value={cpf}
            onChange={handleCpf}
            required
          />

          <Label htmlFor="senha">Senha:</Label>
          <Input
            type="password"
            id="senha"
            name="senha"
            onChange={handlePassword}
            required
          />

          <BotaoSubmit type="submit" disabled={disableButton}>
            Cadastrar
          </BotaoSubmit>
        </FormCadastro>
        <CadastroText>
          Já possui uma conta?{" "}
          <CadastroLink href="/">Faça login aqui</CadastroLink>
        </CadastroText>
      </Container>
    </ImagemFundo>
  );
}
