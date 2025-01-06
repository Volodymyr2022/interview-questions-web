import React from 'react';
import './SearchResultItem.css';

const SearchResultItem = ({ result, onTagClick }) => (
    <div className="search-result">
        <div className="search-title">{result.title}</div>
        <div className="search-text">{result.text}</div>
        {result.url && (
            <div className="video-window">
                <iframe
                    src={`https://www.tiktok.com/embed/${result.url.split('/').pop()}`}
                    width="400"
                    height="600"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="TikTok Video"
                />
            </div>
        )}
        {/* <div className="search-url">
            <a href={result.url} target="_blank" rel="noopener noreferrer">
                Video Link
            </a>
        </div> */}
        <div className="search-theme">
            {result.theme.split(', ').map((tag, i) => (
                <a
                    key={`theme-tag-${i}`}
                    className="theme-tag"
                    onClick={() => onTagClick(tag.trim())}
                    href="#"
                >
                    #{tag.trim()}
                </a>
            ))}
            {result.level && (
                <a
                    className="theme-tag"
                    onClick={() => onTagClick(result.level.trim())}
                    href="#"
                >
                    Level: {result.level}
                    
                </a>
            )}
        </div>
        <div className="search-link">
            <a href={result.link} rel="noopener noreferrer">
                Link: {result.link}
            </a>
        </div>
    </div>
);

export default SearchResultItem;