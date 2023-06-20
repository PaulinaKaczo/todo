import "./App.css";
import Header from "./components/Header.jsx";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("Learn React");
  const [tasks, setTasks] = useState([]);

  function getID() {
    if (!tasks.length) {
      return 1;
    }
    return Math.max(...tasks.map((task) => task.id + 1));
  }
  function addTaskHandle(event) {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      setTasks([
        {
          id: getID(),
          name: inputValue.trim(),
          status: false,
        },
        ...tasks,
      ]);
      setInputValue("");
    }
  }

  function handleDelete(taskToDelete) {
    setTasks(tasks.filter((task) => task !== taskToDelete));
  }

  function handleChangeStatus(taskToChange) {
    taskToChange.status = !taskToChange.status;
    setTasks([...tasks]);
  }

  // function handleChangeStatus(taskToChange){
  //     // taskToChange.status = !taskToChange.status;
  //
  //     const newTasks = tasks.map((task) => {
  //         if (taskToChange === task) {
  //             task.status = !task.status
  //         }
  //         return task
  //     })
  //     setTasks(newTasks)
  // }

  return (
    <div className="App">
      <Header />
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        onKeyUp={addTaskHandle}
        placeholder="What needs to be done?"
      />
      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              className={task.status ? "status active" : "status"}
              onClick={() => handleChangeStatus(task)}
            ></span>
            <span>{task.name}</span>
            <button onClick={() => handleDelete(task)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
