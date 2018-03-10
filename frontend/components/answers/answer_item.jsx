import React from 'react';
import {withRouter} from 'react-router-dom';

class AnswerItem extends React.Component {
  constructor(props){
    super(props);
  }

  addEditButton(){
    if(this.props.user.id === this.props.answer.user_id) {
      return(<button className="answer-edit"
      onClick={() => this.props.openModal('updateForm', this.props.question.id)}>
      Edit</button>);
    }
  }

  fnDeleteAnswer() {
    this.props.deleteAnswer(this.props.answer.id)
      .then(() => this.props.history.push('/'));
  }

  addDeleteButton(){
    if(this.props.user.id === this.props.answer.user_id){
      return (<button className="answer-delete"
        onClick={this.fnDeleteAnswer}
        >Delete Answer</button>);
    }
  }

  render() {
    return(
      <div className= "answer-item">
        <h6 className="author-name">Author Username: {this.props.answer.user_id}</h6>
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
