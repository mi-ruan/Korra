import React from 'react';
import {withRouter} from 'react-router-dom';
import ReactQuill from 'react-quill';

class AnswerForm extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.answer;
    this.renderButtons = this.renderButtons.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateBody = this.updateBody.bind(this);
  }

  renderButtons() {
    if(this.props.formType === "createForm") {
      return <button className="add-answer-button-create">Submit</button>;
    } else if(this.props.formType === "updateForm"){
      return <button className="add-answer-button-update">Save Changes</button>;
    }
  }

  updateBody(value){
    this.setState({"body": value});
  }

  handleSubmit(e){
    e.preventDefault();
    if(this.props.formType === "createForm"){
      this.props.submitAction(this.state, this.state.question_id)
      .then(() => this.props.fetchQuestions())
      .then(this.props.closeDropDownForm);
    } else{
      this.props.submitAction(this.state).then(this.props.closeDropDownForm);
    }
  }

  render(){
    return(
      <div>
        <form className="answer-form" onSubmit={this.handleSubmit}>
          <ReactQuill  className="answer-form-text"
          onChange={this.updateBody}
          value={this.state.body}
          placeholder="Write your answer"></ReactQuill>
          <div onClick={this.props.closeDropDownForm} className="closeX">X</div>
          {this.renderButtons()}
        </form>
      </div>
    );
  }
}


export default withRouter(AnswerForm);
