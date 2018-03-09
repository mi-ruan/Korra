import {connect} from 'react-redux';
import ActionForm from './answer_form';
import {createAnswer, updateAnswer, deleteAnswer} from '../../actions/answer_actions';


const mapStateToProps = (state, ownProps) => {
  debugger
  return ({
    user: state.entities.users[ownProps.match.params.user.id],
    question: state.entities.questions[ownProps.match.params.question.id]
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
