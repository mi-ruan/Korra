import React from 'react';
import QuestionItem from '../questions/question_item';
import MainTopic from '../main/main_topic';
import AboutMe from '../main/about_me';

class TopicShow extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchTopic(this.props.match.params.topicId);
  }

  render() {
    if (!this.props.topic) {
      return null;
    }
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
        dropDownAnswerId={this.props.dropDownAnswerId}/>
        );
    });
    return (
      <div className="topic-show-page">
        <div className="main-topics">
          <MainTopic topics={this.props.topics} />
        </div>
        <div className="topic-main-content">
          <h3 className="topic-title-show">{this.props.topic.tag}</h3>
          <ul id="topic-list">
            {QuestionItems}
          </ul>
      </div>
        <div className="about-me-holder-topic">
          <AboutMe />
        </div>
      </div>
    );
  }

}

export default TopicShow;
