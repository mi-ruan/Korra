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
      return (<QuestionItem key={idx} question={question}/>);
    })
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
