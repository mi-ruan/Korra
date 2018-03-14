import {connect} from 'react-redux';
import TopicsForm from './topics_form';
import {createTopic} from '../../actions/topic_actions';
import {closeModal} from '../../actions/modal_actions';
import {fetchQuestion} from '../../actions/question_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    question: state.entities.questions[ownProps.question.id],
    topics: state.entities.topics,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchQuestion: (id) => dispatch(fetchQuestion(id)),
    createTopic: (topic, questionId) => dispatch(createTopic(topic, questionId)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicsForm);
