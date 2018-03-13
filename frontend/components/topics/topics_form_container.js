import {connect} from 'react-redux';
import TopicsForm from './topics_form';
import {createTopic} from '../../actions/topic_actions';
import {closeModal} from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    question: state.entities.questions[ownProps.question.id],
    topics: Object.values(state.entities.topics),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createTopic: (topic, questionId) => dispatch(createTopic(topic, questionId)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicsForm);
