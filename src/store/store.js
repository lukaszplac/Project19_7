import {createStore, applyMiddleware} from 'redux';
import {reducers} from './reducers.js';
import DevTools from '../DevTools';

export const store = createStore(reducers, DevTools.instrument());

