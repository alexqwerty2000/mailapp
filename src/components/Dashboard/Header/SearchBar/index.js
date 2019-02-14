import React, { Component } from 'react';
import './searchbar.scss'

class SearchBar extends Component {
  state = {
    searchInput: '',
  }

  chgSearch = (event) => {
    // console.log(chgSearch)
    this.setState({
      SearchInput: event.target.value
    })
  }
  render() {
    return (
      <div className='search'>
          <input type="text" 
          className="search-bar" 
          value={this.state.searchInput}
          onChange={this.chgSearch}/>
          <button>Search</button>
      </div>
    );
  }
}

export default SearchBar;