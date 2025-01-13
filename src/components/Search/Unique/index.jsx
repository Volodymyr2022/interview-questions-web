import React from "react";
import TagLink from "../../UI/TagLink";

const Unique = ({ title, tags, onTagClick }) => {
  return (
    <div className="unique-list--section">
      <span>{title}</span>
      {tags.map((tag, i) => (
        <TagLink key={`theme-tag-${i}`} tag={tag} onTagClick={onTagClick}>
          #{tag.trim()}
        </TagLink>
      ))}
    </div>
  );
};

export default Unique;
