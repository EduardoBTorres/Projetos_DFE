import './Header.css'
export default function Header() {

    return (
        <header className="cabecalho">
            <div className="logo">
                <img src="novologo.png" alt="Logo da Aplicação" />
            </div>
            <nav className="navegacao">
                <ul>
                    <li>
                        <a href="indexAtividades.php">Atividades</a>
                    </li>
                    <li>
                        <a href="listagemBicicleta.php">Bicicletas</a>
                    </li>
                    <li>
                        <a href="rotas.php">Rotas</a>
                    </li>
                    <li>
                        <a href="editarPerfil.php">Perfil</a>
                    </li>
                </ul>
                <form action="logica/logica_usuario.php" method="post">
                    <input
                        type="submit"
                        className="btn-sair"
                        name="sair"
                        defaultValue="Sair"
                    />
                </form>
                <div className="user-info">
                    <span>Bem vindo</span>
                </div>
            </nav>
        </header>
    );
}