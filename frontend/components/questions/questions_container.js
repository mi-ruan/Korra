import {connect} from 'react-redux';
import QuestionIndex from './question_index';
import {fetchQuestions} from '../../actions/question_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
  return {
    users: Object.assign({}, state.entities.users),
    questions: Object.values(state.entities.questions),
    currentUserId: state.session.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchQuestions: () => dispatch(fetchQuestions()),
    openModal: (modal, id) => dispatch(openModal(modal, id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionIndex);
