import Itasks from "../../../types/Itask";
import style from "./Item.module.scss";

interface Props extends Itasks {
  selecionaTask: (taskSelecionada: Itasks) => void;
}

export default function Item({
  task,
  time,
  selecionado,
  completo,
  id,
  selecionaTask,
}: Props) {
  return (
    <li
      className={`${style.item} ${selecionado ? style.itemSelecionado : ""} ${
        style.item
      } ${completo ? style.itemCompletado : ""}`}
      onClick={() =>
        !completo && selecionaTask({ task, time, selecionado, completo, id })
      }
    >
      <h3>{task}</h3>
      <span>{time}</span>
      {completo && <span className="concluido"></span>}
    </li>
  );
}
