import React, { Component } from 'react';
import { getAllBeers, searchBeers } from '../services/beers';
import './ListOfBeers.css';

import { Link } from 'react-router-dom';
import SearchInput from './SearchInput';

class ListOfBeers extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      beers: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    getAllBeers()
      .then((beers) => {
        console.log('beers: ', beers);
        this.setState({
          loaded: true,
          beers,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  search = (event) => {
    const value = event.target.value;
    searchBeers(value)
      .then((beers) => {
        this.setState({
          loaded: true,
          beers,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="beers-list">
        <SearchInput search={this.search} />
        {this.state.loaded && (
          <>
            {this.state.beers.map((beer) => {
              return (
                <Link key={beer._id} to={`/beer/${beer._id}`}>
                  <div className="beer">
                    <div className="beer__img-wrapper">
                      <img
                        src={beer.image_url}
                        alt={beer.name}
                        className="beer__img"
                      />
                    </div>
                    <div className="beer__info">
                      <h3>{beer.name}</h3>
                      <p>{beer.tagline}</p>
                      <p>{beer.contributed_by}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </>
        )}
      </div>
    );
  }
}

export default ListOfBeers;
