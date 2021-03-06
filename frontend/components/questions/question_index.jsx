import React from 'react';
import QuestionItem from './question_item';
import QuestionCreateContainer from './question_create_container';
import MainTopic from '../main/main_topic';
import AboutMe from '../main/about_me';

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
        dropDownQuestionId={this.props.dropDownQuestionId}
        dropDownAnswerId={this.props.downDownAnswerId} />
        );
    });
    return(
      <div className="main-main-content">
      <div className="main-topics">
        <MainTopic topics={this.props.topics} />
      </div>
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
      <div className="about-me-holder">
        <AboutMe />
      </div>
    </div>
    );
  }

}

export default QuestionIndex;
