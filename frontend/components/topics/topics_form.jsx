import React from 'react';
import TopicsFormList from './topics_form_list';

class TopicForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      newTopic: '',
    };
    this.updateTopic = this.updateTopic.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.addTopics = this.addTopics.bind(this);
  }



  addTopics(e){
    e.preventDefault();
    this.props.createTagging(this.state.newTopic, this.props.question.id).then(() => this.setState({newTopic: ''}));
  }

  updateTopic(e) {
    this.setState({newTopic: e.target.value});
  }

  handleClose(e){
    e.preventDefault();
    this.props.closeModal();
  }

  render() {
    return(
      <div className="modal-container">
          <form className="submit-new-topic" onSubmit={this.addTopics}>
            <input type="text"
              className="submit-topic-text"
              onChange={this.updateTopic}
              value={this.state.newTopic}
              onSubmit={this.addTopics}
              placeholder={`Select Topic`} />
            <button className="add-question-button-topic">Add Topic</button>
          </form>
          <TopicsFormList
            question={this.props.question}
            topics={this.props.topics}
            deleteTagging={this.props.deleteTagging} />
          <button className="add-question-button-done" onClick={this.handleClose}>Done</button>
      </div>
    );
  }
}

export default TopicForm;
