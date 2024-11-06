import './Footer.css'
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
                    src="imagens/playstore.png"
                    alt="Disponível na Play Store"
                    className="icone-store"
                />
                <img
                    src="imagens/appstore.png"
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