import React from "react";
import Task from "./Task";

function TasksList({ tasks, filter, handleChangeStatus, handleDelete }) {
  return (
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
          <Task
            key={task.id}
            task={task}
            handleChangeStatus={handleChangeStatus}
            handleDelete={handleDelete}
          />
        ))}
    </ul>
  );
}

export default TasksList;
