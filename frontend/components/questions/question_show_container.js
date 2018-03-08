import {connect} from 'react-redux';
import QuestionShow from './question_show';
import {getselectedUser} from '../../reducers/selectors';
import {fetchQuestion} from '../../actions/question_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    question: state.entities.questions[ownProps.match.params.questionId],
    user: getselectedUser(state.entities, ownProps.match.params.questionId),
    session: state.session.id
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
