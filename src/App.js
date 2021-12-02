import { useState, useEffect } from "react";
import AppHeader from "./components/AppHeader/AppHeader";
import TodoList from "./components/TodoList/TodoList";
import SearchPanel from "./components/SearchPanel/SearchPanel";
import FilterPanel from "./components/FilterPanel/FilterPanel";
import TodoAddForm from "./components/TodoAddFrom/TodoAddForm";
import "./App.css";

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
  // useStates
  const [todos, setTodos] = useState(initialTodos);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterItems, setFilterItems] = useState("all");
  const [visibleItems, setVisibleItems] = useState(todos);

  //Add todos
  function addTodo(label) {
    const newTodo = createTodoItem(label);
    setTodos([...todos, newTodo]);
  }
  //line throught done todos
  function onToggleDone(todoId) {
    const updatedTodos = todos.find((item) => item.id === todoId);
    const indexTodos = todos.findIndex((item) => item.id === todoId);
    updatedTodos.done = !updatedTodos.done;
    const newTodos = [
      ...todos.slice(0, indexTodos),
      updatedTodos,
      ...todos.slice(indexTodos + 1, todos.length),
    ];
    setTodos([...newTodos]);
  }

  // delete todos button
  function onDelete(todoId) {
    const newTodos = todos.filter((item) => item.id !== todoId);
    setTodos(newTodos);
  }

  //highliht important todos button
  function onImportant(todoId) {
    const importantTodo = todos.find((item) => item.id === todoId);
    const indexTodos = todos.findIndex((item) => item.id === todoId);
    importantTodo.important = !importantTodo.important;
    const newTodos = [
      ...todos.slice(0, indexTodos),
      importantTodo,
      ...todos.slice(indexTodos + 1, todos.length),
    ];
    setTodos(newTodos);
  }

  function onSearchChange(term) {
    setSearchTerm(term);
  }

  function onFilterChange(filter) {
    setFilterItems(filter);
  }

  useEffect(() => {
    setVisibleItems(filter(search(todos, searchTerm, filterItems)));
  }, [searchTerm, filterItems]);

  useEffect(() => {
    setVisibleItems(todos);
  }, [todos]);

  function search(items, term) {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  }

  function filter(items, filter) {
    switch (filterItems) {
      case "all":
        return items;
      case "active":
        return items.filter((item) => !item.done);
      case "done":
        return items.filter((item) => item.done);
      default:
        return items;
    }
  }
  //counters for AppHeader
  const countDone = todos.filter((el) => el.done).length;
  const countAllTodo = todos.length - todos.filter((el) => el.done).length;

  return (
    <div className="row my-5">
      <div className="App py-5 ">
        <AppHeader countAllTodo={countAllTodo} countDone={countDone} />
        <SearchPanel onSearchChange={onSearchChange} />
        <FilterPanel filter={filterItems} onFilterChange={onFilterChange} />
        <TodoList
          todos={visibleItems}
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
