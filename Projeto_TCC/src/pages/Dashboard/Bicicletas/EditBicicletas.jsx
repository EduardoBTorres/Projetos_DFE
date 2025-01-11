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
} from "../Users/EditUserStyles";

export default function EditBicicletas() {
  const { token } = useAuthContext();
  const [formData, setFormData] = useState({
    marca: "",
    modelo: "",
    aro: "",
    cor: "",
  });
  const { id } = useParams(); // Pegue o id da URL para buscar a bicicleta.

  // Verifique se o token não está definido
  if (!token) {
    return <Navigate to="/" />;
  }

  useEffect(() => {
    // Verifique se o ID está correto
    console.log("Buscando bicicleta com ID:", id);

    // Buscando a bicicleta pela API
    axiosClient
      .get(`/bicicletas/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setFormData(response.data); // Preenche o formulário com os dados da bicicleta
        } else {
          console.error("Erro na resposta da API:", response);
          alert("Falha ao carregar bicicleta.");
        }
      })
      .catch((error) => {
        console.error("Erro ao buscar bicicleta:", error.response || error);
        alert("Erro ao carregar bicicleta. Tente novamente.");
      });
  }, [id, token]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosClient.put(`/bicicletas/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        alert("Bicicleta atualizada com sucesso!");
      } else {
        alert("Falha ao atualizar bicicleta.");
      }
    } catch (error) {
      console.error("Erro ao atualizar bicicleta:", error.response || error);
      alert("Erro ao atualizar bicicleta. Tente novamente.");
    }
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Tem certeza que deseja deletar esta bicicleta?"
    );
    if (confirmDelete) {
      try {
        const response = await axiosClient.delete(`/bicicletas/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          alert("Bicicleta deletada com sucesso!");
          // Redirecionar ou atualizar a lista de bicicletas
        } else {
          alert("Falha ao deletar bicicleta.");
        }
      } catch (error) {
        console.error("Erro ao deletar bicicleta:", error.response || error);
        alert("Erro ao deletar bicicleta. Tente novamente.");
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
            <Title>Editar Bicicleta</Title>
            <Form onSubmit={handleSubmit}>
              <p>
                <label htmlFor="marca">Marca:</label>
                <input
                  type="text"
                  name="marca"
                  id="marca"
                  value={formData.marca}
                  onChange={handleChange}
                  required
                />
              </p>
              <p>
                <label htmlFor="modelo">Modelo:</label>
                <input
                  type="text"
                  name="modelo"
                  id="modelo"
                  value={formData.modelo}
                  onChange={handleChange}
                  required
                />
              </p>
              <p>
                <label htmlFor="aro">Aro:</label>
                <input
                  type="text"
                  name="aro"
                  id="aro"
                  value={formData.aro}
                  onChange={handleChange}
                  required
                />
              </p>
              <p>
                <label htmlFor="cor">Cor:</label>
                <input
                  type="text"
                  name="cor"
                  id="cor"
                  value={formData.cor}
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
            <Title>Excluir Bicicleta</Title>
            <button type="button" onClick={handleDelete}>
              Deletar Bicicleta
            </button>
          </FormSection>
        </MainContainer>
      </PageWrapper>
    </>
  );
}
