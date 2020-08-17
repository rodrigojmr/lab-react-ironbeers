import React, { Component } from 'react';
import './BeerForm.css';
import { createBeer } from '../services/beers';

class BeerForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: 0,
      contributed_by: '',
    };
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    const property = event.target.name;

    this.setState({
      [property]: value,
    });
  };

  handleFormSubmission = (event) => {
    event.preventDefault();
    const {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      contributed_by,
    } = this.state;
    const attenuation_level = Number(this.state.attenuation_level);

    const newBeer = {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      contributed_by,
      attenuation_level,
    };

    createBeer(newBeer)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="new-beer">
        <form method="POST" onSubmit={this.handleFormSubmission}>
          <div className="input-group">
            <label htmlFor="input-name">Name</label>
            <input
              onChange={this.handleInputChange}
              id="input-name"
              type="text"
              name="name"
              value={this.state.name}
            />
          </div>
          <div className="input-group">
            <label htmlFor="input-tagline">Tagline</label>
            <input
              onChange={this.handleInputChange}
              id="input-tagline"
              type="text"
              name="tagline"
              value={this.state.tagline}
            />
          </div>
          <div className="input-group">
            <label htmlFor="input-description">Description</label>
            <textarea
              onChange={this.handleInputChange}
              id="input-description"
              name="description"
              value={this.state.description}
            />
          </div>
          <div className="input-group">
            <label htmlFor="input-brewed">First Brewed</label>
            <input
              onChange={this.handleInputChange}
              id="input-brewed"
              type="text"
              name="first_brewed"
              value={this.state.first_brewed}
            />
          </div>
          <div className="input-group">
            <label htmlFor="input-tips">Brewer Tips</label>
            <input
              onChange={this.handleInputChange}
              id="input-tips"
              type="text"
              name="brewers_tips"
              value={this.state.brewers_tips}
            />
          </div>
          <div className="input-group">
            <label htmlFor="input-attenuation">Attenuation Level</label>
            <input
              onChange={this.handleInputChange}
              id="input-attenuation"
              type="number"
              name="attenuation_level"
              value={this.state.attenuation_level}
            />
          </div>
          <div className="input-group">
            <label htmlFor="input-contributed">Contributed By</label>
            <input
              onChange={this.handleInputChange}
              id="input-contributed"
              type="text"
              name="contributed_by"
              value={this.state.contributed_by}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default BeerForm;
