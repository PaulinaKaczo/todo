import React from "react";

function Filters({ filter, setFilter }) {
  return (
    <div className="btn_filter">
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
  );
}

export default Filters;
