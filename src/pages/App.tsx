import React, { useState } from "react";

import Form from "../components/form";
import List from "../components/List";
import CountDown from "../components/Countdown";

import style from "./App.module.scss";
import Itasks from "../types/Itask";
function App() {
  const [tasks, setTasks] = useState<Itasks[] | []>([]);
  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} />
      <CountDown />
    </div>
  );
}

export default App;
