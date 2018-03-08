import React from 'react';
import QuestionItem from './question_item';

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
        session={this.props.session}
        location="index"/>);
    });
    return(
      <div className="main-questions">
        <ul>
          {QuestionItems}
        </ul>
      </div>
    );
  }

}

export default QuestionIndex;
