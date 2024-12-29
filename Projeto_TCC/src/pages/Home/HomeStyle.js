import styled from 'styled-components';

export const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 40em;
  margin-bottom: 1.25em;
  padding-bottom: 1em;
`;

export const Banner = styled.img`
  width: 100%;
  height: 45em;
  object-fit: cover;
`;

export const BannerText = styled.div`
  position: absolute;
  top: 50%;
  left: 1.25em;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 0.625em 1.25em;
  font-size: 4.5em;
  border-radius: 0.3125em;
  max-width: 45%;
  text-align: center;
`;

export const Main = styled.main`
  padding: 1.25em;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

export const Section = styled.section`
  max-width: 70em;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 1.25em;
  font-size: 2em;
  margin-top: 3em;
`;

export const TextPrincipal = styled.p`
  text-align: justify;
  margin-bottom: 2.5em;
  font-size: 1.125em;
  line-height: 1.5;
`;

export const ImagensContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
`;

export const ImagemItem = styled.div`
  text-align: center;
  flex-basis: calc(33.33% - 0.666em);

  img {
    max-width: 100%;
    height: auto;
  }
`;

export const TextoSecundario = styled.p`
  text-align: justify;
  margin-bottom: 2.5em;
  font-size: 1.125em;
  line-height: 1.5;
`;

export const ToggleButton = styled.button`
  background-color: #b2ff59;
  color: #000;
  font-weight: bold;
  border: none;
  border-radius: 1em;
  padding: 0.625em 1.25em;
  font-size: 1em;
  cursor: pointer;
`;

export const AsideInformacoes = styled.aside`
  background-color: #b2ff59;
  padding: 1.25em;
  border-radius: 0.3125em;
  text-align: justify;
  max-width: 50%;
`;

export const AsideTitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 0.625em;
  margin-top: 3em;
  color: #000;
`;
