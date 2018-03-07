import React from 'react';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './sign_up_form_container';

const sessionFormContainer = () => {

  return (
    <div className="session-page">
      <div className="session">
        <h3 className="session-title">Korra</h3>
        <SignupFormContainer />
        <LoginFormContainer />
      </div>
    </div>
  );
};

export default sessionFormContainer;
