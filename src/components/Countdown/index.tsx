import ButtonGlobal from "../Button";
import Clock from "./Clock";

import style from "./Countdown.module.scss";

export default function Countdown() {
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Clock />
      </div>
      <ButtonGlobal text="Começar" />
    </div>
  );
}
