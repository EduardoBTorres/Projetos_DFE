import React from "react";
import Footer from "../../components/Footer/Footer";
import HeaderAtividades from "../../components/Atividades/HeaderAtividades/HeaderAtividades";
import {
  StyleGeral,
  BannerContainer,
  Banner,
  BannerText,
  Main,
  Section,
  Title,
  TextPrincipal,
  ImagensContainer,
  ImagemItem,
  TextoSecundario,
} from "./HomeStyle";

export default function Home() {
  return (
    <>
      <StyleGeral>
        <HeaderAtividades />
        <BannerContainer>
          <Banner />
          <BannerText>BikeTracker: O seu aplicativo de ciclismo</BannerText>
        </BannerContainer>
        <Main>
          <Section>
            <Title>Bem-vindo ao BikeTracker</Title>
            <TextPrincipal>
              O BikeTracker é um aplicativo de gerenciamento e registro de
              atividades de ciclismo. Com ele será possível monitorar e
              registrar uma simples pedalada que você pratica no dia a dia a uma
              atividade profissional de ciclismo, esse app vai ser seu
              companheiro diário que irá auxiliar no seu desempenho físico e
              atlético.
            </TextPrincipal>
            <ImagensContainer>
              <ImagemItem>
                <h2>MAPAS</h2>
                <img src="../../public/img/mapas.jpeg" alt="Gráfico" />
              </ImagemItem>
              <ImagemItem>
                <h2>ATIVIDADE</h2>
                <img src="../../public/img/iniciarPedalada.jpeg" alt="Bike" />
              </ImagemItem>
              <ImagemItem>
                <h2>PROGRESSO</h2>
                <img src="../../public/img/progresso.jpeg" alt="Mapa" />
              </ImagemItem>
            </ImagensContainer>
            <TextoSecundario>
              Explore o mundo do ciclismo bem acompanhado com informações
              detalhadas de seu desempenho físico, comparados a metas que você
              mesmo definiu, além disso a aplicação também conta com uma aba,
              onde será possível criar planos de atividades personalizados para
              alcançar determinados objetivos de acordo com seu perfil.
            </TextoSecundario>
          </Section>
        </Main>
        <Footer />
      </StyleGeral>
    </>
  );
}
