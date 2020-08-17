import React, { Component } from 'react';
import Header from '../components/Header';
import BeerForm from '../components/BeerForm';
import SearchInput from '../components/SearchInput';

class BeerSearch extends Component {
  render() {
    return (
      <div>
        <Header />
        <SearchInput />
      </div>
    );
  }
}

export default BeerSearch;
