import HeaderAtividades from './components/Atividades/HeaderAtividades/HeaderAtividades'
import MainAtividades from './components/Atividades/MainAtividades/MainAtividades'
import FooterAtividades from './components/Atividades/FooterAtividades/FooterAtividades'

import { useState } from 'react';


export default function App() {
  const [atividades, setAtividades] = useState([
    { codAtividade: 1, titulo: 'Ciclismo de 10km', distancia: 10, data: '2023-05-01', descricao: 'Descrição da atividade 1' },
    { codAtividade: 2, titulo: 'Ciclismo de 5km', distancia: 5, data: '2023-05-02', descricao: 'Descrição da atividade 2' },
    { codAtividade: 3, titulo: 'Ciclismo de 15km', distancia: 15, data: '2023-05-03', descricao: 'Descrição da atividade 3' },
    { codAtividade: 4, titulo: 'Ciclismo de 20km', distancia: 10, data: '2023-05-04', descricao: 'Descrição da atividade 4' },
  ]);

  return (
    <>
      <HeaderAtividades />
      <MainAtividades atividades={atividades} />
      <FooterAtividades />
    </>
  );
}

