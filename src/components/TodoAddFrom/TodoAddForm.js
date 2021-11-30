import React from "react";
import "./TodoAddForm.css";
export default function TodoAddForm() {
  return (
    <div className="todo-add-form mt-2">
      <input
        className="form-control"
        placeholder="What needs to be done"
      ></input>
      <button type="button" className="btn btn-outline-secondary btn-sm">
        Add Item
      </button>
    </div>
  );
}
