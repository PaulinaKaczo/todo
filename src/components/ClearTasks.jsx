import React from "react";

function ClearTasks({ handleDeleteCompleted }) {
  return <button onClick={handleDeleteCompleted}>Clear completed</button>;
}

export default ClearTasks;
