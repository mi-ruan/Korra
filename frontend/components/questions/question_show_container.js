import {connect} from 'react-redux';
import QuestionShow from './question_show';
import {getSelectedUser} from '../../reducers/selectors';
import {fetchQuestion, updateQuestion, deleteQuestion} from '../../actions/question_actions';
import {openModal} from '../../actions/modal_actions';
import {openDropDownForm} from '../../actions/drop_down_form_actions';

const mapStateToProps = (state, ownProps) => {
  const question = state.entities.questions[ownProps.match.params.questionId];
  const userId = question && question.user_id;
  const user = getSelectedUser(state, userId);
  return {
    question,
    user,
    topics: state.entities.topics,
    currentUserId: state.session.id,
    dropDownQuestionId: state.ui.dropDownForm.questionId || null,
    dropDownAnswerId: state.ui.dropDownForm.answerId || null,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchQuestion: (id) => dispatch(fetchQuestion(id)),
    updateQuestion: (question) => dispatch(updateQuestion(question)),
    deleteQuestion: (id) => dispatch(deleteQuestion(id)),
    openModal: (modal, id) => dispatch(openModal(modal, id)),
    openDropDownForm: (dropDown, Qid, Aid) => dispatch(openDropDownForm(dropDown, Qid, Aid)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionShow);
