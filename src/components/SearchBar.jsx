import React from 'react';
import { debounce } from 'lodash';
import search from '../icons/icon-search.svg';

function SearchBar({handleSearch}) {

  const debounced = debounce(eventData => handleSearch(eventData), 1000);

  return (
    <div className="SearchBar">
      <label htmlFor="name">Movie Title</label>
      {/* <img src={search}></img> */}
      <input type="text" onChange={e => debounced(e.target.value)}></input>
    </div>
  );
}

export default SearchBar;
