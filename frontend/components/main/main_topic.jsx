import React from 'react';
import {Link} from 'react-router-dom';

const MainTopic = (props) => {

  const popularTopics = props.topics.sort((a,b) =>
    b.questionIds.length - a.questionIds.length
  );
  const popularTen = popularTopics.slice(0,10);
  const popularTenLinks = popularTen.map(topic => {
    return (<Link key={topic.id} to={`/topics/${topic.id}`}
      className='popular-topics'>{topic.tag}</Link>
    );
  });
  return(
    <div>
      <h5 className="topic-title">Popular Topics</h5>
      <ul className="popular-topic-list">
        {popularTenLinks}
      </ul>
    </div>
  );

};

export default MainTopic;
