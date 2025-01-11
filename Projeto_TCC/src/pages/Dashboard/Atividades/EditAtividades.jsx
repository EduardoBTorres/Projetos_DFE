import React, { useState, useEffect } from "react";
import { useAuthContext } from "../../../contexts/AuthProvider";
import axiosClient from "../../../utils/axios_client";
import { Navigate, useParams } from "react-router-dom";
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
  const { atividade, token } = useAuthContext();
  const [formData, setFormData] = useState({
    titulo: "",
    local: "",
    distancia: "",
    tempo: "",
    data: "",
    descricao: "",
  });
  const { id } = useParams(); // Pegue o id da URL para buscar a atividade.

  // Verifique se o token ou atividade não estão definidos
  if (!token) {
    return <Navigate to="/" />;
  }

  useEffect(() => {
    // Caso a atividade não tenha sido passada no contexto, tente buscá-la pela API
    if (!atividade) {
      axiosClient
        .get(`/atividades/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setFormData(response.data);
        })
        .catch((error) => {
          console.error("Erro ao buscar atividade:", error);
          alert("Erro ao carregar atividade. Tente novamente.");
        });
    } else {
      setFormData({
        titulo: atividade.titulo,
        local: atividade.local,
        distancia: atividade.distancia,
        tempo: atividade.tempo,
        data: atividade.data,
        descricao: atividade.descricao,
      });
    }
  }, [id, token, atividade]);

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

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Tem certeza que deseja deletar esta atividade?");
    if (confirmDelete) {
      try {
        const response = await axiosClient.delete(`/atividades/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          alert("Atividade deletada com sucesso!");
          // Redirecionar ou atualizar a lista de atividades
        } else {
          alert("Falha ao deletar atividade.");
        }
      } catch (error) {
        console.error("Erro ao deletar atividade:", error);
        alert("Erro ao deletar atividade. Tente novamente.");
      }
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
            <Title>Editar Atividade</Title>
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
                  value={formData.endereco}
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
            <button type="button" onClick={handleDelete}>
              Deletar Atividade
            </button>
          </FormSection>
        </MainContainer>
      </PageWrapper>
    </>
  );
}
