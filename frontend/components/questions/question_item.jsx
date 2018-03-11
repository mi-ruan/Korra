import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import AnswerFormContainer from '../answers/answer_form_container';
import DropDownForm from '../user_interface/drop_down_form';
import AnswerItemContainer from '../answers/answer_item_container';


class QuestionItem extends React.Component {
  constructor(props){
    super(props);
    this.addEditButton = this.addEditButton.bind(this);
    this.addDeleteButton = this.addDeleteButton.bind(this);
    this.fnDeleteQuestion = this.fnDeleteQuestion.bind(this);
    this.handleDropDown = this.handleDropDown.bind(this);
    this.handleAnswerItems = this.handleAnswerItems.bind(this);
    this.isQuestionShow = (this.props.location.pathname ===
      `/questions/${this.props.question.id}`);
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
    if(this.props.currentUserQuestion &&
      this.isQuestionShow){
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

  handleAnswerItems() {
    if(this.props.question.answerIds.length > 0) {
      if (this.isQuestionShow) {
        const answersArray = this.props.question.answerIds;
        const AnswerItemMap = answersArray.map((answer) => {
          return <AnswerItemContainer key={answer.id} answer={answer} />;
        });
        return AnswerItemMap;
      } else {
        return (<AnswerItemContainer
        answer={this.props.question.answerIds[this.props.question.answerIds.length - 1]} />);
      }
    }
  };


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
        {this.handleAnswerItems()}
      </div>
    );
  }
}

export default withRouter(QuestionItem);
