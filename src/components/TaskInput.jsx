import React from "react";

function TaskInput({ inputValue, setInputValue, addTaskHandle }) {
  return (
    <input
      type="text"
      value={inputValue}
      onChange={(event) => setInputValue(event.target.value)}
      onKeyUp={addTaskHandle}
      placeholder="What needs to be done?"
    />
  );
}

export default TaskInput;
