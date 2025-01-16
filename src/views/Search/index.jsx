import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getData } from "../../services/questions";
import Header from "../../components/Search/Header/index.jsx";
import Input from "../../components/Search/Input/index.jsx";
import Results from "../../components/Search/Results/index.jsx";
import Footer from "../../components/Search/Footer/index.jsx";
import "./style.css";

const Search = () => {
  const searchRef = useRef();
  const [results, setResults] = useState([]);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const { hash } = useLocation();

  useEffect(() => {
    async function fetchData() {
      const questions = await getData();
      const question = questions.find((element) => element.link === hash);
      if (question) {
        setResults([question]);
        setSearchPerformed(true);
      }
    }
    fetchData();
  }, [hash]);

  const onSearch =async (e, customQuery) => {
    if (e) e.preventDefault();
    const query = customQuery || searchRef.current.value.trim().toLowerCase();
    const rgxp = new RegExp(query, "i");
    const questions = await getData();
    const filteredResults = questions.filter((question) =>
      Object.values(question).some((field) => String(field).match(rgxp))
    );
    setResults(query.length < 3 ? [] : filteredResults);
    setSearchPerformed(true);
  };

  const onTagClick = (tag) => onSearch(null, tag.toLowerCase());

  return (
    <>
      <Header />
      <main className="search-main">
        <Input
          searchRef={searchRef}
          onSearch={onSearch}
          searchPerformed={searchPerformed}
          results={results}
          onTagClick={onTagClick}
        />
        <Results
          results={results}
          onTagClick={onTagClick}
          searchPerformed={searchPerformed}
        />
      </main>
      <Footer />
    </>
  );
};

export default Search;
