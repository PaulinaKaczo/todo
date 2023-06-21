import "./App.css";
import Header from "./components/Header.jsx";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("Learn React");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

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

  function handleDeleteCompleted() {
    setTasks(tasks.filter((task) => !task.status));
  }

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
        {tasks
          // .filter((task) => filter === 'all' ? true : task.status === filter)
          .filter((task) => {
            if (filter === "all") return true;
            //status: false ===false
            //status: true === true
            if (task.status === filter) return true;
            return false;
          })
          .map((task) => (
            <li key={task.id} className="task-item">
              <span
                className={task.status ? "status active" : "status"}
                onClick={() => handleChangeStatus(task)}
              ></span>
              <span>{task.name}</span>
              <button onClick={() => handleDelete(task)}>x</button>
            </li>
          ))}
      </ul>
      <div>{tasks.filter((task) => !task.status).length} items left</div>

      <div>
        <button
          className={filter === "all" ? "current-filter" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={filter === false ? "current-filter" : ""}
          onClick={() => setFilter(false)}
        >
          Active
        </button>
        <button
          className={filter === true ? "current-filter" : ""}
          onClick={() => setFilter(true)}
        >
          Completed
        </button>
      </div>

      {tasks.some((task) => task.status) ? (
        <button onClick={handleDeleteCompleted}>Clear completed</button>
      ) : (
        ""
      )}
      {/*{tasks.some((task) => task.status) && (<button>Clear completed</button>)}*/}
    </div>
  );
}

export default App;
