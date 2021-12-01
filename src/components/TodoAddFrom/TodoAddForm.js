import { useState } from "react";
import "./TodoAddForm.css";

export default function TodoAddForm({ addTodo }) {
  const [todo, setTodo] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    addTodo(todo);
    setTodo("");
  }
  return (
    <form className="todo-add-form mt-3" onSubmit={onSubmit}>
      <input
        type="text"
        className="form-control"
        placeholder="What needs to be done"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      ></input>
      <button type="submit" className="btn btn-outline-secondary btn-sm">
        Add Item
      </button>
    </form>
  );
}
