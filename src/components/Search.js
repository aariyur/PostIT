import React from 'react';
import {MdSearch} from 'react-icons/md';

const Search = ({setSearch}) => {
  return (
    <div className='search'>
      <MdSearch className='search-icons' size='1.3em' />
      <input type="text" placeholder='type to search...' onChange={(event) => setSearch(event.target.value)}></input>
    </div>
  )
}

export default Search