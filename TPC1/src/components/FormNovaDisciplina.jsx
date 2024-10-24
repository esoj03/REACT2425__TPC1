import React, { useState } from 'react';
import './FormNovaDisciplina.css';

const FormNovaDisciplina = (props) => {
  const [nomeDisciplina, setNomeDisciplina] = useState('');
  const [nota, setNota] = useState('');
  const [dataAvalia, setDataAvalia] = useState('');

  const nomeChangeHandler = (event) => {
    setNomeDisciplina(event.target.value);
  };
  const notaChangeHandler = (event) => {
    setNota(event.target.value);
  };
  const dataAvaliaChangeHandler = (event) => {
    setDataAvalia(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    
    const novaDisciplina = {
      dataAvalia: new Date(dataAvalia),
      nome: nomeDisciplina,
      valorNota: parseFloat(nota), 
    };

    
    props.onSaveDisciplinaData(novaDisciplina);

    
    setNomeDisciplina('');
    setNota('');
    setDataAvalia('');
  };

  return (
    <div className="new-disciplina">
      <form onSubmit={submitHandler}>
        <div className="new-disciplina__controls">
          <div className="new-disciplina__control">
            <label>Disciplina</label>
            <input type="text" value={nomeDisciplina} onChange={nomeChangeHandler} />
          </div>
          <div className="new-disciplina__control">
            <label>Nota</label>
            <input type="number" min="0" max="20" step="0.1" value={nota} onChange={notaChangeHandler} />
          </div>
          <div className="new-disciplina__control">
            <label>Data Avaliação</label>
            <input type="date" value={dataAvalia} onChange={dataAvaliaChangeHandler} />
          </div>
        </div>
        <div className="new-disciplina__actions">
          <button type="submit">Guardar</button>
        </div>
      </form>
    </div>
  );
};

export default FormNovaDisciplina;
