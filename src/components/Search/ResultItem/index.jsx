import React from "react";
import MarkdownView from "react-showdown";
import VideoWindow from "../../UI/VideoWindow/VideoWindow";
import SearchTheme from "../Theme/SearchTheme";
import SearchTitle from "../../UI/Title";
import Link from "../../UI/Link";
import "./style.css";

const SearchResultItem = ({ result, onTagClick }) => (
  <div className="search-result">
    <SearchTitle title={result.title} />
    <div className="search-text">
      <MarkdownView
        markdown={result.text}
        options={{ tables: true, emoji: true }}
      />
    </div>
    <VideoWindow url={result.url} />
    <SearchTheme
      theme={result.theme}
      level={result.level}
      onTagClick={onTagClick}
    />
    <Link link={result.link} />
  </div>
);

export default SearchResultItem;
