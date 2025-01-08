import styled from "styled-components";

export const MainContainer = styled.main`
  max-width: 1600px;
  margin: 0 auto;
  padding: 10em;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5em;
  padding: 1.5em;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
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

  @media (max-width: 1200px) {
    font-size: 1.1em;
    padding: 1em;
  }

  @media (max-width: 768px) {
    font-size: 1em;
    padding: 0.75em;
  }

  @media (max-width: 480px) {
    font-size: 0.9em;
    padding: 0.5em;
  }
`;

export const EditButton = styled.button`
  background-color: #b2ff59;
  color: #1a1a1a;
  font-weight: bold;
  border: none;
  border-radius: 25px;
  padding: 0.75em 2em;
  font-size: 1.1em;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  margin-top: 1em;
  display: inline-block;
  margin-left: 43%;

  &:hover {
    background-color: #9dff57;
    transform: scale(1.05);
  }
`;
