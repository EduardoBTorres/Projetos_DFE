import '../Atividades.css'
import logo from '../../Bicicletas/Header/novologo.png';
import { Link } from 'react-router-dom';

export default function HeaderAtividades() {
  return (
    <header className="cabecalho">
      <div className="logo">
        <img src={logo} alt="Logo da Aplicação" />
      </div>
      <nav className="navegacao">
        <ul>
          <li>
            <a href="pag_inicial.php">Home</a>
          </li>
          <li>
            <Link to={"/bicicletas"}>Bicicletas</Link>
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
          <span>
            Bem vindo
          </span>
        </div>
      </nav>
    </header>
  );
}


