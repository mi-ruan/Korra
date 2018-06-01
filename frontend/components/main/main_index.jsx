import React from 'react';
import MainHeader from './main_header';
import QuestionsContainer from '../questions/questions_container';
import QuestionShowContainer from '../questions/question_show_container';
import TopicShowContainer from '../topics/topic_show_container';
import {Route} from 'react-router-dom';
import HeaderModal from '../user_interface/header_modal';


const MainIndex = ({users, currentUser, logout}) => {
  return (
    <div className="main-page">
      <MainHeader currentUser={currentUser} logout={logout}/>
      <main className="main-content">
        <HeaderModal />
        <Route exact path="/" component={QuestionsContainer} />
        <Route exact path ="/questions/:questionId" component={QuestionShowContainer} />
        <Route exact path="/topics/:topicId" component={TopicShowContainer} />
      </main>
    </div>
  );
};


export default MainIndex;
