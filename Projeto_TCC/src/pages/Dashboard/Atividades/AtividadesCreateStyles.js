import styled from 'styled-components';

export const Content = styled.section`
  font-family: 'Poppins', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #121212;
  margin-top: 10em;
  width: 100%;
  height: 100%;
  padding: 0 2em;
`;

export const ImageContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 1em;
  }
`;

export const FormContainer = styled.div`
  padding: 2em;
  border: 0.2em solid #b2ff59;
  border-radius: 1em;
  width: 40%;
  margin: 0 auto;
  background-color: #1f1f1f;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const Title = styled.h3`
  color: #b2ff59;
  margin-bottom: 1em;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

export const Label = styled.label`
  margin-bottom: 0.5em;
  color: #b2ff59;
`;

export const Input = styled.input`
  padding: 0.8em;
  margin-bottom: 1em;
  border: 0.1em solid #ccc;
  border-radius: 0.5em;
  background-color: #333;
  color: #fff;
`;

export const Select = styled.select`
  padding: 0.8em;
  border: 0.1em solid #ccc;
  border-radius: 0.5em;
  background-color: #333;
  color: #fff;
  margin-bottom: 1.5em;
`;

export const Option = styled.option`
  color: #000;
  background-color: #b2ff59;
`;

export const SubmitButton = styled.button`
  background-color: #b2ff59;
  color: #000;
  padding: 0.8em;
  border: none;
  border-radius: 0.5em;
  cursor: pointer;
  &:hover {
    background-color: #9dff57;
  }
`;

export const Footer = styled.footer`
  background-color: #1f2914;
  padding: 1em;
  text-align: center;
  color: #fff;
`;

export const FooterLinks = styled.div`
  margin-bottom: 0.5em;
`;

export const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin: 0 0.5em;
  &:hover {
    text-decoration: underline;
  }
`;

export const StoreIcons = styled.div`
  margin-bottom: 0.5em;
`;

export const StoreIcon = styled.img`
  height: 2em;
  margin: 0 0.5em;
`;

export const Copyright = styled.p`
  font-size: 0.875em;
`;
