import {connect} from 'react-redux';
import QuestionCreate from './question_create';
import {createQuestion} from '../../actions/question_actions';
import {closeModal} from '../../actions/modal_actions';

const mapStateToProps = state => {
  return {
    question: {
      title: "",
      user_id: state.session,
    }
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createQuestion: (question) => dispatch(createQuestion(question)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionCreate);
