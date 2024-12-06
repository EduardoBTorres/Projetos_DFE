import styled, { createGlobalStyle } from "styled-components";

/* Reset global de margens, paddings e estilo padrão */
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: #f9f9f9;
  }

  a {
    text-decoration: none;
  }
`;

export const SectionContainer = styled.section`
  width: 100%;
  background-color: #f9f9f9;
  padding: 2em 0;

  @media (max-width: 768px) {
    padding: 1.5em 0;
  }

  @media (max-width: 480px) {
    padding: 1em 0;
  }
`;

export const SectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding: 1.5em;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: #fff;

  @media (max-width: 1024px) {
    padding: 1.5em 1em;
  }
`;

export const SectionText = styled.p`
  font-size: 1.2em;
  line-height: 1.6;
  color: #555;
  margin-bottom: 1.5em;
  text-align: justify;

  @media (max-width: 1024px) {
    font-size: 1.1em;
    text-align: left;
  }

  @media (max-width: 768px) {
    font-size: 1em;
    margin-bottom: 1em;
  }

  @media (max-width: 480px) {
    font-size: 0.95em;
    line-height: 1.4;
  }
`;

export const RegisterButton = styled.button`
  background-color: #b2ff59;
  color: #1a1a1a;
  font-weight: bold;
  border: none;
  border-radius: 25px;
  padding: 0.75em 2em;
  font-size: 1.1em;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #9dff57;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: 1em;
    padding: 0.6em 1.8em;
  }

  @media (max-width: 480px) {
    padding: 0.5em 1.5em;
    font-size: 0.9em;
  }
`;
