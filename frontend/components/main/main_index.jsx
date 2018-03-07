import React from 'react';
import {Redirect} from 'react-router-dom'


const MainIndex = ({user, logout}) => {
  if(user){
    return (
      <div>
        <nav className="header">
          <h1>Korra</h1>
          <h3>Welcome! {user.username}</h3>
          <button onClick={() => logout()}>Logout</button>
        </nav>
      </div>
    )
  }

};

export default MainIndex;
