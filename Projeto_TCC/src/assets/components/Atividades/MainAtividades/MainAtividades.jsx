import '../Atividades.css'
import ciclista from '../../Atividades/ciclista.jpg';
import ciclista1 from '../../Atividades/fundo_login.jpg';

export default function MainAtividades({ atividades }) {
    return (
        <>
            <div className="banner-container">
                <img src={ciclista1} alt="Banner" class="banner" />
                <div className="banner-text">Sinta a energia de uma pedalada: mova-se com BikeTracker!</div>
            </div>

            <main>
                <section className="intro-section">
                    <div className="container">
                        <h1 className="titulo">Registro de Atividades</h1>
                        <p className="texto-principal">
                            O BikeTracker é um aplicativo de gerenciamento e registro de atividades
                            de ciclismo. Com ele, é possível monitorar e registrar desde uma simples
                            pedalada diária até atividades profissionais de alta performance.
                            Acompanhe seu desempenho, descubra novas rotas e compartilhe suas
                            conquistas com amigos e a comunidade.
                        </p>
                    </div>
                </section>
                <div className="imagem-sobreposta-container">
                    <img
                        src={ciclista}
                        alt="Imagem de Ciclismo"
                        className="imagem-sobreposta" />
                    <div className="texto-sobreposto">
                        Explore o Mundo Sobre Duas Rodas! Desfrute de momentos únicos e viva
                        experiências incríveis com sua bike.
                    </div>
                </div>
                <section className="atividades-section">
                    <div className="container">
                        <h2 className="section-title">Minhas Atividades</h2>
                        <div>
                            <div className="grid-container">
                                <div className="grid-item">
                                    {atividades.map((atividade, index) => (
                                        <div key={index}>
                                            <p>Título: {atividade.titulo}</p>
                                            <p>Distância: {atividade.distancia}</p>
                                            <p>Data: {atividade.data}</p>
                                            <p>Descrição: {atividade.descricao}</p>
                                            <br />
                                            <br />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <a className="linkeditar" href="editarAtividade.php">
                                    <button className="btn-editar">Editar Atividades</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="registrar-atividade-section">
                    <div className="container">
                        <p className="registrar-text">
                            Pronto para adicionar sua próxima aventura? Cadastre uma nova atividade
                            agora mesmo e comece a monitorar seu desempenho.
                        </p>
                        <a href="cadastroBicicleta.php">
                            <button className="btn-cadastrar">Cadastrar Atividade</button>
                        </a>
                    </div>
                </section>
            </main>
        </>
    );
}
