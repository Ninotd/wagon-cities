// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import {CityReducer} from "./reducers/city_reducer";
import {CitiesReducer} from "./reducers/cities_reducer";


// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// State and reducers
const reducers = combineReducers({
  cities: CitiesReducer,
  selectedCity: CityReducer,

  // do something (see slides)
});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
