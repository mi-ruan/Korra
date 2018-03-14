import React from 'react';
import {Link} from 'react-router-dom';

class TopicsFormList extends React.Component {
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {

  }

  render() {
    const topicsArray = this.props.question.topicIds;
    const TopicItemMap = topicsArray.map((id) => {
      return (
        <div key={id} className="all-item-tag">
        <h6 className="tag-delete"
          onClick={this.handleDelete}
        >X</h6>
          <Link to={`/topics/${id}`}
          className="topic-tags"
          >{this.props.topics[id].tag}</Link>
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
