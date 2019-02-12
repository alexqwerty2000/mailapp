import React, { Component } from 'react';

class SearchBar extends Component {

  render() {
    return (
      <>
        <input type="text" className="search-bar"/>
        <button>Search</button>
      </>
    );
  }
}

export default SearchBar;