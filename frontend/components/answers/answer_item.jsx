import React from 'react';
import DropDownForm from '../user_interface/drop_down_form';
import {withRouter} from 'react-router-dom';
import Moment from 'react-moment';
import ReactQuill, {Quill, Mixin, Toolbar} from 'react-quill';

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
    .then(()=> this.props.fetchQuestions());
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
    const author = this.props.users[this.props.answer.user_id];
    if (!author) {
      return <div></div>;
    }
    // let date = new Date(this.props.answer.updated_at);
    // date = date.toLocaleDateString('en-US', {month: 'short', day: 'numeric'});
    // <h6 className="date-class">Updated: {date}</h6>
    return(
      <div className= "answer-item">
        <h6 className="author-name">Author Username: {author.username}</h6>
        <div className="date-class">
          <p>Updated: </p>
        <Moment fromNow>{this.props.answer.updated_at}</Moment>
        </div>
        <ReactQuill readOnly modules={{toolbar: null}} value={this.props.answer.body} className="answer-p"></ReactQuill>
        <span className="edit-delete-answer">
          {this.addEditButton()}
          {this.addDeleteButton()}
        </span>
        <div className="drop-down">{this.handleDropDown()}</div>
      </div>
    );
  }
}

export default withRouter(AnswerItem);
