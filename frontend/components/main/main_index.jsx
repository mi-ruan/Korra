import React from 'react';
import {Link, NavLink} from 'react-router-dom'
import MainHeader from './main_header';
import QuestionsContainer from '../questions/questions_container';

const MainIndex = ({users, logout}) => {
  return (
    <div className="main-page">
      <MainHeader logout={logout}/>
      <main className="main-content">
        <QuestionsContainer />
      </main>
    </div>
  );
};

// <NavLink to="/answer" className="tabs-answer" activeClassName="selected" >Answer</NavLink>

export default MainIndex;
