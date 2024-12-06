import styled from 'styled-components';

export const Footer = styled.footer`
    font-family: 'Poppins', sans-serif;
    background-color: #1f2914;
    color: #fff;
    padding: 1.5em 0;
    text-align: center;
`;

export const LinksFooter = styled.div`
    margin-bottom: 1em;
`;

export const LinkFooter = styled.a`
    color: #b2ff59;
    text-decoration: none;
    margin: 0 0.5em;

    &:hover {
        text-decoration: underline;
    }
`;

export const StoreIcons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
    margin-bottom: 1em;
`;

export const IconeStore = styled.img`
    height: 40px;
`;

export const Copyright = styled.p`
    font-size: 0.9em;
    color: #888;
`;
