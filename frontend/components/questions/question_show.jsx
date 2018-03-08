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
    return(
      <div className="question-show-form">
        <QuestionItem question={this.props.question}
          user={this.props.user} session={this.props.session}
          location="question_show"/>
      </div>
    );
  }
}

export default QuestionShow;
