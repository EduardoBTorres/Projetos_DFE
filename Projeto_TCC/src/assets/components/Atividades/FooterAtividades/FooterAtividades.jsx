import '../Atividades.css'
import apple from '../../Bicicletas/Footer/appstore.png';
import playstore from '../../Bicicletas/Footer/playstore.png';

export default function FooterAtividades() {
    return (
        <footer className="footer">
            <div className="links-footer">
                <a href="#" className="link-footer">
                    Sobre Nós
                </a>
                <a href="#" className="link-footer">
                    Contato
                </a>
            </div>
            <div className="store-icons">
                <img src={apple} alt="Play Store" className="icone-store" />
                <img src={playstore} alt="Apple Store" className="icone-store" />
            </div>
            <p className="copyright">© 2024 BikeTracker. Todos os direitos reservados.</p>
        </footer>
    );
}

