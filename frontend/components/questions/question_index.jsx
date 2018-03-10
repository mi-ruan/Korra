import React from 'react';
import QuestionItem from './question_item';
import QuestionCreateContainer from './question_create_container';


class QuestionIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
   this.props.fetchQuestions();
  }

  render() {
    const QuestionItems = this.props.questions.map((question, idx) => {
      const user = this.props.users[question.user_id];
      return (<QuestionItem key={idx}
        question={question}
        user={user}
        currentUserQuestion={this.props.currentUserId === user.id}
        openModal={this.props.openModal}
        openDropDownForm={this.props.openDropDownForm}
        dropDownId={this.props.dropDownId}/>

        );
    });
    return(
      <div className="main-questions">
        <div className="question-create">
          <h5 className="main-current-user">
            {this.props.users[this.props.currentUserId].username}</h5>
          <form>
            <textarea className="question-create-form"
              placeholder="What is your question?"
              onClick={() => this.props.openModal('createForm')}
              value="" />
          </form>
        </div>
        <ul>
          {QuestionItems}
        </ul>
      </div>
    );
  }

}

export default QuestionIndex;
