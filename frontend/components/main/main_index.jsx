import React from 'react';
import {Link} from 'react-router-dom'


const MainIndex = ({user, logout}) => {
  if(user){
    return (
      <div className="main-page">
        <header className="nav-bar">
          <nav className="full-nav">
            <nav className ="left-nav">
              <Link to="/" className="title" >Korra</Link>
              <Link to="/" className="tabs-home" >Home</Link>
              <Link to="/" className="tabs-answer" >Answer</Link>
            </nav>
            <nav className="right-nav">
              <button onClick={() => logout()}>Logout</button>
            </nav>
          </nav>
        </header>
        <main className="main-content">
        </main>
      </div>
    )
  }

};

export default MainIndex;
