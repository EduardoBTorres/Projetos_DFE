import React, { useEffect, useState } from "react";
import axios from "axios";
import HeaderAtividades from "../../../components/Atividades/HeaderAtividades/HeaderAtividades";
import MainAtividades from "../../../components/Atividades/MainAtividades/MainAtividades";
import Footer from "../../../components/Footer/Footer"; // Importando o Footer corretamente

export default function AtividadesIndex() {
  const [atividades, setAtividades] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Função para buscar as atividades da API
  const fetchAtividades = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/atividades"); // URL da sua API Laravel
      setAtividades(response.data); // Supondo que sua API retorna uma lista de atividades
    } catch (error) {
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
