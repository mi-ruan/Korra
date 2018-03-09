import React from 'react';

class QuestionCreate extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.question;
    this.updateTitle = this.updateTitle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateTitle(e){
    this.setState({"title": e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createQuestion(this.state).then(this.props.closeModal);
  }

  render() {
    return (
      <div className="modal-container">
        <form onSubmit={this.handleSubmit} className="question-create-form-modal">
          <input className="question-create-form"
            placeholder="Start your question with 'What', 'How' and 'Why', etc."
            onChange={this.updateTitle} value={this.state.title} />
          <div onClick={this.props.closeModal} className="closeX">X</div>
          <button className="add-question-button-create">Add Question</button>
        </form>
      </div>
    );
  }
}

export default QuestionCreate;
