import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://ih-beers-api2.herokuapp.com/beers',
});

export const getAllBeers = () => {
  return instance.get('/').then((beers) => {
    return beers.data;
  });
};

export const getBeer = (id) => {
  return instance.get(`/${id}`).then((beer) => {
    return beer.data;
  });
};

export const randomBeer = () => {
  return instance.get('/random').then((res) => {
    return res.data;
  });
};

export const createBeer = (beer) => {
  return instance.post('new', beer).then((res) => {
    return res;
  });
};

export const searchBeers = (value) => {
  return instance.get(`/search?q=${value}`).then((res) => {
    return res.data;
  });
};
