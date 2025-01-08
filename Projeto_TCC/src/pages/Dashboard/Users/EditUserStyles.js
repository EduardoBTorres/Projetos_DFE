import styled from "styled-components";

export const PageWrapper = styled.div`
  height: 100vh; 
  overflow-y: auto; 
  padding-top: 10em; 
  font-family: 'Poppins', sans-serif;
`;

export const MainContainer = styled.main`
  margin: 2em auto;
  width: 90%;
  max-width: 40em;
`;

export const FormSection = styled.section`
  background-color: #fff;
  border: 0.2em solid #b2ff59;
  border-radius: 1em;
  margin-bottom: 2em;
  padding: 2em;
  box-shadow: 0 0.5em 1em rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h3`
  color: #000;
  font-size: 1.5em;
  margin-bottom: 1.5em;
  text-align: center;
`;

export const Form = styled.form`
  p {
    margin-bottom: 1.5em;
  }

  label {
    display: block;
    margin-bottom: 0.5em;
    font-weight: bold;
    color: #333;
  }

  input[type="text"],
  input[type="email"],
  input[type="password"] {
    width: 100%;
    padding: 0.8em;
    border: 0.1em solid #ccc;
    border-radius: 0.5em;
    box-sizing: border-box;
    font-size: 1em;
    color: #333;
    background-color: #f9f9f9;
  }

  input[type="submit"],
  button {
    background-color: #b2ff59;
    color: #000;
    font-weight: bold;
    border: none;
    border-radius: 0.5em;
    padding: 0.8em 1.5em;
    cursor: pointer;
    font-size: 1em;
  }

  input[type="submit"]:hover,
  button:hover {
    background-color: #9dff57;
  }
`;

export const DeleteButton = styled.button`
  margin-left: 37%;
  background-color: #b2ff59;
  color: #000;
  border: none;
  border-radius: 0.5em;
  padding: 0.8em 1.5em;
  font-size: 1em;
  cursor: pointer;

  &:hover {
    background-color: #9dff57;
  }
`;
