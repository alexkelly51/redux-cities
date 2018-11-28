// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// State and reducers
import citiesReducer from './reducers/cities_reducer'
import SelectedCityReducer from './reducers/selected_city_reducer'

const reducers = combineReducers({
  cities: citiesReducer,
  selectedCity: SelectedCityReducer,
});

const middlewares = applyMiddleware(logger);

ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
