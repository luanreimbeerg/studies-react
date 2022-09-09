import React from "react";

import style from "./Button.module.scss";

interface Props {
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

function ButtonGlobal({ onClick, type, text }: Props) {
  return (
    <button type={type} className={style.botao} onClick={onClick}>
      {text}
    </button>
  );
}

export default ButtonGlobal;
