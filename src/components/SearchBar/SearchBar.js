import React from 'react'
import styled from 'styled-components'

const SearchBarStyle =  styled.div`
`;

function SearchBar({ data, handleOnChange, value = '' }) {
  return (
    <SearchBarStyle>
      <input name="searchBar" onChange={handleOnChange} value={value} />
    </SearchBarStyle>
  )
}

export default SearchBar
