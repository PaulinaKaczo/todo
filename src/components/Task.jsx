import React from "react";

function Task({ task, handleChangeStatus, handleDelete }) {
  return (
    <li className="task-item">
      <span
        className={task.status ? "status active" : "status"}
        onClick={() => handleChangeStatus(task)}
      ></span>
      <span>{task.name}</span>
      <button className="btn_delete" onClick={() => handleDelete(task)}>
        x
      </button>
    </li>
  );
}

export default Task;
