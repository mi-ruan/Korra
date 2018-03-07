
import React from 'react';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './sign_up_form_container';

const sessionFormContainer = () => {

  return (
    <div>
      <LoginFormContainer />
      <SignupFormContainer />
    </div>
  );
};

export default sessionFormContainer;
