import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
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
    this.matches = this.matches.bind(this);
    this.addExistingTopic = this.addExistingTopic.bind(this);
  }

  matches() {
    const matches = [];
    if (this.state.newTopic.length === 0) {
      return matches;
    }
    const topicArray = Object.values(this.props.topics);
    for (let i = 0; i < topicArray.length; i++) {
      if (topicArray[i].tag.toLowerCase().includes(this.state.newTopic.toLowerCase())) {
        matches.push(topicArray[i]);
      }
      if (matches.length > 10) break;
    }
    if (matches.length === 0) {
      matches.push({title: 'No Results'});
    }
    return matches;
  }

  addTopics(e){
    e.preventDefault();
    this.props.createTagging(this.state.newTopic, this.props.question.id).then(() => this.setState({newTopic: ''}));
  }

  addExistingTopic(result){
    this.props.createTagging(result.tag, this.props.question.id).then(() => this.setState({newTopic: ''}));
  }

  updateTopic(e) {
    this.setState({newTopic: e.target.value});
  }

  handleClose(e){
    e.preventDefault();
    this.props.closeModal();
  }

  render() {
    let results = this.matches().map((result, i) => {
      if (result.id) {
        return (
          <h5 key={i} className='topic-search-item'
            onClick={() => this.addExistingTopic(result)}>
            {result.tag}
          </h5>
        );
      } else {
        return <li key='result' className='question-search-item-no'>{result.title}</li>;
      }
    });
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
          <ul className="topic-search-list">
            <ReactCSSTransitionGroup
              transitionName='auto'
              transitionEnterTimeout={100}
              transitionLeaveTimeout={100}>
            {results}
            </ReactCSSTransitionGroup>
          </ul>
          <div className="topic-action-container">
          <TopicsFormList
            question={this.props.question}
            topics={this.props.topics}
            deleteTagging={this.props.deleteTagging} />
          <button className="add-question-button-done" onClick={this.handleClose}>Done</button>
          </div>
      </div>
    );
  }
}

export default TopicForm;
