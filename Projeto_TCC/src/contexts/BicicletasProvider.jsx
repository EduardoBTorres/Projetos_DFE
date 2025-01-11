import { createContext, useState } from "react";
import axiosClient from "../utils/axios_client";

export const BicicletasContext = createContext({
  data: null,
  loadBicicletas: () => {},
  setData: () => {},
  editBicicleta: () => {},
  deleteBicicleta: () => {},
  addBicicleta: () => {},
});

const BicicletasProvider = ({ children }) => {
  const [data, setData] = useState(null);

  const loadBicicletas = async () => {
    try {
      const { data } = await axiosClient.get('/bicicletas'); // Faça a requisição para a API
      setData(data.data); // Salve os dados no estado
      console.log('Dados carregados', data.data); // Veja o que está sendo retornado no console
    } catch (error) {
      console.log('Erro ao carregar bicicletas:', error); // Verifique o erro se algo der errado
    }
  };
  

  const addBicicleta = async (formDataBicicleta = null) => {
    try {
      if (!formDataBicicleta) throw Error("Bicicleta não informada");
      formDataBicicleta['fornecedor_id'] = 1;
      console.log(`Cadastrar novo bicicleta:`, formDataBicicleta);

      const { data } = await axiosClient.post(`/bicicletas/`, formDataBicicleta, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (!data) throw new Error("Erro ao atualizar bicicleta");
      const _data = data?.data;
      const { message } = data;
      console.log({ _data, message });
      loadBicicletas();
      return message;
    } catch (error) {
      console.error(error);
      return error?.response?.data?.message || "Erro ao atualizar bicicleta";
    }
  };

  const editBicicleta = async (id, formDataBicicleta = null) => {
    try {
      if (!formDataBicicleta) throw Error("Bicicleta não informada");

      console.log(`Atualizar Bicicleta id: ${id}`, { formDataBicicleta });

      formDataBicicleta.append("_method", "put");

      const { data } = await axiosClient.post(
        `/bicicletas/${id}`,
        formDataBicicleta,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (!data) throw new Error("Erro ao atualizar bicicleta");
      const _data = data?.data;
      const { message } = data;
      console.log({ _data, message });
      loadBicicletas();
      return message;
    } catch (error) {
      console.error(error);
      return error?.response?.data?.message || "Erro ao atualizar bicicleta";
    }
  };

  const deleteBicicleta = async (id) => {
    alert(`Remove Bicicleta id: ${id}`);
    const { data } = await axiosClient.delete(`/bicicletas/${id}`);
    const { message } = data;
    console.log({ message });
    loadBicicletas();
    return message;
  };

  return (
    <BicicletasContext.Provider
      value={{
        data,
        loadBicicletas,
        setData,
        addBicicleta,
        editBicicleta,
        deleteBicicleta,
      }}
    >
      {children}
    </BicicletasContext.Provider>
  );
};

export default BicicletasProvider;