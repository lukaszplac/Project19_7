import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import {store} from './store/store.js';
import * as a from './store/actions.js';


let render = () => ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
store.subscribe(render);

store.dispatch(a.addComment('pierwszy komentarz'));
store.dispatch(a.addComment('drugi komentarz2'));
store.dispatch(a.addComment('drugi komentarz3'));
store.dispatch(a.addComment('drugi komentarz4'));
store.dispatch(a.addComment('drugi komentarz5'));

registerServiceWorker();


