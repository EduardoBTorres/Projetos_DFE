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
  ImagemSobrepostaContainer,
  ImagemSobreposta,
  TextoSobreposto,
  AtividadesSection,
  SectionTitle,
  GridContainer,
  GridItem,
  BtnEditar,
  RegistrarAtividadeSection,
  RegistrarText,
  BtnCadastrar,
} from "./MainAtividades.styles";

import ciclista from "../../Atividades/ciclista.jpg";
import ciclista1 from "../../Atividades/fundo_login.jpg";

export default function MainAtividades({ atividades }) {
  return (
    <>
      <GlobalStyle /> {/* Reset de estilos globais */}
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
              alta performance. Acompanhe seu desempenho, descubra novas rotas
              e compartilhe suas conquistas com amigos e a comunidade.
            </TextoPrincipal>
          </Container>
        </IntroSection>

        <ImagemSobrepostaContainer>
          <ImagemSobreposta src={ciclista} alt="Imagem de Ciclismo" />
          <TextoSobreposto>
            Explore o Mundo Sobre Duas Rodas! Desfrute de momentos únicos e viva
            experiências incríveis com sua bike.
          </TextoSobreposto>
        </ImagemSobrepostaContainer>

        <AtividadesSection>
          <Container>
            <SectionTitle>Minhas Atividades</SectionTitle>
            <GridContainer>
              {atividades.map((atividade, index) => (
                <GridItem key={index}>
                  <p>Título: {atividade.titulo}</p>
                  <p>Distância: {atividade.distancia} km</p>
                  <p>Data: {atividade.data}</p>
                  <p>Descrição: {atividade.descricao}</p>
                </GridItem>
              ))}
            </GridContainer>
            <BtnEditar href="editarAtividade.php">Editar Atividades</BtnEditar>
          </Container>
        </AtividadesSection>

        <RegistrarAtividadeSection>
          <Container>
            <RegistrarText>
              Pronto para adicionar sua próxima aventura? Cadastre uma nova
              atividade agora mesmo e comece a monitorar seu desempenho.
            </RegistrarText>
            <a href="cadastroBicicleta.php">
              <BtnCadastrar>Cadastrar Atividade</BtnCadastrar>
            </a>
          </Container>
        </RegistrarAtividadeSection>
      </main>
    </>
  );
}
