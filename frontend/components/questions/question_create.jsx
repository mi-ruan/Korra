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
    this.props.createQuestion(this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input className="question-create-form" placeholder="What is your question?"
            onChange={this.updateTitle} value={this.state.title} />
        </form>
    </div>
    );
  }
}

export default QuestionCreate;
