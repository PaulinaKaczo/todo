import Header from "./components/Header.jsx";
import { useState } from "react";
import TaskInput from "./components/TaskInput.jsx";
import TasksList from "./components/TasksList.jsx";
import Counter from "./components/Counter.jsx";
import Filters from "./components/Filters.jsx";
import ClearTasks from "./components/ClearTasks.jsx";

function App() {
  const [inputValue, setInputValue] = useState("");
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
    <div className="app_wrapper--third">
      <div className="app_wrapper--secondary">
        <div className="app_wrapper--main">
          <Header />
          <TaskInput
            inputValue={inputValue}
            setInputValue={setInputValue}
            addTaskHandle={addTaskHandle}
          />
          <TasksList
            tasks={tasks}
            filter={filter}
            handleChangeStatus={handleChangeStatus}
            handleDelete={handleDelete}
          />
          <div className="buttons">
            <Counter tasks={tasks} />
            <Filters filter={filter} setFilter={setFilter} />

            {tasks.some((task) => task.status) ? (
              <ClearTasks handleDeleteCompleted={handleDeleteCompleted} />
            ) : (
              ""
            )}
            {/*{tasks.some((task) => task.status) && (<button>Clear completed</button>)}*/}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
