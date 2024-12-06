import styled from "styled-components";

export const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 50vh;
  overflow: hidden;
`;

export const Banner = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(70%);
`;

export const BannerText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(26, 26, 26, 0.6);
  color: #fff;
  padding: 1em 2em;
  font-size: 2.5em;
  border-radius: 10px;
  text-align: center;
  max-width: 80%;
`;

export const IntroSection = styled.section`
  padding: 2em;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

export const Titulo = styled.h1`
  font-size: 2.5em;
  margin-bottom: 0.5em;
  color: #1a1a1a;
`;

export const TextoPrincipal = styled.p`
  font-size: 1.1em;
  color: #555;
  text-align: justify;
`;

export const ImagemSobrepostaContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 2em;
`;

export const ImagemSobreposta = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

export const TextoSobreposto = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 1em 2em;
  border-radius: 10px;
  font-size: 3em;
  text-align: center;
`;

export const AtividadesSection = styled.section`
  padding: 2em;
`;

export const SectionTitle = styled.h2`
  font-size: 2em;
  margin-bottom: 1.5em;
  color: #1a1a1a;
  text-align: center;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5em;
`;

export const GridItem = styled.div`
  background-color: #f5f5f5;
  padding: 1.5em;
  border-radius: 0.625em;
  box-shadow: 0 0.125em 0.25em rgba(0, 0, 0, 0.1);
  font-size: 1.2em;
  text-align: justify;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const BtnEditar = styled.a`
  display: inline-block;
  text-decoration: none;
  background-color: #b2ff59;
  color: #1a1a1a;
  font-weight: bold;
  border: none;
  border-radius: 25px;
  padding: 0.75em 2em;
  font-size: 1.2em;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 1em;

  &:hover {
    background-color: #9dff57;
    transform: scale(1.05);
  }
`;

export const RegistrarAtividadeSection = styled.section`
  padding: 2em;
`;

export const RegistrarText = styled.p`
  font-size: 1.2em;
  color: #555;
  margin-bottom: 1.5em;
  text-align: justify;
`;

export const BtnCadastrar = styled.button`
  background-color: #b2ff59;
  color: #1a1a1a;
  font-weight: bold;
  border: none;
  border-radius: 25px;
  padding: 0.75em 2em;
  font-size: 1.1em;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #9dff57;
    transition: transform 0.3s ease;
  }
`;
