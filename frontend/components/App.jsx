import React from 'react';
import MainContainer from './main/main_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/sign_up_form_container';
import {Route} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1>Korra</h1>
      <MainContainer />
    </div>
  );
};

export default App;
