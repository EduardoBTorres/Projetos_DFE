import Header from './components/Bicicletas/Header/Header'
import Main from './components/Bicicletas/Main/Main'
import Section from './components/Bicicletas/Section/Section'
import Footer from './components/Bicicletas/Footer/Footer'
import { useState } from 'react';

export default function Bicicletas() {
    const [bicicletas, setBicicletas] = useState([
        { codBicicleta: 27, marca: 'Caloi', modelo: 'Mountain bike', aro: 29 },
        { codBicicleta: 28, marca: 'Monark', modelo: 'bmx', aro: 20 },
        { codBicicleta: 29, marca: 'Shimano', modelo: 'Cycle', aro: 28 },
        { codBicicleta: 30, marca: 'KSW', modelo: 'Corrida', aro: 25 },
        { codBicicleta: 30, marca: 'KSW', modelo: 'Corrida', aro: 25 },
        { codBicicleta: 30, marca: 'KSW', modelo: 'Corrida', aro: 25 },
        { codBicicleta: 30, marca: 'KSW', modelo: 'Corrida', aro: 25 },
        { codBicicleta: 30, marca: 'KSW', modelo: 'Corrida', aro: 25 },
        { codBicicleta: 30, marca: 'KSW', modelo: 'Corrida', aro: 25 },
        { codBicicleta: 30, marca: 'KSW', modelo: 'Corrida', aro: 25 }
    ]);

    return (
        <>
            <Header />
            <Main bicicletas={bicicletas} />
            <Section />
            <Footer />
        </>

    );
}