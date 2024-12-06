import React from "react";
import playstore from "./playstore.png";
import apple from "./appstore.png";
import { 
    FooterContainer, 
    LinksFooter, 
    LinkFooter, 
    StoreIcons, 
    IconeStore, 
    Copyright 
} from "./FooterStyles";

export default function Footer() {
    return (
        <FooterContainer>
            <LinksFooter>
                <LinkFooter href="sobre_nos.php">Sobre Nós</LinkFooter> |
                <LinkFooter href="contatos.php">Contatos</LinkFooter>
            </LinksFooter>
            <StoreIcons>
                <IconeStore
                    src={playstore}
                    alt="Disponível na Play Store"
                />
                <IconeStore
                    src={apple}
                    alt="Disponível na Apple Store"
                />
            </StoreIcons>
            <Copyright>
                <p>© 2024 BikeTracker. Todos os direitos reservados.</p>
            </Copyright>
        </FooterContainer>
    );
}
