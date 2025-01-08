import React, { useEffect, useContext } from "react";
import {
  MainContainer,
  GridContainer,
  GridItem,
  EditButton,
} from "./Main.styles.js";
import { BicicletasContext } from "../../../contexts/BicicletasProvider.jsx";

export default function Main() {
  const { data: bicicletas, loadBicicletas } = useContext(BicicletasContext);

  useEffect(() => {
    loadBicicletas();
  }, []);

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
            </GridItem>
          ))
        ) : (
          <p>Nenhuma bicicleta cadastrada.</p>
        )}
      </GridContainer>
      <div>
        <a href="editarBicicleta.php">
          <EditButton>Editar Bicicletas</EditButton>
        </a>
      </div>
    </MainContainer>
  );
}
