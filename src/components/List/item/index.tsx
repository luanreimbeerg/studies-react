import Itasks from "../../../types/Itask";
import style from "../List.module.scss";

export default function Item({
  task,
  time,
  selecionado,
  completo,
  id,
}: Itasks) {
  console.log({ task, time, selecionado, completo, id });
  return (
    <li className={style.item}>
      <h3>{task}</h3>
      <span>{time}</span>
    </li>
  );
}
