import React from 'react';
import TagLink from '../../UI/TagLink';

const SearchTheme = ({ theme, level, onTagClick }) => (
  <div className="search-theme">
    {theme.split(", ").map((tag, i) => (
      <TagLink key={`theme-tag-${i}`} tag={tag} onTagClick={onTagClick}>
        #{tag.trim()}
      </TagLink>
    ))}
    {level && (
      <TagLink tag={level} onTagClick={onTagClick}>
        Level: {level}
      </TagLink>
    )}
  </div>
);

export default SearchTheme;