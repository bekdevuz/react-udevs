import React from "react";
import "./AppHeader.css";

export default function AppHeader({ countDone, countAllTodo }) {
  return (
    <div className="app-header ">
      <h1>Todo List</h1>
      <h2>
        {countAllTodo} more to do, {countDone} done
      </h2>
    </div>
  );
}
