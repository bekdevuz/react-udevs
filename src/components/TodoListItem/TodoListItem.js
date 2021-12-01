import React from "react";
import "./TodoListItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function TodoListItem({
  label,
  onToggleDone,
  id,
  done,
  important,
  onDelete,
  onImportant,
}) {
  return (
    <span className="todo-list-item d-flex justify-content-between align-items-center">
      <span
        className="todo-list-item-label"
        style={{
          textDecoration: done ? "line-through" : "none",
          color: important ? "#4682b4" : "#000000",
          fontWeight: important ? 700 : 400,
        }}
        onClick={() => onToggleDone(id)}
      >
        {label}
      </span>
      <span className="todo-list-item">
        <button
          type="button"
          onClick={() => onDelete(id)}
          className="btn btn-outline-danger mr-2"
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
        <button
          type="button"
          onClick={() => onImportant(id)}
          className="btn btn-outline-success"
        >
          <FontAwesomeIcon icon={faExclamation} />
        </button>
      </span>
    </span>
  );
}
