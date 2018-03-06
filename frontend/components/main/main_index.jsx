import React from 'react';
import {Link} from 'react-router-dom';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/sign_up_form_container';


const MainIndex = ({user, logout}) => {
  if(user){
    return (
      <div>
        <h3>Welcome! {user.username}</h3>
        <button onClick={() => logout()}>Logout</button>
      </div>
    )
  } else {
    return (
      <div>
        <LoginFormContainer />
        <SignupFormContainer />
      </div>
    )
  }
}

export default MainIndex;
