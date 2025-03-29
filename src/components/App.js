import React, { useState } from "react";
import Todo from "./Todo";
import "./../styles/App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTask = () => {
    if (inputValue.trim() !== "") {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      {/* Do not remove the main div */}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTask}>Add Todo</button>
      <Todo tasks={tasks} removeTask={removeTask} />
    </div>
  );
};

export default App;

