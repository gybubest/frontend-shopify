import React from 'react';
import { debounce } from 'lodash';
import styled from 'styled-components'
import search from '../icons/icon-search.svg';

function SearchBar({handleSearch}) {

  const debounced = debounce(eventData => handleSearch(eventData), 1000);

  return (
    <Wrapper>
      <SearchBox>
        <label htmlFor="name">Movie Title</label>
        <InputBox>
          <img className="search-img" src={search}></img>
          <input className="search-input" type="text" onChange={e => debounced(e.target.value)}></input>
        </InputBox>
      </SearchBox>
    </Wrapper>
  );
}

export default SearchBar;

const Wrapper = styled.div`
  padding: 2%;
  background-color: #f5f5f7;
  color: #1d1d1f;
  border-radius: 3px;
`;

const SearchBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 10vh;
  font-size: 3vh;

`;

const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: 10vh;
  font-size: 3vh;
  border: solid;
  border-color: #C0C0C0;
  border-width: thin;
  border-radius: 3px;
  margin-top: 1vh;

  .search-img {
    padding: 1%;
    height: 3vh;
    width: 3vw;
  }
  .search-input {
    background-color: #f5f5f7;
    color: #1d1d1f;
    width: 94%;
    height: 5vh;
    font-size: 3vh;
    outline: none;
    border: none;
    border: none;
  }
`;
