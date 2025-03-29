import React from "react";

const Todo = ({ tasks, removeTask }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {task} <button onClick={() => removeTask(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default Todo;
