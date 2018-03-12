import {connect} from 'react-redux';
import QuestionSearch from './question_search';
import {fetchQuestions} from '../../actions/question_actions';
import {closeHeaderModal} from '../../actions/header_modal_actions';


const mapStateToProps = state => {
  return({
    questions: Object.values(state.entities.questions)
  });
};

const mapDispatchToProps = dispatch => {
  return({
    fetchQuestions: () => dispatch(fetchQuestions()),
    closeHeaderModal: () => dispatch(closeHeaderModal()),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionSearch);
