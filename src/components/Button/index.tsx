import React from "react";

import style from "./Button.module.scss";

class ButtonGlobal extends React.Component<{
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
}> {
  render() {
    return (
      <button type={this.props.type} className={style.botao}>
        {this.props.text}
      </button>
    );
  }
}

export default ButtonGlobal;
