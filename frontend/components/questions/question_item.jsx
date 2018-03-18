import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import AnswerFormContainer from '../answers/answer_form_container';
import DropDownForm from '../user_interface/drop_down_form';
import AnswerItemContainer from '../answers/answer_item_container';
import TopicsListContainer from '../topics/topics_list_container';
import Moment from 'react-moment';
import Dropdown, {DropdownTrigger, DropdownContent} from 'react-simple-dropdown';

class QuestionItem extends React.Component {
  constructor(props){
    super(props);
    this.addDeleteButton = this.addDeleteButton.bind(this);
    this.fnDeleteQuestion = this.fnDeleteQuestion.bind(this);
    this.handleDropDown = this.handleDropDown.bind(this);
    this.handleAnswerItems = this.handleAnswerItems.bind(this);
    this.handleTopicItems = this.handleTopicItems.bind(this);
    this.handleAddTopic = this.handleAddTopic.bind(this);
    this.handleEditDeleteDrop = this.handleEditDeleteDrop.bind(this);
    this.isQuestionShow = (this.props.location.pathname ===
      `/questions/${this.props.question.id}`);
  }


  fnDeleteQuestion() {
    this.props.deleteQuestion(this.props.question.id)
      .then(() => this.props.history.push('/'));
  }

  addDeleteButton(){
    if(this.isQuestionShow){
      return (<button className="question-delete"
        onClick={this.fnDeleteQuestion}
        >Delete</button>);
    }
  }

  handleEditDeleteDrop(){
    if (this.props.currentUserQuestion) {
      return (<Dropdown className="edit-delete" ref="dropdown">
        <DropdownTrigger className="edit-delete">...</DropdownTrigger>
        <DropdownContent>
          <button className="question-edit"
            onClick={() => this.props.openModal('updateForm', this.props.question.id)}>
            Edit</button>
          {this.addDeleteButton()}
        </DropdownContent>
      </Dropdown>);
    }
  }


  handleDropDown(){
    if(this.props.dropDownQuestionId === this.props.question.id){
      return <DropDownForm />;
    } else {
      return this.handleAnswerItems();
    }
  }

  handleAnswerItems() {
    if(this.props.question.answerIds.length > 0) {
      if (this.isQuestionShow) {
        const answersArray = this.props.question.answerIds;
        const AnswerItemMap = answersArray.map((answer) => {
          return <AnswerItemContainer key={answer} answerId={answer} />;
        });
        return AnswerItemMap;
      } else {
        return (<AnswerItemContainer
        answerId={this.props.question.answerIds[this.props.question.answerIds.length - 1]} />);
      }
    }
  }


  handleTopicItems() {
    return <TopicsListContainer question={this.props.question} />;
  }

  handleAddTopic() {
    if(this.isQuestionShow){
      return (
        <div className="add-topics">
            <button className="fas fa-pencil-alt"
              onClick={() => this.props.openModal('topicsForm', this.props.question.id)}>Add Topics</button>
        </div>
      );
    }
  }

  render() {
    return(
      <div className="main-question-form">
        <span className="topics-list">
          {this.handleTopicItems()}
          {this.handleAddTopic()}
        </span>
        <Link to={`/questions/${this.props.question.id}`}
          className="question-title">{this.props.question.title}</Link>
        <h6 className="author-name">
        Author's Username: {this.props.user.username}</h6>
      <div className="date-class">
        <p>Updated: </p>
      <Moment fromNow>{this.props.question.updated_at}</Moment>
      </div>
        <span className="create-form-footer">
          <div className="answer-button"
            onClick={() => this.props.openDropDownForm('answerForm', this.props.question.id, null)}>
            <button className="fas fa-pencil-alt">Answer</button>
          </div>
          {this.handleEditDeleteDrop()}
        </span>
        <div className="drop-down">{this.handleDropDown()}</div>
      </div>
    );
  }
}

export default withRouter(QuestionItem);
