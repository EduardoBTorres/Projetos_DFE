import '../../../../App.css';

export default function Main({ bicicletas }) {
  return (
    <main>
      <h2>Suas bicicletas:</h2>
      <div className="grid-container">
        {bicicletas.map((bicicleta, index) => (
          <div key={index} className="grid-item">
            <p>Marca: {bicicleta.marca}</p>
            <p>Modelo: {bicicleta.modelo}</p>
            <p>Aro: {bicicleta.aro}</p>
          </div>
        ))}
      </div>
      <div>
        <a href="editarBicicleta.php">
          <button className="btn-editar">Editar Bicicletas</button>
        </a>
      </div>
    </main>
  );
}
