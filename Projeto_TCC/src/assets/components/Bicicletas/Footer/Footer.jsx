import '../../../../App.css';
import playstore from './playstore.png'
import apple from './appstore.png'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="links-footer">
                <a href="sobre_nos.php" className="link-footer">
                    Sobre Nós
                </a>{" "}
                |
                <a href="contatos.php" className="link-footer">
                    Contatos
                </a>
            </div>
            <div className="store-icons">
                <img
                    src={playstore}
                    alt="Disponível na Play Store"
                    className="icone-store"
                />
                <img
                    src={apple}
                    alt="Disponível na Apple Store"
                    className="icone-store"
                />
            </div>
            <div className="copyright">
                <p>© 2024 BikeTracker. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}