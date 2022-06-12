import React from "react";
import { ITarefa } from "../../interfaces/tarefa";

function Lista() {
  const tarefas: ITarefa[] = [{
    tarefa: "Javascrpit",
    tempo: "02:00:00"
  }, {
    tarefa: "Typescrpit",
    tempo: "04:00:00"
  }, {
    tarefa: "React",
    tempo: "06:00:00"
  }]
  return (
    <aside>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item, index) => (
          <li key={index}>
            <h3> {item.tarefa} </h3>
            <span> {item.tempo} </span>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Lista;