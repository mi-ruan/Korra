import React from 'react';
import {Link} from 'react-router-dom';

class TopicsList extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    //this.props.fetchTopics();
  }

  render() {
    const topicsArray = this.props.question.topicIds;

    const TopicItemMap = topicsArray.map((id) => {
      return (
        <div key={id} className="all-item-tag">
          <Link to={`/topics/${id}`}
          className="topic-tags"
          >{this.props.topics[id].tag}</Link>
        </div>
      );
    });
    return (
      <div className="topics-form">
        {TopicItemMap}
      </div>
    );
  }
}

export default TopicsList;
