import React from "react";

function Counter({ tasks }) {
  return <div>{tasks.filter((task) => !task.status).length} items left</div>;
}

export default Counter;
