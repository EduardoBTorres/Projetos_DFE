import { createContext, useState } from "react";
import axiosClient from "../utils/axios_client";

export const AtividadesContext = createContext({
  data: null,
  loadAtividades: () => {},
  setData: () => {},
  editAtividade: () => {},
  deleteAtividade: () => {},
  addAtividade: () => {},
});

const AtividadesProvider = ({ children }) => {
  const [data, setData] = useState(null);

  const loadAtividades = async (id = null) => {
    const url = id ? `/atividades/${id}` : `/atividades`;
    try {
      const { data } = await axiosClient.get(url);
      const _data = data?.data;
      console.log({ _data });

      if (!_data) throw new Error("Erro ao carregar atividades");

      Array.isArray(_data) && _data.reverse();
      setData(_data);
    } catch (error) {
      console.log(error);
    }
  };

  const addAtividade = async (formDataAtividade = null) => {
    try {
      if (!formDataAtividade) throw Error("Atividade não informada");
      formDataAtividade['fornecedor_id'] = 1;
      console.log(`Cadastrar nova atividade:`, formDataAtividade);

      const { data } = await axiosClient.post(`/atividades/`, formDataAtividade, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (!data) throw new Error("Erro ao atualizar atividade");
      const _data = data?.data;
      const { message } = data;
      console.log({ _data, message });
      loadAtividades();
      return message;
    } catch (error) {
      console.error(error);
      return error?.response?.data?.message || "Erro ao atualizar atividade";
    }
  };

  const editAtividade = async (id, formDataAtividade = null) => {
    try {
      if (!formDataAtividade) throw Error("Atividade não informada");

      console.log(`Atualizar Atividade id: ${id}`, { formDataAtividade });

      formDataAtividade.append("_method", "put");

      const { data } = await axiosClient.post(
        `/atividades/${id}`,
        formDataAtividade,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (!data) throw new Error("Erro ao atualizar atividade");
      const _data = data?.data;
      const { message } = data;
      console.log({ _data, message });
      loadAtividades();
      return message;
    } catch (error) {
      console.error(error);
      return error?.response?.data?.message || "Erro ao atualizar atividade";
    }
  };

  const deleteAtividade = async (id) => {
    alert(`Remove Atividade id: ${id}`);
    const { data } = await axiosClient.delete(`/atividades/${id}`);
    const { message } = data;
    console.log({ message });
    loadAtividades();
    return message;
  };

  return (
    <AtividadesContext.Provider
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
    </AtividadesContext.Provider>
  );
};

export default AtividadesProvider;
