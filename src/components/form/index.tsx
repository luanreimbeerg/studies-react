import React from "react";
import ButtonGlobal from "../Button";

class Form extends React.Component {
  render(): React.ReactNode {
    return (
      <form action="">
        <div>
          <label htmlFor="tarefa">Adcione um novo estudo</label>
          <input
            type="text"
            name="tarefa"
            id="task"
            placeholder="O que você quer estudar?"
            required
          />
        </div>
        <div>
          <label htmlFor="tempo">Tempo</label>
          <input
            type="time"
            step="1"
            name="tempo"
            id="time"
            min="00:00:00"
            max="10:30:00"
            required
          />
        </div>
        <ButtonGlobal />
      </form>
    );
  }
}

export default Form;
