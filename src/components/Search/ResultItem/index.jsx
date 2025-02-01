import React, { useState, useEffect } from "react";
import MarkdownView from "react-showdown";
import VideoWindow from "../../UI/VideoWindow";
import SearchTheme from "../Theme";
import SearchTitle from "../../UI/Title";
import Link from "../../UI/Link";
import { FaTrash } from "react-icons/fa";
import { removeQuestion } from "../../../services/firebase";
import { getCookieValue } from "../../../services/token";
import "./style.css";

// try {
//   console.log(getCookieValue('token'));
// } catch (error) {
//   console.error('Error getting cookie value:', error);
// }


// console.log(getCookieValue('token'))
// console.log('Hellooooo')
const SearchResultItem = ({ result, questionKey, onTagClick }) => {
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this question?")) {
      try {
        await removeQuestion(questionKey); // Удаляем по ключу
        alert("Question deleted successfully!");
        window.location.reload(); // Перезагружаем страницу
      } catch (error) {
        console.error("Error deleting question:", error);
        alert("Failed to delete question.");
      }
    }
  };

  return (
    <div className="search-result">
      <div className="search-title-trash">
        <SearchTitle title={result.title} />
        <FaTrash
          style={{ cursor: "pointer", color: "red", fontSize: "20px" }}
          onClick={handleDelete}
        />
      </div>
      <div className="search-text">
        <MarkdownView
          markdown={result.text}
          options={{ tables: true, emoji: true }}
        />
      </div>
      <VideoWindow url={result.url} />
      <SearchTheme
        theme={result.theme.split(", ")}
        level={result.level.split(", ")}
        onTagClick={onTagClick}
      />
      <Link link={result.link} />
    </div>
  );
};

export default SearchResultItem;
