import React from "react";
import {
  MainContainer,
  GridContainer,
  GridItem,
  EditButton,
} from "./Main.styles.js";

export default function Main({ bicicletas }) {
  return (
    <MainContainer>
      <h2>Suas bicicletas:</h2>
      <GridContainer>
        <GridItem>
          <p>Marca: </p>
          <p>Modelo: </p>
          <p>Aro: </p>
        </GridItem>
      </GridContainer>
      <div>
        <a href="editarBicicleta.php">
          <EditButton>Editar Bicicletas</EditButton>
        </a>
      </div>
    </MainContainer>
  );
}
