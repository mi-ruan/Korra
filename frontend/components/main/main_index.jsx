import React from 'react';
import {Link, NavLink} from 'react-router-dom'
import MainHeader from './main_header';
import QuestionsContainer from '../questions/questions_container';
import QuestionShowContainer from '../questions/question_show_container';
import {Route, Switch} from 'react-router-dom';
import HeaderModal from '../user_interface/header_modal';

const MainIndex = ({users, logout}) => {
  return (
    <div className="main-page">
      <MainHeader logout={logout}/>
      <main className="main-content">
        <HeaderModal />
        <Route exact path="/" component={QuestionsContainer} />
        <Route exact path ="/questions/:questionId" component={QuestionShowContainer} />
      </main>
    </div>
  );
};

// <NavLink to="/answer" className="tabs-answer" activeClassName="selected" >Answer</NavLink>

export default MainIndex;
