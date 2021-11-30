import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./TodoList.css";
import { faExclamation, faTrash } from "@fortawesome/free-solid-svg-icons";
export default function TodoList({ todos }) {
  console.log("todos =>", todos);

  return (
    <ul className="list-group todo-list">
      {todos.map((item, index) => (
        <li key={index} className="list-item list-group-item">
          <span className="todo-list-item d-flex justify-content-between align-items-center">
            <span className="todo-list-item-label">{item.label}</span>
            <span className="todo-list-item">
              <button type="button" className="btn btn-outline-danger mr-2">
                <FontAwesomeIcon icon={faTrash} />
              </button>
              <button type="button" className="btn btn-outline-success">
                <FontAwesomeIcon icon={faExclamation} />
              </button>
            </span>
          </span>
        </li>
      ))}
    </ul>
  );
}
