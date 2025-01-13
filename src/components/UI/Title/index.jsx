import React from "react";
import './style.css';

const SearchTitle = ({ title }) => (
  <div className="search-title">{title || "No title available"}</div>
);

export default SearchTitle;
