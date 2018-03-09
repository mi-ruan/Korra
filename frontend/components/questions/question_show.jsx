import React from 'react';
import QuestionItem from './question_item';


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
    const {question, user, currentUserId,
      fetchQuestion, updateQuestion, deleteQuestion, openModal} = this.props;
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
          />
      </div>
    );
  }
}

export default QuestionShow;
