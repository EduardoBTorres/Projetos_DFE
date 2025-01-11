import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//import { AtividadesProvider } from '../../../contexts/AtividadesProvider';
import {
  Content,
  FormContainer,
  Title,
  Form,
  Label,
  Input,
  Select,
  Option,
  SubmitButton,
  ImageContainer
} from "./AtividadesCreateStyles";
import Imagem from '../../../../public/img/cadAtividades.jpg'
import HeaderAtividades from "../../../components/Atividades/HeaderAtividades/HeaderAtividades";
import axiosClient from "../../../utils/axios_client";
import Footer from "../../../components/Footer/Footer";

export default function AtividadesCreate() {
  // const { bicicletas } = useContext(AtividadesContext); // Supondo que 'bicicletas' esteja no contexto
  // const [formData, setFormData] = useState({
  //   titulo: '',
  //   local: '',
  //   distancia: '',
  //   tempo: '',
  //   data: '',
  //   descricao: '',
  //   codBicicleta: ''
  // });
  // const [disableButton, setDisableButton] = useState(true);
  // const [message, setMessage] = useState(null);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const { titulo, local, distancia, tempo, data, descricao, codBicicleta } = formData;
  //   setDisableButton(
  //     !(titulo && local && distancia > 0 && tempo > 0 && data && descricao && codBicicleta)
  //   );
  // }, [formData]);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value
  //   }));
  // };

  // const onSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const response = await axiosClient.post('/atividades', formData);
  //     setMessage('Atividade cadastrada com sucesso!');
  //     setTimeout(() => navigate('/atividades'), 3000);
  //   } catch (error) {
  //     console.error(error);
  //     setMessage('Erro ao cadastrar atividade. Tente novamente.');
  //   }
  // };

  return (
    <>
      <HeaderAtividades />
      <Content>
        <ImageContainer>
          <img src={Imagem} alt="Imagem descritiva" />
        </ImageContainer>
        <FormContainer>
          <Title>Cadastrar Atividade</Title>
          <Form method="post">
            <Label htmlFor="titulo">Título:</Label>
            <Input type="text" id="titulo" name="titulo" />

            <Label htmlFor="local">Local:</Label>
            <Input type="text" id="local" name="local" />

            <Label htmlFor="distancia">Distância (km):</Label>
            <Input type="number" id="distancia" name="distancia" />

            <Label htmlFor="tempo">Tempo (min):</Label>
            <Input type="number" id="tempo" name="tempo" />

            <Label htmlFor="data">Data:</Label>
            <Input type="date" id="data" name="data" />

            <Label htmlFor="descricao">Descrição:</Label>
            <Input type="text" id="descricao" name="descricao" />

            <Label htmlFor="codBicicleta">Escolha uma bicicleta:</Label>
            <Select id="selecaoBicicleta" name="codBicicleta">
              <Option value="" disabled>
                Selecionar bicicleta
              </Option>

              <Option></Option>
            </Select>

            <SubmitButton type="submit">Cadastrar</SubmitButton>
          </Form>
        </FormContainer>
      </Content>
      <Footer />
    </>
  );
}
