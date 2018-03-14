import React from 'react';

class TopicsFormList extends React.Component {
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteTagging(parseInt(e.target.id), this.props.question.id);
  }

  render() {
    const topicsArray = this.props.question.topicIds;
    const TopicItemMap = topicsArray.map((topic) => {
      return (
        <div key={topic} className="all-item-tag">
          <button className="tag-delete"
            onClick={this.handleDelete} id={topic}>X</button>
          <h5 className="topic-tags">{this.props.topics[topic].tag}</h5>
        </div>
      );
    });
    return (
      <div className="topics-form-list">
        {TopicItemMap}
      </div>
    );
  }
}

export default TopicsFormList;
