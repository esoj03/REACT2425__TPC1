import React, { useState } from "react";
import "./App.css";
import Disciplinas from "./components/Disciplinas";
import NovaDisciplina from "./components/novaDisciplina";

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

  
  const filtrarAnoHandler = (event) => {
    setAnoFiltrado(event.target.value);
  };

  
  const disciplinasFiltradas = disciplinas.filter((disciplina) => {
    return disciplina.dataAvalia.getFullYear().toString() === anoFiltrado;
  });

  
  const adicionarDisciplina = (novaDisciplina) => {
    setDisciplinas((prevDisciplinas) => [...prevDisciplinas, novaDisciplina]);
  };

  return (
    <div>
      <NovaDisciplina onAdicionarDisciplina={adicionarDisciplina} />

      {}
      <div className="filtro">
        <label>Filtrar por ano</label>
        <select value={anoFiltrado} onChange={filtrarAnoHandler}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>

      <Disciplinas listaDisciplinas={disciplinasFiltradas} />
    </div>
  );
}

export default App;
