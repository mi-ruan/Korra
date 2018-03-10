import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import AnswerFormContainer from '../answers/answer_form_container';
import DropDownForm from '../user_interface/drop_down_form';
import AnswerItem from '../answers/answer_item';


class QuestionItem extends React.Component {
  constructor(props){
    super(props);
    this.addEditButton = this.addEditButton.bind(this);
    this.addDeleteButton = this.addDeleteButton.bind(this);
    this.fnDeleteQuestion = this.fnDeleteQuestion.bind(this);
    this.handleDropDown = this.handleDropDown.bind(this);
  }

  addEditButton(){
    if(this.props.currentUserQuestion) {
      return(<button className="question-edit"
      onClick={() => this.props.openModal('updateForm', this.props.question.id)}>
      Edit</button>);
    }
  }

  fnDeleteQuestion() {
    this.props.deleteQuestion(this.props.question.id)
      .then(() => this.props.history.push('/'));
  }

  addDeleteButton(){
    const isQuestionShow =
    (this.props.location.pathname ===
      `/questions/${this.props.question.id}`);
    if(this.props.currentUserQuestion &&
      isQuestionShow){
      return (<button className="question-delete"
        onClick={this.fnDeleteQuestion}
        >Delete</button>);
    }
  }

  handleDropDown(){
    if(this.props.dropDownId === this.props.question.id){
      return <DropDownForm />;
    }
  }


  render() {
    return(
      <div className="main-question-form">
        <Link to={`/questions/${this.props.question.id}`}
          className="question-title">{this.props.question.title}</Link>
        <h6 className="author-name">Author's Username: {this.props.user.username}</h6>
        <span className="create-form-footer">
          <div className="answer-button"
            onClick={() => this.props.openDropDownForm('answerForm', this.props.question.id)}>
            <button className="fas fa-pencil-alt">Answer</button>
          </div>
          <span className="edit-delete">
            {this.addEditButton()}
            {this.addDeleteButton()}
          </span>
        </span>
        <div className="drop-down">{this.handleDropDown()}</div>
        <AnswerItem key='answer-item-key' user={this.props.currentUser}
        users={this.props.users}
        answer={this.props.question.answer || {}} />
      </div>
    );
  }
}

export default withRouter(QuestionItem);
