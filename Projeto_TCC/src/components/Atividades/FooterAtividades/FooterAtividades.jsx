import React from "react";
import {
  Footer,
  LinksFooter,
  LinkFooter,
  StoreIcons,
  IconeStore,
  Copyright,
} from "./FooterAtividades.styles";
import apple from "../../Bicicletas/Footer/appstore.png";
import playstore from "../../Bicicletas/Footer/playstore.png";

export default function FooterAtividades() {
  return (
    <Footer>
      <LinksFooter>
        <LinkFooter href="#">Sobre Nós</LinkFooter>
        <LinkFooter href="#">Contato</LinkFooter>
      </LinksFooter>
      <StoreIcons>
        <IconeStore src={apple} alt="App Store" />
        <IconeStore src={playstore} alt="Play Store" />
      </StoreIcons>
      <Copyright>© 2024 BikeTracker. Todos os direitos reservados.</Copyright>{" "}
    </Footer>
  );
}
