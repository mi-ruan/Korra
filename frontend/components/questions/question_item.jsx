import React from 'react';
import {Link} from 'react-router-dom';

const QuestionItem = ({question, user, session, location}) => {

  addEditForm(){
    if(user.id === session) {
      return(<button>EditForm</input>)
    }
  }

  return(
    <div className="main-question-form">
      <Link to={`/questions/${question.id}`} className="question-title">{question.title}</Link>
      <h6 className="question-author">Author's Username: {user.username}</h6>

    </div>
  );
};

export default QuestionItem;
