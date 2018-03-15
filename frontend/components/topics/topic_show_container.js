import {connect} from 'react-redux';
import TopicShow from './topic_show';
import {getAnswersByQuestionId, getQuestionsByTopic} from '../../reducers/selectors';
import {fetchQuestions, updateQuestion, deleteQuestion} from '../../actions/question_actions';
import {fetchTopic, fetchTopics} from '../../actions/topic_actions';
import {openModal} from '../../actions/modal_actions';
import {openDropDownForm} from '../../actions/drop_down_form_actions';

const mapStateToProps = (state, ownProps) => {
  const topic = state.entities.topics[ownProps.match.params.topicId];
  let questions = [];
  if (topic) {
    questions = getQuestionsByTopic(state, topic.id);
  }
  return {
    topic,
    topics: Object.values(state.entities.topics),
    questions,
    answers: getAnswersByQuestionId(state),
    users: Object.assign({}, state.entities.users),
    currentUserId: state.session.id,
    dropDownQuestionId: state.ui.dropDownForm.questionId || null,
    dropDownAnswerId: state.ui.dropDownForm.answerId || null,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTopic: (id) => dispatch(fetchTopic(id)),
    fetchTopics: () => dispatch(fetchTopics()),
    fetchQuestions: () => dispatch(fetchQuestions()),
    updateQuestion: (question) => dispatch(updateQuestion(question)),
    deleteQuestion: (id) => dispatch(deleteQuestion(id)),
    openModal: (modal, id) => dispatch(openModal(modal, id)),
    openDropDownForm: (dropDown, Qid, Aid) => dispatch(openDropDownForm(dropDown, Qid, Aid)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicShow);
