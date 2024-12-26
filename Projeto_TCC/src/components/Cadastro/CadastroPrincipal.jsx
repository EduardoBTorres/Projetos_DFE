import {
    Container,
    Titulo,
    FormCadastro,
    Label,
    Input,
    BotaoSubmit,
    ContainerPrincipal,
  } from './CadastroPrincipal';
  
  export default function CadastroPrincipal() {
    return (
      <ContainerPrincipal>
      <Container>
        <Titulo>FAZER CADASTRO</Titulo>
        <FormCadastro method="post" encType="multipart/form-data">
          <Label htmlFor="nome">Nome:</Label>
          <Input type="text" id="nome" name="nome" required />
  
          <Label htmlFor="email">Email:</Label>
          <Input type="email" id="email" name="email" required />
  
          <Label htmlFor="cpf">CPF:</Label>
          <Input type="text" id="cpf" name="cpf" required />
  
          <Label htmlFor="senha">Senha:</Label>
          <Input type="password" id="senha" name="senha" required />
  
          <Label htmlFor="imagem">Imagem de Perfil:</Label>
          <Input type="file" id="imagem" name="imagem" className="file" />
  
          <a href="/bicicletas">
            <BotaoSubmit type="submit">Cadastrar</BotaoSubmit>
          </a>
        </FormCadastro>
      </Container>
      </ContainerPrincipal>
    );
  }
  