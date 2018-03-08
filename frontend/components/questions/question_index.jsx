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
        currentUserQuestion={this.props.currentUserId === user.id}/>);
    });
    return(
      <div className="main-questions">
        <div className="question-create">
          <h5 className="main-current-user">
            {this.props.users[this.props.session].username}</h5>
          <QuestionCreateContainer />
        </div>
        <ul>
          {QuestionItems}
        </ul>
      </div>
    );
  }

}

export default QuestionIndex;
