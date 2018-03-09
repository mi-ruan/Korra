import {connect} from 'react-redux';
import ActionForm from './answer_form';
import {createAnswer, updateAnswer, deleteAnswer} from '../../actions/answer_actions';
import {closeModal} from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    question: state.entities.users[ownProps.question.id],
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    createAnswer: (answer, questionId) => dispatch(createAnswer(answer, questionId)),
    updateAnswer: (answer) => dispatch(updateAnswer(answer)),
    deleteAnswer: (id) => dispatch(deleteAnswer(id))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ActionForm);
