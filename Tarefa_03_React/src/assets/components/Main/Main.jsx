import './Main.css'
export default function Main({bicicletas}) {
    return (
        <main>
            <h2>
                Suas bicicletas:
            </h2>
            <div className="grid-container">
                <div className="grid-item">
                    <p>Marca: {bicicletas.marca}</p>
                    <p>Modelo: {bicicletas}</p>
                    <p>Aro: {/*?php echo htmlspecialchars($value['aro']); ?*/}</p>
                    <p>Cor: {/*?php echo htmlspecialchars($value['cor']); ?*/}</p>
                </div>
                <div>
                    {/* Botão de Edição */}
                    <a href="editarBicicleta.php">
                        <button className="btn-editar">Editar Bicicletas</button>
                    </a>
                </div>
            </div>
        </main>
    );
}