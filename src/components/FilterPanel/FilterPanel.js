import React from "react";
import "./FilterPanel.css";

export default function FilterPanel() {
  return (
    <div className="filter-panel btn-group">
      <button className="btn btn-info text-white">All</button>
      <button className="btn btn-outline-success">Active</button>
      <button className="btn btn-outline-success">Done</button>
    </div>
  );
}
