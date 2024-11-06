import './Section.css'
export default function Section() {
    return (
        <section className="registrar-atividade-section">
            <div className="container">
                <p className="registrar-text">
                    Pronto para adicionar sua próxima aventura? Cadastre uma nova bicicleta
                    agora mesmo e comece a pedalar por ai!
                </p>
                <a href="cadastroBicicleta.php">
                    <button className="btn-cadastrar">Registrar Bicicleta</button>
                </a>
            </div>
        </section>
    );
}