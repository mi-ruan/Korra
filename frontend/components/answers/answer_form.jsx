import React from 'react';
import {withRouter} from 'react-router-dom';

class AnswerForm extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.answer
    this.renderButtons = this.renderButtons.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateBody = this.updateBody.bind(this);
  }

  renderButtons() {
    if(this.props.formType === "createForm") {
      return <button className="add-answer-button-create">Submit</button>;
    }
  }

  updateBody(e){
    this.setState({"body": e.target.value})
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createAnswer(this.state, this.state.question_id).
    then(this.props.closeDropDownForm);
  }

  render(){
    return(
      <div>
        <form className="answer-form" onSubmit={this.handleSubmit}>
          <textarea className="answer-form-text"
          onChange={this.updateBody}
          value={this.state.body}
          placeholder="Write your answer" />
          <div onClick={this.props.closeDropDownForm} className="closeX">X</div>
          {this.renderButtons()}
        </form>
      </div>
    );
  }
}


export default withRouter(AnswerForm);
