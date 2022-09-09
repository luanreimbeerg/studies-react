import Item from "./item";

import style from "./List.module.scss";
import Itasks from "../../types/Itask";

interface Props {
  task: Itasks[];
  selecionaTask: (taskSelecionada: Itasks) => void;
}

function List({ task, selecionaTask }: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia </h2>
      <ul>
        {task.map((item) => (
          <Item key={item.id} {...item} selecionaTask={selecionaTask} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
