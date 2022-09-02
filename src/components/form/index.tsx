import React from "react";

import ButtonGlobal from "../Button";
import Itasks from "../../types/Itask";
import style from "./Form.module.scss";

import { v4 as uuidv4 } from "uuid";

class Form extends React.Component<{
  setTasks: React.Dispatch<React.SetStateAction<Itasks[]>>;
}> {
  state = {
    task: "",
    time: "00:00:00",
  };

  addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.props.setTasks((task) => [
      ...task,
      { ...this.state, selecionado: false, completo: false, id: uuidv4() },
    ]);
    this.setState({
      task: "",
      time: "",
    });
  }

  render(): React.ReactNode {
    return (
      <form className={style.novaTarefa} onSubmit={this.addTask.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adcione um novo estudo</label>
          <input
            type="text"
            name="tarefa"
            value={this.state.task}
            onChange={(event) =>
              this.setState({ ...this.state, task: event.target.value })
            }
            id="task"
            placeholder="O que você quer estudar?"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">Tempo</label>
          <input
            type="time"
            step="1"
            name="tempo"
            value={this.state.time}
            onChange={(event) =>
              this.setState({ ...this.state, time: event.target.value })
            }
            id="time"
            min="00:00:00"
            max="10:30:00"
            required
          />
        </div>
        <ButtonGlobal type="submit" text="Adicionar" />
      </form>
    );
  }
}

export default Form;
