import { useState } from "react";
import AppHeader from "./components/AppHeader/AppHeader";
import TodoList from "./components/TodoList/TodoList";
import SearchPanel from "./components/SearchPanel/SearchPanel";
import FilterPanel from "./components/FilterPanel/FilterPanel";
import TodoAddForm from "./components/TodoAddFrom/TodoAddForm";
import "./App.css";
import { filter } from "dom-helpers";

let maxId = 100;
function createTodoItem(label) {
  return {
    label,
    important: false,
    done: false,
    id: maxId++,
  };
}
const initialTodos = [
  createTodoItem("Eat"),
  createTodoItem("Sleep "),
  createTodoItem(" Code"),
  createTodoItem(" Repeat"),
];

function App() {
  const [todos, setTodos] = useState(initialTodos);
  function addTodo(label) {
    const newTodo = createTodoItem(label);
    setTodos([...todos, newTodo]);
  }

  function onToggleDone(todoId) {
    const toggledTodo = todos.find((item) => item.id === todoId);
    toggledTodo.done = !toggledTodo.done;
    const newTodos = todos.filter((item) => item.id !== todoId);
    setTodos([...newTodos, toggledTodo]);
  }

  function onDelete(todoId) {
    const newTodos = todos.filter((item) => item.id !== todoId);
    setTodos(newTodos);
  }

  function onImportant(todoId) {
    const importantTodo = todos.find((item) => item.id === todoId);
    importantTodo.important = !importantTodo.important;
    const newTodos = todos.filter((item) => item.id !== todoId);
    setTodos([...newTodos, importantTodo]);
  }

  //counters for AppHeader
  const countAllTodo = todos.length;
  const countDone = todos.filter((el) => el.done).length;

  return (
    <div className="row my-5">
      <div className="App py-5 ">
        <AppHeader countAllTodo={countAllTodo} countDone={countDone} />
        <SearchPanel />
        <FilterPanel />
        <TodoList
          todos={todos}
          onToggleDone={onToggleDone}
          onDelete={onDelete}
          onImportant={onImportant}
        />
        <TodoAddForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
