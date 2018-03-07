import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Korra</h1>, root);
=======
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  if (window.currentUser) {
  const preloadedState = { session: { currentUser: window.currentUser } };
  store = configureStore(preloadedState);
  delete window.currentUser;
} else {
  store = configureStore();
}
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
>>>>>>> a6281fa52fc102f3d932dfe9a2acb10af201e194
});
