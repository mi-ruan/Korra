import React from 'react';
import TopicsFormList from './topics_form_list';

class TopicForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      newTopic: '',
    };
    this.updateTopic = this.updateTopic.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleKeyPress(e){
    if(e.key === "Enter"){
      this.props.createTopic(this.state.newTopic, this.props.question.id);
      this.setState({newTopic: ''});
      this.props.fetchQuestion(this.props.question.id);
      e.preventDefault();
    }
  }

  updateTopic(e) {
    this.setState({newTopic: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.closeModal();
  }

  render() {
    return(
      <div className="modal-container">
        <form className="submit-new-topic">
          <input type="text"
            className="submit-topic-text"
            onKeyPress={this.handleKeyPress}
            onChange={this.updateTopic}
            value={this.state.newTopic}
            placeholder={`Select Topic`} />
          <TopicsFormList question={this.props.question} topics={this.props.topics} />
          <button className="add-question-button-create" onClick={this.handleSubmit}>Done</button>
        </form>
      </div>
    );
  }
}

export default TopicForm;