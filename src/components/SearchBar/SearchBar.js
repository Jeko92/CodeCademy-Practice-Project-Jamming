import React, { useState, useCallback } from "react";
import "./SearchBar.css";
import Logo from "../../assets/logo/jamming-logo.png";
import { FaMagnifyingGlass } from "react-icons/fa6";

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState("");

  const handleTermChange = useCallback((e) => {
    setTerm(e.target.value);
  }, []);

  const search = useCallback(() => {
    onSearch(term);
  }, [onSearch, term]);
  return (
    <div>
      <header className="header">
        <img src={Logo} alt="Jamming logo" className="logo" />

        <div className="search">
          <input
            type="text"
            className="search__input"
            placeholder="Search Artist"
            onChange={handleTermChange}
          />
          <button className="search__button" onClick={search}>
            <FaMagnifyingGlass className="search__icon" /> Search
          </button>
        </div>
      </header>
    </div>
  );
};

export default SearchBar;
