import React from 'react';
import '../../styles/index.css';

const SearchForm = () => {
  return (
    <form className="search-form">
      <input type="text" placeholder="Search..." />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;