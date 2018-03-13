import React from 'react';


class QuestionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.question;
    this.updateTitle = this.updateTitle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderButtons = this.renderButtons.bind(this);
  }

  updateTitle(e){
    this.setState({"title": e.target.value});
  }

  renderButtons(){
    if(this.props.formType === "createForm"){
      return <button className="add-question-button-create">Add Question</button>;
    } else if(this.props.formType === "updateForm"){
      return (
        <span className="update-buttons">
          <h4 onClick={this.props.closeModal} className="cancel-button">Cancel</h4>
          <button className="add-question-button-create">Update </button>
        </span>
      );
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.submitAction(this.state).then(this.props.closeModal);
  }

  render() {
    return (
      <div className="modal-container">
        <form onSubmit={this.handleSubmit} className="question-create-form-modal">
          <textarea className="question-create-form"
            placeholder="Start your question with 'What', 'How' and 'Why', etc."
            onChange={this.updateTitle} value={this.state.title} />
          <div onClick={this.props.closeModal} className="closeX">X</div>
          {this.renderButtons()}
        </form>
      </div>
    );
  }
}

export default QuestionForm;
