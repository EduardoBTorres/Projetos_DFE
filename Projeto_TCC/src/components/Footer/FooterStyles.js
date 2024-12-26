// FooterStyles.js
import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-color: #1f2914;
    color: #fff;
    padding: 1.25em;
    text-align: center;
    width: 100%;
`;

export const LinksFooter = styled.div`
    margin-bottom: 1em;
    display: flex;
    justify-content: center;
    gap: 1em;
    flex-wrap: wrap;
`;

export const LinkFooter = styled.a`
    color: #fff;
    text-decoration: none;
    font-size: 1em;
    transition: color 0.3s ease, text-decoration 0.3s ease;

    &:hover {
        text-decoration: underline;
        color: #b2ff59;
    }
`;

export const StoreIcons = styled.div`
    margin-bottom: 1em;
    display: flex;
    justify-content: center;
    gap: 0.625em;
    flex-wrap: wrap;
`;

export const IconeStore = styled.img`
    height: 1.875em;
    max-width: 100%;
    object-fit: contain;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.1);
    }
`;

export const Copyright = styled.div`
    p {
        margin: 0;
    }
`;

// Responsividade
export const GlobalStyle = styled.div`
    @media (max-width: 1024px) {
        ${LinksFooter} {
            gap: 0.75em;
        }

        ${LinkFooter} {
            font-size: 0.9em;
        }

        ${StoreIcons} {
            gap: 0.5em;
        }
    }

    @media (max-width: 768px) {
        ${FooterContainer} {
            padding: 1em;
        }

        ${LinksFooter} {
            flex-direction: column;
            align-items: center;
            gap: 0.5em;
        }

        ${StoreIcons} {
            gap: 0.4em;
        }

        ${IconeStore} {
            height: 1.5em;
        }
    }

    @media (max-width: 480px) {
        ${FooterContainer} {
            padding: 0.8em;
        }

        ${LinkFooter} {
            font-size: 0.8em;
        }

        ${StoreIcons} {
            gap: 0.3em;
        }

        ${IconeStore} {
            height: 1.2em;
        }
    }
`;
