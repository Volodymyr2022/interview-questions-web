import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Search.css';
import questions from '../../question.json';
import SearchHeader from '../SearchHeader';
import SearchInput from '../SearchInput';
import SearchResults from '../SearchResults';

const Search = () => {
    const searchRef = useRef();
    const [results, setResults] = useState([]);
    const [searchPerformed, setSearchPerformed] = useState(false);
    const { hash } = useLocation();

    useEffect(() => {
        const question = questions.find((element) => element.link === hash);
        if (question) {
            setResults([question]);
            setSearchPerformed(true);
        }
    }, [hash]);

    const onSearch = (e, customQuery) => {
        if (e) e.preventDefault();
        const query = customQuery || searchRef.current.value.trim().toLowerCase();
        const rgxp = new RegExp(query, 'i');

        const filteredResults = questions.filter((question) =>
            Object.values(question).some((field) => String(field).match(rgxp))
        );

        setResults(query.length < 3 ? [] : filteredResults);
        setSearchPerformed(true);
    };

    const onTagClick = (tag) => onSearch(null, tag.toLowerCase());

    return (
        <>
            <SearchHeader />
            <main className="search-main">
                <SearchInput searchRef={searchRef} onSearch={onSearch} />
                <SearchResults
                    results={results}
                    onTagClick={onTagClick}
                    searchPerformed={searchPerformed}
                />
            </main>
            <footer className="search-footer">
                <p>2024 Company</p>
            </footer>
        </>
    );
};

export default Search;