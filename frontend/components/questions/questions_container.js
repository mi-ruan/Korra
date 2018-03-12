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
    currentUserId: state.session.id,
    dropDownId: state.ui.dropDownForm.id || null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchQuestions: () => dispatch(fetchQuestions()),
    openModal: (modal, id) => dispatch(openModal(modal, id)),
    openDropDownForm: (dropDownForm, id) => dispatch(openDropDownForm(dropDownForm, id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionIndex);
