import React, { useState } from "react";

import Form from "../components/form";
import List from "../components/List";
import CountDown from "../components/Countdown";

import style from "./App.module.scss";
import Itasks from "../types/Itask";
function App() {
  const [tasks, setTasks] = useState<Itasks[] | []>([]);
  const [selecionado, setSelecionado] = useState<Itasks>();

  function selecionaTask(taskSelecionada: Itasks) {
    setSelecionado(taskSelecionada);
    setTasks((tarefasAnteriores) =>
      tarefasAnteriores.map((tarefa) => ({
        ...tarefa,
        selecionado: tarefa.id === taskSelecionada.id ? true : false,
      }))
    );
  }

  function finalizarTarefa() {
    if (selecionado) {
      setSelecionado(undefined);
      setTasks((tarefasAnteriores) =>
        tarefasAnteriores.map((tarefa) => {
          if (tarefa.id === selecionado.id) {
            return {
              ...tarefa,
              selecionado: false,
              completo: true,
            };
          }
          return tarefa;
        })
      );
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List task={tasks} selecionaTask={selecionaTask} />
      <CountDown selecionado={selecionado} finalizarTarefa={finalizarTarefa} />
    </div>
  );
}

export default App;
