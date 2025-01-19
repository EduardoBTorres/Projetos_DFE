import React, { useState, useEffect } from "react";
import { useAuthContext } from "../../../contexts/AuthProvider";
import { useUsersContext } from "../../../contexts/UsersProvider";
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
  const { token } = useAuthContext();
  const { currentUser, updateUser, deleteUser } = useUsersContext();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cpf: "",
    senha: "",
  });

  if (!token || !currentUser) {
    return <Navigate to="/" />;
  }

  useEffect(() => {
    if (currentUser) {
      setFormData({
        name: currentUser.name || "",
        email: currentUser.email || "",
        cpf: currentUser.cpf || "",
        senha: "", // Mantemos vazio inicialmente
      });
    }
  }, [currentUser]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Preparar o payload com os nomes corretos
      const payload = {
        name: formData.name,
        email: formData.email,
        password: formData.senha, // Backend espera "password" em vez de "senha"
      };
  
      // Remover o campo `password` se estiver vazio
      if (!payload.password) {
        delete payload.password;
      }
  
      // Enviar atualização
      const updatedUser = await updateUser(payload);
      alert("Perfil atualizado com sucesso!");
    } catch (error) {
      alert("Erro ao atualizar perfil. Tente novamente.");
    }
  };
  
  const handleDelete = async (e) => {
    e.preventDefault();

    if (window.confirm("Tem certeza que deseja excluir sua conta?")) {
      try {
        await deleteUser();
        alert("Conta excluída com sucesso!");
      } catch (error) {
        alert("Erro ao excluir conta. Tente novamente.");
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
            <Title>Editar Perfil</Title>
            <Form onSubmit={handleSubmit}>
              <p>
                <label htmlFor="name">Nome:</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
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
                  readOnly
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
                  placeholder="Deixe em branco para não alterar"
                />
              </p>
              <p>
                <input type="submit" value="Editar" />
              </p>
            </Form>
          </FormSection>

          <FormSection>
            <Title>Excluir Conta</Title>
            <form onSubmit={handleDelete}>
              <DeleteButton type="submit">Deletar Conta</DeleteButton>
            </form>
          </FormSection>
        </MainContainer>
      </PageWrapper>
    </>
  );
}
