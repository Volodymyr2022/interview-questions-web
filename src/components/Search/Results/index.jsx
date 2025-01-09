import React from 'react';
import SearchResultItem from '../ResultItem/index.jsx';
import './style.css';

const SearchResults = ({ results, onTagClick, searchPerformed }) => (
    <div className="search-results">
        {searchPerformed && (results.length > 0 ? (
            results.map((obj, index) => (
                <SearchResultItem key={index} result={obj} onTagClick={onTagClick} />
            ))
        ) : (
            <p className="no-results">No results found</p>
        ))}
    </div>
);

export default SearchResults;