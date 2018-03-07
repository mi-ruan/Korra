import React from 'react';
import {Link, NavLink} from 'react-router-dom'


const MainIndex = ({user, logout}) => {
  if(user){
    return (
      <div className="main-page">
        <header className="nav-bar">
          <nav className="full-nav">
            <nav className ="left-nav">
              <Link to="/" className="title" >Korra</Link>
              <NavLink to="/"
                activeClassName="selected"
                className="tabs-home fas fa-newspaper ">Home</NavLink>
            </nav>
            <nav className="right-nav">
              <input type="text" className="question-search"
                placeholder={`\uD83D\uDD0D Search Quora`}></input>
              <button className="logout-button" onClick={() => logout()}>Logout</button>
            </nav>
          </nav>
        </header>
        <main className="main-content">
        </main>
      </div>
    )
  }
};
// <NavLink to="/answer" className="tabs-answer" activeClassName="selected" >Answer</NavLink>

export default MainIndex;
