import { useState } from "react";
import AppHeader from "./components/AppHeader/AppHeader";
import TodoList from "./components/TodoList/TodoList";
import SearchPanel from "./components/SearchPanel/SearchPanel";
import FilterPanel from "./components/FilterPanel/FilterPanel";
import TodoAddForm from "./components/TodoAddFrom/TodoAddForm";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      label: "Read a book",
      important: false,
      done: false,
      id: 1,
    },
    {
      label: "Drink a coffee",
      important: false,
      done: false,
      id: 2,
    },
    {
      label: "Complete Hometasks",
      important: false,
      done: false,
      id: 3,
    },
  ]);
  return (
    <div className="App py-5 ">
      <AppHeader />
      <SearchPanel />
      <FilterPanel />
      <TodoList todos={todos} />
      <TodoAddForm />
    </div>
  );
}

export default App;
