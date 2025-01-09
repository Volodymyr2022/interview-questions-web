import React from 'react';

const TagLink = ({ tag, onTagClick, children }) => (
  <a
    className="theme-tag"
    onClick={(e) => {
      e.preventDefault();
      onTagClick(tag.trim());
    }}
    href="#"
  >
    {children}
  </a>
);

export default TagLink;