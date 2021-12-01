import React from "react";
import "./TodoList.css";
import TodoListItem from "../TodoListItem/TodoListItem";

export default function TodoList({
  todos,
  onToggleDone,
  onDelete,
  onImportant,
}) {
  return (
    <ul className="list-group todo-list">
      {todos.map((item) => (
        <li key={item.id} className="list-item list-group-item">
          <TodoListItem
            {...item}
            onToggleDone={onToggleDone}
            onDelete={onDelete}
            onImportant={onImportant}
          />
        </li>
      ))}
    </ul>
  );
}
