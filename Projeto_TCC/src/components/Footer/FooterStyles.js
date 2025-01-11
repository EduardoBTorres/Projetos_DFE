import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-color: #1f2914;
    font-family: poppins, sans-serif;
    color: #fff;
    padding: 1.25em;
    text-align: center;
    width: 100%;
    position: relative;
    bottom: 0; /* Alinha no final */
    left: 0;
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
