import React from 'react';
import QuestionItem from './question_item';
import AboutMe from '../main/about_me';

class QuestionShow extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.fetchQuestion(this.props.match.params.questionId);
  }

  render() {
    if (this.props.question === undefined) {
      return <div></div>;
    }
    const {question, user, topics, currentUserId,
      fetchQuestion, updateQuestion, deleteQuestion,
      openModal, openDropDownForm, dropDownQuestionId, dropDownAnswerId} = this.props;

    return(
      <div className="question-show-form">
        <QuestionItem
          question={question}
          user={user}
          currentUserQuestion= {currentUserId === user.id}
          fetchQuestion = {fetchQuestion}
          updateQuestion = {updateQuestion}
          deleteQuestion = {deleteQuestion}
          openModal = {openModal}
          openDropDownForm = {openDropDownForm}
          dropDownQuestionId = {dropDownQuestionId}
          dropDownAnswerId = {dropDownAnswerId}
          topics={topics}
          />
        <div className="about-me-holder-show">
          <AboutMe />
        </div>
      </div>
    );
  }
}

export default QuestionShow;
