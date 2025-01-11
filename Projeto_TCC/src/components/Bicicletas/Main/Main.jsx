import React from "react";
import {
  MainContainer,
  GridContainer,
  GridItem,
  EditButton,
} from "./Main.styles.js";

export default function Main({ bicicletas, loading, error }) {
  if (loading) return <p>Carregando bicicletas...</p>;
  if (error) return <p>{error}</p>;

  return (
    <MainContainer>
      <h2>Suas bicicletas:</h2>
      <GridContainer>
        {bicicletas && bicicletas.length > 0 ? (
          bicicletas.map((bicicleta) => (
            <GridItem key={bicicleta.id}>
              <p>Marca: {bicicleta.marca}</p>
              <p>Modelo: {bicicleta.modelo}</p>
              <p>Aro: {bicicleta.aro}</p>
              <p>Cor: {bicicleta.cor}</p>
            </GridItem>
          ))
        ) : (
          <p>Nenhuma bicicleta cadastrada.</p>
        )}
      </GridContainer>
      <div>
        <a href="/editar-bicicleta">
          <EditButton>Editar Bicicletas</EditButton>
        </a>
      </div>
    </MainContainer>
  );
}
