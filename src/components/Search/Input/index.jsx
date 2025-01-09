import React from "react";
import ButtonComponent from "../../UI/Button/index.jsx";
import InputComponent from "../../UI/Input/index.jsx";
import SearchTheme from "../Theme/SearchTheme.jsx";
import "./style.css";

const SearchInput = ({
  searchRef,
  onSearch,
  searchPerformed,
  results,
  onTagClick,
}) => (
  <div className="search-container">
    <InputComponent
      type="text"
      placeholder="Type to search..."
      ref={searchRef}
      className="search-input"
    />

    <div className="result-tag">
      {Array.from(
        new Set(
          results.flatMap((result) =>
            result.theme.split(", ").map((theme) => theme.trim())
          )
        )
      ).map((uniqueTheme, i) => (
        <SearchTheme
          key={`result-tag-${i}`}
          theme={uniqueTheme} // Уникальная тема
          onTagClick={onTagClick}
        />
      ))}
    </div>

    <ButtonComponent onClick={onSearch} className="search-button">
      Search
    </ButtonComponent>
  </div>
);

export default SearchInput;
