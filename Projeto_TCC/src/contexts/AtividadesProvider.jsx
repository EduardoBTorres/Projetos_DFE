import { createContext, useContext, useState } from "react";
import axiosClient from "../utils/axios_client";
import axios from "axios";

export const AtividadesProvider = createContext({
  data: null,
  loadAtividades: () => {},
  setData: () => {},
  editAtividade: () => {},
  deleteAtividade: () => {},
  addAtividade: () => {},
});

export const useAtividadesProvider = () => useContext(AtividadesProvider);

const AtividadesProviderComponent = ({ children }) => {
  const [data, setData] = useState(null);

  const [loading, setLoading] = useState(false);

  const loadAtividades = async (id) => {
    setLoading(true);
    try {
      const response = await axiosClient.get(`/atividades/${id}`);
      setData(response.data);
    } catch (error) {
      console.error("Erro ao carregar atividade:", error);
    } finally {
      setLoading(false);
    }
  };
  
  const addAtividade = async (formDataAtividade) => {
    try {
      if (!formDataAtividade) throw new Error("Dados da atividade não foram fornecidos.");
  
      // Envia o formulário ao backend
      const response = await axiosClient.post("/atividades", formDataAtividade);
  
      const { message } = response.data;
  
      // Atualiza a lista de atividades
      await loadAtividades();
      return message || "Atividade cadastrada com sucesso!";
    } catch (error) {
      console.error("Erro ao cadastrar atividade:", error);
      throw new Error(error?.response?.data?.message || "Erro ao cadastrar atividade.");
    }
  };

  const editAtividade = async (id, atividade, token) => {
    try {
      const response = await axios.put(
        `http://localhost:8000/api/atividades/${id}`,
        atividade,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      return response.data.message; // Retorna a mensagem de sucesso ou erro.
    } catch (error) {
      console.error("Erro ao editar atividade:", error);
      throw error;
    }
  };
  
  const deleteAtividade = async (id) => {
    try {
      const { data } = await axiosClient.delete(`/atividades/${id}`);
      loadAtividades();
      return data.message;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AtividadesProvider.Provider
      value={{
        data,
        loadAtividades,
        setData,
        addAtividade,
        editAtividade,
        deleteAtividade,
      }}
    >
      {children}
    </AtividadesProvider.Provider>
  );
};

export default AtividadesProviderComponent;
