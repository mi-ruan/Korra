import {connect} from 'react-redux';
import QuestionIndex from './question_index';
import {fetchQuestions} from '../../actions/question_actions';
import { openModal } from '../../actions/modal_actions';
import {openDropDownForm} from '../../actions/drop_down_form_actions';
import {getAnswersByQuestionId} from '../../reducers/selectors';

const mapStateToProps = state => {
  return {
    users: Object.assign({}, state.entities.users),
    questions: Object.values(state.entities.questions)
    .sort((a,b) => new Date(b.updated_at) > new Date(a.updated_at)),
    answers: getAnswersByQuestionId(state),
    topics: Object.values(state.entities.topics),
    currentUserId: state.session.id,
    dropDownQuestionId: state.ui.dropDownForm.questionId || null,
    dropDownAnswerId: state.ui.dropDownForm.answerId || null,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchQuestions: () => dispatch(fetchQuestions()),
    openModal: (modal, id) => dispatch(openModal(modal, id)),
    openDropDownForm: (type, questionId, answerId) => dispatch(openDropDownForm(type,questionId, answerId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionIndex);
