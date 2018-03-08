import React from 'react';
import {Link, matchPath} from 'react-router-dom';

class QuestionItem extends React.Component {
  constructor(props){
    super(props);
    this.addEditForm = this.addEditForm.bind(this);
    this.addDeleteButton = this.addDeleteButton.bind(this);
  }

  // this is placeholder for edit form modal
  addEditForm(){
    if(this.props.currentUserQuestion) {
      return(<button className="question-edit">Edit</button>);
    }
  }

  addDeleteButton(){
    const isQuestionShow = matchPath(`/questions/${this.props.question.id}`,{
      path: '/questions/:questionId',
      exact: true,
      strict: false
    });
    if(this.props.currentUserQuestion &&
      isQuestionShow){
      return (<button className="question-delete"
        onClick={()=> this.props.deleteQuestion(this.props.question.id)}
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

export default QuestionItem;
