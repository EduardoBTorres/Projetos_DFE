import Header from './assets/components/Bicicletas/Header/Header'
import Main from './assets/components/Bicicletas/Main/Main'
import Section from './assets/components/Bicicletas/Section/Section'
import Footer from './assets/components/Bicicletas/Footer/Footer'
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