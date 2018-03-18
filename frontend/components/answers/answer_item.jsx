import React from 'react';
import DropDownForm from '../user_interface/drop_down_form';
import {withRouter} from 'react-router-dom';
import Moment from 'react-moment';
import ReactQuill, {Quill, Mixin, Toolbar} from 'react-quill';
import Dropdown, {DropdownTrigger, DropdownContent} from 'react-simple-dropdown';


class AnswerItem extends React.Component {
  constructor(props){
    super(props);
    this.handleDropDown = this.handleDropDown.bind(this);
    this.fnDeleteAnswer = this.fnDeleteAnswer.bind(this);
    this.handleEditDeleteDrop = this.handleEditDeleteDrop.bind(this);
  }


  fnDeleteAnswer() {
    this.props.deleteAnswer(this.props.answer.id)
    .then(()=> this.props.fetchQuestions());
  }


  handleEditDeleteDrop() {
    if (this.props.answer.user_id === this.props.currentUser.id) {
      return (<Dropdown className="edit-delete" ref="dropdown">
        <DropdownTrigger className="edit-delete">...</DropdownTrigger>
        <DropdownContent>
          <button className="answer-edit"
          onClick={() => this.props.openDropDownForm('updateForm',this.props.question.id, this.props.answer.id)}>
          Edit</button>
          <button className="answer-delete"
            onClick={this.fnDeleteAnswer}
            >Delete Answer</button>
        </DropdownContent>
      </Dropdown>);
    }
  }

  handleDropDown(){
    if(this.props.dropDownAnswerId === this.props.answer.id){
      return <DropDownForm />;
    } else {
      return (
        <div>
        <ReactQuill readOnly
        modules={{toolbar: null}}
        value={this.props.answer.body}
        className="answer-p"></ReactQuill>
        <span className="edit-delete-answer">
          {this.handleEditDeleteDrop()}
        </span>
      </div>
      );
    }
  }

  render() {
    const author = this.props.users[this.props.answer.user_id];
    if (!author) {
      return <div></div>;
    }
    return(
      <div className= "answer-item">
        <h6 className="author-name">Author Username: {author.username}</h6>
        <div className="date-class">
          <p>Updated: </p>
        <Moment fromNow>{this.props.answer.updated_at}</Moment>
        </div>
        <div className="drop-down">{this.handleDropDown()}</div>
      </div>
    );
  }
}

export default withRouter(AnswerItem);
