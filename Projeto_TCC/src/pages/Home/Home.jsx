import React from 'react';
import Footer from '../../components/Footer/Footer';
import HeaderAtividades from '../../components/Atividades/HeaderAtividades/HeaderAtividades';
import {
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
  ToggleButton,
  AsideInformacoes,
  AsideTitle
} from './HomeStyle';

export default function Home() {
  return (
    <>
      <HeaderAtividades />
      <BannerContainer>
        <Banner src="imagens/telainicial.jpg" alt="Banner" />
        <BannerText>
          BikeTracker: O seu aplicativo de ciclismo
        </BannerText>
      </BannerContainer>
      <Main>
        <Section>
          <Title>Bem-vindo ao BikeTracker</Title>
          <TextPrincipal>
            O BikeTracker é um aplicativo de gerenciamento e registro de
            atividades de ciclismo. Com ele será possível monitorar e registrar
            uma simples pedalada que você pratica no dia a dia a uma atividade
            profissional de ciclismo, esse app vai ser seu companheiro diário
            que irá auxiliar no seu desempenho físico e atlético.
          </TextPrincipal>
          <ImagensContainer>
            <ImagemItem>
              <h2>MAPAS</h2>
              <img src="imagens/mapas.jpeg" alt="Gráfico" />
            </ImagemItem>
            <ImagemItem>
              <h2>ATIVIDADE</h2>
              <img src="imagens/iniciarPedalada.jpeg" alt="Bike" />
            </ImagemItem>
            <ImagemItem>
              <h2>PROGRESSO</h2>
              <img src="imagens/progresso.jpeg" alt="Mapa" />
            </ImagemItem>
          </ImagensContainer>
          <TextoSecundario>
            Explore o mundo do ciclismo bem acompanhado com informações
            detalhadas de seu desempenho físico, comparados a metas que você
            mesmo definiu, além disso a aplicação também conta com uma aba, onde
            será possível criar planos de atividades personalizados para
            alcançar determinados objetivos de acordo com seu perfil.
          </TextoSecundario>
          <ToggleButton id="toggle-info">
            Mostrar Informações Adicionais
          </ToggleButton>
        </Section>
        <AsideInformacoes id="info-adicionais">
          <AsideTitle>TECNOLOGIA ALIADA AO ESPORTE</AsideTitle>
          <p>
            O BikeTracker conta com tecnologias utilizando recursos de
            geolocalização do seu dispositivo. Através dessas ferramentas, o app
            consegue acessar informações relacionadas a clima, temperatura,
            velocidade de pedalada e diversos outros recursos que irão auxiliar
            na sua utilização.
          </p>
          <h3>Por que escolher o BikeTracker?</h3>
          <ul>
            <li>Intuitivo e fácil de usar</li>
            <li>Personalizado para você</li>
            <li>Seguro e confiável</li>
          </ul>
        </AsideInformacoes>
      </Main>
      <Footer />
    </>
  );
}