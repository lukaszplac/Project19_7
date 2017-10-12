import {createStore} from 'redux';
import {reducers} from './reducers.js';

export const store = createStore(reducers);

store.subscribe(() => console.log(store.getState()));
