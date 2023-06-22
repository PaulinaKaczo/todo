import React from "react";

function ClearTasks({ handleDeleteCompleted }) {
  return (
    <button className="btn_clear" onClick={handleDeleteCompleted}>
      Clear completed
    </button>
  );
}

export default ClearTasks;
