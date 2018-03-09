import {connect} from 'react-redux';
import QuestionForm from './question_form';
import {fetchQuestion, updateQuestion} from '../../actions/question_actions';
import {closeModal} from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    question: state.entities.questions[ownProps.question.id],
    formType: 'updateForm',
  };
};


const mapDispatchToProps = dispatch => {
  return {
    submitAction: (question) => dispatch(updateQuestion(question)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);
