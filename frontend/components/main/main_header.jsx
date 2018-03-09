import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {openModal} from '../../actions/modal_actions';

const mainHeader = ({logout}) => {
  return (
    <header className="nav-bar">
      <nav className="full-nav">
        <nav className ="left-nav">
          <Link to="/" className="title" >Korra</Link>
          <NavLink exact to="/"
            activeClassName="selected"
            className="tabs-home fas fa-newspaper ">Home</NavLink>
        </nav>
        <nav className="right-nav">
          <input type="text" className="question-search"
            placeholder={`\uD83D\uDD0D Search Quora`}></input>
          <button className="logout-button" onClick={() => logout()}>Log Out</button>
          <button className="add-question-button-nav"
          onClick={() => dispatch(openModal('createForm'))}>Add Question</button>
        </nav>
      </nav>
    </header>
  );
};

export default mainHeader;
