import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AtividadesContext from '../../../contexts/AtividadesContext';
import {
  Container,
  Header,
  Logo,
  Nav,
  NavList,
  NavItem,
  NavLink,
  LogoutButton,
  UserInfo,
  Content,
  FormContainer,
  Title,
  Form,
  Label,
  Input,
  Select,
  Option,
  SubmitButton,
  Footer, // Adicionado para reaproveitamento
  FooterLinks,
  FooterLink,
  StoreIcons,
  StoreIcon,
  Copyright
} from './AtividadesCreateStyles';
import axios from 'axios';

export default function AtividadesCreate() {
  const { bicicletas } = useContext(AtividadesContext); // Supondo que 'bicicletas' esteja no contexto
  const [formData, setFormData] = useState({
    titulo: '',
    local: '',
    distancia: '',
    tempo: '',
    data: '',
    descricao: '',
    codBicicleta: ''
  });
  const [disableButton, setDisableButton] = useState(true);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const { titulo, local, distancia, tempo, data, descricao, codBicicleta } = formData;
    setDisableButton(
      !(titulo && local && distancia > 0 && tempo > 0 && data && descricao && codBicicleta)
    );
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost/api/atividades', formData);
      setMessage('Atividade cadastrada com sucesso!');
      setTimeout(() => navigate('/atividades'), 3000);
    } catch (error) {
      console.error(error);
      setMessage('Erro ao cadastrar atividade. Tente novamente.');
    }
  };

  return (
    <>
      <Header>
        <Logo src="imagens/novologo.png" alt="Logo da Aplicação" />
        <Nav>
          <NavList>
            <NavItem><NavLink href="#">Home</NavLink></NavItem>
            <NavItem><NavLink href="indexAtividades.php">Atividades</NavLink></NavItem>
            <NavItem><NavLink href="listagemBicicleta.php">Bicicletas</NavLink></NavItem>
            <NavItem><NavLink href="rotas.php">Rotas</NavLink></NavItem>
            <NavItem><NavLink href="editarPerfil.php">Perfil</NavLink></NavItem>
          </NavList>
          <form action="logica/logica_usuario.php" method="post">
            <LogoutButton type="submit" name="sair">Sair</LogoutButton>
          </form>
          <UserInfo>Bem-vindo</UserInfo>
        </Nav>
      </Header>
      <Content>
        <FormContainer>
          <Title>Cadastrar Atividade</Title>
          <Form method="post" onSubmit={onSubmit}>
            <Label htmlFor="titulo">Título:</Label>
            <Input
              type="text"
              id="titulo"
              name="titulo"
              value={formData.titulo}
              onChange={handleChange}
              required
            />

            <Label htmlFor="local">Local:</Label>
            <Input
              type="text"
              id="local"
              name="local"
              value={formData.local}
              onChange={handleChange}
              required
            />

            <Label htmlFor="distancia">Distância (km):</Label>
            <Input
              type="number"
              id="distancia"
              name="distancia"
              value={formData.distancia}
              onChange={handleChange}
              required
            />

            <Label htmlFor="tempo">Tempo (min):</Label>
            <Input
              type="number"
              id="tempo"
              name="tempo"
              value={formData.tempo}
              onChange={handleChange}
              required
            />

            <Label htmlFor="data">Data:</Label>
            <Input
              type="date"
              id="data"
              name="data"
              value={formData.data}
              onChange={handleChange}
              required
            />

            <Label htmlFor="descricao">Descrição:</Label>
            <Input
              type="text"
              id="descricao"
              name="descricao"
              value={formData.descricao}
              onChange={handleChange}
              required
            />

            <Label htmlFor="codBicicleta">Escolha uma bicicleta:</Label>
            <Select
              id="selecaoBicicleta"
              name="codBicicleta"
              value={formData.codBicicleta}
              onChange={handleChange}
              required
            >
              <Option value="" disabled>Selecionar bicicleta</Option>
              {bicicletas.map((bicicleta) => (
                <Option key={bicicleta.id} value={bicicleta.id}>
                  {bicicleta.nome}
                </Option>
              ))}
            </Select>

            <SubmitButton type="submit" disabled={disableButton}>Cadastrar</SubmitButton>
            {message && <p>{message}</p>}
          </Form>
        </FormContainer>
      </Content>
      <Footer />
    </>
  );
}
