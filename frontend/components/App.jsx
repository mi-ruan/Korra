import React from 'react';
import MainContainer from './main/main_container';
import SessionFormContainer from './session_form/session_form_container';
import {Route} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';

const App = () => {
  return (
    <div id="App">
      <AuthRoute exact path="/session" component={SessionFormContainer} />
      <ProtectedRoute path="/" component={MainContainer} />
    </div>
  );
};

export default App;
