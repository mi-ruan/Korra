import React from 'react';
import {Link} from 'react-router-dom';
import {deleteTagging} from '../../util/tagging_api_utils';

class TopicsFormList extends React.Component {
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    deleteTagging(e.target.id, this.props.question.id);

  }

  render() {
    const topicsArray = this.props.question.topicIds;
    const TopicItemMap = topicsArray.map((id) => {
      return (
        <div key={id} className="all-item-tag">
        <button className="tag-delete"
          onClick={this.handleDelete} id={id}
        >X</button>
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
