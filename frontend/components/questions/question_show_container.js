import {connect} from 'react-redux';
import QuestionShow from './question_show';
import {getSelectedUser} from '../../reducers/selectors';
import {fetchQuestion, updateQuestion, deleteQuestion} from '../../actions/question_actions';

const mapStateToProps = (state, ownProps) => {
  const question = state.entities.questions[ownProps.match.params.questionId];
  const userId = question && question.user_id;
  const user = getSelectedUser(state, userId);
  return {
    question,
    user,
    currentUserId: state.session.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchQuestion: (id) => dispatch(fetchQuestion(id)),
    updateQuestion: (question) => dispatch(updateQuestion(question)),
    deleteQuestion: (id) => dispatch(deleteQuestion(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionShow);
