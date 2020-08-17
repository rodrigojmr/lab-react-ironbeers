import React, { Component } from 'react';
import Header from '../components/Header';
import BeerForm from '../components/BeerForm';

class NewBeer extends Component {
  constructor() {
    super();
    this.state = {
      beer: null,
    };
  }

  render() {
    return (
      <div>
        <Header />
        <BeerForm />
      </div>
    );
  }
}

export default NewBeer;
