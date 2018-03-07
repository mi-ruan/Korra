import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';


document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  const currentUser = window.currentUser;
  if (currentUser) {
    const { id, username } = currentUser;
    const preloadedState = {
      session: { id },
      entities: {
        users: { [id]: currentUser }
      },
    };
    store = configureStore(preloadedState);
    window.currentUser = null;
  } else {
    store = configureStore();
  }


  window.getState = store.getState;
  window.dispatch = store.dispatch;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
