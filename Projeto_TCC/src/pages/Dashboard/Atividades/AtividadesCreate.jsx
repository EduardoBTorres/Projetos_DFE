import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  ImageContainer,
} from "./AtividadesCreateStyles";
import Imagem from "../../../../public/img/cadAtividades.jpg";
import HeaderAtividades from "../../../components/Atividades/HeaderAtividades/HeaderAtividades";
import axiosClient from "../../../utils/axios_client";
import Footer from "../../../components/Footer/Footer";

export default function AtividadesCreate() {
  const [formData, setFormData] = useState({
    titulo: "",
    local: "",
    distancia: "",
    tempo: "",
    data: "",
    descricao: "",
    codBicicleta: "",
  });
  const [bicicletas, setBicicletas] = useState([]); // Lista de bicicletas para o select
  const [disableButton, setDisableButton] = useState(true);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  // Carregar bicicletas no carregamento da página
  useEffect(() => {
    const fetchBicicletas = async () => {
      try {
        const response = await axiosClient.get("/bicicletas", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Certifique-se de que o token está sendo passado
          },
        });

        if (Array.isArray(response.data)) {
          setBicicletas(response.data); // Atualiza o estado com as bicicletas se for um array
        } else {
          console.error(
            "Erro: A resposta de bicicletas não é um array",
            response.data
          );
        }
      } catch (error) {
        console.error("Erro ao carregar bicicletas", error);
      }
    };
    fetchBicicletas();
  }, []);

  // Habilitar/desabilitar botão de submit dependendo do preenchimento do formulário
  useEffect(() => {
    const { titulo, local, distancia, tempo, data, descricao, codBicicleta } =
      formData;
    setDisableButton(
      !(
        titulo &&
        local &&
        distancia > 0 &&
        tempo > 0 &&
        data &&
        descricao &&
        codBicicleta
      )
    );
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axiosClient.post("/atividades", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Utilizando o token do localStorage
        },
      });
      setMessage("Atividade cadastrada com sucesso!");
      setTimeout(() => navigate("/atividades"), 3000); // Redireciona para a página de atividades após sucesso
    } catch (error) {
      console.error(error);
      setMessage("Erro ao cadastrar atividade. Tente novamente.");
    }
  };

  return (
    <>
      <HeaderAtividades />
      <Content>
        <ImageContainer>
          <img src={Imagem} alt="Imagem descritiva" />
        </ImageContainer>
        <FormContainer>
          <Title>Cadastrar Atividade</Title>
          <Form onSubmit={onSubmit}>
            <Label htmlFor="titulo">Título:</Label>
            <Input
              type="text"
              id="titulo"
              name="titulo"
              value={formData.titulo}
              onChange={handleChange}
            />

            <Label htmlFor="local">Local:</Label>
            <Input
              type="text"
              id="local"
              name="local"
              value={formData.local}
              onChange={handleChange}
            />

            <Label htmlFor="distancia">Distância (km):</Label>
            <Input
              type="number"
              id="distancia"
              name="distancia"
              value={formData.distancia}
              onChange={handleChange}
            />

            <Label htmlFor="tempo">Tempo (min):</Label>
            <Input
              type="number"
              id="tempo"
              name="tempo"
              value={formData.tempo}
              onChange={handleChange}
            />

            <Label htmlFor="data">Data:</Label>
            <Input
              type="date"
              id="data"
              name="data"
              value={formData.data}
              onChange={handleChange}
            />

            <Label htmlFor="descricao">Descrição:</Label>
            <Input
              type="text"
              id="descricao"
              name="descricao"
              value={formData.descricao}
              onChange={handleChange}
            />

            <Label htmlFor="codBicicleta">Escolha uma bicicleta:</Label>
            <Select
              id="selecaoBicicleta"
              name="codBicicleta"
              value={formData.codBicicleta}
              onChange={handleChange}
            >
              <Option value="" disabled>
                Selecionar bicicleta
              </Option>
              {bicicletas.length > 0 ? (
                bicicletas.map((bicicleta) => (
                  <Option key={bicicleta.id} value={bicicleta.id}>
                    {bicicleta.marca} {bicicleta.modelo}
                  </Option>
                ))
              ) : (
                <Option disabled>Não há bicicletas disponíveis</Option>
              )}
            </Select>

            <SubmitButton type="submit" disabled={disableButton}>
              {disableButton ? "Preencha todos os campos" : "Cadastrar"}
            </SubmitButton>
          </Form>
          {message && <p>{message}</p>}
        </FormContainer>
      </Content>
      <Footer />
    </>
  );
}
