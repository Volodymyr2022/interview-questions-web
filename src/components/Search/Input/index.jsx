import React, { useState, useEffect } from "react";
import ButtonComponent from "../../UI/Button/index.jsx";
import InputComponent from "../../UI/Input/index.jsx";
import SearchTheme from "../Theme/index.jsx";
import questions from "../../../question.json";
import "./style.css";

const SearchInput = ({
  searchRef,
  onSearch,
  searchPerformed,
  results,
  onTagClick,
}) => {
  // Создаем состояние для уникальных themes и levels
  const [uniqueThemes, setUniqueThemes] = useState([]);
  const [uniqueLevels, setUniqueLevels] = useState([]);

  useEffect(() => {
    const themes = Array.from(
      new Set(
        questions.flatMap((result) =>
          result.theme.split(", ").map((theme) => theme.trim())
        )
      )
    );

    const levels = Array.from(new Set(questions.map((result) => result.level)));

    setUniqueThemes(themes);
    setUniqueLevels(levels);
  }, []);

  return (
    <div className="search-container">
      <InputComponent
        type="text"
        placeholder="Type to search..."
        ref={searchRef}
        className="search-input"
      />

      {/* Уникальные комбинации theme и level */}
      <div className="result-tag">
        <div className="unique-list">
          <SearchTheme
            theme={uniqueThemes}
            level={uniqueLevels}
            onTagClick={onTagClick}
          />
        </div>
      </div>

      <ButtonComponent onClick={onSearch} className="search-button">
        Search
      </ButtonComponent>
    </div>
  );
};

export default SearchInput;
