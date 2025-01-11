import React, { useState, useEffect } from "react";
import { useAuthContext } from "../../../contexts/AuthProvider";
import axiosClient from "../../../utils/axios_client";
import { useParams, Navigate } from "react-router-dom";
import HeaderAtividades from "../../../components/Atividades/HeaderAtividades/HeaderAtividades";
import {
  PageWrapper,
  MainContainer,
  FormSection,
  Title,
  Form,
  DeleteButton,
} from '../Users/EditUserStyles';


export default function EditAtividades() {
  const { token } = useAuthContext();
  const { id } = useParams(); // Capturando o ID da URL
  const [formData, setFormData] = useState({
    titulo: "",
    local: "",
    distancia: "",
    tempo: "",
    data: "",
    descricao: "",
  });

  if (!token) {
    return <Navigate to="/" />;
  }

  useEffect(() => {
    const fetchAtividade = async () => {
      try {
        const response = await axiosClient.get(`/atividades/${id}`);
        setFormData({
          titulo: response.data.titulo,
          local: response.data.local,
          distancia: response.data.distancia,
          tempo: response.data.tempo,
          data: response.data.data,
          descricao: response.data.descricao,
        });
      } catch (error) {
        console.error("Erro ao carregar atividade:", error);
        alert("Erro ao carregar atividade. Tente novamente.");
      }
    };
    
    fetchAtividade();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosClient.put(
        `/atividades/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        alert("Atividade atualizada com sucesso!");
      } else {
        alert("Falha ao atualizar atividade.");
      }
    } catch (error) {
      console.error("Erro ao atualizar atividade:", error);
      alert("Erro ao atualizar atividade. Tente novamente.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <HeaderAtividades />
      <PageWrapper>
        <MainContainer>
          <FormSection>
            <Title>Editar Atividades</Title>
            <Form onSubmit={handleSubmit}>
              <p>
                <label htmlFor="titulo">Título:</label>
                <input
                  type="text"
                  name="titulo"
                  id="titulo"
                  value={formData.titulo}
                  onChange={handleChange}
                  required
                />
              </p>
              <p>
                <label htmlFor="local">Local:</label>
                <input
                  type="text"
                  name="local"
                  id="local"
                  value={formData.local}
                  onChange={handleChange}
                  required
                />
              </p>
              <p>
                <label htmlFor="distancia">Distância:</label>
                <input
                  type="text"
                  name="distancia"
                  id="distancia"
                  value={formData.distancia}
                  onChange={handleChange}
                  required
                />
              </p>
              <p>
                <label htmlFor="tempo">Tempo:</label>
                <input
                  type="text"
                  name="tempo"
                  id="tempo"
                  value={formData.tempo}
                  onChange={handleChange}
                  required
                />
              </p>
              <p>
                <label htmlFor="data">Data:</label>
                <input
                  type="text"
                  name="data"
                  id="data"
                  value={formData.data}
                  onChange={handleChange}
                  required
                />
              </p>
              <p>
                <label htmlFor="descricao">Descrição:</label>
                <textarea
                  name="descricao"
                  id="descricao"
                  value={formData.descricao}
                  onChange={handleChange}
                  required
                />
              </p>
              <p>
                <input type="submit" value="Editar" />
              </p>
            </Form>
          </FormSection>

          <FormSection>
            <Title>Excluir Atividade</Title>
            <Form
              action={`http://localhost:8000/api/atividades/${id}`}
              method="delete"
              onSubmit={() =>
                window.confirm("Tem certeza que deseja excluir esta atividade?")
              }
            >
              <DeleteButton type="submit" name="delete">
                Deletar Atividade
              </DeleteButton>
            </Form>
          </FormSection>
        </MainContainer>
      </PageWrapper>
    </>
  );
}
