import React, { useState, useEffect } from "react";
import { useAuthContext } from "../../../contexts/AuthProvider";
import { useAtividadesProvider } from "../../../contexts/AtividadesProvider";
import { Navigate, useParams } from "react-router-dom";
import HeaderAtividades from "../../../components/Atividades/HeaderAtividades/HeaderAtividades";
import {
  PageWrapper,
  MainContainer,
  FormSection,
  Title,
  Form,
  DeleteButton,
} from "../Users/EditUserStyles";

export default function EditAtividades() {
  const { token } = useAuthContext();
  const { loadAtividades, editAtividade, data, loading } =
    useAtividadesProvider();
  const [formData, setFormData] = useState({
    titulo: "",
    endereco: "",
    distancia: "",
    tempo: "",
    data: "",
    descricao: "",
  });
  const { id } = useParams(); // Pegue o id da URL para buscar a atividade.

  if (!token) {
    return <Navigate to="/" />;
  }

  // Carregar a atividade do contexto
  useEffect(() => {
    if (id) {
      loadAtividades(id);
    }
  }, [id]);

  useEffect(() => {
    if (data) {
      setFormData({
        titulo: data.titulo || "",
        endereco: data.endereco || "",
        distancia: data.distancia || "",
        tempo: data.tempo || "",
        data: data.data || "",
        descricao: data.descricao || "",
      });
    }
  }, [data]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await editAtividade(id, formData, token); // Passe o token como argumento.
      if (response === "Atividade atualizada com sucesso!") {
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
    const confirmDelete = window.confirm(
      "Tem certeza que deseja deletar esta atividade?"
    );
    if (confirmDelete) {
      try {
        const response = await deleteAtividade(id);
        if (response === "Atividade deletada com sucesso!") {
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

  if (loading) return <p>Carregando...</p>;

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
                <label htmlFor="endereco">Local:</label>
                <input
                  type="text"
                  name="endereco" // Corrigido de "local" para "endereco"
                  id="endereco"
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
