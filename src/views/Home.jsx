import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <section>
          <div className="img-wrapper">
            <img src="/images/bar.jpg" alt="" />
          </div>
          <div className="description-wrapper">
            <Link to="/beers" className="title">
              <h1>All Beers</h1>
            </Link>
            <div className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              repudiandae corrupti explicabo tempora earum enim repellat sed eos
              ipsam, totam deserunt minima voluptatum esse! Quia quod ut
              eligendi tenetur consequuntur.
            </div>
          </div>
        </section>
        <section>
          <div className="img-wrapper">
            <img src="/images/beer.jpg" alt="" />
          </div>
          <div className="description-wrapper">
            <Link to="/random-beer" className="title">
              <h1>Random Beer</h1>
            </Link>
            <div className="description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
              incidunt quia consectetur necessitatibus nihil eius velit laborum,
              rerum sunt deleniti!
            </div>
          </div>
        </section>
        <section>
          <div className="img-wrapper">
            <img src="/images/random-beer.jpg" alt="" />
          </div>
          <div className="description-wrapper">
            <Link to="/new-beer" className="title">
              <h1>New Beer</h1>
            </Link>
            <div className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
              consequatur sequi iste dolores molestiae in ullam tempore ab
              veritatis at autem odio sit possimus eum?
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
