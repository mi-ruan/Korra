import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class QuestionItem extends React.Component {
  constructor(props){
    super(props);
    this.addEditForm = this.addEditForm.bind(this);
    this.addDeleteButton = this.addDeleteButton.bind(this);
    this.fnDeleteQuestion = this.fnDeleteQuestion.bind(this);
  }

  // this is placeholder for edit form modal
  addEditForm(){
    if(this.props.currentUserQuestion) {
      return(<button className="question-edit">Edit</button>);
    }
  }

  fnDeleteQuestion() {
    this.props.deleteQuestion(this.props.question.id)
      .then(() => this.props.history.push('/'));
  }

  addDeleteButton(){
    const isQuestionShow =
    (this.props.location.pathname
      === `/questions/${this.props.question.id}`);
    if(this.props.currentUserQuestion &&
      isQuestionShow){
      return (<button className="question-delete"
        onClick={this.fnDeleteQuestion}
        >Delete</button>);
    }
  }

  render() {
    return(
      <div className="main-question-form">
        <Link to={`/questions/${this.props.question.id}`}
          className="question-title">{this.props.question.title}</Link>
        <h6 className="question-author">Author's Username: {this.props.user.username}</h6>
        <span className="edit-delete">
          {this.addEditForm()}
          {this.addDeleteButton()}
        </span>
      </div>
    );
  }
}

export default withRouter(QuestionItem);
