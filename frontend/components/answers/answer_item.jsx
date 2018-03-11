import React from 'react';
import DropDownForm from '../user_interface/drop_down_form';
import {withRouter} from 'react-router-dom';


class AnswerItem extends React.Component {
  constructor(props){
    super(props);
    this.addDeleteButton = this.addDeleteButton.bind(this);
    this.handleDropDown = this.handleDropDown.bind(this);
    this.addEditButton = this.addEditButton.bind(this);
    this.fnDeleteAnswer = this.fnDeleteAnswer.bind(this);
  }

  addEditButton(){
    if(this.props.currentUser.id === this.props.answer.user_id) {
      return(<button className="answer-edit"
      onClick={() => this.props.openDropDownForm('updateForm', this.props.answer.id)}>
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

  handleDropDown(){
    if(this.props.dropDownId === this.props.answer.id){
      return <DropDownForm />;
    }
  }

  render() {
    return(
      <div className= "answer-item">
        <p className="answer-p">{this.props.answer.body}</p>
        <span className="edit-delete-answer">
          {this.addEditButton()}
          {this.addDeleteButton()}
        </span>
        <DropDownForm />
      </div>
    )
  }
}

export default withRouter(AnswerItem);
