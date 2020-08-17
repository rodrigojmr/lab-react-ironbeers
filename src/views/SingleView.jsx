import React, { Component } from 'react';
import Header from '../components/Header';
import SingleBeer from '../components/SingleBeer';
import { getBeer } from '../services/beers';

class RandomView extends Component {
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
    const id = this.props.match.params.id;
    getBeer(id)
      .then((beer) => {
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
      </div>
    );
  }
}

export default RandomView;
