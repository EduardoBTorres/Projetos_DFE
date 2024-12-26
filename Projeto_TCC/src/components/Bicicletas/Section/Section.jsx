import React from "react";
import { SectionContainer, SectionContent, SectionText, RegisterButton, GlobalStyle } from "./Section.styles";

export default function Section() {
  return (
    <>
      <GlobalStyle /> 
      <SectionContainer>
        <SectionContent>
          <SectionText>
            Pronto para adicionar sua próxima aventura? Cadastre uma nova bicicleta
            agora mesmo e comece a pedalar por aí!
          </SectionText>
          <a href="cadastroBicicleta.php">
            <RegisterButton>Registrar Bicicleta</RegisterButton>
          </a>
        </SectionContent>
      </SectionContainer>
    </>
  );
}
