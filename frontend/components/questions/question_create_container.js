import {connect} from 'react-redux';
import QuestionForm from './question_form';
import {createQuestion} from '../../actions/question_actions';
import {closeModal} from '../../actions/modal_actions';

const mapStateToProps = state => {
  return {
    question: {
      title: "",
      user_id: state.session.id,
    },
    formType: 'createForm'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submitAction: (question) => dispatch(createQuestion(question)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);
