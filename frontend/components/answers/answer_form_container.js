import {connect} from 'react-redux';
import ActionForm from './answer_form';
import {createAnswer, updateAnswer, deleteAnswer} from '../../actions/answer_actions';
import {closeDropDownForm} from '../../actions/drop_down_form_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    question: state.entities.users[ownProps.question.id],
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    createAnswer: (answer, questionId) => dispatch(createAnswer(answer, questionId)),
    updateAnswer: (answer) => dispatch(updateAnswer(answer)),
    deleteAnswer: (id) => dispatch(deleteAnswer(id)),
    closeDropDownForm: () => dispatch(closeDropDownForm()),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ActionForm);
