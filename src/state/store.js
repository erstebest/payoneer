import { combineReducers, createStore } from 'redux';
import forecast from './reducers/forecast';

const store = createStore(combineReducers({ forecast }));

store.subscribe(() => console.log(store.getState()));

export default store;
