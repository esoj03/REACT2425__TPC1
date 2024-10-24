import React from 'react';
import './FiltroAno.css';

const FiltroAno = (props) => {
  const selecionarAnoHandler = (event) => {
    props.onFiltrarAno(event.target.value);
  };

  return (
    <div className="filtro-ano">
      <label>Filtrar por ano</label>
      <select value={props.anoSelecionado} onChange={selecionarAnoHandler}>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
    </div>
  );
};

export default FiltroAno;
