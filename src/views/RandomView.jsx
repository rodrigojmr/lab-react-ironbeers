import React, { Component } from 'react';
import Header from '../components/Header';
import SingleBeer from '../components/SingleBeer';
import { randomBeer } from '../services/beers';

class SingleView extends Component {
  constructor() {
    super();
    this.state = {
      beer: null,
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    randomBeer()
      .then((beer) => {
        console.log(beer);
        this.setState({
          beer,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Header />
        <SingleBeer beer={this.state.beer} />
        <a onClick={this.getData}>Roll Again</a>
      </div>
    );
  }
}

export default SingleView;
