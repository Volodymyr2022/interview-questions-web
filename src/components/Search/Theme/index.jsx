import React from "react";
import TagLink from "../../UI/TagLink";
import Unique from "../Unique";

const SearchTheme = ({ theme, level, onTagClick }) => {
  console.log(theme);
  return (
    <div className="search-theme">
      <Unique title="Themes:" tags={theme} onTagClick={onTagClick}/>
      <Unique title="Level:" tags={level} onTagClick={onTagClick}/>
    </div>
  );
};

export default SearchTheme;
