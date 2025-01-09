import React from 'react';
import TagLink from '../../UI/TagLink';

const SearchUniq = ({ theme, onTagClick }) => (
  <div className="search-theme">
    {theme.split(", ").map((tag, i) => (
      <TagLink key={`theme-tag-${i}`} tag={tag} onTagClick={onTagClick}>
        #{tag.trim()}
      </TagLink>
    ))}
   
  </div>
);

export default SearchUniq;