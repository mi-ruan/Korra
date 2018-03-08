import {connect} from 'react-redux';
import QuestionIndex from './question_index';
import {fetchQuestions} from '../../actions/question_actions';

const mapStateToProps = state => {
  return {
    users: Object.assign({}, state.entities.users),
    questions: Object.values(state.entities.questions),
    session: state.session.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchQuestions: () => dispatch(fetchQuestions())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionIndex);
