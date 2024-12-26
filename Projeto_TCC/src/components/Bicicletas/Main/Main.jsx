import React from "react";
import { MainContainer, GridContainer, GridItem, EditButton } from "./Main.styles.js";

export default function Main({ bicicletas }) {
  return (
    <MainContainer>
      <h2>Suas bicicletas:</h2>
      <GridContainer>
        {bicicletas.map((bicicleta, index) => (
          <GridItem key={index}>
            <p>Marca: {bicicleta.marca}</p>
            <p>Modelo: {bicicleta.modelo}</p>
            <p>Aro: {bicicleta.aro}</p>
          </GridItem>
        ))}
      </GridContainer>
      <div>
        <a href="editarBicicleta.php">
          <EditButton>Editar Bicicletas</EditButton>
        </a>
      </div>
    </MainContainer>
  );
}
