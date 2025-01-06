import React from 'react';
import './SearchInput.css';

const SearchInput = ({ searchRef, onSearch }) => (
    <div className="search-container">
        <input
            type="text"
            placeholder="Type to search..."
            ref={searchRef}
            className="search-input"
        />
        <button onClick={onSearch} className="search-button">
            Search
        </button>
    </div>
);

export default SearchInput;