import React from "react";
import {
  GlobalStyle,
  BannerContainer,
  Banner,
  BannerText,
  IntroSection,
  Container,
  Titulo,
  TextoPrincipal,
  AtividadesSection,
  SectionTitle,
  GridContainer,
  GridItem,
  RegistrarAtividadeSection,
  RegistrarText,
  BtnCadastrar,
} from "./MainAtividades.styles";
import { Link } from 'react-router-dom';

import ciclista from "../../Atividades/ciclista.jpg";
import ciclista1 from "../../Atividades/fundo_login.jpg";

export default function MainAtividades({ atividades }) {
  const handleDelete = async (atividadeId) => {
    const confirmDelete = window.confirm("Tem certeza que deseja deletar esta atividade?");
    if (confirmDelete) {
      try {
        const response = await axios.delete(`http://localhost:8000/api/atividades/${atividadeId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Certifique-se de usar o token correto
          },
        });
        if (response.status === 200) {
          alert("Atividade deletada com sucesso!");
          // Atualize a lista de atividades aqui se necessário
        } else {
          alert("Falha ao deletar atividade.");
        }
      } catch (error) {
        console.error("Erro ao deletar atividade:", error);
        alert("Erro ao deletar atividade. Tente novamente.");
      }
    }
  };
  return (
    <>
      <GlobalStyle />
      <BannerContainer>
        <Banner src={ciclista1} alt="Banner" />
        <BannerText>
          Sinta a energia de uma pedalada: mova-se com BikeTracker!
        </BannerText>
      </BannerContainer>

      <main>
        <IntroSection>
          <Container>
            <Titulo>Registro de Atividades</Titulo>
            <TextoPrincipal>
              O BikeTracker é um aplicativo de gerenciamento e registro de
              atividades de ciclismo. Com ele, é possível monitorar e registrar
              desde uma simples pedalada diária até atividades profissionais de
              alta performance. Acompanhe seu desempenho, descubra novas rotas e
              compartilhe suas conquistas com amigos e a comunidade.
            </TextoPrincipal>
          </Container>
        </IntroSection>
        <AtividadesSection>
          <Container>
            <SectionTitle>Minhas Atividades</SectionTitle>
            <GridContainer>
              {Array.isArray(atividades) && atividades.length > 0 ? (
                atividades.map((atividade) => (
                  <GridItem key={atividade.id}>
                    <p><strong>Título:</strong> {atividade.titulo}</p>
                    <p><strong>Distância:</strong> {atividade.distancia}</p>
                    <p><strong>Data:</strong> {atividade.data}</p>
                    <p><strong>Descrição:</strong> {atividade.descricao}</p>
                    {/* Botão de edição */}
                    <Link to={`/editar-atividade/${atividade.id}`}>
                      <BtnCadastrar>Editar</BtnCadastrar>
                    </Link>
                    <BtnCadastrar onClick={() => handleDelete(atividade.id)}>Deletar</BtnCadastrar> 
                  </GridItem>
                ))
              ) : (
                <p>Nenhuma atividade encontrada</p>
              )}
            </GridContainer>
          </Container>
        </AtividadesSection>
        <RegistrarAtividadeSection>
          <Container>
            <RegistrarText>
              Pronto para adicionar sua próxima aventura? Cadastre uma nova
              atividade agora mesmo e comece a monitorar seu desempenho.
            </RegistrarText>
            <a href="/cadastro-atividades">
              <BtnCadastrar>Cadastrar Atividade</BtnCadastrar>
            </a>
          </Container>
        </RegistrarAtividadeSection>
      </main>
    </>
  );
}
