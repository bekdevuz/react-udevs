import React from "react";
import "./SearchPanel.css";
import { useState } from "react";
export default function SearchPanel({ onSearchChange }) {
  const [term, setTerm] = useState("");

  function onSearch(e) {
    setTerm(e.target.value);
    onSearchChange(e.target.value);
  }

  return (
    <div className="search-panel d-inline-block mr-2">
      <input
        type="text"
        className="form-control pl-4 pr-5 py-2"
        placeholder="type to search"
        autoComplete="off"
        value={term}
        onChange={onSearch}
      ></input>
    </div>
  );
}
