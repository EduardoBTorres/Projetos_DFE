import React, { useEffect, useState } from "react";
import HeaderAtividades from '../../../components/Atividades/HeaderAtividades/HeaderAtividades';
import Main from '../../../components/Bicicletas/Main/Main';
import Section from '../../../components/Bicicletas/Section/Section';
import Footer from '../../../components/Footer/Footer';
import axiosClient from "../../../utils/axios_client";  // Usando o axiosClient correto

export default function BicicletasIndex() {
    const [bicicletas, setBicicletas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchBicicletas = async () => {
        try {
          const response = await axiosClient.get("/bicicletas", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}` // Passando o token de autenticação
            }
          });
          console.log("Resposta da API:", response.data); // Verifica a estrutura no console
          setBicicletas(response.data.data || []); // Acessa a chave "data" da resposta
        } catch (error) {
          console.error(error);
          setError("Erro ao carregar as bicicletas");
        } finally {
          setLoading(false);
        }
      };
    
      useEffect(() => {
        fetchBicicletas();
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
            <Main bicicletas={bicicletas} loading={loading} error={error} />
            <Section />
            <Footer />
        </>
    );
}
