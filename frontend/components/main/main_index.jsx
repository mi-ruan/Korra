import React from 'react';
import {Redirect} from 'react-router-dom'


const MainIndex = ({user, logout}) => {
  if(user){
    return (
      <div>
        <h3>Welcome! {user.username}</h3>
        <button onClick={() => logout()}>Logout</button>
      </div>
    )
  } 

};

export default MainIndex;
