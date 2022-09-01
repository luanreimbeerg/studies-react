import React from "react";

import style from "./Button.module.scss";

class ButtonGlobal extends React.Component {
  render() {
    return <button className={style.botao}>Botão</button>;
  }
}

export default ButtonGlobal;
