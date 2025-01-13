import React from "react";
import './style.css'

const Link = ({ link }) => (
  <div className="search-link">
    <a href={link} rel="noopener noreferrer">
      Link: {link}
    </a>
  </div>
);
export default Link;
