import React, { useState } from "react";
import "./App.css";
import Disciplinas from "./components/Disciplinas";
import NovaDisciplina from "./components/NovaDisciplina";
import FiltroAno from "./components/FiltroAno";

function App() {
  const [disciplinas, setDisciplinas] = useState([
    {
      dataAvalia: new Date(2022, 6, 1),
      nome: "AED",
      valorNota: 17.2,
    },
    {
      dataAvalia: new Date(2021, 6, 1),
      nome: "IP",
      valorNota: 15.2,
    },
    {
      dataAvalia: new Date(2022, 2, 1),
      nome: "POO",
      valorNota: 13.2,
    },
    {
      dataAvalia: new Date(2023, 6, 1),
      nome: "IRC",
      valorNota: 14.2,
    },
    {
      dataAvalia: new Date(2025, 2, 1),
      nome: "LTW",
      valorNota: 13,
    },
  ]);

  const [anoFiltrado, setAnoFiltrado] = useState("2022");

  // Função para adicionar nova disciplina
  const adicionarDisciplina = (novaDisciplina) => {
    setDisciplinas((prevDisciplinas) => [...prevDisciplinas, novaDisciplina]);
  };

  // Função para filtrar as disciplinas por ano
  const filtrarAnoHandler = (anoSelecionado) => {
    setAnoFiltrado(anoSelecionado);
  };

  // Filtrando disciplinas de acordo com o ano selecionado
  const disciplinasFiltradas = disciplinas.filter((disciplina) => {
    return disciplina.dataAvalia.getFullYear().toString() === anoFiltrado;
  });

  return (
    <div>
      

      {/* Passar função e dados via props */}
      <NovaDisciplina onAdicionarDisciplina={adicionarDisciplina} />
      {/* Filtro por ano */}
      <FiltroAno anoSelecionado={anoFiltrado} onFiltrarAno={filtrarAnoHandler} />
      <Disciplinas listaDisciplinas={disciplinasFiltradas} />
    </div>
  );
}

export default App;
