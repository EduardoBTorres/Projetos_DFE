import { Link } from 'react-router-dom';
import '../../../../App.css';
import logo from './novologo.png'

export default function Header() {

    return (
        <header className="cabecalho">
            <div className="logo">
                <img src={logo} alt="Logo da Aplicação" />
            </div>
            <nav className="navegacao">
                <ul>
                    <li>
                        <Link to={'/atividades'}>Atividades</Link>
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