import React, { useState, useEffect } from "react";
import { useAuthContext } from "../../../contexts/AuthProvider";
import axiosClient from "../../../utils/axios_client";
import { Navigate } from "react-router-dom";
import HeaderAtividades from "../../../components/Atividades/HeaderAtividades/HeaderAtividades";
import {
  PageWrapper,
  MainContainer,
  FormSection,
  Title,
  Form,
  DeleteButton,
} from "./EditUserStyles";

export default function EditUser() {
  const { user, token } = useAuthContext();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    cpf: "",
    senha: "",
  });

  if (!token || !user) {
    return <Navigate to="/" />;
  }

  useEffect(() => {
    if (user) {
      setFormData({
        nome: user.name,
        email: user.email,
        cpf: user.cpf,
        senha: "",
      });
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosClient.put(`/users/${user.id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        alert("Perfil atualizado com sucesso!");
      } else {
        alert("Falha ao atualizar perfil.");
      }
    } catch (error) {
      console.error("Erro ao atualizar perfil:", error);
      alert("Erro ao atualizar perfil. Tente novamente.");
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
            <Title>Editar Perfil</Title>
            <Form onSubmit={handleSubmit}>
              <p>
                <label htmlFor="nome">Nome:</label>
                <input
                  type="text"
                  name="nome"
                  id="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                />
              </p>
              <p>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </p>
              <p>
                <label htmlFor="cpf">CPF:</label>
                <input
                  type="text"
                  name="cpf"
                  id="cpf"
                  value={formData.cpf}
                  onChange={handleChange}
                  required
                />
              </p>
              <p>
                <label htmlFor="senha">Senha:</label>
                <input
                  type="password"
                  name="senha"
                  id="senha"
                  value={formData.senha}
                  onChange={handleChange}
                />
              </p>
              <p>
                <input type="submit" value="Editar" />
              </p>
            </Form>
          </FormSection>

          <FormSection>
            <Title>Excluir Conta</Title>
            <Form
              action={`http://localhost:8000/api/users/${user.id}`}
              method="delete"
              onSubmit={() =>
                window.confirm("Tem certeza que deseja excluir sua conta?")
              }
            >
              <DeleteButton type="submit" name="delete">
                Deletar Conta
              </DeleteButton>
            </Form>
          </FormSection>
        </MainContainer>
      </PageWrapper>
    </>
  );
}
