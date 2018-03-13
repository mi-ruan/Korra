import {connect} from 'react-redux';
import TopicsList from './topics_list';
import {createTopic} from '../../actions/topic_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    question: ownProps.question,
    topics: state.entities.topics,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createTopic: (topic) => dispatch(createTopic(topic))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicsList);
