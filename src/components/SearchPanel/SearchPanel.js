import React from "react";
import "./SearchPanel.css";

export default function SearchPanel() {
  return (
    <div className="search-panel d-inline-block mr-2">
      <input
        className="form-control pl-4 pr-5 py-2"
        placeholder="type to search"
        autoComplete="off"
      ></input>
    </div>
  );
}
