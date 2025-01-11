import React, { useEffect, useState } from "react";
import axios from "../../../utils/axios_client";
import HeaderAtividades from "../../../components/Atividades/HeaderAtividades/HeaderAtividades";
import MainAtividades from "../../../components/Atividades/MainAtividades/MainAtividades";
import Footer from "../../../components/Footer/Footer";

export default function AtividadesIndex() {
  const [atividades, setAtividades] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAtividades = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/atividades"); // URL da API Laravel
      console.log("Resposta da API:", response.data); // Verifica a estrutura no console
      setAtividades(response.data.data || []); // Acessa a chave "data" da resposta
    } catch (error) {
      console.error(error);
      setError("Erro ao carregar as atividades");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAtividades();
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <HeaderAtividades />
      <MainAtividades atividades={atividades} />
      <Footer />
    </>
  );
}
