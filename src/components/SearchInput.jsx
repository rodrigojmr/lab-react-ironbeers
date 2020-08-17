import React, { Component } from 'react';
import './SearchInput.css';

class SearchInput extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
    };
  }
  render() {
    return (
      <form className="search-form">
        <label htmlFor="input-search">Search</label>
        <input
          onChange={this.props.search}
          id="input-search"
          name="query"
          type="text"
        />
      </form>
    );
  }
}

export default SearchInput;
