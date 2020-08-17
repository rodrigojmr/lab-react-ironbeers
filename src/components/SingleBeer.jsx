import React, { Component } from 'react';

import './SingleBeer.css';

const SingleBeer = (props) => {
  return (
    <div className="single-beer">
      {props.beer && (
        <>
          <div className="single-beer__img-wrapper">
            <img
              src={props.beer.image_url}
              alt=""
              className="single-beer__img"
            />
          </div>
          <div className="single-beer__info">
            <div>
              <h1 className="single-beer__name">{props.beer.name}</h1>
              <p className="single-beer__attenuation">
                {props.beer.attenuation_level}
              </p>
            </div>
            <div>
              <p className="single-beer__tagline">{props.beer.tagline}</p>
              <p className="single-beer__brewed">{props.beer.first_brewed}</p>
            </div>
            <p className="single-beer__description">{props.beer.description}</p>
            <p className="single-beer__contributed-by">
              {props.beer.contributed_by}
            </p>
          </div>
        </>
      )}
    </div>
  );
};
export default SingleBeer;
