import Header from './assets/components/Header/Header'
import Main from './assets/components/Main/Main'
import Section from './assets/components/Section/Section'
import Footer from './assets/components/Footer/Footer'

const Bicicletas = [
  { codBicicleta: 27, marca: 'Caloi', modelo: 'Mountain bike', aro: 29 },
  { codBicicleta: 28, marca: 'Monark', modelo: 'bmx', aro: 20 },
  { codBicicleta: 29, marca: 'Shimano', modelo: 'Cycle', aro: 28 },
  { codBicicleta: 30, marca: 'KSW', modelo: 'Corrida', aro: 25 }
];

export default function App() {
  return (
    <>
      <title>Listagem Bicicletas</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="stylesheet" href="estilos/bicicletas.css" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap"
        rel="stylesheet" />
      <Header />
      <Main bicicletas={Bicicletas} />
      <Section />
      <Footer />
    </>

  );
}

