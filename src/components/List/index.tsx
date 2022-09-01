import React from "react";

function List() {
  const tasks = [
    {
      task: "React",
      time: "02:00:00",
    },
    {
      task: "JavaScript",
      time: "01:00:00",
    },
  ];

  return (
    <aside>
      <h2>Estudos do dia </h2>
      <ul>
        {tasks.map((tasks, index) => (
          <li key={index}>
            <h3>{tasks.task}</h3>
            <span>{tasks.time}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default List;
