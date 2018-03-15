import {connect} from 'react-redux';
import TopicShow from './topic_show';
import {getAnswersByQuestionId, getQuestionsByTopic} from '../../reducers/selectors';
import {fetchQuestions, updateQuestion, deleteQuestion} from '../../actions/question_actions';
import {fetchTopic} from '../../actions/topic_actions';
import {openModal} from '../../actions/modal_actions';
import {openDropDownForm} from '../../actions/drop_down_form_actions';

const mapStateToProps = (state, ownProps) => {
  const topic = state.entities.topics[ownProps.match.params.topicId];
  const questions = getQuestionsByTopic(state, topic.id);
  return {
    topic,
    topics: Object.values(state.entities.topics),
    questions,
    answers: getAnswersByQuestionId(state),
    users: Object.assign({}, state.entities.users),
    currentUserId: state.session.id,
    dropDownId: state.ui.dropDownForm.id || null,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTopic: (id) => dispatch(fetchTopic(id)),
    fetchQuestions: () => dispatch(fetchQuestions()),
    updateQuestion: (question) => dispatch(updateQuestion(question)),
    deleteQuestion: (id) => dispatch(deleteQuestion(id)),
    openModal: (modal, id) => dispatch(openModal(modal, id)),
    openDropDownForm: (dropDown, id) => dispatch(openDropDownForm(dropDown, id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicShow);
