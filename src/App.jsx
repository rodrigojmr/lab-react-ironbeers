import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import AllBeers from './views/AllBeers';
import SingleView from './views/SingleView';
import RandomView from './views/RandomView';
import NewBeer from './views/NewBeer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/beers" exact component={AllBeers} />
          <Route path="/random-beer" exact component={RandomView} />
          <Route path="/new-beer" exact component={NewBeer} />
          <Route path="/beer/:id" component={SingleView} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
