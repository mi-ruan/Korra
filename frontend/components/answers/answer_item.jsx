import React from 'react';
import {withRouter} from 'react-router-dom';

class AnswerItem extends React.Component {
  constructor(props){
    super(props);
    this.fnDeleteAnswer = this.fnDeleteAnswer.bind(this);
    this.addDeleteButton = this.addDeleteButton.bind(this);
    this.author = this.props.users[this.props.answer.user_id].username;
  }

  addEditButton(){
    if(this.props.currentUser.id === this.props.answer.user_id) {
      return(<button className="answer-edit"
      onClick={() => this.props.openDropDownForm('updateForm', this.props.question)}>
      Edit</button>);
    }
  }

  fnDeleteAnswer() {
    this.props.deleteAnswer(this.props.answer.id)
      .then(() => this.props.history.push('/'));
  }

  addDeleteButton(){
    if(this.props.answer.user_id === this.props.currentUser.id){
      return (<button className="answer-delete"
        onClick={this.fnDeleteAnswer}
        >Delete Answer</button>);
    }
  }

  render() {
    return(
      <div className= "answer-item">
        <h6 className="author-name">
        Author Username: {this.author}</h6>
        <p className="answer-p">{this.props.answer.body}</p>
        <span className="edit-delete-answer">
          {this.addEditButton()}
          {this.addDeleteButton()}
        </span>
      </div>
    )
  }
}

export default withRouter(AnswerItem);
