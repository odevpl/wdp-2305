import { combineReducers, createStore } from 'redux';
import initialState from './initialState';
import cartReducer from './cartRedux';
import categoriesReducer from './categoriesRedux';
import productsReducer from './productsRedux';
import promotionsReducer from './promotionsRedux';
import brandsReducer from './brandsRedux';
import promotedReducer from './promotedRedux';
import blogReducer from './blogRedux';

// define reducers
const reducers = {
  cart: cartReducer,
  categories: categoriesReducer,
  products: productsReducer,
  promotions: promotionsReducer,
  brands: brandsReducer,
  promoted: promotedReducer,
  blog: blogReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

// create store
const store = createStore(
  combinedReducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
