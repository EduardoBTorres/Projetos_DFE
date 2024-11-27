
export default function CadastroPrincipal() {
    return (
        <div className="container">
            <header className="cabecalho">
                <div className="logo">
                    
                </div>
            </header>
            <h1 className="titulo">FAZER CADASTRO</h1>
            <form
                action="logica/logica_usuario.php"
                method="post"
                encType="multipart/form-data"
                className="form-cadastro"
                onsubmit="validarFormulario()"
            >
                <label htmlFor="nome" className="label">
                    Nome:
                </label>
                <input type="text" id="nome" name="nome" className="input" required="" />
                <label htmlFor="email" className="label">
                    Email:
                </label>
                <input type="email" id="email" name="email" className="input" required="" />
                <label htmlFor="cpf" className="label">
                    CPF:
                </label>
                <input type="text" id="cpf" name="cpf" className="input" required="" />
                <label htmlFor="senha" className="label">
                    Senha:
                </label>
                <input
                    type="password"
                    id="senha"
                    name="senha"
                    className="input"
                    required=""
                />
                <label htmlFor="imagem" className="label">
                    Imagem de Perfil:
                </label>
                <input type="file" id="imagem" name="imagem" className="input-file" />
                <button
                    type="submit"
                    id="cadastrar"
                    name="cadastrar"
                    value="Cadastrar"
                    className="botao-submit"
                >
                    Cadastrar
                </button>
            </form>
            <p className="login">
                Já tem uma conta?{" "}
                <a href="index.php" className="botao-login">
                    Faça login aqui
                </a>
            </p>
        </div>
    );
}

