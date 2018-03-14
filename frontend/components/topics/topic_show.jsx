import React from 'react';
import QuestionItem from '../questions/question_item';

class TopicShow extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchQuestions();
  }

  render() {
    const QuestionItems = this.props.questions.map((question, idx) => {
      const user = this.props.users[question.user_id];
      const currentUser = this.props.users[this.props.currentUserId];
      const answer = this.props.answers[question.id];
      return (<QuestionItem key={idx}
        question={question}
        user={user}
        answer={answer}
        currentUser={currentUser}
        currentUserQuestion={this.props.currentUserId === user.id}
        openModal={this.props.openModal}
        openDropDownForm={this.props.openDropDownForm}
        dropDownId={this.props.dropDownId}/>
        );
    });
    return (
      <div className="topic-show-page">
        <h3 className="topic-title-show">{this.props.topic.tag}</h3>
        <ul>
          {QuestionItems}
        </ul>
      </div>
    );
  }

}

export default TopicShow;
