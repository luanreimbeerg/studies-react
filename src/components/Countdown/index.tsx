import ButtonGlobal from "../Button";
import Clock from "./Clock";

import { tempoParaSegundo } from "../../common/utils/date";
import style from "./Countdown.module.scss";
import Itasks from "../../types/Itask";
import { useEffect, useState } from "react";

interface Props {
  selecionado: Itasks | undefined;
  finalizarTarefa: () => void;
}

export default function Countdown({ selecionado, finalizarTarefa }: Props) {
  const [tempo, setTempo] = useState<number>();

  useEffect(() => {
    if (selecionado?.time) {
      setTempo(tempoParaSegundo(selecionado.time));
    }
  }, [selecionado]);

  function regressiva(contador: number = 0) {
    setTimeout(() => {
      if (contador > 0) {
        setTempo(contador - 1);
        return regressiva(contador - 1);
      }
      finalizarTarefa();
    }, 1000);
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Clock tempo={tempo} />
      </div>
      <ButtonGlobal text="Começar" onClick={() => regressiva(tempo)} />
    </div>
  );
}
